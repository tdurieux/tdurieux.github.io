var app = angular.module('NPEFixOutput', ['ngMaterial', 'googlechart']);

function formatClass(clazz) {
    if(clazz == null) {
        return null;
    }
    return clazz.substring(clazz.lastIndexOf('.') + 1);
}

function formatLocation(location) {
    if(location == null) {
        return null;
    }
    return formatClass(location.class) + ":"  + location.line + " [" + location.sourceStart + ", " + location.sourceEnd + "]";
}

function _decisionID(decision) {
    var output = decision.strategy + " ";
    if(decision.value.variableName) {
        output += decision.value.variableName + " ";
    } else if(decision.value.fieldName) {
        output += decision.value.fieldName + " ";
    } else if(decision.value.value) {
        output += decision.value.value + " ";
    } else if(decision.value.class) {
        output += formatClass(decision.value.class) + "(";
        for (var i in decision.value.parameters) {
            output += decision.value.parameters[i].value + ","
        }
        output += ")"
    }
    output += "[" + decision.value.type + ' ';
    output +=  decision.value.value + "] ";
    output += "at " + decision.location.class;
    output += ":" + decision.location.line + " ";
    output += "("+decision.location.sourceEnd + ", ";
    output += decision.location.sourceStart + ")";
    return output;
}

function decisionID(execution) {
    if(execution.decision) {
        var decision = execution.decision;
        return _decisionID(decision)
    } else {
        return execution.strategy;
    }
}

function decisionStrat(execution) {
    if(execution.decision) {
        var decision = execution.decision;
        return decision.strategy;
    } else {
        return execution.strategy;
    }
}

function displayStrat(strat) {
    return strat;
    switch (strat) {
        case "Strat1A":
            return "Replace VAR local";
        case "Strat1B":
            return "Replace VAR global";
        case "Strat2A":
            return "Replace NEW local";
        case "Strat2B":
            return "Replace NEW global";
        case "Strat3":
            return "Skip line";
        case "Strat4 NEW":
            return "Return NEW";
        case "Strat4 VAR":
            return "Return VAR";
        case "Strat4 VOID":
            return "Return VOID";
        case "Strat4 NULL":
            return "Return null";
    }
    return strat;
}

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$http', '$filter', function ($scope, $mdSidenav, $http, $filter) {
    $scope.selectedProject = {};
    $scope.selectedVersion = "";
    $scope.npefixoutput = {};

    $http({
        method: 'GET',
        url: 'data/data.json'
    }).then(function successCallback(response) {
        $scope.projects = response.data;
        $scope.selectProject($scope.projects[0]);
        $http({
            method: 'GET',
            url: 'data/results.json'
        }).then(function successCallback(response) {
            var results = {name: "Results", projects: []};
            for (var project in response.data) {
                var versions = [];
                for(var version in response.data[project]) {
                    versions.push(parseInt(response.data[project][version]));
                }
                results.projects.push({
                    name: project,
                    versions: versions
                });
            }
            $scope.projects.push(results);
        });
    });


    $scope.toggleSidenav = function (id) {
        return $mdSidenav(id).toggle();
    }

    $scope.selectProject = function (project) {
        $scope.selectedProject = project;
        project.versions = project.versions.sort(function (a,b ) {
            return a.date - b.date;
        });
        $scope.selectVersionProject(project.versions[project.versions.length - 1]);
    };

    $scope.isSelectProject = function (project) {
        return $scope.selectedProject == project;
    };

    $scope.selectVersionProject = function (version) {
        $scope.selectedVersion = version;
    };

    $scope.isSelectVersionProject = function (version) {
        return $scope.selectedVersion == version;
    };

    $scope.formatVersion = function (version) {
        return $filter('date')(new Date(version), "dd/MM H:m");
        return new Date(version).toLocaleDateString() + " " + new Date(version).toLocaleTimeString();
    }

}]).directive("npefixTable", function ($compile, $http) {
    function getOutput (project, version) {
        return $http({
            method: 'GET',
            url: 'bugs/' + project.name + '/' + version.date + '.json'
        });
    }

    var stratList = ["Strat1A", "Strat1B", "Strat2A", "Strat2B", "Strat3", "Strat4 NEW", "Strat4 VAR", "Strat4 NULL", "Strat4 VOID"];
    function generateSummary(exec) {
        if(exec.executions == null) {
            return "Error";
        }
        var header = "<table class='summaryTable'><tbody><tr><td style='width: 35px'>Id</td><td class='content'>Seq. Decision</td><td class='content' style='width: 125px'># Exec</td><td  class='content' style='width: 70px'>Result</td></tr>";
        var output = "";
        var executions = exec.executions.sort(function (a, b) {
            if((a.test.class + a.test.name + a.date) < (b.test.class + b.test.name + b.date)) {
                return -1;
            } else if((a.test.class + a.test.name + a.date) > (b.test.class + b.test.name + b.date)) {
                return 1;
            } else {
                return 0;
            }
        });
        var strats = {};
        var idStats = {};
        for(var i = 0; i < executions.length; i++) {
            if(executions[i].decisions) {
                var idStat = "";
                executions[i].decisions.forEach(function (decision) {
                    idStat += _decisionID(decision);
                    if (!strats[_decisionID(decision)]) {
                        strats[_decisionID(decision)] = {};
                    }
                    var test = executions[i].test.class + executions[i].test.name;
                    if (!strats[_decisionID(decision)][test]) {
                        strats[_decisionID(decision)][test] = [];
                    }
                    strats[_decisionID(decision)][test].push(executions[i]);
                });
                if (!idStats[idStat]) {
                    idStats[idStat] = [];
                }
                idStats[idStat].push(executions[i]);
            } else {
                if (!strats[decisionStrat(executions[i])]) {
                    strats[decisionStrat(executions[i])] = {};
                }
                var test = executions[i].test.class + executions[i].test.name;
                if (!strats[decisionStrat(executions[i])][test]) {
                    strats[decisionStrat(executions[i])][test] = [];
                }
                strats[decisionStrat(executions[i])][test].push(executions[i]);
            }

        }
        var countDecision = 0;
        var countSuccess = 0;
        var countTotalExecution = 0;
        var countTotalSuccess = 0;
        for(var i in idStats) {
            if(!idStats.hasOwnProperty(i)) {
                continue;
            }
            var lapses = idStats[i];
            countDecision ++;
            countTotalExecution += lapses.length;
            output += "<tr><td>"+ countDecision +"</td><td><table>";
            var laps = lapses[0];
            laps.decisions.forEach(function (decision) {
                output += "<tr>";
                output += "<td style='width: 150px'>";
                output += displayStrat(decision.strategy);
                output += "</td>";
                output += "<td>";
                output += formatLocation(decision.location);
                output += "</td>";
                output += "</tr>";
            });
            output += "</table></td>";
            output += "<td class='executionCount'>";
            output += lapses.length;
            output += "</td>";
            if(laps.result.success) {
                countTotalSuccess+= lapses.length;
                countSuccess++;
            }
            output += "<td class='content " + (laps.result.success?"success": "fail") + "'>";
            output += (laps.result.success?"OK": "KO");
            output += "</td>";
            output += "</tr>";
        }


        /*for(var i in strats) {
            var strat = strats[i];
            countDecision ++;
            output += "<tr>";

            output += "<td class='content'>";
            output += i;
            output += "</td>";

            var countExecution = 0;
            var countSuccessStrat = 0;
            var success = true;
            for (var test in strat) {
                var tmpSucess = false;
                for (var exec in strat[test]) {
                    countExecution++;
                    tmpSucess = strat[test][exec].result.success || tmpSucess;
                    if(tmpSucess == false && strat[test][exec].test.error.exception) {
                        tmpSucess = strat[test][exec].test.error.exception.indexOf("junit.") != -1
                        if(tmpSucess) {
                            countSuccessStrat ++;
                        }
                    }
                    if(strat[test][exec].result.success) {
                        countSuccessStrat ++;
                        countTotalSuccess++;
                    }
                }
                success = success && tmpSucess;
            }
            countTotalExecution += countExecution;
            output += "<td class='content executionCount'>";
            output += countExecution;
            output += "</td>";
            output += "<td class='content executionCount'>";
            output += Math.round(countSuccessStrat/countExecution * 100) + "%";
            output += "</td>";
            output += "<td class='content " + (success?"success": "fail") + "'>";
            if(success) {
                output += "Ok";
                countSuccess++;
            } else {
                output += "Ko";
            }
            output += "</td>";
            output += "</tr>";
        }*/
        var summaryLine = "<tr class='total'><td></td><td class='content'>Total " + countDecision +" decision seq.</td><td class='content executionCount'>" + countTotalExecution + " Laps <br>" + parseInt(countTotalSuccess/countTotalExecution*100) + "% correct</td><td class='content executionCount'>" + countSuccess + " Ok</td></tr>";
        output = header + summaryLine + output + summaryLine;
        return output + "</tbody></table>";
    }
    function generatePlot($scope, execs) {
        $scope.chartObject = {};
        $scope.chartObject.type = "LineChart";
        $scope.chartObject.displayed = false;
        $scope.name = "test";
        $scope.chartObject.data = {
            "cols": [{
                id: "iteration-id",
                label: "Iteration",
                type: "number"
            }, {
                id: "execution-id",
                label: "Passed Executions",
                type: "number"
            }, {
                id: "used-strategies-id",
                label: "% Used Decision",
                type: "number", format: 'percent'
            }, {
                id: "passed-N-execution-id",
                label: "% Passed executions",
                type: "number", format: 'percent'
            }],
            "rows": []
        };
        $scope.chartObject.options = {
            "colors": ['#0000FF', '#009900', '#CC0000', '#DDD', '#999'],
            "defaultColors": ['#0000FF', '#009900', '#CC0000', '#DD9900'],
            "isStacked": "true",
            "fill": 0,
            "displayExactValues": false,
            "hAxis": {
                "title": "Iteration"
            },
            series: {
                0: {targetAxisIndex: 1},
                1: {targetAxisIndex: 1},
                2: {targetAxisIndex: 1},
                3: {targetAxisIndex: 0}
            },
            vAxes: {
                // Adds titles to each axis.
                0: {title: '# Iteration'},
                1: {format: 'percent'}
            }
        };

        $scope.chartObject.view = {
            columns: [0, 1, 2, 3]
        };

        var usedStrategies = {};
        var countStrategies = 0;
        var countPassedExecution = 0;
        var countBest = 0;
        var countRandom = 0;
        var executions = execs.executions.sort(function (a, b) {
            var startA = a.date;
            if(startA == null) {
                startA = a.startDate;
            }
            var startB = b.date;
            if(startB == null) {
                startB = b.startDate;
            }
            return startA - startB;
        });
        for (var j = 0; j < executions.length; j++) {
            var execution = executions[j];
            var metadata = execution.metadata;
            if(!metadata) {
                metadata = execution.result.metadata;
            }
            if (execution.result.success) {
                countPassedExecution++;
            }
            if(execution.decisions) {
                execution.decisions.forEach(function (item) {
                    if(!usedStrategies[_decisionID(item)]) {
                        countStrategies++;
                        usedStrategies[_decisionID(item)] = 1;
                    } else {
                        usedStrategies[_decisionID(item)] ++;
                    }
                    if(item.decisionType == "random") {
                        countRandom++;
                    } else {
                        countBest++;
                    }
                });
            } else {
                if(!usedStrategies[decisionID(execution)]) {
                    countStrategies++;
                    usedStrategies[decisionID(execution)] = 1;
                } else {
                    usedStrategies[decisionID(execution)] ++;
                }
                if (metadata && metadata.strategy_selection) {
                    if (metadata.strategy_selection == "best") {
                        countBest++;
                    } else {
                        countRandom++;
                    }
                }
            }

            var N = j;
            var countNPreviousExec = 0;
            var countSuccessNPreviousExec = 0;
            for (var i = 0; i <=  j ; i ++) {
                var execution = execs.executions[i];
                if (execution.result.success) {
                    countSuccessNPreviousExec ++;
                }
                countNPreviousExec ++;
            }
            var searchSpaceLength = 10;
            if(execs.searchSpace) {
                searchSpaceLength = execs.searchSpace.length;
            }
            //console.log(usedStrategies, countStrategies, execs.searchSpace, countStrategies/execs.searchSpace, execs.executions.length)
            $scope.chartObject.data.rows.push({
                c: [{
                    v: j + 1,
                    f: "Iteration " + (j + 1)
                }, {
                    v: countPassedExecution / execs.executions.length,
                    f: countPassedExecution +"/"+ execs.executions.length + " " + parseInt(countPassedExecution) + "%"
                }, {
                    v: (countStrategies/searchSpaceLength),
                    f: countStrategies + "/" + searchSpaceLength + " " + parseInt(countStrategies/searchSpaceLength*100)+"%"
                }, {
                    v: (countSuccessNPreviousExec / countNPreviousExec),
                    f: countSuccessNPreviousExec + "/" + countNPreviousExec + " " + parseInt(countSuccessNPreviousExec / countNPreviousExec*100)+"%"
                }]
            });
        }
    }
    function generateTable(exec) {
        var output = "<table class='executionsTable'><tbody>";

        var executions = exec.executions.sort(function (a, b) {
            var startA = a.date;
            if(startA == null) {
                startA = a.startDate;
            }
            var startB = b.date;
            if(startB == null) {
                startB = b.startDate;
            }

            return startA - startB;
        });
        output += "<tr>";
        output += "<th>ID</th>";
        output += "<th>Test</th>";
        output += "<th>Laps</th>";
        output += "<th>Status</th>";
        output += "</tr>";
        var previousTest = null;
        var previousStrategy = null;

        for(var i = 0; i < executions.length; i++) {
            var execution = executions[i];
            output += "<tr>";
            output += "<td>" + (i + 1) + "</td>";
            output += "<td class='testName content'><span class='className'>" + formatClass(execution.test.class) + "</span>#<span class='testName'>" + execution.test.name + "</span></td>";
            output += "<td><table class='testTable'><tr>";
            if(execution.decisions) {
                var decisionsOuput= "<td><table>";
                execution.decisions.forEach(function (decision) {
                    var decisionOuput= "<tr>";

                    decisionOuput += "<td class='strategy content'>" + displayStrat(decision.strategy);

                    var metadata = execution.result.metadata;
                    if(!metadata) {
                        metadata = execution.metadata;
                    }
                    if(metadata) {
                        if(metadata.epsilon) {
                            decisionOuput += "<br> Ep " + metadata.epsilon;
                        }
                    }
                    if(decision.epsilon) {
                        decisionOuput += "<br> EP " + decision.epsilon;
                    }
                    if(decision.decisionType) {
                        decisionOuput += "<br> SS " + decision.decisionType;
                    }
                    decisionOuput += "</td>";
                    decisionOuput += "<td class='location'>" + formatLocation(decision.location) + "</td>";
                    decisionOuput += "<td class='executionCount content'>1" + "</td>";
                    var value = decision.value.variableName;
                    if (value == null) {
                        value = decision.value.fieldName;
                    }
                    if (value == null) {
                        value = formatClass(decision.value.type);
                    }
                    if (value == null) {
                        if (decision.value.class.indexOf("String") != -1) {
                            value = '"' + decision.value.value + '"';
                        } else if (decision.value.class.indexOf("Character") != -1) {
                            value = "'" + decision.value.value + "'";
                        } else {
                            value = decision.value.value;
                        }
                    }
                    if (value == null && decision.value.class) {
                        value = "new " + formatClass(decision.value.class) + "()";
                    }
                    if (value == null) {
                        value = "null";
                    }
                    decisionOuput += "<td class='value content'>" + value + "</td>";
                    decisionOuput += "</tr>";


                    decisionsOuput += decisionOuput;
                });
                decisionsOuput += "</table></td>";
                output += decisionsOuput;
            } else {
                output += "<td class='strategy content'>" + (execution.strategy ? execution.strategy : execution.decision ? execution.decision.strategy : '');

                var metadata = execution.result.metadata;
                if (metadata) {
                    if (metadata.epsilon) {
                        output += "<br> Ep " + metadata.epsilon;
                    }
                    if (metadata.strategy_selection) {
                        output += "<br> SS " + metadata.strategy_selection;
                    }
                }
                output += "</td>"

                output += "<td><table class='strategyTable'><tr>";
                previousTest = "";
                //previousStrategy = (execution.strategy?execution.strategy:execution.decision.strategy);
                output += "<td class='locations'><table class='locationTable'>";
                /*var locations = execution.locations;
                 if(locations == null) {
                 locations = [];
                 }
                 locations = locations.sort(function (a, b) {
                 if(a.class == b.class) {
                 if(a.line == b.line) {
                 if(a.sourceStart == b.sourceStart) {
                 return a.sourceEnd - b.sourceEnd;
                 }
                 return a.sourceStart - b.sourceStart;
                 }
                 return a.line - b.line;
                 }
                 if(a.class < b.class) {
                 return -1;
                 }
                 return 1;
                 });*/
                output += "<tr>";
                if (execution.decision) {
                    var loc = execution.decision.location;
                } else if (execution.locations) {
                    var loc = execution.locations[0];
                }
                if (loc) {
                    output += "<td class='content'>" + formatLocation(loc) + "</td>";
                    output += "<td class='executionCount content'>1" + "</td>";
                    if (execution.decision) {
                        var value = execution.decision.value.variableName;
                        if (value == null) {
                            value = formatClass(execution.decision.value.type);
                        }
                        if (value == null) {
                            value = "null";
                        }
                    } else {
                        var value = exec.values ? loc.values.variable : "";
                        if (value == null) {
                            value = formatClass(loc.values.class);
                        }
                        if (value == null) {
                            value = "null";
                        }
                    }

                    output += "<td class='value content'>" + value + "</td>";
                }
                output += "</tr>";
                output += "</table></td>";
                output += "</tr>";
                output += "</table></td>";
            }

            // close test
            output += "</tr></table></td>";
            output += "<td class='content " + (execution.result.success?"success": "fail") + "'>";
            output += getResult(execution);
            output += "</td>";
            output += "</tr>";
        }
        return output + "</tbody></table>";
    }

    function getResult(execution) {
        if(execution.result.success) {
            return "Ok";
        }
        var fail = "Ko";
        if(!execution.test || !execution.test.error ) {
            return fail;
        }
        var exception = execution.test.error.exception;
        if(execution.test.error instanceof Array) {
            for (var j = 0; j < execution.test.error.length; j++) {
                var error = execution.test.error[j];
                exception = error.exception;
                if (exception) {
                    if (exception.indexOf("NullPointerException") != -1) {
                        fail = "NPE";
                    } else if (exception.indexOf("ReturnNotSupported") != -1) {
                        fail = "RI";
                    } else if (exception.indexOf("ErrorInitClass") != -1) {
                        fail = "NoI";
                    } else if (exception.indexOf("VarNotFound") != -1) {
                        fail = "NoV";
                    } else if (exception.indexOf("AbnormalExecutionError") != -1) {
                        fail = "AE";
                    } else if (exception.indexOf("junit") != -1
                        || exception.indexOf("AssertionError") != -1) {
                        fail = "Assert";
                    } else {
                        console.log(exception);
                    }
                }
            }
        } else if (exception) {
            if (exception.indexOf("NullPointerException")) {
                fail = "NPE";
            } else if (exception.indexOf("ReturnNotSupported") != -1) {
                fail = "RI";
            } else if (exception.indexOf("ErrorInitClass") != -1) {
                fail = "NoI";
            } else if (exception.indexOf("VarNotFound") != -1) {
                fail = "NoV";
            } else if (exception.indexOf("AbnormalExecutionError") != -1) {
                fail = "AE";
            } else if (exception.indexOf("junit") != -1
                || exception.indexOf("AssertionError") != -1) {
                fail = "AsT";
            } else {
                console.log(exception);
            }
        } else {
            console.error(execution.test);
        }
        return fail;
    }

    return {
        restrict: 'E',
        transclude: true,
        scope: {
            project: '=project',
            version: '=version',
            chartObject: '='
        },
        link: function (scope, element, attrs) {
            element.html("");
            scope.$watch("version", function () {
                scope.chartObject = {};
                getOutput(scope.project, scope.version).then(function (response) {
                    var output = "";
                    var data = response.data;
                    if(data instanceof Array) {
                        output += "<h2>Details</h2>";
                        var executions = data[0].executions;
                        output += generatePlot(scope, response.data);
                        for (var i = 1; i < data.length; i++) {
                            data[i].executions.forEach(function (item) {
                                executions.push(item);
                            });
                        }
                        data = data[0];
                    }

                    generatePlot(scope, data);
                    output += generateSummary(data);
                    output += "<h2>Laps</h2>";
                    output += generateTable(data);
                    element.html(output);
                });
            });
        }
    };
}).config(function ($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
        .dark();

});
