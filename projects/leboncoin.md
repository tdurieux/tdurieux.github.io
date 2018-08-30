---
title: LeBonCoin JS API
date: "2016-01-01"
tags:
  - leboncoin.fr
  - Library
description: LeBonCoin JS API is an API to obtain the data from leboncoin.fr in a fluent JS API.
image: ./leboncoin.png
github: https://github.com/tdurieux/leboncoin-api
---

LeBonCoin JS API is an API to obtain the data from [leboncoin.fr](http://leboncoin.fr) in a fluent JS API.

## Features

* Search on leboncoin.fr with all functionality available leboncoin.fr
* Get the detailed page of an item
* Get the phone number of the seller (convert the image to string) **/!\ This API have an unknown usage limit**

## Usage

```javascript
const leboncoin = require('leboncoin-api');
var search = new leboncoin.Search()
    .setPage(1)
    .setQuery("renove")
    .setFilter(leboncoin.FILTERS.PARTICULIER)
    .setCategory("locations")
    .setRegion("ilgit se_de_france")
    .addSearchExtra("mrs", 250) // min rent
    .addSearchExtra("mre", 1250); // min rent

search.run().then(function (data) {
    console.log(data.page); // the current page
    console.log(data.nbResult); // the number of results for this search
    console.log(data.results); // the array of results
    data.results[0].getDetails().then(function (details) {
        console.log(details); // the item 0 with more data such as description, all images, author, ...
    }, function (err) {
        console.error(err);
    });
    data.results[0].getPhoneNumber().then(function (phoneNumer) {
        console.log(phoneNumer); // the phone number of the author if available
    }, function (err) {
        console.error(err); // if the phone number is not available or not parsable (image -> string) 
    });
}, function (err) {
    console.error(err);
});
```