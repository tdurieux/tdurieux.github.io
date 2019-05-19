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

Using the API, I created a dashboard: https://travis.durieux.me that lists all the builds that are currently running on TravisCI.
[This page](https://travis.durieux.me/stat.html) contains some statistic on the builds such as the number of builds per language per hour, the number of failing/passing, ...  

![Travis Listener](../.vuepress/public/projects/travis_listener.png)

I also play with a more artistic representation of Travis activity. [This page](https://travis.durieux.me/rain.html) represents each build by is commit message that falls down like rain.

## Usage

Travis Listener is based on web sockets. You can listen to the websocket to retrieve on real time the Travis builds.
Here is an example on how to do it in JavaScript.

```javascript
var host = 'travis.durieux.me';
var protocol = "ws";
if (window.location.protocol == "https:") {
    protocol = "wss";
}
var ws = null;
var onmessage = function (e) {
	if (e.data[0] != '{') {
		return
  }
  var data = JSON.parse(e.data)
  // data.event = job, updated_job, finished_job
	// data.data content of TravisBuild
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