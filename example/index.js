import './node_modules/proxy-oo-polyfill/proxy-oo-polyfill.js';
import RaziloBind from 'razilobind'

// Your JS data model
var model = {foo: 'foo', bar: 'bar'};

// Prefix if you wish
var rb = new RaziloBind({prefix: 'raz'});

// Bind it sir!
rb.bind('#test', model);
