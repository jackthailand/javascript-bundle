JS.Ruby=function(c,b){b.call(new JS.Ruby.ClassBuilder(c))};JS.extend(JS.Ruby,{extendDSL:function(b,a){for(var d in a){if(!b[d]&&typeof Function.is(a[d]))(function(methodName){b[methodName]=function(){var c=a[methodName].apply(a,arguments);JS.Ruby.extendDSL(b,a);return c}})(d)}},alias:function(d,e){return function(c,b){var a=d[b];if(a!==undefined)this.def(c,a);if(e)JS.Ruby.extendDSL(e,d)}},ClassBuilder:function(a){this.def=a.method('instanceMethod');this.alias=JS.Ruby.alias(a.prototype);this.self={def:function(c,b){a.classMethod(c,b);JS.Ruby.extendDSL(this,a)}.bind(this),alias:JS.Ruby.alias(a,this)};this.extend=function(c){a.extend(c);JS.Ruby.extendDSL(this,a)};this.instanceMethod=function(c){var b=a.prototype[c];return(Function.is(b))?b:null};JS.Ruby.extendDSL(this,a)}});