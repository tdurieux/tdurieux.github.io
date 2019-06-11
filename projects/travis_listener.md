---
title: Travis Listener
date: "2019-01-12T23:46:37.121Z"
tags:
  - Academic
  - Travis
  - CI
description: "Travis Listener is a small library that listen on real time  TravisCI API for new builds. It allows to interact as soon as possible with the authors of the builds for fixing it for example."
image: ./travis_listener.png
github: https://github.com/tdurieux/travis-listener
---

# Travis Listener

Travis Listener is a small library that listen on real time  TravisCI API for new builds. It allows to interact as soon as possible with the author of the builds for fixing it for example.

## Example 
Using the API, I created a dashboard: [https://travis.durieux.me]() that lists all the builds that are currently running on TravisCI.
[This page](https://travis.durieux.me/stat.html) contains some statistic on the builds such as the number of builds per language per hour, the number of failing/passing, ...  

![Travis Listener](../.vuepress/public/projects/travis_listener.png)

I also play with a more artistic representation of Travis activity. [This page](https://travis.durieux.me/rain.html) represents each build by is commit message that falls down like rain. The code of this example is available at: [https://github.com/tdurieux/travis-listener/blob/master/script/static/js/rain.js#L357]()

## Usage

Travis Listener is based on websockets. You can listen to the websocket to retrieve on real time the Travis builds.

### Install

```bash
cd script
npm install
npm run-script build
```

### Start server

User interface that monitors the jobs that are currently running at Travis-CI

```bash
npm run-script server
```

### Dashboard

One the server is started you can open `http://localhost:9080` and see the activity on travis on real time.
The data is not stored, it is only rendered in your browser.

### Statistics

When the server is running, basic statistics are collected such as the number of build for each language per hour or the number of builds for each status.
The statistics is visible at `http://localhost:9080/stat.html` and are based on the data available at `https://travis.durieux.me/api/stat`.

### Your own visualization

Travis Listener sent the information through websocket which is now supported by a huge amount of libraries in different languages: [Java](https://www.baeldung.com/websockets-api-java-spring-client), [Python](https://pypi.org/project/websocket_client/), [Go](https://github.com/gorilla/websocket), [node.js](https://www.npmjs.com/package/ws) and also natively by all modern browsers.

Here is an example on how to do it in browser JavaScript.

```javascript
var host = 'localhost';
var protocol = "ws";
if (window.location.protocol == "https:") {
    protocol = "wss";
}
var ws = null;
var onmessage = function (e) {
    // basic check if the message is in JSON format
	if (e.data[0] != '{') return;
    var data = JSON.parse(e.data)
    // event types
    if (data.event == 'job') {
        // a new job is detected on TravisCI
    }
    if (data.event == 'updated_job') {
        // the status of an existing job is updated
    }
    if (data.event == 'updated_job') {
        // the execution of a job is finished
    }
    // job details, the structure of the job is available here: https://docs.travis-ci.com/api/#jobs
    var job = data.data;
    var commit = job.commit;
};
function startWS(){
    ws = new WebSocket(protocol + '://' + host);
    if (onmessage != null) {
        ws.onmessage = onmessage;
    }
    ws.onclose = function(){
        // Try to reconnect in 5 seconds
        setTimeout(function(){startWS()}, 5000);
    };
}
startWS();
```