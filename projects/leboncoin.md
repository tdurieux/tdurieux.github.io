---
title: LeBonCoin JS API
date: "2016-01-01"
tags:
  - leboncoin.fr
  - Library
description: LeBonCoin JS API is an API to obtain the data from leboncoin.fr in a fluent JS API.
image: ./leboncoin.png
github: https://github.com/tdurieux/leboncoin-api
sidebar: auto
sidebarDepth: 4
---

LeBonCoin JS API is an API to obtain the data from [leboncoin.fr](http://leboncoin.fr) in a fluent JS API.

## Features

* Search on leboncoin.fr with all functionality available leboncoin.fr
* Get the detailed page of an item
* Get the phone number of the seller (convert the image to string) **/!\ This API have an unknown usage limit**

## Example

```javascript
const leboncoin = require('leboncoin-api');
var search = new leboncoin.Search()
    .setPage(1)
    .setQuery("renove")
    .setFilter(leboncoin.FILTERS.PARTICULIER)
    .setCategory("locations")
    .setRegion("ile_de_france")
    .addSearchExtra("price", {min: 1500, max: 2000}) // will add a range of price
    .addSearchExtra('furnished', ["1", "Non meublé"]); // will add enums for Meublé and Non meublé

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

## Search API

```javascript
const leboncoin = require('leboncoin-api');
var search = new leboncoin.Search()
```

### run()

* Parameter http options: `Object` default: `search.getUrlOptions()`
* Parameter body parameter: `Object` default: `search.getBodyParams()`
* Return type: `Promise<Item[]>`

Make search request on leboncoin.fr. 

```javascript
const results = await search.run();
```

### setQuery()

* Parameter: `String`
* Return type: `Search`

Define the textual search query, by default the query search in the description and in the title. See [`setTitleOnly`](#settitleonly) to only search in the title.
The query can contain specific keywords like `OR`, `NOT`, `"exact match"` as specified here: [https://www2.leboncoin.fr/tips.htm](https://www2.leboncoin.fr/tips.htm).

```javascript
search.setQuery("Golf NOT GTI");
```

### setTitleOnly()

* Parameter: `boolean`
* Default: `false` 
* Return type: `Search`

Define if the query should only match the title of the item.

```javascript
search.setTitleOnly(true);
```

### setPage()

* Parameter: `Integer`
* Default: `1` 
* Return type: `Search`

Define the page you want the results for, the page start at 1. See [`setLimit`](#setlimit) to define the number of results per page.  

```javascript
search.setPage(1);
```

### setLimit()

* Parameter: `Integer`
* Default: `35` 
* Return type: `Search`

Define the number of results per page.

```javascript
search.setLimit(10);
```

### setSort()

* Parameter: `{"sort_by":"date", "sort_order": "asc"}`
* Default: `{"sort_by":"date", "sort_order": "asc"}` 
* Return type: `Search`

Define the sorting order of the results.`sort_by` can be `date` or `price` and `sort_order` can be `asc` or `dsc`.

```javascript
search.setSort({
    "sort_by": "date",
    "sort_order": "asc"
});
```

### setFilter()

* Parameter: `leboncoin.FILTERS.ALL|leboncoin.FILTERS.PARTICULIER|leboncoin.FILTERS.PROFESSIONNELS`
* Default: `leboncoin.FILTERS.ALL` 
* Return type: `Search`

Define the type of user that posted the item.

```javascript
search.setFilter(leboncoin.FILTERS.PARTICULIER);
```

### setCategory()

* Parameter: `String`
* Return type: `Search`

Define the category of the search. [Categories](#categories) contains the complete list of possible values.

```javascript
search.setCategory("locations");
```

### setUrgencyOnly()

* Parameter: `boolean`
* Default: `false` 
* Return type: `Search`

Search only urgent item.

```javascript
search.setUrgencyOnly(true);
```

### setRegion()

* Parameter: `String`
* Return type: `Search`

Define the region of the search. [Regions](#regions) contains the complete list of possible values.

```javascript
search.setRegion("aquitaine");
```

### setDepartment()

* Parameter: `String`
* Return type: `Search`

Define the department of the search. [Departments](#departments) contains the complete list of possible values.

```javascript
search.setDepartment("aisne");
```

### setLocation()

* Parameter: `Array`
* Return type: `Search`

Define where the item is located using the zip code of the city.

```javascript
search.setDepartment([{"zipcode": "78100"},{"zipcode": "78000"}]);
```

### setArea()

* Parameter: `{"lat": X, "lng": X, "radius": X}`
* Return type: `Search`

Define the area where the item is located using GPS coordinate. `lat` and `lng` define the latitude and longitude of the circle of the defined `radius` (in meter).

```javascript
search.setArea({"lat": 45.7679705, "lng": 4.8637901999999995, "radius": 30000})
```

### addSearchExtra()
* Parameter: The key of the extra search parameter
* Parameter: The value of the extra search parameter
* Return type: `Search`

Define extra search parameter for the search. Each category has different extra parameter you can obtain the key and value by looking at the HTML content of leboncoin.fr page.

```javascript
search.addSearchExtra("price", {min: 1500, max: 2000}) // will add a range of price
search.addSearchExtra('furnished', ["1", "Non meublé"]); // will add enums for Meublé and Non meublé
```

## Item

```javascript
const leboncoin = require('leboncoin-api');
var item = (await new leboncoin.Search().setQuery("iPhone X").setLimit(1).run())[0]
```

### title

* Type: `String`

The title of the item.

### description

* Type: `String`

The full description of the item.

### category

* Type: `String`

The category of the item.

### link

* Type: `url`

The url of the item.

### images

* Type: `Array`

An array of pictures of the item.

### location

* Type: `String`

The location of the item.

### urgent

* Type: `boolean`

`true` if the sell is urgent.

### price

* Type: `Integer`

The price of the item in euro.

### date

* Type: `Date`

The date when the item has been published.

### owner

* Type: `String`

The user information of the seller.

### seller

* Type: `String`

The name of the seller of the item.

### attributes

* Type: `Object`

A Javascript object that contains all the specific attributes of the item. The number of attributes varies depending on the category and the item.

### has_phone

* Type: `boolean`

`true` if the seller of the item mentioned her phone number.


### getDetails()

* Return: `Promise<Item>`

Get the details

```javascript
await item.getDetails()
item.description
```

### getPhoneNumber()

* Return: `Promise<String>`

Get the phone number of the seller. Pay attention that this API has a strict API usage limit. I recommend that this API is only used when a user request it.

```javascript
const phone = await item.getPhoneNumber()
```

## Regions

The `ID` and `Region` can be used in the function [`setRegion`](#setregion) to filter the search.

| ID | Label    | Region    |
| -- | -------- | ----------- | 
| 1 | Alsace | alsace | 
| 2 | Aquitaine | aquitaine | 
| 3 | Auvergne | auvergne | 
| 4 | Basse-Normandie | basse\_normandie | 
| 5 | Bourgogne | bourgogne | 
| 6 | Bretagne | bretagne | 
| 7 | Centre | centre | 
| 8 | Champagne-Ardenne | champagne\_ardenne | 
| 9 | Corse | corse | 
| 10 | Franche-Comté | franche\_comte | 
| 11 | Haute-Normandie | haute\_normandie | 
| 12 | Ile-de-France | ile\_de\_france | 
| 13 | Languedoc-Roussillon | languedoc\_roussillon | 
| 14 | Limousin | limousin | 
| 15 | Lorraine | lorraine | 
| 16 | Midi-Pyrénées | midi\_pyrenees | 
| 17 | Nord-Pas-de-Calais | nord\_pas\_de\_calais | 
| 18 | Pays de la Loire | pays\_de\_la\_loire | 
| 19 | Picardie | picardie | 
| 20 | Poitou-Charentes | poitou\_charentes | 
| 21 | Provence-Alpes-Côte d'Azur | provence\_alpes\_cote\_d\_azur | 
| 22 | Rhône-Alpes | rhone\_alpes | 
| 23 | Guadeloupe | guadeloupe | 
| 24 | Martinique | martinique | 
| 25 | Guyane | guyane | 
| 26 | Réunion | reunion | 

## Departments 

The `ID` and `Department` can be used in the function [`setDepartment`](#setdepartment) to filter the search.

| ID | Label    | Department    |
| -- | -------- | ----------- | 
| 1 | Ain | ain | 
| 2 | Aisne | aisne | 
| 3 | Allier | allier | 
| 4 | Alpes-de-Haute-Provence | alpes\_de\_haute\_provence | 
| 5 | Hautes-Alpes | hautes\_alpes | 
| 6 | Alpes-Maritimes | alpes\_maritimes | 
| 7 | Ardèche | ardeche | 
| 8 | Ardennes | ardennes | 
| 9 | Ariège | ariege | 
| 10 | Aube | aube | 
| 11 | Aude | aude | 
| 12 | Aveyron | aveyron | 
| 13 | Bouches-du-Rhône | bouches\_du\_rhone | 
| 14 | Calvados | calvados | 
| 15 | Cantal | cantal | 
| 16 | Charente | charente | 
| 17 | Charente-Maritime | charente\_maritime | 
| 18 | Cher | cher | 
| 19 | Corrèze | correze | 
| 21 | Côte-d'Or | cote\_d\_or | 
| 22 | Côtes-d'Armor | cotes\_d\_armor | 
| 23 | Creuse | creuse | 
| 24 | Dordogne | dordogne | 
| 25 | Doubs | doubs | 
| 26 | Drôme | drome | 
| 27 | Eure | eure | 
| 28 | Eure-et-Loir | eure\_et\_loir | 
| 29 | Finistère | finistere | 
| 30 | Gard | gard | 
| 31 | Haute-Garonne | haute\_garonne | 
| 32 | Gers | gers | 
| 33 | Gironde | gironde | 
| 34 | Hérault | herault | 
| 35 | Ille-et-Vilaine | ille\_et\_vilaine | 
| 36 | Indre | indre | 
| 37 | Indre-et-Loire | indre\_et\_loire | 
| 38 | Isère | isere | 
| 39 | Jura | jura | 
| 40 | Landes | landes | 
| 41 | Loir-et-Cher | loir\_et\_cher | 
| 42 | Loire | loire | 
| 43 | Haute-Loire | haute\_loire | 
| 44 | Loire-Atlantique | loire\_atlantique | 
| 45 | Loiret | loiret | 
| 46 | Lot | lot | 
| 47 | Lot-et-Garonne | lot\_et\_garonne | 
| 48 | Lozère | lozere | 
| 49 | Maine-et-Loire | maine\_et\_loire | 
| 50 | Manche | manche | 
| 51 | Marne | marne | 
| 52 | Haute-Marne | haute\_marne | 
| 53 | Mayenne | mayenne | 
| 54 | Meurthe-et-Moselle | meurthe\_et\_moselle | 
| 55 | Meuse | meuse | 
| 56 | Morbihan | morbihan | 
| 57 | Moselle | moselle | 
| 58 | Nièvre | nievre | 
| 59 | Nord | nord | 
| 60 | Oise | oise | 
| 61 | Orne | orne | 
| 62 | Pas-de-Calais | pas\_de\_calais | 
| 63 | Puy-de-Dôme | puy\_de\_dome | 
| 64 | Pyrénées-Atlantiques | pyrenees\_atlantiques | 
| 65 | Hautes-Pyrénées | hautes\_pyrenees | 
| 66 | Pyrénées-Orientales | pyrenees\_orientales | 
| 67 | Bas-Rhin | bas\_rhin | 
| 68 | Haut-Rhin | haut\_rhin | 
| 69 | Rhône | rhone | 
| 70 | Haute-Saône | haute\_saone | 
| 71 | Saône-et-Loire | saone\_et\_loire | 
| 72 | Sarthe | sarthe | 
| 73 | Savoie | savoie | 
| 74 | Haute-Savoie | haute\_savoie | 
| 75 | Paris | paris | 
| 76 | Seine-Maritime | seine\_maritime | 
| 77 | Seine-et-Marne | seine\_et\_marne | 
| 78 | Yvelines | yvelines | 
| 79 | Deux-Sèvres | deux\_sevres | 
| 80 | Somme | somme | 
| 81 | Tarn | tarn | 
| 82 | Tarn-et-Garonne | tarn\_et\_garonne | 
| 83 | Var | var | 
| 84 | Vaucluse | vaucluse | 
| 85 | Vendée | vendee | 
| 86 | Vienne | vienne | 
| 87 | Haute-Vienne | haute\_vienne | 
| 88 | Vosges | vosges | 
| 89 | Yonne | yonne | 
| 90 | Territoire de Belfort | territoire\_de\_belfort | 
| 91 | Essonne | essonne | 
| 92 | Hauts-de-Seine | hauts\_de\_seine | 
| 93 | Seine-Saint-Denis | seine\_saint\_denis | 
| 94 | Val-de-Marne | val\_de\_marne | 
| 95 | Val-d'Oise | val\_d\_oise |

## Categories

The `ID` and `Category` can be used in the function [`setCategory`](#setcategory) to filter the search.

| ID | Label    | Category    |
| -- | -------- | ----------- | 
| 1 | VEHICULES | \_vehicules\_ | 
| 2 | Voitures | voitures | 
| 3 | Motos | motos | 
| 4 | Caravaning | caravaning | 
| 5 | Utilitaires | utilitaires | 
| 6 | Equipement Auto | equipement\_auto | 
| 7 | Nautisme | nautisme | 
| 8 | IMMOBILIER | \_immobilier\_ | 
| 9 | Ventes immobilières | ventes\_immobilieres | 
| 10 | Locations | locations | 
| 11 | Colocations | colocations | 
| 12 | Locations & Gîtes | locations\_gites | 
| 13 | Bureaux & Commerces | bureaux\_commerces | 
| 14 | MULTIMEDIA | \_multimedia\_ | 
| 15 | Informatique | informatique | 
| 16 | Image & Son | image\_son | 
| 17 | Téléphonie | telephonie | 
| 18 | MAISON | \_maison\_ | 
| 19 | Ameublement | ameublement | 
| 20 | Electroménager | electromenager | 
| 21 | Bricolage | bricolage | 
| 22 | Vêtements | vetements | 
| 23 | Equipement bébé | equipement\_bebe | 
| 24 | LOISIRS | \_loisirs\_ | 
| 25 | DVD / Films | dvd\_films | 
| 26 | CD / Musique | cd\_musique | 
| 27 | Livres | livres | 
| 28 | Animaux | animaux | 
| 29 | Sports & Hobbies | sports\_hobbies | 
| 30 | Instruments de musique | instruments\_de\_musique | 
| 31 | SERVICES | \_services\_ | 
| 32 | Équipements Industriels | equipements\_industriels | 
| 33 | Offres d'emploi | offres\_d\_emploi | 
| 34 | Prestations de services | prestations\_de\_services | 
| 35 | Billetterie | billetterie | 
| 36 | Cours particuliers | cours\_particuliers | 
| 38 | Autres | autres | 
| 39 | Décoration | decoration | 
| 40 | Collection | collection | 
| 41 | Jeux & Jouets | jeux\_jouets | 
| 42 | Montres & Bijoux | montres\_bijoux | 
| 43 | Consoles & Jeux vidéo | consoles\_jeux\_video | 
| 44 | Equipement Moto | equipement\_moto | 
| 45 | Arts de la table | arts\_de\_la\_table | 
| 46 | Linge de maison | linge\_de\_maison | 
| 47 | Accessoires & Bagagerie | accessoires\_bagagerie | 
| 48 | Vins & Gastronomie | vins\_gastronomie | 
| 49 | Evénements | evenements | 
| 50 | Equipement Caravaning | equipement\_caravaning | 
| 51 | Equipement Nautisme | equipement\_nautisme | 
| 52 | Jardinage | jardinage | 
| 53 | Chaussures | chaussures | 
| 54 | Vêtements bébé | vetements\_bebe | 
| 55 | Vélos | velos | 
| 56 | MATERIEL PROFESSIONNEL | \_materiel\_professionnel\_ | 
| 57 | Matériel Agricole | materiel\_agricole | 
| 58 | Transport - Manutention | transport\_manutention | 
| 59 | BTP - Chantier Gros-oeuvre | btp\_chantier\_gros\_oeuvre | 
| 60 | Outillage - Matériaux 2nd-oeuvre | outillage\_materiaux\_2nd\_oeuvre | 
| 61 | Restauration - Hôtellerie | restauration\_hotellerie | 
| 62 | Fournitures de Bureau | fournitures\_de\_bureau | 
| 63 | Commerces & Marchés | commerces\_marches | 
| 64 | Matériel Médical | materiel\_medical | 
| 65 | Covoiturage | covoiturage | 
| 66 | VACANCES | \_vacances\_ | 
| 67 | Chambres d'hôtes | chambres\_d\_hotes | 
| 68 | Campings | campings | 
| 69 | Hôtels | hotels | 
| 70 | Hébergements insolites | hebergements\_insolites | 
| 71 | EMPLOI | \_emploi\_ |