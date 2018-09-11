(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){(function(global){"use strict";if(global._babelPolyfill){throw new Error("only one instance of babel/polyfill is allowed")}global._babelPolyfill=true;require("core-js/shim");require("regenerator-babel/runtime")}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"core-js/shim":2,"regenerator-babel/runtime":3}],2:[function(require,module,exports){!function(global,framework,undefined){"use strict";var OBJECT="Object",FUNCTION="Function",ARRAY="Array",STRING="String",NUMBER="Number",REGEXP="RegExp",DATE="Date",MAP="Map",SET="Set",WEAKMAP="WeakMap",WEAKSET="WeakSet",SYMBOL="Symbol",PROMISE="Promise",MATH="Math",ARGUMENTS="Arguments",PROTOTYPE="prototype",CONSTRUCTOR="constructor",TO_STRING="toString",TO_STRING_TAG=TO_STRING+"Tag",TO_LOCALE="toLocaleString",HAS_OWN="hasOwnProperty",FOR_EACH="forEach",ITERATOR="iterator",FF_ITERATOR="@@"+ITERATOR,PROCESS="process",CREATE_ELEMENT="createElement",Function=global[FUNCTION],Object=global[OBJECT],Array=global[ARRAY],String=global[STRING],Number=global[NUMBER],RegExp=global[REGEXP],Date=global[DATE],Map=global[MAP],Set=global[SET],WeakMap=global[WEAKMAP],WeakSet=global[WEAKSET],Symbol=global[SYMBOL],Math=global[MATH],TypeError=global.TypeError,RangeError=global.RangeError,setTimeout=global.setTimeout,setImmediate=global.setImmediate,clearImmediate=global.clearImmediate,parseInt=global.parseInt,isFinite=global.isFinite,process=global[PROCESS],nextTick=process&&process.nextTick,document=global.document,html=document&&document.documentElement,navigator=global.navigator,define=global.define,console=global.console||{},ArrayProto=Array[PROTOTYPE],ObjectProto=Object[PROTOTYPE],FunctionProto=Function[PROTOTYPE],Infinity=1/0,DOT=".";function isObject(it){return it!==null&&(typeof it=="object"||typeof it=="function")}function isFunction(it){return typeof it=="function"}var isNative=ctx(/./.test,/\[native code\]\s*\}\s*$/,1);var toString=ObjectProto[TO_STRING];function setToStringTag(it,tag,stat){if(it&&!has(it=stat?it:it[PROTOTYPE],SYMBOL_TAG))hidden(it,SYMBOL_TAG,tag)}function cof(it){return toString.call(it).slice(8,-1)}function classof(it){var O,T;return it==undefined?it===undefined?"Undefined":"Null":typeof(T=(O=Object(it))[SYMBOL_TAG])=="string"?T:cof(O)}var call=FunctionProto.call,apply=FunctionProto.apply,REFERENCE_GET;function part(){var fn=assertFunction(this),length=arguments.length,args=Array(length),i=0,_=path._,holder=false;while(length>i)if((args[i]=arguments[i++])===_)holder=true;return function(){var that=this,_length=arguments.length,i=0,j=0,_args;if(!holder&&!_length)return invoke(fn,args,that);_args=args.slice();if(holder)for(;length>i;i++)if(_args[i]===_)_args[i]=arguments[j++];while(_length>j)_args.push(arguments[j++]);return invoke(fn,_args,that)}}function ctx(fn,that,length){assertFunction(fn);if(~length&&that===undefined)return fn;switch(length){case 1:return function(a){return fn.call(that,a)};case 2:return function(a,b){return fn.call(that,a,b)};case 3:return function(a,b,c){return fn.call(that,a,b,c)}}return function(){return fn.apply(that,arguments)}}function invoke(fn,args,that){var un=that===undefined;switch(args.length|0){case 0:return un?fn():fn.call(that);case 1:return un?fn(args[0]):fn.call(that,args[0]);case 2:return un?fn(args[0],args[1]):fn.call(that,args[0],args[1]);case 3:return un?fn(args[0],args[1],args[2]):fn.call(that,args[0],args[1],args[2]);case 4:return un?fn(args[0],args[1],args[2],args[3]):fn.call(that,args[0],args[1],args[2],args[3]);case 5:return un?fn(args[0],args[1],args[2],args[3],args[4]):fn.call(that,args[0],args[1],args[2],args[3],args[4])}return fn.apply(that,args)}var create=Object.create,getPrototypeOf=Object.getPrototypeOf,setPrototypeOf=Object.setPrototypeOf,defineProperty=Object.defineProperty,defineProperties=Object.defineProperties,getOwnDescriptor=Object.getOwnPropertyDescriptor,getKeys=Object.keys,getNames=Object.getOwnPropertyNames,getSymbols=Object.getOwnPropertySymbols,isFrozen=Object.isFrozen,has=ctx(call,ObjectProto[HAS_OWN],2),ES5Object=Object,Dict;function toObject(it){return ES5Object(assertDefined(it))}function returnIt(it){return it}function returnThis(){return this}function get(object,key){if(has(object,key))return object[key]}function ownKeys(it){assertObject(it);return getSymbols?getNames(it).concat(getSymbols(it)):getNames(it)}var assign=Object.assign||function(target,source){var T=Object(assertDefined(target)),l=arguments.length,i=1;while(l>i){var S=ES5Object(arguments[i++]),keys=getKeys(S),length=keys.length,j=0,key;while(length>j)T[key=keys[j++]]=S[key]}return T};function keyOf(object,el){var O=toObject(object),keys=getKeys(O),length=keys.length,index=0,key;while(length>index)if(O[key=keys[index++]]===el)return key}function array(it){return String(it).split(",")}var push=ArrayProto.push,unshift=ArrayProto.unshift,slice=ArrayProto.slice,splice=ArrayProto.splice,indexOf=ArrayProto.indexOf,forEach=ArrayProto[FOR_EACH];function createArrayMethod(type){var isMap=type==1,isFilter=type==2,isSome=type==3,isEvery=type==4,isFindIndex=type==6,noholes=type==5||isFindIndex;return function(callbackfn){var O=Object(assertDefined(this)),that=arguments[1],self=ES5Object(O),f=ctx(callbackfn,that,3),length=toLength(self.length),index=0,result=isMap?Array(length):isFilter?[]:undefined,val,res;for(;length>index;index++)if(noholes||index in self){val=self[index];res=f(val,index,O);if(type){if(isMap)result[index]=res;else if(res)switch(type){case 3:return true;case 5:return val;case 6:return index;case 2:result.push(val)}else if(isEvery)return false}}return isFindIndex?-1:isSome||isEvery?isEvery:result}}function createArrayContains(isContains){return function(el){var O=toObject(this),length=toLength(O.length),index=toIndex(arguments[1],length);if(isContains&&el!=el){for(;length>index;index++)if(sameNaN(O[index]))return isContains||index}else for(;length>index;index++)if(isContains||index in O){if(O[index]===el)return isContains||index}return!isContains&&-1}}function generic(A,B){return typeof A=="function"?A:B}var MAX_SAFE_INTEGER=9007199254740991,pow=Math.pow,abs=Math.abs,ceil=Math.ceil,floor=Math.floor,max=Math.max,min=Math.min,random=Math.random,trunc=Math.trunc||function(it){return(it>0?floor:ceil)(it)};function sameNaN(number){return number!=number}function toInteger(it){return isNaN(it)?0:trunc(it)}function toLength(it){return it>0?min(toInteger(it),MAX_SAFE_INTEGER):0}function toIndex(index,length){var index=toInteger(index);return index<0?max(index+length,0):min(index,length)}function lz(num){return num>9?num:"0"+num}function createReplacer(regExp,replace,isStatic){var replacer=isObject(replace)?function(part){return replace[part]}:replace;return function(it){return String(isStatic?it:this).replace(regExp,replacer)}}function createPointAt(toString){return function(pos){var s=String(assertDefined(this)),i=toInteger(pos),l=s.length,a,b;if(i<0||i>=l)return toString?"":undefined;a=s.charCodeAt(i);return a<55296||a>56319||i+1===l||(b=s.charCodeAt(i+1))<56320||b>57343?toString?s.charAt(i):a:toString?s.slice(i,i+2):(a-55296<<10)+(b-56320)+65536}}var REDUCE_ERROR="Reduce of empty object with no initial value";function assert(condition,msg1,msg2){if(!condition)throw TypeError(msg2?msg1+msg2:msg1)}function assertDefined(it){if(it==undefined)throw TypeError("Function called on null or undefined");return it}function assertFunction(it){assert(isFunction(it),it," is not a function!");return it}function assertObject(it){assert(isObject(it),it," is not an object!");return it}function assertInstance(it,Constructor,name){assert(it instanceof Constructor,name,": use the 'new' operator!")}function descriptor(bitmap,value){return{enumerable:!(bitmap&1),configurable:!(bitmap&2),writable:!(bitmap&4),value:value}}function simpleSet(object,key,value){object[key]=value;return object}function createDefiner(bitmap){return DESC?function(object,key,value){return defineProperty(object,key,descriptor(bitmap,value))}:simpleSet}function uid(key){return SYMBOL+"("+key+")_"+(++sid+random())[TO_STRING](36)}function getWellKnownSymbol(name,setter){return Symbol&&Symbol[name]||(setter?Symbol:safeSymbol)(SYMBOL+DOT+name)}var DESC=!!function(){try{return defineProperty({},"a",{get:function(){return 2}}).a==2}catch(e){}}(),sid=0,hidden=createDefiner(1),set=Symbol?simpleSet:hidden,safeSymbol=Symbol||uid;function assignHidden(target,src){for(var key in src)hidden(target,key,src[key]);return target}var SYMBOL_UNSCOPABLES=getWellKnownSymbol("unscopables"),ArrayUnscopables=ArrayProto[SYMBOL_UNSCOPABLES]||{},SYMBOL_TAG=getWellKnownSymbol(TO_STRING_TAG),SYMBOL_SPECIES=getWellKnownSymbol("species"),SYMBOL_ITERATOR;function setSpecies(C){if(DESC&&(framework||!isNative(C)))defineProperty(C,SYMBOL_SPECIES,{configurable:true,get:returnThis})}var NODE=cof(process)==PROCESS,core={},path=framework?global:core,old=global.core,exportGlobal,FORCED=1,GLOBAL=2,STATIC=4,PROTO=8,BIND=16,WRAP=32;function $define(type,name,source){var key,own,out,exp,isGlobal=type&GLOBAL,target=isGlobal?global:type&STATIC?global[name]:(global[name]||ObjectProto)[PROTOTYPE],exports=isGlobal?core:core[name]||(core[name]={});if(isGlobal)source=name;for(key in source){own=!(type&FORCED)&&target&&key in target&&(!isFunction(target[key])||isNative(target[key]));out=(own?target:source)[key];if(!framework&&isGlobal&&!isFunction(target[key]))exp=source[key];else if(type&BIND&&own)exp=ctx(out,global);else if(type&WRAP&&!framework&&target[key]==out){exp=function(param){return this instanceof out?new out(param):out(param)};exp[PROTOTYPE]=out[PROTOTYPE]}else exp=type&PROTO&&isFunction(out)?ctx(call,out):out;if(framework&&target&&!own){if(isGlobal)target[key]=out;else delete target[key]&&hidden(target,key,out)}if(exports[key]!=out)hidden(exports,key,exp)}}if(typeof module!="undefined"&&module.exports)module.exports=core;else if(isFunction(define)&&define.amd)define(function(){return core});else exportGlobal=true;if(exportGlobal||framework){core.noConflict=function(){global.core=old;return core};global.core=core}SYMBOL_ITERATOR=getWellKnownSymbol(ITERATOR);var ITER=safeSymbol("iter"),KEY=1,VALUE=2,Iterators={},IteratorPrototype={},BUGGY_ITERATORS="keys"in ArrayProto&&!("next"in[].keys());setIterator(IteratorPrototype,returnThis);function setIterator(O,value){hidden(O,SYMBOL_ITERATOR,value);FF_ITERATOR in ArrayProto&&hidden(O,FF_ITERATOR,value)}function createIterator(Constructor,NAME,next,proto){Constructor[PROTOTYPE]=create(proto||IteratorPrototype,{next:descriptor(1,next)});setToStringTag(Constructor,NAME+" Iterator")}function defineIterator(Constructor,NAME,value,DEFAULT){var proto=Constructor[PROTOTYPE],iter=get(proto,SYMBOL_ITERATOR)||get(proto,FF_ITERATOR)||DEFAULT&&get(proto,DEFAULT)||value;if(framework){setIterator(proto,iter);if(iter!==value){var iterProto=getPrototypeOf(iter.call(new Constructor));setToStringTag(iterProto,NAME+" Iterator",true);has(proto,FF_ITERATOR)&&setIterator(iterProto,returnThis)}}Iterators[NAME]=iter;Iterators[NAME+" Iterator"]=returnThis;return iter}function defineStdIterators(Base,NAME,Constructor,next,DEFAULT,IS_SET){function createIter(kind){return function(){return new Constructor(this,kind)}}createIterator(Constructor,NAME,next);var entries=createIter(KEY+VALUE),values=createIter(VALUE);if(DEFAULT==VALUE)values=defineIterator(Base,NAME,values,"values");else entries=defineIterator(Base,NAME,entries,"entries");if(DEFAULT){$define(PROTO+FORCED*BUGGY_ITERATORS,NAME,{entries:entries,keys:IS_SET?values:createIter(KEY),values:values})}}function iterResult(done,value){return{value:value,done:!!done}}function isIterable(it){var O=Object(it),Symbol=global[SYMBOL],hasExt=(Symbol&&Symbol[ITERATOR]||FF_ITERATOR)in O;return hasExt||SYMBOL_ITERATOR in O||has(Iterators,classof(O))}function getIterator(it){var Symbol=global[SYMBOL],ext=it[Symbol&&Symbol[ITERATOR]||FF_ITERATOR],getIter=ext||it[SYMBOL_ITERATOR]||Iterators[classof(it)];return assertObject(getIter.call(it))}function stepCall(fn,value,entries){return entries?invoke(fn,value):fn(value)}function checkDangerIterClosing(fn){var danger=true;var O={next:function(){throw 1},"return":function(){danger=false}};O[SYMBOL_ITERATOR]=returnThis;try{fn(O)}catch(e){}return danger}function closeIterator(iterator){var ret=iterator["return"];if(ret!==undefined)ret.call(iterator)}function safeIterClose(exec,iterator){try{exec(iterator)}catch(e){closeIterator(iterator);throw e}}function forOf(iterable,entries,fn,that){safeIterClose(function(iterator){var f=ctx(fn,that,entries?2:1),step;while(!(step=iterator.next()).done)if(stepCall(f,step.value,entries)===false){return closeIterator(iterator)}},getIterator(iterable))}!function(TAG,SymbolRegistry,AllSymbols,setter){if(!isNative(Symbol)){Symbol=function(description){assert(!(this instanceof Symbol),SYMBOL+" is not a "+CONSTRUCTOR);var tag=uid(description),sym=set(create(Symbol[PROTOTYPE]),TAG,tag);AllSymbols[tag]=sym;DESC&&setter&&defineProperty(ObjectProto,tag,{configurable:true,set:function(value){hidden(this,tag,value)}});return sym};hidden(Symbol[PROTOTYPE],TO_STRING,function(){return this[TAG]})}$define(GLOBAL+WRAP,{Symbol:Symbol});var symbolStatics={"for":function(key){return has(SymbolRegistry,key+="")?SymbolRegistry[key]:SymbolRegistry[key]=Symbol(key)},iterator:SYMBOL_ITERATOR||getWellKnownSymbol(ITERATOR),keyFor:part.call(keyOf,SymbolRegistry),species:SYMBOL_SPECIES,toStringTag:SYMBOL_TAG=getWellKnownSymbol(TO_STRING_TAG,true),unscopables:SYMBOL_UNSCOPABLES,pure:safeSymbol,set:set,useSetter:function(){setter=true},useSimple:function(){setter=false}};forEach.call(array("hasInstance,isConcatSpreadable,match,replace,search,split,toPrimitive"),function(it){symbolStatics[it]=getWellKnownSymbol(it)});$define(STATIC,SYMBOL,symbolStatics);setToStringTag(Symbol,SYMBOL);$define(STATIC+FORCED*!isNative(Symbol),OBJECT,{getOwnPropertyNames:function(it){var names=getNames(toObject(it)),result=[],key,i=0;while(names.length>i)has(AllSymbols,key=names[i++])||result.push(key);return result},getOwnPropertySymbols:function(it){var names=getNames(toObject(it)),result=[],key,i=0;while(names.length>i)has(AllSymbols,key=names[i++])&&result.push(AllSymbols[key]);return result}});setToStringTag(Math,MATH,true);setToStringTag(global.JSON,"JSON",true)}(safeSymbol("tag"),{},{},true);!function(){var objectStatic={assign:assign,is:function(x,y){return x===y?x!==0||1/x===1/y:x!=x&&y!=y}};"__proto__"in ObjectProto&&function(buggy,set){try{set=ctx(call,getOwnDescriptor(ObjectProto,"__proto__").set,2);set({},ArrayProto)}catch(e){buggy=true}objectStatic.setPrototypeOf=setPrototypeOf=setPrototypeOf||function(O,proto){assertObject(O);assert(proto===null||isObject(proto),proto,": can't set as prototype!");if(buggy)O.__proto__=proto;else set(O,proto);return O}}();$define(STATIC,OBJECT,objectStatic)}();!function(tmp){tmp[SYMBOL_TAG]=DOT;if(cof(tmp)!=DOT)hidden(ObjectProto,TO_STRING,function(){return"[object "+classof(this)+"]"})}({});!function(){function wrapObjectMethod(key,MODE){var fn=Object[key],exp=core[OBJECT][key],f=0,o={};if(!exp||isNative(exp)){o[key]=MODE==1?function(it){return isObject(it)?fn(it):it}:MODE==2?function(it){return isObject(it)?fn(it):true}:MODE==3?function(it){return isObject(it)?fn(it):false}:MODE==4?function(it,key){return fn(toObject(it),key)}:function(it){return fn(toObject(it))};try{fn(DOT)}catch(e){f=1}$define(STATIC+FORCED*f,OBJECT,o)}}wrapObjectMethod("freeze",1);wrapObjectMethod("seal",1);wrapObjectMethod("preventExtensions",1);wrapObjectMethod("isFrozen",2);wrapObjectMethod("isSealed",2);wrapObjectMethod("isExtensible",3);wrapObjectMethod("getOwnPropertyDescriptor",4);wrapObjectMethod("getPrototypeOf");wrapObjectMethod("keys");wrapObjectMethod("getOwnPropertyNames")}();!function(NAME){NAME in FunctionProto||DESC&&defineProperty(FunctionProto,NAME,{configurable:true,get:function(){var match=String(this).match(/^\s*function ([^ (]*)/),name=match?match[1]:"";has(this,NAME)||defineProperty(this,NAME,descriptor(5,name));return name},set:function(value){has(this,NAME)||defineProperty(this,NAME,descriptor(0,value))}})}("name");Number("0o1")&&Number("0b1")||function(_Number,NumberProto){function toNumber(it){if(isObject(it))it=toPrimitive(it);if(typeof it=="string"&&it.length>2&&it.charCodeAt(0)==48){var binary=false;switch(it.charCodeAt(1)){case 66:case 98:binary=true;case 79:case 111:return parseInt(it.slice(2),binary?2:8)}}return+it}function toPrimitive(it){var fn,val;if(isFunction(fn=it.valueOf)&&!isObject(val=fn.call(it)))return val;if(isFunction(fn=it[TO_STRING])&&!isObject(val=fn.call(it)))return val;throw TypeError("Can't convert object to number")}Number=function Number(it){return this instanceof Number?new _Number(toNumber(it)):toNumber(it)};forEach.call(DESC?getNames(_Number):array("MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY"),function(key){key in Number||defineProperty(Number,key,getOwnDescriptor(_Number,key))});Number[PROTOTYPE]=NumberProto;NumberProto[CONSTRUCTOR]=Number;hidden(global,NUMBER,Number)}(Number,Number[PROTOTYPE]);!function(isInteger){$define(STATIC,NUMBER,{EPSILON:pow(2,-52),isFinite:function(it){return typeof it=="number"&&isFinite(it)},isInteger:isInteger,isNaN:sameNaN,isSafeInteger:function(number){return isInteger(number)&&abs(number)<=MAX_SAFE_INTEGER},MAX_SAFE_INTEGER:MAX_SAFE_INTEGER,MIN_SAFE_INTEGER:-MAX_SAFE_INTEGER,parseFloat:parseFloat,parseInt:parseInt})}(Number.isInteger||function(it){return!isObject(it)&&isFinite(it)&&floor(it)===it});!function(){var E=Math.E,exp=Math.exp,log=Math.log,sqrt=Math.sqrt,sign=Math.sign||function(x){return(x=+x)==0||x!=x?x:x<0?-1:1};function asinh(x){return!isFinite(x=+x)||x==0?x:x<0?-asinh(-x):log(x+sqrt(x*x+1))}function expm1(x){return(x=+x)==0?x:x>-1e-6&&x<1e-6?x+x*x/2:exp(x)-1}$define(STATIC,MATH,{acosh:function(x){return(x=+x)<1?NaN:isFinite(x)?log(x/E+sqrt(x+1)*sqrt(x-1)/E)+1:x},asinh:asinh,atanh:function(x){return(x=+x)==0?x:log((1+x)/(1-x))/2},cbrt:function(x){return sign(x=+x)*pow(abs(x),1/3)},clz32:function(x){return(x>>>=0)?32-x[TO_STRING](2).length:32},cosh:function(x){return(exp(x=+x)+exp(-x))/2},expm1:expm1,fround:function(x){return new Float32Array([x])[0]},hypot:function(value1,value2){var sum=0,len1=arguments.length,len2=len1,args=Array(len1),larg=-Infinity,arg;while(len1--){arg=args[len1]=+arguments[len1];if(arg==Infinity||arg==-Infinity)return Infinity;if(arg>larg)larg=arg}larg=arg||1;while(len2--)sum+=pow(args[len2]/larg,2);return larg*sqrt(sum)},imul:function(x,y){var UInt16=65535,xn=+x,yn=+y,xl=UInt16&xn,yl=UInt16&yn;return 0|xl*yl+((UInt16&xn>>>16)*yl+xl*(UInt16&yn>>>16)<<16>>>0)},log1p:function(x){return(x=+x)>-1e-8&&x<1e-8?x-x*x/2:log(1+x)},log10:function(x){return log(x)/Math.LN10},log2:function(x){return log(x)/Math.LN2},sign:sign,sinh:function(x){return abs(x=+x)<1?(expm1(x)-expm1(-x))/2:(exp(x-1)-exp(-x-1))*(E/2)},tanh:function(x){var a=expm1(x=+x),b=expm1(-x);return a==Infinity?1:b==Infinity?-1:(a-b)/(exp(x)+exp(-x))},trunc:trunc})}();!function(fromCharCode){function assertNotRegExp(it){if(cof(it)==REGEXP)throw TypeError()}$define(STATIC,STRING,{fromCodePoint:function(x){var res=[],len=arguments.length,i=0,code;while(len>i){code=+arguments[i++];if(toIndex(code,1114111)!==code)throw RangeError(code+" is not a valid code point");res.push(code<65536?fromCharCode(code):fromCharCode(((code-=65536)>>10)+55296,code%1024+56320))}return res.join("")},raw:function(callSite){var raw=toObject(callSite.raw),len=toLength(raw.length),sln=arguments.length,res=[],i=0;while(len>i){res.push(String(raw[i++]));if(i<sln)res.push(String(arguments[i]))}return res.join("")}});$define(PROTO,STRING,{codePointAt:createPointAt(false),endsWith:function(searchString){assertNotRegExp(searchString);var that=String(assertDefined(this)),endPosition=arguments[1],len=toLength(that.length),end=endPosition===undefined?len:min(toLength(endPosition),len);searchString+="";return that.slice(end-searchString.length,end)===searchString},includes:function(searchString){assertNotRegExp(searchString);return!!~String(assertDefined(this)).indexOf(searchString,arguments[1])},repeat:function(count){var str=String(assertDefined(this)),res="",n=toInteger(count);if(0>n||n==Infinity)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(str+=str))if(n&1)res+=str;return res},startsWith:function(searchString){assertNotRegExp(searchString);var that=String(assertDefined(this)),index=toLength(min(arguments[1],that.length));searchString+="";return that.slice(index,index+searchString.length)===searchString}})}(String.fromCharCode);!function(){$define(STATIC+FORCED*checkDangerIterClosing(Array.from),ARRAY,{from:function(arrayLike){var O=Object(assertDefined(arrayLike)),mapfn=arguments[1],mapping=mapfn!==undefined,f=mapping?ctx(mapfn,arguments[2],2):undefined,index=0,length,result,step;if(isIterable(O)){result=new(generic(this,Array));safeIterClose(function(iterator){for(;!(step=iterator.next()).done;index++){result[index]=mapping?f(step.value,index):step.value}},getIterator(O))}else{result=new(generic(this,Array))(length=toLength(O.length));for(;length>index;index++){result[index]=mapping?f(O[index],index):O[index]}}result.length=index;return result}});$define(STATIC,ARRAY,{of:function(){var index=0,length=arguments.length,result=new(generic(this,Array))(length);while(length>index)result[index]=arguments[index++];result.length=length;return result}});setSpecies(Array)}();!function(){$define(PROTO,ARRAY,{copyWithin:function(target,start){var O=Object(assertDefined(this)),len=toLength(O.length),to=toIndex(target,len),from=toIndex(start,len),end=arguments[2],fin=end===undefined?len:toIndex(end,len),count=min(fin-from,len-to),inc=1;if(from<to&&to<from+count){inc=-1;from=from+count-1;to=to+count-1}while(count-->0){if(from in O)O[to]=O[from];else delete O[to];to+=inc;from+=inc}return O},fill:function(value){var O=Object(assertDefined(this)),length=toLength(O.length),index=toIndex(arguments[1],length),end=arguments[2],endPos=end===undefined?length:toIndex(end,length);while(endPos>index)O[index++]=value;return O},find:createArrayMethod(5),findIndex:createArrayMethod(6)});if(framework){forEach.call(array("find,findIndex,fill,copyWithin,entries,keys,values"),function(it){ArrayUnscopables[it]=true});SYMBOL_UNSCOPABLES in ArrayProto||hidden(ArrayProto,SYMBOL_UNSCOPABLES,ArrayUnscopables)}}();!function(at){defineStdIterators(Array,ARRAY,function(iterated,kind){set(this,ITER,{o:toObject(iterated),i:0,k:kind})},function(){var iter=this[ITER],O=iter.o,kind=iter.k,index=iter.i++;if(!O||index>=O.length){iter.o=undefined;return iterResult(1)}if(kind==KEY)return iterResult(0,index);if(kind==VALUE)return iterResult(0,O[index]);return iterResult(0,[index,O[index]])},VALUE);Iterators[ARGUMENTS]=Iterators[ARRAY];defineStdIterators(String,STRING,function(iterated){set(this,ITER,{o:String(iterated),i:0})},function(){var iter=this[ITER],O=iter.o,index=iter.i,point;if(index>=O.length)return iterResult(1);point=at.call(O,index);iter.i+=point.length;return iterResult(0,point)})}(createPointAt(true));DESC&&!function(RegExpProto,_RegExp){if(!function(){try{return RegExp(/a/g,"i")=="/a/i"}catch(e){}}()){RegExp=function RegExp(pattern,flags){return new _RegExp(cof(pattern)==REGEXP&&flags!==undefined?pattern.source:pattern,flags)};forEach.call(getNames(_RegExp),function(key){key in RegExp||defineProperty(RegExp,key,{configurable:true,get:function(){return _RegExp[key]},set:function(it){_RegExp[key]=it}})});RegExpProto[CONSTRUCTOR]=RegExp;RegExp[PROTOTYPE]=RegExpProto;hidden(global,REGEXP,RegExp)}if(/./g.flags!="g")defineProperty(RegExpProto,"flags",{configurable:true,get:createReplacer(/^.*\/(\w*)$/,"$1")});setSpecies(RegExp)}(RegExp[PROTOTYPE],RegExp);isFunction(setImmediate)&&isFunction(clearImmediate)||function(ONREADYSTATECHANGE){var postMessage=global.postMessage,addEventListener=global.addEventListener,MessageChannel=global.MessageChannel,counter=0,queue={},defer,channel,port;setImmediate=function(fn){var args=[],i=1;while(arguments.length>i)args.push(arguments[i++]);queue[++counter]=function(){invoke(isFunction(fn)?fn:Function(fn),args)};defer(counter);return counter};clearImmediate=function(id){delete queue[id]};function run(id){if(has(queue,id)){var fn=queue[id];delete queue[id];fn()}}function listner(event){run(event.data)}if(NODE){defer=function(id){nextTick(part.call(run,id))}}else if(addEventListener&&isFunction(postMessage)&&!global.importScripts){defer=function(id){postMessage(id,"*")};addEventListener("message",listner,false)}else if(isFunction(MessageChannel)){channel=new MessageChannel;port=channel.port2;channel.port1.onmessage=listner;defer=ctx(port.postMessage,port,1)}else if(document&&ONREADYSTATECHANGE in document[CREATE_ELEMENT]("script")){defer=function(id){html.appendChild(document[CREATE_ELEMENT]("script"))[ONREADYSTATECHANGE]=function(){html.removeChild(this);run(id)}}}else{defer=function(id){setTimeout(run,0,id)}}}("onreadystatechange");$define(GLOBAL+BIND,{setImmediate:setImmediate,clearImmediate:clearImmediate});!function(Promise,test){isFunction(Promise)&&isFunction(Promise.resolve)&&Promise.resolve(test=new Promise(function(){}))==test||function(asap,RECORD){function isThenable(it){var then;if(isObject(it))then=it.then;return isFunction(then)?then:false}function handledRejectionOrHasOnRejected(promise){var record=promise[RECORD],chain=record.c,i=0,react;if(record.h)return true;while(chain.length>i){react=chain[i++];if(react.fail||handledRejectionOrHasOnRejected(react.P))return true}}function notify(record,reject){var chain=record.c;if(reject||chain.length)asap(function(){var promise=record.p,value=record.v,ok=record.s==1,i=0;if(reject&&!handledRejectionOrHasOnRejected(promise)){setTimeout(function(){if(!handledRejectionOrHasOnRejected(promise)){if(NODE){if(!process.emit("unhandledRejection",value,promise)){}}else if(isFunction(console.error)){console.error("Unhandled promise rejection",value)}}},1e3)}else while(chain.length>i)!function(react){var cb=ok?react.ok:react.fail,ret,then;try{if(cb){if(!ok)record.h=true;ret=cb===true?value:cb(value);if(ret===react.P){react.rej(TypeError(PROMISE+"-chain cycle"))}else if(then=isThenable(ret)){then.call(ret,react.res,react.rej)}else react.res(ret)}else react.rej(value)}catch(err){react.rej(err)}}(chain[i++]);chain.length=0})}function resolve(value){var record=this,then,wrapper;if(record.d)return;record.d=true;record=record.r||record;try{if(then=isThenable(value)){wrapper={r:record,d:false};then.call(value,ctx(resolve,wrapper,1),ctx(reject,wrapper,1))}else{record.v=value;record.s=1;notify(record)}}catch(err){reject.call(wrapper||{r:record,d:false},err)}}function reject(value){var record=this;if(record.d)return;record.d=true;record=record.r||record;record.v=value;record.s=2;notify(record,true)}function getConstructor(C){var S=assertObject(C)[SYMBOL_SPECIES];return S!=undefined?S:C}Promise=function(executor){assertFunction(executor);assertInstance(this,Promise,PROMISE);var record={p:this,c:[],s:0,d:false,v:undefined,h:false};hidden(this,RECORD,record);try{executor(ctx(resolve,record,1),ctx(reject,record,1))}catch(err){reject.call(record,err)}};assignHidden(Promise[PROTOTYPE],{then:function(onFulfilled,onRejected){var S=assertObject(assertObject(this)[CONSTRUCTOR])[SYMBOL_SPECIES];var react={ok:isFunction(onFulfilled)?onFulfilled:true,fail:isFunction(onRejected)?onRejected:false},P=react.P=new(S!=undefined?S:Promise)(function(resolve,reject){react.res=assertFunction(resolve);react.rej=assertFunction(reject)}),record=this[RECORD];record.c.push(react);record.s&&notify(record);return P},"catch":function(onRejected){return this.then(undefined,onRejected)}});assignHidden(Promise,{all:function(iterable){var Promise=getConstructor(this),values=[];return new Promise(function(resolve,reject){forOf(iterable,false,push,values);var remaining=values.length,results=Array(remaining);if(remaining)forEach.call(values,function(promise,index){Promise.resolve(promise).then(function(value){results[index]=value;--remaining||resolve(results)},reject)});else resolve(results)})},race:function(iterable){var Promise=getConstructor(this);return new Promise(function(resolve,reject){forOf(iterable,false,function(promise){Promise.resolve(promise).then(resolve,reject)})})},reject:function(r){return new(getConstructor(this))(function(resolve,reject){reject(r)})},resolve:function(x){return isObject(x)&&RECORD in x&&getPrototypeOf(x)===this[PROTOTYPE]?x:new(getConstructor(this))(function(resolve,reject){resolve(x)})}})}(nextTick||setImmediate,safeSymbol("record"));setToStringTag(Promise,PROMISE);setSpecies(Promise);$define(GLOBAL+FORCED*!isNative(Promise),{Promise:Promise})}(global[PROMISE]);!function(){var UID=safeSymbol("uid"),O1=safeSymbol("O1"),WEAK=safeSymbol("weak"),LEAK=safeSymbol("leak"),LAST=safeSymbol("last"),FIRST=safeSymbol("first"),SIZE=DESC?safeSymbol("size"):"size",uid=0,tmp={};function getCollection(C,NAME,methods,commonMethods,isMap,isWeak){var ADDER=isMap?"set":"add",proto=C&&C[PROTOTYPE],O={};function initFromIterable(that,iterable){if(iterable!=undefined)forOf(iterable,isMap,that[ADDER],that);return that}function fixSVZ(key,chain){var method=proto[key];if(framework)proto[key]=function(a,b){var result=method.call(this,a===0?0:a,b);return chain?this:result}}if(!isNative(C)||!(isWeak||!BUGGY_ITERATORS&&has(proto,FOR_EACH)&&has(proto,"entries"))){C=isWeak?function(iterable){assertInstance(this,C,NAME);set(this,UID,uid++);initFromIterable(this,iterable)}:function(iterable){var that=this;assertInstance(that,C,NAME);set(that,O1,create(null));set(that,SIZE,0);set(that,LAST,undefined);set(that,FIRST,undefined);initFromIterable(that,iterable)};assignHidden(assignHidden(C[PROTOTYPE],methods),commonMethods);isWeak||!DESC||defineProperty(C[PROTOTYPE],"size",{get:function(){return assertDefined(this[SIZE])}})}else{var Native=C,inst=new C,chain=inst[ADDER](isWeak?{}:-0,1),buggyZero;if(checkDangerIterClosing(function(O){new C(O)})){C=function(iterable){assertInstance(this,C,NAME);return initFromIterable(new Native,iterable)};C[PROTOTYPE]=proto;if(framework)proto[CONSTRUCTOR]=C}isWeak||inst[FOR_EACH](function(val,key){buggyZero=1/key===-Infinity});if(buggyZero){fixSVZ("delete");fixSVZ("has");isMap&&fixSVZ("get")}if(buggyZero||chain!==inst)fixSVZ(ADDER,true)}setToStringTag(C,NAME);setSpecies(C);O[NAME]=C;$define(GLOBAL+WRAP+FORCED*!isNative(C),O);isWeak||defineStdIterators(C,NAME,function(iterated,kind){set(this,ITER,{o:iterated,k:kind})},function(){var iter=this[ITER],kind=iter.k,entry=iter.l;while(entry&&entry.r)entry=entry.p;if(!iter.o||!(iter.l=entry=entry?entry.n:iter.o[FIRST])){iter.o=undefined;return iterResult(1)}if(kind==KEY)return iterResult(0,entry.k);if(kind==VALUE)return iterResult(0,entry.v);return iterResult(0,[entry.k,entry.v])},isMap?KEY+VALUE:VALUE,!isMap);return C}function fastKey(it,create){if(!isObject(it))return(typeof it=="string"?"S":"P")+it;if(isFrozen(it))return"F";if(!has(it,UID)){if(!create)return"E";hidden(it,UID,++uid)}return"O"+it[UID]}function getEntry(that,key){var index=fastKey(key),entry;if(index!="F")return that[O1][index];for(entry=that[FIRST];entry;entry=entry.n){if(entry.k==key)return entry}}function def(that,key,value){var entry=getEntry(that,key),prev,index;if(entry)entry.v=value;else{that[LAST]=entry={i:index=fastKey(key,true),k:key,v:value,p:prev=that[LAST],n:undefined,r:false};if(!that[FIRST])that[FIRST]=entry;if(prev)prev.n=entry;that[SIZE]++;if(index!="F")that[O1][index]=entry}return that}var collectionMethods={clear:function(){for(var that=this,data=that[O1],entry=that[FIRST];entry;entry=entry.n){entry.r=true;
if(entry.p)entry.p=entry.p.n=undefined;delete data[entry.i]}that[FIRST]=that[LAST]=undefined;that[SIZE]=0},"delete":function(key){var that=this,entry=getEntry(that,key);if(entry){var next=entry.n,prev=entry.p;delete that[O1][entry.i];entry.r=true;if(prev)prev.n=next;if(next)next.p=prev;if(that[FIRST]==entry)that[FIRST]=next;if(that[LAST]==entry)that[LAST]=prev;that[SIZE]--}return!!entry},forEach:function(callbackfn){var f=ctx(callbackfn,arguments[1],3),entry;while(entry=entry?entry.n:this[FIRST]){f(entry.v,entry.k,this);while(entry&&entry.r)entry=entry.p}},has:function(key){return!!getEntry(this,key)}};Map=getCollection(Map,MAP,{get:function(key){var entry=getEntry(this,key);return entry&&entry.v},set:function(key,value){return def(this,key===0?0:key,value)}},collectionMethods,true);Set=getCollection(Set,SET,{add:function(value){return def(this,value=value===0?0:value,value)}},collectionMethods);function defWeak(that,key,value){if(isFrozen(assertObject(key)))leakStore(that).set(key,value);else{has(key,WEAK)||hidden(key,WEAK,{});key[WEAK][that[UID]]=value}return that}function leakStore(that){return that[LEAK]||hidden(that,LEAK,new Map)[LEAK]}var weakMethods={"delete":function(key){if(!isObject(key))return false;if(isFrozen(key))return leakStore(this)["delete"](key);return has(key,WEAK)&&has(key[WEAK],this[UID])&&delete key[WEAK][this[UID]]},has:function(key){if(!isObject(key))return false;if(isFrozen(key))return leakStore(this).has(key);return has(key,WEAK)&&has(key[WEAK],this[UID])}};WeakMap=getCollection(WeakMap,WEAKMAP,{get:function(key){if(isObject(key)){if(isFrozen(key))return leakStore(this).get(key);if(has(key,WEAK))return key[WEAK][this[UID]]}},set:function(key,value){return defWeak(this,key,value)}},weakMethods,true,true);if(framework&&(new WeakMap).set(Object.freeze(tmp),7).get(tmp)!=7){forEach.call(array("delete,has,get,set"),function(key){var method=WeakMap[PROTOTYPE][key];WeakMap[PROTOTYPE][key]=function(a,b){if(isObject(a)&&isFrozen(a)){var result=leakStore(this)[key](a,b);return key=="set"?this:result}return method.call(this,a,b)}})}WeakSet=getCollection(WeakSet,WEAKSET,{add:function(value){return defWeak(this,value,true)}},weakMethods,false,true)}();!function(){function Enumerate(iterated){var keys=[],key;for(key in iterated)keys.push(key);set(this,ITER,{o:iterated,a:keys,i:0})}createIterator(Enumerate,OBJECT,function(){var iter=this[ITER],keys=iter.a,key;do{if(iter.i>=keys.length)return iterResult(1)}while(!((key=keys[iter.i++])in iter.o));return iterResult(0,key)});function wrap(fn){return function(it){assertObject(it);try{return fn.apply(undefined,arguments),true}catch(e){return false}}}function reflectGet(target,propertyKey){var receiver=arguments.length<3?target:arguments[2],desc=getOwnDescriptor(assertObject(target),propertyKey),proto;if(desc)return has(desc,"value")?desc.value:desc.get===undefined?undefined:desc.get.call(receiver);return isObject(proto=getPrototypeOf(target))?reflectGet(proto,propertyKey,receiver):undefined}function reflectSet(target,propertyKey,V){var receiver=arguments.length<4?target:arguments[3],ownDesc=getOwnDescriptor(assertObject(target),propertyKey),existingDescriptor,proto;if(!ownDesc){if(isObject(proto=getPrototypeOf(target))){return reflectSet(proto,propertyKey,V,receiver)}ownDesc=descriptor(0)}if(has(ownDesc,"value")){if(ownDesc.writable===false||!isObject(receiver))return false;existingDescriptor=getOwnDescriptor(receiver,propertyKey)||descriptor(0);existingDescriptor.value=V;return defineProperty(receiver,propertyKey,existingDescriptor),true}return ownDesc.set===undefined?false:(ownDesc.set.call(receiver,V),true)}var isExtensible=Object.isExtensible||returnIt;var reflect={apply:ctx(call,apply,3),construct:function(target,argumentsList){var proto=assertFunction(arguments.length<3?target:arguments[2])[PROTOTYPE],instance=create(isObject(proto)?proto:ObjectProto),result=apply.call(target,instance,argumentsList);return isObject(result)?result:instance},defineProperty:wrap(defineProperty),deleteProperty:function(target,propertyKey){var desc=getOwnDescriptor(assertObject(target),propertyKey);return desc&&!desc.configurable?false:delete target[propertyKey]},enumerate:function(target){return new Enumerate(assertObject(target))},get:reflectGet,getOwnPropertyDescriptor:function(target,propertyKey){return getOwnDescriptor(assertObject(target),propertyKey)},getPrototypeOf:function(target){return getPrototypeOf(assertObject(target))},has:function(target,propertyKey){return propertyKey in target},isExtensible:function(target){return!!isExtensible(assertObject(target))},ownKeys:ownKeys,preventExtensions:wrap(Object.preventExtensions||returnIt),set:reflectSet};if(setPrototypeOf)reflect.setPrototypeOf=function(target,proto){return setPrototypeOf(assertObject(target),proto),true};$define(GLOBAL,{Reflect:{}});$define(STATIC,"Reflect",reflect)}();!function(){$define(PROTO,ARRAY,{includes:createArrayContains(true)});$define(PROTO,STRING,{at:createPointAt(true)});function createObjectToArray(isEntries){return function(object){var O=toObject(object),keys=getKeys(object),length=keys.length,i=0,result=Array(length),key;if(isEntries)while(length>i)result[i]=[key=keys[i++],O[key]];else while(length>i)result[i]=O[keys[i++]];return result}}$define(STATIC,OBJECT,{getOwnPropertyDescriptors:function(object){var O=toObject(object),result={};forEach.call(ownKeys(O),function(key){defineProperty(result,key,descriptor(0,getOwnDescriptor(O,key)))});return result},values:createObjectToArray(false),entries:createObjectToArray(true)});$define(STATIC,REGEXP,{escape:createReplacer(/([\\\-[\]{}()*+?.,^$|])/g,"\\$1",true)})}();!function(REFERENCE){REFERENCE_GET=getWellKnownSymbol(REFERENCE+"Get",true);var REFERENCE_SET=getWellKnownSymbol(REFERENCE+SET,true),REFERENCE_DELETE=getWellKnownSymbol(REFERENCE+"Delete",true);$define(STATIC,SYMBOL,{referenceGet:REFERENCE_GET,referenceSet:REFERENCE_SET,referenceDelete:REFERENCE_DELETE});hidden(FunctionProto,REFERENCE_GET,returnThis);function setMapMethods(Constructor){if(Constructor){var MapProto=Constructor[PROTOTYPE];hidden(MapProto,REFERENCE_GET,MapProto.get);hidden(MapProto,REFERENCE_SET,MapProto.set);hidden(MapProto,REFERENCE_DELETE,MapProto["delete"])}}setMapMethods(Map);setMapMethods(WeakMap)}("reference");!function(arrayStatics){function setArrayStatics(keys,length){forEach.call(array(keys),function(key){if(key in ArrayProto)arrayStatics[key]=ctx(call,ArrayProto[key],length)})}setArrayStatics("pop,reverse,shift,keys,values,entries",1);setArrayStatics("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3);setArrayStatics("join,slice,concat,push,splice,unshift,sort,lastIndexOf,"+"reduce,reduceRight,copyWithin,fill,turn");$define(STATIC,ARRAY,arrayStatics)}({});!function(NodeList){if(framework&&NodeList&&!(SYMBOL_ITERATOR in NodeList[PROTOTYPE])){hidden(NodeList[PROTOTYPE],SYMBOL_ITERATOR,Iterators[ARRAY])}Iterators.NodeList=Iterators[ARRAY]}(global.NodeList)}(typeof self!="undefined"&&self.Math===Math?self:Function("return this")(),true)},{}],3:[function(require,module,exports){(function(global){!function(global){"use strict";var hasOwn=Object.prototype.hasOwnProperty;var undefined;var iteratorSymbol=typeof Symbol==="function"&&Symbol.iterator||"@@iterator";var inModule=typeof module==="object";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){module.exports=runtime}return}runtime=global.regeneratorRuntime=inModule?module.exports:{};function wrap(innerFn,outerFn,self,tryLocsList){return new Generator(innerFn,outerFn,self||null,tryLocsList||[])}runtime.wrap=wrap;function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";var ContinueSentinel={};function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype;GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunction.displayName="GeneratorFunction";runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||(ctor.displayName||ctor.name)==="GeneratorFunction":false};runtime.mark=function(genFun){genFun.__proto__=GeneratorFunctionPrototype;genFun.prototype=Object.create(Gp);return genFun};runtime.async=function(innerFn,outerFn,self,tryLocsList){return new Promise(function(resolve,reject){var generator=wrap(innerFn,outerFn,self,tryLocsList);var callNext=step.bind(generator.next);var callThrow=step.bind(generator["throw"]);function step(arg){var record=tryCatch(this,null,arg);if(record.type==="throw"){reject(record.arg);return}var info=record.arg;if(info.done){resolve(info.value)}else{Promise.resolve(info.value).then(callNext,callThrow)}}callNext()})};function Generator(innerFn,outerFn,self,tryLocsList){var generator=outerFn?Object.create(outerFn.prototype):this;var context=new Context(tryLocsList);var state=GenStateSuspendedStart;function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running")}if(state===GenStateCompleted){return doneResult()}while(true){var delegate=context.delegate;if(delegate){var record=tryCatch(delegate.iterator[method],delegate.iterator,arg);if(record.type==="throw"){context.delegate=null;method="throw";arg=record.arg;continue}method="next";arg=undefined;var info=record.arg;if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc}else{state=GenStateSuspendedYield;return info}context.delegate=null}if(method==="next"){if(state===GenStateSuspendedStart&&typeof arg!=="undefined"){throw new TypeError("attempt to send "+JSON.stringify(arg)+" to newborn generator")}if(state===GenStateSuspendedYield){context.sent=arg}else{delete context.sent}}else if(method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw arg}if(context.dispatchException(arg)){method="next";arg=undefined}}else if(method==="return"){context.abrupt("return",arg)}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){state=context.done?GenStateCompleted:GenStateSuspendedYield;var info={value:record.arg,done:context.done};if(record.arg===ContinueSentinel){if(context.delegate&&method==="next"){arg=undefined}}else{return info}}else if(record.type==="throw"){state=GenStateCompleted;if(method==="next"){context.dispatchException(record.arg)}else{arg=record.arg}}}}generator.next=invoke.bind(generator,"next");generator["throw"]=invoke.bind(generator,"throw");generator["return"]=invoke.bind(generator,"return");return generator}Gp[iteratorSymbol]=function(){return this};Gp.toString=function(){return"[object Generator]"};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1]}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3]}this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset()}runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key)}keys.reverse();return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next}}next.done=true;return next}};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable)}if(typeof iterable.next==="function"){return iterable}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next}}next.value=undefined;next.done=true;return next};return next.next=next}}return{next:doneResult}}runtime.values=values;function doneResult(){return{value:undefined,done:true}}Context.prototype={constructor:Context,reset:function(){this.prev=0;this.next=0;this.sent=undefined;this.done=false;this.delegate=null;this.tryEntries.forEach(resetTryEntry);for(var tempIndex=0,tempName;hasOwn.call(this,tempName="t"+tempIndex)||tempIndex<20;++tempIndex){this[tempName]=null}},stop:function(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg}return this.rval},dispatchException:function(exception){if(this.done){throw exception}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;return!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){return handle("end")}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<finallyEntry.finallyLoc){finallyEntry=null}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.next=finallyEntry.finallyLoc}else{this.complete(record)}return ContinueSentinel},complete:function(record,afterLoc){if(record.type==="throw"){throw record.arg}if(record.type==="break"||record.type==="continue"){this.next=record.arg}else if(record.type==="return"){this.rval=record.arg;this.next="end"}else if(record.type==="normal"&&afterLoc){this.next=afterLoc}return ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){return this.complete(entry.completion,entry.afterLoc)}}},"catch":function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};return ContinueSentinel}}}(typeof global==="object"?global:typeof window==="object"?window:this)}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{}]},{},[1]);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9icm93c2VyLXBvbHlmaWxsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7KGZ1bmN0aW9uKGdsb2JhbCl7XCJ1c2Ugc3RyaWN0XCI7aWYoZ2xvYmFsLl9iYWJlbFBvbHlmaWxsKXt0aHJvdyBuZXcgRXJyb3IoXCJvbmx5IG9uZSBpbnN0YW5jZSBvZiBiYWJlbC9wb2x5ZmlsbCBpcyBhbGxvd2VkXCIpfWdsb2JhbC5fYmFiZWxQb2x5ZmlsbD10cnVlO3JlcXVpcmUoXCJjb3JlLWpzL3NoaW1cIik7cmVxdWlyZShcInJlZ2VuZXJhdG9yLWJhYmVsL3J1bnRpbWVcIil9KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCI/Z2xvYmFsOnR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIj9zZWxmOnR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiP3dpbmRvdzp7fSl9LHtcImNvcmUtanMvc2hpbVwiOjIsXCJyZWdlbmVyYXRvci1iYWJlbC9ydW50aW1lXCI6M31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpeyFmdW5jdGlvbihnbG9iYWwsZnJhbWV3b3JrLHVuZGVmaW5lZCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIE9CSkVDVD1cIk9iamVjdFwiLEZVTkNUSU9OPVwiRnVuY3Rpb25cIixBUlJBWT1cIkFycmF5XCIsU1RSSU5HPVwiU3RyaW5nXCIsTlVNQkVSPVwiTnVtYmVyXCIsUkVHRVhQPVwiUmVnRXhwXCIsREFURT1cIkRhdGVcIixNQVA9XCJNYXBcIixTRVQ9XCJTZXRcIixXRUFLTUFQPVwiV2Vha01hcFwiLFdFQUtTRVQ9XCJXZWFrU2V0XCIsU1lNQk9MPVwiU3ltYm9sXCIsUFJPTUlTRT1cIlByb21pc2VcIixNQVRIPVwiTWF0aFwiLEFSR1VNRU5UUz1cIkFyZ3VtZW50c1wiLFBST1RPVFlQRT1cInByb3RvdHlwZVwiLENPTlNUUlVDVE9SPVwiY29uc3RydWN0b3JcIixUT19TVFJJTkc9XCJ0b1N0cmluZ1wiLFRPX1NUUklOR19UQUc9VE9fU1RSSU5HK1wiVGFnXCIsVE9fTE9DQUxFPVwidG9Mb2NhbGVTdHJpbmdcIixIQVNfT1dOPVwiaGFzT3duUHJvcGVydHlcIixGT1JfRUFDSD1cImZvckVhY2hcIixJVEVSQVRPUj1cIml0ZXJhdG9yXCIsRkZfSVRFUkFUT1I9XCJAQFwiK0lURVJBVE9SLFBST0NFU1M9XCJwcm9jZXNzXCIsQ1JFQVRFX0VMRU1FTlQ9XCJjcmVhdGVFbGVtZW50XCIsRnVuY3Rpb249Z2xvYmFsW0ZVTkNUSU9OXSxPYmplY3Q9Z2xvYmFsW09CSkVDVF0sQXJyYXk9Z2xvYmFsW0FSUkFZXSxTdHJpbmc9Z2xvYmFsW1NUUklOR10sTnVtYmVyPWdsb2JhbFtOVU1CRVJdLFJlZ0V4cD1nbG9iYWxbUkVHRVhQXSxEYXRlPWdsb2JhbFtEQVRFXSxNYXA9Z2xvYmFsW01BUF0sU2V0PWdsb2JhbFtTRVRdLFdlYWtNYXA9Z2xvYmFsW1dFQUtNQVBdLFdlYWtTZXQ9Z2xvYmFsW1dFQUtTRVRdLFN5bWJvbD1nbG9iYWxbU1lNQk9MXSxNYXRoPWdsb2JhbFtNQVRIXSxUeXBlRXJyb3I9Z2xvYmFsLlR5cGVFcnJvcixSYW5nZUVycm9yPWdsb2JhbC5SYW5nZUVycm9yLHNldFRpbWVvdXQ9Z2xvYmFsLnNldFRpbWVvdXQsc2V0SW1tZWRpYXRlPWdsb2JhbC5zZXRJbW1lZGlhdGUsY2xlYXJJbW1lZGlhdGU9Z2xvYmFsLmNsZWFySW1tZWRpYXRlLHBhcnNlSW50PWdsb2JhbC5wYXJzZUludCxpc0Zpbml0ZT1nbG9iYWwuaXNGaW5pdGUscHJvY2Vzcz1nbG9iYWxbUFJPQ0VTU10sbmV4dFRpY2s9cHJvY2VzcyYmcHJvY2Vzcy5uZXh0VGljayxkb2N1bWVudD1nbG9iYWwuZG9jdW1lbnQsaHRtbD1kb2N1bWVudCYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LG5hdmlnYXRvcj1nbG9iYWwubmF2aWdhdG9yLGRlZmluZT1nbG9iYWwuZGVmaW5lLGNvbnNvbGU9Z2xvYmFsLmNvbnNvbGV8fHt9LEFycmF5UHJvdG89QXJyYXlbUFJPVE9UWVBFXSxPYmplY3RQcm90bz1PYmplY3RbUFJPVE9UWVBFXSxGdW5jdGlvblByb3RvPUZ1bmN0aW9uW1BST1RPVFlQRV0sSW5maW5pdHk9MS8wLERPVD1cIi5cIjtmdW5jdGlvbiBpc09iamVjdChpdCl7cmV0dXJuIGl0IT09bnVsbCYmKHR5cGVvZiBpdD09XCJvYmplY3RcInx8dHlwZW9mIGl0PT1cImZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGlzRnVuY3Rpb24oaXQpe3JldHVybiB0eXBlb2YgaXQ9PVwiZnVuY3Rpb25cIn12YXIgaXNOYXRpdmU9Y3R4KC8uLy50ZXN0LC9cXFtuYXRpdmUgY29kZVxcXVxccypcXH1cXHMqJC8sMSk7dmFyIHRvU3RyaW5nPU9iamVjdFByb3RvW1RPX1NUUklOR107ZnVuY3Rpb24gc2V0VG9TdHJpbmdUYWcoaXQsdGFnLHN0YXQpe2lmKGl0JiYhaGFzKGl0PXN0YXQ/aXQ6aXRbUFJPVE9UWVBFXSxTWU1CT0xfVEFHKSloaWRkZW4oaXQsU1lNQk9MX1RBRyx0YWcpfWZ1bmN0aW9uIGNvZihpdCl7cmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsLTEpfWZ1bmN0aW9uIGNsYXNzb2YoaXQpe3ZhciBPLFQ7cmV0dXJuIGl0PT11bmRlZmluZWQ/aXQ9PT11bmRlZmluZWQ/XCJVbmRlZmluZWRcIjpcIk51bGxcIjp0eXBlb2YoVD0oTz1PYmplY3QoaXQpKVtTWU1CT0xfVEFHXSk9PVwic3RyaW5nXCI/VDpjb2YoTyl9dmFyIGNhbGw9RnVuY3Rpb25Qcm90by5jYWxsLGFwcGx5PUZ1bmN0aW9uUHJvdG8uYXBwbHksUkVGRVJFTkNFX0dFVDtmdW5jdGlvbiBwYXJ0KCl7dmFyIGZuPWFzc2VydEZ1bmN0aW9uKHRoaXMpLGxlbmd0aD1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9QXJyYXkobGVuZ3RoKSxpPTAsXz1wYXRoLl8saG9sZGVyPWZhbHNlO3doaWxlKGxlbmd0aD5pKWlmKChhcmdzW2ldPWFyZ3VtZW50c1tpKytdKT09PV8paG9sZGVyPXRydWU7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpcyxfbGVuZ3RoPWFyZ3VtZW50cy5sZW5ndGgsaT0wLGo9MCxfYXJncztpZighaG9sZGVyJiYhX2xlbmd0aClyZXR1cm4gaW52b2tlKGZuLGFyZ3MsdGhhdCk7X2FyZ3M9YXJncy5zbGljZSgpO2lmKGhvbGRlcilmb3IoO2xlbmd0aD5pO2krKylpZihfYXJnc1tpXT09PV8pX2FyZ3NbaV09YXJndW1lbnRzW2orK107d2hpbGUoX2xlbmd0aD5qKV9hcmdzLnB1c2goYXJndW1lbnRzW2orK10pO3JldHVybiBpbnZva2UoZm4sX2FyZ3MsdGhhdCl9fWZ1bmN0aW9uIGN0eChmbix0aGF0LGxlbmd0aCl7YXNzZXJ0RnVuY3Rpb24oZm4pO2lmKH5sZW5ndGgmJnRoYXQ9PT11bmRlZmluZWQpcmV0dXJuIGZuO3N3aXRjaChsZW5ndGgpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGZuLmNhbGwodGhhdCxhKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihhLGIpe3JldHVybiBmbi5jYWxsKHRoYXQsYSxiKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZuLmNhbGwodGhhdCxhLGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBmbi5hcHBseSh0aGF0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGludm9rZShmbixhcmdzLHRoYXQpe3ZhciB1bj10aGF0PT09dW5kZWZpbmVkO3N3aXRjaChhcmdzLmxlbmd0aHwwKXtjYXNlIDA6cmV0dXJuIHVuP2ZuKCk6Zm4uY2FsbCh0aGF0KTtjYXNlIDE6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0pOmZuLmNhbGwodGhhdCxhcmdzWzBdKTtjYXNlIDI6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0sYXJnc1sxXSk6Zm4uY2FsbCh0aGF0LGFyZ3NbMF0sYXJnc1sxXSk7Y2FzZSAzOnJldHVybiB1bj9mbihhcmdzWzBdLGFyZ3NbMV0sYXJnc1syXSk6Zm4uY2FsbCh0aGF0LGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdKTtjYXNlIDQ6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdLGFyZ3NbM10pOmZuLmNhbGwodGhhdCxhcmdzWzBdLGFyZ3NbMV0sYXJnc1syXSxhcmdzWzNdKTtjYXNlIDU6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdLGFyZ3NbM10sYXJnc1s0XSk6Zm4uY2FsbCh0aGF0LGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdLGFyZ3NbM10sYXJnc1s0XSl9cmV0dXJuIGZuLmFwcGx5KHRoYXQsYXJncyl9dmFyIGNyZWF0ZT1PYmplY3QuY3JlYXRlLGdldFByb3RvdHlwZU9mPU9iamVjdC5nZXRQcm90b3R5cGVPZixzZXRQcm90b3R5cGVPZj1PYmplY3Quc2V0UHJvdG90eXBlT2YsZGVmaW5lUHJvcGVydHk9T2JqZWN0LmRlZmluZVByb3BlcnR5LGRlZmluZVByb3BlcnRpZXM9T2JqZWN0LmRlZmluZVByb3BlcnRpZXMsZ2V0T3duRGVzY3JpcHRvcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLGdldEtleXM9T2JqZWN0LmtleXMsZ2V0TmFtZXM9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsZ2V0U3ltYm9scz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLGlzRnJvemVuPU9iamVjdC5pc0Zyb3plbixoYXM9Y3R4KGNhbGwsT2JqZWN0UHJvdG9bSEFTX09XTl0sMiksRVM1T2JqZWN0PU9iamVjdCxEaWN0O2Z1bmN0aW9uIHRvT2JqZWN0KGl0KXtyZXR1cm4gRVM1T2JqZWN0KGFzc2VydERlZmluZWQoaXQpKX1mdW5jdGlvbiByZXR1cm5JdChpdCl7cmV0dXJuIGl0fWZ1bmN0aW9uIHJldHVyblRoaXMoKXtyZXR1cm4gdGhpc31mdW5jdGlvbiBnZXQob2JqZWN0LGtleSl7aWYoaGFzKG9iamVjdCxrZXkpKXJldHVybiBvYmplY3Rba2V5XX1mdW5jdGlvbiBvd25LZXlzKGl0KXthc3NlcnRPYmplY3QoaXQpO3JldHVybiBnZXRTeW1ib2xzP2dldE5hbWVzKGl0KS5jb25jYXQoZ2V0U3ltYm9scyhpdCkpOmdldE5hbWVzKGl0KX12YXIgYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHRhcmdldCxzb3VyY2Upe3ZhciBUPU9iamVjdChhc3NlcnREZWZpbmVkKHRhcmdldCkpLGw9YXJndW1lbnRzLmxlbmd0aCxpPTE7d2hpbGUobD5pKXt2YXIgUz1FUzVPYmplY3QoYXJndW1lbnRzW2krK10pLGtleXM9Z2V0S2V5cyhTKSxsZW5ndGg9a2V5cy5sZW5ndGgsaj0wLGtleTt3aGlsZShsZW5ndGg+ailUW2tleT1rZXlzW2orK11dPVNba2V5XX1yZXR1cm4gVH07ZnVuY3Rpb24ga2V5T2Yob2JqZWN0LGVsKXt2YXIgTz10b09iamVjdChvYmplY3QpLGtleXM9Z2V0S2V5cyhPKSxsZW5ndGg9a2V5cy5sZW5ndGgsaW5kZXg9MCxrZXk7d2hpbGUobGVuZ3RoPmluZGV4KWlmKE9ba2V5PWtleXNbaW5kZXgrK11dPT09ZWwpcmV0dXJuIGtleX1mdW5jdGlvbiBhcnJheShpdCl7cmV0dXJuIFN0cmluZyhpdCkuc3BsaXQoXCIsXCIpfXZhciBwdXNoPUFycmF5UHJvdG8ucHVzaCx1bnNoaWZ0PUFycmF5UHJvdG8udW5zaGlmdCxzbGljZT1BcnJheVByb3RvLnNsaWNlLHNwbGljZT1BcnJheVByb3RvLnNwbGljZSxpbmRleE9mPUFycmF5UHJvdG8uaW5kZXhPZixmb3JFYWNoPUFycmF5UHJvdG9bRk9SX0VBQ0hdO2Z1bmN0aW9uIGNyZWF0ZUFycmF5TWV0aG9kKHR5cGUpe3ZhciBpc01hcD10eXBlPT0xLGlzRmlsdGVyPXR5cGU9PTIsaXNTb21lPXR5cGU9PTMsaXNFdmVyeT10eXBlPT00LGlzRmluZEluZGV4PXR5cGU9PTYsbm9ob2xlcz10eXBlPT01fHxpc0ZpbmRJbmRleDtyZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2tmbil7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpLHRoYXQ9YXJndW1lbnRzWzFdLHNlbGY9RVM1T2JqZWN0KE8pLGY9Y3R4KGNhbGxiYWNrZm4sdGhhdCwzKSxsZW5ndGg9dG9MZW5ndGgoc2VsZi5sZW5ndGgpLGluZGV4PTAscmVzdWx0PWlzTWFwP0FycmF5KGxlbmd0aCk6aXNGaWx0ZXI/W106dW5kZWZpbmVkLHZhbCxyZXM7Zm9yKDtsZW5ndGg+aW5kZXg7aW5kZXgrKylpZihub2hvbGVzfHxpbmRleCBpbiBzZWxmKXt2YWw9c2VsZltpbmRleF07cmVzPWYodmFsLGluZGV4LE8pO2lmKHR5cGUpe2lmKGlzTWFwKXJlc3VsdFtpbmRleF09cmVzO2Vsc2UgaWYocmVzKXN3aXRjaCh0eXBlKXtjYXNlIDM6cmV0dXJuIHRydWU7Y2FzZSA1OnJldHVybiB2YWw7Y2FzZSA2OnJldHVybiBpbmRleDtjYXNlIDI6cmVzdWx0LnB1c2godmFsKX1lbHNlIGlmKGlzRXZlcnkpcmV0dXJuIGZhbHNlfX1yZXR1cm4gaXNGaW5kSW5kZXg/LTE6aXNTb21lfHxpc0V2ZXJ5P2lzRXZlcnk6cmVzdWx0fX1mdW5jdGlvbiBjcmVhdGVBcnJheUNvbnRhaW5zKGlzQ29udGFpbnMpe3JldHVybiBmdW5jdGlvbihlbCl7dmFyIE89dG9PYmplY3QodGhpcyksbGVuZ3RoPXRvTGVuZ3RoKE8ubGVuZ3RoKSxpbmRleD10b0luZGV4KGFyZ3VtZW50c1sxXSxsZW5ndGgpO2lmKGlzQ29udGFpbnMmJmVsIT1lbCl7Zm9yKDtsZW5ndGg+aW5kZXg7aW5kZXgrKylpZihzYW1lTmFOKE9baW5kZXhdKSlyZXR1cm4gaXNDb250YWluc3x8aW5kZXh9ZWxzZSBmb3IoO2xlbmd0aD5pbmRleDtpbmRleCsrKWlmKGlzQ29udGFpbnN8fGluZGV4IGluIE8pe2lmKE9baW5kZXhdPT09ZWwpcmV0dXJuIGlzQ29udGFpbnN8fGluZGV4fXJldHVybiFpc0NvbnRhaW5zJiYtMX19ZnVuY3Rpb24gZ2VuZXJpYyhBLEIpe3JldHVybiB0eXBlb2YgQT09XCJmdW5jdGlvblwiP0E6Qn12YXIgTUFYX1NBRkVfSU5URUdFUj05MDA3MTk5MjU0NzQwOTkxLHBvdz1NYXRoLnBvdyxhYnM9TWF0aC5hYnMsY2VpbD1NYXRoLmNlaWwsZmxvb3I9TWF0aC5mbG9vcixtYXg9TWF0aC5tYXgsbWluPU1hdGgubWluLHJhbmRvbT1NYXRoLnJhbmRvbSx0cnVuYz1NYXRoLnRydW5jfHxmdW5jdGlvbihpdCl7cmV0dXJuKGl0PjA/Zmxvb3I6Y2VpbCkoaXQpfTtmdW5jdGlvbiBzYW1lTmFOKG51bWJlcil7cmV0dXJuIG51bWJlciE9bnVtYmVyfWZ1bmN0aW9uIHRvSW50ZWdlcihpdCl7cmV0dXJuIGlzTmFOKGl0KT8wOnRydW5jKGl0KX1mdW5jdGlvbiB0b0xlbmd0aChpdCl7cmV0dXJuIGl0PjA/bWluKHRvSW50ZWdlcihpdCksTUFYX1NBRkVfSU5URUdFUik6MH1mdW5jdGlvbiB0b0luZGV4KGluZGV4LGxlbmd0aCl7dmFyIGluZGV4PXRvSW50ZWdlcihpbmRleCk7cmV0dXJuIGluZGV4PDA/bWF4KGluZGV4K2xlbmd0aCwwKTptaW4oaW5kZXgsbGVuZ3RoKX1mdW5jdGlvbiBseihudW0pe3JldHVybiBudW0+OT9udW06XCIwXCIrbnVtfWZ1bmN0aW9uIGNyZWF0ZVJlcGxhY2VyKHJlZ0V4cCxyZXBsYWNlLGlzU3RhdGljKXt2YXIgcmVwbGFjZXI9aXNPYmplY3QocmVwbGFjZSk/ZnVuY3Rpb24ocGFydCl7cmV0dXJuIHJlcGxhY2VbcGFydF19OnJlcGxhY2U7cmV0dXJuIGZ1bmN0aW9uKGl0KXtyZXR1cm4gU3RyaW5nKGlzU3RhdGljP2l0OnRoaXMpLnJlcGxhY2UocmVnRXhwLHJlcGxhY2VyKX19ZnVuY3Rpb24gY3JlYXRlUG9pbnRBdCh0b1N0cmluZyl7cmV0dXJuIGZ1bmN0aW9uKHBvcyl7dmFyIHM9U3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpLGk9dG9JbnRlZ2VyKHBvcyksbD1zLmxlbmd0aCxhLGI7aWYoaTwwfHxpPj1sKXJldHVybiB0b1N0cmluZz9cIlwiOnVuZGVmaW5lZDthPXMuY2hhckNvZGVBdChpKTtyZXR1cm4gYTw1NTI5Nnx8YT41NjMxOXx8aSsxPT09bHx8KGI9cy5jaGFyQ29kZUF0KGkrMSkpPDU2MzIwfHxiPjU3MzQzP3RvU3RyaW5nP3MuY2hhckF0KGkpOmE6dG9TdHJpbmc/cy5zbGljZShpLGkrMik6KGEtNTUyOTY8PDEwKSsoYi01NjMyMCkrNjU1MzZ9fXZhciBSRURVQ0VfRVJST1I9XCJSZWR1Y2Ugb2YgZW1wdHkgb2JqZWN0IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiO2Z1bmN0aW9uIGFzc2VydChjb25kaXRpb24sbXNnMSxtc2cyKXtpZighY29uZGl0aW9uKXRocm93IFR5cGVFcnJvcihtc2cyP21zZzErbXNnMjptc2cxKX1mdW5jdGlvbiBhc3NlcnREZWZpbmVkKGl0KXtpZihpdD09dW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZFwiKTtyZXR1cm4gaXR9ZnVuY3Rpb24gYXNzZXJ0RnVuY3Rpb24oaXQpe2Fzc2VydChpc0Z1bmN0aW9uKGl0KSxpdCxcIiBpcyBub3QgYSBmdW5jdGlvbiFcIik7cmV0dXJuIGl0fWZ1bmN0aW9uIGFzc2VydE9iamVjdChpdCl7YXNzZXJ0KGlzT2JqZWN0KGl0KSxpdCxcIiBpcyBub3QgYW4gb2JqZWN0IVwiKTtyZXR1cm4gaXR9ZnVuY3Rpb24gYXNzZXJ0SW5zdGFuY2UoaXQsQ29uc3RydWN0b3IsbmFtZSl7YXNzZXJ0KGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IsbmFtZSxcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIil9ZnVuY3Rpb24gZGVzY3JpcHRvcihiaXRtYXAsdmFsdWUpe3JldHVybntlbnVtZXJhYmxlOiEoYml0bWFwJjEpLGNvbmZpZ3VyYWJsZTohKGJpdG1hcCYyKSx3cml0YWJsZTohKGJpdG1hcCY0KSx2YWx1ZTp2YWx1ZX19ZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCxrZXksdmFsdWUpe29iamVjdFtrZXldPXZhbHVlO3JldHVybiBvYmplY3R9ZnVuY3Rpb24gY3JlYXRlRGVmaW5lcihiaXRtYXApe3JldHVybiBERVNDP2Z1bmN0aW9uKG9iamVjdCxrZXksdmFsdWUpe3JldHVybiBkZWZpbmVQcm9wZXJ0eShvYmplY3Qsa2V5LGRlc2NyaXB0b3IoYml0bWFwLHZhbHVlKSl9OnNpbXBsZVNldH1mdW5jdGlvbiB1aWQoa2V5KXtyZXR1cm4gU1lNQk9MK1wiKFwiK2tleStcIilfXCIrKCsrc2lkK3JhbmRvbSgpKVtUT19TVFJJTkddKDM2KX1mdW5jdGlvbiBnZXRXZWxsS25vd25TeW1ib2wobmFtZSxzZXR0ZXIpe3JldHVybiBTeW1ib2wmJlN5bWJvbFtuYW1lXXx8KHNldHRlcj9TeW1ib2w6c2FmZVN5bWJvbCkoU1lNQk9MK0RPVCtuYW1lKX12YXIgREVTQz0hIWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDJ9fSkuYT09Mn1jYXRjaChlKXt9fSgpLHNpZD0wLGhpZGRlbj1jcmVhdGVEZWZpbmVyKDEpLHNldD1TeW1ib2w/c2ltcGxlU2V0OmhpZGRlbixzYWZlU3ltYm9sPVN5bWJvbHx8dWlkO2Z1bmN0aW9uIGFzc2lnbkhpZGRlbih0YXJnZXQsc3JjKXtmb3IodmFyIGtleSBpbiBzcmMpaGlkZGVuKHRhcmdldCxrZXksc3JjW2tleV0pO3JldHVybiB0YXJnZXR9dmFyIFNZTUJPTF9VTlNDT1BBQkxFUz1nZXRXZWxsS25vd25TeW1ib2woXCJ1bnNjb3BhYmxlc1wiKSxBcnJheVVuc2NvcGFibGVzPUFycmF5UHJvdG9bU1lNQk9MX1VOU0NPUEFCTEVTXXx8e30sU1lNQk9MX1RBRz1nZXRXZWxsS25vd25TeW1ib2woVE9fU1RSSU5HX1RBRyksU1lNQk9MX1NQRUNJRVM9Z2V0V2VsbEtub3duU3ltYm9sKFwic3BlY2llc1wiKSxTWU1CT0xfSVRFUkFUT1I7ZnVuY3Rpb24gc2V0U3BlY2llcyhDKXtpZihERVNDJiYoZnJhbWV3b3JrfHwhaXNOYXRpdmUoQykpKWRlZmluZVByb3BlcnR5KEMsU1lNQk9MX1NQRUNJRVMse2NvbmZpZ3VyYWJsZTp0cnVlLGdldDpyZXR1cm5UaGlzfSl9dmFyIE5PREU9Y29mKHByb2Nlc3MpPT1QUk9DRVNTLGNvcmU9e30scGF0aD1mcmFtZXdvcms/Z2xvYmFsOmNvcmUsb2xkPWdsb2JhbC5jb3JlLGV4cG9ydEdsb2JhbCxGT1JDRUQ9MSxHTE9CQUw9MixTVEFUSUM9NCxQUk9UTz04LEJJTkQ9MTYsV1JBUD0zMjtmdW5jdGlvbiAkZGVmaW5lKHR5cGUsbmFtZSxzb3VyY2Upe3ZhciBrZXksb3duLG91dCxleHAsaXNHbG9iYWw9dHlwZSZHTE9CQUwsdGFyZ2V0PWlzR2xvYmFsP2dsb2JhbDp0eXBlJlNUQVRJQz9nbG9iYWxbbmFtZV06KGdsb2JhbFtuYW1lXXx8T2JqZWN0UHJvdG8pW1BST1RPVFlQRV0sZXhwb3J0cz1pc0dsb2JhbD9jb3JlOmNvcmVbbmFtZV18fChjb3JlW25hbWVdPXt9KTtpZihpc0dsb2JhbClzb3VyY2U9bmFtZTtmb3Ioa2V5IGluIHNvdXJjZSl7b3duPSEodHlwZSZGT1JDRUQpJiZ0YXJnZXQmJmtleSBpbiB0YXJnZXQmJighaXNGdW5jdGlvbih0YXJnZXRba2V5XSl8fGlzTmF0aXZlKHRhcmdldFtrZXldKSk7b3V0PShvd24/dGFyZ2V0OnNvdXJjZSlba2V5XTtpZighZnJhbWV3b3JrJiZpc0dsb2JhbCYmIWlzRnVuY3Rpb24odGFyZ2V0W2tleV0pKWV4cD1zb3VyY2Vba2V5XTtlbHNlIGlmKHR5cGUmQklORCYmb3duKWV4cD1jdHgob3V0LGdsb2JhbCk7ZWxzZSBpZih0eXBlJldSQVAmJiFmcmFtZXdvcmsmJnRhcmdldFtrZXldPT1vdXQpe2V4cD1mdW5jdGlvbihwYXJhbSl7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBvdXQ/bmV3IG91dChwYXJhbSk6b3V0KHBhcmFtKX07ZXhwW1BST1RPVFlQRV09b3V0W1BST1RPVFlQRV19ZWxzZSBleHA9dHlwZSZQUk9UTyYmaXNGdW5jdGlvbihvdXQpP2N0eChjYWxsLG91dCk6b3V0O2lmKGZyYW1ld29yayYmdGFyZ2V0JiYhb3duKXtpZihpc0dsb2JhbCl0YXJnZXRba2V5XT1vdXQ7ZWxzZSBkZWxldGUgdGFyZ2V0W2tleV0mJmhpZGRlbih0YXJnZXQsa2V5LG91dCl9aWYoZXhwb3J0c1trZXldIT1vdXQpaGlkZGVuKGV4cG9ydHMsa2V5LGV4cCl9fWlmKHR5cGVvZiBtb2R1bGUhPVwidW5kZWZpbmVkXCImJm1vZHVsZS5leHBvcnRzKW1vZHVsZS5leHBvcnRzPWNvcmU7ZWxzZSBpZihpc0Z1bmN0aW9uKGRlZmluZSkmJmRlZmluZS5hbWQpZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGNvcmV9KTtlbHNlIGV4cG9ydEdsb2JhbD10cnVlO2lmKGV4cG9ydEdsb2JhbHx8ZnJhbWV3b3JrKXtjb3JlLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtnbG9iYWwuY29yZT1vbGQ7cmV0dXJuIGNvcmV9O2dsb2JhbC5jb3JlPWNvcmV9U1lNQk9MX0lURVJBVE9SPWdldFdlbGxLbm93blN5bWJvbChJVEVSQVRPUik7dmFyIElURVI9c2FmZVN5bWJvbChcIml0ZXJcIiksS0VZPTEsVkFMVUU9MixJdGVyYXRvcnM9e30sSXRlcmF0b3JQcm90b3R5cGU9e30sQlVHR1lfSVRFUkFUT1JTPVwia2V5c1wiaW4gQXJyYXlQcm90byYmIShcIm5leHRcImluW10ua2V5cygpKTtzZXRJdGVyYXRvcihJdGVyYXRvclByb3RvdHlwZSxyZXR1cm5UaGlzKTtmdW5jdGlvbiBzZXRJdGVyYXRvcihPLHZhbHVlKXtoaWRkZW4oTyxTWU1CT0xfSVRFUkFUT1IsdmFsdWUpO0ZGX0lURVJBVE9SIGluIEFycmF5UHJvdG8mJmhpZGRlbihPLEZGX0lURVJBVE9SLHZhbHVlKX1mdW5jdGlvbiBjcmVhdGVJdGVyYXRvcihDb25zdHJ1Y3RvcixOQU1FLG5leHQscHJvdG8pe0NvbnN0cnVjdG9yW1BST1RPVFlQRV09Y3JlYXRlKHByb3RvfHxJdGVyYXRvclByb3RvdHlwZSx7bmV4dDpkZXNjcmlwdG9yKDEsbmV4dCl9KTtzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvcixOQU1FK1wiIEl0ZXJhdG9yXCIpfWZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yKENvbnN0cnVjdG9yLE5BTUUsdmFsdWUsREVGQVVMVCl7dmFyIHByb3RvPUNvbnN0cnVjdG9yW1BST1RPVFlQRV0saXRlcj1nZXQocHJvdG8sU1lNQk9MX0lURVJBVE9SKXx8Z2V0KHByb3RvLEZGX0lURVJBVE9SKXx8REVGQVVMVCYmZ2V0KHByb3RvLERFRkFVTFQpfHx2YWx1ZTtpZihmcmFtZXdvcmspe3NldEl0ZXJhdG9yKHByb3RvLGl0ZXIpO2lmKGl0ZXIhPT12YWx1ZSl7dmFyIGl0ZXJQcm90bz1nZXRQcm90b3R5cGVPZihpdGVyLmNhbGwobmV3IENvbnN0cnVjdG9yKSk7c2V0VG9TdHJpbmdUYWcoaXRlclByb3RvLE5BTUUrXCIgSXRlcmF0b3JcIix0cnVlKTtoYXMocHJvdG8sRkZfSVRFUkFUT1IpJiZzZXRJdGVyYXRvcihpdGVyUHJvdG8scmV0dXJuVGhpcyl9fUl0ZXJhdG9yc1tOQU1FXT1pdGVyO0l0ZXJhdG9yc1tOQU1FK1wiIEl0ZXJhdG9yXCJdPXJldHVyblRoaXM7cmV0dXJuIGl0ZXJ9ZnVuY3Rpb24gZGVmaW5lU3RkSXRlcmF0b3JzKEJhc2UsTkFNRSxDb25zdHJ1Y3RvcixuZXh0LERFRkFVTFQsSVNfU0VUKXtmdW5jdGlvbiBjcmVhdGVJdGVyKGtpbmQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcyxraW5kKX19Y3JlYXRlSXRlcmF0b3IoQ29uc3RydWN0b3IsTkFNRSxuZXh0KTt2YXIgZW50cmllcz1jcmVhdGVJdGVyKEtFWStWQUxVRSksdmFsdWVzPWNyZWF0ZUl0ZXIoVkFMVUUpO2lmKERFRkFVTFQ9PVZBTFVFKXZhbHVlcz1kZWZpbmVJdGVyYXRvcihCYXNlLE5BTUUsdmFsdWVzLFwidmFsdWVzXCIpO2Vsc2UgZW50cmllcz1kZWZpbmVJdGVyYXRvcihCYXNlLE5BTUUsZW50cmllcyxcImVudHJpZXNcIik7aWYoREVGQVVMVCl7JGRlZmluZShQUk9UTytGT1JDRUQqQlVHR1lfSVRFUkFUT1JTLE5BTUUse2VudHJpZXM6ZW50cmllcyxrZXlzOklTX1NFVD92YWx1ZXM6Y3JlYXRlSXRlcihLRVkpLHZhbHVlczp2YWx1ZXN9KX19ZnVuY3Rpb24gaXRlclJlc3VsdChkb25lLHZhbHVlKXtyZXR1cm57dmFsdWU6dmFsdWUsZG9uZTohIWRvbmV9fWZ1bmN0aW9uIGlzSXRlcmFibGUoaXQpe3ZhciBPPU9iamVjdChpdCksU3ltYm9sPWdsb2JhbFtTWU1CT0xdLGhhc0V4dD0oU3ltYm9sJiZTeW1ib2xbSVRFUkFUT1JdfHxGRl9JVEVSQVRPUilpbiBPO3JldHVybiBoYXNFeHR8fFNZTUJPTF9JVEVSQVRPUiBpbiBPfHxoYXMoSXRlcmF0b3JzLGNsYXNzb2YoTykpfWZ1bmN0aW9uIGdldEl0ZXJhdG9yKGl0KXt2YXIgU3ltYm9sPWdsb2JhbFtTWU1CT0xdLGV4dD1pdFtTeW1ib2wmJlN5bWJvbFtJVEVSQVRPUl18fEZGX0lURVJBVE9SXSxnZXRJdGVyPWV4dHx8aXRbU1lNQk9MX0lURVJBVE9SXXx8SXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtyZXR1cm4gYXNzZXJ0T2JqZWN0KGdldEl0ZXIuY2FsbChpdCkpfWZ1bmN0aW9uIHN0ZXBDYWxsKGZuLHZhbHVlLGVudHJpZXMpe3JldHVybiBlbnRyaWVzP2ludm9rZShmbix2YWx1ZSk6Zm4odmFsdWUpfWZ1bmN0aW9uIGNoZWNrRGFuZ2VySXRlckNsb3NpbmcoZm4pe3ZhciBkYW5nZXI9dHJ1ZTt2YXIgTz17bmV4dDpmdW5jdGlvbigpe3Rocm93IDF9LFwicmV0dXJuXCI6ZnVuY3Rpb24oKXtkYW5nZXI9ZmFsc2V9fTtPW1NZTUJPTF9JVEVSQVRPUl09cmV0dXJuVGhpczt0cnl7Zm4oTyl9Y2F0Y2goZSl7fXJldHVybiBkYW5nZXJ9ZnVuY3Rpb24gY2xvc2VJdGVyYXRvcihpdGVyYXRvcil7dmFyIHJldD1pdGVyYXRvcltcInJldHVyblwiXTtpZihyZXQhPT11bmRlZmluZWQpcmV0LmNhbGwoaXRlcmF0b3IpfWZ1bmN0aW9uIHNhZmVJdGVyQ2xvc2UoZXhlYyxpdGVyYXRvcil7dHJ5e2V4ZWMoaXRlcmF0b3IpfWNhdGNoKGUpe2Nsb3NlSXRlcmF0b3IoaXRlcmF0b3IpO3Rocm93IGV9fWZ1bmN0aW9uIGZvck9mKGl0ZXJhYmxlLGVudHJpZXMsZm4sdGhhdCl7c2FmZUl0ZXJDbG9zZShmdW5jdGlvbihpdGVyYXRvcil7dmFyIGY9Y3R4KGZuLHRoYXQsZW50cmllcz8yOjEpLHN0ZXA7d2hpbGUoIShzdGVwPWl0ZXJhdG9yLm5leHQoKSkuZG9uZSlpZihzdGVwQ2FsbChmLHN0ZXAudmFsdWUsZW50cmllcyk9PT1mYWxzZSl7cmV0dXJuIGNsb3NlSXRlcmF0b3IoaXRlcmF0b3IpfX0sZ2V0SXRlcmF0b3IoaXRlcmFibGUpKX0hZnVuY3Rpb24oVEFHLFN5bWJvbFJlZ2lzdHJ5LEFsbFN5bWJvbHMsc2V0dGVyKXtpZighaXNOYXRpdmUoU3ltYm9sKSl7U3ltYm9sPWZ1bmN0aW9uKGRlc2NyaXB0aW9uKXthc3NlcnQoISh0aGlzIGluc3RhbmNlb2YgU3ltYm9sKSxTWU1CT0wrXCIgaXMgbm90IGEgXCIrQ09OU1RSVUNUT1IpO3ZhciB0YWc9dWlkKGRlc2NyaXB0aW9uKSxzeW09c2V0KGNyZWF0ZShTeW1ib2xbUFJPVE9UWVBFXSksVEFHLHRhZyk7QWxsU3ltYm9sc1t0YWddPXN5bTtERVNDJiZzZXR0ZXImJmRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvLHRhZyx7Y29uZmlndXJhYmxlOnRydWUsc2V0OmZ1bmN0aW9uKHZhbHVlKXtoaWRkZW4odGhpcyx0YWcsdmFsdWUpfX0pO3JldHVybiBzeW19O2hpZGRlbihTeW1ib2xbUFJPVE9UWVBFXSxUT19TVFJJTkcsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tUQUddfSl9JGRlZmluZShHTE9CQUwrV1JBUCx7U3ltYm9sOlN5bWJvbH0pO3ZhciBzeW1ib2xTdGF0aWNzPXtcImZvclwiOmZ1bmN0aW9uKGtleSl7cmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSxrZXkrPVwiXCIpP1N5bWJvbFJlZ2lzdHJ5W2tleV06U3ltYm9sUmVnaXN0cnlba2V5XT1TeW1ib2woa2V5KX0saXRlcmF0b3I6U1lNQk9MX0lURVJBVE9SfHxnZXRXZWxsS25vd25TeW1ib2woSVRFUkFUT1IpLGtleUZvcjpwYXJ0LmNhbGwoa2V5T2YsU3ltYm9sUmVnaXN0cnkpLHNwZWNpZXM6U1lNQk9MX1NQRUNJRVMsdG9TdHJpbmdUYWc6U1lNQk9MX1RBRz1nZXRXZWxsS25vd25TeW1ib2woVE9fU1RSSU5HX1RBRyx0cnVlKSx1bnNjb3BhYmxlczpTWU1CT0xfVU5TQ09QQUJMRVMscHVyZTpzYWZlU3ltYm9sLHNldDpzZXQsdXNlU2V0dGVyOmZ1bmN0aW9uKCl7c2V0dGVyPXRydWV9LHVzZVNpbXBsZTpmdW5jdGlvbigpe3NldHRlcj1mYWxzZX19O2ZvckVhY2guY2FsbChhcnJheShcImhhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGxpdCx0b1ByaW1pdGl2ZVwiKSxmdW5jdGlvbihpdCl7c3ltYm9sU3RhdGljc1tpdF09Z2V0V2VsbEtub3duU3ltYm9sKGl0KX0pOyRkZWZpbmUoU1RBVElDLFNZTUJPTCxzeW1ib2xTdGF0aWNzKTtzZXRUb1N0cmluZ1RhZyhTeW1ib2wsU1lNQk9MKTskZGVmaW5lKFNUQVRJQytGT1JDRUQqIWlzTmF0aXZlKFN5bWJvbCksT0JKRUNULHtnZXRPd25Qcm9wZXJ0eU5hbWVzOmZ1bmN0aW9uKGl0KXt2YXIgbmFtZXM9Z2V0TmFtZXModG9PYmplY3QoaXQpKSxyZXN1bHQ9W10sa2V5LGk9MDt3aGlsZShuYW1lcy5sZW5ndGg+aSloYXMoQWxsU3ltYm9scyxrZXk9bmFtZXNbaSsrXSl8fHJlc3VsdC5wdXNoKGtleSk7cmV0dXJuIHJlc3VsdH0sZ2V0T3duUHJvcGVydHlTeW1ib2xzOmZ1bmN0aW9uKGl0KXt2YXIgbmFtZXM9Z2V0TmFtZXModG9PYmplY3QoaXQpKSxyZXN1bHQ9W10sa2V5LGk9MDt3aGlsZShuYW1lcy5sZW5ndGg+aSloYXMoQWxsU3ltYm9scyxrZXk9bmFtZXNbaSsrXSkmJnJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7cmV0dXJuIHJlc3VsdH19KTtzZXRUb1N0cmluZ1RhZyhNYXRoLE1BVEgsdHJ1ZSk7c2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sXCJKU09OXCIsdHJ1ZSl9KHNhZmVTeW1ib2woXCJ0YWdcIikse30se30sdHJ1ZSk7IWZ1bmN0aW9uKCl7dmFyIG9iamVjdFN0YXRpYz17YXNzaWduOmFzc2lnbixpczpmdW5jdGlvbih4LHkpe3JldHVybiB4PT09eT94IT09MHx8MS94PT09MS95OnghPXgmJnkhPXl9fTtcIl9fcHJvdG9fX1wiaW4gT2JqZWN0UHJvdG8mJmZ1bmN0aW9uKGJ1Z2d5LHNldCl7dHJ5e3NldD1jdHgoY2FsbCxnZXRPd25EZXNjcmlwdG9yKE9iamVjdFByb3RvLFwiX19wcm90b19fXCIpLnNldCwyKTtzZXQoe30sQXJyYXlQcm90byl9Y2F0Y2goZSl7YnVnZ3k9dHJ1ZX1vYmplY3RTdGF0aWMuc2V0UHJvdG90eXBlT2Y9c2V0UHJvdG90eXBlT2Y9c2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKE8scHJvdG8pe2Fzc2VydE9iamVjdChPKTthc3NlcnQocHJvdG89PT1udWxsfHxpc09iamVjdChwcm90bykscHJvdG8sXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO2lmKGJ1Z2d5KU8uX19wcm90b19fPXByb3RvO2Vsc2Ugc2V0KE8scHJvdG8pO3JldHVybiBPfX0oKTskZGVmaW5lKFNUQVRJQyxPQkpFQ1Qsb2JqZWN0U3RhdGljKX0oKTshZnVuY3Rpb24odG1wKXt0bXBbU1lNQk9MX1RBR109RE9UO2lmKGNvZih0bXApIT1ET1QpaGlkZGVuKE9iamVjdFByb3RvLFRPX1NUUklORyxmdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBcIitjbGFzc29mKHRoaXMpK1wiXVwifSl9KHt9KTshZnVuY3Rpb24oKXtmdW5jdGlvbiB3cmFwT2JqZWN0TWV0aG9kKGtleSxNT0RFKXt2YXIgZm49T2JqZWN0W2tleV0sZXhwPWNvcmVbT0JKRUNUXVtrZXldLGY9MCxvPXt9O2lmKCFleHB8fGlzTmF0aXZlKGV4cCkpe29ba2V5XT1NT0RFPT0xP2Z1bmN0aW9uKGl0KXtyZXR1cm4gaXNPYmplY3QoaXQpP2ZuKGl0KTppdH06TU9ERT09Mj9mdW5jdGlvbihpdCl7cmV0dXJuIGlzT2JqZWN0KGl0KT9mbihpdCk6dHJ1ZX06TU9ERT09Mz9mdW5jdGlvbihpdCl7cmV0dXJuIGlzT2JqZWN0KGl0KT9mbihpdCk6ZmFsc2V9Ok1PREU9PTQ/ZnVuY3Rpb24oaXQsa2V5KXtyZXR1cm4gZm4odG9PYmplY3QoaXQpLGtleSl9OmZ1bmN0aW9uKGl0KXtyZXR1cm4gZm4odG9PYmplY3QoaXQpKX07dHJ5e2ZuKERPVCl9Y2F0Y2goZSl7Zj0xfSRkZWZpbmUoU1RBVElDK0ZPUkNFRCpmLE9CSkVDVCxvKX19d3JhcE9iamVjdE1ldGhvZChcImZyZWV6ZVwiLDEpO3dyYXBPYmplY3RNZXRob2QoXCJzZWFsXCIsMSk7d3JhcE9iamVjdE1ldGhvZChcInByZXZlbnRFeHRlbnNpb25zXCIsMSk7d3JhcE9iamVjdE1ldGhvZChcImlzRnJvemVuXCIsMik7d3JhcE9iamVjdE1ldGhvZChcImlzU2VhbGVkXCIsMik7d3JhcE9iamVjdE1ldGhvZChcImlzRXh0ZW5zaWJsZVwiLDMpO3dyYXBPYmplY3RNZXRob2QoXCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JcIiw0KTt3cmFwT2JqZWN0TWV0aG9kKFwiZ2V0UHJvdG90eXBlT2ZcIik7d3JhcE9iamVjdE1ldGhvZChcImtleXNcIik7d3JhcE9iamVjdE1ldGhvZChcImdldE93blByb3BlcnR5TmFtZXNcIil9KCk7IWZ1bmN0aW9uKE5BTUUpe05BTUUgaW4gRnVuY3Rpb25Qcm90b3x8REVTQyYmZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90byxOQU1FLHtjb25maWd1cmFibGU6dHJ1ZSxnZXQ6ZnVuY3Rpb24oKXt2YXIgbWF0Y2g9U3RyaW5nKHRoaXMpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLyksbmFtZT1tYXRjaD9tYXRjaFsxXTpcIlwiO2hhcyh0aGlzLE5BTUUpfHxkZWZpbmVQcm9wZXJ0eSh0aGlzLE5BTUUsZGVzY3JpcHRvcig1LG5hbWUpKTtyZXR1cm4gbmFtZX0sc2V0OmZ1bmN0aW9uKHZhbHVlKXtoYXModGhpcyxOQU1FKXx8ZGVmaW5lUHJvcGVydHkodGhpcyxOQU1FLGRlc2NyaXB0b3IoMCx2YWx1ZSkpfX0pfShcIm5hbWVcIik7TnVtYmVyKFwiMG8xXCIpJiZOdW1iZXIoXCIwYjFcIil8fGZ1bmN0aW9uKF9OdW1iZXIsTnVtYmVyUHJvdG8pe2Z1bmN0aW9uIHRvTnVtYmVyKGl0KXtpZihpc09iamVjdChpdCkpaXQ9dG9QcmltaXRpdmUoaXQpO2lmKHR5cGVvZiBpdD09XCJzdHJpbmdcIiYmaXQubGVuZ3RoPjImJml0LmNoYXJDb2RlQXQoMCk9PTQ4KXt2YXIgYmluYXJ5PWZhbHNlO3N3aXRjaChpdC5jaGFyQ29kZUF0KDEpKXtjYXNlIDY2OmNhc2UgOTg6YmluYXJ5PXRydWU7Y2FzZSA3OTpjYXNlIDExMTpyZXR1cm4gcGFyc2VJbnQoaXQuc2xpY2UoMiksYmluYXJ5PzI6OCl9fXJldHVybitpdH1mdW5jdGlvbiB0b1ByaW1pdGl2ZShpdCl7dmFyIGZuLHZhbDtpZihpc0Z1bmN0aW9uKGZuPWl0LnZhbHVlT2YpJiYhaXNPYmplY3QodmFsPWZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO2lmKGlzRnVuY3Rpb24oZm49aXRbVE9fU1RSSU5HXSkmJiFpc09iamVjdCh2YWw9Zm4uY2FsbChpdCkpKXJldHVybiB2YWw7dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gbnVtYmVyXCIpfU51bWJlcj1mdW5jdGlvbiBOdW1iZXIoaXQpe3JldHVybiB0aGlzIGluc3RhbmNlb2YgTnVtYmVyP25ldyBfTnVtYmVyKHRvTnVtYmVyKGl0KSk6dG9OdW1iZXIoaXQpfTtmb3JFYWNoLmNhbGwoREVTQz9nZXROYW1lcyhfTnVtYmVyKTphcnJheShcIk1BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZXCIpLGZ1bmN0aW9uKGtleSl7a2V5IGluIE51bWJlcnx8ZGVmaW5lUHJvcGVydHkoTnVtYmVyLGtleSxnZXRPd25EZXNjcmlwdG9yKF9OdW1iZXIsa2V5KSl9KTtOdW1iZXJbUFJPVE9UWVBFXT1OdW1iZXJQcm90bztOdW1iZXJQcm90b1tDT05TVFJVQ1RPUl09TnVtYmVyO2hpZGRlbihnbG9iYWwsTlVNQkVSLE51bWJlcil9KE51bWJlcixOdW1iZXJbUFJPVE9UWVBFXSk7IWZ1bmN0aW9uKGlzSW50ZWdlcil7JGRlZmluZShTVEFUSUMsTlVNQkVSLHtFUFNJTE9OOnBvdygyLC01MiksaXNGaW5pdGU6ZnVuY3Rpb24oaXQpe3JldHVybiB0eXBlb2YgaXQ9PVwibnVtYmVyXCImJmlzRmluaXRlKGl0KX0saXNJbnRlZ2VyOmlzSW50ZWdlcixpc05hTjpzYW1lTmFOLGlzU2FmZUludGVnZXI6ZnVuY3Rpb24obnVtYmVyKXtyZXR1cm4gaXNJbnRlZ2VyKG51bWJlcikmJmFicyhudW1iZXIpPD1NQVhfU0FGRV9JTlRFR0VSfSxNQVhfU0FGRV9JTlRFR0VSOk1BWF9TQUZFX0lOVEVHRVIsTUlOX1NBRkVfSU5URUdFUjotTUFYX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0OnBhcnNlRmxvYXQscGFyc2VJbnQ6cGFyc2VJbnR9KX0oTnVtYmVyLmlzSW50ZWdlcnx8ZnVuY3Rpb24oaXQpe3JldHVybiFpc09iamVjdChpdCkmJmlzRmluaXRlKGl0KSYmZmxvb3IoaXQpPT09aXR9KTshZnVuY3Rpb24oKXt2YXIgRT1NYXRoLkUsZXhwPU1hdGguZXhwLGxvZz1NYXRoLmxvZyxzcXJ0PU1hdGguc3FydCxzaWduPU1hdGguc2lnbnx8ZnVuY3Rpb24oeCl7cmV0dXJuKHg9K3gpPT0wfHx4IT14P3g6eDwwPy0xOjF9O2Z1bmN0aW9uIGFzaW5oKHgpe3JldHVybiFpc0Zpbml0ZSh4PSt4KXx8eD09MD94Ong8MD8tYXNpbmgoLXgpOmxvZyh4K3NxcnQoeCp4KzEpKX1mdW5jdGlvbiBleHBtMSh4KXtyZXR1cm4oeD0reCk9PTA/eDp4Pi0xZS02JiZ4PDFlLTY/eCt4KngvMjpleHAoeCktMX0kZGVmaW5lKFNUQVRJQyxNQVRILHthY29zaDpmdW5jdGlvbih4KXtyZXR1cm4oeD0reCk8MT9OYU46aXNGaW5pdGUoeCk/bG9nKHgvRStzcXJ0KHgrMSkqc3FydCh4LTEpL0UpKzE6eH0sYXNpbmg6YXNpbmgsYXRhbmg6ZnVuY3Rpb24oeCl7cmV0dXJuKHg9K3gpPT0wP3g6bG9nKCgxK3gpLygxLXgpKS8yfSxjYnJ0OmZ1bmN0aW9uKHgpe3JldHVybiBzaWduKHg9K3gpKnBvdyhhYnMoeCksMS8zKX0sY2x6MzI6ZnVuY3Rpb24oeCl7cmV0dXJuKHg+Pj49MCk/MzIteFtUT19TVFJJTkddKDIpLmxlbmd0aDozMn0sY29zaDpmdW5jdGlvbih4KXtyZXR1cm4oZXhwKHg9K3gpK2V4cCgteCkpLzJ9LGV4cG0xOmV4cG0xLGZyb3VuZDpmdW5jdGlvbih4KXtyZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbeF0pWzBdfSxoeXBvdDpmdW5jdGlvbih2YWx1ZTEsdmFsdWUyKXt2YXIgc3VtPTAsbGVuMT1hcmd1bWVudHMubGVuZ3RoLGxlbjI9bGVuMSxhcmdzPUFycmF5KGxlbjEpLGxhcmc9LUluZmluaXR5LGFyZzt3aGlsZShsZW4xLS0pe2FyZz1hcmdzW2xlbjFdPSthcmd1bWVudHNbbGVuMV07aWYoYXJnPT1JbmZpbml0eXx8YXJnPT0tSW5maW5pdHkpcmV0dXJuIEluZmluaXR5O2lmKGFyZz5sYXJnKWxhcmc9YXJnfWxhcmc9YXJnfHwxO3doaWxlKGxlbjItLSlzdW0rPXBvdyhhcmdzW2xlbjJdL2xhcmcsMik7cmV0dXJuIGxhcmcqc3FydChzdW0pfSxpbXVsOmZ1bmN0aW9uKHgseSl7dmFyIFVJbnQxNj02NTUzNSx4bj0reCx5bj0reSx4bD1VSW50MTYmeG4seWw9VUludDE2JnluO3JldHVybiAwfHhsKnlsKygoVUludDE2JnhuPj4+MTYpKnlsK3hsKihVSW50MTYmeW4+Pj4xNik8PDE2Pj4+MCl9LGxvZzFwOmZ1bmN0aW9uKHgpe3JldHVybih4PSt4KT4tMWUtOCYmeDwxZS04P3gteCp4LzI6bG9nKDEreCl9LGxvZzEwOmZ1bmN0aW9uKHgpe3JldHVybiBsb2coeCkvTWF0aC5MTjEwfSxsb2cyOmZ1bmN0aW9uKHgpe3JldHVybiBsb2coeCkvTWF0aC5MTjJ9LHNpZ246c2lnbixzaW5oOmZ1bmN0aW9uKHgpe3JldHVybiBhYnMoeD0reCk8MT8oZXhwbTEoeCktZXhwbTEoLXgpKS8yOihleHAoeC0xKS1leHAoLXgtMSkpKihFLzIpfSx0YW5oOmZ1bmN0aW9uKHgpe3ZhciBhPWV4cG0xKHg9K3gpLGI9ZXhwbTEoLXgpO3JldHVybiBhPT1JbmZpbml0eT8xOmI9PUluZmluaXR5Py0xOihhLWIpLyhleHAoeCkrZXhwKC14KSl9LHRydW5jOnRydW5jfSl9KCk7IWZ1bmN0aW9uKGZyb21DaGFyQ29kZSl7ZnVuY3Rpb24gYXNzZXJ0Tm90UmVnRXhwKGl0KXtpZihjb2YoaXQpPT1SRUdFWFApdGhyb3cgVHlwZUVycm9yKCl9JGRlZmluZShTVEFUSUMsU1RSSU5HLHtmcm9tQ29kZVBvaW50OmZ1bmN0aW9uKHgpe3ZhciByZXM9W10sbGVuPWFyZ3VtZW50cy5sZW5ndGgsaT0wLGNvZGU7d2hpbGUobGVuPmkpe2NvZGU9K2FyZ3VtZW50c1tpKytdO2lmKHRvSW5kZXgoY29kZSwxMTE0MTExKSE9PWNvZGUpdGhyb3cgUmFuZ2VFcnJvcihjb2RlK1wiIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnRcIik7cmVzLnB1c2goY29kZTw2NTUzNj9mcm9tQ2hhckNvZGUoY29kZSk6ZnJvbUNoYXJDb2RlKCgoY29kZS09NjU1MzYpPj4xMCkrNTUyOTYsY29kZSUxMDI0KzU2MzIwKSl9cmV0dXJuIHJlcy5qb2luKFwiXCIpfSxyYXc6ZnVuY3Rpb24oY2FsbFNpdGUpe3ZhciByYXc9dG9PYmplY3QoY2FsbFNpdGUucmF3KSxsZW49dG9MZW5ndGgocmF3Lmxlbmd0aCksc2xuPWFyZ3VtZW50cy5sZW5ndGgscmVzPVtdLGk9MDt3aGlsZShsZW4+aSl7cmVzLnB1c2goU3RyaW5nKHJhd1tpKytdKSk7aWYoaTxzbG4pcmVzLnB1c2goU3RyaW5nKGFyZ3VtZW50c1tpXSkpfXJldHVybiByZXMuam9pbihcIlwiKX19KTskZGVmaW5lKFBST1RPLFNUUklORyx7Y29kZVBvaW50QXQ6Y3JlYXRlUG9pbnRBdChmYWxzZSksZW5kc1dpdGg6ZnVuY3Rpb24oc2VhcmNoU3RyaW5nKXthc3NlcnROb3RSZWdFeHAoc2VhcmNoU3RyaW5nKTt2YXIgdGhhdD1TdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSksZW5kUG9zaXRpb249YXJndW1lbnRzWzFdLGxlbj10b0xlbmd0aCh0aGF0Lmxlbmd0aCksZW5kPWVuZFBvc2l0aW9uPT09dW5kZWZpbmVkP2xlbjptaW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLGxlbik7c2VhcmNoU3RyaW5nKz1cIlwiO3JldHVybiB0aGF0LnNsaWNlKGVuZC1zZWFyY2hTdHJpbmcubGVuZ3RoLGVuZCk9PT1zZWFyY2hTdHJpbmd9LGluY2x1ZGVzOmZ1bmN0aW9uKHNlYXJjaFN0cmluZyl7YXNzZXJ0Tm90UmVnRXhwKHNlYXJjaFN0cmluZyk7cmV0dXJuISF+U3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpLmluZGV4T2Yoc2VhcmNoU3RyaW5nLGFyZ3VtZW50c1sxXSl9LHJlcGVhdDpmdW5jdGlvbihjb3VudCl7dmFyIHN0cj1TdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSkscmVzPVwiXCIsbj10b0ludGVnZXIoY291bnQpO2lmKDA+bnx8bj09SW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO2Zvcig7bj4wOyhuPj4+PTEpJiYoc3RyKz1zdHIpKWlmKG4mMSlyZXMrPXN0cjtyZXR1cm4gcmVzfSxzdGFydHNXaXRoOmZ1bmN0aW9uKHNlYXJjaFN0cmluZyl7YXNzZXJ0Tm90UmVnRXhwKHNlYXJjaFN0cmluZyk7dmFyIHRoYXQ9U3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpLGluZGV4PXRvTGVuZ3RoKG1pbihhcmd1bWVudHNbMV0sdGhhdC5sZW5ndGgpKTtzZWFyY2hTdHJpbmcrPVwiXCI7cmV0dXJuIHRoYXQuc2xpY2UoaW5kZXgsaW5kZXgrc2VhcmNoU3RyaW5nLmxlbmd0aCk9PT1zZWFyY2hTdHJpbmd9fSl9KFN0cmluZy5mcm9tQ2hhckNvZGUpOyFmdW5jdGlvbigpeyRkZWZpbmUoU1RBVElDK0ZPUkNFRCpjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKEFycmF5LmZyb20pLEFSUkFZLHtmcm9tOmZ1bmN0aW9uKGFycmF5TGlrZSl7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQoYXJyYXlMaWtlKSksbWFwZm49YXJndW1lbnRzWzFdLG1hcHBpbmc9bWFwZm4hPT11bmRlZmluZWQsZj1tYXBwaW5nP2N0eChtYXBmbixhcmd1bWVudHNbMl0sMik6dW5kZWZpbmVkLGluZGV4PTAsbGVuZ3RoLHJlc3VsdCxzdGVwO2lmKGlzSXRlcmFibGUoTykpe3Jlc3VsdD1uZXcoZ2VuZXJpYyh0aGlzLEFycmF5KSk7c2FmZUl0ZXJDbG9zZShmdW5jdGlvbihpdGVyYXRvcil7Zm9yKDshKHN0ZXA9aXRlcmF0b3IubmV4dCgpKS5kb25lO2luZGV4Kyspe3Jlc3VsdFtpbmRleF09bWFwcGluZz9mKHN0ZXAudmFsdWUsaW5kZXgpOnN0ZXAudmFsdWV9fSxnZXRJdGVyYXRvcihPKSl9ZWxzZXtyZXN1bHQ9bmV3KGdlbmVyaWModGhpcyxBcnJheSkpKGxlbmd0aD10b0xlbmd0aChPLmxlbmd0aCkpO2Zvcig7bGVuZ3RoPmluZGV4O2luZGV4Kyspe3Jlc3VsdFtpbmRleF09bWFwcGluZz9mKE9baW5kZXhdLGluZGV4KTpPW2luZGV4XX19cmVzdWx0Lmxlbmd0aD1pbmRleDtyZXR1cm4gcmVzdWx0fX0pOyRkZWZpbmUoU1RBVElDLEFSUkFZLHtvZjpmdW5jdGlvbigpe3ZhciBpbmRleD0wLGxlbmd0aD1hcmd1bWVudHMubGVuZ3RoLHJlc3VsdD1uZXcoZ2VuZXJpYyh0aGlzLEFycmF5KSkobGVuZ3RoKTt3aGlsZShsZW5ndGg+aW5kZXgpcmVzdWx0W2luZGV4XT1hcmd1bWVudHNbaW5kZXgrK107cmVzdWx0Lmxlbmd0aD1sZW5ndGg7cmV0dXJuIHJlc3VsdH19KTtzZXRTcGVjaWVzKEFycmF5KX0oKTshZnVuY3Rpb24oKXskZGVmaW5lKFBST1RPLEFSUkFZLHtjb3B5V2l0aGluOmZ1bmN0aW9uKHRhcmdldCxzdGFydCl7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpLGxlbj10b0xlbmd0aChPLmxlbmd0aCksdG89dG9JbmRleCh0YXJnZXQsbGVuKSxmcm9tPXRvSW5kZXgoc3RhcnQsbGVuKSxlbmQ9YXJndW1lbnRzWzJdLGZpbj1lbmQ9PT11bmRlZmluZWQ/bGVuOnRvSW5kZXgoZW5kLGxlbiksY291bnQ9bWluKGZpbi1mcm9tLGxlbi10byksaW5jPTE7aWYoZnJvbTx0byYmdG88ZnJvbStjb3VudCl7aW5jPS0xO2Zyb209ZnJvbStjb3VudC0xO3RvPXRvK2NvdW50LTF9d2hpbGUoY291bnQtLT4wKXtpZihmcm9tIGluIE8pT1t0b109T1tmcm9tXTtlbHNlIGRlbGV0ZSBPW3RvXTt0bys9aW5jO2Zyb20rPWluY31yZXR1cm4gT30sZmlsbDpmdW5jdGlvbih2YWx1ZSl7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpLGxlbmd0aD10b0xlbmd0aChPLmxlbmd0aCksaW5kZXg9dG9JbmRleChhcmd1bWVudHNbMV0sbGVuZ3RoKSxlbmQ9YXJndW1lbnRzWzJdLGVuZFBvcz1lbmQ9PT11bmRlZmluZWQ/bGVuZ3RoOnRvSW5kZXgoZW5kLGxlbmd0aCk7d2hpbGUoZW5kUG9zPmluZGV4KU9baW5kZXgrK109dmFsdWU7cmV0dXJuIE99LGZpbmQ6Y3JlYXRlQXJyYXlNZXRob2QoNSksZmluZEluZGV4OmNyZWF0ZUFycmF5TWV0aG9kKDYpfSk7aWYoZnJhbWV3b3JrKXtmb3JFYWNoLmNhbGwoYXJyYXkoXCJmaW5kLGZpbmRJbmRleCxmaWxsLGNvcHlXaXRoaW4sZW50cmllcyxrZXlzLHZhbHVlc1wiKSxmdW5jdGlvbihpdCl7QXJyYXlVbnNjb3BhYmxlc1tpdF09dHJ1ZX0pO1NZTUJPTF9VTlNDT1BBQkxFUyBpbiBBcnJheVByb3RvfHxoaWRkZW4oQXJyYXlQcm90byxTWU1CT0xfVU5TQ09QQUJMRVMsQXJyYXlVbnNjb3BhYmxlcyl9fSgpOyFmdW5jdGlvbihhdCl7ZGVmaW5lU3RkSXRlcmF0b3JzKEFycmF5LEFSUkFZLGZ1bmN0aW9uKGl0ZXJhdGVkLGtpbmQpe3NldCh0aGlzLElURVIse286dG9PYmplY3QoaXRlcmF0ZWQpLGk6MCxrOmtpbmR9KX0sZnVuY3Rpb24oKXt2YXIgaXRlcj10aGlzW0lURVJdLE89aXRlci5vLGtpbmQ9aXRlci5rLGluZGV4PWl0ZXIuaSsrO2lmKCFPfHxpbmRleD49Ty5sZW5ndGgpe2l0ZXIubz11bmRlZmluZWQ7cmV0dXJuIGl0ZXJSZXN1bHQoMSl9aWYoa2luZD09S0VZKXJldHVybiBpdGVyUmVzdWx0KDAsaW5kZXgpO2lmKGtpbmQ9PVZBTFVFKXJldHVybiBpdGVyUmVzdWx0KDAsT1tpbmRleF0pO3JldHVybiBpdGVyUmVzdWx0KDAsW2luZGV4LE9baW5kZXhdXSl9LFZBTFVFKTtJdGVyYXRvcnNbQVJHVU1FTlRTXT1JdGVyYXRvcnNbQVJSQVldO2RlZmluZVN0ZEl0ZXJhdG9ycyhTdHJpbmcsU1RSSU5HLGZ1bmN0aW9uKGl0ZXJhdGVkKXtzZXQodGhpcyxJVEVSLHtvOlN0cmluZyhpdGVyYXRlZCksaTowfSl9LGZ1bmN0aW9uKCl7dmFyIGl0ZXI9dGhpc1tJVEVSXSxPPWl0ZXIubyxpbmRleD1pdGVyLmkscG9pbnQ7aWYoaW5kZXg+PU8ubGVuZ3RoKXJldHVybiBpdGVyUmVzdWx0KDEpO3BvaW50PWF0LmNhbGwoTyxpbmRleCk7aXRlci5pKz1wb2ludC5sZW5ndGg7cmV0dXJuIGl0ZXJSZXN1bHQoMCxwb2ludCl9KX0oY3JlYXRlUG9pbnRBdCh0cnVlKSk7REVTQyYmIWZ1bmN0aW9uKFJlZ0V4cFByb3RvLF9SZWdFeHApe2lmKCFmdW5jdGlvbigpe3RyeXtyZXR1cm4gUmVnRXhwKC9hL2csXCJpXCIpPT1cIi9hL2lcIn1jYXRjaChlKXt9fSgpKXtSZWdFeHA9ZnVuY3Rpb24gUmVnRXhwKHBhdHRlcm4sZmxhZ3Mpe3JldHVybiBuZXcgX1JlZ0V4cChjb2YocGF0dGVybik9PVJFR0VYUCYmZmxhZ3MhPT11bmRlZmluZWQ/cGF0dGVybi5zb3VyY2U6cGF0dGVybixmbGFncyl9O2ZvckVhY2guY2FsbChnZXROYW1lcyhfUmVnRXhwKSxmdW5jdGlvbihrZXkpe2tleSBpbiBSZWdFeHB8fGRlZmluZVByb3BlcnR5KFJlZ0V4cCxrZXkse2NvbmZpZ3VyYWJsZTp0cnVlLGdldDpmdW5jdGlvbigpe3JldHVybiBfUmVnRXhwW2tleV19LHNldDpmdW5jdGlvbihpdCl7X1JlZ0V4cFtrZXldPWl0fX0pfSk7UmVnRXhwUHJvdG9bQ09OU1RSVUNUT1JdPVJlZ0V4cDtSZWdFeHBbUFJPVE9UWVBFXT1SZWdFeHBQcm90bztoaWRkZW4oZ2xvYmFsLFJFR0VYUCxSZWdFeHApfWlmKC8uL2cuZmxhZ3MhPVwiZ1wiKWRlZmluZVByb3BlcnR5KFJlZ0V4cFByb3RvLFwiZmxhZ3NcIix7Y29uZmlndXJhYmxlOnRydWUsZ2V0OmNyZWF0ZVJlcGxhY2VyKC9eLipcXC8oXFx3KikkLyxcIiQxXCIpfSk7c2V0U3BlY2llcyhSZWdFeHApfShSZWdFeHBbUFJPVE9UWVBFXSxSZWdFeHApO2lzRnVuY3Rpb24oc2V0SW1tZWRpYXRlKSYmaXNGdW5jdGlvbihjbGVhckltbWVkaWF0ZSl8fGZ1bmN0aW9uKE9OUkVBRFlTVEFURUNIQU5HRSl7dmFyIHBvc3RNZXNzYWdlPWdsb2JhbC5wb3N0TWVzc2FnZSxhZGRFdmVudExpc3RlbmVyPWdsb2JhbC5hZGRFdmVudExpc3RlbmVyLE1lc3NhZ2VDaGFubmVsPWdsb2JhbC5NZXNzYWdlQ2hhbm5lbCxjb3VudGVyPTAscXVldWU9e30sZGVmZXIsY2hhbm5lbCxwb3J0O3NldEltbWVkaWF0ZT1mdW5jdGlvbihmbil7dmFyIGFyZ3M9W10saT0xO3doaWxlKGFyZ3VtZW50cy5sZW5ndGg+aSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO3F1ZXVlWysrY291bnRlcl09ZnVuY3Rpb24oKXtpbnZva2UoaXNGdW5jdGlvbihmbik/Zm46RnVuY3Rpb24oZm4pLGFyZ3MpfTtkZWZlcihjb3VudGVyKTtyZXR1cm4gY291bnRlcn07Y2xlYXJJbW1lZGlhdGU9ZnVuY3Rpb24oaWQpe2RlbGV0ZSBxdWV1ZVtpZF19O2Z1bmN0aW9uIHJ1bihpZCl7aWYoaGFzKHF1ZXVlLGlkKSl7dmFyIGZuPXF1ZXVlW2lkXTtkZWxldGUgcXVldWVbaWRdO2ZuKCl9fWZ1bmN0aW9uIGxpc3RuZXIoZXZlbnQpe3J1bihldmVudC5kYXRhKX1pZihOT0RFKXtkZWZlcj1mdW5jdGlvbihpZCl7bmV4dFRpY2socGFydC5jYWxsKHJ1bixpZCkpfX1lbHNlIGlmKGFkZEV2ZW50TGlzdGVuZXImJmlzRnVuY3Rpb24ocG9zdE1lc3NhZ2UpJiYhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe2RlZmVyPWZ1bmN0aW9uKGlkKXtwb3N0TWVzc2FnZShpZCxcIipcIil9O2FkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbGlzdG5lcixmYWxzZSl9ZWxzZSBpZihpc0Z1bmN0aW9uKE1lc3NhZ2VDaGFubmVsKSl7Y2hhbm5lbD1uZXcgTWVzc2FnZUNoYW5uZWw7cG9ydD1jaGFubmVsLnBvcnQyO2NoYW5uZWwucG9ydDEub25tZXNzYWdlPWxpc3RuZXI7ZGVmZXI9Y3R4KHBvcnQucG9zdE1lc3NhZ2UscG9ydCwxKX1lbHNlIGlmKGRvY3VtZW50JiZPTlJFQURZU1RBVEVDSEFOR0UgaW4gZG9jdW1lbnRbQ1JFQVRFX0VMRU1FTlRdKFwic2NyaXB0XCIpKXtkZWZlcj1mdW5jdGlvbihpZCl7aHRtbC5hcHBlbmRDaGlsZChkb2N1bWVudFtDUkVBVEVfRUxFTUVOVF0oXCJzY3JpcHRcIikpW09OUkVBRFlTVEFURUNIQU5HRV09ZnVuY3Rpb24oKXtodG1sLnJlbW92ZUNoaWxkKHRoaXMpO3J1bihpZCl9fX1lbHNle2RlZmVyPWZ1bmN0aW9uKGlkKXtzZXRUaW1lb3V0KHJ1biwwLGlkKX19fShcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiKTskZGVmaW5lKEdMT0JBTCtCSU5ELHtzZXRJbW1lZGlhdGU6c2V0SW1tZWRpYXRlLGNsZWFySW1tZWRpYXRlOmNsZWFySW1tZWRpYXRlfSk7IWZ1bmN0aW9uKFByb21pc2UsdGVzdCl7aXNGdW5jdGlvbihQcm9taXNlKSYmaXNGdW5jdGlvbihQcm9taXNlLnJlc29sdmUpJiZQcm9taXNlLnJlc29sdmUodGVzdD1uZXcgUHJvbWlzZShmdW5jdGlvbigpe30pKT09dGVzdHx8ZnVuY3Rpb24oYXNhcCxSRUNPUkQpe2Z1bmN0aW9uIGlzVGhlbmFibGUoaXQpe3ZhciB0aGVuO2lmKGlzT2JqZWN0KGl0KSl0aGVuPWl0LnRoZW47cmV0dXJuIGlzRnVuY3Rpb24odGhlbik/dGhlbjpmYWxzZX1mdW5jdGlvbiBoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHByb21pc2Upe3ZhciByZWNvcmQ9cHJvbWlzZVtSRUNPUkRdLGNoYWluPXJlY29yZC5jLGk9MCxyZWFjdDtpZihyZWNvcmQuaClyZXR1cm4gdHJ1ZTt3aGlsZShjaGFpbi5sZW5ndGg+aSl7cmVhY3Q9Y2hhaW5baSsrXTtpZihyZWFjdC5mYWlsfHxoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHJlYWN0LlApKXJldHVybiB0cnVlfX1mdW5jdGlvbiBub3RpZnkocmVjb3JkLHJlamVjdCl7dmFyIGNoYWluPXJlY29yZC5jO2lmKHJlamVjdHx8Y2hhaW4ubGVuZ3RoKWFzYXAoZnVuY3Rpb24oKXt2YXIgcHJvbWlzZT1yZWNvcmQucCx2YWx1ZT1yZWNvcmQudixvaz1yZWNvcmQucz09MSxpPTA7aWYocmVqZWN0JiYhaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChwcm9taXNlKSl7c2V0VGltZW91dChmdW5jdGlvbigpe2lmKCFoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHByb21pc2UpKXtpZihOT0RFKXtpZighcHJvY2Vzcy5lbWl0KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsdmFsdWUscHJvbWlzZSkpe319ZWxzZSBpZihpc0Z1bmN0aW9uKGNvbnNvbGUuZXJyb3IpKXtjb25zb2xlLmVycm9yKFwiVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXCIsdmFsdWUpfX19LDFlMyl9ZWxzZSB3aGlsZShjaGFpbi5sZW5ndGg+aSkhZnVuY3Rpb24ocmVhY3Qpe3ZhciBjYj1vaz9yZWFjdC5vazpyZWFjdC5mYWlsLHJldCx0aGVuO3RyeXtpZihjYil7aWYoIW9rKXJlY29yZC5oPXRydWU7cmV0PWNiPT09dHJ1ZT92YWx1ZTpjYih2YWx1ZSk7aWYocmV0PT09cmVhY3QuUCl7cmVhY3QucmVqKFR5cGVFcnJvcihQUk9NSVNFK1wiLWNoYWluIGN5Y2xlXCIpKX1lbHNlIGlmKHRoZW49aXNUaGVuYWJsZShyZXQpKXt0aGVuLmNhbGwocmV0LHJlYWN0LnJlcyxyZWFjdC5yZWopfWVsc2UgcmVhY3QucmVzKHJldCl9ZWxzZSByZWFjdC5yZWoodmFsdWUpfWNhdGNoKGVycil7cmVhY3QucmVqKGVycil9fShjaGFpbltpKytdKTtjaGFpbi5sZW5ndGg9MH0pfWZ1bmN0aW9uIHJlc29sdmUodmFsdWUpe3ZhciByZWNvcmQ9dGhpcyx0aGVuLHdyYXBwZXI7aWYocmVjb3JkLmQpcmV0dXJuO3JlY29yZC5kPXRydWU7cmVjb3JkPXJlY29yZC5yfHxyZWNvcmQ7dHJ5e2lmKHRoZW49aXNUaGVuYWJsZSh2YWx1ZSkpe3dyYXBwZXI9e3I6cmVjb3JkLGQ6ZmFsc2V9O3RoZW4uY2FsbCh2YWx1ZSxjdHgocmVzb2x2ZSx3cmFwcGVyLDEpLGN0eChyZWplY3Qsd3JhcHBlciwxKSl9ZWxzZXtyZWNvcmQudj12YWx1ZTtyZWNvcmQucz0xO25vdGlmeShyZWNvcmQpfX1jYXRjaChlcnIpe3JlamVjdC5jYWxsKHdyYXBwZXJ8fHtyOnJlY29yZCxkOmZhbHNlfSxlcnIpfX1mdW5jdGlvbiByZWplY3QodmFsdWUpe3ZhciByZWNvcmQ9dGhpcztpZihyZWNvcmQuZClyZXR1cm47cmVjb3JkLmQ9dHJ1ZTtyZWNvcmQ9cmVjb3JkLnJ8fHJlY29yZDtyZWNvcmQudj12YWx1ZTtyZWNvcmQucz0yO25vdGlmeShyZWNvcmQsdHJ1ZSl9ZnVuY3Rpb24gZ2V0Q29uc3RydWN0b3IoQyl7dmFyIFM9YXNzZXJ0T2JqZWN0KEMpW1NZTUJPTF9TUEVDSUVTXTtyZXR1cm4gUyE9dW5kZWZpbmVkP1M6Q31Qcm9taXNlPWZ1bmN0aW9uKGV4ZWN1dG9yKXthc3NlcnRGdW5jdGlvbihleGVjdXRvcik7YXNzZXJ0SW5zdGFuY2UodGhpcyxQcm9taXNlLFBST01JU0UpO3ZhciByZWNvcmQ9e3A6dGhpcyxjOltdLHM6MCxkOmZhbHNlLHY6dW5kZWZpbmVkLGg6ZmFsc2V9O2hpZGRlbih0aGlzLFJFQ09SRCxyZWNvcmQpO3RyeXtleGVjdXRvcihjdHgocmVzb2x2ZSxyZWNvcmQsMSksY3R4KHJlamVjdCxyZWNvcmQsMSkpfWNhdGNoKGVycil7cmVqZWN0LmNhbGwocmVjb3JkLGVycil9fTthc3NpZ25IaWRkZW4oUHJvbWlzZVtQUk9UT1RZUEVdLHt0aGVuOmZ1bmN0aW9uKG9uRnVsZmlsbGVkLG9uUmVqZWN0ZWQpe3ZhciBTPWFzc2VydE9iamVjdChhc3NlcnRPYmplY3QodGhpcylbQ09OU1RSVUNUT1JdKVtTWU1CT0xfU1BFQ0lFU107dmFyIHJlYWN0PXtvazppc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKT9vbkZ1bGZpbGxlZDp0cnVlLGZhaWw6aXNGdW5jdGlvbihvblJlamVjdGVkKT9vblJlamVjdGVkOmZhbHNlfSxQPXJlYWN0LlA9bmV3KFMhPXVuZGVmaW5lZD9TOlByb21pc2UpKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXtyZWFjdC5yZXM9YXNzZXJ0RnVuY3Rpb24ocmVzb2x2ZSk7cmVhY3QucmVqPWFzc2VydEZ1bmN0aW9uKHJlamVjdCl9KSxyZWNvcmQ9dGhpc1tSRUNPUkRdO3JlY29yZC5jLnB1c2gocmVhY3QpO3JlY29yZC5zJiZub3RpZnkocmVjb3JkKTtyZXR1cm4gUH0sXCJjYXRjaFwiOmZ1bmN0aW9uKG9uUmVqZWN0ZWQpe3JldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLG9uUmVqZWN0ZWQpfX0pO2Fzc2lnbkhpZGRlbihQcm9taXNlLHthbGw6ZnVuY3Rpb24oaXRlcmFibGUpe3ZhciBQcm9taXNlPWdldENvbnN0cnVjdG9yKHRoaXMpLHZhbHVlcz1bXTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe2Zvck9mKGl0ZXJhYmxlLGZhbHNlLHB1c2gsdmFsdWVzKTt2YXIgcmVtYWluaW5nPXZhbHVlcy5sZW5ndGgscmVzdWx0cz1BcnJheShyZW1haW5pbmcpO2lmKHJlbWFpbmluZylmb3JFYWNoLmNhbGwodmFsdWVzLGZ1bmN0aW9uKHByb21pc2UsaW5kZXgpe1Byb21pc2UucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtyZXN1bHRzW2luZGV4XT12YWx1ZTstLXJlbWFpbmluZ3x8cmVzb2x2ZShyZXN1bHRzKX0scmVqZWN0KX0pO2Vsc2UgcmVzb2x2ZShyZXN1bHRzKX0pfSxyYWNlOmZ1bmN0aW9uKGl0ZXJhYmxlKXt2YXIgUHJvbWlzZT1nZXRDb25zdHJ1Y3Rvcih0aGlzKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe2Zvck9mKGl0ZXJhYmxlLGZhbHNlLGZ1bmN0aW9uKHByb21pc2Upe1Byb21pc2UucmVzb2x2ZShwcm9taXNlKS50aGVuKHJlc29sdmUscmVqZWN0KX0pfSl9LHJlamVjdDpmdW5jdGlvbihyKXtyZXR1cm4gbmV3KGdldENvbnN0cnVjdG9yKHRoaXMpKShmdW5jdGlvbihyZXNvbHZlLHJlamVjdCl7cmVqZWN0KHIpfSl9LHJlc29sdmU6ZnVuY3Rpb24oeCl7cmV0dXJuIGlzT2JqZWN0KHgpJiZSRUNPUkQgaW4geCYmZ2V0UHJvdG90eXBlT2YoeCk9PT10aGlzW1BST1RPVFlQRV0/eDpuZXcoZ2V0Q29uc3RydWN0b3IodGhpcykpKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXtyZXNvbHZlKHgpfSl9fSl9KG5leHRUaWNrfHxzZXRJbW1lZGlhdGUsc2FmZVN5bWJvbChcInJlY29yZFwiKSk7c2V0VG9TdHJpbmdUYWcoUHJvbWlzZSxQUk9NSVNFKTtzZXRTcGVjaWVzKFByb21pc2UpOyRkZWZpbmUoR0xPQkFMK0ZPUkNFRCohaXNOYXRpdmUoUHJvbWlzZSkse1Byb21pc2U6UHJvbWlzZX0pfShnbG9iYWxbUFJPTUlTRV0pOyFmdW5jdGlvbigpe3ZhciBVSUQ9c2FmZVN5bWJvbChcInVpZFwiKSxPMT1zYWZlU3ltYm9sKFwiTzFcIiksV0VBSz1zYWZlU3ltYm9sKFwid2Vha1wiKSxMRUFLPXNhZmVTeW1ib2woXCJsZWFrXCIpLExBU1Q9c2FmZVN5bWJvbChcImxhc3RcIiksRklSU1Q9c2FmZVN5bWJvbChcImZpcnN0XCIpLFNJWkU9REVTQz9zYWZlU3ltYm9sKFwic2l6ZVwiKTpcInNpemVcIix1aWQ9MCx0bXA9e307ZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbihDLE5BTUUsbWV0aG9kcyxjb21tb25NZXRob2RzLGlzTWFwLGlzV2Vhayl7dmFyIEFEREVSPWlzTWFwP1wic2V0XCI6XCJhZGRcIixwcm90bz1DJiZDW1BST1RPVFlQRV0sTz17fTtmdW5jdGlvbiBpbml0RnJvbUl0ZXJhYmxlKHRoYXQsaXRlcmFibGUpe2lmKGl0ZXJhYmxlIT11bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsaXNNYXAsdGhhdFtBRERFUl0sdGhhdCk7cmV0dXJuIHRoYXR9ZnVuY3Rpb24gZml4U1ZaKGtleSxjaGFpbil7dmFyIG1ldGhvZD1wcm90b1trZXldO2lmKGZyYW1ld29yaylwcm90b1trZXldPWZ1bmN0aW9uKGEsYil7dmFyIHJlc3VsdD1tZXRob2QuY2FsbCh0aGlzLGE9PT0wPzA6YSxiKTtyZXR1cm4gY2hhaW4/dGhpczpyZXN1bHR9fWlmKCFpc05hdGl2ZShDKXx8IShpc1dlYWt8fCFCVUdHWV9JVEVSQVRPUlMmJmhhcyhwcm90byxGT1JfRUFDSCkmJmhhcyhwcm90byxcImVudHJpZXNcIikpKXtDPWlzV2Vhaz9mdW5jdGlvbihpdGVyYWJsZSl7YXNzZXJ0SW5zdGFuY2UodGhpcyxDLE5BTUUpO3NldCh0aGlzLFVJRCx1aWQrKyk7aW5pdEZyb21JdGVyYWJsZSh0aGlzLGl0ZXJhYmxlKX06ZnVuY3Rpb24oaXRlcmFibGUpe3ZhciB0aGF0PXRoaXM7YXNzZXJ0SW5zdGFuY2UodGhhdCxDLE5BTUUpO3NldCh0aGF0LE8xLGNyZWF0ZShudWxsKSk7c2V0KHRoYXQsU0laRSwwKTtzZXQodGhhdCxMQVNULHVuZGVmaW5lZCk7c2V0KHRoYXQsRklSU1QsdW5kZWZpbmVkKTtpbml0RnJvbUl0ZXJhYmxlKHRoYXQsaXRlcmFibGUpfTthc3NpZ25IaWRkZW4oYXNzaWduSGlkZGVuKENbUFJPVE9UWVBFXSxtZXRob2RzKSxjb21tb25NZXRob2RzKTtpc1dlYWt8fCFERVNDfHxkZWZpbmVQcm9wZXJ0eShDW1BST1RPVFlQRV0sXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBhc3NlcnREZWZpbmVkKHRoaXNbU0laRV0pfX0pfWVsc2V7dmFyIE5hdGl2ZT1DLGluc3Q9bmV3IEMsY2hhaW49aW5zdFtBRERFUl0oaXNXZWFrP3t9Oi0wLDEpLGJ1Z2d5WmVybztpZihjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKGZ1bmN0aW9uKE8pe25ldyBDKE8pfSkpe0M9ZnVuY3Rpb24oaXRlcmFibGUpe2Fzc2VydEluc3RhbmNlKHRoaXMsQyxOQU1FKTtyZXR1cm4gaW5pdEZyb21JdGVyYWJsZShuZXcgTmF0aXZlLGl0ZXJhYmxlKX07Q1tQUk9UT1RZUEVdPXByb3RvO2lmKGZyYW1ld29yaylwcm90b1tDT05TVFJVQ1RPUl09Q31pc1dlYWt8fGluc3RbRk9SX0VBQ0hdKGZ1bmN0aW9uKHZhbCxrZXkpe2J1Z2d5WmVybz0xL2tleT09PS1JbmZpbml0eX0pO2lmKGJ1Z2d5WmVybyl7Zml4U1ZaKFwiZGVsZXRlXCIpO2ZpeFNWWihcImhhc1wiKTtpc01hcCYmZml4U1ZaKFwiZ2V0XCIpfWlmKGJ1Z2d5WmVyb3x8Y2hhaW4hPT1pbnN0KWZpeFNWWihBRERFUix0cnVlKX1zZXRUb1N0cmluZ1RhZyhDLE5BTUUpO3NldFNwZWNpZXMoQyk7T1tOQU1FXT1DOyRkZWZpbmUoR0xPQkFMK1dSQVArRk9SQ0VEKiFpc05hdGl2ZShDKSxPKTtpc1dlYWt8fGRlZmluZVN0ZEl0ZXJhdG9ycyhDLE5BTUUsZnVuY3Rpb24oaXRlcmF0ZWQsa2luZCl7c2V0KHRoaXMsSVRFUix7bzppdGVyYXRlZCxrOmtpbmR9KX0sZnVuY3Rpb24oKXt2YXIgaXRlcj10aGlzW0lURVJdLGtpbmQ9aXRlci5rLGVudHJ5PWl0ZXIubDt3aGlsZShlbnRyeSYmZW50cnkucillbnRyeT1lbnRyeS5wO2lmKCFpdGVyLm98fCEoaXRlci5sPWVudHJ5PWVudHJ5P2VudHJ5Lm46aXRlci5vW0ZJUlNUXSkpe2l0ZXIubz11bmRlZmluZWQ7cmV0dXJuIGl0ZXJSZXN1bHQoMSl9aWYoa2luZD09S0VZKXJldHVybiBpdGVyUmVzdWx0KDAsZW50cnkuayk7aWYoa2luZD09VkFMVUUpcmV0dXJuIGl0ZXJSZXN1bHQoMCxlbnRyeS52KTtyZXR1cm4gaXRlclJlc3VsdCgwLFtlbnRyeS5rLGVudHJ5LnZdKX0saXNNYXA/S0VZK1ZBTFVFOlZBTFVFLCFpc01hcCk7cmV0dXJuIEN9ZnVuY3Rpb24gZmFzdEtleShpdCxjcmVhdGUpe2lmKCFpc09iamVjdChpdCkpcmV0dXJuKHR5cGVvZiBpdD09XCJzdHJpbmdcIj9cIlNcIjpcIlBcIikraXQ7aWYoaXNGcm96ZW4oaXQpKXJldHVyblwiRlwiO2lmKCFoYXMoaXQsVUlEKSl7aWYoIWNyZWF0ZSlyZXR1cm5cIkVcIjtoaWRkZW4oaXQsVUlELCsrdWlkKX1yZXR1cm5cIk9cIitpdFtVSURdfWZ1bmN0aW9uIGdldEVudHJ5KHRoYXQsa2V5KXt2YXIgaW5kZXg9ZmFzdEtleShrZXkpLGVudHJ5O2lmKGluZGV4IT1cIkZcIilyZXR1cm4gdGhhdFtPMV1baW5kZXhdO2ZvcihlbnRyeT10aGF0W0ZJUlNUXTtlbnRyeTtlbnRyeT1lbnRyeS5uKXtpZihlbnRyeS5rPT1rZXkpcmV0dXJuIGVudHJ5fX1mdW5jdGlvbiBkZWYodGhhdCxrZXksdmFsdWUpe3ZhciBlbnRyeT1nZXRFbnRyeSh0aGF0LGtleSkscHJldixpbmRleDtpZihlbnRyeSllbnRyeS52PXZhbHVlO2Vsc2V7dGhhdFtMQVNUXT1lbnRyeT17aTppbmRleD1mYXN0S2V5KGtleSx0cnVlKSxrOmtleSx2OnZhbHVlLHA6cHJldj10aGF0W0xBU1RdLG46dW5kZWZpbmVkLHI6ZmFsc2V9O2lmKCF0aGF0W0ZJUlNUXSl0aGF0W0ZJUlNUXT1lbnRyeTtpZihwcmV2KXByZXYubj1lbnRyeTt0aGF0W1NJWkVdKys7aWYoaW5kZXghPVwiRlwiKXRoYXRbTzFdW2luZGV4XT1lbnRyeX1yZXR1cm4gdGhhdH12YXIgY29sbGVjdGlvbk1ldGhvZHM9e2NsZWFyOmZ1bmN0aW9uKCl7Zm9yKHZhciB0aGF0PXRoaXMsZGF0YT10aGF0W08xXSxlbnRyeT10aGF0W0ZJUlNUXTtlbnRyeTtlbnRyeT1lbnRyeS5uKXtlbnRyeS5yPXRydWU7XG5pZihlbnRyeS5wKWVudHJ5LnA9ZW50cnkucC5uPXVuZGVmaW5lZDtkZWxldGUgZGF0YVtlbnRyeS5pXX10aGF0W0ZJUlNUXT10aGF0W0xBU1RdPXVuZGVmaW5lZDt0aGF0W1NJWkVdPTB9LFwiZGVsZXRlXCI6ZnVuY3Rpb24oa2V5KXt2YXIgdGhhdD10aGlzLGVudHJ5PWdldEVudHJ5KHRoYXQsa2V5KTtpZihlbnRyeSl7dmFyIG5leHQ9ZW50cnkubixwcmV2PWVudHJ5LnA7ZGVsZXRlIHRoYXRbTzFdW2VudHJ5LmldO2VudHJ5LnI9dHJ1ZTtpZihwcmV2KXByZXYubj1uZXh0O2lmKG5leHQpbmV4dC5wPXByZXY7aWYodGhhdFtGSVJTVF09PWVudHJ5KXRoYXRbRklSU1RdPW5leHQ7aWYodGhhdFtMQVNUXT09ZW50cnkpdGhhdFtMQVNUXT1wcmV2O3RoYXRbU0laRV0tLX1yZXR1cm4hIWVudHJ5fSxmb3JFYWNoOmZ1bmN0aW9uKGNhbGxiYWNrZm4pe3ZhciBmPWN0eChjYWxsYmFja2ZuLGFyZ3VtZW50c1sxXSwzKSxlbnRyeTt3aGlsZShlbnRyeT1lbnRyeT9lbnRyeS5uOnRoaXNbRklSU1RdKXtmKGVudHJ5LnYsZW50cnkuayx0aGlzKTt3aGlsZShlbnRyeSYmZW50cnkucillbnRyeT1lbnRyeS5wfX0saGFzOmZ1bmN0aW9uKGtleSl7cmV0dXJuISFnZXRFbnRyeSh0aGlzLGtleSl9fTtNYXA9Z2V0Q29sbGVjdGlvbihNYXAsTUFQLHtnZXQ6ZnVuY3Rpb24oa2V5KXt2YXIgZW50cnk9Z2V0RW50cnkodGhpcyxrZXkpO3JldHVybiBlbnRyeSYmZW50cnkudn0sc2V0OmZ1bmN0aW9uKGtleSx2YWx1ZSl7cmV0dXJuIGRlZih0aGlzLGtleT09PTA/MDprZXksdmFsdWUpfX0sY29sbGVjdGlvbk1ldGhvZHMsdHJ1ZSk7U2V0PWdldENvbGxlY3Rpb24oU2V0LFNFVCx7YWRkOmZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gZGVmKHRoaXMsdmFsdWU9dmFsdWU9PT0wPzA6dmFsdWUsdmFsdWUpfX0sY29sbGVjdGlvbk1ldGhvZHMpO2Z1bmN0aW9uIGRlZldlYWsodGhhdCxrZXksdmFsdWUpe2lmKGlzRnJvemVuKGFzc2VydE9iamVjdChrZXkpKSlsZWFrU3RvcmUodGhhdCkuc2V0KGtleSx2YWx1ZSk7ZWxzZXtoYXMoa2V5LFdFQUspfHxoaWRkZW4oa2V5LFdFQUsse30pO2tleVtXRUFLXVt0aGF0W1VJRF1dPXZhbHVlfXJldHVybiB0aGF0fWZ1bmN0aW9uIGxlYWtTdG9yZSh0aGF0KXtyZXR1cm4gdGhhdFtMRUFLXXx8aGlkZGVuKHRoYXQsTEVBSyxuZXcgTWFwKVtMRUFLXX12YXIgd2Vha01ldGhvZHM9e1wiZGVsZXRlXCI6ZnVuY3Rpb24oa2V5KXtpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7aWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpW1wiZGVsZXRlXCJdKGtleSk7cmV0dXJuIGhhcyhrZXksV0VBSykmJmhhcyhrZXlbV0VBS10sdGhpc1tVSURdKSYmZGVsZXRlIGtleVtXRUFLXVt0aGlzW1VJRF1dfSxoYXM6ZnVuY3Rpb24oa2V5KXtpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7aWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpLmhhcyhrZXkpO3JldHVybiBoYXMoa2V5LFdFQUspJiZoYXMoa2V5W1dFQUtdLHRoaXNbVUlEXSl9fTtXZWFrTWFwPWdldENvbGxlY3Rpb24oV2Vha01hcCxXRUFLTUFQLHtnZXQ6ZnVuY3Rpb24oa2V5KXtpZihpc09iamVjdChrZXkpKXtpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcykuZ2V0KGtleSk7aWYoaGFzKGtleSxXRUFLKSlyZXR1cm4ga2V5W1dFQUtdW3RoaXNbVUlEXV19fSxzZXQ6ZnVuY3Rpb24oa2V5LHZhbHVlKXtyZXR1cm4gZGVmV2Vhayh0aGlzLGtleSx2YWx1ZSl9fSx3ZWFrTWV0aG9kcyx0cnVlLHRydWUpO2lmKGZyYW1ld29yayYmKG5ldyBXZWFrTWFwKS5zZXQoT2JqZWN0LmZyZWV6ZSh0bXApLDcpLmdldCh0bXApIT03KXtmb3JFYWNoLmNhbGwoYXJyYXkoXCJkZWxldGUsaGFzLGdldCxzZXRcIiksZnVuY3Rpb24oa2V5KXt2YXIgbWV0aG9kPVdlYWtNYXBbUFJPVE9UWVBFXVtrZXldO1dlYWtNYXBbUFJPVE9UWVBFXVtrZXldPWZ1bmN0aW9uKGEsYil7aWYoaXNPYmplY3QoYSkmJmlzRnJvemVuKGEpKXt2YXIgcmVzdWx0PWxlYWtTdG9yZSh0aGlzKVtrZXldKGEsYik7cmV0dXJuIGtleT09XCJzZXRcIj90aGlzOnJlc3VsdH1yZXR1cm4gbWV0aG9kLmNhbGwodGhpcyxhLGIpfX0pfVdlYWtTZXQ9Z2V0Q29sbGVjdGlvbihXZWFrU2V0LFdFQUtTRVQse2FkZDpmdW5jdGlvbih2YWx1ZSl7cmV0dXJuIGRlZldlYWsodGhpcyx2YWx1ZSx0cnVlKX19LHdlYWtNZXRob2RzLGZhbHNlLHRydWUpfSgpOyFmdW5jdGlvbigpe2Z1bmN0aW9uIEVudW1lcmF0ZShpdGVyYXRlZCl7dmFyIGtleXM9W10sa2V5O2ZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7c2V0KHRoaXMsSVRFUix7bzppdGVyYXRlZCxhOmtleXMsaTowfSl9Y3JlYXRlSXRlcmF0b3IoRW51bWVyYXRlLE9CSkVDVCxmdW5jdGlvbigpe3ZhciBpdGVyPXRoaXNbSVRFUl0sa2V5cz1pdGVyLmEsa2V5O2Rve2lmKGl0ZXIuaT49a2V5cy5sZW5ndGgpcmV0dXJuIGl0ZXJSZXN1bHQoMSl9d2hpbGUoISgoa2V5PWtleXNbaXRlci5pKytdKWluIGl0ZXIubykpO3JldHVybiBpdGVyUmVzdWx0KDAsa2V5KX0pO2Z1bmN0aW9uIHdyYXAoZm4pe3JldHVybiBmdW5jdGlvbihpdCl7YXNzZXJ0T2JqZWN0KGl0KTt0cnl7cmV0dXJuIGZuLmFwcGx5KHVuZGVmaW5lZCxhcmd1bWVudHMpLHRydWV9Y2F0Y2goZSl7cmV0dXJuIGZhbHNlfX19ZnVuY3Rpb24gcmVmbGVjdEdldCh0YXJnZXQscHJvcGVydHlLZXkpe3ZhciByZWNlaXZlcj1hcmd1bWVudHMubGVuZ3RoPDM/dGFyZ2V0OmFyZ3VtZW50c1syXSxkZXNjPWdldE93bkRlc2NyaXB0b3IoYXNzZXJ0T2JqZWN0KHRhcmdldCkscHJvcGVydHlLZXkpLHByb3RvO2lmKGRlc2MpcmV0dXJuIGhhcyhkZXNjLFwidmFsdWVcIik/ZGVzYy52YWx1ZTpkZXNjLmdldD09PXVuZGVmaW5lZD91bmRlZmluZWQ6ZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7cmV0dXJuIGlzT2JqZWN0KHByb3RvPWdldFByb3RvdHlwZU9mKHRhcmdldCkpP3JlZmxlY3RHZXQocHJvdG8scHJvcGVydHlLZXkscmVjZWl2ZXIpOnVuZGVmaW5lZH1mdW5jdGlvbiByZWZsZWN0U2V0KHRhcmdldCxwcm9wZXJ0eUtleSxWKXt2YXIgcmVjZWl2ZXI9YXJndW1lbnRzLmxlbmd0aDw0P3RhcmdldDphcmd1bWVudHNbM10sb3duRGVzYz1nZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3BlcnR5S2V5KSxleGlzdGluZ0Rlc2NyaXB0b3IscHJvdG87aWYoIW93bkRlc2Mpe2lmKGlzT2JqZWN0KHByb3RvPWdldFByb3RvdHlwZU9mKHRhcmdldCkpKXtyZXR1cm4gcmVmbGVjdFNldChwcm90byxwcm9wZXJ0eUtleSxWLHJlY2VpdmVyKX1vd25EZXNjPWRlc2NyaXB0b3IoMCl9aWYoaGFzKG93bkRlc2MsXCJ2YWx1ZVwiKSl7aWYob3duRGVzYy53cml0YWJsZT09PWZhbHNlfHwhaXNPYmplY3QocmVjZWl2ZXIpKXJldHVybiBmYWxzZTtleGlzdGluZ0Rlc2NyaXB0b3I9Z2V0T3duRGVzY3JpcHRvcihyZWNlaXZlcixwcm9wZXJ0eUtleSl8fGRlc2NyaXB0b3IoMCk7ZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlPVY7cmV0dXJuIGRlZmluZVByb3BlcnR5KHJlY2VpdmVyLHByb3BlcnR5S2V5LGV4aXN0aW5nRGVzY3JpcHRvciksdHJ1ZX1yZXR1cm4gb3duRGVzYy5zZXQ9PT11bmRlZmluZWQ/ZmFsc2U6KG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsViksdHJ1ZSl9dmFyIGlzRXh0ZW5zaWJsZT1PYmplY3QuaXNFeHRlbnNpYmxlfHxyZXR1cm5JdDt2YXIgcmVmbGVjdD17YXBwbHk6Y3R4KGNhbGwsYXBwbHksMyksY29uc3RydWN0OmZ1bmN0aW9uKHRhcmdldCxhcmd1bWVudHNMaXN0KXt2YXIgcHJvdG89YXNzZXJ0RnVuY3Rpb24oYXJndW1lbnRzLmxlbmd0aDwzP3RhcmdldDphcmd1bWVudHNbMl0pW1BST1RPVFlQRV0saW5zdGFuY2U9Y3JlYXRlKGlzT2JqZWN0KHByb3RvKT9wcm90bzpPYmplY3RQcm90bykscmVzdWx0PWFwcGx5LmNhbGwodGFyZ2V0LGluc3RhbmNlLGFyZ3VtZW50c0xpc3QpO3JldHVybiBpc09iamVjdChyZXN1bHQpP3Jlc3VsdDppbnN0YW5jZX0sZGVmaW5lUHJvcGVydHk6d3JhcChkZWZpbmVQcm9wZXJ0eSksZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24odGFyZ2V0LHByb3BlcnR5S2V5KXt2YXIgZGVzYz1nZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3BlcnR5S2V5KTtyZXR1cm4gZGVzYyYmIWRlc2MuY29uZmlndXJhYmxlP2ZhbHNlOmRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldfSxlbnVtZXJhdGU6ZnVuY3Rpb24odGFyZ2V0KXtyZXR1cm4gbmV3IEVudW1lcmF0ZShhc3NlcnRPYmplY3QodGFyZ2V0KSl9LGdldDpyZWZsZWN0R2V0LGdldE93blByb3BlcnR5RGVzY3JpcHRvcjpmdW5jdGlvbih0YXJnZXQscHJvcGVydHlLZXkpe3JldHVybiBnZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3BlcnR5S2V5KX0sZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odGFyZ2V0KXtyZXR1cm4gZ2V0UHJvdG90eXBlT2YoYXNzZXJ0T2JqZWN0KHRhcmdldCkpfSxoYXM6ZnVuY3Rpb24odGFyZ2V0LHByb3BlcnR5S2V5KXtyZXR1cm4gcHJvcGVydHlLZXkgaW4gdGFyZ2V0fSxpc0V4dGVuc2libGU6ZnVuY3Rpb24odGFyZ2V0KXtyZXR1cm4hIWlzRXh0ZW5zaWJsZShhc3NlcnRPYmplY3QodGFyZ2V0KSl9LG93bktleXM6b3duS2V5cyxwcmV2ZW50RXh0ZW5zaW9uczp3cmFwKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9uc3x8cmV0dXJuSXQpLHNldDpyZWZsZWN0U2V0fTtpZihzZXRQcm90b3R5cGVPZilyZWZsZWN0LnNldFByb3RvdHlwZU9mPWZ1bmN0aW9uKHRhcmdldCxwcm90byl7cmV0dXJuIHNldFByb3RvdHlwZU9mKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3RvKSx0cnVlfTskZGVmaW5lKEdMT0JBTCx7UmVmbGVjdDp7fX0pOyRkZWZpbmUoU1RBVElDLFwiUmVmbGVjdFwiLHJlZmxlY3QpfSgpOyFmdW5jdGlvbigpeyRkZWZpbmUoUFJPVE8sQVJSQVkse2luY2x1ZGVzOmNyZWF0ZUFycmF5Q29udGFpbnModHJ1ZSl9KTskZGVmaW5lKFBST1RPLFNUUklORyx7YXQ6Y3JlYXRlUG9pbnRBdCh0cnVlKX0pO2Z1bmN0aW9uIGNyZWF0ZU9iamVjdFRvQXJyYXkoaXNFbnRyaWVzKXtyZXR1cm4gZnVuY3Rpb24ob2JqZWN0KXt2YXIgTz10b09iamVjdChvYmplY3QpLGtleXM9Z2V0S2V5cyhvYmplY3QpLGxlbmd0aD1rZXlzLmxlbmd0aCxpPTAscmVzdWx0PUFycmF5KGxlbmd0aCksa2V5O2lmKGlzRW50cmllcyl3aGlsZShsZW5ndGg+aSlyZXN1bHRbaV09W2tleT1rZXlzW2krK10sT1trZXldXTtlbHNlIHdoaWxlKGxlbmd0aD5pKXJlc3VsdFtpXT1PW2tleXNbaSsrXV07cmV0dXJuIHJlc3VsdH19JGRlZmluZShTVEFUSUMsT0JKRUNULHtnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOmZ1bmN0aW9uKG9iamVjdCl7dmFyIE89dG9PYmplY3Qob2JqZWN0KSxyZXN1bHQ9e307Zm9yRWFjaC5jYWxsKG93bktleXMoTyksZnVuY3Rpb24oa2V5KXtkZWZpbmVQcm9wZXJ0eShyZXN1bHQsa2V5LGRlc2NyaXB0b3IoMCxnZXRPd25EZXNjcmlwdG9yKE8sa2V5KSkpfSk7cmV0dXJuIHJlc3VsdH0sdmFsdWVzOmNyZWF0ZU9iamVjdFRvQXJyYXkoZmFsc2UpLGVudHJpZXM6Y3JlYXRlT2JqZWN0VG9BcnJheSh0cnVlKX0pOyRkZWZpbmUoU1RBVElDLFJFR0VYUCx7ZXNjYXBlOmNyZWF0ZVJlcGxhY2VyKC8oW1xcXFxcXC1bXFxde30oKSorPy4sXiR8XSkvZyxcIlxcXFwkMVwiLHRydWUpfSl9KCk7IWZ1bmN0aW9uKFJFRkVSRU5DRSl7UkVGRVJFTkNFX0dFVD1nZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFK1wiR2V0XCIsdHJ1ZSk7dmFyIFJFRkVSRU5DRV9TRVQ9Z2V0V2VsbEtub3duU3ltYm9sKFJFRkVSRU5DRStTRVQsdHJ1ZSksUkVGRVJFTkNFX0RFTEVURT1nZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFK1wiRGVsZXRlXCIsdHJ1ZSk7JGRlZmluZShTVEFUSUMsU1lNQk9MLHtyZWZlcmVuY2VHZXQ6UkVGRVJFTkNFX0dFVCxyZWZlcmVuY2VTZXQ6UkVGRVJFTkNFX1NFVCxyZWZlcmVuY2VEZWxldGU6UkVGRVJFTkNFX0RFTEVURX0pO2hpZGRlbihGdW5jdGlvblByb3RvLFJFRkVSRU5DRV9HRVQscmV0dXJuVGhpcyk7ZnVuY3Rpb24gc2V0TWFwTWV0aG9kcyhDb25zdHJ1Y3Rvcil7aWYoQ29uc3RydWN0b3Ipe3ZhciBNYXBQcm90bz1Db25zdHJ1Y3RvcltQUk9UT1RZUEVdO2hpZGRlbihNYXBQcm90byxSRUZFUkVOQ0VfR0VULE1hcFByb3RvLmdldCk7aGlkZGVuKE1hcFByb3RvLFJFRkVSRU5DRV9TRVQsTWFwUHJvdG8uc2V0KTtoaWRkZW4oTWFwUHJvdG8sUkVGRVJFTkNFX0RFTEVURSxNYXBQcm90b1tcImRlbGV0ZVwiXSl9fXNldE1hcE1ldGhvZHMoTWFwKTtzZXRNYXBNZXRob2RzKFdlYWtNYXApfShcInJlZmVyZW5jZVwiKTshZnVuY3Rpb24oYXJyYXlTdGF0aWNzKXtmdW5jdGlvbiBzZXRBcnJheVN0YXRpY3Moa2V5cyxsZW5ndGgpe2ZvckVhY2guY2FsbChhcnJheShrZXlzKSxmdW5jdGlvbihrZXkpe2lmKGtleSBpbiBBcnJheVByb3RvKWFycmF5U3RhdGljc1trZXldPWN0eChjYWxsLEFycmF5UHJvdG9ba2V5XSxsZW5ndGgpfSl9c2V0QXJyYXlTdGF0aWNzKFwicG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllc1wiLDEpO3NldEFycmF5U3RhdGljcyhcImluZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXNcIiwzKTtzZXRBcnJheVN0YXRpY3MoXCJqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YsXCIrXCJyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsLHR1cm5cIik7JGRlZmluZShTVEFUSUMsQVJSQVksYXJyYXlTdGF0aWNzKX0oe30pOyFmdW5jdGlvbihOb2RlTGlzdCl7aWYoZnJhbWV3b3JrJiZOb2RlTGlzdCYmIShTWU1CT0xfSVRFUkFUT1IgaW4gTm9kZUxpc3RbUFJPVE9UWVBFXSkpe2hpZGRlbihOb2RlTGlzdFtQUk9UT1RZUEVdLFNZTUJPTF9JVEVSQVRPUixJdGVyYXRvcnNbQVJSQVldKX1JdGVyYXRvcnMuTm9kZUxpc3Q9SXRlcmF0b3JzW0FSUkFZXX0oZ2xvYmFsLk5vZGVMaXN0KX0odHlwZW9mIHNlbGYhPVwidW5kZWZpbmVkXCImJnNlbGYuTWF0aD09PU1hdGg/c2VsZjpGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksdHJ1ZSl9LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXsoZnVuY3Rpb24oZ2xvYmFsKXshZnVuY3Rpb24oZ2xvYmFsKXtcInVzZSBzdHJpY3RcIjt2YXIgaGFzT3duPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHVuZGVmaW5lZDt2YXIgaXRlcmF0b3JTeW1ib2w9dHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmU3ltYm9sLml0ZXJhdG9yfHxcIkBAaXRlcmF0b3JcIjt2YXIgaW5Nb2R1bGU9dHlwZW9mIG1vZHVsZT09PVwib2JqZWN0XCI7dmFyIHJ1bnRpbWU9Z2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtpZihydW50aW1lKXtpZihpbk1vZHVsZSl7bW9kdWxlLmV4cG9ydHM9cnVudGltZX1yZXR1cm59cnVudGltZT1nbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lPWluTW9kdWxlP21vZHVsZS5leHBvcnRzOnt9O2Z1bmN0aW9uIHdyYXAoaW5uZXJGbixvdXRlckZuLHNlbGYsdHJ5TG9jc0xpc3Qpe3JldHVybiBuZXcgR2VuZXJhdG9yKGlubmVyRm4sb3V0ZXJGbixzZWxmfHxudWxsLHRyeUxvY3NMaXN0fHxbXSl9cnVudGltZS53cmFwPXdyYXA7ZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sb2JqLGFyZyl7dHJ5e3JldHVybnt0eXBlOlwibm9ybWFsXCIsYXJnOmZuLmNhbGwob2JqLGFyZyl9fWNhdGNoKGVycil7cmV0dXJue3R5cGU6XCJ0aHJvd1wiLGFyZzplcnJ9fX12YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydD1cInN1c3BlbmRlZFN0YXJ0XCI7dmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQ9XCJzdXNwZW5kZWRZaWVsZFwiO3ZhciBHZW5TdGF0ZUV4ZWN1dGluZz1cImV4ZWN1dGluZ1wiO3ZhciBHZW5TdGF0ZUNvbXBsZXRlZD1cImNvbXBsZXRlZFwiO3ZhciBDb250aW51ZVNlbnRpbmVsPXt9O2Z1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCl7fWZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCl7fXZhciBHcD1HZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGU9R2VuZXJhdG9yLnByb3RvdHlwZTtHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGU9R3AuY29uc3RydWN0b3I9R2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7R2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3I9R2VuZXJhdG9yRnVuY3Rpb247R2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWU9XCJHZW5lcmF0b3JGdW5jdGlvblwiO3J1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbj1mdW5jdGlvbihnZW5GdW4pe3ZhciBjdG9yPXR5cGVvZiBnZW5GdW49PT1cImZ1bmN0aW9uXCImJmdlbkZ1bi5jb25zdHJ1Y3RvcjtyZXR1cm4gY3Rvcj9jdG9yPT09R2VuZXJhdG9yRnVuY3Rpb258fChjdG9yLmRpc3BsYXlOYW1lfHxjdG9yLm5hbWUpPT09XCJHZW5lcmF0b3JGdW5jdGlvblwiOmZhbHNlfTtydW50aW1lLm1hcms9ZnVuY3Rpb24oZ2VuRnVuKXtnZW5GdW4uX19wcm90b19fPUdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO2dlbkZ1bi5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShHcCk7cmV0dXJuIGdlbkZ1bn07cnVudGltZS5hc3luYz1mdW5jdGlvbihpbm5lckZuLG91dGVyRm4sc2VsZix0cnlMb2NzTGlzdCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXt2YXIgZ2VuZXJhdG9yPXdyYXAoaW5uZXJGbixvdXRlckZuLHNlbGYsdHJ5TG9jc0xpc3QpO3ZhciBjYWxsTmV4dD1zdGVwLmJpbmQoZ2VuZXJhdG9yLm5leHQpO3ZhciBjYWxsVGhyb3c9c3RlcC5iaW5kKGdlbmVyYXRvcltcInRocm93XCJdKTtmdW5jdGlvbiBzdGVwKGFyZyl7dmFyIHJlY29yZD10cnlDYXRjaCh0aGlzLG51bGwsYXJnKTtpZihyZWNvcmQudHlwZT09PVwidGhyb3dcIil7cmVqZWN0KHJlY29yZC5hcmcpO3JldHVybn12YXIgaW5mbz1yZWNvcmQuYXJnO2lmKGluZm8uZG9uZSl7cmVzb2x2ZShpbmZvLnZhbHVlKX1lbHNle1Byb21pc2UucmVzb2x2ZShpbmZvLnZhbHVlKS50aGVuKGNhbGxOZXh0LGNhbGxUaHJvdyl9fWNhbGxOZXh0KCl9KX07ZnVuY3Rpb24gR2VuZXJhdG9yKGlubmVyRm4sb3V0ZXJGbixzZWxmLHRyeUxvY3NMaXN0KXt2YXIgZ2VuZXJhdG9yPW91dGVyRm4/T2JqZWN0LmNyZWF0ZShvdXRlckZuLnByb3RvdHlwZSk6dGhpczt2YXIgY29udGV4dD1uZXcgQ29udGV4dCh0cnlMb2NzTGlzdCk7dmFyIHN0YXRlPUdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7ZnVuY3Rpb24gaW52b2tlKG1ldGhvZCxhcmcpe2lmKHN0YXRlPT09R2VuU3RhdGVFeGVjdXRpbmcpe3Rocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIil9aWYoc3RhdGU9PT1HZW5TdGF0ZUNvbXBsZXRlZCl7cmV0dXJuIGRvbmVSZXN1bHQoKX13aGlsZSh0cnVlKXt2YXIgZGVsZWdhdGU9Y29udGV4dC5kZWxlZ2F0ZTtpZihkZWxlZ2F0ZSl7dmFyIHJlY29yZD10cnlDYXRjaChkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLGRlbGVnYXRlLml0ZXJhdG9yLGFyZyk7aWYocmVjb3JkLnR5cGU9PT1cInRocm93XCIpe2NvbnRleHQuZGVsZWdhdGU9bnVsbDttZXRob2Q9XCJ0aHJvd1wiO2FyZz1yZWNvcmQuYXJnO2NvbnRpbnVlfW1ldGhvZD1cIm5leHRcIjthcmc9dW5kZWZpbmVkO3ZhciBpbmZvPXJlY29yZC5hcmc7aWYoaW5mby5kb25lKXtjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdPWluZm8udmFsdWU7Y29udGV4dC5uZXh0PWRlbGVnYXRlLm5leHRMb2N9ZWxzZXtzdGF0ZT1HZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO3JldHVybiBpbmZvfWNvbnRleHQuZGVsZWdhdGU9bnVsbH1pZihtZXRob2Q9PT1cIm5leHRcIil7aWYoc3RhdGU9PT1HZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0JiZ0eXBlb2YgYXJnIT09XCJ1bmRlZmluZWRcIil7dGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHQgdG8gc2VuZCBcIitKU09OLnN0cmluZ2lmeShhcmcpK1wiIHRvIG5ld2Jvcm4gZ2VuZXJhdG9yXCIpfWlmKHN0YXRlPT09R2VuU3RhdGVTdXNwZW5kZWRZaWVsZCl7Y29udGV4dC5zZW50PWFyZ31lbHNle2RlbGV0ZSBjb250ZXh0LnNlbnR9fWVsc2UgaWYobWV0aG9kPT09XCJ0aHJvd1wiKXtpZihzdGF0ZT09PUdlblN0YXRlU3VzcGVuZGVkU3RhcnQpe3N0YXRlPUdlblN0YXRlQ29tcGxldGVkO3Rocm93IGFyZ31pZihjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpe21ldGhvZD1cIm5leHRcIjthcmc9dW5kZWZpbmVkfX1lbHNlIGlmKG1ldGhvZD09PVwicmV0dXJuXCIpe2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsYXJnKX1zdGF0ZT1HZW5TdGF0ZUV4ZWN1dGluZzt2YXIgcmVjb3JkPXRyeUNhdGNoKGlubmVyRm4sc2VsZixjb250ZXh0KTtpZihyZWNvcmQudHlwZT09PVwibm9ybWFsXCIpe3N0YXRlPWNvbnRleHQuZG9uZT9HZW5TdGF0ZUNvbXBsZXRlZDpHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO3ZhciBpbmZvPXt2YWx1ZTpyZWNvcmQuYXJnLGRvbmU6Y29udGV4dC5kb25lfTtpZihyZWNvcmQuYXJnPT09Q29udGludWVTZW50aW5lbCl7aWYoY29udGV4dC5kZWxlZ2F0ZSYmbWV0aG9kPT09XCJuZXh0XCIpe2FyZz11bmRlZmluZWR9fWVsc2V7cmV0dXJuIGluZm99fWVsc2UgaWYocmVjb3JkLnR5cGU9PT1cInRocm93XCIpe3N0YXRlPUdlblN0YXRlQ29tcGxldGVkO2lmKG1ldGhvZD09PVwibmV4dFwiKXtjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKHJlY29yZC5hcmcpfWVsc2V7YXJnPXJlY29yZC5hcmd9fX19Z2VuZXJhdG9yLm5leHQ9aW52b2tlLmJpbmQoZ2VuZXJhdG9yLFwibmV4dFwiKTtnZW5lcmF0b3JbXCJ0aHJvd1wiXT1pbnZva2UuYmluZChnZW5lcmF0b3IsXCJ0aHJvd1wiKTtnZW5lcmF0b3JbXCJyZXR1cm5cIl09aW52b2tlLmJpbmQoZ2VuZXJhdG9yLFwicmV0dXJuXCIpO3JldHVybiBnZW5lcmF0b3J9R3BbaXRlcmF0b3JTeW1ib2xdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O0dwLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEdlbmVyYXRvcl1cIn07ZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3Mpe3ZhciBlbnRyeT17dHJ5TG9jOmxvY3NbMF19O2lmKDEgaW4gbG9jcyl7ZW50cnkuY2F0Y2hMb2M9bG9jc1sxXX1pZigyIGluIGxvY3Mpe2VudHJ5LmZpbmFsbHlMb2M9bG9jc1syXTtlbnRyeS5hZnRlckxvYz1sb2NzWzNdfXRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KX1mdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KXt2YXIgcmVjb3JkPWVudHJ5LmNvbXBsZXRpb258fHt9O3JlY29yZC50eXBlPVwibm9ybWFsXCI7ZGVsZXRlIHJlY29yZC5hcmc7ZW50cnkuY29tcGxldGlvbj1yZWNvcmR9ZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCl7dGhpcy50cnlFbnRyaWVzPVt7dHJ5TG9jOlwicm9vdFwifV07dHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksdGhpcyk7dGhpcy5yZXNldCgpfXJ1bnRpbWUua2V5cz1mdW5jdGlvbihvYmplY3Qpe3ZhciBrZXlzPVtdO2Zvcih2YXIga2V5IGluIG9iamVjdCl7a2V5cy5wdXNoKGtleSl9a2V5cy5yZXZlcnNlKCk7cmV0dXJuIGZ1bmN0aW9uIG5leHQoKXt3aGlsZShrZXlzLmxlbmd0aCl7dmFyIGtleT1rZXlzLnBvcCgpO2lmKGtleSBpbiBvYmplY3Qpe25leHQudmFsdWU9a2V5O25leHQuZG9uZT1mYWxzZTtyZXR1cm4gbmV4dH19bmV4dC5kb25lPXRydWU7cmV0dXJuIG5leHR9fTtmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpe2lmKGl0ZXJhYmxlKXt2YXIgaXRlcmF0b3JNZXRob2Q9aXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO2lmKGl0ZXJhdG9yTWV0aG9kKXtyZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSl9aWYodHlwZW9mIGl0ZXJhYmxlLm5leHQ9PT1cImZ1bmN0aW9uXCIpe3JldHVybiBpdGVyYWJsZX1pZighaXNOYU4oaXRlcmFibGUubGVuZ3RoKSl7dmFyIGk9LTEsbmV4dD1mdW5jdGlvbiBuZXh0KCl7d2hpbGUoKytpPGl0ZXJhYmxlLmxlbmd0aCl7aWYoaGFzT3duLmNhbGwoaXRlcmFibGUsaSkpe25leHQudmFsdWU9aXRlcmFibGVbaV07bmV4dC5kb25lPWZhbHNlO3JldHVybiBuZXh0fX1uZXh0LnZhbHVlPXVuZGVmaW5lZDtuZXh0LmRvbmU9dHJ1ZTtyZXR1cm4gbmV4dH07cmV0dXJuIG5leHQubmV4dD1uZXh0fX1yZXR1cm57bmV4dDpkb25lUmVzdWx0fX1ydW50aW1lLnZhbHVlcz12YWx1ZXM7ZnVuY3Rpb24gZG9uZVJlc3VsdCgpe3JldHVybnt2YWx1ZTp1bmRlZmluZWQsZG9uZTp0cnVlfX1Db250ZXh0LnByb3RvdHlwZT17Y29uc3RydWN0b3I6Q29udGV4dCxyZXNldDpmdW5jdGlvbigpe3RoaXMucHJldj0wO3RoaXMubmV4dD0wO3RoaXMuc2VudD11bmRlZmluZWQ7dGhpcy5kb25lPWZhbHNlO3RoaXMuZGVsZWdhdGU9bnVsbDt0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtmb3IodmFyIHRlbXBJbmRleD0wLHRlbXBOYW1lO2hhc093bi5jYWxsKHRoaXMsdGVtcE5hbWU9XCJ0XCIrdGVtcEluZGV4KXx8dGVtcEluZGV4PDIwOysrdGVtcEluZGV4KXt0aGlzW3RlbXBOYW1lXT1udWxsfX0sc3RvcDpmdW5jdGlvbigpe3RoaXMuZG9uZT10cnVlO3ZhciByb290RW50cnk9dGhpcy50cnlFbnRyaWVzWzBdO3ZhciByb290UmVjb3JkPXJvb3RFbnRyeS5jb21wbGV0aW9uO2lmKHJvb3RSZWNvcmQudHlwZT09PVwidGhyb3dcIil7dGhyb3cgcm9vdFJlY29yZC5hcmd9cmV0dXJuIHRoaXMucnZhbH0sZGlzcGF0Y2hFeGNlcHRpb246ZnVuY3Rpb24oZXhjZXB0aW9uKXtpZih0aGlzLmRvbmUpe3Rocm93IGV4Y2VwdGlvbn12YXIgY29udGV4dD10aGlzO2Z1bmN0aW9uIGhhbmRsZShsb2MsY2F1Z2h0KXtyZWNvcmQudHlwZT1cInRocm93XCI7cmVjb3JkLmFyZz1leGNlcHRpb247Y29udGV4dC5uZXh0PWxvYztyZXR1cm4hIWNhdWdodH1mb3IodmFyIGk9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO2k+PTA7LS1pKXt2YXIgZW50cnk9dGhpcy50cnlFbnRyaWVzW2ldO3ZhciByZWNvcmQ9ZW50cnkuY29tcGxldGlvbjtpZihlbnRyeS50cnlMb2M9PT1cInJvb3RcIil7cmV0dXJuIGhhbmRsZShcImVuZFwiKX1pZihlbnRyeS50cnlMb2M8PXRoaXMucHJldil7dmFyIGhhc0NhdGNoPWhhc093bi5jYWxsKGVudHJ5LFwiY2F0Y2hMb2NcIik7dmFyIGhhc0ZpbmFsbHk9aGFzT3duLmNhbGwoZW50cnksXCJmaW5hbGx5TG9jXCIpO2lmKGhhc0NhdGNoJiZoYXNGaW5hbGx5KXtpZih0aGlzLnByZXY8ZW50cnkuY2F0Y2hMb2Mpe3JldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsdHJ1ZSl9ZWxzZSBpZih0aGlzLnByZXY8ZW50cnkuZmluYWxseUxvYyl7cmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKX19ZWxzZSBpZihoYXNDYXRjaCl7aWYodGhpcy5wcmV2PGVudHJ5LmNhdGNoTG9jKXtyZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLHRydWUpfX1lbHNlIGlmKGhhc0ZpbmFsbHkpe2lmKHRoaXMucHJldjxlbnRyeS5maW5hbGx5TG9jKXtyZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpfX1lbHNle3Rocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpfX19fSxhYnJ1cHQ6ZnVuY3Rpb24odHlwZSxhcmcpe2Zvcih2YXIgaT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7aT49MDstLWkpe3ZhciBlbnRyeT10aGlzLnRyeUVudHJpZXNbaV07aWYoZW50cnkudHJ5TG9jPD10aGlzLnByZXYmJmhhc093bi5jYWxsKGVudHJ5LFwiZmluYWxseUxvY1wiKSYmdGhpcy5wcmV2PGVudHJ5LmZpbmFsbHlMb2Mpe3ZhciBmaW5hbGx5RW50cnk9ZW50cnk7YnJlYWt9fWlmKGZpbmFsbHlFbnRyeSYmKHR5cGU9PT1cImJyZWFrXCJ8fHR5cGU9PT1cImNvbnRpbnVlXCIpJiZmaW5hbGx5RW50cnkudHJ5TG9jPD1hcmcmJmFyZzxmaW5hbGx5RW50cnkuZmluYWxseUxvYyl7ZmluYWxseUVudHJ5PW51bGx9dmFyIHJlY29yZD1maW5hbGx5RW50cnk/ZmluYWxseUVudHJ5LmNvbXBsZXRpb246e307cmVjb3JkLnR5cGU9dHlwZTtyZWNvcmQuYXJnPWFyZztpZihmaW5hbGx5RW50cnkpe3RoaXMubmV4dD1maW5hbGx5RW50cnkuZmluYWxseUxvY31lbHNle3RoaXMuY29tcGxldGUocmVjb3JkKX1yZXR1cm4gQ29udGludWVTZW50aW5lbH0sY29tcGxldGU6ZnVuY3Rpb24ocmVjb3JkLGFmdGVyTG9jKXtpZihyZWNvcmQudHlwZT09PVwidGhyb3dcIil7dGhyb3cgcmVjb3JkLmFyZ31pZihyZWNvcmQudHlwZT09PVwiYnJlYWtcInx8cmVjb3JkLnR5cGU9PT1cImNvbnRpbnVlXCIpe3RoaXMubmV4dD1yZWNvcmQuYXJnfWVsc2UgaWYocmVjb3JkLnR5cGU9PT1cInJldHVyblwiKXt0aGlzLnJ2YWw9cmVjb3JkLmFyZzt0aGlzLm5leHQ9XCJlbmRcIn1lbHNlIGlmKHJlY29yZC50eXBlPT09XCJub3JtYWxcIiYmYWZ0ZXJMb2Mpe3RoaXMubmV4dD1hZnRlckxvY31yZXR1cm4gQ29udGludWVTZW50aW5lbH0sZmluaXNoOmZ1bmN0aW9uKGZpbmFsbHlMb2Mpe2Zvcih2YXIgaT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7aT49MDstLWkpe3ZhciBlbnRyeT10aGlzLnRyeUVudHJpZXNbaV07aWYoZW50cnkuZmluYWxseUxvYz09PWZpbmFsbHlMb2Mpe3JldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sZW50cnkuYWZ0ZXJMb2MpfX19LFwiY2F0Y2hcIjpmdW5jdGlvbih0cnlMb2Mpe2Zvcih2YXIgaT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7aT49MDstLWkpe3ZhciBlbnRyeT10aGlzLnRyeUVudHJpZXNbaV07aWYoZW50cnkudHJ5TG9jPT09dHJ5TG9jKXt2YXIgcmVjb3JkPWVudHJ5LmNvbXBsZXRpb247aWYocmVjb3JkLnR5cGU9PT1cInRocm93XCIpe3ZhciB0aHJvd249cmVjb3JkLmFyZztyZXNldFRyeUVudHJ5KGVudHJ5KX1yZXR1cm4gdGhyb3dufX10aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIil9LGRlbGVnYXRlWWllbGQ6ZnVuY3Rpb24oaXRlcmFibGUscmVzdWx0TmFtZSxuZXh0TG9jKXt0aGlzLmRlbGVnYXRlPXtpdGVyYXRvcjp2YWx1ZXMoaXRlcmFibGUpLHJlc3VsdE5hbWU6cmVzdWx0TmFtZSxuZXh0TG9jOm5leHRMb2N9O3JldHVybiBDb250aW51ZVNlbnRpbmVsfX19KHR5cGVvZiBnbG9iYWw9PT1cIm9iamVjdFwiP2dsb2JhbDp0eXBlb2Ygd2luZG93PT09XCJvYmplY3RcIj93aW5kb3c6dGhpcyl9KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCI/Z2xvYmFsOnR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIj9zZWxmOnR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiP3dpbmRvdzp7fSl9LHt9XX0se30sWzFdKTsiXX0=
},{"core-js/shim":2,"regenerator-babel/runtime":3}],2:[function(require,module,exports){
/**
 * Core.js 0.6.1
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2015 Denis Pushkarev
 */
!function(global, framework, undefined){
'use strict';

/******************************************************************************
 * Module : common                                                            *
 ******************************************************************************/

  // Shortcuts for [[Class]] & property names
var OBJECT          = 'Object'
  , FUNCTION        = 'Function'
  , ARRAY           = 'Array'
  , STRING          = 'String'
  , NUMBER          = 'Number'
  , REGEXP          = 'RegExp'
  , DATE            = 'Date'
  , MAP             = 'Map'
  , SET             = 'Set'
  , WEAKMAP         = 'WeakMap'
  , WEAKSET         = 'WeakSet'
  , SYMBOL          = 'Symbol'
  , PROMISE         = 'Promise'
  , MATH            = 'Math'
  , ARGUMENTS       = 'Arguments'
  , PROTOTYPE       = 'prototype'
  , CONSTRUCTOR     = 'constructor'
  , TO_STRING       = 'toString'
  , TO_STRING_TAG   = TO_STRING + 'Tag'
  , TO_LOCALE       = 'toLocaleString'
  , HAS_OWN         = 'hasOwnProperty'
  , FOR_EACH        = 'forEach'
  , ITERATOR        = 'iterator'
  , FF_ITERATOR     = '@@' + ITERATOR
  , PROCESS         = 'process'
  , CREATE_ELEMENT  = 'createElement'
  // Aliases global objects and prototypes
  , Function        = global[FUNCTION]
  , Object          = global[OBJECT]
  , Array           = global[ARRAY]
  , String          = global[STRING]
  , Number          = global[NUMBER]
  , RegExp          = global[REGEXP]
  , Date            = global[DATE]
  , Map             = global[MAP]
  , Set             = global[SET]
  , WeakMap         = global[WEAKMAP]
  , WeakSet         = global[WEAKSET]
  , Symbol          = global[SYMBOL]
  , Math            = global[MATH]
  , TypeError       = global.TypeError
  , RangeError      = global.RangeError
  , setTimeout      = global.setTimeout
  , setImmediate    = global.setImmediate
  , clearImmediate  = global.clearImmediate
  , parseInt        = global.parseInt
  , isFinite        = global.isFinite
  , process         = global[PROCESS]
  , nextTick        = process && process.nextTick
  , document        = global.document
  , html            = document && document.documentElement
  , navigator       = global.navigator
  , define          = global.define
  , console         = global.console || {}
  , ArrayProto      = Array[PROTOTYPE]
  , ObjectProto     = Object[PROTOTYPE]
  , FunctionProto   = Function[PROTOTYPE]
  , Infinity        = 1 / 0
  , DOT             = '.';

// http://jsperf.com/core-js-isobject
function isObject(it){
  return it !== null && (typeof it == 'object' || typeof it == 'function');
}
function isFunction(it){
  return typeof it == 'function';
}
// Native function?
var isNative = ctx(/./.test, /\[native code\]\s*\}\s*$/, 1);

// Object internal [[Class]] or toStringTag
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring
var toString = ObjectProto[TO_STRING];
function setToStringTag(it, tag, stat){
  if(it && !has(it = stat ? it : it[PROTOTYPE], SYMBOL_TAG))hidden(it, SYMBOL_TAG, tag);
}
function cof(it){
  return toString.call(it).slice(8, -1);
}
function classof(it){
  var O, T;
  return it == undefined ? it === undefined ? 'Undefined' : 'Null'
    : typeof (T = (O = Object(it))[SYMBOL_TAG]) == 'string' ? T : cof(O);
}

// Function
var call  = FunctionProto.call
  , apply = FunctionProto.apply
  , REFERENCE_GET;
// Partial apply
function part(/* ...args */){
  var fn     = assertFunction(this)
    , length = arguments.length
    , args   = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((args[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that    = this
      , _length = arguments.length
      , i = 0, j = 0, _args;
    if(!holder && !_length)return invoke(fn, args, that);
    _args = args.slice();
    if(holder)for(;length > i; i++)if(_args[i] === _)_args[i] = arguments[j++];
    while(_length > j)_args.push(arguments[j++]);
    return invoke(fn, _args, that);
  }
}
// Optional / simple context binding
function ctx(fn, that, length){
  assertFunction(fn);
  if(~length && that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    }
    case 2: return function(a, b){
      return fn.call(that, a, b);
    }
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    }
  } return function(/* ...args */){
      return fn.apply(that, arguments);
  }
}
// Fast apply
// http://jsperf.lnkit.com/fast-apply/5
function invoke(fn, args, that){
  var un = that === undefined;
  switch(args.length | 0){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
    case 5: return un ? fn(args[0], args[1], args[2], args[3], args[4])
                      : fn.call(that, args[0], args[1], args[2], args[3], args[4]);
  } return              fn.apply(that, args);
}

// Object:
var create           = Object.create
  , getPrototypeOf   = Object.getPrototypeOf
  , setPrototypeOf   = Object.setPrototypeOf
  , defineProperty   = Object.defineProperty
  , defineProperties = Object.defineProperties
  , getOwnDescriptor = Object.getOwnPropertyDescriptor
  , getKeys          = Object.keys
  , getNames         = Object.getOwnPropertyNames
  , getSymbols       = Object.getOwnPropertySymbols
  , isFrozen         = Object.isFrozen
  , has              = ctx(call, ObjectProto[HAS_OWN], 2)
  // Dummy, fix for not array-like ES3 string in es5 module
  , ES5Object        = Object
  , Dict;
function toObject(it){
  return ES5Object(assertDefined(it));
}
function returnIt(it){
  return it;
}
function returnThis(){
  return this;
}
function get(object, key){
  if(has(object, key))return object[key];
}
function ownKeys(it){
  assertObject(it);
  return getSymbols ? getNames(it).concat(getSymbols(it)) : getNames(it);
}
// 19.1.2.1 Object.assign(target, source, ...)
var assign = Object.assign || function(target, source){
  var T = Object(assertDefined(target))
    , l = arguments.length
    , i = 1;
  while(l > i){
    var S      = ES5Object(arguments[i++])
      , keys   = getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)T[key = keys[j++]] = S[key];
  }
  return T;
}
function keyOf(object, el){
  var O      = toObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
}

// Array
// array('str1,str2,str3') => ['str1', 'str2', 'str3']
function array(it){
  return String(it).split(',');
}
var push    = ArrayProto.push
  , unshift = ArrayProto.unshift
  , slice   = ArrayProto.slice
  , splice  = ArrayProto.splice
  , indexOf = ArrayProto.indexOf
  , forEach = ArrayProto[FOR_EACH];
/*
 * 0 -> forEach
 * 1 -> map
 * 2 -> filter
 * 3 -> some
 * 4 -> every
 * 5 -> find
 * 6 -> findIndex
 */
function createArrayMethod(type){
  var isMap       = type == 1
    , isFilter    = type == 2
    , isSome      = type == 3
    , isEvery     = type == 4
    , isFindIndex = type == 6
    , noholes     = type == 5 || isFindIndex;
  return function(callbackfn/*, that = undefined */){
    var O      = Object(assertDefined(this))
      , that   = arguments[1]
      , self   = ES5Object(O)
      , f      = ctx(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = isMap ? Array(length) : isFilter ? [] : undefined
      , val, res;
    for(;length > index; index++)if(noholes || index in self){
      val = self[index];
      res = f(val, index, O);
      if(type){
        if(isMap)result[index] = res;             // map
        else if(res)switch(type){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(isEvery)return false;           // every
      }
    }
    return isFindIndex ? -1 : isSome || isEvery ? isEvery : result;
  }
}
function createArrayContains(isContains){
  return function(el /*, fromIndex = 0 */){
    var O      = toObject(this)
      , length = toLength(O.length)
      , index  = toIndex(arguments[1], length);
    if(isContains && el != el){
      for(;length > index; index++)if(sameNaN(O[index]))return isContains || index;
    } else for(;length > index; index++)if(isContains || index in O){
      if(O[index] === el)return isContains || index;
    } return !isContains && -1;
  }
}
function generic(A, B){
  // strange IE quirks mode bug -> use typeof vs isFunction
  return typeof A == 'function' ? A : B;
}

// Math
var MAX_SAFE_INTEGER = 0x1fffffffffffff // pow(2, 53) - 1 == 9007199254740991
  , pow    = Math.pow
  , abs    = Math.abs
  , ceil   = Math.ceil
  , floor  = Math.floor
  , max    = Math.max
  , min    = Math.min
  , random = Math.random
  , trunc  = Math.trunc || function(it){
      return (it > 0 ? floor : ceil)(it);
    }
// 20.1.2.4 Number.isNaN(number)
function sameNaN(number){
  return number != number;
}
// 7.1.4 ToInteger
function toInteger(it){
  return isNaN(it) ? 0 : trunc(it);
}
// 7.1.15 ToLength
function toLength(it){
  return it > 0 ? min(toInteger(it), MAX_SAFE_INTEGER) : 0;
}
function toIndex(index, length){
  var index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
}
function lz(num){
  return num > 9 ? num : '0' + num;
}

function createReplacer(regExp, replace, isStatic){
  var replacer = isObject(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(isStatic ? it : this).replace(regExp, replacer);
  }
}
function createPointAt(toString){
  return function(pos){
    var s = String(assertDefined(this))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return toString ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? toString ? s.charAt(i) : a
      : toString ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  }
}

// Assertion & errors
var REDUCE_ERROR = 'Reduce of empty object with no initial value';
function assert(condition, msg1, msg2){
  if(!condition)throw TypeError(msg2 ? msg1 + msg2 : msg1);
}
function assertDefined(it){
  if(it == undefined)throw TypeError('Function called on null or undefined');
  return it;
}
function assertFunction(it){
  assert(isFunction(it), it, ' is not a function!');
  return it;
}
function assertObject(it){
  assert(isObject(it), it, ' is not an object!');
  return it;
}
function assertInstance(it, Constructor, name){
  assert(it instanceof Constructor, name, ": use the 'new' operator!");
}

// Property descriptors & Symbol
function descriptor(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  }
}
function simpleSet(object, key, value){
  object[key] = value;
  return object;
}
function createDefiner(bitmap){
  return DESC ? function(object, key, value){
    return defineProperty(object, key, descriptor(bitmap, value));
  } : simpleSet;
}
function uid(key){
  return SYMBOL + '(' + key + ')_' + (++sid + random())[TO_STRING](36);
}
function getWellKnownSymbol(name, setter){
  return (Symbol && Symbol[name]) || (setter ? Symbol : safeSymbol)(SYMBOL + DOT + name);
}
// The engine works fine with descriptors? Thank's IE8 for his funny defineProperty.
var DESC = !!function(){
      try {
        return defineProperty({}, 'a', {get: function(){ return 2 }}).a == 2;
      } catch(e){}
    }()
  , sid    = 0
  , hidden = createDefiner(1)
  , set    = Symbol ? simpleSet : hidden
  , safeSymbol = Symbol || uid;
function assignHidden(target, src){
  for(var key in src)hidden(target, key, src[key]);
  return target;
}

var SYMBOL_UNSCOPABLES = getWellKnownSymbol('unscopables')
  , ArrayUnscopables   = ArrayProto[SYMBOL_UNSCOPABLES] || {}
  , SYMBOL_TAG         = getWellKnownSymbol(TO_STRING_TAG)
  , SYMBOL_SPECIES     = getWellKnownSymbol('species')
  , SYMBOL_ITERATOR;
function setSpecies(C){
  if(DESC && (framework || !isNative(C)))defineProperty(C, SYMBOL_SPECIES, {
    configurable: true,
    get: returnThis
  });
}

/******************************************************************************
 * Module : common.export                                                     *
 ******************************************************************************/

var NODE = cof(process) == PROCESS
  , core = {}
  , path = framework ? global : core
  , old  = global.core
  , exportGlobal
  // type bitmap
  , FORCED = 1
  , GLOBAL = 2
  , STATIC = 4
  , PROTO  = 8
  , BIND   = 16
  , WRAP   = 32;
function $define(type, name, source){
  var key, own, out, exp
    , isGlobal = type & GLOBAL
    , target   = isGlobal ? global : (type & STATIC)
        ? global[name] : (global[name] || ObjectProto)[PROTOTYPE]
    , exports  = isGlobal ? core : core[name] || (core[name] = {});
  if(isGlobal)source = name;
  for(key in source){
    // there is a similar native
    own = !(type & FORCED) && target && key in target
      && (!isFunction(target[key]) || isNative(target[key]));
    // export native or passed
    out = (own ? target : source)[key];
    // prevent global pollution for namespaces
    if(!framework && isGlobal && !isFunction(target[key]))exp = source[key];
    // bind timers to global for call from export context
    else if(type & BIND && own)exp = ctx(out, global);
    // wrap global constructors for prevent change them in library
    else if(type & WRAP && !framework && target[key] == out){
      exp = function(param){
        return this instanceof out ? new out(param) : out(param);
      }
      exp[PROTOTYPE] = out[PROTOTYPE];
    } else exp = type & PROTO && isFunction(out) ? ctx(call, out) : out;
    // extend global
    if(framework && target && !own){
      if(isGlobal)target[key] = out;
      else delete target[key] && hidden(target, key, out);
    }
    // export
    if(exports[key] != out)hidden(exports, key, exp);
  }
}
// CommonJS export
if(typeof module != 'undefined' && module.exports)module.exports = core;
// RequireJS export
else if(isFunction(define) && define.amd)define(function(){return core});
// Export to global object
else exportGlobal = true;
if(exportGlobal || framework){
  core.noConflict = function(){
    global.core = old;
    return core;
  }
  global.core = core;
}

/******************************************************************************
 * Module : common.iterators                                                  *
 ******************************************************************************/

SYMBOL_ITERATOR = getWellKnownSymbol(ITERATOR);
var ITER  = safeSymbol('iter')
  , KEY   = 1
  , VALUE = 2
  , Iterators = {}
  , IteratorPrototype = {}
    // Safari has byggy iterators w/o `next`
  , BUGGY_ITERATORS = 'keys' in ArrayProto && !('next' in [].keys());
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
setIterator(IteratorPrototype, returnThis);
function setIterator(O, value){
  hidden(O, SYMBOL_ITERATOR, value);
  // Add iterator for FF iterator protocol
  FF_ITERATOR in ArrayProto && hidden(O, FF_ITERATOR, value);
}
function createIterator(Constructor, NAME, next, proto){
  Constructor[PROTOTYPE] = create(proto || IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
}
function defineIterator(Constructor, NAME, value, DEFAULT){
  var proto = Constructor[PROTOTYPE]
    , iter  = get(proto, SYMBOL_ITERATOR) || get(proto, FF_ITERATOR) || (DEFAULT && get(proto, DEFAULT)) || value;
  if(framework){
    // Define iterator
    setIterator(proto, iter);
    if(iter !== value){
      var iterProto = getPrototypeOf(iter.call(new Constructor));
      // Set @@toStringTag to native iterators
      setToStringTag(iterProto, NAME + ' Iterator', true);
      // FF fix
      has(proto, FF_ITERATOR) && setIterator(iterProto, returnThis);
    }
  }
  // Plug for library
  Iterators[NAME] = iter;
  // FF & v8 fix
  Iterators[NAME + ' Iterator'] = returnThis;
  return iter;
}
function defineStdIterators(Base, NAME, Constructor, next, DEFAULT, IS_SET){
  function createIter(kind){
    return function(){
      return new Constructor(this, kind);
    }
  }
  createIterator(Constructor, NAME, next);
  var entries = createIter(KEY+VALUE)
    , values  = createIter(VALUE);
  if(DEFAULT == VALUE)values = defineIterator(Base, NAME, values, 'values');
  else entries = defineIterator(Base, NAME, entries, 'entries');
  if(DEFAULT){
    $define(PROTO + FORCED * BUGGY_ITERATORS, NAME, {
      entries: entries,
      keys: IS_SET ? values : createIter(KEY),
      values: values
    });
  }
}
function iterResult(done, value){
  return {value: value, done: !!done};
}
function isIterable(it){
  var O      = Object(it)
    , Symbol = global[SYMBOL]
    , hasExt = (Symbol && Symbol[ITERATOR] || FF_ITERATOR) in O;
  return hasExt || SYMBOL_ITERATOR in O || has(Iterators, classof(O));
}
function getIterator(it){
  var Symbol  = global[SYMBOL]
    , ext     = it[Symbol && Symbol[ITERATOR] || FF_ITERATOR]
    , getIter = ext || it[SYMBOL_ITERATOR] || Iterators[classof(it)];
  return assertObject(getIter.call(it));
}
function stepCall(fn, value, entries){
  return entries ? invoke(fn, value) : fn(value);
}
function checkDangerIterClosing(fn){
  var danger = true;
  var O = {
    next: function(){ throw 1 },
    'return': function(){ danger = false }
  };
  O[SYMBOL_ITERATOR] = returnThis;
  try {
    fn(O);
  } catch(e){}
  return danger;
}
function closeIterator(iterator){
  var ret = iterator['return'];
  if(ret !== undefined)ret.call(iterator);
}
function safeIterClose(exec, iterator){
  try {
    exec(iterator);
  } catch(e){
    closeIterator(iterator);
    throw e;
  }
}
function forOf(iterable, entries, fn, that){
  safeIterClose(function(iterator){
    var f = ctx(fn, that, entries ? 2 : 1)
      , step;
    while(!(step = iterator.next()).done)if(stepCall(f, step.value, entries) === false){
      return closeIterator(iterator);
    }
  }, getIterator(iterable));
}

/******************************************************************************
 * Module : es6.symbol                                                        *
 ******************************************************************************/

// ECMAScript 6 symbols shim
!function(TAG, SymbolRegistry, AllSymbols, setter){
  // 19.4.1.1 Symbol([description])
  if(!isNative(Symbol)){
    Symbol = function(description){
      assert(!(this instanceof Symbol), SYMBOL + ' is not a ' + CONSTRUCTOR);
      var tag = uid(description)
        , sym = set(create(Symbol[PROTOTYPE]), TAG, tag);
      AllSymbols[tag] = sym;
      DESC && setter && defineProperty(ObjectProto, tag, {
        configurable: true,
        set: function(value){
          hidden(this, tag, value);
        }
      });
      return sym;
    }
    hidden(Symbol[PROTOTYPE], TO_STRING, function(){
      return this[TAG];
    });
  }
  $define(GLOBAL + WRAP, {Symbol: Symbol});
  
  var symbolStatics = {
    // 19.4.2.1 Symbol.for(key)
    'for': function(key){
      return has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = Symbol(key);
    },
    // 19.4.2.4 Symbol.iterator
    iterator: SYMBOL_ITERATOR || getWellKnownSymbol(ITERATOR),
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: part.call(keyOf, SymbolRegistry),
    // 19.4.2.10 Symbol.species
    species: SYMBOL_SPECIES,
    // 19.4.2.13 Symbol.toStringTag
    toStringTag: SYMBOL_TAG = getWellKnownSymbol(TO_STRING_TAG, true),
    // 19.4.2.14 Symbol.unscopables
    unscopables: SYMBOL_UNSCOPABLES,
    pure: safeSymbol,
    set: set,
    useSetter: function(){setter = true},
    useSimple: function(){setter = false}
  };
  // 19.4.2.2 Symbol.hasInstance
  // 19.4.2.3 Symbol.isConcatSpreadable
  // 19.4.2.6 Symbol.match
  // 19.4.2.8 Symbol.replace
  // 19.4.2.9 Symbol.search
  // 19.4.2.11 Symbol.split
  // 19.4.2.12 Symbol.toPrimitive
  forEach.call(array('hasInstance,isConcatSpreadable,match,replace,search,split,toPrimitive'),
    function(it){
      symbolStatics[it] = getWellKnownSymbol(it);
    }
  );
  $define(STATIC, SYMBOL, symbolStatics);
  
  setToStringTag(Symbol, SYMBOL);
  
  $define(STATIC + FORCED * !isNative(Symbol), OBJECT, {
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: function(it){
      var names = getNames(toObject(it)), result = [], key, i = 0;
      while(names.length > i)has(AllSymbols, key = names[i++]) || result.push(key);
      return result;
    },
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: function(it){
      var names = getNames(toObject(it)), result = [], key, i = 0;
      while(names.length > i)has(AllSymbols, key = names[i++]) && result.push(AllSymbols[key]);
      return result;
    }
  });
  
  // 20.2.1.9 Math[@@toStringTag]
  setToStringTag(Math, MATH, true);
  // 24.3.3 JSON[@@toStringTag]
  setToStringTag(global.JSON, 'JSON', true);
}(safeSymbol('tag'), {}, {}, true);

/******************************************************************************
 * Module : es6.object.statics                                                *
 ******************************************************************************/

!function(){
  var objectStatic = {
    // 19.1.3.1 Object.assign(target, source)
    assign: assign,
    // 19.1.3.10 Object.is(value1, value2)
    is: function(x, y){
      return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
    }
  };
  // 19.1.3.19 Object.setPrototypeOf(O, proto)
  // Works with __proto__ only. Old v8 can't works with null proto objects.
  '__proto__' in ObjectProto && function(buggy, set){
    try {
      set = ctx(call, getOwnDescriptor(ObjectProto, '__proto__').set, 2);
      set({}, ArrayProto);
    } catch(e){ buggy = true }
    objectStatic.setPrototypeOf = setPrototypeOf = setPrototypeOf || function(O, proto){
      assertObject(O);
      assert(proto === null || isObject(proto), proto, ": can't set as prototype!");
      if(buggy)O.__proto__ = proto;
      else set(O, proto);
      return O;
    }
  }();
  $define(STATIC, OBJECT, objectStatic);
}();

/******************************************************************************
 * Module : es6.object.prototype                                              *
 ******************************************************************************/

!function(tmp){
  // 19.1.3.6 Object.prototype.toString()
  tmp[SYMBOL_TAG] = DOT;
  if(cof(tmp) != DOT)hidden(ObjectProto, TO_STRING, function(){
    return '[object ' + classof(this) + ']';
  });
}({});

/******************************************************************************
 * Module : es6.object.statics-accept-primitives                              *
 ******************************************************************************/

!function(){
  // Object static methods accept primitives
  function wrapObjectMethod(key, MODE){
    var fn  = Object[key]
      , exp = core[OBJECT][key]
      , f   = 0
      , o   = {};
    if(!exp || isNative(exp)){
      o[key] = MODE == 1 ? function(it){
        return isObject(it) ? fn(it) : it;
      } : MODE == 2 ? function(it){
        return isObject(it) ? fn(it) : true;
      } : MODE == 3 ? function(it){
        return isObject(it) ? fn(it) : false;
      } : MODE == 4 ? function(it, key){
        return fn(toObject(it), key);
      } : function(it){
        return fn(toObject(it));
      };
      try { fn(DOT) }
      catch(e){ f = 1 }
      $define(STATIC + FORCED * f, OBJECT, o);
    }
  }
  wrapObjectMethod('freeze', 1);
  wrapObjectMethod('seal', 1);
  wrapObjectMethod('preventExtensions', 1);
  wrapObjectMethod('isFrozen', 2);
  wrapObjectMethod('isSealed', 2);
  wrapObjectMethod('isExtensible', 3);
  wrapObjectMethod('getOwnPropertyDescriptor', 4);
  wrapObjectMethod('getPrototypeOf');
  wrapObjectMethod('keys');
  wrapObjectMethod('getOwnPropertyNames');
}();

/******************************************************************************
 * Module : es6.function                                                      *
 ******************************************************************************/

!function(NAME){
  // 19.2.4.2 name
  NAME in FunctionProto || (DESC && defineProperty(FunctionProto, NAME, {
    configurable: true,
    get: function(){
      var match = String(this).match(/^\s*function ([^ (]*)/)
        , name  = match ? match[1] : '';
      has(this, NAME) || defineProperty(this, NAME, descriptor(5, name));
      return name;
    },
    set: function(value){
      has(this, NAME) || defineProperty(this, NAME, descriptor(0, value));
    }
  }));
}('name');

/******************************************************************************
 * Module : es6.number.constructor                                            *
 ******************************************************************************/

Number('0o1') && Number('0b1') || function(_Number, NumberProto){
  function toNumber(it){
    if(isObject(it))it = toPrimitive(it);
    if(typeof it == 'string' && it.length > 2 && it.charCodeAt(0) == 48){
      var binary = false;
      switch(it.charCodeAt(1)){
        case 66 : case 98  : binary = true;
        case 79 : case 111 : return parseInt(it.slice(2), binary ? 2 : 8);
      }
    } return +it;
  }
  function toPrimitive(it){
    var fn, val;
    if(isFunction(fn = it.valueOf) && !isObject(val = fn.call(it)))return val;
    if(isFunction(fn = it[TO_STRING]) && !isObject(val = fn.call(it)))return val;
    throw TypeError("Can't convert object to number");
  }
  Number = function Number(it){
    return this instanceof Number ? new _Number(toNumber(it)) : toNumber(it);
  }
  forEach.call(DESC ? getNames(_Number)
  : array('MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY'), function(key){
    key in Number || defineProperty(Number, key, getOwnDescriptor(_Number, key));
  });
  Number[PROTOTYPE] = NumberProto;
  NumberProto[CONSTRUCTOR] = Number;
  hidden(global, NUMBER, Number);
}(Number, Number[PROTOTYPE]);

/******************************************************************************
 * Module : es6.number.statics                                                *
 ******************************************************************************/

!function(isInteger){
  $define(STATIC, NUMBER, {
    // 20.1.2.1 Number.EPSILON
    EPSILON: pow(2, -52),
    // 20.1.2.2 Number.isFinite(number)
    isFinite: function(it){
      return typeof it == 'number' && isFinite(it);
    },
    // 20.1.2.3 Number.isInteger(number)
    isInteger: isInteger,
    // 20.1.2.4 Number.isNaN(number)
    isNaN: sameNaN,
    // 20.1.2.5 Number.isSafeInteger(number)
    isSafeInteger: function(number){
      return isInteger(number) && abs(number) <= MAX_SAFE_INTEGER;
    },
    // 20.1.2.6 Number.MAX_SAFE_INTEGER
    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
    // 20.1.2.10 Number.MIN_SAFE_INTEGER
    MIN_SAFE_INTEGER: -MAX_SAFE_INTEGER,
    // 20.1.2.12 Number.parseFloat(string)
    parseFloat: parseFloat,
    // 20.1.2.13 Number.parseInt(string, radix)
    parseInt: parseInt
  });
// 20.1.2.3 Number.isInteger(number)
}(Number.isInteger || function(it){
  return !isObject(it) && isFinite(it) && floor(it) === it;
});

/******************************************************************************
 * Module : es6.math                                                          *
 ******************************************************************************/

// ECMAScript 6 shim
!function(){
  // 20.2.2.28 Math.sign(x)
  var E    = Math.E
    , exp  = Math.exp
    , log  = Math.log
    , sqrt = Math.sqrt
    , sign = Math.sign || function(x){
        return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
      };
  
  // 20.2.2.5 Math.asinh(x)
  function asinh(x){
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log(x + sqrt(x * x + 1));
  }
  // 20.2.2.14 Math.expm1(x)
  function expm1(x){
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
  }
    
  $define(STATIC, MATH, {
    // 20.2.2.3 Math.acosh(x)
    acosh: function(x){
      return (x = +x) < 1 ? NaN : isFinite(x) ? log(x / E + sqrt(x + 1) * sqrt(x - 1) / E) + 1 : x;
    },
    // 20.2.2.5 Math.asinh(x)
    asinh: asinh,
    // 20.2.2.7 Math.atanh(x)
    atanh: function(x){
      return (x = +x) == 0 ? x : log((1 + x) / (1 - x)) / 2;
    },
    // 20.2.2.9 Math.cbrt(x)
    cbrt: function(x){
      return sign(x = +x) * pow(abs(x), 1 / 3);
    },
    // 20.2.2.11 Math.clz32(x)
    clz32: function(x){
      return (x >>>= 0) ? 32 - x[TO_STRING](2).length : 32;
    },
    // 20.2.2.12 Math.cosh(x)
    cosh: function(x){
      return (exp(x = +x) + exp(-x)) / 2;
    },
    // 20.2.2.14 Math.expm1(x)
    expm1: expm1,
    // 20.2.2.16 Math.fround(x)
    // TODO: fallback for IE9-
    fround: function(x){
      return new Float32Array([x])[0];
    },
    // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
    hypot: function(value1, value2){
      var sum  = 0
        , len1 = arguments.length
        , len2 = len1
        , args = Array(len1)
        , larg = -Infinity
        , arg;
      while(len1--){
        arg = args[len1] = +arguments[len1];
        if(arg == Infinity || arg == -Infinity)return Infinity;
        if(arg > larg)larg = arg;
      }
      larg = arg || 1;
      while(len2--)sum += pow(args[len2] / larg, 2);
      return larg * sqrt(sum);
    },
    // 20.2.2.18 Math.imul(x, y)
    imul: function(x, y){
      var UInt16 = 0xffff
        , xn = +x
        , yn = +y
        , xl = UInt16 & xn
        , yl = UInt16 & yn;
      return 0 | xl * yl + ((UInt16 & xn >>> 16) * yl + xl * (UInt16 & yn >>> 16) << 16 >>> 0);
    },
    // 20.2.2.20 Math.log1p(x)
    log1p: function(x){
      return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log(1 + x);
    },
    // 20.2.2.21 Math.log10(x)
    log10: function(x){
      return log(x) / Math.LN10;
    },
    // 20.2.2.22 Math.log2(x)
    log2: function(x){
      return log(x) / Math.LN2;
    },
    // 20.2.2.28 Math.sign(x)
    sign: sign,
    // 20.2.2.30 Math.sinh(x)
    sinh: function(x){
      return (abs(x = +x) < 1) ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (E / 2);
    },
    // 20.2.2.33 Math.tanh(x)
    tanh: function(x){
      var a = expm1(x = +x)
        , b = expm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    },
    // 20.2.2.34 Math.trunc(x)
    trunc: trunc
  });
}();

/******************************************************************************
 * Module : es6.string                                                        *
 ******************************************************************************/

!function(fromCharCode){
  function assertNotRegExp(it){
    if(cof(it) == REGEXP)throw TypeError();
  }
  
  $define(STATIC, STRING, {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function(x){
      var res = []
        , len = arguments.length
        , i   = 0
        , code
      while(len > i){
        code = +arguments[i++];
        if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000
          ? fromCharCode(code)
          : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
        );
      } return res.join('');
    },
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function(callSite){
      var raw = toObject(callSite.raw)
        , len = toLength(raw.length)
        , sln = arguments.length
        , res = []
        , i   = 0;
      while(len > i){
        res.push(String(raw[i++]));
        if(i < sln)res.push(String(arguments[i]));
      } return res.join('');
    }
  });
  
  $define(PROTO, STRING, {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: createPointAt(false),
    // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
    endsWith: function(searchString /*, endPosition = @length */){
      assertNotRegExp(searchString);
      var that = String(assertDefined(this))
        , endPosition = arguments[1]
        , len = toLength(that.length)
        , end = endPosition === undefined ? len : min(toLength(endPosition), len);
      searchString += '';
      return that.slice(end - searchString.length, end) === searchString;
    },
    // 21.1.3.7 String.prototype.includes(searchString, position = 0)
    includes: function(searchString /*, position = 0 */){
      assertNotRegExp(searchString);
      return !!~String(assertDefined(this)).indexOf(searchString, arguments[1]);
    },
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: function(count){
      var str = String(assertDefined(this))
        , res = ''
        , n   = toInteger(count);
      if(0 > n || n == Infinity)throw RangeError("Count can't be negative");
      for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
      return res;
    },
    // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
    startsWith: function(searchString /*, position = 0 */){
      assertNotRegExp(searchString);
      var that  = String(assertDefined(this))
        , index = toLength(min(arguments[1], that.length));
      searchString += '';
      return that.slice(index, index + searchString.length) === searchString;
    }
  });
}(String.fromCharCode);

/******************************************************************************
 * Module : es6.array.statics                                                 *
 ******************************************************************************/

!function(){
  $define(STATIC + FORCED * checkDangerIterClosing(Array.from), ARRAY, {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
      var O       = Object(assertDefined(arrayLike))
        , mapfn   = arguments[1]
        , mapping = mapfn !== undefined
        , f       = mapping ? ctx(mapfn, arguments[2], 2) : undefined
        , index   = 0
        , length, result, step;
      if(isIterable(O)){
        result = new (generic(this, Array));
        safeIterClose(function(iterator){
          for(; !(step = iterator.next()).done; index++){
            result[index] = mapping ? f(step.value, index) : step.value;
          }
        }, getIterator(O));
      } else {
        result = new (generic(this, Array))(length = toLength(O.length));
        for(; length > index; index++){
          result[index] = mapping ? f(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    }
  });
  
  $define(STATIC, ARRAY, {
    // 22.1.2.3 Array.of( ...items)
    of: function(/* ...args */){
      var index  = 0
        , length = arguments.length
        , result = new (generic(this, Array))(length);
      while(length > index)result[index] = arguments[index++];
      result.length = length;
      return result;
    }
  });
  
  setSpecies(Array);
}();

/******************************************************************************
 * Module : es6.array.prototype                                               *
 ******************************************************************************/

!function(){
  $define(PROTO, ARRAY, {
    // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
    copyWithin: function(target /* = 0 */, start /* = 0, end = @length */){
      var O     = Object(assertDefined(this))
        , len   = toLength(O.length)
        , to    = toIndex(target, len)
        , from  = toIndex(start, len)
        , end   = arguments[2]
        , fin   = end === undefined ? len : toIndex(end, len)
        , count = min(fin - from, len - to)
        , inc   = 1;
      if(from < to && to < from + count){
        inc  = -1;
        from = from + count - 1;
        to   = to + count - 1;
      }
      while(count-- > 0){
        if(from in O)O[to] = O[from];
        else delete O[to];
        to += inc;
        from += inc;
      } return O;
    },
    // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
    fill: function(value /*, start = 0, end = @length */){
      var O      = Object(assertDefined(this))
        , length = toLength(O.length)
        , index  = toIndex(arguments[1], length)
        , end    = arguments[2]
        , endPos = end === undefined ? length : toIndex(end, length);
      while(endPos > index)O[index++] = value;
      return O;
    },
    // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
    find: createArrayMethod(5),
    // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
    findIndex: createArrayMethod(6)
  });
  
  if(framework){
    // 22.1.3.31 Array.prototype[@@unscopables]
    forEach.call(array('find,findIndex,fill,copyWithin,entries,keys,values'), function(it){
      ArrayUnscopables[it] = true;
    });
    SYMBOL_UNSCOPABLES in ArrayProto || hidden(ArrayProto, SYMBOL_UNSCOPABLES, ArrayUnscopables);
  }
}();

/******************************************************************************
 * Module : es6.iterators                                                     *
 ******************************************************************************/

!function(at){
  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  defineStdIterators(Array, ARRAY, function(iterated, kind){
    set(this, ITER, {o: toObject(iterated), i: 0, k: kind});
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function(){
    var iter  = this[ITER]
      , O     = iter.o
      , kind  = iter.k
      , index = iter.i++;
    if(!O || index >= O.length){
      iter.o = undefined;
      return iterResult(1);
    }
    if(kind == KEY)  return iterResult(0, index);
    if(kind == VALUE)return iterResult(0, O[index]);
                     return iterResult(0, [index, O[index]]);
  }, VALUE);
  
  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators[ARGUMENTS] = Iterators[ARRAY];
  
  // 21.1.3.27 String.prototype[@@iterator]()
  defineStdIterators(String, STRING, function(iterated){
    set(this, ITER, {o: String(iterated), i: 0});
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function(){
    var iter  = this[ITER]
      , O     = iter.o
      , index = iter.i
      , point;
    if(index >= O.length)return iterResult(1);
    point = at.call(O, index);
    iter.i += point.length;
    return iterResult(0, point);
  });
}(createPointAt(true));

/******************************************************************************
 * Module : es6.regexp                                                        *
 ******************************************************************************/

DESC && !function(RegExpProto, _RegExp){  
  // RegExp allows a regex with flags as the pattern
  if(!function(){try{return RegExp(/a/g, 'i') == '/a/i'}catch(e){}}()){
    RegExp = function RegExp(pattern, flags){
      return new _RegExp(cof(pattern) == REGEXP && flags !== undefined
        ? pattern.source : pattern, flags);
    }
    forEach.call(getNames(_RegExp), function(key){
      key in RegExp || defineProperty(RegExp, key, {
        configurable: true,
        get: function(){ return _RegExp[key] },
        set: function(it){ _RegExp[key] = it }
      });
    });
    RegExpProto[CONSTRUCTOR] = RegExp;
    RegExp[PROTOTYPE] = RegExpProto;
    hidden(global, REGEXP, RegExp);
  }
  
  // 21.2.5.3 get RegExp.prototype.flags()
  if(/./g.flags != 'g')defineProperty(RegExpProto, 'flags', {
    configurable: true,
    get: createReplacer(/^.*\/(\w*)$/, '$1')
  });
  
  setSpecies(RegExp);
}(RegExp[PROTOTYPE], RegExp);

/******************************************************************************
 * Module : web.immediate                                                     *
 ******************************************************************************/

// setImmediate shim
// Node.js 0.9+ & IE10+ has setImmediate, else:
isFunction(setImmediate) && isFunction(clearImmediate) || function(ONREADYSTATECHANGE){
  var postMessage      = global.postMessage
    , addEventListener = global.addEventListener
    , MessageChannel   = global.MessageChannel
    , counter          = 0
    , queue            = {}
    , defer, channel, port;
  setImmediate = function(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(isFunction(fn) ? fn : Function(fn), args);
    }
    defer(counter);
    return counter;
  }
  clearImmediate = function(id){
    delete queue[id];
  }
  function run(id){
    if(has(queue, id)){
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  }
  function listner(event){
    run(event.data);
  }
  // Node.js 0.8-
  if(NODE){
    defer = function(id){
      nextTick(part.call(run, id));
    }
  // Modern browsers, skip implementation for WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is object
  } else if(addEventListener && isFunction(postMessage) && !global.importScripts){
    defer = function(id){
      postMessage(id, '*');
    }
    addEventListener('message', listner, false);
  // WebWorkers
  } else if(isFunction(MessageChannel)){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // IE8-
  } else if(document && ONREADYSTATECHANGE in document[CREATE_ELEMENT]('script')){
    defer = function(id){
      html.appendChild(document[CREATE_ELEMENT]('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run(id);
      }
    }
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(run, 0, id);
    }
  }
}('onreadystatechange');
$define(GLOBAL + BIND, {
  setImmediate:   setImmediate,
  clearImmediate: clearImmediate
});

/******************************************************************************
 * Module : es6.promise                                                       *
 ******************************************************************************/

// ES6 promises shim
// Based on https://github.com/getify/native-promise-only/
!function(Promise, test){
  isFunction(Promise) && isFunction(Promise.resolve)
  && Promise.resolve(test = new Promise(function(){})) == test
  || function(asap, RECORD){
    function isThenable(it){
      var then;
      if(isObject(it))then = it.then;
      return isFunction(then) ? then : false;
    }
    function handledRejectionOrHasOnRejected(promise){
      var record = promise[RECORD]
        , chain  = record.c
        , i      = 0
        , react;
      if(record.h)return true;
      while(chain.length > i){
        react = chain[i++];
        if(react.fail || handledRejectionOrHasOnRejected(react.P))return true;
      }
    }
    function notify(record, reject){
      var chain = record.c;
      if(reject || chain.length)asap(function(){
        var promise = record.p
          , value   = record.v
          , ok      = record.s == 1
          , i       = 0;
        if(reject && !handledRejectionOrHasOnRejected(promise)){
          setTimeout(function(){
            if(!handledRejectionOrHasOnRejected(promise)){
              if(NODE){
                if(!process.emit('unhandledRejection', value, promise)){
                  // default node.js behavior
                }
              } else if(isFunction(console.error)){
                console.error('Unhandled promise rejection', value);
              }
            }
          }, 1e3);
        } else while(chain.length > i)!function(react){
          var cb = ok ? react.ok : react.fail
            , ret, then;
          try {
            if(cb){
              if(!ok)record.h = true;
              ret = cb === true ? value : cb(value);
              if(ret === react.P){
                react.rej(TypeError(PROMISE + '-chain cycle'));
              } else if(then = isThenable(ret)){
                then.call(ret, react.res, react.rej);
              } else react.res(ret);
            } else react.rej(value);
          } catch(err){
            react.rej(err);
          }
        }(chain[i++]);
        chain.length = 0;
      });
    }
    function resolve(value){
      var record = this
        , then, wrapper;
      if(record.d)return;
      record.d = true;
      record = record.r || record; // unwrap
      try {
        if(then = isThenable(value)){
          wrapper = {r: record, d: false}; // wrap
          then.call(value, ctx(resolve, wrapper, 1), ctx(reject, wrapper, 1));
        } else {
          record.v = value;
          record.s = 1;
          notify(record);
        }
      } catch(err){
        reject.call(wrapper || {r: record, d: false}, err); // wrap
      }
    }
    function reject(value){
      var record = this;
      if(record.d)return;
      record.d = true;
      record = record.r || record; // unwrap
      record.v = value;
      record.s = 2;
      notify(record, true);
    }
    function getConstructor(C){
      var S = assertObject(C)[SYMBOL_SPECIES];
      return S != undefined ? S : C;
    }
    // 25.4.3.1 Promise(executor)
    Promise = function(executor){
      assertFunction(executor);
      assertInstance(this, Promise, PROMISE);
      var record = {
        p: this,      // promise
        c: [],        // chain
        s: 0,         // state
        d: false,     // done
        v: undefined, // value
        h: false      // handled rejection
      };
      hidden(this, RECORD, record);
      try {
        executor(ctx(resolve, record, 1), ctx(reject, record, 1));
      } catch(err){
        reject.call(record, err);
      }
    }
    assignHidden(Promise[PROTOTYPE], {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function(onFulfilled, onRejected){
        var S = assertObject(assertObject(this)[CONSTRUCTOR])[SYMBOL_SPECIES];
        var react = {
          ok:   isFunction(onFulfilled) ? onFulfilled : true,
          fail: isFunction(onRejected)  ? onRejected  : false
        } , P = react.P = new (S != undefined ? S : Promise)(function(resolve, reject){
          react.res = assertFunction(resolve);
          react.rej = assertFunction(reject);
        }), record = this[RECORD];
        record.c.push(react);
        record.s && notify(record);
        return P;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function(onRejected){
        return this.then(undefined, onRejected);
      }
    });
    assignHidden(Promise, {
      // 25.4.4.1 Promise.all(iterable)
      all: function(iterable){
        var Promise = getConstructor(this)
          , values  = [];
        return new Promise(function(resolve, reject){
          forOf(iterable, false, push, values);
          var remaining = values.length
            , results   = Array(remaining);
          if(remaining)forEach.call(values, function(promise, index){
            Promise.resolve(promise).then(function(value){
              results[index] = value;
              --remaining || resolve(results);
            }, reject);
          });
          else resolve(results);
        });
      },
      // 25.4.4.4 Promise.race(iterable)
      race: function(iterable){
        var Promise = getConstructor(this);
        return new Promise(function(resolve, reject){
          forOf(iterable, false, function(promise){
            Promise.resolve(promise).then(resolve, reject);
          });
        });
      },
      // 25.4.4.5 Promise.reject(r)
      reject: function(r){
        return new (getConstructor(this))(function(resolve, reject){
          reject(r);
        });
      },
      // 25.4.4.6 Promise.resolve(x)
      resolve: function(x){
        return isObject(x) && RECORD in x && getPrototypeOf(x) === this[PROTOTYPE]
          ? x : new (getConstructor(this))(function(resolve, reject){
            resolve(x);
          });
      }
    });
  }(nextTick || setImmediate, safeSymbol('record'));
  setToStringTag(Promise, PROMISE);
  setSpecies(Promise);
  $define(GLOBAL + FORCED * !isNative(Promise), {Promise: Promise});
}(global[PROMISE]);

/******************************************************************************
 * Module : es6.collections                                                   *
 ******************************************************************************/

// ECMAScript 6 collections shim
!function(){
  var UID   = safeSymbol('uid')
    , O1    = safeSymbol('O1')
    , WEAK  = safeSymbol('weak')
    , LEAK  = safeSymbol('leak')
    , LAST  = safeSymbol('last')
    , FIRST = safeSymbol('first')
    , SIZE  = DESC ? safeSymbol('size') : 'size'
    , uid   = 0
    , tmp   = {};
  
  function getCollection(C, NAME, methods, commonMethods, isMap, isWeak){
    var ADDER = isMap ? 'set' : 'add'
      , proto = C && C[PROTOTYPE]
      , O     = {};
    function initFromIterable(that, iterable){
      if(iterable != undefined)forOf(iterable, isMap, that[ADDER], that);
      return that;
    }
    function fixSVZ(key, chain){
      var method = proto[key];
      if(framework)proto[key] = function(a, b){
        var result = method.call(this, a === 0 ? 0 : a, b);
        return chain ? this : result;
      };
    }
    if(!isNative(C) || !(isWeak || (!BUGGY_ITERATORS && has(proto, FOR_EACH) && has(proto, 'entries')))){
      // create collection constructor
      C = isWeak
        ? function(iterable){
            assertInstance(this, C, NAME);
            set(this, UID, uid++);
            initFromIterable(this, iterable);
          }
        : function(iterable){
            var that = this;
            assertInstance(that, C, NAME);
            set(that, O1, create(null));
            set(that, SIZE, 0);
            set(that, LAST, undefined);
            set(that, FIRST, undefined);
            initFromIterable(that, iterable);
          };
      assignHidden(assignHidden(C[PROTOTYPE], methods), commonMethods);
      isWeak || !DESC || defineProperty(C[PROTOTYPE], 'size', {get: function(){
        return assertDefined(this[SIZE]);
      }});
    } else {
      var Native = C
        , inst   = new C
        , chain  = inst[ADDER](isWeak ? {} : -0, 1)
        , buggyZero;
      // wrap to init collections from iterable
      if(checkDangerIterClosing(function(O){ new C(O) })){
        C = function(iterable){
          assertInstance(this, C, NAME);
          return initFromIterable(new Native, iterable);
        }
        C[PROTOTYPE] = proto;
        if(framework)proto[CONSTRUCTOR] = C;
      }
      isWeak || inst[FOR_EACH](function(val, key){
        buggyZero = 1 / key === -Infinity;
      });
      // fix converting -0 key to +0
      if(buggyZero){
        fixSVZ('delete');
        fixSVZ('has');
        isMap && fixSVZ('get');
      }
      // + fix .add & .set for chaining
      if(buggyZero || chain !== inst)fixSVZ(ADDER, true);
    }
    setToStringTag(C, NAME);
    setSpecies(C);
    
    O[NAME] = C;
    $define(GLOBAL + WRAP + FORCED * !isNative(C), O);
    
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    isWeak || defineStdIterators(C, NAME, function(iterated, kind){
      set(this, ITER, {o: iterated, k: kind});
    }, function(){
      var iter  = this[ITER]
        , kind  = iter.k
        , entry = iter.l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!iter.o || !(iter.l = entry = entry ? entry.n : iter.o[FIRST])){
        // or finish the iteration
        iter.o = undefined;
        return iterResult(1);
      }
      // return step by kind
      if(kind == KEY)  return iterResult(0, entry.k);
      if(kind == VALUE)return iterResult(0, entry.v);
                       return iterResult(0, [entry.k, entry.v]);   
    }, isMap ? KEY+VALUE : VALUE, !isMap);
    
    return C;
  }
  
  function fastKey(it, create){
    // return primitive with prefix
    if(!isObject(it))return (typeof it == 'string' ? 'S' : 'P') + it;
    // can't set id to frozen object
    if(isFrozen(it))return 'F';
    if(!has(it, UID)){
      // not necessary to add id
      if(!create)return 'E';
      // add missing object id
      hidden(it, UID, ++uid);
    // return object id with prefix
    } return 'O' + it[UID];
  }
  function getEntry(that, key){
    // fast case
    var index = fastKey(key), entry;
    if(index != 'F')return that[O1][index];
    // frozen object case
    for(entry = that[FIRST]; entry; entry = entry.n){
      if(entry.k == key)return entry;
    }
  }
  function def(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry)entry.v = value;
    // create new entry
    else {
      that[LAST] = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that[LAST],          // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that[FIRST])that[FIRST] = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index != 'F')that[O1][index] = entry;
    } return that;
  }

  var collectionMethods = {
    // 23.1.3.1 Map.prototype.clear()
    // 23.2.3.2 Set.prototype.clear()
    clear: function(){
      for(var that = this, data = that[O1], entry = that[FIRST]; entry; entry = entry.n){
        entry.r = true;
        if(entry.p)entry.p = entry.p.n = undefined;
        delete data[entry.i];
      }
      that[FIRST] = that[LAST] = undefined;
      that[SIZE] = 0;
    },
    // 23.1.3.3 Map.prototype.delete(key)
    // 23.2.3.4 Set.prototype.delete(value)
    'delete': function(key){
      var that  = this
        , entry = getEntry(that, key);
      if(entry){
        var next = entry.n
          , prev = entry.p;
        delete that[O1][entry.i];
        entry.r = true;
        if(prev)prev.n = next;
        if(next)next.p = prev;
        if(that[FIRST] == entry)that[FIRST] = next;
        if(that[LAST] == entry)that[LAST] = prev;
        that[SIZE]--;
      } return !!entry;
    },
    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
    forEach: function(callbackfn /*, that = undefined */){
      var f = ctx(callbackfn, arguments[1], 3)
        , entry;
      while(entry = entry ? entry.n : this[FIRST]){
        f(entry.v, entry.k, this);
        // revert to the last existing entry
        while(entry && entry.r)entry = entry.p;
      }
    },
    // 23.1.3.7 Map.prototype.has(key)
    // 23.2.3.7 Set.prototype.has(value)
    has: function(key){
      return !!getEntry(this, key);
    }
  }
  
  // 23.1 Map Objects
  Map = getCollection(Map, MAP, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function(key){
      var entry = getEntry(this, key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function(key, value){
      return def(this, key === 0 ? 0 : key, value);
    }
  }, collectionMethods, true);
  
  // 23.2 Set Objects
  Set = getCollection(Set, SET, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function(value){
      return def(this, value = value === 0 ? 0 : value, value);
    }
  }, collectionMethods);
  
  function defWeak(that, key, value){
    if(isFrozen(assertObject(key)))leakStore(that).set(key, value);
    else {
      has(key, WEAK) || hidden(key, WEAK, {});
      key[WEAK][that[UID]] = value;
    } return that;
  }
  function leakStore(that){
    return that[LEAK] || hidden(that, LEAK, new Map)[LEAK];
  }
  
  var weakMethods = {
    // 23.3.3.2 WeakMap.prototype.delete(key)
    // 23.4.3.3 WeakSet.prototype.delete(value)
    'delete': function(key){
      if(!isObject(key))return false;
      if(isFrozen(key))return leakStore(this)['delete'](key);
      return has(key, WEAK) && has(key[WEAK], this[UID]) && delete key[WEAK][this[UID]];
    },
    // 23.3.3.4 WeakMap.prototype.has(key)
    // 23.4.3.4 WeakSet.prototype.has(value)
    has: function(key){
      if(!isObject(key))return false;
      if(isFrozen(key))return leakStore(this).has(key);
      return has(key, WEAK) && has(key[WEAK], this[UID]);
    }
  };
  
  // 23.3 WeakMap Objects
  WeakMap = getCollection(WeakMap, WEAKMAP, {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function(key){
      if(isObject(key)){
        if(isFrozen(key))return leakStore(this).get(key);
        if(has(key, WEAK))return key[WEAK][this[UID]];
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function(key, value){
      return defWeak(this, key, value);
    }
  }, weakMethods, true, true);
  
  // IE11 WeakMap frozen keys fix
  if(framework && new WeakMap().set(Object.freeze(tmp), 7).get(tmp) != 7){
    forEach.call(array('delete,has,get,set'), function(key){
      var method = WeakMap[PROTOTYPE][key];
      WeakMap[PROTOTYPE][key] = function(a, b){
        // store frozen objects on leaky map
        if(isObject(a) && isFrozen(a)){
          var result = leakStore(this)[key](a, b);
          return key == 'set' ? this : result;
        // store all the rest on native weakmap
        } return method.call(this, a, b);
      };
    });
  }
  
  // 23.4 WeakSet Objects
  WeakSet = getCollection(WeakSet, WEAKSET, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function(value){
      return defWeak(this, value, true);
    }
  }, weakMethods, false, true);
}();

/******************************************************************************
 * Module : es6.reflect                                                       *
 ******************************************************************************/

!function(){
  function Enumerate(iterated){
    var keys = [], key;
    for(key in iterated)keys.push(key);
    set(this, ITER, {o: iterated, a: keys, i: 0});
  }
  createIterator(Enumerate, OBJECT, function(){
    var iter = this[ITER]
      , keys = iter.a
      , key;
    do {
      if(iter.i >= keys.length)return iterResult(1);
    } while(!((key = keys[iter.i++]) in iter.o));
    return iterResult(0, key);
  });
  
  function wrap(fn){
    return function(it){
      assertObject(it);
      try {
        return fn.apply(undefined, arguments), true;
      } catch(e){
        return false;
      }
    }
  }
  
  function reflectGet(target, propertyKey/*, receiver*/){
    var receiver = arguments.length < 3 ? target : arguments[2]
      , desc = getOwnDescriptor(assertObject(target), propertyKey), proto;
    if(desc)return has(desc, 'value')
      ? desc.value
      : desc.get === undefined
        ? undefined
        : desc.get.call(receiver);
    return isObject(proto = getPrototypeOf(target))
      ? reflectGet(proto, propertyKey, receiver)
      : undefined;
  }
  function reflectSet(target, propertyKey, V/*, receiver*/){
    var receiver = arguments.length < 4 ? target : arguments[3]
      , ownDesc  = getOwnDescriptor(assertObject(target), propertyKey)
      , existingDescriptor, proto;
    if(!ownDesc){
      if(isObject(proto = getPrototypeOf(target))){
        return reflectSet(proto, propertyKey, V, receiver);
      }
      ownDesc = descriptor(0);
    }
    if(has(ownDesc, 'value')){
      if(ownDesc.writable === false || !isObject(receiver))return false;
      existingDescriptor = getOwnDescriptor(receiver, propertyKey) || descriptor(0);
      existingDescriptor.value = V;
      return defineProperty(receiver, propertyKey, existingDescriptor), true;
    }
    return ownDesc.set === undefined
      ? false
      : (ownDesc.set.call(receiver, V), true);
  }
  var isExtensible = Object.isExtensible || returnIt;
  
  var reflect = {
    // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
    apply: ctx(call, apply, 3),
    // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
    construct: function(target, argumentsList /*, newTarget*/){
      var proto    = assertFunction(arguments.length < 3 ? target : arguments[2])[PROTOTYPE]
        , instance = create(isObject(proto) ? proto : ObjectProto)
        , result   = apply.call(target, instance, argumentsList);
      return isObject(result) ? result : instance;
    },
    // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
    defineProperty: wrap(defineProperty),
    // 26.1.4 Reflect.deleteProperty(target, propertyKey)
    deleteProperty: function(target, propertyKey){
      var desc = getOwnDescriptor(assertObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    },
    // 26.1.5 Reflect.enumerate(target)
    enumerate: function(target){
      return new Enumerate(assertObject(target));
    },
    // 26.1.6 Reflect.get(target, propertyKey [, receiver])
    get: reflectGet,
    // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
    getOwnPropertyDescriptor: function(target, propertyKey){
      return getOwnDescriptor(assertObject(target), propertyKey);
    },
    // 26.1.8 Reflect.getPrototypeOf(target)
    getPrototypeOf: function(target){
      return getPrototypeOf(assertObject(target));
    },
    // 26.1.9 Reflect.has(target, propertyKey)
    has: function(target, propertyKey){
      return propertyKey in target;
    },
    // 26.1.10 Reflect.isExtensible(target)
    isExtensible: function(target){
      return !!isExtensible(assertObject(target));
    },
    // 26.1.11 Reflect.ownKeys(target)
    ownKeys: ownKeys,
    // 26.1.12 Reflect.preventExtensions(target)
    preventExtensions: wrap(Object.preventExtensions || returnIt),
    // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
    set: reflectSet
  }
  // 26.1.14 Reflect.setPrototypeOf(target, proto)
  if(setPrototypeOf)reflect.setPrototypeOf = function(target, proto){
    return setPrototypeOf(assertObject(target), proto), true;
  };
  
  $define(GLOBAL, {Reflect: {}});
  $define(STATIC, 'Reflect', reflect);
}();

/******************************************************************************
 * Module : es7.proposals                                                     *
 ******************************************************************************/

!function(){
  $define(PROTO, ARRAY, {
    // https://github.com/domenic/Array.prototype.includes
    includes: createArrayContains(true)
  });
  $define(PROTO, STRING, {
    // https://github.com/mathiasbynens/String.prototype.at
    at: createPointAt(true)
  });
  
  function createObjectToArray(isEntries){
    return function(object){
      var O      = toObject(object)
        , keys   = getKeys(object)
        , length = keys.length
        , i      = 0
        , result = Array(length)
        , key;
      if(isEntries)while(length > i)result[i] = [key = keys[i++], O[key]];
      else while(length > i)result[i] = O[keys[i++]];
      return result;
    }
  }
  $define(STATIC, OBJECT, {
    // https://gist.github.com/WebReflection/9353781
    getOwnPropertyDescriptors: function(object){
      var O      = toObject(object)
        , result = {};
      forEach.call(ownKeys(O), function(key){
        defineProperty(result, key, descriptor(0, getOwnDescriptor(O, key)));
      });
      return result;
    },
    // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-04/apr-9.md#51-objectentries-objectvalues
    values:  createObjectToArray(false),
    entries: createObjectToArray(true)
  });
  $define(STATIC, REGEXP, {
    // https://gist.github.com/kangax/9698100
    escape: createReplacer(/([\\\-[\]{}()*+?.,^$|])/g, '\\$1', true)
  });
}();

/******************************************************************************
 * Module : es7.abstract-refs                                                 *
 ******************************************************************************/

// https://github.com/zenparsing/es-abstract-refs
!function(REFERENCE){
  REFERENCE_GET = getWellKnownSymbol(REFERENCE+'Get', true);
  var REFERENCE_SET = getWellKnownSymbol(REFERENCE+SET, true)
    , REFERENCE_DELETE = getWellKnownSymbol(REFERENCE+'Delete', true);
  
  $define(STATIC, SYMBOL, {
    referenceGet: REFERENCE_GET,
    referenceSet: REFERENCE_SET,
    referenceDelete: REFERENCE_DELETE
  });
  
  hidden(FunctionProto, REFERENCE_GET, returnThis);
  
  function setMapMethods(Constructor){
    if(Constructor){
      var MapProto = Constructor[PROTOTYPE];
      hidden(MapProto, REFERENCE_GET, MapProto.get);
      hidden(MapProto, REFERENCE_SET, MapProto.set);
      hidden(MapProto, REFERENCE_DELETE, MapProto['delete']);
    }
  }
  setMapMethods(Map);
  setMapMethods(WeakMap);
}('reference');

/******************************************************************************
 * Module : js.array.statics                                                  *
 ******************************************************************************/

// JavaScript 1.6 / Strawman array statics shim
!function(arrayStatics){
  function setArrayStatics(keys, length){
    forEach.call(array(keys), function(key){
      if(key in ArrayProto)arrayStatics[key] = ctx(call, ArrayProto[key], length);
    });
  }
  setArrayStatics('pop,reverse,shift,keys,values,entries', 1);
  setArrayStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
  setArrayStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
                  'reduce,reduceRight,copyWithin,fill,turn');
  $define(STATIC, ARRAY, arrayStatics);
}({});

/******************************************************************************
 * Module : web.dom.itarable                                                  *
 ******************************************************************************/

!function(NodeList){
  if(framework && NodeList && !(SYMBOL_ITERATOR in NodeList[PROTOTYPE])){
    hidden(NodeList[PROTOTYPE], SYMBOL_ITERATOR, Iterators[ARRAY]);
  }
  Iterators.NodeList = Iterators[ARRAY];
}(global.NodeList);
}(typeof self != 'undefined' && self.Math === Math ? self : Function('return this')(), true);
},{}],3:[function(require,module,exports){
(function (global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol =
    typeof Symbol === "function" && Symbol.iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    return new Generator(innerFn, outerFn, self || null, tryLocsList || []);
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    return new Promise(function(resolve, reject) {
      var generator = wrap(innerFn, outerFn, self, tryLocsList);
      var callNext = step.bind(generator.next);
      var callThrow = step.bind(generator["throw"]);

      function step(arg) {
        var record = tryCatch(this, null, arg);
        if (record.type === "throw") {
          reject(record.arg);
          return;
        }

        var info = record.arg;
        if (info.done) {
          resolve(info.value);
        } else {
          Promise.resolve(info.value).then(callNext, callThrow);
        }
      }

      callNext();
    });
  };

  function Generator(innerFn, outerFn, self, tryLocsList) {
    var generator = outerFn ? Object.create(outerFn.prototype) : this;
    var context = new Context(tryLocsList);
    var state = GenStateSuspendedStart;

    function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;

            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedStart &&
              typeof arg !== "undefined") {
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            throw new TypeError(
              "attempt to send " + JSON.stringify(arg) + " to newborn generator"
            );
          }

          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            delete context.sent;
          }

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;

          if (method === "next") {
            context.dispatchException(record.arg);
          } else {
            arg = record.arg;
          }
        }
      }
    }

    generator.next = invoke.bind(generator, "next");
    generator["throw"] = invoke.bind(generator, "throw");
    generator["return"] = invoke.bind(generator, "return");

    return generator;
  }

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset();
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function() {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      // Pre-initialize at least 20 temporary variables to enable hidden
      // class optimizations for simple generators.
      for (var tempIndex = 0, tempName;
           hasOwn.call(this, tempName = "t" + tempIndex) || tempIndex < 20;
           ++tempIndex) {
        this[tempName] = null;
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg < finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          return this.complete(entry.completion, entry.afterLoc);
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window : this
);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItYmFiZWwvcnVudGltZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID1cbiAgICB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHJldHVybiBuZXcgR2VuZXJhdG9yKGlubmVyRm4sIG91dGVyRm4sIHNlbGYgfHwgbnVsbCwgdHJ5TG9jc0xpc3QgfHwgW10pO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuZXJhdG9yID0gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCk7XG4gICAgICB2YXIgY2FsbE5leHQgPSBzdGVwLmJpbmQoZ2VuZXJhdG9yLm5leHQpO1xuICAgICAgdmFyIGNhbGxUaHJvdyA9IHN0ZXAuYmluZChnZW5lcmF0b3JbXCJ0aHJvd1wiXSk7XG5cbiAgICAgIGZ1bmN0aW9uIHN0ZXAoYXJnKSB7XG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaCh0aGlzLCBudWxsLCBhcmcpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICByZXNvbHZlKGluZm8udmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZShpbmZvLnZhbHVlKS50aGVuKGNhbGxOZXh0LCBjYWxsVGhyb3cpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhbGxOZXh0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGdlbmVyYXRvciA9IG91dGVyRm4gPyBPYmplY3QuY3JlYXRlKG91dGVyRm4ucHJvdG90eXBlKSA6IHRoaXM7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCk7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSxcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yLFxuICAgICAgICAgICAgYXJnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTGlrZSByZXR1cm5pbmcgZ2VuZXJhdG9yLnRocm93KHVuY2F1Z2h0KSwgYnV0IHdpdGhvdXQgdGhlXG4gICAgICAgICAgICAvLyBvdmVyaGVhZCBvZiBhbiBleHRyYSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgJiZcbiAgICAgICAgICAgICAgdHlwZW9mIGFyZyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgXCJhdHRlbXB0IHRvIHNlbmQgXCIgKyBKU09OLnN0cmluZ2lmeShhcmcpICsgXCIgdG8gbmV3Ym9ybiBnZW5lcmF0b3JcIlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkWWllbGQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IGFyZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIGNvbnRleHQuc2VudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG5cbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihyZWNvcmQuYXJnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZW5lcmF0b3IubmV4dCA9IGludm9rZS5iaW5kKGdlbmVyYXRvciwgXCJuZXh0XCIpO1xuICAgIGdlbmVyYXRvcltcInRocm93XCJdID0gaW52b2tlLmJpbmQoZ2VuZXJhdG9yLCBcInRocm93XCIpO1xuICAgIGdlbmVyYXRvcltcInJldHVyblwiXSA9IGludm9rZS5iaW5kKGdlbmVyYXRvciwgXCJyZXR1cm5cIik7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCgpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIHRoaXMuc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICAvLyBQcmUtaW5pdGlhbGl6ZSBhdCBsZWFzdCAyMCB0ZW1wb3JhcnkgdmFyaWFibGVzIHRvIGVuYWJsZSBoaWRkZW5cbiAgICAgIC8vIGNsYXNzIG9wdGltaXphdGlvbnMgZm9yIHNpbXBsZSBnZW5lcmF0b3JzLlxuICAgICAgZm9yICh2YXIgdGVtcEluZGV4ID0gMCwgdGVtcE5hbWU7XG4gICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIHRlbXBOYW1lID0gXCJ0XCIgKyB0ZW1wSW5kZXgpIHx8IHRlbXBJbmRleCA8IDIwO1xuICAgICAgICAgICArK3RlbXBJbmRleCkge1xuICAgICAgICB0aGlzW3RlbXBOYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOiB0aGlzXG4pO1xuIl19
},{}],4:[function(require,module,exports){
var ReconnectingWebSocket = require("ReconnectingWebSocket");


(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.ScreenInvader = factory();
  }
}(this, function () {
  var API = function(uri) {
    this.socket = new ReconnectingWebSocket(uri);
    this.socket.onmessage = this.onMessage.bind(this);
    this.socket.onerror = this.onError.bind(this);
    this.socket.onopen = this.onOpen.bind(this);

    this.eventHandlers = {};
  };
  function waitForSocketConnection(socket, callback){
    setTimeout(
        function () {
            if (socket.readyState === 1) {
                if(callback != null){
                    callback();
                }
                return;

            } else {
                waitForSocketConnection(socket, callback);
            }

        }, 100); // wait 100 milisecond for the connection...
  }

  API.prototype = {
    onReceive: function(fn) {
      this.onReceiveCallback = fn;
    },
    onMessage: function(ev) {
      try {
      var update = JSON.parse(ev.data);
      console.log(ev.data)
      if (!Array.isArray(update)) {
        // initial full sync.
        this.state = update;
        this.state.events = {};
      } else {
        if (!this.state) { return; }

        if (update[0].startsWith('/')) {
          // update has the format key, operation, value here.
          var path = update[0].split('/');
          path.shift();
          if(update[1] == "W") {
            	if(update[2].charAt(0) == 'b') {
			update[2] = update[2] === "btrue" ? true : false
		} else if(update[2].charAt(0) == 'n') {
			if(update[2].indexOf(".") > -1)
                        	update[2] = parseFloat(update[2].substring(1));
			else
                                update[2] = parseInt(update[2].substring(1));
		} else if(update[2].charAt(0) == 's') {
			update[2] = update[2].substring(1);
		}
		//console.debug('changing ' + update[0] + ' from ' +
                //          this.getByPath(this.state, path.slice(0)) +
                //          ' to ' + update[2]);
		this.setByPath(this.state, path.slice(0), update[2]);
	
		var eventName = update[0];
		let eh = this.eventHandlers;
		Object.keys(eh).forEach(function(key) {
    			if (eventName.startsWith(key)) {
				var handlers = eh[key]   
				if (Array.isArray(handlers)) {
                        		handlers.forEach(function(handler) {
                                		handler(eventName, update[2]);
                        		});
   
 				}
			}
				
		});
          } else if(update[1] == "D") {
		this.deleteByPath(this.state, path.slice(0));
          }
        } else {
          // update has the following format: event, operation, value
          var eventName = update[0],
              params = update[2];
          var handlers = this.eventHandlers[eventName];
          if (Array.isArray(handlers)) {
            handlers.forEach(function(handler) {
              handler(params);
            });
          }
          return;
        }
      }}catch(error) {
      if (typeof(this.onReceiveCallback) !== 'undefined') {
        this.onReceiveCallback(ev.data);
      }
      }  
    },
    setByPath: function (obj, path, value) {
      if (path.length > 1) {
        key = path.shift();
        if(key.charAt(0) == '#') {
          //encountered an array element
          key = parseInt(key.substring(1));
        } else if(key == ".") {
          //encountered a directory element -> ignore
          return null;
        }

        if(obj[key] === undefined) {
          if(path.length >= 1 && path[0] == ".") {
            if(value.charAt(0) == 'A') {
              //create an array
              obj[key] = [];
              return null;
            } else {
              //create an object
              obj[key] = {};
              return null;
            }
          } else {
            obj[key] = "";
          }
        }
        return this.setByPath(obj[key], path, value);
      } else {
        key = path.shift();
        if(key == ".") {
          return null;
        }
        obj[key] = value;
      }
    },
    deleteByPath: function (obj, path) {
      if (path.length > 1) {
        key = path.shift();
        if(key.charAt(0) == '#') {
          key = parseInt(key.substring(1));
        }

        if(path[0] == ".") {
          if(Array.isArray(obj)) {
            if(obj.length < 2)
              obj = [];
            else
              obj.splice(key, 1);
          }
          else
            delete obj[key];

          return null;
        }

        return this.deleteByPath(obj[key], path);
      } else {
        key = path.shift();
        delete obj[key];
      }
    }, 
		getByPath: function(obj, path) {
      if (path.length > 0) {
        key = path.shift();
        if(key == ".") {
          return null;
        } else if (obj === undefined) {
          return null;
        }
        return this.getByPath(obj[key], path);
      }
    },
    subscribe: function(eventName, fn) {
      this.eventHandlers[eventName] = this.eventHandlers[eventName] || [];
      this.eventHandlers[eventName].push(fn);
    },
    onError: function(fn) {
      this.socket.onerror = fn;
    },
    onOpen: function(ev) {
      this.update();
      if(this.onready)
	this.onready();
    },
    onReady: function(fn) {
      this.onready = fn;
    },
    update: function() {
      this.socket.send('setup');
    },
    send: function(command, key, value) {
     let sock = this.socket;
     let argv = arguments;
      waitForSocketConnection(this.socket, function(){
        sock.send(
          JSON.stringify(
            Array.prototype.slice.call(
              argv)));
      });
    },
    publish: function(key, op, value) {
      if(value == null) {
	value = op;
	op = "W";
      }
	
      this.send('publish', key, op, value);
    },
    getState: function() {
      return this.state;
    }
};

  return API;
}));

},{"ReconnectingWebSocket":5}],5:[function(require,module,exports){
// MIT License:
//
// Copyright (c) 2010-2012, Joe Walnes
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

/**
 * This behaves like a WebSocket in every way, except if it fails to connect,
 * or it gets disconnected, it will repeatedly poll until it successfully connects
 * again.
 *
 * It is API compatible, so when you have:
 *   ws = new WebSocket('ws://....');
 * you can replace with:
 *   ws = new ReconnectingWebSocket('ws://....');
 *
 * The event stream will typically look like:
 *  onconnecting
 *  onopen
 *  onmessage
 *  onmessage
 *  onclose // lost connection
 *  onconnecting
 *  onopen  // sometime later...
 *  onmessage
 *  onmessage
 *  etc...
 *
 * It is API compatible with the standard WebSocket API, apart from the following members:
 *
 * - `bufferedAmount`
 * - `extensions`
 * - `binaryType`
 *
 * Latest version: https://github.com/joewalnes/reconnecting-websocket/
 * - Joe Walnes
 *
 * Syntax
 * ======
 * var socket = new ReconnectingWebSocket(url, protocols, options);
 *
 * Parameters
 * ==========
 * url - The url you are connecting to.
 * protocols - Optional string or array of protocols.
 * options - See below
 *
 * Options
 * =======
 * Options can either be passed upon instantiation or set after instantiation:
 *
 * var socket = new ReconnectingWebSocket(url, null, { debug: true, reconnectInterval: 4000 });
 *
 * or
 *
 * var socket = new ReconnectingWebSocket(url);
 * socket.debug = true;
 * socket.reconnectInterval = 4000;
 *
 * debug
 * - Whether this instance should log debug messages. Accepts true or false. Default: false.
 *
 * automaticOpen
 * - Whether or not the websocket should attempt to connect immediately upon instantiation. The socket can be manually opened or closed at any time using ws.open() and ws.close().
 *
 * reconnectInterval
 * - The number of milliseconds to delay before attempting to reconnect. Accepts integer. Default: 1000.
 *
 * maxReconnectInterval
 * - The maximum number of milliseconds to delay a reconnection attempt. Accepts integer. Default: 30000.
 *
 * reconnectDecay
 * - The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. Accepts integer or float. Default: 1.5.
 *
 * timeoutInterval
 * - The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. Accepts integer. Default: 2000.
 *
 */
(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports){
        module.exports = factory();
    } else {
        global.ReconnectingWebSocket = factory();
    }
})(this, function () {

    if (!('WebSocket' in window)) {
        return;
    }

    function ReconnectingWebSocket(url, protocols, options) {

        // Default settings
        var settings = {

            /** Whether this instance should log debug messages. */
            debug: false,

            /** Whether or not the websocket should attempt to connect immediately upon instantiation. */
            automaticOpen: true,

            /** The number of milliseconds to delay before attempting to reconnect. */
            reconnectInterval: 1000,
            /** The maximum number of milliseconds to delay a reconnection attempt. */
            maxReconnectInterval: 30000,
            /** The rate of increase of the reconnect delay. Allows reconnect attempts to back off when problems persist. */
            reconnectDecay: 1.5,

            /** The maximum time in milliseconds to wait for a connection to succeed before closing and retrying. */
            timeoutInterval: 2000,

            /** The maximum number of reconnection attempts to make. Unlimited if null. */
            maxReconnectAttempts: null,

            /** The binary type, possible values 'blob' or 'arraybuffer', default 'blob'. */
            binaryType: 'blob'
        }
        if (!options) { options = {}; }

        // Overwrite and define settings with options if they exist.
        for (var key in settings) {
            if (typeof options[key] !== 'undefined') {
                this[key] = options[key];
            } else {
                this[key] = settings[key];
            }
        }

        // These should be treated as read-only properties

        /** The URL as resolved by the constructor. This is always an absolute URL. Read only. */
        this.url = url;

        /** The number of attempted reconnects since starting, or the last successful connection. Read only. */
        this.reconnectAttempts = 0;

        /**
         * The current state of the connection.
         * Can be one of: WebSocket.CONNECTING, WebSocket.OPEN, WebSocket.CLOSING, WebSocket.CLOSED
         * Read only.
         */
        this.readyState = WebSocket.CONNECTING;

        /**
         * A string indicating the name of the sub-protocol the server selected; this will be one of
         * the strings specified in the protocols parameter when creating the WebSocket object.
         * Read only.
         */
        this.protocol = null;

        // Private state variables

        var self = this;
        var ws;
        var forcedClose = false;
        var timedOut = false;
        var eventTarget = document.createElement('div');

        // Wire up "on*" properties as event handlers

        eventTarget.addEventListener('open',       function(event) { self.onopen(event); });
        eventTarget.addEventListener('close',      function(event) { self.onclose(event); });
        eventTarget.addEventListener('connecting', function(event) { self.onconnecting(event); });
        eventTarget.addEventListener('message',    function(event) { self.onmessage(event); });
        eventTarget.addEventListener('error',      function(event) { self.onerror(event); });

        // Expose the API required by EventTarget

        this.addEventListener = eventTarget.addEventListener.bind(eventTarget);
        this.removeEventListener = eventTarget.removeEventListener.bind(eventTarget);
        this.dispatchEvent = eventTarget.dispatchEvent.bind(eventTarget);

        /**
         * This function generates an event that is compatible with standard
         * compliant browsers and IE9 - IE11
         *
         * This will prevent the error:
         * Object doesn't support this action
         *
         * http://stackoverflow.com/questions/19345392/why-arent-my-parameters-getting-passed-through-to-a-dispatched-event/19345563#19345563
         * @param s String The name that the event should use
         * @param args Object an optional object that the event will use
         */
        function generateEvent(s, args) {
        	var evt = document.createEvent("CustomEvent");
        	evt.initCustomEvent(s, false, false, args);
        	return evt;
        };

        this.open = function (reconnectAttempt) {
            ws = new WebSocket(self.url, protocols || []);
            ws.binaryType = this.binaryType;

            if (reconnectAttempt) {
                if (this.maxReconnectAttempts && this.reconnectAttempts > this.maxReconnectAttempts) {
                    return;
                }
            } else {
                eventTarget.dispatchEvent(generateEvent('connecting'));
                this.reconnectAttempts = 0;
            }

            if (self.debug || ReconnectingWebSocket.debugAll) {
                console.debug('ReconnectingWebSocket', 'attempt-connect', self.url);
            }

            var localWs = ws;
            var timeout = setTimeout(function() {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'connection-timeout', self.url);
                }
                timedOut = true;
                localWs.close();
                timedOut = false;
            }, self.timeoutInterval);

            ws.onopen = function(event) {
                clearTimeout(timeout);
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onopen', self.url);
                }
                self.protocol = ws.protocol;
                self.readyState = WebSocket.OPEN;
                self.reconnectAttempts = 0;
                var e = generateEvent('open');
                e.isReconnect = reconnectAttempt;
                reconnectAttempt = false;
                eventTarget.dispatchEvent(e);
            };

            ws.onclose = function(event) {
                clearTimeout(timeout);
                ws = null;
                if (forcedClose) {
                    self.readyState = WebSocket.CLOSED;
                    eventTarget.dispatchEvent(generateEvent('close'));
                } else {
                    self.readyState = WebSocket.CONNECTING;
                    var e = generateEvent('connecting');
                    e.code = event.code;
                    e.reason = event.reason;
                    e.wasClean = event.wasClean;
                    eventTarget.dispatchEvent(e);
                    if (!reconnectAttempt && !timedOut) {
                        if (self.debug || ReconnectingWebSocket.debugAll) {
                            console.debug('ReconnectingWebSocket', 'onclose', self.url);
                        }
                        eventTarget.dispatchEvent(generateEvent('close'));
                    }

                    var timeout = self.reconnectInterval * Math.pow(self.reconnectDecay, self.reconnectAttempts);
                    setTimeout(function() {
                        self.reconnectAttempts++;
                        self.open(true);
                    }, timeout > self.maxReconnectInterval ? self.maxReconnectInterval : timeout);
                }
            };
            ws.onmessage = function(event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onmessage', self.url, event.data);
                }
                var e = generateEvent('message');
                e.data = event.data;
                eventTarget.dispatchEvent(e);
            };
            ws.onerror = function(event) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'onerror', self.url, event);
                }
                eventTarget.dispatchEvent(generateEvent('error'));
            };
        }

        // Whether or not to create a websocket upon instantiation
        if (this.automaticOpen == true) {
            this.open(false);
        }

        /**
         * Transmits data to the server over the WebSocket connection.
         *
         * @param data a text string, ArrayBuffer or Blob to send to the server.
         */
        this.send = function(data) {
            if (ws) {
                if (self.debug || ReconnectingWebSocket.debugAll) {
                    console.debug('ReconnectingWebSocket', 'send', self.url, data);
                }
                return ws.send(data);
            } else {
                throw 'INVALID_STATE_ERR : Pausing to reconnect websocket';
            }
        };

        /**
         * Closes the WebSocket connection or connection attempt, if any.
         * If the connection is already CLOSED, this method does nothing.
         */
        this.close = function(code, reason) {
            // Default CLOSE_NORMAL code
            if (typeof code == 'undefined') {
                code = 1000;
            }
            forcedClose = true;
            if (ws) {
                ws.close(code, reason);
            }
        };

        /**
         * Additional public API method to refresh the connection if still open (close, re-open).
         * For example, if the app suspects bad data / missed heart beats, it can try to refresh.
         */
        this.refresh = function() {
            if (ws) {
                ws.close();
            }
        };
    }

    /**
     * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
     * this indicates that the connection is ready to send and receive data.
     */
    ReconnectingWebSocket.prototype.onopen = function(event) {};
    /** An event listener to be called when the WebSocket connection's readyState changes to CLOSED. */
    ReconnectingWebSocket.prototype.onclose = function(event) {};
    /** An event listener to be called when a connection begins being attempted. */
    ReconnectingWebSocket.prototype.onconnecting = function(event) {};
    /** An event listener to be called when a message is received from the server. */
    ReconnectingWebSocket.prototype.onmessage = function(event) {};
    /** An event listener to be called when an error occurs. */
    ReconnectingWebSocket.prototype.onerror = function(event) {};

    /**
     * Whether all instances of ReconnectingWebSocket should log debug messages.
     * Setting this to true is the equivalent of setting all instances of ReconnectingWebSocket.debug to true.
     */
    ReconnectingWebSocket.debugAll = false;

    ReconnectingWebSocket.CONNECTING = WebSocket.CONNECTING;
    ReconnectingWebSocket.OPEN = WebSocket.OPEN;
    ReconnectingWebSocket.CLOSING = WebSocket.CLOSING;
    ReconnectingWebSocket.CLOSED = WebSocket.CLOSED;

    return ReconnectingWebSocket;
});

},{}],6:[function(require,module,exports){
!function(t){"use strict";var e=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,o=t.Blob&&function(){try{return Boolean(new Blob)}catch(t){return!1}}(),n=o&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(t){return!1}}(),r=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,a=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,i=(o||r)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(t){var e,i,l,u,b,c,d,B,f;if(e=t.match(a),!e)throw new Error("invalid data URI");for(i=e[2]?e[1]:"text/plain"+(e[3]||";charset=US-ASCII"),l=!!e[4],u=t.slice(e[0].length),b=l?atob(u):decodeURIComponent(u),c=new ArrayBuffer(b.length),d=new Uint8Array(c),B=0;B<b.length;B+=1)d[B]=b.charCodeAt(B);return o?new Blob([n?d:c],{type:i}):(f=new r,f.append(c),f.getBlob(i))};t.HTMLCanvasElement&&!e.toBlob&&(e.mozGetAsFile?e.toBlob=function(t,o,n){t(n&&e.toDataURL&&i?i(this.toDataURL(o,n)):this.mozGetAsFile("blob",o))}:e.toDataURL&&i&&(e.toBlob=function(t,e,o){t(i(this.toDataURL(e,o)))})),"function"==typeof define&&define.amd?define(function(){return i}):"object"==typeof module&&module.exports?module.exports=i:t.dataURLtoBlob=i}(window);

},{}],7:[function(require,module,exports){
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
},{}],8:[function(require,module,exports){
"use strict";

module.exports = {
  socketUri: "wss://liebt-dich.org:8130"
};

},{}],9:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

require("../node_modules/babelify/node_modules/babel-core/browser-polyfill.js");

var API = _interopRequire(require("janosh.js"));

var config = _interopRequire(require("./config"));

var janosh = new API(config.socketUri);
//import JpegCameraSwf from '../node_modules/jpeg-camera/dist/jpeg_camera.swf';

require("../node_modules/jpeg-camera/dist/swfobject.min.js");

require("../node_modules/jpeg-camera/dist/canvas-to-blob.min.js");

var JpegCamera = _interopRequire(require("jpeg-camera-es6"));

function ArrayBufferToString(buffer) {
    return BinaryToString(String.fromCharCode.apply(null, Array.prototype.slice.apply(new Uint8Array(buffer))));
}

function BinaryToString(binary) {
    var error;

    try {
        return decodeURIComponent(escape(binary));
    } catch (_error) {
        error = _error;
        if (error instanceof URIError) {
            return binary;
        } else {
            throw error;
        }
    }
}

// we seem to need DOMContentLoaded here, because script tags,
// including our mustache templates aren't necessarily loaded
// on document.load().
document.addEventListener("DOMContentLoaded", function (ev) {
    // either HTML5 or Flash are available
    var theWebcam = null;
    var theContainer = document.getElementById("camera");
    var page = 0;
    var jc = new JpegCamera(theContainer, {
        onInit: function (webcam) {
            // here you can do some initialisation if required.
            // save the module reference so we can call it
            theWebcam = webcam;
        },
        onReady: function (specs) {},
        onError: function (err) {},
        onDebug: function (debug) {
            console.log(debug);
        },
        shutter: false,
        mirror: false,
        previewMirror: false });

    var snapbutton = document.getElementById("snapbtn");

    snapbutton.onclick = function (ev) {
        var snapshot = theWebcam.capture();
        snapshot.getBlob(function (blob) {
            var reader = new FileReader();
            reader.addEventListener("loadend", function () {
                // reader.result contains the contents of blob as a typed array
                var body = document.getElementById("body");
                var mainCanvas = document.createElement("canvas");
                mainCanvas.width = 200;
                mainCanvas.height = 200;
                var ctx = mainCanvas.getContext("2d");
                var strBlob = ArrayBufferToString(reader.result);
                var img = new Image();
                img.onload = function () {
                    ctx.drawImage(img, 0, 0, 200, 200);
                    janosh.publish("submit", "W", mainCanvas.toDataURL("image/jpeg"));
                };
                img.src = "data:image/jpeg;base64," + btoa(strBlob);
            });
            reader.readAsArrayBuffer(blob);
        });
    };

    function makeImage(base64) {
        var element = document.getElementById("images");
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }

        var element = document.getElementById("images");
        var div = document.createElement("div");
        div.style = "display: inline;";
        var img = document.createElement("img");
        var button = document.createElement("button");
        button.innerHTML = "X";
        button.style = "display: block;";
        div.appendChild(img);
        img.src = base64;
        img.style = "width:200px; height:200px;";
        element.appendChild(div);
    };

    janosh.subscribe("notify", function (value) {});

    janosh.onReceive(function (value) {
        if (value == "cheat") alert("Please don't cheat. Submit proper snapshots");else makeImage(value);
    });

    janosh.onError(function (error) {});
});
/* do something when there's an error */

},{"../node_modules/babelify/node_modules/babel-core/browser-polyfill.js":1,"../node_modules/jpeg-camera/dist/canvas-to-blob.min.js":6,"../node_modules/jpeg-camera/dist/swfobject.min.js":7,"./config":8,"janosh.js":4,"jpeg-camera-es6":10}],10:[function(require,module,exports){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JpegCamera"] = factory();
	else
		root["JpegCamera"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (self) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.getOwnPropertyNames(self.constructor.prototype)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			var val = self[key];

			if (key !== 'constructor' && typeof val === 'function') {
				self[key] = val.bind(self);
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return self;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addPrefixedStyle = exports.isCanvasSupported = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snapshot = __webpack_require__(5);

var _snapshot2 = _interopRequireDefault(_snapshot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isCanvasSupported = exports.isCanvasSupported = function isCanvasSupported() {
  return !!document.createElement('canvas').getContext;
};

// Helper for setting prefixed CSS declarations.
//
// @nodoc
// @private
var addPrefixedStyle = exports.addPrefixedStyle = function addPrefixedStyle(theElement, style, value) {
  var element = theElement;
  var uppercaseStyle = style.charAt(0).toUpperCase() + style.slice(1);
  element.style[style] = value;
  element.style['Webkit' + uppercaseStyle] = value;
  element.style['Moz' + uppercaseStyle] = value;
  element.style['ms' + uppercaseStyle] = value;
  element.style['O' + uppercaseStyle] = value;

  return element;
};

// Base class for JpegCamera implementations. Subclasses provide functionality
// defined by this API using different engines. On supported browsers HTML5
// implementation will be used, otherwise Flash will be used if available.

var JpegCameraBase = function () {
  _createClass(JpegCameraBase, [{
    key: 'canvasSupported',


    // Tells whether the browser supports `canvas` element and you can use
    // {Snapshot#getCanvas} method to display snapshots outside the camera
    // container.
    //
    // All browsers except Internet Explorer 8 and earlier support `canvas`
    // element.
    //
    // @return [Boolean] True if `canvas` is supported.


    // @nodoc
    // @private


    // @nodoc
    // @private


    // @nodoc
    // @private


    // @nodoc
    // @private
    value: function canvasSupported() {
      return isCanvasSupported();
    }

    // Construct new camera.
    //
    // JpegCamera will fill the entire container element. If the element's aspect
    // ratio is different than that of the camera stream (usually 4:3, but
    // sometimes 16:9) the stream will be clipped horizontally or vertically.
    //
    // To display the image on the client side the image might additionally get
    // resized to match container element, but the file sent to the server will
    // always be in camera's native resolution.
    //
    // By design the file sent to the server will only contain the area that was
    // visible to the user during capture. There is no way of sending unclipped,
    // full camera frame without showing the whole frame to the user.
    //
    // Resizing container after the camera has been initialized is not supported.
    //
    // Various options provided here can be overwritten when calling
    // {JpegCamera#capture capture} or {Snapshot#upload}.
    //
    // @param container [DOMElement, String] DOM element or element's ID.
    //
    // @option options swfUrl [String] URL to the SWF file that should be used
    //   for fallback if HTML5 cannot be used. '/jpeg_camera/jpeg_camera.swf' by
    //   default.
    // @option options shutterMp3Url [String] URL to the shutter mp3 sound file.
    //   Used by flash. '/jpeg_camera/shutter.mp3' by default.
    // @option options shutterOggUrl [String] URL to the shutter ogg sound file.
    //   Used by HTML5. '/jpeg_camera/shutter.ogg' by default.
    // @option options onReady [Function] Function to call when camera is ready.
    //   Inside the callback camera object can be accessed as `this`. This
    //   function will receive object with `videoWidth` and `videoHeight`
    //   properties as the first argument. These indicate camera's native
    //   resolution. See also {JpegCamera#ready}.
    // @option options onDebug [Function] This callback can be used to log various
    //   events and information that can be useful when debugging JpegCamera. Debug
    //   message will be passed as the first argument. Inside the callback camera
    //   object can be accessed as `this`. There is a default implementation of
    //   this callback that logs messages to window.console if available.
    // @option options resolution [Number] The horizontal resolution to ask camera for when
    //   initialising. Camera will be initialised at closest allowed horizontal resolution.
    // @option options quality [Float] Quality of the JPEG file that will be
    //   uploaded to the server. Should be between 0 and 1. 0.9 by default. Can be
    //   overwritten when calling {JpegCamera#capture capture}. _Cannot_ be
    //   overwritten at the time of upload.
    // @option options mirror [Boolean] The video stream and images displayed on
    //   the client side mimic a mirror, because that's how people are used to
    //   seeing themselves. By default images are uploaded to the server in their
    //   natural orientation - how the front facing camera sees the user.
    //   This option can be set to true to upload images the way the user sees
    //   them. Can be overwritten when calling {JpegCamera#capture capture}.
    //   _Cannot_ be overwritten at the time of upload.
    // @option options shutter [Boolean] Whether to play shutter sound when
    //   capturing snapshots. Can be overwritten when calling
    //   {JpegCamera#capture capture}.


    // @nodoc
    // @private


    // @nodoc
    // @private


    // @nodoc
    // @private


    // @nodoc
    // @private

    // @nodoc
    // @private

  }]);

  function JpegCameraBase(theContainer, options) {
    _classCallCheck(this, JpegCameraBase);

    this.defaultOptions = {
      shutterOggUrl: null,
      shutterMp3Url: null,
      swfUrl: null,
      onDebug: function onDebug(message) {
        // eslint-disable-next-line no-console
        if (console && console.log) {
          return console.log('JpegCamera: ' + message);
        }
        return null;
      },

      resolution: 3840,
      quality: 0.9,
      shutter: true,
      mirror: false,
      previewMirror: true,
      scale: 1.0,
      accessMessage: 'Please allow camera access when prompted by the browser.<br><br>' + 'Look for camera icon around your address bar.'
    };
    this.isReady = false;
    this.errorOccured = false;
    this.statsCaptureScale = 0.2;
    this.snapshots = {};
    this.displayedSnapshot = null;
    this.overlay = null;
    this.viewWidth = null;
    this.viewHeight = null;

    var container = theContainer;
    if (typeof container === 'string') {
      container = document.getElementById(container.replace('#', ''));
    }

    if (!container || !container.offsetWidth) {
      throw new Error('JpegCamera: invalid container');
    }

    container.innerHTML = '';
    this.viewWidth = parseInt(container.offsetWidth, 10);
    this.viewHeight = parseInt(container.offsetHeight, 10);

    this.container = document.createElement('div');
    this.container.style.width = '100%';
    this.container.style.height = '100%';
    this.container.style.position = 'relative';

    container.appendChild(this.container);

    this.options = Object.assign({}, this.defaultOptions, options);
  }

  _createClass(JpegCameraBase, [{
    key: 'resize',
    value: function resize(containerWidth, containerHeight) {
      this.viewWidth = parseInt(containerWidth, 10);
      this.viewHeight = parseInt(containerHeight, 10);
      this.resizePreview();
      return this;
    }

    // Bind callback for camera ready event.
    //
    // Replaces the callback set using __onReady__ option during initialization.
    //
    // If the event has already happened the argument will be called immediately.
    //
    // @param callback [Function] function to call when camera is ready. Camera
    //   object will be available as `this`. This function will receive object with
    //   `videoWidth` and `videoHeight` properties as the first argument. These
    //   indicate camera's native resolution.
    //
    // @return [JpegCameraBase] Self for chaining.

  }, {
    key: 'ready',
    value: function ready(callback) {
      this.options.onReady = callback;
      if (this.options.onReady && this.isReady) {
        this.options.onReady.call(this, {
          videoWidth: this.videoWidth,
          videoHeight: this.videoHeight
        });
      }
      return this;
    }

    // Peak into video stream and calculate pixel statistics.
    //
    // Can be useful to give the user hints about bad lighting. It uses full
    // capture area, but at much lower resolution. It's more efficient than taking
    // a regular capture and calling {Snapshot#getStats}.
    //
    // Because reading image data can take a while when Flash fallback is being
    // used this method does not return the data immediately. Instead it accepts
    // a callback that later will be called with a {Stats} instance as an argument.
    // The camera object will be available as `this`.
    //
    // @param callback [Function] Function to call when data is available. Camera
    //   object will be available as `this`, the {Stats} instance will be passed
    //   as the first argument.
    //
    // @return [void]

  }, {
    key: 'getStats',
    value: function getStats(callback) {
      var snapshot = new _snapshot2.default(this, {});

      this.engineCapture(snapshot, false, 0.1, this.statsCaptureScale);

      var that = this;
      return snapshot.getStats(function (stats) {
        return callback.call(that, stats);
      });
    }

    // Capture camera snapshot.
    //
    // All of the options can have their defaults set when constructing camera
    // object.
    //
    // @option options quality [Float] Quality of the JPEG file that will be
    //   uploaded to the server. Should be between 0 and 1. Defaults to 0.9 or
    //   whatever was set during camera initialization. _Cannot_ be
    //   overwritten at the time of upload.
    // @option options mirror [Boolean] The video stream and images displayed on
    //   the client side mimic a mirror, because that's how people are used to
    //   seeing themselves. By default images are uploaded to the server in their
    //   natural orientation - how the front facing camera sees the user.
    //   This option can be set to true to upload images the way the user sees
    //   them. _Cannot_ be overwritten at the time of upload.
    // @option options scale [Float] By default snapshots are captured and uploaded
    //   using highest possible resolution. Set this to a number less than 1.0 to
    //   get smaller snapshots.
    // @option options shutter [Boolean] Whether to play the shutter sound.
    //
    // @return [Snapshot] The snapshot that was taken.

  }, {
    key: 'capture',
    value: function capture(newOptions) {
      var options = Object.assign({}, this.options);
      if (newOptions) {
        options = Object.assign({}, options, newOptions);
      }
      var snapshot = new _snapshot2.default(this, options);
      this.snapshots[snapshot.id] = snapshot;

      if (options.shutter) {
        this.enginePlayShutterSound();
      }

      var scale = Math.min(1.0, options.scale);
      scale = Math.max(0.01, scale);

      this.engineCapture(snapshot, options.mirror, options.quality, scale);

      return snapshot;
    }

    // Hide currently displayed snapshot and show the video stream.
    //
    // @return [JpegCameraBase] Self for chaining.

  }, {
    key: 'showStream',
    value: function showStream() {
      this.engineShowStream();
      this.displayedSnapshot = null;
      return this;
    }

    // Discard all snapshots and show video stream.
    //
    // @return [JpegCameraBase] Self for chaining.

  }, {
    key: 'discardAll',
    value: function discardAll() {
      var _this = this;

      if (this.displayedSnapshot) {
        this.showStream();
      }
      Object.keys(this.spanshots).map(function (id) {
        var snapshot = _this.snapshots[id];
        _this.engineDiscard(snapshot);
        snapshot.discarded = true;
        return null;
      });
      this.snapshots = {};
      return this;
    }

    // Log debug messages
    //
    // @nodoc
    // @private

  }, {
    key: 'debug',
    value: function debug(message) {
      if (this.options.onDebug) {
        return this.options.onDebug.call(this, message);
      }
      return null;
    }

    // @nodoc
    // @private

  }, {
    key: 'display',
    value: function display(snapshot) {
      this.engineDisplay(snapshot);
      this.displayedSnapshot = snapshot;
      return this.displayedSnapshot;
    }

    // @nodoc
    // @private

  }, {
    key: 'discard',
    value: function discard(snapshot) {
      if (this.displayedSnapshot === snapshot) {
        this.showStream();
      }
      this.engineDiscard(snapshot);
      // eslint-disable-next-line no-param-reassign
      snapshot.discarded = true;
      return delete this.snapshots[snapshot.id];
    }

    // Called by the engine when camera is ready.
    //
    // @nodoc
    // @private

  }, {
    key: 'prepared',
    value: function prepared(videoWidth, videoHeight) {
      this.videoWidth = videoWidth;
      this.videoHeight = videoHeight;

      // XXX Since this method is called from inside the Flash object, we need to
      // return control to make flash object usable again.
      var that = this;
      return setTimeout(function () {
        return that.waitUntilStreamLooksOk(true);
      }, 1);
    }

    // This peaks into the video stream using very small rendering and calculates
    // colors mean value and standard deviation. If standard deviation is
    // negligible then we assume camera isn't ready yet and wait a little longer.
    //
    // @nodoc
    // @private

  }, {
    key: 'waitUntilStreamLooksOk',
    value: function waitUntilStreamLooksOk(showDebug) {
      var _this2 = this;

      return this.getStats(function (stats) {
        if (stats.std > 2) {
          _this2.debug('Stream mean gray value = ' + stats.mean + ' standard deviation = ' + stats.std);
          _this2.debug('Camera is ready');

          _this2.isReady = true;
          if (_this2.options.onReady) {
            return _this2.options.onReady.call(_this2, {
              videoWidth: _this2.videoWidth,
              videoHeight: _this2.videoHeight
            });
          }
        } else {
          if (showDebug) {
            _this2.debug('Stream mean gray value = ' + stats.mean + ' standard deviation = ' + stats.std);
          }
          var that = _this2;
          return setTimeout(function () {
            return that.waitUntilStreamLooksOk(false);
          }, 100);
        }

        return null;
      });
    }

    // Shows an overlay over the container to block mouse access.
    //
    // Prevents changing flash permission after camera has been enabled or stopping
    // the HTML5 video stream - both options available through context menu of
    // Flash object or <video> elements.
    //
    // @nodoc
    // @private

  }, {
    key: 'blockElementAccess',
    value: function blockElementAccess() {
      this.overlay = document.createElement('div');
      this.overlay.style.width = '100%';
      this.overlay.style.height = '100%';
      this.overlay.style.position = 'absolute';
      this.overlay.style.top = 0;
      this.overlay.style.left = 0;
      this.overlay.style.zIndex = 2;

      return this.container.appendChild(this.overlay);
    }
  }]);

  return JpegCameraBase;
}();

exports.default = JpegCameraBase;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
// Contains possible error states of the component.
// This object is thrown from component in case of problems.
//
var WebcamError = exports.WebcamError = function WebcamError(errorCode) {
  var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  _classCallCheck(this, WebcamError);

  this.error = errorCode;
  this.details = details;
};

var WebcamErrors = exports.WebcamErrors = {
  INCORRECT_INITIALISATION: 'INCORRECT_INITIALISATION',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR',
  GET_MEDIA_FAILED_INIT: 'GET_MEDIA_FAILED_INIT',
  FLASH_FAILED_LOADING: 'FLASH_FAILED_LOADING',
  FLASH_WINDOW_TOO_SMALL: 'FLASH_WINDOW_TOO_SMALL',
  CAMERA_NOT_READY: 'CAMERA_NOT_READY',
  GENERIC_ERROR: 'GENERIC_ERROR',
  NO_GET_MEDIA_NOR_FLASH_AVAILABLE: 'NO_GET_MEDIA_NOR_FLASH_AVAILABLE'
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jpeg_camera_html = __webpack_require__(4);

var _jpeg_camera_html2 = _interopRequireDefault(_jpeg_camera_html);

var _jpeg_camera_flash = __webpack_require__(7);

var _jpeg_camera_flash2 = _interopRequireDefault(_jpeg_camera_flash);

var _errors = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!navigator.getUserMedia) {
  navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
}
if (!window.AudioContext) {
  window.AudioContext = window.webkitAudioContext;
}

/**
 * @option options dontCheckFlash [Boolean] - if this option is set the engine will
 *   try the HTML5 version first and if this fails it will render the flash object
 *   without trying to determine if flash is installed and what version is it.
 *   This is required for Safari 10 which hides the fact of Flash being installed (but disabled
 *   by default). Rendering the Flash object will trigger confirmation dialog "Would you like
 *   to use Flash". WARNING - forcing render in such way means that the onError will never get
 *   executed in case the client disallow Flash to run.
 */

var JpegCamera = function JpegCamera(container, options) {
  var html5Init = function html5Init() {
    return new _jpeg_camera_html2.default(container, options);
  };
  var flashInit = function flashInit() {
    return new _jpeg_camera_flash2.default(container, options);
  };
  var initError = function initError() {
    throw new _errors.WebcamError(_errors.WebcamErrors.NO_GET_MEDIA_NOR_FLASH_AVAILABLE);
  };

  if (!options.onInit) {
    throw new _errors.WebcamError(_errors.WebcamErrors.INCORRECT_INITIALISATION);
  }

  _jpeg_camera_html2.default.engineCheck(
  /* success */function () {
    options.onInit(html5Init());
  },
  /* failure */function () {
    _jpeg_camera_flash2.default.engineCheck(
    /* success */function () {
      options.onInit(flashInit());
    },
    /* failure */function () {
      if (options.onError) options.onError(initError());
    });
  });
};

exports.default = JpegCamera;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _autoBind = __webpack_require__(0);

var _autoBind2 = _interopRequireDefault(_autoBind);

var _jpeg_camera = __webpack_require__(1);

var _jpeg_camera2 = _interopRequireDefault(_jpeg_camera);

var _errors = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canPlay = function canPlay(type) {
  var elem = document.createElement('video');
  return !!(elem.canPlayType && elem.canPlayType(type).replace(/no/, ''));
};

// JpegCamera implementation that uses _getUserMedia_ to capture snapshots,
// _canvas_element_ to display them and optionally _Web_Audio_API_ to play shutter sound.
//
// @private

var JpegCameraHtml5 = function (_JpegCameraBase) {
  _inherits(JpegCameraHtml5, _JpegCameraBase);

  function JpegCameraHtml5(theContainer, options) {
    _classCallCheck(this, JpegCameraHtml5);

    var _this = _possibleConstructorReturn(this, (JpegCameraHtml5.__proto__ || Object.getPrototypeOf(JpegCameraHtml5)).call(this, theContainer, options));

    _this.waitForVideoReadyTimer = null;

    _this.statusChecksCount = 0;
    _this.vorbisAudio = 'audio/ogg; codecs=vorbis';
    _this.mpegAudio = 'audio/mpeg; ';
    _this.message = null;
    _this.videoContainer = null;
    _this.stream = null;
    (0, _autoBind2.default)(_this);
    _this.engineInit();
    return _this;
  }

  _createClass(JpegCameraHtml5, [{
    key: 'destruct',
    value: function destruct() {
      this.waitForVideoReadyTimer = null;
      if (this.video) {
        this.video.pause();
        this.video.src = '';
      }
      if (this.stream) {
        this.stream.getVideoTracks().forEach(function (track) {
          track.stop();
        });
        this.stream.getAudioTracks().forEach(function (track) {
          track.stop();
        });
      }
    }
  }, {
    key: 'engineInit',
    value: function engineInit() {
      var _this2 = this;

      this.debug('Using HTML5 engine.');

      this.message = document.createElement('div');
      this.message.class = 'message';
      this.message.style.width = '100%';
      this.message.style.height = '100%';
      (0, _jpeg_camera.addPrefixedStyle)(this.message, 'boxSizing', 'border-box');
      this.message.style.overflow = 'hidden';
      this.message.style.textAlign = 'center';
      this.message.style.position = 'absolute';
      this.message.style.zIndex = 3;
      this.message.innerHTML = this.options.accessMessage;

      this.container.appendChild(this.message);

      this.videoContainer = document.createElement('div');
      this.videoContainer.style.overflow = 'hidden';
      this.videoContainer.style.position = 'absolute';
      this.videoContainer.style.zIndex = 1;

      this.container.appendChild(this.videoContainer);
      this.resizeVideoContainer();

      this.video = document.createElement('video');
      this.video.autoplay = true;
      if (this.options.previewMirror) (0, _jpeg_camera.addPrefixedStyle)(this.video, 'transform', 'scalex(-1.0)');

      if (window.AudioContext) {
        if (canPlay(this.vorbisAudio)) {
          this.loadShutterSound(this.options.shutterOggUrl);
        } else if (canPlay(this.mpegAudio)) {
          this.loadShutterSound(this.options.shutterMp3Url);
        }
      }

      var success = function success(stream) {
        _this2.removeMessage();
        _this2.stream = stream;

        if (window.URL) {
          try {
            _this2.video.srcObject = stream;
          } catch (error) {
            _this2.video.src = URL.createObjectURL(stream);
          }
        } else {
          _this2.video.src = stream;
        }

        _this2.blockElementAccess();

        return _this2.waitForVideoReady();
      };

      navigator.mediaDevices.getUserMedia({
        video: {
          width: {
            min: 640,
            ideal: this.options.resolution
          }
        },
        audio: false
      }).then(function (stream) {
        if (!_this2.stream) {
          var tracks = stream.getVideoTracks();
          var settings = tracks[0].getSettings();
          _this2.debug('Camera resolution ' + settings.width + 'x' + settings.height + 'px');
          success(stream);
        }
      }).catch(function (error) {
        _this2.message.innerHTML = '';
        throw new _errors.WebcamError(_errors.WebcamErrors.GET_MEDIA_FAILED_INIT, error);
      });
    }
  }, {
    key: 'resizePreview',
    value: function resizePreview() {
      this.resizeVideoContainer();
      this.resizeVideoBox();
    }
  }, {
    key: 'resizeVideoContainer',
    value: function resizeVideoContainer() {
      var verticalPadding = Math.floor(this.viewHeight * 0.2);
      var horizontalPadding = Math.floor(this.viewWidth * 0.2);
      this.message.style.paddingTop = verticalPadding + 'px';
      this.message.style.paddingBottom = verticalPadding + 'px';
      this.message.style.paddingLeft = horizontalPadding + 'px';
      this.message.style.paddingRight = horizontalPadding + 'px';
      this.videoContainer.style.width = this.viewWidth + 'px';
      this.videoContainer.style.height = this.viewHeight + 'px';
    }
  }, {
    key: 'enginePlayShutterSound',
    value: function enginePlayShutterSound() {
      if (!this.shutterBuffer) {
        return null;
      }

      var source = this.audioContext.createBufferSource();
      source.buffer = this.shutterBuffer;
      source.connect(this.audioContext.destination);
      return source.start(0);
    }
  }, {
    key: 'engineCapture',
    value: function engineCapture(theSnapshot, mirror, quality, scale) {
      var snapshot = theSnapshot;
      var crop = this.getCaptureCrop();

      var canvas = document.createElement('canvas');
      canvas.width = Math.round(crop.width * scale);
      canvas.height = Math.round(crop.height * scale);

      var context = canvas.getContext('2d');
      context.drawImage(this.video, crop.xOffset, crop.yOffset, crop.width, crop.height, 0, 0, Math.round(crop.width * scale), Math.round(crop.height * scale));

      snapshot.canvas = canvas;
      snapshot.mirror = mirror;
      snapshot.quality = quality;

      return snapshot;
    }
  }, {
    key: 'engineDisplay',
    value: function engineDisplay(snapshot) {
      if (this.displayedcanvas) {
        this.container.removeChild(this.displayedcanvas);
      }

      this.displayedcanvas = snapshot.canvas;
      this.displayedcanvas.style.width = this.viewWidth + 'px';
      this.displayedcanvas.style.height = this.viewHeight + 'px';
      this.displayedcanvas.style.top = 0;
      this.displayedcanvas.style.left = 0;
      this.displayedcanvas.style.position = 'absolute';
      this.displayedcanvas.style.zIndex = 2;
      if (this.options.previewMirror) (0, _jpeg_camera.addPrefixedStyle)(this.displayedcanvas, 'transform', 'scalex(-1.0)');

      return this.container.appendChild(this.displayedcanvas);
    }
  }, {
    key: 'engineGetcanvas',
    value: function engineGetcanvas(snapshot) {
      var canvas = document.createElement('canvas');
      canvas.width = snapshot.canvas.width;
      canvas.height = snapshot.canvas.height;
      var context = canvas.getContext('2d');
      context.drawImage(snapshot.canvas, 0, 0);
      return canvas;
    }
  }, {
    key: 'engineGetImageData',
    value: function engineGetImageData(snapshot) {
      var canvas = snapshot.canvas;
      var context = canvas.getContext('2d');
      return context.getImageData(0, 0, canvas.width, canvas.height);
    }
  }, {
    key: 'engineGetBlob',
    value: function engineGetBlob(snapshot, mime, mirror, quality, callback) {
      var canvas = void 0;
      if (mirror) {
        canvas = document.createElement('canvas');
        canvas.width = snapshot.canvas.width;
        canvas.height = snapshot.canvas.height;

        var context = canvas.getContext('2d');
        context.setTransform(1, 0, 0, 1, 0, 0); // reset transformation matrix
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        context.drawImage(snapshot.canvas, 0, 0);
      } else {
        canvas = snapshot.canvas;
      }

      return canvas.toBlob(function (blob) {
        return callback(blob);
      }, mime, quality);
    }
  }, {
    key: 'engineDiscard',
    value: function engineDiscard(snapshot) {
      // eslint-disable-next-line no-param-reassign
      return delete snapshot.canvas;
    }
  }, {
    key: 'engineShowStream',
    value: function engineShowStream() {
      if (this.displayedcanvas) {
        this.container.removeChild(this.displayedcanvas);
        this.displayedcanvas = null;
      }
      this.videoContainer.style.display = 'block';
      return null;
    }
  }, {
    key: 'removeMessage',
    value: function removeMessage() {
      this.message.style.display = 'none';
      return null;
    }
  }, {
    key: 'loadShutterSound',
    value: function loadShutterSound(url) {
      if (this.audioContext || !url) {
        return null;
      }

      this.audioContext = new AudioContext();

      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.responseType = 'arraybuffer';

      var that = this;
      request.onload = function () {
        return that.audioContext.decodeAudioData(request.response, function (buffer) {
          that.shutterBuffer = buffer;
        });
      };
      return request.send();
    }
  }, {
    key: 'waitForVideoReady',
    value: function waitForVideoReady() {
      var videoWidth = parseInt(this.video.videoWidth, 10);
      var videoHeight = parseInt(this.video.videoHeight, 10);

      if (videoWidth > 0 && videoHeight > 0) {
        this.videoContainer.appendChild(this.video);

        this.videoWidth = videoWidth;
        this.videoHeight = videoHeight;

        this.video.style.position = 'relative';
        this.resizeVideoBox();

        return this.prepared(this.videoWidth, this.videoHeight);
      } else if (this.statusChecksCount > 100) {
        throw new _errors.WebcamError(_errors.WebcamError.CAMERA_NOT_READY);
      }
      this.statusChecksCount++;
      var that = this;
      this.waitForVideoReadyTimer = setTimeout(function () {
        return that.waitForVideoReady();
      }, 100);
      return null;
    }
  }, {
    key: 'resizeVideoBox',
    value: function resizeVideoBox() {
      var crop = this.getVideoCrop();
      this.video.style.width = crop.width + 'px';
      this.video.style.height = crop.height + 'px';
      this.video.style.left = crop.xOffset + 'px';
      this.video.style.top = crop.yOffset + 'px';
    }
  }, {
    key: 'getVideoCrop',
    value: function getVideoCrop() {
      var videoScale = void 0;
      var videoRatio = this.videoWidth / this.videoHeight;
      var viewRatio = this.viewWidth / this.viewHeight;

      if (videoRatio >= viewRatio) {
        // fill height, crop width
        this.debug('Filling height');
        videoScale = this.viewHeight / this.videoHeight;
        var scaledVideoWidth = Math.round(this.videoWidth * videoScale);

        return {
          width: scaledVideoWidth,
          height: this.viewHeight,
          xOffset: -Math.floor((scaledVideoWidth - this.viewWidth) / 2.0),
          yOffset: 0
        };
      }
      // fill width, crop height
      this.debug('Filling width');
      videoScale = this.viewWidth / this.videoWidth;
      var scaledVideoHeight = Math.round(this.videoHeight * videoScale);

      return {
        width: this.viewWidth,
        height: scaledVideoHeight,
        xOffset: 0,
        yOffset: -Math.floor((scaledVideoHeight - this.viewHeight) / 2.0)
      };
    }
  }, {
    key: 'getCaptureCrop',
    value: function getCaptureCrop() {
      var videoRatio = this.videoWidth / this.videoHeight;
      var viewRatio = this.viewWidth / this.viewHeight;

      if (videoRatio >= viewRatio) {
        // take full height, crop width
        var snapshotWidth = Math.round(this.videoHeight * viewRatio);

        return {
          width: snapshotWidth,
          height: this.videoHeight,
          xOffset: Math.floor((this.videoWidth - snapshotWidth) / 2.0),
          yOffset: 0
        };
      }
      // take full width, crop height
      var snapshotHeight = Math.round(this.videoWidth / viewRatio);

      return {
        width: this.videoWidth,
        height: snapshotHeight,
        xOffset: 0,
        yOffset: Math.floor((this.videoHeight - snapshotHeight) / 2.0)
      };
    }
  }]);

  return JpegCameraHtml5;
}(_jpeg_camera2.default);

JpegCameraHtml5.engineCheck = function (success, failure) {
  var canvas = document.createElement('canvas');
  if (canvas.getContext && !canvas.toBlob) {
    failure('JpegCamera: Canvas-to-Blob is not loaded');
  }
  try {
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
      if (devices) {
        success();
      } else {
        failure();
      }
    }).catch(function () {
      failure();
    });
  } catch (err) {
    failure();
  }
};

exports.default = JpegCameraHtml5;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _autoBind = __webpack_require__(0);

var _autoBind2 = _interopRequireDefault(_autoBind);

var _stats = __webpack_require__(6);

var _stats2 = _interopRequireDefault(_stats);

var _jpeg_camera = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Snapshot taken using {JpegCamera}.
var Snapshot = function () {

  // @nodoc
  // @private


  // @nodoc
  // @private


  // @nodoc
  // @private


  // @nodoc
  // @private
  function Snapshot(camera, options) {
    _classCallCheck(this, Snapshot);

    this.nextSnapshotId = 1;
    this.discarded = false;
    this.extraCanvas = null;
    this.blob = null;
    this.blobMime = null;
    this.imageData = null;
    this.stats = null;
    this.getCanvasTimeout = null;
    this.getBlobTimeout = null;
    this.getImageDataTimeout = null;

    (0, _autoBind2.default)(this);
    this.camera = camera;
    this.options = options;
    this.id = this.nextSnapshotId++;
  }

  // Display the snapshot with the camera element it was taken with.
  //
  // @return [Snapshot] Self for chaining.


  // @nodoc
  // @private

  // @nodoc
  // @private


  // @nodoc
  // @private

  // Snapshot IDs are unique within browser session. This class variable holds
  // the value of the next ID to use.
  //
  // @nodoc
  // @private


  _createClass(Snapshot, [{
    key: 'show',
    value: function show() {
      if (this.discarded) {
        throw new Error('discarded snapshot cannot be used');
      }

      this.camera.display(this);
      return this;
    }

    // Stop displaying the snapshot and return to showing live camera stream.
    //
    // Ignored if camera is displaying different snapshot.
    //
    // @return [Snapshot] Self for chaining.

  }, {
    key: 'hide',
    value: function hide() {
      if (this.camera.displayedSnapshot() === this) {
        this.camera.showStream();
      }
      return this;
    }

    // Calculate snapshot pixel statistics (mean gray value, std).
    //
    // Because reading image data can take a while when Flash fallback is being
    // used this method does not return the data immediately. Instead it accepts
    // a callback that later will be called with a {Stats} object as an argument.
    // Snapshot will be available as `this`.
    //
    // @param callback [Function] Function to call when data is available. Snapshot
    //   object will be available as `this`, the {Stats} instance will be passed
    //   as the first argument.
    //
    // @return [void]

  }, {
    key: 'getStats',
    value: function getStats(callback) {
      var _this = this;

      if (this.discarded) {
        throw new Error('discarded snapshot cannot be used');
      }

      return this.getImageData(function (data) {
        return _this.calculateStats(data, callback);
      });
    }

    // Get canvas element showing the snapshot.
    //
    // This can be used to display the snapshot outside the camera's container.
    // You can show multiple snapshots at a time and allow the user to pick one
    // he likes best.
    //
    // Canvas produced by this method has a resolution of the snapshot (which
    // depends on the camera's native resolution), not that of the camera's
    // container. Use CSS to display this canvas in different sizes.
    //
    // Because reading image data can take a while when Flash fallback is being
    // used this method does not return the `canvas` element immediately. Instead
    // it accepts a callback that later will be called with the `canvas` element as
    // an argument. Snapshot will be available as `this`.
    //
    // Multiple calls to this method will yield the same canvas element.
    //
    // One caveat is that the underlaying data of this canvas is not mirrored like
    // the stream shown in the camera container. Special CSS transform directive
    // is applied on it so that it looks like the picture in the camera when
    // displayed. This only matters when manipulating the canvas or reading it's
    // data. You can read more about mirroring in {JpegCamera#capture}.
    //
    // This method doesn't work in Internet Explorer 8 or earlier, because it does
    // not support `canvas` element. Call {isCanvasSupported} to learn
    // whether you can use this method.
    //
    // @param callback [Function] Function to call when `canvas` element is
    //   available. Snapshot object will be available as `this`, the `canvas`
    //   element will be passed as the first argument.
    //
    // @return [Boolean] Whether canvas is supported in this browser.

  }, {
    key: 'getCanvas',
    value: function getCanvas(callback) {
      if (this.discarded) {
        throw new Error('discarded snapshot cannot be used');
      }

      if (!(0, _jpeg_camera.isCanvasSupported)()) {
        return false;
      }

      var that = this;
      this.getCanvasTimeout = setTimeout(function () {
        if (!that.extraCanvas) {
          that.extraCanvas = that.camera.engineGetCanvas(that);
        }
        (0, _jpeg_camera.addPrefixedStyle)(that.extraCanvas, 'transform', 'scalex(-1.0)');
        return callback.call(that, that.extraCanvas);
      }, 1);
      return true;
    }

    // Get the file that would be uploaded to the server as a Blob object.
    //
    // This can be useful if you want to stream the data via a websocket. Note that
    // using `upload` is more efficient if all you want to do is upload this file
    // to a server via POST call.
    //
    // This method doesn't work in Internet Explorer 8 or earlier, because it does
    // not support `canvas` element. Call {isCanvasSupported} to learn
    // whether you can use this method.
    //
    // Because preparing image blob can take a while this method does not return
    // the data immediately. Instead it accepts a callback that later will be
    // called with the data object as an argument. Snapshot will be available as
    // `this`.
    //
    // Multiple calls to this method will yield the same data object.
    //
    // @param callback [Function] Function to call when data is available. Snapshot
    //   object will be available as `this`, the blob object will be passed as the
    //   first argument.
    // @param mimeType [String] Mime type of the requested blob. "image/jpeg" by
    //   default.
    //
    // @return [Boolean] Whether canvas is supported in this browser.

  }, {
    key: 'getBlob',
    value: function getBlob(callback, mimeType) {
      var theMimeType = mimeType;
      if (theMimeType == null) {
        theMimeType = 'image/jpeg';
      }
      if (this.discarded) {
        throw new Error('discarded snapshot cannot be used');
      }

      if (!(0, _jpeg_camera.isCanvasSupported)()) {
        return false;
      }

      var that = this;
      this.getBlobTimeout = setTimeout(function () {
        if (that.blobMime !== theMimeType) {
          that.blob = null;
        }
        that.blobMime = theMimeType;
        if (that.blob) {
          return callback.call(that, that.blob);
        }
        var mirror = that.options.mirror;
        var quality = that.options.quality;

        return that.camera.engineGetBlob(that, theMimeType, mirror, quality, function (b) {
          that.blob = b;
          return callback.call(that, that.blob);
        });
      }, 1);
      return true;
    }

    // Get ImageData object containing color values for each pixel of the snapshot.
    //
    // Data produced by this method has a resolution of the snapshot (which depends
    // on the camera's native resolution), not that of the camera's container.
    //
    // Read more about ImageData object on [Mozilla's website
    // ](https://developer.mozilla.org/en-US/docs/Web/API/ImageData).
    //
    // Because reading image data can take a while when Flash fallback is being
    // used this method does not return the data immediately. Instead it accepts
    // a callback that later will be called with the data object as an argument.
    // Snapshot will be available as `this`.
    //
    // Multiple calls to this method will yield the same data object.
    //
    // One caveat is that the returned data is not mirrored like the stream shown
    // in the camera container. This only matters when manipulating the canvas or
    // reading it's data. You can read more about mirroring in
    // {JpegCamera#capture}.
    //
    // This method returns native [ImageData
    // ](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) object in all
    // browsers except Internet Explorer 8 or earlier which does not support
    // the `canvas` element. In that browser a generic JavaScript object will be
    // returned that mimics the native format. Call {isCanvasSupported}
    // to learn whether `canvas` is supported by the browser.
    //
    // @param callback [Function] Function to call when data is available. Snapshot
    //   object will be available as `this`, the data will be passed as the
    //   first argument.
    //
    // @return [void]

  }, {
    key: 'getImageData',
    value: function getImageData(callback) {
      if (this.discarded) {
        throw new Error('discarded snapshot cannot be used');
      }

      var that = this;
      this.getImageDataTimeout = setTimeout(function () {
        if (!that.imageData) {
          that.imageData = that.camera.engineGetImageData(that);
        }
        return callback.call(that, that.imageData);
      }, 1);

      return null;
    }

    // Hide and discard this snapshot.
    //
    // After discarding a snapshot an attempt to show or upload it will raise
    // an error.
    //
    // @return [void]

  }, {
    key: 'discard',
    value: function discard() {
      this.camera.discard(this);
      delete this.extraCanvas;
      delete this.imageData;
      delete this.blob;
    }

    // Snapshot options
    //
    // @nodoc
    // @private

  }, {
    key: 'options',
    value: function options() {
      return Object.assign({}, this.camera.options, this.options, this.uploadOptions);
    }

    // Calculate the snapshot pixel statistics given image data and call callback.
    //
    // @nodoc
    // @private

  }, {
    key: 'calculateStats',
    value: function calculateStats(data, callback) {
      if (!this.stats) {
        var gray = void 0;
        var n = data.width * data.height;
        var sum = 0.0;
        var grayValues = new Array(n);

        for (var i = 0, end = n; i < end; i++) {
          var index = i * 4;
          gray = 0.2126 * data.data[index + 0] + // red
          0.7152 * data.data[index + 1] + // green
          0.0722 * data.data[index + 2]; // blue
          gray = Math.round(gray);

          sum += gray;
          grayValues[i] = gray;
        }

        var mean = Math.round(sum / n);

        var sumOfSquareDistances = 0;
        grayValues.forEach(function (oneGray) {
          // eslint-disable-next-line no-restricted-properties
          sumOfSquareDistances += Math.pow(oneGray - mean, 2);
        });

        this.stats = new _stats2.default();
        this.stats.mean = mean;
        this.stats.std = Math.round(Math.sqrt(sumOfSquareDistances / n));
      }
      return callback.call(this, this.stats);
    }
  }]);

  return Snapshot;
}();

exports.default = Snapshot;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
// Contains some pixel statistics of {Snapshot} or camera stream.
//
// Can be retrieved using {JpegCamera#getStats} or {Snapshot#getStats} methods.
//
var Stats = function Stats() {
  _classCallCheck(this, Stats);

  this.mean = null;
  this.std = null;
}
// @property [Float] mean gray value of pixels (0-255)


// @property [Float] standard deviation of gray values
;

exports.default = Stats;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _autoBind = __webpack_require__(0);

var _autoBind2 = _interopRequireDefault(_autoBind);

var _jpeg_camera = __webpack_require__(1);

var _jpeg_camera2 = _interopRequireDefault(_jpeg_camera);

var _errors = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//
// JpegCamera implementation that uses Flash to capture and display snapshots.
//
// @private
var JpegCameraFlash = function (_JpegCameraBase) {
  _inherits(JpegCameraFlash, _JpegCameraBase);

  function JpegCameraFlash(theContainer, options) {
    _classCallCheck(this, JpegCameraFlash);

    var _this = _possibleConstructorReturn(this, (JpegCameraFlash.__proto__ || Object.getPrototypeOf(JpegCameraFlash)).call(this, theContainer, options));

    _this.waitForVideoReadyTimer = null;

    _this.instances = {};
    _this.nextId = 1;
    (0, _autoBind2.default)(_this);
    _this.engineInit();
    return _this;
  }

  _createClass(JpegCameraFlash, [{
    key: 'destruct',
    value: function destruct() {
      this.waitForVideoReadyTimer = null;
    }

    // Used by flash object to send message to our instance.

  }, {
    key: 'sendMessage',
    value: function sendMessage(id, method) {
      var _prototype$method;

      var instance = this.instances[parseInt(id, 10)];

      if (!instance) {
        return null;
      }

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      return (_prototype$method = this.prototype[method]).apply.apply(_prototype$method, [instance].concat(args));
    }
  }, {
    key: 'engineInit',
    value: function engineInit() {
      var _this2 = this;

      this.debug('Using Flash engine');

      // register our instance
      this.id = this.nextId++;
      this.instances[this.id] = this;

      var flashObjectId = 'flash_object_' + this.id;

      var params = {
        loop: 'false',
        allowScriptAccess: 'always',
        allowFullScreen: 'false',
        quality: 'best',
        wmode: 'opaque',
        menu: 'false'
      };
      var attributes = {
        id: flashObjectId,
        align: 'middle'
      };
      var flashvars = {
        id: this.id,
        width: this.viewWidth,
        height: this.viewHeight,
        shutter_url: this.options.shutterMp3Url ? this.options.shutterMp3Url : ''
      };
      var that = this;
      var callback = function callback(event) {
        if (!event.success) {
          throw new _errors.WebcamError(_errors.WebcamErrors.FLASH_FAILED_LOADING, event);
        }
        that.debug('Flash loaded.');
        that.flash = document.getElementById(flashObjectId);
        if (_this2.options.onReady) {
          _this2.waitForVideoReady();
        }
        return null;
      };

      var containerToBeReplaced = document.createElement('div');
      containerToBeReplaced.id = 'jpeg_cameraflash_' + this.id;
      containerToBeReplaced.style.width = '100%';
      containerToBeReplaced.style.height = '100%';
      if (this.options.previewMirror) {
        (0, _jpeg_camera.addPrefixedStyle)(containerToBeReplaced, 'transform', 'scalex(-1.0)');
      }

      this.container.appendChild(containerToBeReplaced);

      // eslint-disable-next-line no-undef
      swfobject.embedSWF(this.options.swfUrl, containerToBeReplaced.id, this.viewWidth, this.viewHeight, '0', null, flashvars, params, attributes, callback);
    }
  }, {
    key: 'waitForVideoReady',
    value: function waitForVideoReady() {
      try {
        // eslint-disable-next-line no-underscore-dangle
        if (this.flash._capture(1, false, 0.1, 1)) {
          return this.options.onReady.call(this, null);
        }
      } catch (e) {}
      // do nothing

      /*
      */
      var that = this;
      this.waitForVideoReadyTimer = setTimeout(function () {
        return that.waitForVideoReady();
      }, 500);
      return null;
    }
  }, {
    key: 'resizePreview',
    value: function resizePreview() {
      if (this.viewWidth < 215 || this.viewHeight < 138) {
        throw new _errors.WebcamError(_errors.WebcamErrors.FLASH_WINDOW_TOO_SMALL);
      }
      this.flash.parentNode.removeChild(this.flash);
      this.flash = null;
      this.engineInit();
      return this;
    }
  }, {
    key: 'enginePlayShutterSound',
    value: function enginePlayShutterSound() {
      // eslint-disable-next-line no-underscore-dangle
      return this.flash._play_shutter();
    }
  }, {
    key: 'engineCapture',
    value: function engineCapture(snapshot, mirror, quality, scale) {
      // eslint-disable-next-line no-underscore-dangle
      return this.flash._capture(snapshot.id, mirror, quality, scale);
    }
  }, {
    key: 'engineDisplay',
    value: function engineDisplay(snapshot) {
      // eslint-disable-next-line no-underscore-dangle
      return this.flash._display(snapshot.id);
    }
  }, {
    key: 'engineGetCanvas',
    value: function engineGetCanvas(snapshot) {
      // eslint-disable-next-line no-param-reassign
      if (!snapshot.imageData) {
        snapshot.imageData = this.engineGetImageData(snapshot);
      }
      var canvas = document.createElement('canvas');
      canvas.width = snapshot.imageData.width;
      canvas.height = snapshot.imageData.height;
      var context = canvas.getContext('2d');
      context.putImageData(snapshot.imageData, 0, 0);
      return canvas;
    }
  }, {
    key: 'engineGetImageData',
    value: function engineGetImageData(snapshot) {
      var result = void 0;
      // eslint-disable-next-line no-underscore-dangle
      var flashData = this.flash._get_image_data(snapshot.id);

      if ((0, _jpeg_camera.isCanvasSupported)()) {
        var canvas = document.createElement('canvas');
        canvas.width = flashData.width;
        canvas.height = flashData.height;
        var context = canvas.getContext('2d');
        result = context.createImageData(flashData.width, flashData.height);
      } else {
        result = {
          data: [],
          width: flashData.width,
          height: flashData.height
        };
      }

      for (var i = 0; i < flashData.data.length; i++) {
        var pixel = flashData.data[i];
        var index = i * 4;

        /* eslint-disable no-bitwise */
        var red = pixel >> 16 & 0xff;
        var green = pixel >> 8 & 0xff;
        var blue = pixel & 0xff;

        result.data[index + 0] = red;
        result.data[index + 1] = green;
        result.data[index + 2] = blue;
        result.data[index + 3] = 255;
      }
      return result;
    }
  }, {
    key: 'engineGetBlob',
    value: function engineGetBlob(snapshot, mime, mirror, quality, callback) {
      var canvas = void 0;
      // eslint-disable-next-line no-param-reassign
      if (!snapshot.extraCanvas) {
        snapshot.extraCanvas = this.engineGetCanvas(snapshot);
      }

      if (mirror) {
        canvas = document.createElement('canvas');
        canvas.width = snapshot.canvas.width;
        canvas.height = snapshot.canvas.height;

        var context = canvas.getContext('2d');
        context.setTransform(1, 0, 0, 1, 0, 0); // reset transformation matrix
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        context.drawImage(snapshot.extraCanvas, 0, 0);
      } else {
        canvas = snapshot.extraCanvas;
      }

      return canvas.toBlob(function (blob) {
        return callback(blob);
      }, mime, quality);
    }
  }, {
    key: 'engineDiscard',
    value: function engineDiscard(snapshot) {
      // eslint-disable-next-line no-underscore-dangle
      return this.flash._discard(snapshot.id);
    }
  }, {
    key: 'engineShowStream',
    value: function engineShowStream() {
      // eslint-disable-next-line no-underscore-dangle
      return this.flash._show_stream();
    }
  }, {
    key: 'flashPrepared',
    value: function flashPrepared(width, height) {
      this.blockElementAccess();

      // XXX steal focus from the flash object
      document.body.tabIndex = 0;
      document.body.focus();

      return this.prepared(width, height);
    }
  }]);

  return JpegCameraFlash;
}(_jpeg_camera2.default);

JpegCameraFlash.engineCheck = function (success, failure) {
  if (!window.swfobject) {
    failure('JpegCamera: SWFObject is not loaded.');
  }
  // TODO disabled until I figure out how to detect flash cross-browser way
  // if (!window.swfobject.hasFlashPlayerVersion('9')) {
  //   failure('No Flash in version 9 available.');
  // }
  success();
};

exports.default = JpegCameraFlash;

/***/ })
/******/ ]);
});
},{}]},{},[9])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9zaGltLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1iYWJlbC9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL2phbm9zaC5qcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9qYW5vc2guanMvbm9kZV9tb2R1bGVzL1JlY29ubmVjdGluZ1dlYlNvY2tldC9yZWNvbm5lY3Rpbmctd2Vic29ja2V0LmpzIiwibm9kZV9tb2R1bGVzL2pwZWctY2FtZXJhL2Rpc3QvY2FudmFzLXRvLWJsb2IubWluLmpzIiwibm9kZV9tb2R1bGVzL2pwZWctY2FtZXJhL2Rpc3Qvc3dmb2JqZWN0Lm1pbi5qcyIsIi9ob21lL2VsY2hhc2NoYWIvZGV2ZWwvU25hcFJvdWxldHRlSmFub3NoL3NyYy9jb25maWcuanMiLCIvaG9tZS9lbGNoYXNjaGFiL2RldmVsL1NuYXBSb3VsZXR0ZUphbm9zaC9zcmMvbWFpbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9qcGVnLWNhbWVyYS1lczYvZGlzdC9qcGVnX2NhbWVyYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDejdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdXQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOzs7O2lCQ0hlO0FBQ2IsV0FBUyxFQUFFLDJCQUEyQjtDQUN2Qzs7Ozs7OztRQ0ZNLHNFQUFzRTs7SUFFdEUsR0FBRywyQkFBTSxXQUFXOztJQUNwQixNQUFNLDJCQUFNLFVBQVU7O0FBRTdCLElBQUksTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7O1FBRWhDLG1EQUFtRDs7UUFDbkQsd0RBQXdEOztJQUV4RCxVQUFVLDJCQUFNLGlCQUFpQjs7QUFFeEMsU0FBUyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7QUFDakMsV0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUMvRzs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxNQUFNLEVBQUU7QUFDNUIsUUFBSSxLQUFLLENBQUM7O0FBRVYsUUFBSTtBQUNBLGVBQU8sa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDN0MsQ0FBQyxPQUFPLE1BQU0sRUFBRTtBQUNiLGFBQUssR0FBRyxNQUFNLENBQUM7QUFDZixZQUFJLEtBQUssWUFBWSxRQUFRLEVBQUU7QUFDM0IsbUJBQU8sTUFBTSxDQUFDO1NBQ2pCLE1BQU07QUFDSCxrQkFBTSxLQUFLLENBQUM7U0FDZjtLQUNKO0NBQ0o7Ozs7O0FBS0QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFVBQUEsRUFBRSxFQUFJOztBQUVwRCxRQUFJLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDckIsUUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUNwRCxRQUFJLElBQUksR0FBRyxDQUFDLENBQUE7QUFDWixRQUFJLEVBQUUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxZQUFZLEVBQUU7QUFDbEMsY0FBTSxFQUFFLFVBQUMsTUFBTSxFQUFLOzs7QUFHbEIscUJBQVMsR0FBRyxNQUFNLENBQUM7U0FDcEI7QUFDRCxlQUFPLEVBQUUsVUFBQyxLQUFLLEVBQUssRUFBSTtBQUN4QixlQUFPLEVBQUUsVUFBQyxHQUFHLEVBQUssRUFBNEM7QUFDOUQsZUFBTyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQUUsbUJBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FBRTtBQUMzQyxlQUFPLEVBQUUsS0FBSztBQUNkLGNBQU0sRUFBRSxLQUFLO0FBQ2IscUJBQWEsRUFBRSxLQUFLLEVBQ3JCLENBQUMsQ0FBQzs7QUFFSCxRQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztBQUVwRCxjQUFVLENBQUMsT0FBTyxHQUFHLFVBQVMsRUFBRSxFQUFFO0FBQ2pDLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNyQyxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQUksRUFBRTtBQUMvQixnQkFBSSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUM5QixrQkFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxZQUFXOztBQUU3QyxvQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxvQkFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6QywwQkFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDWCwwQkFBVSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDN0Msb0JBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsb0JBQUksT0FBTyxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNqRCxvQkFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUN0QixtQkFBRyxDQUFDLE1BQU0sR0FBRyxZQUFZO0FBQ3hCLHVCQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUNaLDBCQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxHQUFHLEVBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2lCQUNyRixDQUFBO0FBQ0QsbUJBQUcsQ0FBQyxHQUFHLEdBQUcseUJBQXlCLEdBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25ELENBQUMsQ0FBQztBQUNILGtCQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0IsQ0FBQyxDQUFBO0tBQ0EsQ0FBQzs7QUFFRixhQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUU7QUFDckIsWUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoRCxlQUFPLE9BQU8sQ0FBQyxVQUFVLEVBQUU7QUFDbkIsbUJBQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9DOztBQUVSLFlBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekMsWUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QyxXQUFHLENBQUMsS0FBSyxHQUFDLGtCQUFrQixDQUFDO0FBQzdCLFlBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsWUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5QyxjQUFNLENBQUMsU0FBUyxHQUFDLEdBQUcsQ0FBQztBQUNyQixjQUFNLENBQUMsS0FBSyxHQUFDLGlCQUFpQixDQUFDO0FBQy9CLFdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsV0FBRyxDQUFDLEdBQUcsR0FBQyxNQUFNLENBQUM7QUFDZixXQUFHLENBQUMsS0FBSyxHQUFDLDRCQUE0QixDQUFDO0FBQ3ZDLGVBQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDOUIsQ0FBQzs7QUFFRixVQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUssRUFBSyxFQUNyQyxDQUFDLENBQUE7O0FBRUYsVUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUssRUFBSztBQUM3QixZQUFHLEtBQUssSUFBSSxPQUFPLEVBQ2xCLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDLEtBRXJELFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQixDQUFDLENBQUM7O0FBRUgsVUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBSyxFQUN6QixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUM7Ozs7QUM3R0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pKHsxOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXsoZnVuY3Rpb24oZ2xvYmFsKXtcInVzZSBzdHJpY3RcIjtpZihnbG9iYWwuX2JhYmVsUG9seWZpbGwpe3Rocm93IG5ldyBFcnJvcihcIm9ubHkgb25lIGluc3RhbmNlIG9mIGJhYmVsL3BvbHlmaWxsIGlzIGFsbG93ZWRcIil9Z2xvYmFsLl9iYWJlbFBvbHlmaWxsPXRydWU7cmVxdWlyZShcImNvcmUtanMvc2hpbVwiKTtyZXF1aXJlKFwicmVnZW5lcmF0b3ItYmFiZWwvcnVudGltZVwiKX0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIj9nbG9iYWw6dHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiP3NlbGY6dHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCI/d2luZG93Ont9KX0se1wiY29yZS1qcy9zaGltXCI6MixcInJlZ2VuZXJhdG9yLWJhYmVsL3J1bnRpbWVcIjozfV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7IWZ1bmN0aW9uKGdsb2JhbCxmcmFtZXdvcmssdW5kZWZpbmVkKXtcInVzZSBzdHJpY3RcIjt2YXIgT0JKRUNUPVwiT2JqZWN0XCIsRlVOQ1RJT049XCJGdW5jdGlvblwiLEFSUkFZPVwiQXJyYXlcIixTVFJJTkc9XCJTdHJpbmdcIixOVU1CRVI9XCJOdW1iZXJcIixSRUdFWFA9XCJSZWdFeHBcIixEQVRFPVwiRGF0ZVwiLE1BUD1cIk1hcFwiLFNFVD1cIlNldFwiLFdFQUtNQVA9XCJXZWFrTWFwXCIsV0VBS1NFVD1cIldlYWtTZXRcIixTWU1CT0w9XCJTeW1ib2xcIixQUk9NSVNFPVwiUHJvbWlzZVwiLE1BVEg9XCJNYXRoXCIsQVJHVU1FTlRTPVwiQXJndW1lbnRzXCIsUFJPVE9UWVBFPVwicHJvdG90eXBlXCIsQ09OU1RSVUNUT1I9XCJjb25zdHJ1Y3RvclwiLFRPX1NUUklORz1cInRvU3RyaW5nXCIsVE9fU1RSSU5HX1RBRz1UT19TVFJJTkcrXCJUYWdcIixUT19MT0NBTEU9XCJ0b0xvY2FsZVN0cmluZ1wiLEhBU19PV049XCJoYXNPd25Qcm9wZXJ0eVwiLEZPUl9FQUNIPVwiZm9yRWFjaFwiLElURVJBVE9SPVwiaXRlcmF0b3JcIixGRl9JVEVSQVRPUj1cIkBAXCIrSVRFUkFUT1IsUFJPQ0VTUz1cInByb2Nlc3NcIixDUkVBVEVfRUxFTUVOVD1cImNyZWF0ZUVsZW1lbnRcIixGdW5jdGlvbj1nbG9iYWxbRlVOQ1RJT05dLE9iamVjdD1nbG9iYWxbT0JKRUNUXSxBcnJheT1nbG9iYWxbQVJSQVldLFN0cmluZz1nbG9iYWxbU1RSSU5HXSxOdW1iZXI9Z2xvYmFsW05VTUJFUl0sUmVnRXhwPWdsb2JhbFtSRUdFWFBdLERhdGU9Z2xvYmFsW0RBVEVdLE1hcD1nbG9iYWxbTUFQXSxTZXQ9Z2xvYmFsW1NFVF0sV2Vha01hcD1nbG9iYWxbV0VBS01BUF0sV2Vha1NldD1nbG9iYWxbV0VBS1NFVF0sU3ltYm9sPWdsb2JhbFtTWU1CT0xdLE1hdGg9Z2xvYmFsW01BVEhdLFR5cGVFcnJvcj1nbG9iYWwuVHlwZUVycm9yLFJhbmdlRXJyb3I9Z2xvYmFsLlJhbmdlRXJyb3Isc2V0VGltZW91dD1nbG9iYWwuc2V0VGltZW91dCxzZXRJbW1lZGlhdGU9Z2xvYmFsLnNldEltbWVkaWF0ZSxjbGVhckltbWVkaWF0ZT1nbG9iYWwuY2xlYXJJbW1lZGlhdGUscGFyc2VJbnQ9Z2xvYmFsLnBhcnNlSW50LGlzRmluaXRlPWdsb2JhbC5pc0Zpbml0ZSxwcm9jZXNzPWdsb2JhbFtQUk9DRVNTXSxuZXh0VGljaz1wcm9jZXNzJiZwcm9jZXNzLm5leHRUaWNrLGRvY3VtZW50PWdsb2JhbC5kb2N1bWVudCxodG1sPWRvY3VtZW50JiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsbmF2aWdhdG9yPWdsb2JhbC5uYXZpZ2F0b3IsZGVmaW5lPWdsb2JhbC5kZWZpbmUsY29uc29sZT1nbG9iYWwuY29uc29sZXx8e30sQXJyYXlQcm90bz1BcnJheVtQUk9UT1RZUEVdLE9iamVjdFByb3RvPU9iamVjdFtQUk9UT1RZUEVdLEZ1bmN0aW9uUHJvdG89RnVuY3Rpb25bUFJPVE9UWVBFXSxJbmZpbml0eT0xLzAsRE9UPVwiLlwiO2Z1bmN0aW9uIGlzT2JqZWN0KGl0KXtyZXR1cm4gaXQhPT1udWxsJiYodHlwZW9mIGl0PT1cIm9iamVjdFwifHx0eXBlb2YgaXQ9PVwiZnVuY3Rpb25cIil9ZnVuY3Rpb24gaXNGdW5jdGlvbihpdCl7cmV0dXJuIHR5cGVvZiBpdD09XCJmdW5jdGlvblwifXZhciBpc05hdGl2ZT1jdHgoLy4vLnRlc3QsL1xcW25hdGl2ZSBjb2RlXFxdXFxzKlxcfVxccyokLywxKTt2YXIgdG9TdHJpbmc9T2JqZWN0UHJvdG9bVE9fU1RSSU5HXTtmdW5jdGlvbiBzZXRUb1N0cmluZ1RhZyhpdCx0YWcsc3RhdCl7aWYoaXQmJiFoYXMoaXQ9c3RhdD9pdDppdFtQUk9UT1RZUEVdLFNZTUJPTF9UQUcpKWhpZGRlbihpdCxTWU1CT0xfVEFHLHRhZyl9ZnVuY3Rpb24gY29mKGl0KXtyZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwtMSl9ZnVuY3Rpb24gY2xhc3NvZihpdCl7dmFyIE8sVDtyZXR1cm4gaXQ9PXVuZGVmaW5lZD9pdD09PXVuZGVmaW5lZD9cIlVuZGVmaW5lZFwiOlwiTnVsbFwiOnR5cGVvZihUPShPPU9iamVjdChpdCkpW1NZTUJPTF9UQUddKT09XCJzdHJpbmdcIj9UOmNvZihPKX12YXIgY2FsbD1GdW5jdGlvblByb3RvLmNhbGwsYXBwbHk9RnVuY3Rpb25Qcm90by5hcHBseSxSRUZFUkVOQ0VfR0VUO2Z1bmN0aW9uIHBhcnQoKXt2YXIgZm49YXNzZXJ0RnVuY3Rpb24odGhpcyksbGVuZ3RoPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1BcnJheShsZW5ndGgpLGk9MCxfPXBhdGguXyxob2xkZXI9ZmFsc2U7d2hpbGUobGVuZ3RoPmkpaWYoKGFyZ3NbaV09YXJndW1lbnRzW2krK10pPT09Xylob2xkZXI9dHJ1ZTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzLF9sZW5ndGg9YXJndW1lbnRzLmxlbmd0aCxpPTAsaj0wLF9hcmdzO2lmKCFob2xkZXImJiFfbGVuZ3RoKXJldHVybiBpbnZva2UoZm4sYXJncyx0aGF0KTtfYXJncz1hcmdzLnNsaWNlKCk7aWYoaG9sZGVyKWZvcig7bGVuZ3RoPmk7aSsrKWlmKF9hcmdzW2ldPT09XylfYXJnc1tpXT1hcmd1bWVudHNbaisrXTt3aGlsZShfbGVuZ3RoPmopX2FyZ3MucHVzaChhcmd1bWVudHNbaisrXSk7cmV0dXJuIGludm9rZShmbixfYXJncyx0aGF0KX19ZnVuY3Rpb24gY3R4KGZuLHRoYXQsbGVuZ3RoKXthc3NlcnRGdW5jdGlvbihmbik7aWYofmxlbmd0aCYmdGhhdD09PXVuZGVmaW5lZClyZXR1cm4gZm47c3dpdGNoKGxlbmd0aCl7Y2FzZSAxOnJldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gZm4uY2FsbCh0aGF0LGEpfTtjYXNlIDI6cmV0dXJuIGZ1bmN0aW9uKGEsYil7cmV0dXJuIGZuLmNhbGwodGhhdCxhLGIpfTtjYXNlIDM6cmV0dXJuIGZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZm4uY2FsbCh0aGF0LGEsYixjKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGZuLmFwcGx5KHRoYXQsYXJndW1lbnRzKX19ZnVuY3Rpb24gaW52b2tlKGZuLGFyZ3MsdGhhdCl7dmFyIHVuPXRoYXQ9PT11bmRlZmluZWQ7c3dpdGNoKGFyZ3MubGVuZ3RofDApe2Nhc2UgMDpyZXR1cm4gdW4/Zm4oKTpmbi5jYWxsKHRoYXQpO2Nhc2UgMTpyZXR1cm4gdW4/Zm4oYXJnc1swXSk6Zm4uY2FsbCh0aGF0LGFyZ3NbMF0pO2Nhc2UgMjpyZXR1cm4gdW4/Zm4oYXJnc1swXSxhcmdzWzFdKTpmbi5jYWxsKHRoYXQsYXJnc1swXSxhcmdzWzFdKTtjYXNlIDM6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdKTpmbi5jYWxsKHRoYXQsYXJnc1swXSxhcmdzWzFdLGFyZ3NbMl0pO2Nhc2UgNDpyZXR1cm4gdW4/Zm4oYXJnc1swXSxhcmdzWzFdLGFyZ3NbMl0sYXJnc1szXSk6Zm4uY2FsbCh0aGF0LGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdLGFyZ3NbM10pO2Nhc2UgNTpyZXR1cm4gdW4/Zm4oYXJnc1swXSxhcmdzWzFdLGFyZ3NbMl0sYXJnc1szXSxhcmdzWzRdKTpmbi5jYWxsKHRoYXQsYXJnc1swXSxhcmdzWzFdLGFyZ3NbMl0sYXJnc1szXSxhcmdzWzRdKX1yZXR1cm4gZm4uYXBwbHkodGhhdCxhcmdzKX12YXIgY3JlYXRlPU9iamVjdC5jcmVhdGUsZ2V0UHJvdG90eXBlT2Y9T2JqZWN0LmdldFByb3RvdHlwZU9mLHNldFByb3RvdHlwZU9mPU9iamVjdC5zZXRQcm90b3R5cGVPZixkZWZpbmVQcm9wZXJ0eT1PYmplY3QuZGVmaW5lUHJvcGVydHksZGVmaW5lUHJvcGVydGllcz1PYmplY3QuZGVmaW5lUHJvcGVydGllcyxnZXRPd25EZXNjcmlwdG9yPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsZ2V0S2V5cz1PYmplY3Qua2V5cyxnZXROYW1lcz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxnZXRTeW1ib2xzPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsaXNGcm96ZW49T2JqZWN0LmlzRnJvemVuLGhhcz1jdHgoY2FsbCxPYmplY3RQcm90b1tIQVNfT1dOXSwyKSxFUzVPYmplY3Q9T2JqZWN0LERpY3Q7ZnVuY3Rpb24gdG9PYmplY3QoaXQpe3JldHVybiBFUzVPYmplY3QoYXNzZXJ0RGVmaW5lZChpdCkpfWZ1bmN0aW9uIHJldHVybkl0KGl0KXtyZXR1cm4gaXR9ZnVuY3Rpb24gcmV0dXJuVGhpcygpe3JldHVybiB0aGlzfWZ1bmN0aW9uIGdldChvYmplY3Qsa2V5KXtpZihoYXMob2JqZWN0LGtleSkpcmV0dXJuIG9iamVjdFtrZXldfWZ1bmN0aW9uIG93bktleXMoaXQpe2Fzc2VydE9iamVjdChpdCk7cmV0dXJuIGdldFN5bWJvbHM/Z2V0TmFtZXMoaXQpLmNvbmNhdChnZXRTeW1ib2xzKGl0KSk6Z2V0TmFtZXMoaXQpfXZhciBhc3NpZ249T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24odGFyZ2V0LHNvdXJjZSl7dmFyIFQ9T2JqZWN0KGFzc2VydERlZmluZWQodGFyZ2V0KSksbD1hcmd1bWVudHMubGVuZ3RoLGk9MTt3aGlsZShsPmkpe3ZhciBTPUVTNU9iamVjdChhcmd1bWVudHNbaSsrXSksa2V5cz1nZXRLZXlzKFMpLGxlbmd0aD1rZXlzLmxlbmd0aCxqPTAsa2V5O3doaWxlKGxlbmd0aD5qKVRba2V5PWtleXNbaisrXV09U1trZXldfXJldHVybiBUfTtmdW5jdGlvbiBrZXlPZihvYmplY3QsZWwpe3ZhciBPPXRvT2JqZWN0KG9iamVjdCksa2V5cz1nZXRLZXlzKE8pLGxlbmd0aD1rZXlzLmxlbmd0aCxpbmRleD0wLGtleTt3aGlsZShsZW5ndGg+aW5kZXgpaWYoT1trZXk9a2V5c1tpbmRleCsrXV09PT1lbClyZXR1cm4ga2V5fWZ1bmN0aW9uIGFycmF5KGl0KXtyZXR1cm4gU3RyaW5nKGl0KS5zcGxpdChcIixcIil9dmFyIHB1c2g9QXJyYXlQcm90by5wdXNoLHVuc2hpZnQ9QXJyYXlQcm90by51bnNoaWZ0LHNsaWNlPUFycmF5UHJvdG8uc2xpY2Usc3BsaWNlPUFycmF5UHJvdG8uc3BsaWNlLGluZGV4T2Y9QXJyYXlQcm90by5pbmRleE9mLGZvckVhY2g9QXJyYXlQcm90b1tGT1JfRUFDSF07ZnVuY3Rpb24gY3JlYXRlQXJyYXlNZXRob2QodHlwZSl7dmFyIGlzTWFwPXR5cGU9PTEsaXNGaWx0ZXI9dHlwZT09Mixpc1NvbWU9dHlwZT09Myxpc0V2ZXJ5PXR5cGU9PTQsaXNGaW5kSW5kZXg9dHlwZT09Nixub2hvbGVzPXR5cGU9PTV8fGlzRmluZEluZGV4O3JldHVybiBmdW5jdGlvbihjYWxsYmFja2ZuKXt2YXIgTz1PYmplY3QoYXNzZXJ0RGVmaW5lZCh0aGlzKSksdGhhdD1hcmd1bWVudHNbMV0sc2VsZj1FUzVPYmplY3QoTyksZj1jdHgoY2FsbGJhY2tmbix0aGF0LDMpLGxlbmd0aD10b0xlbmd0aChzZWxmLmxlbmd0aCksaW5kZXg9MCxyZXN1bHQ9aXNNYXA/QXJyYXkobGVuZ3RoKTppc0ZpbHRlcj9bXTp1bmRlZmluZWQsdmFsLHJlcztmb3IoO2xlbmd0aD5pbmRleDtpbmRleCsrKWlmKG5vaG9sZXN8fGluZGV4IGluIHNlbGYpe3ZhbD1zZWxmW2luZGV4XTtyZXM9Zih2YWwsaW5kZXgsTyk7aWYodHlwZSl7aWYoaXNNYXApcmVzdWx0W2luZGV4XT1yZXM7ZWxzZSBpZihyZXMpc3dpdGNoKHR5cGUpe2Nhc2UgMzpyZXR1cm4gdHJ1ZTtjYXNlIDU6cmV0dXJuIHZhbDtjYXNlIDY6cmV0dXJuIGluZGV4O2Nhc2UgMjpyZXN1bHQucHVzaCh2YWwpfWVsc2UgaWYoaXNFdmVyeSlyZXR1cm4gZmFsc2V9fXJldHVybiBpc0ZpbmRJbmRleD8tMTppc1NvbWV8fGlzRXZlcnk/aXNFdmVyeTpyZXN1bHR9fWZ1bmN0aW9uIGNyZWF0ZUFycmF5Q29udGFpbnMoaXNDb250YWlucyl7cmV0dXJuIGZ1bmN0aW9uKGVsKXt2YXIgTz10b09iamVjdCh0aGlzKSxsZW5ndGg9dG9MZW5ndGgoTy5sZW5ndGgpLGluZGV4PXRvSW5kZXgoYXJndW1lbnRzWzFdLGxlbmd0aCk7aWYoaXNDb250YWlucyYmZWwhPWVsKXtmb3IoO2xlbmd0aD5pbmRleDtpbmRleCsrKWlmKHNhbWVOYU4oT1tpbmRleF0pKXJldHVybiBpc0NvbnRhaW5zfHxpbmRleH1lbHNlIGZvcig7bGVuZ3RoPmluZGV4O2luZGV4KyspaWYoaXNDb250YWluc3x8aW5kZXggaW4gTyl7aWYoT1tpbmRleF09PT1lbClyZXR1cm4gaXNDb250YWluc3x8aW5kZXh9cmV0dXJuIWlzQ29udGFpbnMmJi0xfX1mdW5jdGlvbiBnZW5lcmljKEEsQil7cmV0dXJuIHR5cGVvZiBBPT1cImZ1bmN0aW9uXCI/QTpCfXZhciBNQVhfU0FGRV9JTlRFR0VSPTkwMDcxOTkyNTQ3NDA5OTEscG93PU1hdGgucG93LGFicz1NYXRoLmFicyxjZWlsPU1hdGguY2VpbCxmbG9vcj1NYXRoLmZsb29yLG1heD1NYXRoLm1heCxtaW49TWF0aC5taW4scmFuZG9tPU1hdGgucmFuZG9tLHRydW5jPU1hdGgudHJ1bmN8fGZ1bmN0aW9uKGl0KXtyZXR1cm4oaXQ+MD9mbG9vcjpjZWlsKShpdCl9O2Z1bmN0aW9uIHNhbWVOYU4obnVtYmVyKXtyZXR1cm4gbnVtYmVyIT1udW1iZXJ9ZnVuY3Rpb24gdG9JbnRlZ2VyKGl0KXtyZXR1cm4gaXNOYU4oaXQpPzA6dHJ1bmMoaXQpfWZ1bmN0aW9uIHRvTGVuZ3RoKGl0KXtyZXR1cm4gaXQ+MD9taW4odG9JbnRlZ2VyKGl0KSxNQVhfU0FGRV9JTlRFR0VSKTowfWZ1bmN0aW9uIHRvSW5kZXgoaW5kZXgsbGVuZ3RoKXt2YXIgaW5kZXg9dG9JbnRlZ2VyKGluZGV4KTtyZXR1cm4gaW5kZXg8MD9tYXgoaW5kZXgrbGVuZ3RoLDApOm1pbihpbmRleCxsZW5ndGgpfWZ1bmN0aW9uIGx6KG51bSl7cmV0dXJuIG51bT45P251bTpcIjBcIitudW19ZnVuY3Rpb24gY3JlYXRlUmVwbGFjZXIocmVnRXhwLHJlcGxhY2UsaXNTdGF0aWMpe3ZhciByZXBsYWNlcj1pc09iamVjdChyZXBsYWNlKT9mdW5jdGlvbihwYXJ0KXtyZXR1cm4gcmVwbGFjZVtwYXJ0XX06cmVwbGFjZTtyZXR1cm4gZnVuY3Rpb24oaXQpe3JldHVybiBTdHJpbmcoaXNTdGF0aWM/aXQ6dGhpcykucmVwbGFjZShyZWdFeHAscmVwbGFjZXIpfX1mdW5jdGlvbiBjcmVhdGVQb2ludEF0KHRvU3RyaW5nKXtyZXR1cm4gZnVuY3Rpb24ocG9zKXt2YXIgcz1TdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSksaT10b0ludGVnZXIocG9zKSxsPXMubGVuZ3RoLGEsYjtpZihpPDB8fGk+PWwpcmV0dXJuIHRvU3RyaW5nP1wiXCI6dW5kZWZpbmVkO2E9cy5jaGFyQ29kZUF0KGkpO3JldHVybiBhPDU1Mjk2fHxhPjU2MzE5fHxpKzE9PT1sfHwoYj1zLmNoYXJDb2RlQXQoaSsxKSk8NTYzMjB8fGI+NTczNDM/dG9TdHJpbmc/cy5jaGFyQXQoaSk6YTp0b1N0cmluZz9zLnNsaWNlKGksaSsyKTooYS01NTI5Njw8MTApKyhiLTU2MzIwKSs2NTUzNn19dmFyIFJFRFVDRV9FUlJPUj1cIlJlZHVjZSBvZiBlbXB0eSBvYmplY3Qgd2l0aCBubyBpbml0aWFsIHZhbHVlXCI7ZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbixtc2cxLG1zZzIpe2lmKCFjb25kaXRpb24pdGhyb3cgVHlwZUVycm9yKG1zZzI/bXNnMSttc2cyOm1zZzEpfWZ1bmN0aW9uIGFzc2VydERlZmluZWQoaXQpe2lmKGl0PT11bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiRnVuY3Rpb24gY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkXCIpO3JldHVybiBpdH1mdW5jdGlvbiBhc3NlcnRGdW5jdGlvbihpdCl7YXNzZXJ0KGlzRnVuY3Rpb24oaXQpLGl0LFwiIGlzIG5vdCBhIGZ1bmN0aW9uIVwiKTtyZXR1cm4gaXR9ZnVuY3Rpb24gYXNzZXJ0T2JqZWN0KGl0KXthc3NlcnQoaXNPYmplY3QoaXQpLGl0LFwiIGlzIG5vdCBhbiBvYmplY3QhXCIpO3JldHVybiBpdH1mdW5jdGlvbiBhc3NlcnRJbnN0YW5jZShpdCxDb25zdHJ1Y3RvcixuYW1lKXthc3NlcnQoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcixuYW1lLFwiOiB1c2UgdGhlICduZXcnIG9wZXJhdG9yIVwiKX1mdW5jdGlvbiBkZXNjcmlwdG9yKGJpdG1hcCx2YWx1ZSl7cmV0dXJue2VudW1lcmFibGU6IShiaXRtYXAmMSksY29uZmlndXJhYmxlOiEoYml0bWFwJjIpLHdyaXRhYmxlOiEoYml0bWFwJjQpLHZhbHVlOnZhbHVlfX1mdW5jdGlvbiBzaW1wbGVTZXQob2JqZWN0LGtleSx2YWx1ZSl7b2JqZWN0W2tleV09dmFsdWU7cmV0dXJuIG9iamVjdH1mdW5jdGlvbiBjcmVhdGVEZWZpbmVyKGJpdG1hcCl7cmV0dXJuIERFU0M/ZnVuY3Rpb24ob2JqZWN0LGtleSx2YWx1ZSl7cmV0dXJuIGRlZmluZVByb3BlcnR5KG9iamVjdCxrZXksZGVzY3JpcHRvcihiaXRtYXAsdmFsdWUpKX06c2ltcGxlU2V0fWZ1bmN0aW9uIHVpZChrZXkpe3JldHVybiBTWU1CT0wrXCIoXCIra2V5K1wiKV9cIisoKytzaWQrcmFuZG9tKCkpW1RPX1NUUklOR10oMzYpfWZ1bmN0aW9uIGdldFdlbGxLbm93blN5bWJvbChuYW1lLHNldHRlcil7cmV0dXJuIFN5bWJvbCYmU3ltYm9sW25hbWVdfHwoc2V0dGVyP1N5bWJvbDpzYWZlU3ltYm9sKShTWU1CT0wrRE9UK25hbWUpfXZhciBERVNDPSEhZnVuY3Rpb24oKXt0cnl7cmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LFwiYVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gMn19KS5hPT0yfWNhdGNoKGUpe319KCksc2lkPTAsaGlkZGVuPWNyZWF0ZURlZmluZXIoMSksc2V0PVN5bWJvbD9zaW1wbGVTZXQ6aGlkZGVuLHNhZmVTeW1ib2w9U3ltYm9sfHx1aWQ7ZnVuY3Rpb24gYXNzaWduSGlkZGVuKHRhcmdldCxzcmMpe2Zvcih2YXIga2V5IGluIHNyYyloaWRkZW4odGFyZ2V0LGtleSxzcmNba2V5XSk7cmV0dXJuIHRhcmdldH12YXIgU1lNQk9MX1VOU0NPUEFCTEVTPWdldFdlbGxLbm93blN5bWJvbChcInVuc2NvcGFibGVzXCIpLEFycmF5VW5zY29wYWJsZXM9QXJyYXlQcm90b1tTWU1CT0xfVU5TQ09QQUJMRVNdfHx7fSxTWU1CT0xfVEFHPWdldFdlbGxLbm93blN5bWJvbChUT19TVFJJTkdfVEFHKSxTWU1CT0xfU1BFQ0lFUz1nZXRXZWxsS25vd25TeW1ib2woXCJzcGVjaWVzXCIpLFNZTUJPTF9JVEVSQVRPUjtmdW5jdGlvbiBzZXRTcGVjaWVzKEMpe2lmKERFU0MmJihmcmFtZXdvcmt8fCFpc05hdGl2ZShDKSkpZGVmaW5lUHJvcGVydHkoQyxTWU1CT0xfU1BFQ0lFUyx7Y29uZmlndXJhYmxlOnRydWUsZ2V0OnJldHVyblRoaXN9KX12YXIgTk9ERT1jb2YocHJvY2Vzcyk9PVBST0NFU1MsY29yZT17fSxwYXRoPWZyYW1ld29yaz9nbG9iYWw6Y29yZSxvbGQ9Z2xvYmFsLmNvcmUsZXhwb3J0R2xvYmFsLEZPUkNFRD0xLEdMT0JBTD0yLFNUQVRJQz00LFBST1RPPTgsQklORD0xNixXUkFQPTMyO2Z1bmN0aW9uICRkZWZpbmUodHlwZSxuYW1lLHNvdXJjZSl7dmFyIGtleSxvd24sb3V0LGV4cCxpc0dsb2JhbD10eXBlJkdMT0JBTCx0YXJnZXQ9aXNHbG9iYWw/Z2xvYmFsOnR5cGUmU1RBVElDP2dsb2JhbFtuYW1lXTooZ2xvYmFsW25hbWVdfHxPYmplY3RQcm90bylbUFJPVE9UWVBFXSxleHBvcnRzPWlzR2xvYmFsP2NvcmU6Y29yZVtuYW1lXXx8KGNvcmVbbmFtZV09e30pO2lmKGlzR2xvYmFsKXNvdXJjZT1uYW1lO2ZvcihrZXkgaW4gc291cmNlKXtvd249ISh0eXBlJkZPUkNFRCkmJnRhcmdldCYma2V5IGluIHRhcmdldCYmKCFpc0Z1bmN0aW9uKHRhcmdldFtrZXldKXx8aXNOYXRpdmUodGFyZ2V0W2tleV0pKTtvdXQ9KG93bj90YXJnZXQ6c291cmNlKVtrZXldO2lmKCFmcmFtZXdvcmsmJmlzR2xvYmFsJiYhaXNGdW5jdGlvbih0YXJnZXRba2V5XSkpZXhwPXNvdXJjZVtrZXldO2Vsc2UgaWYodHlwZSZCSU5EJiZvd24pZXhwPWN0eChvdXQsZ2xvYmFsKTtlbHNlIGlmKHR5cGUmV1JBUCYmIWZyYW1ld29yayYmdGFyZ2V0W2tleV09PW91dCl7ZXhwPWZ1bmN0aW9uKHBhcmFtKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG91dD9uZXcgb3V0KHBhcmFtKTpvdXQocGFyYW0pfTtleHBbUFJPVE9UWVBFXT1vdXRbUFJPVE9UWVBFXX1lbHNlIGV4cD10eXBlJlBST1RPJiZpc0Z1bmN0aW9uKG91dCk/Y3R4KGNhbGwsb3V0KTpvdXQ7aWYoZnJhbWV3b3JrJiZ0YXJnZXQmJiFvd24pe2lmKGlzR2xvYmFsKXRhcmdldFtrZXldPW91dDtlbHNlIGRlbGV0ZSB0YXJnZXRba2V5XSYmaGlkZGVuKHRhcmdldCxrZXksb3V0KX1pZihleHBvcnRzW2tleV0hPW91dCloaWRkZW4oZXhwb3J0cyxrZXksZXhwKX19aWYodHlwZW9mIG1vZHVsZSE9XCJ1bmRlZmluZWRcIiYmbW9kdWxlLmV4cG9ydHMpbW9kdWxlLmV4cG9ydHM9Y29yZTtlbHNlIGlmKGlzRnVuY3Rpb24oZGVmaW5lKSYmZGVmaW5lLmFtZClkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gY29yZX0pO2Vsc2UgZXhwb3J0R2xvYmFsPXRydWU7aWYoZXhwb3J0R2xvYmFsfHxmcmFtZXdvcmspe2NvcmUubm9Db25mbGljdD1mdW5jdGlvbigpe2dsb2JhbC5jb3JlPW9sZDtyZXR1cm4gY29yZX07Z2xvYmFsLmNvcmU9Y29yZX1TWU1CT0xfSVRFUkFUT1I9Z2V0V2VsbEtub3duU3ltYm9sKElURVJBVE9SKTt2YXIgSVRFUj1zYWZlU3ltYm9sKFwiaXRlclwiKSxLRVk9MSxWQUxVRT0yLEl0ZXJhdG9ycz17fSxJdGVyYXRvclByb3RvdHlwZT17fSxCVUdHWV9JVEVSQVRPUlM9XCJrZXlzXCJpbiBBcnJheVByb3RvJiYhKFwibmV4dFwiaW5bXS5rZXlzKCkpO3NldEl0ZXJhdG9yKEl0ZXJhdG9yUHJvdG90eXBlLHJldHVyblRoaXMpO2Z1bmN0aW9uIHNldEl0ZXJhdG9yKE8sdmFsdWUpe2hpZGRlbihPLFNZTUJPTF9JVEVSQVRPUix2YWx1ZSk7RkZfSVRFUkFUT1IgaW4gQXJyYXlQcm90byYmaGlkZGVuKE8sRkZfSVRFUkFUT1IsdmFsdWUpfWZ1bmN0aW9uIGNyZWF0ZUl0ZXJhdG9yKENvbnN0cnVjdG9yLE5BTUUsbmV4dCxwcm90byl7Q29uc3RydWN0b3JbUFJPVE9UWVBFXT1jcmVhdGUocHJvdG98fEl0ZXJhdG9yUHJvdG90eXBlLHtuZXh0OmRlc2NyaXB0b3IoMSxuZXh0KX0pO3NldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLE5BTUUrXCIgSXRlcmF0b3JcIil9ZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3IoQ29uc3RydWN0b3IsTkFNRSx2YWx1ZSxERUZBVUxUKXt2YXIgcHJvdG89Q29uc3RydWN0b3JbUFJPVE9UWVBFXSxpdGVyPWdldChwcm90byxTWU1CT0xfSVRFUkFUT1IpfHxnZXQocHJvdG8sRkZfSVRFUkFUT1IpfHxERUZBVUxUJiZnZXQocHJvdG8sREVGQVVMVCl8fHZhbHVlO2lmKGZyYW1ld29yayl7c2V0SXRlcmF0b3IocHJvdG8saXRlcik7aWYoaXRlciE9PXZhbHVlKXt2YXIgaXRlclByb3RvPWdldFByb3RvdHlwZU9mKGl0ZXIuY2FsbChuZXcgQ29uc3RydWN0b3IpKTtzZXRUb1N0cmluZ1RhZyhpdGVyUHJvdG8sTkFNRStcIiBJdGVyYXRvclwiLHRydWUpO2hhcyhwcm90byxGRl9JVEVSQVRPUikmJnNldEl0ZXJhdG9yKGl0ZXJQcm90byxyZXR1cm5UaGlzKX19SXRlcmF0b3JzW05BTUVdPWl0ZXI7SXRlcmF0b3JzW05BTUUrXCIgSXRlcmF0b3JcIl09cmV0dXJuVGhpcztyZXR1cm4gaXRlcn1mdW5jdGlvbiBkZWZpbmVTdGRJdGVyYXRvcnMoQmFzZSxOQU1FLENvbnN0cnVjdG9yLG5leHQsREVGQVVMVCxJU19TRVQpe2Z1bmN0aW9uIGNyZWF0ZUl0ZXIoa2luZCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLGtpbmQpfX1jcmVhdGVJdGVyYXRvcihDb25zdHJ1Y3RvcixOQU1FLG5leHQpO3ZhciBlbnRyaWVzPWNyZWF0ZUl0ZXIoS0VZK1ZBTFVFKSx2YWx1ZXM9Y3JlYXRlSXRlcihWQUxVRSk7aWYoREVGQVVMVD09VkFMVUUpdmFsdWVzPWRlZmluZUl0ZXJhdG9yKEJhc2UsTkFNRSx2YWx1ZXMsXCJ2YWx1ZXNcIik7ZWxzZSBlbnRyaWVzPWRlZmluZUl0ZXJhdG9yKEJhc2UsTkFNRSxlbnRyaWVzLFwiZW50cmllc1wiKTtpZihERUZBVUxUKXskZGVmaW5lKFBST1RPK0ZPUkNFRCpCVUdHWV9JVEVSQVRPUlMsTkFNRSx7ZW50cmllczplbnRyaWVzLGtleXM6SVNfU0VUP3ZhbHVlczpjcmVhdGVJdGVyKEtFWSksdmFsdWVzOnZhbHVlc30pfX1mdW5jdGlvbiBpdGVyUmVzdWx0KGRvbmUsdmFsdWUpe3JldHVybnt2YWx1ZTp2YWx1ZSxkb25lOiEhZG9uZX19ZnVuY3Rpb24gaXNJdGVyYWJsZShpdCl7dmFyIE89T2JqZWN0KGl0KSxTeW1ib2w9Z2xvYmFsW1NZTUJPTF0saGFzRXh0PShTeW1ib2wmJlN5bWJvbFtJVEVSQVRPUl18fEZGX0lURVJBVE9SKWluIE87cmV0dXJuIGhhc0V4dHx8U1lNQk9MX0lURVJBVE9SIGluIE98fGhhcyhJdGVyYXRvcnMsY2xhc3NvZihPKSl9ZnVuY3Rpb24gZ2V0SXRlcmF0b3IoaXQpe3ZhciBTeW1ib2w9Z2xvYmFsW1NZTUJPTF0sZXh0PWl0W1N5bWJvbCYmU3ltYm9sW0lURVJBVE9SXXx8RkZfSVRFUkFUT1JdLGdldEl0ZXI9ZXh0fHxpdFtTWU1CT0xfSVRFUkFUT1JdfHxJdGVyYXRvcnNbY2xhc3NvZihpdCldO3JldHVybiBhc3NlcnRPYmplY3QoZ2V0SXRlci5jYWxsKGl0KSl9ZnVuY3Rpb24gc3RlcENhbGwoZm4sdmFsdWUsZW50cmllcyl7cmV0dXJuIGVudHJpZXM/aW52b2tlKGZuLHZhbHVlKTpmbih2YWx1ZSl9ZnVuY3Rpb24gY2hlY2tEYW5nZXJJdGVyQ2xvc2luZyhmbil7dmFyIGRhbmdlcj10cnVlO3ZhciBPPXtuZXh0OmZ1bmN0aW9uKCl7dGhyb3cgMX0sXCJyZXR1cm5cIjpmdW5jdGlvbigpe2Rhbmdlcj1mYWxzZX19O09bU1lNQk9MX0lURVJBVE9SXT1yZXR1cm5UaGlzO3RyeXtmbihPKX1jYXRjaChlKXt9cmV0dXJuIGRhbmdlcn1mdW5jdGlvbiBjbG9zZUl0ZXJhdG9yKGl0ZXJhdG9yKXt2YXIgcmV0PWl0ZXJhdG9yW1wicmV0dXJuXCJdO2lmKHJldCE9PXVuZGVmaW5lZClyZXQuY2FsbChpdGVyYXRvcil9ZnVuY3Rpb24gc2FmZUl0ZXJDbG9zZShleGVjLGl0ZXJhdG9yKXt0cnl7ZXhlYyhpdGVyYXRvcil9Y2F0Y2goZSl7Y2xvc2VJdGVyYXRvcihpdGVyYXRvcik7dGhyb3cgZX19ZnVuY3Rpb24gZm9yT2YoaXRlcmFibGUsZW50cmllcyxmbix0aGF0KXtzYWZlSXRlckNsb3NlKGZ1bmN0aW9uKGl0ZXJhdG9yKXt2YXIgZj1jdHgoZm4sdGhhdCxlbnRyaWVzPzI6MSksc3RlcDt3aGlsZSghKHN0ZXA9aXRlcmF0b3IubmV4dCgpKS5kb25lKWlmKHN0ZXBDYWxsKGYsc3RlcC52YWx1ZSxlbnRyaWVzKT09PWZhbHNlKXtyZXR1cm4gY2xvc2VJdGVyYXRvcihpdGVyYXRvcil9fSxnZXRJdGVyYXRvcihpdGVyYWJsZSkpfSFmdW5jdGlvbihUQUcsU3ltYm9sUmVnaXN0cnksQWxsU3ltYm9scyxzZXR0ZXIpe2lmKCFpc05hdGl2ZShTeW1ib2wpKXtTeW1ib2w9ZnVuY3Rpb24oZGVzY3JpcHRpb24pe2Fzc2VydCghKHRoaXMgaW5zdGFuY2VvZiBTeW1ib2wpLFNZTUJPTCtcIiBpcyBub3QgYSBcIitDT05TVFJVQ1RPUik7dmFyIHRhZz11aWQoZGVzY3JpcHRpb24pLHN5bT1zZXQoY3JlYXRlKFN5bWJvbFtQUk9UT1RZUEVdKSxUQUcsdGFnKTtBbGxTeW1ib2xzW3RhZ109c3ltO0RFU0MmJnNldHRlciYmZGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG8sdGFnLHtjb25maWd1cmFibGU6dHJ1ZSxzZXQ6ZnVuY3Rpb24odmFsdWUpe2hpZGRlbih0aGlzLHRhZyx2YWx1ZSl9fSk7cmV0dXJuIHN5bX07aGlkZGVuKFN5bWJvbFtQUk9UT1RZUEVdLFRPX1NUUklORyxmdW5jdGlvbigpe3JldHVybiB0aGlzW1RBR119KX0kZGVmaW5lKEdMT0JBTCtXUkFQLHtTeW1ib2w6U3ltYm9sfSk7dmFyIHN5bWJvbFN0YXRpY3M9e1wiZm9yXCI6ZnVuY3Rpb24oa2V5KXtyZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LGtleSs9XCJcIik/U3ltYm9sUmVnaXN0cnlba2V5XTpTeW1ib2xSZWdpc3RyeVtrZXldPVN5bWJvbChrZXkpfSxpdGVyYXRvcjpTWU1CT0xfSVRFUkFUT1J8fGdldFdlbGxLbm93blN5bWJvbChJVEVSQVRPUiksa2V5Rm9yOnBhcnQuY2FsbChrZXlPZixTeW1ib2xSZWdpc3RyeSksc3BlY2llczpTWU1CT0xfU1BFQ0lFUyx0b1N0cmluZ1RhZzpTWU1CT0xfVEFHPWdldFdlbGxLbm93blN5bWJvbChUT19TVFJJTkdfVEFHLHRydWUpLHVuc2NvcGFibGVzOlNZTUJPTF9VTlNDT1BBQkxFUyxwdXJlOnNhZmVTeW1ib2wsc2V0OnNldCx1c2VTZXR0ZXI6ZnVuY3Rpb24oKXtzZXR0ZXI9dHJ1ZX0sdXNlU2ltcGxlOmZ1bmN0aW9uKCl7c2V0dGVyPWZhbHNlfX07Zm9yRWFjaC5jYWxsKGFycmF5KFwiaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwbGl0LHRvUHJpbWl0aXZlXCIpLGZ1bmN0aW9uKGl0KXtzeW1ib2xTdGF0aWNzW2l0XT1nZXRXZWxsS25vd25TeW1ib2woaXQpfSk7JGRlZmluZShTVEFUSUMsU1lNQk9MLHN5bWJvbFN0YXRpY3MpO3NldFRvU3RyaW5nVGFnKFN5bWJvbCxTWU1CT0wpOyRkZWZpbmUoU1RBVElDK0ZPUkNFRCohaXNOYXRpdmUoU3ltYm9sKSxPQkpFQ1Qse2dldE93blByb3BlcnR5TmFtZXM6ZnVuY3Rpb24oaXQpe3ZhciBuYW1lcz1nZXROYW1lcyh0b09iamVjdChpdCkpLHJlc3VsdD1bXSxrZXksaT0wO3doaWxlKG5hbWVzLmxlbmd0aD5pKWhhcyhBbGxTeW1ib2xzLGtleT1uYW1lc1tpKytdKXx8cmVzdWx0LnB1c2goa2V5KTtyZXR1cm4gcmVzdWx0fSxnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ZnVuY3Rpb24oaXQpe3ZhciBuYW1lcz1nZXROYW1lcyh0b09iamVjdChpdCkpLHJlc3VsdD1bXSxrZXksaT0wO3doaWxlKG5hbWVzLmxlbmd0aD5pKWhhcyhBbGxTeW1ib2xzLGtleT1uYW1lc1tpKytdKSYmcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtyZXR1cm4gcmVzdWx0fX0pO3NldFRvU3RyaW5nVGFnKE1hdGgsTUFUSCx0cnVlKTtzZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTixcIkpTT05cIix0cnVlKX0oc2FmZVN5bWJvbChcInRhZ1wiKSx7fSx7fSx0cnVlKTshZnVuY3Rpb24oKXt2YXIgb2JqZWN0U3RhdGljPXthc3NpZ246YXNzaWduLGlzOmZ1bmN0aW9uKHgseSl7cmV0dXJuIHg9PT15P3ghPT0wfHwxL3g9PT0xL3k6eCE9eCYmeSE9eX19O1wiX19wcm90b19fXCJpbiBPYmplY3RQcm90byYmZnVuY3Rpb24oYnVnZ3ksc2V0KXt0cnl7c2V0PWN0eChjYWxsLGdldE93bkRlc2NyaXB0b3IoT2JqZWN0UHJvdG8sXCJfX3Byb3RvX19cIikuc2V0LDIpO3NldCh7fSxBcnJheVByb3RvKX1jYXRjaChlKXtidWdneT10cnVlfW9iamVjdFN0YXRpYy5zZXRQcm90b3R5cGVPZj1zZXRQcm90b3R5cGVPZj1zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24oTyxwcm90byl7YXNzZXJ0T2JqZWN0KE8pO2Fzc2VydChwcm90bz09PW51bGx8fGlzT2JqZWN0KHByb3RvKSxwcm90byxcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7aWYoYnVnZ3kpTy5fX3Byb3RvX189cHJvdG87ZWxzZSBzZXQoTyxwcm90byk7cmV0dXJuIE99fSgpOyRkZWZpbmUoU1RBVElDLE9CSkVDVCxvYmplY3RTdGF0aWMpfSgpOyFmdW5jdGlvbih0bXApe3RtcFtTWU1CT0xfVEFHXT1ET1Q7aWYoY29mKHRtcCkhPURPVCloaWRkZW4oT2JqZWN0UHJvdG8sVE9fU1RSSU5HLGZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IFwiK2NsYXNzb2YodGhpcykrXCJdXCJ9KX0oe30pOyFmdW5jdGlvbigpe2Z1bmN0aW9uIHdyYXBPYmplY3RNZXRob2Qoa2V5LE1PREUpe3ZhciBmbj1PYmplY3Rba2V5XSxleHA9Y29yZVtPQkpFQ1RdW2tleV0sZj0wLG89e307aWYoIWV4cHx8aXNOYXRpdmUoZXhwKSl7b1trZXldPU1PREU9PTE/ZnVuY3Rpb24oaXQpe3JldHVybiBpc09iamVjdChpdCk/Zm4oaXQpOml0fTpNT0RFPT0yP2Z1bmN0aW9uKGl0KXtyZXR1cm4gaXNPYmplY3QoaXQpP2ZuKGl0KTp0cnVlfTpNT0RFPT0zP2Z1bmN0aW9uKGl0KXtyZXR1cm4gaXNPYmplY3QoaXQpP2ZuKGl0KTpmYWxzZX06TU9ERT09ND9mdW5jdGlvbihpdCxrZXkpe3JldHVybiBmbih0b09iamVjdChpdCksa2V5KX06ZnVuY3Rpb24oaXQpe3JldHVybiBmbih0b09iamVjdChpdCkpfTt0cnl7Zm4oRE9UKX1jYXRjaChlKXtmPTF9JGRlZmluZShTVEFUSUMrRk9SQ0VEKmYsT0JKRUNULG8pfX13cmFwT2JqZWN0TWV0aG9kKFwiZnJlZXplXCIsMSk7d3JhcE9iamVjdE1ldGhvZChcInNlYWxcIiwxKTt3cmFwT2JqZWN0TWV0aG9kKFwicHJldmVudEV4dGVuc2lvbnNcIiwxKTt3cmFwT2JqZWN0TWV0aG9kKFwiaXNGcm96ZW5cIiwyKTt3cmFwT2JqZWN0TWV0aG9kKFwiaXNTZWFsZWRcIiwyKTt3cmFwT2JqZWN0TWV0aG9kKFwiaXNFeHRlbnNpYmxlXCIsMyk7d3JhcE9iamVjdE1ldGhvZChcImdldE93blByb3BlcnR5RGVzY3JpcHRvclwiLDQpO3dyYXBPYmplY3RNZXRob2QoXCJnZXRQcm90b3R5cGVPZlwiKTt3cmFwT2JqZWN0TWV0aG9kKFwia2V5c1wiKTt3cmFwT2JqZWN0TWV0aG9kKFwiZ2V0T3duUHJvcGVydHlOYW1lc1wiKX0oKTshZnVuY3Rpb24oTkFNRSl7TkFNRSBpbiBGdW5jdGlvblByb3RvfHxERVNDJiZkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvLE5BTUUse2NvbmZpZ3VyYWJsZTp0cnVlLGdldDpmdW5jdGlvbigpe3ZhciBtYXRjaD1TdHJpbmcodGhpcykubWF0Y2goL15cXHMqZnVuY3Rpb24gKFteIChdKikvKSxuYW1lPW1hdGNoP21hdGNoWzFdOlwiXCI7aGFzKHRoaXMsTkFNRSl8fGRlZmluZVByb3BlcnR5KHRoaXMsTkFNRSxkZXNjcmlwdG9yKDUsbmFtZSkpO3JldHVybiBuYW1lfSxzZXQ6ZnVuY3Rpb24odmFsdWUpe2hhcyh0aGlzLE5BTUUpfHxkZWZpbmVQcm9wZXJ0eSh0aGlzLE5BTUUsZGVzY3JpcHRvcigwLHZhbHVlKSl9fSl9KFwibmFtZVwiKTtOdW1iZXIoXCIwbzFcIikmJk51bWJlcihcIjBiMVwiKXx8ZnVuY3Rpb24oX051bWJlcixOdW1iZXJQcm90byl7ZnVuY3Rpb24gdG9OdW1iZXIoaXQpe2lmKGlzT2JqZWN0KGl0KSlpdD10b1ByaW1pdGl2ZShpdCk7aWYodHlwZW9mIGl0PT1cInN0cmluZ1wiJiZpdC5sZW5ndGg+MiYmaXQuY2hhckNvZGVBdCgwKT09NDgpe3ZhciBiaW5hcnk9ZmFsc2U7c3dpdGNoKGl0LmNoYXJDb2RlQXQoMSkpe2Nhc2UgNjY6Y2FzZSA5ODpiaW5hcnk9dHJ1ZTtjYXNlIDc5OmNhc2UgMTExOnJldHVybiBwYXJzZUludChpdC5zbGljZSgyKSxiaW5hcnk/Mjo4KX19cmV0dXJuK2l0fWZ1bmN0aW9uIHRvUHJpbWl0aXZlKGl0KXt2YXIgZm4sdmFsO2lmKGlzRnVuY3Rpb24oZm49aXQudmFsdWVPZikmJiFpc09iamVjdCh2YWw9Zm4uY2FsbChpdCkpKXJldHVybiB2YWw7aWYoaXNGdW5jdGlvbihmbj1pdFtUT19TVFJJTkddKSYmIWlzT2JqZWN0KHZhbD1mbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDt0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBudW1iZXJcIil9TnVtYmVyPWZ1bmN0aW9uIE51bWJlcihpdCl7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBOdW1iZXI/bmV3IF9OdW1iZXIodG9OdW1iZXIoaXQpKTp0b051bWJlcihpdCl9O2ZvckVhY2guY2FsbChERVNDP2dldE5hbWVzKF9OdW1iZXIpOmFycmF5KFwiTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFlcIiksZnVuY3Rpb24oa2V5KXtrZXkgaW4gTnVtYmVyfHxkZWZpbmVQcm9wZXJ0eShOdW1iZXIsa2V5LGdldE93bkRlc2NyaXB0b3IoX051bWJlcixrZXkpKX0pO051bWJlcltQUk9UT1RZUEVdPU51bWJlclByb3RvO051bWJlclByb3RvW0NPTlNUUlVDVE9SXT1OdW1iZXI7aGlkZGVuKGdsb2JhbCxOVU1CRVIsTnVtYmVyKX0oTnVtYmVyLE51bWJlcltQUk9UT1RZUEVdKTshZnVuY3Rpb24oaXNJbnRlZ2VyKXskZGVmaW5lKFNUQVRJQyxOVU1CRVIse0VQU0lMT046cG93KDIsLTUyKSxpc0Zpbml0ZTpmdW5jdGlvbihpdCl7cmV0dXJuIHR5cGVvZiBpdD09XCJudW1iZXJcIiYmaXNGaW5pdGUoaXQpfSxpc0ludGVnZXI6aXNJbnRlZ2VyLGlzTmFOOnNhbWVOYU4saXNTYWZlSW50ZWdlcjpmdW5jdGlvbihudW1iZXIpe3JldHVybiBpc0ludGVnZXIobnVtYmVyKSYmYWJzKG51bWJlcik8PU1BWF9TQUZFX0lOVEVHRVJ9LE1BWF9TQUZFX0lOVEVHRVI6TUFYX1NBRkVfSU5URUdFUixNSU5fU0FGRV9JTlRFR0VSOi1NQVhfU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQ6cGFyc2VGbG9hdCxwYXJzZUludDpwYXJzZUludH0pfShOdW1iZXIuaXNJbnRlZ2VyfHxmdW5jdGlvbihpdCl7cmV0dXJuIWlzT2JqZWN0KGl0KSYmaXNGaW5pdGUoaXQpJiZmbG9vcihpdCk9PT1pdH0pOyFmdW5jdGlvbigpe3ZhciBFPU1hdGguRSxleHA9TWF0aC5leHAsbG9nPU1hdGgubG9nLHNxcnQ9TWF0aC5zcXJ0LHNpZ249TWF0aC5zaWdufHxmdW5jdGlvbih4KXtyZXR1cm4oeD0reCk9PTB8fHghPXg/eDp4PDA/LTE6MX07ZnVuY3Rpb24gYXNpbmgoeCl7cmV0dXJuIWlzRmluaXRlKHg9K3gpfHx4PT0wP3g6eDwwPy1hc2luaCgteCk6bG9nKHgrc3FydCh4KngrMSkpfWZ1bmN0aW9uIGV4cG0xKHgpe3JldHVybih4PSt4KT09MD94Ong+LTFlLTYmJng8MWUtNj94K3gqeC8yOmV4cCh4KS0xfSRkZWZpbmUoU1RBVElDLE1BVEgse2Fjb3NoOmZ1bmN0aW9uKHgpe3JldHVybih4PSt4KTwxP05hTjppc0Zpbml0ZSh4KT9sb2coeC9FK3NxcnQoeCsxKSpzcXJ0KHgtMSkvRSkrMTp4fSxhc2luaDphc2luaCxhdGFuaDpmdW5jdGlvbih4KXtyZXR1cm4oeD0reCk9PTA/eDpsb2coKDEreCkvKDEteCkpLzJ9LGNicnQ6ZnVuY3Rpb24oeCl7cmV0dXJuIHNpZ24oeD0reCkqcG93KGFicyh4KSwxLzMpfSxjbHozMjpmdW5jdGlvbih4KXtyZXR1cm4oeD4+Pj0wKT8zMi14W1RPX1NUUklOR10oMikubGVuZ3RoOjMyfSxjb3NoOmZ1bmN0aW9uKHgpe3JldHVybihleHAoeD0reCkrZXhwKC14KSkvMn0sZXhwbTE6ZXhwbTEsZnJvdW5kOmZ1bmN0aW9uKHgpe3JldHVybiBuZXcgRmxvYXQzMkFycmF5KFt4XSlbMF19LGh5cG90OmZ1bmN0aW9uKHZhbHVlMSx2YWx1ZTIpe3ZhciBzdW09MCxsZW4xPWFyZ3VtZW50cy5sZW5ndGgsbGVuMj1sZW4xLGFyZ3M9QXJyYXkobGVuMSksbGFyZz0tSW5maW5pdHksYXJnO3doaWxlKGxlbjEtLSl7YXJnPWFyZ3NbbGVuMV09K2FyZ3VtZW50c1tsZW4xXTtpZihhcmc9PUluZmluaXR5fHxhcmc9PS1JbmZpbml0eSlyZXR1cm4gSW5maW5pdHk7aWYoYXJnPmxhcmcpbGFyZz1hcmd9bGFyZz1hcmd8fDE7d2hpbGUobGVuMi0tKXN1bSs9cG93KGFyZ3NbbGVuMl0vbGFyZywyKTtyZXR1cm4gbGFyZypzcXJ0KHN1bSl9LGltdWw6ZnVuY3Rpb24oeCx5KXt2YXIgVUludDE2PTY1NTM1LHhuPSt4LHluPSt5LHhsPVVJbnQxNiZ4bix5bD1VSW50MTYmeW47cmV0dXJuIDB8eGwqeWwrKChVSW50MTYmeG4+Pj4xNikqeWwreGwqKFVJbnQxNiZ5bj4+PjE2KTw8MTY+Pj4wKX0sbG9nMXA6ZnVuY3Rpb24oeCl7cmV0dXJuKHg9K3gpPi0xZS04JiZ4PDFlLTg/eC14KngvMjpsb2coMSt4KX0sbG9nMTA6ZnVuY3Rpb24oeCl7cmV0dXJuIGxvZyh4KS9NYXRoLkxOMTB9LGxvZzI6ZnVuY3Rpb24oeCl7cmV0dXJuIGxvZyh4KS9NYXRoLkxOMn0sc2lnbjpzaWduLHNpbmg6ZnVuY3Rpb24oeCl7cmV0dXJuIGFicyh4PSt4KTwxPyhleHBtMSh4KS1leHBtMSgteCkpLzI6KGV4cCh4LTEpLWV4cCgteC0xKSkqKEUvMil9LHRhbmg6ZnVuY3Rpb24oeCl7dmFyIGE9ZXhwbTEoeD0reCksYj1leHBtMSgteCk7cmV0dXJuIGE9PUluZmluaXR5PzE6Yj09SW5maW5pdHk/LTE6KGEtYikvKGV4cCh4KStleHAoLXgpKX0sdHJ1bmM6dHJ1bmN9KX0oKTshZnVuY3Rpb24oZnJvbUNoYXJDb2RlKXtmdW5jdGlvbiBhc3NlcnROb3RSZWdFeHAoaXQpe2lmKGNvZihpdCk9PVJFR0VYUCl0aHJvdyBUeXBlRXJyb3IoKX0kZGVmaW5lKFNUQVRJQyxTVFJJTkcse2Zyb21Db2RlUG9pbnQ6ZnVuY3Rpb24oeCl7dmFyIHJlcz1bXSxsZW49YXJndW1lbnRzLmxlbmd0aCxpPTAsY29kZTt3aGlsZShsZW4+aSl7Y29kZT0rYXJndW1lbnRzW2krK107aWYodG9JbmRleChjb2RlLDExMTQxMTEpIT09Y29kZSl0aHJvdyBSYW5nZUVycm9yKGNvZGUrXCIgaXMgbm90IGEgdmFsaWQgY29kZSBwb2ludFwiKTtyZXMucHVzaChjb2RlPDY1NTM2P2Zyb21DaGFyQ29kZShjb2RlKTpmcm9tQ2hhckNvZGUoKChjb2RlLT02NTUzNik+PjEwKSs1NTI5Nixjb2RlJTEwMjQrNTYzMjApKX1yZXR1cm4gcmVzLmpvaW4oXCJcIil9LHJhdzpmdW5jdGlvbihjYWxsU2l0ZSl7dmFyIHJhdz10b09iamVjdChjYWxsU2l0ZS5yYXcpLGxlbj10b0xlbmd0aChyYXcubGVuZ3RoKSxzbG49YXJndW1lbnRzLmxlbmd0aCxyZXM9W10saT0wO3doaWxlKGxlbj5pKXtyZXMucHVzaChTdHJpbmcocmF3W2krK10pKTtpZihpPHNsbilyZXMucHVzaChTdHJpbmcoYXJndW1lbnRzW2ldKSl9cmV0dXJuIHJlcy5qb2luKFwiXCIpfX0pOyRkZWZpbmUoUFJPVE8sU1RSSU5HLHtjb2RlUG9pbnRBdDpjcmVhdGVQb2ludEF0KGZhbHNlKSxlbmRzV2l0aDpmdW5jdGlvbihzZWFyY2hTdHJpbmcpe2Fzc2VydE5vdFJlZ0V4cChzZWFyY2hTdHJpbmcpO3ZhciB0aGF0PVN0cmluZyhhc3NlcnREZWZpbmVkKHRoaXMpKSxlbmRQb3NpdGlvbj1hcmd1bWVudHNbMV0sbGVuPXRvTGVuZ3RoKHRoYXQubGVuZ3RoKSxlbmQ9ZW5kUG9zaXRpb249PT11bmRlZmluZWQ/bGVuOm1pbih0b0xlbmd0aChlbmRQb3NpdGlvbiksbGVuKTtzZWFyY2hTdHJpbmcrPVwiXCI7cmV0dXJuIHRoYXQuc2xpY2UoZW5kLXNlYXJjaFN0cmluZy5sZW5ndGgsZW5kKT09PXNlYXJjaFN0cmluZ30saW5jbHVkZXM6ZnVuY3Rpb24oc2VhcmNoU3RyaW5nKXthc3NlcnROb3RSZWdFeHAoc2VhcmNoU3RyaW5nKTtyZXR1cm4hIX5TdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSkuaW5kZXhPZihzZWFyY2hTdHJpbmcsYXJndW1lbnRzWzFdKX0scmVwZWF0OmZ1bmN0aW9uKGNvdW50KXt2YXIgc3RyPVN0cmluZyhhc3NlcnREZWZpbmVkKHRoaXMpKSxyZXM9XCJcIixuPXRvSW50ZWdlcihjb3VudCk7aWYoMD5ufHxuPT1JbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7Zm9yKDtuPjA7KG4+Pj49MSkmJihzdHIrPXN0cikpaWYobiYxKXJlcys9c3RyO3JldHVybiByZXN9LHN0YXJ0c1dpdGg6ZnVuY3Rpb24oc2VhcmNoU3RyaW5nKXthc3NlcnROb3RSZWdFeHAoc2VhcmNoU3RyaW5nKTt2YXIgdGhhdD1TdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSksaW5kZXg9dG9MZW5ndGgobWluKGFyZ3VtZW50c1sxXSx0aGF0Lmxlbmd0aCkpO3NlYXJjaFN0cmluZys9XCJcIjtyZXR1cm4gdGhhdC5zbGljZShpbmRleCxpbmRleCtzZWFyY2hTdHJpbmcubGVuZ3RoKT09PXNlYXJjaFN0cmluZ319KX0oU3RyaW5nLmZyb21DaGFyQ29kZSk7IWZ1bmN0aW9uKCl7JGRlZmluZShTVEFUSUMrRk9SQ0VEKmNoZWNrRGFuZ2VySXRlckNsb3NpbmcoQXJyYXkuZnJvbSksQVJSQVkse2Zyb206ZnVuY3Rpb24oYXJyYXlMaWtlKXt2YXIgTz1PYmplY3QoYXNzZXJ0RGVmaW5lZChhcnJheUxpa2UpKSxtYXBmbj1hcmd1bWVudHNbMV0sbWFwcGluZz1tYXBmbiE9PXVuZGVmaW5lZCxmPW1hcHBpbmc/Y3R4KG1hcGZuLGFyZ3VtZW50c1syXSwyKTp1bmRlZmluZWQsaW5kZXg9MCxsZW5ndGgscmVzdWx0LHN0ZXA7aWYoaXNJdGVyYWJsZShPKSl7cmVzdWx0PW5ldyhnZW5lcmljKHRoaXMsQXJyYXkpKTtzYWZlSXRlckNsb3NlKGZ1bmN0aW9uKGl0ZXJhdG9yKXtmb3IoOyEoc3RlcD1pdGVyYXRvci5uZXh0KCkpLmRvbmU7aW5kZXgrKyl7cmVzdWx0W2luZGV4XT1tYXBwaW5nP2Yoc3RlcC52YWx1ZSxpbmRleCk6c3RlcC52YWx1ZX19LGdldEl0ZXJhdG9yKE8pKX1lbHNle3Jlc3VsdD1uZXcoZ2VuZXJpYyh0aGlzLEFycmF5KSkobGVuZ3RoPXRvTGVuZ3RoKE8ubGVuZ3RoKSk7Zm9yKDtsZW5ndGg+aW5kZXg7aW5kZXgrKyl7cmVzdWx0W2luZGV4XT1tYXBwaW5nP2YoT1tpbmRleF0saW5kZXgpOk9baW5kZXhdfX1yZXN1bHQubGVuZ3RoPWluZGV4O3JldHVybiByZXN1bHR9fSk7JGRlZmluZShTVEFUSUMsQVJSQVkse29mOmZ1bmN0aW9uKCl7dmFyIGluZGV4PTAsbGVuZ3RoPWFyZ3VtZW50cy5sZW5ndGgscmVzdWx0PW5ldyhnZW5lcmljKHRoaXMsQXJyYXkpKShsZW5ndGgpO3doaWxlKGxlbmd0aD5pbmRleClyZXN1bHRbaW5kZXhdPWFyZ3VtZW50c1tpbmRleCsrXTtyZXN1bHQubGVuZ3RoPWxlbmd0aDtyZXR1cm4gcmVzdWx0fX0pO3NldFNwZWNpZXMoQXJyYXkpfSgpOyFmdW5jdGlvbigpeyRkZWZpbmUoUFJPVE8sQVJSQVkse2NvcHlXaXRoaW46ZnVuY3Rpb24odGFyZ2V0LHN0YXJ0KXt2YXIgTz1PYmplY3QoYXNzZXJ0RGVmaW5lZCh0aGlzKSksbGVuPXRvTGVuZ3RoKE8ubGVuZ3RoKSx0bz10b0luZGV4KHRhcmdldCxsZW4pLGZyb209dG9JbmRleChzdGFydCxsZW4pLGVuZD1hcmd1bWVudHNbMl0sZmluPWVuZD09PXVuZGVmaW5lZD9sZW46dG9JbmRleChlbmQsbGVuKSxjb3VudD1taW4oZmluLWZyb20sbGVuLXRvKSxpbmM9MTtpZihmcm9tPHRvJiZ0bzxmcm9tK2NvdW50KXtpbmM9LTE7ZnJvbT1mcm9tK2NvdW50LTE7dG89dG8rY291bnQtMX13aGlsZShjb3VudC0tPjApe2lmKGZyb20gaW4gTylPW3RvXT1PW2Zyb21dO2Vsc2UgZGVsZXRlIE9bdG9dO3RvKz1pbmM7ZnJvbSs9aW5jfXJldHVybiBPfSxmaWxsOmZ1bmN0aW9uKHZhbHVlKXt2YXIgTz1PYmplY3QoYXNzZXJ0RGVmaW5lZCh0aGlzKSksbGVuZ3RoPXRvTGVuZ3RoKE8ubGVuZ3RoKSxpbmRleD10b0luZGV4KGFyZ3VtZW50c1sxXSxsZW5ndGgpLGVuZD1hcmd1bWVudHNbMl0sZW5kUG9zPWVuZD09PXVuZGVmaW5lZD9sZW5ndGg6dG9JbmRleChlbmQsbGVuZ3RoKTt3aGlsZShlbmRQb3M+aW5kZXgpT1tpbmRleCsrXT12YWx1ZTtyZXR1cm4gT30sZmluZDpjcmVhdGVBcnJheU1ldGhvZCg1KSxmaW5kSW5kZXg6Y3JlYXRlQXJyYXlNZXRob2QoNil9KTtpZihmcmFtZXdvcmspe2ZvckVhY2guY2FsbChhcnJheShcImZpbmQsZmluZEluZGV4LGZpbGwsY29weVdpdGhpbixlbnRyaWVzLGtleXMsdmFsdWVzXCIpLGZ1bmN0aW9uKGl0KXtBcnJheVVuc2NvcGFibGVzW2l0XT10cnVlfSk7U1lNQk9MX1VOU0NPUEFCTEVTIGluIEFycmF5UHJvdG98fGhpZGRlbihBcnJheVByb3RvLFNZTUJPTF9VTlNDT1BBQkxFUyxBcnJheVVuc2NvcGFibGVzKX19KCk7IWZ1bmN0aW9uKGF0KXtkZWZpbmVTdGRJdGVyYXRvcnMoQXJyYXksQVJSQVksZnVuY3Rpb24oaXRlcmF0ZWQsa2luZCl7c2V0KHRoaXMsSVRFUix7bzp0b09iamVjdChpdGVyYXRlZCksaTowLGs6a2luZH0pfSxmdW5jdGlvbigpe3ZhciBpdGVyPXRoaXNbSVRFUl0sTz1pdGVyLm8sa2luZD1pdGVyLmssaW5kZXg9aXRlci5pKys7aWYoIU98fGluZGV4Pj1PLmxlbmd0aCl7aXRlci5vPXVuZGVmaW5lZDtyZXR1cm4gaXRlclJlc3VsdCgxKX1pZihraW5kPT1LRVkpcmV0dXJuIGl0ZXJSZXN1bHQoMCxpbmRleCk7aWYoa2luZD09VkFMVUUpcmV0dXJuIGl0ZXJSZXN1bHQoMCxPW2luZGV4XSk7cmV0dXJuIGl0ZXJSZXN1bHQoMCxbaW5kZXgsT1tpbmRleF1dKX0sVkFMVUUpO0l0ZXJhdG9yc1tBUkdVTUVOVFNdPUl0ZXJhdG9yc1tBUlJBWV07ZGVmaW5lU3RkSXRlcmF0b3JzKFN0cmluZyxTVFJJTkcsZnVuY3Rpb24oaXRlcmF0ZWQpe3NldCh0aGlzLElURVIse286U3RyaW5nKGl0ZXJhdGVkKSxpOjB9KX0sZnVuY3Rpb24oKXt2YXIgaXRlcj10aGlzW0lURVJdLE89aXRlci5vLGluZGV4PWl0ZXIuaSxwb2ludDtpZihpbmRleD49Ty5sZW5ndGgpcmV0dXJuIGl0ZXJSZXN1bHQoMSk7cG9pbnQ9YXQuY2FsbChPLGluZGV4KTtpdGVyLmkrPXBvaW50Lmxlbmd0aDtyZXR1cm4gaXRlclJlc3VsdCgwLHBvaW50KX0pfShjcmVhdGVQb2ludEF0KHRydWUpKTtERVNDJiYhZnVuY3Rpb24oUmVnRXhwUHJvdG8sX1JlZ0V4cCl7aWYoIWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBSZWdFeHAoL2EvZyxcImlcIik9PVwiL2EvaVwifWNhdGNoKGUpe319KCkpe1JlZ0V4cD1mdW5jdGlvbiBSZWdFeHAocGF0dGVybixmbGFncyl7cmV0dXJuIG5ldyBfUmVnRXhwKGNvZihwYXR0ZXJuKT09UkVHRVhQJiZmbGFncyE9PXVuZGVmaW5lZD9wYXR0ZXJuLnNvdXJjZTpwYXR0ZXJuLGZsYWdzKX07Zm9yRWFjaC5jYWxsKGdldE5hbWVzKF9SZWdFeHApLGZ1bmN0aW9uKGtleSl7a2V5IGluIFJlZ0V4cHx8ZGVmaW5lUHJvcGVydHkoUmVnRXhwLGtleSx7Y29uZmlndXJhYmxlOnRydWUsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIF9SZWdFeHBba2V5XX0sc2V0OmZ1bmN0aW9uKGl0KXtfUmVnRXhwW2tleV09aXR9fSl9KTtSZWdFeHBQcm90b1tDT05TVFJVQ1RPUl09UmVnRXhwO1JlZ0V4cFtQUk9UT1RZUEVdPVJlZ0V4cFByb3RvO2hpZGRlbihnbG9iYWwsUkVHRVhQLFJlZ0V4cCl9aWYoLy4vZy5mbGFncyE9XCJnXCIpZGVmaW5lUHJvcGVydHkoUmVnRXhwUHJvdG8sXCJmbGFnc1wiLHtjb25maWd1cmFibGU6dHJ1ZSxnZXQ6Y3JlYXRlUmVwbGFjZXIoL14uKlxcLyhcXHcqKSQvLFwiJDFcIil9KTtzZXRTcGVjaWVzKFJlZ0V4cCl9KFJlZ0V4cFtQUk9UT1RZUEVdLFJlZ0V4cCk7aXNGdW5jdGlvbihzZXRJbW1lZGlhdGUpJiZpc0Z1bmN0aW9uKGNsZWFySW1tZWRpYXRlKXx8ZnVuY3Rpb24oT05SRUFEWVNUQVRFQ0hBTkdFKXt2YXIgcG9zdE1lc3NhZ2U9Z2xvYmFsLnBvc3RNZXNzYWdlLGFkZEV2ZW50TGlzdGVuZXI9Z2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIsTWVzc2FnZUNoYW5uZWw9Z2xvYmFsLk1lc3NhZ2VDaGFubmVsLGNvdW50ZXI9MCxxdWV1ZT17fSxkZWZlcixjaGFubmVsLHBvcnQ7c2V0SW1tZWRpYXRlPWZ1bmN0aW9uKGZuKXt2YXIgYXJncz1bXSxpPTE7d2hpbGUoYXJndW1lbnRzLmxlbmd0aD5pKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7cXVldWVbKytjb3VudGVyXT1mdW5jdGlvbigpe2ludm9rZShpc0Z1bmN0aW9uKGZuKT9mbjpGdW5jdGlvbihmbiksYXJncyl9O2RlZmVyKGNvdW50ZXIpO3JldHVybiBjb3VudGVyfTtjbGVhckltbWVkaWF0ZT1mdW5jdGlvbihpZCl7ZGVsZXRlIHF1ZXVlW2lkXX07ZnVuY3Rpb24gcnVuKGlkKXtpZihoYXMocXVldWUsaWQpKXt2YXIgZm49cXVldWVbaWRdO2RlbGV0ZSBxdWV1ZVtpZF07Zm4oKX19ZnVuY3Rpb24gbGlzdG5lcihldmVudCl7cnVuKGV2ZW50LmRhdGEpfWlmKE5PREUpe2RlZmVyPWZ1bmN0aW9uKGlkKXtuZXh0VGljayhwYXJ0LmNhbGwocnVuLGlkKSl9fWVsc2UgaWYoYWRkRXZlbnRMaXN0ZW5lciYmaXNGdW5jdGlvbihwb3N0TWVzc2FnZSkmJiFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7ZGVmZXI9ZnVuY3Rpb24oaWQpe3Bvc3RNZXNzYWdlKGlkLFwiKlwiKX07YWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixsaXN0bmVyLGZhbHNlKX1lbHNlIGlmKGlzRnVuY3Rpb24oTWVzc2FnZUNoYW5uZWwpKXtjaGFubmVsPW5ldyBNZXNzYWdlQ2hhbm5lbDtwb3J0PWNoYW5uZWwucG9ydDI7Y2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2U9bGlzdG5lcjtkZWZlcj1jdHgocG9ydC5wb3N0TWVzc2FnZSxwb3J0LDEpfWVsc2UgaWYoZG9jdW1lbnQmJk9OUkVBRFlTVEFURUNIQU5HRSBpbiBkb2N1bWVudFtDUkVBVEVfRUxFTUVOVF0oXCJzY3JpcHRcIikpe2RlZmVyPWZ1bmN0aW9uKGlkKXtodG1sLmFwcGVuZENoaWxkKGRvY3VtZW50W0NSRUFURV9FTEVNRU5UXShcInNjcmlwdFwiKSlbT05SRUFEWVNUQVRFQ0hBTkdFXT1mdW5jdGlvbigpe2h0bWwucmVtb3ZlQ2hpbGQodGhpcyk7cnVuKGlkKX19fWVsc2V7ZGVmZXI9ZnVuY3Rpb24oaWQpe3NldFRpbWVvdXQocnVuLDAsaWQpfX19KFwib25yZWFkeXN0YXRlY2hhbmdlXCIpOyRkZWZpbmUoR0xPQkFMK0JJTkQse3NldEltbWVkaWF0ZTpzZXRJbW1lZGlhdGUsY2xlYXJJbW1lZGlhdGU6Y2xlYXJJbW1lZGlhdGV9KTshZnVuY3Rpb24oUHJvbWlzZSx0ZXN0KXtpc0Z1bmN0aW9uKFByb21pc2UpJiZpc0Z1bmN0aW9uKFByb21pc2UucmVzb2x2ZSkmJlByb21pc2UucmVzb2x2ZSh0ZXN0PW5ldyBQcm9taXNlKGZ1bmN0aW9uKCl7fSkpPT10ZXN0fHxmdW5jdGlvbihhc2FwLFJFQ09SRCl7ZnVuY3Rpb24gaXNUaGVuYWJsZShpdCl7dmFyIHRoZW47aWYoaXNPYmplY3QoaXQpKXRoZW49aXQudGhlbjtyZXR1cm4gaXNGdW5jdGlvbih0aGVuKT90aGVuOmZhbHNlfWZ1bmN0aW9uIGhhbmRsZWRSZWplY3Rpb25Pckhhc09uUmVqZWN0ZWQocHJvbWlzZSl7dmFyIHJlY29yZD1wcm9taXNlW1JFQ09SRF0sY2hhaW49cmVjb3JkLmMsaT0wLHJlYWN0O2lmKHJlY29yZC5oKXJldHVybiB0cnVlO3doaWxlKGNoYWluLmxlbmd0aD5pKXtyZWFjdD1jaGFpbltpKytdO2lmKHJlYWN0LmZhaWx8fGhhbmRsZWRSZWplY3Rpb25Pckhhc09uUmVqZWN0ZWQocmVhY3QuUCkpcmV0dXJuIHRydWV9fWZ1bmN0aW9uIG5vdGlmeShyZWNvcmQscmVqZWN0KXt2YXIgY2hhaW49cmVjb3JkLmM7aWYocmVqZWN0fHxjaGFpbi5sZW5ndGgpYXNhcChmdW5jdGlvbigpe3ZhciBwcm9taXNlPXJlY29yZC5wLHZhbHVlPXJlY29yZC52LG9rPXJlY29yZC5zPT0xLGk9MDtpZihyZWplY3QmJiFoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHByb21pc2UpKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aWYoIWhhbmRsZWRSZWplY3Rpb25Pckhhc09uUmVqZWN0ZWQocHJvbWlzZSkpe2lmKE5PREUpe2lmKCFwcm9jZXNzLmVtaXQoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIix2YWx1ZSxwcm9taXNlKSl7fX1lbHNlIGlmKGlzRnVuY3Rpb24oY29uc29sZS5lcnJvcikpe2NvbnNvbGUuZXJyb3IoXCJVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb25cIix2YWx1ZSl9fX0sMWUzKX1lbHNlIHdoaWxlKGNoYWluLmxlbmd0aD5pKSFmdW5jdGlvbihyZWFjdCl7dmFyIGNiPW9rP3JlYWN0Lm9rOnJlYWN0LmZhaWwscmV0LHRoZW47dHJ5e2lmKGNiKXtpZighb2spcmVjb3JkLmg9dHJ1ZTtyZXQ9Y2I9PT10cnVlP3ZhbHVlOmNiKHZhbHVlKTtpZihyZXQ9PT1yZWFjdC5QKXtyZWFjdC5yZWooVHlwZUVycm9yKFBST01JU0UrXCItY2hhaW4gY3ljbGVcIikpfWVsc2UgaWYodGhlbj1pc1RoZW5hYmxlKHJldCkpe3RoZW4uY2FsbChyZXQscmVhY3QucmVzLHJlYWN0LnJlail9ZWxzZSByZWFjdC5yZXMocmV0KX1lbHNlIHJlYWN0LnJlaih2YWx1ZSl9Y2F0Y2goZXJyKXtyZWFjdC5yZWooZXJyKX19KGNoYWluW2krK10pO2NoYWluLmxlbmd0aD0wfSl9ZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSl7dmFyIHJlY29yZD10aGlzLHRoZW4sd3JhcHBlcjtpZihyZWNvcmQuZClyZXR1cm47cmVjb3JkLmQ9dHJ1ZTtyZWNvcmQ9cmVjb3JkLnJ8fHJlY29yZDt0cnl7aWYodGhlbj1pc1RoZW5hYmxlKHZhbHVlKSl7d3JhcHBlcj17cjpyZWNvcmQsZDpmYWxzZX07dGhlbi5jYWxsKHZhbHVlLGN0eChyZXNvbHZlLHdyYXBwZXIsMSksY3R4KHJlamVjdCx3cmFwcGVyLDEpKX1lbHNle3JlY29yZC52PXZhbHVlO3JlY29yZC5zPTE7bm90aWZ5KHJlY29yZCl9fWNhdGNoKGVycil7cmVqZWN0LmNhbGwod3JhcHBlcnx8e3I6cmVjb3JkLGQ6ZmFsc2V9LGVycil9fWZ1bmN0aW9uIHJlamVjdCh2YWx1ZSl7dmFyIHJlY29yZD10aGlzO2lmKHJlY29yZC5kKXJldHVybjtyZWNvcmQuZD10cnVlO3JlY29yZD1yZWNvcmQucnx8cmVjb3JkO3JlY29yZC52PXZhbHVlO3JlY29yZC5zPTI7bm90aWZ5KHJlY29yZCx0cnVlKX1mdW5jdGlvbiBnZXRDb25zdHJ1Y3RvcihDKXt2YXIgUz1hc3NlcnRPYmplY3QoQylbU1lNQk9MX1NQRUNJRVNdO3JldHVybiBTIT11bmRlZmluZWQ/UzpDfVByb21pc2U9ZnVuY3Rpb24oZXhlY3V0b3Ipe2Fzc2VydEZ1bmN0aW9uKGV4ZWN1dG9yKTthc3NlcnRJbnN0YW5jZSh0aGlzLFByb21pc2UsUFJPTUlTRSk7dmFyIHJlY29yZD17cDp0aGlzLGM6W10sczowLGQ6ZmFsc2Usdjp1bmRlZmluZWQsaDpmYWxzZX07aGlkZGVuKHRoaXMsUkVDT1JELHJlY29yZCk7dHJ5e2V4ZWN1dG9yKGN0eChyZXNvbHZlLHJlY29yZCwxKSxjdHgocmVqZWN0LHJlY29yZCwxKSl9Y2F0Y2goZXJyKXtyZWplY3QuY2FsbChyZWNvcmQsZXJyKX19O2Fzc2lnbkhpZGRlbihQcm9taXNlW1BST1RPVFlQRV0se3RoZW46ZnVuY3Rpb24ob25GdWxmaWxsZWQsb25SZWplY3RlZCl7dmFyIFM9YXNzZXJ0T2JqZWN0KGFzc2VydE9iamVjdCh0aGlzKVtDT05TVFJVQ1RPUl0pW1NZTUJPTF9TUEVDSUVTXTt2YXIgcmVhY3Q9e29rOmlzRnVuY3Rpb24ob25GdWxmaWxsZWQpP29uRnVsZmlsbGVkOnRydWUsZmFpbDppc0Z1bmN0aW9uKG9uUmVqZWN0ZWQpP29uUmVqZWN0ZWQ6ZmFsc2V9LFA9cmVhY3QuUD1uZXcoUyE9dW5kZWZpbmVkP1M6UHJvbWlzZSkoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe3JlYWN0LnJlcz1hc3NlcnRGdW5jdGlvbihyZXNvbHZlKTtyZWFjdC5yZWo9YXNzZXJ0RnVuY3Rpb24ocmVqZWN0KX0pLHJlY29yZD10aGlzW1JFQ09SRF07cmVjb3JkLmMucHVzaChyZWFjdCk7cmVjb3JkLnMmJm5vdGlmeShyZWNvcmQpO3JldHVybiBQfSxcImNhdGNoXCI6ZnVuY3Rpb24ob25SZWplY3RlZCl7cmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsb25SZWplY3RlZCl9fSk7YXNzaWduSGlkZGVuKFByb21pc2Use2FsbDpmdW5jdGlvbihpdGVyYWJsZSl7dmFyIFByb21pc2U9Z2V0Q29uc3RydWN0b3IodGhpcyksdmFsdWVzPVtdO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLHJlamVjdCl7Zm9yT2YoaXRlcmFibGUsZmFsc2UscHVzaCx2YWx1ZXMpO3ZhciByZW1haW5pbmc9dmFsdWVzLmxlbmd0aCxyZXN1bHRzPUFycmF5KHJlbWFpbmluZyk7aWYocmVtYWluaW5nKWZvckVhY2guY2FsbCh2YWx1ZXMsZnVuY3Rpb24ocHJvbWlzZSxpbmRleCl7UHJvbWlzZS5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe3Jlc3VsdHNbaW5kZXhdPXZhbHVlOy0tcmVtYWluaW5nfHxyZXNvbHZlKHJlc3VsdHMpfSxyZWplY3QpfSk7ZWxzZSByZXNvbHZlKHJlc3VsdHMpfSl9LHJhY2U6ZnVuY3Rpb24oaXRlcmFibGUpe3ZhciBQcm9taXNlPWdldENvbnN0cnVjdG9yKHRoaXMpO3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLHJlamVjdCl7Zm9yT2YoaXRlcmFibGUsZmFsc2UsZnVuY3Rpb24ocHJvbWlzZSl7UHJvbWlzZS5yZXNvbHZlKHByb21pc2UpLnRoZW4ocmVzb2x2ZSxyZWplY3QpfSl9KX0scmVqZWN0OmZ1bmN0aW9uKHIpe3JldHVybiBuZXcoZ2V0Q29uc3RydWN0b3IodGhpcykpKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXtyZWplY3Qocil9KX0scmVzb2x2ZTpmdW5jdGlvbih4KXtyZXR1cm4gaXNPYmplY3QoeCkmJlJFQ09SRCBpbiB4JiZnZXRQcm90b3R5cGVPZih4KT09PXRoaXNbUFJPVE9UWVBFXT94Om5ldyhnZXRDb25zdHJ1Y3Rvcih0aGlzKSkoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe3Jlc29sdmUoeCl9KX19KX0obmV4dFRpY2t8fHNldEltbWVkaWF0ZSxzYWZlU3ltYm9sKFwicmVjb3JkXCIpKTtzZXRUb1N0cmluZ1RhZyhQcm9taXNlLFBST01JU0UpO3NldFNwZWNpZXMoUHJvbWlzZSk7JGRlZmluZShHTE9CQUwrRk9SQ0VEKiFpc05hdGl2ZShQcm9taXNlKSx7UHJvbWlzZTpQcm9taXNlfSl9KGdsb2JhbFtQUk9NSVNFXSk7IWZ1bmN0aW9uKCl7dmFyIFVJRD1zYWZlU3ltYm9sKFwidWlkXCIpLE8xPXNhZmVTeW1ib2woXCJPMVwiKSxXRUFLPXNhZmVTeW1ib2woXCJ3ZWFrXCIpLExFQUs9c2FmZVN5bWJvbChcImxlYWtcIiksTEFTVD1zYWZlU3ltYm9sKFwibGFzdFwiKSxGSVJTVD1zYWZlU3ltYm9sKFwiZmlyc3RcIiksU0laRT1ERVNDP3NhZmVTeW1ib2woXCJzaXplXCIpOlwic2l6ZVwiLHVpZD0wLHRtcD17fTtmdW5jdGlvbiBnZXRDb2xsZWN0aW9uKEMsTkFNRSxtZXRob2RzLGNvbW1vbk1ldGhvZHMsaXNNYXAsaXNXZWFrKXt2YXIgQURERVI9aXNNYXA/XCJzZXRcIjpcImFkZFwiLHByb3RvPUMmJkNbUFJPVE9UWVBFXSxPPXt9O2Z1bmN0aW9uIGluaXRGcm9tSXRlcmFibGUodGhhdCxpdGVyYWJsZSl7aWYoaXRlcmFibGUhPXVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSxpc01hcCx0aGF0W0FEREVSXSx0aGF0KTtyZXR1cm4gdGhhdH1mdW5jdGlvbiBmaXhTVlooa2V5LGNoYWluKXt2YXIgbWV0aG9kPXByb3RvW2tleV07aWYoZnJhbWV3b3JrKXByb3RvW2tleV09ZnVuY3Rpb24oYSxiKXt2YXIgcmVzdWx0PW1ldGhvZC5jYWxsKHRoaXMsYT09PTA/MDphLGIpO3JldHVybiBjaGFpbj90aGlzOnJlc3VsdH19aWYoIWlzTmF0aXZlKEMpfHwhKGlzV2Vha3x8IUJVR0dZX0lURVJBVE9SUyYmaGFzKHByb3RvLEZPUl9FQUNIKSYmaGFzKHByb3RvLFwiZW50cmllc1wiKSkpe0M9aXNXZWFrP2Z1bmN0aW9uKGl0ZXJhYmxlKXthc3NlcnRJbnN0YW5jZSh0aGlzLEMsTkFNRSk7c2V0KHRoaXMsVUlELHVpZCsrKTtpbml0RnJvbUl0ZXJhYmxlKHRoaXMsaXRlcmFibGUpfTpmdW5jdGlvbihpdGVyYWJsZSl7dmFyIHRoYXQ9dGhpczthc3NlcnRJbnN0YW5jZSh0aGF0LEMsTkFNRSk7c2V0KHRoYXQsTzEsY3JlYXRlKG51bGwpKTtzZXQodGhhdCxTSVpFLDApO3NldCh0aGF0LExBU1QsdW5kZWZpbmVkKTtzZXQodGhhdCxGSVJTVCx1bmRlZmluZWQpO2luaXRGcm9tSXRlcmFibGUodGhhdCxpdGVyYWJsZSl9O2Fzc2lnbkhpZGRlbihhc3NpZ25IaWRkZW4oQ1tQUk9UT1RZUEVdLG1ldGhvZHMpLGNvbW1vbk1ldGhvZHMpO2lzV2Vha3x8IURFU0N8fGRlZmluZVByb3BlcnR5KENbUFJPVE9UWVBFXSxcInNpemVcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGFzc2VydERlZmluZWQodGhpc1tTSVpFXSl9fSl9ZWxzZXt2YXIgTmF0aXZlPUMsaW5zdD1uZXcgQyxjaGFpbj1pbnN0W0FEREVSXShpc1dlYWs/e306LTAsMSksYnVnZ3laZXJvO2lmKGNoZWNrRGFuZ2VySXRlckNsb3NpbmcoZnVuY3Rpb24oTyl7bmV3IEMoTyl9KSl7Qz1mdW5jdGlvbihpdGVyYWJsZSl7YXNzZXJ0SW5zdGFuY2UodGhpcyxDLE5BTUUpO3JldHVybiBpbml0RnJvbUl0ZXJhYmxlKG5ldyBOYXRpdmUsaXRlcmFibGUpfTtDW1BST1RPVFlQRV09cHJvdG87aWYoZnJhbWV3b3JrKXByb3RvW0NPTlNUUlVDVE9SXT1DfWlzV2Vha3x8aW5zdFtGT1JfRUFDSF0oZnVuY3Rpb24odmFsLGtleSl7YnVnZ3laZXJvPTEva2V5PT09LUluZmluaXR5fSk7aWYoYnVnZ3laZXJvKXtmaXhTVlooXCJkZWxldGVcIik7Zml4U1ZaKFwiaGFzXCIpO2lzTWFwJiZmaXhTVlooXCJnZXRcIil9aWYoYnVnZ3laZXJvfHxjaGFpbiE9PWluc3QpZml4U1ZaKEFEREVSLHRydWUpfXNldFRvU3RyaW5nVGFnKEMsTkFNRSk7c2V0U3BlY2llcyhDKTtPW05BTUVdPUM7JGRlZmluZShHTE9CQUwrV1JBUCtGT1JDRUQqIWlzTmF0aXZlKEMpLE8pO2lzV2Vha3x8ZGVmaW5lU3RkSXRlcmF0b3JzKEMsTkFNRSxmdW5jdGlvbihpdGVyYXRlZCxraW5kKXtzZXQodGhpcyxJVEVSLHtvOml0ZXJhdGVkLGs6a2luZH0pfSxmdW5jdGlvbigpe3ZhciBpdGVyPXRoaXNbSVRFUl0sa2luZD1pdGVyLmssZW50cnk9aXRlci5sO3doaWxlKGVudHJ5JiZlbnRyeS5yKWVudHJ5PWVudHJ5LnA7aWYoIWl0ZXIub3x8IShpdGVyLmw9ZW50cnk9ZW50cnk/ZW50cnkubjppdGVyLm9bRklSU1RdKSl7aXRlci5vPXVuZGVmaW5lZDtyZXR1cm4gaXRlclJlc3VsdCgxKX1pZihraW5kPT1LRVkpcmV0dXJuIGl0ZXJSZXN1bHQoMCxlbnRyeS5rKTtpZihraW5kPT1WQUxVRSlyZXR1cm4gaXRlclJlc3VsdCgwLGVudHJ5LnYpO3JldHVybiBpdGVyUmVzdWx0KDAsW2VudHJ5LmssZW50cnkudl0pfSxpc01hcD9LRVkrVkFMVUU6VkFMVUUsIWlzTWFwKTtyZXR1cm4gQ31mdW5jdGlvbiBmYXN0S2V5KGl0LGNyZWF0ZSl7aWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4odHlwZW9mIGl0PT1cInN0cmluZ1wiP1wiU1wiOlwiUFwiKStpdDtpZihpc0Zyb3plbihpdCkpcmV0dXJuXCJGXCI7aWYoIWhhcyhpdCxVSUQpKXtpZighY3JlYXRlKXJldHVyblwiRVwiO2hpZGRlbihpdCxVSUQsKyt1aWQpfXJldHVyblwiT1wiK2l0W1VJRF19ZnVuY3Rpb24gZ2V0RW50cnkodGhhdCxrZXkpe3ZhciBpbmRleD1mYXN0S2V5KGtleSksZW50cnk7aWYoaW5kZXghPVwiRlwiKXJldHVybiB0aGF0W08xXVtpbmRleF07Zm9yKGVudHJ5PXRoYXRbRklSU1RdO2VudHJ5O2VudHJ5PWVudHJ5Lm4pe2lmKGVudHJ5Lms9PWtleSlyZXR1cm4gZW50cnl9fWZ1bmN0aW9uIGRlZih0aGF0LGtleSx2YWx1ZSl7dmFyIGVudHJ5PWdldEVudHJ5KHRoYXQsa2V5KSxwcmV2LGluZGV4O2lmKGVudHJ5KWVudHJ5LnY9dmFsdWU7ZWxzZXt0aGF0W0xBU1RdPWVudHJ5PXtpOmluZGV4PWZhc3RLZXkoa2V5LHRydWUpLGs6a2V5LHY6dmFsdWUscDpwcmV2PXRoYXRbTEFTVF0sbjp1bmRlZmluZWQscjpmYWxzZX07aWYoIXRoYXRbRklSU1RdKXRoYXRbRklSU1RdPWVudHJ5O2lmKHByZXYpcHJldi5uPWVudHJ5O3RoYXRbU0laRV0rKztpZihpbmRleCE9XCJGXCIpdGhhdFtPMV1baW5kZXhdPWVudHJ5fXJldHVybiB0aGF0fXZhciBjb2xsZWN0aW9uTWV0aG9kcz17Y2xlYXI6ZnVuY3Rpb24oKXtmb3IodmFyIHRoYXQ9dGhpcyxkYXRhPXRoYXRbTzFdLGVudHJ5PXRoYXRbRklSU1RdO2VudHJ5O2VudHJ5PWVudHJ5Lm4pe2VudHJ5LnI9dHJ1ZTtcbmlmKGVudHJ5LnApZW50cnkucD1lbnRyeS5wLm49dW5kZWZpbmVkO2RlbGV0ZSBkYXRhW2VudHJ5LmldfXRoYXRbRklSU1RdPXRoYXRbTEFTVF09dW5kZWZpbmVkO3RoYXRbU0laRV09MH0sXCJkZWxldGVcIjpmdW5jdGlvbihrZXkpe3ZhciB0aGF0PXRoaXMsZW50cnk9Z2V0RW50cnkodGhhdCxrZXkpO2lmKGVudHJ5KXt2YXIgbmV4dD1lbnRyeS5uLHByZXY9ZW50cnkucDtkZWxldGUgdGhhdFtPMV1bZW50cnkuaV07ZW50cnkucj10cnVlO2lmKHByZXYpcHJldi5uPW5leHQ7aWYobmV4dCluZXh0LnA9cHJldjtpZih0aGF0W0ZJUlNUXT09ZW50cnkpdGhhdFtGSVJTVF09bmV4dDtpZih0aGF0W0xBU1RdPT1lbnRyeSl0aGF0W0xBU1RdPXByZXY7dGhhdFtTSVpFXS0tfXJldHVybiEhZW50cnl9LGZvckVhY2g6ZnVuY3Rpb24oY2FsbGJhY2tmbil7dmFyIGY9Y3R4KGNhbGxiYWNrZm4sYXJndW1lbnRzWzFdLDMpLGVudHJ5O3doaWxlKGVudHJ5PWVudHJ5P2VudHJ5Lm46dGhpc1tGSVJTVF0pe2YoZW50cnkudixlbnRyeS5rLHRoaXMpO3doaWxlKGVudHJ5JiZlbnRyeS5yKWVudHJ5PWVudHJ5LnB9fSxoYXM6ZnVuY3Rpb24oa2V5KXtyZXR1cm4hIWdldEVudHJ5KHRoaXMsa2V5KX19O01hcD1nZXRDb2xsZWN0aW9uKE1hcCxNQVAse2dldDpmdW5jdGlvbihrZXkpe3ZhciBlbnRyeT1nZXRFbnRyeSh0aGlzLGtleSk7cmV0dXJuIGVudHJ5JiZlbnRyeS52fSxzZXQ6ZnVuY3Rpb24oa2V5LHZhbHVlKXtyZXR1cm4gZGVmKHRoaXMsa2V5PT09MD8wOmtleSx2YWx1ZSl9fSxjb2xsZWN0aW9uTWV0aG9kcyx0cnVlKTtTZXQ9Z2V0Q29sbGVjdGlvbihTZXQsU0VULHthZGQ6ZnVuY3Rpb24odmFsdWUpe3JldHVybiBkZWYodGhpcyx2YWx1ZT12YWx1ZT09PTA/MDp2YWx1ZSx2YWx1ZSl9fSxjb2xsZWN0aW9uTWV0aG9kcyk7ZnVuY3Rpb24gZGVmV2Vhayh0aGF0LGtleSx2YWx1ZSl7aWYoaXNGcm96ZW4oYXNzZXJ0T2JqZWN0KGtleSkpKWxlYWtTdG9yZSh0aGF0KS5zZXQoa2V5LHZhbHVlKTtlbHNle2hhcyhrZXksV0VBSyl8fGhpZGRlbihrZXksV0VBSyx7fSk7a2V5W1dFQUtdW3RoYXRbVUlEXV09dmFsdWV9cmV0dXJuIHRoYXR9ZnVuY3Rpb24gbGVha1N0b3JlKHRoYXQpe3JldHVybiB0aGF0W0xFQUtdfHxoaWRkZW4odGhhdCxMRUFLLG5ldyBNYXApW0xFQUtdfXZhciB3ZWFrTWV0aG9kcz17XCJkZWxldGVcIjpmdW5jdGlvbihrZXkpe2lmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcylbXCJkZWxldGVcIl0oa2V5KTtyZXR1cm4gaGFzKGtleSxXRUFLKSYmaGFzKGtleVtXRUFLXSx0aGlzW1VJRF0pJiZkZWxldGUga2V5W1dFQUtdW3RoaXNbVUlEXV19LGhhczpmdW5jdGlvbihrZXkpe2lmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcykuaGFzKGtleSk7cmV0dXJuIGhhcyhrZXksV0VBSykmJmhhcyhrZXlbV0VBS10sdGhpc1tVSURdKX19O1dlYWtNYXA9Z2V0Q29sbGVjdGlvbihXZWFrTWFwLFdFQUtNQVAse2dldDpmdW5jdGlvbihrZXkpe2lmKGlzT2JqZWN0KGtleSkpe2lmKGlzRnJvemVuKGtleSkpcmV0dXJuIGxlYWtTdG9yZSh0aGlzKS5nZXQoa2V5KTtpZihoYXMoa2V5LFdFQUspKXJldHVybiBrZXlbV0VBS11bdGhpc1tVSURdXX19LHNldDpmdW5jdGlvbihrZXksdmFsdWUpe3JldHVybiBkZWZXZWFrKHRoaXMsa2V5LHZhbHVlKX19LHdlYWtNZXRob2RzLHRydWUsdHJ1ZSk7aWYoZnJhbWV3b3JrJiYobmV3IFdlYWtNYXApLnNldChPYmplY3QuZnJlZXplKHRtcCksNykuZ2V0KHRtcCkhPTcpe2ZvckVhY2guY2FsbChhcnJheShcImRlbGV0ZSxoYXMsZ2V0LHNldFwiKSxmdW5jdGlvbihrZXkpe3ZhciBtZXRob2Q9V2Vha01hcFtQUk9UT1RZUEVdW2tleV07V2Vha01hcFtQUk9UT1RZUEVdW2tleV09ZnVuY3Rpb24oYSxiKXtpZihpc09iamVjdChhKSYmaXNGcm96ZW4oYSkpe3ZhciByZXN1bHQ9bGVha1N0b3JlKHRoaXMpW2tleV0oYSxiKTtyZXR1cm4ga2V5PT1cInNldFwiP3RoaXM6cmVzdWx0fXJldHVybiBtZXRob2QuY2FsbCh0aGlzLGEsYil9fSl9V2Vha1NldD1nZXRDb2xsZWN0aW9uKFdlYWtTZXQsV0VBS1NFVCx7YWRkOmZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gZGVmV2Vhayh0aGlzLHZhbHVlLHRydWUpfX0sd2Vha01ldGhvZHMsZmFsc2UsdHJ1ZSl9KCk7IWZ1bmN0aW9uKCl7ZnVuY3Rpb24gRW51bWVyYXRlKGl0ZXJhdGVkKXt2YXIga2V5cz1bXSxrZXk7Zm9yKGtleSBpbiBpdGVyYXRlZClrZXlzLnB1c2goa2V5KTtzZXQodGhpcyxJVEVSLHtvOml0ZXJhdGVkLGE6a2V5cyxpOjB9KX1jcmVhdGVJdGVyYXRvcihFbnVtZXJhdGUsT0JKRUNULGZ1bmN0aW9uKCl7dmFyIGl0ZXI9dGhpc1tJVEVSXSxrZXlzPWl0ZXIuYSxrZXk7ZG97aWYoaXRlci5pPj1rZXlzLmxlbmd0aClyZXR1cm4gaXRlclJlc3VsdCgxKX13aGlsZSghKChrZXk9a2V5c1tpdGVyLmkrK10paW4gaXRlci5vKSk7cmV0dXJuIGl0ZXJSZXN1bHQoMCxrZXkpfSk7ZnVuY3Rpb24gd3JhcChmbil7cmV0dXJuIGZ1bmN0aW9uKGl0KXthc3NlcnRPYmplY3QoaXQpO3RyeXtyZXR1cm4gZm4uYXBwbHkodW5kZWZpbmVkLGFyZ3VtZW50cyksdHJ1ZX1jYXRjaChlKXtyZXR1cm4gZmFsc2V9fX1mdW5jdGlvbiByZWZsZWN0R2V0KHRhcmdldCxwcm9wZXJ0eUtleSl7dmFyIHJlY2VpdmVyPWFyZ3VtZW50cy5sZW5ndGg8Mz90YXJnZXQ6YXJndW1lbnRzWzJdLGRlc2M9Z2V0T3duRGVzY3JpcHRvcihhc3NlcnRPYmplY3QodGFyZ2V0KSxwcm9wZXJ0eUtleSkscHJvdG87aWYoZGVzYylyZXR1cm4gaGFzKGRlc2MsXCJ2YWx1ZVwiKT9kZXNjLnZhbHVlOmRlc2MuZ2V0PT09dW5kZWZpbmVkP3VuZGVmaW5lZDpkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtyZXR1cm4gaXNPYmplY3QocHJvdG89Z2V0UHJvdG90eXBlT2YodGFyZ2V0KSk/cmVmbGVjdEdldChwcm90byxwcm9wZXJ0eUtleSxyZWNlaXZlcik6dW5kZWZpbmVkfWZ1bmN0aW9uIHJlZmxlY3RTZXQodGFyZ2V0LHByb3BlcnR5S2V5LFYpe3ZhciByZWNlaXZlcj1hcmd1bWVudHMubGVuZ3RoPDQ/dGFyZ2V0OmFyZ3VtZW50c1szXSxvd25EZXNjPWdldE93bkRlc2NyaXB0b3IoYXNzZXJ0T2JqZWN0KHRhcmdldCkscHJvcGVydHlLZXkpLGV4aXN0aW5nRGVzY3JpcHRvcixwcm90bztpZighb3duRGVzYyl7aWYoaXNPYmplY3QocHJvdG89Z2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpe3JldHVybiByZWZsZWN0U2V0KHByb3RvLHByb3BlcnR5S2V5LFYscmVjZWl2ZXIpfW93bkRlc2M9ZGVzY3JpcHRvcigwKX1pZihoYXMob3duRGVzYyxcInZhbHVlXCIpKXtpZihvd25EZXNjLndyaXRhYmxlPT09ZmFsc2V8fCFpc09iamVjdChyZWNlaXZlcikpcmV0dXJuIGZhbHNlO2V4aXN0aW5nRGVzY3JpcHRvcj1nZXRPd25EZXNjcmlwdG9yKHJlY2VpdmVyLHByb3BlcnR5S2V5KXx8ZGVzY3JpcHRvcigwKTtleGlzdGluZ0Rlc2NyaXB0b3IudmFsdWU9VjtyZXR1cm4gZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIscHJvcGVydHlLZXksZXhpc3RpbmdEZXNjcmlwdG9yKSx0cnVlfXJldHVybiBvd25EZXNjLnNldD09PXVuZGVmaW5lZD9mYWxzZToob3duRGVzYy5zZXQuY2FsbChyZWNlaXZlcixWKSx0cnVlKX12YXIgaXNFeHRlbnNpYmxlPU9iamVjdC5pc0V4dGVuc2libGV8fHJldHVybkl0O3ZhciByZWZsZWN0PXthcHBseTpjdHgoY2FsbCxhcHBseSwzKSxjb25zdHJ1Y3Q6ZnVuY3Rpb24odGFyZ2V0LGFyZ3VtZW50c0xpc3Qpe3ZhciBwcm90bz1hc3NlcnRGdW5jdGlvbihhcmd1bWVudHMubGVuZ3RoPDM/dGFyZ2V0OmFyZ3VtZW50c1syXSlbUFJPVE9UWVBFXSxpbnN0YW5jZT1jcmVhdGUoaXNPYmplY3QocHJvdG8pP3Byb3RvOk9iamVjdFByb3RvKSxyZXN1bHQ9YXBwbHkuY2FsbCh0YXJnZXQsaW5zdGFuY2UsYXJndW1lbnRzTGlzdCk7cmV0dXJuIGlzT2JqZWN0KHJlc3VsdCk/cmVzdWx0Omluc3RhbmNlfSxkZWZpbmVQcm9wZXJ0eTp3cmFwKGRlZmluZVByb3BlcnR5KSxkZWxldGVQcm9wZXJ0eTpmdW5jdGlvbih0YXJnZXQscHJvcGVydHlLZXkpe3ZhciBkZXNjPWdldE93bkRlc2NyaXB0b3IoYXNzZXJ0T2JqZWN0KHRhcmdldCkscHJvcGVydHlLZXkpO3JldHVybiBkZXNjJiYhZGVzYy5jb25maWd1cmFibGU/ZmFsc2U6ZGVsZXRlIHRhcmdldFtwcm9wZXJ0eUtleV19LGVudW1lcmF0ZTpmdW5jdGlvbih0YXJnZXQpe3JldHVybiBuZXcgRW51bWVyYXRlKGFzc2VydE9iamVjdCh0YXJnZXQpKX0sZ2V0OnJlZmxlY3RHZXQsZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOmZ1bmN0aW9uKHRhcmdldCxwcm9wZXJ0eUtleSl7cmV0dXJuIGdldE93bkRlc2NyaXB0b3IoYXNzZXJ0T2JqZWN0KHRhcmdldCkscHJvcGVydHlLZXkpfSxnZXRQcm90b3R5cGVPZjpmdW5jdGlvbih0YXJnZXQpe3JldHVybiBnZXRQcm90b3R5cGVPZihhc3NlcnRPYmplY3QodGFyZ2V0KSl9LGhhczpmdW5jdGlvbih0YXJnZXQscHJvcGVydHlLZXkpe3JldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXR9LGlzRXh0ZW5zaWJsZTpmdW5jdGlvbih0YXJnZXQpe3JldHVybiEhaXNFeHRlbnNpYmxlKGFzc2VydE9iamVjdCh0YXJnZXQpKX0sb3duS2V5czpvd25LZXlzLHByZXZlbnRFeHRlbnNpb25zOndyYXAoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zfHxyZXR1cm5JdCksc2V0OnJlZmxlY3RTZXR9O2lmKHNldFByb3RvdHlwZU9mKXJlZmxlY3Quc2V0UHJvdG90eXBlT2Y9ZnVuY3Rpb24odGFyZ2V0LHByb3RvKXtyZXR1cm4gc2V0UHJvdG90eXBlT2YoYXNzZXJ0T2JqZWN0KHRhcmdldCkscHJvdG8pLHRydWV9OyRkZWZpbmUoR0xPQkFMLHtSZWZsZWN0Ont9fSk7JGRlZmluZShTVEFUSUMsXCJSZWZsZWN0XCIscmVmbGVjdCl9KCk7IWZ1bmN0aW9uKCl7JGRlZmluZShQUk9UTyxBUlJBWSx7aW5jbHVkZXM6Y3JlYXRlQXJyYXlDb250YWlucyh0cnVlKX0pOyRkZWZpbmUoUFJPVE8sU1RSSU5HLHthdDpjcmVhdGVQb2ludEF0KHRydWUpfSk7ZnVuY3Rpb24gY3JlYXRlT2JqZWN0VG9BcnJheShpc0VudHJpZXMpe3JldHVybiBmdW5jdGlvbihvYmplY3Qpe3ZhciBPPXRvT2JqZWN0KG9iamVjdCksa2V5cz1nZXRLZXlzKG9iamVjdCksbGVuZ3RoPWtleXMubGVuZ3RoLGk9MCxyZXN1bHQ9QXJyYXkobGVuZ3RoKSxrZXk7aWYoaXNFbnRyaWVzKXdoaWxlKGxlbmd0aD5pKXJlc3VsdFtpXT1ba2V5PWtleXNbaSsrXSxPW2tleV1dO2Vsc2Ugd2hpbGUobGVuZ3RoPmkpcmVzdWx0W2ldPU9ba2V5c1tpKytdXTtyZXR1cm4gcmVzdWx0fX0kZGVmaW5lKFNUQVRJQyxPQkpFQ1Qse2dldE93blByb3BlcnR5RGVzY3JpcHRvcnM6ZnVuY3Rpb24ob2JqZWN0KXt2YXIgTz10b09iamVjdChvYmplY3QpLHJlc3VsdD17fTtmb3JFYWNoLmNhbGwob3duS2V5cyhPKSxmdW5jdGlvbihrZXkpe2RlZmluZVByb3BlcnR5KHJlc3VsdCxrZXksZGVzY3JpcHRvcigwLGdldE93bkRlc2NyaXB0b3IoTyxrZXkpKSl9KTtyZXR1cm4gcmVzdWx0fSx2YWx1ZXM6Y3JlYXRlT2JqZWN0VG9BcnJheShmYWxzZSksZW50cmllczpjcmVhdGVPYmplY3RUb0FycmF5KHRydWUpfSk7JGRlZmluZShTVEFUSUMsUkVHRVhQLHtlc2NhcGU6Y3JlYXRlUmVwbGFjZXIoLyhbXFxcXFxcLVtcXF17fSgpKis/LixeJHxdKS9nLFwiXFxcXCQxXCIsdHJ1ZSl9KX0oKTshZnVuY3Rpb24oUkVGRVJFTkNFKXtSRUZFUkVOQ0VfR0VUPWdldFdlbGxLbm93blN5bWJvbChSRUZFUkVOQ0UrXCJHZXRcIix0cnVlKTt2YXIgUkVGRVJFTkNFX1NFVD1nZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFK1NFVCx0cnVlKSxSRUZFUkVOQ0VfREVMRVRFPWdldFdlbGxLbm93blN5bWJvbChSRUZFUkVOQ0UrXCJEZWxldGVcIix0cnVlKTskZGVmaW5lKFNUQVRJQyxTWU1CT0wse3JlZmVyZW5jZUdldDpSRUZFUkVOQ0VfR0VULHJlZmVyZW5jZVNldDpSRUZFUkVOQ0VfU0VULHJlZmVyZW5jZURlbGV0ZTpSRUZFUkVOQ0VfREVMRVRFfSk7aGlkZGVuKEZ1bmN0aW9uUHJvdG8sUkVGRVJFTkNFX0dFVCxyZXR1cm5UaGlzKTtmdW5jdGlvbiBzZXRNYXBNZXRob2RzKENvbnN0cnVjdG9yKXtpZihDb25zdHJ1Y3Rvcil7dmFyIE1hcFByb3RvPUNvbnN0cnVjdG9yW1BST1RPVFlQRV07aGlkZGVuKE1hcFByb3RvLFJFRkVSRU5DRV9HRVQsTWFwUHJvdG8uZ2V0KTtoaWRkZW4oTWFwUHJvdG8sUkVGRVJFTkNFX1NFVCxNYXBQcm90by5zZXQpO2hpZGRlbihNYXBQcm90byxSRUZFUkVOQ0VfREVMRVRFLE1hcFByb3RvW1wiZGVsZXRlXCJdKX19c2V0TWFwTWV0aG9kcyhNYXApO3NldE1hcE1ldGhvZHMoV2Vha01hcCl9KFwicmVmZXJlbmNlXCIpOyFmdW5jdGlvbihhcnJheVN0YXRpY3Mpe2Z1bmN0aW9uIHNldEFycmF5U3RhdGljcyhrZXlzLGxlbmd0aCl7Zm9yRWFjaC5jYWxsKGFycmF5KGtleXMpLGZ1bmN0aW9uKGtleSl7aWYoa2V5IGluIEFycmF5UHJvdG8pYXJyYXlTdGF0aWNzW2tleV09Y3R4KGNhbGwsQXJyYXlQcm90b1trZXldLGxlbmd0aCl9KX1zZXRBcnJheVN0YXRpY3MoXCJwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzXCIsMSk7c2V0QXJyYXlTdGF0aWNzKFwiaW5kZXhPZixldmVyeSxzb21lLGZvckVhY2gsbWFwLGZpbHRlcixmaW5kLGZpbmRJbmRleCxpbmNsdWRlc1wiLDMpO3NldEFycmF5U3RhdGljcyhcImpvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZixcIitcInJlZHVjZSxyZWR1Y2VSaWdodCxjb3B5V2l0aGluLGZpbGwsdHVyblwiKTskZGVmaW5lKFNUQVRJQyxBUlJBWSxhcnJheVN0YXRpY3MpfSh7fSk7IWZ1bmN0aW9uKE5vZGVMaXN0KXtpZihmcmFtZXdvcmsmJk5vZGVMaXN0JiYhKFNZTUJPTF9JVEVSQVRPUiBpbiBOb2RlTGlzdFtQUk9UT1RZUEVdKSl7aGlkZGVuKE5vZGVMaXN0W1BST1RPVFlQRV0sU1lNQk9MX0lURVJBVE9SLEl0ZXJhdG9yc1tBUlJBWV0pfUl0ZXJhdG9ycy5Ob2RlTGlzdD1JdGVyYXRvcnNbQVJSQVldfShnbG9iYWwuTm9kZUxpc3QpfSh0eXBlb2Ygc2VsZiE9XCJ1bmRlZmluZWRcIiYmc2VsZi5NYXRoPT09TWF0aD9zZWxmOkZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSx0cnVlKX0se31dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpeyhmdW5jdGlvbihnbG9iYWwpeyFmdW5jdGlvbihnbG9iYWwpe1widXNlIHN0cmljdFwiO3ZhciBoYXNPd249T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgdW5kZWZpbmVkO3ZhciBpdGVyYXRvclN5bWJvbD10eXBlb2YgU3ltYm9sPT09XCJmdW5jdGlvblwiJiZTeW1ib2wuaXRlcmF0b3J8fFwiQEBpdGVyYXRvclwiO3ZhciBpbk1vZHVsZT10eXBlb2YgbW9kdWxlPT09XCJvYmplY3RcIjt2YXIgcnVudGltZT1nbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO2lmKHJ1bnRpbWUpe2lmKGluTW9kdWxlKXttb2R1bGUuZXhwb3J0cz1ydW50aW1lfXJldHVybn1ydW50aW1lPWdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU9aW5Nb2R1bGU/bW9kdWxlLmV4cG9ydHM6e307ZnVuY3Rpb24gd3JhcChpbm5lckZuLG91dGVyRm4sc2VsZix0cnlMb2NzTGlzdCl7cmV0dXJuIG5ldyBHZW5lcmF0b3IoaW5uZXJGbixvdXRlckZuLHNlbGZ8fG51bGwsdHJ5TG9jc0xpc3R8fFtdKX1ydW50aW1lLndyYXA9d3JhcDtmdW5jdGlvbiB0cnlDYXRjaChmbixvYmosYXJnKXt0cnl7cmV0dXJue3R5cGU6XCJub3JtYWxcIixhcmc6Zm4uY2FsbChvYmosYXJnKX19Y2F0Y2goZXJyKXtyZXR1cm57dHlwZTpcInRocm93XCIsYXJnOmVycn19fXZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0PVwic3VzcGVuZGVkU3RhcnRcIjt2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZD1cInN1c3BlbmRlZFlpZWxkXCI7dmFyIEdlblN0YXRlRXhlY3V0aW5nPVwiZXhlY3V0aW5nXCI7dmFyIEdlblN0YXRlQ29tcGxldGVkPVwiY29tcGxldGVkXCI7dmFyIENvbnRpbnVlU2VudGluZWw9e307ZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKXt9ZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKXt9dmFyIEdwPUdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZT1HZW5lcmF0b3IucHJvdG90eXBlO0dlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZT1HcC5jb25zdHJ1Y3Rvcj1HZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3Rvcj1HZW5lcmF0b3JGdW5jdGlvbjtHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZT1cIkdlbmVyYXRvckZ1bmN0aW9uXCI7cnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uPWZ1bmN0aW9uKGdlbkZ1bil7dmFyIGN0b3I9dHlwZW9mIGdlbkZ1bj09PVwiZnVuY3Rpb25cIiYmZ2VuRnVuLmNvbnN0cnVjdG9yO3JldHVybiBjdG9yP2N0b3I9PT1HZW5lcmF0b3JGdW5jdGlvbnx8KGN0b3IuZGlzcGxheU5hbWV8fGN0b3IubmFtZSk9PT1cIkdlbmVyYXRvckZ1bmN0aW9uXCI6ZmFsc2V9O3J1bnRpbWUubWFyaz1mdW5jdGlvbihnZW5GdW4pe2dlbkZ1bi5fX3Byb3RvX189R2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7Z2VuRnVuLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEdwKTtyZXR1cm4gZ2VuRnVufTtydW50aW1lLmFzeW5jPWZ1bmN0aW9uKGlubmVyRm4sb3V0ZXJGbixzZWxmLHRyeUxvY3NMaXN0KXtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe3ZhciBnZW5lcmF0b3I9d3JhcChpbm5lckZuLG91dGVyRm4sc2VsZix0cnlMb2NzTGlzdCk7dmFyIGNhbGxOZXh0PXN0ZXAuYmluZChnZW5lcmF0b3IubmV4dCk7dmFyIGNhbGxUaHJvdz1zdGVwLmJpbmQoZ2VuZXJhdG9yW1widGhyb3dcIl0pO2Z1bmN0aW9uIHN0ZXAoYXJnKXt2YXIgcmVjb3JkPXRyeUNhdGNoKHRoaXMsbnVsbCxhcmcpO2lmKHJlY29yZC50eXBlPT09XCJ0aHJvd1wiKXtyZWplY3QocmVjb3JkLmFyZyk7cmV0dXJufXZhciBpbmZvPXJlY29yZC5hcmc7aWYoaW5mby5kb25lKXtyZXNvbHZlKGluZm8udmFsdWUpfWVsc2V7UHJvbWlzZS5yZXNvbHZlKGluZm8udmFsdWUpLnRoZW4oY2FsbE5leHQsY2FsbFRocm93KX19Y2FsbE5leHQoKX0pfTtmdW5jdGlvbiBHZW5lcmF0b3IoaW5uZXJGbixvdXRlckZuLHNlbGYsdHJ5TG9jc0xpc3Qpe3ZhciBnZW5lcmF0b3I9b3V0ZXJGbj9PYmplY3QuY3JlYXRlKG91dGVyRm4ucHJvdG90eXBlKTp0aGlzO3ZhciBjb250ZXh0PW5ldyBDb250ZXh0KHRyeUxvY3NMaXN0KTt2YXIgc3RhdGU9R2VuU3RhdGVTdXNwZW5kZWRTdGFydDtmdW5jdGlvbiBpbnZva2UobWV0aG9kLGFyZyl7aWYoc3RhdGU9PT1HZW5TdGF0ZUV4ZWN1dGluZyl7dGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKX1pZihzdGF0ZT09PUdlblN0YXRlQ29tcGxldGVkKXtyZXR1cm4gZG9uZVJlc3VsdCgpfXdoaWxlKHRydWUpe3ZhciBkZWxlZ2F0ZT1jb250ZXh0LmRlbGVnYXRlO2lmKGRlbGVnYXRlKXt2YXIgcmVjb3JkPXRyeUNhdGNoKGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sZGVsZWdhdGUuaXRlcmF0b3IsYXJnKTtpZihyZWNvcmQudHlwZT09PVwidGhyb3dcIil7Y29udGV4dC5kZWxlZ2F0ZT1udWxsO21ldGhvZD1cInRocm93XCI7YXJnPXJlY29yZC5hcmc7Y29udGludWV9bWV0aG9kPVwibmV4dFwiO2FyZz11bmRlZmluZWQ7dmFyIGluZm89cmVjb3JkLmFyZztpZihpbmZvLmRvbmUpe2NvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV09aW5mby52YWx1ZTtjb250ZXh0Lm5leHQ9ZGVsZWdhdGUubmV4dExvY31lbHNle3N0YXRlPUdlblN0YXRlU3VzcGVuZGVkWWllbGQ7cmV0dXJuIGluZm99Y29udGV4dC5kZWxlZ2F0ZT1udWxsfWlmKG1ldGhvZD09PVwibmV4dFwiKXtpZihzdGF0ZT09PUdlblN0YXRlU3VzcGVuZGVkU3RhcnQmJnR5cGVvZiBhcmchPT1cInVuZGVmaW5lZFwiKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdCB0byBzZW5kIFwiK0pTT04uc3RyaW5naWZ5KGFyZykrXCIgdG8gbmV3Ym9ybiBnZW5lcmF0b3JcIil9aWYoc3RhdGU9PT1HZW5TdGF0ZVN1c3BlbmRlZFlpZWxkKXtjb250ZXh0LnNlbnQ9YXJnfWVsc2V7ZGVsZXRlIGNvbnRleHQuc2VudH19ZWxzZSBpZihtZXRob2Q9PT1cInRocm93XCIpe2lmKHN0YXRlPT09R2VuU3RhdGVTdXNwZW5kZWRTdGFydCl7c3RhdGU9R2VuU3RhdGVDb21wbGV0ZWQ7dGhyb3cgYXJnfWlmKGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSl7bWV0aG9kPVwibmV4dFwiO2FyZz11bmRlZmluZWR9fWVsc2UgaWYobWV0aG9kPT09XCJyZXR1cm5cIil7Y29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIixhcmcpfXN0YXRlPUdlblN0YXRlRXhlY3V0aW5nO3ZhciByZWNvcmQ9dHJ5Q2F0Y2goaW5uZXJGbixzZWxmLGNvbnRleHQpO2lmKHJlY29yZC50eXBlPT09XCJub3JtYWxcIil7c3RhdGU9Y29udGV4dC5kb25lP0dlblN0YXRlQ29tcGxldGVkOkdlblN0YXRlU3VzcGVuZGVkWWllbGQ7dmFyIGluZm89e3ZhbHVlOnJlY29yZC5hcmcsZG9uZTpjb250ZXh0LmRvbmV9O2lmKHJlY29yZC5hcmc9PT1Db250aW51ZVNlbnRpbmVsKXtpZihjb250ZXh0LmRlbGVnYXRlJiZtZXRob2Q9PT1cIm5leHRcIil7YXJnPXVuZGVmaW5lZH19ZWxzZXtyZXR1cm4gaW5mb319ZWxzZSBpZihyZWNvcmQudHlwZT09PVwidGhyb3dcIil7c3RhdGU9R2VuU3RhdGVDb21wbGV0ZWQ7aWYobWV0aG9kPT09XCJuZXh0XCIpe2NvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24ocmVjb3JkLmFyZyl9ZWxzZXthcmc9cmVjb3JkLmFyZ319fX1nZW5lcmF0b3IubmV4dD1pbnZva2UuYmluZChnZW5lcmF0b3IsXCJuZXh0XCIpO2dlbmVyYXRvcltcInRocm93XCJdPWludm9rZS5iaW5kKGdlbmVyYXRvcixcInRocm93XCIpO2dlbmVyYXRvcltcInJldHVyblwiXT1pbnZva2UuYmluZChnZW5lcmF0b3IsXCJyZXR1cm5cIik7cmV0dXJuIGdlbmVyYXRvcn1HcFtpdGVyYXRvclN5bWJvbF09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307R3AudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgR2VuZXJhdG9yXVwifTtmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcyl7dmFyIGVudHJ5PXt0cnlMb2M6bG9jc1swXX07aWYoMSBpbiBsb2NzKXtlbnRyeS5jYXRjaExvYz1sb2NzWzFdfWlmKDIgaW4gbG9jcyl7ZW50cnkuZmluYWxseUxvYz1sb2NzWzJdO2VudHJ5LmFmdGVyTG9jPWxvY3NbM119dGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpfWZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpe3ZhciByZWNvcmQ9ZW50cnkuY29tcGxldGlvbnx8e307cmVjb3JkLnR5cGU9XCJub3JtYWxcIjtkZWxldGUgcmVjb3JkLmFyZztlbnRyeS5jb21wbGV0aW9uPXJlY29yZH1mdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KXt0aGlzLnRyeUVudHJpZXM9W3t0cnlMb2M6XCJyb290XCJ9XTt0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSx0aGlzKTt0aGlzLnJlc2V0KCl9cnVudGltZS5rZXlzPWZ1bmN0aW9uKG9iamVjdCl7dmFyIGtleXM9W107Zm9yKHZhciBrZXkgaW4gb2JqZWN0KXtrZXlzLnB1c2goa2V5KX1rZXlzLnJldmVyc2UoKTtyZXR1cm4gZnVuY3Rpb24gbmV4dCgpe3doaWxlKGtleXMubGVuZ3RoKXt2YXIga2V5PWtleXMucG9wKCk7aWYoa2V5IGluIG9iamVjdCl7bmV4dC52YWx1ZT1rZXk7bmV4dC5kb25lPWZhbHNlO3JldHVybiBuZXh0fX1uZXh0LmRvbmU9dHJ1ZTtyZXR1cm4gbmV4dH19O2Z1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSl7aWYoaXRlcmFibGUpe3ZhciBpdGVyYXRvck1ldGhvZD1pdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07aWYoaXRlcmF0b3JNZXRob2Qpe3JldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKX1pZih0eXBlb2YgaXRlcmFibGUubmV4dD09PVwiZnVuY3Rpb25cIil7cmV0dXJuIGl0ZXJhYmxlfWlmKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKXt2YXIgaT0tMSxuZXh0PWZ1bmN0aW9uIG5leHQoKXt3aGlsZSgrK2k8aXRlcmFibGUubGVuZ3RoKXtpZihoYXNPd24uY2FsbChpdGVyYWJsZSxpKSl7bmV4dC52YWx1ZT1pdGVyYWJsZVtpXTtuZXh0LmRvbmU9ZmFsc2U7cmV0dXJuIG5leHR9fW5leHQudmFsdWU9dW5kZWZpbmVkO25leHQuZG9uZT10cnVlO3JldHVybiBuZXh0fTtyZXR1cm4gbmV4dC5uZXh0PW5leHR9fXJldHVybntuZXh0OmRvbmVSZXN1bHR9fXJ1bnRpbWUudmFsdWVzPXZhbHVlcztmdW5jdGlvbiBkb25lUmVzdWx0KCl7cmV0dXJue3ZhbHVlOnVuZGVmaW5lZCxkb25lOnRydWV9fUNvbnRleHQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpDb250ZXh0LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy5wcmV2PTA7dGhpcy5uZXh0PTA7dGhpcy5zZW50PXVuZGVmaW5lZDt0aGlzLmRvbmU9ZmFsc2U7dGhpcy5kZWxlZ2F0ZT1udWxsO3RoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO2Zvcih2YXIgdGVtcEluZGV4PTAsdGVtcE5hbWU7aGFzT3duLmNhbGwodGhpcyx0ZW1wTmFtZT1cInRcIit0ZW1wSW5kZXgpfHx0ZW1wSW5kZXg8MjA7Kyt0ZW1wSW5kZXgpe3RoaXNbdGVtcE5hbWVdPW51bGx9fSxzdG9wOmZ1bmN0aW9uKCl7dGhpcy5kb25lPXRydWU7dmFyIHJvb3RFbnRyeT10aGlzLnRyeUVudHJpZXNbMF07dmFyIHJvb3RSZWNvcmQ9cm9vdEVudHJ5LmNvbXBsZXRpb247aWYocm9vdFJlY29yZC50eXBlPT09XCJ0aHJvd1wiKXt0aHJvdyByb290UmVjb3JkLmFyZ31yZXR1cm4gdGhpcy5ydmFsfSxkaXNwYXRjaEV4Y2VwdGlvbjpmdW5jdGlvbihleGNlcHRpb24pe2lmKHRoaXMuZG9uZSl7dGhyb3cgZXhjZXB0aW9ufXZhciBjb250ZXh0PXRoaXM7ZnVuY3Rpb24gaGFuZGxlKGxvYyxjYXVnaHQpe3JlY29yZC50eXBlPVwidGhyb3dcIjtyZWNvcmQuYXJnPWV4Y2VwdGlvbjtjb250ZXh0Lm5leHQ9bG9jO3JldHVybiEhY2F1Z2h0fWZvcih2YXIgaT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7aT49MDstLWkpe3ZhciBlbnRyeT10aGlzLnRyeUVudHJpZXNbaV07dmFyIHJlY29yZD1lbnRyeS5jb21wbGV0aW9uO2lmKGVudHJ5LnRyeUxvYz09PVwicm9vdFwiKXtyZXR1cm4gaGFuZGxlKFwiZW5kXCIpfWlmKGVudHJ5LnRyeUxvYzw9dGhpcy5wcmV2KXt2YXIgaGFzQ2F0Y2g9aGFzT3duLmNhbGwoZW50cnksXCJjYXRjaExvY1wiKTt2YXIgaGFzRmluYWxseT1oYXNPd24uY2FsbChlbnRyeSxcImZpbmFsbHlMb2NcIik7aWYoaGFzQ2F0Y2gmJmhhc0ZpbmFsbHkpe2lmKHRoaXMucHJldjxlbnRyeS5jYXRjaExvYyl7cmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYyx0cnVlKX1lbHNlIGlmKHRoaXMucHJldjxlbnRyeS5maW5hbGx5TG9jKXtyZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpfX1lbHNlIGlmKGhhc0NhdGNoKXtpZih0aGlzLnByZXY8ZW50cnkuY2F0Y2hMb2Mpe3JldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsdHJ1ZSl9fWVsc2UgaWYoaGFzRmluYWxseSl7aWYodGhpcy5wcmV2PGVudHJ5LmZpbmFsbHlMb2Mpe3JldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyl9fWVsc2V7dGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIil9fX19LGFicnVwdDpmdW5jdGlvbih0eXBlLGFyZyl7Zm9yKHZhciBpPXRoaXMudHJ5RW50cmllcy5sZW5ndGgtMTtpPj0wOy0taSl7dmFyIGVudHJ5PXRoaXMudHJ5RW50cmllc1tpXTtpZihlbnRyeS50cnlMb2M8PXRoaXMucHJldiYmaGFzT3duLmNhbGwoZW50cnksXCJmaW5hbGx5TG9jXCIpJiZ0aGlzLnByZXY8ZW50cnkuZmluYWxseUxvYyl7dmFyIGZpbmFsbHlFbnRyeT1lbnRyeTticmVha319aWYoZmluYWxseUVudHJ5JiYodHlwZT09PVwiYnJlYWtcInx8dHlwZT09PVwiY29udGludWVcIikmJmZpbmFsbHlFbnRyeS50cnlMb2M8PWFyZyYmYXJnPGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKXtmaW5hbGx5RW50cnk9bnVsbH12YXIgcmVjb3JkPWZpbmFsbHlFbnRyeT9maW5hbGx5RW50cnkuY29tcGxldGlvbjp7fTtyZWNvcmQudHlwZT10eXBlO3JlY29yZC5hcmc9YXJnO2lmKGZpbmFsbHlFbnRyeSl7dGhpcy5uZXh0PWZpbmFsbHlFbnRyeS5maW5hbGx5TG9jfWVsc2V7dGhpcy5jb21wbGV0ZShyZWNvcmQpfXJldHVybiBDb250aW51ZVNlbnRpbmVsfSxjb21wbGV0ZTpmdW5jdGlvbihyZWNvcmQsYWZ0ZXJMb2Mpe2lmKHJlY29yZC50eXBlPT09XCJ0aHJvd1wiKXt0aHJvdyByZWNvcmQuYXJnfWlmKHJlY29yZC50eXBlPT09XCJicmVha1wifHxyZWNvcmQudHlwZT09PVwiY29udGludWVcIil7dGhpcy5uZXh0PXJlY29yZC5hcmd9ZWxzZSBpZihyZWNvcmQudHlwZT09PVwicmV0dXJuXCIpe3RoaXMucnZhbD1yZWNvcmQuYXJnO3RoaXMubmV4dD1cImVuZFwifWVsc2UgaWYocmVjb3JkLnR5cGU9PT1cIm5vcm1hbFwiJiZhZnRlckxvYyl7dGhpcy5uZXh0PWFmdGVyTG9jfXJldHVybiBDb250aW51ZVNlbnRpbmVsfSxmaW5pc2g6ZnVuY3Rpb24oZmluYWxseUxvYyl7Zm9yKHZhciBpPXRoaXMudHJ5RW50cmllcy5sZW5ndGgtMTtpPj0wOy0taSl7dmFyIGVudHJ5PXRoaXMudHJ5RW50cmllc1tpXTtpZihlbnRyeS5maW5hbGx5TG9jPT09ZmluYWxseUxvYyl7cmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbixlbnRyeS5hZnRlckxvYyl9fX0sXCJjYXRjaFwiOmZ1bmN0aW9uKHRyeUxvYyl7Zm9yKHZhciBpPXRoaXMudHJ5RW50cmllcy5sZW5ndGgtMTtpPj0wOy0taSl7dmFyIGVudHJ5PXRoaXMudHJ5RW50cmllc1tpXTtpZihlbnRyeS50cnlMb2M9PT10cnlMb2Mpe3ZhciByZWNvcmQ9ZW50cnkuY29tcGxldGlvbjtpZihyZWNvcmQudHlwZT09PVwidGhyb3dcIil7dmFyIHRocm93bj1yZWNvcmQuYXJnO3Jlc2V0VHJ5RW50cnkoZW50cnkpfXJldHVybiB0aHJvd259fXRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKX0sZGVsZWdhdGVZaWVsZDpmdW5jdGlvbihpdGVyYWJsZSxyZXN1bHROYW1lLG5leHRMb2Mpe3RoaXMuZGVsZWdhdGU9e2l0ZXJhdG9yOnZhbHVlcyhpdGVyYWJsZSkscmVzdWx0TmFtZTpyZXN1bHROYW1lLG5leHRMb2M6bmV4dExvY307cmV0dXJuIENvbnRpbnVlU2VudGluZWx9fX0odHlwZW9mIGdsb2JhbD09PVwib2JqZWN0XCI/Z2xvYmFsOnR5cGVvZiB3aW5kb3c9PT1cIm9iamVjdFwiP3dpbmRvdzp0aGlzKX0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsIT09XCJ1bmRlZmluZWRcIj9nbG9iYWw6dHlwZW9mIHNlbGYhPT1cInVuZGVmaW5lZFwiP3NlbGY6dHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCI/d2luZG93Ont9KX0se31dfSx7fSxbMV0pO1xufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aVlXSmxiR2xtZVM5dWIyUmxYMjF2WkhWc1pYTXZZbUZpWld3dFkyOXlaUzlpY205M2MyVnlMWEJ2YkhsbWFXeHNMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3UVVGQlFUdEJRVU5CSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdaU2gwTEc0c2NpbDdablZ1WTNScGIyNGdjeWh2TEhVcGUybG1LQ0Z1VzI5ZEtYdHBaaWdoZEZ0dlhTbDdkbUZ5SUdFOWRIbHdaVzltSUhKbGNYVnBjbVU5UFZ3aVpuVnVZM1JwYjI1Y0lpWW1jbVZ4ZFdseVpUdHBaaWdoZFNZbVlTbHlaWFIxY200Z1lTaHZMQ0V3S1R0cFppaHBLWEpsZEhWeWJpQnBLRzhzSVRBcE8zWmhjaUJtUFc1bGR5QkZjbkp2Y2loY0lrTmhibTV2ZENCbWFXNWtJRzF2WkhWc1pTQW5YQ0lyYnl0Y0lpZGNJaWs3ZEdoeWIzY2daaTVqYjJSbFBWd2lUVTlFVlV4RlgwNVBWRjlHVDFWT1JGd2lMR1o5ZG1GeUlHdzlibHR2WFQxN1pYaHdiM0owY3pwN2ZYMDdkRnR2WFZzd1hTNWpZV3hzS0d3dVpYaHdiM0owY3l4bWRXNWpkR2x2YmlobEtYdDJZWElnYmoxMFcyOWRXekZkVzJWZE8zSmxkSFZ5YmlCektHNC9ianBsS1gwc2JDeHNMbVY0Y0c5eWRITXNaU3gwTEc0c2NpbDljbVYwZFhKdUlHNWJiMTB1Wlhod2IzSjBjMzEyWVhJZ2FUMTBlWEJsYjJZZ2NtVnhkV2x5WlQwOVhDSm1kVzVqZEdsdmJsd2lKaVp5WlhGMWFYSmxPMlp2Y2loMllYSWdiejB3TzI4OGNpNXNaVzVuZEdnN2J5c3JLWE1vY2x0dlhTazdjbVYwZFhKdUlITjlLU2g3TVRwYlpuVnVZM1JwYjI0b2NtVnhkV2x5WlN4dGIyUjFiR1VzWlhod2IzSjBjeWw3S0daMWJtTjBhVzl1S0dkc2IySmhiQ2w3WENKMWMyVWdjM1J5YVdOMFhDSTdhV1lvWjJ4dlltRnNMbDlpWVdKbGJGQnZiSGxtYVd4c0tYdDBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hDSnZibXg1SUc5dVpTQnBibk4wWVc1alpTQnZaaUJpWVdKbGJDOXdiMng1Wm1sc2JDQnBjeUJoYkd4dmQyVmtYQ0lwZldkc2IySmhiQzVmWW1GaVpXeFFiMng1Wm1sc2JEMTBjblZsTzNKbGNYVnBjbVVvWENKamIzSmxMV3B6TDNOb2FXMWNJaWs3Y21WeGRXbHlaU2hjSW5KbFoyVnVaWEpoZEc5eUxXSmhZbVZzTDNKMWJuUnBiV1ZjSWlsOUtTNWpZV3hzS0hSb2FYTXNkSGx3Wlc5bUlHZHNiMkpoYkNFOVBWd2lkVzVrWldacGJtVmtYQ0kvWjJ4dlltRnNPblI1Y0dWdlppQnpaV3htSVQwOVhDSjFibVJsWm1sdVpXUmNJajl6Wld4bU9uUjVjR1Z2WmlCM2FXNWtiM2NoUFQxY0luVnVaR1ZtYVc1bFpGd2lQM2RwYm1SdmR6cDdmU2w5TEh0Y0ltTnZjbVV0YW5NdmMyaHBiVndpT2pJc1hDSnlaV2RsYm1WeVlYUnZjaTFpWVdKbGJDOXlkVzUwYVcxbFhDSTZNMzFkTERJNlcyWjFibU4wYVc5dUtISmxjWFZwY21Vc2JXOWtkV3hsTEdWNGNHOXlkSE1wZXlGbWRXNWpkR2x2YmlobmJHOWlZV3dzWm5KaGJXVjNiM0pyTEhWdVpHVm1hVzVsWkNsN1hDSjFjMlVnYzNSeWFXTjBYQ0k3ZG1GeUlFOUNTa1ZEVkQxY0lrOWlhbVZqZEZ3aUxFWlZUa05VU1U5T1BWd2lSblZ1WTNScGIyNWNJaXhCVWxKQldUMWNJa0Z5Y21GNVhDSXNVMVJTU1U1SFBWd2lVM1J5YVc1blhDSXNUbFZOUWtWU1BWd2lUblZ0WW1WeVhDSXNVa1ZIUlZoUVBWd2lVbVZuUlhod1hDSXNSRUZVUlQxY0lrUmhkR1ZjSWl4TlFWQTlYQ0pOWVhCY0lpeFRSVlE5WENKVFpYUmNJaXhYUlVGTFRVRlFQVndpVjJWaGEwMWhjRndpTEZkRlFVdFRSVlE5WENKWFpXRnJVMlYwWENJc1UxbE5RazlNUFZ3aVUzbHRZbTlzWENJc1VGSlBUVWxUUlQxY0lsQnliMjFwYzJWY0lpeE5RVlJJUFZ3aVRXRjBhRndpTEVGU1IxVk5SVTVVVXoxY0lrRnlaM1Z0Wlc1MGMxd2lMRkJTVDFSUFZGbFFSVDFjSW5CeWIzUnZkSGx3WlZ3aUxFTlBUbE5VVWxWRFZFOVNQVndpWTI5dWMzUnlkV04wYjNKY0lpeFVUMTlUVkZKSlRrYzlYQ0owYjFOMGNtbHVaMXdpTEZSUFgxTlVVa2xPUjE5VVFVYzlWRTlmVTFSU1NVNUhLMXdpVkdGblhDSXNWRTlmVEU5RFFVeEZQVndpZEc5TWIyTmhiR1ZUZEhKcGJtZGNJaXhJUVZOZlQxZE9QVndpYUdGelQzZHVVSEp2Y0dWeWRIbGNJaXhHVDFKZlJVRkRTRDFjSW1admNrVmhZMmhjSWl4SlZFVlNRVlJQVWoxY0ltbDBaWEpoZEc5eVhDSXNSa1pmU1ZSRlVrRlVUMUk5WENKQVFGd2lLMGxVUlZKQlZFOVNMRkJTVDBORlUxTTlYQ0p3Y205alpYTnpYQ0lzUTFKRlFWUkZYMFZNUlUxRlRsUTlYQ0pqY21WaGRHVkZiR1Z0Wlc1MFhDSXNSblZ1WTNScGIyNDlaMnh2WW1Gc1cwWlZUa05VU1U5T1hTeFBZbXBsWTNROVoyeHZZbUZzVzA5Q1NrVkRWRjBzUVhKeVlYazlaMnh2WW1Gc1cwRlNVa0ZaWFN4VGRISnBibWM5WjJ4dlltRnNXMU5VVWtsT1IxMHNUblZ0WW1WeVBXZHNiMkpoYkZ0T1ZVMUNSVkpkTEZKbFowVjRjRDFuYkc5aVlXeGJVa1ZIUlZoUVhTeEVZWFJsUFdkc2IySmhiRnRFUVZSRlhTeE5ZWEE5WjJ4dlltRnNXMDFCVUYwc1UyVjBQV2RzYjJKaGJGdFRSVlJkTEZkbFlXdE5ZWEE5WjJ4dlltRnNXMWRGUVV0TlFWQmRMRmRsWVd0VFpYUTlaMnh2WW1Gc1cxZEZRVXRUUlZSZExGTjViV0p2YkQxbmJHOWlZV3hiVTFsTlFrOU1YU3hOWVhSb1BXZHNiMkpoYkZ0TlFWUklYU3hVZVhCbFJYSnliM0k5WjJ4dlltRnNMbFI1Y0dWRmNuSnZjaXhTWVc1blpVVnljbTl5UFdkc2IySmhiQzVTWVc1blpVVnljbTl5TEhObGRGUnBiV1Z2ZFhROVoyeHZZbUZzTG5ObGRGUnBiV1Z2ZFhRc2MyVjBTVzF0WldScFlYUmxQV2RzYjJKaGJDNXpaWFJKYlcxbFpHbGhkR1VzWTJ4bFlYSkpiVzFsWkdsaGRHVTlaMnh2WW1Gc0xtTnNaV0Z5U1cxdFpXUnBZWFJsTEhCaGNuTmxTVzUwUFdkc2IySmhiQzV3WVhKelpVbHVkQ3hwYzBacGJtbDBaVDFuYkc5aVlXd3VhWE5HYVc1cGRHVXNjSEp2WTJWemN6MW5iRzlpWVd4YlVGSlBRMFZUVTEwc2JtVjRkRlJwWTJzOWNISnZZMlZ6Y3lZbWNISnZZMlZ6Y3k1dVpYaDBWR2xqYXl4a2IyTjFiV1Z1ZEQxbmJHOWlZV3d1Wkc5amRXMWxiblFzYUhSdGJEMWtiMk4xYldWdWRDWW1aRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExHNWhkbWxuWVhSdmNqMW5iRzlpWVd3dWJtRjJhV2RoZEc5eUxHUmxabWx1WlQxbmJHOWlZV3d1WkdWbWFXNWxMR052Ym5OdmJHVTlaMnh2WW1Gc0xtTnZibk52YkdWOGZIdDlMRUZ5Y21GNVVISnZkRzg5UVhKeVlYbGJVRkpQVkU5VVdWQkZYU3hQWW1wbFkzUlFjbTkwYnoxUFltcGxZM1JiVUZKUFZFOVVXVkJGWFN4R2RXNWpkR2x2YmxCeWIzUnZQVVoxYm1OMGFXOXVXMUJTVDFSUFZGbFFSVjBzU1c1bWFXNXBkSGs5TVM4d0xFUlBWRDFjSWk1Y0lqdG1kVzVqZEdsdmJpQnBjMDlpYW1WamRDaHBkQ2w3Y21WMGRYSnVJR2wwSVQwOWJuVnNiQ1ltS0hSNWNHVnZaaUJwZEQwOVhDSnZZbXBsWTNSY0lueDhkSGx3Wlc5bUlHbDBQVDFjSW1aMWJtTjBhVzl1WENJcGZXWjFibU4wYVc5dUlHbHpSblZ1WTNScGIyNG9hWFFwZTNKbGRIVnliaUIwZVhCbGIyWWdhWFE5UFZ3aVpuVnVZM1JwYjI1Y0luMTJZWElnYVhOT1lYUnBkbVU5WTNSNEtDOHVMeTUwWlhOMExDOWNYRnR1WVhScGRtVWdZMjlrWlZ4Y1hWeGNjeXBjWEgxY1hITXFKQzhzTVNrN2RtRnlJSFJ2VTNSeWFXNW5QVTlpYW1WamRGQnliM1J2VzFSUFgxTlVVa2xPUjEwN1puVnVZM1JwYjI0Z2MyVjBWRzlUZEhKcGJtZFVZV2NvYVhRc2RHRm5MSE4wWVhRcGUybG1LR2wwSmlZaGFHRnpLR2wwUFhOMFlYUS9hWFE2YVhSYlVGSlBWRTlVV1ZCRlhTeFRXVTFDVDB4ZlZFRkhLU2xvYVdSa1pXNG9hWFFzVTFsTlFrOU1YMVJCUnl4MFlXY3BmV1oxYm1OMGFXOXVJR052WmlocGRDbDdjbVYwZFhKdUlIUnZVM1J5YVc1bkxtTmhiR3dvYVhRcExuTnNhV05sS0Rnc0xURXBmV1oxYm1OMGFXOXVJR05zWVhOemIyWW9hWFFwZTNaaGNpQlBMRlE3Y21WMGRYSnVJR2wwUFQxMWJtUmxabWx1WldRL2FYUTlQVDExYm1SbFptbHVaV1EvWENKVmJtUmxabWx1WldSY0lqcGNJazUxYkd4Y0lqcDBlWEJsYjJZb1ZEMG9UejFQWW1wbFkzUW9hWFFwS1Z0VFdVMUNUMHhmVkVGSFhTazlQVndpYzNSeWFXNW5YQ0kvVkRwamIyWW9UeWw5ZG1GeUlHTmhiR3c5Um5WdVkzUnBiMjVRY205MGJ5NWpZV3hzTEdGd2NHeDVQVVoxYm1OMGFXOXVVSEp2ZEc4dVlYQndiSGtzVWtWR1JWSkZUa05GWDBkRlZEdG1kVzVqZEdsdmJpQndZWEowS0NsN2RtRnlJR1p1UFdGemMyVnlkRVoxYm1OMGFXOXVLSFJvYVhNcExHeGxibWQwYUQxaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvTEdGeVozTTlRWEp5WVhrb2JHVnVaM1JvS1N4cFBUQXNYejF3WVhSb0xsOHNhRzlzWkdWeVBXWmhiSE5sTzNkb2FXeGxLR3hsYm1kMGFENXBLV2xtS0NoaGNtZHpXMmxkUFdGeVozVnRaVzUwYzF0cEt5dGRLVDA5UFY4cGFHOXNaR1Z5UFhSeWRXVTdjbVYwZFhKdUlHWjFibU4wYVc5dUtDbDdkbUZ5SUhSb1lYUTlkR2hwY3l4ZmJHVnVaM1JvUFdGeVozVnRaVzUwY3k1c1pXNW5kR2dzYVQwd0xHbzlNQ3hmWVhKbmN6dHBaaWdoYUc5c1pHVnlKaVloWDJ4bGJtZDBhQ2x5WlhSMWNtNGdhVzUyYjJ0bEtHWnVMR0Z5WjNNc2RHaGhkQ2s3WDJGeVozTTlZWEpuY3k1emJHbGpaU2dwTzJsbUtHaHZiR1JsY2lsbWIzSW9PMnhsYm1kMGFENXBPMmtyS3lscFppaGZZWEpuYzF0cFhUMDlQVjhwWDJGeVozTmJhVjA5WVhKbmRXMWxiblJ6VzJvcksxMDdkMmhwYkdVb1gyeGxibWQwYUQ1cUtWOWhjbWR6TG5CMWMyZ29ZWEpuZFcxbGJuUnpXMm9ySzEwcE8zSmxkSFZ5YmlCcGJuWnZhMlVvWm00c1gyRnlaM01zZEdoaGRDbDlmV1oxYm1OMGFXOXVJR04wZUNobWJpeDBhR0YwTEd4bGJtZDBhQ2w3WVhOelpYSjBSblZ1WTNScGIyNG9abTRwTzJsbUtINXNaVzVuZEdnbUpuUm9ZWFE5UFQxMWJtUmxabWx1WldRcGNtVjBkWEp1SUdadU8zTjNhWFJqYUNoc1pXNW5kR2dwZTJOaGMyVWdNVHB5WlhSMWNtNGdablZ1WTNScGIyNG9ZU2w3Y21WMGRYSnVJR1p1TG1OaGJHd29kR2hoZEN4aEtYMDdZMkZ6WlNBeU9uSmxkSFZ5YmlCbWRXNWpkR2x2YmloaExHSXBlM0psZEhWeWJpQm1iaTVqWVd4c0tIUm9ZWFFzWVN4aUtYMDdZMkZ6WlNBek9uSmxkSFZ5YmlCbWRXNWpkR2x2YmloaExHSXNZeWw3Y21WMGRYSnVJR1p1TG1OaGJHd29kR2hoZEN4aExHSXNZeWw5ZlhKbGRIVnliaUJtZFc1amRHbHZiaWdwZTNKbGRIVnliaUJtYmk1aGNIQnNlU2gwYUdGMExHRnlaM1Z0Wlc1MGN5bDlmV1oxYm1OMGFXOXVJR2x1ZG05clpTaG1iaXhoY21kekxIUm9ZWFFwZTNaaGNpQjFiajEwYUdGMFBUMDlkVzVrWldacGJtVmtPM04zYVhSamFDaGhjbWR6TG14bGJtZDBhSHd3S1h0allYTmxJREE2Y21WMGRYSnVJSFZ1UDJadUtDazZabTR1WTJGc2JDaDBhR0YwS1R0allYTmxJREU2Y21WMGRYSnVJSFZ1UDJadUtHRnlaM05iTUYwcE9tWnVMbU5oYkd3b2RHaGhkQ3hoY21keld6QmRLVHRqWVhObElESTZjbVYwZFhKdUlIVnVQMlp1S0dGeVozTmJNRjBzWVhKbmMxc3hYU2s2Wm00dVkyRnNiQ2gwYUdGMExHRnlaM05iTUYwc1lYSm5jMXN4WFNrN1kyRnpaU0F6T25KbGRIVnliaUIxYmo5bWJpaGhjbWR6V3pCZExHRnlaM05iTVYwc1lYSm5jMXN5WFNrNlptNHVZMkZzYkNoMGFHRjBMR0Z5WjNOYk1GMHNZWEpuYzFzeFhTeGhjbWR6V3pKZEtUdGpZWE5sSURRNmNtVjBkWEp1SUhWdVAyWnVLR0Z5WjNOYk1GMHNZWEpuYzFzeFhTeGhjbWR6V3pKZExHRnlaM05iTTEwcE9tWnVMbU5oYkd3b2RHaGhkQ3hoY21keld6QmRMR0Z5WjNOYk1WMHNZWEpuYzFzeVhTeGhjbWR6V3pOZEtUdGpZWE5sSURVNmNtVjBkWEp1SUhWdVAyWnVLR0Z5WjNOYk1GMHNZWEpuYzFzeFhTeGhjbWR6V3pKZExHRnlaM05iTTEwc1lYSm5jMXMwWFNrNlptNHVZMkZzYkNoMGFHRjBMR0Z5WjNOYk1GMHNZWEpuYzFzeFhTeGhjbWR6V3pKZExHRnlaM05iTTEwc1lYSm5jMXMwWFNsOWNtVjBkWEp1SUdadUxtRndjR3g1S0hSb1lYUXNZWEpuY3lsOWRtRnlJR055WldGMFpUMVBZbXBsWTNRdVkzSmxZWFJsTEdkbGRGQnliM1J2ZEhsd1pVOW1QVTlpYW1WamRDNW5aWFJRY205MGIzUjVjR1ZQWml4elpYUlFjbTkwYjNSNWNHVlBaajFQWW1wbFkzUXVjMlYwVUhKdmRHOTBlWEJsVDJZc1pHVm1hVzVsVUhKdmNHVnlkSGs5VDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUxHUmxabWx1WlZCeWIzQmxjblJwWlhNOVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUnBaWE1zWjJWMFQzZHVSR1Z6WTNKcGNIUnZjajFQWW1wbFkzUXVaMlYwVDNkdVVISnZjR1Z5ZEhsRVpYTmpjbWx3ZEc5eUxHZGxkRXRsZVhNOVQySnFaV04wTG10bGVYTXNaMlYwVG1GdFpYTTlUMkpxWldOMExtZGxkRTkzYmxCeWIzQmxjblI1VG1GdFpYTXNaMlYwVTNsdFltOXNjejFQWW1wbFkzUXVaMlYwVDNkdVVISnZjR1Z5ZEhsVGVXMWliMnh6TEdselJuSnZlbVZ1UFU5aWFtVmpkQzVwYzBaeWIzcGxiaXhvWVhNOVkzUjRLR05oYkd3c1QySnFaV04wVUhKdmRHOWJTRUZUWDA5WFRsMHNNaWtzUlZNMVQySnFaV04wUFU5aWFtVmpkQ3hFYVdOME8yWjFibU4wYVc5dUlIUnZUMkpxWldOMEtHbDBLWHR5WlhSMWNtNGdSVk0xVDJKcVpXTjBLR0Z6YzJWeWRFUmxabWx1WldRb2FYUXBLWDFtZFc1amRHbHZiaUJ5WlhSMWNtNUpkQ2hwZENsN2NtVjBkWEp1SUdsMGZXWjFibU4wYVc5dUlISmxkSFZ5YmxSb2FYTW9LWHR5WlhSMWNtNGdkR2hwYzMxbWRXNWpkR2x2YmlCblpYUW9iMkpxWldOMExHdGxlU2w3YVdZb2FHRnpLRzlpYW1WamRDeHJaWGtwS1hKbGRIVnliaUJ2WW1wbFkzUmJhMlY1WFgxbWRXNWpkR2x2YmlCdmQyNUxaWGx6S0dsMEtYdGhjM05sY25SUFltcGxZM1FvYVhRcE8zSmxkSFZ5YmlCblpYUlRlVzFpYjJ4elAyZGxkRTVoYldWektHbDBLUzVqYjI1allYUW9aMlYwVTNsdFltOXNjeWhwZENrcE9tZGxkRTVoYldWektHbDBLWDEyWVhJZ1lYTnphV2R1UFU5aWFtVmpkQzVoYzNOcFoyNThmR1oxYm1OMGFXOXVLSFJoY21kbGRDeHpiM1Z5WTJVcGUzWmhjaUJVUFU5aWFtVmpkQ2hoYzNObGNuUkVaV1pwYm1Wa0tIUmhjbWRsZENrcExHdzlZWEpuZFcxbGJuUnpMbXhsYm1kMGFDeHBQVEU3ZDJocGJHVW9iRDVwS1h0MllYSWdVejFGVXpWUFltcGxZM1FvWVhKbmRXMWxiblJ6VzJrcksxMHBMR3RsZVhNOVoyVjBTMlY1Y3loVEtTeHNaVzVuZEdnOWEyVjVjeTVzWlc1bmRHZ3NhajB3TEd0bGVUdDNhR2xzWlNoc1pXNW5kR2crYWlsVVcydGxlVDFyWlhselcyb3JLMTFkUFZOYmEyVjVYWDF5WlhSMWNtNGdWSDA3Wm5WdVkzUnBiMjRnYTJWNVQyWW9iMkpxWldOMExHVnNLWHQyWVhJZ1R6MTBiMDlpYW1WamRDaHZZbXBsWTNRcExHdGxlWE05WjJWMFMyVjVjeWhQS1N4c1pXNW5kR2c5YTJWNWN5NXNaVzVuZEdnc2FXNWtaWGc5TUN4clpYazdkMmhwYkdVb2JHVnVaM1JvUG1sdVpHVjRLV2xtS0U5YmEyVjVQV3RsZVhOYmFXNWtaWGdySzExZFBUMDlaV3dwY21WMGRYSnVJR3RsZVgxbWRXNWpkR2x2YmlCaGNuSmhlU2hwZENsN2NtVjBkWEp1SUZOMGNtbHVaeWhwZENrdWMzQnNhWFFvWENJc1hDSXBmWFpoY2lCd2RYTm9QVUZ5Y21GNVVISnZkRzh1Y0hWemFDeDFibk5vYVdaMFBVRnljbUY1VUhKdmRHOHVkVzV6YUdsbWRDeHpiR2xqWlQxQmNuSmhlVkJ5YjNSdkxuTnNhV05sTEhOd2JHbGpaVDFCY25KaGVWQnliM1J2TG5Od2JHbGpaU3hwYm1SbGVFOW1QVUZ5Y21GNVVISnZkRzh1YVc1a1pYaFBaaXhtYjNKRllXTm9QVUZ5Y21GNVVISnZkRzliUms5U1gwVkJRMGhkTzJaMWJtTjBhVzl1SUdOeVpXRjBaVUZ5Y21GNVRXVjBhRzlrS0hSNWNHVXBlM1poY2lCcGMwMWhjRDEwZVhCbFBUMHhMR2x6Um1sc2RHVnlQWFI1Y0dVOVBUSXNhWE5UYjIxbFBYUjVjR1U5UFRNc2FYTkZkbVZ5ZVQxMGVYQmxQVDAwTEdselJtbHVaRWx1WkdWNFBYUjVjR1U5UFRZc2JtOW9iMnhsY3oxMGVYQmxQVDAxZkh4cGMwWnBibVJKYm1SbGVEdHlaWFIxY200Z1puVnVZM1JwYjI0b1kyRnNiR0poWTJ0bWJpbDdkbUZ5SUU4OVQySnFaV04wS0dGemMyVnlkRVJsWm1sdVpXUW9kR2hwY3lrcExIUm9ZWFE5WVhKbmRXMWxiblJ6V3pGZExITmxiR1k5UlZNMVQySnFaV04wS0U4cExHWTlZM1I0S0dOaGJHeGlZV05yWm00c2RHaGhkQ3d6S1N4c1pXNW5kR2c5ZEc5TVpXNW5kR2dvYzJWc1ppNXNaVzVuZEdncExHbHVaR1Y0UFRBc2NtVnpkV3gwUFdselRXRndQMEZ5Y21GNUtHeGxibWQwYUNrNmFYTkdhV3gwWlhJL1cxMDZkVzVrWldacGJtVmtMSFpoYkN4eVpYTTdabTl5S0R0c1pXNW5kR2crYVc1a1pYZzdhVzVrWlhnckt5bHBaaWh1YjJodmJHVnpmSHhwYm1SbGVDQnBiaUJ6Wld4bUtYdDJZV3c5YzJWc1psdHBibVJsZUYwN2NtVnpQV1lvZG1Gc0xHbHVaR1Y0TEU4cE8ybG1LSFI1Y0dVcGUybG1LR2x6VFdGd0tYSmxjM1ZzZEZ0cGJtUmxlRjA5Y21Wek8yVnNjMlVnYVdZb2NtVnpLWE4zYVhSamFDaDBlWEJsS1h0allYTmxJRE02Y21WMGRYSnVJSFJ5ZFdVN1kyRnpaU0ExT25KbGRIVnliaUIyWVd3N1kyRnpaU0EyT25KbGRIVnliaUJwYm1SbGVEdGpZWE5sSURJNmNtVnpkV3gwTG5CMWMyZ29kbUZzS1gxbGJITmxJR2xtS0dselJYWmxjbmtwY21WMGRYSnVJR1poYkhObGZYMXlaWFIxY200Z2FYTkdhVzVrU1c1a1pYZy9MVEU2YVhOVGIyMWxmSHhwYzBWMlpYSjVQMmx6UlhabGNuazZjbVZ6ZFd4MGZYMW1kVzVqZEdsdmJpQmpjbVZoZEdWQmNuSmhlVU52Ym5SaGFXNXpLR2x6UTI5dWRHRnBibk1wZTNKbGRIVnliaUJtZFc1amRHbHZiaWhsYkNsN2RtRnlJRTg5ZEc5UFltcGxZM1FvZEdocGN5a3NiR1Z1WjNSb1BYUnZUR1Z1WjNSb0tFOHViR1Z1WjNSb0tTeHBibVJsZUQxMGIwbHVaR1Y0S0dGeVozVnRaVzUwYzFzeFhTeHNaVzVuZEdncE8ybG1LR2x6UTI5dWRHRnBibk1tSm1Wc0lUMWxiQ2w3Wm05eUtEdHNaVzVuZEdnK2FXNWtaWGc3YVc1a1pYZ3JLeWxwWmloellXMWxUbUZPS0U5YmFXNWtaWGhkS1NseVpYUjFjbTRnYVhORGIyNTBZV2x1YzN4OGFXNWtaWGg5Wld4elpTQm1iM0lvTzJ4bGJtZDBhRDVwYm1SbGVEdHBibVJsZUNzcktXbG1LR2x6UTI5dWRHRnBibk44ZkdsdVpHVjRJR2x1SUU4cGUybG1LRTliYVc1a1pYaGRQVDA5Wld3cGNtVjBkWEp1SUdselEyOXVkR0ZwYm5OOGZHbHVaR1Y0ZlhKbGRIVnliaUZwYzBOdmJuUmhhVzV6SmlZdE1YMTlablZ1WTNScGIyNGdaMlZ1WlhKcFl5aEJMRUlwZTNKbGRIVnliaUIwZVhCbGIyWWdRVDA5WENKbWRXNWpkR2x2Ymx3aVAwRTZRbjEyWVhJZ1RVRllYMU5CUmtWZlNVNVVSVWRGVWowNU1EQTNNVGs1TWpVME56UXdPVGt4TEhCdmR6MU5ZWFJvTG5CdmR5eGhZbk05VFdGMGFDNWhZbk1zWTJWcGJEMU5ZWFJvTG1ObGFXd3NabXh2YjNJOVRXRjBhQzVtYkc5dmNpeHRZWGc5VFdGMGFDNXRZWGdzYldsdVBVMWhkR2d1YldsdUxISmhibVJ2YlQxTllYUm9MbkpoYm1SdmJTeDBjblZ1WXoxTllYUm9MblJ5ZFc1amZIeG1kVzVqZEdsdmJpaHBkQ2w3Y21WMGRYSnVLR2wwUGpBL1pteHZiM0k2WTJWcGJDa29hWFFwZlR0bWRXNWpkR2x2YmlCellXMWxUbUZPS0c1MWJXSmxjaWw3Y21WMGRYSnVJRzUxYldKbGNpRTliblZ0WW1WeWZXWjFibU4wYVc5dUlIUnZTVzUwWldkbGNpaHBkQ2w3Y21WMGRYSnVJR2x6VG1GT0tHbDBLVDh3T25SeWRXNWpLR2wwS1gxbWRXNWpkR2x2YmlCMGIweGxibWQwYUNocGRDbDdjbVYwZFhKdUlHbDBQakEvYldsdUtIUnZTVzUwWldkbGNpaHBkQ2tzVFVGWVgxTkJSa1ZmU1U1VVJVZEZVaWs2TUgxbWRXNWpkR2x2YmlCMGIwbHVaR1Y0S0dsdVpHVjRMR3hsYm1kMGFDbDdkbUZ5SUdsdVpHVjRQWFJ2U1c1MFpXZGxjaWhwYm1SbGVDazdjbVYwZFhKdUlHbHVaR1Y0UERBL2JXRjRLR2x1WkdWNEsyeGxibWQwYUN3d0tUcHRhVzRvYVc1a1pYZ3NiR1Z1WjNSb0tYMW1kVzVqZEdsdmJpQnNlaWh1ZFcwcGUzSmxkSFZ5YmlCdWRXMCtPVDl1ZFcwNlhDSXdYQ0lyYm5WdGZXWjFibU4wYVc5dUlHTnlaV0YwWlZKbGNHeGhZMlZ5S0hKbFowVjRjQ3h5WlhCc1lXTmxMR2x6VTNSaGRHbGpLWHQyWVhJZ2NtVndiR0ZqWlhJOWFYTlBZbXBsWTNRb2NtVndiR0ZqWlNrL1puVnVZM1JwYjI0b2NHRnlkQ2w3Y21WMGRYSnVJSEpsY0d4aFkyVmJjR0Z5ZEYxOU9uSmxjR3hoWTJVN2NtVjBkWEp1SUdaMWJtTjBhVzl1S0dsMEtYdHlaWFIxY200Z1UzUnlhVzVuS0dselUzUmhkR2xqUDJsME9uUm9hWE1wTG5KbGNHeGhZMlVvY21WblJYaHdMSEpsY0d4aFkyVnlLWDE5Wm5WdVkzUnBiMjRnWTNKbFlYUmxVRzlwYm5SQmRDaDBiMU4wY21sdVp5bDdjbVYwZFhKdUlHWjFibU4wYVc5dUtIQnZjeWw3ZG1GeUlITTlVM1J5YVc1bktHRnpjMlZ5ZEVSbFptbHVaV1FvZEdocGN5a3BMR2s5ZEc5SmJuUmxaMlZ5S0hCdmN5a3NiRDF6TG14bGJtZDBhQ3hoTEdJN2FXWW9hVHd3Zkh4cFBqMXNLWEpsZEhWeWJpQjBiMU4wY21sdVp6OWNJbHdpT25WdVpHVm1hVzVsWkR0aFBYTXVZMmhoY2tOdlpHVkJkQ2hwS1R0eVpYUjFjbTRnWVR3MU5USTVObng4WVQ0MU5qTXhPWHg4YVNzeFBUMDliSHg4S0dJOWN5NWphR0Z5UTI5a1pVRjBLR2tyTVNrcFBEVTJNekl3Zkh4aVBqVTNNelF6UDNSdlUzUnlhVzVuUDNNdVkyaGhja0YwS0drcE9tRTZkRzlUZEhKcGJtYy9jeTV6YkdsalpTaHBMR2tyTWlrNktHRXROVFV5T1RZOFBERXdLU3NvWWkwMU5qTXlNQ2tyTmpVMU16WjlmWFpoY2lCU1JVUlZRMFZmUlZKU1QxSTlYQ0pTWldSMVkyVWdiMllnWlcxd2RIa2diMkpxWldOMElIZHBkR2dnYm04Z2FXNXBkR2xoYkNCMllXeDFaVndpTzJaMWJtTjBhVzl1SUdGemMyVnlkQ2hqYjI1a2FYUnBiMjRzYlhObk1TeHRjMmN5S1h0cFppZ2hZMjl1WkdsMGFXOXVLWFJvY205M0lGUjVjR1ZGY25KdmNpaHRjMmN5UDIxelp6RXJiWE5uTWpwdGMyY3hLWDFtZFc1amRHbHZiaUJoYzNObGNuUkVaV1pwYm1Wa0tHbDBLWHRwWmlocGREMDlkVzVrWldacGJtVmtLWFJvY205M0lGUjVjR1ZGY25KdmNpaGNJa1oxYm1OMGFXOXVJR05oYkd4bFpDQnZiaUJ1ZFd4c0lHOXlJSFZ1WkdWbWFXNWxaRndpS1R0eVpYUjFjbTRnYVhSOVpuVnVZM1JwYjI0Z1lYTnpaWEowUm5WdVkzUnBiMjRvYVhRcGUyRnpjMlZ5ZENocGMwWjFibU4wYVc5dUtHbDBLU3hwZEN4Y0lpQnBjeUJ1YjNRZ1lTQm1kVzVqZEdsdmJpRmNJaWs3Y21WMGRYSnVJR2wwZldaMWJtTjBhVzl1SUdGemMyVnlkRTlpYW1WamRDaHBkQ2w3WVhOelpYSjBLR2x6VDJKcVpXTjBLR2wwS1N4cGRDeGNJaUJwY3lCdWIzUWdZVzRnYjJKcVpXTjBJVndpS1R0eVpYUjFjbTRnYVhSOVpuVnVZM1JwYjI0Z1lYTnpaWEowU1c1emRHRnVZMlVvYVhRc1EyOXVjM1J5ZFdOMGIzSXNibUZ0WlNsN1lYTnpaWEowS0dsMElHbHVjM1JoYm1ObGIyWWdRMjl1YzNSeWRXTjBiM0lzYm1GdFpTeGNJam9nZFhObElIUm9aU0FuYm1WM0p5QnZjR1Z5WVhSdmNpRmNJaWw5Wm5WdVkzUnBiMjRnWkdWelkzSnBjSFJ2Y2loaWFYUnRZWEFzZG1Gc2RXVXBlM0psZEhWeWJudGxiblZ0WlhKaFlteGxPaUVvWW1sMGJXRndKakVwTEdOdmJtWnBaM1Z5WVdKc1pUb2hLR0pwZEcxaGNDWXlLU3gzY21sMFlXSnNaVG9oS0dKcGRHMWhjQ1kwS1N4MllXeDFaVHAyWVd4MVpYMTlablZ1WTNScGIyNGdjMmx0Y0d4bFUyVjBLRzlpYW1WamRDeHJaWGtzZG1Gc2RXVXBlMjlpYW1WamRGdHJaWGxkUFhaaGJIVmxPM0psZEhWeWJpQnZZbXBsWTNSOVpuVnVZM1JwYjI0Z1kzSmxZWFJsUkdWbWFXNWxjaWhpYVhSdFlYQXBlM0psZEhWeWJpQkVSVk5EUDJaMWJtTjBhVzl1S0c5aWFtVmpkQ3hyWlhrc2RtRnNkV1VwZTNKbGRIVnliaUJrWldacGJtVlFjbTl3WlhKMGVTaHZZbXBsWTNRc2EyVjVMR1JsYzJOeWFYQjBiM0lvWW1sMGJXRndMSFpoYkhWbEtTbDlPbk5wYlhCc1pWTmxkSDFtZFc1amRHbHZiaUIxYVdRb2EyVjVLWHR5WlhSMWNtNGdVMWxOUWs5TUsxd2lLRndpSzJ0bGVTdGNJaWxmWENJcktDc3JjMmxrSzNKaGJtUnZiU2dwS1Z0VVQxOVRWRkpKVGtkZEtETTJLWDFtZFc1amRHbHZiaUJuWlhSWFpXeHNTMjV2ZDI1VGVXMWliMndvYm1GdFpTeHpaWFIwWlhJcGUzSmxkSFZ5YmlCVGVXMWliMndtSmxONWJXSnZiRnR1WVcxbFhYeDhLSE5sZEhSbGNqOVRlVzFpYjJ3NmMyRm1aVk41YldKdmJDa29VMWxOUWs5TUswUlBWQ3R1WVcxbEtYMTJZWElnUkVWVFF6MGhJV1oxYm1OMGFXOXVLQ2w3ZEhKNWUzSmxkSFZ5YmlCa1pXWnBibVZRY205d1pYSjBlU2g3ZlN4Y0ltRmNJaXg3WjJWME9tWjFibU4wYVc5dUtDbDdjbVYwZFhKdUlESjlmU2t1WVQwOU1uMWpZWFJqYUNobEtYdDlmU2dwTEhOcFpEMHdMR2hwWkdSbGJqMWpjbVZoZEdWRVpXWnBibVZ5S0RFcExITmxkRDFUZVcxaWIydy9jMmx0Y0d4bFUyVjBPbWhwWkdSbGJpeHpZV1psVTNsdFltOXNQVk41YldKdmJIeDhkV2xrTzJaMWJtTjBhVzl1SUdGemMybG5ia2hwWkdSbGJpaDBZWEpuWlhRc2MzSmpLWHRtYjNJb2RtRnlJR3RsZVNCcGJpQnpjbU1wYUdsa1pHVnVLSFJoY21kbGRDeHJaWGtzYzNKalcydGxlVjBwTzNKbGRIVnliaUIwWVhKblpYUjlkbUZ5SUZOWlRVSlBURjlWVGxORFQxQkJRa3hGVXoxblpYUlhaV3hzUzI1dmQyNVRlVzFpYjJ3b1hDSjFibk5qYjNCaFlteGxjMXdpS1N4QmNuSmhlVlZ1YzJOdmNHRmliR1Z6UFVGeWNtRjVVSEp2ZEc5YlUxbE5RazlNWDFWT1UwTlBVRUZDVEVWVFhYeDhlMzBzVTFsTlFrOU1YMVJCUnoxblpYUlhaV3hzUzI1dmQyNVRlVzFpYjJ3b1ZFOWZVMVJTU1U1SFgxUkJSeWtzVTFsTlFrOU1YMU5RUlVOSlJWTTlaMlYwVjJWc2JFdHViM2R1VTNsdFltOXNLRndpYzNCbFkybGxjMXdpS1N4VFdVMUNUMHhmU1ZSRlVrRlVUMUk3Wm5WdVkzUnBiMjRnYzJWMFUzQmxZMmxsY3loREtYdHBaaWhFUlZOREppWW9abkpoYldWM2IzSnJmSHdoYVhOT1lYUnBkbVVvUXlrcEtXUmxabWx1WlZCeWIzQmxjblI1S0VNc1UxbE5RazlNWDFOUVJVTkpSVk1zZTJOdmJtWnBaM1Z5WVdKc1pUcDBjblZsTEdkbGREcHlaWFIxY201VWFHbHpmU2w5ZG1GeUlFNVBSRVU5WTI5bUtIQnliMk5sYzNNcFBUMVFVazlEUlZOVExHTnZjbVU5ZTMwc2NHRjBhRDFtY21GdFpYZHZjbXMvWjJ4dlltRnNPbU52Y21Vc2IyeGtQV2RzYjJKaGJDNWpiM0psTEdWNGNHOXlkRWRzYjJKaGJDeEdUMUpEUlVROU1TeEhURTlDUVV3OU1peFRWRUZVU1VNOU5DeFFVazlVVHowNExFSkpUa1E5TVRZc1YxSkJVRDB6TWp0bWRXNWpkR2x2YmlBa1pHVm1hVzVsS0hSNWNHVXNibUZ0WlN4emIzVnlZMlVwZTNaaGNpQnJaWGtzYjNkdUxHOTFkQ3hsZUhBc2FYTkhiRzlpWVd3OWRIbHdaU1pIVEU5Q1FVd3NkR0Z5WjJWMFBXbHpSMnh2WW1Gc1AyZHNiMkpoYkRwMGVYQmxKbE5VUVZSSlF6OW5iRzlpWVd4YmJtRnRaVjA2S0dkc2IySmhiRnR1WVcxbFhYeDhUMkpxWldOMFVISnZkRzhwVzFCU1QxUlBWRmxRUlYwc1pYaHdiM0owY3oxcGMwZHNiMkpoYkQ5amIzSmxPbU52Y21WYmJtRnRaVjE4ZkNoamIzSmxXMjVoYldWZFBYdDlLVHRwWmlocGMwZHNiMkpoYkNsemIzVnlZMlU5Ym1GdFpUdG1iM0lvYTJWNUlHbHVJSE52ZFhKalpTbDdiM2R1UFNFb2RIbHdaU1pHVDFKRFJVUXBKaVowWVhKblpYUW1KbXRsZVNCcGJpQjBZWEpuWlhRbUppZ2hhWE5HZFc1amRHbHZiaWgwWVhKblpYUmJhMlY1WFNsOGZHbHpUbUYwYVhabEtIUmhjbWRsZEZ0clpYbGRLU2s3YjNWMFBTaHZkMjQvZEdGeVoyVjBPbk52ZFhKalpTbGJhMlY1WFR0cFppZ2habkpoYldWM2IzSnJKaVpwYzBkc2IySmhiQ1ltSVdselJuVnVZM1JwYjI0b2RHRnlaMlYwVzJ0bGVWMHBLV1Y0Y0QxemIzVnlZMlZiYTJWNVhUdGxiSE5sSUdsbUtIUjVjR1VtUWtsT1JDWW1iM2R1S1dWNGNEMWpkSGdvYjNWMExHZHNiMkpoYkNrN1pXeHpaU0JwWmloMGVYQmxKbGRTUVZBbUppRm1jbUZ0WlhkdmNtc21KblJoY21kbGRGdHJaWGxkUFQxdmRYUXBlMlY0Y0QxbWRXNWpkR2x2Ymlod1lYSmhiU2w3Y21WMGRYSnVJSFJvYVhNZ2FXNXpkR0Z1WTJWdlppQnZkWFEvYm1WM0lHOTFkQ2h3WVhKaGJTazZiM1YwS0hCaGNtRnRLWDA3Wlhod1cxQlNUMVJQVkZsUVJWMDliM1YwVzFCU1QxUlBWRmxRUlYxOVpXeHpaU0JsZUhBOWRIbHdaU1pRVWs5VVR5WW1hWE5HZFc1amRHbHZiaWh2ZFhRcFAyTjBlQ2hqWVd4c0xHOTFkQ2s2YjNWME8ybG1LR1p5WVcxbGQyOXlheVltZEdGeVoyVjBKaVloYjNkdUtYdHBaaWhwYzBkc2IySmhiQ2wwWVhKblpYUmJhMlY1WFQxdmRYUTdaV3h6WlNCa1pXeGxkR1VnZEdGeVoyVjBXMnRsZVYwbUptaHBaR1JsYmloMFlYSm5aWFFzYTJWNUxHOTFkQ2w5YVdZb1pYaHdiM0owYzF0clpYbGRJVDF2ZFhRcGFHbGtaR1Z1S0dWNGNHOXlkSE1zYTJWNUxHVjRjQ2w5ZldsbUtIUjVjR1Z2WmlCdGIyUjFiR1VoUFZ3aWRXNWtaV1pwYm1Wa1hDSW1KbTF2WkhWc1pTNWxlSEJ2Y25SektXMXZaSFZzWlM1bGVIQnZjblJ6UFdOdmNtVTdaV3h6WlNCcFppaHBjMFoxYm1OMGFXOXVLR1JsWm1sdVpTa21KbVJsWm1sdVpTNWhiV1FwWkdWbWFXNWxLR1oxYm1OMGFXOXVLQ2w3Y21WMGRYSnVJR052Y21WOUtUdGxiSE5sSUdWNGNHOXlkRWRzYjJKaGJEMTBjblZsTzJsbUtHVjRjRzl5ZEVkc2IySmhiSHg4Wm5KaGJXVjNiM0pyS1h0amIzSmxMbTV2UTI5dVpteHBZM1E5Wm5WdVkzUnBiMjRvS1h0bmJHOWlZV3d1WTI5eVpUMXZiR1E3Y21WMGRYSnVJR052Y21WOU8yZHNiMkpoYkM1amIzSmxQV052Y21WOVUxbE5RazlNWDBsVVJWSkJWRTlTUFdkbGRGZGxiR3hMYm05M2JsTjViV0p2YkNoSlZFVlNRVlJQVWlrN2RtRnlJRWxVUlZJOWMyRm1aVk41YldKdmJDaGNJbWwwWlhKY0lpa3NTMFZaUFRFc1ZrRk1WVVU5TWl4SmRHVnlZWFJ2Y25NOWUzMHNTWFJsY21GMGIzSlFjbTkwYjNSNWNHVTllMzBzUWxWSFIxbGZTVlJGVWtGVVQxSlRQVndpYTJWNWMxd2lhVzRnUVhKeVlYbFFjbTkwYnlZbUlTaGNJbTVsZUhSY0ltbHVXMTB1YTJWNWN5Z3BLVHR6WlhSSmRHVnlZWFJ2Y2loSmRHVnlZWFJ2Y2xCeWIzUnZkSGx3WlN4eVpYUjFjbTVVYUdsektUdG1kVzVqZEdsdmJpQnpaWFJKZEdWeVlYUnZjaWhQTEhaaGJIVmxLWHRvYVdSa1pXNG9UeXhUV1UxQ1QweGZTVlJGVWtGVVQxSXNkbUZzZFdVcE8wWkdYMGxVUlZKQlZFOVNJR2x1SUVGeWNtRjVVSEp2ZEc4bUptaHBaR1JsYmloUExFWkdYMGxVUlZKQlZFOVNMSFpoYkhWbEtYMW1kVzVqZEdsdmJpQmpjbVZoZEdWSmRHVnlZWFJ2Y2loRGIyNXpkSEoxWTNSdmNpeE9RVTFGTEc1bGVIUXNjSEp2ZEc4cGUwTnZibk4wY25WamRHOXlXMUJTVDFSUFZGbFFSVjA5WTNKbFlYUmxLSEJ5YjNSdmZIeEpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTeDdibVY0ZERwa1pYTmpjbWx3ZEc5eUtERXNibVY0ZENsOUtUdHpaWFJVYjFOMGNtbHVaMVJoWnloRGIyNXpkSEoxWTNSdmNpeE9RVTFGSzF3aUlFbDBaWEpoZEc5eVhDSXBmV1oxYm1OMGFXOXVJR1JsWm1sdVpVbDBaWEpoZEc5eUtFTnZibk4wY25WamRHOXlMRTVCVFVVc2RtRnNkV1VzUkVWR1FWVk1WQ2w3ZG1GeUlIQnliM1J2UFVOdmJuTjBjblZqZEc5eVcxQlNUMVJQVkZsUVJWMHNhWFJsY2oxblpYUW9jSEp2ZEc4c1UxbE5RazlNWDBsVVJWSkJWRTlTS1h4OFoyVjBLSEJ5YjNSdkxFWkdYMGxVUlZKQlZFOVNLWHg4UkVWR1FWVk1WQ1ltWjJWMEtIQnliM1J2TEVSRlJrRlZURlFwZkh4MllXeDFaVHRwWmlobWNtRnRaWGR2Y21zcGUzTmxkRWwwWlhKaGRHOXlLSEJ5YjNSdkxHbDBaWElwTzJsbUtHbDBaWEloUFQxMllXeDFaU2w3ZG1GeUlHbDBaWEpRY205MGJ6MW5aWFJRY205MGIzUjVjR1ZQWmlocGRHVnlMbU5oYkd3b2JtVjNJRU52Ym5OMGNuVmpkRzl5S1NrN2MyVjBWRzlUZEhKcGJtZFVZV2NvYVhSbGNsQnliM1J2TEU1QlRVVXJYQ0lnU1hSbGNtRjBiM0pjSWl4MGNuVmxLVHRvWVhNb2NISnZkRzhzUmtaZlNWUkZVa0ZVVDFJcEppWnpaWFJKZEdWeVlYUnZjaWhwZEdWeVVISnZkRzhzY21WMGRYSnVWR2hwY3lsOWZVbDBaWEpoZEc5eWMxdE9RVTFGWFQxcGRHVnlPMGwwWlhKaGRHOXljMXRPUVUxRksxd2lJRWwwWlhKaGRHOXlYQ0pkUFhKbGRIVnlibFJvYVhNN2NtVjBkWEp1SUdsMFpYSjlablZ1WTNScGIyNGdaR1ZtYVc1bFUzUmtTWFJsY21GMGIzSnpLRUpoYzJVc1RrRk5SU3hEYjI1emRISjFZM1J2Y2l4dVpYaDBMRVJGUmtGVlRGUXNTVk5mVTBWVUtYdG1kVzVqZEdsdmJpQmpjbVZoZEdWSmRHVnlLR3RwYm1RcGUzSmxkSFZ5YmlCbWRXNWpkR2x2YmlncGUzSmxkSFZ5YmlCdVpYY2dRMjl1YzNSeWRXTjBiM0lvZEdocGN5eHJhVzVrS1gxOVkzSmxZWFJsU1hSbGNtRjBiM0lvUTI5dWMzUnlkV04wYjNJc1RrRk5SU3h1WlhoMEtUdDJZWElnWlc1MGNtbGxjejFqY21WaGRHVkpkR1Z5S0V0RldTdFdRVXhWUlNrc2RtRnNkV1Z6UFdOeVpXRjBaVWwwWlhJb1ZrRk1WVVVwTzJsbUtFUkZSa0ZWVEZROVBWWkJURlZGS1haaGJIVmxjejFrWldacGJtVkpkR1Z5WVhSdmNpaENZWE5sTEU1QlRVVXNkbUZzZFdWekxGd2lkbUZzZFdWelhDSXBPMlZzYzJVZ1pXNTBjbWxsY3oxa1pXWnBibVZKZEdWeVlYUnZjaWhDWVhObExFNUJUVVVzWlc1MGNtbGxjeXhjSW1WdWRISnBaWE5jSWlrN2FXWW9SRVZHUVZWTVZDbDdKR1JsWm1sdVpTaFFVazlVVHl0R1QxSkRSVVFxUWxWSFIxbGZTVlJGVWtGVVQxSlRMRTVCVFVVc2UyVnVkSEpwWlhNNlpXNTBjbWxsY3l4clpYbHpPa2xUWDFORlZEOTJZV3gxWlhNNlkzSmxZWFJsU1hSbGNpaExSVmtwTEhaaGJIVmxjenAyWVd4MVpYTjlLWDE5Wm5WdVkzUnBiMjRnYVhSbGNsSmxjM1ZzZENoa2IyNWxMSFpoYkhWbEtYdHlaWFIxY201N2RtRnNkV1U2ZG1Gc2RXVXNaRzl1WlRvaElXUnZibVY5ZldaMWJtTjBhVzl1SUdselNYUmxjbUZpYkdVb2FYUXBlM1poY2lCUFBVOWlhbVZqZENocGRDa3NVM2x0WW05c1BXZHNiMkpoYkZ0VFdVMUNUMHhkTEdoaGMwVjRkRDBvVTNsdFltOXNKaVpUZVcxaWIyeGJTVlJGVWtGVVQxSmRmSHhHUmw5SlZFVlNRVlJQVWlscGJpQlBPM0psZEhWeWJpQm9ZWE5GZUhSOGZGTlpUVUpQVEY5SlZFVlNRVlJQVWlCcGJpQlBmSHhvWVhNb1NYUmxjbUYwYjNKekxHTnNZWE56YjJZb1R5a3BmV1oxYm1OMGFXOXVJR2RsZEVsMFpYSmhkRzl5S0dsMEtYdDJZWElnVTNsdFltOXNQV2RzYjJKaGJGdFRXVTFDVDB4ZExHVjRkRDFwZEZ0VGVXMWliMndtSmxONWJXSnZiRnRKVkVWU1FWUlBVbDE4ZkVaR1gwbFVSVkpCVkU5U1hTeG5aWFJKZEdWeVBXVjRkSHg4YVhSYlUxbE5RazlNWDBsVVJWSkJWRTlTWFh4OFNYUmxjbUYwYjNKelcyTnNZWE56YjJZb2FYUXBYVHR5WlhSMWNtNGdZWE56WlhKMFQySnFaV04wS0dkbGRFbDBaWEl1WTJGc2JDaHBkQ2twZldaMWJtTjBhVzl1SUhOMFpYQkRZV3hzS0dadUxIWmhiSFZsTEdWdWRISnBaWE1wZTNKbGRIVnliaUJsYm5SeWFXVnpQMmx1ZG05clpTaG1iaXgyWVd4MVpTazZabTRvZG1Gc2RXVXBmV1oxYm1OMGFXOXVJR05vWldOclJHRnVaMlZ5U1hSbGNrTnNiM05wYm1jb1ptNHBlM1poY2lCa1lXNW5aWEk5ZEhKMVpUdDJZWElnVHoxN2JtVjRkRHBtZFc1amRHbHZiaWdwZTNSb2NtOTNJREY5TEZ3aWNtVjBkWEp1WENJNlpuVnVZM1JwYjI0b0tYdGtZVzVuWlhJOVptRnNjMlY5ZlR0UFcxTlpUVUpQVEY5SlZFVlNRVlJQVWwwOWNtVjBkWEp1VkdocGN6dDBjbmw3Wm00b1R5bDlZMkYwWTJnb1pTbDdmWEpsZEhWeWJpQmtZVzVuWlhKOVpuVnVZM1JwYjI0Z1kyeHZjMlZKZEdWeVlYUnZjaWhwZEdWeVlYUnZjaWw3ZG1GeUlISmxkRDFwZEdWeVlYUnZjbHRjSW5KbGRIVnlibHdpWFR0cFppaHlaWFFoUFQxMWJtUmxabWx1WldRcGNtVjBMbU5oYkd3b2FYUmxjbUYwYjNJcGZXWjFibU4wYVc5dUlITmhabVZKZEdWeVEyeHZjMlVvWlhobFl5eHBkR1Z5WVhSdmNpbDdkSEo1ZTJWNFpXTW9hWFJsY21GMGIzSXBmV05oZEdOb0tHVXBlMk5zYjNObFNYUmxjbUYwYjNJb2FYUmxjbUYwYjNJcE8zUm9jbTkzSUdWOWZXWjFibU4wYVc5dUlHWnZjazltS0dsMFpYSmhZbXhsTEdWdWRISnBaWE1zWm00c2RHaGhkQ2w3YzJGbVpVbDBaWEpEYkc5elpTaG1kVzVqZEdsdmJpaHBkR1Z5WVhSdmNpbDdkbUZ5SUdZOVkzUjRLR1p1TEhSb1lYUXNaVzUwY21sbGN6OHlPakVwTEhOMFpYQTdkMmhwYkdVb0lTaHpkR1Z3UFdsMFpYSmhkRzl5TG01bGVIUW9LU2t1Wkc5dVpTbHBaaWh6ZEdWd1EyRnNiQ2htTEhOMFpYQXVkbUZzZFdVc1pXNTBjbWxsY3lrOVBUMW1ZV3h6WlNsN2NtVjBkWEp1SUdOc2IzTmxTWFJsY21GMGIzSW9hWFJsY21GMGIzSXBmWDBzWjJWMFNYUmxjbUYwYjNJb2FYUmxjbUZpYkdVcEtYMGhablZ1WTNScGIyNG9WRUZITEZONWJXSnZiRkpsWjJsemRISjVMRUZzYkZONWJXSnZiSE1zYzJWMGRHVnlLWHRwWmlnaGFYTk9ZWFJwZG1Vb1UzbHRZbTlzS1NsN1UzbHRZbTlzUFdaMWJtTjBhVzl1S0dSbGMyTnlhWEIwYVc5dUtYdGhjM05sY25Rb0lTaDBhR2x6SUdsdWMzUmhibU5sYjJZZ1UzbHRZbTlzS1N4VFdVMUNUMHdyWENJZ2FYTWdibTkwSUdFZ1hDSXJRMDlPVTFSU1ZVTlVUMUlwTzNaaGNpQjBZV2M5ZFdsa0tHUmxjMk55YVhCMGFXOXVLU3h6ZVcwOWMyVjBLR055WldGMFpTaFRlVzFpYjJ4YlVGSlBWRTlVV1ZCRlhTa3NWRUZITEhSaFp5azdRV3hzVTNsdFltOXNjMXQwWVdkZFBYTjViVHRFUlZOREppWnpaWFIwWlhJbUptUmxabWx1WlZCeWIzQmxjblI1S0U5aWFtVmpkRkJ5YjNSdkxIUmhaeXg3WTI5dVptbG5kWEpoWW14bE9uUnlkV1VzYzJWME9tWjFibU4wYVc5dUtIWmhiSFZsS1h0b2FXUmtaVzRvZEdocGN5eDBZV2NzZG1Gc2RXVXBmWDBwTzNKbGRIVnliaUJ6ZVcxOU8yaHBaR1JsYmloVGVXMWliMnhiVUZKUFZFOVVXVkJGWFN4VVQxOVRWRkpKVGtjc1puVnVZM1JwYjI0b0tYdHlaWFIxY200Z2RHaHBjMXRVUVVkZGZTbDlKR1JsWm1sdVpTaEhURTlDUVV3clYxSkJVQ3g3VTNsdFltOXNPbE41YldKdmJIMHBPM1poY2lCemVXMWliMnhUZEdGMGFXTnpQWHRjSW1admNsd2lPbVoxYm1OMGFXOXVLR3RsZVNsN2NtVjBkWEp1SUdoaGN5aFRlVzFpYjJ4U1pXZHBjM1J5ZVN4clpYa3JQVndpWENJcFAxTjViV0p2YkZKbFoybHpkSEo1VzJ0bGVWMDZVM2x0WW05c1VtVm5hWE4wY25sYmEyVjVYVDFUZVcxaWIyd29hMlY1S1gwc2FYUmxjbUYwYjNJNlUxbE5RazlNWDBsVVJWSkJWRTlTZkh4blpYUlhaV3hzUzI1dmQyNVRlVzFpYjJ3b1NWUkZVa0ZVVDFJcExHdGxlVVp2Y2pwd1lYSjBMbU5oYkd3b2EyVjVUMllzVTNsdFltOXNVbVZuYVhOMGNua3BMSE53WldOcFpYTTZVMWxOUWs5TVgxTlFSVU5KUlZNc2RHOVRkSEpwYm1kVVlXYzZVMWxOUWs5TVgxUkJSejFuWlhSWFpXeHNTMjV2ZDI1VGVXMWliMndvVkU5ZlUxUlNTVTVIWDFSQlJ5eDBjblZsS1N4MWJuTmpiM0JoWW14bGN6cFRXVTFDVDB4ZlZVNVRRMDlRUVVKTVJWTXNjSFZ5WlRwellXWmxVM2x0WW05c0xITmxkRHB6WlhRc2RYTmxVMlYwZEdWeU9tWjFibU4wYVc5dUtDbDdjMlYwZEdWeVBYUnlkV1Y5TEhWelpWTnBiWEJzWlRwbWRXNWpkR2x2YmlncGUzTmxkSFJsY2oxbVlXeHpaWDE5TzJadmNrVmhZMmd1WTJGc2JDaGhjbkpoZVNoY0ltaGhjMGx1YzNSaGJtTmxMR2x6UTI5dVkyRjBVM0J5WldGa1lXSnNaU3h0WVhSamFDeHlaWEJzWVdObExITmxZWEpqYUN4emNHeHBkQ3gwYjFCeWFXMXBkR2wyWlZ3aUtTeG1kVzVqZEdsdmJpaHBkQ2w3YzNsdFltOXNVM1JoZEdsamMxdHBkRjA5WjJWMFYyVnNiRXR1YjNkdVUzbHRZbTlzS0dsMEtYMHBPeVJrWldacGJtVW9VMVJCVkVsRExGTlpUVUpQVEN4emVXMWliMnhUZEdGMGFXTnpLVHR6WlhSVWIxTjBjbWx1WjFSaFp5aFRlVzFpYjJ3c1UxbE5RazlNS1Rza1pHVm1hVzVsS0ZOVVFWUkpReXRHVDFKRFJVUXFJV2x6VG1GMGFYWmxLRk41YldKdmJDa3NUMEpLUlVOVUxIdG5aWFJQZDI1UWNtOXdaWEowZVU1aGJXVnpPbVoxYm1OMGFXOXVLR2wwS1h0MllYSWdibUZ0WlhNOVoyVjBUbUZ0WlhNb2RHOVBZbXBsWTNRb2FYUXBLU3h5WlhOMWJIUTlXMTBzYTJWNUxHazlNRHQzYUdsc1pTaHVZVzFsY3k1c1pXNW5kR2crYVNsb1lYTW9RV3hzVTNsdFltOXNjeXhyWlhrOWJtRnRaWE5iYVNzclhTbDhmSEpsYzNWc2RDNXdkWE5vS0d0bGVTazdjbVYwZFhKdUlISmxjM1ZzZEgwc1oyVjBUM2R1VUhKdmNHVnlkSGxUZVcxaWIyeHpPbVoxYm1OMGFXOXVLR2wwS1h0MllYSWdibUZ0WlhNOVoyVjBUbUZ0WlhNb2RHOVBZbXBsWTNRb2FYUXBLU3h5WlhOMWJIUTlXMTBzYTJWNUxHazlNRHQzYUdsc1pTaHVZVzFsY3k1c1pXNW5kR2crYVNsb1lYTW9RV3hzVTNsdFltOXNjeXhyWlhrOWJtRnRaWE5iYVNzclhTa21KbkpsYzNWc2RDNXdkWE5vS0VGc2JGTjViV0p2YkhOYmEyVjVYU2s3Y21WMGRYSnVJSEpsYzNWc2RIMTlLVHR6WlhSVWIxTjBjbWx1WjFSaFp5aE5ZWFJvTEUxQlZFZ3NkSEoxWlNrN2MyVjBWRzlUZEhKcGJtZFVZV2NvWjJ4dlltRnNMa3BUVDA0c1hDSktVMDlPWENJc2RISjFaU2w5S0hOaFptVlRlVzFpYjJ3b1hDSjBZV2RjSWlrc2UzMHNlMzBzZEhKMVpTazdJV1oxYm1OMGFXOXVLQ2w3ZG1GeUlHOWlhbVZqZEZOMFlYUnBZejE3WVhOemFXZHVPbUZ6YzJsbmJpeHBjenBtZFc1amRHbHZiaWg0TEhrcGUzSmxkSFZ5YmlCNFBUMDllVDk0SVQwOU1IeDhNUzk0UFQwOU1TOTVPbmdoUFhnbUpua2hQWGw5ZlR0Y0lsOWZjSEp2ZEc5Zlgxd2lhVzRnVDJKcVpXTjBVSEp2ZEc4bUptWjFibU4wYVc5dUtHSjFaMmQ1TEhObGRDbDdkSEo1ZTNObGREMWpkSGdvWTJGc2JDeG5aWFJQZDI1RVpYTmpjbWx3ZEc5eUtFOWlhbVZqZEZCeWIzUnZMRndpWDE5d2NtOTBiMTlmWENJcExuTmxkQ3d5S1R0elpYUW9lMzBzUVhKeVlYbFFjbTkwYnlsOVkyRjBZMmdvWlNsN1luVm5aM2s5ZEhKMVpYMXZZbXBsWTNSVGRHRjBhV011YzJWMFVISnZkRzkwZVhCbFQyWTljMlYwVUhKdmRHOTBlWEJsVDJZOWMyVjBVSEp2ZEc5MGVYQmxUMlo4ZkdaMWJtTjBhVzl1S0U4c2NISnZkRzhwZTJGemMyVnlkRTlpYW1WamRDaFBLVHRoYzNObGNuUW9jSEp2ZEc4OVBUMXVkV3hzZkh4cGMwOWlhbVZqZENod2NtOTBieWtzY0hKdmRHOHNYQ0k2SUdOaGJpZDBJSE5sZENCaGN5QndjbTkwYjNSNWNHVWhYQ0lwTzJsbUtHSjFaMmQ1S1U4dVgxOXdjbTkwYjE5ZlBYQnliM1J2TzJWc2MyVWdjMlYwS0U4c2NISnZkRzhwTzNKbGRIVnliaUJQZlgwb0tUc2taR1ZtYVc1bEtGTlVRVlJKUXl4UFFrcEZRMVFzYjJKcVpXTjBVM1JoZEdsaktYMG9LVHNoWm5WdVkzUnBiMjRvZEcxd0tYdDBiWEJiVTFsTlFrOU1YMVJCUjEwOVJFOVVPMmxtS0dOdlppaDBiWEFwSVQxRVQxUXBhR2xrWkdWdUtFOWlhbVZqZEZCeWIzUnZMRlJQWDFOVVVrbE9SeXhtZFc1amRHbHZiaWdwZTNKbGRIVnlibHdpVzI5aWFtVmpkQ0JjSWl0amJHRnpjMjltS0hSb2FYTXBLMXdpWFZ3aWZTbDlLSHQ5S1RzaFpuVnVZM1JwYjI0b0tYdG1kVzVqZEdsdmJpQjNjbUZ3VDJKcVpXTjBUV1YwYUc5a0tHdGxlU3hOVDBSRktYdDJZWElnWm00OVQySnFaV04wVzJ0bGVWMHNaWGh3UFdOdmNtVmJUMEpLUlVOVVhWdHJaWGxkTEdZOU1DeHZQWHQ5TzJsbUtDRmxlSEI4ZkdselRtRjBhWFpsS0dWNGNDa3BlMjliYTJWNVhUMU5UMFJGUFQweFAyWjFibU4wYVc5dUtHbDBLWHR5WlhSMWNtNGdhWE5QWW1wbFkzUW9hWFFwUDJadUtHbDBLVHBwZEgwNlRVOUVSVDA5TWo5bWRXNWpkR2x2YmlocGRDbDdjbVYwZFhKdUlHbHpUMkpxWldOMEtHbDBLVDltYmlocGRDazZkSEoxWlgwNlRVOUVSVDA5TXo5bWRXNWpkR2x2YmlocGRDbDdjbVYwZFhKdUlHbHpUMkpxWldOMEtHbDBLVDltYmlocGRDazZabUZzYzJWOU9rMVBSRVU5UFRRL1puVnVZM1JwYjI0b2FYUXNhMlY1S1h0eVpYUjFjbTRnWm00b2RHOVBZbXBsWTNRb2FYUXBMR3RsZVNsOU9tWjFibU4wYVc5dUtHbDBLWHR5WlhSMWNtNGdabTRvZEc5UFltcGxZM1FvYVhRcEtYMDdkSEo1ZTJadUtFUlBWQ2w5WTJGMFkyZ29aU2w3WmoweGZTUmtaV1pwYm1Vb1UxUkJWRWxESzBaUFVrTkZSQ3BtTEU5Q1NrVkRWQ3h2S1gxOWQzSmhjRTlpYW1WamRFMWxkR2h2WkNoY0ltWnlaV1Y2WlZ3aUxERXBPM2R5WVhCUFltcGxZM1JOWlhSb2IyUW9YQ0p6WldGc1hDSXNNU2s3ZDNKaGNFOWlhbVZqZEUxbGRHaHZaQ2hjSW5CeVpYWmxiblJGZUhSbGJuTnBiMjV6WENJc01TazdkM0poY0U5aWFtVmpkRTFsZEdodlpDaGNJbWx6Um5KdmVtVnVYQ0lzTWlrN2QzSmhjRTlpYW1WamRFMWxkR2h2WkNoY0ltbHpVMlZoYkdWa1hDSXNNaWs3ZDNKaGNFOWlhbVZqZEUxbGRHaHZaQ2hjSW1selJYaDBaVzV6YVdKc1pWd2lMRE1wTzNkeVlYQlBZbXBsWTNSTlpYUm9iMlFvWENKblpYUlBkMjVRY205d1pYSjBlVVJsYzJOeWFYQjBiM0pjSWl3MEtUdDNjbUZ3VDJKcVpXTjBUV1YwYUc5a0tGd2laMlYwVUhKdmRHOTBlWEJsVDJaY0lpazdkM0poY0U5aWFtVmpkRTFsZEdodlpDaGNJbXRsZVhOY0lpazdkM0poY0U5aWFtVmpkRTFsZEdodlpDaGNJbWRsZEU5M2JsQnliM0JsY25SNVRtRnRaWE5jSWlsOUtDazdJV1oxYm1OMGFXOXVLRTVCVFVVcGUwNUJUVVVnYVc0Z1JuVnVZM1JwYjI1UWNtOTBiM3g4UkVWVFF5WW1aR1ZtYVc1bFVISnZjR1Z5ZEhrb1JuVnVZM1JwYjI1UWNtOTBieXhPUVUxRkxIdGpiMjVtYVdkMWNtRmliR1U2ZEhKMVpTeG5aWFE2Wm5WdVkzUnBiMjRvS1h0MllYSWdiV0YwWTJnOVUzUnlhVzVuS0hSb2FYTXBMbTFoZEdOb0tDOWVYRnh6S21aMWJtTjBhVzl1SUNoYlhpQW9YU29wTHlrc2JtRnRaVDF0WVhSamFEOXRZWFJqYUZzeFhUcGNJbHdpTzJoaGN5aDBhR2x6TEU1QlRVVXBmSHhrWldacGJtVlFjbTl3WlhKMGVTaDBhR2x6TEU1QlRVVXNaR1Z6WTNKcGNIUnZjaWcxTEc1aGJXVXBLVHR5WlhSMWNtNGdibUZ0Wlgwc2MyVjBPbVoxYm1OMGFXOXVLSFpoYkhWbEtYdG9ZWE1vZEdocGN5eE9RVTFGS1h4OFpHVm1hVzVsVUhKdmNHVnlkSGtvZEdocGN5eE9RVTFGTEdSbGMyTnlhWEIwYjNJb01DeDJZV3gxWlNrcGZYMHBmU2hjSW01aGJXVmNJaWs3VG5WdFltVnlLRndpTUc4eFhDSXBKaVpPZFcxaVpYSW9YQ0l3WWpGY0lpbDhmR1oxYm1OMGFXOXVLRjlPZFcxaVpYSXNUblZ0WW1WeVVISnZkRzhwZTJaMWJtTjBhVzl1SUhSdlRuVnRZbVZ5S0dsMEtYdHBaaWhwYzA5aWFtVmpkQ2hwZENrcGFYUTlkRzlRY21sdGFYUnBkbVVvYVhRcE8ybG1LSFI1Y0dWdlppQnBkRDA5WENKemRISnBibWRjSWlZbWFYUXViR1Z1WjNSb1BqSW1KbWwwTG1Ob1lYSkRiMlJsUVhRb01DazlQVFE0S1h0MllYSWdZbWx1WVhKNVBXWmhiSE5sTzNOM2FYUmphQ2hwZEM1amFHRnlRMjlrWlVGMEtERXBLWHRqWVhObElEWTJPbU5oYzJVZ09UZzZZbWx1WVhKNVBYUnlkV1U3WTJGelpTQTNPVHBqWVhObElERXhNVHB5WlhSMWNtNGdjR0Z5YzJWSmJuUW9hWFF1YzJ4cFkyVW9NaWtzWW1sdVlYSjVQekk2T0NsOWZYSmxkSFZ5Yml0cGRIMW1kVzVqZEdsdmJpQjBiMUJ5YVcxcGRHbDJaU2hwZENsN2RtRnlJR1p1TEhaaGJEdHBaaWhwYzBaMWJtTjBhVzl1S0dadVBXbDBMblpoYkhWbFQyWXBKaVloYVhOUFltcGxZM1FvZG1Gc1BXWnVMbU5oYkd3b2FYUXBLU2x5WlhSMWNtNGdkbUZzTzJsbUtHbHpSblZ1WTNScGIyNG9abTQ5YVhSYlZFOWZVMVJTU1U1SFhTa21KaUZwYzA5aWFtVmpkQ2gyWVd3OVptNHVZMkZzYkNocGRDa3BLWEpsZEhWeWJpQjJZV3c3ZEdoeWIzY2dWSGx3WlVWeWNtOXlLRndpUTJGdUozUWdZMjl1ZG1WeWRDQnZZbXBsWTNRZ2RHOGdiblZ0WW1WeVhDSXBmVTUxYldKbGNqMW1kVzVqZEdsdmJpQk9kVzFpWlhJb2FYUXBlM0psZEhWeWJpQjBhR2x6SUdsdWMzUmhibU5sYjJZZ1RuVnRZbVZ5UDI1bGR5QmZUblZ0WW1WeUtIUnZUblZ0WW1WeUtHbDBLU2s2ZEc5T2RXMWlaWElvYVhRcGZUdG1iM0pGWVdOb0xtTmhiR3dvUkVWVFF6OW5aWFJPWVcxbGN5aGZUblZ0WW1WeUtUcGhjbkpoZVNoY0lrMUJXRjlXUVV4VlJTeE5TVTVmVmtGTVZVVXNUbUZPTEU1RlIwRlVTVlpGWDBsT1JrbE9TVlJaTEZCUFUwbFVTVlpGWDBsT1JrbE9TVlJaWENJcExHWjFibU4wYVc5dUtHdGxlU2w3YTJWNUlHbHVJRTUxYldKbGNueDhaR1ZtYVc1bFVISnZjR1Z5ZEhrb1RuVnRZbVZ5TEd0bGVTeG5aWFJQZDI1RVpYTmpjbWx3ZEc5eUtGOU9kVzFpWlhJc2EyVjVLU2w5S1R0T2RXMWlaWEpiVUZKUFZFOVVXVkJGWFQxT2RXMWlaWEpRY205MGJ6dE9kVzFpWlhKUWNtOTBiMXREVDA1VFZGSlZRMVJQVWwwOVRuVnRZbVZ5TzJocFpHUmxiaWhuYkc5aVlXd3NUbFZOUWtWU0xFNTFiV0psY2lsOUtFNTFiV0psY2l4T2RXMWlaWEpiVUZKUFZFOVVXVkJGWFNrN0lXWjFibU4wYVc5dUtHbHpTVzUwWldkbGNpbDdKR1JsWm1sdVpTaFRWRUZVU1VNc1RsVk5Ra1ZTTEh0RlVGTkpURTlPT25CdmR5Z3lMQzAxTWlrc2FYTkdhVzVwZEdVNlpuVnVZM1JwYjI0b2FYUXBlM0psZEhWeWJpQjBlWEJsYjJZZ2FYUTlQVndpYm5WdFltVnlYQ0ltSm1selJtbHVhWFJsS0dsMEtYMHNhWE5KYm5SbFoyVnlPbWx6U1c1MFpXZGxjaXhwYzA1aFRqcHpZVzFsVG1GT0xHbHpVMkZtWlVsdWRHVm5aWEk2Wm5WdVkzUnBiMjRvYm5WdFltVnlLWHR5WlhSMWNtNGdhWE5KYm5SbFoyVnlLRzUxYldKbGNpa21KbUZpY3lodWRXMWlaWElwUEQxTlFWaGZVMEZHUlY5SlRsUkZSMFZTZlN4TlFWaGZVMEZHUlY5SlRsUkZSMFZTT2sxQldGOVRRVVpGWDBsT1ZFVkhSVklzVFVsT1gxTkJSa1ZmU1U1VVJVZEZVam90VFVGWVgxTkJSa1ZmU1U1VVJVZEZVaXh3WVhKelpVWnNiMkYwT25CaGNuTmxSbXh2WVhRc2NHRnljMlZKYm5RNmNHRnljMlZKYm5SOUtYMG9UblZ0WW1WeUxtbHpTVzUwWldkbGNueDhablZ1WTNScGIyNG9hWFFwZTNKbGRIVnliaUZwYzA5aWFtVmpkQ2hwZENrbUptbHpSbWx1YVhSbEtHbDBLU1ltWm14dmIzSW9hWFFwUFQwOWFYUjlLVHNoWm5WdVkzUnBiMjRvS1h0MllYSWdSVDFOWVhSb0xrVXNaWGh3UFUxaGRHZ3VaWGh3TEd4dlp6MU5ZWFJvTG14dlp5eHpjWEowUFUxaGRHZ3VjM0Z5ZEN4emFXZHVQVTFoZEdndWMybG5ibng4Wm5WdVkzUnBiMjRvZUNsN2NtVjBkWEp1S0hnOUszZ3BQVDB3Zkh4NElUMTRQM2c2ZUR3d1B5MHhPakY5TzJaMWJtTjBhVzl1SUdGemFXNW9LSGdwZTNKbGRIVnliaUZwYzBacGJtbDBaU2g0UFN0NEtYeDhlRDA5TUQ5NE9uZzhNRDh0WVhOcGJtZ29MWGdwT214dlp5aDRLM054Y25Rb2VDcDRLekVwS1gxbWRXNWpkR2x2YmlCbGVIQnRNU2g0S1h0eVpYUjFjbTRvZUQwcmVDazlQVEEvZURwNFBpMHhaUzAySmlaNFBERmxMVFkvZUN0NEtuZ3ZNanBsZUhBb2VDa3RNWDBrWkdWbWFXNWxLRk5VUVZSSlF5eE5RVlJJTEh0aFkyOXphRHBtZFc1amRHbHZiaWg0S1h0eVpYUjFjbTRvZUQwcmVDazhNVDlPWVU0NmFYTkdhVzVwZEdVb2VDay9iRzluS0hndlJTdHpjWEowS0hnck1Ta3FjM0Z5ZENoNExURXBMMFVwS3pFNmVIMHNZWE5wYm1nNllYTnBibWdzWVhSaGJtZzZablZ1WTNScGIyNG9lQ2w3Y21WMGRYSnVLSGc5SzNncFBUMHdQM2c2Ykc5bktDZ3hLM2dwTHlneExYZ3BLUzh5ZlN4alluSjBPbVoxYm1OMGFXOXVLSGdwZTNKbGRIVnliaUJ6YVdkdUtIZzlLM2dwS25CdmR5aGhZbk1vZUNrc01TOHpLWDBzWTJ4Nk16STZablZ1WTNScGIyNG9lQ2w3Y21WMGRYSnVLSGcrUGo0OU1Day9Nekl0ZUZ0VVQxOVRWRkpKVGtkZEtESXBMbXhsYm1kMGFEb3pNbjBzWTI5emFEcG1kVzVqZEdsdmJpaDRLWHR5WlhSMWNtNG9aWGh3S0hnOUszZ3BLMlY0Y0NndGVDa3BMeko5TEdWNGNHMHhPbVY0Y0cweExHWnliM1Z1WkRwbWRXNWpkR2x2YmloNEtYdHlaWFIxY200Z2JtVjNJRVpzYjJGME16SkJjbkpoZVNoYmVGMHBXekJkZlN4b2VYQnZkRHBtZFc1amRHbHZiaWgyWVd4MVpURXNkbUZzZFdVeUtYdDJZWElnYzNWdFBUQXNiR1Z1TVQxaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvTEd4bGJqSTliR1Z1TVN4aGNtZHpQVUZ5Y21GNUtHeGxiakVwTEd4aGNtYzlMVWx1Wm1sdWFYUjVMR0Z5Wnp0M2FHbHNaU2hzWlc0eExTMHBlMkZ5WnoxaGNtZHpXMnhsYmpGZFBTdGhjbWQxYldWdWRITmJiR1Z1TVYwN2FXWW9ZWEpuUFQxSmJtWnBibWwwZVh4OFlYSm5QVDB0U1c1bWFXNXBkSGtwY21WMGRYSnVJRWx1Wm1sdWFYUjVPMmxtS0dGeVp6NXNZWEpuS1d4aGNtYzlZWEpuZld4aGNtYzlZWEpuZkh3eE8zZG9hV3hsS0d4bGJqSXRMU2x6ZFcwclBYQnZkeWhoY21kelcyeGxiakpkTDJ4aGNtY3NNaWs3Y21WMGRYSnVJR3hoY21jcWMzRnlkQ2h6ZFcwcGZTeHBiWFZzT21aMWJtTjBhVzl1S0hnc2VTbDdkbUZ5SUZWSmJuUXhOajAyTlRVek5TeDRiajByZUN4NWJqMHJlU3g0YkQxVlNXNTBNVFltZUc0c2VXdzlWVWx1ZERFMkpubHVPM0psZEhWeWJpQXdmSGhzS25sc0t5Z29WVWx1ZERFMkpuaHVQajQrTVRZcEtubHNLM2hzS2loVlNXNTBNVFltZVc0K1BqNHhOaWs4UERFMlBqNCtNQ2w5TEd4dlp6RndPbVoxYm1OMGFXOXVLSGdwZTNKbGRIVnliaWg0UFN0NEtUNHRNV1V0T0NZbWVEd3haUzA0UDNndGVDcDRMekk2Ykc5bktERXJlQ2w5TEd4dlp6RXdPbVoxYm1OMGFXOXVLSGdwZTNKbGRIVnliaUJzYjJjb2VDa3ZUV0YwYUM1TVRqRXdmU3hzYjJjeU9tWjFibU4wYVc5dUtIZ3BlM0psZEhWeWJpQnNiMmNvZUNrdlRXRjBhQzVNVGpKOUxITnBaMjQ2YzJsbmJpeHphVzVvT21aMWJtTjBhVzl1S0hncGUzSmxkSFZ5YmlCaFluTW9lRDByZUNrOE1UOG9aWGh3YlRFb2VDa3RaWGh3YlRFb0xYZ3BLUzh5T2lobGVIQW9lQzB4S1MxbGVIQW9MWGd0TVNrcEtpaEZMeklwZlN4MFlXNW9PbVoxYm1OMGFXOXVLSGdwZTNaaGNpQmhQV1Y0Y0cweEtIZzlLM2dwTEdJOVpYaHdiVEVvTFhncE8zSmxkSFZ5YmlCaFBUMUpibVpwYm1sMGVUOHhPbUk5UFVsdVptbHVhWFI1UHkweE9paGhMV0lwTHlobGVIQW9lQ2tyWlhod0tDMTRLU2w5TEhSeWRXNWpPblJ5ZFc1amZTbDlLQ2s3SVdaMWJtTjBhVzl1S0daeWIyMURhR0Z5UTI5a1pTbDdablZ1WTNScGIyNGdZWE56WlhKMFRtOTBVbVZuUlhod0tHbDBLWHRwWmloamIyWW9hWFFwUFQxU1JVZEZXRkFwZEdoeWIzY2dWSGx3WlVWeWNtOXlLQ2w5SkdSbFptbHVaU2hUVkVGVVNVTXNVMVJTU1U1SExIdG1jbTl0UTI5a1pWQnZhVzUwT21aMWJtTjBhVzl1S0hncGUzWmhjaUJ5WlhNOVcxMHNiR1Z1UFdGeVozVnRaVzUwY3k1c1pXNW5kR2dzYVQwd0xHTnZaR1U3ZDJocGJHVW9iR1Z1UG1rcGUyTnZaR1U5SzJGeVozVnRaVzUwYzF0cEt5dGRPMmxtS0hSdlNXNWtaWGdvWTI5a1pTd3hNVEUwTVRFeEtTRTlQV052WkdVcGRHaHliM2NnVW1GdVoyVkZjbkp2Y2loamIyUmxLMXdpSUdseklHNXZkQ0JoSUhaaGJHbGtJR052WkdVZ2NHOXBiblJjSWlrN2NtVnpMbkIxYzJnb1kyOWtaVHcyTlRVek5qOW1jbTl0UTJoaGNrTnZaR1VvWTI5a1pTazZabkp2YlVOb1lYSkRiMlJsS0Nnb1kyOWtaUzA5TmpVMU16WXBQajR4TUNrck5UVXlPVFlzWTI5a1pTVXhNREkwS3pVMk16SXdLU2w5Y21WMGRYSnVJSEpsY3k1cWIybHVLRndpWENJcGZTeHlZWGM2Wm5WdVkzUnBiMjRvWTJGc2JGTnBkR1VwZTNaaGNpQnlZWGM5ZEc5UFltcGxZM1FvWTJGc2JGTnBkR1V1Y21GM0tTeHNaVzQ5ZEc5TVpXNW5kR2dvY21GM0xteGxibWQwYUNrc2MyeHVQV0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ3NjbVZ6UFZ0ZExHazlNRHQzYUdsc1pTaHNaVzQrYVNsN2NtVnpMbkIxYzJnb1UzUnlhVzVuS0hKaGQxdHBLeXRkS1NrN2FXWW9hVHh6Ykc0cGNtVnpMbkIxYzJnb1UzUnlhVzVuS0dGeVozVnRaVzUwYzF0cFhTa3BmWEpsZEhWeWJpQnlaWE11YW05cGJpaGNJbHdpS1gxOUtUc2taR1ZtYVc1bEtGQlNUMVJQTEZOVVVrbE9SeXg3WTI5a1pWQnZhVzUwUVhRNlkzSmxZWFJsVUc5cGJuUkJkQ2htWVd4elpTa3NaVzVrYzFkcGRHZzZablZ1WTNScGIyNG9jMlZoY21Ob1UzUnlhVzVuS1h0aGMzTmxjblJPYjNSU1pXZEZlSEFvYzJWaGNtTm9VM1J5YVc1bktUdDJZWElnZEdoaGREMVRkSEpwYm1jb1lYTnpaWEowUkdWbWFXNWxaQ2gwYUdsektTa3NaVzVrVUc5emFYUnBiMjQ5WVhKbmRXMWxiblJ6V3pGZExHeGxiajEwYjB4bGJtZDBhQ2gwYUdGMExteGxibWQwYUNrc1pXNWtQV1Z1WkZCdmMybDBhVzl1UFQwOWRXNWtaV1pwYm1Wa1AyeGxianB0YVc0b2RHOU1aVzVuZEdnb1pXNWtVRzl6YVhScGIyNHBMR3hsYmlrN2MyVmhjbU5vVTNSeWFXNW5LejFjSWx3aU8zSmxkSFZ5YmlCMGFHRjBMbk5zYVdObEtHVnVaQzF6WldGeVkyaFRkSEpwYm1jdWJHVnVaM1JvTEdWdVpDazlQVDF6WldGeVkyaFRkSEpwYm1kOUxHbHVZMngxWkdWek9tWjFibU4wYVc5dUtITmxZWEpqYUZOMGNtbHVaeWw3WVhOelpYSjBUbTkwVW1WblJYaHdLSE5sWVhKamFGTjBjbWx1WnlrN2NtVjBkWEp1SVNGK1UzUnlhVzVuS0dGemMyVnlkRVJsWm1sdVpXUW9kR2hwY3lrcExtbHVaR1Y0VDJZb2MyVmhjbU5vVTNSeWFXNW5MR0Z5WjNWdFpXNTBjMXN4WFNsOUxISmxjR1ZoZERwbWRXNWpkR2x2YmloamIzVnVkQ2w3ZG1GeUlITjBjajFUZEhKcGJtY29ZWE56WlhKMFJHVm1hVzVsWkNoMGFHbHpLU2tzY21WelBWd2lYQ0lzYmoxMGIwbHVkR1ZuWlhJb1kyOTFiblFwTzJsbUtEQStibng4YmowOVNXNW1hVzVwZEhrcGRHaHliM2NnVW1GdVoyVkZjbkp2Y2loY0lrTnZkVzUwSUdOaGJpZDBJR0psSUc1bFoyRjBhWFpsWENJcE8yWnZjaWc3Ymo0d095aHVQajQrUFRFcEppWW9jM1J5S3oxemRISXBLV2xtS0c0bU1TbHlaWE1yUFhOMGNqdHlaWFIxY200Z2NtVnpmU3h6ZEdGeWRITlhhWFJvT21aMWJtTjBhVzl1S0hObFlYSmphRk4wY21sdVp5bDdZWE56WlhKMFRtOTBVbVZuUlhod0tITmxZWEpqYUZOMGNtbHVaeWs3ZG1GeUlIUm9ZWFE5VTNSeWFXNW5LR0Z6YzJWeWRFUmxabWx1WldRb2RHaHBjeWtwTEdsdVpHVjRQWFJ2VEdWdVozUm9LRzFwYmloaGNtZDFiV1Z1ZEhOYk1WMHNkR2hoZEM1c1pXNW5kR2dwS1R0elpXRnlZMmhUZEhKcGJtY3JQVndpWENJN2NtVjBkWEp1SUhSb1lYUXVjMnhwWTJVb2FXNWtaWGdzYVc1a1pYZ3JjMlZoY21Ob1UzUnlhVzVuTG14bGJtZDBhQ2s5UFQxelpXRnlZMmhUZEhKcGJtZDlmU2w5S0ZOMGNtbHVaeTVtY205dFEyaGhja052WkdVcE95Rm1kVzVqZEdsdmJpZ3BleVJrWldacGJtVW9VMVJCVkVsREswWlBVa05GUkNwamFHVmphMFJoYm1kbGNrbDBaWEpEYkc5emFXNW5LRUZ5Y21GNUxtWnliMjBwTEVGU1VrRlpMSHRtY205dE9tWjFibU4wYVc5dUtHRnljbUY1VEdsclpTbDdkbUZ5SUU4OVQySnFaV04wS0dGemMyVnlkRVJsWm1sdVpXUW9ZWEp5WVhsTWFXdGxLU2tzYldGd1ptNDlZWEpuZFcxbGJuUnpXekZkTEcxaGNIQnBibWM5YldGd1ptNGhQVDExYm1SbFptbHVaV1FzWmoxdFlYQndhVzVuUDJOMGVDaHRZWEJtYml4aGNtZDFiV1Z1ZEhOYk1sMHNNaWs2ZFc1a1pXWnBibVZrTEdsdVpHVjRQVEFzYkdWdVozUm9MSEpsYzNWc2RDeHpkR1Z3TzJsbUtHbHpTWFJsY21GaWJHVW9UeWtwZTNKbGMzVnNkRDF1Wlhjb1oyVnVaWEpwWXloMGFHbHpMRUZ5Y21GNUtTazdjMkZtWlVsMFpYSkRiRzl6WlNobWRXNWpkR2x2YmlocGRHVnlZWFJ2Y2lsN1ptOXlLRHNoS0hOMFpYQTlhWFJsY21GMGIzSXVibVY0ZENncEtTNWtiMjVsTzJsdVpHVjRLeXNwZTNKbGMzVnNkRnRwYm1SbGVGMDliV0Z3Y0dsdVp6OW1LSE4wWlhBdWRtRnNkV1VzYVc1a1pYZ3BPbk4wWlhBdWRtRnNkV1Y5ZlN4blpYUkpkR1Z5WVhSdmNpaFBLU2w5Wld4elpYdHlaWE4xYkhROWJtVjNLR2RsYm1WeWFXTW9kR2hwY3l4QmNuSmhlU2twS0d4bGJtZDBhRDEwYjB4bGJtZDBhQ2hQTG14bGJtZDBhQ2twTzJadmNpZzdiR1Z1WjNSb1BtbHVaR1Y0TzJsdVpHVjRLeXNwZTNKbGMzVnNkRnRwYm1SbGVGMDliV0Z3Y0dsdVp6OW1LRTliYVc1a1pYaGRMR2x1WkdWNEtUcFBXMmx1WkdWNFhYMTljbVZ6ZFd4MExteGxibWQwYUQxcGJtUmxlRHR5WlhSMWNtNGdjbVZ6ZFd4MGZYMHBPeVJrWldacGJtVW9VMVJCVkVsRExFRlNVa0ZaTEh0dlpqcG1kVzVqZEdsdmJpZ3BlM1poY2lCcGJtUmxlRDB3TEd4bGJtZDBhRDFoY21kMWJXVnVkSE11YkdWdVozUm9MSEpsYzNWc2REMXVaWGNvWjJWdVpYSnBZeWgwYUdsekxFRnljbUY1S1Nrb2JHVnVaM1JvS1R0M2FHbHNaU2hzWlc1bmRHZythVzVrWlhncGNtVnpkV3gwVzJsdVpHVjRYVDFoY21kMWJXVnVkSE5iYVc1a1pYZ3JLMTA3Y21WemRXeDBMbXhsYm1kMGFEMXNaVzVuZEdnN2NtVjBkWEp1SUhKbGMzVnNkSDE5S1R0elpYUlRjR1ZqYVdWektFRnljbUY1S1gwb0tUc2hablZ1WTNScGIyNG9LWHNrWkdWbWFXNWxLRkJTVDFSUExFRlNVa0ZaTEh0amIzQjVWMmwwYUdsdU9tWjFibU4wYVc5dUtIUmhjbWRsZEN4emRHRnlkQ2w3ZG1GeUlFODlUMkpxWldOMEtHRnpjMlZ5ZEVSbFptbHVaV1FvZEdocGN5a3BMR3hsYmoxMGIweGxibWQwYUNoUExteGxibWQwYUNrc2RHODlkRzlKYm1SbGVDaDBZWEpuWlhRc2JHVnVLU3htY205dFBYUnZTVzVrWlhnb2MzUmhjblFzYkdWdUtTeGxibVE5WVhKbmRXMWxiblJ6V3pKZExHWnBiajFsYm1ROVBUMTFibVJsWm1sdVpXUS9iR1Z1T25SdlNXNWtaWGdvWlc1a0xHeGxiaWtzWTI5MWJuUTliV2x1S0dacGJpMW1jbTl0TEd4bGJpMTBieWtzYVc1alBURTdhV1lvWm5KdmJUeDBieVltZEc4OFpuSnZiU3RqYjNWdWRDbDdhVzVqUFMweE8yWnliMjA5Wm5KdmJTdGpiM1Z1ZEMweE8zUnZQWFJ2SzJOdmRXNTBMVEY5ZDJocGJHVW9ZMjkxYm5RdExUNHdLWHRwWmlobWNtOXRJR2x1SUU4cFQxdDBiMTA5VDF0bWNtOXRYVHRsYkhObElHUmxiR1YwWlNCUFczUnZYVHQwYnlzOWFXNWpPMlp5YjIwclBXbHVZMzF5WlhSMWNtNGdUMzBzWm1sc2JEcG1kVzVqZEdsdmJpaDJZV3gxWlNsN2RtRnlJRTg5VDJKcVpXTjBLR0Z6YzJWeWRFUmxabWx1WldRb2RHaHBjeWtwTEd4bGJtZDBhRDEwYjB4bGJtZDBhQ2hQTG14bGJtZDBhQ2tzYVc1a1pYZzlkRzlKYm1SbGVDaGhjbWQxYldWdWRITmJNVjBzYkdWdVozUm9LU3hsYm1ROVlYSm5kVzFsYm5Seld6SmRMR1Z1WkZCdmN6MWxibVE5UFQxMWJtUmxabWx1WldRL2JHVnVaM1JvT25SdlNXNWtaWGdvWlc1a0xHeGxibWQwYUNrN2QyaHBiR1VvWlc1a1VHOXpQbWx1WkdWNEtVOWJhVzVrWlhncksxMDlkbUZzZFdVN2NtVjBkWEp1SUU5OUxHWnBibVE2WTNKbFlYUmxRWEp5WVhsTlpYUm9iMlFvTlNrc1ptbHVaRWx1WkdWNE9tTnlaV0YwWlVGeWNtRjVUV1YwYUc5a0tEWXBmU2s3YVdZb1puSmhiV1YzYjNKcktYdG1iM0pGWVdOb0xtTmhiR3dvWVhKeVlYa29YQ0ptYVc1a0xHWnBibVJKYm1SbGVDeG1hV3hzTEdOdmNIbFhhWFJvYVc0c1pXNTBjbWxsY3l4clpYbHpMSFpoYkhWbGMxd2lLU3htZFc1amRHbHZiaWhwZENsN1FYSnlZWGxWYm5OamIzQmhZbXhsYzF0cGRGMDlkSEoxWlgwcE8xTlpUVUpQVEY5VlRsTkRUMUJCUWt4RlV5QnBiaUJCY25KaGVWQnliM1J2Zkh4b2FXUmtaVzRvUVhKeVlYbFFjbTkwYnl4VFdVMUNUMHhmVlU1VFEwOVFRVUpNUlZNc1FYSnlZWGxWYm5OamIzQmhZbXhsY3lsOWZTZ3BPeUZtZFc1amRHbHZiaWhoZENsN1pHVm1hVzVsVTNSa1NYUmxjbUYwYjNKektFRnljbUY1TEVGU1VrRlpMR1oxYm1OMGFXOXVLR2wwWlhKaGRHVmtMR3RwYm1RcGUzTmxkQ2gwYUdsekxFbFVSVklzZTI4NmRHOVBZbXBsWTNRb2FYUmxjbUYwWldRcExHazZNQ3hyT210cGJtUjlLWDBzWm5WdVkzUnBiMjRvS1h0MllYSWdhWFJsY2oxMGFHbHpXMGxVUlZKZExFODlhWFJsY2k1dkxHdHBibVE5YVhSbGNpNXJMR2x1WkdWNFBXbDBaWEl1YVNzck8ybG1LQ0ZQZkh4cGJtUmxlRDQ5VHk1c1pXNW5kR2dwZTJsMFpYSXViejExYm1SbFptbHVaV1E3Y21WMGRYSnVJR2wwWlhKU1pYTjFiSFFvTVNsOWFXWW9hMmx1WkQwOVMwVlpLWEpsZEhWeWJpQnBkR1Z5VW1WemRXeDBLREFzYVc1a1pYZ3BPMmxtS0d0cGJtUTlQVlpCVEZWRktYSmxkSFZ5YmlCcGRHVnlVbVZ6ZFd4MEtEQXNUMXRwYm1SbGVGMHBPM0psZEhWeWJpQnBkR1Z5VW1WemRXeDBLREFzVzJsdVpHVjRMRTliYVc1a1pYaGRYU2w5TEZaQlRGVkZLVHRKZEdWeVlYUnZjbk5iUVZKSFZVMUZUbFJUWFQxSmRHVnlZWFJ2Y25OYlFWSlNRVmxkTzJSbFptbHVaVk4wWkVsMFpYSmhkRzl5Y3loVGRISnBibWNzVTFSU1NVNUhMR1oxYm1OMGFXOXVLR2wwWlhKaGRHVmtLWHR6WlhRb2RHaHBjeXhKVkVWU0xIdHZPbE4wY21sdVp5aHBkR1Z5WVhSbFpDa3NhVG93ZlNsOUxHWjFibU4wYVc5dUtDbDdkbUZ5SUdsMFpYSTlkR2hwYzF0SlZFVlNYU3hQUFdsMFpYSXVieXhwYm1SbGVEMXBkR1Z5TG1rc2NHOXBiblE3YVdZb2FXNWtaWGcrUFU4dWJHVnVaM1JvS1hKbGRIVnliaUJwZEdWeVVtVnpkV3gwS0RFcE8zQnZhVzUwUFdGMExtTmhiR3dvVHl4cGJtUmxlQ2s3YVhSbGNpNXBLejF3YjJsdWRDNXNaVzVuZEdnN2NtVjBkWEp1SUdsMFpYSlNaWE4xYkhRb01DeHdiMmx1ZENsOUtYMG9ZM0psWVhSbFVHOXBiblJCZENoMGNuVmxLU2s3UkVWVFF5WW1JV1oxYm1OMGFXOXVLRkpsWjBWNGNGQnliM1J2TEY5U1pXZEZlSEFwZTJsbUtDRm1kVzVqZEdsdmJpZ3BlM1J5ZVh0eVpYUjFjbTRnVW1WblJYaHdLQzloTDJjc1hDSnBYQ0lwUFQxY0lpOWhMMmxjSW4xallYUmphQ2hsS1h0OWZTZ3BLWHRTWldkRmVIQTlablZ1WTNScGIyNGdVbVZuUlhod0tIQmhkSFJsY200c1pteGhaM01wZTNKbGRIVnliaUJ1WlhjZ1gxSmxaMFY0Y0NoamIyWW9jR0YwZEdWeWJpazlQVkpGUjBWWVVDWW1abXhoWjNNaFBUMTFibVJsWm1sdVpXUS9jR0YwZEdWeWJpNXpiM1Z5WTJVNmNHRjBkR1Z5Yml4bWJHRm5jeWw5TzJadmNrVmhZMmd1WTJGc2JDaG5aWFJPWVcxbGN5aGZVbVZuUlhod0tTeG1kVzVqZEdsdmJpaHJaWGtwZTJ0bGVTQnBiaUJTWldkRmVIQjhmR1JsWm1sdVpWQnliM0JsY25SNUtGSmxaMFY0Y0N4clpYa3NlMk52Ym1acFozVnlZV0pzWlRwMGNuVmxMR2RsZERwbWRXNWpkR2x2YmlncGUzSmxkSFZ5YmlCZlVtVm5SWGh3VzJ0bGVWMTlMSE5sZERwbWRXNWpkR2x2YmlocGRDbDdYMUpsWjBWNGNGdHJaWGxkUFdsMGZYMHBmU2s3VW1WblJYaHdVSEp2ZEc5YlEwOU9VMVJTVlVOVVQxSmRQVkpsWjBWNGNEdFNaV2RGZUhCYlVGSlBWRTlVV1ZCRlhUMVNaV2RGZUhCUWNtOTBienRvYVdSa1pXNG9aMnh2WW1Gc0xGSkZSMFZZVUN4U1pXZEZlSEFwZldsbUtDOHVMMmN1Wm14aFozTWhQVndpWjF3aUtXUmxabWx1WlZCeWIzQmxjblI1S0ZKbFowVjRjRkJ5YjNSdkxGd2labXhoWjNOY0lpeDdZMjl1Wm1sbmRYSmhZbXhsT25SeWRXVXNaMlYwT21OeVpXRjBaVkpsY0d4aFkyVnlLQzllTGlwY1hDOG9YRngzS2lra0x5eGNJaVF4WENJcGZTazdjMlYwVTNCbFkybGxjeWhTWldkRmVIQXBmU2hTWldkRmVIQmJVRkpQVkU5VVdWQkZYU3hTWldkRmVIQXBPMmx6Um5WdVkzUnBiMjRvYzJWMFNXMXRaV1JwWVhSbEtTWW1hWE5HZFc1amRHbHZiaWhqYkdWaGNrbHRiV1ZrYVdGMFpTbDhmR1oxYm1OMGFXOXVLRTlPVWtWQlJGbFRWRUZVUlVOSVFVNUhSU2w3ZG1GeUlIQnZjM1JOWlhOellXZGxQV2RzYjJKaGJDNXdiM04wVFdWemMyRm5aU3hoWkdSRmRtVnVkRXhwYzNSbGJtVnlQV2RzYjJKaGJDNWhaR1JGZG1WdWRFeHBjM1JsYm1WeUxFMWxjM05oWjJWRGFHRnVibVZzUFdkc2IySmhiQzVOWlhOellXZGxRMmhoYm01bGJDeGpiM1Z1ZEdWeVBUQXNjWFZsZFdVOWUzMHNaR1ZtWlhJc1kyaGhibTVsYkN4d2IzSjBPM05sZEVsdGJXVmthV0YwWlQxbWRXNWpkR2x2YmlobWJpbDdkbUZ5SUdGeVozTTlXMTBzYVQweE8zZG9hV3hsS0dGeVozVnRaVzUwY3k1c1pXNW5kR2crYVNsaGNtZHpMbkIxYzJnb1lYSm5kVzFsYm5Selcya3JLMTBwTzNGMVpYVmxXeXNyWTI5MWJuUmxjbDA5Wm5WdVkzUnBiMjRvS1h0cGJuWnZhMlVvYVhOR2RXNWpkR2x2YmlobWJpay9abTQ2Um5WdVkzUnBiMjRvWm00cExHRnlaM01wZlR0a1pXWmxjaWhqYjNWdWRHVnlLVHR5WlhSMWNtNGdZMjkxYm5SbGNuMDdZMnhsWVhKSmJXMWxaR2xoZEdVOVpuVnVZM1JwYjI0b2FXUXBlMlJsYkdWMFpTQnhkV1YxWlZ0cFpGMTlPMloxYm1OMGFXOXVJSEoxYmlocFpDbDdhV1lvYUdGektIRjFaWFZsTEdsa0tTbDdkbUZ5SUdadVBYRjFaWFZsVzJsa1hUdGtaV3hsZEdVZ2NYVmxkV1ZiYVdSZE8yWnVLQ2w5ZldaMWJtTjBhVzl1SUd4cGMzUnVaWElvWlhabGJuUXBlM0oxYmlobGRtVnVkQzVrWVhSaEtYMXBaaWhPVDBSRktYdGtaV1psY2oxbWRXNWpkR2x2YmlocFpDbDdibVY0ZEZScFkyc29jR0Z5ZEM1allXeHNLSEoxYml4cFpDa3BmWDFsYkhObElHbG1LR0ZrWkVWMlpXNTBUR2x6ZEdWdVpYSW1KbWx6Um5WdVkzUnBiMjRvY0c5emRFMWxjM05oWjJVcEppWWhaMnh2WW1Gc0xtbHRjRzl5ZEZOamNtbHdkSE1wZTJSbFptVnlQV1oxYm1OMGFXOXVLR2xrS1h0d2IzTjBUV1Z6YzJGblpTaHBaQ3hjSWlwY0lpbDlPMkZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9YQ0p0WlhOellXZGxYQ0lzYkdsemRHNWxjaXhtWVd4elpTbDlaV3h6WlNCcFppaHBjMFoxYm1OMGFXOXVLRTFsYzNOaFoyVkRhR0Z1Ym1Wc0tTbDdZMmhoYm01bGJEMXVaWGNnVFdWemMyRm5aVU5vWVc1dVpXdzdjRzl5ZEQxamFHRnVibVZzTG5CdmNuUXlPMk5vWVc1dVpXd3VjRzl5ZERFdWIyNXRaWE56WVdkbFBXeHBjM1J1WlhJN1pHVm1aWEk5WTNSNEtIQnZjblF1Y0c5emRFMWxjM05oWjJVc2NHOXlkQ3d4S1gxbGJITmxJR2xtS0dSdlkzVnRaVzUwSmlaUFRsSkZRVVJaVTFSQlZFVkRTRUZPUjBVZ2FXNGdaRzlqZFcxbGJuUmJRMUpGUVZSRlgwVk1SVTFGVGxSZEtGd2ljMk55YVhCMFhDSXBLWHRrWldabGNqMW1kVzVqZEdsdmJpaHBaQ2w3YUhSdGJDNWhjSEJsYm1SRGFHbHNaQ2hrYjJOMWJXVnVkRnREVWtWQlZFVmZSVXhGVFVWT1ZGMG9YQ0p6WTNKcGNIUmNJaWtwVzA5T1VrVkJSRmxUVkVGVVJVTklRVTVIUlYwOVpuVnVZM1JwYjI0b0tYdG9kRzFzTG5KbGJXOTJaVU5vYVd4a0tIUm9hWE1wTzNKMWJpaHBaQ2w5ZlgxbGJITmxlMlJsWm1WeVBXWjFibU4wYVc5dUtHbGtLWHR6WlhSVWFXMWxiM1YwS0hKMWJpd3dMR2xrS1gxOWZTaGNJbTl1Y21WaFpIbHpkR0YwWldOb1lXNW5aVndpS1Rza1pHVm1hVzVsS0VkTVQwSkJUQ3RDU1U1RUxIdHpaWFJKYlcxbFpHbGhkR1U2YzJWMFNXMXRaV1JwWVhSbExHTnNaV0Z5U1cxdFpXUnBZWFJsT21Oc1pXRnlTVzF0WldScFlYUmxmU2s3SVdaMWJtTjBhVzl1S0ZCeWIyMXBjMlVzZEdWemRDbDdhWE5HZFc1amRHbHZiaWhRY205dGFYTmxLU1ltYVhOR2RXNWpkR2x2YmloUWNtOXRhWE5sTG5KbGMyOXNkbVVwSmlaUWNtOXRhWE5sTG5KbGMyOXNkbVVvZEdWemREMXVaWGNnVUhKdmJXbHpaU2htZFc1amRHbHZiaWdwZTMwcEtUMDlkR1Z6ZEh4OFpuVnVZM1JwYjI0b1lYTmhjQ3hTUlVOUFVrUXBlMloxYm1OMGFXOXVJR2x6VkdobGJtRmliR1VvYVhRcGUzWmhjaUIwYUdWdU8ybG1LR2x6VDJKcVpXTjBLR2wwS1NsMGFHVnVQV2wwTG5Sb1pXNDdjbVYwZFhKdUlHbHpSblZ1WTNScGIyNG9kR2hsYmlrL2RHaGxianBtWVd4elpYMW1kVzVqZEdsdmJpQm9ZVzVrYkdWa1VtVnFaV04wYVc5dVQzSklZWE5QYmxKbGFtVmpkR1ZrS0hCeWIyMXBjMlVwZTNaaGNpQnlaV052Y21ROWNISnZiV2x6WlZ0U1JVTlBVa1JkTEdOb1lXbHVQWEpsWTI5eVpDNWpMR2s5TUN4eVpXRmpkRHRwWmloeVpXTnZjbVF1YUNseVpYUjFjbTRnZEhKMVpUdDNhR2xzWlNoamFHRnBiaTVzWlc1bmRHZythU2w3Y21WaFkzUTlZMmhoYVc1YmFTc3JYVHRwWmloeVpXRmpkQzVtWVdsc2ZIeG9ZVzVrYkdWa1VtVnFaV04wYVc5dVQzSklZWE5QYmxKbGFtVmpkR1ZrS0hKbFlXTjBMbEFwS1hKbGRIVnliaUIwY25WbGZYMW1kVzVqZEdsdmJpQnViM1JwWm5rb2NtVmpiM0prTEhKbGFtVmpkQ2w3ZG1GeUlHTm9ZV2x1UFhKbFkyOXlaQzVqTzJsbUtISmxhbVZqZEh4OFkyaGhhVzR1YkdWdVozUm9LV0Z6WVhBb1puVnVZM1JwYjI0b0tYdDJZWElnY0hKdmJXbHpaVDF5WldOdmNtUXVjQ3gyWVd4MVpUMXlaV052Y21RdWRpeHZhejF5WldOdmNtUXVjejA5TVN4cFBUQTdhV1lvY21WcVpXTjBKaVloYUdGdVpHeGxaRkpsYW1WamRHbHZiazl5U0dGelQyNVNaV3BsWTNSbFpDaHdjbTl0YVhObEtTbDdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaWdwZTJsbUtDRm9ZVzVrYkdWa1VtVnFaV04wYVc5dVQzSklZWE5QYmxKbGFtVmpkR1ZrS0hCeWIyMXBjMlVwS1h0cFppaE9UMFJGS1h0cFppZ2hjSEp2WTJWemN5NWxiV2wwS0Z3aWRXNW9ZVzVrYkdWa1VtVnFaV04wYVc5dVhDSXNkbUZzZFdVc2NISnZiV2x6WlNrcGUzMTlaV3h6WlNCcFppaHBjMFoxYm1OMGFXOXVLR052Ym5OdmJHVXVaWEp5YjNJcEtYdGpiMjV6YjJ4bExtVnljbTl5S0Z3aVZXNW9ZVzVrYkdWa0lIQnliMjFwYzJVZ2NtVnFaV04wYVc5dVhDSXNkbUZzZFdVcGZYMTlMREZsTXlsOVpXeHpaU0IzYUdsc1pTaGphR0ZwYmk1c1pXNW5kR2crYVNraFpuVnVZM1JwYjI0b2NtVmhZM1FwZTNaaGNpQmpZajF2YXo5eVpXRmpkQzV2YXpweVpXRmpkQzVtWVdsc0xISmxkQ3gwYUdWdU8zUnllWHRwWmloallpbDdhV1lvSVc5cktYSmxZMjl5WkM1b1BYUnlkV1U3Y21WMFBXTmlQVDA5ZEhKMVpUOTJZV3gxWlRwallpaDJZV3gxWlNrN2FXWW9jbVYwUFQwOWNtVmhZM1F1VUNsN2NtVmhZM1F1Y21WcUtGUjVjR1ZGY25KdmNpaFFVazlOU1ZORksxd2lMV05vWVdsdUlHTjVZMnhsWENJcEtYMWxiSE5sSUdsbUtIUm9aVzQ5YVhOVWFHVnVZV0pzWlNoeVpYUXBLWHQwYUdWdUxtTmhiR3dvY21WMExISmxZV04wTG5KbGN5eHlaV0ZqZEM1eVpXb3BmV1ZzYzJVZ2NtVmhZM1F1Y21WektISmxkQ2w5Wld4elpTQnlaV0ZqZEM1eVpXb29kbUZzZFdVcGZXTmhkR05vS0dWeWNpbDdjbVZoWTNRdWNtVnFLR1Z5Y2lsOWZTaGphR0ZwYmx0cEt5dGRLVHRqYUdGcGJpNXNaVzVuZEdnOU1IMHBmV1oxYm1OMGFXOXVJSEpsYzI5c2RtVW9kbUZzZFdVcGUzWmhjaUJ5WldOdmNtUTlkR2hwY3l4MGFHVnVMSGR5WVhCd1pYSTdhV1lvY21WamIzSmtMbVFwY21WMGRYSnVPM0psWTI5eVpDNWtQWFJ5ZFdVN2NtVmpiM0prUFhKbFkyOXlaQzV5Zkh4eVpXTnZjbVE3ZEhKNWUybG1LSFJvWlc0OWFYTlVhR1Z1WVdKc1pTaDJZV3gxWlNrcGUzZHlZWEJ3WlhJOWUzSTZjbVZqYjNKa0xHUTZabUZzYzJWOU8zUm9aVzR1WTJGc2JDaDJZV3gxWlN4amRIZ29jbVZ6YjJ4MlpTeDNjbUZ3Y0dWeUxERXBMR04wZUNoeVpXcGxZM1FzZDNKaGNIQmxjaXd4S1NsOVpXeHpaWHR5WldOdmNtUXVkajEyWVd4MVpUdHlaV052Y21RdWN6MHhPMjV2ZEdsbWVTaHlaV052Y21RcGZYMWpZWFJqYUNobGNuSXBlM0psYW1WamRDNWpZV3hzS0hkeVlYQndaWEo4Zkh0eU9uSmxZMjl5WkN4a09tWmhiSE5sZlN4bGNuSXBmWDFtZFc1amRHbHZiaUJ5WldwbFkzUW9kbUZzZFdVcGUzWmhjaUJ5WldOdmNtUTlkR2hwY3p0cFppaHlaV052Y21RdVpDbHlaWFIxY200N2NtVmpiM0prTG1ROWRISjFaVHR5WldOdmNtUTljbVZqYjNKa0xuSjhmSEpsWTI5eVpEdHlaV052Y21RdWRqMTJZV3gxWlR0eVpXTnZjbVF1Y3oweU8yNXZkR2xtZVNoeVpXTnZjbVFzZEhKMVpTbDlablZ1WTNScGIyNGdaMlYwUTI5dWMzUnlkV04wYjNJb1F5bDdkbUZ5SUZNOVlYTnpaWEowVDJKcVpXTjBLRU1wVzFOWlRVSlBURjlUVUVWRFNVVlRYVHR5WlhSMWNtNGdVeUU5ZFc1a1pXWnBibVZrUDFNNlEzMVFjbTl0YVhObFBXWjFibU4wYVc5dUtHVjRaV04xZEc5eUtYdGhjM05sY25SR2RXNWpkR2x2YmlobGVHVmpkWFJ2Y2lrN1lYTnpaWEowU1c1emRHRnVZMlVvZEdocGN5eFFjbTl0YVhObExGQlNUMDFKVTBVcE8zWmhjaUJ5WldOdmNtUTllM0E2ZEdocGN5eGpPbHRkTEhNNk1DeGtPbVpoYkhObExIWTZkVzVrWldacGJtVmtMR2c2Wm1Gc2MyVjlPMmhwWkdSbGJpaDBhR2x6TEZKRlEwOVNSQ3h5WldOdmNtUXBPM1J5ZVh0bGVHVmpkWFJ2Y2loamRIZ29jbVZ6YjJ4MlpTeHlaV052Y21Rc01Ta3NZM1I0S0hKbGFtVmpkQ3h5WldOdmNtUXNNU2twZldOaGRHTm9LR1Z5Y2lsN2NtVnFaV04wTG1OaGJHd29jbVZqYjNKa0xHVnljaWw5ZlR0aGMzTnBaMjVJYVdSa1pXNG9VSEp2YldselpWdFFVazlVVDFSWlVFVmRMSHQwYUdWdU9tWjFibU4wYVc5dUtHOXVSblZzWm1sc2JHVmtMRzl1VW1WcVpXTjBaV1FwZTNaaGNpQlRQV0Z6YzJWeWRFOWlhbVZqZENoaGMzTmxjblJQWW1wbFkzUW9kR2hwY3lsYlEwOU9VMVJTVlVOVVQxSmRLVnRUV1UxQ1QweGZVMUJGUTBsRlUxMDdkbUZ5SUhKbFlXTjBQWHR2YXpwcGMwWjFibU4wYVc5dUtHOXVSblZzWm1sc2JHVmtLVDl2YmtaMWJHWnBiR3hsWkRwMGNuVmxMR1poYVd3NmFYTkdkVzVqZEdsdmJpaHZibEpsYW1WamRHVmtLVDl2YmxKbGFtVmpkR1ZrT21aaGJITmxmU3hRUFhKbFlXTjBMbEE5Ym1WM0tGTWhQWFZ1WkdWbWFXNWxaRDlUT2xCeWIyMXBjMlVwS0daMWJtTjBhVzl1S0hKbGMyOXNkbVVzY21WcVpXTjBLWHR5WldGamRDNXlaWE05WVhOelpYSjBSblZ1WTNScGIyNG9jbVZ6YjJ4MlpTazdjbVZoWTNRdWNtVnFQV0Z6YzJWeWRFWjFibU4wYVc5dUtISmxhbVZqZENsOUtTeHlaV052Y21ROWRHaHBjMXRTUlVOUFVrUmRPM0psWTI5eVpDNWpMbkIxYzJnb2NtVmhZM1FwTzNKbFkyOXlaQzV6SmladWIzUnBabmtvY21WamIzSmtLVHR5WlhSMWNtNGdVSDBzWENKallYUmphRndpT21aMWJtTjBhVzl1S0c5dVVtVnFaV04wWldRcGUzSmxkSFZ5YmlCMGFHbHpMblJvWlc0b2RXNWtaV1pwYm1Wa0xHOXVVbVZxWldOMFpXUXBmWDBwTzJGemMybG5ia2hwWkdSbGJpaFFjbTl0YVhObExIdGhiR3c2Wm5WdVkzUnBiMjRvYVhSbGNtRmliR1VwZTNaaGNpQlFjbTl0YVhObFBXZGxkRU52Ym5OMGNuVmpkRzl5S0hSb2FYTXBMSFpoYkhWbGN6MWJYVHR5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvWm5WdVkzUnBiMjRvY21WemIyeDJaU3h5WldwbFkzUXBlMlp2Y2s5bUtHbDBaWEpoWW14bExHWmhiSE5sTEhCMWMyZ3NkbUZzZFdWektUdDJZWElnY21WdFlXbHVhVzVuUFhaaGJIVmxjeTVzWlc1bmRHZ3NjbVZ6ZFd4MGN6MUJjbkpoZVNoeVpXMWhhVzVwYm1jcE8ybG1LSEpsYldGcGJtbHVaeWxtYjNKRllXTm9MbU5oYkd3b2RtRnNkV1Z6TEdaMWJtTjBhVzl1S0hCeWIyMXBjMlVzYVc1a1pYZ3BlMUJ5YjIxcGMyVXVjbVZ6YjJ4MlpTaHdjbTl0YVhObEtTNTBhR1Z1S0daMWJtTjBhVzl1S0haaGJIVmxLWHR5WlhOMWJIUnpXMmx1WkdWNFhUMTJZV3gxWlRzdExYSmxiV0ZwYm1sdVozeDhjbVZ6YjJ4MlpTaHlaWE4xYkhSektYMHNjbVZxWldOMEtYMHBPMlZzYzJVZ2NtVnpiMngyWlNoeVpYTjFiSFJ6S1gwcGZTeHlZV05sT21aMWJtTjBhVzl1S0dsMFpYSmhZbXhsS1h0MllYSWdVSEp2YldselpUMW5aWFJEYjI1emRISjFZM1J2Y2loMGFHbHpLVHR5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvWm5WdVkzUnBiMjRvY21WemIyeDJaU3h5WldwbFkzUXBlMlp2Y2s5bUtHbDBaWEpoWW14bExHWmhiSE5sTEdaMWJtTjBhVzl1S0hCeWIyMXBjMlVwZTFCeWIyMXBjMlV1Y21WemIyeDJaU2h3Y205dGFYTmxLUzUwYUdWdUtISmxjMjlzZG1Vc2NtVnFaV04wS1gwcGZTbDlMSEpsYW1WamREcG1kVzVqZEdsdmJpaHlLWHR5WlhSMWNtNGdibVYzS0dkbGRFTnZibk4wY25WamRHOXlLSFJvYVhNcEtTaG1kVzVqZEdsdmJpaHlaWE52YkhabExISmxhbVZqZENsN2NtVnFaV04wS0hJcGZTbDlMSEpsYzI5c2RtVTZablZ1WTNScGIyNG9lQ2w3Y21WMGRYSnVJR2x6VDJKcVpXTjBLSGdwSmlaU1JVTlBVa1FnYVc0Z2VDWW1aMlYwVUhKdmRHOTBlWEJsVDJZb2VDazlQVDEwYUdselcxQlNUMVJQVkZsUVJWMC9lRHB1Wlhjb1oyVjBRMjl1YzNSeWRXTjBiM0lvZEdocGN5a3BLR1oxYm1OMGFXOXVLSEpsYzI5c2RtVXNjbVZxWldOMEtYdHlaWE52YkhabEtIZ3BmU2w5ZlNsOUtHNWxlSFJVYVdOcmZIeHpaWFJKYlcxbFpHbGhkR1VzYzJGbVpWTjViV0p2YkNoY0luSmxZMjl5WkZ3aUtTazdjMlYwVkc5VGRISnBibWRVWVdjb1VISnZiV2x6WlN4UVVrOU5TVk5GS1R0elpYUlRjR1ZqYVdWektGQnliMjFwYzJVcE95UmtaV1pwYm1Vb1IweFBRa0ZNSzBaUFVrTkZSQ29oYVhOT1lYUnBkbVVvVUhKdmJXbHpaU2tzZTFCeWIyMXBjMlU2VUhKdmJXbHpaWDBwZlNobmJHOWlZV3hiVUZKUFRVbFRSVjBwT3lGbWRXNWpkR2x2YmlncGUzWmhjaUJWU1VROWMyRm1aVk41YldKdmJDaGNJblZwWkZ3aUtTeFBNVDF6WVdabFUzbHRZbTlzS0Z3aVR6RmNJaWtzVjBWQlN6MXpZV1psVTNsdFltOXNLRndpZDJWaGExd2lLU3hNUlVGTFBYTmhabVZUZVcxaWIyd29YQ0pzWldGclhDSXBMRXhCVTFROWMyRm1aVk41YldKdmJDaGNJbXhoYzNSY0lpa3NSa2xTVTFROWMyRm1aVk41YldKdmJDaGNJbVpwY25OMFhDSXBMRk5KV2tVOVJFVlRRejl6WVdabFUzbHRZbTlzS0Z3aWMybDZaVndpS1RwY0luTnBlbVZjSWl4MWFXUTlNQ3gwYlhBOWUzMDdablZ1WTNScGIyNGdaMlYwUTI5c2JHVmpkR2x2YmloRExFNUJUVVVzYldWMGFHOWtjeXhqYjIxdGIyNU5aWFJvYjJSekxHbHpUV0Z3TEdselYyVmhheWw3ZG1GeUlFRkVSRVZTUFdselRXRndQMXdpYzJWMFhDSTZYQ0poWkdSY0lpeHdjbTkwYnoxREppWkRXMUJTVDFSUFZGbFFSVjBzVHoxN2ZUdG1kVzVqZEdsdmJpQnBibWwwUm5KdmJVbDBaWEpoWW14bEtIUm9ZWFFzYVhSbGNtRmliR1VwZTJsbUtHbDBaWEpoWW14bElUMTFibVJsWm1sdVpXUXBabTl5VDJZb2FYUmxjbUZpYkdVc2FYTk5ZWEFzZEdoaGRGdEJSRVJGVWwwc2RHaGhkQ2s3Y21WMGRYSnVJSFJvWVhSOVpuVnVZM1JwYjI0Z1ptbDRVMVphS0d0bGVTeGphR0ZwYmlsN2RtRnlJRzFsZEdodlpEMXdjbTkwYjF0clpYbGRPMmxtS0daeVlXMWxkMjl5YXlsd2NtOTBiMXRyWlhsZFBXWjFibU4wYVc5dUtHRXNZaWw3ZG1GeUlISmxjM1ZzZEQxdFpYUm9iMlF1WTJGc2JDaDBhR2x6TEdFOVBUMHdQekE2WVN4aUtUdHlaWFIxY200Z1kyaGhhVzQvZEdocGN6cHlaWE4xYkhSOWZXbG1LQ0ZwYzA1aGRHbDJaU2hES1h4OElTaHBjMWRsWVd0OGZDRkNWVWRIV1Y5SlZFVlNRVlJQVWxNbUptaGhjeWh3Y205MGJ5eEdUMUpmUlVGRFNDa21KbWhoY3lod2NtOTBieXhjSW1WdWRISnBaWE5jSWlrcEtYdERQV2x6VjJWaGF6OW1kVzVqZEdsdmJpaHBkR1Z5WVdKc1pTbDdZWE56WlhKMFNXNXpkR0Z1WTJVb2RHaHBjeXhETEU1QlRVVXBPM05sZENoMGFHbHpMRlZKUkN4MWFXUXJLeWs3YVc1cGRFWnliMjFKZEdWeVlXSnNaU2gwYUdsekxHbDBaWEpoWW14bEtYMDZablZ1WTNScGIyNG9hWFJsY21GaWJHVXBlM1poY2lCMGFHRjBQWFJvYVhNN1lYTnpaWEowU1c1emRHRnVZMlVvZEdoaGRDeERMRTVCVFVVcE8zTmxkQ2gwYUdGMExFOHhMR055WldGMFpTaHVkV3hzS1NrN2MyVjBLSFJvWVhRc1UwbGFSU3d3S1R0elpYUW9kR2hoZEN4TVFWTlVMSFZ1WkdWbWFXNWxaQ2s3YzJWMEtIUm9ZWFFzUmtsU1UxUXNkVzVrWldacGJtVmtLVHRwYm1sMFJuSnZiVWwwWlhKaFlteGxLSFJvWVhRc2FYUmxjbUZpYkdVcGZUdGhjM05wWjI1SWFXUmtaVzRvWVhOemFXZHVTR2xrWkdWdUtFTmJVRkpQVkU5VVdWQkZYU3h0WlhSb2IyUnpLU3hqYjIxdGIyNU5aWFJvYjJSektUdHBjMWRsWVd0OGZDRkVSVk5EZkh4a1pXWnBibVZRY205d1pYSjBlU2hEVzFCU1QxUlBWRmxRUlYwc1hDSnphWHBsWENJc2UyZGxkRHBtZFc1amRHbHZiaWdwZTNKbGRIVnliaUJoYzNObGNuUkVaV1pwYm1Wa0tIUm9hWE5iVTBsYVJWMHBmWDBwZldWc2MyVjdkbUZ5SUU1aGRHbDJaVDFETEdsdWMzUTlibVYzSUVNc1kyaGhhVzQ5YVc1emRGdEJSRVJGVWwwb2FYTlhaV0ZyUDN0OU9pMHdMREVwTEdKMVoyZDVXbVZ5Ynp0cFppaGphR1ZqYTBSaGJtZGxja2wwWlhKRGJHOXphVzVuS0daMWJtTjBhVzl1S0U4cGUyNWxkeUJES0U4cGZTa3BlME05Wm5WdVkzUnBiMjRvYVhSbGNtRmliR1VwZTJGemMyVnlkRWx1YzNSaGJtTmxLSFJvYVhNc1F5eE9RVTFGS1R0eVpYUjFjbTRnYVc1cGRFWnliMjFKZEdWeVlXSnNaU2h1WlhjZ1RtRjBhWFpsTEdsMFpYSmhZbXhsS1gwN1ExdFFVazlVVDFSWlVFVmRQWEJ5YjNSdk8ybG1LR1p5WVcxbGQyOXlheWx3Y205MGIxdERUMDVUVkZKVlExUlBVbDA5UTMxcGMxZGxZV3Q4ZkdsdWMzUmJSazlTWDBWQlEwaGRLR1oxYm1OMGFXOXVLSFpoYkN4clpYa3BlMkoxWjJkNVdtVnliejB4TDJ0bGVUMDlQUzFKYm1acGJtbDBlWDBwTzJsbUtHSjFaMmQ1V21WeWJ5bDdabWw0VTFaYUtGd2laR1ZzWlhSbFhDSXBPMlpwZUZOV1dpaGNJbWhoYzF3aUtUdHBjMDFoY0NZbVptbDRVMVphS0Z3aVoyVjBYQ0lwZldsbUtHSjFaMmQ1V21WeWIzeDhZMmhoYVc0aFBUMXBibk4wS1dacGVGTldXaWhCUkVSRlVpeDBjblZsS1gxelpYUlViMU4wY21sdVoxUmhaeWhETEU1QlRVVXBPM05sZEZOd1pXTnBaWE1vUXlrN1QxdE9RVTFGWFQxRE95UmtaV1pwYm1Vb1IweFBRa0ZNSzFkU1FWQXJSazlTUTBWRUtpRnBjMDVoZEdsMlpTaERLU3hQS1R0cGMxZGxZV3Q4ZkdSbFptbHVaVk4wWkVsMFpYSmhkRzl5Y3loRExFNUJUVVVzWm5WdVkzUnBiMjRvYVhSbGNtRjBaV1FzYTJsdVpDbDdjMlYwS0hSb2FYTXNTVlJGVWl4N2J6cHBkR1Z5WVhSbFpDeHJPbXRwYm1SOUtYMHNablZ1WTNScGIyNG9LWHQyWVhJZ2FYUmxjajEwYUdselcwbFVSVkpkTEd0cGJtUTlhWFJsY2k1ckxHVnVkSEo1UFdsMFpYSXViRHQzYUdsc1pTaGxiblJ5ZVNZbVpXNTBjbmt1Y2lsbGJuUnllVDFsYm5SeWVTNXdPMmxtS0NGcGRHVnlMbTk4ZkNFb2FYUmxjaTVzUFdWdWRISjVQV1Z1ZEhKNVAyVnVkSEo1TG00NmFYUmxjaTV2VzBaSlVsTlVYU2twZTJsMFpYSXViejExYm1SbFptbHVaV1E3Y21WMGRYSnVJR2wwWlhKU1pYTjFiSFFvTVNsOWFXWW9hMmx1WkQwOVMwVlpLWEpsZEhWeWJpQnBkR1Z5VW1WemRXeDBLREFzWlc1MGNua3VheWs3YVdZb2EybHVaRDA5VmtGTVZVVXBjbVYwZFhKdUlHbDBaWEpTWlhOMWJIUW9NQ3hsYm5SeWVTNTJLVHR5WlhSMWNtNGdhWFJsY2xKbGMzVnNkQ2d3TEZ0bGJuUnllUzVyTEdWdWRISjVMblpkS1gwc2FYTk5ZWEEvUzBWWksxWkJURlZGT2xaQlRGVkZMQ0ZwYzAxaGNDazdjbVYwZFhKdUlFTjlablZ1WTNScGIyNGdabUZ6ZEV0bGVTaHBkQ3hqY21WaGRHVXBlMmxtS0NGcGMwOWlhbVZqZENocGRDa3BjbVYwZFhKdUtIUjVjR1Z2WmlCcGREMDlYQ0p6ZEhKcGJtZGNJajljSWxOY0lqcGNJbEJjSWlrcmFYUTdhV1lvYVhOR2NtOTZaVzRvYVhRcEtYSmxkSFZ5Ymx3aVJsd2lPMmxtS0NGb1lYTW9hWFFzVlVsRUtTbDdhV1lvSVdOeVpXRjBaU2x5WlhSMWNtNWNJa1ZjSWp0b2FXUmtaVzRvYVhRc1ZVbEVMQ3NyZFdsa0tYMXlaWFIxY201Y0lrOWNJaXRwZEZ0VlNVUmRmV1oxYm1OMGFXOXVJR2RsZEVWdWRISjVLSFJvWVhRc2EyVjVLWHQyWVhJZ2FXNWtaWGc5Wm1GemRFdGxlU2hyWlhrcExHVnVkSEo1TzJsbUtHbHVaR1Y0SVQxY0lrWmNJaWx5WlhSMWNtNGdkR2hoZEZ0UE1WMWJhVzVrWlhoZE8yWnZjaWhsYm5SeWVUMTBhR0YwVzBaSlVsTlVYVHRsYm5SeWVUdGxiblJ5ZVQxbGJuUnllUzV1S1h0cFppaGxiblJ5ZVM1clBUMXJaWGtwY21WMGRYSnVJR1Z1ZEhKNWZYMW1kVzVqZEdsdmJpQmtaV1lvZEdoaGRDeHJaWGtzZG1Gc2RXVXBlM1poY2lCbGJuUnllVDFuWlhSRmJuUnllU2gwYUdGMExHdGxlU2tzY0hKbGRpeHBibVJsZUR0cFppaGxiblJ5ZVNsbGJuUnllUzUyUFhaaGJIVmxPMlZzYzJWN2RHaGhkRnRNUVZOVVhUMWxiblJ5ZVQxN2FUcHBibVJsZUQxbVlYTjBTMlY1S0d0bGVTeDBjblZsS1N4ck9tdGxlU3gyT25aaGJIVmxMSEE2Y0hKbGRqMTBhR0YwVzB4QlUxUmRMRzQ2ZFc1a1pXWnBibVZrTEhJNlptRnNjMlY5TzJsbUtDRjBhR0YwVzBaSlVsTlVYU2wwYUdGMFcwWkpVbE5VWFQxbGJuUnllVHRwWmlod2NtVjJLWEJ5WlhZdWJqMWxiblJ5ZVR0MGFHRjBXMU5KV2tWZEt5czdhV1lvYVc1a1pYZ2hQVndpUmx3aUtYUm9ZWFJiVHpGZFcybHVaR1Y0WFQxbGJuUnllWDF5WlhSMWNtNGdkR2hoZEgxMllYSWdZMjlzYkdWamRHbHZiazFsZEdodlpITTllMk5zWldGeU9tWjFibU4wYVc5dUtDbDdabTl5S0haaGNpQjBhR0YwUFhSb2FYTXNaR0YwWVQxMGFHRjBXMDh4WFN4bGJuUnllVDEwYUdGMFcwWkpVbE5VWFR0bGJuUnllVHRsYm5SeWVUMWxiblJ5ZVM1dUtYdGxiblJ5ZVM1eVBYUnlkV1U3WEc1cFppaGxiblJ5ZVM1d0tXVnVkSEo1TG5BOVpXNTBjbmt1Y0M1dVBYVnVaR1ZtYVc1bFpEdGtaV3hsZEdVZ1pHRjBZVnRsYm5SeWVTNXBYWDEwYUdGMFcwWkpVbE5VWFQxMGFHRjBXMHhCVTFSZFBYVnVaR1ZtYVc1bFpEdDBhR0YwVzFOSldrVmRQVEI5TEZ3aVpHVnNaWFJsWENJNlpuVnVZM1JwYjI0b2EyVjVLWHQyWVhJZ2RHaGhkRDEwYUdsekxHVnVkSEo1UFdkbGRFVnVkSEo1S0hSb1lYUXNhMlY1S1R0cFppaGxiblJ5ZVNsN2RtRnlJRzVsZUhROVpXNTBjbmt1Yml4d2NtVjJQV1Z1ZEhKNUxuQTdaR1ZzWlhSbElIUm9ZWFJiVHpGZFcyVnVkSEo1TG1sZE8yVnVkSEo1TG5JOWRISjFaVHRwWmlod2NtVjJLWEJ5WlhZdWJqMXVaWGgwTzJsbUtHNWxlSFFwYm1WNGRDNXdQWEJ5WlhZN2FXWW9kR2hoZEZ0R1NWSlRWRjA5UFdWdWRISjVLWFJvWVhSYlJrbFNVMVJkUFc1bGVIUTdhV1lvZEdoaGRGdE1RVk5VWFQwOVpXNTBjbmtwZEdoaGRGdE1RVk5VWFQxd2NtVjJPM1JvWVhSYlUwbGFSVjB0TFgxeVpYUjFjbTRoSVdWdWRISjVmU3htYjNKRllXTm9PbVoxYm1OMGFXOXVLR05oYkd4aVlXTnJabTRwZTNaaGNpQm1QV04wZUNoallXeHNZbUZqYTJadUxHRnlaM1Z0Wlc1MGMxc3hYU3d6S1N4bGJuUnllVHQzYUdsc1pTaGxiblJ5ZVQxbGJuUnllVDlsYm5SeWVTNXVPblJvYVhOYlJrbFNVMVJkS1h0bUtHVnVkSEo1TG5Zc1pXNTBjbmt1YXl4MGFHbHpLVHQzYUdsc1pTaGxiblJ5ZVNZbVpXNTBjbmt1Y2lsbGJuUnllVDFsYm5SeWVTNXdmWDBzYUdGek9tWjFibU4wYVc5dUtHdGxlU2w3Y21WMGRYSnVJU0ZuWlhSRmJuUnllU2gwYUdsekxHdGxlU2w5ZlR0TllYQTlaMlYwUTI5c2JHVmpkR2x2YmloTllYQXNUVUZRTEh0blpYUTZablZ1WTNScGIyNG9hMlY1S1h0MllYSWdaVzUwY25rOVoyVjBSVzUwY25rb2RHaHBjeXhyWlhrcE8zSmxkSFZ5YmlCbGJuUnllU1ltWlc1MGNua3VkbjBzYzJWME9tWjFibU4wYVc5dUtHdGxlU3gyWVd4MVpTbDdjbVYwZFhKdUlHUmxaaWgwYUdsekxHdGxlVDA5UFRBL01EcHJaWGtzZG1Gc2RXVXBmWDBzWTI5c2JHVmpkR2x2YmsxbGRHaHZaSE1zZEhKMVpTazdVMlYwUFdkbGRFTnZiR3hsWTNScGIyNG9VMlYwTEZORlZDeDdZV1JrT21aMWJtTjBhVzl1S0haaGJIVmxLWHR5WlhSMWNtNGdaR1ZtS0hSb2FYTXNkbUZzZFdVOWRtRnNkV1U5UFQwd1B6QTZkbUZzZFdVc2RtRnNkV1VwZlgwc1kyOXNiR1ZqZEdsdmJrMWxkR2h2WkhNcE8yWjFibU4wYVc5dUlHUmxabGRsWVdzb2RHaGhkQ3hyWlhrc2RtRnNkV1VwZTJsbUtHbHpSbkp2ZW1WdUtHRnpjMlZ5ZEU5aWFtVmpkQ2hyWlhrcEtTbHNaV0ZyVTNSdmNtVW9kR2hoZENrdWMyVjBLR3RsZVN4MllXeDFaU2s3Wld4elpYdG9ZWE1vYTJWNUxGZEZRVXNwZkh4b2FXUmtaVzRvYTJWNUxGZEZRVXNzZTMwcE8ydGxlVnRYUlVGTFhWdDBhR0YwVzFWSlJGMWRQWFpoYkhWbGZYSmxkSFZ5YmlCMGFHRjBmV1oxYm1OMGFXOXVJR3hsWVd0VGRHOXlaU2gwYUdGMEtYdHlaWFIxY200Z2RHaGhkRnRNUlVGTFhYeDhhR2xrWkdWdUtIUm9ZWFFzVEVWQlN5eHVaWGNnVFdGd0tWdE1SVUZMWFgxMllYSWdkMlZoYTAxbGRHaHZaSE05ZTF3aVpHVnNaWFJsWENJNlpuVnVZM1JwYjI0b2EyVjVLWHRwWmlnaGFYTlBZbXBsWTNRb2EyVjVLU2x5WlhSMWNtNGdabUZzYzJVN2FXWW9hWE5HY205NlpXNG9hMlY1S1NseVpYUjFjbTRnYkdWaGExTjBiM0psS0hSb2FYTXBXMXdpWkdWc1pYUmxYQ0pkS0d0bGVTazdjbVYwZFhKdUlHaGhjeWhyWlhrc1YwVkJTeWttSm1oaGN5aHJaWGxiVjBWQlMxMHNkR2hwYzF0VlNVUmRLU1ltWkdWc1pYUmxJR3RsZVZ0WFJVRkxYVnQwYUdselcxVkpSRjFkZlN4b1lYTTZablZ1WTNScGIyNG9hMlY1S1h0cFppZ2hhWE5QWW1wbFkzUW9hMlY1S1NseVpYUjFjbTRnWm1Gc2MyVTdhV1lvYVhOR2NtOTZaVzRvYTJWNUtTbHlaWFIxY200Z2JHVmhhMU4wYjNKbEtIUm9hWE1wTG1oaGN5aHJaWGtwTzNKbGRIVnliaUJvWVhNb2EyVjVMRmRGUVVzcEppWm9ZWE1vYTJWNVcxZEZRVXRkTEhSb2FYTmJWVWxFWFNsOWZUdFhaV0ZyVFdGd1BXZGxkRU52Ykd4bFkzUnBiMjRvVjJWaGEwMWhjQ3hYUlVGTFRVRlFMSHRuWlhRNlpuVnVZM1JwYjI0b2EyVjVLWHRwWmlocGMwOWlhbVZqZENoclpYa3BLWHRwWmlocGMwWnliM3BsYmloclpYa3BLWEpsZEhWeWJpQnNaV0ZyVTNSdmNtVW9kR2hwY3lrdVoyVjBLR3RsZVNrN2FXWW9hR0Z6S0d0bGVTeFhSVUZMS1NseVpYUjFjbTRnYTJWNVcxZEZRVXRkVzNSb2FYTmJWVWxFWFYxOWZTeHpaWFE2Wm5WdVkzUnBiMjRvYTJWNUxIWmhiSFZsS1h0eVpYUjFjbTRnWkdWbVYyVmhheWgwYUdsekxHdGxlU3gyWVd4MVpTbDlmU3gzWldGclRXVjBhRzlrY3l4MGNuVmxMSFJ5ZFdVcE8ybG1LR1p5WVcxbGQyOXlheVltS0c1bGR5QlhaV0ZyVFdGd0tTNXpaWFFvVDJKcVpXTjBMbVp5WldWNlpTaDBiWEFwTERjcExtZGxkQ2gwYlhBcElUMDNLWHRtYjNKRllXTm9MbU5oYkd3b1lYSnlZWGtvWENKa1pXeGxkR1VzYUdGekxHZGxkQ3h6WlhSY0lpa3NablZ1WTNScGIyNG9hMlY1S1h0MllYSWdiV1YwYUc5a1BWZGxZV3ROWVhCYlVGSlBWRTlVV1ZCRlhWdHJaWGxkTzFkbFlXdE5ZWEJiVUZKUFZFOVVXVkJGWFZ0clpYbGRQV1oxYm1OMGFXOXVLR0VzWWlsN2FXWW9hWE5QWW1wbFkzUW9ZU2ttSm1selJuSnZlbVZ1S0dFcEtYdDJZWElnY21WemRXeDBQV3hsWVd0VGRHOXlaU2gwYUdsektWdHJaWGxkS0dFc1lpazdjbVYwZFhKdUlHdGxlVDA5WENKelpYUmNJajkwYUdsek9uSmxjM1ZzZEgxeVpYUjFjbTRnYldWMGFHOWtMbU5oYkd3b2RHaHBjeXhoTEdJcGZYMHBmVmRsWVd0VFpYUTlaMlYwUTI5c2JHVmpkR2x2YmloWFpXRnJVMlYwTEZkRlFVdFRSVlFzZTJGa1pEcG1kVzVqZEdsdmJpaDJZV3gxWlNsN2NtVjBkWEp1SUdSbFpsZGxZV3NvZEdocGN5eDJZV3gxWlN4MGNuVmxLWDE5TEhkbFlXdE5aWFJvYjJSekxHWmhiSE5sTEhSeWRXVXBmU2dwT3lGbWRXNWpkR2x2YmlncGUyWjFibU4wYVc5dUlFVnVkVzFsY21GMFpTaHBkR1Z5WVhSbFpDbDdkbUZ5SUd0bGVYTTlXMTBzYTJWNU8yWnZjaWhyWlhrZ2FXNGdhWFJsY21GMFpXUXBhMlY1Y3k1d2RYTm9LR3RsZVNrN2MyVjBLSFJvYVhNc1NWUkZVaXg3YnpwcGRHVnlZWFJsWkN4aE9tdGxlWE1zYVRvd2ZTbDlZM0psWVhSbFNYUmxjbUYwYjNJb1JXNTFiV1Z5WVhSbExFOUNTa1ZEVkN4bWRXNWpkR2x2YmlncGUzWmhjaUJwZEdWeVBYUm9hWE5iU1ZSRlVsMHNhMlY1Y3oxcGRHVnlMbUVzYTJWNU8yUnZlMmxtS0dsMFpYSXVhVDQ5YTJWNWN5NXNaVzVuZEdncGNtVjBkWEp1SUdsMFpYSlNaWE4xYkhRb01TbDlkMmhwYkdVb0lTZ29hMlY1UFd0bGVYTmJhWFJsY2k1cEt5dGRLV2x1SUdsMFpYSXVieWtwTzNKbGRIVnliaUJwZEdWeVVtVnpkV3gwS0RBc2EyVjVLWDBwTzJaMWJtTjBhVzl1SUhkeVlYQW9abTRwZTNKbGRIVnliaUJtZFc1amRHbHZiaWhwZENsN1lYTnpaWEowVDJKcVpXTjBLR2wwS1R0MGNubDdjbVYwZFhKdUlHWnVMbUZ3Y0d4NUtIVnVaR1ZtYVc1bFpDeGhjbWQxYldWdWRITXBMSFJ5ZFdWOVkyRjBZMmdvWlNsN2NtVjBkWEp1SUdaaGJITmxmWDE5Wm5WdVkzUnBiMjRnY21WbWJHVmpkRWRsZENoMFlYSm5aWFFzY0hKdmNHVnlkSGxMWlhrcGUzWmhjaUJ5WldObGFYWmxjajFoY21kMWJXVnVkSE11YkdWdVozUm9QRE0vZEdGeVoyVjBPbUZ5WjNWdFpXNTBjMXN5WFN4a1pYTmpQV2RsZEU5M2JrUmxjMk55YVhCMGIzSW9ZWE56WlhKMFQySnFaV04wS0hSaGNtZGxkQ2tzY0hKdmNHVnlkSGxMWlhrcExIQnliM1J2TzJsbUtHUmxjMk1wY21WMGRYSnVJR2hoY3loa1pYTmpMRndpZG1Gc2RXVmNJaWsvWkdWell5NTJZV3gxWlRwa1pYTmpMbWRsZEQwOVBYVnVaR1ZtYVc1bFpEOTFibVJsWm1sdVpXUTZaR1Z6WXk1blpYUXVZMkZzYkNoeVpXTmxhWFpsY2lrN2NtVjBkWEp1SUdselQySnFaV04wS0hCeWIzUnZQV2RsZEZCeWIzUnZkSGx3WlU5bUtIUmhjbWRsZENrcFAzSmxabXhsWTNSSFpYUW9jSEp2ZEc4c2NISnZjR1Z5ZEhsTFpYa3NjbVZqWldsMlpYSXBPblZ1WkdWbWFXNWxaSDFtZFc1amRHbHZiaUJ5Wldac1pXTjBVMlYwS0hSaGNtZGxkQ3h3Y205d1pYSjBlVXRsZVN4V0tYdDJZWElnY21WalpXbDJaWEk5WVhKbmRXMWxiblJ6TG14bGJtZDBhRHcwUDNSaGNtZGxkRHBoY21kMWJXVnVkSE5iTTEwc2IzZHVSR1Z6WXoxblpYUlBkMjVFWlhOamNtbHdkRzl5S0dGemMyVnlkRTlpYW1WamRDaDBZWEpuWlhRcExIQnliM0JsY25SNVMyVjVLU3hsZUdsemRHbHVaMFJsYzJOeWFYQjBiM0lzY0hKdmRHODdhV1lvSVc5M2JrUmxjMk1wZTJsbUtHbHpUMkpxWldOMEtIQnliM1J2UFdkbGRGQnliM1J2ZEhsd1pVOW1LSFJoY21kbGRDa3BLWHR5WlhSMWNtNGdjbVZtYkdWamRGTmxkQ2h3Y205MGJ5eHdjbTl3WlhKMGVVdGxlU3hXTEhKbFkyVnBkbVZ5S1gxdmQyNUVaWE5qUFdSbGMyTnlhWEIwYjNJb01DbDlhV1lvYUdGektHOTNia1JsYzJNc1hDSjJZV3gxWlZ3aUtTbDdhV1lvYjNkdVJHVnpZeTUzY21sMFlXSnNaVDA5UFdaaGJITmxmSHdoYVhOUFltcGxZM1FvY21WalpXbDJaWElwS1hKbGRIVnliaUJtWVd4elpUdGxlR2x6ZEdsdVowUmxjMk55YVhCMGIzSTlaMlYwVDNkdVJHVnpZM0pwY0hSdmNpaHlaV05sYVhabGNpeHdjbTl3WlhKMGVVdGxlU2w4ZkdSbGMyTnlhWEIwYjNJb01DazdaWGhwYzNScGJtZEVaWE5qY21sd2RHOXlMblpoYkhWbFBWWTdjbVYwZFhKdUlHUmxabWx1WlZCeWIzQmxjblI1S0hKbFkyVnBkbVZ5TEhCeWIzQmxjblI1UzJWNUxHVjRhWE4wYVc1blJHVnpZM0pwY0hSdmNpa3NkSEoxWlgxeVpYUjFjbTRnYjNkdVJHVnpZeTV6WlhROVBUMTFibVJsWm1sdVpXUS9abUZzYzJVNktHOTNia1JsYzJNdWMyVjBMbU5oYkd3b2NtVmpaV2wyWlhJc1Zpa3NkSEoxWlNsOWRtRnlJR2x6UlhoMFpXNXphV0pzWlQxUFltcGxZM1F1YVhORmVIUmxibk5wWW14bGZIeHlaWFIxY201SmREdDJZWElnY21WbWJHVmpkRDE3WVhCd2JIazZZM1I0S0dOaGJHd3NZWEJ3Ykhrc015a3NZMjl1YzNSeWRXTjBPbVoxYm1OMGFXOXVLSFJoY21kbGRDeGhjbWQxYldWdWRITk1hWE4wS1h0MllYSWdjSEp2ZEc4OVlYTnpaWEowUm5WdVkzUnBiMjRvWVhKbmRXMWxiblJ6TG14bGJtZDBhRHd6UDNSaGNtZGxkRHBoY21kMWJXVnVkSE5iTWwwcFcxQlNUMVJQVkZsUVJWMHNhVzV6ZEdGdVkyVTlZM0psWVhSbEtHbHpUMkpxWldOMEtIQnliM1J2S1Q5d2NtOTBienBQWW1wbFkzUlFjbTkwYnlrc2NtVnpkV3gwUFdGd2NHeDVMbU5oYkd3b2RHRnlaMlYwTEdsdWMzUmhibU5sTEdGeVozVnRaVzUwYzB4cGMzUXBPM0psZEhWeWJpQnBjMDlpYW1WamRDaHlaWE4xYkhRcFAzSmxjM1ZzZERwcGJuTjBZVzVqWlgwc1pHVm1hVzVsVUhKdmNHVnlkSGs2ZDNKaGNDaGtaV1pwYm1WUWNtOXdaWEowZVNrc1pHVnNaWFJsVUhKdmNHVnlkSGs2Wm5WdVkzUnBiMjRvZEdGeVoyVjBMSEJ5YjNCbGNuUjVTMlY1S1h0MllYSWdaR1Z6WXoxblpYUlBkMjVFWlhOamNtbHdkRzl5S0dGemMyVnlkRTlpYW1WamRDaDBZWEpuWlhRcExIQnliM0JsY25SNVMyVjVLVHR5WlhSMWNtNGdaR1Z6WXlZbUlXUmxjMk11WTI5dVptbG5kWEpoWW14bFAyWmhiSE5sT21SbGJHVjBaU0IwWVhKblpYUmJjSEp2Y0dWeWRIbExaWGxkZlN4bGJuVnRaWEpoZEdVNlpuVnVZM1JwYjI0b2RHRnlaMlYwS1h0eVpYUjFjbTRnYm1WM0lFVnVkVzFsY21GMFpTaGhjM05sY25SUFltcGxZM1FvZEdGeVoyVjBLU2w5TEdkbGREcHlaV1pzWldOMFIyVjBMR2RsZEU5M2JsQnliM0JsY25SNVJHVnpZM0pwY0hSdmNqcG1kVzVqZEdsdmJpaDBZWEpuWlhRc2NISnZjR1Z5ZEhsTFpYa3BlM0psZEhWeWJpQm5aWFJQZDI1RVpYTmpjbWx3ZEc5eUtHRnpjMlZ5ZEU5aWFtVmpkQ2gwWVhKblpYUXBMSEJ5YjNCbGNuUjVTMlY1S1gwc1oyVjBVSEp2ZEc5MGVYQmxUMlk2Wm5WdVkzUnBiMjRvZEdGeVoyVjBLWHR5WlhSMWNtNGdaMlYwVUhKdmRHOTBlWEJsVDJZb1lYTnpaWEowVDJKcVpXTjBLSFJoY21kbGRDa3BmU3hvWVhNNlpuVnVZM1JwYjI0b2RHRnlaMlYwTEhCeWIzQmxjblI1UzJWNUtYdHlaWFIxY200Z2NISnZjR1Z5ZEhsTFpYa2dhVzRnZEdGeVoyVjBmU3hwYzBWNGRHVnVjMmxpYkdVNlpuVnVZM1JwYjI0b2RHRnlaMlYwS1h0eVpYUjFjbTRoSVdselJYaDBaVzV6YVdKc1pTaGhjM05sY25SUFltcGxZM1FvZEdGeVoyVjBLU2w5TEc5M2JrdGxlWE02YjNkdVMyVjVjeXh3Y21WMlpXNTBSWGgwWlc1emFXOXVjenAzY21Gd0tFOWlhbVZqZEM1d2NtVjJaVzUwUlhoMFpXNXphVzl1YzN4OGNtVjBkWEp1U1hRcExITmxkRHB5Wldac1pXTjBVMlYwZlR0cFppaHpaWFJRY205MGIzUjVjR1ZQWmlseVpXWnNaV04wTG5ObGRGQnliM1J2ZEhsd1pVOW1QV1oxYm1OMGFXOXVLSFJoY21kbGRDeHdjbTkwYnlsN2NtVjBkWEp1SUhObGRGQnliM1J2ZEhsd1pVOW1LR0Z6YzJWeWRFOWlhbVZqZENoMFlYSm5aWFFwTEhCeWIzUnZLU3gwY25WbGZUc2taR1ZtYVc1bEtFZE1UMEpCVEN4N1VtVm1iR1ZqZERwN2ZYMHBPeVJrWldacGJtVW9VMVJCVkVsRExGd2lVbVZtYkdWamRGd2lMSEpsWm14bFkzUXBmU2dwT3lGbWRXNWpkR2x2YmlncGV5UmtaV1pwYm1Vb1VGSlBWRThzUVZKU1FWa3NlMmx1WTJ4MVpHVnpPbU55WldGMFpVRnljbUY1UTI5dWRHRnBibk1vZEhKMVpTbDlLVHNrWkdWbWFXNWxLRkJTVDFSUExGTlVVa2xPUnl4N1lYUTZZM0psWVhSbFVHOXBiblJCZENoMGNuVmxLWDBwTzJaMWJtTjBhVzl1SUdOeVpXRjBaVTlpYW1WamRGUnZRWEp5WVhrb2FYTkZiblJ5YVdWektYdHlaWFIxY200Z1puVnVZM1JwYjI0b2IySnFaV04wS1h0MllYSWdUejEwYjA5aWFtVmpkQ2h2WW1wbFkzUXBMR3RsZVhNOVoyVjBTMlY1Y3lodlltcGxZM1FwTEd4bGJtZDBhRDFyWlhsekxteGxibWQwYUN4cFBUQXNjbVZ6ZFd4MFBVRnljbUY1S0d4bGJtZDBhQ2tzYTJWNU8ybG1LR2x6Ulc1MGNtbGxjeWwzYUdsc1pTaHNaVzVuZEdnK2FTbHlaWE4xYkhSYmFWMDlXMnRsZVQxclpYbHpXMmtySzEwc1QxdHJaWGxkWFR0bGJITmxJSGRvYVd4bEtHeGxibWQwYUQ1cEtYSmxjM1ZzZEZ0cFhUMVBXMnRsZVhOYmFTc3JYVjA3Y21WMGRYSnVJSEpsYzNWc2RIMTlKR1JsWm1sdVpTaFRWRUZVU1VNc1QwSktSVU5VTEh0blpYUlBkMjVRY205d1pYSjBlVVJsYzJOeWFYQjBiM0p6T21aMWJtTjBhVzl1S0c5aWFtVmpkQ2w3ZG1GeUlFODlkRzlQWW1wbFkzUW9iMkpxWldOMEtTeHlaWE4xYkhROWUzMDdabTl5UldGamFDNWpZV3hzS0c5M2JrdGxlWE1vVHlrc1puVnVZM1JwYjI0b2EyVjVLWHRrWldacGJtVlFjbTl3WlhKMGVTaHlaWE4xYkhRc2EyVjVMR1JsYzJOeWFYQjBiM0lvTUN4blpYUlBkMjVFWlhOamNtbHdkRzl5S0U4c2EyVjVLU2twZlNrN2NtVjBkWEp1SUhKbGMzVnNkSDBzZG1Gc2RXVnpPbU55WldGMFpVOWlhbVZqZEZSdlFYSnlZWGtvWm1Gc2MyVXBMR1Z1ZEhKcFpYTTZZM0psWVhSbFQySnFaV04wVkc5QmNuSmhlU2gwY25WbEtYMHBPeVJrWldacGJtVW9VMVJCVkVsRExGSkZSMFZZVUN4N1pYTmpZWEJsT21OeVpXRjBaVkpsY0d4aFkyVnlLQzhvVzF4Y1hGeGNYQzFiWEZ4ZGUzMG9LU29yUHk0c1hpUjhYU2t2Wnl4Y0lseGNYRndrTVZ3aUxIUnlkV1VwZlNsOUtDazdJV1oxYm1OMGFXOXVLRkpGUmtWU1JVNURSU2w3VWtWR1JWSkZUa05GWDBkRlZEMW5aWFJYWld4c1MyNXZkMjVUZVcxaWIyd29Va1ZHUlZKRlRrTkZLMXdpUjJWMFhDSXNkSEoxWlNrN2RtRnlJRkpGUmtWU1JVNURSVjlUUlZROVoyVjBWMlZzYkV0dWIzZHVVM2x0WW05c0tGSkZSa1ZTUlU1RFJTdFRSVlFzZEhKMVpTa3NVa1ZHUlZKRlRrTkZYMFJGVEVWVVJUMW5aWFJYWld4c1MyNXZkMjVUZVcxaWIyd29Va1ZHUlZKRlRrTkZLMXdpUkdWc1pYUmxYQ0lzZEhKMVpTazdKR1JsWm1sdVpTaFRWRUZVU1VNc1UxbE5RazlNTEh0eVpXWmxjbVZ1WTJWSFpYUTZVa1ZHUlZKRlRrTkZYMGRGVkN4eVpXWmxjbVZ1WTJWVFpYUTZVa1ZHUlZKRlRrTkZYMU5GVkN4eVpXWmxjbVZ1WTJWRVpXeGxkR1U2VWtWR1JWSkZUa05GWDBSRlRFVlVSWDBwTzJocFpHUmxiaWhHZFc1amRHbHZibEJ5YjNSdkxGSkZSa1ZTUlU1RFJWOUhSVlFzY21WMGRYSnVWR2hwY3lrN1puVnVZM1JwYjI0Z2MyVjBUV0Z3VFdWMGFHOWtjeWhEYjI1emRISjFZM1J2Y2lsN2FXWW9RMjl1YzNSeWRXTjBiM0lwZTNaaGNpQk5ZWEJRY205MGJ6MURiMjV6ZEhKMVkzUnZjbHRRVWs5VVQxUlpVRVZkTzJocFpHUmxiaWhOWVhCUWNtOTBieXhTUlVaRlVrVk9RMFZmUjBWVUxFMWhjRkJ5YjNSdkxtZGxkQ2s3YUdsa1pHVnVLRTFoY0ZCeWIzUnZMRkpGUmtWU1JVNURSVjlUUlZRc1RXRndVSEp2ZEc4dWMyVjBLVHRvYVdSa1pXNG9UV0Z3VUhKdmRHOHNVa1ZHUlZKRlRrTkZYMFJGVEVWVVJTeE5ZWEJRY205MGIxdGNJbVJsYkdWMFpWd2lYU2w5ZlhObGRFMWhjRTFsZEdodlpITW9UV0Z3S1R0elpYUk5ZWEJOWlhSb2IyUnpLRmRsWVd0TllYQXBmU2hjSW5KbFptVnlaVzVqWlZ3aUtUc2hablZ1WTNScGIyNG9ZWEp5WVhsVGRHRjBhV056S1h0bWRXNWpkR2x2YmlCelpYUkJjbkpoZVZOMFlYUnBZM01vYTJWNWN5eHNaVzVuZEdncGUyWnZja1ZoWTJndVkyRnNiQ2hoY25KaGVTaHJaWGx6S1N4bWRXNWpkR2x2YmloclpYa3BlMmxtS0d0bGVTQnBiaUJCY25KaGVWQnliM1J2S1dGeWNtRjVVM1JoZEdsamMxdHJaWGxkUFdOMGVDaGpZV3hzTEVGeWNtRjVVSEp2ZEc5YmEyVjVYU3hzWlc1bmRHZ3BmU2w5YzJWMFFYSnlZWGxUZEdGMGFXTnpLRndpY0c5d0xISmxkbVZ5YzJVc2MyaHBablFzYTJWNWN5eDJZV3gxWlhNc1pXNTBjbWxsYzF3aUxERXBPM05sZEVGeWNtRjVVM1JoZEdsamN5aGNJbWx1WkdWNFQyWXNaWFpsY25rc2MyOXRaU3htYjNKRllXTm9MRzFoY0N4bWFXeDBaWElzWm1sdVpDeG1hVzVrU1c1a1pYZ3NhVzVqYkhWa1pYTmNJaXd6S1R0elpYUkJjbkpoZVZOMFlYUnBZM01vWENKcWIybHVMSE5zYVdObExHTnZibU5oZEN4d2RYTm9MSE53YkdsalpTeDFibk5vYVdaMExITnZjblFzYkdGemRFbHVaR1Y0VDJZc1hDSXJYQ0p5WldSMVkyVXNjbVZrZFdObFVtbG5hSFFzWTI5d2VWZHBkR2hwYml4bWFXeHNMSFIxY201Y0lpazdKR1JsWm1sdVpTaFRWRUZVU1VNc1FWSlNRVmtzWVhKeVlYbFRkR0YwYVdOektYMG9lMzBwT3lGbWRXNWpkR2x2YmloT2IyUmxUR2x6ZENsN2FXWW9abkpoYldWM2IzSnJKaVpPYjJSbFRHbHpkQ1ltSVNoVFdVMUNUMHhmU1ZSRlVrRlVUMUlnYVc0Z1RtOWtaVXhwYzNSYlVGSlBWRTlVV1ZCRlhTa3BlMmhwWkdSbGJpaE9iMlJsVEdsemRGdFFVazlVVDFSWlVFVmRMRk5aVFVKUFRGOUpWRVZTUVZSUFVpeEpkR1Z5WVhSdmNuTmJRVkpTUVZsZEtYMUpkR1Z5WVhSdmNuTXVUbTlrWlV4cGMzUTlTWFJsY21GMGIzSnpXMEZTVWtGWlhYMG9aMnh2WW1Gc0xrNXZaR1ZNYVhOMEtYMG9kSGx3Wlc5bUlITmxiR1loUFZ3aWRXNWtaV1pwYm1Wa1hDSW1Kbk5sYkdZdVRXRjBhRDA5UFUxaGRHZy9jMlZzWmpwR2RXNWpkR2x2YmloY0luSmxkSFZ5YmlCMGFHbHpYQ0lwS0Nrc2RISjFaU2w5TEh0OVhTd3pPbHRtZFc1amRHbHZiaWh5WlhGMWFYSmxMRzF2WkhWc1pTeGxlSEJ2Y25SektYc29ablZ1WTNScGIyNG9aMnh2WW1Gc0tYc2hablZ1WTNScGIyNG9aMnh2WW1Gc0tYdGNJblZ6WlNCemRISnBZM1JjSWp0MllYSWdhR0Z6VDNkdVBVOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGs3ZG1GeUlIVnVaR1ZtYVc1bFpEdDJZWElnYVhSbGNtRjBiM0pUZVcxaWIydzlkSGx3Wlc5bUlGTjViV0p2YkQwOVBWd2lablZ1WTNScGIyNWNJaVltVTNsdFltOXNMbWwwWlhKaGRHOXlmSHhjSWtCQWFYUmxjbUYwYjNKY0lqdDJZWElnYVc1TmIyUjFiR1U5ZEhsd1pXOW1JRzF2WkhWc1pUMDlQVndpYjJKcVpXTjBYQ0k3ZG1GeUlISjFiblJwYldVOVoyeHZZbUZzTG5KbFoyVnVaWEpoZEc5eVVuVnVkR2x0WlR0cFppaHlkVzUwYVcxbEtYdHBaaWhwYmsxdlpIVnNaU2w3Ylc5a2RXeGxMbVY0Y0c5eWRITTljblZ1ZEdsdFpYMXlaWFIxY201OWNuVnVkR2x0WlQxbmJHOWlZV3d1Y21WblpXNWxjbUYwYjNKU2RXNTBhVzFsUFdsdVRXOWtkV3hsUDIxdlpIVnNaUzVsZUhCdmNuUnpPbnQ5TzJaMWJtTjBhVzl1SUhkeVlYQW9hVzV1WlhKR2JpeHZkWFJsY2tadUxITmxiR1lzZEhKNVRHOWpjMHhwYzNRcGUzSmxkSFZ5YmlCdVpYY2dSMlZ1WlhKaGRHOXlLR2x1Ym1WeVJtNHNiM1YwWlhKR2JpeHpaV3htZkh4dWRXeHNMSFJ5ZVV4dlkzTk1hWE4wZkh4YlhTbDljblZ1ZEdsdFpTNTNjbUZ3UFhkeVlYQTdablZ1WTNScGIyNGdkSEo1UTJGMFkyZ29abTRzYjJKcUxHRnlaeWw3ZEhKNWUzSmxkSFZ5Ym50MGVYQmxPbHdpYm05eWJXRnNYQ0lzWVhKbk9tWnVMbU5oYkd3b2IySnFMR0Z5WnlsOWZXTmhkR05vS0dWeWNpbDdjbVYwZFhKdWUzUjVjR1U2WENKMGFISnZkMXdpTEdGeVp6cGxjbko5ZlgxMllYSWdSMlZ1VTNSaGRHVlRkWE53Wlc1a1pXUlRkR0Z5ZEQxY0luTjFjM0JsYm1SbFpGTjBZWEowWENJN2RtRnlJRWRsYmxOMFlYUmxVM1Z6Y0dWdVpHVmtXV2xsYkdROVhDSnpkWE53Wlc1a1pXUlphV1ZzWkZ3aU8zWmhjaUJIWlc1VGRHRjBaVVY0WldOMWRHbHVaejFjSW1WNFpXTjFkR2x1WjF3aU8zWmhjaUJIWlc1VGRHRjBaVU52YlhCc1pYUmxaRDFjSW1OdmJYQnNaWFJsWkZ3aU8zWmhjaUJEYjI1MGFXNTFaVk5sYm5ScGJtVnNQWHQ5TzJaMWJtTjBhVzl1SUVkbGJtVnlZWFJ2Y2taMWJtTjBhVzl1S0NsN2ZXWjFibU4wYVc5dUlFZGxibVZ5WVhSdmNrWjFibU4wYVc5dVVISnZkRzkwZVhCbEtDbDdmWFpoY2lCSGNEMUhaVzVsY21GMGIzSkdkVzVqZEdsdmJsQnliM1J2ZEhsd1pTNXdjbTkwYjNSNWNHVTlSMlZ1WlhKaGRHOXlMbkJ5YjNSdmRIbHdaVHRIWlc1bGNtRjBiM0pHZFc1amRHbHZiaTV3Y205MGIzUjVjR1U5UjNBdVkyOXVjM1J5ZFdOMGIzSTlSMlZ1WlhKaGRHOXlSblZ1WTNScGIyNVFjbTkwYjNSNWNHVTdSMlZ1WlhKaGRHOXlSblZ1WTNScGIyNVFjbTkwYjNSNWNHVXVZMjl1YzNSeWRXTjBiM0k5UjJWdVpYSmhkRzl5Um5WdVkzUnBiMjQ3UjJWdVpYSmhkRzl5Um5WdVkzUnBiMjR1WkdsemNHeGhlVTVoYldVOVhDSkhaVzVsY21GMGIzSkdkVzVqZEdsdmJsd2lPM0oxYm5ScGJXVXVhWE5IWlc1bGNtRjBiM0pHZFc1amRHbHZiajFtZFc1amRHbHZiaWhuWlc1R2RXNHBlM1poY2lCamRHOXlQWFI1Y0dWdlppQm5aVzVHZFc0OVBUMWNJbVoxYm1OMGFXOXVYQ0ltSm1kbGJrWjFiaTVqYjI1emRISjFZM1J2Y2p0eVpYUjFjbTRnWTNSdmNqOWpkRzl5UFQwOVIyVnVaWEpoZEc5eVJuVnVZM1JwYjI1OGZDaGpkRzl5TG1ScGMzQnNZWGxPWVcxbGZIeGpkRzl5TG01aGJXVXBQVDA5WENKSFpXNWxjbUYwYjNKR2RXNWpkR2x2Ymx3aU9tWmhiSE5sZlR0eWRXNTBhVzFsTG0xaGNtczlablZ1WTNScGIyNG9aMlZ1Um5WdUtYdG5aVzVHZFc0dVgxOXdjbTkwYjE5ZlBVZGxibVZ5WVhSdmNrWjFibU4wYVc5dVVISnZkRzkwZVhCbE8yZGxia1oxYmk1d2NtOTBiM1I1Y0dVOVQySnFaV04wTG1OeVpXRjBaU2hIY0NrN2NtVjBkWEp1SUdkbGJrWjFibjA3Y25WdWRHbHRaUzVoYzNsdVl6MW1kVzVqZEdsdmJpaHBibTVsY2tadUxHOTFkR1Z5Um00c2MyVnNaaXgwY25sTWIyTnpUR2x6ZENsN2NtVjBkWEp1SUc1bGR5QlFjbTl0YVhObEtHWjFibU4wYVc5dUtISmxjMjlzZG1Vc2NtVnFaV04wS1h0MllYSWdaMlZ1WlhKaGRHOXlQWGR5WVhBb2FXNXVaWEpHYml4dmRYUmxja1p1TEhObGJHWXNkSEo1VEc5amMweHBjM1FwTzNaaGNpQmpZV3hzVG1WNGREMXpkR1Z3TG1KcGJtUW9aMlZ1WlhKaGRHOXlMbTVsZUhRcE8zWmhjaUJqWVd4c1ZHaHliM2M5YzNSbGNDNWlhVzVrS0dkbGJtVnlZWFJ2Y2x0Y0luUm9jbTkzWENKZEtUdG1kVzVqZEdsdmJpQnpkR1Z3S0dGeVp5bDdkbUZ5SUhKbFkyOXlaRDEwY25sRFlYUmphQ2gwYUdsekxHNTFiR3dzWVhKbktUdHBaaWh5WldOdmNtUXVkSGx3WlQwOVBWd2lkR2h5YjNkY0lpbDdjbVZxWldOMEtISmxZMjl5WkM1aGNtY3BPM0psZEhWeWJuMTJZWElnYVc1bWJ6MXlaV052Y21RdVlYSm5PMmxtS0dsdVptOHVaRzl1WlNsN2NtVnpiMngyWlNocGJtWnZMblpoYkhWbEtYMWxiSE5sZTFCeWIyMXBjMlV1Y21WemIyeDJaU2hwYm1adkxuWmhiSFZsS1M1MGFHVnVLR05oYkd4T1pYaDBMR05oYkd4VWFISnZkeWw5ZldOaGJHeE9aWGgwS0NsOUtYMDdablZ1WTNScGIyNGdSMlZ1WlhKaGRHOXlLR2x1Ym1WeVJtNHNiM1YwWlhKR2JpeHpaV3htTEhSeWVVeHZZM05NYVhOMEtYdDJZWElnWjJWdVpYSmhkRzl5UFc5MWRHVnlSbTQvVDJKcVpXTjBMbU55WldGMFpTaHZkWFJsY2tadUxuQnliM1J2ZEhsd1pTazZkR2hwY3p0MllYSWdZMjl1ZEdWNGREMXVaWGNnUTI5dWRHVjRkQ2gwY25sTWIyTnpUR2x6ZENrN2RtRnlJSE4wWVhSbFBVZGxibE4wWVhSbFUzVnpjR1Z1WkdWa1UzUmhjblE3Wm5WdVkzUnBiMjRnYVc1MmIydGxLRzFsZEdodlpDeGhjbWNwZTJsbUtITjBZWFJsUFQwOVIyVnVVM1JoZEdWRmVHVmpkWFJwYm1jcGUzUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0lrZGxibVZ5WVhSdmNpQnBjeUJoYkhKbFlXUjVJSEoxYm01cGJtZGNJaWw5YVdZb2MzUmhkR1U5UFQxSFpXNVRkR0YwWlVOdmJYQnNaWFJsWkNsN2NtVjBkWEp1SUdSdmJtVlNaWE4xYkhRb0tYMTNhR2xzWlNoMGNuVmxLWHQyWVhJZ1pHVnNaV2RoZEdVOVkyOXVkR1Y0ZEM1a1pXeGxaMkYwWlR0cFppaGtaV3hsWjJGMFpTbDdkbUZ5SUhKbFkyOXlaRDEwY25sRFlYUmphQ2hrWld4bFoyRjBaUzVwZEdWeVlYUnZjbHR0WlhSb2IyUmRMR1JsYkdWbllYUmxMbWwwWlhKaGRHOXlMR0Z5WnlrN2FXWW9jbVZqYjNKa0xuUjVjR1U5UFQxY0luUm9jbTkzWENJcGUyTnZiblJsZUhRdVpHVnNaV2RoZEdVOWJuVnNiRHR0WlhSb2IyUTlYQ0owYUhKdmQxd2lPMkZ5WnoxeVpXTnZjbVF1WVhKbk8yTnZiblJwYm5WbGZXMWxkR2h2WkQxY0ltNWxlSFJjSWp0aGNtYzlkVzVrWldacGJtVmtPM1poY2lCcGJtWnZQWEpsWTI5eVpDNWhjbWM3YVdZb2FXNW1ieTVrYjI1bEtYdGpiMjUwWlhoMFcyUmxiR1ZuWVhSbExuSmxjM1ZzZEU1aGJXVmRQV2x1Wm04dWRtRnNkV1U3WTI5dWRHVjRkQzV1WlhoMFBXUmxiR1ZuWVhSbExtNWxlSFJNYjJOOVpXeHpaWHR6ZEdGMFpUMUhaVzVUZEdGMFpWTjFjM0JsYm1SbFpGbHBaV3hrTzNKbGRIVnliaUJwYm1admZXTnZiblJsZUhRdVpHVnNaV2RoZEdVOWJuVnNiSDFwWmlodFpYUm9iMlE5UFQxY0ltNWxlSFJjSWlsN2FXWW9jM1JoZEdVOVBUMUhaVzVUZEdGMFpWTjFjM0JsYm1SbFpGTjBZWEowSmlaMGVYQmxiMllnWVhKbklUMDlYQ0oxYm1SbFptbHVaV1JjSWlsN2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNJbUYwZEdWdGNIUWdkRzhnYzJWdVpDQmNJaXRLVTA5T0xuTjBjbWx1WjJsbWVTaGhjbWNwSzF3aUlIUnZJRzVsZDJKdmNtNGdaMlZ1WlhKaGRHOXlYQ0lwZldsbUtITjBZWFJsUFQwOVIyVnVVM1JoZEdWVGRYTndaVzVrWldSWmFXVnNaQ2w3WTI5dWRHVjRkQzV6Wlc1MFBXRnlaMzFsYkhObGUyUmxiR1YwWlNCamIyNTBaWGgwTG5ObGJuUjlmV1ZzYzJVZ2FXWW9iV1YwYUc5a1BUMDlYQ0owYUhKdmQxd2lLWHRwWmloemRHRjBaVDA5UFVkbGJsTjBZWFJsVTNWemNHVnVaR1ZrVTNSaGNuUXBlM04wWVhSbFBVZGxibE4wWVhSbFEyOXRjR3hsZEdWa08zUm9jbTkzSUdGeVozMXBaaWhqYjI1MFpYaDBMbVJwYzNCaGRHTm9SWGhqWlhCMGFXOXVLR0Z5WnlrcGUyMWxkR2h2WkQxY0ltNWxlSFJjSWp0aGNtYzlkVzVrWldacGJtVmtmWDFsYkhObElHbG1LRzFsZEdodlpEMDlQVndpY21WMGRYSnVYQ0lwZTJOdmJuUmxlSFF1WVdKeWRYQjBLRndpY21WMGRYSnVYQ0lzWVhKbktYMXpkR0YwWlQxSFpXNVRkR0YwWlVWNFpXTjFkR2x1Wnp0MllYSWdjbVZqYjNKa1BYUnllVU5oZEdOb0tHbHVibVZ5Um00c2MyVnNaaXhqYjI1MFpYaDBLVHRwWmloeVpXTnZjbVF1ZEhsd1pUMDlQVndpYm05eWJXRnNYQ0lwZTNOMFlYUmxQV052Ym5SbGVIUXVaRzl1WlQ5SFpXNVRkR0YwWlVOdmJYQnNaWFJsWkRwSFpXNVRkR0YwWlZOMWMzQmxibVJsWkZscFpXeGtPM1poY2lCcGJtWnZQWHQyWVd4MVpUcHlaV052Y21RdVlYSm5MR1J2Ym1VNlkyOXVkR1Y0ZEM1a2IyNWxmVHRwWmloeVpXTnZjbVF1WVhKblBUMDlRMjl1ZEdsdWRXVlRaVzUwYVc1bGJDbDdhV1lvWTI5dWRHVjRkQzVrWld4bFoyRjBaU1ltYldWMGFHOWtQVDA5WENKdVpYaDBYQ0lwZTJGeVp6MTFibVJsWm1sdVpXUjlmV1ZzYzJWN2NtVjBkWEp1SUdsdVptOTlmV1ZzYzJVZ2FXWW9jbVZqYjNKa0xuUjVjR1U5UFQxY0luUm9jbTkzWENJcGUzTjBZWFJsUFVkbGJsTjBZWFJsUTI5dGNHeGxkR1ZrTzJsbUtHMWxkR2h2WkQwOVBWd2libVY0ZEZ3aUtYdGpiMjUwWlhoMExtUnBjM0JoZEdOb1JYaGpaWEIwYVc5dUtISmxZMjl5WkM1aGNtY3BmV1ZzYzJWN1lYSm5QWEpsWTI5eVpDNWhjbWQ5ZlgxOVoyVnVaWEpoZEc5eUxtNWxlSFE5YVc1MmIydGxMbUpwYm1Rb1oyVnVaWEpoZEc5eUxGd2libVY0ZEZ3aUtUdG5aVzVsY21GMGIzSmJYQ0owYUhKdmQxd2lYVDFwYm5admEyVXVZbWx1WkNoblpXNWxjbUYwYjNJc1hDSjBhSEp2ZDF3aUtUdG5aVzVsY21GMGIzSmJYQ0p5WlhSMWNtNWNJbDA5YVc1MmIydGxMbUpwYm1Rb1oyVnVaWEpoZEc5eUxGd2ljbVYwZFhKdVhDSXBPM0psZEhWeWJpQm5aVzVsY21GMGIzSjlSM0JiYVhSbGNtRjBiM0pUZVcxaWIyeGRQV1oxYm1OMGFXOXVLQ2w3Y21WMGRYSnVJSFJvYVhOOU8wZHdMblJ2VTNSeWFXNW5QV1oxYm1OMGFXOXVLQ2w3Y21WMGRYSnVYQ0piYjJKcVpXTjBJRWRsYm1WeVlYUnZjbDFjSW4wN1puVnVZM1JwYjI0Z2NIVnphRlJ5ZVVWdWRISjVLR3h2WTNNcGUzWmhjaUJsYm5SeWVUMTdkSEo1VEc5ak9teHZZM05iTUYxOU8ybG1LREVnYVc0Z2JHOWpjeWw3Wlc1MGNua3VZMkYwWTJoTWIyTTliRzlqYzFzeFhYMXBaaWd5SUdsdUlHeHZZM01wZTJWdWRISjVMbVpwYm1Gc2JIbE1iMk05Ykc5amMxc3lYVHRsYm5SeWVTNWhablJsY2t4dll6MXNiMk56V3pOZGZYUm9hWE11ZEhKNVJXNTBjbWxsY3k1d2RYTm9LR1Z1ZEhKNUtYMW1kVzVqZEdsdmJpQnlaWE5sZEZSeWVVVnVkSEo1S0dWdWRISjVLWHQyWVhJZ2NtVmpiM0prUFdWdWRISjVMbU52YlhCc1pYUnBiMjU4Zkh0OU8zSmxZMjl5WkM1MGVYQmxQVndpYm05eWJXRnNYQ0k3WkdWc1pYUmxJSEpsWTI5eVpDNWhjbWM3Wlc1MGNua3VZMjl0Y0d4bGRHbHZiajF5WldOdmNtUjlablZ1WTNScGIyNGdRMjl1ZEdWNGRDaDBjbmxNYjJOelRHbHpkQ2w3ZEdocGN5NTBjbmxGYm5SeWFXVnpQVnQ3ZEhKNVRHOWpPbHdpY205dmRGd2lmVjA3ZEhKNVRHOWpjMHhwYzNRdVptOXlSV0ZqYUNod2RYTm9WSEo1Ulc1MGNua3NkR2hwY3lrN2RHaHBjeTV5WlhObGRDZ3BmWEoxYm5ScGJXVXVhMlY1Y3oxbWRXNWpkR2x2YmlodlltcGxZM1FwZTNaaGNpQnJaWGx6UFZ0ZE8yWnZjaWgyWVhJZ2EyVjVJR2x1SUc5aWFtVmpkQ2w3YTJWNWN5NXdkWE5vS0d0bGVTbDlhMlY1Y3k1eVpYWmxjbk5sS0NrN2NtVjBkWEp1SUdaMWJtTjBhVzl1SUc1bGVIUW9LWHQzYUdsc1pTaHJaWGx6TG14bGJtZDBhQ2w3ZG1GeUlHdGxlVDFyWlhsekxuQnZjQ2dwTzJsbUtHdGxlU0JwYmlCdlltcGxZM1FwZTI1bGVIUXVkbUZzZFdVOWEyVjVPMjVsZUhRdVpHOXVaVDFtWVd4elpUdHlaWFIxY200Z2JtVjRkSDE5Ym1WNGRDNWtiMjVsUFhSeWRXVTdjbVYwZFhKdUlHNWxlSFI5ZlR0bWRXNWpkR2x2YmlCMllXeDFaWE1vYVhSbGNtRmliR1VwZTJsbUtHbDBaWEpoWW14bEtYdDJZWElnYVhSbGNtRjBiM0pOWlhSb2IyUTlhWFJsY21GaWJHVmJhWFJsY21GMGIzSlRlVzFpYjJ4ZE8ybG1LR2wwWlhKaGRHOXlUV1YwYUc5a0tYdHlaWFIxY200Z2FYUmxjbUYwYjNKTlpYUm9iMlF1WTJGc2JDaHBkR1Z5WVdKc1pTbDlhV1lvZEhsd1pXOW1JR2wwWlhKaFlteGxMbTVsZUhROVBUMWNJbVoxYm1OMGFXOXVYQ0lwZTNKbGRIVnliaUJwZEdWeVlXSnNaWDFwWmlnaGFYTk9ZVTRvYVhSbGNtRmliR1V1YkdWdVozUm9LU2w3ZG1GeUlHazlMVEVzYm1WNGREMW1kVzVqZEdsdmJpQnVaWGgwS0NsN2QyaHBiR1VvS3l0cFBHbDBaWEpoWW14bExteGxibWQwYUNsN2FXWW9hR0Z6VDNkdUxtTmhiR3dvYVhSbGNtRmliR1VzYVNrcGUyNWxlSFF1ZG1Gc2RXVTlhWFJsY21GaWJHVmJhVjA3Ym1WNGRDNWtiMjVsUFdaaGJITmxPM0psZEhWeWJpQnVaWGgwZlgxdVpYaDBMblpoYkhWbFBYVnVaR1ZtYVc1bFpEdHVaWGgwTG1SdmJtVTlkSEoxWlR0eVpYUjFjbTRnYm1WNGRIMDdjbVYwZFhKdUlHNWxlSFF1Ym1WNGREMXVaWGgwZlgxeVpYUjFjbTU3Ym1WNGREcGtiMjVsVW1WemRXeDBmWDF5ZFc1MGFXMWxMblpoYkhWbGN6MTJZV3gxWlhNN1puVnVZM1JwYjI0Z1pHOXVaVkpsYzNWc2RDZ3BlM0psZEhWeWJudDJZV3gxWlRwMWJtUmxabWx1WldRc1pHOXVaVHAwY25WbGZYMURiMjUwWlhoMExuQnliM1J2ZEhsd1pUMTdZMjl1YzNSeWRXTjBiM0k2UTI5dWRHVjRkQ3h5WlhObGREcG1kVzVqZEdsdmJpZ3BlM1JvYVhNdWNISmxkajB3TzNSb2FYTXVibVY0ZEQwd08zUm9hWE11YzJWdWREMTFibVJsWm1sdVpXUTdkR2hwY3k1a2IyNWxQV1poYkhObE8zUm9hWE11WkdWc1pXZGhkR1U5Ym5Wc2JEdDBhR2x6TG5SeWVVVnVkSEpwWlhNdVptOXlSV0ZqYUNoeVpYTmxkRlJ5ZVVWdWRISjVLVHRtYjNJb2RtRnlJSFJsYlhCSmJtUmxlRDB3TEhSbGJYQk9ZVzFsTzJoaGMwOTNiaTVqWVd4c0tIUm9hWE1zZEdWdGNFNWhiV1U5WENKMFhDSXJkR1Z0Y0VsdVpHVjRLWHg4ZEdWdGNFbHVaR1Y0UERJd095c3JkR1Z0Y0VsdVpHVjRLWHQwYUdselczUmxiWEJPWVcxbFhUMXVkV3hzZlgwc2MzUnZjRHBtZFc1amRHbHZiaWdwZTNSb2FYTXVaRzl1WlQxMGNuVmxPM1poY2lCeWIyOTBSVzUwY25rOWRHaHBjeTUwY25sRmJuUnlhV1Z6V3pCZE8zWmhjaUJ5YjI5MFVtVmpiM0prUFhKdmIzUkZiblJ5ZVM1amIyMXdiR1YwYVc5dU8ybG1LSEp2YjNSU1pXTnZjbVF1ZEhsd1pUMDlQVndpZEdoeWIzZGNJaWw3ZEdoeWIzY2djbTl2ZEZKbFkyOXlaQzVoY21kOWNtVjBkWEp1SUhSb2FYTXVjblpoYkgwc1pHbHpjR0YwWTJoRmVHTmxjSFJwYjI0NlpuVnVZM1JwYjI0b1pYaGpaWEIwYVc5dUtYdHBaaWgwYUdsekxtUnZibVVwZTNSb2NtOTNJR1Y0WTJWd2RHbHZibjEyWVhJZ1kyOXVkR1Y0ZEQxMGFHbHpPMloxYm1OMGFXOXVJR2hoYm1Sc1pTaHNiMk1zWTJGMVoyaDBLWHR5WldOdmNtUXVkSGx3WlQxY0luUm9jbTkzWENJN2NtVmpiM0prTG1GeVp6MWxlR05sY0hScGIyNDdZMjl1ZEdWNGRDNXVaWGgwUFd4dll6dHlaWFIxY200aElXTmhkV2RvZEgxbWIzSW9kbUZ5SUdrOWRHaHBjeTUwY25sRmJuUnlhV1Z6TG14bGJtZDBhQzB4TzJrK1BUQTdMUzFwS1h0MllYSWdaVzUwY25rOWRHaHBjeTUwY25sRmJuUnlhV1Z6VzJsZE8zWmhjaUJ5WldOdmNtUTlaVzUwY25rdVkyOXRjR3hsZEdsdmJqdHBaaWhsYm5SeWVTNTBjbmxNYjJNOVBUMWNJbkp2YjNSY0lpbDdjbVYwZFhKdUlHaGhibVJzWlNoY0ltVnVaRndpS1gxcFppaGxiblJ5ZVM1MGNubE1iMk04UFhSb2FYTXVjSEpsZGlsN2RtRnlJR2hoYzBOaGRHTm9QV2hoYzA5M2JpNWpZV3hzS0dWdWRISjVMRndpWTJGMFkyaE1iMk5jSWlrN2RtRnlJR2hoYzBacGJtRnNiSGs5YUdGelQzZHVMbU5oYkd3b1pXNTBjbmtzWENKbWFXNWhiR3g1VEc5alhDSXBPMmxtS0doaGMwTmhkR05vSmlab1lYTkdhVzVoYkd4NUtYdHBaaWgwYUdsekxuQnlaWFk4Wlc1MGNua3VZMkYwWTJoTWIyTXBlM0psZEhWeWJpQm9ZVzVrYkdVb1pXNTBjbmt1WTJGMFkyaE1iMk1zZEhKMVpTbDlaV3h6WlNCcFppaDBhR2x6TG5CeVpYWThaVzUwY25rdVptbHVZV3hzZVV4dll5bDdjbVYwZFhKdUlHaGhibVJzWlNobGJuUnllUzVtYVc1aGJHeDVURzlqS1gxOVpXeHpaU0JwWmlob1lYTkRZWFJqYUNsN2FXWW9kR2hwY3k1d2NtVjJQR1Z1ZEhKNUxtTmhkR05vVEc5aktYdHlaWFIxY200Z2FHRnVaR3hsS0dWdWRISjVMbU5oZEdOb1RHOWpMSFJ5ZFdVcGZYMWxiSE5sSUdsbUtHaGhjMFpwYm1Gc2JIa3BlMmxtS0hSb2FYTXVjSEpsZGp4bGJuUnllUzVtYVc1aGJHeDVURzlqS1h0eVpYUjFjbTRnYUdGdVpHeGxLR1Z1ZEhKNUxtWnBibUZzYkhsTWIyTXBmWDFsYkhObGUzUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0luUnllU0J6ZEdGMFpXMWxiblFnZDJsMGFHOTFkQ0JqWVhSamFDQnZjaUJtYVc1aGJHeDVYQ0lwZlgxOWZTeGhZbkoxY0hRNlpuVnVZM1JwYjI0b2RIbHdaU3hoY21jcGUyWnZjaWgyWVhJZ2FUMTBhR2x6TG5SeWVVVnVkSEpwWlhNdWJHVnVaM1JvTFRFN2FUNDlNRHN0TFdrcGUzWmhjaUJsYm5SeWVUMTBhR2x6TG5SeWVVVnVkSEpwWlhOYmFWMDdhV1lvWlc1MGNua3VkSEo1VEc5alBEMTBhR2x6TG5CeVpYWW1KbWhoYzA5M2JpNWpZV3hzS0dWdWRISjVMRndpWm1sdVlXeHNlVXh2WTF3aUtTWW1kR2hwY3k1d2NtVjJQR1Z1ZEhKNUxtWnBibUZzYkhsTWIyTXBlM1poY2lCbWFXNWhiR3g1Ulc1MGNuazlaVzUwY25rN1luSmxZV3Q5ZldsbUtHWnBibUZzYkhsRmJuUnllU1ltS0hSNWNHVTlQVDFjSW1KeVpXRnJYQ0o4ZkhSNWNHVTlQVDFjSW1OdmJuUnBiblZsWENJcEppWm1hVzVoYkd4NVJXNTBjbmt1ZEhKNVRHOWpQRDFoY21jbUptRnlaenhtYVc1aGJHeDVSVzUwY25rdVptbHVZV3hzZVV4dll5bDdabWx1WVd4c2VVVnVkSEo1UFc1MWJHeDlkbUZ5SUhKbFkyOXlaRDFtYVc1aGJHeDVSVzUwY25rL1ptbHVZV3hzZVVWdWRISjVMbU52YlhCc1pYUnBiMjQ2ZTMwN2NtVmpiM0prTG5SNWNHVTlkSGx3WlR0eVpXTnZjbVF1WVhKblBXRnlaenRwWmlobWFXNWhiR3g1Ulc1MGNua3BlM1JvYVhNdWJtVjRkRDFtYVc1aGJHeDVSVzUwY25rdVptbHVZV3hzZVV4dlkzMWxiSE5sZTNSb2FYTXVZMjl0Y0d4bGRHVW9jbVZqYjNKa0tYMXlaWFIxY200Z1EyOXVkR2x1ZFdWVFpXNTBhVzVsYkgwc1kyOXRjR3hsZEdVNlpuVnVZM1JwYjI0b2NtVmpiM0prTEdGbWRHVnlURzlqS1h0cFppaHlaV052Y21RdWRIbHdaVDA5UFZ3aWRHaHliM2RjSWlsN2RHaHliM2NnY21WamIzSmtMbUZ5WjMxcFppaHlaV052Y21RdWRIbHdaVDA5UFZ3aVluSmxZV3RjSW54OGNtVmpiM0prTG5SNWNHVTlQVDFjSW1OdmJuUnBiblZsWENJcGUzUm9hWE11Ym1WNGREMXlaV052Y21RdVlYSm5mV1ZzYzJVZ2FXWW9jbVZqYjNKa0xuUjVjR1U5UFQxY0luSmxkSFZ5Ymx3aUtYdDBhR2x6TG5KMllXdzljbVZqYjNKa0xtRnlaenQwYUdsekxtNWxlSFE5WENKbGJtUmNJbjFsYkhObElHbG1LSEpsWTI5eVpDNTBlWEJsUFQwOVhDSnViM0p0WVd4Y0lpWW1ZV1owWlhKTWIyTXBlM1JvYVhNdWJtVjRkRDFoWm5SbGNreHZZMzF5WlhSMWNtNGdRMjl1ZEdsdWRXVlRaVzUwYVc1bGJIMHNabWx1YVhOb09tWjFibU4wYVc5dUtHWnBibUZzYkhsTWIyTXBlMlp2Y2loMllYSWdhVDEwYUdsekxuUnllVVZ1ZEhKcFpYTXViR1Z1WjNSb0xURTdhVDQ5TURzdExXa3BlM1poY2lCbGJuUnllVDEwYUdsekxuUnllVVZ1ZEhKcFpYTmJhVjA3YVdZb1pXNTBjbmt1Wm1sdVlXeHNlVXh2WXowOVBXWnBibUZzYkhsTWIyTXBlM0psZEhWeWJpQjBhR2x6TG1OdmJYQnNaWFJsS0dWdWRISjVMbU52YlhCc1pYUnBiMjRzWlc1MGNua3VZV1owWlhKTWIyTXBmWDE5TEZ3aVkyRjBZMmhjSWpwbWRXNWpkR2x2YmloMGNubE1iMk1wZTJadmNpaDJZWElnYVQxMGFHbHpMblJ5ZVVWdWRISnBaWE11YkdWdVozUm9MVEU3YVQ0OU1Ec3RMV2twZTNaaGNpQmxiblJ5ZVQxMGFHbHpMblJ5ZVVWdWRISnBaWE5iYVYwN2FXWW9aVzUwY25rdWRISjVURzlqUFQwOWRISjVURzlqS1h0MllYSWdjbVZqYjNKa1BXVnVkSEo1TG1OdmJYQnNaWFJwYjI0N2FXWW9jbVZqYjNKa0xuUjVjR1U5UFQxY0luUm9jbTkzWENJcGUzWmhjaUIwYUhKdmQyNDljbVZqYjNKa0xtRnlaenR5WlhObGRGUnllVVZ1ZEhKNUtHVnVkSEo1S1gxeVpYUjFjbTRnZEdoeWIzZHVmWDEwYUhKdmR5QnVaWGNnUlhKeWIzSW9YQ0pwYkd4bFoyRnNJR05oZEdOb0lHRjBkR1Z0Y0hSY0lpbDlMR1JsYkdWbllYUmxXV2xsYkdRNlpuVnVZM1JwYjI0b2FYUmxjbUZpYkdVc2NtVnpkV3gwVG1GdFpTeHVaWGgwVEc5aktYdDBhR2x6TG1SbGJHVm5ZWFJsUFh0cGRHVnlZWFJ2Y2pwMllXeDFaWE1vYVhSbGNtRmliR1VwTEhKbGMzVnNkRTVoYldVNmNtVnpkV3gwVG1GdFpTeHVaWGgwVEc5ak9tNWxlSFJNYjJOOU8zSmxkSFZ5YmlCRGIyNTBhVzUxWlZObGJuUnBibVZzZlgxOUtIUjVjR1Z2WmlCbmJHOWlZV3c5UFQxY0ltOWlhbVZqZEZ3aVAyZHNiMkpoYkRwMGVYQmxiMllnZDJsdVpHOTNQVDA5WENKdlltcGxZM1JjSWo5M2FXNWtiM2M2ZEdocGN5bDlLUzVqWVd4c0tIUm9hWE1zZEhsd1pXOW1JR2RzYjJKaGJDRTlQVndpZFc1a1pXWnBibVZrWENJL1oyeHZZbUZzT25SNWNHVnZaaUJ6Wld4bUlUMDlYQ0oxYm1SbFptbHVaV1JjSWo5elpXeG1PblI1Y0dWdlppQjNhVzVrYjNjaFBUMWNJblZ1WkdWbWFXNWxaRndpUDNkcGJtUnZkenA3ZlNsOUxIdDlYWDBzZTMwc1d6RmRLVHNpWFgwPSIsIi8qKlxuICogQ29yZS5qcyAwLjYuMVxuICogaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanNcbiAqIExpY2Vuc2U6IGh0dHA6Ly9yb2NrLm1pdC1saWNlbnNlLm9yZ1xuICogwqkgMjAxNSBEZW5pcyBQdXNoa2FyZXZcbiAqL1xuIWZ1bmN0aW9uKGdsb2JhbCwgZnJhbWV3b3JrLCB1bmRlZmluZWQpe1xuJ3VzZSBzdHJpY3QnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb21tb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gIC8vIFNob3J0Y3V0cyBmb3IgW1tDbGFzc11dICYgcHJvcGVydHkgbmFtZXNcclxudmFyIE9CSkVDVCAgICAgICAgICA9ICdPYmplY3QnXHJcbiAgLCBGVU5DVElPTiAgICAgICAgPSAnRnVuY3Rpb24nXHJcbiAgLCBBUlJBWSAgICAgICAgICAgPSAnQXJyYXknXHJcbiAgLCBTVFJJTkcgICAgICAgICAgPSAnU3RyaW5nJ1xyXG4gICwgTlVNQkVSICAgICAgICAgID0gJ051bWJlcidcclxuICAsIFJFR0VYUCAgICAgICAgICA9ICdSZWdFeHAnXHJcbiAgLCBEQVRFICAgICAgICAgICAgPSAnRGF0ZSdcclxuICAsIE1BUCAgICAgICAgICAgICA9ICdNYXAnXHJcbiAgLCBTRVQgICAgICAgICAgICAgPSAnU2V0J1xyXG4gICwgV0VBS01BUCAgICAgICAgID0gJ1dlYWtNYXAnXHJcbiAgLCBXRUFLU0VUICAgICAgICAgPSAnV2Vha1NldCdcclxuICAsIFNZTUJPTCAgICAgICAgICA9ICdTeW1ib2wnXHJcbiAgLCBQUk9NSVNFICAgICAgICAgPSAnUHJvbWlzZSdcclxuICAsIE1BVEggICAgICAgICAgICA9ICdNYXRoJ1xyXG4gICwgQVJHVU1FTlRTICAgICAgID0gJ0FyZ3VtZW50cydcclxuICAsIFBST1RPVFlQRSAgICAgICA9ICdwcm90b3R5cGUnXHJcbiAgLCBDT05TVFJVQ1RPUiAgICAgPSAnY29uc3RydWN0b3InXHJcbiAgLCBUT19TVFJJTkcgICAgICAgPSAndG9TdHJpbmcnXHJcbiAgLCBUT19TVFJJTkdfVEFHICAgPSBUT19TVFJJTkcgKyAnVGFnJ1xyXG4gICwgVE9fTE9DQUxFICAgICAgID0gJ3RvTG9jYWxlU3RyaW5nJ1xyXG4gICwgSEFTX09XTiAgICAgICAgID0gJ2hhc093blByb3BlcnR5J1xyXG4gICwgRk9SX0VBQ0ggICAgICAgID0gJ2ZvckVhY2gnXHJcbiAgLCBJVEVSQVRPUiAgICAgICAgPSAnaXRlcmF0b3InXHJcbiAgLCBGRl9JVEVSQVRPUiAgICAgPSAnQEAnICsgSVRFUkFUT1JcclxuICAsIFBST0NFU1MgICAgICAgICA9ICdwcm9jZXNzJ1xyXG4gICwgQ1JFQVRFX0VMRU1FTlQgID0gJ2NyZWF0ZUVsZW1lbnQnXHJcbiAgLy8gQWxpYXNlcyBnbG9iYWwgb2JqZWN0cyBhbmQgcHJvdG90eXBlc1xyXG4gICwgRnVuY3Rpb24gICAgICAgID0gZ2xvYmFsW0ZVTkNUSU9OXVxyXG4gICwgT2JqZWN0ICAgICAgICAgID0gZ2xvYmFsW09CSkVDVF1cclxuICAsIEFycmF5ICAgICAgICAgICA9IGdsb2JhbFtBUlJBWV1cclxuICAsIFN0cmluZyAgICAgICAgICA9IGdsb2JhbFtTVFJJTkddXHJcbiAgLCBOdW1iZXIgICAgICAgICAgPSBnbG9iYWxbTlVNQkVSXVxyXG4gICwgUmVnRXhwICAgICAgICAgID0gZ2xvYmFsW1JFR0VYUF1cclxuICAsIERhdGUgICAgICAgICAgICA9IGdsb2JhbFtEQVRFXVxyXG4gICwgTWFwICAgICAgICAgICAgID0gZ2xvYmFsW01BUF1cclxuICAsIFNldCAgICAgICAgICAgICA9IGdsb2JhbFtTRVRdXHJcbiAgLCBXZWFrTWFwICAgICAgICAgPSBnbG9iYWxbV0VBS01BUF1cclxuICAsIFdlYWtTZXQgICAgICAgICA9IGdsb2JhbFtXRUFLU0VUXVxyXG4gICwgU3ltYm9sICAgICAgICAgID0gZ2xvYmFsW1NZTUJPTF1cclxuICAsIE1hdGggICAgICAgICAgICA9IGdsb2JhbFtNQVRIXVxyXG4gICwgVHlwZUVycm9yICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxyXG4gICwgUmFuZ2VFcnJvciAgICAgID0gZ2xvYmFsLlJhbmdlRXJyb3JcclxuICAsIHNldFRpbWVvdXQgICAgICA9IGdsb2JhbC5zZXRUaW1lb3V0XHJcbiAgLCBzZXRJbW1lZGlhdGUgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXHJcbiAgLCBjbGVhckltbWVkaWF0ZSAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcclxuICAsIHBhcnNlSW50ICAgICAgICA9IGdsb2JhbC5wYXJzZUludFxyXG4gICwgaXNGaW5pdGUgICAgICAgID0gZ2xvYmFsLmlzRmluaXRlXHJcbiAgLCBwcm9jZXNzICAgICAgICAgPSBnbG9iYWxbUFJPQ0VTU11cclxuICAsIG5leHRUaWNrICAgICAgICA9IHByb2Nlc3MgJiYgcHJvY2Vzcy5uZXh0VGlja1xyXG4gICwgZG9jdW1lbnQgICAgICAgID0gZ2xvYmFsLmRvY3VtZW50XHJcbiAgLCBodG1sICAgICAgICAgICAgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuICAsIG5hdmlnYXRvciAgICAgICA9IGdsb2JhbC5uYXZpZ2F0b3JcclxuICAsIGRlZmluZSAgICAgICAgICA9IGdsb2JhbC5kZWZpbmVcclxuICAsIGNvbnNvbGUgICAgICAgICA9IGdsb2JhbC5jb25zb2xlIHx8IHt9XHJcbiAgLCBBcnJheVByb3RvICAgICAgPSBBcnJheVtQUk9UT1RZUEVdXHJcbiAgLCBPYmplY3RQcm90byAgICAgPSBPYmplY3RbUFJPVE9UWVBFXVxyXG4gICwgRnVuY3Rpb25Qcm90byAgID0gRnVuY3Rpb25bUFJPVE9UWVBFXVxyXG4gICwgSW5maW5pdHkgICAgICAgID0gMSAvIDBcclxuICAsIERPVCAgICAgICAgICAgICA9ICcuJztcclxuXHJcbi8vIGh0dHA6Ly9qc3BlcmYuY29tL2NvcmUtanMtaXNvYmplY3RcclxuZnVuY3Rpb24gaXNPYmplY3QoaXQpe1xyXG4gIHJldHVybiBpdCAhPT0gbnVsbCAmJiAodHlwZW9mIGl0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nKTtcclxufVxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGl0KXtcclxuICByZXR1cm4gdHlwZW9mIGl0ID09ICdmdW5jdGlvbic7XHJcbn1cclxuLy8gTmF0aXZlIGZ1bmN0aW9uP1xyXG52YXIgaXNOYXRpdmUgPSBjdHgoLy4vLnRlc3QsIC9cXFtuYXRpdmUgY29kZVxcXVxccypcXH1cXHMqJC8sIDEpO1xyXG5cclxuLy8gT2JqZWN0IGludGVybmFsIFtbQ2xhc3NdXSBvciB0b1N0cmluZ1RhZ1xyXG4vLyBodHRwOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nXHJcbnZhciB0b1N0cmluZyA9IE9iamVjdFByb3RvW1RPX1NUUklOR107XHJcbmZ1bmN0aW9uIHNldFRvU3RyaW5nVGFnKGl0LCB0YWcsIHN0YXQpe1xyXG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdFtQUk9UT1RZUEVdLCBTWU1CT0xfVEFHKSloaWRkZW4oaXQsIFNZTUJPTF9UQUcsIHRhZyk7XHJcbn1cclxuZnVuY3Rpb24gY29mKGl0KXtcclxuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xyXG59XHJcbmZ1bmN0aW9uIGNsYXNzb2YoaXQpe1xyXG4gIHZhciBPLCBUO1xyXG4gIHJldHVybiBpdCA9PSB1bmRlZmluZWQgPyBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiAnTnVsbCdcclxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtTWU1CT0xfVEFHXSkgPT0gJ3N0cmluZycgPyBUIDogY29mKE8pO1xyXG59XHJcblxyXG4vLyBGdW5jdGlvblxyXG52YXIgY2FsbCAgPSBGdW5jdGlvblByb3RvLmNhbGxcclxuICAsIGFwcGx5ID0gRnVuY3Rpb25Qcm90by5hcHBseVxyXG4gICwgUkVGRVJFTkNFX0dFVDtcclxuLy8gUGFydGlhbCBhcHBseVxyXG5mdW5jdGlvbiBwYXJ0KC8qIC4uLmFyZ3MgKi8pe1xyXG4gIHZhciBmbiAgICAgPSBhc3NlcnRGdW5jdGlvbih0aGlzKVxyXG4gICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAsIGFyZ3MgICA9IEFycmF5KGxlbmd0aClcclxuICAgICwgaSAgICAgID0gMFxyXG4gICAgLCBfICAgICAgPSBwYXRoLl9cclxuICAgICwgaG9sZGVyID0gZmFsc2U7XHJcbiAgd2hpbGUobGVuZ3RoID4gaSlpZigoYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdKSA9PT0gXylob2xkZXIgPSB0cnVlO1xyXG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgIHZhciB0aGF0ICAgID0gdGhpc1xyXG4gICAgICAsIF9sZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICwgaSA9IDAsIGogPSAwLCBfYXJncztcclxuICAgIGlmKCFob2xkZXIgJiYgIV9sZW5ndGgpcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XHJcbiAgICBfYXJncyA9IGFyZ3Muc2xpY2UoKTtcclxuICAgIGlmKGhvbGRlcilmb3IoO2xlbmd0aCA+IGk7IGkrKylpZihfYXJnc1tpXSA9PT0gXylfYXJnc1tpXSA9IGFyZ3VtZW50c1tqKytdO1xyXG4gICAgd2hpbGUoX2xlbmd0aCA+IGopX2FyZ3MucHVzaChhcmd1bWVudHNbaisrXSk7XHJcbiAgICByZXR1cm4gaW52b2tlKGZuLCBfYXJncywgdGhhdCk7XHJcbiAgfVxyXG59XHJcbi8vIE9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xyXG5mdW5jdGlvbiBjdHgoZm4sIHRoYXQsIGxlbmd0aCl7XHJcbiAgYXNzZXJ0RnVuY3Rpb24oZm4pO1xyXG4gIGlmKH5sZW5ndGggJiYgdGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcclxuICBzd2l0Y2gobGVuZ3RoKXtcclxuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcclxuICAgIH1cclxuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcclxuICAgIH1cclxuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xyXG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcclxuICAgIH1cclxuICB9IHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcclxuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG59XHJcbi8vIEZhc3QgYXBwbHlcclxuLy8gaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XHJcbmZ1bmN0aW9uIGludm9rZShmbiwgYXJncywgdGhhdCl7XHJcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xyXG4gIHN3aXRjaChhcmdzLmxlbmd0aCB8IDApe1xyXG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XHJcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XHJcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XHJcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XHJcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XHJcbiAgICBjYXNlIDU6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSk7XHJcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xyXG59XHJcblxyXG4vLyBPYmplY3Q6XHJcbnZhciBjcmVhdGUgICAgICAgICAgID0gT2JqZWN0LmNyZWF0ZVxyXG4gICwgZ2V0UHJvdG90eXBlT2YgICA9IE9iamVjdC5nZXRQcm90b3R5cGVPZlxyXG4gICwgc2V0UHJvdG90eXBlT2YgICA9IE9iamVjdC5zZXRQcm90b3R5cGVPZlxyXG4gICwgZGVmaW5lUHJvcGVydHkgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxyXG4gICwgZGVmaW5lUHJvcGVydGllcyA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzXHJcbiAgLCBnZXRPd25EZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvclxyXG4gICwgZ2V0S2V5cyAgICAgICAgICA9IE9iamVjdC5rZXlzXHJcbiAgLCBnZXROYW1lcyAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcclxuICAsIGdldFN5bWJvbHMgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzXHJcbiAgLCBpc0Zyb3plbiAgICAgICAgID0gT2JqZWN0LmlzRnJvemVuXHJcbiAgLCBoYXMgICAgICAgICAgICAgID0gY3R4KGNhbGwsIE9iamVjdFByb3RvW0hBU19PV05dLCAyKVxyXG4gIC8vIER1bW15LCBmaXggZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmcgaW4gZXM1IG1vZHVsZVxyXG4gICwgRVM1T2JqZWN0ICAgICAgICA9IE9iamVjdFxyXG4gICwgRGljdDtcclxuZnVuY3Rpb24gdG9PYmplY3QoaXQpe1xyXG4gIHJldHVybiBFUzVPYmplY3QoYXNzZXJ0RGVmaW5lZChpdCkpO1xyXG59XHJcbmZ1bmN0aW9uIHJldHVybkl0KGl0KXtcclxuICByZXR1cm4gaXQ7XHJcbn1cclxuZnVuY3Rpb24gcmV0dXJuVGhpcygpe1xyXG4gIHJldHVybiB0aGlzO1xyXG59XHJcbmZ1bmN0aW9uIGdldChvYmplY3QsIGtleSl7XHJcbiAgaWYoaGFzKG9iamVjdCwga2V5KSlyZXR1cm4gb2JqZWN0W2tleV07XHJcbn1cclxuZnVuY3Rpb24gb3duS2V5cyhpdCl7XHJcbiAgYXNzZXJ0T2JqZWN0KGl0KTtcclxuICByZXR1cm4gZ2V0U3ltYm9scyA/IGdldE5hbWVzKGl0KS5jb25jYXQoZ2V0U3ltYm9scyhpdCkpIDogZ2V0TmFtZXMoaXQpO1xyXG59XHJcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcclxudmFyIGFzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2Upe1xyXG4gIHZhciBUID0gT2JqZWN0KGFzc2VydERlZmluZWQodGFyZ2V0KSlcclxuICAgICwgbCA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICwgaSA9IDE7XHJcbiAgd2hpbGUobCA+IGkpe1xyXG4gICAgdmFyIFMgICAgICA9IEVTNU9iamVjdChhcmd1bWVudHNbaSsrXSlcclxuICAgICAgLCBrZXlzICAgPSBnZXRLZXlzKFMpXHJcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgLCBqICAgICAgPSAwXHJcbiAgICAgICwga2V5O1xyXG4gICAgd2hpbGUobGVuZ3RoID4gailUW2tleSA9IGtleXNbaisrXV0gPSBTW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBUO1xyXG59XHJcbmZ1bmN0aW9uIGtleU9mKG9iamVjdCwgZWwpe1xyXG4gIHZhciBPICAgICAgPSB0b09iamVjdChvYmplY3QpXHJcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcclxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICwgaW5kZXggID0gMFxyXG4gICAgLCBrZXk7XHJcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcclxufVxyXG5cclxuLy8gQXJyYXlcclxuLy8gYXJyYXkoJ3N0cjEsc3RyMixzdHIzJykgPT4gWydzdHIxJywgJ3N0cjInLCAnc3RyMyddXHJcbmZ1bmN0aW9uIGFycmF5KGl0KXtcclxuICByZXR1cm4gU3RyaW5nKGl0KS5zcGxpdCgnLCcpO1xyXG59XHJcbnZhciBwdXNoICAgID0gQXJyYXlQcm90by5wdXNoXHJcbiAgLCB1bnNoaWZ0ID0gQXJyYXlQcm90by51bnNoaWZ0XHJcbiAgLCBzbGljZSAgID0gQXJyYXlQcm90by5zbGljZVxyXG4gICwgc3BsaWNlICA9IEFycmF5UHJvdG8uc3BsaWNlXHJcbiAgLCBpbmRleE9mID0gQXJyYXlQcm90by5pbmRleE9mXHJcbiAgLCBmb3JFYWNoID0gQXJyYXlQcm90b1tGT1JfRUFDSF07XHJcbi8qXHJcbiAqIDAgLT4gZm9yRWFjaFxyXG4gKiAxIC0+IG1hcFxyXG4gKiAyIC0+IGZpbHRlclxyXG4gKiAzIC0+IHNvbWVcclxuICogNCAtPiBldmVyeVxyXG4gKiA1IC0+IGZpbmRcclxuICogNiAtPiBmaW5kSW5kZXhcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUFycmF5TWV0aG9kKHR5cGUpe1xyXG4gIHZhciBpc01hcCAgICAgICA9IHR5cGUgPT0gMVxyXG4gICAgLCBpc0ZpbHRlciAgICA9IHR5cGUgPT0gMlxyXG4gICAgLCBpc1NvbWUgICAgICA9IHR5cGUgPT0gM1xyXG4gICAgLCBpc0V2ZXJ5ICAgICA9IHR5cGUgPT0gNFxyXG4gICAgLCBpc0ZpbmRJbmRleCA9IHR5cGUgPT0gNlxyXG4gICAgLCBub2hvbGVzICAgICA9IHR5cGUgPT0gNSB8fCBpc0ZpbmRJbmRleDtcclxuICByZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcclxuICAgIHZhciBPICAgICAgPSBPYmplY3QoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCB0aGF0ICAgPSBhcmd1bWVudHNbMV1cclxuICAgICAgLCBzZWxmICAgPSBFUzVPYmplY3QoTylcclxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcclxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSAwXHJcbiAgICAgICwgcmVzdWx0ID0gaXNNYXAgPyBBcnJheShsZW5ndGgpIDogaXNGaWx0ZXIgPyBbXSA6IHVuZGVmaW5lZFxyXG4gICAgICAsIHZhbCwgcmVzO1xyXG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihub2hvbGVzIHx8IGluZGV4IGluIHNlbGYpe1xyXG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcclxuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcclxuICAgICAgaWYodHlwZSl7XHJcbiAgICAgICAgaWYoaXNNYXApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAgLy8gbWFwXHJcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKHR5cGUpe1xyXG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcclxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXHJcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XHJcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXHJcbiAgICAgICAgfSBlbHNlIGlmKGlzRXZlcnkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAgLy8gZXZlcnlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzRmluZEluZGV4ID8gLTEgOiBpc1NvbWUgfHwgaXNFdmVyeSA/IGlzRXZlcnkgOiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUFycmF5Q29udGFpbnMoaXNDb250YWlucyl7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGVsIC8qLCBmcm9tSW5kZXggPSAwICovKXtcclxuICAgIHZhciBPICAgICAgPSB0b09iamVjdCh0aGlzKVxyXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxyXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoYXJndW1lbnRzWzFdLCBsZW5ndGgpO1xyXG4gICAgaWYoaXNDb250YWlucyAmJiBlbCAhPSBlbCl7XHJcbiAgICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoc2FtZU5hTihPW2luZGV4XSkpcmV0dXJuIGlzQ29udGFpbnMgfHwgaW5kZXg7XHJcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihpc0NvbnRhaW5zIHx8IGluZGV4IGluIE8pe1xyXG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIGlzQ29udGFpbnMgfHwgaW5kZXg7XHJcbiAgICB9IHJldHVybiAhaXNDb250YWlucyAmJiAtMTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZ2VuZXJpYyhBLCBCKXtcclxuICAvLyBzdHJhbmdlIElFIHF1aXJrcyBtb2RlIGJ1ZyAtPiB1c2UgdHlwZW9mIHZzIGlzRnVuY3Rpb25cclxuICByZXR1cm4gdHlwZW9mIEEgPT0gJ2Z1bmN0aW9uJyA/IEEgOiBCO1xyXG59XHJcblxyXG4vLyBNYXRoXHJcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxZmZmZmZmZmZmZmZmZiAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXHJcbiAgLCBwb3cgICAgPSBNYXRoLnBvd1xyXG4gICwgYWJzICAgID0gTWF0aC5hYnNcclxuICAsIGNlaWwgICA9IE1hdGguY2VpbFxyXG4gICwgZmxvb3IgID0gTWF0aC5mbG9vclxyXG4gICwgbWF4ICAgID0gTWF0aC5tYXhcclxuICAsIG1pbiAgICA9IE1hdGgubWluXHJcbiAgLCByYW5kb20gPSBNYXRoLnJhbmRvbVxyXG4gICwgdHJ1bmMgID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHJldHVybiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XHJcbiAgICB9XHJcbi8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXHJcbmZ1bmN0aW9uIHNhbWVOYU4obnVtYmVyKXtcclxuICByZXR1cm4gbnVtYmVyICE9IG51bWJlcjtcclxufVxyXG4vLyA3LjEuNCBUb0ludGVnZXJcclxuZnVuY3Rpb24gdG9JbnRlZ2VyKGl0KXtcclxuICByZXR1cm4gaXNOYU4oaXQpID8gMCA6IHRydW5jKGl0KTtcclxufVxyXG4vLyA3LjEuMTUgVG9MZW5ndGhcclxuZnVuY3Rpb24gdG9MZW5ndGgoaXQpe1xyXG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgTUFYX1NBRkVfSU5URUdFUikgOiAwO1xyXG59XHJcbmZ1bmN0aW9uIHRvSW5kZXgoaW5kZXgsIGxlbmd0aCl7XHJcbiAgdmFyIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcclxuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcclxufVxyXG5mdW5jdGlvbiBseihudW0pe1xyXG4gIHJldHVybiBudW0gPiA5ID8gbnVtIDogJzAnICsgbnVtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVSZXBsYWNlcihyZWdFeHAsIHJlcGxhY2UsIGlzU3RhdGljKXtcclxuICB2YXIgcmVwbGFjZXIgPSBpc09iamVjdChyZXBsYWNlKSA/IGZ1bmN0aW9uKHBhcnQpe1xyXG4gICAgcmV0dXJuIHJlcGxhY2VbcGFydF07XHJcbiAgfSA6IHJlcGxhY2U7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcclxuICAgIHJldHVybiBTdHJpbmcoaXNTdGF0aWMgPyBpdCA6IHRoaXMpLnJlcGxhY2UocmVnRXhwLCByZXBsYWNlcik7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVBvaW50QXQodG9TdHJpbmcpe1xyXG4gIHJldHVybiBmdW5jdGlvbihwb3Mpe1xyXG4gICAgdmFyIHMgPSBTdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcclxuICAgICAgLCBsID0gcy5sZW5ndGhcclxuICAgICAgLCBhLCBiO1xyXG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiB0b1N0cmluZyA/ICcnIDogdW5kZWZpbmVkO1xyXG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcclxuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXHJcbiAgICAgID8gdG9TdHJpbmcgPyBzLmNoYXJBdChpKSA6IGFcclxuICAgICAgOiB0b1N0cmluZyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFzc2VydGlvbiAmIGVycm9yc1xyXG52YXIgUkVEVUNFX0VSUk9SID0gJ1JlZHVjZSBvZiBlbXB0eSBvYmplY3Qgd2l0aCBubyBpbml0aWFsIHZhbHVlJztcclxuZnVuY3Rpb24gYXNzZXJ0KGNvbmRpdGlvbiwgbXNnMSwgbXNnMil7XHJcbiAgaWYoIWNvbmRpdGlvbil0aHJvdyBUeXBlRXJyb3IobXNnMiA/IG1zZzEgKyBtc2cyIDogbXNnMSk7XHJcbn1cclxuZnVuY3Rpb24gYXNzZXJ0RGVmaW5lZChpdCl7XHJcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignRnVuY3Rpb24gY2FsbGVkIG9uIG51bGwgb3IgdW5kZWZpbmVkJyk7XHJcbiAgcmV0dXJuIGl0O1xyXG59XHJcbmZ1bmN0aW9uIGFzc2VydEZ1bmN0aW9uKGl0KXtcclxuICBhc3NlcnQoaXNGdW5jdGlvbihpdCksIGl0LCAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xyXG4gIHJldHVybiBpdDtcclxufVxyXG5mdW5jdGlvbiBhc3NlcnRPYmplY3QoaXQpe1xyXG4gIGFzc2VydChpc09iamVjdChpdCksIGl0LCAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XHJcbiAgcmV0dXJuIGl0O1xyXG59XHJcbmZ1bmN0aW9uIGFzc2VydEluc3RhbmNlKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSl7XHJcbiAgYXNzZXJ0KGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IsIG5hbWUsIFwiOiB1c2UgdGhlICduZXcnIG9wZXJhdG9yIVwiKTtcclxufVxyXG5cclxuLy8gUHJvcGVydHkgZGVzY3JpcHRvcnMgJiBTeW1ib2xcclxuZnVuY3Rpb24gZGVzY3JpcHRvcihiaXRtYXAsIHZhbHVlKXtcclxuICByZXR1cm4ge1xyXG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxyXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxyXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxyXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzaW1wbGVTZXQob2JqZWN0LCBrZXksIHZhbHVlKXtcclxuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xyXG4gIHJldHVybiBvYmplY3Q7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRGVmaW5lcihiaXRtYXApe1xyXG4gIHJldHVybiBERVNDID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcclxuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwgZGVzY3JpcHRvcihiaXRtYXAsIHZhbHVlKSk7XHJcbiAgfSA6IHNpbXBsZVNldDtcclxufVxyXG5mdW5jdGlvbiB1aWQoa2V5KXtcclxuICByZXR1cm4gU1lNQk9MICsgJygnICsga2V5ICsgJylfJyArICgrK3NpZCArIHJhbmRvbSgpKVtUT19TVFJJTkddKDM2KTtcclxufVxyXG5mdW5jdGlvbiBnZXRXZWxsS25vd25TeW1ib2wobmFtZSwgc2V0dGVyKXtcclxuICByZXR1cm4gKFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0pIHx8IChzZXR0ZXIgPyBTeW1ib2wgOiBzYWZlU3ltYm9sKShTWU1CT0wgKyBET1QgKyBuYW1lKTtcclxufVxyXG4vLyBUaGUgZW5naW5lIHdvcmtzIGZpbmUgd2l0aCBkZXNjcmlwdG9ycz8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eS5cclxudmFyIERFU0MgPSAhIWZ1bmN0aW9uKCl7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiAyIH19KS5hID09IDI7XHJcbiAgICAgIH0gY2F0Y2goZSl7fVxyXG4gICAgfSgpXHJcbiAgLCBzaWQgICAgPSAwXHJcbiAgLCBoaWRkZW4gPSBjcmVhdGVEZWZpbmVyKDEpXHJcbiAgLCBzZXQgICAgPSBTeW1ib2wgPyBzaW1wbGVTZXQgOiBoaWRkZW5cclxuICAsIHNhZmVTeW1ib2wgPSBTeW1ib2wgfHwgdWlkO1xyXG5mdW5jdGlvbiBhc3NpZ25IaWRkZW4odGFyZ2V0LCBzcmMpe1xyXG4gIGZvcih2YXIga2V5IGluIHNyYyloaWRkZW4odGFyZ2V0LCBrZXksIHNyY1trZXldKTtcclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG52YXIgU1lNQk9MX1VOU0NPUEFCTEVTID0gZ2V0V2VsbEtub3duU3ltYm9sKCd1bnNjb3BhYmxlcycpXHJcbiAgLCBBcnJheVVuc2NvcGFibGVzICAgPSBBcnJheVByb3RvW1NZTUJPTF9VTlNDT1BBQkxFU10gfHwge31cclxuICAsIFNZTUJPTF9UQUcgICAgICAgICA9IGdldFdlbGxLbm93blN5bWJvbChUT19TVFJJTkdfVEFHKVxyXG4gICwgU1lNQk9MX1NQRUNJRVMgICAgID0gZ2V0V2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJylcclxuICAsIFNZTUJPTF9JVEVSQVRPUjtcclxuZnVuY3Rpb24gc2V0U3BlY2llcyhDKXtcclxuICBpZihERVNDICYmIChmcmFtZXdvcmsgfHwgIWlzTmF0aXZlKEMpKSlkZWZpbmVQcm9wZXJ0eShDLCBTWU1CT0xfU1BFQ0lFUywge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiByZXR1cm5UaGlzXHJcbiAgfSk7XHJcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29tbW9uLmV4cG9ydCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxudmFyIE5PREUgPSBjb2YocHJvY2VzcykgPT0gUFJPQ0VTU1xyXG4gICwgY29yZSA9IHt9XHJcbiAgLCBwYXRoID0gZnJhbWV3b3JrID8gZ2xvYmFsIDogY29yZVxyXG4gICwgb2xkICA9IGdsb2JhbC5jb3JlXHJcbiAgLCBleHBvcnRHbG9iYWxcclxuICAvLyB0eXBlIGJpdG1hcFxyXG4gICwgRk9SQ0VEID0gMVxyXG4gICwgR0xPQkFMID0gMlxyXG4gICwgU1RBVElDID0gNFxyXG4gICwgUFJPVE8gID0gOFxyXG4gICwgQklORCAgID0gMTZcclxuICAsIFdSQVAgICA9IDMyO1xyXG5mdW5jdGlvbiAkZGVmaW5lKHR5cGUsIG5hbWUsIHNvdXJjZSl7XHJcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cFxyXG4gICAgLCBpc0dsb2JhbCA9IHR5cGUgJiBHTE9CQUxcclxuICAgICwgdGFyZ2V0ICAgPSBpc0dsb2JhbCA/IGdsb2JhbCA6ICh0eXBlICYgU1RBVElDKVxyXG4gICAgICAgID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCBPYmplY3RQcm90bylbUFJPVE9UWVBFXVxyXG4gICAgLCBleHBvcnRzICA9IGlzR2xvYmFsID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XHJcbiAgaWYoaXNHbG9iYWwpc291cmNlID0gbmFtZTtcclxuICBmb3Ioa2V5IGluIHNvdXJjZSl7XHJcbiAgICAvLyB0aGVyZSBpcyBhIHNpbWlsYXIgbmF0aXZlXHJcbiAgICBvd24gPSAhKHR5cGUgJiBGT1JDRUQpICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0XHJcbiAgICAgICYmICghaXNGdW5jdGlvbih0YXJnZXRba2V5XSkgfHwgaXNOYXRpdmUodGFyZ2V0W2tleV0pKTtcclxuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXHJcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xyXG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXHJcbiAgICBpZighZnJhbWV3b3JrICYmIGlzR2xvYmFsICYmICFpc0Z1bmN0aW9uKHRhcmdldFtrZXldKSlleHAgPSBzb3VyY2Vba2V5XTtcclxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XHJcbiAgICBlbHNlIGlmKHR5cGUgJiBCSU5EICYmIG93billeHAgPSBjdHgob3V0LCBnbG9iYWwpO1xyXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcclxuICAgIGVsc2UgaWYodHlwZSAmIFdSQVAgJiYgIWZyYW1ld29yayAmJiB0YXJnZXRba2V5XSA9PSBvdXQpe1xyXG4gICAgICBleHAgPSBmdW5jdGlvbihwYXJhbSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBvdXQgPyBuZXcgb3V0KHBhcmFtKSA6IG91dChwYXJhbSk7XHJcbiAgICAgIH1cclxuICAgICAgZXhwW1BST1RPVFlQRV0gPSBvdXRbUFJPVE9UWVBFXTtcclxuICAgIH0gZWxzZSBleHAgPSB0eXBlICYgUFJPVE8gJiYgaXNGdW5jdGlvbihvdXQpID8gY3R4KGNhbGwsIG91dCkgOiBvdXQ7XHJcbiAgICAvLyBleHRlbmQgZ2xvYmFsXHJcbiAgICBpZihmcmFtZXdvcmsgJiYgdGFyZ2V0ICYmICFvd24pe1xyXG4gICAgICBpZihpc0dsb2JhbCl0YXJnZXRba2V5XSA9IG91dDtcclxuICAgICAgZWxzZSBkZWxldGUgdGFyZ2V0W2tleV0gJiYgaGlkZGVuKHRhcmdldCwga2V5LCBvdXQpO1xyXG4gICAgfVxyXG4gICAgLy8gZXhwb3J0XHJcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGRlbihleHBvcnRzLCBrZXksIGV4cCk7XHJcbiAgfVxyXG59XHJcbi8vIENvbW1vbkpTIGV4cG9ydFxyXG5pZih0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKW1vZHVsZS5leHBvcnRzID0gY29yZTtcclxuLy8gUmVxdWlyZUpTIGV4cG9ydFxyXG5lbHNlIGlmKGlzRnVuY3Rpb24oZGVmaW5lKSAmJiBkZWZpbmUuYW1kKWRlZmluZShmdW5jdGlvbigpe3JldHVybiBjb3JlfSk7XHJcbi8vIEV4cG9ydCB0byBnbG9iYWwgb2JqZWN0XHJcbmVsc2UgZXhwb3J0R2xvYmFsID0gdHJ1ZTtcclxuaWYoZXhwb3J0R2xvYmFsIHx8IGZyYW1ld29yayl7XHJcbiAgY29yZS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKXtcclxuICAgIGdsb2JhbC5jb3JlID0gb2xkO1xyXG4gICAgcmV0dXJuIGNvcmU7XHJcbiAgfVxyXG4gIGdsb2JhbC5jb3JlID0gY29yZTtcclxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBjb21tb24uaXRlcmF0b3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5TWU1CT0xfSVRFUkFUT1IgPSBnZXRXZWxsS25vd25TeW1ib2woSVRFUkFUT1IpO1xyXG52YXIgSVRFUiAgPSBzYWZlU3ltYm9sKCdpdGVyJylcclxuICAsIEtFWSAgID0gMVxyXG4gICwgVkFMVUUgPSAyXHJcbiAgLCBJdGVyYXRvcnMgPSB7fVxyXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fVxyXG4gICAgLy8gU2FmYXJpIGhhcyBieWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxyXG4gICwgQlVHR1lfSVRFUkFUT1JTID0gJ2tleXMnIGluIEFycmF5UHJvdG8gJiYgISgnbmV4dCcgaW4gW10ua2V5cygpKTtcclxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcclxuc2V0SXRlcmF0b3IoSXRlcmF0b3JQcm90b3R5cGUsIHJldHVyblRoaXMpO1xyXG5mdW5jdGlvbiBzZXRJdGVyYXRvcihPLCB2YWx1ZSl7XHJcbiAgaGlkZGVuKE8sIFNZTUJPTF9JVEVSQVRPUiwgdmFsdWUpO1xyXG4gIC8vIEFkZCBpdGVyYXRvciBmb3IgRkYgaXRlcmF0b3IgcHJvdG9jb2xcclxuICBGRl9JVEVSQVRPUiBpbiBBcnJheVByb3RvICYmIGhpZGRlbihPLCBGRl9JVEVSQVRPUiwgdmFsdWUpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUl0ZXJhdG9yKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0LCBwcm90byl7XHJcbiAgQ29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGNyZWF0ZShwcm90byB8fCBJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcclxuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcclxufVxyXG5mdW5jdGlvbiBkZWZpbmVJdGVyYXRvcihDb25zdHJ1Y3RvciwgTkFNRSwgdmFsdWUsIERFRkFVTFQpe1xyXG4gIHZhciBwcm90byA9IENvbnN0cnVjdG9yW1BST1RPVFlQRV1cclxuICAgICwgaXRlciAgPSBnZXQocHJvdG8sIFNZTUJPTF9JVEVSQVRPUikgfHwgZ2V0KHByb3RvLCBGRl9JVEVSQVRPUikgfHwgKERFRkFVTFQgJiYgZ2V0KHByb3RvLCBERUZBVUxUKSkgfHwgdmFsdWU7XHJcbiAgaWYoZnJhbWV3b3JrKXtcclxuICAgIC8vIERlZmluZSBpdGVyYXRvclxyXG4gICAgc2V0SXRlcmF0b3IocHJvdG8sIGl0ZXIpO1xyXG4gICAgaWYoaXRlciAhPT0gdmFsdWUpe1xyXG4gICAgICB2YXIgaXRlclByb3RvID0gZ2V0UHJvdG90eXBlT2YoaXRlci5jYWxsKG5ldyBDb25zdHJ1Y3RvcikpO1xyXG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXHJcbiAgICAgIHNldFRvU3RyaW5nVGFnKGl0ZXJQcm90bywgTkFNRSArICcgSXRlcmF0b3InLCB0cnVlKTtcclxuICAgICAgLy8gRkYgZml4XHJcbiAgICAgIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpICYmIHNldEl0ZXJhdG9yKGl0ZXJQcm90bywgcmV0dXJuVGhpcyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcclxuICBJdGVyYXRvcnNbTkFNRV0gPSBpdGVyO1xyXG4gIC8vIEZGICYgdjggZml4XHJcbiAgSXRlcmF0b3JzW05BTUUgKyAnIEl0ZXJhdG9yJ10gPSByZXR1cm5UaGlzO1xyXG4gIHJldHVybiBpdGVyO1xyXG59XHJcbmZ1bmN0aW9uIGRlZmluZVN0ZEl0ZXJhdG9ycyhCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VUKXtcclxuICBmdW5jdGlvbiBjcmVhdGVJdGVyKGtpbmQpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNyZWF0ZUl0ZXJhdG9yKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcclxuICB2YXIgZW50cmllcyA9IGNyZWF0ZUl0ZXIoS0VZK1ZBTFVFKVxyXG4gICAgLCB2YWx1ZXMgID0gY3JlYXRlSXRlcihWQUxVRSk7XHJcbiAgaWYoREVGQVVMVCA9PSBWQUxVRSl2YWx1ZXMgPSBkZWZpbmVJdGVyYXRvcihCYXNlLCBOQU1FLCB2YWx1ZXMsICd2YWx1ZXMnKTtcclxuICBlbHNlIGVudHJpZXMgPSBkZWZpbmVJdGVyYXRvcihCYXNlLCBOQU1FLCBlbnRyaWVzLCAnZW50cmllcycpO1xyXG4gIGlmKERFRkFVTFQpe1xyXG4gICAgJGRlZmluZShQUk9UTyArIEZPUkNFRCAqIEJVR0dZX0lURVJBVE9SUywgTkFNRSwge1xyXG4gICAgICBlbnRyaWVzOiBlbnRyaWVzLFxyXG4gICAgICBrZXlzOiBJU19TRVQgPyB2YWx1ZXMgOiBjcmVhdGVJdGVyKEtFWSksXHJcbiAgICAgIHZhbHVlczogdmFsdWVzXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gaXRlclJlc3VsdChkb25lLCB2YWx1ZSl7XHJcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XHJcbn1cclxuZnVuY3Rpb24gaXNJdGVyYWJsZShpdCl7XHJcbiAgdmFyIE8gICAgICA9IE9iamVjdChpdClcclxuICAgICwgU3ltYm9sID0gZ2xvYmFsW1NZTUJPTF1cclxuICAgICwgaGFzRXh0ID0gKFN5bWJvbCAmJiBTeW1ib2xbSVRFUkFUT1JdIHx8IEZGX0lURVJBVE9SKSBpbiBPO1xyXG4gIHJldHVybiBoYXNFeHQgfHwgU1lNQk9MX0lURVJBVE9SIGluIE8gfHwgaGFzKEl0ZXJhdG9ycywgY2xhc3NvZihPKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SXRlcmF0b3IoaXQpe1xyXG4gIHZhciBTeW1ib2wgID0gZ2xvYmFsW1NZTUJPTF1cclxuICAgICwgZXh0ICAgICA9IGl0W1N5bWJvbCAmJiBTeW1ib2xbSVRFUkFUT1JdIHx8IEZGX0lURVJBVE9SXVxyXG4gICAgLCBnZXRJdGVyID0gZXh0IHx8IGl0W1NZTUJPTF9JVEVSQVRPUl0gfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcclxuICByZXR1cm4gYXNzZXJ0T2JqZWN0KGdldEl0ZXIuY2FsbChpdCkpO1xyXG59XHJcbmZ1bmN0aW9uIHN0ZXBDYWxsKGZuLCB2YWx1ZSwgZW50cmllcyl7XHJcbiAgcmV0dXJuIGVudHJpZXMgPyBpbnZva2UoZm4sIHZhbHVlKSA6IGZuKHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKGZuKXtcclxuICB2YXIgZGFuZ2VyID0gdHJ1ZTtcclxuICB2YXIgTyA9IHtcclxuICAgIG5leHQ6IGZ1bmN0aW9uKCl7IHRocm93IDEgfSxcclxuICAgICdyZXR1cm4nOiBmdW5jdGlvbigpeyBkYW5nZXIgPSBmYWxzZSB9XHJcbiAgfTtcclxuICBPW1NZTUJPTF9JVEVSQVRPUl0gPSByZXR1cm5UaGlzO1xyXG4gIHRyeSB7XHJcbiAgICBmbihPKTtcclxuICB9IGNhdGNoKGUpe31cclxuICByZXR1cm4gZGFuZ2VyO1xyXG59XHJcbmZ1bmN0aW9uIGNsb3NlSXRlcmF0b3IoaXRlcmF0b3Ipe1xyXG4gIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XHJcbiAgaWYocmV0ICE9PSB1bmRlZmluZWQpcmV0LmNhbGwoaXRlcmF0b3IpO1xyXG59XHJcbmZ1bmN0aW9uIHNhZmVJdGVyQ2xvc2UoZXhlYywgaXRlcmF0b3Ipe1xyXG4gIHRyeSB7XHJcbiAgICBleGVjKGl0ZXJhdG9yKTtcclxuICB9IGNhdGNoKGUpe1xyXG4gICAgY2xvc2VJdGVyYXRvcihpdGVyYXRvcik7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBmb3JPZihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpe1xyXG4gIHNhZmVJdGVyQ2xvc2UoZnVuY3Rpb24oaXRlcmF0b3Ipe1xyXG4gICAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcclxuICAgICAgLCBzdGVwO1xyXG4gICAgd2hpbGUoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKWlmKHN0ZXBDYWxsKGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpID09PSBmYWxzZSl7XHJcbiAgICAgIHJldHVybiBjbG9zZUl0ZXJhdG9yKGl0ZXJhdG9yKTtcclxuICAgIH1cclxuICB9LCBnZXRJdGVyYXRvcihpdGVyYWJsZSkpO1xyXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5zeW1ib2wgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cclxuIWZ1bmN0aW9uKFRBRywgU3ltYm9sUmVnaXN0cnksIEFsbFN5bWJvbHMsIHNldHRlcil7XHJcbiAgLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXHJcbiAgaWYoIWlzTmF0aXZlKFN5bWJvbCkpe1xyXG4gICAgU3ltYm9sID0gZnVuY3Rpb24oZGVzY3JpcHRpb24pe1xyXG4gICAgICBhc3NlcnQoISh0aGlzIGluc3RhbmNlb2YgU3ltYm9sKSwgU1lNQk9MICsgJyBpcyBub3QgYSAnICsgQ09OU1RSVUNUT1IpO1xyXG4gICAgICB2YXIgdGFnID0gdWlkKGRlc2NyaXB0aW9uKVxyXG4gICAgICAgICwgc3ltID0gc2V0KGNyZWF0ZShTeW1ib2xbUFJPVE9UWVBFXSksIFRBRywgdGFnKTtcclxuICAgICAgQWxsU3ltYm9sc1t0YWddID0gc3ltO1xyXG4gICAgICBERVNDICYmIHNldHRlciAmJiBkZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90bywgdGFnLCB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgICAgaGlkZGVuKHRoaXMsIHRhZywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBzeW07XHJcbiAgICB9XHJcbiAgICBoaWRkZW4oU3ltYm9sW1BST1RPVFlQRV0sIFRPX1NUUklORywgZnVuY3Rpb24oKXtcclxuICAgICAgcmV0dXJuIHRoaXNbVEFHXTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAkZGVmaW5lKEdMT0JBTCArIFdSQVAsIHtTeW1ib2w6IFN5bWJvbH0pO1xyXG4gIFxyXG4gIHZhciBzeW1ib2xTdGF0aWNzID0ge1xyXG4gICAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXHJcbiAgICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxyXG4gICAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxyXG4gICAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9IFN5bWJvbChrZXkpO1xyXG4gICAgfSxcclxuICAgIC8vIDE5LjQuMi40IFN5bWJvbC5pdGVyYXRvclxyXG4gICAgaXRlcmF0b3I6IFNZTUJPTF9JVEVSQVRPUiB8fCBnZXRXZWxsS25vd25TeW1ib2woSVRFUkFUT1IpLFxyXG4gICAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXHJcbiAgICBrZXlGb3I6IHBhcnQuY2FsbChrZXlPZiwgU3ltYm9sUmVnaXN0cnkpLFxyXG4gICAgLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXHJcbiAgICBzcGVjaWVzOiBTWU1CT0xfU1BFQ0lFUyxcclxuICAgIC8vIDE5LjQuMi4xMyBTeW1ib2wudG9TdHJpbmdUYWdcclxuICAgIHRvU3RyaW5nVGFnOiBTWU1CT0xfVEFHID0gZ2V0V2VsbEtub3duU3ltYm9sKFRPX1NUUklOR19UQUcsIHRydWUpLFxyXG4gICAgLy8gMTkuNC4yLjE0IFN5bWJvbC51bnNjb3BhYmxlc1xyXG4gICAgdW5zY29wYWJsZXM6IFNZTUJPTF9VTlNDT1BBQkxFUyxcclxuICAgIHB1cmU6IHNhZmVTeW1ib2wsXHJcbiAgICBzZXQ6IHNldCxcclxuICAgIHVzZVNldHRlcjogZnVuY3Rpb24oKXtzZXR0ZXIgPSB0cnVlfSxcclxuICAgIHVzZVNpbXBsZTogZnVuY3Rpb24oKXtzZXR0ZXIgPSBmYWxzZX1cclxuICB9O1xyXG4gIC8vIDE5LjQuMi4yIFN5bWJvbC5oYXNJbnN0YW5jZVxyXG4gIC8vIDE5LjQuMi4zIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcclxuICAvLyAxOS40LjIuNiBTeW1ib2wubWF0Y2hcclxuICAvLyAxOS40LjIuOCBTeW1ib2wucmVwbGFjZVxyXG4gIC8vIDE5LjQuMi45IFN5bWJvbC5zZWFyY2hcclxuICAvLyAxOS40LjIuMTEgU3ltYm9sLnNwbGl0XHJcbiAgLy8gMTkuNC4yLjEyIFN5bWJvbC50b1ByaW1pdGl2ZVxyXG4gIGZvckVhY2guY2FsbChhcnJheSgnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwbGl0LHRvUHJpbWl0aXZlJyksXHJcbiAgICBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHN5bWJvbFN0YXRpY3NbaXRdID0gZ2V0V2VsbEtub3duU3ltYm9sKGl0KTtcclxuICAgIH1cclxuICApO1xyXG4gICRkZWZpbmUoU1RBVElDLCBTWU1CT0wsIHN5bWJvbFN0YXRpY3MpO1xyXG4gIFxyXG4gIHNldFRvU3RyaW5nVGFnKFN5bWJvbCwgU1lNQk9MKTtcclxuICBcclxuICAkZGVmaW5lKFNUQVRJQyArIEZPUkNFRCAqICFpc05hdGl2ZShTeW1ib2wpLCBPQkpFQ1QsIHtcclxuICAgIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXHJcbiAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHZhciBuYW1lcyA9IGdldE5hbWVzKHRvT2JqZWN0KGl0KSksIHJlc3VsdCA9IFtdLCBrZXksIGkgPSAwO1xyXG4gICAgICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSB8fCByZXN1bHQucHVzaChrZXkpO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICAgIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcclxuICAgIGdldE93blByb3BlcnR5U3ltYm9sczogZnVuY3Rpb24oaXQpe1xyXG4gICAgICB2YXIgbmFtZXMgPSBnZXROYW1lcyh0b09iamVjdChpdCkpLCByZXN1bHQgPSBbXSwga2V5LCBpID0gMDtcclxuICAgICAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSloYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICAvLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXHJcbiAgc2V0VG9TdHJpbmdUYWcoTWF0aCwgTUFUSCwgdHJ1ZSk7XHJcbiAgLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cclxuICBzZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcclxufShzYWZlU3ltYm9sKCd0YWcnKSwge30sIHt9LCB0cnVlKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2Lm9iamVjdC5zdGF0aWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgdmFyIG9iamVjdFN0YXRpYyA9IHtcclxuICAgIC8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXHJcbiAgICBhc3NpZ246IGFzc2lnbixcclxuICAgIC8vIDE5LjEuMy4xMCBPYmplY3QuaXModmFsdWUxLCB2YWx1ZTIpXHJcbiAgICBpczogZnVuY3Rpb24oeCwgeSl7XHJcbiAgICAgIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcclxuICAvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29ya3Mgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXHJcbiAgJ19fcHJvdG9fXycgaW4gT2JqZWN0UHJvdG8gJiYgZnVuY3Rpb24oYnVnZ3ksIHNldCl7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXQgPSBjdHgoY2FsbCwgZ2V0T3duRGVzY3JpcHRvcihPYmplY3RQcm90bywgJ19fcHJvdG9fXycpLnNldCwgMik7XHJcbiAgICAgIHNldCh7fSwgQXJyYXlQcm90byk7XHJcbiAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWUgfVxyXG4gICAgb2JqZWN0U3RhdGljLnNldFByb3RvdHlwZU9mID0gc2V0UHJvdG90eXBlT2YgPSBzZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPLCBwcm90byl7XHJcbiAgICAgIGFzc2VydE9iamVjdChPKTtcclxuICAgICAgYXNzZXJ0KHByb3RvID09PSBudWxsIHx8IGlzT2JqZWN0KHByb3RvKSwgcHJvdG8sIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcclxuICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcclxuICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xyXG4gICAgICByZXR1cm4gTztcclxuICAgIH1cclxuICB9KCk7XHJcbiAgJGRlZmluZShTVEFUSUMsIE9CSkVDVCwgb2JqZWN0U3RhdGljKTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYub2JqZWN0LnByb3RvdHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24odG1wKXtcclxuICAvLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcclxuICB0bXBbU1lNQk9MX1RBR10gPSBET1Q7XHJcbiAgaWYoY29mKHRtcCkgIT0gRE9UKWhpZGRlbihPYmplY3RQcm90bywgVE9fU1RSSU5HLCBmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xyXG4gIH0pO1xyXG59KHt9KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2Lm9iamVjdC5zdGF0aWNzLWFjY2VwdC1wcmltaXRpdmVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgLy8gT2JqZWN0IHN0YXRpYyBtZXRob2RzIGFjY2VwdCBwcmltaXRpdmVzXHJcbiAgZnVuY3Rpb24gd3JhcE9iamVjdE1ldGhvZChrZXksIE1PREUpe1xyXG4gICAgdmFyIGZuICA9IE9iamVjdFtrZXldXHJcbiAgICAgICwgZXhwID0gY29yZVtPQkpFQ1RdW2tleV1cclxuICAgICAgLCBmICAgPSAwXHJcbiAgICAgICwgbyAgID0ge307XHJcbiAgICBpZighZXhwIHx8IGlzTmF0aXZlKGV4cCkpe1xyXG4gICAgICBvW2tleV0gPSBNT0RFID09IDEgPyBmdW5jdGlvbihpdCl7XHJcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/IGZuKGl0KSA6IGl0O1xyXG4gICAgICB9IDogTU9ERSA9PSAyID8gZnVuY3Rpb24oaXQpe1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiB0cnVlO1xyXG4gICAgICB9IDogTU9ERSA9PSAzID8gZnVuY3Rpb24oaXQpe1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBmYWxzZTtcclxuICAgICAgfSA6IE1PREUgPT0gNCA/IGZ1bmN0aW9uKGl0LCBrZXkpe1xyXG4gICAgICAgIHJldHVybiBmbih0b09iamVjdChpdCksIGtleSk7XHJcbiAgICAgIH0gOiBmdW5jdGlvbihpdCl7XHJcbiAgICAgICAgcmV0dXJuIGZuKHRvT2JqZWN0KGl0KSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHRyeSB7IGZuKERPVCkgfVxyXG4gICAgICBjYXRjaChlKXsgZiA9IDEgfVxyXG4gICAgICAkZGVmaW5lKFNUQVRJQyArIEZPUkNFRCAqIGYsIE9CSkVDVCwgbyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2ZyZWV6ZScsIDEpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ3NlYWwnLCAxKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdwcmV2ZW50RXh0ZW5zaW9ucycsIDEpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2lzRnJvemVuJywgMik7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnaXNTZWFsZWQnLCAyKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdpc0V4dGVuc2libGUnLCAzKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCA0KTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdnZXRQcm90b3R5cGVPZicpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2tleXMnKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJyk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LmZ1bmN0aW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKE5BTUUpe1xyXG4gIC8vIDE5LjIuNC4yIG5hbWVcclxuICBOQU1FIGluIEZ1bmN0aW9uUHJvdG8gfHwgKERFU0MgJiYgZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90bywgTkFNRSwge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgbWF0Y2ggPSBTdHJpbmcodGhpcykubWF0Y2goL15cXHMqZnVuY3Rpb24gKFteIChdKikvKVxyXG4gICAgICAgICwgbmFtZSAgPSBtYXRjaCA/IG1hdGNoWzFdIDogJyc7XHJcbiAgICAgIGhhcyh0aGlzLCBOQU1FKSB8fCBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBOQU1FLCBkZXNjcmlwdG9yKDUsIG5hbWUpKTtcclxuICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9LFxyXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgIGhhcyh0aGlzLCBOQU1FKSB8fCBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBOQU1FLCBkZXNjcmlwdG9yKDAsIHZhbHVlKSk7XHJcbiAgICB9XHJcbiAgfSkpO1xyXG59KCduYW1lJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5udW1iZXIuY29uc3RydWN0b3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbk51bWJlcignMG8xJykgJiYgTnVtYmVyKCcwYjEnKSB8fCBmdW5jdGlvbihfTnVtYmVyLCBOdW1iZXJQcm90byl7XHJcbiAgZnVuY3Rpb24gdG9OdW1iZXIoaXQpe1xyXG4gICAgaWYoaXNPYmplY3QoaXQpKWl0ID0gdG9QcmltaXRpdmUoaXQpO1xyXG4gICAgaWYodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIgJiYgaXQuY2hhckNvZGVBdCgwKSA9PSA0OCl7XHJcbiAgICAgIHZhciBiaW5hcnkgPSBmYWxzZTtcclxuICAgICAgc3dpdGNoKGl0LmNoYXJDb2RlQXQoMSkpe1xyXG4gICAgICAgIGNhc2UgNjYgOiBjYXNlIDk4ICA6IGJpbmFyeSA9IHRydWU7XHJcbiAgICAgICAgY2FzZSA3OSA6IGNhc2UgMTExIDogcmV0dXJuIHBhcnNlSW50KGl0LnNsaWNlKDIpLCBiaW5hcnkgPyAyIDogOCk7XHJcbiAgICAgIH1cclxuICAgIH0gcmV0dXJuICtpdDtcclxuICB9XHJcbiAgZnVuY3Rpb24gdG9QcmltaXRpdmUoaXQpe1xyXG4gICAgdmFyIGZuLCB2YWw7XHJcbiAgICBpZihpc0Z1bmN0aW9uKGZuID0gaXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xyXG4gICAgaWYoaXNGdW5jdGlvbihmbiA9IGl0W1RPX1NUUklOR10pICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcclxuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIG51bWJlclwiKTtcclxuICB9XHJcbiAgTnVtYmVyID0gZnVuY3Rpb24gTnVtYmVyKGl0KXtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgTnVtYmVyID8gbmV3IF9OdW1iZXIodG9OdW1iZXIoaXQpKSA6IHRvTnVtYmVyKGl0KTtcclxuICB9XHJcbiAgZm9yRWFjaC5jYWxsKERFU0MgPyBnZXROYW1lcyhfTnVtYmVyKVxyXG4gIDogYXJyYXkoJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZJyksIGZ1bmN0aW9uKGtleSl7XHJcbiAgICBrZXkgaW4gTnVtYmVyIHx8IGRlZmluZVByb3BlcnR5KE51bWJlciwga2V5LCBnZXRPd25EZXNjcmlwdG9yKF9OdW1iZXIsIGtleSkpO1xyXG4gIH0pO1xyXG4gIE51bWJlcltQUk9UT1RZUEVdID0gTnVtYmVyUHJvdG87XHJcbiAgTnVtYmVyUHJvdG9bQ09OU1RSVUNUT1JdID0gTnVtYmVyO1xyXG4gIGhpZGRlbihnbG9iYWwsIE5VTUJFUiwgTnVtYmVyKTtcclxufShOdW1iZXIsIE51bWJlcltQUk9UT1RZUEVdKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2Lm51bWJlci5zdGF0aWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKGlzSW50ZWdlcil7XHJcbiAgJGRlZmluZShTVEFUSUMsIE5VTUJFUiwge1xyXG4gICAgLy8gMjAuMS4yLjEgTnVtYmVyLkVQU0lMT05cclxuICAgIEVQU0lMT046IHBvdygyLCAtNTIpLFxyXG4gICAgLy8gMjAuMS4yLjIgTnVtYmVyLmlzRmluaXRlKG51bWJlcilcclxuICAgIGlzRmluaXRlOiBmdW5jdGlvbihpdCl7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgaXQgPT0gJ251bWJlcicgJiYgaXNGaW5pdGUoaXQpO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxyXG4gICAgaXNJbnRlZ2VyOiBpc0ludGVnZXIsXHJcbiAgICAvLyAyMC4xLjIuNCBOdW1iZXIuaXNOYU4obnVtYmVyKVxyXG4gICAgaXNOYU46IHNhbWVOYU4sXHJcbiAgICAvLyAyMC4xLjIuNSBOdW1iZXIuaXNTYWZlSW50ZWdlcihudW1iZXIpXHJcbiAgICBpc1NhZmVJbnRlZ2VyOiBmdW5jdGlvbihudW1iZXIpe1xyXG4gICAgICByZXR1cm4gaXNJbnRlZ2VyKG51bWJlcikgJiYgYWJzKG51bWJlcikgPD0gTUFYX1NBRkVfSU5URUdFUjtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4xLjIuNiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxyXG4gICAgTUFYX1NBRkVfSU5URUdFUjogTUFYX1NBRkVfSU5URUdFUixcclxuICAgIC8vIDIwLjEuMi4xMCBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUlxyXG4gICAgTUlOX1NBRkVfSU5URUdFUjogLU1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAvLyAyMC4xLjIuMTIgTnVtYmVyLnBhcnNlRmxvYXQoc3RyaW5nKVxyXG4gICAgcGFyc2VGbG9hdDogcGFyc2VGbG9hdCxcclxuICAgIC8vIDIwLjEuMi4xMyBOdW1iZXIucGFyc2VJbnQoc3RyaW5nLCByYWRpeClcclxuICAgIHBhcnNlSW50OiBwYXJzZUludFxyXG4gIH0pO1xyXG4vLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcclxufShOdW1iZXIuaXNJbnRlZ2VyIHx8IGZ1bmN0aW9uKGl0KXtcclxuICByZXR1cm4gIWlzT2JqZWN0KGl0KSAmJiBpc0Zpbml0ZShpdCkgJiYgZmxvb3IoaXQpID09PSBpdDtcclxufSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5tYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEVDTUFTY3JpcHQgNiBzaGltXHJcbiFmdW5jdGlvbigpe1xyXG4gIC8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcclxuICB2YXIgRSAgICA9IE1hdGguRVxyXG4gICAgLCBleHAgID0gTWF0aC5leHBcclxuICAgICwgbG9nICA9IE1hdGgubG9nXHJcbiAgICAsIHNxcnQgPSBNYXRoLnNxcnRcclxuICAgICwgc2lnbiA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbih4KXtcclxuICAgICAgICByZXR1cm4gKHggPSAreCkgPT0gMCB8fCB4ICE9IHggPyB4IDogeCA8IDAgPyAtMSA6IDE7XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgLy8gMjAuMi4yLjUgTWF0aC5hc2luaCh4KVxyXG4gIGZ1bmN0aW9uIGFzaW5oKHgpe1xyXG4gICAgcmV0dXJuICFpc0Zpbml0ZSh4ID0gK3gpIHx8IHggPT0gMCA/IHggOiB4IDwgMCA/IC1hc2luaCgteCkgOiBsb2coeCArIHNxcnQoeCAqIHggKyAxKSk7XHJcbiAgfVxyXG4gIC8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXHJcbiAgZnVuY3Rpb24gZXhwbTEoeCl7XHJcbiAgICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiB4ID4gLTFlLTYgJiYgeCA8IDFlLTYgPyB4ICsgeCAqIHggLyAyIDogZXhwKHgpIC0gMTtcclxuICB9XHJcbiAgICBcclxuICAkZGVmaW5lKFNUQVRJQywgTUFUSCwge1xyXG4gICAgLy8gMjAuMi4yLjMgTWF0aC5hY29zaCh4KVxyXG4gICAgYWNvc2g6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gKHggPSAreCkgPCAxID8gTmFOIDogaXNGaW5pdGUoeCkgPyBsb2coeCAvIEUgKyBzcXJ0KHggKyAxKSAqIHNxcnQoeCAtIDEpIC8gRSkgKyAxIDogeDtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuNSBNYXRoLmFzaW5oKHgpXHJcbiAgICBhc2luaDogYXNpbmgsXHJcbiAgICAvLyAyMC4yLjIuNyBNYXRoLmF0YW5oKHgpXHJcbiAgICBhdGFuaDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IGxvZygoMSArIHgpIC8gKDEgLSB4KSkgLyAyO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi45IE1hdGguY2JydCh4KVxyXG4gICAgY2JydDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiBzaWduKHggPSAreCkgKiBwb3coYWJzKHgpLCAxIC8gMyk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjExIE1hdGguY2x6MzIoeClcclxuICAgIGNsejMyOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuICh4ID4+Pj0gMCkgPyAzMiAtIHhbVE9fU1RSSU5HXSgyKS5sZW5ndGggOiAzMjtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMTIgTWF0aC5jb3NoKHgpXHJcbiAgICBjb3NoOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuIChleHAoeCA9ICt4KSArIGV4cCgteCkpIC8gMjtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxyXG4gICAgZXhwbTE6IGV4cG0xLFxyXG4gICAgLy8gMjAuMi4yLjE2IE1hdGguZnJvdW5kKHgpXHJcbiAgICAvLyBUT0RPOiBmYWxsYmFjayBmb3IgSUU5LVxyXG4gICAgZnJvdW5kOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW3hdKVswXTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMTcgTWF0aC5oeXBvdChbdmFsdWUxWywgdmFsdWUyWywg4oCmIF1dXSlcclxuICAgIGh5cG90OiBmdW5jdGlvbih2YWx1ZTEsIHZhbHVlMil7XHJcbiAgICAgIHZhciBzdW0gID0gMFxyXG4gICAgICAgICwgbGVuMSA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICAgICAsIGxlbjIgPSBsZW4xXHJcbiAgICAgICAgLCBhcmdzID0gQXJyYXkobGVuMSlcclxuICAgICAgICAsIGxhcmcgPSAtSW5maW5pdHlcclxuICAgICAgICAsIGFyZztcclxuICAgICAgd2hpbGUobGVuMS0tKXtcclxuICAgICAgICBhcmcgPSBhcmdzW2xlbjFdID0gK2FyZ3VtZW50c1tsZW4xXTtcclxuICAgICAgICBpZihhcmcgPT0gSW5maW5pdHkgfHwgYXJnID09IC1JbmZpbml0eSlyZXR1cm4gSW5maW5pdHk7XHJcbiAgICAgICAgaWYoYXJnID4gbGFyZylsYXJnID0gYXJnO1xyXG4gICAgICB9XHJcbiAgICAgIGxhcmcgPSBhcmcgfHwgMTtcclxuICAgICAgd2hpbGUobGVuMi0tKXN1bSArPSBwb3coYXJnc1tsZW4yXSAvIGxhcmcsIDIpO1xyXG4gICAgICByZXR1cm4gbGFyZyAqIHNxcnQoc3VtKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMTggTWF0aC5pbXVsKHgsIHkpXHJcbiAgICBpbXVsOiBmdW5jdGlvbih4LCB5KXtcclxuICAgICAgdmFyIFVJbnQxNiA9IDB4ZmZmZlxyXG4gICAgICAgICwgeG4gPSAreFxyXG4gICAgICAgICwgeW4gPSAreVxyXG4gICAgICAgICwgeGwgPSBVSW50MTYgJiB4blxyXG4gICAgICAgICwgeWwgPSBVSW50MTYgJiB5bjtcclxuICAgICAgcmV0dXJuIDAgfCB4bCAqIHlsICsgKChVSW50MTYgJiB4biA+Pj4gMTYpICogeWwgKyB4bCAqIChVSW50MTYgJiB5biA+Pj4gMTYpIDw8IDE2ID4+PiAwKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxyXG4gICAgbG9nMXA6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gKHggPSAreCkgPiAtMWUtOCAmJiB4IDwgMWUtOCA/IHggLSB4ICogeCAvIDIgOiBsb2coMSArIHgpO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4yMSBNYXRoLmxvZzEwKHgpXHJcbiAgICBsb2cxMDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiBsb2coeCkgLyBNYXRoLkxOMTA7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjIyIE1hdGgubG9nMih4KVxyXG4gICAgbG9nMjogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiBsb2coeCkgLyBNYXRoLkxOMjtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXHJcbiAgICBzaWduOiBzaWduLFxyXG4gICAgLy8gMjAuMi4yLjMwIE1hdGguc2luaCh4KVxyXG4gICAgc2luaDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiAoYWJzKHggPSAreCkgPCAxKSA/IChleHBtMSh4KSAtIGV4cG0xKC14KSkgLyAyIDogKGV4cCh4IC0gMSkgLSBleHAoLXggLSAxKSkgKiAoRSAvIDIpO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4zMyBNYXRoLnRhbmgoeClcclxuICAgIHRhbmg6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICB2YXIgYSA9IGV4cG0xKHggPSAreClcclxuICAgICAgICAsIGIgPSBleHBtMSgteCk7XHJcbiAgICAgIHJldHVybiBhID09IEluZmluaXR5ID8gMSA6IGIgPT0gSW5maW5pdHkgPyAtMSA6IChhIC0gYikgLyAoZXhwKHgpICsgZXhwKC14KSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjM0IE1hdGgudHJ1bmMoeClcclxuICAgIHRydW5jOiB0cnVuY1xyXG4gIH0pO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5zdHJpbmcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihmcm9tQ2hhckNvZGUpe1xyXG4gIGZ1bmN0aW9uIGFzc2VydE5vdFJlZ0V4cChpdCl7XHJcbiAgICBpZihjb2YoaXQpID09IFJFR0VYUCl0aHJvdyBUeXBlRXJyb3IoKTtcclxuICB9XHJcbiAgXHJcbiAgJGRlZmluZShTVEFUSUMsIFNUUklORywge1xyXG4gICAgLy8gMjEuMS4yLjIgU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cylcclxuICAgIGZyb21Db2RlUG9pbnQ6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICB2YXIgcmVzID0gW11cclxuICAgICAgICAsIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICAgICAsIGkgICA9IDBcclxuICAgICAgICAsIGNvZGVcclxuICAgICAgd2hpbGUobGVuID4gaSl7XHJcbiAgICAgICAgY29kZSA9ICthcmd1bWVudHNbaSsrXTtcclxuICAgICAgICBpZih0b0luZGV4KGNvZGUsIDB4MTBmZmZmKSAhPT0gY29kZSl0aHJvdyBSYW5nZUVycm9yKGNvZGUgKyAnIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnQnKTtcclxuICAgICAgICByZXMucHVzaChjb2RlIDwgMHgxMDAwMFxyXG4gICAgICAgICAgPyBmcm9tQ2hhckNvZGUoY29kZSlcclxuICAgICAgICAgIDogZnJvbUNoYXJDb2RlKCgoY29kZSAtPSAweDEwMDAwKSA+PiAxMCkgKyAweGQ4MDAsIGNvZGUgJSAweDQwMCArIDB4ZGMwMClcclxuICAgICAgICApO1xyXG4gICAgICB9IHJldHVybiByZXMuam9pbignJyk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjEuMS4yLjQgU3RyaW5nLnJhdyhjYWxsU2l0ZSwgLi4uc3Vic3RpdHV0aW9ucylcclxuICAgIHJhdzogZnVuY3Rpb24oY2FsbFNpdGUpe1xyXG4gICAgICB2YXIgcmF3ID0gdG9PYmplY3QoY2FsbFNpdGUucmF3KVxyXG4gICAgICAgICwgbGVuID0gdG9MZW5ndGgocmF3Lmxlbmd0aClcclxuICAgICAgICAsIHNsbiA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICAgICAgICAsIHJlcyA9IFtdXHJcbiAgICAgICAgLCBpICAgPSAwO1xyXG4gICAgICB3aGlsZShsZW4gPiBpKXtcclxuICAgICAgICByZXMucHVzaChTdHJpbmcocmF3W2krK10pKTtcclxuICAgICAgICBpZihpIDwgc2xuKXJlcy5wdXNoKFN0cmluZyhhcmd1bWVudHNbaV0pKTtcclxuICAgICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gICRkZWZpbmUoUFJPVE8sIFNUUklORywge1xyXG4gICAgLy8gMjEuMS4zLjMgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdChwb3MpXHJcbiAgICBjb2RlUG9pbnRBdDogY3JlYXRlUG9pbnRBdChmYWxzZSksXHJcbiAgICAvLyAyMS4xLjMuNiBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKHNlYXJjaFN0cmluZyBbLCBlbmRQb3NpdGlvbl0pXHJcbiAgICBlbmRzV2l0aDogZnVuY3Rpb24oc2VhcmNoU3RyaW5nIC8qLCBlbmRQb3NpdGlvbiA9IEBsZW5ndGggKi8pe1xyXG4gICAgICBhc3NlcnROb3RSZWdFeHAoc2VhcmNoU3RyaW5nKTtcclxuICAgICAgdmFyIHRoYXQgPSBTdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgICAsIGVuZFBvc2l0aW9uID0gYXJndW1lbnRzWzFdXHJcbiAgICAgICAgLCBsZW4gPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aClcclxuICAgICAgICAsIGVuZCA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBtaW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pO1xyXG4gICAgICBzZWFyY2hTdHJpbmcgKz0gJyc7XHJcbiAgICAgIHJldHVybiB0aGF0LnNsaWNlKGVuZCAtIHNlYXJjaFN0cmluZy5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaFN0cmluZztcclxuICAgIH0sXHJcbiAgICAvLyAyMS4xLjMuNyBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24gPSAwKVxyXG4gICAgaW5jbHVkZXM6IGZ1bmN0aW9uKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcclxuICAgICAgYXNzZXJ0Tm90UmVnRXhwKHNlYXJjaFN0cmluZyk7XHJcbiAgICAgIHJldHVybiAhIX5TdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSkuaW5kZXhPZihzZWFyY2hTdHJpbmcsIGFyZ3VtZW50c1sxXSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjEuMS4zLjEzIFN0cmluZy5wcm90b3R5cGUucmVwZWF0KGNvdW50KVxyXG4gICAgcmVwZWF0OiBmdW5jdGlvbihjb3VudCl7XHJcbiAgICAgIHZhciBzdHIgPSBTdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgICAsIHJlcyA9ICcnXHJcbiAgICAgICAgLCBuICAgPSB0b0ludGVnZXIoY291bnQpO1xyXG4gICAgICBpZigwID4gbiB8fCBuID09IEluZmluaXR5KXRocm93IFJhbmdlRXJyb3IoXCJDb3VudCBjYW4ndCBiZSBuZWdhdGl2ZVwiKTtcclxuICAgICAgZm9yKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpaWYobiAmIDEpcmVzICs9IHN0cjtcclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0sXHJcbiAgICAvLyAyMS4xLjMuMTggU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKHNlYXJjaFN0cmluZyBbLCBwb3NpdGlvbiBdKVxyXG4gICAgc3RhcnRzV2l0aDogZnVuY3Rpb24oc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xyXG4gICAgICBhc3NlcnROb3RSZWdFeHAoc2VhcmNoU3RyaW5nKTtcclxuICAgICAgdmFyIHRoYXQgID0gU3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICAgLCBpbmRleCA9IHRvTGVuZ3RoKG1pbihhcmd1bWVudHNbMV0sIHRoYXQubGVuZ3RoKSk7XHJcbiAgICAgIHNlYXJjaFN0cmluZyArPSAnJztcclxuICAgICAgcmV0dXJuIHRoYXQuc2xpY2UoaW5kZXgsIGluZGV4ICsgc2VhcmNoU3RyaW5nLmxlbmd0aCkgPT09IHNlYXJjaFN0cmluZztcclxuICAgIH1cclxuICB9KTtcclxufShTdHJpbmcuZnJvbUNoYXJDb2RlKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LmFycmF5LnN0YXRpY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgJGRlZmluZShTVEFUSUMgKyBGT1JDRUQgKiBjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKEFycmF5LmZyb20pLCBBUlJBWSwge1xyXG4gICAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgZnJvbTogZnVuY3Rpb24oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xyXG4gICAgICB2YXIgTyAgICAgICA9IE9iamVjdChhc3NlcnREZWZpbmVkKGFycmF5TGlrZSkpXHJcbiAgICAgICAgLCBtYXBmbiAgID0gYXJndW1lbnRzWzFdXHJcbiAgICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICwgZiAgICAgICA9IG1hcHBpbmcgPyBjdHgobWFwZm4sIGFyZ3VtZW50c1syXSwgMikgOiB1bmRlZmluZWRcclxuICAgICAgICAsIGluZGV4ICAgPSAwXHJcbiAgICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcDtcclxuICAgICAgaWYoaXNJdGVyYWJsZShPKSl7XHJcbiAgICAgICAgcmVzdWx0ID0gbmV3IChnZW5lcmljKHRoaXMsIEFycmF5KSk7XHJcbiAgICAgICAgc2FmZUl0ZXJDbG9zZShmdW5jdGlvbihpdGVyYXRvcil7XHJcbiAgICAgICAgICBmb3IoOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xyXG4gICAgICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGYoc3RlcC52YWx1ZSwgaW5kZXgpIDogc3RlcC52YWx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCBnZXRJdGVyYXRvcihPKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gbmV3IChnZW5lcmljKHRoaXMsIEFycmF5KSkobGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpKTtcclxuICAgICAgICBmb3IoOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XHJcbiAgICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGYoT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgJGRlZmluZShTVEFUSUMsIEFSUkFZLCB7XHJcbiAgICAvLyAyMi4xLjIuMyBBcnJheS5vZiggLi4uaXRlbXMpXHJcbiAgICBvZjogZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XHJcbiAgICAgIHZhciBpbmRleCAgPSAwXHJcbiAgICAgICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICAgLCByZXN1bHQgPSBuZXcgKGdlbmVyaWModGhpcywgQXJyYXkpKShsZW5ndGgpO1xyXG4gICAgICB3aGlsZShsZW5ndGggPiBpbmRleClyZXN1bHRbaW5kZXhdID0gYXJndW1lbnRzW2luZGV4KytdO1xyXG4gICAgICByZXN1bHQubGVuZ3RoID0gbGVuZ3RoO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIHNldFNwZWNpZXMoQXJyYXkpO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5hcnJheS5wcm90b3R5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbigpe1xyXG4gICRkZWZpbmUoUFJPVE8sIEFSUkFZLCB7XHJcbiAgICAvLyAyMi4xLjMuMyBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQgPSB0aGlzLmxlbmd0aClcclxuICAgIGNvcHlXaXRoaW46IGZ1bmN0aW9uKHRhcmdldCAvKiA9IDAgKi8sIHN0YXJ0IC8qID0gMCwgZW5kID0gQGxlbmd0aCAqLyl7XHJcbiAgICAgIHZhciBPICAgICA9IE9iamVjdChhc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAgICwgbGVuICAgPSB0b0xlbmd0aChPLmxlbmd0aClcclxuICAgICAgICAsIHRvICAgID0gdG9JbmRleCh0YXJnZXQsIGxlbilcclxuICAgICAgICAsIGZyb20gID0gdG9JbmRleChzdGFydCwgbGVuKVxyXG4gICAgICAgICwgZW5kICAgPSBhcmd1bWVudHNbMl1cclxuICAgICAgICAsIGZpbiAgID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB0b0luZGV4KGVuZCwgbGVuKVxyXG4gICAgICAgICwgY291bnQgPSBtaW4oZmluIC0gZnJvbSwgbGVuIC0gdG8pXHJcbiAgICAgICAgLCBpbmMgICA9IDE7XHJcbiAgICAgIGlmKGZyb20gPCB0byAmJiB0byA8IGZyb20gKyBjb3VudCl7XHJcbiAgICAgICAgaW5jICA9IC0xO1xyXG4gICAgICAgIGZyb20gPSBmcm9tICsgY291bnQgLSAxO1xyXG4gICAgICAgIHRvICAgPSB0byArIGNvdW50IC0gMTtcclxuICAgICAgfVxyXG4gICAgICB3aGlsZShjb3VudC0tID4gMCl7XHJcbiAgICAgICAgaWYoZnJvbSBpbiBPKU9bdG9dID0gT1tmcm9tXTtcclxuICAgICAgICBlbHNlIGRlbGV0ZSBPW3RvXTtcclxuICAgICAgICB0byArPSBpbmM7XHJcbiAgICAgICAgZnJvbSArPSBpbmM7XHJcbiAgICAgIH0gcmV0dXJuIE87XHJcbiAgICB9LFxyXG4gICAgLy8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXHJcbiAgICBmaWxsOiBmdW5jdGlvbih2YWx1ZSAvKiwgc3RhcnQgPSAwLCBlbmQgPSBAbGVuZ3RoICovKXtcclxuICAgICAgdmFyIE8gICAgICA9IE9iamVjdChhc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGFyZ3VtZW50c1sxXSwgbGVuZ3RoKVxyXG4gICAgICAgICwgZW5kICAgID0gYXJndW1lbnRzWzJdXHJcbiAgICAgICAgLCBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvSW5kZXgoZW5kLCBsZW5ndGgpO1xyXG4gICAgICB3aGlsZShlbmRQb3MgPiBpbmRleClPW2luZGV4KytdID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiBPO1xyXG4gICAgfSxcclxuICAgIC8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxuICAgIGZpbmQ6IGNyZWF0ZUFycmF5TWV0aG9kKDUpLFxyXG4gICAgLy8gMjIuMS4zLjkgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXHJcbiAgICBmaW5kSW5kZXg6IGNyZWF0ZUFycmF5TWV0aG9kKDYpXHJcbiAgfSk7XHJcbiAgXHJcbiAgaWYoZnJhbWV3b3JrKXtcclxuICAgIC8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cclxuICAgIGZvckVhY2guY2FsbChhcnJheSgnZmluZCxmaW5kSW5kZXgsZmlsbCxjb3B5V2l0aGluLGVudHJpZXMsa2V5cyx2YWx1ZXMnKSwgZnVuY3Rpb24oaXQpe1xyXG4gICAgICBBcnJheVVuc2NvcGFibGVzW2l0XSA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIFNZTUJPTF9VTlNDT1BBQkxFUyBpbiBBcnJheVByb3RvIHx8IGhpZGRlbihBcnJheVByb3RvLCBTWU1CT0xfVU5TQ09QQUJMRVMsIEFycmF5VW5zY29wYWJsZXMpO1xyXG4gIH1cclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYuaXRlcmF0b3JzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oYXQpe1xyXG4gIC8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcclxuICAvLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxyXG4gIC8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcclxuICAvLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcclxuICBkZWZpbmVTdGRJdGVyYXRvcnMoQXJyYXksIEFSUkFZLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XHJcbiAgICBzZXQodGhpcywgSVRFUiwge286IHRvT2JqZWN0KGl0ZXJhdGVkKSwgaTogMCwgazoga2luZH0pO1xyXG4gIC8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxyXG4gIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaXRlciAgPSB0aGlzW0lURVJdXHJcbiAgICAgICwgTyAgICAgPSBpdGVyLm9cclxuICAgICAgLCBraW5kICA9IGl0ZXIua1xyXG4gICAgICAsIGluZGV4ID0gaXRlci5pKys7XHJcbiAgICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XHJcbiAgICAgIGl0ZXIubyA9IHVuZGVmaW5lZDtcclxuICAgICAgcmV0dXJuIGl0ZXJSZXN1bHQoMSk7XHJcbiAgICB9XHJcbiAgICBpZihraW5kID09IEtFWSkgIHJldHVybiBpdGVyUmVzdWx0KDAsIGluZGV4KTtcclxuICAgIGlmKGtpbmQgPT0gVkFMVUUpcmV0dXJuIGl0ZXJSZXN1bHQoMCwgT1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlclJlc3VsdCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XHJcbiAgfSwgVkFMVUUpO1xyXG4gIFxyXG4gIC8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcclxuICBJdGVyYXRvcnNbQVJHVU1FTlRTXSA9IEl0ZXJhdG9yc1tBUlJBWV07XHJcbiAgXHJcbiAgLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxyXG4gIGRlZmluZVN0ZEl0ZXJhdG9ycyhTdHJpbmcsIFNUUklORywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xyXG4gICAgc2V0KHRoaXMsIElURVIsIHtvOiBTdHJpbmcoaXRlcmF0ZWQpLCBpOiAwfSk7XHJcbiAgLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxyXG4gIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaXRlciAgPSB0aGlzW0lURVJdXHJcbiAgICAgICwgTyAgICAgPSBpdGVyLm9cclxuICAgICAgLCBpbmRleCA9IGl0ZXIuaVxyXG4gICAgICAsIHBvaW50O1xyXG4gICAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIGl0ZXJSZXN1bHQoMSk7XHJcbiAgICBwb2ludCA9IGF0LmNhbGwoTywgaW5kZXgpO1xyXG4gICAgaXRlci5pICs9IHBvaW50Lmxlbmd0aDtcclxuICAgIHJldHVybiBpdGVyUmVzdWx0KDAsIHBvaW50KTtcclxuICB9KTtcclxufShjcmVhdGVQb2ludEF0KHRydWUpKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LnJlZ2V4cCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuREVTQyAmJiAhZnVuY3Rpb24oUmVnRXhwUHJvdG8sIF9SZWdFeHApeyAgXHJcbiAgLy8gUmVnRXhwIGFsbG93cyBhIHJlZ2V4IHdpdGggZmxhZ3MgYXMgdGhlIHBhdHRlcm5cclxuICBpZighZnVuY3Rpb24oKXt0cnl7cmV0dXJuIFJlZ0V4cCgvYS9nLCAnaScpID09ICcvYS9pJ31jYXRjaChlKXt9fSgpKXtcclxuICAgIFJlZ0V4cCA9IGZ1bmN0aW9uIFJlZ0V4cChwYXR0ZXJuLCBmbGFncyl7XHJcbiAgICAgIHJldHVybiBuZXcgX1JlZ0V4cChjb2YocGF0dGVybikgPT0gUkVHRVhQICYmIGZsYWdzICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IHBhdHRlcm4uc291cmNlIDogcGF0dGVybiwgZmxhZ3MpO1xyXG4gICAgfVxyXG4gICAgZm9yRWFjaC5jYWxsKGdldE5hbWVzKF9SZWdFeHApLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBrZXkgaW4gUmVnRXhwIHx8IGRlZmluZVByb3BlcnR5KFJlZ0V4cCwga2V5LCB7XHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIF9SZWdFeHBba2V5XSB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24oaXQpeyBfUmVnRXhwW2tleV0gPSBpdCB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBSZWdFeHBQcm90b1tDT05TVFJVQ1RPUl0gPSBSZWdFeHA7XHJcbiAgICBSZWdFeHBbUFJPVE9UWVBFXSA9IFJlZ0V4cFByb3RvO1xyXG4gICAgaGlkZGVuKGdsb2JhbCwgUkVHRVhQLCBSZWdFeHApO1xyXG4gIH1cclxuICBcclxuICAvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXHJcbiAgaWYoLy4vZy5mbGFncyAhPSAnZycpZGVmaW5lUHJvcGVydHkoUmVnRXhwUHJvdG8sICdmbGFncycsIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogY3JlYXRlUmVwbGFjZXIoL14uKlxcLyhcXHcqKSQvLCAnJDEnKVxyXG4gIH0pO1xyXG4gIFxyXG4gIHNldFNwZWNpZXMoUmVnRXhwKTtcclxufShSZWdFeHBbUFJPVE9UWVBFXSwgUmVnRXhwKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogd2ViLmltbWVkaWF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gc2V0SW1tZWRpYXRlIHNoaW1cclxuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgZWxzZTpcclxuaXNGdW5jdGlvbihzZXRJbW1lZGlhdGUpICYmIGlzRnVuY3Rpb24oY2xlYXJJbW1lZGlhdGUpIHx8IGZ1bmN0aW9uKE9OUkVBRFlTVEFURUNIQU5HRSl7XHJcbiAgdmFyIHBvc3RNZXNzYWdlICAgICAgPSBnbG9iYWwucG9zdE1lc3NhZ2VcclxuICAgICwgYWRkRXZlbnRMaXN0ZW5lciA9IGdsb2JhbC5hZGRFdmVudExpc3RlbmVyXHJcbiAgICAsIE1lc3NhZ2VDaGFubmVsICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcclxuICAgICwgY291bnRlciAgICAgICAgICA9IDBcclxuICAgICwgcXVldWUgICAgICAgICAgICA9IHt9XHJcbiAgICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xyXG4gIHNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uKGZuKXtcclxuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xyXG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcclxuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xyXG4gICAgICBpbnZva2UoaXNGdW5jdGlvbihmbikgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XHJcbiAgICB9XHJcbiAgICBkZWZlcihjb3VudGVyKTtcclxuICAgIHJldHVybiBjb3VudGVyO1xyXG4gIH1cclxuICBjbGVhckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGlkKXtcclxuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJ1bihpZCl7XHJcbiAgICBpZihoYXMocXVldWUsIGlkKSl7XHJcbiAgICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcclxuICAgICAgZGVsZXRlIHF1ZXVlW2lkXTtcclxuICAgICAgZm4oKTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gbGlzdG5lcihldmVudCl7XHJcbiAgICBydW4oZXZlbnQuZGF0YSk7XHJcbiAgfVxyXG4gIC8vIE5vZGUuanMgMC44LVxyXG4gIGlmKE5PREUpe1xyXG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XHJcbiAgICAgIG5leHRUaWNrKHBhcnQuY2FsbChydW4sIGlkKSk7XHJcbiAgICB9XHJcbiAgLy8gTW9kZXJuIGJyb3dzZXJzLCBza2lwIGltcGxlbWVudGF0aW9uIGZvciBXZWJXb3JrZXJzXHJcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgb2JqZWN0XHJcbiAgfSBlbHNlIGlmKGFkZEV2ZW50TGlzdGVuZXIgJiYgaXNGdW5jdGlvbihwb3N0TWVzc2FnZSkgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcclxuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xyXG4gICAgICBwb3N0TWVzc2FnZShpZCwgJyonKTtcclxuICAgIH1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0bmVyLCBmYWxzZSk7XHJcbiAgLy8gV2ViV29ya2Vyc1xyXG4gIH0gZWxzZSBpZihpc0Z1bmN0aW9uKE1lc3NhZ2VDaGFubmVsKSl7XHJcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xyXG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XHJcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RuZXI7XHJcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcclxuICAvLyBJRTgtXHJcbiAgfSBlbHNlIGlmKGRvY3VtZW50ICYmIE9OUkVBRFlTVEFURUNIQU5HRSBpbiBkb2N1bWVudFtDUkVBVEVfRUxFTUVOVF0oJ3NjcmlwdCcpKXtcclxuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xyXG4gICAgICBodG1sLmFwcGVuZENoaWxkKGRvY3VtZW50W0NSRUFURV9FTEVNRU5UXSgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgcnVuKGlkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXHJcbiAgfSBlbHNlIHtcclxuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xyXG4gICAgICBzZXRUaW1lb3V0KHJ1biwgMCwgaWQpO1xyXG4gICAgfVxyXG4gIH1cclxufSgnb25yZWFkeXN0YXRlY2hhbmdlJyk7XHJcbiRkZWZpbmUoR0xPQkFMICsgQklORCwge1xyXG4gIHNldEltbWVkaWF0ZTogICBzZXRJbW1lZGlhdGUsXHJcbiAgY2xlYXJJbW1lZGlhdGU6IGNsZWFySW1tZWRpYXRlXHJcbn0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYucHJvbWlzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBFUzYgcHJvbWlzZXMgc2hpbVxyXG4vLyBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZ2V0aWZ5L25hdGl2ZS1wcm9taXNlLW9ubHkvXHJcbiFmdW5jdGlvbihQcm9taXNlLCB0ZXN0KXtcclxuICBpc0Z1bmN0aW9uKFByb21pc2UpICYmIGlzRnVuY3Rpb24oUHJvbWlzZS5yZXNvbHZlKVxyXG4gICYmIFByb21pc2UucmVzb2x2ZSh0ZXN0ID0gbmV3IFByb21pc2UoZnVuY3Rpb24oKXt9KSkgPT0gdGVzdFxyXG4gIHx8IGZ1bmN0aW9uKGFzYXAsIFJFQ09SRCl7XHJcbiAgICBmdW5jdGlvbiBpc1RoZW5hYmxlKGl0KXtcclxuICAgICAgdmFyIHRoZW47XHJcbiAgICAgIGlmKGlzT2JqZWN0KGl0KSl0aGVuID0gaXQudGhlbjtcclxuICAgICAgcmV0dXJuIGlzRnVuY3Rpb24odGhlbikgPyB0aGVuIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHByb21pc2Upe1xyXG4gICAgICB2YXIgcmVjb3JkID0gcHJvbWlzZVtSRUNPUkRdXHJcbiAgICAgICAgLCBjaGFpbiAgPSByZWNvcmQuY1xyXG4gICAgICAgICwgaSAgICAgID0gMFxyXG4gICAgICAgICwgcmVhY3Q7XHJcbiAgICAgIGlmKHJlY29yZC5oKXJldHVybiB0cnVlO1xyXG4gICAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcclxuICAgICAgICByZWFjdCA9IGNoYWluW2krK107XHJcbiAgICAgICAgaWYocmVhY3QuZmFpbCB8fCBoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHJlYWN0LlApKXJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBub3RpZnkocmVjb3JkLCByZWplY3Qpe1xyXG4gICAgICB2YXIgY2hhaW4gPSByZWNvcmQuYztcclxuICAgICAgaWYocmVqZWN0IHx8IGNoYWluLmxlbmd0aClhc2FwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHByb21pc2UgPSByZWNvcmQucFxyXG4gICAgICAgICAgLCB2YWx1ZSAgID0gcmVjb3JkLnZcclxuICAgICAgICAgICwgb2sgICAgICA9IHJlY29yZC5zID09IDFcclxuICAgICAgICAgICwgaSAgICAgICA9IDA7XHJcbiAgICAgICAgaWYocmVqZWN0ICYmICFoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHByb21pc2UpKXtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYoIWhhbmRsZWRSZWplY3Rpb25Pckhhc09uUmVqZWN0ZWQocHJvbWlzZSkpe1xyXG4gICAgICAgICAgICAgIGlmKE5PREUpe1xyXG4gICAgICAgICAgICAgICAgaWYoIXByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpKXtcclxuICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBub2RlLmpzIGJlaGF2aW9yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmKGlzRnVuY3Rpb24oY29uc29sZS5lcnJvcikpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSwgMWUzKTtcclxuICAgICAgICB9IGVsc2Ugd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSkhZnVuY3Rpb24ocmVhY3Qpe1xyXG4gICAgICAgICAgdmFyIGNiID0gb2sgPyByZWFjdC5vayA6IHJlYWN0LmZhaWxcclxuICAgICAgICAgICAgLCByZXQsIHRoZW47XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZihjYil7XHJcbiAgICAgICAgICAgICAgaWYoIW9rKXJlY29yZC5oID0gdHJ1ZTtcclxuICAgICAgICAgICAgICByZXQgPSBjYiA9PT0gdHJ1ZSA/IHZhbHVlIDogY2IodmFsdWUpO1xyXG4gICAgICAgICAgICAgIGlmKHJldCA9PT0gcmVhY3QuUCl7XHJcbiAgICAgICAgICAgICAgICByZWFjdC5yZWooVHlwZUVycm9yKFBST01JU0UgKyAnLWNoYWluIGN5Y2xlJykpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXQpKXtcclxuICAgICAgICAgICAgICAgIHRoZW4uY2FsbChyZXQsIHJlYWN0LnJlcywgcmVhY3QucmVqKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgcmVhY3QucmVzKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSByZWFjdC5yZWoodmFsdWUpO1xyXG4gICAgICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICByZWFjdC5yZWooZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KGNoYWluW2krK10pO1xyXG4gICAgICAgIGNoYWluLmxlbmd0aCA9IDA7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSl7XHJcbiAgICAgIHZhciByZWNvcmQgPSB0aGlzXHJcbiAgICAgICAgLCB0aGVuLCB3cmFwcGVyO1xyXG4gICAgICBpZihyZWNvcmQuZClyZXR1cm47XHJcbiAgICAgIHJlY29yZC5kID0gdHJ1ZTtcclxuICAgICAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkOyAvLyB1bndyYXBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xyXG4gICAgICAgICAgd3JhcHBlciA9IHtyOiByZWNvcmQsIGQ6IGZhbHNlfTsgLy8gd3JhcFxyXG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgocmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eChyZWplY3QsIHdyYXBwZXIsIDEpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVjb3JkLnYgPSB2YWx1ZTtcclxuICAgICAgICAgIHJlY29yZC5zID0gMTtcclxuICAgICAgICAgIG5vdGlmeShyZWNvcmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHJlamVjdC5jYWxsKHdyYXBwZXIgfHwge3I6IHJlY29yZCwgZDogZmFsc2V9LCBlcnIpOyAvLyB3cmFwXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSl7XHJcbiAgICAgIHZhciByZWNvcmQgPSB0aGlzO1xyXG4gICAgICBpZihyZWNvcmQuZClyZXR1cm47XHJcbiAgICAgIHJlY29yZC5kID0gdHJ1ZTtcclxuICAgICAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkOyAvLyB1bndyYXBcclxuICAgICAgcmVjb3JkLnYgPSB2YWx1ZTtcclxuICAgICAgcmVjb3JkLnMgPSAyO1xyXG4gICAgICBub3RpZnkocmVjb3JkLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdldENvbnN0cnVjdG9yKEMpe1xyXG4gICAgICB2YXIgUyA9IGFzc2VydE9iamVjdChDKVtTWU1CT0xfU1BFQ0lFU107XHJcbiAgICAgIHJldHVybiBTICE9IHVuZGVmaW5lZCA/IFMgOiBDO1xyXG4gICAgfVxyXG4gICAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcclxuICAgIFByb21pc2UgPSBmdW5jdGlvbihleGVjdXRvcil7XHJcbiAgICAgIGFzc2VydEZ1bmN0aW9uKGV4ZWN1dG9yKTtcclxuICAgICAgYXNzZXJ0SW5zdGFuY2UodGhpcywgUHJvbWlzZSwgUFJPTUlTRSk7XHJcbiAgICAgIHZhciByZWNvcmQgPSB7XHJcbiAgICAgICAgcDogdGhpcywgICAgICAvLyBwcm9taXNlXHJcbiAgICAgICAgYzogW10sICAgICAgICAvLyBjaGFpblxyXG4gICAgICAgIHM6IDAsICAgICAgICAgLy8gc3RhdGVcclxuICAgICAgICBkOiBmYWxzZSwgICAgIC8vIGRvbmVcclxuICAgICAgICB2OiB1bmRlZmluZWQsIC8vIHZhbHVlXHJcbiAgICAgICAgaDogZmFsc2UgICAgICAvLyBoYW5kbGVkIHJlamVjdGlvblxyXG4gICAgICB9O1xyXG4gICAgICBoaWRkZW4odGhpcywgUkVDT1JELCByZWNvcmQpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGV4ZWN1dG9yKGN0eChyZXNvbHZlLCByZWNvcmQsIDEpLCBjdHgocmVqZWN0LCByZWNvcmQsIDEpKTtcclxuICAgICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIHJlamVjdC5jYWxsKHJlY29yZCwgZXJyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXNzaWduSGlkZGVuKFByb21pc2VbUFJPVE9UWVBFXSwge1xyXG4gICAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxyXG4gICAgICB0aGVuOiBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XHJcbiAgICAgICAgdmFyIFMgPSBhc3NlcnRPYmplY3QoYXNzZXJ0T2JqZWN0KHRoaXMpW0NPTlNUUlVDVE9SXSlbU1lNQk9MX1NQRUNJRVNdO1xyXG4gICAgICAgIHZhciByZWFjdCA9IHtcclxuICAgICAgICAgIG9rOiAgIGlzRnVuY3Rpb24ob25GdWxmaWxsZWQpID8gb25GdWxmaWxsZWQgOiB0cnVlLFxyXG4gICAgICAgICAgZmFpbDogaXNGdW5jdGlvbihvblJlamVjdGVkKSAgPyBvblJlamVjdGVkICA6IGZhbHNlXHJcbiAgICAgICAgfSAsIFAgPSByZWFjdC5QID0gbmV3IChTICE9IHVuZGVmaW5lZCA/IFMgOiBQcm9taXNlKShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgcmVhY3QucmVzID0gYXNzZXJ0RnVuY3Rpb24ocmVzb2x2ZSk7XHJcbiAgICAgICAgICByZWFjdC5yZWogPSBhc3NlcnRGdW5jdGlvbihyZWplY3QpO1xyXG4gICAgICAgIH0pLCByZWNvcmQgPSB0aGlzW1JFQ09SRF07XHJcbiAgICAgICAgcmVjb3JkLmMucHVzaChyZWFjdCk7XHJcbiAgICAgICAgcmVjb3JkLnMgJiYgbm90aWZ5KHJlY29yZCk7XHJcbiAgICAgICAgcmV0dXJuIFA7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXHJcbiAgICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBhc3NpZ25IaWRkZW4oUHJvbWlzZSwge1xyXG4gICAgICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcclxuICAgICAgYWxsOiBmdW5jdGlvbihpdGVyYWJsZSl7XHJcbiAgICAgICAgdmFyIFByb21pc2UgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKVxyXG4gICAgICAgICAgLCB2YWx1ZXMgID0gW107XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIHB1c2gsIHZhbHVlcyk7XHJcbiAgICAgICAgICB2YXIgcmVtYWluaW5nID0gdmFsdWVzLmxlbmd0aFxyXG4gICAgICAgICAgICAsIHJlc3VsdHMgICA9IEFycmF5KHJlbWFpbmluZyk7XHJcbiAgICAgICAgICBpZihyZW1haW5pbmcpZm9yRWFjaC5jYWxsKHZhbHVlcywgZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpe1xyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XHJcbiAgICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICB9LCByZWplY3QpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlbHNlIHJlc29sdmUocmVzdWx0cyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcclxuICAgICAgcmFjZTogZnVuY3Rpb24oaXRlcmFibGUpe1xyXG4gICAgICAgIHZhciBQcm9taXNlID0gZ2V0Q29uc3RydWN0b3IodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xyXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUocHJvbWlzZSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXHJcbiAgICAgIHJlamVjdDogZnVuY3Rpb24ocil7XHJcbiAgICAgICAgcmV0dXJuIG5ldyAoZ2V0Q29uc3RydWN0b3IodGhpcykpKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgICByZWplY3Qocik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxyXG4gICAgICByZXNvbHZlOiBmdW5jdGlvbih4KXtcclxuICAgICAgICByZXR1cm4gaXNPYmplY3QoeCkgJiYgUkVDT1JEIGluIHggJiYgZ2V0UHJvdG90eXBlT2YoeCkgPT09IHRoaXNbUFJPVE9UWVBFXVxyXG4gICAgICAgICAgPyB4IDogbmV3IChnZXRDb25zdHJ1Y3Rvcih0aGlzKSkoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgICAgcmVzb2x2ZSh4KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KG5leHRUaWNrIHx8IHNldEltbWVkaWF0ZSwgc2FmZVN5bWJvbCgncmVjb3JkJykpO1xyXG4gIHNldFRvU3RyaW5nVGFnKFByb21pc2UsIFBST01JU0UpO1xyXG4gIHNldFNwZWNpZXMoUHJvbWlzZSk7XHJcbiAgJGRlZmluZShHTE9CQUwgKyBGT1JDRUQgKiAhaXNOYXRpdmUoUHJvbWlzZSksIHtQcm9taXNlOiBQcm9taXNlfSk7XHJcbn0oZ2xvYmFsW1BST01JU0VdKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LmNvbGxlY3Rpb25zICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gRUNNQVNjcmlwdCA2IGNvbGxlY3Rpb25zIHNoaW1cclxuIWZ1bmN0aW9uKCl7XHJcbiAgdmFyIFVJRCAgID0gc2FmZVN5bWJvbCgndWlkJylcclxuICAgICwgTzEgICAgPSBzYWZlU3ltYm9sKCdPMScpXHJcbiAgICAsIFdFQUsgID0gc2FmZVN5bWJvbCgnd2VhaycpXHJcbiAgICAsIExFQUsgID0gc2FmZVN5bWJvbCgnbGVhaycpXHJcbiAgICAsIExBU1QgID0gc2FmZVN5bWJvbCgnbGFzdCcpXHJcbiAgICAsIEZJUlNUID0gc2FmZVN5bWJvbCgnZmlyc3QnKVxyXG4gICAgLCBTSVpFICA9IERFU0MgPyBzYWZlU3ltYm9sKCdzaXplJykgOiAnc2l6ZSdcclxuICAgICwgdWlkICAgPSAwXHJcbiAgICAsIHRtcCAgID0ge307XHJcbiAgXHJcbiAgZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbihDLCBOQU1FLCBtZXRob2RzLCBjb21tb25NZXRob2RzLCBpc01hcCwgaXNXZWFrKXtcclxuICAgIHZhciBBRERFUiA9IGlzTWFwID8gJ3NldCcgOiAnYWRkJ1xyXG4gICAgICAsIHByb3RvID0gQyAmJiBDW1BST1RPVFlQRV1cclxuICAgICAgLCBPICAgICA9IHt9O1xyXG4gICAgZnVuY3Rpb24gaW5pdEZyb21JdGVyYWJsZSh0aGF0LCBpdGVyYWJsZSl7XHJcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgaXNNYXAsIHRoYXRbQURERVJdLCB0aGF0KTtcclxuICAgICAgcmV0dXJuIHRoYXQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmaXhTVlooa2V5LCBjaGFpbil7XHJcbiAgICAgIHZhciBtZXRob2QgPSBwcm90b1trZXldO1xyXG4gICAgICBpZihmcmFtZXdvcmspcHJvdG9ba2V5XSA9IGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBtZXRob2QuY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpO1xyXG4gICAgICAgIHJldHVybiBjaGFpbiA/IHRoaXMgOiByZXN1bHQ7XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZighaXNOYXRpdmUoQykgfHwgIShpc1dlYWsgfHwgKCFCVUdHWV9JVEVSQVRPUlMgJiYgaGFzKHByb3RvLCBGT1JfRUFDSCkgJiYgaGFzKHByb3RvLCAnZW50cmllcycpKSkpe1xyXG4gICAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxyXG4gICAgICBDID0gaXNXZWFrXHJcbiAgICAgICAgPyBmdW5jdGlvbihpdGVyYWJsZSl7XHJcbiAgICAgICAgICAgIGFzc2VydEluc3RhbmNlKHRoaXMsIEMsIE5BTUUpO1xyXG4gICAgICAgICAgICBzZXQodGhpcywgVUlELCB1aWQrKyk7XHJcbiAgICAgICAgICAgIGluaXRGcm9tSXRlcmFibGUodGhpcywgaXRlcmFibGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDogZnVuY3Rpb24oaXRlcmFibGUpe1xyXG4gICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIGFzc2VydEluc3RhbmNlKHRoYXQsIEMsIE5BTUUpO1xyXG4gICAgICAgICAgICBzZXQodGhhdCwgTzEsIGNyZWF0ZShudWxsKSk7XHJcbiAgICAgICAgICAgIHNldCh0aGF0LCBTSVpFLCAwKTtcclxuICAgICAgICAgICAgc2V0KHRoYXQsIExBU1QsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIHNldCh0aGF0LCBGSVJTVCwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgaW5pdEZyb21JdGVyYWJsZSh0aGF0LCBpdGVyYWJsZSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICBhc3NpZ25IaWRkZW4oYXNzaWduSGlkZGVuKENbUFJPVE9UWVBFXSwgbWV0aG9kcyksIGNvbW1vbk1ldGhvZHMpO1xyXG4gICAgICBpc1dlYWsgfHwgIURFU0MgfHwgZGVmaW5lUHJvcGVydHkoQ1tQUk9UT1RZUEVdLCAnc2l6ZScsIHtnZXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIGFzc2VydERlZmluZWQodGhpc1tTSVpFXSk7XHJcbiAgICAgIH19KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBOYXRpdmUgPSBDXHJcbiAgICAgICAgLCBpbnN0ICAgPSBuZXcgQ1xyXG4gICAgICAgICwgY2hhaW4gID0gaW5zdFtBRERFUl0oaXNXZWFrID8ge30gOiAtMCwgMSlcclxuICAgICAgICAsIGJ1Z2d5WmVybztcclxuICAgICAgLy8gd3JhcCB0byBpbml0IGNvbGxlY3Rpb25zIGZyb20gaXRlcmFibGVcclxuICAgICAgaWYoY2hlY2tEYW5nZXJJdGVyQ2xvc2luZyhmdW5jdGlvbihPKXsgbmV3IEMoTykgfSkpe1xyXG4gICAgICAgIEMgPSBmdW5jdGlvbihpdGVyYWJsZSl7XHJcbiAgICAgICAgICBhc3NlcnRJbnN0YW5jZSh0aGlzLCBDLCBOQU1FKTtcclxuICAgICAgICAgIHJldHVybiBpbml0RnJvbUl0ZXJhYmxlKG5ldyBOYXRpdmUsIGl0ZXJhYmxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ1tQUk9UT1RZUEVdID0gcHJvdG87XHJcbiAgICAgICAgaWYoZnJhbWV3b3JrKXByb3RvW0NPTlNUUlVDVE9SXSA9IEM7XHJcbiAgICAgIH1cclxuICAgICAgaXNXZWFrIHx8IGluc3RbRk9SX0VBQ0hdKGZ1bmN0aW9uKHZhbCwga2V5KXtcclxuICAgICAgICBidWdneVplcm8gPSAxIC8ga2V5ID09PSAtSW5maW5pdHk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBmaXggY29udmVydGluZyAtMCBrZXkgdG8gKzBcclxuICAgICAgaWYoYnVnZ3laZXJvKXtcclxuICAgICAgICBmaXhTVlooJ2RlbGV0ZScpO1xyXG4gICAgICAgIGZpeFNWWignaGFzJyk7XHJcbiAgICAgICAgaXNNYXAgJiYgZml4U1ZaKCdnZXQnKTtcclxuICAgICAgfVxyXG4gICAgICAvLyArIGZpeCAuYWRkICYgLnNldCBmb3IgY2hhaW5pbmdcclxuICAgICAgaWYoYnVnZ3laZXJvIHx8IGNoYWluICE9PSBpbnN0KWZpeFNWWihBRERFUiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcclxuICAgIHNldFNwZWNpZXMoQyk7XHJcbiAgICBcclxuICAgIE9bTkFNRV0gPSBDO1xyXG4gICAgJGRlZmluZShHTE9CQUwgKyBXUkFQICsgRk9SQ0VEICogIWlzTmF0aXZlKEMpLCBPKTtcclxuICAgIFxyXG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXHJcbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXHJcbiAgICBpc1dlYWsgfHwgZGVmaW5lU3RkSXRlcmF0b3JzKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcclxuICAgICAgc2V0KHRoaXMsIElURVIsIHtvOiBpdGVyYXRlZCwgazoga2luZH0pO1xyXG4gICAgfSwgZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxyXG4gICAgICAgICwga2luZCAgPSBpdGVyLmtcclxuICAgICAgICAsIGVudHJ5ID0gaXRlci5sO1xyXG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcclxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XHJcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XHJcbiAgICAgIGlmKCFpdGVyLm8gfHwgIShpdGVyLmwgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IGl0ZXIub1tGSVJTVF0pKXtcclxuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxyXG4gICAgICAgIGl0ZXIubyA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gaXRlclJlc3VsdCgxKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXHJcbiAgICAgIGlmKGtpbmQgPT0gS0VZKSAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwgZW50cnkuayk7XHJcbiAgICAgIGlmKGtpbmQgPT0gVkFMVUUpcmV0dXJuIGl0ZXJSZXN1bHQoMCwgZW50cnkudik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTsgICBcclxuICAgIH0sIGlzTWFwID8gS0VZK1ZBTFVFIDogVkFMVUUsICFpc01hcCk7XHJcbiAgICBcclxuICAgIHJldHVybiBDO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBmYXN0S2V5KGl0LCBjcmVhdGUpe1xyXG4gICAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxyXG4gICAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcclxuICAgIC8vIGNhbid0IHNldCBpZCB0byBmcm96ZW4gb2JqZWN0XHJcbiAgICBpZihpc0Zyb3plbihpdCkpcmV0dXJuICdGJztcclxuICAgIGlmKCFoYXMoaXQsIFVJRCkpe1xyXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBpZFxyXG4gICAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XHJcbiAgICAgIC8vIGFkZCBtaXNzaW5nIG9iamVjdCBpZFxyXG4gICAgICBoaWRkZW4oaXQsIFVJRCwgKyt1aWQpO1xyXG4gICAgLy8gcmV0dXJuIG9iamVjdCBpZCB3aXRoIHByZWZpeFxyXG4gICAgfSByZXR1cm4gJ08nICsgaXRbVUlEXTtcclxuICB9XHJcbiAgZnVuY3Rpb24gZ2V0RW50cnkodGhhdCwga2V5KXtcclxuICAgIC8vIGZhc3QgY2FzZVxyXG4gICAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcclxuICAgIGlmKGluZGV4ICE9ICdGJylyZXR1cm4gdGhhdFtPMV1baW5kZXhdO1xyXG4gICAgLy8gZnJvemVuIG9iamVjdCBjYXNlXHJcbiAgICBmb3IoZW50cnkgPSB0aGF0W0ZJUlNUXTsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XHJcbiAgICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gZGVmKHRoYXQsIGtleSwgdmFsdWUpe1xyXG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxyXG4gICAgICAsIHByZXYsIGluZGV4O1xyXG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XHJcbiAgICBpZihlbnRyeSllbnRyeS52ID0gdmFsdWU7XHJcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhhdFtMQVNUXSA9IGVudHJ5ID0ge1xyXG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxyXG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcclxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcclxuICAgICAgICBwOiBwcmV2ID0gdGhhdFtMQVNUXSwgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcclxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxyXG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXHJcbiAgICAgIH07XHJcbiAgICAgIGlmKCF0aGF0W0ZJUlNUXSl0aGF0W0ZJUlNUXSA9IGVudHJ5O1xyXG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xyXG4gICAgICB0aGF0W1NJWkVdKys7XHJcbiAgICAgIC8vIGFkZCB0byBpbmRleFxyXG4gICAgICBpZihpbmRleCAhPSAnRicpdGhhdFtPMV1baW5kZXhdID0gZW50cnk7XHJcbiAgICB9IHJldHVybiB0aGF0O1xyXG4gIH1cclxuXHJcbiAgdmFyIGNvbGxlY3Rpb25NZXRob2RzID0ge1xyXG4gICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXHJcbiAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcclxuICAgIGNsZWFyOiBmdW5jdGlvbigpe1xyXG4gICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdFtPMV0sIGVudHJ5ID0gdGhhdFtGSVJTVF07IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xyXG4gICAgICAgIGVudHJ5LnIgPSB0cnVlO1xyXG4gICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcclxuICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcclxuICAgICAgfVxyXG4gICAgICB0aGF0W0ZJUlNUXSA9IHRoYXRbTEFTVF0gPSB1bmRlZmluZWQ7XHJcbiAgICAgIHRoYXRbU0laRV0gPSAwO1xyXG4gICAgfSxcclxuICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcclxuICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxyXG4gICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcclxuICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcclxuICAgICAgaWYoZW50cnkpe1xyXG4gICAgICAgIHZhciBuZXh0ID0gZW50cnkublxyXG4gICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcclxuICAgICAgICBkZWxldGUgdGhhdFtPMV1bZW50cnkuaV07XHJcbiAgICAgICAgZW50cnkuciA9IHRydWU7XHJcbiAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xyXG4gICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcclxuICAgICAgICBpZih0aGF0W0ZJUlNUXSA9PSBlbnRyeSl0aGF0W0ZJUlNUXSA9IG5leHQ7XHJcbiAgICAgICAgaWYodGhhdFtMQVNUXSA9PSBlbnRyeSl0aGF0W0xBU1RdID0gcHJldjtcclxuICAgICAgICB0aGF0W1NJWkVdLS07XHJcbiAgICAgIH0gcmV0dXJuICEhZW50cnk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXHJcbiAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxuICAgIGZvckVhY2g6IGZ1bmN0aW9uKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xyXG4gICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHNbMV0sIDMpXHJcbiAgICAgICAgLCBlbnRyeTtcclxuICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzW0ZJUlNUXSl7XHJcbiAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcclxuICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcclxuICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcclxuICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxyXG4gICAgaGFzOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyAyMy4xIE1hcCBPYmplY3RzXHJcbiAgTWFwID0gZ2V0Q29sbGVjdGlvbihNYXAsIE1BUCwge1xyXG4gICAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxyXG4gICAgZ2V0OiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGlzLCBrZXkpO1xyXG4gICAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcclxuICAgIH0sXHJcbiAgICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxyXG4gICAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgcmV0dXJuIGRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSwgY29sbGVjdGlvbk1ldGhvZHMsIHRydWUpO1xyXG4gIFxyXG4gIC8vIDIzLjIgU2V0IE9iamVjdHNcclxuICBTZXQgPSBnZXRDb2xsZWN0aW9uKFNldCwgU0VULCB7XHJcbiAgICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcclxuICAgIGFkZDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICByZXR1cm4gZGVmKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcclxuICAgIH1cclxuICB9LCBjb2xsZWN0aW9uTWV0aG9kcyk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gZGVmV2Vhayh0aGF0LCBrZXksIHZhbHVlKXtcclxuICAgIGlmKGlzRnJvemVuKGFzc2VydE9iamVjdChrZXkpKSlsZWFrU3RvcmUodGhhdCkuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGhhcyhrZXksIFdFQUspIHx8IGhpZGRlbihrZXksIFdFQUssIHt9KTtcclxuICAgICAga2V5W1dFQUtdW3RoYXRbVUlEXV0gPSB2YWx1ZTtcclxuICAgIH0gcmV0dXJuIHRoYXQ7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxlYWtTdG9yZSh0aGF0KXtcclxuICAgIHJldHVybiB0aGF0W0xFQUtdIHx8IGhpZGRlbih0aGF0LCBMRUFLLCBuZXcgTWFwKVtMRUFLXTtcclxuICB9XHJcbiAgXHJcbiAgdmFyIHdlYWtNZXRob2RzID0ge1xyXG4gICAgLy8gMjMuMy4zLjIgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcclxuICAgIC8vIDIzLjQuMy4zIFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcclxuICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmKGlzRnJvemVuKGtleSkpcmV0dXJuIGxlYWtTdG9yZSh0aGlzKVsnZGVsZXRlJ10oa2V5KTtcclxuICAgICAgcmV0dXJuIGhhcyhrZXksIFdFQUspICYmIGhhcyhrZXlbV0VBS10sIHRoaXNbVUlEXSkgJiYgZGVsZXRlIGtleVtXRUFLXVt0aGlzW1VJRF1dO1xyXG4gICAgfSxcclxuICAgIC8vIDIzLjMuMy40IFdlYWtNYXAucHJvdG90eXBlLmhhcyhrZXkpXHJcbiAgICAvLyAyMy40LjMuNCBXZWFrU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXHJcbiAgICBoYXM6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcclxuICAgICAgaWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpLmhhcyhrZXkpO1xyXG4gICAgICByZXR1cm4gaGFzKGtleSwgV0VBSykgJiYgaGFzKGtleVtXRUFLXSwgdGhpc1tVSURdKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIC8vIDIzLjMgV2Vha01hcCBPYmplY3RzXHJcbiAgV2Vha01hcCA9IGdldENvbGxlY3Rpb24oV2Vha01hcCwgV0VBS01BUCwge1xyXG4gICAgLy8gMjMuMy4zLjMgV2Vha01hcC5wcm90b3R5cGUuZ2V0KGtleSlcclxuICAgIGdldDogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgaWYoaXNPYmplY3Qoa2V5KSl7XHJcbiAgICAgICAgaWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpLmdldChrZXkpO1xyXG4gICAgICAgIGlmKGhhcyhrZXksIFdFQUspKXJldHVybiBrZXlbV0VBS11bdGhpc1tVSURdXTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIDIzLjMuMy41IFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxyXG4gICAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKXtcclxuICAgICAgcmV0dXJuIGRlZldlYWsodGhpcywga2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSwgd2Vha01ldGhvZHMsIHRydWUsIHRydWUpO1xyXG4gIFxyXG4gIC8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcclxuICBpZihmcmFtZXdvcmsgJiYgbmV3IFdlYWtNYXAoKS5zZXQoT2JqZWN0LmZyZWV6ZSh0bXApLCA3KS5nZXQodG1wKSAhPSA3KXtcclxuICAgIGZvckVhY2guY2FsbChhcnJheSgnZGVsZXRlLGhhcyxnZXQsc2V0JyksIGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIHZhciBtZXRob2QgPSBXZWFrTWFwW1BST1RPVFlQRV1ba2V5XTtcclxuICAgICAgV2Vha01hcFtQUk9UT1RZUEVdW2tleV0gPSBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICAvLyBzdG9yZSBmcm96ZW4gb2JqZWN0cyBvbiBsZWFreSBtYXBcclxuICAgICAgICBpZihpc09iamVjdChhKSAmJiBpc0Zyb3plbihhKSl7XHJcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gbGVha1N0b3JlKHRoaXMpW2tleV0oYSwgYik7XHJcbiAgICAgICAgICByZXR1cm4ga2V5ID09ICdzZXQnID8gdGhpcyA6IHJlc3VsdDtcclxuICAgICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcclxuICAgICAgICB9IHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBcclxuICAvLyAyMy40IFdlYWtTZXQgT2JqZWN0c1xyXG4gIFdlYWtTZXQgPSBnZXRDb2xsZWN0aW9uKFdlYWtTZXQsIFdFQUtTRVQsIHtcclxuICAgIC8vIDIzLjQuMy4xIFdlYWtTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcclxuICAgIGFkZDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICByZXR1cm4gZGVmV2Vhayh0aGlzLCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgd2Vha01ldGhvZHMsIGZhbHNlLCB0cnVlKTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYucmVmbGVjdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICBmdW5jdGlvbiBFbnVtZXJhdGUoaXRlcmF0ZWQpe1xyXG4gICAgdmFyIGtleXMgPSBbXSwga2V5O1xyXG4gICAgZm9yKGtleSBpbiBpdGVyYXRlZClrZXlzLnB1c2goa2V5KTtcclxuICAgIHNldCh0aGlzLCBJVEVSLCB7bzogaXRlcmF0ZWQsIGE6IGtleXMsIGk6IDB9KTtcclxuICB9XHJcbiAgY3JlYXRlSXRlcmF0b3IoRW51bWVyYXRlLCBPQkpFQ1QsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaXRlciA9IHRoaXNbSVRFUl1cclxuICAgICAgLCBrZXlzID0gaXRlci5hXHJcbiAgICAgICwga2V5O1xyXG4gICAgZG8ge1xyXG4gICAgICBpZihpdGVyLmkgPj0ga2V5cy5sZW5ndGgpcmV0dXJuIGl0ZXJSZXN1bHQoMSk7XHJcbiAgICB9IHdoaWxlKCEoKGtleSA9IGtleXNbaXRlci5pKytdKSBpbiBpdGVyLm8pKTtcclxuICAgIHJldHVybiBpdGVyUmVzdWx0KDAsIGtleSk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gd3JhcChmbil7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oaXQpe1xyXG4gICAgICBhc3NlcnRPYmplY3QoaXQpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBmbi5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyksIHRydWU7XHJcbiAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIHJlZmxlY3RHZXQodGFyZ2V0LCBwcm9wZXJ0eUtleS8qLCByZWNlaXZlciovKXtcclxuICAgIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogYXJndW1lbnRzWzJdXHJcbiAgICAgICwgZGVzYyA9IGdldE93bkRlc2NyaXB0b3IoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KSwgcHJvdG87XHJcbiAgICBpZihkZXNjKXJldHVybiBoYXMoZGVzYywgJ3ZhbHVlJylcclxuICAgICAgPyBkZXNjLnZhbHVlXHJcbiAgICAgIDogZGVzYy5nZXQgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gdW5kZWZpbmVkXHJcbiAgICAgICAgOiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcclxuICAgIHJldHVybiBpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpXHJcbiAgICAgID8gcmVmbGVjdEdldChwcm90bywgcHJvcGVydHlLZXksIHJlY2VpdmVyKVxyXG4gICAgICA6IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVmbGVjdFNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWLyosIHJlY2VpdmVyKi8pe1xyXG4gICAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDQgPyB0YXJnZXQgOiBhcmd1bWVudHNbM11cclxuICAgICAgLCBvd25EZXNjICA9IGdldE93bkRlc2NyaXB0b3IoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KVxyXG4gICAgICAsIGV4aXN0aW5nRGVzY3JpcHRvciwgcHJvdG87XHJcbiAgICBpZighb3duRGVzYyl7XHJcbiAgICAgIGlmKGlzT2JqZWN0KHByb3RvID0gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSkpe1xyXG4gICAgICAgIHJldHVybiByZWZsZWN0U2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgViwgcmVjZWl2ZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIG93bkRlc2MgPSBkZXNjcmlwdG9yKDApO1xyXG4gICAgfVxyXG4gICAgaWYoaGFzKG93bkRlc2MsICd2YWx1ZScpKXtcclxuICAgICAgaWYob3duRGVzYy53cml0YWJsZSA9PT0gZmFsc2UgfHwgIWlzT2JqZWN0KHJlY2VpdmVyKSlyZXR1cm4gZmFsc2U7XHJcbiAgICAgIGV4aXN0aW5nRGVzY3JpcHRvciA9IGdldE93bkRlc2NyaXB0b3IocmVjZWl2ZXIsIHByb3BlcnR5S2V5KSB8fCBkZXNjcmlwdG9yKDApO1xyXG4gICAgICBleGlzdGluZ0Rlc2NyaXB0b3IudmFsdWUgPSBWO1xyXG4gICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkocmVjZWl2ZXIsIHByb3BlcnR5S2V5LCBleGlzdGluZ0Rlc2NyaXB0b3IpLCB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG93bkRlc2Muc2V0ID09PSB1bmRlZmluZWRcclxuICAgICAgPyBmYWxzZVxyXG4gICAgICA6IChvd25EZXNjLnNldC5jYWxsKHJlY2VpdmVyLCBWKSwgdHJ1ZSk7XHJcbiAgfVxyXG4gIHZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IHJldHVybkl0O1xyXG4gIFxyXG4gIHZhciByZWZsZWN0ID0ge1xyXG4gICAgLy8gMjYuMS4xIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpXHJcbiAgICBhcHBseTogY3R4KGNhbGwsIGFwcGx5LCAzKSxcclxuICAgIC8vIDI2LjEuMiBSZWZsZWN0LmNvbnN0cnVjdCh0YXJnZXQsIGFyZ3VtZW50c0xpc3QgWywgbmV3VGFyZ2V0XSlcclxuICAgIGNvbnN0cnVjdDogZnVuY3Rpb24odGFyZ2V0LCBhcmd1bWVudHNMaXN0IC8qLCBuZXdUYXJnZXQqLyl7XHJcbiAgICAgIHZhciBwcm90byAgICA9IGFzc2VydEZ1bmN0aW9uKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogYXJndW1lbnRzWzJdKVtQUk9UT1RZUEVdXHJcbiAgICAgICAgLCBpbnN0YW5jZSA9IGNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdFByb3RvKVxyXG4gICAgICAgICwgcmVzdWx0ICAgPSBhcHBseS5jYWxsKHRhcmdldCwgaW5zdGFuY2UsIGFyZ3VtZW50c0xpc3QpO1xyXG4gICAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IGluc3RhbmNlO1xyXG4gICAgfSxcclxuICAgIC8vIDI2LjEuMyBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpXHJcbiAgICBkZWZpbmVQcm9wZXJ0eTogd3JhcChkZWZpbmVQcm9wZXJ0eSksXHJcbiAgICAvLyAyNi4xLjQgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KVxyXG4gICAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHlLZXkpe1xyXG4gICAgICB2YXIgZGVzYyA9IGdldE93bkRlc2NyaXB0b3IoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcclxuICAgICAgcmV0dXJuIGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlID8gZmFsc2UgOiBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcclxuICAgIH0sXHJcbiAgICAvLyAyNi4xLjUgUmVmbGVjdC5lbnVtZXJhdGUodGFyZ2V0KVxyXG4gICAgZW51bWVyYXRlOiBmdW5jdGlvbih0YXJnZXQpe1xyXG4gICAgICByZXR1cm4gbmV3IEVudW1lcmF0ZShhc3NlcnRPYmplY3QodGFyZ2V0KSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS42IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgWywgcmVjZWl2ZXJdKVxyXG4gICAgZ2V0OiByZWZsZWN0R2V0LFxyXG4gICAgLy8gMjYuMS43IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpXHJcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uKHRhcmdldCwgcHJvcGVydHlLZXkpe1xyXG4gICAgICByZXR1cm4gZ2V0T3duRGVzY3JpcHRvcihhc3NlcnRPYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xyXG4gICAgfSxcclxuICAgIC8vIDI2LjEuOCBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldClcclxuICAgIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbih0YXJnZXQpe1xyXG4gICAgICByZXR1cm4gZ2V0UHJvdG90eXBlT2YoYXNzZXJ0T2JqZWN0KHRhcmdldCkpO1xyXG4gICAgfSxcclxuICAgIC8vIDI2LjEuOSBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KVxyXG4gICAgaGFzOiBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgICAgcmV0dXJuIHByb3BlcnR5S2V5IGluIHRhcmdldDtcclxuICAgIH0sXHJcbiAgICAvLyAyNi4xLjEwIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldClcclxuICAgIGlzRXh0ZW5zaWJsZTogZnVuY3Rpb24odGFyZ2V0KXtcclxuICAgICAgcmV0dXJuICEhaXNFeHRlbnNpYmxlKGFzc2VydE9iamVjdCh0YXJnZXQpKTtcclxuICAgIH0sXHJcbiAgICAvLyAyNi4xLjExIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpXHJcbiAgICBvd25LZXlzOiBvd25LZXlzLFxyXG4gICAgLy8gMjYuMS4xMiBSZWZsZWN0LnByZXZlbnRFeHRlbnNpb25zKHRhcmdldClcclxuICAgIHByZXZlbnRFeHRlbnNpb25zOiB3cmFwKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyB8fCByZXR1cm5JdCksXHJcbiAgICAvLyAyNi4xLjEzIFJlZmxlY3Quc2V0KHRhcmdldCwgcHJvcGVydHlLZXksIFYgWywgcmVjZWl2ZXJdKVxyXG4gICAgc2V0OiByZWZsZWN0U2V0XHJcbiAgfVxyXG4gIC8vIDI2LjEuMTQgUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKVxyXG4gIGlmKHNldFByb3RvdHlwZU9mKXJlZmxlY3Quc2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbih0YXJnZXQsIHByb3RvKXtcclxuICAgIHJldHVybiBzZXRQcm90b3R5cGVPZihhc3NlcnRPYmplY3QodGFyZ2V0KSwgcHJvdG8pLCB0cnVlO1xyXG4gIH07XHJcbiAgXHJcbiAgJGRlZmluZShHTE9CQUwsIHtSZWZsZWN0OiB7fX0pO1xyXG4gICRkZWZpbmUoU1RBVElDLCAnUmVmbGVjdCcsIHJlZmxlY3QpO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNy5wcm9wb3NhbHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbigpe1xyXG4gICRkZWZpbmUoUFJPVE8sIEFSUkFZLCB7XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZG9tZW5pYy9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcclxuICAgIGluY2x1ZGVzOiBjcmVhdGVBcnJheUNvbnRhaW5zKHRydWUpXHJcbiAgfSk7XHJcbiAgJGRlZmluZShQUk9UTywgU1RSSU5HLCB7XHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XHJcbiAgICBhdDogY3JlYXRlUG9pbnRBdCh0cnVlKVxyXG4gIH0pO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdFRvQXJyYXkoaXNFbnRyaWVzKXtcclxuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3Qpe1xyXG4gICAgICB2YXIgTyAgICAgID0gdG9PYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICwga2V5cyAgID0gZ2V0S2V5cyhvYmplY3QpXHJcbiAgICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxyXG4gICAgICAgICwgaSAgICAgID0gMFxyXG4gICAgICAgICwgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKVxyXG4gICAgICAgICwga2V5O1xyXG4gICAgICBpZihpc0VudHJpZXMpd2hpbGUobGVuZ3RoID4gaSlyZXN1bHRbaV0gPSBba2V5ID0ga2V5c1tpKytdLCBPW2tleV1dO1xyXG4gICAgICBlbHNlIHdoaWxlKGxlbmd0aCA+IGkpcmVzdWx0W2ldID0gT1trZXlzW2krK11dO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gIH1cclxuICAkZGVmaW5lKFNUQVRJQywgT0JKRUNULCB7XHJcbiAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uLzkzNTM3ODFcclxuICAgIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uKG9iamVjdCl7XHJcbiAgICAgIHZhciBPICAgICAgPSB0b09iamVjdChvYmplY3QpXHJcbiAgICAgICAgLCByZXN1bHQgPSB7fTtcclxuICAgICAgZm9yRWFjaC5jYWxsKG93bktleXMoTyksIGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgICAgZGVmaW5lUHJvcGVydHkocmVzdWx0LCBrZXksIGRlc2NyaXB0b3IoMCwgZ2V0T3duRGVzY3JpcHRvcihPLCBrZXkpKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yd2FsZHJvbi90YzM5LW5vdGVzL2Jsb2IvbWFzdGVyL2VzNi8yMDE0LTA0L2Fwci05Lm1kIzUxLW9iamVjdGVudHJpZXMtb2JqZWN0dmFsdWVzXHJcbiAgICB2YWx1ZXM6ICBjcmVhdGVPYmplY3RUb0FycmF5KGZhbHNlKSxcclxuICAgIGVudHJpZXM6IGNyZWF0ZU9iamVjdFRvQXJyYXkodHJ1ZSlcclxuICB9KTtcclxuICAkZGVmaW5lKFNUQVRJQywgUkVHRVhQLCB7XHJcbiAgICAvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9rYW5nYXgvOTY5ODEwMFxyXG4gICAgZXNjYXBlOiBjcmVhdGVSZXBsYWNlcigvKFtcXFxcXFwtW1xcXXt9KCkqKz8uLF4kfF0pL2csICdcXFxcJDEnLCB0cnVlKVxyXG4gIH0pO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNy5hYnN0cmFjdC1yZWZzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5wYXJzaW5nL2VzLWFic3RyYWN0LXJlZnNcclxuIWZ1bmN0aW9uKFJFRkVSRU5DRSl7XHJcbiAgUkVGRVJFTkNFX0dFVCA9IGdldFdlbGxLbm93blN5bWJvbChSRUZFUkVOQ0UrJ0dldCcsIHRydWUpO1xyXG4gIHZhciBSRUZFUkVOQ0VfU0VUID0gZ2V0V2VsbEtub3duU3ltYm9sKFJFRkVSRU5DRStTRVQsIHRydWUpXHJcbiAgICAsIFJFRkVSRU5DRV9ERUxFVEUgPSBnZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFKydEZWxldGUnLCB0cnVlKTtcclxuICBcclxuICAkZGVmaW5lKFNUQVRJQywgU1lNQk9MLCB7XHJcbiAgICByZWZlcmVuY2VHZXQ6IFJFRkVSRU5DRV9HRVQsXHJcbiAgICByZWZlcmVuY2VTZXQ6IFJFRkVSRU5DRV9TRVQsXHJcbiAgICByZWZlcmVuY2VEZWxldGU6IFJFRkVSRU5DRV9ERUxFVEVcclxuICB9KTtcclxuICBcclxuICBoaWRkZW4oRnVuY3Rpb25Qcm90bywgUkVGRVJFTkNFX0dFVCwgcmV0dXJuVGhpcyk7XHJcbiAgXHJcbiAgZnVuY3Rpb24gc2V0TWFwTWV0aG9kcyhDb25zdHJ1Y3Rvcil7XHJcbiAgICBpZihDb25zdHJ1Y3Rvcil7XHJcbiAgICAgIHZhciBNYXBQcm90byA9IENvbnN0cnVjdG9yW1BST1RPVFlQRV07XHJcbiAgICAgIGhpZGRlbihNYXBQcm90bywgUkVGRVJFTkNFX0dFVCwgTWFwUHJvdG8uZ2V0KTtcclxuICAgICAgaGlkZGVuKE1hcFByb3RvLCBSRUZFUkVOQ0VfU0VULCBNYXBQcm90by5zZXQpO1xyXG4gICAgICBoaWRkZW4oTWFwUHJvdG8sIFJFRkVSRU5DRV9ERUxFVEUsIE1hcFByb3RvWydkZWxldGUnXSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldE1hcE1ldGhvZHMoTWFwKTtcclxuICBzZXRNYXBNZXRob2RzKFdlYWtNYXApO1xyXG59KCdyZWZlcmVuY2UnKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDoganMuYXJyYXkuc3RhdGljcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gSmF2YVNjcmlwdCAxLjYgLyBTdHJhd21hbiBhcnJheSBzdGF0aWNzIHNoaW1cclxuIWZ1bmN0aW9uKGFycmF5U3RhdGljcyl7XHJcbiAgZnVuY3Rpb24gc2V0QXJyYXlTdGF0aWNzKGtleXMsIGxlbmd0aCl7XHJcbiAgICBmb3JFYWNoLmNhbGwoYXJyYXkoa2V5cyksIGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmKGtleSBpbiBBcnJheVByb3RvKWFycmF5U3RhdGljc1trZXldID0gY3R4KGNhbGwsIEFycmF5UHJvdG9ba2V5XSwgbGVuZ3RoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBzZXRBcnJheVN0YXRpY3MoJ3BvcCxyZXZlcnNlLHNoaWZ0LGtleXMsdmFsdWVzLGVudHJpZXMnLCAxKTtcclxuICBzZXRBcnJheVN0YXRpY3MoJ2luZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXMnLCAzKTtcclxuICBzZXRBcnJheVN0YXRpY3MoJ2pvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZiwnICtcclxuICAgICAgICAgICAgICAgICAgJ3JlZHVjZSxyZWR1Y2VSaWdodCxjb3B5V2l0aGluLGZpbGwsdHVybicpO1xyXG4gICRkZWZpbmUoU1RBVElDLCBBUlJBWSwgYXJyYXlTdGF0aWNzKTtcclxufSh7fSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IHdlYi5kb20uaXRhcmFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihOb2RlTGlzdCl7XHJcbiAgaWYoZnJhbWV3b3JrICYmIE5vZGVMaXN0ICYmICEoU1lNQk9MX0lURVJBVE9SIGluIE5vZGVMaXN0W1BST1RPVFlQRV0pKXtcclxuICAgIGhpZGRlbihOb2RlTGlzdFtQUk9UT1RZUEVdLCBTWU1CT0xfSVRFUkFUT1IsIEl0ZXJhdG9yc1tBUlJBWV0pO1xyXG4gIH1cclxuICBJdGVyYXRvcnMuTm9kZUxpc3QgPSBJdGVyYXRvcnNbQVJSQVldO1xyXG59KGdsb2JhbC5Ob2RlTGlzdCk7XG59KHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpLCB0cnVlKTsiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciBpdGVyYXRvclN5bWJvbCA9XG4gICAgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICByZXR1cm4gbmV3IEdlbmVyYXRvcihpbm5lckZuLCBvdXRlckZuLCBzZWxmIHx8IG51bGwsIHRyeUxvY3NMaXN0IHx8IFtdKTtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbmVyYXRvciA9IHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpO1xuICAgICAgdmFyIGNhbGxOZXh0ID0gc3RlcC5iaW5kKGdlbmVyYXRvci5uZXh0KTtcbiAgICAgIHZhciBjYWxsVGhyb3cgPSBzdGVwLmJpbmQoZ2VuZXJhdG9yW1widGhyb3dcIl0pO1xuXG4gICAgICBmdW5jdGlvbiBzdGVwKGFyZykge1xuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2godGhpcywgbnVsbCwgYXJnKTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgcmVzb2x2ZShpbmZvLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUoaW5mby52YWx1ZSkudGhlbihjYWxsTmV4dCwgY2FsbFRocm93KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxsTmV4dCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBnZW5lcmF0b3IgPSBvdXRlckZuID8gT2JqZWN0LmNyZWF0ZShvdXRlckZuLnByb3RvdHlwZSkgOiB0aGlzO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QpO1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvcixcbiAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlbGVnYXRlIGdlbmVyYXRvciByYW4gYW5kIGhhbmRsZWQgaXRzIG93biBleGNlcHRpb25zIHNvXG4gICAgICAgICAgLy8gcmVnYXJkbGVzcyBvZiB3aGF0IHRoZSBtZXRob2Qgd2FzLCB3ZSBjb250aW51ZSBhcyBpZiBpdCBpc1xuICAgICAgICAgIC8vIFwibmV4dFwiIHdpdGggYW4gdW5kZWZpbmVkIGFyZy5cbiAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ICYmXG4gICAgICAgICAgICAgIHR5cGVvZiBhcmcgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAgIFwiYXR0ZW1wdCB0byBzZW5kIFwiICsgSlNPTi5zdHJpbmdpZnkoYXJnKSArIFwiIHRvIG5ld2Jvcm4gZ2VuZXJhdG9yXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkKSB7XG4gICAgICAgICAgICBjb250ZXh0LnNlbnQgPSBhcmc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBjb250ZXh0LnNlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlICYmIG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuXG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24ocmVjb3JkLmFyZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2VuZXJhdG9yLm5leHQgPSBpbnZva2UuYmluZChnZW5lcmF0b3IsIFwibmV4dFwiKTtcbiAgICBnZW5lcmF0b3JbXCJ0aHJvd1wiXSA9IGludm9rZS5iaW5kKGdlbmVyYXRvciwgXCJ0aHJvd1wiKTtcbiAgICBnZW5lcmF0b3JbXCJyZXR1cm5cIl0gPSBpbnZva2UuYmluZChnZW5lcmF0b3IsIFwicmV0dXJuXCIpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICB0aGlzLnNlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgLy8gUHJlLWluaXRpYWxpemUgYXQgbGVhc3QgMjAgdGVtcG9yYXJ5IHZhcmlhYmxlcyB0byBlbmFibGUgaGlkZGVuXG4gICAgICAvLyBjbGFzcyBvcHRpbWl6YXRpb25zIGZvciBzaW1wbGUgZ2VuZXJhdG9ycy5cbiAgICAgIGZvciAodmFyIHRlbXBJbmRleCA9IDAsIHRlbXBOYW1lO1xuICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCB0ZW1wTmFtZSA9IFwidFwiICsgdGVtcEluZGV4KSB8fCB0ZW1wSW5kZXggPCAyMDtcbiAgICAgICAgICAgKyt0ZW1wSW5kZXgpIHtcbiAgICAgICAgdGhpc1t0ZW1wTmFtZV0gPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPCBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDogdGhpc1xuKTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aVlXSmxiR2xtZVM5dWIyUmxYMjF2WkhWc1pYTXZZbUZpWld3dFkyOXlaUzl1YjJSbFgyMXZaSFZzWlhNdmNtVm5aVzVsY21GMGIzSXRZbUZpWld3dmNuVnVkR2x0WlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxS2x4dUlDb2dRMjl3ZVhKcFoyaDBJQ2hqS1NBeU1ERTBMQ0JHWVdObFltOXZheXdnU1c1akxseHVJQ29nUVd4c0lISnBaMmgwY3lCeVpYTmxjblpsWkM1Y2JpQXFYRzRnS2lCVWFHbHpJSE52ZFhKalpTQmpiMlJsSUdseklHeHBZMlZ1YzJWa0lIVnVaR1Z5SUhSb1pTQkNVMFF0YzNSNWJHVWdiR2xqWlc1elpTQm1iM1Z1WkNCcGJpQjBhR1ZjYmlBcUlHaDBkSEJ6T2k4dmNtRjNMbWRwZEdoMVlpNWpiMjB2Wm1GalpXSnZiMnN2Y21WblpXNWxjbUYwYjNJdmJXRnpkR1Z5TDB4SlEwVk9VMFVnWm1sc1pTNGdRVzVjYmlBcUlHRmtaR2wwYVc5dVlXd2daM0poYm5RZ2IyWWdjR0YwWlc1MElISnBaMmgwY3lCallXNGdZbVVnWm05MWJtUWdhVzRnZEdobElGQkJWRVZPVkZNZ1ptbHNaU0JwYmx4dUlDb2dkR2hsSUhOaGJXVWdaR2x5WldOMGIzSjVMbHh1SUNvdlhHNWNiaUVvWm5WdVkzUnBiMjRvWjJ4dlltRnNLU0I3WEc0Z0lGd2lkWE5sSUhOMGNtbGpkRndpTzF4dVhHNGdJSFpoY2lCb1lYTlBkMjRnUFNCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVPMXh1SUNCMllYSWdkVzVrWldacGJtVmtPeUF2THlCTmIzSmxJR052YlhCeVpYTnphV0pzWlNCMGFHRnVJSFp2YVdRZ01DNWNiaUFnZG1GeUlHbDBaWEpoZEc5eVUzbHRZbTlzSUQxY2JpQWdJQ0IwZVhCbGIyWWdVM2x0WW05c0lEMDlQU0JjSW1aMWJtTjBhVzl1WENJZ0ppWWdVM2x0WW05c0xtbDBaWEpoZEc5eUlIeDhJRndpUUVCcGRHVnlZWFJ2Y2x3aU8xeHVYRzRnSUhaaGNpQnBiazF2WkhWc1pTQTlJSFI1Y0dWdlppQnRiMlIxYkdVZ1BUMDlJRndpYjJKcVpXTjBYQ0k3WEc0Z0lIWmhjaUJ5ZFc1MGFXMWxJRDBnWjJ4dlltRnNMbkpsWjJWdVpYSmhkRzl5VW5WdWRHbHRaVHRjYmlBZ2FXWWdLSEoxYm5ScGJXVXBJSHRjYmlBZ0lDQnBaaUFvYVc1TmIyUjFiR1VwSUh0Y2JpQWdJQ0FnSUM4dklFbG1JSEpsWjJWdVpYSmhkRzl5VW5WdWRHbHRaU0JwY3lCa1pXWnBibVZrSUdkc2IySmhiR3g1SUdGdVpDQjNaU2R5WlNCcGJpQmhJRzF2WkhWc1pTeGNiaUFnSUNBZ0lDOHZJRzFoYTJVZ2RHaGxJR1Y0Y0c5eWRITWdiMkpxWldOMElHbGtaVzUwYVdOaGJDQjBieUJ5WldkbGJtVnlZWFJ2Y2xKMWJuUnBiV1V1WEc0Z0lDQWdJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSEoxYm5ScGJXVTdYRzRnSUNBZ2ZWeHVJQ0FnSUM4dklFUnZiaWQwSUdKdmRHaGxjaUJsZG1Gc2RXRjBhVzVuSUhSb1pTQnlaWE4wSUc5bUlIUm9hWE1nWm1sc1pTQnBaaUIwYUdVZ2NuVnVkR2x0WlNCM1lYTmNiaUFnSUNBdkx5QmhiSEpsWVdSNUlHUmxabWx1WldRZ1oyeHZZbUZzYkhrdVhHNGdJQ0FnY21WMGRYSnVPMXh1SUNCOVhHNWNiaUFnTHk4Z1JHVm1hVzVsSUhSb1pTQnlkVzUwYVcxbElHZHNiMkpoYkd4NUlDaGhjeUJsZUhCbFkzUmxaQ0JpZVNCblpXNWxjbUYwWldRZ1kyOWtaU2tnWVhNZ1pXbDBhR1Z5WEc0Z0lDOHZJRzF2WkhWc1pTNWxlSEJ2Y25SeklDaHBaaUIzWlNkeVpTQnBiaUJoSUcxdlpIVnNaU2tnYjNJZ1lTQnVaWGNzSUdWdGNIUjVJRzlpYW1WamRDNWNiaUFnY25WdWRHbHRaU0E5SUdkc2IySmhiQzV5WldkbGJtVnlZWFJ2Y2xKMWJuUnBiV1VnUFNCcGJrMXZaSFZzWlNBL0lHMXZaSFZzWlM1bGVIQnZjblJ6SURvZ2UzMDdYRzVjYmlBZ1puVnVZM1JwYjI0Z2QzSmhjQ2hwYm01bGNrWnVMQ0J2ZFhSbGNrWnVMQ0J6Wld4bUxDQjBjbmxNYjJOelRHbHpkQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQnVaWGNnUjJWdVpYSmhkRzl5S0dsdWJtVnlSbTRzSUc5MWRHVnlSbTRzSUhObGJHWWdmSHdnYm5Wc2JDd2dkSEo1VEc5amMweHBjM1FnZkh3Z1cxMHBPMXh1SUNCOVhHNGdJSEoxYm5ScGJXVXVkM0poY0NBOUlIZHlZWEE3WEc1Y2JpQWdMeThnVkhKNUwyTmhkR05vSUdobGJIQmxjaUIwYnlCdGFXNXBiV2w2WlNCa1pXOXdkR2x0YVhwaGRHbHZibk11SUZKbGRIVnlibk1nWVNCamIyMXdiR1YwYVc5dVhHNGdJQzh2SUhKbFkyOXlaQ0JzYVd0bElHTnZiblJsZUhRdWRISjVSVzUwY21sbGMxdHBYUzVqYjIxd2JHVjBhVzl1TGlCVWFHbHpJR2x1ZEdWeVptRmpaU0JqYjNWc1pGeHVJQ0F2THlCb1lYWmxJR0psWlc0Z0tHRnVaQ0IzWVhNZ2NISmxkbWx2ZFhOc2VTa2daR1Z6YVdkdVpXUWdkRzhnZEdGclpTQmhJR05zYjNOMWNtVWdkRzhnWW1WY2JpQWdMeThnYVc1MmIydGxaQ0IzYVhSb2IzVjBJR0Z5WjNWdFpXNTBjeXdnWW5WMElHbHVJR0ZzYkNCMGFHVWdZMkZ6WlhNZ2QyVWdZMkZ5WlNCaFltOTFkQ0IzWlZ4dUlDQXZMeUJoYkhKbFlXUjVJR2hoZG1VZ1lXNGdaWGhwYzNScGJtY2diV1YwYUc5a0lIZGxJSGRoYm5RZ2RHOGdZMkZzYkN3Z2MyOGdkR2hsY21VbmN5QnVieUJ1WldWa1hHNGdJQzh2SUhSdklHTnlaV0YwWlNCaElHNWxkeUJtZFc1amRHbHZiaUJ2WW1wbFkzUXVJRmRsSUdOaGJpQmxkbVZ1SUdkbGRDQmhkMkY1SUhkcGRHZ2dZWE56ZFcxcGJtZGNiaUFnTHk4Z2RHaGxJRzFsZEdodlpDQjBZV3RsY3lCbGVHRmpkR3g1SUc5dVpTQmhjbWQxYldWdWRDd2djMmx1WTJVZ2RHaGhkQ0JvWVhCd1pXNXpJSFJ2SUdKbElIUnlkV1ZjYmlBZ0x5OGdhVzRnWlhabGNua2dZMkZ6WlN3Z2MyOGdkMlVnWkc5dUozUWdhR0YyWlNCMGJ5QjBiM1ZqYUNCMGFHVWdZWEpuZFcxbGJuUnpJRzlpYW1WamRDNGdWR2hsWEc0Z0lDOHZJRzl1YkhrZ1lXUmthWFJwYjI1aGJDQmhiR3h2WTJGMGFXOXVJSEpsY1hWcGNtVmtJR2x6SUhSb1pTQmpiMjF3YkdWMGFXOXVJSEpsWTI5eVpDd2dkMmhwWTJoY2JpQWdMeThnYUdGeklHRWdjM1JoWW14bElITm9ZWEJsSUdGdVpDQnpieUJvYjNCbFpuVnNiSGtnYzJodmRXeGtJR0psSUdOb1pXRndJSFJ2SUdGc2JHOWpZWFJsTGx4dUlDQm1kVzVqZEdsdmJpQjBjbmxEWVhSamFDaG1iaXdnYjJKcUxDQmhjbWNwSUh0Y2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhzZ2RIbHdaVG9nWENKdWIzSnRZV3hjSWl3Z1lYSm5PaUJtYmk1allXeHNLRzlpYWl3Z1lYSm5LU0I5TzF4dUlDQWdJSDBnWTJGMFkyZ2dLR1Z5Y2lrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhzZ2RIbHdaVG9nWENKMGFISnZkMXdpTENCaGNtYzZJR1Z5Y2lCOU8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIWmhjaUJIWlc1VGRHRjBaVk4xYzNCbGJtUmxaRk4wWVhKMElEMGdYQ0p6ZFhOd1pXNWtaV1JUZEdGeWRGd2lPMXh1SUNCMllYSWdSMlZ1VTNSaGRHVlRkWE53Wlc1a1pXUlphV1ZzWkNBOUlGd2ljM1Z6Y0dWdVpHVmtXV2xsYkdSY0lqdGNiaUFnZG1GeUlFZGxibE4wWVhSbFJYaGxZM1YwYVc1bklEMGdYQ0psZUdWamRYUnBibWRjSWp0Y2JpQWdkbUZ5SUVkbGJsTjBZWFJsUTI5dGNHeGxkR1ZrSUQwZ1hDSmpiMjF3YkdWMFpXUmNJanRjYmx4dUlDQXZMeUJTWlhSMWNtNXBibWNnZEdocGN5QnZZbXBsWTNRZ1puSnZiU0IwYUdVZ2FXNXVaWEpHYmlCb1lYTWdkR2hsSUhOaGJXVWdaV1ptWldOMElHRnpYRzRnSUM4dklHSnlaV0ZyYVc1bklHOTFkQ0J2WmlCMGFHVWdaR2x6Y0dGMFkyZ2djM2RwZEdOb0lITjBZWFJsYldWdWRDNWNiaUFnZG1GeUlFTnZiblJwYm5WbFUyVnVkR2x1Wld3Z1BTQjdmVHRjYmx4dUlDQXZMeUJFZFcxdGVTQmpiMjV6ZEhKMVkzUnZjaUJtZFc1amRHbHZibk1nZEdoaGRDQjNaU0IxYzJVZ1lYTWdkR2hsSUM1amIyNXpkSEoxWTNSdmNpQmhibVJjYmlBZ0x5OGdMbU52Ym5OMGNuVmpkRzl5TG5CeWIzUnZkSGx3WlNCd2NtOXdaWEowYVdWeklHWnZjaUJtZFc1amRHbHZibk1nZEdoaGRDQnlaWFIxY200Z1IyVnVaWEpoZEc5eVhHNGdJQzh2SUc5aWFtVmpkSE11SUVadmNpQm1kV3hzSUhOd1pXTWdZMjl0Y0d4cFlXNWpaU3dnZVc5MUlHMWhlU0IzYVhOb0lIUnZJR052Ym1acFozVnlaU0I1YjNWeVhHNGdJQzh2SUcxcGJtbG1hV1Z5SUc1dmRDQjBieUJ0WVc1bmJHVWdkR2hsSUc1aGJXVnpJRzltSUhSb1pYTmxJSFIzYnlCbWRXNWpkR2x2Ym5NdVhHNGdJR1oxYm1OMGFXOXVJRWRsYm1WeVlYUnZja1oxYm1OMGFXOXVLQ2tnZTMxY2JpQWdablZ1WTNScGIyNGdSMlZ1WlhKaGRHOXlSblZ1WTNScGIyNVFjbTkwYjNSNWNHVW9LU0I3ZlZ4dVhHNGdJSFpoY2lCSGNDQTlJRWRsYm1WeVlYUnZja1oxYm1OMGFXOXVVSEp2ZEc5MGVYQmxMbkJ5YjNSdmRIbHdaU0E5SUVkbGJtVnlZWFJ2Y2k1d2NtOTBiM1I1Y0dVN1hHNGdJRWRsYm1WeVlYUnZja1oxYm1OMGFXOXVMbkJ5YjNSdmRIbHdaU0E5SUVkd0xtTnZibk4wY25WamRHOXlJRDBnUjJWdVpYSmhkRzl5Um5WdVkzUnBiMjVRY205MGIzUjVjR1U3WEc0Z0lFZGxibVZ5WVhSdmNrWjFibU4wYVc5dVVISnZkRzkwZVhCbExtTnZibk4wY25WamRHOXlJRDBnUjJWdVpYSmhkRzl5Um5WdVkzUnBiMjQ3WEc0Z0lFZGxibVZ5WVhSdmNrWjFibU4wYVc5dUxtUnBjM0JzWVhsT1lXMWxJRDBnWENKSFpXNWxjbUYwYjNKR2RXNWpkR2x2Ymx3aU8xeHVYRzRnSUhKMWJuUnBiV1V1YVhOSFpXNWxjbUYwYjNKR2RXNWpkR2x2YmlBOUlHWjFibU4wYVc5dUtHZGxia1oxYmlrZ2UxeHVJQ0FnSUhaaGNpQmpkRzl5SUQwZ2RIbHdaVzltSUdkbGJrWjFiaUE5UFQwZ1hDSm1kVzVqZEdsdmJsd2lJQ1ltSUdkbGJrWjFiaTVqYjI1emRISjFZM1J2Y2p0Y2JpQWdJQ0J5WlhSMWNtNGdZM1J2Y2x4dUlDQWdJQ0FnUHlCamRHOXlJRDA5UFNCSFpXNWxjbUYwYjNKR2RXNWpkR2x2YmlCOGZGeHVJQ0FnSUNBZ0lDQXZMeUJHYjNJZ2RHaGxJRzVoZEdsMlpTQkhaVzVsY21GMGIzSkdkVzVqZEdsdmJpQmpiMjV6ZEhKMVkzUnZjaXdnZEdobElHSmxjM1FnZDJVZ1kyRnVYRzRnSUNBZ0lDQWdJQzh2SUdSdklHbHpJSFJ2SUdOb1pXTnJJR2wwY3lBdWJtRnRaU0J3Y205d1pYSjBlUzVjYmlBZ0lDQWdJQ0FnS0dOMGIzSXVaR2x6Y0d4aGVVNWhiV1VnZkh3Z1kzUnZjaTV1WVcxbEtTQTlQVDBnWENKSFpXNWxjbUYwYjNKR2RXNWpkR2x2Ymx3aVhHNGdJQ0FnSUNBNklHWmhiSE5sTzF4dUlDQjlPMXh1WEc0Z0lISjFiblJwYldVdWJXRnlheUE5SUdaMWJtTjBhVzl1S0dkbGJrWjFiaWtnZTF4dUlDQWdJR2RsYmtaMWJpNWZYM0J5YjNSdlgxOGdQU0JIWlc1bGNtRjBiM0pHZFc1amRHbHZibEJ5YjNSdmRIbHdaVHRjYmlBZ0lDQm5aVzVHZFc0dWNISnZkRzkwZVhCbElEMGdUMkpxWldOMExtTnlaV0YwWlNoSGNDazdYRzRnSUNBZ2NtVjBkWEp1SUdkbGJrWjFianRjYmlBZ2ZUdGNibHh1SUNCeWRXNTBhVzFsTG1GemVXNWpJRDBnWm5WdVkzUnBiMjRvYVc1dVpYSkdiaXdnYjNWMFpYSkdiaXdnYzJWc1ppd2dkSEo1VEc5amMweHBjM1FwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUZCeWIyMXBjMlVvWm5WdVkzUnBiMjRvY21WemIyeDJaU3dnY21WcVpXTjBLU0I3WEc0Z0lDQWdJQ0IyWVhJZ1oyVnVaWEpoZEc5eUlEMGdkM0poY0NocGJtNWxja1p1TENCdmRYUmxja1p1TENCelpXeG1MQ0IwY25sTWIyTnpUR2x6ZENrN1hHNGdJQ0FnSUNCMllYSWdZMkZzYkU1bGVIUWdQU0J6ZEdWd0xtSnBibVFvWjJWdVpYSmhkRzl5TG01bGVIUXBPMXh1SUNBZ0lDQWdkbUZ5SUdOaGJHeFVhSEp2ZHlBOUlITjBaWEF1WW1sdVpDaG5aVzVsY21GMGIzSmJYQ0owYUhKdmQxd2lYU2s3WEc1Y2JpQWdJQ0FnSUdaMWJtTjBhVzl1SUhOMFpYQW9ZWEpuS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ5WldOdmNtUWdQU0IwY25sRFlYUmphQ2gwYUdsekxDQnVkV3hzTENCaGNtY3BPMXh1SUNBZ0lDQWdJQ0JwWmlBb2NtVmpiM0prTG5SNWNHVWdQVDA5SUZ3aWRHaHliM2RjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsYW1WamRDaHlaV052Y21RdVlYSm5LVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjJZWElnYVc1bWJ5QTlJSEpsWTI5eVpDNWhjbWM3WEc0Z0lDQWdJQ0FnSUdsbUlDaHBibVp2TG1SdmJtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0dsdVptOHVkbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJRkJ5YjIxcGMyVXVjbVZ6YjJ4MlpTaHBibVp2TG5aaGJIVmxLUzUwYUdWdUtHTmhiR3hPWlhoMExDQmpZV3hzVkdoeWIzY3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdOaGJHeE9aWGgwS0NrN1hHNGdJQ0FnZlNrN1hHNGdJSDA3WEc1Y2JpQWdablZ1WTNScGIyNGdSMlZ1WlhKaGRHOXlLR2x1Ym1WeVJtNHNJRzkxZEdWeVJtNHNJSE5sYkdZc0lIUnllVXh2WTNOTWFYTjBLU0I3WEc0Z0lDQWdkbUZ5SUdkbGJtVnlZWFJ2Y2lBOUlHOTFkR1Z5Um00Z1B5QlBZbXBsWTNRdVkzSmxZWFJsS0c5MWRHVnlSbTR1Y0hKdmRHOTBlWEJsS1NBNklIUm9hWE03WEc0Z0lDQWdkbUZ5SUdOdmJuUmxlSFFnUFNCdVpYY2dRMjl1ZEdWNGRDaDBjbmxNYjJOelRHbHpkQ2s3WEc0Z0lDQWdkbUZ5SUhOMFlYUmxJRDBnUjJWdVUzUmhkR1ZUZFhOd1pXNWtaV1JUZEdGeWREdGNibHh1SUNBZ0lHWjFibU4wYVc5dUlHbHVkbTlyWlNodFpYUm9iMlFzSUdGeVp5a2dlMXh1SUNBZ0lDQWdhV1lnS0hOMFlYUmxJRDA5UFNCSFpXNVRkR0YwWlVWNFpXTjFkR2x1WnlrZ2UxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hDSkhaVzVsY21GMGIzSWdhWE1nWVd4eVpXRmtlU0J5ZFc1dWFXNW5YQ0lwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcFppQW9jM1JoZEdVZ1BUMDlJRWRsYmxOMFlYUmxRMjl0Y0d4bGRHVmtLU0I3WEc0Z0lDQWdJQ0FnSUM4dklFSmxJR1p2Y21kcGRtbHVaeXdnY0dWeUlESTFMak11TXk0ekxqTWdiMllnZEdobElITndaV002WEc0Z0lDQWdJQ0FnSUM4dklHaDBkSEJ6T2k4dmNHVnZjR3hsTG0xdmVtbHNiR0V1YjNKbkwzNXFiM0psYm1SdmNtWm1MMlZ6Tmkxa2NtRm1kQzVvZEcxc0kzTmxZeTFuWlc1bGNtRjBiM0p5WlhOMWJXVmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHUnZibVZTWlhOMWJIUW9LVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnZDJocGJHVWdLSFJ5ZFdVcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUdSbGJHVm5ZWFJsSUQwZ1kyOXVkR1Y0ZEM1a1pXeGxaMkYwWlR0Y2JpQWdJQ0FnSUNBZ2FXWWdLR1JsYkdWbllYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJSEpsWTI5eVpDQTlJSFJ5ZVVOaGRHTm9LRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaV2RoZEdVdWFYUmxjbUYwYjNKYmJXVjBhRzlrWFN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWbllYUmxMbWwwWlhKaGRHOXlMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1lYSm5YRzRnSUNBZ0lDQWdJQ0FnS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJR2xtSUNoeVpXTnZjbVF1ZEhsd1pTQTlQVDBnWENKMGFISnZkMXdpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFpYaDBMbVJsYkdWbllYUmxJRDBnYm5Wc2JEdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUR2xyWlNCeVpYUjFjbTVwYm1jZ1oyVnVaWEpoZEc5eUxuUm9jbTkzS0hWdVkyRjFaMmgwS1N3Z1luVjBJSGRwZEdodmRYUWdkR2hsWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJ2ZG1WeWFHVmhaQ0J2WmlCaGJpQmxlSFJ5WVNCbWRXNWpkR2x2YmlCallXeHNMbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JXVjBhRzlrSUQwZ1hDSjBhSEp2ZDF3aU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhKbklEMGdjbVZqYjNKa0xtRnlaenRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdsdWRXVTdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdMeThnUkdWc1pXZGhkR1VnWjJWdVpYSmhkRzl5SUhKaGJpQmhibVFnYUdGdVpHeGxaQ0JwZEhNZ2IzZHVJR1Y0WTJWd2RHbHZibk1nYzI5Y2JpQWdJQ0FnSUNBZ0lDQXZMeUJ5WldkaGNtUnNaWE56SUc5bUlIZG9ZWFFnZEdobElHMWxkR2h2WkNCM1lYTXNJSGRsSUdOdmJuUnBiblZsSUdGeklHbG1JR2wwSUdselhHNGdJQ0FnSUNBZ0lDQWdMeThnWENKdVpYaDBYQ0lnZDJsMGFDQmhiaUIxYm1SbFptbHVaV1FnWVhKbkxseHVJQ0FnSUNBZ0lDQWdJRzFsZEdodlpDQTlJRndpYm1WNGRGd2lPMXh1SUNBZ0lDQWdJQ0FnSUdGeVp5QTlJSFZ1WkdWbWFXNWxaRHRjYmx4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJwYm1adklEMGdjbVZqYjNKa0xtRnlaenRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9hVzVtYnk1a2IyNWxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjUwWlhoMFcyUmxiR1ZuWVhSbExuSmxjM1ZzZEU1aGJXVmRJRDBnYVc1bWJ5NTJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5SbGVIUXVibVY0ZENBOUlHUmxiR1ZuWVhSbExtNWxlSFJNYjJNN1hHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFlYUmxJRDBnUjJWdVUzUmhkR1ZUZFhOd1pXNWtaV1JaYVdWc1pEdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJwYm1adk8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lHTnZiblJsZUhRdVpHVnNaV2RoZEdVZ1BTQnVkV3hzTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0cxbGRHaHZaQ0E5UFQwZ1hDSnVaWGgwWENJcElIdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2MzUmhkR1VnUFQwOUlFZGxibE4wWVhSbFUzVnpjR1Z1WkdWa1UzUmhjblFnSmlaY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhsd1pXOW1JR0Z5WnlBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2FIUjBjSE02THk5d1pXOXdiR1V1Ylc5NmFXeHNZUzV2Y21jdmZtcHZjbVZ1Wkc5eVptWXZaWE0yTFdSeVlXWjBMbWgwYld3amMyVmpMV2RsYm1WeVlYUnZjbkpsYzNWdFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWENKaGRIUmxiWEIwSUhSdklITmxibVFnWENJZ0t5QktVMDlPTG5OMGNtbHVaMmxtZVNoaGNtY3BJQ3NnWENJZ2RHOGdibVYzWW05eWJpQm5aVzVsY21GMGIzSmNJbHh1SUNBZ0lDQWdJQ0FnSUNBZ0tUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYzNSaGRHVWdQVDA5SUVkbGJsTjBZWFJsVTNWemNHVnVaR1ZrV1dsbGJHUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiblJsZUhRdWMyVnVkQ0E5SUdGeVp6dGNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUdOdmJuUmxlSFF1YzJWdWREdGNiaUFnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHRaWFJvYjJRZ1BUMDlJRndpZEdoeWIzZGNJaWtnZTF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2h6ZEdGMFpTQTlQVDBnUjJWdVUzUmhkR1ZUZFhOd1pXNWtaV1JUZEdGeWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUmhkR1VnUFNCSFpXNVRkR0YwWlVOdmJYQnNaWFJsWkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHRnlaenRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb1kyOXVkR1Y0ZEM1a2FYTndZWFJqYUVWNFkyVndkR2x2YmloaGNtY3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHVWdaR2x6Y0dGMFkyaGxaQ0JsZUdObGNIUnBiMjRnZDJGeklHTmhkV2RvZENCaWVTQmhJR05oZEdOb0lHSnNiMk5yTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnZEdobGJpQnNaWFFnZEdoaGRDQmpZWFJqYUNCaWJHOWpheUJvWVc1a2JHVWdkR2hsSUdWNFkyVndkR2x2YmlCdWIzSnRZV3hzZVM1Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFsZEdodlpDQTlJRndpYm1WNGRGd2lPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lYSm5JRDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0cxbGRHaHZaQ0E5UFQwZ1hDSnlaWFIxY201Y0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuUmxlSFF1WVdKeWRYQjBLRndpY21WMGRYSnVYQ0lzSUdGeVp5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCemRHRjBaU0E5SUVkbGJsTjBZWFJsUlhobFkzVjBhVzVuTzF4dVhHNGdJQ0FnSUNBZ0lIWmhjaUJ5WldOdmNtUWdQU0IwY25sRFlYUmphQ2hwYm01bGNrWnVMQ0J6Wld4bUxDQmpiMjUwWlhoMEtUdGNiaUFnSUNBZ0lDQWdhV1lnS0hKbFkyOXlaQzUwZVhCbElEMDlQU0JjSW01dmNtMWhiRndpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdMeThnU1dZZ1lXNGdaWGhqWlhCMGFXOXVJR2x6SUhSb2NtOTNiaUJtY205dElHbHVibVZ5Um00c0lIZGxJR3hsWVhabElITjBZWFJsSUQwOVBWeHVJQ0FnSUNBZ0lDQWdJQzh2SUVkbGJsTjBZWFJsUlhobFkzVjBhVzVuSUdGdVpDQnNiMjl3SUdKaFkyc2dabTl5SUdGdWIzUm9aWElnYVc1MmIyTmhkR2x2Ymk1Y2JpQWdJQ0FnSUNBZ0lDQnpkR0YwWlNBOUlHTnZiblJsZUhRdVpHOXVaVnh1SUNBZ0lDQWdJQ0FnSUNBZ1B5QkhaVzVUZEdGMFpVTnZiWEJzWlhSbFpGeHVJQ0FnSUNBZ0lDQWdJQ0FnT2lCSFpXNVRkR0YwWlZOMWMzQmxibVJsWkZscFpXeGtPMXh1WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR2x1Wm04Z1BTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVG9nY21WamIzSmtMbUZ5Wnl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1J2Ym1VNklHTnZiblJsZUhRdVpHOXVaVnh1SUNBZ0lDQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2NtVmpiM0prTG1GeVp5QTlQVDBnUTI5dWRHbHVkV1ZUWlc1MGFXNWxiQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOdmJuUmxlSFF1WkdWc1pXZGhkR1VnSmlZZ2JXVjBhRzlrSUQwOVBTQmNJbTVsZUhSY0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJFWld4cFltVnlZWFJsYkhrZ1ptOXlaMlYwSUhSb1pTQnNZWE4wSUhObGJuUWdkbUZzZFdVZ2MyOGdkR2hoZENCM1pTQmtiMjRuZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCaFkyTnBaR1Z1ZEdGc2JIa2djR0Z6Y3lCcGRDQnZiaUIwYnlCMGFHVWdaR1ZzWldkaGRHVXVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnlaeUE5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHbHVabTg3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvY21WamIzSmtMblI1Y0dVZ1BUMDlJRndpZEdoeWIzZGNJaWtnZTF4dUlDQWdJQ0FnSUNBZ0lITjBZWFJsSUQwZ1IyVnVVM1JoZEdWRGIyMXdiR1YwWldRN1hHNWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2JXVjBhRzlrSUQwOVBTQmNJbTVsZUhSY0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVkR1Y0ZEM1a2FYTndZWFJqYUVWNFkyVndkR2x2YmloeVpXTnZjbVF1WVhKbktUdGNiaUFnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lYSm5JRDBnY21WamIzSmtMbUZ5Wnp0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aVzVsY21GMGIzSXVibVY0ZENBOUlHbHVkbTlyWlM1aWFXNWtLR2RsYm1WeVlYUnZjaXdnWENKdVpYaDBYQ0lwTzF4dUlDQWdJR2RsYm1WeVlYUnZjbHRjSW5Sb2NtOTNYQ0pkSUQwZ2FXNTJiMnRsTG1KcGJtUW9aMlZ1WlhKaGRHOXlMQ0JjSW5Sb2NtOTNYQ0lwTzF4dUlDQWdJR2RsYm1WeVlYUnZjbHRjSW5KbGRIVnlibHdpWFNBOUlHbHVkbTlyWlM1aWFXNWtLR2RsYm1WeVlYUnZjaXdnWENKeVpYUjFjbTVjSWlrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWjJWdVpYSmhkRzl5TzF4dUlDQjlYRzVjYmlBZ1IzQmJhWFJsY21GMGIzSlRlVzFpYjJ4ZElEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMDdYRzVjYmlBZ1IzQXVkRzlUZEhKcGJtY2dQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdYQ0piYjJKcVpXTjBJRWRsYm1WeVlYUnZjbDFjSWp0Y2JpQWdmVHRjYmx4dUlDQm1kVzVqZEdsdmJpQndkWE5vVkhKNVJXNTBjbmtvYkc5amN5a2dlMXh1SUNBZ0lIWmhjaUJsYm5SeWVTQTlJSHNnZEhKNVRHOWpPaUJzYjJOeld6QmRJSDA3WEc1Y2JpQWdJQ0JwWmlBb01TQnBiaUJzYjJOektTQjdYRzRnSUNBZ0lDQmxiblJ5ZVM1allYUmphRXh2WXlBOUlHeHZZM05iTVYwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tESWdhVzRnYkc5amN5a2dlMXh1SUNBZ0lDQWdaVzUwY25rdVptbHVZV3hzZVV4dll5QTlJR3h2WTNOYk1sMDdYRzRnSUNBZ0lDQmxiblJ5ZVM1aFpuUmxja3h2WXlBOUlHeHZZM05iTTEwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdocGN5NTBjbmxGYm5SeWFXVnpMbkIxYzJnb1pXNTBjbmtwTzF4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z2NtVnpaWFJVY25sRmJuUnllU2hsYm5SeWVTa2dlMXh1SUNBZ0lIWmhjaUJ5WldOdmNtUWdQU0JsYm5SeWVTNWpiMjF3YkdWMGFXOXVJSHg4SUh0OU8xeHVJQ0FnSUhKbFkyOXlaQzUwZVhCbElEMGdYQ0p1YjNKdFlXeGNJanRjYmlBZ0lDQmtaV3hsZEdVZ2NtVmpiM0prTG1GeVp6dGNiaUFnSUNCbGJuUnllUzVqYjIxd2JHVjBhVzl1SUQwZ2NtVmpiM0prTzF4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z1EyOXVkR1Y0ZENoMGNubE1iMk56VEdsemRDa2dlMXh1SUNBZ0lDOHZJRlJvWlNCeWIyOTBJR1Z1ZEhKNUlHOWlhbVZqZENBb1pXWm1aV04wYVhabGJIa2dZU0IwY25rZ2MzUmhkR1Z0Wlc1MElIZHBkR2h2ZFhRZ1lTQmpZWFJqYUZ4dUlDQWdJQzh2SUc5eUlHRWdabWx1WVd4c2VTQmliRzlqYXlrZ1oybDJaWE1nZFhNZ1lTQndiR0ZqWlNCMGJ5QnpkRzl5WlNCMllXeDFaWE1nZEdoeWIzZHVJR1p5YjIxY2JpQWdJQ0F2THlCc2IyTmhkR2x2Ym5NZ2QyaGxjbVVnZEdobGNtVWdhWE1nYm04Z1pXNWpiRzl6YVc1bklIUnllU0J6ZEdGMFpXMWxiblF1WEc0Z0lDQWdkR2hwY3k1MGNubEZiblJ5YVdWeklEMGdXM3NnZEhKNVRHOWpPaUJjSW5KdmIzUmNJaUI5WFR0Y2JpQWdJQ0IwY25sTWIyTnpUR2x6ZEM1bWIzSkZZV05vS0hCMWMyaFVjbmxGYm5SeWVTd2dkR2hwY3lrN1hHNGdJQ0FnZEdocGN5NXlaWE5sZENncE8xeHVJQ0I5WEc1Y2JpQWdjblZ1ZEdsdFpTNXJaWGx6SUQwZ1puVnVZM1JwYjI0b2IySnFaV04wS1NCN1hHNGdJQ0FnZG1GeUlHdGxlWE1nUFNCYlhUdGNiaUFnSUNCbWIzSWdLSFpoY2lCclpYa2dhVzRnYjJKcVpXTjBLU0I3WEc0Z0lDQWdJQ0JyWlhsekxuQjFjMmdvYTJWNUtUdGNiaUFnSUNCOVhHNGdJQ0FnYTJWNWN5NXlaWFpsY25ObEtDazdYRzVjYmlBZ0lDQXZMeUJTWVhSb1pYSWdkR2hoYmlCeVpYUjFjbTVwYm1jZ1lXNGdiMkpxWldOMElIZHBkR2dnWVNCdVpYaDBJRzFsZEdodlpDd2dkMlVnYTJWbGNGeHVJQ0FnSUM4dklIUm9hVzVuY3lCemFXMXdiR1VnWVc1a0lISmxkSFZ5YmlCMGFHVWdibVY0ZENCbWRXNWpkR2x2YmlCcGRITmxiR1l1WEc0Z0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlHNWxlSFFvS1NCN1hHNGdJQ0FnSUNCM2FHbHNaU0FvYTJWNWN5NXNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUd0bGVTQTlJR3RsZVhNdWNHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUdsbUlDaHJaWGtnYVc0Z2IySnFaV04wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdibVY0ZEM1MllXeDFaU0E5SUd0bGVUdGNiaUFnSUNBZ0lDQWdJQ0J1WlhoMExtUnZibVVnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WNGREdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0F2THlCVWJ5QmhkbTlwWkNCamNtVmhkR2x1WnlCaGJpQmhaR1JwZEdsdmJtRnNJRzlpYW1WamRDd2dkMlVnYW5WemRDQm9ZVzVuSUhSb1pTQXVkbUZzZFdWY2JpQWdJQ0FnSUM4dklHRnVaQ0F1Wkc5dVpTQndjbTl3WlhKMGFXVnpJRzltWmlCMGFHVWdibVY0ZENCbWRXNWpkR2x2YmlCdlltcGxZM1FnYVhSelpXeG1MaUJVYUdselhHNGdJQ0FnSUNBdkx5QmhiSE52SUdWdWMzVnlaWE1nZEdoaGRDQjBhR1VnYldsdWFXWnBaWElnZDJsc2JDQnViM1FnWVc1dmJubHRhWHBsSUhSb1pTQm1kVzVqZEdsdmJpNWNiaUFnSUNBZ0lHNWxlSFF1Wkc5dVpTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYm1WNGREdGNiaUFnSUNCOU8xeHVJQ0I5TzF4dVhHNGdJR1oxYm1OMGFXOXVJSFpoYkhWbGN5aHBkR1Z5WVdKc1pTa2dlMXh1SUNBZ0lHbG1JQ2hwZEdWeVlXSnNaU2tnZTF4dUlDQWdJQ0FnZG1GeUlHbDBaWEpoZEc5eVRXVjBhRzlrSUQwZ2FYUmxjbUZpYkdWYmFYUmxjbUYwYjNKVGVXMWliMnhkTzF4dUlDQWdJQ0FnYVdZZ0tHbDBaWEpoZEc5eVRXVjBhRzlrS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCcGRHVnlZWFJ2Y2sxbGRHaHZaQzVqWVd4c0tHbDBaWEpoWW14bEtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUJwZEdWeVlXSnNaUzV1WlhoMElEMDlQU0JjSW1aMWJtTjBhVzl1WENJcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHbDBaWEpoWW14bE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvSVdselRtRk9LR2wwWlhKaFlteGxMbXhsYm1kMGFDa3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHa2dQU0F0TVN3Z2JtVjRkQ0E5SUdaMWJtTjBhVzl1SUc1bGVIUW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ2QyaHBiR1VnS0NzcmFTQThJR2wwWlhKaFlteGxMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2hoYzA5M2JpNWpZV3hzS0dsMFpYSmhZbXhsTENCcEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGgwTG5aaGJIVmxJRDBnYVhSbGNtRmliR1ZiYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGVIUXVaRzl1WlNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVY0ZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0J1WlhoMExuWmhiSFZsSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQWdJRzVsZUhRdVpHOXVaU0E5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WNGREdGNiaUFnSUNBZ0lDQWdmVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WNGRDNXVaWGgwSUQwZ2JtVjRkRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJTWlhSMWNtNGdZVzRnYVhSbGNtRjBiM0lnZDJsMGFDQnVieUIyWVd4MVpYTXVYRzRnSUNBZ2NtVjBkWEp1SUhzZ2JtVjRkRG9nWkc5dVpWSmxjM1ZzZENCOU8xeHVJQ0I5WEc0Z0lISjFiblJwYldVdWRtRnNkV1Z6SUQwZ2RtRnNkV1Z6TzF4dVhHNGdJR1oxYm1OMGFXOXVJR1J2Ym1WU1pYTjFiSFFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSHNnZG1Gc2RXVTZJSFZ1WkdWbWFXNWxaQ3dnWkc5dVpUb2dkSEoxWlNCOU8xeHVJQ0I5WEc1Y2JpQWdRMjl1ZEdWNGRDNXdjbTkwYjNSNWNHVWdQU0I3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0k2SUVOdmJuUmxlSFFzWEc1Y2JpQWdJQ0J5WlhObGREb2dablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdJQ0IwYUdsekxuQnlaWFlnUFNBd08xeHVJQ0FnSUNBZ2RHaHBjeTV1WlhoMElEMGdNRHRjYmlBZ0lDQWdJSFJvYVhNdWMyVnVkQ0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0FnSUhSb2FYTXVaRzl1WlNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnZEdocGN5NWtaV3hsWjJGMFpTQTlJRzUxYkd3N1hHNWNiaUFnSUNBZ0lIUm9hWE11ZEhKNVJXNTBjbWxsY3k1bWIzSkZZV05vS0hKbGMyVjBWSEo1Ulc1MGNua3BPMXh1WEc0Z0lDQWdJQ0F2THlCUWNtVXRhVzVwZEdsaGJHbDZaU0JoZENCc1pXRnpkQ0F5TUNCMFpXMXdiM0poY25rZ2RtRnlhV0ZpYkdWeklIUnZJR1Z1WVdKc1pTQm9hV1JrWlc1Y2JpQWdJQ0FnSUM4dklHTnNZWE56SUc5d2RHbHRhWHBoZEdsdmJuTWdabTl5SUhOcGJYQnNaU0JuWlc1bGNtRjBiM0p6TGx4dUlDQWdJQ0FnWm05eUlDaDJZWElnZEdWdGNFbHVaR1Y0SUQwZ01Dd2dkR1Z0Y0U1aGJXVTdYRzRnSUNBZ0lDQWdJQ0FnSUdoaGMwOTNiaTVqWVd4c0tIUm9hWE1zSUhSbGJYQk9ZVzFsSUQwZ1hDSjBYQ0lnS3lCMFpXMXdTVzVrWlhncElIeDhJSFJsYlhCSmJtUmxlQ0E4SURJd08xeHVJQ0FnSUNBZ0lDQWdJQ0FySzNSbGJYQkpibVJsZUNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6VzNSbGJYQk9ZVzFsWFNBOUlHNTFiR3c3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSE4wYjNBNklHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1a2IyNWxJRDBnZEhKMVpUdGNibHh1SUNBZ0lDQWdkbUZ5SUhKdmIzUkZiblJ5ZVNBOUlIUm9hWE11ZEhKNVJXNTBjbWxsYzFzd1hUdGNiaUFnSUNBZ0lIWmhjaUJ5YjI5MFVtVmpiM0prSUQwZ2NtOXZkRVZ1ZEhKNUxtTnZiWEJzWlhScGIyNDdYRzRnSUNBZ0lDQnBaaUFvY205dmRGSmxZMjl5WkM1MGVYQmxJRDA5UFNCY0luUm9jbTkzWENJcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2NtOXZkRkpsWTI5eVpDNWhjbWM3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuSjJZV3c3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR1JwYzNCaGRHTm9SWGhqWlhCMGFXOXVPaUJtZFc1amRHbHZiaWhsZUdObGNIUnBiMjRwSUh0Y2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG1SdmJtVXBJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2daWGhqWlhCMGFXOXVPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0IyWVhJZ1kyOXVkR1Y0ZENBOUlIUm9hWE03WEc0Z0lDQWdJQ0JtZFc1amRHbHZiaUJvWVc1a2JHVW9iRzlqTENCallYVm5hSFFwSUh0Y2JpQWdJQ0FnSUNBZ2NtVmpiM0prTG5SNWNHVWdQU0JjSW5Sb2NtOTNYQ0k3WEc0Z0lDQWdJQ0FnSUhKbFkyOXlaQzVoY21jZ1BTQmxlR05sY0hScGIyNDdYRzRnSUNBZ0lDQWdJR052Ym5SbGVIUXVibVY0ZENBOUlHeHZZenRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQ0VoWTJGMVoyaDBPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ2RHaHBjeTUwY25sRmJuUnlhV1Z6TG14bGJtZDBhQ0F0SURFN0lHa2dQajBnTURzZ0xTMXBLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQmxiblJ5ZVNBOUlIUm9hWE11ZEhKNVJXNTBjbWxsYzF0cFhUdGNiaUFnSUNBZ0lDQWdkbUZ5SUhKbFkyOXlaQ0E5SUdWdWRISjVMbU52YlhCc1pYUnBiMjQ3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR1Z1ZEhKNUxuUnllVXh2WXlBOVBUMGdYQ0p5YjI5MFhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBdkx5QkZlR05sY0hScGIyNGdkR2h5YjNkdUlHOTFkSE5wWkdVZ2IyWWdZVzU1SUhSeWVTQmliRzlqYXlCMGFHRjBJR052ZFd4a0lHaGhibVJzWlZ4dUlDQWdJQ0FnSUNBZ0lDOHZJR2wwTENCemJ5QnpaWFFnZEdobElHTnZiWEJzWlhScGIyNGdkbUZzZFdVZ2IyWWdkR2hsSUdWdWRHbHlaU0JtZFc1amRHbHZiaUIwYjF4dUlDQWdJQ0FnSUNBZ0lDOHZJSFJvY205M0lIUm9aU0JsZUdObGNIUnBiMjR1WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdoaGJtUnNaU2hjSW1WdVpGd2lLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hsYm5SeWVTNTBjbmxNYjJNZ1BEMGdkR2hwY3k1d2NtVjJLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR2hoYzBOaGRHTm9JRDBnYUdGelQzZHVMbU5oYkd3b1pXNTBjbmtzSUZ3aVkyRjBZMmhNYjJOY0lpazdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHaGhjMFpwYm1Gc2JIa2dQU0JvWVhOUGQyNHVZMkZzYkNobGJuUnllU3dnWENKbWFXNWhiR3g1VEc5alhDSXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLR2hoYzBOaGRHTm9JQ1ltSUdoaGMwWnBibUZzYkhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5CeVpYWWdQQ0JsYm5SeWVTNWpZWFJqYUV4dll5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2FHRnVaR3hsS0dWdWRISjVMbU5oZEdOb1RHOWpMQ0IwY25WbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RHaHBjeTV3Y21WMklEd2daVzUwY25rdVptbHVZV3hzZVV4dll5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2FHRnVaR3hsS0dWdWRISjVMbVpwYm1Gc2JIbE1iMk1wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaG9ZWE5EWVhSamFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNISmxkaUE4SUdWdWRISjVMbU5oZEdOb1RHOWpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm9ZVzVrYkdVb1pXNTBjbmt1WTJGMFkyaE1iMk1zSUhSeWRXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNob1lYTkdhVzVoYkd4NUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1d2NtVjJJRHdnWlc1MGNua3VabWx1WVd4c2VVeHZZeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdhR0Z1Wkd4bEtHVnVkSEo1TG1acGJtRnNiSGxNYjJNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjSW5SeWVTQnpkR0YwWlcxbGJuUWdkMmwwYUc5MWRDQmpZWFJqYUNCdmNpQm1hVzVoYkd4NVhDSXBPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNiaUFnSUNCaFluSjFjSFE2SUdaMWJtTjBhVzl1S0hSNWNHVXNJR0Z5WnlrZ2UxeHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJSFJvYVhNdWRISjVSVzUwY21sbGN5NXNaVzVuZEdnZ0xTQXhPeUJwSUQ0OUlEQTdJQzB0YVNrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnWlc1MGNua2dQU0IwYUdsekxuUnllVVZ1ZEhKcFpYTmJhVjA3WEc0Z0lDQWdJQ0FnSUdsbUlDaGxiblJ5ZVM1MGNubE1iMk1nUEQwZ2RHaHBjeTV3Y21WMklDWW1YRzRnSUNBZ0lDQWdJQ0FnSUNCb1lYTlBkMjR1WTJGc2JDaGxiblJ5ZVN3Z1hDSm1hVzVoYkd4NVRHOWpYQ0lwSUNZbVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQnlaWFlnUENCbGJuUnllUzVtYVc1aGJHeDVURzlqS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdacGJtRnNiSGxGYm5SeWVTQTlJR1Z1ZEhKNU8xeHVJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2xtSUNobWFXNWhiR3g1Ulc1MGNua2dKaVpjYmlBZ0lDQWdJQ0FnSUNBb2RIbHdaU0E5UFQwZ1hDSmljbVZoYTF3aUlIeDhYRzRnSUNBZ0lDQWdJQ0FnSUhSNWNHVWdQVDA5SUZ3aVkyOXVkR2x1ZFdWY0lpa2dKaVpjYmlBZ0lDQWdJQ0FnSUNCbWFXNWhiR3g1Ulc1MGNua3VkSEo1VEc5aklEdzlJR0Z5WnlBbUpseHVJQ0FnSUNBZ0lDQWdJR0Z5WnlBOElHWnBibUZzYkhsRmJuUnllUzVtYVc1aGJHeDVURzlqS1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRWxuYm05eVpTQjBhR1VnWm1sdVlXeHNlU0JsYm5SeWVTQnBaaUJqYjI1MGNtOXNJR2x6SUc1dmRDQnFkVzF3YVc1bklIUnZJR0ZjYmlBZ0lDQWdJQ0FnTHk4Z2JHOWpZWFJwYjI0Z2IzVjBjMmxrWlNCMGFHVWdkSEo1TDJOaGRHTm9JR0pzYjJOckxseHVJQ0FnSUNBZ0lDQm1hVzVoYkd4NVJXNTBjbmtnUFNCdWRXeHNPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0IyWVhJZ2NtVmpiM0prSUQwZ1ptbHVZV3hzZVVWdWRISjVJRDhnWm1sdVlXeHNlVVZ1ZEhKNUxtTnZiWEJzWlhScGIyNGdPaUI3ZlR0Y2JpQWdJQ0FnSUhKbFkyOXlaQzUwZVhCbElEMGdkSGx3WlR0Y2JpQWdJQ0FnSUhKbFkyOXlaQzVoY21jZ1BTQmhjbWM3WEc1Y2JpQWdJQ0FnSUdsbUlDaG1hVzVoYkd4NVJXNTBjbmtwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1WlhoMElEMGdabWx1WVd4c2VVVnVkSEo1TG1acGJtRnNiSGxNYjJNN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbU52YlhCc1pYUmxLSEpsWTI5eVpDazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQkRiMjUwYVc1MVpWTmxiblJwYm1Wc08xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCamIyMXdiR1YwWlRvZ1puVnVZM1JwYjI0b2NtVmpiM0prTENCaFpuUmxja3h2WXlrZ2UxeHVJQ0FnSUNBZ2FXWWdLSEpsWTI5eVpDNTBlWEJsSUQwOVBTQmNJblJvY205M1hDSXBJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2djbVZqYjNKa0xtRnlaenRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYVdZZ0tISmxZMjl5WkM1MGVYQmxJRDA5UFNCY0ltSnlaV0ZyWENJZ2ZIeGNiaUFnSUNBZ0lDQWdJQ0J5WldOdmNtUXVkSGx3WlNBOVBUMGdYQ0pqYjI1MGFXNTFaVndpS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym1WNGRDQTlJSEpsWTI5eVpDNWhjbWM3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hKbFkyOXlaQzUwZVhCbElEMDlQU0JjSW5KbGRIVnlibHdpS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y25aaGJDQTlJSEpsWTI5eVpDNWhjbWM3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVibVY0ZENBOUlGd2laVzVrWENJN1hHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tISmxZMjl5WkM1MGVYQmxJRDA5UFNCY0ltNXZjbTFoYkZ3aUlDWW1JR0ZtZEdWeVRHOWpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVibVY0ZENBOUlHRm1kR1Z5VEc5ak8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnlaWFIxY200Z1EyOXVkR2x1ZFdWVFpXNTBhVzVsYkR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWm1sdWFYTm9PaUJtZFc1amRHbHZiaWhtYVc1aGJHeDVURzlqS1NCN1hHNGdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdkR2hwY3k1MGNubEZiblJ5YVdWekxteGxibWQwYUNBdElERTdJR2tnUGowZ01Ec2dMUzFwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJsYm5SeWVTQTlJSFJvYVhNdWRISjVSVzUwY21sbGMxdHBYVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHVnVkSEo1TG1acGJtRnNiSGxNYjJNZ1BUMDlJR1pwYm1Gc2JIbE1iMk1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVqYjIxd2JHVjBaU2hsYm5SeWVTNWpiMjF3YkdWMGFXOXVMQ0JsYm5SeWVTNWhablJsY2t4dll5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdYQ0pqWVhSamFGd2lPaUJtZFc1amRHbHZiaWgwY25sTWIyTXBJSHRjYmlBZ0lDQWdJR1p2Y2lBb2RtRnlJR2tnUFNCMGFHbHpMblJ5ZVVWdWRISnBaWE11YkdWdVozUm9JQzBnTVRzZ2FTQStQU0F3T3lBdExXa3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHVnVkSEo1SUQwZ2RHaHBjeTUwY25sRmJuUnlhV1Z6VzJsZE8xeHVJQ0FnSUNBZ0lDQnBaaUFvWlc1MGNua3VkSEo1VEc5aklEMDlQU0IwY25sTWIyTXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdjbVZqYjNKa0lEMGdaVzUwY25rdVkyOXRjR3hsZEdsdmJqdGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2NtVmpiM0prTG5SNWNHVWdQVDA5SUZ3aWRHaHliM2RjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlIUm9jbTkzYmlBOUlISmxZMjl5WkM1aGNtYzdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYTmxkRlJ5ZVVWdWRISjVLR1Z1ZEhKNUtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2NtOTNianRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdkx5QlVhR1VnWTI5dWRHVjRkQzVqWVhSamFDQnRaWFJvYjJRZ2JYVnpkQ0J2Ym14NUlHSmxJR05oYkd4bFpDQjNhWFJvSUdFZ2JHOWpZWFJwYjI1Y2JpQWdJQ0FnSUM4dklHRnlaM1Z0Wlc1MElIUm9ZWFFnWTI5eWNtVnpjRzl1WkhNZ2RHOGdZU0JyYm05M2JpQmpZWFJqYUNCaWJHOWpheTVjYmlBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaGNJbWxzYkdWbllXd2dZMkYwWTJnZ1lYUjBaVzF3ZEZ3aUtUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1pHVnNaV2RoZEdWWmFXVnNaRG9nWm5WdVkzUnBiMjRvYVhSbGNtRmliR1VzSUhKbGMzVnNkRTVoYldVc0lHNWxlSFJNYjJNcElIdGNiaUFnSUNBZ0lIUm9hWE11WkdWc1pXZGhkR1VnUFNCN1hHNGdJQ0FnSUNBZ0lHbDBaWEpoZEc5eU9pQjJZV3gxWlhNb2FYUmxjbUZpYkdVcExGeHVJQ0FnSUNBZ0lDQnlaWE4xYkhST1lXMWxPaUJ5WlhOMWJIUk9ZVzFsTEZ4dUlDQWdJQ0FnSUNCdVpYaDBURzlqT2lCdVpYaDBURzlqWEc0Z0lDQWdJQ0I5TzF4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnUTI5dWRHbHVkV1ZUWlc1MGFXNWxiRHRjYmlBZ0lDQjlYRzRnSUgwN1hHNTlLU2hjYmlBZ0x5OGdRVzF2Ym1jZ2RHaGxJSFpoY21sdmRYTWdkSEpwWTJ0eklHWnZjaUJ2WW5SaGFXNXBibWNnWVNCeVpXWmxjbVZ1WTJVZ2RHOGdkR2hsSUdkc2IySmhiRnh1SUNBdkx5QnZZbXBsWTNRc0lIUm9hWE1nYzJWbGJYTWdkRzhnWW1VZ2RHaGxJRzF2YzNRZ2NtVnNhV0ZpYkdVZ2RHVmphRzVwY1hWbElIUm9ZWFFnWkc5bGN5QnViM1JjYmlBZ0x5OGdkWE5sSUdsdVpHbHlaV04wSUdWMllXd2dLSGRvYVdOb0lIWnBiMnhoZEdWeklFTnZiblJsYm5RZ1UyVmpkWEpwZEhrZ1VHOXNhV041S1M1Y2JpQWdkSGx3Wlc5bUlHZHNiMkpoYkNBOVBUMGdYQ0p2WW1wbFkzUmNJaUEvSUdkc2IySmhiQ0E2WEc0Z0lIUjVjR1Z2WmlCM2FXNWtiM2NnUFQwOUlGd2liMkpxWldOMFhDSWdQeUIzYVc1a2IzY2dPaUIwYUdselhHNHBPMXh1SWwxOSIsInZhciBSZWNvbm5lY3RpbmdXZWJTb2NrZXQgPSByZXF1aXJlKFwiUmVjb25uZWN0aW5nV2ViU29ja2V0XCIpO1xuXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICByb290LlNjcmVlbkludmFkZXIgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICB2YXIgQVBJID0gZnVuY3Rpb24odXJpKSB7XG4gICAgdGhpcy5zb2NrZXQgPSBuZXcgUmVjb25uZWN0aW5nV2ViU29ja2V0KHVyaSk7XG4gICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gdGhpcy5vbk1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gdGhpcy5vbkVycm9yLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zb2NrZXQub25vcGVuID0gdGhpcy5vbk9wZW4uYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZXZlbnRIYW5kbGVycyA9IHt9O1xuICB9O1xuICBmdW5jdGlvbiB3YWl0Rm9yU29ja2V0Q29ubmVjdGlvbihzb2NrZXQsIGNhbGxiYWNrKXtcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc29ja2V0LnJlYWR5U3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZihjYWxsYmFjayAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdhaXRGb3JTb2NrZXRDb25uZWN0aW9uKHNvY2tldCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIDEwMCk7IC8vIHdhaXQgMTAwIG1pbGlzZWNvbmQgZm9yIHRoZSBjb25uZWN0aW9uLi4uXG4gIH1cblxuICBBUEkucHJvdG90eXBlID0ge1xuICAgIG9uUmVjZWl2ZTogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHRoaXMub25SZWNlaXZlQ2FsbGJhY2sgPSBmbjtcbiAgICB9LFxuICAgIG9uTWVzc2FnZTogZnVuY3Rpb24oZXYpIHtcbiAgICAgIHRyeSB7XG4gICAgICB2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShldi5kYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKGV2LmRhdGEpXG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodXBkYXRlKSkge1xuICAgICAgICAvLyBpbml0aWFsIGZ1bGwgc3luYy5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHVwZGF0ZTtcbiAgICAgICAgdGhpcy5zdGF0ZS5ldmVudHMgPSB7fTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZSkgeyByZXR1cm47IH1cblxuICAgICAgICBpZiAodXBkYXRlWzBdLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIC8vIHVwZGF0ZSBoYXMgdGhlIGZvcm1hdCBrZXksIG9wZXJhdGlvbiwgdmFsdWUgaGVyZS5cbiAgICAgICAgICB2YXIgcGF0aCA9IHVwZGF0ZVswXS5zcGxpdCgnLycpO1xuICAgICAgICAgIHBhdGguc2hpZnQoKTtcbiAgICAgICAgICBpZih1cGRhdGVbMV0gPT0gXCJXXCIpIHtcbiAgICAgICAgICAgIFx0aWYodXBkYXRlWzJdLmNoYXJBdCgwKSA9PSAnYicpIHtcblx0XHRcdHVwZGF0ZVsyXSA9IHVwZGF0ZVsyXSA9PT0gXCJidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlXG5cdFx0fSBlbHNlIGlmKHVwZGF0ZVsyXS5jaGFyQXQoMCkgPT0gJ24nKSB7XG5cdFx0XHRpZih1cGRhdGVbMl0uaW5kZXhPZihcIi5cIikgPiAtMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0dXBkYXRlWzJdID0gcGFyc2VGbG9hdCh1cGRhdGVbMl0uc3Vic3RyaW5nKDEpKTtcblx0XHRcdGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlWzJdID0gcGFyc2VJbnQodXBkYXRlWzJdLnN1YnN0cmluZygxKSk7XG5cdFx0fSBlbHNlIGlmKHVwZGF0ZVsyXS5jaGFyQXQoMCkgPT0gJ3MnKSB7XG5cdFx0XHR1cGRhdGVbMl0gPSB1cGRhdGVbMl0uc3Vic3RyaW5nKDEpO1xuXHRcdH1cblx0XHQvL2NvbnNvbGUuZGVidWcoJ2NoYW5naW5nICcgKyB1cGRhdGVbMF0gKyAnIGZyb20gJyArXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgdGhpcy5nZXRCeVBhdGgodGhpcy5zdGF0ZSwgcGF0aC5zbGljZSgwKSkgK1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICcgdG8gJyArIHVwZGF0ZVsyXSk7XG5cdFx0dGhpcy5zZXRCeVBhdGgodGhpcy5zdGF0ZSwgcGF0aC5zbGljZSgwKSwgdXBkYXRlWzJdKTtcblx0XG5cdFx0dmFyIGV2ZW50TmFtZSA9IHVwZGF0ZVswXTtcblx0XHRsZXQgZWggPSB0aGlzLmV2ZW50SGFuZGxlcnM7XG5cdFx0T2JqZWN0LmtleXMoZWgpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgXHRcdFx0aWYgKGV2ZW50TmFtZS5zdGFydHNXaXRoKGtleSkpIHtcblx0XHRcdFx0dmFyIGhhbmRsZXJzID0gZWhba2V5XSAgIFxuXHRcdFx0XHRpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVycykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdGhhbmRsZXIoZXZlbnROYW1lLCB1cGRhdGVbMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXHRcdH0pO1xuICAgXG4gXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcdFxuXHRcdH0pO1xuICAgICAgICAgIH0gZWxzZSBpZih1cGRhdGVbMV0gPT0gXCJEXCIpIHtcblx0XHR0aGlzLmRlbGV0ZUJ5UGF0aCh0aGlzLnN0YXRlLCBwYXRoLnNsaWNlKDApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdXBkYXRlIGhhcyB0aGUgZm9sbG93aW5nIGZvcm1hdDogZXZlbnQsIG9wZXJhdGlvbiwgdmFsdWVcbiAgICAgICAgICB2YXIgZXZlbnROYW1lID0gdXBkYXRlWzBdLFxuICAgICAgICAgICAgICBwYXJhbXMgPSB1cGRhdGVbMl07XG4gICAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV07XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaGFuZGxlcnMpKSB7XG4gICAgICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgaGFuZGxlcihwYXJhbXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfX1jYXRjaChlcnJvcikge1xuICAgICAgaWYgKHR5cGVvZih0aGlzLm9uUmVjZWl2ZUNhbGxiYWNrKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5vblJlY2VpdmVDYWxsYmFjayhldi5kYXRhKTtcbiAgICAgIH1cbiAgICAgIH0gIFxuICAgIH0sXG4gICAgc2V0QnlQYXRoOiBmdW5jdGlvbiAob2JqLCBwYXRoLCB2YWx1ZSkge1xuICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICBrZXkgPSBwYXRoLnNoaWZ0KCk7XG4gICAgICAgIGlmKGtleS5jaGFyQXQoMCkgPT0gJyMnKSB7XG4gICAgICAgICAgLy9lbmNvdW50ZXJlZCBhbiBhcnJheSBlbGVtZW50XG4gICAgICAgICAga2V5ID0gcGFyc2VJbnQoa2V5LnN1YnN0cmluZygxKSk7XG4gICAgICAgIH0gZWxzZSBpZihrZXkgPT0gXCIuXCIpIHtcbiAgICAgICAgICAvL2VuY291bnRlcmVkIGEgZGlyZWN0b3J5IGVsZW1lbnQgLT4gaWdub3JlXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZihvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYocGF0aC5sZW5ndGggPj0gMSAmJiBwYXRoWzBdID09IFwiLlwiKSB7XG4gICAgICAgICAgICBpZih2YWx1ZS5jaGFyQXQoMCkgPT0gJ0EnKSB7XG4gICAgICAgICAgICAgIC8vY3JlYXRlIGFuIGFycmF5XG4gICAgICAgICAgICAgIG9ialtrZXldID0gW107XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy9jcmVhdGUgYW4gb2JqZWN0XG4gICAgICAgICAgICAgIG9ialtrZXldID0ge307XG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmpba2V5XSA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnNldEJ5UGF0aChvYmpba2V5XSwgcGF0aCwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICBpZihrZXkgPT0gXCIuXCIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVsZXRlQnlQYXRoOiBmdW5jdGlvbiAob2JqLCBwYXRoKSB7XG4gICAgICBpZiAocGF0aC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGtleSA9IHBhdGguc2hpZnQoKTtcbiAgICAgICAgaWYoa2V5LmNoYXJBdCgwKSA9PSAnIycpIHtcbiAgICAgICAgICBrZXkgPSBwYXJzZUludChrZXkuc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHBhdGhbMF0gPT0gXCIuXCIpIHtcbiAgICAgICAgICBpZihBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIGlmKG9iai5sZW5ndGggPCAyKVxuICAgICAgICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgb2JqLnNwbGljZShrZXksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgb2JqW2tleV07XG5cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGV0ZUJ5UGF0aChvYmpba2V5XSwgcGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBrZXkgPSBwYXRoLnNoaWZ0KCk7XG4gICAgICAgIGRlbGV0ZSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9LCBcblx0XHRnZXRCeVBhdGg6IGZ1bmN0aW9uKG9iaiwgcGF0aCkge1xuICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkgPSBwYXRoLnNoaWZ0KCk7XG4gICAgICAgIGlmKGtleSA9PSBcIi5cIikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnlQYXRoKG9ialtrZXldLCBwYXRoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24oZXZlbnROYW1lLCBmbikge1xuICAgICAgdGhpcy5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0gPSB0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdLnB1c2goZm4pO1xuICAgIH0sXG4gICAgb25FcnJvcjogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBmbjtcbiAgICB9LFxuICAgIG9uT3BlbjogZnVuY3Rpb24oZXYpIHtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICBpZih0aGlzLm9ucmVhZHkpXG5cdHRoaXMub25yZWFkeSgpO1xuICAgIH0sXG4gICAgb25SZWFkeTogZnVuY3Rpb24oZm4pIHtcbiAgICAgIHRoaXMub25yZWFkeSA9IGZuO1xuICAgIH0sXG4gICAgdXBkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuc29ja2V0LnNlbmQoJ3NldHVwJyk7XG4gICAgfSxcbiAgICBzZW5kOiBmdW5jdGlvbihjb21tYW5kLCBrZXksIHZhbHVlKSB7XG4gICAgIGxldCBzb2NrID0gdGhpcy5zb2NrZXQ7XG4gICAgIGxldCBhcmd2ID0gYXJndW1lbnRzO1xuICAgICAgd2FpdEZvclNvY2tldENvbm5lY3Rpb24odGhpcy5zb2NrZXQsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHNvY2suc2VuZChcbiAgICAgICAgICBKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgICAgICAgICAgICBhcmd2KSkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBwdWJsaXNoOiBmdW5jdGlvbihrZXksIG9wLCB2YWx1ZSkge1xuICAgICAgaWYodmFsdWUgPT0gbnVsbCkge1xuXHR2YWx1ZSA9IG9wO1xuXHRvcCA9IFwiV1wiO1xuICAgICAgfVxuXHRcbiAgICAgIHRoaXMuc2VuZCgncHVibGlzaCcsIGtleSwgb3AsIHZhbHVlKTtcbiAgICB9LFxuICAgIGdldFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cbn07XG5cbiAgcmV0dXJuIEFQSTtcbn0pKTtcbiIsIi8vIE1JVCBMaWNlbnNlOlxuLy9cbi8vIENvcHlyaWdodCAoYykgMjAxMC0yMDEyLCBKb2UgV2FsbmVzXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLyoqXG4gKiBUaGlzIGJlaGF2ZXMgbGlrZSBhIFdlYlNvY2tldCBpbiBldmVyeSB3YXksIGV4Y2VwdCBpZiBpdCBmYWlscyB0byBjb25uZWN0LFxuICogb3IgaXQgZ2V0cyBkaXNjb25uZWN0ZWQsIGl0IHdpbGwgcmVwZWF0ZWRseSBwb2xsIHVudGlsIGl0IHN1Y2Nlc3NmdWxseSBjb25uZWN0c1xuICogYWdhaW4uXG4gKlxuICogSXQgaXMgQVBJIGNvbXBhdGlibGUsIHNvIHdoZW4geW91IGhhdmU6XG4gKiAgIHdzID0gbmV3IFdlYlNvY2tldCgnd3M6Ly8uLi4uJyk7XG4gKiB5b3UgY2FuIHJlcGxhY2Ugd2l0aDpcbiAqICAgd3MgPSBuZXcgUmVjb25uZWN0aW5nV2ViU29ja2V0KCd3czovLy4uLi4nKTtcbiAqXG4gKiBUaGUgZXZlbnQgc3RyZWFtIHdpbGwgdHlwaWNhbGx5IGxvb2sgbGlrZTpcbiAqICBvbmNvbm5lY3RpbmdcbiAqICBvbm9wZW5cbiAqICBvbm1lc3NhZ2VcbiAqICBvbm1lc3NhZ2VcbiAqICBvbmNsb3NlIC8vIGxvc3QgY29ubmVjdGlvblxuICogIG9uY29ubmVjdGluZ1xuICogIG9ub3BlbiAgLy8gc29tZXRpbWUgbGF0ZXIuLi5cbiAqICBvbm1lc3NhZ2VcbiAqICBvbm1lc3NhZ2VcbiAqICBldGMuLi5cbiAqXG4gKiBJdCBpcyBBUEkgY29tcGF0aWJsZSB3aXRoIHRoZSBzdGFuZGFyZCBXZWJTb2NrZXQgQVBJLCBhcGFydCBmcm9tIHRoZSBmb2xsb3dpbmcgbWVtYmVyczpcbiAqXG4gKiAtIGBidWZmZXJlZEFtb3VudGBcbiAqIC0gYGV4dGVuc2lvbnNgXG4gKiAtIGBiaW5hcnlUeXBlYFxuICpcbiAqIExhdGVzdCB2ZXJzaW9uOiBodHRwczovL2dpdGh1Yi5jb20vam9ld2FsbmVzL3JlY29ubmVjdGluZy13ZWJzb2NrZXQvXG4gKiAtIEpvZSBXYWxuZXNcbiAqXG4gKiBTeW50YXhcbiAqID09PT09PVxuICogdmFyIHNvY2tldCA9IG5ldyBSZWNvbm5lY3RpbmdXZWJTb2NrZXQodXJsLCBwcm90b2NvbHMsIG9wdGlvbnMpO1xuICpcbiAqIFBhcmFtZXRlcnNcbiAqID09PT09PT09PT1cbiAqIHVybCAtIFRoZSB1cmwgeW91IGFyZSBjb25uZWN0aW5nIHRvLlxuICogcHJvdG9jb2xzIC0gT3B0aW9uYWwgc3RyaW5nIG9yIGFycmF5IG9mIHByb3RvY29scy5cbiAqIG9wdGlvbnMgLSBTZWUgYmVsb3dcbiAqXG4gKiBPcHRpb25zXG4gKiA9PT09PT09XG4gKiBPcHRpb25zIGNhbiBlaXRoZXIgYmUgcGFzc2VkIHVwb24gaW5zdGFudGlhdGlvbiBvciBzZXQgYWZ0ZXIgaW5zdGFudGlhdGlvbjpcbiAqXG4gKiB2YXIgc29ja2V0ID0gbmV3IFJlY29ubmVjdGluZ1dlYlNvY2tldCh1cmwsIG51bGwsIHsgZGVidWc6IHRydWUsIHJlY29ubmVjdEludGVydmFsOiA0MDAwIH0pO1xuICpcbiAqIG9yXG4gKlxuICogdmFyIHNvY2tldCA9IG5ldyBSZWNvbm5lY3RpbmdXZWJTb2NrZXQodXJsKTtcbiAqIHNvY2tldC5kZWJ1ZyA9IHRydWU7XG4gKiBzb2NrZXQucmVjb25uZWN0SW50ZXJ2YWwgPSA0MDAwO1xuICpcbiAqIGRlYnVnXG4gKiAtIFdoZXRoZXIgdGhpcyBpbnN0YW5jZSBzaG91bGQgbG9nIGRlYnVnIG1lc3NhZ2VzLiBBY2NlcHRzIHRydWUgb3IgZmFsc2UuIERlZmF1bHQ6IGZhbHNlLlxuICpcbiAqIGF1dG9tYXRpY09wZW5cbiAqIC0gV2hldGhlciBvciBub3QgdGhlIHdlYnNvY2tldCBzaG91bGQgYXR0ZW1wdCB0byBjb25uZWN0IGltbWVkaWF0ZWx5IHVwb24gaW5zdGFudGlhdGlvbi4gVGhlIHNvY2tldCBjYW4gYmUgbWFudWFsbHkgb3BlbmVkIG9yIGNsb3NlZCBhdCBhbnkgdGltZSB1c2luZyB3cy5vcGVuKCkgYW5kIHdzLmNsb3NlKCkuXG4gKlxuICogcmVjb25uZWN0SW50ZXJ2YWxcbiAqIC0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcmVjb25uZWN0LiBBY2NlcHRzIGludGVnZXIuIERlZmF1bHQ6IDEwMDAuXG4gKlxuICogbWF4UmVjb25uZWN0SW50ZXJ2YWxcbiAqIC0gVGhlIG1heGltdW0gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheSBhIHJlY29ubmVjdGlvbiBhdHRlbXB0LiBBY2NlcHRzIGludGVnZXIuIERlZmF1bHQ6IDMwMDAwLlxuICpcbiAqIHJlY29ubmVjdERlY2F5XG4gKiAtIFRoZSByYXRlIG9mIGluY3JlYXNlIG9mIHRoZSByZWNvbm5lY3QgZGVsYXkuIEFsbG93cyByZWNvbm5lY3QgYXR0ZW1wdHMgdG8gYmFjayBvZmYgd2hlbiBwcm9ibGVtcyBwZXJzaXN0LiBBY2NlcHRzIGludGVnZXIgb3IgZmxvYXQuIERlZmF1bHQ6IDEuNS5cbiAqXG4gKiB0aW1lb3V0SW50ZXJ2YWxcbiAqIC0gVGhlIG1heGltdW0gdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gd2FpdCBmb3IgYSBjb25uZWN0aW9uIHRvIHN1Y2NlZWQgYmVmb3JlIGNsb3NpbmcgYW5kIHJldHJ5aW5nLiBBY2NlcHRzIGludGVnZXIuIERlZmF1bHQ6IDIwMDAuXG4gKlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFtdLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKXtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2xvYmFsLlJlY29ubmVjdGluZ1dlYlNvY2tldCA9IGZhY3RvcnkoKTtcbiAgICB9XG59KSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAoISgnV2ViU29ja2V0JyBpbiB3aW5kb3cpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQodXJsLCBwcm90b2NvbHMsIG9wdGlvbnMpIHtcblxuICAgICAgICAvLyBEZWZhdWx0IHNldHRpbmdzXG4gICAgICAgIHZhciBzZXR0aW5ncyA9IHtcblxuICAgICAgICAgICAgLyoqIFdoZXRoZXIgdGhpcyBpbnN0YW5jZSBzaG91bGQgbG9nIGRlYnVnIG1lc3NhZ2VzLiAqL1xuICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxuXG4gICAgICAgICAgICAvKiogV2hldGhlciBvciBub3QgdGhlIHdlYnNvY2tldCBzaG91bGQgYXR0ZW1wdCB0byBjb25uZWN0IGltbWVkaWF0ZWx5IHVwb24gaW5zdGFudGlhdGlvbi4gKi9cbiAgICAgICAgICAgIGF1dG9tYXRpY09wZW46IHRydWUsXG5cbiAgICAgICAgICAgIC8qKiBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheSBiZWZvcmUgYXR0ZW1wdGluZyB0byByZWNvbm5lY3QuICovXG4gICAgICAgICAgICByZWNvbm5lY3RJbnRlcnZhbDogMTAwMCxcbiAgICAgICAgICAgIC8qKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5IGEgcmVjb25uZWN0aW9uIGF0dGVtcHQuICovXG4gICAgICAgICAgICBtYXhSZWNvbm5lY3RJbnRlcnZhbDogMzAwMDAsXG4gICAgICAgICAgICAvKiogVGhlIHJhdGUgb2YgaW5jcmVhc2Ugb2YgdGhlIHJlY29ubmVjdCBkZWxheS4gQWxsb3dzIHJlY29ubmVjdCBhdHRlbXB0cyB0byBiYWNrIG9mZiB3aGVuIHByb2JsZW1zIHBlcnNpc3QuICovXG4gICAgICAgICAgICByZWNvbm5lY3REZWNheTogMS41LFxuXG4gICAgICAgICAgICAvKiogVGhlIG1heGltdW0gdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gd2FpdCBmb3IgYSBjb25uZWN0aW9uIHRvIHN1Y2NlZWQgYmVmb3JlIGNsb3NpbmcgYW5kIHJldHJ5aW5nLiAqL1xuICAgICAgICAgICAgdGltZW91dEludGVydmFsOiAyMDAwLFxuXG4gICAgICAgICAgICAvKiogVGhlIG1heGltdW0gbnVtYmVyIG9mIHJlY29ubmVjdGlvbiBhdHRlbXB0cyB0byBtYWtlLiBVbmxpbWl0ZWQgaWYgbnVsbC4gKi9cbiAgICAgICAgICAgIG1heFJlY29ubmVjdEF0dGVtcHRzOiBudWxsLFxuXG4gICAgICAgICAgICAvKiogVGhlIGJpbmFyeSB0eXBlLCBwb3NzaWJsZSB2YWx1ZXMgJ2Jsb2InIG9yICdhcnJheWJ1ZmZlcicsIGRlZmF1bHQgJ2Jsb2InLiAqL1xuICAgICAgICAgICAgYmluYXJ5VHlwZTogJ2Jsb2InXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zKSB7IG9wdGlvbnMgPSB7fTsgfVxuXG4gICAgICAgIC8vIE92ZXJ3cml0ZSBhbmQgZGVmaW5lIHNldHRpbmdzIHdpdGggb3B0aW9ucyBpZiB0aGV5IGV4aXN0LlxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc1trZXldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gc2V0dGluZ3Nba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZXNlIHNob3VsZCBiZSB0cmVhdGVkIGFzIHJlYWQtb25seSBwcm9wZXJ0aWVzXG5cbiAgICAgICAgLyoqIFRoZSBVUkwgYXMgcmVzb2x2ZWQgYnkgdGhlIGNvbnN0cnVjdG9yLiBUaGlzIGlzIGFsd2F5cyBhbiBhYnNvbHV0ZSBVUkwuIFJlYWQgb25seS4gKi9cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG5cbiAgICAgICAgLyoqIFRoZSBudW1iZXIgb2YgYXR0ZW1wdGVkIHJlY29ubmVjdHMgc2luY2Ugc3RhcnRpbmcsIG9yIHRoZSBsYXN0IHN1Y2Nlc3NmdWwgY29ubmVjdGlvbi4gUmVhZCBvbmx5LiAqL1xuICAgICAgICB0aGlzLnJlY29ubmVjdEF0dGVtcHRzID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGNvbm5lY3Rpb24uXG4gICAgICAgICAqIENhbiBiZSBvbmUgb2Y6IFdlYlNvY2tldC5DT05ORUNUSU5HLCBXZWJTb2NrZXQuT1BFTiwgV2ViU29ja2V0LkNMT1NJTkcsIFdlYlNvY2tldC5DTE9TRURcbiAgICAgICAgICogUmVhZCBvbmx5LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNPTk5FQ1RJTkc7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc3RyaW5nIGluZGljYXRpbmcgdGhlIG5hbWUgb2YgdGhlIHN1Yi1wcm90b2NvbCB0aGUgc2VydmVyIHNlbGVjdGVkOyB0aGlzIHdpbGwgYmUgb25lIG9mXG4gICAgICAgICAqIHRoZSBzdHJpbmdzIHNwZWNpZmllZCBpbiB0aGUgcHJvdG9jb2xzIHBhcmFtZXRlciB3aGVuIGNyZWF0aW5nIHRoZSBXZWJTb2NrZXQgb2JqZWN0LlxuICAgICAgICAgKiBSZWFkIG9ubHkuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByb3RvY29sID0gbnVsbDtcblxuICAgICAgICAvLyBQcml2YXRlIHN0YXRlIHZhcmlhYmxlc1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHdzO1xuICAgICAgICB2YXIgZm9yY2VkQ2xvc2UgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRpbWVkT3V0ID0gZmFsc2U7XG4gICAgICAgIHZhciBldmVudFRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIC8vIFdpcmUgdXAgXCJvbipcIiBwcm9wZXJ0aWVzIGFzIGV2ZW50IGhhbmRsZXJzXG5cbiAgICAgICAgZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7IHNlbGYub25vcGVuKGV2ZW50KTsgfSk7XG4gICAgICAgIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgICAgICBmdW5jdGlvbihldmVudCkgeyBzZWxmLm9uY2xvc2UoZXZlbnQpOyB9KTtcbiAgICAgICAgZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignY29ubmVjdGluZycsIGZ1bmN0aW9uKGV2ZW50KSB7IHNlbGYub25jb25uZWN0aW5nKGV2ZW50KTsgfSk7XG4gICAgICAgIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAgICBmdW5jdGlvbihldmVudCkgeyBzZWxmLm9ubWVzc2FnZShldmVudCk7IH0pO1xuICAgICAgICBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsICAgICAgZnVuY3Rpb24oZXZlbnQpIHsgc2VsZi5vbmVycm9yKGV2ZW50KTsgfSk7XG5cbiAgICAgICAgLy8gRXhwb3NlIHRoZSBBUEkgcmVxdWlyZWQgYnkgRXZlbnRUYXJnZXRcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIgPSBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyLmJpbmQoZXZlbnRUYXJnZXQpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBldmVudFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyLmJpbmQoZXZlbnRUYXJnZXQpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQgPSBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50LmJpbmQoZXZlbnRUYXJnZXQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGlzIGZ1bmN0aW9uIGdlbmVyYXRlcyBhbiBldmVudCB0aGF0IGlzIGNvbXBhdGlibGUgd2l0aCBzdGFuZGFyZFxuICAgICAgICAgKiBjb21wbGlhbnQgYnJvd3NlcnMgYW5kIElFOSAtIElFMTFcbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyB3aWxsIHByZXZlbnQgdGhlIGVycm9yOlxuICAgICAgICAgKiBPYmplY3QgZG9lc24ndCBzdXBwb3J0IHRoaXMgYWN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTkzNDUzOTIvd2h5LWFyZW50LW15LXBhcmFtZXRlcnMtZ2V0dGluZy1wYXNzZWQtdGhyb3VnaC10by1hLWRpc3BhdGNoZWQtZXZlbnQvMTkzNDU1NjMjMTkzNDU1NjNcbiAgICAgICAgICogQHBhcmFtIHMgU3RyaW5nIFRoZSBuYW1lIHRoYXQgdGhlIGV2ZW50IHNob3VsZCB1c2VcbiAgICAgICAgICogQHBhcmFtIGFyZ3MgT2JqZWN0IGFuIG9wdGlvbmFsIG9iamVjdCB0aGF0IHRoZSBldmVudCB3aWxsIHVzZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVFdmVudChzLCBhcmdzKSB7XG4gICAgICAgIFx0dmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgIFx0ZXZ0LmluaXRDdXN0b21FdmVudChzLCBmYWxzZSwgZmFsc2UsIGFyZ3MpO1xuICAgICAgICBcdHJldHVybiBldnQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vcGVuID0gZnVuY3Rpb24gKHJlY29ubmVjdEF0dGVtcHQpIHtcbiAgICAgICAgICAgIHdzID0gbmV3IFdlYlNvY2tldChzZWxmLnVybCwgcHJvdG9jb2xzIHx8IFtdKTtcbiAgICAgICAgICAgIHdzLmJpbmFyeVR5cGUgPSB0aGlzLmJpbmFyeVR5cGU7XG5cbiAgICAgICAgICAgIGlmIChyZWNvbm5lY3RBdHRlbXB0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF4UmVjb25uZWN0QXR0ZW1wdHMgJiYgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyA+IHRoaXMubWF4UmVjb25uZWN0QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChnZW5lcmF0ZUV2ZW50KCdjb25uZWN0aW5nJykpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjb25uZWN0QXR0ZW1wdHMgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5kZWJ1ZyB8fCBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuZGVidWdBbGwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdSZWNvbm5lY3RpbmdXZWJTb2NrZXQnLCAnYXR0ZW1wdC1jb25uZWN0Jywgc2VsZi51cmwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgbG9jYWxXcyA9IHdzO1xuICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRlYnVnIHx8IFJlY29ubmVjdGluZ1dlYlNvY2tldC5kZWJ1Z0FsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdSZWNvbm5lY3RpbmdXZWJTb2NrZXQnLCAnY29ubmVjdGlvbi10aW1lb3V0Jywgc2VsZi51cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aW1lZE91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbG9jYWxXcy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHRpbWVkT3V0ID0gZmFsc2U7XG4gICAgICAgICAgICB9LCBzZWxmLnRpbWVvdXRJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgIHdzLm9ub3BlbiA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRlYnVnIHx8IFJlY29ubmVjdGluZ1dlYlNvY2tldC5kZWJ1Z0FsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdSZWNvbm5lY3RpbmdXZWJTb2NrZXQnLCAnb25vcGVuJywgc2VsZi51cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLnByb3RvY29sID0gd3MucHJvdG9jb2w7XG4gICAgICAgICAgICAgICAgc2VsZi5yZWFkeVN0YXRlID0gV2ViU29ja2V0Lk9QRU47XG4gICAgICAgICAgICAgICAgc2VsZi5yZWNvbm5lY3RBdHRlbXB0cyA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBnZW5lcmF0ZUV2ZW50KCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgZS5pc1JlY29ubmVjdCA9IHJlY29ubmVjdEF0dGVtcHQ7XG4gICAgICAgICAgICAgICAgcmVjb25uZWN0QXR0ZW1wdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB3cy5vbmNsb3NlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgd3MgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChmb3JjZWRDbG9zZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ0xPU0VEO1xuICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KGdlbmVyYXRlRXZlbnQoJ2Nsb3NlJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DT05ORUNUSU5HO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGdlbmVyYXRlRXZlbnQoJ2Nvbm5lY3RpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgZS5jb2RlID0gZXZlbnQuY29kZTtcbiAgICAgICAgICAgICAgICAgICAgZS5yZWFzb24gPSBldmVudC5yZWFzb247XG4gICAgICAgICAgICAgICAgICAgIGUud2FzQ2xlYW4gPSBldmVudC53YXNDbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNvbm5lY3RBdHRlbXB0ICYmICF0aW1lZE91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGVidWcgfHwgUmVjb25uZWN0aW5nV2ViU29ja2V0LmRlYnVnQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnUmVjb25uZWN0aW5nV2ViU29ja2V0JywgJ29uY2xvc2UnLCBzZWxmLnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KGdlbmVyYXRlRXZlbnQoJ2Nsb3NlJykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVvdXQgPSBzZWxmLnJlY29ubmVjdEludGVydmFsICogTWF0aC5wb3coc2VsZi5yZWNvbm5lY3REZWNheSwgc2VsZi5yZWNvbm5lY3RBdHRlbXB0cyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlY29ubmVjdEF0dGVtcHRzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm9wZW4odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRpbWVvdXQgPiBzZWxmLm1heFJlY29ubmVjdEludGVydmFsID8gc2VsZi5tYXhSZWNvbm5lY3RJbnRlcnZhbCA6IHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRlYnVnIHx8IFJlY29ubmVjdGluZ1dlYlNvY2tldC5kZWJ1Z0FsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdSZWNvbm5lY3RpbmdXZWJTb2NrZXQnLCAnb25tZXNzYWdlJywgc2VsZi51cmwsIGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZSA9IGdlbmVyYXRlRXZlbnQoJ21lc3NhZ2UnKTtcbiAgICAgICAgICAgICAgICBlLmRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZGVidWcgfHwgUmVjb25uZWN0aW5nV2ViU29ja2V0LmRlYnVnQWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1JlY29ubmVjdGluZ1dlYlNvY2tldCcsICdvbmVycm9yJywgc2VsZi51cmwsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChnZW5lcmF0ZUV2ZW50KCdlcnJvcicpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCB0byBjcmVhdGUgYSB3ZWJzb2NrZXQgdXBvbiBpbnN0YW50aWF0aW9uXG4gICAgICAgIGlmICh0aGlzLmF1dG9tYXRpY09wZW4gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFuc21pdHMgZGF0YSB0byB0aGUgc2VydmVyIG92ZXIgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZGF0YSBhIHRleHQgc3RyaW5nLCBBcnJheUJ1ZmZlciBvciBCbG9iIHRvIHNlbmQgdG8gdGhlIHNlcnZlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VuZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGlmICh3cykge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRlYnVnIHx8IFJlY29ubmVjdGluZ1dlYlNvY2tldC5kZWJ1Z0FsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdSZWNvbm5lY3RpbmdXZWJTb2NrZXQnLCAnc2VuZCcsIHNlbGYudXJsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdzLnNlbmQoZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93ICdJTlZBTElEX1NUQVRFX0VSUiA6IFBhdXNpbmcgdG8gcmVjb25uZWN0IHdlYnNvY2tldCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENsb3NlcyB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24gb3IgY29ubmVjdGlvbiBhdHRlbXB0LCBpZiBhbnkuXG4gICAgICAgICAqIElmIHRoZSBjb25uZWN0aW9uIGlzIGFscmVhZHkgQ0xPU0VELCB0aGlzIG1ldGhvZCBkb2VzIG5vdGhpbmcuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNsb3NlID0gZnVuY3Rpb24oY29kZSwgcmVhc29uKSB7XG4gICAgICAgICAgICAvLyBEZWZhdWx0IENMT1NFX05PUk1BTCBjb2RlXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvZGUgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb2RlID0gMTAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcmNlZENsb3NlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICh3cykge1xuICAgICAgICAgICAgICAgIHdzLmNsb3NlKGNvZGUsIHJlYXNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgcHVibGljIEFQSSBtZXRob2QgdG8gcmVmcmVzaCB0aGUgY29ubmVjdGlvbiBpZiBzdGlsbCBvcGVuIChjbG9zZSwgcmUtb3BlbikuXG4gICAgICAgICAqIEZvciBleGFtcGxlLCBpZiB0aGUgYXBwIHN1c3BlY3RzIGJhZCBkYXRhIC8gbWlzc2VkIGhlYXJ0IGJlYXRzLCBpdCBjYW4gdHJ5IHRvIHJlZnJlc2guXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh3cykge1xuICAgICAgICAgICAgICAgIHdzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uJ3MgcmVhZHlTdGF0ZSBjaGFuZ2VzIHRvIE9QRU47XG4gICAgICogdGhpcyBpbmRpY2F0ZXMgdGhhdCB0aGUgY29ubmVjdGlvbiBpcyByZWFkeSB0byBzZW5kIGFuZCByZWNlaXZlIGRhdGEuXG4gICAgICovXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbihldmVudCkge307XG4gICAgLyoqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbidzIHJlYWR5U3RhdGUgY2hhbmdlcyB0byBDTE9TRUQuICovXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5vbmNsb3NlID0gZnVuY3Rpb24oZXZlbnQpIHt9O1xuICAgIC8qKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiBhIGNvbm5lY3Rpb24gYmVnaW5zIGJlaW5nIGF0dGVtcHRlZC4gKi9cbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLm9uY29ubmVjdGluZyA9IGZ1bmN0aW9uKGV2ZW50KSB7fTtcbiAgICAvKiogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkIGZyb20gdGhlIHNlcnZlci4gKi9cbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7fTtcbiAgICAvKiogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gYW4gZXJyb3Igb2NjdXJzLiAqL1xuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7fTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgYWxsIGluc3RhbmNlcyBvZiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQgc2hvdWxkIGxvZyBkZWJ1ZyBtZXNzYWdlcy5cbiAgICAgKiBTZXR0aW5nIHRoaXMgdG8gdHJ1ZSBpcyB0aGUgZXF1aXZhbGVudCBvZiBzZXR0aW5nIGFsbCBpbnN0YW5jZXMgb2YgUmVjb25uZWN0aW5nV2ViU29ja2V0LmRlYnVnIHRvIHRydWUuXG4gICAgICovXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LmRlYnVnQWxsID0gZmFsc2U7XG5cbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ09OTkVDVElORyA9IFdlYlNvY2tldC5DT05ORUNUSU5HO1xuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5PUEVOID0gV2ViU29ja2V0Lk9QRU47XG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LkNMT1NJTkcgPSBXZWJTb2NrZXQuQ0xPU0lORztcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuQ0xPU0VEID0gV2ViU29ja2V0LkNMT1NFRDtcblxuICAgIHJldHVybiBSZWNvbm5lY3RpbmdXZWJTb2NrZXQ7XG59KTtcbiIsIiFmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjt2YXIgZT10LkhUTUxDYW52YXNFbGVtZW50JiZ0LkhUTUxDYW52YXNFbGVtZW50LnByb3RvdHlwZSxvPXQuQmxvYiYmZnVuY3Rpb24oKXt0cnl7cmV0dXJuIEJvb2xlYW4obmV3IEJsb2IpfWNhdGNoKHQpe3JldHVybiExfX0oKSxuPW8mJnQuVWludDhBcnJheSYmZnVuY3Rpb24oKXt0cnl7cmV0dXJuIDEwMD09PW5ldyBCbG9iKFtuZXcgVWludDhBcnJheSgxMDApXSkuc2l6ZX1jYXRjaCh0KXtyZXR1cm4hMX19KCkscj10LkJsb2JCdWlsZGVyfHx0LldlYktpdEJsb2JCdWlsZGVyfHx0Lk1vekJsb2JCdWlsZGVyfHx0Lk1TQmxvYkJ1aWxkZXIsYT0vXmRhdGE6KCguKj8pKDtjaGFyc2V0PS4qPyk/KSg7YmFzZTY0KT8sLyxpPShvfHxyKSYmdC5hdG9iJiZ0LkFycmF5QnVmZmVyJiZ0LlVpbnQ4QXJyYXkmJmZ1bmN0aW9uKHQpe3ZhciBlLGksbCx1LGIsYyxkLEIsZjtpZihlPXQubWF0Y2goYSksIWUpdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBkYXRhIFVSSVwiKTtmb3IoaT1lWzJdP2VbMV06XCJ0ZXh0L3BsYWluXCIrKGVbM118fFwiO2NoYXJzZXQ9VVMtQVNDSUlcIiksbD0hIWVbNF0sdT10LnNsaWNlKGVbMF0ubGVuZ3RoKSxiPWw/YXRvYih1KTpkZWNvZGVVUklDb21wb25lbnQodSksYz1uZXcgQXJyYXlCdWZmZXIoYi5sZW5ndGgpLGQ9bmV3IFVpbnQ4QXJyYXkoYyksQj0wO0I8Yi5sZW5ndGg7Qis9MSlkW0JdPWIuY2hhckNvZGVBdChCKTtyZXR1cm4gbz9uZXcgQmxvYihbbj9kOmNdLHt0eXBlOml9KTooZj1uZXcgcixmLmFwcGVuZChjKSxmLmdldEJsb2IoaSkpfTt0LkhUTUxDYW52YXNFbGVtZW50JiYhZS50b0Jsb2ImJihlLm1vekdldEFzRmlsZT9lLnRvQmxvYj1mdW5jdGlvbih0LG8sbil7dChuJiZlLnRvRGF0YVVSTCYmaT9pKHRoaXMudG9EYXRhVVJMKG8sbikpOnRoaXMubW96R2V0QXNGaWxlKFwiYmxvYlwiLG8pKX06ZS50b0RhdGFVUkwmJmkmJihlLnRvQmxvYj1mdW5jdGlvbih0LGUsbyl7dChpKHRoaXMudG9EYXRhVVJMKGUsbykpKX0pKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGl9KTpcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1pOnQuZGF0YVVSTHRvQmxvYj1pfSh3aW5kb3cpO1xuIiwiLypcdFNXRk9iamVjdCB2Mi4yIDxodHRwOi8vY29kZS5nb29nbGUuY29tL3Avc3dmb2JqZWN0Lz4gXG5cdGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSA8aHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHA+IFxuKi9cbnZhciBzd2ZvYmplY3Q9ZnVuY3Rpb24oKXt2YXIgRD1cInVuZGVmaW5lZFwiLHI9XCJvYmplY3RcIixTPVwiU2hvY2t3YXZlIEZsYXNoXCIsVz1cIlNob2Nrd2F2ZUZsYXNoLlNob2Nrd2F2ZUZsYXNoXCIscT1cImFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoXCIsUj1cIlNXRk9iamVjdEV4cHJJbnN0XCIseD1cIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLE89d2luZG93LGo9ZG9jdW1lbnQsdD1uYXZpZ2F0b3IsVD1mYWxzZSxVPVtoXSxvPVtdLE49W10sST1bXSxsLFEsRSxCLEo9ZmFsc2UsYT1mYWxzZSxuLEcsbT10cnVlLE09ZnVuY3Rpb24oKXt2YXIgYWE9dHlwZW9mIGouZ2V0RWxlbWVudEJ5SWQhPUQmJnR5cGVvZiBqLmdldEVsZW1lbnRzQnlUYWdOYW1lIT1EJiZ0eXBlb2Ygai5jcmVhdGVFbGVtZW50IT1ELGFoPXQudXNlckFnZW50LnRvTG93ZXJDYXNlKCksWT10LnBsYXRmb3JtLnRvTG93ZXJDYXNlKCksYWU9WT8vd2luLy50ZXN0KFkpOi93aW4vLnRlc3QoYWgpLGFjPVk/L21hYy8udGVzdChZKTovbWFjLy50ZXN0KGFoKSxhZj0vd2Via2l0Ly50ZXN0KGFoKT9wYXJzZUZsb2F0KGFoLnJlcGxhY2UoL14uKndlYmtpdFxcLyhcXGQrKFxcLlxcZCspPykuKiQvLFwiJDFcIikpOmZhbHNlLFg9IStcIlxcdjFcIixhZz1bMCwwLDBdLGFiPW51bGw7aWYodHlwZW9mIHQucGx1Z2lucyE9RCYmdHlwZW9mIHQucGx1Z2luc1tTXT09cil7YWI9dC5wbHVnaW5zW1NdLmRlc2NyaXB0aW9uO2lmKGFiJiYhKHR5cGVvZiB0Lm1pbWVUeXBlcyE9RCYmdC5taW1lVHlwZXNbcV0mJiF0Lm1pbWVUeXBlc1txXS5lbmFibGVkUGx1Z2luKSl7VD10cnVlO1g9ZmFsc2U7YWI9YWIucmVwbGFjZSgvXi4qXFxzKyhcXFMrXFxzK1xcUyskKS8sXCIkMVwiKTthZ1swXT1wYXJzZUludChhYi5yZXBsYWNlKC9eKC4qKVxcLi4qJC8sXCIkMVwiKSwxMCk7YWdbMV09cGFyc2VJbnQoYWIucmVwbGFjZSgvXi4qXFwuKC4qKVxccy4qJC8sXCIkMVwiKSwxMCk7YWdbMl09L1thLXpBLVpdLy50ZXN0KGFiKT9wYXJzZUludChhYi5yZXBsYWNlKC9eLipbYS16QS1aXSsoLiopJC8sXCIkMVwiKSwxMCk6MH19ZWxzZXtpZih0eXBlb2YgTy5BY3RpdmVYT2JqZWN0IT1EKXt0cnl7dmFyIGFkPW5ldyBBY3RpdmVYT2JqZWN0KFcpO2lmKGFkKXthYj1hZC5HZXRWYXJpYWJsZShcIiR2ZXJzaW9uXCIpO2lmKGFiKXtYPXRydWU7YWI9YWIuc3BsaXQoXCIgXCIpWzFdLnNwbGl0KFwiLFwiKTthZz1bcGFyc2VJbnQoYWJbMF0sMTApLHBhcnNlSW50KGFiWzFdLDEwKSxwYXJzZUludChhYlsyXSwxMCldfX19Y2F0Y2goWil7fX19cmV0dXJue3czOmFhLHB2OmFnLHdrOmFmLGllOlgsd2luOmFlLG1hYzphY319KCksaz1mdW5jdGlvbigpe2lmKCFNLnczKXtyZXR1cm59aWYoKHR5cGVvZiBqLnJlYWR5U3RhdGUhPUQmJmoucmVhZHlTdGF0ZT09XCJjb21wbGV0ZVwiKXx8KHR5cGVvZiBqLnJlYWR5U3RhdGU9PUQmJihqLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXXx8ai5ib2R5KSkpe2YoKX1pZighSil7aWYodHlwZW9mIGouYWRkRXZlbnRMaXN0ZW5lciE9RCl7ai5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGYsZmFsc2UpfWlmKE0uaWUmJk0ud2luKXtqLmF0dGFjaEV2ZW50KHgsZnVuY3Rpb24oKXtpZihqLnJlYWR5U3RhdGU9PVwiY29tcGxldGVcIil7ai5kZXRhY2hFdmVudCh4LGFyZ3VtZW50cy5jYWxsZWUpO2YoKX19KTtpZihPPT10b3ApeyhmdW5jdGlvbigpe2lmKEope3JldHVybn10cnl7ai5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwoXCJsZWZ0XCIpfWNhdGNoKFgpe3NldFRpbWVvdXQoYXJndW1lbnRzLmNhbGxlZSwwKTtyZXR1cm59ZigpfSkoKX19aWYoTS53ayl7KGZ1bmN0aW9uKCl7aWYoSil7cmV0dXJufWlmKCEvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGoucmVhZHlTdGF0ZSkpe3NldFRpbWVvdXQoYXJndW1lbnRzLmNhbGxlZSwwKTtyZXR1cm59ZigpfSkoKX1zKGYpfX0oKTtmdW5jdGlvbiBmKCl7aWYoSil7cmV0dXJufXRyeXt2YXIgWj1qLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChDKFwic3BhblwiKSk7Wi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFopfWNhdGNoKGFhKXtyZXR1cm59Sj10cnVlO3ZhciBYPVUubGVuZ3RoO2Zvcih2YXIgWT0wO1k8WDtZKyspe1VbWV0oKX19ZnVuY3Rpb24gSyhYKXtpZihKKXtYKCl9ZWxzZXtVW1UubGVuZ3RoXT1YfX1mdW5jdGlvbiBzKFkpe2lmKHR5cGVvZiBPLmFkZEV2ZW50TGlzdGVuZXIhPUQpe08uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixZLGZhbHNlKX1lbHNle2lmKHR5cGVvZiBqLmFkZEV2ZW50TGlzdGVuZXIhPUQpe2ouYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixZLGZhbHNlKX1lbHNle2lmKHR5cGVvZiBPLmF0dGFjaEV2ZW50IT1EKXtpKE8sXCJvbmxvYWRcIixZKX1lbHNle2lmKHR5cGVvZiBPLm9ubG9hZD09XCJmdW5jdGlvblwiKXt2YXIgWD1PLm9ubG9hZDtPLm9ubG9hZD1mdW5jdGlvbigpe1goKTtZKCl9fWVsc2V7Ty5vbmxvYWQ9WX19fX19ZnVuY3Rpb24gaCgpe2lmKFQpe1YoKX1lbHNle0goKX19ZnVuY3Rpb24gVigpe3ZhciBYPWouZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdO3ZhciBhYT1DKHIpO2FhLnNldEF0dHJpYnV0ZShcInR5cGVcIixxKTt2YXIgWj1YLmFwcGVuZENoaWxkKGFhKTtpZihaKXt2YXIgWT0wOyhmdW5jdGlvbigpe2lmKHR5cGVvZiBaLkdldFZhcmlhYmxlIT1EKXt2YXIgYWI9Wi5HZXRWYXJpYWJsZShcIiR2ZXJzaW9uXCIpO2lmKGFiKXthYj1hYi5zcGxpdChcIiBcIilbMV0uc3BsaXQoXCIsXCIpO00ucHY9W3BhcnNlSW50KGFiWzBdLDEwKSxwYXJzZUludChhYlsxXSwxMCkscGFyc2VJbnQoYWJbMl0sMTApXX19ZWxzZXtpZihZPDEwKXtZKys7c2V0VGltZW91dChhcmd1bWVudHMuY2FsbGVlLDEwKTtyZXR1cm59fVgucmVtb3ZlQ2hpbGQoYWEpO1o9bnVsbDtIKCl9KSgpfWVsc2V7SCgpfX1mdW5jdGlvbiBIKCl7dmFyIGFnPW8ubGVuZ3RoO2lmKGFnPjApe2Zvcih2YXIgYWY9MDthZjxhZzthZisrKXt2YXIgWT1vW2FmXS5pZDt2YXIgYWI9b1thZl0uY2FsbGJhY2tGbjt2YXIgYWE9e3N1Y2Nlc3M6ZmFsc2UsaWQ6WX07aWYoTS5wdlswXT4wKXt2YXIgYWU9YyhZKTtpZihhZSl7aWYoRihvW2FmXS5zd2ZWZXJzaW9uKSYmIShNLndrJiZNLndrPDMxMikpe3coWSx0cnVlKTtpZihhYil7YWEuc3VjY2Vzcz10cnVlO2FhLnJlZj16KFkpO2FiKGFhKX19ZWxzZXtpZihvW2FmXS5leHByZXNzSW5zdGFsbCYmQSgpKXt2YXIgYWk9e307YWkuZGF0YT1vW2FmXS5leHByZXNzSW5zdGFsbDthaS53aWR0aD1hZS5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKXx8XCIwXCI7YWkuaGVpZ2h0PWFlLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKXx8XCIwXCI7aWYoYWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikpe2FpLnN0eWxlY2xhc3M9YWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil9aWYoYWUuZ2V0QXR0cmlidXRlKFwiYWxpZ25cIikpe2FpLmFsaWduPWFlLmdldEF0dHJpYnV0ZShcImFsaWduXCIpfXZhciBhaD17fTt2YXIgWD1hZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcmFtXCIpO3ZhciBhYz1YLmxlbmd0aDtmb3IodmFyIGFkPTA7YWQ8YWM7YWQrKyl7aWYoWFthZF0uZ2V0QXR0cmlidXRlKFwibmFtZVwiKS50b0xvd2VyQ2FzZSgpIT1cIm1vdmllXCIpe2FoW1hbYWRdLmdldEF0dHJpYnV0ZShcIm5hbWVcIildPVhbYWRdLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfX1QKGFpLGFoLFksYWIpfWVsc2V7cChhZSk7aWYoYWIpe2FiKGFhKX19fX19ZWxzZXt3KFksdHJ1ZSk7aWYoYWIpe3ZhciBaPXooWSk7aWYoWiYmdHlwZW9mIFouU2V0VmFyaWFibGUhPUQpe2FhLnN1Y2Nlc3M9dHJ1ZTthYS5yZWY9Wn1hYihhYSl9fX19fWZ1bmN0aW9uIHooYWEpe3ZhciBYPW51bGw7dmFyIFk9YyhhYSk7aWYoWSYmWS5ub2RlTmFtZT09XCJPQkpFQ1RcIil7aWYodHlwZW9mIFkuU2V0VmFyaWFibGUhPUQpe1g9WX1lbHNle3ZhciBaPVkuZ2V0RWxlbWVudHNCeVRhZ05hbWUocilbMF07aWYoWil7WD1afX19cmV0dXJuIFh9ZnVuY3Rpb24gQSgpe3JldHVybiAhYSYmRihcIjYuMC42NVwiKSYmKE0ud2lufHxNLm1hYykmJiEoTS53ayYmTS53azwzMTIpfWZ1bmN0aW9uIFAoYWEsYWIsWCxaKXthPXRydWU7RT1afHxudWxsO0I9e3N1Y2Nlc3M6ZmFsc2UsaWQ6WH07dmFyIGFlPWMoWCk7aWYoYWUpe2lmKGFlLm5vZGVOYW1lPT1cIk9CSkVDVFwiKXtsPWcoYWUpO1E9bnVsbH1lbHNle2w9YWU7UT1YfWFhLmlkPVI7aWYodHlwZW9mIGFhLndpZHRoPT1EfHwoIS8lJC8udGVzdChhYS53aWR0aCkmJnBhcnNlSW50KGFhLndpZHRoLDEwKTwzMTApKXthYS53aWR0aD1cIjMxMFwifWlmKHR5cGVvZiBhYS5oZWlnaHQ9PUR8fCghLyUkLy50ZXN0KGFhLmhlaWdodCkmJnBhcnNlSW50KGFhLmhlaWdodCwxMCk8MTM3KSl7YWEuaGVpZ2h0PVwiMTM3XCJ9ai50aXRsZT1qLnRpdGxlLnNsaWNlKDAsNDcpK1wiIC0gRmxhc2ggUGxheWVyIEluc3RhbGxhdGlvblwiO3ZhciBhZD1NLmllJiZNLndpbj9cIkFjdGl2ZVhcIjpcIlBsdWdJblwiLGFjPVwiTU1yZWRpcmVjdFVSTD1cIitPLmxvY2F0aW9uLnRvU3RyaW5nKCkucmVwbGFjZSgvJi9nLFwiJTI2XCIpK1wiJk1NcGxheWVyVHlwZT1cIithZCtcIiZNTWRvY3RpdGxlPVwiK2oudGl0bGU7aWYodHlwZW9mIGFiLmZsYXNodmFycyE9RCl7YWIuZmxhc2h2YXJzKz1cIiZcIithY31lbHNle2FiLmZsYXNodmFycz1hY31pZihNLmllJiZNLndpbiYmYWUucmVhZHlTdGF0ZSE9NCl7dmFyIFk9QyhcImRpdlwiKTtYKz1cIlNXRk9iamVjdE5ld1wiO1kuc2V0QXR0cmlidXRlKFwiaWRcIixYKTthZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShZLGFlKTthZS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiOyhmdW5jdGlvbigpe2lmKGFlLnJlYWR5U3RhdGU9PTQpe2FlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWUpfWVsc2V7c2V0VGltZW91dChhcmd1bWVudHMuY2FsbGVlLDEwKX19KSgpfXUoYWEsYWIsWCl9fWZ1bmN0aW9uIHAoWSl7aWYoTS5pZSYmTS53aW4mJlkucmVhZHlTdGF0ZSE9NCl7dmFyIFg9QyhcImRpdlwiKTtZLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKFgsWSk7WC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChnKFkpLFgpO1kuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjsoZnVuY3Rpb24oKXtpZihZLnJlYWR5U3RhdGU9PTQpe1kucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChZKX1lbHNle3NldFRpbWVvdXQoYXJndW1lbnRzLmNhbGxlZSwxMCl9fSkoKX1lbHNle1kucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZyhZKSxZKX19ZnVuY3Rpb24gZyhhYil7dmFyIGFhPUMoXCJkaXZcIik7aWYoTS53aW4mJk0uaWUpe2FhLmlubmVySFRNTD1hYi5pbm5lckhUTUx9ZWxzZXt2YXIgWT1hYi5nZXRFbGVtZW50c0J5VGFnTmFtZShyKVswXTtpZihZKXt2YXIgYWQ9WS5jaGlsZE5vZGVzO2lmKGFkKXt2YXIgWD1hZC5sZW5ndGg7Zm9yKHZhciBaPTA7WjxYO1orKyl7aWYoIShhZFtaXS5ub2RlVHlwZT09MSYmYWRbWl0ubm9kZU5hbWU9PVwiUEFSQU1cIikmJiEoYWRbWl0ubm9kZVR5cGU9PTgpKXthYS5hcHBlbmRDaGlsZChhZFtaXS5jbG9uZU5vZGUodHJ1ZSkpfX19fX1yZXR1cm4gYWF9ZnVuY3Rpb24gdShhaSxhZyxZKXt2YXIgWCxhYT1jKFkpO2lmKE0ud2smJk0ud2s8MzEyKXtyZXR1cm4gWH1pZihhYSl7aWYodHlwZW9mIGFpLmlkPT1EKXthaS5pZD1ZfWlmKE0uaWUmJk0ud2luKXt2YXIgYWg9XCJcIjtmb3IodmFyIGFlIGluIGFpKXtpZihhaVthZV0hPU9iamVjdC5wcm90b3R5cGVbYWVdKXtpZihhZS50b0xvd2VyQ2FzZSgpPT1cImRhdGFcIil7YWcubW92aWU9YWlbYWVdfWVsc2V7aWYoYWUudG9Mb3dlckNhc2UoKT09XCJzdHlsZWNsYXNzXCIpe2FoKz0nIGNsYXNzPVwiJythaVthZV0rJ1wiJ31lbHNle2lmKGFlLnRvTG93ZXJDYXNlKCkhPVwiY2xhc3NpZFwiKXthaCs9XCIgXCIrYWUrJz1cIicrYWlbYWVdKydcIid9fX19fXZhciBhZj1cIlwiO2Zvcih2YXIgYWQgaW4gYWcpe2lmKGFnW2FkXSE9T2JqZWN0LnByb3RvdHlwZVthZF0pe2FmKz0nPHBhcmFtIG5hbWU9XCInK2FkKydcIiB2YWx1ZT1cIicrYWdbYWRdKydcIiAvPid9fWFhLm91dGVySFRNTD0nPG9iamVjdCBjbGFzc2lkPVwiY2xzaWQ6RDI3Q0RCNkUtQUU2RC0xMWNmLTk2QjgtNDQ0NTUzNTQwMDAwXCInK2FoK1wiPlwiK2FmK1wiPC9vYmplY3Q+XCI7TltOLmxlbmd0aF09YWkuaWQ7WD1jKGFpLmlkKX1lbHNle3ZhciBaPUMocik7Wi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIscSk7Zm9yKHZhciBhYyBpbiBhaSl7aWYoYWlbYWNdIT1PYmplY3QucHJvdG90eXBlW2FjXSl7aWYoYWMudG9Mb3dlckNhc2UoKT09XCJzdHlsZWNsYXNzXCIpe1ouc2V0QXR0cmlidXRlKFwiY2xhc3NcIixhaVthY10pfWVsc2V7aWYoYWMudG9Mb3dlckNhc2UoKSE9XCJjbGFzc2lkXCIpe1ouc2V0QXR0cmlidXRlKGFjLGFpW2FjXSl9fX19Zm9yKHZhciBhYiBpbiBhZyl7aWYoYWdbYWJdIT1PYmplY3QucHJvdG90eXBlW2FiXSYmYWIudG9Mb3dlckNhc2UoKSE9XCJtb3ZpZVwiKXtlKFosYWIsYWdbYWJdKX19YWEucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoWixhYSk7WD1afX1yZXR1cm4gWH1mdW5jdGlvbiBlKFosWCxZKXt2YXIgYWE9QyhcInBhcmFtXCIpO2FhLnNldEF0dHJpYnV0ZShcIm5hbWVcIixYKTthYS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFkpO1ouYXBwZW5kQ2hpbGQoYWEpfWZ1bmN0aW9uIHkoWSl7dmFyIFg9YyhZKTtpZihYJiZYLm5vZGVOYW1lPT1cIk9CSkVDVFwiKXtpZihNLmllJiZNLndpbil7WC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiOyhmdW5jdGlvbigpe2lmKFgucmVhZHlTdGF0ZT09NCl7YihZKX1lbHNle3NldFRpbWVvdXQoYXJndW1lbnRzLmNhbGxlZSwxMCl9fSkoKX1lbHNle1gucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChYKX19fWZ1bmN0aW9uIGIoWil7dmFyIFk9YyhaKTtpZihZKXtmb3IodmFyIFggaW4gWSl7aWYodHlwZW9mIFlbWF09PVwiZnVuY3Rpb25cIil7WVtYXT1udWxsfX1ZLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoWSl9fWZ1bmN0aW9uIGMoWil7dmFyIFg9bnVsbDt0cnl7WD1qLmdldEVsZW1lbnRCeUlkKFopfWNhdGNoKFkpe31yZXR1cm4gWH1mdW5jdGlvbiBDKFgpe3JldHVybiBqLmNyZWF0ZUVsZW1lbnQoWCl9ZnVuY3Rpb24gaShaLFgsWSl7Wi5hdHRhY2hFdmVudChYLFkpO0lbSS5sZW5ndGhdPVtaLFgsWV19ZnVuY3Rpb24gRihaKXt2YXIgWT1NLnB2LFg9Wi5zcGxpdChcIi5cIik7WFswXT1wYXJzZUludChYWzBdLDEwKTtYWzFdPXBhcnNlSW50KFhbMV0sMTApfHwwO1hbMl09cGFyc2VJbnQoWFsyXSwxMCl8fDA7cmV0dXJuKFlbMF0+WFswXXx8KFlbMF09PVhbMF0mJllbMV0+WFsxXSl8fChZWzBdPT1YWzBdJiZZWzFdPT1YWzFdJiZZWzJdPj1YWzJdKSk/dHJ1ZTpmYWxzZX1mdW5jdGlvbiB2KGFjLFksYWQsYWIpe2lmKE0uaWUmJk0ubWFjKXtyZXR1cm59dmFyIGFhPWouZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO2lmKCFhYSl7cmV0dXJufXZhciBYPShhZCYmdHlwZW9mIGFkPT1cInN0cmluZ1wiKT9hZDpcInNjcmVlblwiO2lmKGFiKXtuPW51bGw7Rz1udWxsfWlmKCFufHxHIT1YKXt2YXIgWj1DKFwic3R5bGVcIik7Wi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0L2Nzc1wiKTtaLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsWCk7bj1hYS5hcHBlbmRDaGlsZChaKTtpZihNLmllJiZNLndpbiYmdHlwZW9mIGouc3R5bGVTaGVldHMhPUQmJmouc3R5bGVTaGVldHMubGVuZ3RoPjApe249ai5zdHlsZVNoZWV0c1tqLnN0eWxlU2hlZXRzLmxlbmd0aC0xXX1HPVh9aWYoTS5pZSYmTS53aW4pe2lmKG4mJnR5cGVvZiBuLmFkZFJ1bGU9PXIpe24uYWRkUnVsZShhYyxZKX19ZWxzZXtpZihuJiZ0eXBlb2Ygai5jcmVhdGVUZXh0Tm9kZSE9RCl7bi5hcHBlbmRDaGlsZChqLmNyZWF0ZVRleHROb2RlKGFjK1wiIHtcIitZK1wifVwiKSl9fX1mdW5jdGlvbiB3KFosWCl7aWYoIW0pe3JldHVybn12YXIgWT1YP1widmlzaWJsZVwiOlwiaGlkZGVuXCI7aWYoSiYmYyhaKSl7YyhaKS5zdHlsZS52aXNpYmlsaXR5PVl9ZWxzZXt2KFwiI1wiK1osXCJ2aXNpYmlsaXR5OlwiK1kpfX1mdW5jdGlvbiBMKFkpe3ZhciBaPS9bXFxcXFxcXCI8PlxcLjtdLzt2YXIgWD1aLmV4ZWMoWSkhPW51bGw7cmV0dXJuIFgmJnR5cGVvZiBlbmNvZGVVUklDb21wb25lbnQhPUQ/ZW5jb2RlVVJJQ29tcG9uZW50KFkpOll9dmFyIGQ9ZnVuY3Rpb24oKXtpZihNLmllJiZNLndpbil7d2luZG93LmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixmdW5jdGlvbigpe3ZhciBhYz1JLmxlbmd0aDtmb3IodmFyIGFiPTA7YWI8YWM7YWIrKyl7SVthYl1bMF0uZGV0YWNoRXZlbnQoSVthYl1bMV0sSVthYl1bMl0pfXZhciBaPU4ubGVuZ3RoO2Zvcih2YXIgYWE9MDthYTxaO2FhKyspe3koTlthYV0pfWZvcih2YXIgWSBpbiBNKXtNW1ldPW51bGx9TT1udWxsO2Zvcih2YXIgWCBpbiBzd2ZvYmplY3Qpe3N3Zm9iamVjdFtYXT1udWxsfXN3Zm9iamVjdD1udWxsfSl9fSgpO3JldHVybntyZWdpc3Rlck9iamVjdDpmdW5jdGlvbihhYixYLGFhLFope2lmKE0udzMmJmFiJiZYKXt2YXIgWT17fTtZLmlkPWFiO1kuc3dmVmVyc2lvbj1YO1kuZXhwcmVzc0luc3RhbGw9YWE7WS5jYWxsYmFja0ZuPVo7b1tvLmxlbmd0aF09WTt3KGFiLGZhbHNlKX1lbHNle2lmKFope1ooe3N1Y2Nlc3M6ZmFsc2UsaWQ6YWJ9KX19fSxnZXRPYmplY3RCeUlkOmZ1bmN0aW9uKFgpe2lmKE0udzMpe3JldHVybiB6KFgpfX0sZW1iZWRTV0Y6ZnVuY3Rpb24oYWIsYWgsYWUsYWcsWSxhYSxaLGFkLGFmLGFjKXt2YXIgWD17c3VjY2VzczpmYWxzZSxpZDphaH07aWYoTS53MyYmIShNLndrJiZNLndrPDMxMikmJmFiJiZhaCYmYWUmJmFnJiZZKXt3KGFoLGZhbHNlKTtLKGZ1bmN0aW9uKCl7YWUrPVwiXCI7YWcrPVwiXCI7dmFyIGFqPXt9O2lmKGFmJiZ0eXBlb2YgYWY9PT1yKXtmb3IodmFyIGFsIGluIGFmKXthalthbF09YWZbYWxdfX1hai5kYXRhPWFiO2FqLndpZHRoPWFlO2FqLmhlaWdodD1hZzt2YXIgYW09e307aWYoYWQmJnR5cGVvZiBhZD09PXIpe2Zvcih2YXIgYWsgaW4gYWQpe2FtW2FrXT1hZFtha119fWlmKFomJnR5cGVvZiBaPT09cil7Zm9yKHZhciBhaSBpbiBaKXtpZih0eXBlb2YgYW0uZmxhc2h2YXJzIT1EKXthbS5mbGFzaHZhcnMrPVwiJlwiK2FpK1wiPVwiK1pbYWldfWVsc2V7YW0uZmxhc2h2YXJzPWFpK1wiPVwiK1pbYWldfX19aWYoRihZKSl7dmFyIGFuPXUoYWosYW0sYWgpO2lmKGFqLmlkPT1haCl7dyhhaCx0cnVlKX1YLnN1Y2Nlc3M9dHJ1ZTtYLnJlZj1hbn1lbHNle2lmKGFhJiZBKCkpe2FqLmRhdGE9YWE7UChhaixhbSxhaCxhYyk7cmV0dXJufWVsc2V7dyhhaCx0cnVlKX19aWYoYWMpe2FjKFgpfX0pfWVsc2V7aWYoYWMpe2FjKFgpfX19LHN3aXRjaE9mZkF1dG9IaWRlU2hvdzpmdW5jdGlvbigpe209ZmFsc2V9LHVhOk0sZ2V0Rmxhc2hQbGF5ZXJWZXJzaW9uOmZ1bmN0aW9uKCl7cmV0dXJue21ham9yOk0ucHZbMF0sbWlub3I6TS5wdlsxXSxyZWxlYXNlOk0ucHZbMl19fSxoYXNGbGFzaFBsYXllclZlcnNpb246RixjcmVhdGVTV0Y6ZnVuY3Rpb24oWixZLFgpe2lmKE0udzMpe3JldHVybiB1KFosWSxYKX1lbHNle3JldHVybiB1bmRlZmluZWR9fSxzaG93RXhwcmVzc0luc3RhbGw6ZnVuY3Rpb24oWixhYSxYLFkpe2lmKE0udzMmJkEoKSl7UChaLGFhLFgsWSl9fSxyZW1vdmVTV0Y6ZnVuY3Rpb24oWCl7aWYoTS53Myl7eShYKX19LGNyZWF0ZUNTUzpmdW5jdGlvbihhYSxaLFksWCl7aWYoTS53Myl7dihhYSxaLFksWCl9fSxhZGREb21Mb2FkRXZlbnQ6SyxhZGRMb2FkRXZlbnQ6cyxnZXRRdWVyeVBhcmFtVmFsdWU6ZnVuY3Rpb24oYWEpe3ZhciBaPWoubG9jYXRpb24uc2VhcmNofHxqLmxvY2F0aW9uLmhhc2g7aWYoWil7aWYoL1xcPy8udGVzdChaKSl7Wj1aLnNwbGl0KFwiP1wiKVsxXX1pZihhYT09bnVsbCl7cmV0dXJuIEwoWil9dmFyIFk9Wi5zcGxpdChcIiZcIik7Zm9yKHZhciBYPTA7WDxZLmxlbmd0aDtYKyspe2lmKFlbWF0uc3Vic3RyaW5nKDAsWVtYXS5pbmRleE9mKFwiPVwiKSk9PWFhKXtyZXR1cm4gTChZW1hdLnN1YnN0cmluZygoWVtYXS5pbmRleE9mKFwiPVwiKSsxKSkpfX19cmV0dXJuXCJcIn0sZXhwcmVzc0luc3RhbGxDYWxsYmFjazpmdW5jdGlvbigpe2lmKGEpe3ZhciBYPWMoUik7aWYoWCYmbCl7WC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChsLFgpO2lmKFEpe3coUSx0cnVlKTtpZihNLmllJiZNLndpbil7bC5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIn19aWYoRSl7RShCKX19YT1mYWxzZX19fX0oKTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNvY2tldFVyaTogJ3dzczovL2xpZWJ0LWRpY2gub3JnOjgxMzAnXG59O1xuIiwiaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvYnJvd3Nlci1wb2x5ZmlsbC5qcyc7XG5cbmltcG9ydCBBUEkgZnJvbSAnamFub3NoLmpzJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnO1xuXG52YXIgamFub3NoID0gbmV3IEFQSShjb25maWcuc29ja2V0VXJpKTtcbi8vaW1wb3J0IEpwZWdDYW1lcmFTd2YgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL2pwZWctY2FtZXJhL2Rpc3QvanBlZ19jYW1lcmEuc3dmJztcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL2pwZWctY2FtZXJhL2Rpc3Qvc3dmb2JqZWN0Lm1pbi5qcyc7XG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9qcGVnLWNhbWVyYS9kaXN0L2NhbnZhcy10by1ibG9iLm1pbi5qcyc7XG5cbmltcG9ydCBKcGVnQ2FtZXJhIGZyb20gJ2pwZWctY2FtZXJhLWVzNic7XG5cbmZ1bmN0aW9uIEFycmF5QnVmZmVyVG9TdHJpbmcoYnVmZmVyKSB7XG4gICAgcmV0dXJuIEJpbmFyeVRvU3RyaW5nKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5ldyBVaW50OEFycmF5KGJ1ZmZlcikpKSk7XG59XG5cbmZ1bmN0aW9uIEJpbmFyeVRvU3RyaW5nKGJpbmFyeSkge1xuICAgIHZhciBlcnJvcjtcblxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGJpbmFyeSkpO1xuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgICBlcnJvciA9IF9lcnJvcjtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgVVJJRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5hcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gd2Ugc2VlbSB0byBuZWVkIERPTUNvbnRlbnRMb2FkZWQgaGVyZSwgYmVjYXVzZSBzY3JpcHQgdGFncyxcbi8vIGluY2x1ZGluZyBvdXIgbXVzdGFjaGUgdGVtcGxhdGVzIGFyZW4ndCBuZWNlc3NhcmlseSBsb2FkZWRcbi8vIG9uIGRvY3VtZW50LmxvYWQoKS5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBldiA9PiB7XG4gIC8vIGVpdGhlciBIVE1MNSBvciBGbGFzaCBhcmUgYXZhaWxhYmxlXG5sZXQgdGhlV2ViY2FtID0gbnVsbDtcbmxldCB0aGVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhJylcbmxldCBwYWdlID0gMFxudmFyIGpjID0gbmV3IEpwZWdDYW1lcmEodGhlQ29udGFpbmVyLCB7XG4gICAgb25Jbml0OiAod2ViY2FtKSA9PiB7XG4gICAgICAvLyBoZXJlIHlvdSBjYW4gZG8gc29tZSBpbml0aWFsaXNhdGlvbiBpZiByZXF1aXJlZC5cbiAgICAgIC8vIHNhdmUgdGhlIG1vZHVsZSByZWZlcmVuY2Ugc28gd2UgY2FuIGNhbGwgaXRcbiAgICAgIHRoZVdlYmNhbSA9IHdlYmNhbTtcbiAgICB9LFxuICAgIG9uUmVhZHk6IChzcGVjcykgPT4geyAgfSxcbiAgICBvbkVycm9yOiAoZXJyKSA9PiB7IC8qIGRvIHNvbWV0aGluZyB3aGVuIHRoZXJlJ3MgYW4gZXJyb3IgKi8gfSxcbiAgICBvbkRlYnVnOiAoZGVidWcpID0+IHsgY29uc29sZS5sb2coZGVidWcpOyB9LFxuICAgIHNodXR0ZXI6IGZhbHNlLFxuICAgIG1pcnJvcjogZmFsc2UsXG4gICAgcHJldmlld01pcnJvcjogZmFsc2UsXG4gIH0pO1xuIFxuICB2YXIgc25hcGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbmFwYnRuJyk7XG5cbiAgc25hcGJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oZXYpIHtcbiAgXHR2YXIgc25hcHNob3QgPSB0aGVXZWJjYW0uY2FwdHVyZSgpO1xuXHRzbmFwc2hvdC5nZXRCbG9iKGZ1bmN0aW9uKGJsb2IpIHtcblx0XHR2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgZnVuY3Rpb24oKSB7XG4gXHRcdFx0Ly8gcmVhZGVyLnJlc3VsdCBjb250YWlucyB0aGUgY29udGVudHMgb2YgYmxvYiBhcyBhIHR5cGVkIGFycmF5XG5cdFx0XHR2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcblx0XHRcdHZhciBtYWluQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICAgICAgICBcdFx0bWFpbkNhbnZhcy53aWR0aCA9IDIwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haW5DYW52YXMuaGVpZ2h0ID0gMjAwO1xuXHRcdFx0dmFyIGN0eCA9IG1haW5DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdFx0dmFyIHN0ckJsb2IgPSBBcnJheUJ1ZmZlclRvU3RyaW5nKHJlYWRlci5yZXN1bHQpO1xuXHRcdFx0dmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShpbWcsIDAsIDAsMjAwLDIwMCk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGphbm9zaC5wdWJsaXNoKFwic3VibWl0XCIsXCJXXCIsbWFpbkNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIpKTtcblx0XHRcdH1cblx0XHRcdGltZy5zcmMgPSBcImRhdGE6aW1hZ2UvanBlZztiYXNlNjQsXCIrIGJ0b2Eoc3RyQmxvYik7XG5cdFx0fSk7XG5cdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpO1xuXHR9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbWFnZShiYXNlNjQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltYWdlc1wiKTtcbiAgICAgICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuXG5cdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZXNcIik7XG4gICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmU7XCI7XG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTD1cIlhcIjtcbiAgICAgICAgYnV0dG9uLnN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBpbWcuc3JjPWJhc2U2NDtcbiAgICAgICAgaW1nLnN0eWxlPVwid2lkdGg6MjAwcHg7IGhlaWdodDoyMDBweDtcIjtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChkaXYpO1xuICB9O1xuICBcbiAgamFub3NoLnN1YnNjcmliZShcIm5vdGlmeVwiLCAodmFsdWUpID0+IHtcbiAgfSlcblxuICBqYW5vc2gub25SZWNlaXZlKCh2YWx1ZSkgPT4ge1xuXHRpZih2YWx1ZSA9PSBcImNoZWF0XCIpXG5cdFx0YWxlcnQoXCJQbGVhc2UgZG9uJ3QgY2hlYXQuIFN1Ym1pdCBwcm9wZXIgc25hcHNob3RzXCIpO1xuXHRlbHNlXG5cdFx0bWFrZUltYWdlKHZhbHVlKTtcbiAgfSk7XG5cbiAgamFub3NoLm9uRXJyb3IoKGVycm9yKSA9PiB7XG4gIH0pO1xufSk7XG4iLCIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJKcGVnQ2FtZXJhXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkpwZWdDYW1lcmFcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlbGYpIHtcblx0dmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlO1xuXHR2YXIgX2RpZEl0ZXJhdG9yRXJyb3IgPSBmYWxzZTtcblx0dmFyIF9pdGVyYXRvckVycm9yID0gdW5kZWZpbmVkO1xuXG5cdHRyeSB7XG5cdFx0Zm9yICh2YXIgX2l0ZXJhdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc2VsZi5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3N0ZXA7ICEoX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IChfc3RlcCA9IF9pdGVyYXRvci5uZXh0KCkpLmRvbmUpOyBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZSkge1xuXHRcdFx0dmFyIGtleSA9IF9zdGVwLnZhbHVlO1xuXG5cdFx0XHR2YXIgdmFsID0gc2VsZltrZXldO1xuXG5cdFx0XHRpZiAoa2V5ICE9PSAnY29uc3RydWN0b3InICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0c2VsZltrZXldID0gdmFsLmJpbmQoc2VsZik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG5cdFx0X2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG5cdH0gZmluYWxseSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG5cdFx0XHRcdF9pdGVyYXRvci5yZXR1cm4oKTtcblx0XHRcdH1cblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0aWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG5cdFx0XHRcdHRocm93IF9pdGVyYXRvckVycm9yO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBzZWxmO1xufTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFkZFByZWZpeGVkU3R5bGUgPSBleHBvcnRzLmlzQ2FudmFzU3VwcG9ydGVkID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3NuYXBzaG90ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblxudmFyIF9zbmFwc2hvdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zbmFwc2hvdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBpc0NhbnZhc1N1cHBvcnRlZCA9IGV4cG9ydHMuaXNDYW52YXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiBpc0NhbnZhc1N1cHBvcnRlZCgpIHtcbiAgcmV0dXJuICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJykuZ2V0Q29udGV4dDtcbn07XG5cbi8vIEhlbHBlciBmb3Igc2V0dGluZyBwcmVmaXhlZCBDU1MgZGVjbGFyYXRpb25zLlxuLy9cbi8vIEBub2RvY1xuLy8gQHByaXZhdGVcbnZhciBhZGRQcmVmaXhlZFN0eWxlID0gZXhwb3J0cy5hZGRQcmVmaXhlZFN0eWxlID0gZnVuY3Rpb24gYWRkUHJlZml4ZWRTdHlsZSh0aGVFbGVtZW50LCBzdHlsZSwgdmFsdWUpIHtcbiAgdmFyIGVsZW1lbnQgPSB0aGVFbGVtZW50O1xuICB2YXIgdXBwZXJjYXNlU3R5bGUgPSBzdHlsZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0eWxlLnNsaWNlKDEpO1xuICBlbGVtZW50LnN0eWxlW3N0eWxlXSA9IHZhbHVlO1xuICBlbGVtZW50LnN0eWxlWydXZWJraXQnICsgdXBwZXJjYXNlU3R5bGVdID0gdmFsdWU7XG4gIGVsZW1lbnQuc3R5bGVbJ01veicgKyB1cHBlcmNhc2VTdHlsZV0gPSB2YWx1ZTtcbiAgZWxlbWVudC5zdHlsZVsnbXMnICsgdXBwZXJjYXNlU3R5bGVdID0gdmFsdWU7XG4gIGVsZW1lbnQuc3R5bGVbJ08nICsgdXBwZXJjYXNlU3R5bGVdID0gdmFsdWU7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vLyBCYXNlIGNsYXNzIGZvciBKcGVnQ2FtZXJhIGltcGxlbWVudGF0aW9ucy4gU3ViY2xhc3NlcyBwcm92aWRlIGZ1bmN0aW9uYWxpdHlcbi8vIGRlZmluZWQgYnkgdGhpcyBBUEkgdXNpbmcgZGlmZmVyZW50IGVuZ2luZXMuIE9uIHN1cHBvcnRlZCBicm93c2VycyBIVE1MNVxuLy8gaW1wbGVtZW50YXRpb24gd2lsbCBiZSB1c2VkLCBvdGhlcndpc2UgRmxhc2ggd2lsbCBiZSB1c2VkIGlmIGF2YWlsYWJsZS5cblxudmFyIEpwZWdDYW1lcmFCYXNlID0gZnVuY3Rpb24gKCkge1xuICBfY3JlYXRlQ2xhc3MoSnBlZ0NhbWVyYUJhc2UsIFt7XG4gICAga2V5OiAnY2FudmFzU3VwcG9ydGVkJyxcblxuXG4gICAgLy8gVGVsbHMgd2hldGhlciB0aGUgYnJvd3NlciBzdXBwb3J0cyBgY2FudmFzYCBlbGVtZW50IGFuZCB5b3UgY2FuIHVzZVxuICAgIC8vIHtTbmFwc2hvdCNnZXRDYW52YXN9IG1ldGhvZCB0byBkaXNwbGF5IHNuYXBzaG90cyBvdXRzaWRlIHRoZSBjYW1lcmFcbiAgICAvLyBjb250YWluZXIuXG4gICAgLy9cbiAgICAvLyBBbGwgYnJvd3NlcnMgZXhjZXB0IEludGVybmV0IEV4cGxvcmVyIDggYW5kIGVhcmxpZXIgc3VwcG9ydCBgY2FudmFzYFxuICAgIC8vIGVsZW1lbnQuXG4gICAgLy9cbiAgICAvLyBAcmV0dXJuIFtCb29sZWFuXSBUcnVlIGlmIGBjYW52YXNgIGlzIHN1cHBvcnRlZC5cblxuXG4gICAgLy8gQG5vZG9jXG4gICAgLy8gQHByaXZhdGVcblxuXG4gICAgLy8gQG5vZG9jXG4gICAgLy8gQHByaXZhdGVcblxuXG4gICAgLy8gQG5vZG9jXG4gICAgLy8gQHByaXZhdGVcblxuXG4gICAgLy8gQG5vZG9jXG4gICAgLy8gQHByaXZhdGVcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FudmFzU3VwcG9ydGVkKCkge1xuICAgICAgcmV0dXJuIGlzQ2FudmFzU3VwcG9ydGVkKCk7XG4gICAgfVxuXG4gICAgLy8gQ29uc3RydWN0IG5ldyBjYW1lcmEuXG4gICAgLy9cbiAgICAvLyBKcGVnQ2FtZXJhIHdpbGwgZmlsbCB0aGUgZW50aXJlIGNvbnRhaW5lciBlbGVtZW50LiBJZiB0aGUgZWxlbWVudCdzIGFzcGVjdFxuICAgIC8vIHJhdGlvIGlzIGRpZmZlcmVudCB0aGFuIHRoYXQgb2YgdGhlIGNhbWVyYSBzdHJlYW0gKHVzdWFsbHkgNDozLCBidXRcbiAgICAvLyBzb21ldGltZXMgMTY6OSkgdGhlIHN0cmVhbSB3aWxsIGJlIGNsaXBwZWQgaG9yaXpvbnRhbGx5IG9yIHZlcnRpY2FsbHkuXG4gICAgLy9cbiAgICAvLyBUbyBkaXNwbGF5IHRoZSBpbWFnZSBvbiB0aGUgY2xpZW50IHNpZGUgdGhlIGltYWdlIG1pZ2h0IGFkZGl0aW9uYWxseSBnZXRcbiAgICAvLyByZXNpemVkIHRvIG1hdGNoIGNvbnRhaW5lciBlbGVtZW50LCBidXQgdGhlIGZpbGUgc2VudCB0byB0aGUgc2VydmVyIHdpbGxcbiAgICAvLyBhbHdheXMgYmUgaW4gY2FtZXJhJ3MgbmF0aXZlIHJlc29sdXRpb24uXG4gICAgLy9cbiAgICAvLyBCeSBkZXNpZ24gdGhlIGZpbGUgc2VudCB0byB0aGUgc2VydmVyIHdpbGwgb25seSBjb250YWluIHRoZSBhcmVhIHRoYXQgd2FzXG4gICAgLy8gdmlzaWJsZSB0byB0aGUgdXNlciBkdXJpbmcgY2FwdHVyZS4gVGhlcmUgaXMgbm8gd2F5IG9mIHNlbmRpbmcgdW5jbGlwcGVkLFxuICAgIC8vIGZ1bGwgY2FtZXJhIGZyYW1lIHdpdGhvdXQgc2hvd2luZyB0aGUgd2hvbGUgZnJhbWUgdG8gdGhlIHVzZXIuXG4gICAgLy9cbiAgICAvLyBSZXNpemluZyBjb250YWluZXIgYWZ0ZXIgdGhlIGNhbWVyYSBoYXMgYmVlbiBpbml0aWFsaXplZCBpcyBub3Qgc3VwcG9ydGVkLlxuICAgIC8vXG4gICAgLy8gVmFyaW91cyBvcHRpb25zIHByb3ZpZGVkIGhlcmUgY2FuIGJlIG92ZXJ3cml0dGVuIHdoZW4gY2FsbGluZ1xuICAgIC8vIHtKcGVnQ2FtZXJhI2NhcHR1cmUgY2FwdHVyZX0gb3Ige1NuYXBzaG90I3VwbG9hZH0uXG4gICAgLy9cbiAgICAvLyBAcGFyYW0gY29udGFpbmVyIFtET01FbGVtZW50LCBTdHJpbmddIERPTSBlbGVtZW50IG9yIGVsZW1lbnQncyBJRC5cbiAgICAvL1xuICAgIC8vIEBvcHRpb24gb3B0aW9ucyBzd2ZVcmwgW1N0cmluZ10gVVJMIHRvIHRoZSBTV0YgZmlsZSB0aGF0IHNob3VsZCBiZSB1c2VkXG4gICAgLy8gICBmb3IgZmFsbGJhY2sgaWYgSFRNTDUgY2Fubm90IGJlIHVzZWQuICcvanBlZ19jYW1lcmEvanBlZ19jYW1lcmEuc3dmJyBieVxuICAgIC8vICAgZGVmYXVsdC5cbiAgICAvLyBAb3B0aW9uIG9wdGlvbnMgc2h1dHRlck1wM1VybCBbU3RyaW5nXSBVUkwgdG8gdGhlIHNodXR0ZXIgbXAzIHNvdW5kIGZpbGUuXG4gICAgLy8gICBVc2VkIGJ5IGZsYXNoLiAnL2pwZWdfY2FtZXJhL3NodXR0ZXIubXAzJyBieSBkZWZhdWx0LlxuICAgIC8vIEBvcHRpb24gb3B0aW9ucyBzaHV0dGVyT2dnVXJsIFtTdHJpbmddIFVSTCB0byB0aGUgc2h1dHRlciBvZ2cgc291bmQgZmlsZS5cbiAgICAvLyAgIFVzZWQgYnkgSFRNTDUuICcvanBlZ19jYW1lcmEvc2h1dHRlci5vZ2cnIGJ5IGRlZmF1bHQuXG4gICAgLy8gQG9wdGlvbiBvcHRpb25zIG9uUmVhZHkgW0Z1bmN0aW9uXSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gY2FtZXJhIGlzIHJlYWR5LlxuICAgIC8vICAgSW5zaWRlIHRoZSBjYWxsYmFjayBjYW1lcmEgb2JqZWN0IGNhbiBiZSBhY2Nlc3NlZCBhcyBgdGhpc2AuIFRoaXNcbiAgICAvLyAgIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSBvYmplY3Qgd2l0aCBgdmlkZW9XaWR0aGAgYW5kIGB2aWRlb0hlaWdodGBcbiAgICAvLyAgIHByb3BlcnRpZXMgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBUaGVzZSBpbmRpY2F0ZSBjYW1lcmEncyBuYXRpdmVcbiAgICAvLyAgIHJlc29sdXRpb24uIFNlZSBhbHNvIHtKcGVnQ2FtZXJhI3JlYWR5fS5cbiAgICAvLyBAb3B0aW9uIG9wdGlvbnMgb25EZWJ1ZyBbRnVuY3Rpb25dIFRoaXMgY2FsbGJhY2sgY2FuIGJlIHVzZWQgdG8gbG9nIHZhcmlvdXNcbiAgICAvLyAgIGV2ZW50cyBhbmQgaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgdXNlZnVsIHdoZW4gZGVidWdnaW5nIEpwZWdDYW1lcmEuIERlYnVnXG4gICAgLy8gICBtZXNzYWdlIHdpbGwgYmUgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4gSW5zaWRlIHRoZSBjYWxsYmFjayBjYW1lcmFcbiAgICAvLyAgIG9iamVjdCBjYW4gYmUgYWNjZXNzZWQgYXMgYHRoaXNgLiBUaGVyZSBpcyBhIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2ZcbiAgICAvLyAgIHRoaXMgY2FsbGJhY2sgdGhhdCBsb2dzIG1lc3NhZ2VzIHRvIHdpbmRvdy5jb25zb2xlIGlmIGF2YWlsYWJsZS5cbiAgICAvLyBAb3B0aW9uIG9wdGlvbnMgcmVzb2x1dGlvbiBbTnVtYmVyXSBUaGUgaG9yaXpvbnRhbCByZXNvbHV0aW9uIHRvIGFzayBjYW1lcmEgZm9yIHdoZW5cbiAgICAvLyAgIGluaXRpYWxpc2luZy4gQ2FtZXJhIHdpbGwgYmUgaW5pdGlhbGlzZWQgYXQgY2xvc2VzdCBhbGxvd2VkIGhvcml6b250YWwgcmVzb2x1dGlvbi5cbiAgICAvLyBAb3B0aW9uIG9wdGlvbnMgcXVhbGl0eSBbRmxvYXRdIFF1YWxpdHkgb2YgdGhlIEpQRUcgZmlsZSB0aGF0IHdpbGwgYmVcbiAgICAvLyAgIHVwbG9hZGVkIHRvIHRoZSBzZXJ2ZXIuIFNob3VsZCBiZSBiZXR3ZWVuIDAgYW5kIDEuIDAuOSBieSBkZWZhdWx0LiBDYW4gYmVcbiAgICAvLyAgIG92ZXJ3cml0dGVuIHdoZW4gY2FsbGluZyB7SnBlZ0NhbWVyYSNjYXB0dXJlIGNhcHR1cmV9LiBfQ2Fubm90XyBiZVxuICAgIC8vICAgb3ZlcndyaXR0ZW4gYXQgdGhlIHRpbWUgb2YgdXBsb2FkLlxuICAgIC8vIEBvcHRpb24gb3B0aW9ucyBtaXJyb3IgW0Jvb2xlYW5dIFRoZSB2aWRlbyBzdHJlYW0gYW5kIGltYWdlcyBkaXNwbGF5ZWQgb25cbiAgICAvLyAgIHRoZSBjbGllbnQgc2lkZSBtaW1pYyBhIG1pcnJvciwgYmVjYXVzZSB0aGF0J3MgaG93IHBlb3BsZSBhcmUgdXNlZCB0b1xuICAgIC8vICAgc2VlaW5nIHRoZW1zZWx2ZXMuIEJ5IGRlZmF1bHQgaW1hZ2VzIGFyZSB1cGxvYWRlZCB0byB0aGUgc2VydmVyIGluIHRoZWlyXG4gICAgLy8gICBuYXR1cmFsIG9yaWVudGF0aW9uIC0gaG93IHRoZSBmcm9udCBmYWNpbmcgY2FtZXJhIHNlZXMgdGhlIHVzZXIuXG4gICAgLy8gICBUaGlzIG9wdGlvbiBjYW4gYmUgc2V0IHRvIHRydWUgdG8gdXBsb2FkIGltYWdlcyB0aGUgd2F5IHRoZSB1c2VyIHNlZXNcbiAgICAvLyAgIHRoZW0uIENhbiBiZSBvdmVyd3JpdHRlbiB3aGVuIGNhbGxpbmcge0pwZWdDYW1lcmEjY2FwdHVyZSBjYXB0dXJlfS5cbiAgICAvLyAgIF9DYW5ub3RfIGJlIG92ZXJ3cml0dGVuIGF0IHRoZSB0aW1lIG9mIHVwbG9hZC5cbiAgICAvLyBAb3B0aW9uIG9wdGlvbnMgc2h1dHRlciBbQm9vbGVhbl0gV2hldGhlciB0byBwbGF5IHNodXR0ZXIgc291bmQgd2hlblxuICAgIC8vICAgY2FwdHVyaW5nIHNuYXBzaG90cy4gQ2FuIGJlIG92ZXJ3cml0dGVuIHdoZW4gY2FsbGluZ1xuICAgIC8vICAge0pwZWdDYW1lcmEjY2FwdHVyZSBjYXB0dXJlfS5cblxuXG4gICAgLy8gQG5vZG9jXG4gICAgLy8gQHByaXZhdGVcblxuXG4gICAgLy8gQG5vZG9jXG4gICAgLy8gQHByaXZhdGVcblxuXG4gICAgLy8gQG5vZG9jXG4gICAgLy8gQHByaXZhdGVcblxuXG4gICAgLy8gQG5vZG9jXG4gICAgLy8gQHByaXZhdGVcblxuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIEpwZWdDYW1lcmFCYXNlKHRoZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBKcGVnQ2FtZXJhQmFzZSk7XG5cbiAgICB0aGlzLmRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgc2h1dHRlck9nZ1VybDogbnVsbCxcbiAgICAgIHNodXR0ZXJNcDNVcmw6IG51bGwsXG4gICAgICBzd2ZVcmw6IG51bGwsXG4gICAgICBvbkRlYnVnOiBmdW5jdGlvbiBvbkRlYnVnKG1lc3NhZ2UpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5sb2cpIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coJ0pwZWdDYW1lcmE6ICcgKyBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG5cbiAgICAgIHJlc29sdXRpb246IDM4NDAsXG4gICAgICBxdWFsaXR5OiAwLjksXG4gICAgICBzaHV0dGVyOiB0cnVlLFxuICAgICAgbWlycm9yOiBmYWxzZSxcbiAgICAgIHByZXZpZXdNaXJyb3I6IHRydWUsXG4gICAgICBzY2FsZTogMS4wLFxuICAgICAgYWNjZXNzTWVzc2FnZTogJ1BsZWFzZSBhbGxvdyBjYW1lcmEgYWNjZXNzIHdoZW4gcHJvbXB0ZWQgYnkgdGhlIGJyb3dzZXIuPGJyPjxicj4nICsgJ0xvb2sgZm9yIGNhbWVyYSBpY29uIGFyb3VuZCB5b3VyIGFkZHJlc3MgYmFyLidcbiAgICB9O1xuICAgIHRoaXMuaXNSZWFkeSA9IGZhbHNlO1xuICAgIHRoaXMuZXJyb3JPY2N1cmVkID0gZmFsc2U7XG4gICAgdGhpcy5zdGF0c0NhcHR1cmVTY2FsZSA9IDAuMjtcbiAgICB0aGlzLnNuYXBzaG90cyA9IHt9O1xuICAgIHRoaXMuZGlzcGxheWVkU25hcHNob3QgPSBudWxsO1xuICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgdGhpcy52aWV3V2lkdGggPSBudWxsO1xuICAgIHRoaXMudmlld0hlaWdodCA9IG51bGw7XG5cbiAgICB2YXIgY29udGFpbmVyID0gdGhlQ29udGFpbmVyO1xuICAgIGlmICh0eXBlb2YgY29udGFpbmVyID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVyLnJlcGxhY2UoJyMnLCAnJykpO1xuICAgIH1cblxuICAgIGlmICghY29udGFpbmVyIHx8ICFjb250YWluZXIub2Zmc2V0V2lkdGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSnBlZ0NhbWVyYTogaW52YWxpZCBjb250YWluZXInKTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy52aWV3V2lkdGggPSBwYXJzZUludChjb250YWluZXIub2Zmc2V0V2lkdGgsIDEwKTtcbiAgICB0aGlzLnZpZXdIZWlnaHQgPSBwYXJzZUludChjb250YWluZXIub2Zmc2V0SGVpZ2h0LCAxMCk7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXG4gICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSnBlZ0NhbWVyYUJhc2UsIFt7XG4gICAga2V5OiAncmVzaXplJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplKGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQpIHtcbiAgICAgIHRoaXMudmlld1dpZHRoID0gcGFyc2VJbnQoY29udGFpbmVyV2lkdGgsIDEwKTtcbiAgICAgIHRoaXMudmlld0hlaWdodCA9IHBhcnNlSW50KGNvbnRhaW5lckhlaWdodCwgMTApO1xuICAgICAgdGhpcy5yZXNpemVQcmV2aWV3KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBCaW5kIGNhbGxiYWNrIGZvciBjYW1lcmEgcmVhZHkgZXZlbnQuXG4gICAgLy9cbiAgICAvLyBSZXBsYWNlcyB0aGUgY2FsbGJhY2sgc2V0IHVzaW5nIF9fb25SZWFkeV9fIG9wdGlvbiBkdXJpbmcgaW5pdGlhbGl6YXRpb24uXG4gICAgLy9cbiAgICAvLyBJZiB0aGUgZXZlbnQgaGFzIGFscmVhZHkgaGFwcGVuZWQgdGhlIGFyZ3VtZW50IHdpbGwgYmUgY2FsbGVkIGltbWVkaWF0ZWx5LlxuICAgIC8vXG4gICAgLy8gQHBhcmFtIGNhbGxiYWNrIFtGdW5jdGlvbl0gZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNhbWVyYSBpcyByZWFkeS4gQ2FtZXJhXG4gICAgLy8gICBvYmplY3Qgd2lsbCBiZSBhdmFpbGFibGUgYXMgYHRoaXNgLiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSBvYmplY3Qgd2l0aFxuICAgIC8vICAgYHZpZGVvV2lkdGhgIGFuZCBgdmlkZW9IZWlnaHRgIHByb3BlcnRpZXMgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBUaGVzZVxuICAgIC8vICAgaW5kaWNhdGUgY2FtZXJhJ3MgbmF0aXZlIHJlc29sdXRpb24uXG4gICAgLy9cbiAgICAvLyBAcmV0dXJuIFtKcGVnQ2FtZXJhQmFzZV0gU2VsZiBmb3IgY2hhaW5pbmcuXG5cbiAgfSwge1xuICAgIGtleTogJ3JlYWR5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vblJlYWR5ID0gY2FsbGJhY2s7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm9uUmVhZHkgJiYgdGhpcy5pc1JlYWR5KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5vblJlYWR5LmNhbGwodGhpcywge1xuICAgICAgICAgIHZpZGVvV2lkdGg6IHRoaXMudmlkZW9XaWR0aCxcbiAgICAgICAgICB2aWRlb0hlaWdodDogdGhpcy52aWRlb0hlaWdodFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIFBlYWsgaW50byB2aWRlbyBzdHJlYW0gYW5kIGNhbGN1bGF0ZSBwaXhlbCBzdGF0aXN0aWNzLlxuICAgIC8vXG4gICAgLy8gQ2FuIGJlIHVzZWZ1bCB0byBnaXZlIHRoZSB1c2VyIGhpbnRzIGFib3V0IGJhZCBsaWdodGluZy4gSXQgdXNlcyBmdWxsXG4gICAgLy8gY2FwdHVyZSBhcmVhLCBidXQgYXQgbXVjaCBsb3dlciByZXNvbHV0aW9uLiBJdCdzIG1vcmUgZWZmaWNpZW50IHRoYW4gdGFraW5nXG4gICAgLy8gYSByZWd1bGFyIGNhcHR1cmUgYW5kIGNhbGxpbmcge1NuYXBzaG90I2dldFN0YXRzfS5cbiAgICAvL1xuICAgIC8vIEJlY2F1c2UgcmVhZGluZyBpbWFnZSBkYXRhIGNhbiB0YWtlIGEgd2hpbGUgd2hlbiBGbGFzaCBmYWxsYmFjayBpcyBiZWluZ1xuICAgIC8vIHVzZWQgdGhpcyBtZXRob2QgZG9lcyBub3QgcmV0dXJuIHRoZSBkYXRhIGltbWVkaWF0ZWx5LiBJbnN0ZWFkIGl0IGFjY2VwdHNcbiAgICAvLyBhIGNhbGxiYWNrIHRoYXQgbGF0ZXIgd2lsbCBiZSBjYWxsZWQgd2l0aCBhIHtTdGF0c30gaW5zdGFuY2UgYXMgYW4gYXJndW1lbnQuXG4gICAgLy8gVGhlIGNhbWVyYSBvYmplY3Qgd2lsbCBiZSBhdmFpbGFibGUgYXMgYHRoaXNgLlxuICAgIC8vXG4gICAgLy8gQHBhcmFtIGNhbGxiYWNrIFtGdW5jdGlvbl0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGRhdGEgaXMgYXZhaWxhYmxlLiBDYW1lcmFcbiAgICAvLyAgIG9iamVjdCB3aWxsIGJlIGF2YWlsYWJsZSBhcyBgdGhpc2AsIHRoZSB7U3RhdHN9IGluc3RhbmNlIHdpbGwgYmUgcGFzc2VkXG4gICAgLy8gICBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gICAgLy9cbiAgICAvLyBAcmV0dXJuIFt2b2lkXVxuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTdGF0cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXRzKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgc25hcHNob3QgPSBuZXcgX3NuYXBzaG90Mi5kZWZhdWx0KHRoaXMsIHt9KTtcblxuICAgICAgdGhpcy5lbmdpbmVDYXB0dXJlKHNuYXBzaG90LCBmYWxzZSwgMC4xLCB0aGlzLnN0YXRzQ2FwdHVyZVNjYWxlKTtcblxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgcmV0dXJuIHNuYXBzaG90LmdldFN0YXRzKGZ1bmN0aW9uIChzdGF0cykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGF0LCBzdGF0cyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDYXB0dXJlIGNhbWVyYSBzbmFwc2hvdC5cbiAgICAvL1xuICAgIC8vIEFsbCBvZiB0aGUgb3B0aW9ucyBjYW4gaGF2ZSB0aGVpciBkZWZhdWx0cyBzZXQgd2hlbiBjb25zdHJ1Y3RpbmcgY2FtZXJhXG4gICAgLy8gb2JqZWN0LlxuICAgIC8vXG4gICAgLy8gQG9wdGlvbiBvcHRpb25zIHF1YWxpdHkgW0Zsb2F0XSBRdWFsaXR5IG9mIHRoZSBKUEVHIGZpbGUgdGhhdCB3aWxsIGJlXG4gICAgLy8gICB1cGxvYWRlZCB0byB0aGUgc2VydmVyLiBTaG91bGQgYmUgYmV0d2VlbiAwIGFuZCAxLiBEZWZhdWx0cyB0byAwLjkgb3JcbiAgICAvLyAgIHdoYXRldmVyIHdhcyBzZXQgZHVyaW5nIGNhbWVyYSBpbml0aWFsaXphdGlvbi4gX0Nhbm5vdF8gYmVcbiAgICAvLyAgIG92ZXJ3cml0dGVuIGF0IHRoZSB0aW1lIG9mIHVwbG9hZC5cbiAgICAvLyBAb3B0aW9uIG9wdGlvbnMgbWlycm9yIFtCb29sZWFuXSBUaGUgdmlkZW8gc3RyZWFtIGFuZCBpbWFnZXMgZGlzcGxheWVkIG9uXG4gICAgLy8gICB0aGUgY2xpZW50IHNpZGUgbWltaWMgYSBtaXJyb3IsIGJlY2F1c2UgdGhhdCdzIGhvdyBwZW9wbGUgYXJlIHVzZWQgdG9cbiAgICAvLyAgIHNlZWluZyB0aGVtc2VsdmVzLiBCeSBkZWZhdWx0IGltYWdlcyBhcmUgdXBsb2FkZWQgdG8gdGhlIHNlcnZlciBpbiB0aGVpclxuICAgIC8vICAgbmF0dXJhbCBvcmllbnRhdGlvbiAtIGhvdyB0aGUgZnJvbnQgZmFjaW5nIGNhbWVyYSBzZWVzIHRoZSB1c2VyLlxuICAgIC8vICAgVGhpcyBvcHRpb24gY2FuIGJlIHNldCB0byB0cnVlIHRvIHVwbG9hZCBpbWFnZXMgdGhlIHdheSB0aGUgdXNlciBzZWVzXG4gICAgLy8gICB0aGVtLiBfQ2Fubm90XyBiZSBvdmVyd3JpdHRlbiBhdCB0aGUgdGltZSBvZiB1cGxvYWQuXG4gICAgLy8gQG9wdGlvbiBvcHRpb25zIHNjYWxlIFtGbG9hdF0gQnkgZGVmYXVsdCBzbmFwc2hvdHMgYXJlIGNhcHR1cmVkIGFuZCB1cGxvYWRlZFxuICAgIC8vICAgdXNpbmcgaGlnaGVzdCBwb3NzaWJsZSByZXNvbHV0aW9uLiBTZXQgdGhpcyB0byBhIG51bWJlciBsZXNzIHRoYW4gMS4wIHRvXG4gICAgLy8gICBnZXQgc21hbGxlciBzbmFwc2hvdHMuXG4gICAgLy8gQG9wdGlvbiBvcHRpb25zIHNodXR0ZXIgW0Jvb2xlYW5dIFdoZXRoZXIgdG8gcGxheSB0aGUgc2h1dHRlciBzb3VuZC5cbiAgICAvL1xuICAgIC8vIEByZXR1cm4gW1NuYXBzaG90XSBUaGUgc25hcHNob3QgdGhhdCB3YXMgdGFrZW4uXG5cbiAgfSwge1xuICAgIGtleTogJ2NhcHR1cmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYXB0dXJlKG5ld09wdGlvbnMpIHtcbiAgICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zKTtcbiAgICAgIGlmIChuZXdPcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCBuZXdPcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHZhciBzbmFwc2hvdCA9IG5ldyBfc25hcHNob3QyLmRlZmF1bHQodGhpcywgb3B0aW9ucyk7XG4gICAgICB0aGlzLnNuYXBzaG90c1tzbmFwc2hvdC5pZF0gPSBzbmFwc2hvdDtcblxuICAgICAgaWYgKG9wdGlvbnMuc2h1dHRlcikge1xuICAgICAgICB0aGlzLmVuZ2luZVBsYXlTaHV0dGVyU291bmQoKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHNjYWxlID0gTWF0aC5taW4oMS4wLCBvcHRpb25zLnNjYWxlKTtcbiAgICAgIHNjYWxlID0gTWF0aC5tYXgoMC4wMSwgc2NhbGUpO1xuXG4gICAgICB0aGlzLmVuZ2luZUNhcHR1cmUoc25hcHNob3QsIG9wdGlvbnMubWlycm9yLCBvcHRpb25zLnF1YWxpdHksIHNjYWxlKTtcblxuICAgICAgcmV0dXJuIHNuYXBzaG90O1xuICAgIH1cblxuICAgIC8vIEhpZGUgY3VycmVudGx5IGRpc3BsYXllZCBzbmFwc2hvdCBhbmQgc2hvdyB0aGUgdmlkZW8gc3RyZWFtLlxuICAgIC8vXG4gICAgLy8gQHJldHVybiBbSnBlZ0NhbWVyYUJhc2VdIFNlbGYgZm9yIGNoYWluaW5nLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdzaG93U3RyZWFtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvd1N0cmVhbSgpIHtcbiAgICAgIHRoaXMuZW5naW5lU2hvd1N0cmVhbSgpO1xuICAgICAgdGhpcy5kaXNwbGF5ZWRTbmFwc2hvdCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBEaXNjYXJkIGFsbCBzbmFwc2hvdHMgYW5kIHNob3cgdmlkZW8gc3RyZWFtLlxuICAgIC8vXG4gICAgLy8gQHJldHVybiBbSnBlZ0NhbWVyYUJhc2VdIFNlbGYgZm9yIGNoYWluaW5nLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNjYXJkQWxsJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY2FyZEFsbCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLmRpc3BsYXllZFNuYXBzaG90KSB7XG4gICAgICAgIHRoaXMuc2hvd1N0cmVhbSgpO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXModGhpcy5zcGFuc2hvdHMpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHNuYXBzaG90ID0gX3RoaXMuc25hcHNob3RzW2lkXTtcbiAgICAgICAgX3RoaXMuZW5naW5lRGlzY2FyZChzbmFwc2hvdCk7XG4gICAgICAgIHNuYXBzaG90LmRpc2NhcmRlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnNuYXBzaG90cyA9IHt9O1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gTG9nIGRlYnVnIG1lc3NhZ2VzXG4gICAgLy9cbiAgICAvLyBAbm9kb2NcbiAgICAvLyBAcHJpdmF0ZVxuXG4gIH0sIHtcbiAgICBrZXk6ICdkZWJ1ZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlYnVnKG1lc3NhZ2UpIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMub25EZWJ1Zykge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLm9uRGVidWcuY2FsbCh0aGlzLCBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cbiAgfSwge1xuICAgIGtleTogJ2Rpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNwbGF5KHNuYXBzaG90KSB7XG4gICAgICB0aGlzLmVuZ2luZURpc3BsYXkoc25hcHNob3QpO1xuICAgICAgdGhpcy5kaXNwbGF5ZWRTbmFwc2hvdCA9IHNuYXBzaG90O1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheWVkU25hcHNob3Q7XG4gICAgfVxuXG4gICAgLy8gQG5vZG9jXG4gICAgLy8gQHByaXZhdGVcblxuICB9LCB7XG4gICAga2V5OiAnZGlzY2FyZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2NhcmQoc25hcHNob3QpIHtcbiAgICAgIGlmICh0aGlzLmRpc3BsYXllZFNuYXBzaG90ID09PSBzbmFwc2hvdCkge1xuICAgICAgICB0aGlzLnNob3dTdHJlYW0oKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZW5naW5lRGlzY2FyZChzbmFwc2hvdCk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIHNuYXBzaG90LmRpc2NhcmRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gZGVsZXRlIHRoaXMuc25hcHNob3RzW3NuYXBzaG90LmlkXTtcbiAgICB9XG5cbiAgICAvLyBDYWxsZWQgYnkgdGhlIGVuZ2luZSB3aGVuIGNhbWVyYSBpcyByZWFkeS5cbiAgICAvL1xuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cbiAgfSwge1xuICAgIGtleTogJ3ByZXBhcmVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlcGFyZWQodmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQpIHtcbiAgICAgIHRoaXMudmlkZW9XaWR0aCA9IHZpZGVvV2lkdGg7XG4gICAgICB0aGlzLnZpZGVvSGVpZ2h0ID0gdmlkZW9IZWlnaHQ7XG5cbiAgICAgIC8vIFhYWCBTaW5jZSB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgZnJvbSBpbnNpZGUgdGhlIEZsYXNoIG9iamVjdCwgd2UgbmVlZCB0b1xuICAgICAgLy8gcmV0dXJuIGNvbnRyb2wgdG8gbWFrZSBmbGFzaCBvYmplY3QgdXNhYmxlIGFnYWluLlxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhhdC53YWl0VW50aWxTdHJlYW1Mb29rc09rKHRydWUpO1xuICAgICAgfSwgMSk7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBwZWFrcyBpbnRvIHRoZSB2aWRlbyBzdHJlYW0gdXNpbmcgdmVyeSBzbWFsbCByZW5kZXJpbmcgYW5kIGNhbGN1bGF0ZXNcbiAgICAvLyBjb2xvcnMgbWVhbiB2YWx1ZSBhbmQgc3RhbmRhcmQgZGV2aWF0aW9uLiBJZiBzdGFuZGFyZCBkZXZpYXRpb24gaXNcbiAgICAvLyBuZWdsaWdpYmxlIHRoZW4gd2UgYXNzdW1lIGNhbWVyYSBpc24ndCByZWFkeSB5ZXQgYW5kIHdhaXQgYSBsaXR0bGUgbG9uZ2VyLlxuICAgIC8vXG4gICAgLy8gQG5vZG9jXG4gICAgLy8gQHByaXZhdGVcblxuICB9LCB7XG4gICAga2V5OiAnd2FpdFVudGlsU3RyZWFtTG9va3NPaycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhaXRVbnRpbFN0cmVhbUxvb2tzT2soc2hvd0RlYnVnKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhdHMoZnVuY3Rpb24gKHN0YXRzKSB7XG4gICAgICAgIGlmIChzdGF0cy5zdGQgPiAyKSB7XG4gICAgICAgICAgX3RoaXMyLmRlYnVnKCdTdHJlYW0gbWVhbiBncmF5IHZhbHVlID0gJyArIHN0YXRzLm1lYW4gKyAnIHN0YW5kYXJkIGRldmlhdGlvbiA9ICcgKyBzdGF0cy5zdGQpO1xuICAgICAgICAgIF90aGlzMi5kZWJ1ZygnQ2FtZXJhIGlzIHJlYWR5Jyk7XG5cbiAgICAgICAgICBfdGhpczIuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgICAgaWYgKF90aGlzMi5vcHRpb25zLm9uUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIub3B0aW9ucy5vblJlYWR5LmNhbGwoX3RoaXMyLCB7XG4gICAgICAgICAgICAgIHZpZGVvV2lkdGg6IF90aGlzMi52aWRlb1dpZHRoLFxuICAgICAgICAgICAgICB2aWRlb0hlaWdodDogX3RoaXMyLnZpZGVvSGVpZ2h0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHNob3dEZWJ1Zykge1xuICAgICAgICAgICAgX3RoaXMyLmRlYnVnKCdTdHJlYW0gbWVhbiBncmF5IHZhbHVlID0gJyArIHN0YXRzLm1lYW4gKyAnIHN0YW5kYXJkIGRldmlhdGlvbiA9ICcgKyBzdGF0cy5zdGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdGhhdCA9IF90aGlzMjtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhhdC53YWl0VW50aWxTdHJlYW1Mb29rc09rKGZhbHNlKTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTaG93cyBhbiBvdmVybGF5IG92ZXIgdGhlIGNvbnRhaW5lciB0byBibG9jayBtb3VzZSBhY2Nlc3MuXG4gICAgLy9cbiAgICAvLyBQcmV2ZW50cyBjaGFuZ2luZyBmbGFzaCBwZXJtaXNzaW9uIGFmdGVyIGNhbWVyYSBoYXMgYmVlbiBlbmFibGVkIG9yIHN0b3BwaW5nXG4gICAgLy8gdGhlIEhUTUw1IHZpZGVvIHN0cmVhbSAtIGJvdGggb3B0aW9ucyBhdmFpbGFibGUgdGhyb3VnaCBjb250ZXh0IG1lbnUgb2ZcbiAgICAvLyBGbGFzaCBvYmplY3Qgb3IgPHZpZGVvPiBlbGVtZW50cy5cbiAgICAvL1xuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cbiAgfSwge1xuICAgIGtleTogJ2Jsb2NrRWxlbWVudEFjY2VzcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGJsb2NrRWxlbWVudEFjY2VzcygpIHtcbiAgICAgIHRoaXMub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGUudG9wID0gMDtcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS56SW5kZXggPSAyO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5vdmVybGF5KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSnBlZ0NhbWVyYUJhc2U7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEpwZWdDYW1lcmFCYXNlO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy9cbi8vIENvbnRhaW5zIHBvc3NpYmxlIGVycm9yIHN0YXRlcyBvZiB0aGUgY29tcG9uZW50LlxuLy8gVGhpcyBvYmplY3QgaXMgdGhyb3duIGZyb20gY29tcG9uZW50IGluIGNhc2Ugb2YgcHJvYmxlbXMuXG4vL1xudmFyIFdlYmNhbUVycm9yID0gZXhwb3J0cy5XZWJjYW1FcnJvciA9IGZ1bmN0aW9uIFdlYmNhbUVycm9yKGVycm9yQ29kZSkge1xuICB2YXIgZGV0YWlscyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2ViY2FtRXJyb3IpO1xuXG4gIHRoaXMuZXJyb3IgPSBlcnJvckNvZGU7XG4gIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG59O1xuXG52YXIgV2ViY2FtRXJyb3JzID0gZXhwb3J0cy5XZWJjYW1FcnJvcnMgPSB7XG4gIElOQ09SUkVDVF9JTklUSUFMSVNBVElPTjogJ0lOQ09SUkVDVF9JTklUSUFMSVNBVElPTicsXG4gIFVOS05PV05fRVJST1I6ICdVTktOT1dOX0VSUk9SJyxcbiAgR0VUX01FRElBX0ZBSUxFRF9JTklUOiAnR0VUX01FRElBX0ZBSUxFRF9JTklUJyxcbiAgRkxBU0hfRkFJTEVEX0xPQURJTkc6ICdGTEFTSF9GQUlMRURfTE9BRElORycsXG4gIEZMQVNIX1dJTkRPV19UT09fU01BTEw6ICdGTEFTSF9XSU5ET1dfVE9PX1NNQUxMJyxcbiAgQ0FNRVJBX05PVF9SRUFEWTogJ0NBTUVSQV9OT1RfUkVBRFknLFxuICBHRU5FUklDX0VSUk9SOiAnR0VORVJJQ19FUlJPUicsXG4gIE5PX0dFVF9NRURJQV9OT1JfRkxBU0hfQVZBSUxBQkxFOiAnTk9fR0VUX01FRElBX05PUl9GTEFTSF9BVkFJTEFCTEUnXG59O1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9qcGVnX2NhbWVyYV9odG1sID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9qcGVnX2NhbWVyYV9odG1sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pwZWdfY2FtZXJhX2h0bWwpO1xuXG52YXIgX2pwZWdfY2FtZXJhX2ZsYXNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcblxudmFyIF9qcGVnX2NhbWVyYV9mbGFzaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qcGVnX2NhbWVyYV9mbGFzaCk7XG5cbnZhciBfZXJyb3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuaWYgKCFuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKSB7XG4gIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgPSBuYXZpZ2F0b3Iud2Via2l0R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tb3pHZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLm1zR2V0VXNlck1lZGlhO1xufVxuaWYgKCF3aW5kb3cuQXVkaW9Db250ZXh0KSB7XG4gIHdpbmRvdy5BdWRpb0NvbnRleHQgPSB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xufVxuXG4vKipcbiAqIEBvcHRpb24gb3B0aW9ucyBkb250Q2hlY2tGbGFzaCBbQm9vbGVhbl0gLSBpZiB0aGlzIG9wdGlvbiBpcyBzZXQgdGhlIGVuZ2luZSB3aWxsXG4gKiAgIHRyeSB0aGUgSFRNTDUgdmVyc2lvbiBmaXJzdCBhbmQgaWYgdGhpcyBmYWlscyBpdCB3aWxsIHJlbmRlciB0aGUgZmxhc2ggb2JqZWN0XG4gKiAgIHdpdGhvdXQgdHJ5aW5nIHRvIGRldGVybWluZSBpZiBmbGFzaCBpcyBpbnN0YWxsZWQgYW5kIHdoYXQgdmVyc2lvbiBpcyBpdC5cbiAqICAgVGhpcyBpcyByZXF1aXJlZCBmb3IgU2FmYXJpIDEwIHdoaWNoIGhpZGVzIHRoZSBmYWN0IG9mIEZsYXNoIGJlaW5nIGluc3RhbGxlZCAoYnV0IGRpc2FibGVkXG4gKiAgIGJ5IGRlZmF1bHQpLiBSZW5kZXJpbmcgdGhlIEZsYXNoIG9iamVjdCB3aWxsIHRyaWdnZXIgY29uZmlybWF0aW9uIGRpYWxvZyBcIldvdWxkIHlvdSBsaWtlXG4gKiAgIHRvIHVzZSBGbGFzaFwiLiBXQVJOSU5HIC0gZm9yY2luZyByZW5kZXIgaW4gc3VjaCB3YXkgbWVhbnMgdGhhdCB0aGUgb25FcnJvciB3aWxsIG5ldmVyIGdldFxuICogICBleGVjdXRlZCBpbiBjYXNlIHRoZSBjbGllbnQgZGlzYWxsb3cgRmxhc2ggdG8gcnVuLlxuICovXG5cbnZhciBKcGVnQ2FtZXJhID0gZnVuY3Rpb24gSnBlZ0NhbWVyYShjb250YWluZXIsIG9wdGlvbnMpIHtcbiAgdmFyIGh0bWw1SW5pdCA9IGZ1bmN0aW9uIGh0bWw1SW5pdCgpIHtcbiAgICByZXR1cm4gbmV3IF9qcGVnX2NhbWVyYV9odG1sMi5kZWZhdWx0KGNvbnRhaW5lciwgb3B0aW9ucyk7XG4gIH07XG4gIHZhciBmbGFzaEluaXQgPSBmdW5jdGlvbiBmbGFzaEluaXQoKSB7XG4gICAgcmV0dXJuIG5ldyBfanBlZ19jYW1lcmFfZmxhc2gyLmRlZmF1bHQoY29udGFpbmVyLCBvcHRpb25zKTtcbiAgfTtcbiAgdmFyIGluaXRFcnJvciA9IGZ1bmN0aW9uIGluaXRFcnJvcigpIHtcbiAgICB0aHJvdyBuZXcgX2Vycm9ycy5XZWJjYW1FcnJvcihfZXJyb3JzLldlYmNhbUVycm9ycy5OT19HRVRfTUVESUFfTk9SX0ZMQVNIX0FWQUlMQUJMRSk7XG4gIH07XG5cbiAgaWYgKCFvcHRpb25zLm9uSW5pdCkge1xuICAgIHRocm93IG5ldyBfZXJyb3JzLldlYmNhbUVycm9yKF9lcnJvcnMuV2ViY2FtRXJyb3JzLklOQ09SUkVDVF9JTklUSUFMSVNBVElPTik7XG4gIH1cblxuICBfanBlZ19jYW1lcmFfaHRtbDIuZGVmYXVsdC5lbmdpbmVDaGVjayhcbiAgLyogc3VjY2VzcyAqL2Z1bmN0aW9uICgpIHtcbiAgICBvcHRpb25zLm9uSW5pdChodG1sNUluaXQoKSk7XG4gIH0sXG4gIC8qIGZhaWx1cmUgKi9mdW5jdGlvbiAoKSB7XG4gICAgX2pwZWdfY2FtZXJhX2ZsYXNoMi5kZWZhdWx0LmVuZ2luZUNoZWNrKFxuICAgIC8qIHN1Y2Nlc3MgKi9mdW5jdGlvbiAoKSB7XG4gICAgICBvcHRpb25zLm9uSW5pdChmbGFzaEluaXQoKSk7XG4gICAgfSxcbiAgICAvKiBmYWlsdXJlICovZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG9wdGlvbnMub25FcnJvcikgb3B0aW9ucy5vbkVycm9yKGluaXRFcnJvcigpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBKcGVnQ2FtZXJhO1xuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9hdXRvQmluZCA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBfYXV0b0JpbmQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXV0b0JpbmQpO1xuXG52YXIgX2pwZWdfY2FtZXJhID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxudmFyIF9qcGVnX2NhbWVyYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qcGVnX2NhbWVyYSk7XG5cbnZhciBfZXJyb3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY2FuUGxheSA9IGZ1bmN0aW9uIGNhblBsYXkodHlwZSkge1xuICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gIHJldHVybiAhIShlbGVtLmNhblBsYXlUeXBlICYmIGVsZW0uY2FuUGxheVR5cGUodHlwZSkucmVwbGFjZSgvbm8vLCAnJykpO1xufTtcblxuLy8gSnBlZ0NhbWVyYSBpbXBsZW1lbnRhdGlvbiB0aGF0IHVzZXMgX2dldFVzZXJNZWRpYV8gdG8gY2FwdHVyZSBzbmFwc2hvdHMsXG4vLyBfY2FudmFzX2VsZW1lbnRfIHRvIGRpc3BsYXkgdGhlbSBhbmQgb3B0aW9uYWxseSBfV2ViX0F1ZGlvX0FQSV8gdG8gcGxheSBzaHV0dGVyIHNvdW5kLlxuLy9cbi8vIEBwcml2YXRlXG5cbnZhciBKcGVnQ2FtZXJhSHRtbDUgPSBmdW5jdGlvbiAoX0pwZWdDYW1lcmFCYXNlKSB7XG4gIF9pbmhlcml0cyhKcGVnQ2FtZXJhSHRtbDUsIF9KcGVnQ2FtZXJhQmFzZSk7XG5cbiAgZnVuY3Rpb24gSnBlZ0NhbWVyYUh0bWw1KHRoZUNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBKcGVnQ2FtZXJhSHRtbDUpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEpwZWdDYW1lcmFIdG1sNS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEpwZWdDYW1lcmFIdG1sNSkpLmNhbGwodGhpcywgdGhlQ29udGFpbmVyLCBvcHRpb25zKSk7XG5cbiAgICBfdGhpcy53YWl0Rm9yVmlkZW9SZWFkeVRpbWVyID0gbnVsbDtcblxuICAgIF90aGlzLnN0YXR1c0NoZWNrc0NvdW50ID0gMDtcbiAgICBfdGhpcy52b3JiaXNBdWRpbyA9ICdhdWRpby9vZ2c7IGNvZGVjcz12b3JiaXMnO1xuICAgIF90aGlzLm1wZWdBdWRpbyA9ICdhdWRpby9tcGVnOyAnO1xuICAgIF90aGlzLm1lc3NhZ2UgPSBudWxsO1xuICAgIF90aGlzLnZpZGVvQ29udGFpbmVyID0gbnVsbDtcbiAgICBfdGhpcy5zdHJlYW0gPSBudWxsO1xuICAgICgwLCBfYXV0b0JpbmQyLmRlZmF1bHQpKF90aGlzKTtcbiAgICBfdGhpcy5lbmdpbmVJbml0KCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEpwZWdDYW1lcmFIdG1sNSwgW3tcbiAgICBrZXk6ICdkZXN0cnVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0KCkge1xuICAgICAgdGhpcy53YWl0Rm9yVmlkZW9SZWFkeVRpbWVyID0gbnVsbDtcbiAgICAgIGlmICh0aGlzLnZpZGVvKSB7XG4gICAgICAgIHRoaXMudmlkZW8ucGF1c2UoKTtcbiAgICAgICAgdGhpcy52aWRlby5zcmMgPSAnJztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0cmVhbSkge1xuICAgICAgICB0aGlzLnN0cmVhbS5nZXRWaWRlb1RyYWNrcygpLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrKSB7XG4gICAgICAgICAgdHJhY2suc3RvcCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHJlYW0uZ2V0QXVkaW9UcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaykge1xuICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lSW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZUluaXQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5kZWJ1ZygnVXNpbmcgSFRNTDUgZW5naW5lLicpO1xuXG4gICAgICB0aGlzLm1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMubWVzc2FnZS5jbGFzcyA9ICdtZXNzYWdlJztcbiAgICAgIHRoaXMubWVzc2FnZS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIHRoaXMubWVzc2FnZS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAoMCwgX2pwZWdfY2FtZXJhLmFkZFByZWZpeGVkU3R5bGUpKHRoaXMubWVzc2FnZSwgJ2JveFNpemluZycsICdib3JkZXItYm94Jyk7XG4gICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIHRoaXMubWVzc2FnZS5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgIHRoaXMubWVzc2FnZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUuekluZGV4ID0gMztcbiAgICAgIHRoaXMubWVzc2FnZS5pbm5lckhUTUwgPSB0aGlzLm9wdGlvbnMuYWNjZXNzTWVzc2FnZTtcblxuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlKTtcblxuICAgICAgdGhpcy52aWRlb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy52aWRlb0NvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgdGhpcy52aWRlb0NvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLnZpZGVvQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9IDE7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudmlkZW9Db250YWluZXIpO1xuICAgICAgdGhpcy5yZXNpemVWaWRlb0NvbnRhaW5lcigpO1xuXG4gICAgICB0aGlzLnZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgIHRoaXMudmlkZW8uYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcmV2aWV3TWlycm9yKSAoMCwgX2pwZWdfY2FtZXJhLmFkZFByZWZpeGVkU3R5bGUpKHRoaXMudmlkZW8sICd0cmFuc2Zvcm0nLCAnc2NhbGV4KC0xLjApJyk7XG5cbiAgICAgIGlmICh3aW5kb3cuQXVkaW9Db250ZXh0KSB7XG4gICAgICAgIGlmIChjYW5QbGF5KHRoaXMudm9yYmlzQXVkaW8pKSB7XG4gICAgICAgICAgdGhpcy5sb2FkU2h1dHRlclNvdW5kKHRoaXMub3B0aW9ucy5zaHV0dGVyT2dnVXJsKTtcbiAgICAgICAgfSBlbHNlIGlmIChjYW5QbGF5KHRoaXMubXBlZ0F1ZGlvKSkge1xuICAgICAgICAgIHRoaXMubG9hZFNodXR0ZXJTb3VuZCh0aGlzLm9wdGlvbnMuc2h1dHRlck1wM1VybCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHN1Y2Nlc3MgPSBmdW5jdGlvbiBzdWNjZXNzKHN0cmVhbSkge1xuICAgICAgICBfdGhpczIucmVtb3ZlTWVzc2FnZSgpO1xuICAgICAgICBfdGhpczIuc3RyZWFtID0gc3RyZWFtO1xuXG4gICAgICAgIGlmICh3aW5kb3cuVVJMKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF90aGlzMi52aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzMi52aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN0cmVhbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzMi52aWRlby5zcmMgPSBzdHJlYW07XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpczIuYmxvY2tFbGVtZW50QWNjZXNzKCk7XG5cbiAgICAgICAgcmV0dXJuIF90aGlzMi53YWl0Rm9yVmlkZW9SZWFkeSgpO1xuICAgICAgfTtcblxuICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICB2aWRlbzoge1xuICAgICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICBtaW46IDY0MCxcbiAgICAgICAgICAgIGlkZWFsOiB0aGlzLm9wdGlvbnMucmVzb2x1dGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXVkaW86IGZhbHNlXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgICAgICAgaWYgKCFfdGhpczIuc3RyZWFtKSB7XG4gICAgICAgICAgdmFyIHRyYWNrcyA9IHN0cmVhbS5nZXRWaWRlb1RyYWNrcygpO1xuICAgICAgICAgIHZhciBzZXR0aW5ncyA9IHRyYWNrc1swXS5nZXRTZXR0aW5ncygpO1xuICAgICAgICAgIF90aGlzMi5kZWJ1ZygnQ2FtZXJhIHJlc29sdXRpb24gJyArIHNldHRpbmdzLndpZHRoICsgJ3gnICsgc2V0dGluZ3MuaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgICAgc3VjY2VzcyhzdHJlYW0pO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMyLm1lc3NhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRocm93IG5ldyBfZXJyb3JzLldlYmNhbUVycm9yKF9lcnJvcnMuV2ViY2FtRXJyb3JzLkdFVF9NRURJQV9GQUlMRURfSU5JVCwgZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVzaXplUHJldmlldycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZVByZXZpZXcoKSB7XG4gICAgICB0aGlzLnJlc2l6ZVZpZGVvQ29udGFpbmVyKCk7XG4gICAgICB0aGlzLnJlc2l6ZVZpZGVvQm94KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVzaXplVmlkZW9Db250YWluZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNpemVWaWRlb0NvbnRhaW5lcigpIHtcbiAgICAgIHZhciB2ZXJ0aWNhbFBhZGRpbmcgPSBNYXRoLmZsb29yKHRoaXMudmlld0hlaWdodCAqIDAuMik7XG4gICAgICB2YXIgaG9yaXpvbnRhbFBhZGRpbmcgPSBNYXRoLmZsb29yKHRoaXMudmlld1dpZHRoICogMC4yKTtcbiAgICAgIHRoaXMubWVzc2FnZS5zdHlsZS5wYWRkaW5nVG9wID0gdmVydGljYWxQYWRkaW5nICsgJ3B4JztcbiAgICAgIHRoaXMubWVzc2FnZS5zdHlsZS5wYWRkaW5nQm90dG9tID0gdmVydGljYWxQYWRkaW5nICsgJ3B4JztcbiAgICAgIHRoaXMubWVzc2FnZS5zdHlsZS5wYWRkaW5nTGVmdCA9IGhvcml6b250YWxQYWRkaW5nICsgJ3B4JztcbiAgICAgIHRoaXMubWVzc2FnZS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBob3Jpem9udGFsUGFkZGluZyArICdweCc7XG4gICAgICB0aGlzLnZpZGVvQ29udGFpbmVyLnN0eWxlLndpZHRoID0gdGhpcy52aWV3V2lkdGggKyAncHgnO1xuICAgICAgdGhpcy52aWRlb0NvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSB0aGlzLnZpZXdIZWlnaHQgKyAncHgnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZVBsYXlTaHV0dGVyU291bmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVQbGF5U2h1dHRlclNvdW5kKCkge1xuICAgICAgaWYgKCF0aGlzLnNodXR0ZXJCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2UgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgIHNvdXJjZS5idWZmZXIgPSB0aGlzLnNodXR0ZXJCdWZmZXI7XG4gICAgICBzb3VyY2UuY29ubmVjdCh0aGlzLmF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgICByZXR1cm4gc291cmNlLnN0YXJ0KDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZUNhcHR1cmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVDYXB0dXJlKHRoZVNuYXBzaG90LCBtaXJyb3IsIHF1YWxpdHksIHNjYWxlKSB7XG4gICAgICB2YXIgc25hcHNob3QgPSB0aGVTbmFwc2hvdDtcbiAgICAgIHZhciBjcm9wID0gdGhpcy5nZXRDYXB0dXJlQ3JvcCgpO1xuXG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBjYW52YXMud2lkdGggPSBNYXRoLnJvdW5kKGNyb3Aud2lkdGggKiBzY2FsZSk7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gTWF0aC5yb3VuZChjcm9wLmhlaWdodCAqIHNjYWxlKTtcblxuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHRoaXMudmlkZW8sIGNyb3AueE9mZnNldCwgY3JvcC55T2Zmc2V0LCBjcm9wLndpZHRoLCBjcm9wLmhlaWdodCwgMCwgMCwgTWF0aC5yb3VuZChjcm9wLndpZHRoICogc2NhbGUpLCBNYXRoLnJvdW5kKGNyb3AuaGVpZ2h0ICogc2NhbGUpKTtcblxuICAgICAgc25hcHNob3QuY2FudmFzID0gY2FudmFzO1xuICAgICAgc25hcHNob3QubWlycm9yID0gbWlycm9yO1xuICAgICAgc25hcHNob3QucXVhbGl0eSA9IHF1YWxpdHk7XG5cbiAgICAgIHJldHVybiBzbmFwc2hvdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5naW5lRGlzcGxheShzbmFwc2hvdCkge1xuICAgICAgaWYgKHRoaXMuZGlzcGxheWVkY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZGlzcGxheWVkY2FudmFzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kaXNwbGF5ZWRjYW52YXMgPSBzbmFwc2hvdC5jYW52YXM7XG4gICAgICB0aGlzLmRpc3BsYXllZGNhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMudmlld1dpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMuZGlzcGxheWVkY2FudmFzLnN0eWxlLmhlaWdodCA9IHRoaXMudmlld0hlaWdodCArICdweCc7XG4gICAgICB0aGlzLmRpc3BsYXllZGNhbnZhcy5zdHlsZS50b3AgPSAwO1xuICAgICAgdGhpcy5kaXNwbGF5ZWRjYW52YXMuc3R5bGUubGVmdCA9IDA7XG4gICAgICB0aGlzLmRpc3BsYXllZGNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmRpc3BsYXllZGNhbnZhcy5zdHlsZS56SW5kZXggPSAyO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcmV2aWV3TWlycm9yKSAoMCwgX2pwZWdfY2FtZXJhLmFkZFByZWZpeGVkU3R5bGUpKHRoaXMuZGlzcGxheWVkY2FudmFzLCAndHJhbnNmb3JtJywgJ3NjYWxleCgtMS4wKScpO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kaXNwbGF5ZWRjYW52YXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZUdldGNhbnZhcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZUdldGNhbnZhcyhzbmFwc2hvdCkge1xuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzLndpZHRoID0gc25hcHNob3QuY2FudmFzLndpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHNuYXBzaG90LmNhbnZhcy5oZWlnaHQ7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc25hcHNob3QuY2FudmFzLCAwLCAwKTtcbiAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lR2V0SW1hZ2VEYXRhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5naW5lR2V0SW1hZ2VEYXRhKHNuYXBzaG90KSB7XG4gICAgICB2YXIgY2FudmFzID0gc25hcHNob3QuY2FudmFzO1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIHJldHVybiBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZUdldEJsb2InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVHZXRCbG9iKHNuYXBzaG90LCBtaW1lLCBtaXJyb3IsIHF1YWxpdHksIGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY2FudmFzID0gdm9pZCAwO1xuICAgICAgaWYgKG1pcnJvcikge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gc25hcHNob3QuY2FudmFzLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc25hcHNob3QuY2FudmFzLmhlaWdodDtcblxuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTsgLy8gcmVzZXQgdHJhbnNmb3JtYXRpb24gbWF0cml4XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKGNhbnZhcy53aWR0aCwgMCk7XG4gICAgICAgIGNvbnRleHQuc2NhbGUoLTEsIDEpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShzbmFwc2hvdC5jYW52YXMsIDAsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzID0gc25hcHNob3QuY2FudmFzO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FudmFzLnRvQmxvYihmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soYmxvYik7XG4gICAgICB9LCBtaW1lLCBxdWFsaXR5KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVEaXNjYXJkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5naW5lRGlzY2FyZChzbmFwc2hvdCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICByZXR1cm4gZGVsZXRlIHNuYXBzaG90LmNhbnZhcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVTaG93U3RyZWFtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5naW5lU2hvd1N0cmVhbSgpIHtcbiAgICAgIGlmICh0aGlzLmRpc3BsYXllZGNhbnZhcykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmRpc3BsYXllZGNhbnZhcyk7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkY2FudmFzID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlkZW9Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVNZXNzYWdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlTWVzc2FnZSgpIHtcbiAgICAgIHRoaXMubWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbG9hZFNodXR0ZXJTb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvYWRTaHV0dGVyU291bmQodXJsKSB7XG4gICAgICBpZiAodGhpcy5hdWRpb0NvbnRleHQgfHwgIXVybCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG5cbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhhdC5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHJlcXVlc3QucmVzcG9uc2UsIGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICAgICAgICB0aGF0LnNodXR0ZXJCdWZmZXIgPSBidWZmZXI7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHJldHVybiByZXF1ZXN0LnNlbmQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3YWl0Rm9yVmlkZW9SZWFkeScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhaXRGb3JWaWRlb1JlYWR5KCkge1xuICAgICAgdmFyIHZpZGVvV2lkdGggPSBwYXJzZUludCh0aGlzLnZpZGVvLnZpZGVvV2lkdGgsIDEwKTtcbiAgICAgIHZhciB2aWRlb0hlaWdodCA9IHBhcnNlSW50KHRoaXMudmlkZW8udmlkZW9IZWlnaHQsIDEwKTtcblxuICAgICAgaWYgKHZpZGVvV2lkdGggPiAwICYmIHZpZGVvSGVpZ2h0ID4gMCkge1xuICAgICAgICB0aGlzLnZpZGVvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudmlkZW8pO1xuXG4gICAgICAgIHRoaXMudmlkZW9XaWR0aCA9IHZpZGVvV2lkdGg7XG4gICAgICAgIHRoaXMudmlkZW9IZWlnaHQgPSB2aWRlb0hlaWdodDtcblxuICAgICAgICB0aGlzLnZpZGVvLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgdGhpcy5yZXNpemVWaWRlb0JveCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnByZXBhcmVkKHRoaXMudmlkZW9XaWR0aCwgdGhpcy52aWRlb0hlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzQ2hlY2tzQ291bnQgPiAxMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IF9lcnJvcnMuV2ViY2FtRXJyb3IoX2Vycm9ycy5XZWJjYW1FcnJvci5DQU1FUkFfTk9UX1JFQURZKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdHVzQ2hlY2tzQ291bnQrKztcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHRoaXMud2FpdEZvclZpZGVvUmVhZHlUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhhdC53YWl0Rm9yVmlkZW9SZWFkeSgpO1xuICAgICAgfSwgMTAwKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2l6ZVZpZGVvQm94JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplVmlkZW9Cb3goKSB7XG4gICAgICB2YXIgY3JvcCA9IHRoaXMuZ2V0VmlkZW9Dcm9wKCk7XG4gICAgICB0aGlzLnZpZGVvLnN0eWxlLndpZHRoID0gY3JvcC53aWR0aCArICdweCc7XG4gICAgICB0aGlzLnZpZGVvLnN0eWxlLmhlaWdodCA9IGNyb3AuaGVpZ2h0ICsgJ3B4JztcbiAgICAgIHRoaXMudmlkZW8uc3R5bGUubGVmdCA9IGNyb3AueE9mZnNldCArICdweCc7XG4gICAgICB0aGlzLnZpZGVvLnN0eWxlLnRvcCA9IGNyb3AueU9mZnNldCArICdweCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VmlkZW9Dcm9wJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmlkZW9Dcm9wKCkge1xuICAgICAgdmFyIHZpZGVvU2NhbGUgPSB2b2lkIDA7XG4gICAgICB2YXIgdmlkZW9SYXRpbyA9IHRoaXMudmlkZW9XaWR0aCAvIHRoaXMudmlkZW9IZWlnaHQ7XG4gICAgICB2YXIgdmlld1JhdGlvID0gdGhpcy52aWV3V2lkdGggLyB0aGlzLnZpZXdIZWlnaHQ7XG5cbiAgICAgIGlmICh2aWRlb1JhdGlvID49IHZpZXdSYXRpbykge1xuICAgICAgICAvLyBmaWxsIGhlaWdodCwgY3JvcCB3aWR0aFxuICAgICAgICB0aGlzLmRlYnVnKCdGaWxsaW5nIGhlaWdodCcpO1xuICAgICAgICB2aWRlb1NjYWxlID0gdGhpcy52aWV3SGVpZ2h0IC8gdGhpcy52aWRlb0hlaWdodDtcbiAgICAgICAgdmFyIHNjYWxlZFZpZGVvV2lkdGggPSBNYXRoLnJvdW5kKHRoaXMudmlkZW9XaWR0aCAqIHZpZGVvU2NhbGUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IHNjYWxlZFZpZGVvV2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnZpZXdIZWlnaHQsXG4gICAgICAgICAgeE9mZnNldDogLU1hdGguZmxvb3IoKHNjYWxlZFZpZGVvV2lkdGggLSB0aGlzLnZpZXdXaWR0aCkgLyAyLjApLFxuICAgICAgICAgIHlPZmZzZXQ6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIGZpbGwgd2lkdGgsIGNyb3AgaGVpZ2h0XG4gICAgICB0aGlzLmRlYnVnKCdGaWxsaW5nIHdpZHRoJyk7XG4gICAgICB2aWRlb1NjYWxlID0gdGhpcy52aWV3V2lkdGggLyB0aGlzLnZpZGVvV2lkdGg7XG4gICAgICB2YXIgc2NhbGVkVmlkZW9IZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMudmlkZW9IZWlnaHQgKiB2aWRlb1NjYWxlKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHRoaXMudmlld1dpZHRoLFxuICAgICAgICBoZWlnaHQ6IHNjYWxlZFZpZGVvSGVpZ2h0LFxuICAgICAgICB4T2Zmc2V0OiAwLFxuICAgICAgICB5T2Zmc2V0OiAtTWF0aC5mbG9vcigoc2NhbGVkVmlkZW9IZWlnaHQgLSB0aGlzLnZpZXdIZWlnaHQpIC8gMi4wKVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDYXB0dXJlQ3JvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENhcHR1cmVDcm9wKCkge1xuICAgICAgdmFyIHZpZGVvUmF0aW8gPSB0aGlzLnZpZGVvV2lkdGggLyB0aGlzLnZpZGVvSGVpZ2h0O1xuICAgICAgdmFyIHZpZXdSYXRpbyA9IHRoaXMudmlld1dpZHRoIC8gdGhpcy52aWV3SGVpZ2h0O1xuXG4gICAgICBpZiAodmlkZW9SYXRpbyA+PSB2aWV3UmF0aW8pIHtcbiAgICAgICAgLy8gdGFrZSBmdWxsIGhlaWdodCwgY3JvcCB3aWR0aFxuICAgICAgICB2YXIgc25hcHNob3RXaWR0aCA9IE1hdGgucm91bmQodGhpcy52aWRlb0hlaWdodCAqIHZpZXdSYXRpbyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aWR0aDogc25hcHNob3RXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHRoaXMudmlkZW9IZWlnaHQsXG4gICAgICAgICAgeE9mZnNldDogTWF0aC5mbG9vcigodGhpcy52aWRlb1dpZHRoIC0gc25hcHNob3RXaWR0aCkgLyAyLjApLFxuICAgICAgICAgIHlPZmZzZXQ6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vIHRha2UgZnVsbCB3aWR0aCwgY3JvcCBoZWlnaHRcbiAgICAgIHZhciBzbmFwc2hvdEhlaWdodCA9IE1hdGgucm91bmQodGhpcy52aWRlb1dpZHRoIC8gdmlld1JhdGlvKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGg6IHRoaXMudmlkZW9XaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBzbmFwc2hvdEhlaWdodCxcbiAgICAgICAgeE9mZnNldDogMCxcbiAgICAgICAgeU9mZnNldDogTWF0aC5mbG9vcigodGhpcy52aWRlb0hlaWdodCAtIHNuYXBzaG90SGVpZ2h0KSAvIDIuMClcbiAgICAgIH07XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEpwZWdDYW1lcmFIdG1sNTtcbn0oX2pwZWdfY2FtZXJhMi5kZWZhdWx0KTtcblxuSnBlZ0NhbWVyYUh0bWw1LmVuZ2luZUNoZWNrID0gZnVuY3Rpb24gKHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBpZiAoY2FudmFzLmdldENvbnRleHQgJiYgIWNhbnZhcy50b0Jsb2IpIHtcbiAgICBmYWlsdXJlKCdKcGVnQ2FtZXJhOiBDYW52YXMtdG8tQmxvYiBpcyBub3QgbG9hZGVkJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKS50aGVuKGZ1bmN0aW9uIChkZXZpY2VzKSB7XG4gICAgICBpZiAoZGV2aWNlcykge1xuICAgICAgICBzdWNjZXNzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmYWlsdXJlKCk7XG4gICAgICB9XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgZmFpbHVyZSgpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBmYWlsdXJlKCk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEpwZWdDYW1lcmFIdG1sNTtcblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfYXV0b0JpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2F1dG9CaW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9CaW5kKTtcblxudmFyIF9zdGF0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5cbnZhciBfc3RhdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdHMpO1xuXG52YXIgX2pwZWdfY2FtZXJhID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy8gU25hcHNob3QgdGFrZW4gdXNpbmcge0pwZWdDYW1lcmF9LlxudmFyIFNuYXBzaG90ID0gZnVuY3Rpb24gKCkge1xuXG4gIC8vIEBub2RvY1xuICAvLyBAcHJpdmF0ZVxuXG5cbiAgLy8gQG5vZG9jXG4gIC8vIEBwcml2YXRlXG5cblxuICAvLyBAbm9kb2NcbiAgLy8gQHByaXZhdGVcblxuXG4gIC8vIEBub2RvY1xuICAvLyBAcHJpdmF0ZVxuICBmdW5jdGlvbiBTbmFwc2hvdChjYW1lcmEsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU25hcHNob3QpO1xuXG4gICAgdGhpcy5uZXh0U25hcHNob3RJZCA9IDE7XG4gICAgdGhpcy5kaXNjYXJkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmV4dHJhQ2FudmFzID0gbnVsbDtcbiAgICB0aGlzLmJsb2IgPSBudWxsO1xuICAgIHRoaXMuYmxvYk1pbWUgPSBudWxsO1xuICAgIHRoaXMuaW1hZ2VEYXRhID0gbnVsbDtcbiAgICB0aGlzLnN0YXRzID0gbnVsbDtcbiAgICB0aGlzLmdldENhbnZhc1RpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuZ2V0QmxvYlRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuZ2V0SW1hZ2VEYXRhVGltZW91dCA9IG51bGw7XG5cbiAgICAoMCwgX2F1dG9CaW5kMi5kZWZhdWx0KSh0aGlzKTtcbiAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuaWQgPSB0aGlzLm5leHRTbmFwc2hvdElkKys7XG4gIH1cblxuICAvLyBEaXNwbGF5IHRoZSBzbmFwc2hvdCB3aXRoIHRoZSBjYW1lcmEgZWxlbWVudCBpdCB3YXMgdGFrZW4gd2l0aC5cbiAgLy9cbiAgLy8gQHJldHVybiBbU25hcHNob3RdIFNlbGYgZm9yIGNoYWluaW5nLlxuXG5cbiAgLy8gQG5vZG9jXG4gIC8vIEBwcml2YXRlXG5cbiAgLy8gQG5vZG9jXG4gIC8vIEBwcml2YXRlXG5cblxuICAvLyBAbm9kb2NcbiAgLy8gQHByaXZhdGVcblxuICAvLyBTbmFwc2hvdCBJRHMgYXJlIHVuaXF1ZSB3aXRoaW4gYnJvd3NlciBzZXNzaW9uLiBUaGlzIGNsYXNzIHZhcmlhYmxlIGhvbGRzXG4gIC8vIHRoZSB2YWx1ZSBvZiB0aGUgbmV4dCBJRCB0byB1c2UuXG4gIC8vXG4gIC8vIEBub2RvY1xuICAvLyBAcHJpdmF0ZVxuXG5cbiAgX2NyZWF0ZUNsYXNzKFNuYXBzaG90LCBbe1xuICAgIGtleTogJ3Nob3cnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgaWYgKHRoaXMuZGlzY2FyZGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGlzY2FyZGVkIHNuYXBzaG90IGNhbm5vdCBiZSB1c2VkJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY2FtZXJhLmRpc3BsYXkodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBTdG9wIGRpc3BsYXlpbmcgdGhlIHNuYXBzaG90IGFuZCByZXR1cm4gdG8gc2hvd2luZyBsaXZlIGNhbWVyYSBzdHJlYW0uXG4gICAgLy9cbiAgICAvLyBJZ25vcmVkIGlmIGNhbWVyYSBpcyBkaXNwbGF5aW5nIGRpZmZlcmVudCBzbmFwc2hvdC5cbiAgICAvL1xuICAgIC8vIEByZXR1cm4gW1NuYXBzaG90XSBTZWxmIGZvciBjaGFpbmluZy5cblxuICB9LCB7XG4gICAga2V5OiAnaGlkZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICBpZiAodGhpcy5jYW1lcmEuZGlzcGxheWVkU25hcHNob3QoKSA9PT0gdGhpcykge1xuICAgICAgICB0aGlzLmNhbWVyYS5zaG93U3RyZWFtKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgc25hcHNob3QgcGl4ZWwgc3RhdGlzdGljcyAobWVhbiBncmF5IHZhbHVlLCBzdGQpLlxuICAgIC8vXG4gICAgLy8gQmVjYXVzZSByZWFkaW5nIGltYWdlIGRhdGEgY2FuIHRha2UgYSB3aGlsZSB3aGVuIEZsYXNoIGZhbGxiYWNrIGlzIGJlaW5nXG4gICAgLy8gdXNlZCB0aGlzIG1ldGhvZCBkb2VzIG5vdCByZXR1cm4gdGhlIGRhdGEgaW1tZWRpYXRlbHkuIEluc3RlYWQgaXQgYWNjZXB0c1xuICAgIC8vIGEgY2FsbGJhY2sgdGhhdCBsYXRlciB3aWxsIGJlIGNhbGxlZCB3aXRoIGEge1N0YXRzfSBvYmplY3QgYXMgYW4gYXJndW1lbnQuXG4gICAgLy8gU25hcHNob3Qgd2lsbCBiZSBhdmFpbGFibGUgYXMgYHRoaXNgLlxuICAgIC8vXG4gICAgLy8gQHBhcmFtIGNhbGxiYWNrIFtGdW5jdGlvbl0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGRhdGEgaXMgYXZhaWxhYmxlLiBTbmFwc2hvdFxuICAgIC8vICAgb2JqZWN0IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGB0aGlzYCwgdGhlIHtTdGF0c30gaW5zdGFuY2Ugd2lsbCBiZSBwYXNzZWRcbiAgICAvLyAgIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAgICAvL1xuICAgIC8vIEByZXR1cm4gW3ZvaWRdXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFN0YXRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RhdHMoY2FsbGJhY2spIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmICh0aGlzLmRpc2NhcmRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Rpc2NhcmRlZCBzbmFwc2hvdCBjYW5ub3QgYmUgdXNlZCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZXRJbWFnZURhdGEoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhbGN1bGF0ZVN0YXRzKGRhdGEsIGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEdldCBjYW52YXMgZWxlbWVudCBzaG93aW5nIHRoZSBzbmFwc2hvdC5cbiAgICAvL1xuICAgIC8vIFRoaXMgY2FuIGJlIHVzZWQgdG8gZGlzcGxheSB0aGUgc25hcHNob3Qgb3V0c2lkZSB0aGUgY2FtZXJhJ3MgY29udGFpbmVyLlxuICAgIC8vIFlvdSBjYW4gc2hvdyBtdWx0aXBsZSBzbmFwc2hvdHMgYXQgYSB0aW1lIGFuZCBhbGxvdyB0aGUgdXNlciB0byBwaWNrIG9uZVxuICAgIC8vIGhlIGxpa2VzIGJlc3QuXG4gICAgLy9cbiAgICAvLyBDYW52YXMgcHJvZHVjZWQgYnkgdGhpcyBtZXRob2QgaGFzIGEgcmVzb2x1dGlvbiBvZiB0aGUgc25hcHNob3QgKHdoaWNoXG4gICAgLy8gZGVwZW5kcyBvbiB0aGUgY2FtZXJhJ3MgbmF0aXZlIHJlc29sdXRpb24pLCBub3QgdGhhdCBvZiB0aGUgY2FtZXJhJ3NcbiAgICAvLyBjb250YWluZXIuIFVzZSBDU1MgdG8gZGlzcGxheSB0aGlzIGNhbnZhcyBpbiBkaWZmZXJlbnQgc2l6ZXMuXG4gICAgLy9cbiAgICAvLyBCZWNhdXNlIHJlYWRpbmcgaW1hZ2UgZGF0YSBjYW4gdGFrZSBhIHdoaWxlIHdoZW4gRmxhc2ggZmFsbGJhY2sgaXMgYmVpbmdcbiAgICAvLyB1c2VkIHRoaXMgbWV0aG9kIGRvZXMgbm90IHJldHVybiB0aGUgYGNhbnZhc2AgZWxlbWVudCBpbW1lZGlhdGVseS4gSW5zdGVhZFxuICAgIC8vIGl0IGFjY2VwdHMgYSBjYWxsYmFjayB0aGF0IGxhdGVyIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGBjYW52YXNgIGVsZW1lbnQgYXNcbiAgICAvLyBhbiBhcmd1bWVudC4gU25hcHNob3Qgd2lsbCBiZSBhdmFpbGFibGUgYXMgYHRoaXNgLlxuICAgIC8vXG4gICAgLy8gTXVsdGlwbGUgY2FsbHMgdG8gdGhpcyBtZXRob2Qgd2lsbCB5aWVsZCB0aGUgc2FtZSBjYW52YXMgZWxlbWVudC5cbiAgICAvL1xuICAgIC8vIE9uZSBjYXZlYXQgaXMgdGhhdCB0aGUgdW5kZXJsYXlpbmcgZGF0YSBvZiB0aGlzIGNhbnZhcyBpcyBub3QgbWlycm9yZWQgbGlrZVxuICAgIC8vIHRoZSBzdHJlYW0gc2hvd24gaW4gdGhlIGNhbWVyYSBjb250YWluZXIuIFNwZWNpYWwgQ1NTIHRyYW5zZm9ybSBkaXJlY3RpdmVcbiAgICAvLyBpcyBhcHBsaWVkIG9uIGl0IHNvIHRoYXQgaXQgbG9va3MgbGlrZSB0aGUgcGljdHVyZSBpbiB0aGUgY2FtZXJhIHdoZW5cbiAgICAvLyBkaXNwbGF5ZWQuIFRoaXMgb25seSBtYXR0ZXJzIHdoZW4gbWFuaXB1bGF0aW5nIHRoZSBjYW52YXMgb3IgcmVhZGluZyBpdCdzXG4gICAgLy8gZGF0YS4gWW91IGNhbiByZWFkIG1vcmUgYWJvdXQgbWlycm9yaW5nIGluIHtKcGVnQ2FtZXJhI2NhcHR1cmV9LlxuICAgIC8vXG4gICAgLy8gVGhpcyBtZXRob2QgZG9lc24ndCB3b3JrIGluIEludGVybmV0IEV4cGxvcmVyIDggb3IgZWFybGllciwgYmVjYXVzZSBpdCBkb2VzXG4gICAgLy8gbm90IHN1cHBvcnQgYGNhbnZhc2AgZWxlbWVudC4gQ2FsbCB7aXNDYW52YXNTdXBwb3J0ZWR9IHRvIGxlYXJuXG4gICAgLy8gd2hldGhlciB5b3UgY2FuIHVzZSB0aGlzIG1ldGhvZC5cbiAgICAvL1xuICAgIC8vIEBwYXJhbSBjYWxsYmFjayBbRnVuY3Rpb25dIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBgY2FudmFzYCBlbGVtZW50IGlzXG4gICAgLy8gICBhdmFpbGFibGUuIFNuYXBzaG90IG9iamVjdCB3aWxsIGJlIGF2YWlsYWJsZSBhcyBgdGhpc2AsIHRoZSBgY2FudmFzYFxuICAgIC8vICAgZWxlbWVudCB3aWxsIGJlIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gICAgLy9cbiAgICAvLyBAcmV0dXJuIFtCb29sZWFuXSBXaGV0aGVyIGNhbnZhcyBpcyBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDYW52YXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDYW52YXMoY2FsbGJhY2spIHtcbiAgICAgIGlmICh0aGlzLmRpc2NhcmRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Rpc2NhcmRlZCBzbmFwc2hvdCBjYW5ub3QgYmUgdXNlZCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoISgwLCBfanBlZ19jYW1lcmEuaXNDYW52YXNTdXBwb3J0ZWQpKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB0aGlzLmdldENhbnZhc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGF0LmV4dHJhQ2FudmFzKSB7XG4gICAgICAgICAgdGhhdC5leHRyYUNhbnZhcyA9IHRoYXQuY2FtZXJhLmVuZ2luZUdldENhbnZhcyh0aGF0KTtcbiAgICAgICAgfVxuICAgICAgICAoMCwgX2pwZWdfY2FtZXJhLmFkZFByZWZpeGVkU3R5bGUpKHRoYXQuZXh0cmFDYW52YXMsICd0cmFuc2Zvcm0nLCAnc2NhbGV4KC0xLjApJyk7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoYXQsIHRoYXQuZXh0cmFDYW52YXMpO1xuICAgICAgfSwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGZpbGUgdGhhdCB3b3VsZCBiZSB1cGxvYWRlZCB0byB0aGUgc2VydmVyIGFzIGEgQmxvYiBvYmplY3QuXG4gICAgLy9cbiAgICAvLyBUaGlzIGNhbiBiZSB1c2VmdWwgaWYgeW91IHdhbnQgdG8gc3RyZWFtIHRoZSBkYXRhIHZpYSBhIHdlYnNvY2tldC4gTm90ZSB0aGF0XG4gICAgLy8gdXNpbmcgYHVwbG9hZGAgaXMgbW9yZSBlZmZpY2llbnQgaWYgYWxsIHlvdSB3YW50IHRvIGRvIGlzIHVwbG9hZCB0aGlzIGZpbGVcbiAgICAvLyB0byBhIHNlcnZlciB2aWEgUE9TVCBjYWxsLlxuICAgIC8vXG4gICAgLy8gVGhpcyBtZXRob2QgZG9lc24ndCB3b3JrIGluIEludGVybmV0IEV4cGxvcmVyIDggb3IgZWFybGllciwgYmVjYXVzZSBpdCBkb2VzXG4gICAgLy8gbm90IHN1cHBvcnQgYGNhbnZhc2AgZWxlbWVudC4gQ2FsbCB7aXNDYW52YXNTdXBwb3J0ZWR9IHRvIGxlYXJuXG4gICAgLy8gd2hldGhlciB5b3UgY2FuIHVzZSB0aGlzIG1ldGhvZC5cbiAgICAvL1xuICAgIC8vIEJlY2F1c2UgcHJlcGFyaW5nIGltYWdlIGJsb2IgY2FuIHRha2UgYSB3aGlsZSB0aGlzIG1ldGhvZCBkb2VzIG5vdCByZXR1cm5cbiAgICAvLyB0aGUgZGF0YSBpbW1lZGlhdGVseS4gSW5zdGVhZCBpdCBhY2NlcHRzIGEgY2FsbGJhY2sgdGhhdCBsYXRlciB3aWxsIGJlXG4gICAgLy8gY2FsbGVkIHdpdGggdGhlIGRhdGEgb2JqZWN0IGFzIGFuIGFyZ3VtZW50LiBTbmFwc2hvdCB3aWxsIGJlIGF2YWlsYWJsZSBhc1xuICAgIC8vIGB0aGlzYC5cbiAgICAvL1xuICAgIC8vIE11bHRpcGxlIGNhbGxzIHRvIHRoaXMgbWV0aG9kIHdpbGwgeWllbGQgdGhlIHNhbWUgZGF0YSBvYmplY3QuXG4gICAgLy9cbiAgICAvLyBAcGFyYW0gY2FsbGJhY2sgW0Z1bmN0aW9uXSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gZGF0YSBpcyBhdmFpbGFibGUuIFNuYXBzaG90XG4gICAgLy8gICBvYmplY3Qgd2lsbCBiZSBhdmFpbGFibGUgYXMgYHRoaXNgLCB0aGUgYmxvYiBvYmplY3Qgd2lsbCBiZSBwYXNzZWQgYXMgdGhlXG4gICAgLy8gICBmaXJzdCBhcmd1bWVudC5cbiAgICAvLyBAcGFyYW0gbWltZVR5cGUgW1N0cmluZ10gTWltZSB0eXBlIG9mIHRoZSByZXF1ZXN0ZWQgYmxvYi4gXCJpbWFnZS9qcGVnXCIgYnlcbiAgICAvLyAgIGRlZmF1bHQuXG4gICAgLy9cbiAgICAvLyBAcmV0dXJuIFtCb29sZWFuXSBXaGV0aGVyIGNhbnZhcyBpcyBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRCbG9iJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QmxvYihjYWxsYmFjaywgbWltZVR5cGUpIHtcbiAgICAgIHZhciB0aGVNaW1lVHlwZSA9IG1pbWVUeXBlO1xuICAgICAgaWYgKHRoZU1pbWVUeXBlID09IG51bGwpIHtcbiAgICAgICAgdGhlTWltZVR5cGUgPSAnaW1hZ2UvanBlZyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kaXNjYXJkZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXNjYXJkZWQgc25hcHNob3QgY2Fubm90IGJlIHVzZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoMCwgX2pwZWdfY2FtZXJhLmlzQ2FudmFzU3VwcG9ydGVkKSgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdGhpcy5nZXRCbG9iVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhhdC5ibG9iTWltZSAhPT0gdGhlTWltZVR5cGUpIHtcbiAgICAgICAgICB0aGF0LmJsb2IgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuYmxvYk1pbWUgPSB0aGVNaW1lVHlwZTtcbiAgICAgICAgaWYgKHRoYXQuYmxvYikge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoYXQsIHRoYXQuYmxvYik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pcnJvciA9IHRoYXQub3B0aW9ucy5taXJyb3I7XG4gICAgICAgIHZhciBxdWFsaXR5ID0gdGhhdC5vcHRpb25zLnF1YWxpdHk7XG5cbiAgICAgICAgcmV0dXJuIHRoYXQuY2FtZXJhLmVuZ2luZUdldEJsb2IodGhhdCwgdGhlTWltZVR5cGUsIG1pcnJvciwgcXVhbGl0eSwgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICB0aGF0LmJsb2IgPSBiO1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoYXQsIHRoYXQuYmxvYik7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBHZXQgSW1hZ2VEYXRhIG9iamVjdCBjb250YWluaW5nIGNvbG9yIHZhbHVlcyBmb3IgZWFjaCBwaXhlbCBvZiB0aGUgc25hcHNob3QuXG4gICAgLy9cbiAgICAvLyBEYXRhIHByb2R1Y2VkIGJ5IHRoaXMgbWV0aG9kIGhhcyBhIHJlc29sdXRpb24gb2YgdGhlIHNuYXBzaG90ICh3aGljaCBkZXBlbmRzXG4gICAgLy8gb24gdGhlIGNhbWVyYSdzIG5hdGl2ZSByZXNvbHV0aW9uKSwgbm90IHRoYXQgb2YgdGhlIGNhbWVyYSdzIGNvbnRhaW5lci5cbiAgICAvL1xuICAgIC8vIFJlYWQgbW9yZSBhYm91dCBJbWFnZURhdGEgb2JqZWN0IG9uIFtNb3ppbGxhJ3Mgd2Vic2l0ZVxuICAgIC8vIF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ltYWdlRGF0YSkuXG4gICAgLy9cbiAgICAvLyBCZWNhdXNlIHJlYWRpbmcgaW1hZ2UgZGF0YSBjYW4gdGFrZSBhIHdoaWxlIHdoZW4gRmxhc2ggZmFsbGJhY2sgaXMgYmVpbmdcbiAgICAvLyB1c2VkIHRoaXMgbWV0aG9kIGRvZXMgbm90IHJldHVybiB0aGUgZGF0YSBpbW1lZGlhdGVseS4gSW5zdGVhZCBpdCBhY2NlcHRzXG4gICAgLy8gYSBjYWxsYmFjayB0aGF0IGxhdGVyIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGRhdGEgb2JqZWN0IGFzIGFuIGFyZ3VtZW50LlxuICAgIC8vIFNuYXBzaG90IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGB0aGlzYC5cbiAgICAvL1xuICAgIC8vIE11bHRpcGxlIGNhbGxzIHRvIHRoaXMgbWV0aG9kIHdpbGwgeWllbGQgdGhlIHNhbWUgZGF0YSBvYmplY3QuXG4gICAgLy9cbiAgICAvLyBPbmUgY2F2ZWF0IGlzIHRoYXQgdGhlIHJldHVybmVkIGRhdGEgaXMgbm90IG1pcnJvcmVkIGxpa2UgdGhlIHN0cmVhbSBzaG93blxuICAgIC8vIGluIHRoZSBjYW1lcmEgY29udGFpbmVyLiBUaGlzIG9ubHkgbWF0dGVycyB3aGVuIG1hbmlwdWxhdGluZyB0aGUgY2FudmFzIG9yXG4gICAgLy8gcmVhZGluZyBpdCdzIGRhdGEuIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IG1pcnJvcmluZyBpblxuICAgIC8vIHtKcGVnQ2FtZXJhI2NhcHR1cmV9LlxuICAgIC8vXG4gICAgLy8gVGhpcyBtZXRob2QgcmV0dXJucyBuYXRpdmUgW0ltYWdlRGF0YVxuICAgIC8vIF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ltYWdlRGF0YSkgb2JqZWN0IGluIGFsbFxuICAgIC8vIGJyb3dzZXJzIGV4Y2VwdCBJbnRlcm5ldCBFeHBsb3JlciA4IG9yIGVhcmxpZXIgd2hpY2ggZG9lcyBub3Qgc3VwcG9ydFxuICAgIC8vIHRoZSBgY2FudmFzYCBlbGVtZW50LiBJbiB0aGF0IGJyb3dzZXIgYSBnZW5lcmljIEphdmFTY3JpcHQgb2JqZWN0IHdpbGwgYmVcbiAgICAvLyByZXR1cm5lZCB0aGF0IG1pbWljcyB0aGUgbmF0aXZlIGZvcm1hdC4gQ2FsbCB7aXNDYW52YXNTdXBwb3J0ZWR9XG4gICAgLy8gdG8gbGVhcm4gd2hldGhlciBgY2FudmFzYCBpcyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIuXG4gICAgLy9cbiAgICAvLyBAcGFyYW0gY2FsbGJhY2sgW0Z1bmN0aW9uXSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gZGF0YSBpcyBhdmFpbGFibGUuIFNuYXBzaG90XG4gICAgLy8gICBvYmplY3Qgd2lsbCBiZSBhdmFpbGFibGUgYXMgYHRoaXNgLCB0aGUgZGF0YSB3aWxsIGJlIHBhc3NlZCBhcyB0aGVcbiAgICAvLyAgIGZpcnN0IGFyZ3VtZW50LlxuICAgIC8vXG4gICAgLy8gQHJldHVybiBbdm9pZF1cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0SW1hZ2VEYXRhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW1hZ2VEYXRhKGNhbGxiYWNrKSB7XG4gICAgICBpZiAodGhpcy5kaXNjYXJkZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXNjYXJkZWQgc25hcHNob3QgY2Fubm90IGJlIHVzZWQnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdGhpcy5nZXRJbWFnZURhdGFUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhhdC5pbWFnZURhdGEpIHtcbiAgICAgICAgICB0aGF0LmltYWdlRGF0YSA9IHRoYXQuY2FtZXJhLmVuZ2luZUdldEltYWdlRGF0YSh0aGF0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGF0LCB0aGF0LmltYWdlRGF0YSk7XG4gICAgICB9LCAxKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLy8gSGlkZSBhbmQgZGlzY2FyZCB0aGlzIHNuYXBzaG90LlxuICAgIC8vXG4gICAgLy8gQWZ0ZXIgZGlzY2FyZGluZyBhIHNuYXBzaG90IGFuIGF0dGVtcHQgdG8gc2hvdyBvciB1cGxvYWQgaXQgd2lsbCByYWlzZVxuICAgIC8vIGFuIGVycm9yLlxuICAgIC8vXG4gICAgLy8gQHJldHVybiBbdm9pZF1cblxuICB9LCB7XG4gICAga2V5OiAnZGlzY2FyZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2NhcmQoKSB7XG4gICAgICB0aGlzLmNhbWVyYS5kaXNjYXJkKHRoaXMpO1xuICAgICAgZGVsZXRlIHRoaXMuZXh0cmFDYW52YXM7XG4gICAgICBkZWxldGUgdGhpcy5pbWFnZURhdGE7XG4gICAgICBkZWxldGUgdGhpcy5ibG9iO1xuICAgIH1cblxuICAgIC8vIFNuYXBzaG90IG9wdGlvbnNcbiAgICAvL1xuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cbiAgfSwge1xuICAgIGtleTogJ29wdGlvbnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcHRpb25zKCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY2FtZXJhLm9wdGlvbnMsIHRoaXMub3B0aW9ucywgdGhpcy51cGxvYWRPcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIHNuYXBzaG90IHBpeGVsIHN0YXRpc3RpY3MgZ2l2ZW4gaW1hZ2UgZGF0YSBhbmQgY2FsbCBjYWxsYmFjay5cbiAgICAvL1xuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cbiAgfSwge1xuICAgIGtleTogJ2NhbGN1bGF0ZVN0YXRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FsY3VsYXRlU3RhdHMoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgIGlmICghdGhpcy5zdGF0cykge1xuICAgICAgICB2YXIgZ3JheSA9IHZvaWQgMDtcbiAgICAgICAgdmFyIG4gPSBkYXRhLndpZHRoICogZGF0YS5oZWlnaHQ7XG4gICAgICAgIHZhciBzdW0gPSAwLjA7XG4gICAgICAgIHZhciBncmF5VmFsdWVzID0gbmV3IEFycmF5KG4pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBuOyBpIDwgZW5kOyBpKyspIHtcbiAgICAgICAgICB2YXIgaW5kZXggPSBpICogNDtcbiAgICAgICAgICBncmF5ID0gMC4yMTI2ICogZGF0YS5kYXRhW2luZGV4ICsgMF0gKyAvLyByZWRcbiAgICAgICAgICAwLjcxNTIgKiBkYXRhLmRhdGFbaW5kZXggKyAxXSArIC8vIGdyZWVuXG4gICAgICAgICAgMC4wNzIyICogZGF0YS5kYXRhW2luZGV4ICsgMl07IC8vIGJsdWVcbiAgICAgICAgICBncmF5ID0gTWF0aC5yb3VuZChncmF5KTtcblxuICAgICAgICAgIHN1bSArPSBncmF5O1xuICAgICAgICAgIGdyYXlWYWx1ZXNbaV0gPSBncmF5O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1lYW4gPSBNYXRoLnJvdW5kKHN1bSAvIG4pO1xuXG4gICAgICAgIHZhciBzdW1PZlNxdWFyZURpc3RhbmNlcyA9IDA7XG4gICAgICAgIGdyYXlWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAob25lR3JheSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXByb3BlcnRpZXNcbiAgICAgICAgICBzdW1PZlNxdWFyZURpc3RhbmNlcyArPSBNYXRoLnBvdyhvbmVHcmF5IC0gbWVhbiwgMik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc3RhdHMgPSBuZXcgX3N0YXRzMi5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuc3RhdHMubWVhbiA9IG1lYW47XG4gICAgICAgIHRoaXMuc3RhdHMuc3RkID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoc3VtT2ZTcXVhcmVEaXN0YW5jZXMgLyBuKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCB0aGlzLnN0YXRzKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU25hcHNob3Q7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFNuYXBzaG90O1xuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLy9cbi8vIENvbnRhaW5zIHNvbWUgcGl4ZWwgc3RhdGlzdGljcyBvZiB7U25hcHNob3R9IG9yIGNhbWVyYSBzdHJlYW0uXG4vL1xuLy8gQ2FuIGJlIHJldHJpZXZlZCB1c2luZyB7SnBlZ0NhbWVyYSNnZXRTdGF0c30gb3Ige1NuYXBzaG90I2dldFN0YXRzfSBtZXRob2RzLlxuLy9cbnZhciBTdGF0cyA9IGZ1bmN0aW9uIFN0YXRzKCkge1xuICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdHMpO1xuXG4gIHRoaXMubWVhbiA9IG51bGw7XG4gIHRoaXMuc3RkID0gbnVsbDtcbn1cbi8vIEBwcm9wZXJ0eSBbRmxvYXRdIG1lYW4gZ3JheSB2YWx1ZSBvZiBwaXhlbHMgKDAtMjU1KVxuXG5cbi8vIEBwcm9wZXJ0eSBbRmxvYXRdIHN0YW5kYXJkIGRldmlhdGlvbiBvZiBncmF5IHZhbHVlc1xuO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTdGF0cztcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfYXV0b0JpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2F1dG9CaW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9CaW5kKTtcblxudmFyIF9qcGVnX2NhbWVyYSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfanBlZ19jYW1lcmEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfanBlZ19jYW1lcmEpO1xuXG52YXIgX2Vycm9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLy9cbi8vIEpwZWdDYW1lcmEgaW1wbGVtZW50YXRpb24gdGhhdCB1c2VzIEZsYXNoIHRvIGNhcHR1cmUgYW5kIGRpc3BsYXkgc25hcHNob3RzLlxuLy9cbi8vIEBwcml2YXRlXG52YXIgSnBlZ0NhbWVyYUZsYXNoID0gZnVuY3Rpb24gKF9KcGVnQ2FtZXJhQmFzZSkge1xuICBfaW5oZXJpdHMoSnBlZ0NhbWVyYUZsYXNoLCBfSnBlZ0NhbWVyYUJhc2UpO1xuXG4gIGZ1bmN0aW9uIEpwZWdDYW1lcmFGbGFzaCh0aGVDb250YWluZXIsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSnBlZ0NhbWVyYUZsYXNoKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChKcGVnQ2FtZXJhRmxhc2guX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihKcGVnQ2FtZXJhRmxhc2gpKS5jYWxsKHRoaXMsIHRoZUNvbnRhaW5lciwgb3B0aW9ucykpO1xuXG4gICAgX3RoaXMud2FpdEZvclZpZGVvUmVhZHlUaW1lciA9IG51bGw7XG5cbiAgICBfdGhpcy5pbnN0YW5jZXMgPSB7fTtcbiAgICBfdGhpcy5uZXh0SWQgPSAxO1xuICAgICgwLCBfYXV0b0JpbmQyLmRlZmF1bHQpKF90aGlzKTtcbiAgICBfdGhpcy5lbmdpbmVJbml0KCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEpwZWdDYW1lcmFGbGFzaCwgW3tcbiAgICBrZXk6ICdkZXN0cnVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3RydWN0KCkge1xuICAgICAgdGhpcy53YWl0Rm9yVmlkZW9SZWFkeVRpbWVyID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBVc2VkIGJ5IGZsYXNoIG9iamVjdCB0byBzZW5kIG1lc3NhZ2UgdG8gb3VyIGluc3RhbmNlLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdzZW5kTWVzc2FnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGlkLCBtZXRob2QpIHtcbiAgICAgIHZhciBfcHJvdG90eXBlJG1ldGhvZDtcblxuICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbcGFyc2VJbnQoaWQsIDEwKV07XG5cbiAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDIgPyBfbGVuIC0gMiA6IDApLCBfa2V5ID0gMjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChfcHJvdG90eXBlJG1ldGhvZCA9IHRoaXMucHJvdG90eXBlW21ldGhvZF0pLmFwcGx5LmFwcGx5KF9wcm90b3R5cGUkbWV0aG9kLCBbaW5zdGFuY2VdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lSW5pdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZUluaXQoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5kZWJ1ZygnVXNpbmcgRmxhc2ggZW5naW5lJyk7XG5cbiAgICAgIC8vIHJlZ2lzdGVyIG91ciBpbnN0YW5jZVxuICAgICAgdGhpcy5pZCA9IHRoaXMubmV4dElkKys7XG4gICAgICB0aGlzLmluc3RhbmNlc1t0aGlzLmlkXSA9IHRoaXM7XG5cbiAgICAgIHZhciBmbGFzaE9iamVjdElkID0gJ2ZsYXNoX29iamVjdF8nICsgdGhpcy5pZDtcblxuICAgICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICAgbG9vcDogJ2ZhbHNlJyxcbiAgICAgICAgYWxsb3dTY3JpcHRBY2Nlc3M6ICdhbHdheXMnLFxuICAgICAgICBhbGxvd0Z1bGxTY3JlZW46ICdmYWxzZScsXG4gICAgICAgIHF1YWxpdHk6ICdiZXN0JyxcbiAgICAgICAgd21vZGU6ICdvcGFxdWUnLFxuICAgICAgICBtZW51OiAnZmFsc2UnXG4gICAgICB9O1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGlkOiBmbGFzaE9iamVjdElkLFxuICAgICAgICBhbGlnbjogJ21pZGRsZSdcbiAgICAgIH07XG4gICAgICB2YXIgZmxhc2h2YXJzID0ge1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgd2lkdGg6IHRoaXMudmlld1dpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMudmlld0hlaWdodCxcbiAgICAgICAgc2h1dHRlcl91cmw6IHRoaXMub3B0aW9ucy5zaHV0dGVyTXAzVXJsID8gdGhpcy5vcHRpb25zLnNodXR0ZXJNcDNVcmwgOiAnJ1xuICAgICAgfTtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQuc3VjY2Vzcykge1xuICAgICAgICAgIHRocm93IG5ldyBfZXJyb3JzLldlYmNhbUVycm9yKF9lcnJvcnMuV2ViY2FtRXJyb3JzLkZMQVNIX0ZBSUxFRF9MT0FESU5HLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5kZWJ1ZygnRmxhc2ggbG9hZGVkLicpO1xuICAgICAgICB0aGF0LmZsYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZmxhc2hPYmplY3RJZCk7XG4gICAgICAgIGlmIChfdGhpczIub3B0aW9ucy5vblJlYWR5KSB7XG4gICAgICAgICAgX3RoaXMyLndhaXRGb3JWaWRlb1JlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY29udGFpbmVyVG9CZVJlcGxhY2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXJUb0JlUmVwbGFjZWQuaWQgPSAnanBlZ19jYW1lcmFmbGFzaF8nICsgdGhpcy5pZDtcbiAgICAgIGNvbnRhaW5lclRvQmVSZXBsYWNlZC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIGNvbnRhaW5lclRvQmVSZXBsYWNlZC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnByZXZpZXdNaXJyb3IpIHtcbiAgICAgICAgKDAsIF9qcGVnX2NhbWVyYS5hZGRQcmVmaXhlZFN0eWxlKShjb250YWluZXJUb0JlUmVwbGFjZWQsICd0cmFuc2Zvcm0nLCAnc2NhbGV4KC0xLjApJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lclRvQmVSZXBsYWNlZCk7XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgc3dmb2JqZWN0LmVtYmVkU1dGKHRoaXMub3B0aW9ucy5zd2ZVcmwsIGNvbnRhaW5lclRvQmVSZXBsYWNlZC5pZCwgdGhpcy52aWV3V2lkdGgsIHRoaXMudmlld0hlaWdodCwgJzAnLCBudWxsLCBmbGFzaHZhcnMsIHBhcmFtcywgYXR0cmlidXRlcywgY2FsbGJhY2spO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dhaXRGb3JWaWRlb1JlYWR5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2FpdEZvclZpZGVvUmVhZHkoKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgICAgaWYgKHRoaXMuZmxhc2guX2NhcHR1cmUoMSwgZmFsc2UsIDAuMSwgMSkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLm9uUmVhZHkuY2FsbCh0aGlzLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIC8vIGRvIG5vdGhpbmdcblxuICAgICAgLypcbiAgICAgICovXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB0aGlzLndhaXRGb3JWaWRlb1JlYWR5VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoYXQud2FpdEZvclZpZGVvUmVhZHkoKTtcbiAgICAgIH0sIDUwMCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXNpemVQcmV2aWV3JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplUHJldmlldygpIHtcbiAgICAgIGlmICh0aGlzLnZpZXdXaWR0aCA8IDIxNSB8fCB0aGlzLnZpZXdIZWlnaHQgPCAxMzgpIHtcbiAgICAgICAgdGhyb3cgbmV3IF9lcnJvcnMuV2ViY2FtRXJyb3IoX2Vycm9ycy5XZWJjYW1FcnJvcnMuRkxBU0hfV0lORE9XX1RPT19TTUFMTCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZsYXNoLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mbGFzaCk7XG4gICAgICB0aGlzLmZsYXNoID0gbnVsbDtcbiAgICAgIHRoaXMuZW5naW5lSW5pdCgpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lUGxheVNodXR0ZXJTb3VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZVBsYXlTaHV0dGVyU291bmQoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgIHJldHVybiB0aGlzLmZsYXNoLl9wbGF5X3NodXR0ZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVDYXB0dXJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5naW5lQ2FwdHVyZShzbmFwc2hvdCwgbWlycm9yLCBxdWFsaXR5LCBzY2FsZSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICByZXR1cm4gdGhpcy5mbGFzaC5fY2FwdHVyZShzbmFwc2hvdC5pZCwgbWlycm9yLCBxdWFsaXR5LCBzY2FsZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZURpc3BsYXkoc25hcHNob3QpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgcmV0dXJuIHRoaXMuZmxhc2guX2Rpc3BsYXkoc25hcHNob3QuaWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZUdldENhbnZhcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZUdldENhbnZhcyhzbmFwc2hvdCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBpZiAoIXNuYXBzaG90LmltYWdlRGF0YSkge1xuICAgICAgICBzbmFwc2hvdC5pbWFnZURhdGEgPSB0aGlzLmVuZ2luZUdldEltYWdlRGF0YShzbmFwc2hvdCk7XG4gICAgICB9XG4gICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBjYW52YXMud2lkdGggPSBzbmFwc2hvdC5pbWFnZURhdGEud2lkdGg7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gc25hcHNob3QuaW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjb250ZXh0LnB1dEltYWdlRGF0YShzbmFwc2hvdC5pbWFnZURhdGEsIDAsIDApO1xuICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVHZXRJbWFnZURhdGEnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVHZXRJbWFnZURhdGEoc25hcHNob3QpIHtcbiAgICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgIHZhciBmbGFzaERhdGEgPSB0aGlzLmZsYXNoLl9nZXRfaW1hZ2VfZGF0YShzbmFwc2hvdC5pZCk7XG5cbiAgICAgIGlmICgoMCwgX2pwZWdfY2FtZXJhLmlzQ2FudmFzU3VwcG9ydGVkKSgpKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gZmxhc2hEYXRhLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gZmxhc2hEYXRhLmhlaWdodDtcbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVJbWFnZURhdGEoZmxhc2hEYXRhLndpZHRoLCBmbGFzaERhdGEuaGVpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICB3aWR0aDogZmxhc2hEYXRhLndpZHRoLFxuICAgICAgICAgIGhlaWdodDogZmxhc2hEYXRhLmhlaWdodFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZsYXNoRGF0YS5kYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwaXhlbCA9IGZsYXNoRGF0YS5kYXRhW2ldO1xuICAgICAgICB2YXIgaW5kZXggPSBpICogNDtcblxuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG4gICAgICAgIHZhciByZWQgPSBwaXhlbCA+PiAxNiAmIDB4ZmY7XG4gICAgICAgIHZhciBncmVlbiA9IHBpeGVsID4+IDggJiAweGZmO1xuICAgICAgICB2YXIgYmx1ZSA9IHBpeGVsICYgMHhmZjtcblxuICAgICAgICByZXN1bHQuZGF0YVtpbmRleCArIDBdID0gcmVkO1xuICAgICAgICByZXN1bHQuZGF0YVtpbmRleCArIDFdID0gZ3JlZW47XG4gICAgICAgIHJlc3VsdC5kYXRhW2luZGV4ICsgMl0gPSBibHVlO1xuICAgICAgICByZXN1bHQuZGF0YVtpbmRleCArIDNdID0gMjU1O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVHZXRCbG9iJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5naW5lR2V0QmxvYihzbmFwc2hvdCwgbWltZSwgbWlycm9yLCBxdWFsaXR5LCBjYWxsYmFjaykge1xuICAgICAgdmFyIGNhbnZhcyA9IHZvaWQgMDtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgaWYgKCFzbmFwc2hvdC5leHRyYUNhbnZhcykge1xuICAgICAgICBzbmFwc2hvdC5leHRyYUNhbnZhcyA9IHRoaXMuZW5naW5lR2V0Q2FudmFzKHNuYXBzaG90KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1pcnJvcikge1xuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgICAgY2FudmFzLndpZHRoID0gc25hcHNob3QuY2FudmFzLndpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gc25hcHNob3QuY2FudmFzLmhlaWdodDtcblxuICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTsgLy8gcmVzZXQgdHJhbnNmb3JtYXRpb24gbWF0cml4XG4gICAgICAgIGNvbnRleHQudHJhbnNsYXRlKGNhbnZhcy53aWR0aCwgMCk7XG4gICAgICAgIGNvbnRleHQuc2NhbGUoLTEsIDEpO1xuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShzbmFwc2hvdC5leHRyYUNhbnZhcywgMCwgMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW52YXMgPSBzbmFwc2hvdC5leHRyYUNhbnZhcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbnZhcy50b0Jsb2IoZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGJsb2IpO1xuICAgICAgfSwgbWltZSwgcXVhbGl0eSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lRGlzY2FyZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZURpc2NhcmQoc25hcHNob3QpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgcmV0dXJuIHRoaXMuZmxhc2guX2Rpc2NhcmQoc25hcHNob3QuaWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZVNob3dTdHJlYW0nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVTaG93U3RyZWFtKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICByZXR1cm4gdGhpcy5mbGFzaC5fc2hvd19zdHJlYW0oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmbGFzaFByZXBhcmVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmxhc2hQcmVwYXJlZCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICB0aGlzLmJsb2NrRWxlbWVudEFjY2VzcygpO1xuXG4gICAgICAvLyBYWFggc3RlYWwgZm9jdXMgZnJvbSB0aGUgZmxhc2ggb2JqZWN0XG4gICAgICBkb2N1bWVudC5ib2R5LnRhYkluZGV4ID0gMDtcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcblxuICAgICAgcmV0dXJuIHRoaXMucHJlcGFyZWQod2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEpwZWdDYW1lcmFGbGFzaDtcbn0oX2pwZWdfY2FtZXJhMi5kZWZhdWx0KTtcblxuSnBlZ0NhbWVyYUZsYXNoLmVuZ2luZUNoZWNrID0gZnVuY3Rpb24gKHN1Y2Nlc3MsIGZhaWx1cmUpIHtcbiAgaWYgKCF3aW5kb3cuc3dmb2JqZWN0KSB7XG4gICAgZmFpbHVyZSgnSnBlZ0NhbWVyYTogU1dGT2JqZWN0IGlzIG5vdCBsb2FkZWQuJyk7XG4gIH1cbiAgLy8gVE9ETyBkaXNhYmxlZCB1bnRpbCBJIGZpZ3VyZSBvdXQgaG93IHRvIGRldGVjdCBmbGFzaCBjcm9zcy1icm93c2VyIHdheVxuICAvLyBpZiAoIXdpbmRvdy5zd2ZvYmplY3QuaGFzRmxhc2hQbGF5ZXJWZXJzaW9uKCc5JykpIHtcbiAgLy8gICBmYWlsdXJlKCdObyBGbGFzaCBpbiB2ZXJzaW9uIDkgYXZhaWxhYmxlLicpO1xuICAvLyB9XG4gIHN1Y2Nlc3MoKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEpwZWdDYW1lcmFGbGFzaDtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7Il19
