# raziloBind


## ES6 JS/HTML Binding Library


ES6 JS/HTML binding library for creating dynamic web applications through HTML attribute binding. Pulls in all required parts and configures as importable ES6 module 'RaziloBind'.

raziloBind is a simple lightweight library collection written in ES6, it consists of 4 parts...

* **[razilobind-core](https://github.com/smiffy6969/razilobind-core)** *(the main part)*, to traverse, detect and observe.
* **[razilobind-binder](https://github.com/smiffy6969/razilobind-binder) [injectables]** *(the actual binders)*, binding object properties to elements to do various things.
* **[razilobind-resolver](https://github.com/smiffy6969/razilobind-resolver) [injectables]** *(to parse attribute data)*, resolving attribute data to things like strings, numbers, objects, methods etc.
* **[razilobind-alterer](https://github.com/smiffy6969/razilobind-alterer) [injectables]** *(to change things)*, altering resolved data to something else without affecting the model.

This package **razilobind** extends core, and pulls in all parts of the system, configures the default injectables and bundles everything up as a single import.

Using raziloBind is as simple as...

```javascript
import RaziloBind from 'razilobind'

var model = {foo: 'foo', bar: 'bar'};

var rb = new RaziloBind();
rb.bind('#test', model);
```

...then build your distributable logic file using babel and include the distributable into your html view. You can then access them via...

```html
<span bind-text="foo"></span>
```

... to access and and text to the span element, replacing what was inside. Changes to foo, will be reflected in the dom.


The above will import the ES6 module, set a new JS object as a model, create an instance of the class and bind the element id 'test' to the model. All changes to your model will now be reflected inside your bound element by using html attributes. In addition to this, changes to HTML values in form controls will be reflected inside your model. All you need to do now is build the ES6 files into a distributable to include in your project.

raziloBind offers a mix of two and single way binding on various elements, and also allows model methods (functions) to be re-evaluated if a two way bound model property (variable) used as a method variable is changed.

Finally, if you wish to configure the library (maybe add a prefix) or expand on this, you may build your own collection of binders, resolvers and alterers, injecting them into the library, or better still, fork parts of the library and create your own parent importer that pulls in the parts of the system you require. Only want a few binders and resolvers, just extend core (as per razilobind) and pull in what you want, raziloBind is as big as you want it to be.


## Why ES6?


It's the future of JS, is vanilla JS (which I like), is clean, is more modular, offers better organisation of code and using via imports is a breeze! So why would you not?


## Is There an ES5 Distributable?


No, if you want one, I am sure it would be quite simple to build one from the source files, build a copy of razilobind using babel + grunt/gulp and you should be able to include it via a require() import. I do not suppor this though, as it kind of defeats the object of being an ES6 module collection.


## Why Another Binding Framework?


This is not framework! It's a library. Frameworks force you to work in a specific fashion, do things in a specific way, force architecture whilst giving you the tools to complete a job. They offer a blueprint, foundations and the means to do the job. Moving from one framework to another can be a pain and code is not always portable, they tie you in! Frameworks are great tools, if you are happy to accept these caveats.

Libraries on the other hand tend to be lighter, offer a means to do specific task/tasks, are more focussed, more easily ported, stay away from decisions you should be able to make yourself and should allow you to be more flexible. They can be switched out for something similar when needed, or extended, forked to add your own sugar. Less time or don't care about choice, use a framework, more time or like flexibility, use a library.

Why another? because I have yet to find a nice ES6 library that is easily extendabled, hackable/makeyourownable, allows for fine grain choice of what you build in, and because choice is good is it not?


## Overview


raziloBind is one thing and one thing alone, a binding library that offers attribute binding in HTML to JS object data (a model). It is written as 4 modules, whith this fifth module acting as a way to pull the 4 modules together by extending the core module, injecting in all default alterers, binders and resolvers (yes you can fork this module, and inject it what you need to lighten the load if you dont want all the default stuff).

raziloBind works by having a core, the base part of the tool that gives a traverser (for looking through the dom), a detector (for loading and looking through alterers, binders and resolvers) and the observer (for watching changes on the model). This package injects several things into the core on load (injectables)...

* **Binders** - These bind resolvable data to an element attribute that will do a specific job, like output text, show/hide and element etc.
* **Resolvers** - These are what turns your data inside your element attribute into things like strings, objects, model properties etc. They parse text into resolved data (and generate observers for data that is updateable).
* **Alterers** - These change resolved data that is binded to an element attribute, you can chain them too.

Binding is not a new thing, angular, vue, backbone, rivets... there are many, big and small binding frameworks and libraries out there, some offer more than just binding (frameworks like angular, vue), raziloBind tries to keep this simple and not force specific ways of working, we just offer a simple way to build dynamic web apps by binding, resolving and altering.

Things wouldn't be complete without a way to customize, well at present you can prefix, or not, all your attributes. Default is off, giving you the option to go clean or add a common prefix to all razilo attributes such as raz-bind-text="" or raz-alter-text="". You can also extend raziloBind in two ways, by forking this package, and creating a build or what you need, plus extras (mmmmmm clean), or the other way, by injecting custom alterers, binders and resolvers directly (not so clean but handy). In an ideal world, you would build core, alterers, binders and resolvers directly into your own project without this package ofr a real clean import.

No mustache binds I hear you scream! That is correct, there should be no need for them really, they offer more load on the traverser and can be worked out of the equation by using a dedicated bound element. When your code gets large, lots of mustaches can make things ugly to read, surely HTML tags are better in a HTML file than mustaches?


### Configure


Add in the prefix option to force a prefix on all razilobind attributes...


```javascript
import RaziloBind from 'razilobind'

var model = {foo: 'foo', bar: 'bar'};

var rb = new RaziloBind({prefix: 'raz'});
rb.bind('#test', model);
```

Now prefixes should be available on all razilobind attributes...


```html
<span raz-bind-text="foo" raz-alter-text="trim"></span>
```


### Core


[smiffy6969/razilobind-core](https://github.com/smiffy6969/razilobind-core)


Handles all the finicky bits, like traversing the dom, observing changes, registering observers and detecting injectables to use. You should'nt really have to mess with this, but you can send in the prefix option if importing this directly (this package passes this on).


### Binders (bind-???="")


[smiffy6969/razilobind-binder](https://github.com/smiffy6969/razilobind-binder)

Binds data inside the attribute to an element to perform a specific function. Each function offers a way to bring your HTML to life. For a full list of binders, please see the razilobind-binder module.

Using a binder is simple, you may bind any resolvable data such as strings, numbers, objects etc. as so...

```HTML
<!-- Property of the model (two way bind, updatable) -->
<span bind-text="foo"></span>

<!-- String (one time bind, not updateable) -->
<span bind-text="'hello'"></span>

<!-- Phantom property, an instance of an iterable i.e. loop (two way bind, updatable) -->
<span bind-text="$value.name"></span>
```

We do not prefix as standard, you set your action 'bind' and follow it with the binder type 'text' to give a text binding to the span element with 'bind-text'. Other binders include html, show, hide, for, class, attribute etc. For a full list please see the razilobind-binder module

Some binders require more to work, check out the binders module to find out which, we can confgure them using the config-? attribute, and affect them using other attributes such as the bind-for binder.


```HTML
<!-- simple for loop -->
<ul>
	<li bind-for="foobar">
		<span bind-text="$key"></span>
		<span bind-text="$value"></span>
	</li>
</ul>

<!-- advance for loop changing phantom names, ordering by multiple properties of phantom, filtering with wildcards, limits and offsets -->
<ul>
	<li bind-for="foobar" config-for="{'key': 'index', 'value': 'data'}" order-for="{'id': 'desc', 'foo': 'desc'}" filter-for="{'title': ['*', 'one', '*']}" limit-for="2" offset-for="2">
		<span bind-text="$index"></span>
		<span bind-text="$data.foo"></span>
	</li>
</ul>
```

Find out more in the binders module.


### Resolvers (bind-text="???")


[smiffy6969/razilobind-resolver](https://github.com/smiffy6969/razilobind-resolver)

So you use a binder to perform a bind of data to an element, well the data that is bound could be many different types, so we have resolvers to work out what the data is, inside the attribute quotes.

There are many types of data we may want to bind, some are one time one way binding (on pag eload) others are two way, allowing the dom to update the model and the model to update the dom when they change value. Resolvers include string, number, object, array etc. For a full list of all resolvers, please see the razilobind-resolver module.

Once data has been resolved, it can be used on the element by the binder.

Resolvers are simple too, any data inside a raziloBind attribute should be structured in the same way...

* 'string' - string literal.
* 123 - number literal.
* false - boolean literal.
* ['foo', bar] - array with string and property as values.
* foo - property of the model (no quotes!) using dot and bracket notation i.e. foo.bar[1].

... There are more, so go check out the resolver module to find them all.

Like we said some are one way, some two way. One way binders tend to be literals, methods (functions assigned to model property), two way binders tend to be properties of the model (variables assigned to model property). two way binders can be updated after page load with changes being reflected in the dom (as well as being updated by the dom using form controls etc.).

We send 'tend to be' when we mentioned two way binding, this is because there is some greyness here, literals can also be two way with one caveat, they must include a two way resolver in them. By this we mean adding a property of the model to a function, or adding a phantom property to an object etc. Basically this...

```HTML
<span bind-text="function(foo)"></span>
<span bind-text="['test', foo]"></span>
<span bind-text="{'test': foo}"></span>
<span bind-text="{'test': foo}"></span>
```

... will create a two way binding re-evaluating the resolvable data completely when foo is changed, hmmmmmmm!

Other thing sto note are using model properties as keys for model properties inception style...

```HTML
<span bind-text="foo.bar[baz.bar[1]]"></span>
```

... Feel free to nest and use outcomes of properties as names to others, do this in objects, arrays... All will created two way binding, if any part is changed, the whole thing is re-resolved and updated.


### Alterers (alter-text="???")


[smiffy6969/razilobind-alterer](https://github.com/smiffy6969/razilobind-alterer)

Alterers change the bound resolved data (after processing) to change the value to something else, kinda handy if you want to format a date from a string/timestamp, or maybe add http:// to the front of a string. Alteres do not affect resolved data, they alter it, use this with the binder but do not make it permenant or affect the core resolved value.

Alterers include date, trim, prefix, join etc. For a full list of alterers, please see the alterer module.

using an alterer is simple, choose the binder you wish to alter, such as 'text' and change it as follows

```HTML
<span bind-text="foo" alter-text="{'prefix': 'http://', 'suffix': '.com'}"></span>
<span bind-text="foo" bind-show="bar" alter-text="{'prefix': 'http://'}" alter-show="{'not': foobar}"></span>
```

You can use many alterers on a single binder, or on many binders. You can embed properties, functions whatever, just remember to stick to the resolvers rules for data, just like binders. Changes to alterer two way data will, yes you guest it, make the bind re-evaluate, nice, You are no longer hampered by single way binding, alterers can offer a way to affect single way binders!


## Setup


To use raziloBind you will need to be ES6 ready, this means using a build tool to comile your ES6 into todayScript (javascript used by browsers today as they do not support ES6 really yet, in the future the compile should not be needed!).

Create your project space, a HTML file to bind too, an application js file to be the start of your logic, a package file holding your info for your project (plus ES6 presets for compilation) and a grunt/gulp file to build your distribution file which we will use in the HTML view. Simpley put, we create an application logic file, import raziloBind, compile to a distribution file which we add at the base of the HTML view.

So create a workspace now (pssst I will be using grunt)...


### Package file

projectRoot/package.json

Contains all aspects of your project and sets up babel preset (babel compiles the ES6 to 5), set private to true unless you want to publish to npm (stops accidental publishing!)

```json
{
	"name": "project name",
	"description": "My great project",
	"version": "0.0.1",
	"licence": "whatever you use",
	"private": true,
	"author": {
		"name": "You",
		"url": "your URL"
	},
	"dependencies": {
		"razilobind": "*"
	},
	"devDependencies": {
		"babel-core": "^6.7.7",
		"babel-preset-es2015": "^6.6.0",
		"babelify": "^7.2.0",
		"grunt": "^1.0.1",
		"grunt-browserify": "^5.0.0",
		"grunt-contrib-watch": "^1.0.0"
	},
	"browserify": {
		"transform": [["babelify", { "presets": ["es2015"] }]]
	}
}
```

Feel free to change the dev dependancy version, or set to widlcards, or load the current version in, these are just the versions I used at the time!

This will create a package file for your project, ensure the preset for babel is there as newer versions of babel need this here to confirm it is ES6 module.


### Grunt file

projectRoot/Gruntfile.js

You can use any build tool you like, I am at this moment in time using grunt, beacuse well, I just am.


```javascript
module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
            	transform: [
                	["babelify"]
            	]
            },
            files: {
            	"./dist/dist.js": ["./app.js"]
            }
         }
      },
      watch: {
         scripts: {
            files: [
				"./app.js",
				"./node_modules/razilobind/**/*.js",
				"./node_modules/razilobind-alterer/**/*.js",
				"./node_modules/razilobind-binder/**/*.js",
				"./node_modules/razilobind-core/**/*.js",
				"./node_modules/razilobind-resolver/**/*.js"
			],
            tasks: ["browserify"]
         }
      }
   });

   grunt.loadNpmTasks("grunt-browserify");
   grunt.loadNpmTasks("grunt-contrib-watch");

   grunt.registerTask("default", ["watch"]);
   grunt.registerTask("build", ["browserify"]);
};
```

This will allow you to build the project logic file starting at app.js into a compiled ES5 compatible module called dist/dist.js which can be used in your HTML view.

```
# Compile your code from command line in project root
grunt build

# Watch for changes to your files when developing for live re-compile on file change from command line in project root
grunt watch
```


### HTML View

projectRoot/index.html

Create a main HTML file to hit from your browser...


```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="description" content="">
		<meta name="keywords" content="">
		<title>Test</title>

		<!-- Polyfill native API's if missing -->
        <script type="text/javascript" src="node_modules/proxy-polyfill/proxy.js"></script>
	</head>
	<body>
		<div id="test">
            <span bind-text="foo"></span>
		</div>
        <script type="text/javascript" src="dist/dist.min.js"></script>
	</body>
</html>
```

In here there are a few things to note:

1. You must polyfill the proxy function to ensure it is present on older browsers.
2. You bind your model to the parent element of choice.
3. Ensure elements are loaded before applying your distributable logic file (you cannot traverse elements that are not there). You can however bind the logic after page dom ready instead.


### Application Logic

projectRoot/app.js

This will be compiled to a distributable, it will not be pulled in directly, it is the starting point for your distributable logic.

In here, pull in raziloBind (or you can import the 4 areas, setting your own injectables), create an object, bind to the element.


```javascript
import RaziloBind from 'razilobind'

var model = {
	foo: 'Hello World!'
};

var rb = new RaziloBind();
rb.bind('#test', model);
```


### Install raziloBind and any Dev dependancies


Now import dependancies via npm, from project root...


```
npm install
```

### Compile Your Distributable


Build your distributable (if you do not have grunt installed globally too, this will fail)...


```
grunt build
```


You should now be able to hit the index from your brwoser and see the hello world! text.


### Live Updating of Distrbutable


For development, you can watch for changes to JS files and re-compile on change.


```
grunt watch

#or

grunt
```


## What next?


Not sure, more binders, more alterers, more options... let us know what you think!
