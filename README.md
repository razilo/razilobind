# raziloBind

## ES6 JS/HTML Binding Library

ES6 JS/HTML binding library for creating dynamic web applications through HTML attribute binding. Pulls in all required parts and configures as RaziloBind.

raziloBind is a simple lightweight library written in ES6, it consists of 4 parts, raziloCore (the main part) and 3 libraries for dealing with binders, resolvers and alterers. This package is the parent package that pulls in all parts of the system, configures the defaults and bundles it all up as a single import.

Using raziloBind is as simple as...

```javascript
import RaziloBind from 'razilobind'

var model = {foo: 'foo', bar: 'bar'};

var rb = new RaziloBind();
rb.bind('#test', model);
```

The above will import the ES6 module, set a new JS object as a model, create an instance of the class and bind the element id 'test' to the model. All changes to your model will now be reflected inside your bound element by using html attributes. In addition to this, changes to HTML values in form controls will be reflected inside your model.

raziloBind offers a mix of two and single way binding on various elements, and also allows model methods (functions) to be re-evaluated if a two way bound model property (variable) used as a method variable is changed.

Finally, if you wish to expand on this, you may build your own collection of binders, resolvers and alterers, injecting them into the library, or better still, fork parts of the library and create your own parent importer that pulls in the parts of the system you require. Only want a few binders and resolvers, just extend core (as per razilobind) and pull in what you want, raziloBind is as big as you want it to be.


WIP!


```javascript
import RaziloBind from 'razilobind'

var model = {
	foo: 'fooey wooey',
    foo1: '1 fooey wooey 1',
    foo2: '2 fooey wooey 2',
    foo3: '3 fooey wooey 3',
    foo4: '4 fooey wooey 4',
    test: 'foo',
    test2: 1,
    test23: 0,
	booly: false,
    test3: {'t3': 'foobar'},
    bar: {
        foobar: 'foobarey woobarey',
        barfoo: {
            'bf': 'bfbfbf',
            'b f': 'b f b f b f'
        },
        foo: ['123', '321']
    },
    style: {
        'color': 'red',
        'font-weight': 'bold'
    },
	color: 'red',
	fontSize: '8px',
	classname: 'orange',
	html: '<strong>strong text</strong>',
	methodOne: function(a) {
		return 'test: ' + a;
	},
	methodTwo: function(a) {
		return a;
	},
	forLoop: [
		{'id': 0, 'foo': 'a', 'title': 'one', 'data': 'something'},
		{'id': 1, 'foo': 'b', 'title': 'two', 'data': 'something else'},
		{'id': 2, 'foo': 'c', 'title': 'three 1', 'data': 'something else again'},
		{'id': 2, 'foo': 'e', 'title': 'three 2', 'data': 'something else again'},
		{'id': 2, 'foo': 'd', 'title': 'three 3', 'data': 'something else again'}
	],
	forLoop2: {
		one: {'title': 'one - something'},
		two: {'title': 'two - something else'}
	},
	selectOptions: ['aaaaa', 'bbbbb', 'cccccc'],
	selectOptions2: [{'id': 1, 'name': 'option1'}, {'id': 2, 'name': 'option2'}, {'id': 3, 'name': 'option3'}],
	selectedOption: null,
	selectedOption2: 2,
    selectedMultiple2: [1,2],
    eventClicked: 0,
    eventType: null,
    eventClick: function(event, data) {
        this.eventClicked++;
        this.eventType = event.type;
    },
	timestamp: Date.now(),
	date: function() { return new Date(); }
};

var rb = new RaziloBind();
rb.bind('#test', model);
```

next create an index.html to load from browser, to bind your model to, saved as index.html in web root

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
			<p>Hello <span bind-show="false">how are</span> you</p>
            <hr/>
            1 foo - <span bind-text="foo" bind-show="true" bind-style="style"></span>
            <hr/>
            2 foo1 - <span bind-text="foo1" bind-hide="test23"></span>
            <hr/>
            3 foo2 - <span bind-text="foo2" bind-style="{'color': color, 'font-size': fontSize}"></span>
            <hr/>
            4 'boo' - <span bind-text="'bc'"></span>
            <hr/>
            5 222 - <span bind-text="222"></span>
            <hr/>
            6 bar.foobar - <span bind-text="bar.foobar" bind-class="'orange'"></span>
            <hr/>
            7 bar['foobar'] - <span bind-text="bar['foobar']" bind-class="['orange', 'bold']"></span>
            <hr/>
            8 bar.barfoo.bf - <span bind-text="bar.barfoo.bf" bind-class="{'orange': booly, 'bold': true}"></span>
            <hr/>
            9 bar.barfoo['bf'] - <span bind-text="bar.barfoo['bf']" bind-class="classname"></span>
            <hr/>
            10 bar['barfoo']['bf'] - <span bind-text="bar['barfoo']['bf']"></span>
            <hr/>
            11 bar['foo'][0] - <span bind-text="bar['foo'][0]"></span>
            <hr/>
            12 bar.foo[1] - <span bind-text="bar.foo[1]"></span>
            <hr/>
            13 bar.foo - <span bind-text="bar.foo"></span>
            <hr/>
            14 test - <span bind-text="test"></span>
            <hr/>
            15 bar[test] - <span bind-text="bar[test]"></span>
            <hr/>
            16 bar[test][0] - <span bind-text="bar[test][0]"></span>
            <hr/>
            17 test2 - <span bind-text="test2"></span>
            <hr/>
            18 bar[test][test2] - <span bind-text="bar[test][test2]"></span>
            <hr/>
            19 test3.t3 - <span bind-text="test3.t3"></span>
            <hr/>
            20 bar[test3.t3] - <span bind-text="bar[test3.t3]"></span>
            <hr/>
            21 bar[test3['t3']] - <span bind-text="bar[test3['t3']]"></span>
            <hr/>
            22 Html binding string &lt;strong&gt;strong text&lt;/strong&gt; - <span bind-html="'<strong>strong text</strong>'"></span>
			<hr/>
            23 Html binding property 'html' - <span bind-html="html"></span>
			<hr/>
            24 Attribute binding various attributes from string - <span bind-attribute="'disabled'">INSPECT ME</span>
			<hr/>
            25 Attribute binding various attributes from array (also embedded function) - <span bind-attribute="['disabled', 'required', methodTwo('data-something')]">INSPECT ME</span>
			<hr/>
            26 Attribute binding various attributes from property - <span bind-attribute="{'disabled': true, 'read-only': booly, 'hello': 'world'}">INSPECT ME</span>
			<hr/>
            27 data binding methods - <span bind-text="methodOne(foo)"></span>
			<hr/>
			28 if/else binding, remove and add on conditional - <span bind-if="true">[show if true]</span> <span bind-else="false">[show if false]</span>
			<hr/>
			29 if/else binding on property, remove and add on conditional (model.booly) - <span bind-if="booly">[show if booly true]</span> <span bind-else="booly">[show if booly false]</span>
			<hr/>
			30 else binding on property, with child binded elements - <span bind-else="booly">Showing binded elements: <span bind-text="bar.barfoo.bf" bind-class="{'bold': true}"></span></span>
			<hr/>
			31 functions in objects - <span bind-style="{'color': methodTwo('green')}">This is green text</span>
			<hr/>
			32 for loop [simple] from array:
			<ul>
				<li bind-for="[10,20,30,40]">
					<span bind-text="foo"></span>
					<span bind-text="$key"></span>
					<span bind-text="$value"></span>
				</li>
			</ul>
			<hr/>
			33 for loop [simple] from object:
			<ul>
				<li bind-for="{'a':1000,'b':2000,'c':3000,'d':4000}"><span bind-text="$key"></span> <span bind-text="$value"></span> <span bind-text="foo"></span></li>
			</ul>
			<hr/>
			34 for loop [simple] from property:
			<ul>
				<li bind-for="forLoop"><span bind-text="$key"></span> <span bind-text="$value.title"></span> <span bind-text="foo"></span></li>
			</ul>
			<hr/>
			35 sending phantom value into method()
			<ul>
				<li bind-for="forLoop"><span bind-text="$key"></span> <span bind-text="methodTwo($value.title)"></span></li>
			</ul>
			<hr/>
			36 setting phantom names for 'for' loops (the unreal respresentation of the current itteration in the loop, i.e. how we access the data in a loop)
			<ul>
				<li bind-for="forLoop" config-for="{'key': 'index', 'value': 'data'}" order-for="{'id': 'desc', 'foo': 'desc'}" filter-for="{'title': '*one*'}" limit-for="2" offset-for="2">
                    <span bind-text="$index"></span> <span bind-text="$data.id"></span> <span bind-text="$data.foo"></span> <span bind-text="methodTwo($data.title)"></span>
                </li>
			</ul>
			<hr/>
			37 using objects with 'for' loops instead of an array
			<ul>
				<li bind-for="forLoop2"><span bind-text="$key"></span> <span bind-text="$value.title"></span></li>
			</ul>
			<hr/>
			38 using alterers to change resolved bindable data - [START]<span bind-text="' spaces at start and end removed '" alter-text="'trim'"></span>[END]
			<hr/>
            39 Binding value to input - <input type="text" bind-value="bar.foobar"/> - <span bind-text="bar.foobar"></span>
			<hr/>
            40 Binding value to textarea - <p bind-text="bar.foobar"></p><textarea bind-value="bar.foobar"></textarea>
			<hr/>
            41 Binding value to select - <p bind-text="selectedOption"></p>
			<select bind-value="selectedOption">
				<option bind-for="selectOptions" bind-value="$key" bind-text="$value"></option>
			</select>
			<hr/>
            42 Binding value to select array of objects - <p bind-text="selectedOption2"></p>
			<select bind-value="selectedOption2">
				<option bind-for="selectOptions2" bind-value="$value.id" bind-text="$value.name"></option>
			</select>
			<hr/>
            43 Binding checked to checkbox - <input type="checkbox" bind-checked="booly"/><span bind-show="booly">Boom!!!</span>
			<hr/>
            44 Binding checked to radio buttons - Selected: <span bind-text="test2"></span>
			<br/>
			<input type="radio" name="test" value="0" bind-checked="test2"/><br/>
			<input type="radio" name="test" value="1" bind-checked="test2"/><br/>
			<input type="radio" name="test" value="2" bind-checked="test2"/>
			<hr/>
            45 Binding file upload - Selected: <span bind-text="foo"></span>
			<br/>
			<input type="file" bind-value="foo">
			<hr/>
            46 Binding value on multi select -  Selected: <span bind-text="selectedMultiple2"></span>
			<br/>
			<select bind-value="selectedMultiple2" multiple>
				<option bind-for="selectOptions2" bind-value="$value.id" bind-text="$value.name"></option>
			</select>
			<hr/>
            47 Binding events on element click -
            <button bind-event="{'click': eventClick('Booooom!!!')}">Click Me!</button>
            <span bind-text="eventClicked"></span>:<span bind-text="eventType"></span>
			<hr/>
            48 Binding events on element mouseenter/mouseleave -
            <span bind-event="{'mouseenter': eventClick('Booooom!!!'), 'mouseleave': eventClick('Booooom!!!')}" style="background-color: orange;">Mouse Over Me!</span>
            <span bind-text="eventClicked"></span>:<span bind-text="eventType"></span>
			<hr/>
            49 JSON Alterer - model.bar - <span bind-text="bar" alter-text="'json'"></span>
			<hr/>
            50 Not (!) Alterer - object - <span bind-text="bar" alter-text="'not'"></span>, bool false - <span bind-text="booly" alter-text="'not'"></span>, int 0 - <span bind-text="test23" alter-text="'not'"></span>
			<hr/>
            51 Prefix/Suffix Alterers - add <em>http://www.</em> to beginning and <em>.co.uk</em> to end ----- <strong bind-text="'google'" alter-text="{'prefix': 'http://www.', 'suffix': '.co.uk'}"></strong>
			<hr/>
            52 Date Alterer (ported from dateFormat <a href="https://github.com/felixge/node-dateformat">felixge/node-dateformat</a>) -
			<em>timsetamp</em> <strong bind-text="timestamp" alter-text="{'date': 'dd/mm/yyyy'}"></strong> -
			<em>date object</em> <strong bind-text="date()" alter-text="{'date': 'dd/mm/yyyy'}"></strong> -
			<em>date string</em> <strong bind-text="'1977-10-01'" alter-text="{'date': 'dd/mm/yyyy'}"></strong>
			<hr/>
			53 Join Alterer (join array/object values as string) - <span bind-text="['one', '-', 'two', '-', 'three']" alter-text="'join'"></span>
			<hr/>
		</div>
        <script type="text/javascript" src="dist/dist.min.js"></script>
	</body>
</html>
```

To compile es6 to es5 with raziloBind included (if creating an es6 project), first create .babelrc file in webroot

```json
{ "presets": ["es2015"] }
```

Next create Gruntfile.js in webroot to run the transform to es5 compiled file (./dist/dist.js)

```js
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
               // output file < input file/s
               "./dist/dist.js": ["./app.js"]
            }
         }
      },
      watch: {
         scripts: {
			// watchers for playing with and uploading in realtime
            files: ["./src/**/*.js", "./node_modules/razilovm/**/*.js"],
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

next add a package.js file to your web root to handle npm details


```json
{
  "author": {
    "name": "You",
    "url": "your url"
  },
  "description": "",
  "name": "test",
  "version": "0.0.1",
  "dependencies": {
    "razilobind": "^1.0.0"
  },
  "devDependencies": {
	  "babel-core": "^6.7.4",
      "babel-preset-es2015": "^6.6.0",
      "babelify": "^7.2.0",
      "grunt": "^1.0.1",
      "grunt-browserify": "^5.0.0",
      "grunt-contrib-watch": "^1.0.0"
  }
}
```

Once complete, open a terminal in your webroot and run

```
npm install
```

to pull in raziloBind and all dependancies for dev (building to from es6 > es5)


Once complete, build your distribution file and load index.html in browser.

```
grunt build
```

Optionally you can watch for changes to razilovm and your project to update on file changes

```
grunt
```

# Usage

## Binders

Bind model properties to HTML elements via attributes. Substitue * for the binder to use `bind-*=""`, such as bind-text, bind-show...

* bind-text - (all resolvers, phantom) Bind data to element contents
* bind-show - (all resolvers, phantom) Show element if data truthy
* bind-hide - (all resolvers, phantom) Hide element if data truthy
* bind-style - (objects or properties, phantom) Apply style to element from data as object data {'color': 'red'} object embedded model properties {'color': color} or model object
* bind-class - (objects, arrays, strings or properties, phantom) Apply classes to element from data as object data {'foobar': truthy}, arrays ['foo', modelProperty, ... ], string 'foobar' or property fooBar (string value, object with truthies or array)
* bind-html - (string, property, phantom), bind to elements innerHTML replacing contents with html, use with caution, only bind HTML from trusted sources.
* bind-attribute - (string, array, object, property, phantom), adds attribute to element via string, array, object or property. use objects with truthy or stirng/array to ad attribute only, or objects with key as attribute and value as attribute value to populate the attribute value.
* bind-if - (property, method, boolean, phantom) Add or remove an element from dom based on a truthy conditional.
* bind-else - (property, method, boolean, phantom) Add or remove an element from dom based on a falsey conditional.
* bind-for - (property, method, object, array, phantom) Add multiple elements by looping over resolved data (generates phantom properties, defaults $key, $value). Can use order-for="{key: value,..}", filter-for="{key: ['*', foobar, '*']}", limit-for="10", offset-for="1" to affect the for loop
* bind-value - (property, method, phantom) Bind a model to inputs, selects, options... anything that takes a value. updated to the elements will be changed on the model! If using mutliple select, will give an array of option values.
* bind-checked - (property, method, phantom) As per bind-value... but for inputs that check something, e.g. checkboxes and radio buttons.
* bind-event - (object) Bind any event types of the element to functions in the model using {'eventName': method()}. Methods contain the event followed by any properties sent in e.g. method(event, propertyA, propertyB,...)

## Resolvers

Data that can be resolved when using with HTML bindable attributes. Resolvers work on binders, alterers and configs.

* array - one time bindable array, or updatable embedded properties. "['literal', updatable.object['data'], method(), ...]"
* object - one time bindable object, or updatable embedded properties, methods. "{'literal': 'data', 'updatable': object['data'], 'a-method': method(), ...}"
* string - one time literal "'literal'"
* number - one time number "12345"
* boolean - one time boolean "true" or "false"
* property - updatable model value "foo.bar['baz']", "foo[foobar['baz']]", ...
* method - updatable model method "foo&#40;'test'&#41;", "foo&#91;foobar&#91;'baz'&#93;&#93;&#40;foobar&#41;", "foo.bar({object['data']: 'data'})", NOTE: updates only if method changes or method variables are properties as either will force re-evaluation...
* phantom - updateble property that resolves to an iterable instance. Turns arrays/object keys/properties into phantom properties (defaults $key, $value, can be changed in binder configs that use phantoms


## Configurators


You can configure some binders, to do this substitue * for the binder to configure `config-*=""`, such as config-for="{'key': 'foo', 'value', bar}" to use phantom resolvers (an object/array iteration) in your html as $foo and $bar when iterating using for binders as so...


```html
<ul>
    <li bind-for="foobar" config-for="{'key': 'idx', 'value': 'data'}">
        <span bind-text="$idx"></span>
        <span bind-text="$data"></span>
    </li>
</ul>
```


## Alterers


Changes that you can apply to binded data. Alterers change the resolved data before using it in the binded element, such as trimming whitespace on strings.
Substitue * for the binder to alter `alter-*=""`, such as alter-text, alter-show... with the alterer/s specified in attribute value such as


```html
<p bind-text="foobar" alter-text="trim"></p>
<p bind-text="foobar" alter-text="['trim', 'another',...]"></p>
<p bind-text="foobar" alter-text="{'trim': 'options', 'another': 'options',...}"></p>
```


Alterers... may or may not take options in as data to act on when required. When multiple alterers affect a single bind type, the affects are cumulative.


* trim - Trims resolved data of whitespace at front and rear of string. No options used.
* json - Stringifies property as a JSON string.
* prefix - Add something to start of a string {'prefix': 'something'}.
* suffix - Add something to end of a string {'suffix': 'something'}.
* not - Get the boolean opposite of the property.
* date - Convert string, date object, timestamp into formatted date string {'date': '1978/11/01'}.
* join - Joins the values of array/object as a string and returns result.
