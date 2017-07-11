spoonModel = {
    "spoon.reflect.code.CtExecutableReferenceExpression": {
        "interfaces": ["spoon.reflect.code.CtTargetedExpression"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "setExecutable",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtExecutableReference"
                }],
                "return": "spoon.reflect.code.CtExecutableReferenceExpression"
            },
            {
                "name": "getExecutable",
                "return": "spoon.reflect.reference.CtExecutableReference"
            }
        ],
        "name": "CtExecutableReferenceExpression",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtOperatorAssignment": {
        "interfaces": ["spoon.reflect.code.CtAssignment"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getKind",
                "return": "spoon.reflect.code.BinaryOperatorKind"
            },
            {
                "name": "setKind",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.BinaryOperatorKind"
                }],
                "return": "spoon.reflect.code.CtOperatorAssignment"
            }
        ],
        "name": "CtOperatorAssignment",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtPackageReference": {
        "interfaces": ["spoon.reflect.reference.CtReference"],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getActualPackage",
                "return": "java.lang.Package"
            },
            {
                "name": "getDeclaration",
                "return": "spoon.reflect.declaration.CtPackage"
            }
        ],
        "name": "CtPackageReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtStatementList": {
        "interfaces": [
            "spoon.reflect.code.CtCodeElement",
            "java.lang.Iterable"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getStatements",
                "return": "java.util.List"
            },
            {
                "name": "setStatements",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.code.CtStatementList"
            },
            {
                "name": "addStatement",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "spoon.reflect.code.CtStatementList"
            },
            {
                "name": "removeStatement",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "void"
            }
        ],
        "name": "CtStatementList",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtSuperAccess": {
        "interfaces": ["spoon.reflect.code.CtTargetedAccess"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getVariable",
                "return": "spoon.reflect.reference.CtFieldReference"
            },
            {
                "name": "setVariable",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtVariableReference"
                }],
                "return": "spoon.reflect.code.CtVariableAccess"
            }
        ],
        "name": "CtSuperAccess",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtSwitch": {
        "interfaces": ["spoon.reflect.code.CtStatement"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "addCase",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtCase"
                }],
                "return": "spoon.reflect.code.CtSwitch"
            },
            {
                "name": "setCases",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.code.CtSwitch"
            },
            {
                "name": "getCases",
                "return": "java.util.List"
            },
            {
                "name": "getSelector",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setSelector",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtSwitch"
            },
            {
                "name": "removeCase",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtCase"
                }],
                "return": "boolean"
            }
        ],
        "name": "CtSwitch",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtInterface": {
        "interfaces": ["spoon.reflect.declaration.CtType"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtInterface",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtMultiTypedElement": {
        "interfaces": ["spoon.reflect.declaration.CtElement"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getMultiTypes",
                "return": "java.util.List"
            },
            {
                "name": "addMultiType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.declaration.CtMultiTypedElement"
            },
            {
                "name": "removeMultiType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "boolean"
            }
        ],
        "name": "CtMultiTypedElement",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtVariableWrite": {
        "interfaces": ["spoon.reflect.code.CtVariableAccess"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtVariableWrite",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtFor": {
        "interfaces": ["spoon.reflect.code.CtLoop"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getExpression",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtFor"
            },
            {
                "name": "getForInit",
                "return": "java.util.List"
            },
            {
                "name": "addForInit",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "spoon.reflect.code.CtFor"
            },
            {
                "name": "setForInit",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.code.CtFor"
            },
            {
                "name": "removeForInit",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "boolean"
            },
            {
                "name": "getForUpdate",
                "return": "java.util.List"
            },
            {
                "name": "addForUpdate",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "spoon.reflect.code.CtFor"
            },
            {
                "name": "setForUpdate",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.code.CtFor"
            },
            {
                "name": "removeForUpdate",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "boolean"
            }
        ],
        "name": "CtFor",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtBinaryOperator": {
        "interfaces": ["spoon.reflect.code.CtExpression"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getKind",
                "return": "spoon.reflect.code.BinaryOperatorKind"
            },
            {
                "name": "getLeftHandOperand",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "getRightHandOperand",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setKind",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.BinaryOperatorKind"
                }],
                "return": "spoon.reflect.code.CtBinaryOperator"
            },
            {
                "name": "setRightHandOperand",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtBinaryOperator"
            },
            {
                "name": "setLeftHandOperand",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtBinaryOperator"
            }
        ],
        "name": "CtBinaryOperator",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtCatch": {
        "interfaces": ["spoon.reflect.code.CtCodeElement"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getParameter",
                "return": "spoon.reflect.code.CtCatchVariable"
            },
            {
                "name": "getBody",
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "setParameter",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtCatchVariable"
                }],
                "return": "spoon.reflect.code.CtCatch"
            },
            {
                "name": "setBody",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtBlock"
                }],
                "return": "spoon.reflect.code.CtCatch"
            }
        ],
        "name": "CtCatch",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtNamedElement": {
        "interfaces": ["spoon.reflect.declaration.CtElement"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getSimpleName",
                "return": "java.lang.String"
            },
            {
                "name": "setSimpleName",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.declaration.CtNamedElement"
            },
            {
                "name": "getReference",
                "return": "spoon.reflect.reference.CtReference"
            }
        ],
        "name": "CtNamedElement",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtArrayAccess": {
        "interfaces": ["spoon.reflect.code.CtTargetedExpression"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "setIndexExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtArrayAccess"
            },
            {
                "name": "getIndexExpression",
                "return": "spoon.reflect.code.CtExpression"
            }
        ],
        "name": "CtArrayAccess",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtUnaryOperator": {
        "interfaces": [
            "spoon.reflect.code.CtExpression",
            "spoon.reflect.code.CtStatement"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getKind",
                "return": "spoon.reflect.code.UnaryOperatorKind"
            },
            {
                "name": "setKind",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.UnaryOperatorKind"
                }],
                "return": "spoon.reflect.code.CtUnaryOperator"
            },
            {
                "name": "getOperand",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setOperand",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtUnaryOperator"
            }
        ],
        "name": "CtUnaryOperator",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtConditional": {
        "interfaces": ["spoon.reflect.code.CtExpression"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getCondition",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setElseExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtConditional"
            },
            {
                "name": "setThenExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtConditional"
            },
            {
                "name": "setCondition",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtConditional"
            },
            {
                "name": "getElseExpression",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "getThenExpression",
                "return": "spoon.reflect.code.CtExpression"
            }
        ],
        "name": "CtConditional",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtArrayWrite": {
        "interfaces": ["spoon.reflect.code.CtArrayAccess"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtArrayWrite",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtType": {
        "interfaces": [
            "spoon.reflect.declaration.CtNamedElement",
            "spoon.reflect.declaration.CtTypeInformation",
            "spoon.reflect.declaration.CtTypeMember",
            "spoon.reflect.declaration.CtGenericElement"
        ],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getPackage",
                "return": "spoon.reflect.declaration.CtPackage"
            },
            {
                "name": "getFields",
                "return": "java.util.List"
            },
            {
                "name": "getMethods",
                "return": "java.util.Set"
            },
            {
                "name": "getField",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.declaration.CtField"
            },
            {
                "name": "getMethod",
                "parameters": [
                    {
                        "name": "arg0",
                        "type": "spoon.reflect.reference.CtTypeReference"
                    },
                    {
                        "name": "arg1",
                        "type": "java.lang.String"
                    },
                    {
                        "name": "arg2",
                        "type": "spoon.reflect.reference.CtTypeReference[]"
                    }
                ],
                "return": "spoon.reflect.declaration.CtMethod"
            },
            {
                "name": "getMethod",
                "parameters": [
                    {
                        "name": "arg0",
                        "type": "java.lang.String"
                    },
                    {
                        "name": "arg1",
                        "type": "spoon.reflect.reference.CtTypeReference[]"
                    }
                ],
                "return": "spoon.reflect.declaration.CtMethod"
            },
            {
                "name": "getActualClass",
                "return": "java.lang.Class"
            },
            {
                "name": "getUsedTypes",
                "parameters": [{
                    "name": "arg0",
                    "type": "boolean"
                }],
                "return": "java.util.Set"
            },
            {
                "name": "addField",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtField"
                }],
                "return": "spoon.reflect.declaration.CtType"
            },
            {
                "name": "getNestedType",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.declaration.CtType"
            },
            {
                "name": "isTopLevel",
                "return": "boolean"
            },
            {
                "name": "removeField",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtField"
                }],
                "return": "boolean"
            },
            {
                "name": "addNestedType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtType"
                }],
                "return": "spoon.reflect.declaration.CtType"
            },
            {
                "name": "removeNestedType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtType"
                }],
                "return": "boolean"
            },
            {
                "name": "compileAndReplaceSnippets",
                "return": "void"
            },
            {
                "name": "getAllMethods",
                "return": "java.util.Set"
            },
            {
                "name": "getMethodsAnnotatedWith",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference[]"
                }],
                "return": "java.util.Set"
            },
            {
                "name": "getMethodsByName",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "java.util.List"
            },
            {
                "name": "setMethods",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.Set"
                }],
                "return": "spoon.reflect.declaration.CtType"
            },
            {
                "name": "removeMethod",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtMethod"
                }],
                "return": "boolean"
            },
            {
                "name": "setSuperInterfaces",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.Set"
                }],
                "return": "spoon.reflect.declaration.CtType"
            },
            {
                "name": "addSuperInterface",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.declaration.CtType"
            },
            {
                "name": "removeSuperInterface",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "boolean"
            },
            {
                "name": "addMethod",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtMethod"
                }],
                "return": "spoon.reflect.declaration.CtType"
            },
            {
                "name": "getNestedTypes",
                "return": "java.util.Set"
            },
            {
                "name": "getReference",
                "return": "spoon.reflect.reference.CtTypeReference"
            }
        ],
        "name": "CtType",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtElement": {
        "interfaces": [
            "spoon.processing.FactoryAccessor",
            "spoon.reflect.visitor.CtVisitable"
        ],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getAnnotation",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.Class"
                }],
                "return": "java.lang.annotation.Annotation"
            },
            {
                "name": "getAnnotation",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.declaration.CtAnnotation"
            },
            {
                "name": "getAnnotations",
                "return": "java.util.List"
            },
            {
                "name": "getParent",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.Class"
                }],
                "return": "spoon.reflect.declaration.CtElement"
            },
            {
                "name": "getParent",
                "return": "spoon.reflect.declaration.CtElement"
            },
            {
                "name": "isImplicit",
                "return": "boolean"
            },
            {
                "name": "getSignature",
                "return": "java.lang.String"
            },
            {
                "name": "setParent",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtElement"
                }],
                "return": "spoon.reflect.declaration.CtElement"
            },
            {
                "name": "getElements",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.visitor.Filter"
                }],
                "return": "java.util.List"
            },
            {
                "name": "getDocComment",
                "return": "java.lang.String"
            },
            {
                "name": "isParentInitialized",
                "return": "boolean"
            },
            {
                "name": "hasParent",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtElement"
                }],
                "return": "boolean"
            },
            {
                "name": "addAnnotation",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtAnnotation"
                }],
                "return": "spoon.reflect.declaration.CtElement"
            },
            {
                "name": "setDocComment",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.declaration.CtElement"
            },
            {
                "name": "updateAllParentsBelow",
                "return": "void"
            },
            {
                "name": "setPosition",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.cu.SourcePosition"
                }],
                "return": "spoon.reflect.declaration.CtElement"
            },
            {
                "name": "getAnnotatedChildren",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.Class"
                }],
                "return": "java.util.List"
            },
            {
                "name": "setImplicit",
                "parameters": [{
                    "name": "arg0",
                    "type": "boolean"
                }],
                "return": "spoon.reflect.declaration.CtElement"
            },
            {
                "name": "getReferencedTypes",
                "return": "java.util.Set"
            },
            {
                "name": "getReferences",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.visitor.ReferenceFilter"
                }],
                "return": "java.util.List"
            },
            {
                "name": "setPositions",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.cu.SourcePosition"
                }],
                "return": "spoon.reflect.declaration.CtElement"
            },
            {
                "name": "setAnnotations",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.declaration.CtElement"
            },
            {
                "name": "removeAnnotation",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtAnnotation"
                }],
                "return": "boolean"
            },
            {
                "name": "getPosition",
                "return": "spoon.reflect.cu.SourcePosition"
            }
        ],
        "name": "CtElement",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtTypeAccess": {
        "interfaces": ["spoon.reflect.code.CtExpression"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtTypeAccess",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtTypeAnnotableReference": {
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getTypeAnnotations",
                "return": "java.util.List"
            },
            {
                "name": "setTypeAnnotations",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.reference.CtTypeAnnotableReference"
            },
            {
                "name": "addTypeAnnotation",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtAnnotation"
                }],
                "return": "spoon.reflect.reference.CtTypeAnnotableReference"
            },
            {
                "name": "removeTypeAnnotation",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtAnnotation"
                }],
                "return": "boolean"
            }
        ],
        "name": "CtTypeAnnotableReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtAssert": {
        "interfaces": ["spoon.reflect.code.CtStatement"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getAssertExpression",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setAssertExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtAssert"
            },
            {
                "name": "getExpression",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtAssert"
            }
        ],
        "name": "CtAssert",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtExecutable": {
        "interfaces": [
            "spoon.reflect.declaration.CtNamedElement",
            "spoon.reflect.declaration.CtTypedElement"
        ],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getParameters",
                "return": "java.util.List"
            },
            {
                "name": "getBody",
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "setBody",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtBlock"
                }],
                "return": "spoon.reflect.declaration.CtExecutable"
            },
            {
                "name": "getThrownTypes",
                "return": "java.util.Set"
            },
            {
                "name": "setParameters",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.declaration.CtExecutable"
            },
            {
                "name": "addParameter",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtParameter"
                }],
                "return": "spoon.reflect.declaration.CtExecutable"
            },
            {
                "name": "removeParameter",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtParameter"
                }],
                "return": "boolean"
            },
            {
                "name": "setThrownTypes",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.Set"
                }],
                "return": "spoon.reflect.declaration.CtExecutable"
            },
            {
                "name": "addThrownType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.declaration.CtExecutable"
            },
            {
                "name": "removeThrownType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "boolean"
            },
            {
                "name": "getReference",
                "return": "spoon.reflect.reference.CtExecutableReference"
            }
        ],
        "name": "CtExecutable",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtThisAccess": {
        "interfaces": ["spoon.reflect.code.CtTargetedExpression"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtThisAccess",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtContinue": {
        "interfaces": ["spoon.reflect.code.CtCFlowBreak"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "setTargetLabel",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.code.CtContinue"
            },
            {
                "name": "getTargetLabel",
                "return": "java.lang.String"
            },
            {
                "name": "getLabelledStatement",
                "return": "spoon.reflect.code.CtStatement"
            },
            {
                "name": "setLabelledStatement",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "spoon.reflect.code.CtContinue"
            }
        ],
        "name": "CtContinue",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtField": {
        "interfaces": [
            "spoon.reflect.declaration.CtVariable",
            "spoon.reflect.declaration.CtTypeMember",
            "spoon.reflect.code.CtRHSReceiver"
        ],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "replace",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtField"
                }],
                "return": "void"
            },
            {
                "name": "getReference",
                "return": "spoon.reflect.reference.CtFieldReference"
            }
        ],
        "name": "CtField",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtReference": {
        "interfaces": [
            "spoon.processing.FactoryAccessor",
            "spoon.reflect.visitor.CtVisitable"
        ],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getSimpleName",
                "return": "java.lang.String"
            },
            {
                "name": "setSimpleName",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.reference.CtReference"
            },
            {
                "name": "getDeclaration",
                "return": "spoon.reflect.declaration.CtElement"
            }
        ],
        "name": "CtReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtTypeParameterReference": {
        "interfaces": ["spoon.reflect.reference.CtTypeReference"],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "isUpper",
                "return": "boolean"
            },
            {
                "name": "addBound",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.reference.CtTypeParameterReference"
            },
            {
                "name": "setBounds",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.reference.CtTypeParameterReference"
            },
            {
                "name": "removeBound",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "boolean"
            },
            {
                "name": "setUpper",
                "parameters": [{
                    "name": "arg0",
                    "type": "boolean"
                }],
                "return": "spoon.reflect.reference.CtTypeParameterReference"
            },
            {
                "name": "getBounds",
                "return": "java.util.List"
            }
        ],
        "name": "CtTypeParameterReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtParameterReference": {
        "interfaces": ["spoon.reflect.reference.CtVariableReference"],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getDeclaringExecutable",
                "return": "spoon.reflect.reference.CtExecutableReference"
            },
            {
                "name": "getDeclaration",
                "return": "spoon.reflect.declaration.CtParameter"
            },
            {
                "name": "setDeclaringExecutable",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtExecutableReference"
                }],
                "return": "spoon.reflect.reference.CtParameterReference"
            }
        ],
        "name": "CtParameterReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtCodeSnippetExpression": {
        "interfaces": [
            "spoon.reflect.declaration.CtCodeSnippet",
            "spoon.reflect.code.CtExpression"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [{
            "name": "compile",
            "return": "spoon.reflect.code.CtExpression"
        }],
        "name": "CtCodeSnippetExpression",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtAnnotationFieldAccess": {
        "interfaces": [
            "spoon.reflect.code.CtVariableRead",
            "spoon.reflect.code.CtTargetedExpression"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [{
            "name": "getVariable",
            "return": "spoon.reflect.reference.CtFieldReference"
        }],
        "name": "CtAnnotationFieldAccess",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtAssignment": {
        "interfaces": [
            "spoon.reflect.code.CtStatement",
            "spoon.reflect.code.CtExpression",
            "spoon.reflect.code.CtRHSReceiver"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "setAssigned",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtAssignment"
            },
            {
                "name": "getAssigned",
                "return": "spoon.reflect.code.CtExpression"
            }
        ],
        "name": "CtAssignment",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtModifiable": {
        "interfaces": ["spoon.reflect.declaration.CtElement"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getModifiers",
                "return": "java.util.Set"
            },
            {
                "name": "setModifiers",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.Set"
                }],
                "return": "spoon.reflect.declaration.CtModifiable"
            },
            {
                "name": "addModifier",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.ModifierKind"
                }],
                "return": "spoon.reflect.declaration.CtModifiable"
            },
            {
                "name": "removeModifier",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.ModifierKind"
                }],
                "return": "boolean"
            },
            {
                "name": "setVisibility",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.ModifierKind"
                }],
                "return": "spoon.reflect.declaration.CtModifiable"
            },
            {
                "name": "hasModifier",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.ModifierKind"
                }],
                "return": "boolean"
            },
            {
                "name": "getVisibility",
                "return": "spoon.reflect.declaration.ModifierKind"
            }
        ],
        "name": "CtModifiable",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtCatchVariableReference": {
        "interfaces": ["spoon.reflect.reference.CtVariableReference"],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "setDeclaration",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtCatchVariable"
                }],
                "return": "spoon.reflect.reference.CtCatchVariableReference"
            },
            {
                "name": "getDeclaration",
                "return": "spoon.reflect.code.CtCatchVariable"
            }
        ],
        "name": "CtCatchVariableReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtFieldAccess": {
        "interfaces": ["spoon.reflect.code.CtTargetedAccess"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [{
            "name": "getVariable",
            "return": "spoon.reflect.reference.CtFieldReference"
        }],
        "name": "CtFieldAccess",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtVariableReference": {
        "interfaces": ["spoon.reflect.reference.CtReference"],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getModifiers",
                "return": "java.util.Set"
            },
            {
                "name": "getType",
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "setType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.reference.CtVariableReference"
            },
            {
                "name": "getDeclaration",
                "return": "spoon.reflect.declaration.CtVariable"
            }
        ],
        "name": "CtVariableReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtTypeInformation": {
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "isAssignableFrom",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "boolean"
            },
            {
                "name": "getModifiers",
                "return": "java.util.Set"
            },
            {
                "name": "isInterface",
                "return": "boolean"
            },
            {
                "name": "isPrimitive",
                "return": "boolean"
            },
            {
                "name": "getSuperclass",
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "getDeclaredFields",
                "return": "java.util.Collection"
            },
            {
                "name": "getSuperInterfaces",
                "return": "java.util.Set"
            },
            {
                "name": "getQualifiedName",
                "return": "java.lang.String"
            },
            {
                "name": "isAnonymous",
                "return": "boolean"
            },
            {
                "name": "getAllFields",
                "return": "java.util.Collection"
            },
            {
                "name": "isSubtypeOf",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "boolean"
            },
            {
                "name": "getDeclaredExecutables",
                "return": "java.util.Collection"
            },
            {
                "name": "getAllExecutables",
                "return": "java.util.Collection"
            }
        ],
        "name": "CtTypeInformation",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtTryWithResource": {
        "interfaces": ["spoon.reflect.code.CtTry"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getResources",
                "return": "java.util.List"
            },
            {
                "name": "setResources",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.code.CtTryWithResource"
            },
            {
                "name": "addResource",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtLocalVariable"
                }],
                "return": "spoon.reflect.code.CtTryWithResource"
            },
            {
                "name": "removeResource",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtLocalVariable"
                }],
                "return": "boolean"
            }
        ],
        "name": "CtTryWithResource",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtFieldWrite": {
        "interfaces": ["spoon.reflect.code.CtFieldAccess"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtFieldWrite",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtAbstractInvocation": {
        "interfaces": ["spoon.reflect.declaration.CtElement"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "setExecutable",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtExecutableReference"
                }],
                "return": "spoon.reflect.code.CtAbstractInvocation"
            },
            {
                "name": "getArguments",
                "return": "java.util.List"
            },
            {
                "name": "addArgument",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtAbstractInvocation"
            },
            {
                "name": "removeArgument",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "void"
            },
            {
                "name": "setArguments",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.code.CtAbstractInvocation"
            },
            {
                "name": "getExecutable",
                "return": "spoon.reflect.reference.CtExecutableReference"
            }
        ],
        "name": "CtAbstractInvocation",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtVariableAccess": {
        "interfaces": ["spoon.reflect.code.CtExpression"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getVariable",
                "return": "spoon.reflect.reference.CtVariableReference"
            },
            {
                "name": "setVariable",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtVariableReference"
                }],
                "return": "spoon.reflect.code.CtVariableAccess"
            }
        ],
        "name": "CtVariableAccess",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtBlock": {
        "interfaces": [
            "spoon.reflect.code.CtStatement",
            "spoon.reflect.code.CtStatementList",
            "spoon.template.TemplateParameter"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "replace",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtBlock"
                }],
                "return": "void"
            },
            {
                "name": "insertAfter",
                "parameters": [
                    {
                        "name": "arg0",
                        "type": "spoon.reflect.visitor.Filter"
                    },
                    {
                        "name": "arg1",
                        "type": "spoon.reflect.code.CtStatement"
                    }
                ],
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "insertAfter",
                "parameters": [
                    {
                        "name": "arg0",
                        "type": "spoon.reflect.visitor.Filter"
                    },
                    {
                        "name": "arg1",
                        "type": "spoon.reflect.code.CtStatementList"
                    }
                ],
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "insertBefore",
                "parameters": [
                    {
                        "name": "arg0",
                        "type": "spoon.reflect.visitor.Filter"
                    },
                    {
                        "name": "arg1",
                        "type": "spoon.reflect.code.CtStatementList"
                    }
                ],
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "insertBefore",
                "parameters": [
                    {
                        "name": "arg0",
                        "type": "spoon.reflect.visitor.Filter"
                    },
                    {
                        "name": "arg1",
                        "type": "spoon.reflect.code.CtStatement"
                    }
                ],
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "insertBegin",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "insertBegin",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatementList"
                }],
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "insertEnd",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatementList"
                }],
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "insertEnd",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "getStatement",
                "parameters": [{
                    "name": "arg0",
                    "type": "int"
                }],
                "return": "spoon.reflect.code.CtStatement"
            },
            {
                "name": "getLastStatement",
                "return": "spoon.reflect.code.CtStatement"
            }
        ],
        "name": "CtBlock",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtReturn": {
        "interfaces": [
            "spoon.reflect.code.CtCFlowBreak",
            "spoon.template.TemplateParameter"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getReturnedExpression",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setReturnedExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtReturn"
            }
        ],
        "name": "CtReturn",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtCodeSnippet": {
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getValue",
                "return": "java.lang.String"
            },
            {
                "name": "setValue",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.declaration.CtCodeSnippet"
            }
        ],
        "name": "CtCodeSnippet",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtParameter": {
        "interfaces": ["spoon.reflect.declaration.CtVariable"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getParent",
                "return": "spoon.reflect.declaration.CtExecutable"
            },
            {
                "name": "isVarArgs",
                "return": "boolean"
            },
            {
                "name": "setVarArgs",
                "parameters": [{
                    "name": "arg0",
                    "type": "boolean"
                }],
                "return": "spoon.reflect.declaration.CtParameter"
            },
            {
                "name": "getReference",
                "return": "spoon.reflect.reference.CtParameterReference"
            }
        ],
        "name": "CtParameter",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtSynchronized": {
        "interfaces": ["spoon.reflect.code.CtStatement"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getExpression",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtSynchronized"
            },
            {
                "name": "getBlock",
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "setBlock",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtBlock"
                }],
                "return": "spoon.reflect.code.CtSynchronized"
            }
        ],
        "name": "CtSynchronized",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtMethod": {
        "interfaces": [
            "spoon.reflect.declaration.CtExecutable",
            "spoon.reflect.declaration.CtTypeMember",
            "spoon.reflect.declaration.CtGenericElement"
        ],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "replace",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtMethod"
                }],
                "return": "void"
            },
            {
                "name": "isDefaultMethod",
                "return": "boolean"
            },
            {
                "name": "setDefaultMethod",
                "parameters": [{
                    "name": "arg0",
                    "type": "boolean"
                }],
                "return": "spoon.reflect.declaration.CtMethod"
            }
        ],
        "name": "CtMethod",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtLocalVariable": {
        "interfaces": [
            "spoon.reflect.code.CtStatement",
            "spoon.reflect.declaration.CtVariable",
            "spoon.reflect.code.CtRHSReceiver"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [{
            "name": "getReference",
            "return": "spoon.reflect.reference.CtLocalVariableReference"
        }],
        "name": "CtLocalVariable",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtEnum": {
        "interfaces": ["spoon.reflect.declaration.CtClass"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [{
            "name": "getValues",
            "return": "java.util.List"
        }],
        "name": "CtEnum",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtIf": {
        "interfaces": [
            "spoon.reflect.code.CtStatement",
            "spoon.template.TemplateParameter"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getCondition",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setCondition",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtIf"
            },
            {
                "name": "getElseStatement",
                "return": "spoon.reflect.code.CtStatement"
            },
            {
                "name": "getThenStatement",
                "return": "spoon.reflect.code.CtStatement"
            },
            {
                "name": "setElseStatement",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "spoon.reflect.code.CtIf"
            },
            {
                "name": "setThenStatement",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "spoon.reflect.code.CtIf"
            }
        ],
        "name": "CtIf",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtTypeMember": {
        "interfaces": ["spoon.reflect.declaration.CtModifiable"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [{
            "name": "getDeclaringType",
            "return": "spoon.reflect.declaration.CtType"
        }],
        "name": "CtTypeMember",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtCodeElement": {
        "interfaces": ["spoon.reflect.declaration.CtElement"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [{
            "name": "partiallyEvaluate",
            "return": "spoon.reflect.code.CtCodeElement"
        }],
        "name": "CtCodeElement",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtPackage": {
        "interfaces": ["spoon.reflect.declaration.CtNamedElement"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getPackage",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.declaration.CtPackage"
            },
            {
                "name": "getPackages",
                "return": "java.util.Set"
            },
            {
                "name": "getType",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.declaration.CtType"
            },
            {
                "name": "getTypes",
                "return": "java.util.Set"
            },
            {
                "name": "getQualifiedName",
                "return": "java.lang.String"
            },
            {
                "name": "getDeclaringPackage",
                "return": "spoon.reflect.declaration.CtPackage"
            },
            {
                "name": "addType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtType"
                }],
                "return": "spoon.reflect.declaration.CtPackage"
            },
            {
                "name": "removeType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtType"
                }],
                "return": "void"
            },
            {
                "name": "setTypes",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.Set"
                }],
                "return": "spoon.reflect.declaration.CtPackage"
            },
            {
                "name": "addPackage",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtPackage"
                }],
                "return": "spoon.reflect.declaration.CtPackage"
            },
            {
                "name": "removePackage",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtPackage"
                }],
                "return": "boolean"
            },
            {
                "name": "setPackages",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.Set"
                }],
                "return": "spoon.reflect.declaration.CtPackage"
            },
            {
                "name": "getReference",
                "return": "spoon.reflect.reference.CtPackageReference"
            }
        ],
        "name": "CtPackage",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtCatchVariable": {
        "interfaces": [
            "spoon.reflect.declaration.CtVariable",
            "spoon.reflect.declaration.CtMultiTypedElement",
            "spoon.reflect.code.CtCodeElement"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [{
            "name": "getReference",
            "return": "spoon.reflect.reference.CtCatchVariableReference"
        }],
        "name": "CtCatchVariable",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtThrow": {
        "interfaces": [
            "spoon.reflect.code.CtCFlowBreak",
            "spoon.template.TemplateParameter"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "setThrownExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtThrow"
            },
            {
                "name": "getThrownExpression",
                "return": "spoon.reflect.code.CtExpression"
            }
        ],
        "name": "CtThrow",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtGenericElement": {
        "interfaces": ["spoon.reflect.declaration.CtElement"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getFormalTypeParameters",
                "return": "java.util.List"
            },
            {
                "name": "setFormalTypeParameters",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.declaration.CtGenericElement"
            },
            {
                "name": "addFormalTypeParameter",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.declaration.CtGenericElement"
            },
            {
                "name": "removeFormalTypeParameter",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "boolean"
            }
        ],
        "name": "CtGenericElement",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtBreak": {
        "interfaces": ["spoon.reflect.code.CtCFlowBreak"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "setTargetLabel",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.code.CtBreak"
            },
            {
                "name": "getTargetLabel",
                "return": "java.lang.String"
            }
        ],
        "name": "CtBreak",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtStatement": {
        "interfaces": ["spoon.reflect.code.CtCodeElement"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "replace",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "void"
            },
            {
                "name": "insertAfter",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "spoon.reflect.code.CtStatement"
            },
            {
                "name": "insertAfter",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatementList"
                }],
                "return": "spoon.reflect.code.CtStatement"
            },
            {
                "name": "setLabel",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.code.CtStatement"
            },
            {
                "name": "insertBefore",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatementList"
                }],
                "return": "spoon.reflect.code.CtStatement"
            },
            {
                "name": "insertBefore",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "spoon.reflect.code.CtStatement"
            },
            {
                "name": "getLabel",
                "return": "java.lang.String"
            }
        ],
        "name": "CtStatement",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtExecutableReference": {
        "interfaces": [
            "spoon.reflect.reference.CtReference",
            "spoon.reflect.reference.CtGenericElementReference"
        ],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "isConstructor",
                "return": "boolean"
            },
            {
                "name": "isStatic",
                "return": "boolean"
            },
            {
                "name": "getType",
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "getParameters",
                "return": "java.util.List"
            },
            {
                "name": "isFinal",
                "return": "boolean"
            },
            {
                "name": "setType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.reference.CtExecutableReference"
            },
            {
                "name": "getDeclaringType",
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "setParameters",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.reference.CtExecutableReference"
            },
            {
                "name": "getDeclaration",
                "return": "spoon.reflect.declaration.CtExecutable"
            },
            {
                "name": "setDeclaringType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.reference.CtExecutableReference"
            },
            {
                "name": "setStatic",
                "parameters": [{
                    "name": "arg0",
                    "type": "boolean"
                }],
                "return": "spoon.reflect.reference.CtExecutableReference"
            },
            {
                "name": "getActualMethod",
                "return": "java.lang.reflect.Method"
            },
            {
                "name": "getActualConstructor",
                "return": "java.lang.reflect.Constructor"
            },
            {
                "name": "getOverridingExecutable",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.reference.CtExecutableReference"
            },
            {
                "name": "getOverridingExecutable",
                "return": "spoon.reflect.reference.CtExecutableReference"
            },
            {
                "name": "isOverriding",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtExecutableReference"
                }],
                "return": "boolean"
            }
        ],
        "name": "CtExecutableReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtTypedElement": {
        "interfaces": ["spoon.reflect.declaration.CtElement"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getType",
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "setType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.declaration.CtTypedElement"
            }
        ],
        "name": "CtTypedElement",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtNewArray": {
        "interfaces": ["spoon.reflect.code.CtExpression"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "addElement",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtNewArray"
            },
            {
                "name": "removeElement",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "boolean"
            },
            {
                "name": "getElements",
                "return": "java.util.List"
            },
            {
                "name": "getDimensionExpressions",
                "return": "java.util.List"
            },
            {
                "name": "setDimensionExpressions",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.code.CtNewArray"
            },
            {
                "name": "addDimensionExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtNewArray"
            },
            {
                "name": "removeDimensionExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "boolean"
            },
            {
                "name": "setElements",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.code.CtNewArray"
            }
        ],
        "name": "CtNewArray",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtExpression": {
        "interfaces": [
            "spoon.reflect.code.CtCodeElement",
            "spoon.reflect.declaration.CtTypedElement",
            "spoon.template.TemplateParameter"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "replace",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "void"
            },
            {
                "name": "setTypeCasts",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "getTypeCasts",
                "return": "java.util.List"
            },
            {
                "name": "addTypeCast",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.code.CtExpression"
            }
        ],
        "name": "CtExpression",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtArrayTypeReference": {
        "interfaces": ["spoon.reflect.reference.CtTypeReference"],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getComponentType",
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "getSimpleName",
                "return": "java.lang.String"
            },
            {
                "name": "setComponentType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.reference.CtArrayTypeReference"
            },
            {
                "name": "getDimensionCount",
                "return": "int"
            }
        ],
        "name": "CtArrayTypeReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtNewClass": {
        "interfaces": ["spoon.reflect.code.CtConstructorCall"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getAnonymousClass",
                "return": "spoon.reflect.declaration.CtClass"
            },
            {
                "name": "setAnonymousClass",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtClass"
                }],
                "return": "spoon.reflect.code.CtNewClass"
            }
        ],
        "name": "CtNewClass",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtTargetedAccess": {
        "interfaces": [
            "spoon.reflect.code.CtVariableRead",
            "spoon.reflect.code.CtTargetedExpression"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtTargetedAccess",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtLocalVariableReference": {
        "interfaces": ["spoon.reflect.reference.CtVariableReference"],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "setDeclaration",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtLocalVariable"
                }],
                "return": "spoon.reflect.reference.CtLocalVariableReference"
            },
            {
                "name": "getDeclaration",
                "return": "spoon.reflect.code.CtLocalVariable"
            }
        ],
        "name": "CtLocalVariableReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtLambda": {
        "interfaces": [
            "spoon.reflect.code.CtExpression",
            "spoon.reflect.declaration.CtExecutable"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getExpression",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtLambda"
            }
        ],
        "name": "CtLambda",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtVariableRead": {
        "interfaces": ["spoon.reflect.code.CtVariableAccess"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtVariableRead",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtConstructor": {
        "interfaces": [
            "spoon.reflect.declaration.CtExecutable",
            "spoon.reflect.declaration.CtTypeMember",
            "spoon.reflect.declaration.CtGenericElement"
        ],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getSimpleName",
                "return": "java.lang.String"
            },
            {
                "name": "getDeclaringType",
                "return": "spoon.reflect.declaration.CtType"
            }
        ],
        "name": "CtConstructor",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtLoop": {
        "interfaces": [
            "spoon.reflect.code.CtStatement",
            "spoon.template.TemplateParameter"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getBody",
                "return": "spoon.reflect.code.CtStatement"
            },
            {
                "name": "setBody",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtStatement"
                }],
                "return": "spoon.reflect.code.CtLoop"
            }
        ],
        "name": "CtLoop",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtForEach": {
        "interfaces": ["spoon.reflect.code.CtLoop"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getExpression",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtForEach"
            },
            {
                "name": "getVariable",
                "return": "spoon.reflect.code.CtLocalVariable"
            },
            {
                "name": "setVariable",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtLocalVariable"
                }],
                "return": "spoon.reflect.code.CtForEach"
            }
        ],
        "name": "CtForEach",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtImplicitTypeReference": {
        "interfaces": ["spoon.reflect.reference.CtTypeReference"],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtImplicitTypeReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtCodeSnippetStatement": {
        "interfaces": [
            "spoon.reflect.declaration.CtCodeSnippet",
            "spoon.reflect.code.CtStatement"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [{
            "name": "compile",
            "return": "spoon.reflect.code.CtStatement"
        }],
        "name": "CtCodeSnippetStatement",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtTargetedExpression": {
        "interfaces": ["spoon.reflect.code.CtExpression"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getTarget",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setTarget",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtTargetedExpression"
            }
        ],
        "name": "CtTargetedExpression",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtInvocation": {
        "interfaces": [
            "spoon.reflect.code.CtAbstractInvocation",
            "spoon.reflect.code.CtStatement",
            "spoon.reflect.code.CtTargetedExpression"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtInvocation",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtAnonymousExecutable": {
        "interfaces": ["spoon.reflect.declaration.CtTypeMember"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getBody",
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "setBody",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtBlock"
                }],
                "return": "spoon.reflect.declaration.CtAnonymousExecutable"
            }
        ],
        "name": "CtAnonymousExecutable",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtDo": {
        "interfaces": ["spoon.reflect.code.CtLoop"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getLoopingExpression",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setLoopingExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtDo"
            }
        ],
        "name": "CtDo",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtTypeParameter": {
        "interfaces": ["spoon.reflect.declaration.CtNamedElement"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getName",
                "return": "java.lang.String"
            },
            {
                "name": "setName",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "spoon.reflect.declaration.CtTypeParameter"
            },
            {
                "name": "addBound",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.declaration.CtTypeParameter"
            },
            {
                "name": "setBounds",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.declaration.CtTypeParameter"
            },
            {
                "name": "removeBound",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "boolean"
            },
            {
                "name": "getBounds",
                "return": "java.util.List"
            }
        ],
        "name": "CtTypeParameter",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtVariable": {
        "interfaces": [
            "spoon.reflect.declaration.CtNamedElement",
            "spoon.reflect.declaration.CtTypedElement",
            "spoon.reflect.declaration.CtModifiable"
        ],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "setDefaultExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.declaration.CtVariable"
            },
            {
                "name": "getDefaultExpression",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "getReference",
                "return": "spoon.reflect.reference.CtVariableReference"
            }
        ],
        "name": "CtVariable",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtRHSReceiver": {
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getAssignment",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setAssignment",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtRHSReceiver"
            }
        ],
        "name": "CtRHSReceiver",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtGenericElementReference": {
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getActualTypeArguments",
                "return": "java.util.List"
            },
            {
                "name": "setActualTypeArguments",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.reference.CtGenericElementReference"
            },
            {
                "name": "addActualTypeArgument",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.reference.CtGenericElementReference"
            },
            {
                "name": "removeActualTypeArgument",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "boolean"
            }
        ],
        "name": "CtGenericElementReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtTypeReference": {
        "interfaces": [
            "spoon.reflect.reference.CtReference",
            "spoon.reflect.reference.CtGenericElementReference",
            "spoon.reflect.reference.CtTypeAnnotableReference",
            "spoon.reflect.declaration.CtTypeInformation"
        ],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getPackage",
                "return": "spoon.reflect.reference.CtPackageReference"
            },
            {
                "name": "getActualClass",
                "return": "java.lang.Class"
            },
            {
                "name": "getDeclaringType",
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "getDeclaration",
                "return": "spoon.reflect.declaration.CtType"
            },
            {
                "name": "setPackage",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtPackageReference"
                }],
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "setDeclaringType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "box",
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "unbox",
                "return": "spoon.reflect.reference.CtTypeReference"
            }
        ],
        "name": "CtTypeReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtAnnotation": {
        "interfaces": ["spoon.reflect.code.CtExpression"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getAnnotationType",
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "getElementValue",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.String"
                }],
                "return": "java.lang.Object"
            },
            {
                "name": "addValue",
                "parameters": [
                    {
                        "name": "arg0",
                        "type": "java.lang.String"
                    },
                    {
                        "name": "arg1",
                        "type": "java.lang.Object"
                    }
                ],
                "return": "spoon.reflect.declaration.CtAnnotation"
            },
            {
                "name": "getElementValues",
                "return": "java.util.Map"
            },
            {
                "name": "setAnnotationType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.declaration.CtAnnotation"
            },
            {
                "name": "setElementValues",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.Map"
                }],
                "return": "spoon.reflect.declaration.CtAnnotation"
            },
            {
                "name": "getAnnotatedElement",
                "return": "spoon.reflect.declaration.CtElement"
            },
            {
                "name": "getAnnotatedElementType",
                "return": "spoon.reflect.declaration.CtAnnotatedElementType"
            },
            {
                "name": "getActualAnnotation",
                "return": "java.lang.annotation.Annotation"
            }
        ],
        "name": "CtAnnotation",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtCFlowBreak": {
        "interfaces": ["spoon.reflect.code.CtStatement"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtCFlowBreak",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtArrayRead": {
        "interfaces": ["spoon.reflect.code.CtArrayAccess"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtArrayRead",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtWhile": {
        "interfaces": ["spoon.reflect.code.CtLoop"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getLoopingExpression",
                "return": "spoon.reflect.code.CtExpression"
            },
            {
                "name": "setLoopingExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtWhile"
            }
        ],
        "name": "CtWhile",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtCase": {
        "interfaces": [
            "spoon.reflect.code.CtStatement",
            "spoon.reflect.code.CtStatementList"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "setCaseExpression",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtExpression"
                }],
                "return": "spoon.reflect.code.CtCase"
            },
            {
                "name": "getCaseExpression",
                "return": "spoon.reflect.code.CtExpression"
            }
        ],
        "name": "CtCase",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtConstructorCall": {
        "interfaces": [
            "spoon.reflect.code.CtTargetedExpression",
            "spoon.reflect.code.CtAbstractInvocation",
            "spoon.reflect.code.CtStatement",
            "spoon.reflect.reference.CtGenericElementReference"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtConstructorCall",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtUnboundVariableReference": {
        "interfaces": ["spoon.reflect.reference.CtVariableReference"],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtUnboundVariableReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtClass": {
        "interfaces": [
            "spoon.reflect.declaration.CtType",
            "spoon.reflect.code.CtStatement"
        ],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getFields",
                "return": "java.util.List"
            },
            {
                "name": "getConstructors",
                "return": "java.util.Set"
            },
            {
                "name": "getConstructor",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference[]"
                }],
                "return": "spoon.reflect.declaration.CtConstructor"
            },
            {
                "name": "getAnonymousExecutables",
                "return": "java.util.List"
            },
            {
                "name": "removeAnonymousExecutable",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtAnonymousExecutable"
                }],
                "return": "boolean"
            },
            {
                "name": "addAnonymousExecutable",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtAnonymousExecutable"
                }],
                "return": "spoon.reflect.declaration.CtClass"
            },
            {
                "name": "setAnonymousExecutables",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.declaration.CtClass"
            },
            {
                "name": "setConstructors",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.Set"
                }],
                "return": "spoon.reflect.declaration.CtClass"
            },
            {
                "name": "addConstructor",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtConstructor"
                }],
                "return": "spoon.reflect.declaration.CtClass"
            },
            {
                "name": "removeConstructor",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.declaration.CtConstructor"
                }],
                "return": "void"
            },
            {
                "name": "setSuperclass",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.declaration.CtClass"
            },
            {
                "name": "isAnonymous",
                "return": "boolean"
            }
        ],
        "name": "CtClass",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtFieldRead": {
        "interfaces": ["spoon.reflect.code.CtFieldAccess"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtFieldRead",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.reference.CtFieldReference": {
        "interfaces": ["spoon.reflect.reference.CtVariableReference"],
        "package": "spoon.reflect.reference",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "isStatic",
                "return": "boolean"
            },
            {
                "name": "isFinal",
                "return": "boolean"
            },
            {
                "name": "getQualifiedName",
                "return": "java.lang.String"
            },
            {
                "name": "setFinal",
                "parameters": [{
                    "name": "arg0",
                    "type": "boolean"
                }],
                "return": "spoon.reflect.reference.CtFieldReference"
            },
            {
                "name": "getDeclaringType",
                "return": "spoon.reflect.reference.CtTypeReference"
            },
            {
                "name": "getActualField",
                "return": "java.lang.reflect.Member"
            },
            {
                "name": "getDeclaration",
                "return": "spoon.reflect.declaration.CtField"
            },
            {
                "name": "setDeclaringType",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.reference.CtTypeReference"
                }],
                "return": "spoon.reflect.reference.CtFieldReference"
            },
            {
                "name": "setStatic",
                "parameters": [{
                    "name": "arg0",
                    "type": "boolean"
                }],
                "return": "spoon.reflect.reference.CtFieldReference"
            }
        ],
        "name": "CtFieldReference",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtTry": {
        "interfaces": [
            "spoon.reflect.code.CtStatement",
            "spoon.template.TemplateParameter"
        ],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getBody",
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "setBody",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtBlock"
                }],
                "return": "spoon.reflect.code.CtTry"
            },
            {
                "name": "getCatchers",
                "return": "java.util.List"
            },
            {
                "name": "addCatcher",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtCatch"
                }],
                "return": "spoon.reflect.code.CtTry"
            },
            {
                "name": "setCatchers",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.util.List"
                }],
                "return": "spoon.reflect.code.CtTry"
            },
            {
                "name": "removeCatcher",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtCatch"
                }],
                "return": "boolean"
            },
            {
                "name": "getFinalizer",
                "return": "spoon.reflect.code.CtBlock"
            },
            {
                "name": "setFinalizer",
                "parameters": [{
                    "name": "arg0",
                    "type": "spoon.reflect.code.CtBlock"
                }],
                "return": "spoon.reflect.code.CtTry"
            }
        ],
        "name": "CtTry",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.code.CtLiteral": {
        "interfaces": ["spoon.reflect.code.CtExpression"],
        "package": "spoon.reflect.code",
        "size": {
            "width": 150,
            "height": 150
        },
        "methods": [
            {
                "name": "getValue",
                "return": "java.lang.Object"
            },
            {
                "name": "setValue",
                "parameters": [{
                    "name": "arg0",
                    "type": "java.lang.Object"
                }],
                "return": "spoon.reflect.code.CtLiteral"
            }
        ],
        "name": "CtLiteral",
        "position": {
            "x": 0,
            "y": 0
        }
    },
    "spoon.reflect.declaration.CtAnnotationType": {
        "interfaces": ["spoon.reflect.declaration.CtType"],
        "package": "spoon.reflect.declaration",
        "size": {
            "width": 150,
            "height": 150
        },
        "name": "CtAnnotationType",
        "position": {
            "x": 0,
            "y": 0
        }
    }
}
