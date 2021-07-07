!function webpackUniversalModuleDefinition(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["jzo-library"]=t():e["jzo-library"]=t()}(self,(function(){return(()=>{"use strict";var e={107:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.ArgumentException=void 0;var o=function(e){function ArgumentException(){return null!==e&&e.apply(this,arguments)||this}return r(ArgumentException,e),ArgumentException.Cast=function(e){return e},ArgumentException.CastArray=function(e){return e},ArgumentException}(n(494).Exception);t.ArgumentException=o},317:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.ArgumentNullException=void 0;var o=function(e){function ArgumentNullException(){return null!==e&&e.apply(this,arguments)||this}return r(ArgumentNullException,e),ArgumentNullException.Cast=function(e){return e},ArgumentNullException.CastArray=function(e){return e},ArgumentNullException}(n(107).ArgumentException);t.ArgumentNullException=o},59:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.ArgumentOutOfRangeException=void 0;var o=function(e){function ArgumentOutOfRangeException(){return null!==e&&e.apply(this,arguments)||this}return r(ArgumentOutOfRangeException,e),ArgumentOutOfRangeException.Cast=function(e){return e},ArgumentOutOfRangeException.CastArray=function(e){return e},ArgumentOutOfRangeException}(n(107).ArgumentException);t.ArgumentOutOfRangeException=o},7:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserScrollbars=void 0;var n=function(){function BrowserScrollbars(){}return BrowserScrollbars.staticContructor=function(){"undefined"!==typeof document?(BrowserScrollbars._height=BrowserScrollbars.getScrollBarHeight(),BrowserScrollbars._width=BrowserScrollbars.getScrollBarWidth(),console.log("BrowserScrollbars, scroll width: "+BrowserScrollbars._width.toString()+", height: "+BrowserScrollbars._height.toString())):console.log("BrowserScrollbars, no document found")},Object.defineProperty(BrowserScrollbars,"width",{get:function(){return BrowserScrollbars._width},enumerable:!1,configurable:!0}),Object.defineProperty(BrowserScrollbars,"height",{get:function(){return BrowserScrollbars._height},enumerable:!1,configurable:!0}),BrowserScrollbars.getScrollBarWidth=function(){var e=document.createElement("p");e.style.width="100%",e.style.height="200px";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetWidth;t.style.overflow="scroll";var r=e.offsetWidth;return n===r&&(r=t.clientWidth),document.body.removeChild(t),n-r},BrowserScrollbars.getScrollBarHeight=function(){var e=document.createElement("p");e.style.width="10px",e.style.height="100%";var t=document.createElement("div");t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.visibility="hidden",t.style.width="200px",t.style.height="150px",t.style.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var n=e.offsetHeight;t.style.overflow="scroll";var r=e.offsetHeight;return n===r&&(r=t.offsetHeight),document.body.removeChild(t),n-r},BrowserScrollbars._width=0,BrowserScrollbars._height=0,BrowserScrollbars}();t.BrowserScrollbars=n,n.staticContructor()},974:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Dictionary=void 0;var o=n(142),i=n(107),u=function(e){function Dictionary(){var t=null!==e&&e.apply(this,arguments)||this;return t._keys=[],t._values=[],t.add=function(e,n){t.checkKeyAndPerformAction((function(e,n){if(t.containsKey(e))throw new i.ArgumentException("An element with the same key already exists in the dictionary: "+e.toString());t._keys.push(e),t._values.push(n)}),e,n)},t.clear=function(){t._keys=[],t._values=[]},t.containsKey=function(e){return t.checkKeyAndPerformAction((function(e){return-1!==t._keys.indexOf(e)}),e)},t.get=function(e){return t.checkKeyAndPerformAction((function(e){if(!t.containsKey(e))throw new i.ArgumentException("Key not found: "+e.toString());var n=t._keys.indexOf(e);return t._values[n]}),e)},t.remove=function(e){return t.checkKeyAndPerformAction((function(e){if(!t.containsKey(e))return!1;var n=t._keys.indexOf(e);return t._keys.splice(n,1),t._values.splice(n,1),!0}),e)},t.update=function(e,n){return t.checkKeyAndPerformAction((function(e,n){if(t.containsKey(e)){var r=t._keys.indexOf(e);t._values[r]=n}else t._keys.push(e),t._values.push(n)}),e,n)},t}return r(Dictionary,e),Dictionary.isEitherUndefinedNullOrStringEmpty=function(e){return"undefined"===typeof e||null===e||""===e.toString()},Dictionary.prototype.checkKeyAndPerformAction=function(e,t,n){if(Dictionary.isEitherUndefinedNullOrStringEmpty(t))throw new Error(Dictionary._undefinedKeyErrorMessage);return e(t,n)},Dictionary.Cast=function(e){return e},Dictionary.CastArray=function(e){return e},Object.defineProperty(Dictionary.prototype,"count",{get:function(){return this._values.length},enumerable:!1,configurable:!0}),Object.defineProperty(Dictionary.prototype,"keys",{get:function(){return this._keys},enumerable:!1,configurable:!0}),Object.defineProperty(Dictionary.prototype,"values",{get:function(){return this._values},enumerable:!1,configurable:!0}),Dictionary._undefinedKeyErrorMessage="Key is either undefined, null or an empty string.",Dictionary}(o.ObjectBase);t.Dictionary=u},819:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.EventArgs=void 0;var o=function(e){function EventArgs(){return null!==e&&e.apply(this,arguments)||this}return r(EventArgs,e),EventArgs.Cast=function(e){return e},EventArgs.CastArray=function(e){return e},EventArgs}(n(142).ObjectBase);t.EventArgs=o},494:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Exception=void 0;var o=n(142),i=function(e){function Exception(t,n){var r=e.call(this)||this;return r.toString=function(){var e,t=r.message;t=o.ObjectBase.IsUndefinedOrNull(t)?r.constructor.constructor.name:r.constructor.constructor.name+": "+t;var n=null!==(e=r.innerException)&&void 0!==e?e:null;return o.ObjectBase.IsUndefinedOrNull(n)||(t=t+" ---\x3e "+n.toString()+"\r\n"),t},r.message=t,r.innerException=n,r}return r(Exception,e),Exception.Cast=function(e){return e},Exception.CastArray=function(e){return e},Exception}(o.ObjectBase);t.Exception=i},614:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.GenericEvent=void 0;var o=n(317),i=n(142),u=n(475),c=function(e){function GenericEvent(){var t=null!==e&&e.apply(this,arguments)||this;return t.mEventHandlers=[],t.addEventHandler=function(e){if(void 0===e||"function"!==typeof e||null===e)throw new o.ArgumentNullException("Invalid event handler.");return i.ObjectBase.IsUndefinedOrNull(e.guid)&&(e.guid=u.Guid.CreateNewAsString()),t.mEventHandlers.push(e),t},t.removeEventHandler=function(e){if(void 0===e||"function"!==typeof e||null===e)throw new o.ArgumentNullException("Invalid event handler.");for(;t.mEventHandlers.length>0;){for(var n=!1,r=0;r<t.mEventHandlers.length;r++){var i=t.mEventHandlers[r];if(void 0!==i.guid&&void 0!==e.guid){if(null!==i.guid&&null!==e.guid&&i.guid===e.guid){t.mEventHandlers.splice(r,1),n=!0;break}}else if(i.name===e.name&&i.length===e.length){t.mEventHandlers.splice(r,1),n=!0;break}}if(n)break}return t},t.raiseEvent=function(e,n){return t.mEventHandlers.slice().forEach((function(t){try{t(e,n)}catch(r){console.log(r)}})),t},t}return r(GenericEvent,e),GenericEvent.Cast=function(e){return e},GenericEvent.CastArray=function(e){return e},Object.defineProperty(GenericEvent.prototype,"count",{get:function(){return this.mEventHandlers.length},enumerable:!1,configurable:!0}),GenericEvent}(i.ObjectBase);t.GenericEvent=c},475:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Guid=void 0;var n=function(){function Guid(){var e=this;this.mGuid=Guid.CreateGuid(),this.toString=function(){return e.mGuid}}return Guid.Cast=function(e){return e},Guid.CastArray=function(e){return e},Guid.CreateNew=function(){return new Guid},Guid.CreateNewAsString=function(){return(new Guid).toString()},Guid.S4=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)},Guid.CreateGuid=function(){return(Guid.S4()+Guid.S4()+"-"+Guid.S4()+"-4"+Guid.S4().substr(0,3)+"-"+Guid.S4()+"-"+Guid.S4()+Guid.S4()+Guid.S4()).toLowerCase()},Guid}();t.Guid=n,Object.preventExtensions(n)},567:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NewtonSoftJSONParser=void 0;var n=function(){function NewtonSoftJSONParser(){}return NewtonSoftJSONParser.resolveJSONReferences=function(e){"string"===typeof e&&(e=JSON.parse(e));var t={},n=[];e=function recurse(e,r,o){if("object"!==typeof e||!e)return e;if("[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<e.length;i++){if("object"!==typeof e[i]||!e[i])continue;"$ref"in e[i]?e[i]=recurse(e[i],i,e):e[i]=recurse(e[i],r,e)}return e}if("$ref"in e){var u=e.$ref;return u in t?t[u]:void n.push([o,r,u])}if("$id"in e){var c=e.$id;if(delete e.$id,"$values"in e)e=e.$values.map(recurse);else for(var a in e)e[a]=recurse(e[a],a,e);t[c]=e}return e}(e);for(var r=0;r<n.length;r++){var o=n[r];o[0][o[1]]=t[o[2]]}return e},NewtonSoftJSONParser}();t.NewtonSoftJSONParser=n},912:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.NotImplementedException=void 0;var o=function(e){function NotImplementedException(){return null!==e&&e.apply(this,arguments)||this}return r(NotImplementedException,e),NotImplementedException.Cast=function(e){return e},NotImplementedException.CastArray=function(e){return e},NotImplementedException}(n(494).Exception);t.NotImplementedException=o},142:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ObjectBase=void 0;var r=n(475),o=function(){function ObjectBase(){var e=this;this.mHashCode="",this.getHashCode=function(){return""===e.mHashCode&&(e.mHashCode=r.Guid.CreateNewAsString()),e.mHashCode},this.equals=function(t){return e===t}}return ObjectBase.Cast=function(e){return e},ObjectBase.CastArray=function(e){return e},ObjectBase.IsUndefinedOrNull=function(e){return void 0===e||null===e},ObjectBase}();t.ObjectBase=o},966:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Random=void 0;var r=n(142),o=function(){function Random(){}return Random.Cast=function(e){return e},Random.CastArray=function(e){return e},Random.Next=function(e,t){var n=0,o=Number.MAX_SAFE_INTEGER;return r.ObjectBase.IsUndefinedOrNull(e)||"number"!==typeof e||(n=e),r.ObjectBase.IsUndefinedOrNull(t)||"number"!==typeof t||(o=t),Math.floor(Math.random()*(o-n+1))+n},Random}();t.Random=o},740:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.StringBuilder=void 0;var o=n(107),i=n(317),u=n(142),c=function(e){function StringBuilder(){var t=null!==e&&e.apply(this,arguments)||this;return t.mStrings=[],t.mNewLine="<br />",t.append=function(e){var n=StringBuilder.verify(e);return n.length>0&&t.mStrings.push(n),t},t.appendLine=function(e){u.ObjectBase.IsUndefinedOrNull(e)&&(e="");var n=StringBuilder.verify(e);return t.mStrings.push(n.length>0?n+t.mNewLine:t.mNewLine),t},t.clear=function(){return t.mStrings=[],t},t.isEmpty=function(){return 0===t.mStrings.length},t.toString=function(){return t.mStrings.join("")},t.length=function(){for(var e=0,n=0,r=t.mStrings;n<r.length;n++)e+=r[n].length;return e},t.getNewLineString=function(){return t.mNewLine},t.setNewLineString=function(e){if(u.ObjectBase.IsUndefinedOrNull(e))throw new i.ArgumentNullException("Argument 'value' cannot be null.");return t.mNewLine=e,t},t}return r(StringBuilder,e),StringBuilder.Cast=function(e){return e},StringBuilder.CastArray=function(e){return e},StringBuilder.verify=function(e){return StringBuilder.defined(e)?StringBuilder.getType(e)!==StringBuilder.getType(String(""))?String(e):e:""},StringBuilder.defined=function(e){return null!==e&&void 0!==typeof e},StringBuilder.getType=function(e){if(!StringBuilder.defined(e.constructor))throw new o.ArgumentException("Unexpected object type");var t=String(e.constructor).match(/function\s+(\w+)/);return StringBuilder.defined(t)?t[1]:void 0},StringBuilder}(u.ObjectBase);t.StringBuilder=c},30:function(e,t,n){var r=this&&this.__extends||function(){var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.WindowEvents=t.WindowSizeChangedEventArgs=void 0;var o=n(819),i=n(614),u=function(e){function WindowSizeChangedEventArgs(t,n){var r=e.call(this)||this;return r.width=0,r.height=0,r.width=t,r.height=n,r}return r(WindowSizeChangedEventArgs,e),WindowSizeChangedEventArgs.Cast=function(e){return e},WindowSizeChangedEventArgs.CastArray=function(e){return e},WindowSizeChangedEventArgs}(o.EventArgs);t.WindowSizeChangedEventArgs=u;var c=function(){function WindowEvents(){}return WindowEvents.staticConstructor=function(){"undefined"!==typeof window&&window.addEventListener("resize",WindowEvents._internalWindowsSizeHandler)},WindowEvents._internalWindowsSizeHandler=function(){WindowEvents.sizeChangedEvent.raiseEvent(WindowEvents,new u(window.innerWidth,window.innerHeight))},WindowEvents.sizeChangedEvent=new i.GenericEvent,WindowEvents}();t.WindowEvents=c,c.staticConstructor()}},t={};function __webpack_require__(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,__webpack_require__),o.exports}var n={};return(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.WindowSizeChangedEventArgs=e.WindowEvents=e.StringBuilder=e.Random=e.ObjectBase=e.NotImplementedException=e.NewtonSoftJSONParser=e.Guid=e.GenericEvent=e.Exception=e.EventArgs=e.Dictionary=e.BrowserScrollbars=e.ArgumentOutOfRangeException=e.ArgumentNullException=e.ArgumentException=void 0;var t=__webpack_require__(107);Object.defineProperty(e,"ArgumentException",{enumerable:!0,get:function(){return t.ArgumentException}});var r=__webpack_require__(317);Object.defineProperty(e,"ArgumentNullException",{enumerable:!0,get:function(){return r.ArgumentNullException}});var o=__webpack_require__(59);Object.defineProperty(e,"ArgumentOutOfRangeException",{enumerable:!0,get:function(){return o.ArgumentOutOfRangeException}});var i=__webpack_require__(7);Object.defineProperty(e,"BrowserScrollbars",{enumerable:!0,get:function(){return i.BrowserScrollbars}});var u=__webpack_require__(974);Object.defineProperty(e,"Dictionary",{enumerable:!0,get:function(){return u.Dictionary}});var c=__webpack_require__(819);Object.defineProperty(e,"EventArgs",{enumerable:!0,get:function(){return c.EventArgs}});var a=__webpack_require__(494);Object.defineProperty(e,"Exception",{enumerable:!0,get:function(){return a.Exception}});var s=__webpack_require__(614);Object.defineProperty(e,"GenericEvent",{enumerable:!0,get:function(){return s.GenericEvent}});var l=__webpack_require__(475);Object.defineProperty(e,"Guid",{enumerable:!0,get:function(){return l.Guid}});var f=__webpack_require__(567);Object.defineProperty(e,"NewtonSoftJSONParser",{enumerable:!0,get:function(){return f.NewtonSoftJSONParser}});var p=__webpack_require__(912);Object.defineProperty(e,"NotImplementedException",{enumerable:!0,get:function(){return p.NotImplementedException}});var d=__webpack_require__(142);Object.defineProperty(e,"ObjectBase",{enumerable:!0,get:function(){return d.ObjectBase}});var _=__webpack_require__(966);Object.defineProperty(e,"Random",{enumerable:!0,get:function(){return _.Random}});var y=__webpack_require__(740);Object.defineProperty(e,"StringBuilder",{enumerable:!0,get:function(){return y.StringBuilder}});var v=__webpack_require__(30);Object.defineProperty(e,"WindowEvents",{enumerable:!0,get:function(){return v.WindowEvents}}),Object.defineProperty(e,"WindowSizeChangedEventArgs",{enumerable:!0,get:function(){return v.WindowSizeChangedEventArgs}})})(),n})()}));