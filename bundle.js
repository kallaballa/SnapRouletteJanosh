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
"use strict";

module.exports = {
  socketUri: "wss://liebt-dich.org:8130"
};

},{}],8:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

require("../node_modules/babelify/node_modules/babel-core/browser-polyfill.js");

var API = _interopRequire(require("janosh.js"));

var config = _interopRequire(require("./config"));

var janosh = new API(config.socketUri);
//import JpegCameraSwf from 'jpeg-camera-es6/lib/jpeg_camera.swf';
//import 'script-loader!jpeg-camera-es6/lib/swfobject.min.js';

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

},{"../node_modules/babelify/node_modules/babel-core/browser-polyfill.js":1,"../node_modules/jpeg-camera/dist/canvas-to-blob.min.js":6,"./config":7,"janosh.js":4,"jpeg-camera-es6":9}],9:[function(require,module,exports){
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
},{}]},{},[8])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWxpZnkvbm9kZV9tb2R1bGVzL2JhYmVsLWNvcmUvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9ub2RlX21vZHVsZXMvY29yZS1qcy9zaGltLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsaWZ5L25vZGVfbW9kdWxlcy9iYWJlbC1jb3JlL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1iYWJlbC9ydW50aW1lLmpzIiwibm9kZV9tb2R1bGVzL2phbm9zaC5qcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9qYW5vc2guanMvbm9kZV9tb2R1bGVzL1JlY29ubmVjdGluZ1dlYlNvY2tldC9yZWNvbm5lY3Rpbmctd2Vic29ja2V0LmpzIiwibm9kZV9tb2R1bGVzL2pwZWctY2FtZXJhL2Rpc3QvY2FudmFzLXRvLWJsb2IubWluLmpzIiwiL2hvbWUvZWxjaGFzY2hhYi9kZXZlbC9TbmFwUm91bGV0dGVKYW5vc2gvc3JjL2NvbmZpZy5qcyIsIi9ob21lL2VsY2hhc2NoYWIvZGV2ZWwvU25hcFJvdWxldHRlSmFub3NoL3NyYy9tYWluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2pwZWctY2FtZXJhLWVzNi9kaXN0L2pwZWdfY2FtZXJhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6N0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN1dBO0FBQ0E7Ozs7aUJDRGU7QUFDYixXQUFTLEVBQUUsMkJBQTJCO0NBQ3ZDOzs7Ozs7O1FDRk0sc0VBQXNFOztJQUV0RSxHQUFHLDJCQUFNLFdBQVc7O0lBQ3BCLE1BQU0sMkJBQU0sVUFBVTs7QUFFN0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O1FBR2hDLHdEQUF3RDs7SUFFeEQsVUFBVSwyQkFBTSxpQkFBaUI7O0FBRXhDLFNBQVMsbUJBQW1CLENBQUMsTUFBTSxFQUFFO0FBQ2pDLFdBQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDL0c7O0FBRUQsU0FBUyxjQUFjLENBQUMsTUFBTSxFQUFFO0FBQzVCLFFBQUksS0FBSyxDQUFDOztBQUVWLFFBQUk7QUFDQSxlQUFPLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQzdDLENBQUMsT0FBTyxNQUFNLEVBQUU7QUFDYixhQUFLLEdBQUcsTUFBTSxDQUFDO0FBQ2YsWUFBSSxLQUFLLFlBQVksUUFBUSxFQUFFO0FBQzNCLG1CQUFPLE1BQU0sQ0FBQztTQUNqQixNQUFNO0FBQ0gsa0JBQU0sS0FBSyxDQUFDO1NBQ2Y7S0FDSjtDQUNKOzs7OztBQUtELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxVQUFBLEVBQUUsRUFBSTs7QUFFcEQsUUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLFFBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDcEQsUUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFBO0FBQ1osUUFBSSxFQUFFLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFO0FBQ2xDLGNBQU0sRUFBRSxVQUFDLE1BQU0sRUFBSzs7O0FBR2xCLHFCQUFTLEdBQUcsTUFBTSxDQUFDO1NBQ3BCO0FBQ0QsZUFBTyxFQUFFLFVBQUMsS0FBSyxFQUFLLEVBQUk7QUFDeEIsZUFBTyxFQUFFLFVBQUMsR0FBRyxFQUFLLEVBQTRDO0FBQzlELGVBQU8sRUFBRSxVQUFDLEtBQUssRUFBSztBQUFFLG1CQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQUU7QUFDM0MsZUFBTyxFQUFFLEtBQUs7QUFDZCxjQUFNLEVBQUUsS0FBSztBQUNiLHFCQUFhLEVBQUUsS0FBSyxFQUNyQixDQUFDLENBQUM7O0FBRUgsUUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFcEQsY0FBVSxDQUFDLE9BQU8sR0FBRyxVQUFTLEVBQUUsRUFBRTtBQUNqQyxZQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDckMsZ0JBQVEsQ0FBQyxPQUFPLENBQUMsVUFBUyxJQUFJLEVBQUU7QUFDL0IsZ0JBQUksTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFDOUIsa0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsWUFBVzs7QUFFN0Msb0JBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0Msb0JBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekMsMEJBQVUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQ1gsMEJBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQzdDLG9CQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLG9CQUFJLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDakQsb0JBQUksR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDdEIsbUJBQUcsQ0FBQyxNQUFNLEdBQUcsWUFBWTtBQUN4Qix1QkFBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFDWiwwQkFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsR0FBRyxFQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztpQkFDckYsQ0FBQTtBQUNELG1CQUFHLENBQUMsR0FBRyxHQUFHLHlCQUF5QixHQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuRCxDQUFDLENBQUM7QUFDSCxrQkFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CLENBQUMsQ0FBQTtLQUNBLENBQUM7O0FBRUYsYUFBUyxTQUFTLENBQUMsTUFBTSxFQUFFO0FBQ3JCLFlBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsZUFBTyxPQUFPLENBQUMsVUFBVSxFQUFFO0FBQ25CLG1CQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvQzs7QUFFUixZQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLFlBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEMsV0FBRyxDQUFDLEtBQUssR0FBQyxrQkFBa0IsQ0FBQztBQUM3QixZQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLFlBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsY0FBTSxDQUFDLFNBQVMsR0FBQyxHQUFHLENBQUM7QUFDckIsY0FBTSxDQUFDLEtBQUssR0FBQyxpQkFBaUIsQ0FBQztBQUMvQixXQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCLFdBQUcsQ0FBQyxHQUFHLEdBQUMsTUFBTSxDQUFDO0FBQ2YsV0FBRyxDQUFDLEtBQUssR0FBQyw0QkFBNEIsQ0FBQztBQUN2QyxlQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzlCLENBQUM7O0FBRUYsVUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUssRUFDckMsQ0FBQyxDQUFBOztBQUVGLFVBQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFLLEVBQUs7QUFDN0IsWUFBRyxLQUFLLElBQUksT0FBTyxFQUNsQixLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxLQUVyRCxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEIsQ0FBQyxDQUFDOztBQUVILFVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUssRUFDekIsQ0FBQyxDQUFDO0NBQ0osQ0FBQyxDQUFDOzs7O0FDN0dIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gKGdsb2JhbCl7XG4oZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7KGZ1bmN0aW9uKGdsb2JhbCl7XCJ1c2Ugc3RyaWN0XCI7aWYoZ2xvYmFsLl9iYWJlbFBvbHlmaWxsKXt0aHJvdyBuZXcgRXJyb3IoXCJvbmx5IG9uZSBpbnN0YW5jZSBvZiBiYWJlbC9wb2x5ZmlsbCBpcyBhbGxvd2VkXCIpfWdsb2JhbC5fYmFiZWxQb2x5ZmlsbD10cnVlO3JlcXVpcmUoXCJjb3JlLWpzL3NoaW1cIik7cmVxdWlyZShcInJlZ2VuZXJhdG9yLWJhYmVsL3J1bnRpbWVcIil9KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCI/Z2xvYmFsOnR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIj9zZWxmOnR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiP3dpbmRvdzp7fSl9LHtcImNvcmUtanMvc2hpbVwiOjIsXCJyZWdlbmVyYXRvci1iYWJlbC9ydW50aW1lXCI6M31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpeyFmdW5jdGlvbihnbG9iYWwsZnJhbWV3b3JrLHVuZGVmaW5lZCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIE9CSkVDVD1cIk9iamVjdFwiLEZVTkNUSU9OPVwiRnVuY3Rpb25cIixBUlJBWT1cIkFycmF5XCIsU1RSSU5HPVwiU3RyaW5nXCIsTlVNQkVSPVwiTnVtYmVyXCIsUkVHRVhQPVwiUmVnRXhwXCIsREFURT1cIkRhdGVcIixNQVA9XCJNYXBcIixTRVQ9XCJTZXRcIixXRUFLTUFQPVwiV2Vha01hcFwiLFdFQUtTRVQ9XCJXZWFrU2V0XCIsU1lNQk9MPVwiU3ltYm9sXCIsUFJPTUlTRT1cIlByb21pc2VcIixNQVRIPVwiTWF0aFwiLEFSR1VNRU5UUz1cIkFyZ3VtZW50c1wiLFBST1RPVFlQRT1cInByb3RvdHlwZVwiLENPTlNUUlVDVE9SPVwiY29uc3RydWN0b3JcIixUT19TVFJJTkc9XCJ0b1N0cmluZ1wiLFRPX1NUUklOR19UQUc9VE9fU1RSSU5HK1wiVGFnXCIsVE9fTE9DQUxFPVwidG9Mb2NhbGVTdHJpbmdcIixIQVNfT1dOPVwiaGFzT3duUHJvcGVydHlcIixGT1JfRUFDSD1cImZvckVhY2hcIixJVEVSQVRPUj1cIml0ZXJhdG9yXCIsRkZfSVRFUkFUT1I9XCJAQFwiK0lURVJBVE9SLFBST0NFU1M9XCJwcm9jZXNzXCIsQ1JFQVRFX0VMRU1FTlQ9XCJjcmVhdGVFbGVtZW50XCIsRnVuY3Rpb249Z2xvYmFsW0ZVTkNUSU9OXSxPYmplY3Q9Z2xvYmFsW09CSkVDVF0sQXJyYXk9Z2xvYmFsW0FSUkFZXSxTdHJpbmc9Z2xvYmFsW1NUUklOR10sTnVtYmVyPWdsb2JhbFtOVU1CRVJdLFJlZ0V4cD1nbG9iYWxbUkVHRVhQXSxEYXRlPWdsb2JhbFtEQVRFXSxNYXA9Z2xvYmFsW01BUF0sU2V0PWdsb2JhbFtTRVRdLFdlYWtNYXA9Z2xvYmFsW1dFQUtNQVBdLFdlYWtTZXQ9Z2xvYmFsW1dFQUtTRVRdLFN5bWJvbD1nbG9iYWxbU1lNQk9MXSxNYXRoPWdsb2JhbFtNQVRIXSxUeXBlRXJyb3I9Z2xvYmFsLlR5cGVFcnJvcixSYW5nZUVycm9yPWdsb2JhbC5SYW5nZUVycm9yLHNldFRpbWVvdXQ9Z2xvYmFsLnNldFRpbWVvdXQsc2V0SW1tZWRpYXRlPWdsb2JhbC5zZXRJbW1lZGlhdGUsY2xlYXJJbW1lZGlhdGU9Z2xvYmFsLmNsZWFySW1tZWRpYXRlLHBhcnNlSW50PWdsb2JhbC5wYXJzZUludCxpc0Zpbml0ZT1nbG9iYWwuaXNGaW5pdGUscHJvY2Vzcz1nbG9iYWxbUFJPQ0VTU10sbmV4dFRpY2s9cHJvY2VzcyYmcHJvY2Vzcy5uZXh0VGljayxkb2N1bWVudD1nbG9iYWwuZG9jdW1lbnQsaHRtbD1kb2N1bWVudCYmZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LG5hdmlnYXRvcj1nbG9iYWwubmF2aWdhdG9yLGRlZmluZT1nbG9iYWwuZGVmaW5lLGNvbnNvbGU9Z2xvYmFsLmNvbnNvbGV8fHt9LEFycmF5UHJvdG89QXJyYXlbUFJPVE9UWVBFXSxPYmplY3RQcm90bz1PYmplY3RbUFJPVE9UWVBFXSxGdW5jdGlvblByb3RvPUZ1bmN0aW9uW1BST1RPVFlQRV0sSW5maW5pdHk9MS8wLERPVD1cIi5cIjtmdW5jdGlvbiBpc09iamVjdChpdCl7cmV0dXJuIGl0IT09bnVsbCYmKHR5cGVvZiBpdD09XCJvYmplY3RcInx8dHlwZW9mIGl0PT1cImZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGlzRnVuY3Rpb24oaXQpe3JldHVybiB0eXBlb2YgaXQ9PVwiZnVuY3Rpb25cIn12YXIgaXNOYXRpdmU9Y3R4KC8uLy50ZXN0LC9cXFtuYXRpdmUgY29kZVxcXVxccypcXH1cXHMqJC8sMSk7dmFyIHRvU3RyaW5nPU9iamVjdFByb3RvW1RPX1NUUklOR107ZnVuY3Rpb24gc2V0VG9TdHJpbmdUYWcoaXQsdGFnLHN0YXQpe2lmKGl0JiYhaGFzKGl0PXN0YXQ/aXQ6aXRbUFJPVE9UWVBFXSxTWU1CT0xfVEFHKSloaWRkZW4oaXQsU1lNQk9MX1RBRyx0YWcpfWZ1bmN0aW9uIGNvZihpdCl7cmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsLTEpfWZ1bmN0aW9uIGNsYXNzb2YoaXQpe3ZhciBPLFQ7cmV0dXJuIGl0PT11bmRlZmluZWQ/aXQ9PT11bmRlZmluZWQ/XCJVbmRlZmluZWRcIjpcIk51bGxcIjp0eXBlb2YoVD0oTz1PYmplY3QoaXQpKVtTWU1CT0xfVEFHXSk9PVwic3RyaW5nXCI/VDpjb2YoTyl9dmFyIGNhbGw9RnVuY3Rpb25Qcm90by5jYWxsLGFwcGx5PUZ1bmN0aW9uUHJvdG8uYXBwbHksUkVGRVJFTkNFX0dFVDtmdW5jdGlvbiBwYXJ0KCl7dmFyIGZuPWFzc2VydEZ1bmN0aW9uKHRoaXMpLGxlbmd0aD1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9QXJyYXkobGVuZ3RoKSxpPTAsXz1wYXRoLl8saG9sZGVyPWZhbHNlO3doaWxlKGxlbmd0aD5pKWlmKChhcmdzW2ldPWFyZ3VtZW50c1tpKytdKT09PV8paG9sZGVyPXRydWU7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpcyxfbGVuZ3RoPWFyZ3VtZW50cy5sZW5ndGgsaT0wLGo9MCxfYXJncztpZighaG9sZGVyJiYhX2xlbmd0aClyZXR1cm4gaW52b2tlKGZuLGFyZ3MsdGhhdCk7X2FyZ3M9YXJncy5zbGljZSgpO2lmKGhvbGRlcilmb3IoO2xlbmd0aD5pO2krKylpZihfYXJnc1tpXT09PV8pX2FyZ3NbaV09YXJndW1lbnRzW2orK107d2hpbGUoX2xlbmd0aD5qKV9hcmdzLnB1c2goYXJndW1lbnRzW2orK10pO3JldHVybiBpbnZva2UoZm4sX2FyZ3MsdGhhdCl9fWZ1bmN0aW9uIGN0eChmbix0aGF0LGxlbmd0aCl7YXNzZXJ0RnVuY3Rpb24oZm4pO2lmKH5sZW5ndGgmJnRoYXQ9PT11bmRlZmluZWQpcmV0dXJuIGZuO3N3aXRjaChsZW5ndGgpe2Nhc2UgMTpyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGZuLmNhbGwodGhhdCxhKX07Y2FzZSAyOnJldHVybiBmdW5jdGlvbihhLGIpe3JldHVybiBmbi5jYWxsKHRoYXQsYSxiKX07Y2FzZSAzOnJldHVybiBmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZuLmNhbGwodGhhdCxhLGIsYyl9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBmbi5hcHBseSh0aGF0LGFyZ3VtZW50cyl9fWZ1bmN0aW9uIGludm9rZShmbixhcmdzLHRoYXQpe3ZhciB1bj10aGF0PT09dW5kZWZpbmVkO3N3aXRjaChhcmdzLmxlbmd0aHwwKXtjYXNlIDA6cmV0dXJuIHVuP2ZuKCk6Zm4uY2FsbCh0aGF0KTtjYXNlIDE6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0pOmZuLmNhbGwodGhhdCxhcmdzWzBdKTtjYXNlIDI6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0sYXJnc1sxXSk6Zm4uY2FsbCh0aGF0LGFyZ3NbMF0sYXJnc1sxXSk7Y2FzZSAzOnJldHVybiB1bj9mbihhcmdzWzBdLGFyZ3NbMV0sYXJnc1syXSk6Zm4uY2FsbCh0aGF0LGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdKTtjYXNlIDQ6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdLGFyZ3NbM10pOmZuLmNhbGwodGhhdCxhcmdzWzBdLGFyZ3NbMV0sYXJnc1syXSxhcmdzWzNdKTtjYXNlIDU6cmV0dXJuIHVuP2ZuKGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdLGFyZ3NbM10sYXJnc1s0XSk6Zm4uY2FsbCh0aGF0LGFyZ3NbMF0sYXJnc1sxXSxhcmdzWzJdLGFyZ3NbM10sYXJnc1s0XSl9cmV0dXJuIGZuLmFwcGx5KHRoYXQsYXJncyl9dmFyIGNyZWF0ZT1PYmplY3QuY3JlYXRlLGdldFByb3RvdHlwZU9mPU9iamVjdC5nZXRQcm90b3R5cGVPZixzZXRQcm90b3R5cGVPZj1PYmplY3Quc2V0UHJvdG90eXBlT2YsZGVmaW5lUHJvcGVydHk9T2JqZWN0LmRlZmluZVByb3BlcnR5LGRlZmluZVByb3BlcnRpZXM9T2JqZWN0LmRlZmluZVByb3BlcnRpZXMsZ2V0T3duRGVzY3JpcHRvcj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLGdldEtleXM9T2JqZWN0LmtleXMsZ2V0TmFtZXM9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsZ2V0U3ltYm9scz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLGlzRnJvemVuPU9iamVjdC5pc0Zyb3plbixoYXM9Y3R4KGNhbGwsT2JqZWN0UHJvdG9bSEFTX09XTl0sMiksRVM1T2JqZWN0PU9iamVjdCxEaWN0O2Z1bmN0aW9uIHRvT2JqZWN0KGl0KXtyZXR1cm4gRVM1T2JqZWN0KGFzc2VydERlZmluZWQoaXQpKX1mdW5jdGlvbiByZXR1cm5JdChpdCl7cmV0dXJuIGl0fWZ1bmN0aW9uIHJldHVyblRoaXMoKXtyZXR1cm4gdGhpc31mdW5jdGlvbiBnZXQob2JqZWN0LGtleSl7aWYoaGFzKG9iamVjdCxrZXkpKXJldHVybiBvYmplY3Rba2V5XX1mdW5jdGlvbiBvd25LZXlzKGl0KXthc3NlcnRPYmplY3QoaXQpO3JldHVybiBnZXRTeW1ib2xzP2dldE5hbWVzKGl0KS5jb25jYXQoZ2V0U3ltYm9scyhpdCkpOmdldE5hbWVzKGl0KX12YXIgYXNzaWduPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHRhcmdldCxzb3VyY2Upe3ZhciBUPU9iamVjdChhc3NlcnREZWZpbmVkKHRhcmdldCkpLGw9YXJndW1lbnRzLmxlbmd0aCxpPTE7d2hpbGUobD5pKXt2YXIgUz1FUzVPYmplY3QoYXJndW1lbnRzW2krK10pLGtleXM9Z2V0S2V5cyhTKSxsZW5ndGg9a2V5cy5sZW5ndGgsaj0wLGtleTt3aGlsZShsZW5ndGg+ailUW2tleT1rZXlzW2orK11dPVNba2V5XX1yZXR1cm4gVH07ZnVuY3Rpb24ga2V5T2Yob2JqZWN0LGVsKXt2YXIgTz10b09iamVjdChvYmplY3QpLGtleXM9Z2V0S2V5cyhPKSxsZW5ndGg9a2V5cy5sZW5ndGgsaW5kZXg9MCxrZXk7d2hpbGUobGVuZ3RoPmluZGV4KWlmKE9ba2V5PWtleXNbaW5kZXgrK11dPT09ZWwpcmV0dXJuIGtleX1mdW5jdGlvbiBhcnJheShpdCl7cmV0dXJuIFN0cmluZyhpdCkuc3BsaXQoXCIsXCIpfXZhciBwdXNoPUFycmF5UHJvdG8ucHVzaCx1bnNoaWZ0PUFycmF5UHJvdG8udW5zaGlmdCxzbGljZT1BcnJheVByb3RvLnNsaWNlLHNwbGljZT1BcnJheVByb3RvLnNwbGljZSxpbmRleE9mPUFycmF5UHJvdG8uaW5kZXhPZixmb3JFYWNoPUFycmF5UHJvdG9bRk9SX0VBQ0hdO2Z1bmN0aW9uIGNyZWF0ZUFycmF5TWV0aG9kKHR5cGUpe3ZhciBpc01hcD10eXBlPT0xLGlzRmlsdGVyPXR5cGU9PTIsaXNTb21lPXR5cGU9PTMsaXNFdmVyeT10eXBlPT00LGlzRmluZEluZGV4PXR5cGU9PTYsbm9ob2xlcz10eXBlPT01fHxpc0ZpbmRJbmRleDtyZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2tmbil7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpLHRoYXQ9YXJndW1lbnRzWzFdLHNlbGY9RVM1T2JqZWN0KE8pLGY9Y3R4KGNhbGxiYWNrZm4sdGhhdCwzKSxsZW5ndGg9dG9MZW5ndGgoc2VsZi5sZW5ndGgpLGluZGV4PTAscmVzdWx0PWlzTWFwP0FycmF5KGxlbmd0aCk6aXNGaWx0ZXI/W106dW5kZWZpbmVkLHZhbCxyZXM7Zm9yKDtsZW5ndGg+aW5kZXg7aW5kZXgrKylpZihub2hvbGVzfHxpbmRleCBpbiBzZWxmKXt2YWw9c2VsZltpbmRleF07cmVzPWYodmFsLGluZGV4LE8pO2lmKHR5cGUpe2lmKGlzTWFwKXJlc3VsdFtpbmRleF09cmVzO2Vsc2UgaWYocmVzKXN3aXRjaCh0eXBlKXtjYXNlIDM6cmV0dXJuIHRydWU7Y2FzZSA1OnJldHVybiB2YWw7Y2FzZSA2OnJldHVybiBpbmRleDtjYXNlIDI6cmVzdWx0LnB1c2godmFsKX1lbHNlIGlmKGlzRXZlcnkpcmV0dXJuIGZhbHNlfX1yZXR1cm4gaXNGaW5kSW5kZXg/LTE6aXNTb21lfHxpc0V2ZXJ5P2lzRXZlcnk6cmVzdWx0fX1mdW5jdGlvbiBjcmVhdGVBcnJheUNvbnRhaW5zKGlzQ29udGFpbnMpe3JldHVybiBmdW5jdGlvbihlbCl7dmFyIE89dG9PYmplY3QodGhpcyksbGVuZ3RoPXRvTGVuZ3RoKE8ubGVuZ3RoKSxpbmRleD10b0luZGV4KGFyZ3VtZW50c1sxXSxsZW5ndGgpO2lmKGlzQ29udGFpbnMmJmVsIT1lbCl7Zm9yKDtsZW5ndGg+aW5kZXg7aW5kZXgrKylpZihzYW1lTmFOKE9baW5kZXhdKSlyZXR1cm4gaXNDb250YWluc3x8aW5kZXh9ZWxzZSBmb3IoO2xlbmd0aD5pbmRleDtpbmRleCsrKWlmKGlzQ29udGFpbnN8fGluZGV4IGluIE8pe2lmKE9baW5kZXhdPT09ZWwpcmV0dXJuIGlzQ29udGFpbnN8fGluZGV4fXJldHVybiFpc0NvbnRhaW5zJiYtMX19ZnVuY3Rpb24gZ2VuZXJpYyhBLEIpe3JldHVybiB0eXBlb2YgQT09XCJmdW5jdGlvblwiP0E6Qn12YXIgTUFYX1NBRkVfSU5URUdFUj05MDA3MTk5MjU0NzQwOTkxLHBvdz1NYXRoLnBvdyxhYnM9TWF0aC5hYnMsY2VpbD1NYXRoLmNlaWwsZmxvb3I9TWF0aC5mbG9vcixtYXg9TWF0aC5tYXgsbWluPU1hdGgubWluLHJhbmRvbT1NYXRoLnJhbmRvbSx0cnVuYz1NYXRoLnRydW5jfHxmdW5jdGlvbihpdCl7cmV0dXJuKGl0PjA/Zmxvb3I6Y2VpbCkoaXQpfTtmdW5jdGlvbiBzYW1lTmFOKG51bWJlcil7cmV0dXJuIG51bWJlciE9bnVtYmVyfWZ1bmN0aW9uIHRvSW50ZWdlcihpdCl7cmV0dXJuIGlzTmFOKGl0KT8wOnRydW5jKGl0KX1mdW5jdGlvbiB0b0xlbmd0aChpdCl7cmV0dXJuIGl0PjA/bWluKHRvSW50ZWdlcihpdCksTUFYX1NBRkVfSU5URUdFUik6MH1mdW5jdGlvbiB0b0luZGV4KGluZGV4LGxlbmd0aCl7dmFyIGluZGV4PXRvSW50ZWdlcihpbmRleCk7cmV0dXJuIGluZGV4PDA/bWF4KGluZGV4K2xlbmd0aCwwKTptaW4oaW5kZXgsbGVuZ3RoKX1mdW5jdGlvbiBseihudW0pe3JldHVybiBudW0+OT9udW06XCIwXCIrbnVtfWZ1bmN0aW9uIGNyZWF0ZVJlcGxhY2VyKHJlZ0V4cCxyZXBsYWNlLGlzU3RhdGljKXt2YXIgcmVwbGFjZXI9aXNPYmplY3QocmVwbGFjZSk/ZnVuY3Rpb24ocGFydCl7cmV0dXJuIHJlcGxhY2VbcGFydF19OnJlcGxhY2U7cmV0dXJuIGZ1bmN0aW9uKGl0KXtyZXR1cm4gU3RyaW5nKGlzU3RhdGljP2l0OnRoaXMpLnJlcGxhY2UocmVnRXhwLHJlcGxhY2VyKX19ZnVuY3Rpb24gY3JlYXRlUG9pbnRBdCh0b1N0cmluZyl7cmV0dXJuIGZ1bmN0aW9uKHBvcyl7dmFyIHM9U3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpLGk9dG9JbnRlZ2VyKHBvcyksbD1zLmxlbmd0aCxhLGI7aWYoaTwwfHxpPj1sKXJldHVybiB0b1N0cmluZz9cIlwiOnVuZGVmaW5lZDthPXMuY2hhckNvZGVBdChpKTtyZXR1cm4gYTw1NTI5Nnx8YT41NjMxOXx8aSsxPT09bHx8KGI9cy5jaGFyQ29kZUF0KGkrMSkpPDU2MzIwfHxiPjU3MzQzP3RvU3RyaW5nP3MuY2hhckF0KGkpOmE6dG9TdHJpbmc/cy5zbGljZShpLGkrMik6KGEtNTUyOTY8PDEwKSsoYi01NjMyMCkrNjU1MzZ9fXZhciBSRURVQ0VfRVJST1I9XCJSZWR1Y2Ugb2YgZW1wdHkgb2JqZWN0IHdpdGggbm8gaW5pdGlhbCB2YWx1ZVwiO2Z1bmN0aW9uIGFzc2VydChjb25kaXRpb24sbXNnMSxtc2cyKXtpZighY29uZGl0aW9uKXRocm93IFR5cGVFcnJvcihtc2cyP21zZzErbXNnMjptc2cxKX1mdW5jdGlvbiBhc3NlcnREZWZpbmVkKGl0KXtpZihpdD09dW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZFwiKTtyZXR1cm4gaXR9ZnVuY3Rpb24gYXNzZXJ0RnVuY3Rpb24oaXQpe2Fzc2VydChpc0Z1bmN0aW9uKGl0KSxpdCxcIiBpcyBub3QgYSBmdW5jdGlvbiFcIik7cmV0dXJuIGl0fWZ1bmN0aW9uIGFzc2VydE9iamVjdChpdCl7YXNzZXJ0KGlzT2JqZWN0KGl0KSxpdCxcIiBpcyBub3QgYW4gb2JqZWN0IVwiKTtyZXR1cm4gaXR9ZnVuY3Rpb24gYXNzZXJ0SW5zdGFuY2UoaXQsQ29uc3RydWN0b3IsbmFtZSl7YXNzZXJ0KGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IsbmFtZSxcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIil9ZnVuY3Rpb24gZGVzY3JpcHRvcihiaXRtYXAsdmFsdWUpe3JldHVybntlbnVtZXJhYmxlOiEoYml0bWFwJjEpLGNvbmZpZ3VyYWJsZTohKGJpdG1hcCYyKSx3cml0YWJsZTohKGJpdG1hcCY0KSx2YWx1ZTp2YWx1ZX19ZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCxrZXksdmFsdWUpe29iamVjdFtrZXldPXZhbHVlO3JldHVybiBvYmplY3R9ZnVuY3Rpb24gY3JlYXRlRGVmaW5lcihiaXRtYXApe3JldHVybiBERVNDP2Z1bmN0aW9uKG9iamVjdCxrZXksdmFsdWUpe3JldHVybiBkZWZpbmVQcm9wZXJ0eShvYmplY3Qsa2V5LGRlc2NyaXB0b3IoYml0bWFwLHZhbHVlKSl9OnNpbXBsZVNldH1mdW5jdGlvbiB1aWQoa2V5KXtyZXR1cm4gU1lNQk9MK1wiKFwiK2tleStcIilfXCIrKCsrc2lkK3JhbmRvbSgpKVtUT19TVFJJTkddKDM2KX1mdW5jdGlvbiBnZXRXZWxsS25vd25TeW1ib2wobmFtZSxzZXR0ZXIpe3JldHVybiBTeW1ib2wmJlN5bWJvbFtuYW1lXXx8KHNldHRlcj9TeW1ib2w6c2FmZVN5bWJvbCkoU1lNQk9MK0RPVCtuYW1lKX12YXIgREVTQz0hIWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSxcImFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIDJ9fSkuYT09Mn1jYXRjaChlKXt9fSgpLHNpZD0wLGhpZGRlbj1jcmVhdGVEZWZpbmVyKDEpLHNldD1TeW1ib2w/c2ltcGxlU2V0OmhpZGRlbixzYWZlU3ltYm9sPVN5bWJvbHx8dWlkO2Z1bmN0aW9uIGFzc2lnbkhpZGRlbih0YXJnZXQsc3JjKXtmb3IodmFyIGtleSBpbiBzcmMpaGlkZGVuKHRhcmdldCxrZXksc3JjW2tleV0pO3JldHVybiB0YXJnZXR9dmFyIFNZTUJPTF9VTlNDT1BBQkxFUz1nZXRXZWxsS25vd25TeW1ib2woXCJ1bnNjb3BhYmxlc1wiKSxBcnJheVVuc2NvcGFibGVzPUFycmF5UHJvdG9bU1lNQk9MX1VOU0NPUEFCTEVTXXx8e30sU1lNQk9MX1RBRz1nZXRXZWxsS25vd25TeW1ib2woVE9fU1RSSU5HX1RBRyksU1lNQk9MX1NQRUNJRVM9Z2V0V2VsbEtub3duU3ltYm9sKFwic3BlY2llc1wiKSxTWU1CT0xfSVRFUkFUT1I7ZnVuY3Rpb24gc2V0U3BlY2llcyhDKXtpZihERVNDJiYoZnJhbWV3b3JrfHwhaXNOYXRpdmUoQykpKWRlZmluZVByb3BlcnR5KEMsU1lNQk9MX1NQRUNJRVMse2NvbmZpZ3VyYWJsZTp0cnVlLGdldDpyZXR1cm5UaGlzfSl9dmFyIE5PREU9Y29mKHByb2Nlc3MpPT1QUk9DRVNTLGNvcmU9e30scGF0aD1mcmFtZXdvcms/Z2xvYmFsOmNvcmUsb2xkPWdsb2JhbC5jb3JlLGV4cG9ydEdsb2JhbCxGT1JDRUQ9MSxHTE9CQUw9MixTVEFUSUM9NCxQUk9UTz04LEJJTkQ9MTYsV1JBUD0zMjtmdW5jdGlvbiAkZGVmaW5lKHR5cGUsbmFtZSxzb3VyY2Upe3ZhciBrZXksb3duLG91dCxleHAsaXNHbG9iYWw9dHlwZSZHTE9CQUwsdGFyZ2V0PWlzR2xvYmFsP2dsb2JhbDp0eXBlJlNUQVRJQz9nbG9iYWxbbmFtZV06KGdsb2JhbFtuYW1lXXx8T2JqZWN0UHJvdG8pW1BST1RPVFlQRV0sZXhwb3J0cz1pc0dsb2JhbD9jb3JlOmNvcmVbbmFtZV18fChjb3JlW25hbWVdPXt9KTtpZihpc0dsb2JhbClzb3VyY2U9bmFtZTtmb3Ioa2V5IGluIHNvdXJjZSl7b3duPSEodHlwZSZGT1JDRUQpJiZ0YXJnZXQmJmtleSBpbiB0YXJnZXQmJighaXNGdW5jdGlvbih0YXJnZXRba2V5XSl8fGlzTmF0aXZlKHRhcmdldFtrZXldKSk7b3V0PShvd24/dGFyZ2V0OnNvdXJjZSlba2V5XTtpZighZnJhbWV3b3JrJiZpc0dsb2JhbCYmIWlzRnVuY3Rpb24odGFyZ2V0W2tleV0pKWV4cD1zb3VyY2Vba2V5XTtlbHNlIGlmKHR5cGUmQklORCYmb3duKWV4cD1jdHgob3V0LGdsb2JhbCk7ZWxzZSBpZih0eXBlJldSQVAmJiFmcmFtZXdvcmsmJnRhcmdldFtrZXldPT1vdXQpe2V4cD1mdW5jdGlvbihwYXJhbSl7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBvdXQ/bmV3IG91dChwYXJhbSk6b3V0KHBhcmFtKX07ZXhwW1BST1RPVFlQRV09b3V0W1BST1RPVFlQRV19ZWxzZSBleHA9dHlwZSZQUk9UTyYmaXNGdW5jdGlvbihvdXQpP2N0eChjYWxsLG91dCk6b3V0O2lmKGZyYW1ld29yayYmdGFyZ2V0JiYhb3duKXtpZihpc0dsb2JhbCl0YXJnZXRba2V5XT1vdXQ7ZWxzZSBkZWxldGUgdGFyZ2V0W2tleV0mJmhpZGRlbih0YXJnZXQsa2V5LG91dCl9aWYoZXhwb3J0c1trZXldIT1vdXQpaGlkZGVuKGV4cG9ydHMsa2V5LGV4cCl9fWlmKHR5cGVvZiBtb2R1bGUhPVwidW5kZWZpbmVkXCImJm1vZHVsZS5leHBvcnRzKW1vZHVsZS5leHBvcnRzPWNvcmU7ZWxzZSBpZihpc0Z1bmN0aW9uKGRlZmluZSkmJmRlZmluZS5hbWQpZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGNvcmV9KTtlbHNlIGV4cG9ydEdsb2JhbD10cnVlO2lmKGV4cG9ydEdsb2JhbHx8ZnJhbWV3b3JrKXtjb3JlLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oKXtnbG9iYWwuY29yZT1vbGQ7cmV0dXJuIGNvcmV9O2dsb2JhbC5jb3JlPWNvcmV9U1lNQk9MX0lURVJBVE9SPWdldFdlbGxLbm93blN5bWJvbChJVEVSQVRPUik7dmFyIElURVI9c2FmZVN5bWJvbChcIml0ZXJcIiksS0VZPTEsVkFMVUU9MixJdGVyYXRvcnM9e30sSXRlcmF0b3JQcm90b3R5cGU9e30sQlVHR1lfSVRFUkFUT1JTPVwia2V5c1wiaW4gQXJyYXlQcm90byYmIShcIm5leHRcImluW10ua2V5cygpKTtzZXRJdGVyYXRvcihJdGVyYXRvclByb3RvdHlwZSxyZXR1cm5UaGlzKTtmdW5jdGlvbiBzZXRJdGVyYXRvcihPLHZhbHVlKXtoaWRkZW4oTyxTWU1CT0xfSVRFUkFUT1IsdmFsdWUpO0ZGX0lURVJBVE9SIGluIEFycmF5UHJvdG8mJmhpZGRlbihPLEZGX0lURVJBVE9SLHZhbHVlKX1mdW5jdGlvbiBjcmVhdGVJdGVyYXRvcihDb25zdHJ1Y3RvcixOQU1FLG5leHQscHJvdG8pe0NvbnN0cnVjdG9yW1BST1RPVFlQRV09Y3JlYXRlKHByb3RvfHxJdGVyYXRvclByb3RvdHlwZSx7bmV4dDpkZXNjcmlwdG9yKDEsbmV4dCl9KTtzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvcixOQU1FK1wiIEl0ZXJhdG9yXCIpfWZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yKENvbnN0cnVjdG9yLE5BTUUsdmFsdWUsREVGQVVMVCl7dmFyIHByb3RvPUNvbnN0cnVjdG9yW1BST1RPVFlQRV0saXRlcj1nZXQocHJvdG8sU1lNQk9MX0lURVJBVE9SKXx8Z2V0KHByb3RvLEZGX0lURVJBVE9SKXx8REVGQVVMVCYmZ2V0KHByb3RvLERFRkFVTFQpfHx2YWx1ZTtpZihmcmFtZXdvcmspe3NldEl0ZXJhdG9yKHByb3RvLGl0ZXIpO2lmKGl0ZXIhPT12YWx1ZSl7dmFyIGl0ZXJQcm90bz1nZXRQcm90b3R5cGVPZihpdGVyLmNhbGwobmV3IENvbnN0cnVjdG9yKSk7c2V0VG9TdHJpbmdUYWcoaXRlclByb3RvLE5BTUUrXCIgSXRlcmF0b3JcIix0cnVlKTtoYXMocHJvdG8sRkZfSVRFUkFUT1IpJiZzZXRJdGVyYXRvcihpdGVyUHJvdG8scmV0dXJuVGhpcyl9fUl0ZXJhdG9yc1tOQU1FXT1pdGVyO0l0ZXJhdG9yc1tOQU1FK1wiIEl0ZXJhdG9yXCJdPXJldHVyblRoaXM7cmV0dXJuIGl0ZXJ9ZnVuY3Rpb24gZGVmaW5lU3RkSXRlcmF0b3JzKEJhc2UsTkFNRSxDb25zdHJ1Y3RvcixuZXh0LERFRkFVTFQsSVNfU0VUKXtmdW5jdGlvbiBjcmVhdGVJdGVyKGtpbmQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcyxraW5kKX19Y3JlYXRlSXRlcmF0b3IoQ29uc3RydWN0b3IsTkFNRSxuZXh0KTt2YXIgZW50cmllcz1jcmVhdGVJdGVyKEtFWStWQUxVRSksdmFsdWVzPWNyZWF0ZUl0ZXIoVkFMVUUpO2lmKERFRkFVTFQ9PVZBTFVFKXZhbHVlcz1kZWZpbmVJdGVyYXRvcihCYXNlLE5BTUUsdmFsdWVzLFwidmFsdWVzXCIpO2Vsc2UgZW50cmllcz1kZWZpbmVJdGVyYXRvcihCYXNlLE5BTUUsZW50cmllcyxcImVudHJpZXNcIik7aWYoREVGQVVMVCl7JGRlZmluZShQUk9UTytGT1JDRUQqQlVHR1lfSVRFUkFUT1JTLE5BTUUse2VudHJpZXM6ZW50cmllcyxrZXlzOklTX1NFVD92YWx1ZXM6Y3JlYXRlSXRlcihLRVkpLHZhbHVlczp2YWx1ZXN9KX19ZnVuY3Rpb24gaXRlclJlc3VsdChkb25lLHZhbHVlKXtyZXR1cm57dmFsdWU6dmFsdWUsZG9uZTohIWRvbmV9fWZ1bmN0aW9uIGlzSXRlcmFibGUoaXQpe3ZhciBPPU9iamVjdChpdCksU3ltYm9sPWdsb2JhbFtTWU1CT0xdLGhhc0V4dD0oU3ltYm9sJiZTeW1ib2xbSVRFUkFUT1JdfHxGRl9JVEVSQVRPUilpbiBPO3JldHVybiBoYXNFeHR8fFNZTUJPTF9JVEVSQVRPUiBpbiBPfHxoYXMoSXRlcmF0b3JzLGNsYXNzb2YoTykpfWZ1bmN0aW9uIGdldEl0ZXJhdG9yKGl0KXt2YXIgU3ltYm9sPWdsb2JhbFtTWU1CT0xdLGV4dD1pdFtTeW1ib2wmJlN5bWJvbFtJVEVSQVRPUl18fEZGX0lURVJBVE9SXSxnZXRJdGVyPWV4dHx8aXRbU1lNQk9MX0lURVJBVE9SXXx8SXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtyZXR1cm4gYXNzZXJ0T2JqZWN0KGdldEl0ZXIuY2FsbChpdCkpfWZ1bmN0aW9uIHN0ZXBDYWxsKGZuLHZhbHVlLGVudHJpZXMpe3JldHVybiBlbnRyaWVzP2ludm9rZShmbix2YWx1ZSk6Zm4odmFsdWUpfWZ1bmN0aW9uIGNoZWNrRGFuZ2VySXRlckNsb3NpbmcoZm4pe3ZhciBkYW5nZXI9dHJ1ZTt2YXIgTz17bmV4dDpmdW5jdGlvbigpe3Rocm93IDF9LFwicmV0dXJuXCI6ZnVuY3Rpb24oKXtkYW5nZXI9ZmFsc2V9fTtPW1NZTUJPTF9JVEVSQVRPUl09cmV0dXJuVGhpczt0cnl7Zm4oTyl9Y2F0Y2goZSl7fXJldHVybiBkYW5nZXJ9ZnVuY3Rpb24gY2xvc2VJdGVyYXRvcihpdGVyYXRvcil7dmFyIHJldD1pdGVyYXRvcltcInJldHVyblwiXTtpZihyZXQhPT11bmRlZmluZWQpcmV0LmNhbGwoaXRlcmF0b3IpfWZ1bmN0aW9uIHNhZmVJdGVyQ2xvc2UoZXhlYyxpdGVyYXRvcil7dHJ5e2V4ZWMoaXRlcmF0b3IpfWNhdGNoKGUpe2Nsb3NlSXRlcmF0b3IoaXRlcmF0b3IpO3Rocm93IGV9fWZ1bmN0aW9uIGZvck9mKGl0ZXJhYmxlLGVudHJpZXMsZm4sdGhhdCl7c2FmZUl0ZXJDbG9zZShmdW5jdGlvbihpdGVyYXRvcil7dmFyIGY9Y3R4KGZuLHRoYXQsZW50cmllcz8yOjEpLHN0ZXA7d2hpbGUoIShzdGVwPWl0ZXJhdG9yLm5leHQoKSkuZG9uZSlpZihzdGVwQ2FsbChmLHN0ZXAudmFsdWUsZW50cmllcyk9PT1mYWxzZSl7cmV0dXJuIGNsb3NlSXRlcmF0b3IoaXRlcmF0b3IpfX0sZ2V0SXRlcmF0b3IoaXRlcmFibGUpKX0hZnVuY3Rpb24oVEFHLFN5bWJvbFJlZ2lzdHJ5LEFsbFN5bWJvbHMsc2V0dGVyKXtpZighaXNOYXRpdmUoU3ltYm9sKSl7U3ltYm9sPWZ1bmN0aW9uKGRlc2NyaXB0aW9uKXthc3NlcnQoISh0aGlzIGluc3RhbmNlb2YgU3ltYm9sKSxTWU1CT0wrXCIgaXMgbm90IGEgXCIrQ09OU1RSVUNUT1IpO3ZhciB0YWc9dWlkKGRlc2NyaXB0aW9uKSxzeW09c2V0KGNyZWF0ZShTeW1ib2xbUFJPVE9UWVBFXSksVEFHLHRhZyk7QWxsU3ltYm9sc1t0YWddPXN5bTtERVNDJiZzZXR0ZXImJmRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvLHRhZyx7Y29uZmlndXJhYmxlOnRydWUsc2V0OmZ1bmN0aW9uKHZhbHVlKXtoaWRkZW4odGhpcyx0YWcsdmFsdWUpfX0pO3JldHVybiBzeW19O2hpZGRlbihTeW1ib2xbUFJPVE9UWVBFXSxUT19TVFJJTkcsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc1tUQUddfSl9JGRlZmluZShHTE9CQUwrV1JBUCx7U3ltYm9sOlN5bWJvbH0pO3ZhciBzeW1ib2xTdGF0aWNzPXtcImZvclwiOmZ1bmN0aW9uKGtleSl7cmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSxrZXkrPVwiXCIpP1N5bWJvbFJlZ2lzdHJ5W2tleV06U3ltYm9sUmVnaXN0cnlba2V5XT1TeW1ib2woa2V5KX0saXRlcmF0b3I6U1lNQk9MX0lURVJBVE9SfHxnZXRXZWxsS25vd25TeW1ib2woSVRFUkFUT1IpLGtleUZvcjpwYXJ0LmNhbGwoa2V5T2YsU3ltYm9sUmVnaXN0cnkpLHNwZWNpZXM6U1lNQk9MX1NQRUNJRVMsdG9TdHJpbmdUYWc6U1lNQk9MX1RBRz1nZXRXZWxsS25vd25TeW1ib2woVE9fU1RSSU5HX1RBRyx0cnVlKSx1bnNjb3BhYmxlczpTWU1CT0xfVU5TQ09QQUJMRVMscHVyZTpzYWZlU3ltYm9sLHNldDpzZXQsdXNlU2V0dGVyOmZ1bmN0aW9uKCl7c2V0dGVyPXRydWV9LHVzZVNpbXBsZTpmdW5jdGlvbigpe3NldHRlcj1mYWxzZX19O2ZvckVhY2guY2FsbChhcnJheShcImhhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGxpdCx0b1ByaW1pdGl2ZVwiKSxmdW5jdGlvbihpdCl7c3ltYm9sU3RhdGljc1tpdF09Z2V0V2VsbEtub3duU3ltYm9sKGl0KX0pOyRkZWZpbmUoU1RBVElDLFNZTUJPTCxzeW1ib2xTdGF0aWNzKTtzZXRUb1N0cmluZ1RhZyhTeW1ib2wsU1lNQk9MKTskZGVmaW5lKFNUQVRJQytGT1JDRUQqIWlzTmF0aXZlKFN5bWJvbCksT0JKRUNULHtnZXRPd25Qcm9wZXJ0eU5hbWVzOmZ1bmN0aW9uKGl0KXt2YXIgbmFtZXM9Z2V0TmFtZXModG9PYmplY3QoaXQpKSxyZXN1bHQ9W10sa2V5LGk9MDt3aGlsZShuYW1lcy5sZW5ndGg+aSloYXMoQWxsU3ltYm9scyxrZXk9bmFtZXNbaSsrXSl8fHJlc3VsdC5wdXNoKGtleSk7cmV0dXJuIHJlc3VsdH0sZ2V0T3duUHJvcGVydHlTeW1ib2xzOmZ1bmN0aW9uKGl0KXt2YXIgbmFtZXM9Z2V0TmFtZXModG9PYmplY3QoaXQpKSxyZXN1bHQ9W10sa2V5LGk9MDt3aGlsZShuYW1lcy5sZW5ndGg+aSloYXMoQWxsU3ltYm9scyxrZXk9bmFtZXNbaSsrXSkmJnJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7cmV0dXJuIHJlc3VsdH19KTtzZXRUb1N0cmluZ1RhZyhNYXRoLE1BVEgsdHJ1ZSk7c2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sXCJKU09OXCIsdHJ1ZSl9KHNhZmVTeW1ib2woXCJ0YWdcIikse30se30sdHJ1ZSk7IWZ1bmN0aW9uKCl7dmFyIG9iamVjdFN0YXRpYz17YXNzaWduOmFzc2lnbixpczpmdW5jdGlvbih4LHkpe3JldHVybiB4PT09eT94IT09MHx8MS94PT09MS95OnghPXgmJnkhPXl9fTtcIl9fcHJvdG9fX1wiaW4gT2JqZWN0UHJvdG8mJmZ1bmN0aW9uKGJ1Z2d5LHNldCl7dHJ5e3NldD1jdHgoY2FsbCxnZXRPd25EZXNjcmlwdG9yKE9iamVjdFByb3RvLFwiX19wcm90b19fXCIpLnNldCwyKTtzZXQoe30sQXJyYXlQcm90byl9Y2F0Y2goZSl7YnVnZ3k9dHJ1ZX1vYmplY3RTdGF0aWMuc2V0UHJvdG90eXBlT2Y9c2V0UHJvdG90eXBlT2Y9c2V0UHJvdG90eXBlT2Z8fGZ1bmN0aW9uKE8scHJvdG8pe2Fzc2VydE9iamVjdChPKTthc3NlcnQocHJvdG89PT1udWxsfHxpc09iamVjdChwcm90bykscHJvdG8sXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO2lmKGJ1Z2d5KU8uX19wcm90b19fPXByb3RvO2Vsc2Ugc2V0KE8scHJvdG8pO3JldHVybiBPfX0oKTskZGVmaW5lKFNUQVRJQyxPQkpFQ1Qsb2JqZWN0U3RhdGljKX0oKTshZnVuY3Rpb24odG1wKXt0bXBbU1lNQk9MX1RBR109RE9UO2lmKGNvZih0bXApIT1ET1QpaGlkZGVuKE9iamVjdFByb3RvLFRPX1NUUklORyxmdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBcIitjbGFzc29mKHRoaXMpK1wiXVwifSl9KHt9KTshZnVuY3Rpb24oKXtmdW5jdGlvbiB3cmFwT2JqZWN0TWV0aG9kKGtleSxNT0RFKXt2YXIgZm49T2JqZWN0W2tleV0sZXhwPWNvcmVbT0JKRUNUXVtrZXldLGY9MCxvPXt9O2lmKCFleHB8fGlzTmF0aXZlKGV4cCkpe29ba2V5XT1NT0RFPT0xP2Z1bmN0aW9uKGl0KXtyZXR1cm4gaXNPYmplY3QoaXQpP2ZuKGl0KTppdH06TU9ERT09Mj9mdW5jdGlvbihpdCl7cmV0dXJuIGlzT2JqZWN0KGl0KT9mbihpdCk6dHJ1ZX06TU9ERT09Mz9mdW5jdGlvbihpdCl7cmV0dXJuIGlzT2JqZWN0KGl0KT9mbihpdCk6ZmFsc2V9Ok1PREU9PTQ/ZnVuY3Rpb24oaXQsa2V5KXtyZXR1cm4gZm4odG9PYmplY3QoaXQpLGtleSl9OmZ1bmN0aW9uKGl0KXtyZXR1cm4gZm4odG9PYmplY3QoaXQpKX07dHJ5e2ZuKERPVCl9Y2F0Y2goZSl7Zj0xfSRkZWZpbmUoU1RBVElDK0ZPUkNFRCpmLE9CSkVDVCxvKX19d3JhcE9iamVjdE1ldGhvZChcImZyZWV6ZVwiLDEpO3dyYXBPYmplY3RNZXRob2QoXCJzZWFsXCIsMSk7d3JhcE9iamVjdE1ldGhvZChcInByZXZlbnRFeHRlbnNpb25zXCIsMSk7d3JhcE9iamVjdE1ldGhvZChcImlzRnJvemVuXCIsMik7d3JhcE9iamVjdE1ldGhvZChcImlzU2VhbGVkXCIsMik7d3JhcE9iamVjdE1ldGhvZChcImlzRXh0ZW5zaWJsZVwiLDMpO3dyYXBPYmplY3RNZXRob2QoXCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JcIiw0KTt3cmFwT2JqZWN0TWV0aG9kKFwiZ2V0UHJvdG90eXBlT2ZcIik7d3JhcE9iamVjdE1ldGhvZChcImtleXNcIik7d3JhcE9iamVjdE1ldGhvZChcImdldE93blByb3BlcnR5TmFtZXNcIil9KCk7IWZ1bmN0aW9uKE5BTUUpe05BTUUgaW4gRnVuY3Rpb25Qcm90b3x8REVTQyYmZGVmaW5lUHJvcGVydHkoRnVuY3Rpb25Qcm90byxOQU1FLHtjb25maWd1cmFibGU6dHJ1ZSxnZXQ6ZnVuY3Rpb24oKXt2YXIgbWF0Y2g9U3RyaW5nKHRoaXMpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLyksbmFtZT1tYXRjaD9tYXRjaFsxXTpcIlwiO2hhcyh0aGlzLE5BTUUpfHxkZWZpbmVQcm9wZXJ0eSh0aGlzLE5BTUUsZGVzY3JpcHRvcig1LG5hbWUpKTtyZXR1cm4gbmFtZX0sc2V0OmZ1bmN0aW9uKHZhbHVlKXtoYXModGhpcyxOQU1FKXx8ZGVmaW5lUHJvcGVydHkodGhpcyxOQU1FLGRlc2NyaXB0b3IoMCx2YWx1ZSkpfX0pfShcIm5hbWVcIik7TnVtYmVyKFwiMG8xXCIpJiZOdW1iZXIoXCIwYjFcIil8fGZ1bmN0aW9uKF9OdW1iZXIsTnVtYmVyUHJvdG8pe2Z1bmN0aW9uIHRvTnVtYmVyKGl0KXtpZihpc09iamVjdChpdCkpaXQ9dG9QcmltaXRpdmUoaXQpO2lmKHR5cGVvZiBpdD09XCJzdHJpbmdcIiYmaXQubGVuZ3RoPjImJml0LmNoYXJDb2RlQXQoMCk9PTQ4KXt2YXIgYmluYXJ5PWZhbHNlO3N3aXRjaChpdC5jaGFyQ29kZUF0KDEpKXtjYXNlIDY2OmNhc2UgOTg6YmluYXJ5PXRydWU7Y2FzZSA3OTpjYXNlIDExMTpyZXR1cm4gcGFyc2VJbnQoaXQuc2xpY2UoMiksYmluYXJ5PzI6OCl9fXJldHVybitpdH1mdW5jdGlvbiB0b1ByaW1pdGl2ZShpdCl7dmFyIGZuLHZhbDtpZihpc0Z1bmN0aW9uKGZuPWl0LnZhbHVlT2YpJiYhaXNPYmplY3QodmFsPWZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO2lmKGlzRnVuY3Rpb24oZm49aXRbVE9fU1RSSU5HXSkmJiFpc09iamVjdCh2YWw9Zm4uY2FsbChpdCkpKXJldHVybiB2YWw7dGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gbnVtYmVyXCIpfU51bWJlcj1mdW5jdGlvbiBOdW1iZXIoaXQpe3JldHVybiB0aGlzIGluc3RhbmNlb2YgTnVtYmVyP25ldyBfTnVtYmVyKHRvTnVtYmVyKGl0KSk6dG9OdW1iZXIoaXQpfTtmb3JFYWNoLmNhbGwoREVTQz9nZXROYW1lcyhfTnVtYmVyKTphcnJheShcIk1BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZXCIpLGZ1bmN0aW9uKGtleSl7a2V5IGluIE51bWJlcnx8ZGVmaW5lUHJvcGVydHkoTnVtYmVyLGtleSxnZXRPd25EZXNjcmlwdG9yKF9OdW1iZXIsa2V5KSl9KTtOdW1iZXJbUFJPVE9UWVBFXT1OdW1iZXJQcm90bztOdW1iZXJQcm90b1tDT05TVFJVQ1RPUl09TnVtYmVyO2hpZGRlbihnbG9iYWwsTlVNQkVSLE51bWJlcil9KE51bWJlcixOdW1iZXJbUFJPVE9UWVBFXSk7IWZ1bmN0aW9uKGlzSW50ZWdlcil7JGRlZmluZShTVEFUSUMsTlVNQkVSLHtFUFNJTE9OOnBvdygyLC01MiksaXNGaW5pdGU6ZnVuY3Rpb24oaXQpe3JldHVybiB0eXBlb2YgaXQ9PVwibnVtYmVyXCImJmlzRmluaXRlKGl0KX0saXNJbnRlZ2VyOmlzSW50ZWdlcixpc05hTjpzYW1lTmFOLGlzU2FmZUludGVnZXI6ZnVuY3Rpb24obnVtYmVyKXtyZXR1cm4gaXNJbnRlZ2VyKG51bWJlcikmJmFicyhudW1iZXIpPD1NQVhfU0FGRV9JTlRFR0VSfSxNQVhfU0FGRV9JTlRFR0VSOk1BWF9TQUZFX0lOVEVHRVIsTUlOX1NBRkVfSU5URUdFUjotTUFYX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0OnBhcnNlRmxvYXQscGFyc2VJbnQ6cGFyc2VJbnR9KX0oTnVtYmVyLmlzSW50ZWdlcnx8ZnVuY3Rpb24oaXQpe3JldHVybiFpc09iamVjdChpdCkmJmlzRmluaXRlKGl0KSYmZmxvb3IoaXQpPT09aXR9KTshZnVuY3Rpb24oKXt2YXIgRT1NYXRoLkUsZXhwPU1hdGguZXhwLGxvZz1NYXRoLmxvZyxzcXJ0PU1hdGguc3FydCxzaWduPU1hdGguc2lnbnx8ZnVuY3Rpb24oeCl7cmV0dXJuKHg9K3gpPT0wfHx4IT14P3g6eDwwPy0xOjF9O2Z1bmN0aW9uIGFzaW5oKHgpe3JldHVybiFpc0Zpbml0ZSh4PSt4KXx8eD09MD94Ong8MD8tYXNpbmgoLXgpOmxvZyh4K3NxcnQoeCp4KzEpKX1mdW5jdGlvbiBleHBtMSh4KXtyZXR1cm4oeD0reCk9PTA/eDp4Pi0xZS02JiZ4PDFlLTY/eCt4KngvMjpleHAoeCktMX0kZGVmaW5lKFNUQVRJQyxNQVRILHthY29zaDpmdW5jdGlvbih4KXtyZXR1cm4oeD0reCk8MT9OYU46aXNGaW5pdGUoeCk/bG9nKHgvRStzcXJ0KHgrMSkqc3FydCh4LTEpL0UpKzE6eH0sYXNpbmg6YXNpbmgsYXRhbmg6ZnVuY3Rpb24oeCl7cmV0dXJuKHg9K3gpPT0wP3g6bG9nKCgxK3gpLygxLXgpKS8yfSxjYnJ0OmZ1bmN0aW9uKHgpe3JldHVybiBzaWduKHg9K3gpKnBvdyhhYnMoeCksMS8zKX0sY2x6MzI6ZnVuY3Rpb24oeCl7cmV0dXJuKHg+Pj49MCk/MzIteFtUT19TVFJJTkddKDIpLmxlbmd0aDozMn0sY29zaDpmdW5jdGlvbih4KXtyZXR1cm4oZXhwKHg9K3gpK2V4cCgteCkpLzJ9LGV4cG0xOmV4cG0xLGZyb3VuZDpmdW5jdGlvbih4KXtyZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbeF0pWzBdfSxoeXBvdDpmdW5jdGlvbih2YWx1ZTEsdmFsdWUyKXt2YXIgc3VtPTAsbGVuMT1hcmd1bWVudHMubGVuZ3RoLGxlbjI9bGVuMSxhcmdzPUFycmF5KGxlbjEpLGxhcmc9LUluZmluaXR5LGFyZzt3aGlsZShsZW4xLS0pe2FyZz1hcmdzW2xlbjFdPSthcmd1bWVudHNbbGVuMV07aWYoYXJnPT1JbmZpbml0eXx8YXJnPT0tSW5maW5pdHkpcmV0dXJuIEluZmluaXR5O2lmKGFyZz5sYXJnKWxhcmc9YXJnfWxhcmc9YXJnfHwxO3doaWxlKGxlbjItLSlzdW0rPXBvdyhhcmdzW2xlbjJdL2xhcmcsMik7cmV0dXJuIGxhcmcqc3FydChzdW0pfSxpbXVsOmZ1bmN0aW9uKHgseSl7dmFyIFVJbnQxNj02NTUzNSx4bj0reCx5bj0reSx4bD1VSW50MTYmeG4seWw9VUludDE2JnluO3JldHVybiAwfHhsKnlsKygoVUludDE2JnhuPj4+MTYpKnlsK3hsKihVSW50MTYmeW4+Pj4xNik8PDE2Pj4+MCl9LGxvZzFwOmZ1bmN0aW9uKHgpe3JldHVybih4PSt4KT4tMWUtOCYmeDwxZS04P3gteCp4LzI6bG9nKDEreCl9LGxvZzEwOmZ1bmN0aW9uKHgpe3JldHVybiBsb2coeCkvTWF0aC5MTjEwfSxsb2cyOmZ1bmN0aW9uKHgpe3JldHVybiBsb2coeCkvTWF0aC5MTjJ9LHNpZ246c2lnbixzaW5oOmZ1bmN0aW9uKHgpe3JldHVybiBhYnMoeD0reCk8MT8oZXhwbTEoeCktZXhwbTEoLXgpKS8yOihleHAoeC0xKS1leHAoLXgtMSkpKihFLzIpfSx0YW5oOmZ1bmN0aW9uKHgpe3ZhciBhPWV4cG0xKHg9K3gpLGI9ZXhwbTEoLXgpO3JldHVybiBhPT1JbmZpbml0eT8xOmI9PUluZmluaXR5Py0xOihhLWIpLyhleHAoeCkrZXhwKC14KSl9LHRydW5jOnRydW5jfSl9KCk7IWZ1bmN0aW9uKGZyb21DaGFyQ29kZSl7ZnVuY3Rpb24gYXNzZXJ0Tm90UmVnRXhwKGl0KXtpZihjb2YoaXQpPT1SRUdFWFApdGhyb3cgVHlwZUVycm9yKCl9JGRlZmluZShTVEFUSUMsU1RSSU5HLHtmcm9tQ29kZVBvaW50OmZ1bmN0aW9uKHgpe3ZhciByZXM9W10sbGVuPWFyZ3VtZW50cy5sZW5ndGgsaT0wLGNvZGU7d2hpbGUobGVuPmkpe2NvZGU9K2FyZ3VtZW50c1tpKytdO2lmKHRvSW5kZXgoY29kZSwxMTE0MTExKSE9PWNvZGUpdGhyb3cgUmFuZ2VFcnJvcihjb2RlK1wiIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnRcIik7cmVzLnB1c2goY29kZTw2NTUzNj9mcm9tQ2hhckNvZGUoY29kZSk6ZnJvbUNoYXJDb2RlKCgoY29kZS09NjU1MzYpPj4xMCkrNTUyOTYsY29kZSUxMDI0KzU2MzIwKSl9cmV0dXJuIHJlcy5qb2luKFwiXCIpfSxyYXc6ZnVuY3Rpb24oY2FsbFNpdGUpe3ZhciByYXc9dG9PYmplY3QoY2FsbFNpdGUucmF3KSxsZW49dG9MZW5ndGgocmF3Lmxlbmd0aCksc2xuPWFyZ3VtZW50cy5sZW5ndGgscmVzPVtdLGk9MDt3aGlsZShsZW4+aSl7cmVzLnB1c2goU3RyaW5nKHJhd1tpKytdKSk7aWYoaTxzbG4pcmVzLnB1c2goU3RyaW5nKGFyZ3VtZW50c1tpXSkpfXJldHVybiByZXMuam9pbihcIlwiKX19KTskZGVmaW5lKFBST1RPLFNUUklORyx7Y29kZVBvaW50QXQ6Y3JlYXRlUG9pbnRBdChmYWxzZSksZW5kc1dpdGg6ZnVuY3Rpb24oc2VhcmNoU3RyaW5nKXthc3NlcnROb3RSZWdFeHAoc2VhcmNoU3RyaW5nKTt2YXIgdGhhdD1TdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSksZW5kUG9zaXRpb249YXJndW1lbnRzWzFdLGxlbj10b0xlbmd0aCh0aGF0Lmxlbmd0aCksZW5kPWVuZFBvc2l0aW9uPT09dW5kZWZpbmVkP2xlbjptaW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLGxlbik7c2VhcmNoU3RyaW5nKz1cIlwiO3JldHVybiB0aGF0LnNsaWNlKGVuZC1zZWFyY2hTdHJpbmcubGVuZ3RoLGVuZCk9PT1zZWFyY2hTdHJpbmd9LGluY2x1ZGVzOmZ1bmN0aW9uKHNlYXJjaFN0cmluZyl7YXNzZXJ0Tm90UmVnRXhwKHNlYXJjaFN0cmluZyk7cmV0dXJuISF+U3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpLmluZGV4T2Yoc2VhcmNoU3RyaW5nLGFyZ3VtZW50c1sxXSl9LHJlcGVhdDpmdW5jdGlvbihjb3VudCl7dmFyIHN0cj1TdHJpbmcoYXNzZXJ0RGVmaW5lZCh0aGlzKSkscmVzPVwiXCIsbj10b0ludGVnZXIoY291bnQpO2lmKDA+bnx8bj09SW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO2Zvcig7bj4wOyhuPj4+PTEpJiYoc3RyKz1zdHIpKWlmKG4mMSlyZXMrPXN0cjtyZXR1cm4gcmVzfSxzdGFydHNXaXRoOmZ1bmN0aW9uKHNlYXJjaFN0cmluZyl7YXNzZXJ0Tm90UmVnRXhwKHNlYXJjaFN0cmluZyk7dmFyIHRoYXQ9U3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpLGluZGV4PXRvTGVuZ3RoKG1pbihhcmd1bWVudHNbMV0sdGhhdC5sZW5ndGgpKTtzZWFyY2hTdHJpbmcrPVwiXCI7cmV0dXJuIHRoYXQuc2xpY2UoaW5kZXgsaW5kZXgrc2VhcmNoU3RyaW5nLmxlbmd0aCk9PT1zZWFyY2hTdHJpbmd9fSl9KFN0cmluZy5mcm9tQ2hhckNvZGUpOyFmdW5jdGlvbigpeyRkZWZpbmUoU1RBVElDK0ZPUkNFRCpjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKEFycmF5LmZyb20pLEFSUkFZLHtmcm9tOmZ1bmN0aW9uKGFycmF5TGlrZSl7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQoYXJyYXlMaWtlKSksbWFwZm49YXJndW1lbnRzWzFdLG1hcHBpbmc9bWFwZm4hPT11bmRlZmluZWQsZj1tYXBwaW5nP2N0eChtYXBmbixhcmd1bWVudHNbMl0sMik6dW5kZWZpbmVkLGluZGV4PTAsbGVuZ3RoLHJlc3VsdCxzdGVwO2lmKGlzSXRlcmFibGUoTykpe3Jlc3VsdD1uZXcoZ2VuZXJpYyh0aGlzLEFycmF5KSk7c2FmZUl0ZXJDbG9zZShmdW5jdGlvbihpdGVyYXRvcil7Zm9yKDshKHN0ZXA9aXRlcmF0b3IubmV4dCgpKS5kb25lO2luZGV4Kyspe3Jlc3VsdFtpbmRleF09bWFwcGluZz9mKHN0ZXAudmFsdWUsaW5kZXgpOnN0ZXAudmFsdWV9fSxnZXRJdGVyYXRvcihPKSl9ZWxzZXtyZXN1bHQ9bmV3KGdlbmVyaWModGhpcyxBcnJheSkpKGxlbmd0aD10b0xlbmd0aChPLmxlbmd0aCkpO2Zvcig7bGVuZ3RoPmluZGV4O2luZGV4Kyspe3Jlc3VsdFtpbmRleF09bWFwcGluZz9mKE9baW5kZXhdLGluZGV4KTpPW2luZGV4XX19cmVzdWx0Lmxlbmd0aD1pbmRleDtyZXR1cm4gcmVzdWx0fX0pOyRkZWZpbmUoU1RBVElDLEFSUkFZLHtvZjpmdW5jdGlvbigpe3ZhciBpbmRleD0wLGxlbmd0aD1hcmd1bWVudHMubGVuZ3RoLHJlc3VsdD1uZXcoZ2VuZXJpYyh0aGlzLEFycmF5KSkobGVuZ3RoKTt3aGlsZShsZW5ndGg+aW5kZXgpcmVzdWx0W2luZGV4XT1hcmd1bWVudHNbaW5kZXgrK107cmVzdWx0Lmxlbmd0aD1sZW5ndGg7cmV0dXJuIHJlc3VsdH19KTtzZXRTcGVjaWVzKEFycmF5KX0oKTshZnVuY3Rpb24oKXskZGVmaW5lKFBST1RPLEFSUkFZLHtjb3B5V2l0aGluOmZ1bmN0aW9uKHRhcmdldCxzdGFydCl7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpLGxlbj10b0xlbmd0aChPLmxlbmd0aCksdG89dG9JbmRleCh0YXJnZXQsbGVuKSxmcm9tPXRvSW5kZXgoc3RhcnQsbGVuKSxlbmQ9YXJndW1lbnRzWzJdLGZpbj1lbmQ9PT11bmRlZmluZWQ/bGVuOnRvSW5kZXgoZW5kLGxlbiksY291bnQ9bWluKGZpbi1mcm9tLGxlbi10byksaW5jPTE7aWYoZnJvbTx0byYmdG88ZnJvbStjb3VudCl7aW5jPS0xO2Zyb209ZnJvbStjb3VudC0xO3RvPXRvK2NvdW50LTF9d2hpbGUoY291bnQtLT4wKXtpZihmcm9tIGluIE8pT1t0b109T1tmcm9tXTtlbHNlIGRlbGV0ZSBPW3RvXTt0bys9aW5jO2Zyb20rPWluY31yZXR1cm4gT30sZmlsbDpmdW5jdGlvbih2YWx1ZSl7dmFyIE89T2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpLGxlbmd0aD10b0xlbmd0aChPLmxlbmd0aCksaW5kZXg9dG9JbmRleChhcmd1bWVudHNbMV0sbGVuZ3RoKSxlbmQ9YXJndW1lbnRzWzJdLGVuZFBvcz1lbmQ9PT11bmRlZmluZWQ/bGVuZ3RoOnRvSW5kZXgoZW5kLGxlbmd0aCk7d2hpbGUoZW5kUG9zPmluZGV4KU9baW5kZXgrK109dmFsdWU7cmV0dXJuIE99LGZpbmQ6Y3JlYXRlQXJyYXlNZXRob2QoNSksZmluZEluZGV4OmNyZWF0ZUFycmF5TWV0aG9kKDYpfSk7aWYoZnJhbWV3b3JrKXtmb3JFYWNoLmNhbGwoYXJyYXkoXCJmaW5kLGZpbmRJbmRleCxmaWxsLGNvcHlXaXRoaW4sZW50cmllcyxrZXlzLHZhbHVlc1wiKSxmdW5jdGlvbihpdCl7QXJyYXlVbnNjb3BhYmxlc1tpdF09dHJ1ZX0pO1NZTUJPTF9VTlNDT1BBQkxFUyBpbiBBcnJheVByb3RvfHxoaWRkZW4oQXJyYXlQcm90byxTWU1CT0xfVU5TQ09QQUJMRVMsQXJyYXlVbnNjb3BhYmxlcyl9fSgpOyFmdW5jdGlvbihhdCl7ZGVmaW5lU3RkSXRlcmF0b3JzKEFycmF5LEFSUkFZLGZ1bmN0aW9uKGl0ZXJhdGVkLGtpbmQpe3NldCh0aGlzLElURVIse286dG9PYmplY3QoaXRlcmF0ZWQpLGk6MCxrOmtpbmR9KX0sZnVuY3Rpb24oKXt2YXIgaXRlcj10aGlzW0lURVJdLE89aXRlci5vLGtpbmQ9aXRlci5rLGluZGV4PWl0ZXIuaSsrO2lmKCFPfHxpbmRleD49Ty5sZW5ndGgpe2l0ZXIubz11bmRlZmluZWQ7cmV0dXJuIGl0ZXJSZXN1bHQoMSl9aWYoa2luZD09S0VZKXJldHVybiBpdGVyUmVzdWx0KDAsaW5kZXgpO2lmKGtpbmQ9PVZBTFVFKXJldHVybiBpdGVyUmVzdWx0KDAsT1tpbmRleF0pO3JldHVybiBpdGVyUmVzdWx0KDAsW2luZGV4LE9baW5kZXhdXSl9LFZBTFVFKTtJdGVyYXRvcnNbQVJHVU1FTlRTXT1JdGVyYXRvcnNbQVJSQVldO2RlZmluZVN0ZEl0ZXJhdG9ycyhTdHJpbmcsU1RSSU5HLGZ1bmN0aW9uKGl0ZXJhdGVkKXtzZXQodGhpcyxJVEVSLHtvOlN0cmluZyhpdGVyYXRlZCksaTowfSl9LGZ1bmN0aW9uKCl7dmFyIGl0ZXI9dGhpc1tJVEVSXSxPPWl0ZXIubyxpbmRleD1pdGVyLmkscG9pbnQ7aWYoaW5kZXg+PU8ubGVuZ3RoKXJldHVybiBpdGVyUmVzdWx0KDEpO3BvaW50PWF0LmNhbGwoTyxpbmRleCk7aXRlci5pKz1wb2ludC5sZW5ndGg7cmV0dXJuIGl0ZXJSZXN1bHQoMCxwb2ludCl9KX0oY3JlYXRlUG9pbnRBdCh0cnVlKSk7REVTQyYmIWZ1bmN0aW9uKFJlZ0V4cFByb3RvLF9SZWdFeHApe2lmKCFmdW5jdGlvbigpe3RyeXtyZXR1cm4gUmVnRXhwKC9hL2csXCJpXCIpPT1cIi9hL2lcIn1jYXRjaChlKXt9fSgpKXtSZWdFeHA9ZnVuY3Rpb24gUmVnRXhwKHBhdHRlcm4sZmxhZ3Mpe3JldHVybiBuZXcgX1JlZ0V4cChjb2YocGF0dGVybik9PVJFR0VYUCYmZmxhZ3MhPT11bmRlZmluZWQ/cGF0dGVybi5zb3VyY2U6cGF0dGVybixmbGFncyl9O2ZvckVhY2guY2FsbChnZXROYW1lcyhfUmVnRXhwKSxmdW5jdGlvbihrZXkpe2tleSBpbiBSZWdFeHB8fGRlZmluZVByb3BlcnR5KFJlZ0V4cCxrZXkse2NvbmZpZ3VyYWJsZTp0cnVlLGdldDpmdW5jdGlvbigpe3JldHVybiBfUmVnRXhwW2tleV19LHNldDpmdW5jdGlvbihpdCl7X1JlZ0V4cFtrZXldPWl0fX0pfSk7UmVnRXhwUHJvdG9bQ09OU1RSVUNUT1JdPVJlZ0V4cDtSZWdFeHBbUFJPVE9UWVBFXT1SZWdFeHBQcm90bztoaWRkZW4oZ2xvYmFsLFJFR0VYUCxSZWdFeHApfWlmKC8uL2cuZmxhZ3MhPVwiZ1wiKWRlZmluZVByb3BlcnR5KFJlZ0V4cFByb3RvLFwiZmxhZ3NcIix7Y29uZmlndXJhYmxlOnRydWUsZ2V0OmNyZWF0ZVJlcGxhY2VyKC9eLipcXC8oXFx3KikkLyxcIiQxXCIpfSk7c2V0U3BlY2llcyhSZWdFeHApfShSZWdFeHBbUFJPVE9UWVBFXSxSZWdFeHApO2lzRnVuY3Rpb24oc2V0SW1tZWRpYXRlKSYmaXNGdW5jdGlvbihjbGVhckltbWVkaWF0ZSl8fGZ1bmN0aW9uKE9OUkVBRFlTVEFURUNIQU5HRSl7dmFyIHBvc3RNZXNzYWdlPWdsb2JhbC5wb3N0TWVzc2FnZSxhZGRFdmVudExpc3RlbmVyPWdsb2JhbC5hZGRFdmVudExpc3RlbmVyLE1lc3NhZ2VDaGFubmVsPWdsb2JhbC5NZXNzYWdlQ2hhbm5lbCxjb3VudGVyPTAscXVldWU9e30sZGVmZXIsY2hhbm5lbCxwb3J0O3NldEltbWVkaWF0ZT1mdW5jdGlvbihmbil7dmFyIGFyZ3M9W10saT0xO3doaWxlKGFyZ3VtZW50cy5sZW5ndGg+aSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO3F1ZXVlWysrY291bnRlcl09ZnVuY3Rpb24oKXtpbnZva2UoaXNGdW5jdGlvbihmbik/Zm46RnVuY3Rpb24oZm4pLGFyZ3MpfTtkZWZlcihjb3VudGVyKTtyZXR1cm4gY291bnRlcn07Y2xlYXJJbW1lZGlhdGU9ZnVuY3Rpb24oaWQpe2RlbGV0ZSBxdWV1ZVtpZF19O2Z1bmN0aW9uIHJ1bihpZCl7aWYoaGFzKHF1ZXVlLGlkKSl7dmFyIGZuPXF1ZXVlW2lkXTtkZWxldGUgcXVldWVbaWRdO2ZuKCl9fWZ1bmN0aW9uIGxpc3RuZXIoZXZlbnQpe3J1bihldmVudC5kYXRhKX1pZihOT0RFKXtkZWZlcj1mdW5jdGlvbihpZCl7bmV4dFRpY2socGFydC5jYWxsKHJ1bixpZCkpfX1lbHNlIGlmKGFkZEV2ZW50TGlzdGVuZXImJmlzRnVuY3Rpb24ocG9zdE1lc3NhZ2UpJiYhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe2RlZmVyPWZ1bmN0aW9uKGlkKXtwb3N0TWVzc2FnZShpZCxcIipcIil9O2FkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsbGlzdG5lcixmYWxzZSl9ZWxzZSBpZihpc0Z1bmN0aW9uKE1lc3NhZ2VDaGFubmVsKSl7Y2hhbm5lbD1uZXcgTWVzc2FnZUNoYW5uZWw7cG9ydD1jaGFubmVsLnBvcnQyO2NoYW5uZWwucG9ydDEub25tZXNzYWdlPWxpc3RuZXI7ZGVmZXI9Y3R4KHBvcnQucG9zdE1lc3NhZ2UscG9ydCwxKX1lbHNlIGlmKGRvY3VtZW50JiZPTlJFQURZU1RBVEVDSEFOR0UgaW4gZG9jdW1lbnRbQ1JFQVRFX0VMRU1FTlRdKFwic2NyaXB0XCIpKXtkZWZlcj1mdW5jdGlvbihpZCl7aHRtbC5hcHBlbmRDaGlsZChkb2N1bWVudFtDUkVBVEVfRUxFTUVOVF0oXCJzY3JpcHRcIikpW09OUkVBRFlTVEFURUNIQU5HRV09ZnVuY3Rpb24oKXtodG1sLnJlbW92ZUNoaWxkKHRoaXMpO3J1bihpZCl9fX1lbHNle2RlZmVyPWZ1bmN0aW9uKGlkKXtzZXRUaW1lb3V0KHJ1biwwLGlkKX19fShcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiKTskZGVmaW5lKEdMT0JBTCtCSU5ELHtzZXRJbW1lZGlhdGU6c2V0SW1tZWRpYXRlLGNsZWFySW1tZWRpYXRlOmNsZWFySW1tZWRpYXRlfSk7IWZ1bmN0aW9uKFByb21pc2UsdGVzdCl7aXNGdW5jdGlvbihQcm9taXNlKSYmaXNGdW5jdGlvbihQcm9taXNlLnJlc29sdmUpJiZQcm9taXNlLnJlc29sdmUodGVzdD1uZXcgUHJvbWlzZShmdW5jdGlvbigpe30pKT09dGVzdHx8ZnVuY3Rpb24oYXNhcCxSRUNPUkQpe2Z1bmN0aW9uIGlzVGhlbmFibGUoaXQpe3ZhciB0aGVuO2lmKGlzT2JqZWN0KGl0KSl0aGVuPWl0LnRoZW47cmV0dXJuIGlzRnVuY3Rpb24odGhlbik/dGhlbjpmYWxzZX1mdW5jdGlvbiBoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHByb21pc2Upe3ZhciByZWNvcmQ9cHJvbWlzZVtSRUNPUkRdLGNoYWluPXJlY29yZC5jLGk9MCxyZWFjdDtpZihyZWNvcmQuaClyZXR1cm4gdHJ1ZTt3aGlsZShjaGFpbi5sZW5ndGg+aSl7cmVhY3Q9Y2hhaW5baSsrXTtpZihyZWFjdC5mYWlsfHxoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHJlYWN0LlApKXJldHVybiB0cnVlfX1mdW5jdGlvbiBub3RpZnkocmVjb3JkLHJlamVjdCl7dmFyIGNoYWluPXJlY29yZC5jO2lmKHJlamVjdHx8Y2hhaW4ubGVuZ3RoKWFzYXAoZnVuY3Rpb24oKXt2YXIgcHJvbWlzZT1yZWNvcmQucCx2YWx1ZT1yZWNvcmQudixvaz1yZWNvcmQucz09MSxpPTA7aWYocmVqZWN0JiYhaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChwcm9taXNlKSl7c2V0VGltZW91dChmdW5jdGlvbigpe2lmKCFoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHByb21pc2UpKXtpZihOT0RFKXtpZighcHJvY2Vzcy5lbWl0KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsdmFsdWUscHJvbWlzZSkpe319ZWxzZSBpZihpc0Z1bmN0aW9uKGNvbnNvbGUuZXJyb3IpKXtjb25zb2xlLmVycm9yKFwiVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXCIsdmFsdWUpfX19LDFlMyl9ZWxzZSB3aGlsZShjaGFpbi5sZW5ndGg+aSkhZnVuY3Rpb24ocmVhY3Qpe3ZhciBjYj1vaz9yZWFjdC5vazpyZWFjdC5mYWlsLHJldCx0aGVuO3RyeXtpZihjYil7aWYoIW9rKXJlY29yZC5oPXRydWU7cmV0PWNiPT09dHJ1ZT92YWx1ZTpjYih2YWx1ZSk7aWYocmV0PT09cmVhY3QuUCl7cmVhY3QucmVqKFR5cGVFcnJvcihQUk9NSVNFK1wiLWNoYWluIGN5Y2xlXCIpKX1lbHNlIGlmKHRoZW49aXNUaGVuYWJsZShyZXQpKXt0aGVuLmNhbGwocmV0LHJlYWN0LnJlcyxyZWFjdC5yZWopfWVsc2UgcmVhY3QucmVzKHJldCl9ZWxzZSByZWFjdC5yZWoodmFsdWUpfWNhdGNoKGVycil7cmVhY3QucmVqKGVycil9fShjaGFpbltpKytdKTtjaGFpbi5sZW5ndGg9MH0pfWZ1bmN0aW9uIHJlc29sdmUodmFsdWUpe3ZhciByZWNvcmQ9dGhpcyx0aGVuLHdyYXBwZXI7aWYocmVjb3JkLmQpcmV0dXJuO3JlY29yZC5kPXRydWU7cmVjb3JkPXJlY29yZC5yfHxyZWNvcmQ7dHJ5e2lmKHRoZW49aXNUaGVuYWJsZSh2YWx1ZSkpe3dyYXBwZXI9e3I6cmVjb3JkLGQ6ZmFsc2V9O3RoZW4uY2FsbCh2YWx1ZSxjdHgocmVzb2x2ZSx3cmFwcGVyLDEpLGN0eChyZWplY3Qsd3JhcHBlciwxKSl9ZWxzZXtyZWNvcmQudj12YWx1ZTtyZWNvcmQucz0xO25vdGlmeShyZWNvcmQpfX1jYXRjaChlcnIpe3JlamVjdC5jYWxsKHdyYXBwZXJ8fHtyOnJlY29yZCxkOmZhbHNlfSxlcnIpfX1mdW5jdGlvbiByZWplY3QodmFsdWUpe3ZhciByZWNvcmQ9dGhpcztpZihyZWNvcmQuZClyZXR1cm47cmVjb3JkLmQ9dHJ1ZTtyZWNvcmQ9cmVjb3JkLnJ8fHJlY29yZDtyZWNvcmQudj12YWx1ZTtyZWNvcmQucz0yO25vdGlmeShyZWNvcmQsdHJ1ZSl9ZnVuY3Rpb24gZ2V0Q29uc3RydWN0b3IoQyl7dmFyIFM9YXNzZXJ0T2JqZWN0KEMpW1NZTUJPTF9TUEVDSUVTXTtyZXR1cm4gUyE9dW5kZWZpbmVkP1M6Q31Qcm9taXNlPWZ1bmN0aW9uKGV4ZWN1dG9yKXthc3NlcnRGdW5jdGlvbihleGVjdXRvcik7YXNzZXJ0SW5zdGFuY2UodGhpcyxQcm9taXNlLFBST01JU0UpO3ZhciByZWNvcmQ9e3A6dGhpcyxjOltdLHM6MCxkOmZhbHNlLHY6dW5kZWZpbmVkLGg6ZmFsc2V9O2hpZGRlbih0aGlzLFJFQ09SRCxyZWNvcmQpO3RyeXtleGVjdXRvcihjdHgocmVzb2x2ZSxyZWNvcmQsMSksY3R4KHJlamVjdCxyZWNvcmQsMSkpfWNhdGNoKGVycil7cmVqZWN0LmNhbGwocmVjb3JkLGVycil9fTthc3NpZ25IaWRkZW4oUHJvbWlzZVtQUk9UT1RZUEVdLHt0aGVuOmZ1bmN0aW9uKG9uRnVsZmlsbGVkLG9uUmVqZWN0ZWQpe3ZhciBTPWFzc2VydE9iamVjdChhc3NlcnRPYmplY3QodGhpcylbQ09OU1RSVUNUT1JdKVtTWU1CT0xfU1BFQ0lFU107dmFyIHJlYWN0PXtvazppc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKT9vbkZ1bGZpbGxlZDp0cnVlLGZhaWw6aXNGdW5jdGlvbihvblJlamVjdGVkKT9vblJlamVjdGVkOmZhbHNlfSxQPXJlYWN0LlA9bmV3KFMhPXVuZGVmaW5lZD9TOlByb21pc2UpKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXtyZWFjdC5yZXM9YXNzZXJ0RnVuY3Rpb24ocmVzb2x2ZSk7cmVhY3QucmVqPWFzc2VydEZ1bmN0aW9uKHJlamVjdCl9KSxyZWNvcmQ9dGhpc1tSRUNPUkRdO3JlY29yZC5jLnB1c2gocmVhY3QpO3JlY29yZC5zJiZub3RpZnkocmVjb3JkKTtyZXR1cm4gUH0sXCJjYXRjaFwiOmZ1bmN0aW9uKG9uUmVqZWN0ZWQpe3JldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLG9uUmVqZWN0ZWQpfX0pO2Fzc2lnbkhpZGRlbihQcm9taXNlLHthbGw6ZnVuY3Rpb24oaXRlcmFibGUpe3ZhciBQcm9taXNlPWdldENvbnN0cnVjdG9yKHRoaXMpLHZhbHVlcz1bXTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe2Zvck9mKGl0ZXJhYmxlLGZhbHNlLHB1c2gsdmFsdWVzKTt2YXIgcmVtYWluaW5nPXZhbHVlcy5sZW5ndGgscmVzdWx0cz1BcnJheShyZW1haW5pbmcpO2lmKHJlbWFpbmluZylmb3JFYWNoLmNhbGwodmFsdWVzLGZ1bmN0aW9uKHByb21pc2UsaW5kZXgpe1Byb21pc2UucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtyZXN1bHRzW2luZGV4XT12YWx1ZTstLXJlbWFpbmluZ3x8cmVzb2x2ZShyZXN1bHRzKX0scmVqZWN0KX0pO2Vsc2UgcmVzb2x2ZShyZXN1bHRzKX0pfSxyYWNlOmZ1bmN0aW9uKGl0ZXJhYmxlKXt2YXIgUHJvbWlzZT1nZXRDb25zdHJ1Y3Rvcih0aGlzKTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe2Zvck9mKGl0ZXJhYmxlLGZhbHNlLGZ1bmN0aW9uKHByb21pc2Upe1Byb21pc2UucmVzb2x2ZShwcm9taXNlKS50aGVuKHJlc29sdmUscmVqZWN0KX0pfSl9LHJlamVjdDpmdW5jdGlvbihyKXtyZXR1cm4gbmV3KGdldENvbnN0cnVjdG9yKHRoaXMpKShmdW5jdGlvbihyZXNvbHZlLHJlamVjdCl7cmVqZWN0KHIpfSl9LHJlc29sdmU6ZnVuY3Rpb24oeCl7cmV0dXJuIGlzT2JqZWN0KHgpJiZSRUNPUkQgaW4geCYmZ2V0UHJvdG90eXBlT2YoeCk9PT10aGlzW1BST1RPVFlQRV0/eDpuZXcoZ2V0Q29uc3RydWN0b3IodGhpcykpKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXtyZXNvbHZlKHgpfSl9fSl9KG5leHRUaWNrfHxzZXRJbW1lZGlhdGUsc2FmZVN5bWJvbChcInJlY29yZFwiKSk7c2V0VG9TdHJpbmdUYWcoUHJvbWlzZSxQUk9NSVNFKTtzZXRTcGVjaWVzKFByb21pc2UpOyRkZWZpbmUoR0xPQkFMK0ZPUkNFRCohaXNOYXRpdmUoUHJvbWlzZSkse1Byb21pc2U6UHJvbWlzZX0pfShnbG9iYWxbUFJPTUlTRV0pOyFmdW5jdGlvbigpe3ZhciBVSUQ9c2FmZVN5bWJvbChcInVpZFwiKSxPMT1zYWZlU3ltYm9sKFwiTzFcIiksV0VBSz1zYWZlU3ltYm9sKFwid2Vha1wiKSxMRUFLPXNhZmVTeW1ib2woXCJsZWFrXCIpLExBU1Q9c2FmZVN5bWJvbChcImxhc3RcIiksRklSU1Q9c2FmZVN5bWJvbChcImZpcnN0XCIpLFNJWkU9REVTQz9zYWZlU3ltYm9sKFwic2l6ZVwiKTpcInNpemVcIix1aWQ9MCx0bXA9e307ZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbihDLE5BTUUsbWV0aG9kcyxjb21tb25NZXRob2RzLGlzTWFwLGlzV2Vhayl7dmFyIEFEREVSPWlzTWFwP1wic2V0XCI6XCJhZGRcIixwcm90bz1DJiZDW1BST1RPVFlQRV0sTz17fTtmdW5jdGlvbiBpbml0RnJvbUl0ZXJhYmxlKHRoYXQsaXRlcmFibGUpe2lmKGl0ZXJhYmxlIT11bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsaXNNYXAsdGhhdFtBRERFUl0sdGhhdCk7cmV0dXJuIHRoYXR9ZnVuY3Rpb24gZml4U1ZaKGtleSxjaGFpbil7dmFyIG1ldGhvZD1wcm90b1trZXldO2lmKGZyYW1ld29yaylwcm90b1trZXldPWZ1bmN0aW9uKGEsYil7dmFyIHJlc3VsdD1tZXRob2QuY2FsbCh0aGlzLGE9PT0wPzA6YSxiKTtyZXR1cm4gY2hhaW4/dGhpczpyZXN1bHR9fWlmKCFpc05hdGl2ZShDKXx8IShpc1dlYWt8fCFCVUdHWV9JVEVSQVRPUlMmJmhhcyhwcm90byxGT1JfRUFDSCkmJmhhcyhwcm90byxcImVudHJpZXNcIikpKXtDPWlzV2Vhaz9mdW5jdGlvbihpdGVyYWJsZSl7YXNzZXJ0SW5zdGFuY2UodGhpcyxDLE5BTUUpO3NldCh0aGlzLFVJRCx1aWQrKyk7aW5pdEZyb21JdGVyYWJsZSh0aGlzLGl0ZXJhYmxlKX06ZnVuY3Rpb24oaXRlcmFibGUpe3ZhciB0aGF0PXRoaXM7YXNzZXJ0SW5zdGFuY2UodGhhdCxDLE5BTUUpO3NldCh0aGF0LE8xLGNyZWF0ZShudWxsKSk7c2V0KHRoYXQsU0laRSwwKTtzZXQodGhhdCxMQVNULHVuZGVmaW5lZCk7c2V0KHRoYXQsRklSU1QsdW5kZWZpbmVkKTtpbml0RnJvbUl0ZXJhYmxlKHRoYXQsaXRlcmFibGUpfTthc3NpZ25IaWRkZW4oYXNzaWduSGlkZGVuKENbUFJPVE9UWVBFXSxtZXRob2RzKSxjb21tb25NZXRob2RzKTtpc1dlYWt8fCFERVNDfHxkZWZpbmVQcm9wZXJ0eShDW1BST1RPVFlQRV0sXCJzaXplXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBhc3NlcnREZWZpbmVkKHRoaXNbU0laRV0pfX0pfWVsc2V7dmFyIE5hdGl2ZT1DLGluc3Q9bmV3IEMsY2hhaW49aW5zdFtBRERFUl0oaXNXZWFrP3t9Oi0wLDEpLGJ1Z2d5WmVybztpZihjaGVja0Rhbmdlckl0ZXJDbG9zaW5nKGZ1bmN0aW9uKE8pe25ldyBDKE8pfSkpe0M9ZnVuY3Rpb24oaXRlcmFibGUpe2Fzc2VydEluc3RhbmNlKHRoaXMsQyxOQU1FKTtyZXR1cm4gaW5pdEZyb21JdGVyYWJsZShuZXcgTmF0aXZlLGl0ZXJhYmxlKX07Q1tQUk9UT1RZUEVdPXByb3RvO2lmKGZyYW1ld29yaylwcm90b1tDT05TVFJVQ1RPUl09Q31pc1dlYWt8fGluc3RbRk9SX0VBQ0hdKGZ1bmN0aW9uKHZhbCxrZXkpe2J1Z2d5WmVybz0xL2tleT09PS1JbmZpbml0eX0pO2lmKGJ1Z2d5WmVybyl7Zml4U1ZaKFwiZGVsZXRlXCIpO2ZpeFNWWihcImhhc1wiKTtpc01hcCYmZml4U1ZaKFwiZ2V0XCIpfWlmKGJ1Z2d5WmVyb3x8Y2hhaW4hPT1pbnN0KWZpeFNWWihBRERFUix0cnVlKX1zZXRUb1N0cmluZ1RhZyhDLE5BTUUpO3NldFNwZWNpZXMoQyk7T1tOQU1FXT1DOyRkZWZpbmUoR0xPQkFMK1dSQVArRk9SQ0VEKiFpc05hdGl2ZShDKSxPKTtpc1dlYWt8fGRlZmluZVN0ZEl0ZXJhdG9ycyhDLE5BTUUsZnVuY3Rpb24oaXRlcmF0ZWQsa2luZCl7c2V0KHRoaXMsSVRFUix7bzppdGVyYXRlZCxrOmtpbmR9KX0sZnVuY3Rpb24oKXt2YXIgaXRlcj10aGlzW0lURVJdLGtpbmQ9aXRlci5rLGVudHJ5PWl0ZXIubDt3aGlsZShlbnRyeSYmZW50cnkucillbnRyeT1lbnRyeS5wO2lmKCFpdGVyLm98fCEoaXRlci5sPWVudHJ5PWVudHJ5P2VudHJ5Lm46aXRlci5vW0ZJUlNUXSkpe2l0ZXIubz11bmRlZmluZWQ7cmV0dXJuIGl0ZXJSZXN1bHQoMSl9aWYoa2luZD09S0VZKXJldHVybiBpdGVyUmVzdWx0KDAsZW50cnkuayk7aWYoa2luZD09VkFMVUUpcmV0dXJuIGl0ZXJSZXN1bHQoMCxlbnRyeS52KTtyZXR1cm4gaXRlclJlc3VsdCgwLFtlbnRyeS5rLGVudHJ5LnZdKX0saXNNYXA/S0VZK1ZBTFVFOlZBTFVFLCFpc01hcCk7cmV0dXJuIEN9ZnVuY3Rpb24gZmFzdEtleShpdCxjcmVhdGUpe2lmKCFpc09iamVjdChpdCkpcmV0dXJuKHR5cGVvZiBpdD09XCJzdHJpbmdcIj9cIlNcIjpcIlBcIikraXQ7aWYoaXNGcm96ZW4oaXQpKXJldHVyblwiRlwiO2lmKCFoYXMoaXQsVUlEKSl7aWYoIWNyZWF0ZSlyZXR1cm5cIkVcIjtoaWRkZW4oaXQsVUlELCsrdWlkKX1yZXR1cm5cIk9cIitpdFtVSURdfWZ1bmN0aW9uIGdldEVudHJ5KHRoYXQsa2V5KXt2YXIgaW5kZXg9ZmFzdEtleShrZXkpLGVudHJ5O2lmKGluZGV4IT1cIkZcIilyZXR1cm4gdGhhdFtPMV1baW5kZXhdO2ZvcihlbnRyeT10aGF0W0ZJUlNUXTtlbnRyeTtlbnRyeT1lbnRyeS5uKXtpZihlbnRyeS5rPT1rZXkpcmV0dXJuIGVudHJ5fX1mdW5jdGlvbiBkZWYodGhhdCxrZXksdmFsdWUpe3ZhciBlbnRyeT1nZXRFbnRyeSh0aGF0LGtleSkscHJldixpbmRleDtpZihlbnRyeSllbnRyeS52PXZhbHVlO2Vsc2V7dGhhdFtMQVNUXT1lbnRyeT17aTppbmRleD1mYXN0S2V5KGtleSx0cnVlKSxrOmtleSx2OnZhbHVlLHA6cHJldj10aGF0W0xBU1RdLG46dW5kZWZpbmVkLHI6ZmFsc2V9O2lmKCF0aGF0W0ZJUlNUXSl0aGF0W0ZJUlNUXT1lbnRyeTtpZihwcmV2KXByZXYubj1lbnRyeTt0aGF0W1NJWkVdKys7aWYoaW5kZXghPVwiRlwiKXRoYXRbTzFdW2luZGV4XT1lbnRyeX1yZXR1cm4gdGhhdH12YXIgY29sbGVjdGlvbk1ldGhvZHM9e2NsZWFyOmZ1bmN0aW9uKCl7Zm9yKHZhciB0aGF0PXRoaXMsZGF0YT10aGF0W08xXSxlbnRyeT10aGF0W0ZJUlNUXTtlbnRyeTtlbnRyeT1lbnRyeS5uKXtlbnRyeS5yPXRydWU7XG5pZihlbnRyeS5wKWVudHJ5LnA9ZW50cnkucC5uPXVuZGVmaW5lZDtkZWxldGUgZGF0YVtlbnRyeS5pXX10aGF0W0ZJUlNUXT10aGF0W0xBU1RdPXVuZGVmaW5lZDt0aGF0W1NJWkVdPTB9LFwiZGVsZXRlXCI6ZnVuY3Rpb24oa2V5KXt2YXIgdGhhdD10aGlzLGVudHJ5PWdldEVudHJ5KHRoYXQsa2V5KTtpZihlbnRyeSl7dmFyIG5leHQ9ZW50cnkubixwcmV2PWVudHJ5LnA7ZGVsZXRlIHRoYXRbTzFdW2VudHJ5LmldO2VudHJ5LnI9dHJ1ZTtpZihwcmV2KXByZXYubj1uZXh0O2lmKG5leHQpbmV4dC5wPXByZXY7aWYodGhhdFtGSVJTVF09PWVudHJ5KXRoYXRbRklSU1RdPW5leHQ7aWYodGhhdFtMQVNUXT09ZW50cnkpdGhhdFtMQVNUXT1wcmV2O3RoYXRbU0laRV0tLX1yZXR1cm4hIWVudHJ5fSxmb3JFYWNoOmZ1bmN0aW9uKGNhbGxiYWNrZm4pe3ZhciBmPWN0eChjYWxsYmFja2ZuLGFyZ3VtZW50c1sxXSwzKSxlbnRyeTt3aGlsZShlbnRyeT1lbnRyeT9lbnRyeS5uOnRoaXNbRklSU1RdKXtmKGVudHJ5LnYsZW50cnkuayx0aGlzKTt3aGlsZShlbnRyeSYmZW50cnkucillbnRyeT1lbnRyeS5wfX0saGFzOmZ1bmN0aW9uKGtleSl7cmV0dXJuISFnZXRFbnRyeSh0aGlzLGtleSl9fTtNYXA9Z2V0Q29sbGVjdGlvbihNYXAsTUFQLHtnZXQ6ZnVuY3Rpb24oa2V5KXt2YXIgZW50cnk9Z2V0RW50cnkodGhpcyxrZXkpO3JldHVybiBlbnRyeSYmZW50cnkudn0sc2V0OmZ1bmN0aW9uKGtleSx2YWx1ZSl7cmV0dXJuIGRlZih0aGlzLGtleT09PTA/MDprZXksdmFsdWUpfX0sY29sbGVjdGlvbk1ldGhvZHMsdHJ1ZSk7U2V0PWdldENvbGxlY3Rpb24oU2V0LFNFVCx7YWRkOmZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gZGVmKHRoaXMsdmFsdWU9dmFsdWU9PT0wPzA6dmFsdWUsdmFsdWUpfX0sY29sbGVjdGlvbk1ldGhvZHMpO2Z1bmN0aW9uIGRlZldlYWsodGhhdCxrZXksdmFsdWUpe2lmKGlzRnJvemVuKGFzc2VydE9iamVjdChrZXkpKSlsZWFrU3RvcmUodGhhdCkuc2V0KGtleSx2YWx1ZSk7ZWxzZXtoYXMoa2V5LFdFQUspfHxoaWRkZW4oa2V5LFdFQUsse30pO2tleVtXRUFLXVt0aGF0W1VJRF1dPXZhbHVlfXJldHVybiB0aGF0fWZ1bmN0aW9uIGxlYWtTdG9yZSh0aGF0KXtyZXR1cm4gdGhhdFtMRUFLXXx8aGlkZGVuKHRoYXQsTEVBSyxuZXcgTWFwKVtMRUFLXX12YXIgd2Vha01ldGhvZHM9e1wiZGVsZXRlXCI6ZnVuY3Rpb24oa2V5KXtpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7aWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpW1wiZGVsZXRlXCJdKGtleSk7cmV0dXJuIGhhcyhrZXksV0VBSykmJmhhcyhrZXlbV0VBS10sdGhpc1tVSURdKSYmZGVsZXRlIGtleVtXRUFLXVt0aGlzW1VJRF1dfSxoYXM6ZnVuY3Rpb24oa2V5KXtpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7aWYoaXNGcm96ZW4oa2V5KSlyZXR1cm4gbGVha1N0b3JlKHRoaXMpLmhhcyhrZXkpO3JldHVybiBoYXMoa2V5LFdFQUspJiZoYXMoa2V5W1dFQUtdLHRoaXNbVUlEXSl9fTtXZWFrTWFwPWdldENvbGxlY3Rpb24oV2Vha01hcCxXRUFLTUFQLHtnZXQ6ZnVuY3Rpb24oa2V5KXtpZihpc09iamVjdChrZXkpKXtpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcykuZ2V0KGtleSk7aWYoaGFzKGtleSxXRUFLKSlyZXR1cm4ga2V5W1dFQUtdW3RoaXNbVUlEXV19fSxzZXQ6ZnVuY3Rpb24oa2V5LHZhbHVlKXtyZXR1cm4gZGVmV2Vhayh0aGlzLGtleSx2YWx1ZSl9fSx3ZWFrTWV0aG9kcyx0cnVlLHRydWUpO2lmKGZyYW1ld29yayYmKG5ldyBXZWFrTWFwKS5zZXQoT2JqZWN0LmZyZWV6ZSh0bXApLDcpLmdldCh0bXApIT03KXtmb3JFYWNoLmNhbGwoYXJyYXkoXCJkZWxldGUsaGFzLGdldCxzZXRcIiksZnVuY3Rpb24oa2V5KXt2YXIgbWV0aG9kPVdlYWtNYXBbUFJPVE9UWVBFXVtrZXldO1dlYWtNYXBbUFJPVE9UWVBFXVtrZXldPWZ1bmN0aW9uKGEsYil7aWYoaXNPYmplY3QoYSkmJmlzRnJvemVuKGEpKXt2YXIgcmVzdWx0PWxlYWtTdG9yZSh0aGlzKVtrZXldKGEsYik7cmV0dXJuIGtleT09XCJzZXRcIj90aGlzOnJlc3VsdH1yZXR1cm4gbWV0aG9kLmNhbGwodGhpcyxhLGIpfX0pfVdlYWtTZXQ9Z2V0Q29sbGVjdGlvbihXZWFrU2V0LFdFQUtTRVQse2FkZDpmdW5jdGlvbih2YWx1ZSl7cmV0dXJuIGRlZldlYWsodGhpcyx2YWx1ZSx0cnVlKX19LHdlYWtNZXRob2RzLGZhbHNlLHRydWUpfSgpOyFmdW5jdGlvbigpe2Z1bmN0aW9uIEVudW1lcmF0ZShpdGVyYXRlZCl7dmFyIGtleXM9W10sa2V5O2ZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7c2V0KHRoaXMsSVRFUix7bzppdGVyYXRlZCxhOmtleXMsaTowfSl9Y3JlYXRlSXRlcmF0b3IoRW51bWVyYXRlLE9CSkVDVCxmdW5jdGlvbigpe3ZhciBpdGVyPXRoaXNbSVRFUl0sa2V5cz1pdGVyLmEsa2V5O2Rve2lmKGl0ZXIuaT49a2V5cy5sZW5ndGgpcmV0dXJuIGl0ZXJSZXN1bHQoMSl9d2hpbGUoISgoa2V5PWtleXNbaXRlci5pKytdKWluIGl0ZXIubykpO3JldHVybiBpdGVyUmVzdWx0KDAsa2V5KX0pO2Z1bmN0aW9uIHdyYXAoZm4pe3JldHVybiBmdW5jdGlvbihpdCl7YXNzZXJ0T2JqZWN0KGl0KTt0cnl7cmV0dXJuIGZuLmFwcGx5KHVuZGVmaW5lZCxhcmd1bWVudHMpLHRydWV9Y2F0Y2goZSl7cmV0dXJuIGZhbHNlfX19ZnVuY3Rpb24gcmVmbGVjdEdldCh0YXJnZXQscHJvcGVydHlLZXkpe3ZhciByZWNlaXZlcj1hcmd1bWVudHMubGVuZ3RoPDM/dGFyZ2V0OmFyZ3VtZW50c1syXSxkZXNjPWdldE93bkRlc2NyaXB0b3IoYXNzZXJ0T2JqZWN0KHRhcmdldCkscHJvcGVydHlLZXkpLHByb3RvO2lmKGRlc2MpcmV0dXJuIGhhcyhkZXNjLFwidmFsdWVcIik/ZGVzYy52YWx1ZTpkZXNjLmdldD09PXVuZGVmaW5lZD91bmRlZmluZWQ6ZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7cmV0dXJuIGlzT2JqZWN0KHByb3RvPWdldFByb3RvdHlwZU9mKHRhcmdldCkpP3JlZmxlY3RHZXQocHJvdG8scHJvcGVydHlLZXkscmVjZWl2ZXIpOnVuZGVmaW5lZH1mdW5jdGlvbiByZWZsZWN0U2V0KHRhcmdldCxwcm9wZXJ0eUtleSxWKXt2YXIgcmVjZWl2ZXI9YXJndW1lbnRzLmxlbmd0aDw0P3RhcmdldDphcmd1bWVudHNbM10sb3duRGVzYz1nZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3BlcnR5S2V5KSxleGlzdGluZ0Rlc2NyaXB0b3IscHJvdG87aWYoIW93bkRlc2Mpe2lmKGlzT2JqZWN0KHByb3RvPWdldFByb3RvdHlwZU9mKHRhcmdldCkpKXtyZXR1cm4gcmVmbGVjdFNldChwcm90byxwcm9wZXJ0eUtleSxWLHJlY2VpdmVyKX1vd25EZXNjPWRlc2NyaXB0b3IoMCl9aWYoaGFzKG93bkRlc2MsXCJ2YWx1ZVwiKSl7aWYob3duRGVzYy53cml0YWJsZT09PWZhbHNlfHwhaXNPYmplY3QocmVjZWl2ZXIpKXJldHVybiBmYWxzZTtleGlzdGluZ0Rlc2NyaXB0b3I9Z2V0T3duRGVzY3JpcHRvcihyZWNlaXZlcixwcm9wZXJ0eUtleSl8fGRlc2NyaXB0b3IoMCk7ZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlPVY7cmV0dXJuIGRlZmluZVByb3BlcnR5KHJlY2VpdmVyLHByb3BlcnR5S2V5LGV4aXN0aW5nRGVzY3JpcHRvciksdHJ1ZX1yZXR1cm4gb3duRGVzYy5zZXQ9PT11bmRlZmluZWQ/ZmFsc2U6KG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsViksdHJ1ZSl9dmFyIGlzRXh0ZW5zaWJsZT1PYmplY3QuaXNFeHRlbnNpYmxlfHxyZXR1cm5JdDt2YXIgcmVmbGVjdD17YXBwbHk6Y3R4KGNhbGwsYXBwbHksMyksY29uc3RydWN0OmZ1bmN0aW9uKHRhcmdldCxhcmd1bWVudHNMaXN0KXt2YXIgcHJvdG89YXNzZXJ0RnVuY3Rpb24oYXJndW1lbnRzLmxlbmd0aDwzP3RhcmdldDphcmd1bWVudHNbMl0pW1BST1RPVFlQRV0saW5zdGFuY2U9Y3JlYXRlKGlzT2JqZWN0KHByb3RvKT9wcm90bzpPYmplY3RQcm90bykscmVzdWx0PWFwcGx5LmNhbGwodGFyZ2V0LGluc3RhbmNlLGFyZ3VtZW50c0xpc3QpO3JldHVybiBpc09iamVjdChyZXN1bHQpP3Jlc3VsdDppbnN0YW5jZX0sZGVmaW5lUHJvcGVydHk6d3JhcChkZWZpbmVQcm9wZXJ0eSksZGVsZXRlUHJvcGVydHk6ZnVuY3Rpb24odGFyZ2V0LHByb3BlcnR5S2V5KXt2YXIgZGVzYz1nZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3BlcnR5S2V5KTtyZXR1cm4gZGVzYyYmIWRlc2MuY29uZmlndXJhYmxlP2ZhbHNlOmRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldfSxlbnVtZXJhdGU6ZnVuY3Rpb24odGFyZ2V0KXtyZXR1cm4gbmV3IEVudW1lcmF0ZShhc3NlcnRPYmplY3QodGFyZ2V0KSl9LGdldDpyZWZsZWN0R2V0LGdldE93blByb3BlcnR5RGVzY3JpcHRvcjpmdW5jdGlvbih0YXJnZXQscHJvcGVydHlLZXkpe3JldHVybiBnZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3BlcnR5S2V5KX0sZ2V0UHJvdG90eXBlT2Y6ZnVuY3Rpb24odGFyZ2V0KXtyZXR1cm4gZ2V0UHJvdG90eXBlT2YoYXNzZXJ0T2JqZWN0KHRhcmdldCkpfSxoYXM6ZnVuY3Rpb24odGFyZ2V0LHByb3BlcnR5S2V5KXtyZXR1cm4gcHJvcGVydHlLZXkgaW4gdGFyZ2V0fSxpc0V4dGVuc2libGU6ZnVuY3Rpb24odGFyZ2V0KXtyZXR1cm4hIWlzRXh0ZW5zaWJsZShhc3NlcnRPYmplY3QodGFyZ2V0KSl9LG93bktleXM6b3duS2V5cyxwcmV2ZW50RXh0ZW5zaW9uczp3cmFwKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9uc3x8cmV0dXJuSXQpLHNldDpyZWZsZWN0U2V0fTtpZihzZXRQcm90b3R5cGVPZilyZWZsZWN0LnNldFByb3RvdHlwZU9mPWZ1bmN0aW9uKHRhcmdldCxwcm90byl7cmV0dXJuIHNldFByb3RvdHlwZU9mKGFzc2VydE9iamVjdCh0YXJnZXQpLHByb3RvKSx0cnVlfTskZGVmaW5lKEdMT0JBTCx7UmVmbGVjdDp7fX0pOyRkZWZpbmUoU1RBVElDLFwiUmVmbGVjdFwiLHJlZmxlY3QpfSgpOyFmdW5jdGlvbigpeyRkZWZpbmUoUFJPVE8sQVJSQVkse2luY2x1ZGVzOmNyZWF0ZUFycmF5Q29udGFpbnModHJ1ZSl9KTskZGVmaW5lKFBST1RPLFNUUklORyx7YXQ6Y3JlYXRlUG9pbnRBdCh0cnVlKX0pO2Z1bmN0aW9uIGNyZWF0ZU9iamVjdFRvQXJyYXkoaXNFbnRyaWVzKXtyZXR1cm4gZnVuY3Rpb24ob2JqZWN0KXt2YXIgTz10b09iamVjdChvYmplY3QpLGtleXM9Z2V0S2V5cyhvYmplY3QpLGxlbmd0aD1rZXlzLmxlbmd0aCxpPTAscmVzdWx0PUFycmF5KGxlbmd0aCksa2V5O2lmKGlzRW50cmllcyl3aGlsZShsZW5ndGg+aSlyZXN1bHRbaV09W2tleT1rZXlzW2krK10sT1trZXldXTtlbHNlIHdoaWxlKGxlbmd0aD5pKXJlc3VsdFtpXT1PW2tleXNbaSsrXV07cmV0dXJuIHJlc3VsdH19JGRlZmluZShTVEFUSUMsT0JKRUNULHtnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOmZ1bmN0aW9uKG9iamVjdCl7dmFyIE89dG9PYmplY3Qob2JqZWN0KSxyZXN1bHQ9e307Zm9yRWFjaC5jYWxsKG93bktleXMoTyksZnVuY3Rpb24oa2V5KXtkZWZpbmVQcm9wZXJ0eShyZXN1bHQsa2V5LGRlc2NyaXB0b3IoMCxnZXRPd25EZXNjcmlwdG9yKE8sa2V5KSkpfSk7cmV0dXJuIHJlc3VsdH0sdmFsdWVzOmNyZWF0ZU9iamVjdFRvQXJyYXkoZmFsc2UpLGVudHJpZXM6Y3JlYXRlT2JqZWN0VG9BcnJheSh0cnVlKX0pOyRkZWZpbmUoU1RBVElDLFJFR0VYUCx7ZXNjYXBlOmNyZWF0ZVJlcGxhY2VyKC8oW1xcXFxcXC1bXFxde30oKSorPy4sXiR8XSkvZyxcIlxcXFwkMVwiLHRydWUpfSl9KCk7IWZ1bmN0aW9uKFJFRkVSRU5DRSl7UkVGRVJFTkNFX0dFVD1nZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFK1wiR2V0XCIsdHJ1ZSk7dmFyIFJFRkVSRU5DRV9TRVQ9Z2V0V2VsbEtub3duU3ltYm9sKFJFRkVSRU5DRStTRVQsdHJ1ZSksUkVGRVJFTkNFX0RFTEVURT1nZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFK1wiRGVsZXRlXCIsdHJ1ZSk7JGRlZmluZShTVEFUSUMsU1lNQk9MLHtyZWZlcmVuY2VHZXQ6UkVGRVJFTkNFX0dFVCxyZWZlcmVuY2VTZXQ6UkVGRVJFTkNFX1NFVCxyZWZlcmVuY2VEZWxldGU6UkVGRVJFTkNFX0RFTEVURX0pO2hpZGRlbihGdW5jdGlvblByb3RvLFJFRkVSRU5DRV9HRVQscmV0dXJuVGhpcyk7ZnVuY3Rpb24gc2V0TWFwTWV0aG9kcyhDb25zdHJ1Y3Rvcil7aWYoQ29uc3RydWN0b3Ipe3ZhciBNYXBQcm90bz1Db25zdHJ1Y3RvcltQUk9UT1RZUEVdO2hpZGRlbihNYXBQcm90byxSRUZFUkVOQ0VfR0VULE1hcFByb3RvLmdldCk7aGlkZGVuKE1hcFByb3RvLFJFRkVSRU5DRV9TRVQsTWFwUHJvdG8uc2V0KTtoaWRkZW4oTWFwUHJvdG8sUkVGRVJFTkNFX0RFTEVURSxNYXBQcm90b1tcImRlbGV0ZVwiXSl9fXNldE1hcE1ldGhvZHMoTWFwKTtzZXRNYXBNZXRob2RzKFdlYWtNYXApfShcInJlZmVyZW5jZVwiKTshZnVuY3Rpb24oYXJyYXlTdGF0aWNzKXtmdW5jdGlvbiBzZXRBcnJheVN0YXRpY3Moa2V5cyxsZW5ndGgpe2ZvckVhY2guY2FsbChhcnJheShrZXlzKSxmdW5jdGlvbihrZXkpe2lmKGtleSBpbiBBcnJheVByb3RvKWFycmF5U3RhdGljc1trZXldPWN0eChjYWxsLEFycmF5UHJvdG9ba2V5XSxsZW5ndGgpfSl9c2V0QXJyYXlTdGF0aWNzKFwicG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllc1wiLDEpO3NldEFycmF5U3RhdGljcyhcImluZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXNcIiwzKTtzZXRBcnJheVN0YXRpY3MoXCJqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YsXCIrXCJyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsLHR1cm5cIik7JGRlZmluZShTVEFUSUMsQVJSQVksYXJyYXlTdGF0aWNzKX0oe30pOyFmdW5jdGlvbihOb2RlTGlzdCl7aWYoZnJhbWV3b3JrJiZOb2RlTGlzdCYmIShTWU1CT0xfSVRFUkFUT1IgaW4gTm9kZUxpc3RbUFJPVE9UWVBFXSkpe2hpZGRlbihOb2RlTGlzdFtQUk9UT1RZUEVdLFNZTUJPTF9JVEVSQVRPUixJdGVyYXRvcnNbQVJSQVldKX1JdGVyYXRvcnMuTm9kZUxpc3Q9SXRlcmF0b3JzW0FSUkFZXX0oZ2xvYmFsLk5vZGVMaXN0KX0odHlwZW9mIHNlbGYhPVwidW5kZWZpbmVkXCImJnNlbGYuTWF0aD09PU1hdGg/c2VsZjpGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksdHJ1ZSl9LHt9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXsoZnVuY3Rpb24oZ2xvYmFsKXshZnVuY3Rpb24oZ2xvYmFsKXtcInVzZSBzdHJpY3RcIjt2YXIgaGFzT3duPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHVuZGVmaW5lZDt2YXIgaXRlcmF0b3JTeW1ib2w9dHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmU3ltYm9sLml0ZXJhdG9yfHxcIkBAaXRlcmF0b3JcIjt2YXIgaW5Nb2R1bGU9dHlwZW9mIG1vZHVsZT09PVwib2JqZWN0XCI7dmFyIHJ1bnRpbWU9Z2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtpZihydW50aW1lKXtpZihpbk1vZHVsZSl7bW9kdWxlLmV4cG9ydHM9cnVudGltZX1yZXR1cm59cnVudGltZT1nbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lPWluTW9kdWxlP21vZHVsZS5leHBvcnRzOnt9O2Z1bmN0aW9uIHdyYXAoaW5uZXJGbixvdXRlckZuLHNlbGYsdHJ5TG9jc0xpc3Qpe3JldHVybiBuZXcgR2VuZXJhdG9yKGlubmVyRm4sb3V0ZXJGbixzZWxmfHxudWxsLHRyeUxvY3NMaXN0fHxbXSl9cnVudGltZS53cmFwPXdyYXA7ZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sb2JqLGFyZyl7dHJ5e3JldHVybnt0eXBlOlwibm9ybWFsXCIsYXJnOmZuLmNhbGwob2JqLGFyZyl9fWNhdGNoKGVycil7cmV0dXJue3R5cGU6XCJ0aHJvd1wiLGFyZzplcnJ9fX12YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydD1cInN1c3BlbmRlZFN0YXJ0XCI7dmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQ9XCJzdXNwZW5kZWRZaWVsZFwiO3ZhciBHZW5TdGF0ZUV4ZWN1dGluZz1cImV4ZWN1dGluZ1wiO3ZhciBHZW5TdGF0ZUNvbXBsZXRlZD1cImNvbXBsZXRlZFwiO3ZhciBDb250aW51ZVNlbnRpbmVsPXt9O2Z1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCl7fWZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCl7fXZhciBHcD1HZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGU9R2VuZXJhdG9yLnByb3RvdHlwZTtHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGU9R3AuY29uc3RydWN0b3I9R2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7R2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3I9R2VuZXJhdG9yRnVuY3Rpb247R2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWU9XCJHZW5lcmF0b3JGdW5jdGlvblwiO3J1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbj1mdW5jdGlvbihnZW5GdW4pe3ZhciBjdG9yPXR5cGVvZiBnZW5GdW49PT1cImZ1bmN0aW9uXCImJmdlbkZ1bi5jb25zdHJ1Y3RvcjtyZXR1cm4gY3Rvcj9jdG9yPT09R2VuZXJhdG9yRnVuY3Rpb258fChjdG9yLmRpc3BsYXlOYW1lfHxjdG9yLm5hbWUpPT09XCJHZW5lcmF0b3JGdW5jdGlvblwiOmZhbHNlfTtydW50aW1lLm1hcms9ZnVuY3Rpb24oZ2VuRnVuKXtnZW5GdW4uX19wcm90b19fPUdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO2dlbkZ1bi5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShHcCk7cmV0dXJuIGdlbkZ1bn07cnVudGltZS5hc3luYz1mdW5jdGlvbihpbm5lckZuLG91dGVyRm4sc2VsZix0cnlMb2NzTGlzdCl7cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUscmVqZWN0KXt2YXIgZ2VuZXJhdG9yPXdyYXAoaW5uZXJGbixvdXRlckZuLHNlbGYsdHJ5TG9jc0xpc3QpO3ZhciBjYWxsTmV4dD1zdGVwLmJpbmQoZ2VuZXJhdG9yLm5leHQpO3ZhciBjYWxsVGhyb3c9c3RlcC5iaW5kKGdlbmVyYXRvcltcInRocm93XCJdKTtmdW5jdGlvbiBzdGVwKGFyZyl7dmFyIHJlY29yZD10cnlDYXRjaCh0aGlzLG51bGwsYXJnKTtpZihyZWNvcmQudHlwZT09PVwidGhyb3dcIil7cmVqZWN0KHJlY29yZC5hcmcpO3JldHVybn12YXIgaW5mbz1yZWNvcmQuYXJnO2lmKGluZm8uZG9uZSl7cmVzb2x2ZShpbmZvLnZhbHVlKX1lbHNle1Byb21pc2UucmVzb2x2ZShpbmZvLnZhbHVlKS50aGVuKGNhbGxOZXh0LGNhbGxUaHJvdyl9fWNhbGxOZXh0KCl9KX07ZnVuY3Rpb24gR2VuZXJhdG9yKGlubmVyRm4sb3V0ZXJGbixzZWxmLHRyeUxvY3NMaXN0KXt2YXIgZ2VuZXJhdG9yPW91dGVyRm4/T2JqZWN0LmNyZWF0ZShvdXRlckZuLnByb3RvdHlwZSk6dGhpczt2YXIgY29udGV4dD1uZXcgQ29udGV4dCh0cnlMb2NzTGlzdCk7dmFyIHN0YXRlPUdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7ZnVuY3Rpb24gaW52b2tlKG1ldGhvZCxhcmcpe2lmKHN0YXRlPT09R2VuU3RhdGVFeGVjdXRpbmcpe3Rocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIil9aWYoc3RhdGU9PT1HZW5TdGF0ZUNvbXBsZXRlZCl7cmV0dXJuIGRvbmVSZXN1bHQoKX13aGlsZSh0cnVlKXt2YXIgZGVsZWdhdGU9Y29udGV4dC5kZWxlZ2F0ZTtpZihkZWxlZ2F0ZSl7dmFyIHJlY29yZD10cnlDYXRjaChkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLGRlbGVnYXRlLml0ZXJhdG9yLGFyZyk7aWYocmVjb3JkLnR5cGU9PT1cInRocm93XCIpe2NvbnRleHQuZGVsZWdhdGU9bnVsbDttZXRob2Q9XCJ0aHJvd1wiO2FyZz1yZWNvcmQuYXJnO2NvbnRpbnVlfW1ldGhvZD1cIm5leHRcIjthcmc9dW5kZWZpbmVkO3ZhciBpbmZvPXJlY29yZC5hcmc7aWYoaW5mby5kb25lKXtjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdPWluZm8udmFsdWU7Y29udGV4dC5uZXh0PWRlbGVnYXRlLm5leHRMb2N9ZWxzZXtzdGF0ZT1HZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO3JldHVybiBpbmZvfWNvbnRleHQuZGVsZWdhdGU9bnVsbH1pZihtZXRob2Q9PT1cIm5leHRcIil7aWYoc3RhdGU9PT1HZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0JiZ0eXBlb2YgYXJnIT09XCJ1bmRlZmluZWRcIil7dGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHQgdG8gc2VuZCBcIitKU09OLnN0cmluZ2lmeShhcmcpK1wiIHRvIG5ld2Jvcm4gZ2VuZXJhdG9yXCIpfWlmKHN0YXRlPT09R2VuU3RhdGVTdXNwZW5kZWRZaWVsZCl7Y29udGV4dC5zZW50PWFyZ31lbHNle2RlbGV0ZSBjb250ZXh0LnNlbnR9fWVsc2UgaWYobWV0aG9kPT09XCJ0aHJvd1wiKXtpZihzdGF0ZT09PUdlblN0YXRlU3VzcGVuZGVkU3RhcnQpe3N0YXRlPUdlblN0YXRlQ29tcGxldGVkO3Rocm93IGFyZ31pZihjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpe21ldGhvZD1cIm5leHRcIjthcmc9dW5kZWZpbmVkfX1lbHNlIGlmKG1ldGhvZD09PVwicmV0dXJuXCIpe2NvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsYXJnKX1zdGF0ZT1HZW5TdGF0ZUV4ZWN1dGluZzt2YXIgcmVjb3JkPXRyeUNhdGNoKGlubmVyRm4sc2VsZixjb250ZXh0KTtpZihyZWNvcmQudHlwZT09PVwibm9ybWFsXCIpe3N0YXRlPWNvbnRleHQuZG9uZT9HZW5TdGF0ZUNvbXBsZXRlZDpHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO3ZhciBpbmZvPXt2YWx1ZTpyZWNvcmQuYXJnLGRvbmU6Y29udGV4dC5kb25lfTtpZihyZWNvcmQuYXJnPT09Q29udGludWVTZW50aW5lbCl7aWYoY29udGV4dC5kZWxlZ2F0ZSYmbWV0aG9kPT09XCJuZXh0XCIpe2FyZz11bmRlZmluZWR9fWVsc2V7cmV0dXJuIGluZm99fWVsc2UgaWYocmVjb3JkLnR5cGU9PT1cInRocm93XCIpe3N0YXRlPUdlblN0YXRlQ29tcGxldGVkO2lmKG1ldGhvZD09PVwibmV4dFwiKXtjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKHJlY29yZC5hcmcpfWVsc2V7YXJnPXJlY29yZC5hcmd9fX19Z2VuZXJhdG9yLm5leHQ9aW52b2tlLmJpbmQoZ2VuZXJhdG9yLFwibmV4dFwiKTtnZW5lcmF0b3JbXCJ0aHJvd1wiXT1pbnZva2UuYmluZChnZW5lcmF0b3IsXCJ0aHJvd1wiKTtnZW5lcmF0b3JbXCJyZXR1cm5cIl09aW52b2tlLmJpbmQoZ2VuZXJhdG9yLFwicmV0dXJuXCIpO3JldHVybiBnZW5lcmF0b3J9R3BbaXRlcmF0b3JTeW1ib2xdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O0dwLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEdlbmVyYXRvcl1cIn07ZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3Mpe3ZhciBlbnRyeT17dHJ5TG9jOmxvY3NbMF19O2lmKDEgaW4gbG9jcyl7ZW50cnkuY2F0Y2hMb2M9bG9jc1sxXX1pZigyIGluIGxvY3Mpe2VudHJ5LmZpbmFsbHlMb2M9bG9jc1syXTtlbnRyeS5hZnRlckxvYz1sb2NzWzNdfXRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KX1mdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KXt2YXIgcmVjb3JkPWVudHJ5LmNvbXBsZXRpb258fHt9O3JlY29yZC50eXBlPVwibm9ybWFsXCI7ZGVsZXRlIHJlY29yZC5hcmc7ZW50cnkuY29tcGxldGlvbj1yZWNvcmR9ZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCl7dGhpcy50cnlFbnRyaWVzPVt7dHJ5TG9jOlwicm9vdFwifV07dHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksdGhpcyk7dGhpcy5yZXNldCgpfXJ1bnRpbWUua2V5cz1mdW5jdGlvbihvYmplY3Qpe3ZhciBrZXlzPVtdO2Zvcih2YXIga2V5IGluIG9iamVjdCl7a2V5cy5wdXNoKGtleSl9a2V5cy5yZXZlcnNlKCk7cmV0dXJuIGZ1bmN0aW9uIG5leHQoKXt3aGlsZShrZXlzLmxlbmd0aCl7dmFyIGtleT1rZXlzLnBvcCgpO2lmKGtleSBpbiBvYmplY3Qpe25leHQudmFsdWU9a2V5O25leHQuZG9uZT1mYWxzZTtyZXR1cm4gbmV4dH19bmV4dC5kb25lPXRydWU7cmV0dXJuIG5leHR9fTtmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpe2lmKGl0ZXJhYmxlKXt2YXIgaXRlcmF0b3JNZXRob2Q9aXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO2lmKGl0ZXJhdG9yTWV0aG9kKXtyZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSl9aWYodHlwZW9mIGl0ZXJhYmxlLm5leHQ9PT1cImZ1bmN0aW9uXCIpe3JldHVybiBpdGVyYWJsZX1pZighaXNOYU4oaXRlcmFibGUubGVuZ3RoKSl7dmFyIGk9LTEsbmV4dD1mdW5jdGlvbiBuZXh0KCl7d2hpbGUoKytpPGl0ZXJhYmxlLmxlbmd0aCl7aWYoaGFzT3duLmNhbGwoaXRlcmFibGUsaSkpe25leHQudmFsdWU9aXRlcmFibGVbaV07bmV4dC5kb25lPWZhbHNlO3JldHVybiBuZXh0fX1uZXh0LnZhbHVlPXVuZGVmaW5lZDtuZXh0LmRvbmU9dHJ1ZTtyZXR1cm4gbmV4dH07cmV0dXJuIG5leHQubmV4dD1uZXh0fX1yZXR1cm57bmV4dDpkb25lUmVzdWx0fX1ydW50aW1lLnZhbHVlcz12YWx1ZXM7ZnVuY3Rpb24gZG9uZVJlc3VsdCgpe3JldHVybnt2YWx1ZTp1bmRlZmluZWQsZG9uZTp0cnVlfX1Db250ZXh0LnByb3RvdHlwZT17Y29uc3RydWN0b3I6Q29udGV4dCxyZXNldDpmdW5jdGlvbigpe3RoaXMucHJldj0wO3RoaXMubmV4dD0wO3RoaXMuc2VudD11bmRlZmluZWQ7dGhpcy5kb25lPWZhbHNlO3RoaXMuZGVsZWdhdGU9bnVsbDt0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtmb3IodmFyIHRlbXBJbmRleD0wLHRlbXBOYW1lO2hhc093bi5jYWxsKHRoaXMsdGVtcE5hbWU9XCJ0XCIrdGVtcEluZGV4KXx8dGVtcEluZGV4PDIwOysrdGVtcEluZGV4KXt0aGlzW3RlbXBOYW1lXT1udWxsfX0sc3RvcDpmdW5jdGlvbigpe3RoaXMuZG9uZT10cnVlO3ZhciByb290RW50cnk9dGhpcy50cnlFbnRyaWVzWzBdO3ZhciByb290UmVjb3JkPXJvb3RFbnRyeS5jb21wbGV0aW9uO2lmKHJvb3RSZWNvcmQudHlwZT09PVwidGhyb3dcIil7dGhyb3cgcm9vdFJlY29yZC5hcmd9cmV0dXJuIHRoaXMucnZhbH0sZGlzcGF0Y2hFeGNlcHRpb246ZnVuY3Rpb24oZXhjZXB0aW9uKXtpZih0aGlzLmRvbmUpe3Rocm93IGV4Y2VwdGlvbn12YXIgY29udGV4dD10aGlzO2Z1bmN0aW9uIGhhbmRsZShsb2MsY2F1Z2h0KXtyZWNvcmQudHlwZT1cInRocm93XCI7cmVjb3JkLmFyZz1leGNlcHRpb247Y29udGV4dC5uZXh0PWxvYztyZXR1cm4hIWNhdWdodH1mb3IodmFyIGk9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO2k+PTA7LS1pKXt2YXIgZW50cnk9dGhpcy50cnlFbnRyaWVzW2ldO3ZhciByZWNvcmQ9ZW50cnkuY29tcGxldGlvbjtpZihlbnRyeS50cnlMb2M9PT1cInJvb3RcIil7cmV0dXJuIGhhbmRsZShcImVuZFwiKX1pZihlbnRyeS50cnlMb2M8PXRoaXMucHJldil7dmFyIGhhc0NhdGNoPWhhc093bi5jYWxsKGVudHJ5LFwiY2F0Y2hMb2NcIik7dmFyIGhhc0ZpbmFsbHk9aGFzT3duLmNhbGwoZW50cnksXCJmaW5hbGx5TG9jXCIpO2lmKGhhc0NhdGNoJiZoYXNGaW5hbGx5KXtpZih0aGlzLnByZXY8ZW50cnkuY2F0Y2hMb2Mpe3JldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsdHJ1ZSl9ZWxzZSBpZih0aGlzLnByZXY8ZW50cnkuZmluYWxseUxvYyl7cmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKX19ZWxzZSBpZihoYXNDYXRjaCl7aWYodGhpcy5wcmV2PGVudHJ5LmNhdGNoTG9jKXtyZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLHRydWUpfX1lbHNlIGlmKGhhc0ZpbmFsbHkpe2lmKHRoaXMucHJldjxlbnRyeS5maW5hbGx5TG9jKXtyZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpfX1lbHNle3Rocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpfX19fSxhYnJ1cHQ6ZnVuY3Rpb24odHlwZSxhcmcpe2Zvcih2YXIgaT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7aT49MDstLWkpe3ZhciBlbnRyeT10aGlzLnRyeUVudHJpZXNbaV07aWYoZW50cnkudHJ5TG9jPD10aGlzLnByZXYmJmhhc093bi5jYWxsKGVudHJ5LFwiZmluYWxseUxvY1wiKSYmdGhpcy5wcmV2PGVudHJ5LmZpbmFsbHlMb2Mpe3ZhciBmaW5hbGx5RW50cnk9ZW50cnk7YnJlYWt9fWlmKGZpbmFsbHlFbnRyeSYmKHR5cGU9PT1cImJyZWFrXCJ8fHR5cGU9PT1cImNvbnRpbnVlXCIpJiZmaW5hbGx5RW50cnkudHJ5TG9jPD1hcmcmJmFyZzxmaW5hbGx5RW50cnkuZmluYWxseUxvYyl7ZmluYWxseUVudHJ5PW51bGx9dmFyIHJlY29yZD1maW5hbGx5RW50cnk/ZmluYWxseUVudHJ5LmNvbXBsZXRpb246e307cmVjb3JkLnR5cGU9dHlwZTtyZWNvcmQuYXJnPWFyZztpZihmaW5hbGx5RW50cnkpe3RoaXMubmV4dD1maW5hbGx5RW50cnkuZmluYWxseUxvY31lbHNle3RoaXMuY29tcGxldGUocmVjb3JkKX1yZXR1cm4gQ29udGludWVTZW50aW5lbH0sY29tcGxldGU6ZnVuY3Rpb24ocmVjb3JkLGFmdGVyTG9jKXtpZihyZWNvcmQudHlwZT09PVwidGhyb3dcIil7dGhyb3cgcmVjb3JkLmFyZ31pZihyZWNvcmQudHlwZT09PVwiYnJlYWtcInx8cmVjb3JkLnR5cGU9PT1cImNvbnRpbnVlXCIpe3RoaXMubmV4dD1yZWNvcmQuYXJnfWVsc2UgaWYocmVjb3JkLnR5cGU9PT1cInJldHVyblwiKXt0aGlzLnJ2YWw9cmVjb3JkLmFyZzt0aGlzLm5leHQ9XCJlbmRcIn1lbHNlIGlmKHJlY29yZC50eXBlPT09XCJub3JtYWxcIiYmYWZ0ZXJMb2Mpe3RoaXMubmV4dD1hZnRlckxvY31yZXR1cm4gQ29udGludWVTZW50aW5lbH0sZmluaXNoOmZ1bmN0aW9uKGZpbmFsbHlMb2Mpe2Zvcih2YXIgaT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7aT49MDstLWkpe3ZhciBlbnRyeT10aGlzLnRyeUVudHJpZXNbaV07aWYoZW50cnkuZmluYWxseUxvYz09PWZpbmFsbHlMb2Mpe3JldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sZW50cnkuYWZ0ZXJMb2MpfX19LFwiY2F0Y2hcIjpmdW5jdGlvbih0cnlMb2Mpe2Zvcih2YXIgaT10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7aT49MDstLWkpe3ZhciBlbnRyeT10aGlzLnRyeUVudHJpZXNbaV07aWYoZW50cnkudHJ5TG9jPT09dHJ5TG9jKXt2YXIgcmVjb3JkPWVudHJ5LmNvbXBsZXRpb247aWYocmVjb3JkLnR5cGU9PT1cInRocm93XCIpe3ZhciB0aHJvd249cmVjb3JkLmFyZztyZXNldFRyeUVudHJ5KGVudHJ5KX1yZXR1cm4gdGhyb3dufX10aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIil9LGRlbGVnYXRlWWllbGQ6ZnVuY3Rpb24oaXRlcmFibGUscmVzdWx0TmFtZSxuZXh0TG9jKXt0aGlzLmRlbGVnYXRlPXtpdGVyYXRvcjp2YWx1ZXMoaXRlcmFibGUpLHJlc3VsdE5hbWU6cmVzdWx0TmFtZSxuZXh0TG9jOm5leHRMb2N9O3JldHVybiBDb250aW51ZVNlbnRpbmVsfX19KHR5cGVvZiBnbG9iYWw9PT1cIm9iamVjdFwiP2dsb2JhbDp0eXBlb2Ygd2luZG93PT09XCJvYmplY3RcIj93aW5kb3c6dGhpcyl9KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCE9PVwidW5kZWZpbmVkXCI/Z2xvYmFsOnR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIj9zZWxmOnR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiP3dpbmRvdzp7fSl9LHt9XX0se30sWzFdKTtcbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWlZV0psYkdsbWVTOXViMlJsWDIxdlpIVnNaWE12WW1GaVpXd3RZMjl5WlM5aWNtOTNjMlZ5TFhCdmJIbG1hV3hzTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN1FVRkJRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnWlNoMExHNHNjaWw3Wm5WdVkzUnBiMjRnY3lodkxIVXBlMmxtS0NGdVcyOWRLWHRwWmlnaGRGdHZYU2w3ZG1GeUlHRTlkSGx3Wlc5bUlISmxjWFZwY21VOVBWd2lablZ1WTNScGIyNWNJaVltY21WeGRXbHlaVHRwWmlnaGRTWW1ZU2x5WlhSMWNtNGdZU2h2TENFd0tUdHBaaWhwS1hKbGRIVnliaUJwS0c4c0lUQXBPM1poY2lCbVBXNWxkeUJGY25KdmNpaGNJa05oYm01dmRDQm1hVzVrSUcxdlpIVnNaU0FuWENJcmJ5dGNJaWRjSWlrN2RHaHliM2NnWmk1amIyUmxQVndpVFU5RVZVeEZYMDVQVkY5R1QxVk9SRndpTEdaOWRtRnlJR3c5Ymx0dlhUMTdaWGh3YjNKMGN6cDdmWDA3ZEZ0dlhWc3dYUzVqWVd4c0tHd3VaWGh3YjNKMGN5eG1kVzVqZEdsdmJpaGxLWHQyWVhJZ2JqMTBXMjlkV3pGZFcyVmRPM0psZEhWeWJpQnpLRzQvYmpwbEtYMHNiQ3hzTG1WNGNHOXlkSE1zWlN4MExHNHNjaWw5Y21WMGRYSnVJRzViYjEwdVpYaHdiM0owYzMxMllYSWdhVDEwZVhCbGIyWWdjbVZ4ZFdseVpUMDlYQ0ptZFc1amRHbHZibHdpSmlaeVpYRjFhWEpsTzJadmNpaDJZWElnYnowd08yODhjaTVzWlc1bmRHZzdieXNyS1hNb2NsdHZYU2s3Y21WMGRYSnVJSE45S1NoN01UcGJablZ1WTNScGIyNG9jbVZ4ZFdseVpTeHRiMlIxYkdVc1pYaHdiM0owY3lsN0tHWjFibU4wYVc5dUtHZHNiMkpoYkNsN1hDSjFjMlVnYzNSeWFXTjBYQ0k3YVdZb1oyeHZZbUZzTGw5aVlXSmxiRkJ2YkhsbWFXeHNLWHQwYUhKdmR5QnVaWGNnUlhKeWIzSW9YQ0p2Ym14NUlHOXVaU0JwYm5OMFlXNWpaU0J2WmlCaVlXSmxiQzl3YjJ4NVptbHNiQ0JwY3lCaGJHeHZkMlZrWENJcGZXZHNiMkpoYkM1ZlltRmlaV3hRYjJ4NVptbHNiRDEwY25WbE8zSmxjWFZwY21Vb1hDSmpiM0psTFdwekwzTm9hVzFjSWlrN2NtVnhkV2x5WlNoY0luSmxaMlZ1WlhKaGRHOXlMV0poWW1Wc0wzSjFiblJwYldWY0lpbDlLUzVqWVd4c0tIUm9hWE1zZEhsd1pXOW1JR2RzYjJKaGJDRTlQVndpZFc1a1pXWnBibVZrWENJL1oyeHZZbUZzT25SNWNHVnZaaUJ6Wld4bUlUMDlYQ0oxYm1SbFptbHVaV1JjSWo5elpXeG1PblI1Y0dWdlppQjNhVzVrYjNjaFBUMWNJblZ1WkdWbWFXNWxaRndpUDNkcGJtUnZkenA3ZlNsOUxIdGNJbU52Y21VdGFuTXZjMmhwYlZ3aU9qSXNYQ0p5WldkbGJtVnlZWFJ2Y2kxaVlXSmxiQzl5ZFc1MGFXMWxYQ0k2TTMxZExESTZXMloxYm1OMGFXOXVLSEpsY1hWcGNtVXNiVzlrZFd4bExHVjRjRzl5ZEhNcGV5Rm1kVzVqZEdsdmJpaG5iRzlpWVd3c1puSmhiV1YzYjNKckxIVnVaR1ZtYVc1bFpDbDdYQ0oxYzJVZ2MzUnlhV04wWENJN2RtRnlJRTlDU2tWRFZEMWNJazlpYW1WamRGd2lMRVpWVGtOVVNVOU9QVndpUm5WdVkzUnBiMjVjSWl4QlVsSkJXVDFjSWtGeWNtRjVYQ0lzVTFSU1NVNUhQVndpVTNSeWFXNW5YQ0lzVGxWTlFrVlNQVndpVG5WdFltVnlYQ0lzVWtWSFJWaFFQVndpVW1WblJYaHdYQ0lzUkVGVVJUMWNJa1JoZEdWY0lpeE5RVkE5WENKTllYQmNJaXhUUlZROVhDSlRaWFJjSWl4WFJVRkxUVUZRUFZ3aVYyVmhhMDFoY0Z3aUxGZEZRVXRUUlZROVhDSlhaV0ZyVTJWMFhDSXNVMWxOUWs5TVBWd2lVM2x0WW05c1hDSXNVRkpQVFVsVFJUMWNJbEJ5YjIxcGMyVmNJaXhOUVZSSVBWd2lUV0YwYUZ3aUxFRlNSMVZOUlU1VVV6MWNJa0Z5WjNWdFpXNTBjMXdpTEZCU1QxUlBWRmxRUlQxY0luQnliM1J2ZEhsd1pWd2lMRU5QVGxOVVVsVkRWRTlTUFZ3aVkyOXVjM1J5ZFdOMGIzSmNJaXhVVDE5VFZGSkpUa2M5WENKMGIxTjBjbWx1WjF3aUxGUlBYMU5VVWtsT1IxOVVRVWM5VkU5ZlUxUlNTVTVISzF3aVZHRm5YQ0lzVkU5ZlRFOURRVXhGUFZ3aWRHOU1iMk5oYkdWVGRISnBibWRjSWl4SVFWTmZUMWRPUFZ3aWFHRnpUM2R1VUhKdmNHVnlkSGxjSWl4R1QxSmZSVUZEU0QxY0ltWnZja1ZoWTJoY0lpeEpWRVZTUVZSUFVqMWNJbWwwWlhKaGRHOXlYQ0lzUmtaZlNWUkZVa0ZVVDFJOVhDSkFRRndpSzBsVVJWSkJWRTlTTEZCU1QwTkZVMU05WENKd2NtOWpaWE56WENJc1ExSkZRVlJGWDBWTVJVMUZUbFE5WENKamNtVmhkR1ZGYkdWdFpXNTBYQ0lzUm5WdVkzUnBiMjQ5WjJ4dlltRnNXMFpWVGtOVVNVOU9YU3hQWW1wbFkzUTlaMnh2WW1Gc1cwOUNTa1ZEVkYwc1FYSnlZWGs5WjJ4dlltRnNXMEZTVWtGWlhTeFRkSEpwYm1jOVoyeHZZbUZzVzFOVVVrbE9SMTBzVG5WdFltVnlQV2RzYjJKaGJGdE9WVTFDUlZKZExGSmxaMFY0Y0QxbmJHOWlZV3hiVWtWSFJWaFFYU3hFWVhSbFBXZHNiMkpoYkZ0RVFWUkZYU3hOWVhBOVoyeHZZbUZzVzAxQlVGMHNVMlYwUFdkc2IySmhiRnRUUlZSZExGZGxZV3ROWVhBOVoyeHZZbUZzVzFkRlFVdE5RVkJkTEZkbFlXdFRaWFE5WjJ4dlltRnNXMWRGUVV0VFJWUmRMRk41YldKdmJEMW5iRzlpWVd4YlUxbE5RazlNWFN4TllYUm9QV2RzYjJKaGJGdE5RVlJJWFN4VWVYQmxSWEp5YjNJOVoyeHZZbUZzTGxSNWNHVkZjbkp2Y2l4U1lXNW5aVVZ5Y205eVBXZHNiMkpoYkM1U1lXNW5aVVZ5Y205eUxITmxkRlJwYldWdmRYUTlaMnh2WW1Gc0xuTmxkRlJwYldWdmRYUXNjMlYwU1cxdFpXUnBZWFJsUFdkc2IySmhiQzV6WlhSSmJXMWxaR2xoZEdVc1kyeGxZWEpKYlcxbFpHbGhkR1U5WjJ4dlltRnNMbU5zWldGeVNXMXRaV1JwWVhSbExIQmhjbk5sU1c1MFBXZHNiMkpoYkM1d1lYSnpaVWx1ZEN4cGMwWnBibWwwWlQxbmJHOWlZV3d1YVhOR2FXNXBkR1VzY0hKdlkyVnpjejFuYkc5aVlXeGJVRkpQUTBWVFUxMHNibVY0ZEZScFkyczljSEp2WTJWemN5WW1jSEp2WTJWemN5NXVaWGgwVkdsamF5eGtiMk4xYldWdWREMW5iRzlpWVd3dVpHOWpkVzFsYm5Rc2FIUnRiRDFrYjJOMWJXVnVkQ1ltWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMRzVoZG1sbllYUnZjajFuYkc5aVlXd3VibUYyYVdkaGRHOXlMR1JsWm1sdVpUMW5iRzlpWVd3dVpHVm1hVzVsTEdOdmJuTnZiR1U5WjJ4dlltRnNMbU52Ym5OdmJHVjhmSHQ5TEVGeWNtRjVVSEp2ZEc4OVFYSnlZWGxiVUZKUFZFOVVXVkJGWFN4UFltcGxZM1JRY205MGJ6MVBZbXBsWTNSYlVGSlBWRTlVV1ZCRlhTeEdkVzVqZEdsdmJsQnliM1J2UFVaMWJtTjBhVzl1VzFCU1QxUlBWRmxRUlYwc1NXNW1hVzVwZEhrOU1TOHdMRVJQVkQxY0lpNWNJanRtZFc1amRHbHZiaUJwYzA5aWFtVmpkQ2hwZENsN2NtVjBkWEp1SUdsMElUMDliblZzYkNZbUtIUjVjR1Z2WmlCcGREMDlYQ0p2WW1wbFkzUmNJbng4ZEhsd1pXOW1JR2wwUFQxY0ltWjFibU4wYVc5dVhDSXBmV1oxYm1OMGFXOXVJR2x6Um5WdVkzUnBiMjRvYVhRcGUzSmxkSFZ5YmlCMGVYQmxiMllnYVhROVBWd2lablZ1WTNScGIyNWNJbjEyWVhJZ2FYTk9ZWFJwZG1VOVkzUjRLQzh1THk1MFpYTjBMQzljWEZ0dVlYUnBkbVVnWTI5a1pWeGNYVnhjY3lwY1hIMWNYSE1xSkM4c01TazdkbUZ5SUhSdlUzUnlhVzVuUFU5aWFtVmpkRkJ5YjNSdlcxUlBYMU5VVWtsT1IxMDdablZ1WTNScGIyNGdjMlYwVkc5VGRISnBibWRVWVdjb2FYUXNkR0ZuTEhOMFlYUXBlMmxtS0dsMEppWWhhR0Z6S0dsMFBYTjBZWFEvYVhRNmFYUmJVRkpQVkU5VVdWQkZYU3hUV1UxQ1QweGZWRUZIS1Nsb2FXUmtaVzRvYVhRc1UxbE5RazlNWDFSQlJ5eDBZV2NwZldaMWJtTjBhVzl1SUdOdlppaHBkQ2w3Y21WMGRYSnVJSFJ2VTNSeWFXNW5MbU5oYkd3b2FYUXBMbk5zYVdObEtEZ3NMVEVwZldaMWJtTjBhVzl1SUdOc1lYTnpiMllvYVhRcGUzWmhjaUJQTEZRN2NtVjBkWEp1SUdsMFBUMTFibVJsWm1sdVpXUS9hWFE5UFQxMWJtUmxabWx1WldRL1hDSlZibVJsWm1sdVpXUmNJanBjSWs1MWJHeGNJanAwZVhCbGIyWW9WRDBvVHoxUFltcGxZM1FvYVhRcEtWdFRXVTFDVDB4ZlZFRkhYU2s5UFZ3aWMzUnlhVzVuWENJL1ZEcGpiMllvVHlsOWRtRnlJR05oYkd3OVJuVnVZM1JwYjI1UWNtOTBieTVqWVd4c0xHRndjR3g1UFVaMWJtTjBhVzl1VUhKdmRHOHVZWEJ3Ykhrc1VrVkdSVkpGVGtORlgwZEZWRHRtZFc1amRHbHZiaUJ3WVhKMEtDbDdkbUZ5SUdadVBXRnpjMlZ5ZEVaMWJtTjBhVzl1S0hSb2FYTXBMR3hsYm1kMGFEMWhjbWQxYldWdWRITXViR1Z1WjNSb0xHRnlaM005UVhKeVlYa29iR1Z1WjNSb0tTeHBQVEFzWHoxd1lYUm9MbDhzYUc5c1pHVnlQV1poYkhObE8zZG9hV3hsS0d4bGJtZDBhRDVwS1dsbUtDaGhjbWR6VzJsZFBXRnlaM1Z0Wlc1MGMxdHBLeXRkS1QwOVBWOHBhRzlzWkdWeVBYUnlkV1U3Y21WMGRYSnVJR1oxYm1OMGFXOXVLQ2w3ZG1GeUlIUm9ZWFE5ZEdocGN5eGZiR1Z1WjNSb1BXRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnc2FUMHdMR285TUN4ZllYSm5jenRwWmlnaGFHOXNaR1Z5SmlZaFgyeGxibWQwYUNseVpYUjFjbTRnYVc1MmIydGxLR1p1TEdGeVozTXNkR2hoZENrN1gyRnlaM005WVhKbmN5NXpiR2xqWlNncE8ybG1LR2h2YkdSbGNpbG1iM0lvTzJ4bGJtZDBhRDVwTzJrckt5bHBaaWhmWVhKbmMxdHBYVDA5UFY4cFgyRnlaM05iYVYwOVlYSm5kVzFsYm5Selcyb3JLMTA3ZDJocGJHVW9YMnhsYm1kMGFENXFLVjloY21kekxuQjFjMmdvWVhKbmRXMWxiblJ6VzJvcksxMHBPM0psZEhWeWJpQnBiblp2YTJVb1ptNHNYMkZ5WjNNc2RHaGhkQ2w5ZldaMWJtTjBhVzl1SUdOMGVDaG1iaXgwYUdGMExHeGxibWQwYUNsN1lYTnpaWEowUm5WdVkzUnBiMjRvWm00cE8ybG1LSDVzWlc1bmRHZ21KblJvWVhROVBUMTFibVJsWm1sdVpXUXBjbVYwZFhKdUlHWnVPM04zYVhSamFDaHNaVzVuZEdncGUyTmhjMlVnTVRweVpYUjFjbTRnWm5WdVkzUnBiMjRvWVNsN2NtVjBkWEp1SUdadUxtTmhiR3dvZEdoaGRDeGhLWDA3WTJGelpTQXlPbkpsZEhWeWJpQm1kVzVqZEdsdmJpaGhMR0lwZTNKbGRIVnliaUJtYmk1allXeHNLSFJvWVhRc1lTeGlLWDA3WTJGelpTQXpPbkpsZEhWeWJpQm1kVzVqZEdsdmJpaGhMR0lzWXlsN2NtVjBkWEp1SUdadUxtTmhiR3dvZEdoaGRDeGhMR0lzWXlsOWZYSmxkSFZ5YmlCbWRXNWpkR2x2YmlncGUzSmxkSFZ5YmlCbWJpNWhjSEJzZVNoMGFHRjBMR0Z5WjNWdFpXNTBjeWw5ZldaMWJtTjBhVzl1SUdsdWRtOXJaU2htYml4aGNtZHpMSFJvWVhRcGUzWmhjaUIxYmoxMGFHRjBQVDA5ZFc1a1pXWnBibVZrTzNOM2FYUmphQ2hoY21kekxteGxibWQwYUh3d0tYdGpZWE5sSURBNmNtVjBkWEp1SUhWdVAyWnVLQ2s2Wm00dVkyRnNiQ2gwYUdGMEtUdGpZWE5sSURFNmNtVjBkWEp1SUhWdVAyWnVLR0Z5WjNOYk1GMHBPbVp1TG1OaGJHd29kR2hoZEN4aGNtZHpXekJkS1R0allYTmxJREk2Y21WMGRYSnVJSFZ1UDJadUtHRnlaM05iTUYwc1lYSm5jMXN4WFNrNlptNHVZMkZzYkNoMGFHRjBMR0Z5WjNOYk1GMHNZWEpuYzFzeFhTazdZMkZ6WlNBek9uSmxkSFZ5YmlCMWJqOW1iaWhoY21keld6QmRMR0Z5WjNOYk1WMHNZWEpuYzFzeVhTazZabTR1WTJGc2JDaDBhR0YwTEdGeVozTmJNRjBzWVhKbmMxc3hYU3hoY21keld6SmRLVHRqWVhObElEUTZjbVYwZFhKdUlIVnVQMlp1S0dGeVozTmJNRjBzWVhKbmMxc3hYU3hoY21keld6SmRMR0Z5WjNOYk0xMHBPbVp1TG1OaGJHd29kR2hoZEN4aGNtZHpXekJkTEdGeVozTmJNVjBzWVhKbmMxc3lYU3hoY21keld6TmRLVHRqWVhObElEVTZjbVYwZFhKdUlIVnVQMlp1S0dGeVozTmJNRjBzWVhKbmMxc3hYU3hoY21keld6SmRMR0Z5WjNOYk0xMHNZWEpuYzFzMFhTazZabTR1WTJGc2JDaDBhR0YwTEdGeVozTmJNRjBzWVhKbmMxc3hYU3hoY21keld6SmRMR0Z5WjNOYk0xMHNZWEpuYzFzMFhTbDljbVYwZFhKdUlHWnVMbUZ3Y0d4NUtIUm9ZWFFzWVhKbmN5bDlkbUZ5SUdOeVpXRjBaVDFQWW1wbFkzUXVZM0psWVhSbExHZGxkRkJ5YjNSdmRIbHdaVTltUFU5aWFtVmpkQzVuWlhSUWNtOTBiM1I1Y0dWUFppeHpaWFJRY205MGIzUjVjR1ZQWmoxUFltcGxZM1F1YzJWMFVISnZkRzkwZVhCbFQyWXNaR1ZtYVc1bFVISnZjR1Z5ZEhrOVQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVMR1JsWm1sdVpWQnliM0JsY25ScFpYTTlUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblJwWlhNc1oyVjBUM2R1UkdWelkzSnBjSFJ2Y2oxUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbEVaWE5qY21sd2RHOXlMR2RsZEV0bGVYTTlUMkpxWldOMExtdGxlWE1zWjJWMFRtRnRaWE05VDJKcVpXTjBMbWRsZEU5M2JsQnliM0JsY25SNVRtRnRaWE1zWjJWMFUzbHRZbTlzY3oxUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbFRlVzFpYjJ4ekxHbHpSbkp2ZW1WdVBVOWlhbVZqZEM1cGMwWnliM3BsYml4b1lYTTlZM1I0S0dOaGJHd3NUMkpxWldOMFVISnZkRzliU0VGVFgwOVhUbDBzTWlrc1JWTTFUMkpxWldOMFBVOWlhbVZqZEN4RWFXTjBPMloxYm1OMGFXOXVJSFJ2VDJKcVpXTjBLR2wwS1h0eVpYUjFjbTRnUlZNMVQySnFaV04wS0dGemMyVnlkRVJsWm1sdVpXUW9hWFFwS1gxbWRXNWpkR2x2YmlCeVpYUjFjbTVKZENocGRDbDdjbVYwZFhKdUlHbDBmV1oxYm1OMGFXOXVJSEpsZEhWeWJsUm9hWE1vS1h0eVpYUjFjbTRnZEdocGMzMW1kVzVqZEdsdmJpQm5aWFFvYjJKcVpXTjBMR3RsZVNsN2FXWW9hR0Z6S0c5aWFtVmpkQ3hyWlhrcEtYSmxkSFZ5YmlCdlltcGxZM1JiYTJWNVhYMW1kVzVqZEdsdmJpQnZkMjVMWlhsektHbDBLWHRoYzNObGNuUlBZbXBsWTNRb2FYUXBPM0psZEhWeWJpQm5aWFJUZVcxaWIyeHpQMmRsZEU1aGJXVnpLR2wwS1M1amIyNWpZWFFvWjJWMFUzbHRZbTlzY3locGRDa3BPbWRsZEU1aGJXVnpLR2wwS1gxMllYSWdZWE56YVdkdVBVOWlhbVZqZEM1aGMzTnBaMjU4ZkdaMWJtTjBhVzl1S0hSaGNtZGxkQ3h6YjNWeVkyVXBlM1poY2lCVVBVOWlhbVZqZENoaGMzTmxjblJFWldacGJtVmtLSFJoY21kbGRDa3BMR3c5WVhKbmRXMWxiblJ6TG14bGJtZDBhQ3hwUFRFN2QyaHBiR1VvYkQ1cEtYdDJZWElnVXoxRlV6VlBZbXBsWTNRb1lYSm5kVzFsYm5Selcya3JLMTBwTEd0bGVYTTlaMlYwUzJWNWN5aFRLU3hzWlc1bmRHZzlhMlY1Y3k1c1pXNW5kR2dzYWowd0xHdGxlVHQzYUdsc1pTaHNaVzVuZEdnK2FpbFVXMnRsZVQxclpYbHpXMm9ySzExZFBWTmJhMlY1WFgxeVpYUjFjbTRnVkgwN1puVnVZM1JwYjI0Z2EyVjVUMllvYjJKcVpXTjBMR1ZzS1h0MllYSWdUejEwYjA5aWFtVmpkQ2h2WW1wbFkzUXBMR3RsZVhNOVoyVjBTMlY1Y3loUEtTeHNaVzVuZEdnOWEyVjVjeTVzWlc1bmRHZ3NhVzVrWlhnOU1DeHJaWGs3ZDJocGJHVW9iR1Z1WjNSb1BtbHVaR1Y0S1dsbUtFOWJhMlY1UFd0bGVYTmJhVzVrWlhncksxMWRQVDA5Wld3cGNtVjBkWEp1SUd0bGVYMW1kVzVqZEdsdmJpQmhjbkpoZVNocGRDbDdjbVYwZFhKdUlGTjBjbWx1WnlocGRDa3VjM0JzYVhRb1hDSXNYQ0lwZlhaaGNpQndkWE5vUFVGeWNtRjVVSEp2ZEc4dWNIVnphQ3gxYm5Ob2FXWjBQVUZ5Y21GNVVISnZkRzh1ZFc1emFHbG1kQ3h6YkdsalpUMUJjbkpoZVZCeWIzUnZMbk5zYVdObExITndiR2xqWlQxQmNuSmhlVkJ5YjNSdkxuTndiR2xqWlN4cGJtUmxlRTltUFVGeWNtRjVVSEp2ZEc4dWFXNWtaWGhQWml4bWIzSkZZV05vUFVGeWNtRjVVSEp2ZEc5YlJrOVNYMFZCUTBoZE8yWjFibU4wYVc5dUlHTnlaV0YwWlVGeWNtRjVUV1YwYUc5a0tIUjVjR1VwZTNaaGNpQnBjMDFoY0QxMGVYQmxQVDB4TEdselJtbHNkR1Z5UFhSNWNHVTlQVElzYVhOVGIyMWxQWFI1Y0dVOVBUTXNhWE5GZG1WeWVUMTBlWEJsUFQwMExHbHpSbWx1WkVsdVpHVjRQWFI1Y0dVOVBUWXNibTlvYjJ4bGN6MTBlWEJsUFQwMWZIeHBjMFpwYm1SSmJtUmxlRHR5WlhSMWNtNGdablZ1WTNScGIyNG9ZMkZzYkdKaFkydG1iaWw3ZG1GeUlFODlUMkpxWldOMEtHRnpjMlZ5ZEVSbFptbHVaV1FvZEdocGN5a3BMSFJvWVhROVlYSm5kVzFsYm5Seld6RmRMSE5sYkdZOVJWTTFUMkpxWldOMEtFOHBMR1k5WTNSNEtHTmhiR3hpWVdOclptNHNkR2hoZEN3ektTeHNaVzVuZEdnOWRHOU1aVzVuZEdnb2MyVnNaaTVzWlc1bmRHZ3BMR2x1WkdWNFBUQXNjbVZ6ZFd4MFBXbHpUV0Z3UDBGeWNtRjVLR3hsYm1kMGFDazZhWE5HYVd4MFpYSS9XMTA2ZFc1a1pXWnBibVZrTEhaaGJDeHlaWE03Wm05eUtEdHNaVzVuZEdnK2FXNWtaWGc3YVc1a1pYZ3JLeWxwWmlodWIyaHZiR1Z6Zkh4cGJtUmxlQ0JwYmlCelpXeG1LWHQyWVd3OWMyVnNabHRwYm1SbGVGMDdjbVZ6UFdZb2RtRnNMR2x1WkdWNExFOHBPMmxtS0hSNWNHVXBlMmxtS0dselRXRndLWEpsYzNWc2RGdHBibVJsZUYwOWNtVnpPMlZzYzJVZ2FXWW9jbVZ6S1hOM2FYUmphQ2gwZVhCbEtYdGpZWE5sSURNNmNtVjBkWEp1SUhSeWRXVTdZMkZ6WlNBMU9uSmxkSFZ5YmlCMllXdzdZMkZ6WlNBMk9uSmxkSFZ5YmlCcGJtUmxlRHRqWVhObElESTZjbVZ6ZFd4MExuQjFjMmdvZG1Gc0tYMWxiSE5sSUdsbUtHbHpSWFpsY25rcGNtVjBkWEp1SUdaaGJITmxmWDF5WlhSMWNtNGdhWE5HYVc1a1NXNWtaWGcvTFRFNmFYTlRiMjFsZkh4cGMwVjJaWEo1UDJselJYWmxjbms2Y21WemRXeDBmWDFtZFc1amRHbHZiaUJqY21WaGRHVkJjbkpoZVVOdmJuUmhhVzV6S0dselEyOXVkR0ZwYm5NcGUzSmxkSFZ5YmlCbWRXNWpkR2x2YmlobGJDbDdkbUZ5SUU4OWRHOVBZbXBsWTNRb2RHaHBjeWtzYkdWdVozUm9QWFJ2VEdWdVozUm9LRTh1YkdWdVozUm9LU3hwYm1SbGVEMTBiMGx1WkdWNEtHRnlaM1Z0Wlc1MGMxc3hYU3hzWlc1bmRHZ3BPMmxtS0dselEyOXVkR0ZwYm5NbUptVnNJVDFsYkNsN1ptOXlLRHRzWlc1bmRHZythVzVrWlhnN2FXNWtaWGdyS3lscFppaHpZVzFsVG1GT0tFOWJhVzVrWlhoZEtTbHlaWFIxY200Z2FYTkRiMjUwWVdsdWMzeDhhVzVrWlhoOVpXeHpaU0JtYjNJb08yeGxibWQwYUQ1cGJtUmxlRHRwYm1SbGVDc3JLV2xtS0dselEyOXVkR0ZwYm5OOGZHbHVaR1Y0SUdsdUlFOHBlMmxtS0U5YmFXNWtaWGhkUFQwOVpXd3BjbVYwZFhKdUlHbHpRMjl1ZEdGcGJuTjhmR2x1WkdWNGZYSmxkSFZ5YmlGcGMwTnZiblJoYVc1ekppWXRNWDE5Wm5WdVkzUnBiMjRnWjJWdVpYSnBZeWhCTEVJcGUzSmxkSFZ5YmlCMGVYQmxiMllnUVQwOVhDSm1kVzVqZEdsdmJsd2lQMEU2UW4xMllYSWdUVUZZWDFOQlJrVmZTVTVVUlVkRlVqMDVNREEzTVRrNU1qVTBOelF3T1RreExIQnZkejFOWVhSb0xuQnZkeXhoWW5NOVRXRjBhQzVoWW5Nc1kyVnBiRDFOWVhSb0xtTmxhV3dzWm14dmIzSTlUV0YwYUM1bWJHOXZjaXh0WVhnOVRXRjBhQzV0WVhnc2JXbHVQVTFoZEdndWJXbHVMSEpoYm1SdmJUMU5ZWFJvTG5KaGJtUnZiU3gwY25WdVl6MU5ZWFJvTG5SeWRXNWpmSHhtZFc1amRHbHZiaWhwZENsN2NtVjBkWEp1S0dsMFBqQS9abXh2YjNJNlkyVnBiQ2tvYVhRcGZUdG1kVzVqZEdsdmJpQnpZVzFsVG1GT0tHNTFiV0psY2lsN2NtVjBkWEp1SUc1MWJXSmxjaUU5Ym5WdFltVnlmV1oxYm1OMGFXOXVJSFJ2U1c1MFpXZGxjaWhwZENsN2NtVjBkWEp1SUdselRtRk9LR2wwS1Q4d09uUnlkVzVqS0dsMEtYMW1kVzVqZEdsdmJpQjBiMHhsYm1kMGFDaHBkQ2w3Y21WMGRYSnVJR2wwUGpBL2JXbHVLSFJ2U1c1MFpXZGxjaWhwZENrc1RVRllYMU5CUmtWZlNVNVVSVWRGVWlrNk1IMW1kVzVqZEdsdmJpQjBiMGx1WkdWNEtHbHVaR1Y0TEd4bGJtZDBhQ2w3ZG1GeUlHbHVaR1Y0UFhSdlNXNTBaV2RsY2locGJtUmxlQ2s3Y21WMGRYSnVJR2x1WkdWNFBEQS9iV0Y0S0dsdVpHVjRLMnhsYm1kMGFDd3dLVHB0YVc0b2FXNWtaWGdzYkdWdVozUm9LWDFtZFc1amRHbHZiaUJzZWlodWRXMHBlM0psZEhWeWJpQnVkVzArT1Q5dWRXMDZYQ0l3WENJcmJuVnRmV1oxYm1OMGFXOXVJR055WldGMFpWSmxjR3hoWTJWeUtISmxaMFY0Y0N4eVpYQnNZV05sTEdselUzUmhkR2xqS1h0MllYSWdjbVZ3YkdGalpYSTlhWE5QWW1wbFkzUW9jbVZ3YkdGalpTay9ablZ1WTNScGIyNG9jR0Z5ZENsN2NtVjBkWEp1SUhKbGNHeGhZMlZiY0dGeWRGMTlPbkpsY0d4aFkyVTdjbVYwZFhKdUlHWjFibU4wYVc5dUtHbDBLWHR5WlhSMWNtNGdVM1J5YVc1bktHbHpVM1JoZEdsalAybDBPblJvYVhNcExuSmxjR3hoWTJVb2NtVm5SWGh3TEhKbGNHeGhZMlZ5S1gxOVpuVnVZM1JwYjI0Z1kzSmxZWFJsVUc5cGJuUkJkQ2gwYjFOMGNtbHVaeWw3Y21WMGRYSnVJR1oxYm1OMGFXOXVLSEJ2Y3lsN2RtRnlJSE05VTNSeWFXNW5LR0Z6YzJWeWRFUmxabWx1WldRb2RHaHBjeWtwTEdrOWRHOUpiblJsWjJWeUtIQnZjeWtzYkQxekxteGxibWQwYUN4aExHSTdhV1lvYVR3d2ZIeHBQajFzS1hKbGRIVnliaUIwYjFOMGNtbHVaejljSWx3aU9uVnVaR1ZtYVc1bFpEdGhQWE11WTJoaGNrTnZaR1ZCZENocEtUdHlaWFIxY200Z1lUdzFOVEk1Tm54OFlUNDFOak14T1h4OGFTc3hQVDA5Ykh4OEtHSTljeTVqYUdGeVEyOWtaVUYwS0drck1Ta3BQRFUyTXpJd2ZIeGlQalUzTXpRelAzUnZVM1J5YVc1blAzTXVZMmhoY2tGMEtHa3BPbUU2ZEc5VGRISnBibWMvY3k1emJHbGpaU2hwTEdrck1pazZLR0V0TlRVeU9UWThQREV3S1Nzb1lpMDFOak15TUNrck5qVTFNelo5ZlhaaGNpQlNSVVJWUTBWZlJWSlNUMUk5WENKU1pXUjFZMlVnYjJZZ1pXMXdkSGtnYjJKcVpXTjBJSGRwZEdnZ2JtOGdhVzVwZEdsaGJDQjJZV3gxWlZ3aU8yWjFibU4wYVc5dUlHRnpjMlZ5ZENoamIyNWthWFJwYjI0c2JYTm5NU3h0YzJjeUtYdHBaaWdoWTI5dVpHbDBhVzl1S1hSb2NtOTNJRlI1Y0dWRmNuSnZjaWh0YzJjeVAyMXpaekVyYlhObk1qcHRjMmN4S1gxbWRXNWpkR2x2YmlCaGMzTmxjblJFWldacGJtVmtLR2wwS1h0cFppaHBkRDA5ZFc1a1pXWnBibVZrS1hSb2NtOTNJRlI1Y0dWRmNuSnZjaWhjSWtaMWJtTjBhVzl1SUdOaGJHeGxaQ0J2YmlCdWRXeHNJRzl5SUhWdVpHVm1hVzVsWkZ3aUtUdHlaWFIxY200Z2FYUjlablZ1WTNScGIyNGdZWE56WlhKMFJuVnVZM1JwYjI0b2FYUXBlMkZ6YzJWeWRDaHBjMFoxYm1OMGFXOXVLR2wwS1N4cGRDeGNJaUJwY3lCdWIzUWdZU0JtZFc1amRHbHZiaUZjSWlrN2NtVjBkWEp1SUdsMGZXWjFibU4wYVc5dUlHRnpjMlZ5ZEU5aWFtVmpkQ2hwZENsN1lYTnpaWEowS0dselQySnFaV04wS0dsMEtTeHBkQ3hjSWlCcGN5QnViM1FnWVc0Z2IySnFaV04wSVZ3aUtUdHlaWFIxY200Z2FYUjlablZ1WTNScGIyNGdZWE56WlhKMFNXNXpkR0Z1WTJVb2FYUXNRMjl1YzNSeWRXTjBiM0lzYm1GdFpTbDdZWE56WlhKMEtHbDBJR2x1YzNSaGJtTmxiMllnUTI5dWMzUnlkV04wYjNJc2JtRnRaU3hjSWpvZ2RYTmxJSFJvWlNBbmJtVjNKeUJ2Y0dWeVlYUnZjaUZjSWlsOVpuVnVZM1JwYjI0Z1pHVnpZM0pwY0hSdmNpaGlhWFJ0WVhBc2RtRnNkV1VwZTNKbGRIVnlibnRsYm5WdFpYSmhZbXhsT2lFb1ltbDBiV0Z3SmpFcExHTnZibVpwWjNWeVlXSnNaVG9oS0dKcGRHMWhjQ1l5S1N4M2NtbDBZV0pzWlRvaEtHSnBkRzFoY0NZMEtTeDJZV3gxWlRwMllXeDFaWDE5Wm5WdVkzUnBiMjRnYzJsdGNHeGxVMlYwS0c5aWFtVmpkQ3hyWlhrc2RtRnNkV1VwZTI5aWFtVmpkRnRyWlhsZFBYWmhiSFZsTzNKbGRIVnliaUJ2WW1wbFkzUjlablZ1WTNScGIyNGdZM0psWVhSbFJHVm1hVzVsY2loaWFYUnRZWEFwZTNKbGRIVnliaUJFUlZORFAyWjFibU4wYVc5dUtHOWlhbVZqZEN4clpYa3NkbUZzZFdVcGUzSmxkSFZ5YmlCa1pXWnBibVZRY205d1pYSjBlU2h2WW1wbFkzUXNhMlY1TEdSbGMyTnlhWEIwYjNJb1ltbDBiV0Z3TEhaaGJIVmxLU2w5T25OcGJYQnNaVk5sZEgxbWRXNWpkR2x2YmlCMWFXUW9hMlY1S1h0eVpYUjFjbTRnVTFsTlFrOU1LMXdpS0Z3aUsydGxlU3RjSWlsZlhDSXJLQ3NyYzJsa0szSmhibVJ2YlNncEtWdFVUMTlUVkZKSlRrZGRLRE0yS1gxbWRXNWpkR2x2YmlCblpYUlhaV3hzUzI1dmQyNVRlVzFpYjJ3b2JtRnRaU3h6WlhSMFpYSXBlM0psZEhWeWJpQlRlVzFpYjJ3bUpsTjViV0p2YkZ0dVlXMWxYWHg4S0hObGRIUmxjajlUZVcxaWIydzZjMkZtWlZONWJXSnZiQ2tvVTFsTlFrOU1LMFJQVkN0dVlXMWxLWDEyWVhJZ1JFVlRRejBoSVdaMWJtTjBhVzl1S0NsN2RISjVlM0psZEhWeWJpQmtaV1pwYm1WUWNtOXdaWEowZVNoN2ZTeGNJbUZjSWl4N1oyVjBPbVoxYm1OMGFXOXVLQ2w3Y21WMGRYSnVJREo5ZlNrdVlUMDlNbjFqWVhSamFDaGxLWHQ5ZlNncExITnBaRDB3TEdocFpHUmxiajFqY21WaGRHVkVaV1pwYm1WeUtERXBMSE5sZEQxVGVXMWliMncvYzJsdGNHeGxVMlYwT21ocFpHUmxiaXh6WVdabFUzbHRZbTlzUFZONWJXSnZiSHg4ZFdsa08yWjFibU4wYVc5dUlHRnpjMmxuYmtocFpHUmxiaWgwWVhKblpYUXNjM0pqS1h0bWIzSW9kbUZ5SUd0bGVTQnBiaUJ6Y21NcGFHbGtaR1Z1S0hSaGNtZGxkQ3hyWlhrc2MzSmpXMnRsZVYwcE8zSmxkSFZ5YmlCMFlYSm5aWFI5ZG1GeUlGTlpUVUpQVEY5VlRsTkRUMUJCUWt4RlV6MW5aWFJYWld4c1MyNXZkMjVUZVcxaWIyd29YQ0oxYm5OamIzQmhZbXhsYzF3aUtTeEJjbkpoZVZWdWMyTnZjR0ZpYkdWelBVRnljbUY1VUhKdmRHOWJVMWxOUWs5TVgxVk9VME5QVUVGQ1RFVlRYWHg4ZTMwc1UxbE5RazlNWDFSQlJ6MW5aWFJYWld4c1MyNXZkMjVUZVcxaWIyd29WRTlmVTFSU1NVNUhYMVJCUnlrc1UxbE5RazlNWDFOUVJVTkpSVk05WjJWMFYyVnNiRXR1YjNkdVUzbHRZbTlzS0Z3aWMzQmxZMmxsYzF3aUtTeFRXVTFDVDB4ZlNWUkZVa0ZVVDFJN1puVnVZM1JwYjI0Z2MyVjBVM0JsWTJsbGN5aERLWHRwWmloRVJWTkRKaVlvWm5KaGJXVjNiM0pyZkh3aGFYTk9ZWFJwZG1Vb1F5a3BLV1JsWm1sdVpWQnliM0JsY25SNUtFTXNVMWxOUWs5TVgxTlFSVU5KUlZNc2UyTnZibVpwWjNWeVlXSnNaVHAwY25WbExHZGxkRHB5WlhSMWNtNVVhR2x6ZlNsOWRtRnlJRTVQUkVVOVkyOW1LSEJ5YjJObGMzTXBQVDFRVWs5RFJWTlRMR052Y21VOWUzMHNjR0YwYUQxbWNtRnRaWGR2Y21zL1oyeHZZbUZzT21OdmNtVXNiMnhrUFdkc2IySmhiQzVqYjNKbExHVjRjRzl5ZEVkc2IySmhiQ3hHVDFKRFJVUTlNU3hIVEU5Q1FVdzlNaXhUVkVGVVNVTTlOQ3hRVWs5VVR6MDRMRUpKVGtROU1UWXNWMUpCVUQwek1qdG1kVzVqZEdsdmJpQWtaR1ZtYVc1bEtIUjVjR1VzYm1GdFpTeHpiM1Z5WTJVcGUzWmhjaUJyWlhrc2IzZHVMRzkxZEN4bGVIQXNhWE5IYkc5aVlXdzlkSGx3WlNaSFRFOUNRVXdzZEdGeVoyVjBQV2x6UjJ4dlltRnNQMmRzYjJKaGJEcDBlWEJsSmxOVVFWUkpRejluYkc5aVlXeGJibUZ0WlYwNktHZHNiMkpoYkZ0dVlXMWxYWHg4VDJKcVpXTjBVSEp2ZEc4cFcxQlNUMVJQVkZsUVJWMHNaWGh3YjNKMGN6MXBjMGRzYjJKaGJEOWpiM0psT21OdmNtVmJibUZ0WlYxOGZDaGpiM0psVzI1aGJXVmRQWHQ5S1R0cFppaHBjMGRzYjJKaGJDbHpiM1Z5WTJVOWJtRnRaVHRtYjNJb2EyVjVJR2x1SUhOdmRYSmpaU2w3YjNkdVBTRW9kSGx3WlNaR1QxSkRSVVFwSmlaMFlYSm5aWFFtSm10bGVTQnBiaUIwWVhKblpYUW1KaWdoYVhOR2RXNWpkR2x2YmloMFlYSm5aWFJiYTJWNVhTbDhmR2x6VG1GMGFYWmxLSFJoY21kbGRGdHJaWGxkS1NrN2IzVjBQU2h2ZDI0L2RHRnlaMlYwT25OdmRYSmpaU2xiYTJWNVhUdHBaaWdoWm5KaGJXVjNiM0pySmlacGMwZHNiMkpoYkNZbUlXbHpSblZ1WTNScGIyNG9kR0Z5WjJWMFcydGxlVjBwS1dWNGNEMXpiM1Z5WTJWYmEyVjVYVHRsYkhObElHbG1LSFI1Y0dVbVFrbE9SQ1ltYjNkdUtXVjRjRDFqZEhnb2IzVjBMR2RzYjJKaGJDazdaV3h6WlNCcFppaDBlWEJsSmxkU1FWQW1KaUZtY21GdFpYZHZjbXNtSm5SaGNtZGxkRnRyWlhsZFBUMXZkWFFwZTJWNGNEMW1kVzVqZEdsdmJpaHdZWEpoYlNsN2NtVjBkWEp1SUhSb2FYTWdhVzV6ZEdGdVkyVnZaaUJ2ZFhRL2JtVjNJRzkxZENod1lYSmhiU2s2YjNWMEtIQmhjbUZ0S1gwN1pYaHdXMUJTVDFSUFZGbFFSVjA5YjNWMFcxQlNUMVJQVkZsUVJWMTlaV3h6WlNCbGVIQTlkSGx3WlNaUVVrOVVUeVltYVhOR2RXNWpkR2x2YmlodmRYUXBQMk4wZUNoallXeHNMRzkxZENrNmIzVjBPMmxtS0daeVlXMWxkMjl5YXlZbWRHRnlaMlYwSmlZaGIzZHVLWHRwWmlocGMwZHNiMkpoYkNsMFlYSm5aWFJiYTJWNVhUMXZkWFE3Wld4elpTQmtaV3hsZEdVZ2RHRnlaMlYwVzJ0bGVWMG1KbWhwWkdSbGJpaDBZWEpuWlhRc2EyVjVMRzkxZENsOWFXWW9aWGh3YjNKMGMxdHJaWGxkSVQxdmRYUXBhR2xrWkdWdUtHVjRjRzl5ZEhNc2EyVjVMR1Y0Y0NsOWZXbG1LSFI1Y0dWdlppQnRiMlIxYkdVaFBWd2lkVzVrWldacGJtVmtYQ0ltSm0xdlpIVnNaUzVsZUhCdmNuUnpLVzF2WkhWc1pTNWxlSEJ2Y25SelBXTnZjbVU3Wld4elpTQnBaaWhwYzBaMWJtTjBhVzl1S0dSbFptbHVaU2ttSm1SbFptbHVaUzVoYldRcFpHVm1hVzVsS0daMWJtTjBhVzl1S0NsN2NtVjBkWEp1SUdOdmNtVjlLVHRsYkhObElHVjRjRzl5ZEVkc2IySmhiRDEwY25WbE8ybG1LR1Y0Y0c5eWRFZHNiMkpoYkh4OFpuSmhiV1YzYjNKcktYdGpiM0psTG01dlEyOXVabXhwWTNROVpuVnVZM1JwYjI0b0tYdG5iRzlpWVd3dVkyOXlaVDF2YkdRN2NtVjBkWEp1SUdOdmNtVjlPMmRzYjJKaGJDNWpiM0psUFdOdmNtVjlVMWxOUWs5TVgwbFVSVkpCVkU5U1BXZGxkRmRsYkd4TGJtOTNibE41YldKdmJDaEpWRVZTUVZSUFVpazdkbUZ5SUVsVVJWSTljMkZtWlZONWJXSnZiQ2hjSW1sMFpYSmNJaWtzUzBWWlBURXNWa0ZNVlVVOU1peEpkR1Z5WVhSdmNuTTllMzBzU1hSbGNtRjBiM0pRY205MGIzUjVjR1U5ZTMwc1FsVkhSMWxmU1ZSRlVrRlVUMUpUUFZ3aWEyVjVjMXdpYVc0Z1FYSnlZWGxRY205MGJ5WW1JU2hjSW01bGVIUmNJbWx1VzEwdWEyVjVjeWdwS1R0elpYUkpkR1Z5WVhSdmNpaEpkR1Z5WVhSdmNsQnliM1J2ZEhsd1pTeHlaWFIxY201VWFHbHpLVHRtZFc1amRHbHZiaUJ6WlhSSmRHVnlZWFJ2Y2loUExIWmhiSFZsS1h0b2FXUmtaVzRvVHl4VFdVMUNUMHhmU1ZSRlVrRlVUMUlzZG1Gc2RXVXBPMFpHWDBsVVJWSkJWRTlTSUdsdUlFRnljbUY1VUhKdmRHOG1KbWhwWkdSbGJpaFBMRVpHWDBsVVJWSkJWRTlTTEhaaGJIVmxLWDFtZFc1amRHbHZiaUJqY21WaGRHVkpkR1Z5WVhSdmNpaERiMjV6ZEhKMVkzUnZjaXhPUVUxRkxHNWxlSFFzY0hKdmRHOHBlME52Ym5OMGNuVmpkRzl5VzFCU1QxUlBWRmxRUlYwOVkzSmxZWFJsS0hCeWIzUnZmSHhKZEdWeVlYUnZjbEJ5YjNSdmRIbHdaU3g3Ym1WNGREcGtaWE5qY21sd2RHOXlLREVzYm1WNGRDbDlLVHR6WlhSVWIxTjBjbWx1WjFSaFp5aERiMjV6ZEhKMVkzUnZjaXhPUVUxRksxd2lJRWwwWlhKaGRHOXlYQ0lwZldaMWJtTjBhVzl1SUdSbFptbHVaVWwwWlhKaGRHOXlLRU52Ym5OMGNuVmpkRzl5TEU1QlRVVXNkbUZzZFdVc1JFVkdRVlZNVkNsN2RtRnlJSEJ5YjNSdlBVTnZibk4wY25WamRHOXlXMUJTVDFSUFZGbFFSVjBzYVhSbGNqMW5aWFFvY0hKdmRHOHNVMWxOUWs5TVgwbFVSVkpCVkU5U0tYeDhaMlYwS0hCeWIzUnZMRVpHWDBsVVJWSkJWRTlTS1h4OFJFVkdRVlZNVkNZbVoyVjBLSEJ5YjNSdkxFUkZSa0ZWVEZRcGZIeDJZV3gxWlR0cFppaG1jbUZ0WlhkdmNtc3BlM05sZEVsMFpYSmhkRzl5S0hCeWIzUnZMR2wwWlhJcE8ybG1LR2wwWlhJaFBUMTJZV3gxWlNsN2RtRnlJR2wwWlhKUWNtOTBiejFuWlhSUWNtOTBiM1I1Y0dWUFppaHBkR1Z5TG1OaGJHd29ibVYzSUVOdmJuTjBjblZqZEc5eUtTazdjMlYwVkc5VGRISnBibWRVWVdjb2FYUmxjbEJ5YjNSdkxFNUJUVVVyWENJZ1NYUmxjbUYwYjNKY0lpeDBjblZsS1R0b1lYTW9jSEp2ZEc4c1JrWmZTVlJGVWtGVVQxSXBKaVp6WlhSSmRHVnlZWFJ2Y2locGRHVnlVSEp2ZEc4c2NtVjBkWEp1VkdocGN5bDlmVWwwWlhKaGRHOXljMXRPUVUxRlhUMXBkR1Z5TzBsMFpYSmhkRzl5YzF0T1FVMUZLMXdpSUVsMFpYSmhkRzl5WENKZFBYSmxkSFZ5YmxSb2FYTTdjbVYwZFhKdUlHbDBaWEo5Wm5WdVkzUnBiMjRnWkdWbWFXNWxVM1JrU1hSbGNtRjBiM0p6S0VKaGMyVXNUa0ZOUlN4RGIyNXpkSEoxWTNSdmNpeHVaWGgwTEVSRlJrRlZURlFzU1ZOZlUwVlVLWHRtZFc1amRHbHZiaUJqY21WaGRHVkpkR1Z5S0d0cGJtUXBlM0psZEhWeWJpQm1kVzVqZEdsdmJpZ3BlM0psZEhWeWJpQnVaWGNnUTI5dWMzUnlkV04wYjNJb2RHaHBjeXhyYVc1a0tYMTlZM0psWVhSbFNYUmxjbUYwYjNJb1EyOXVjM1J5ZFdOMGIzSXNUa0ZOUlN4dVpYaDBLVHQyWVhJZ1pXNTBjbWxsY3oxamNtVmhkR1ZKZEdWeUtFdEZXU3RXUVV4VlJTa3NkbUZzZFdWelBXTnlaV0YwWlVsMFpYSW9Wa0ZNVlVVcE8ybG1LRVJGUmtGVlRGUTlQVlpCVEZWRktYWmhiSFZsY3oxa1pXWnBibVZKZEdWeVlYUnZjaWhDWVhObExFNUJUVVVzZG1Gc2RXVnpMRndpZG1Gc2RXVnpYQ0lwTzJWc2MyVWdaVzUwY21sbGN6MWtaV1pwYm1WSmRHVnlZWFJ2Y2loQ1lYTmxMRTVCVFVVc1pXNTBjbWxsY3l4Y0ltVnVkSEpwWlhOY0lpazdhV1lvUkVWR1FWVk1WQ2w3SkdSbFptbHVaU2hRVWs5VVR5dEdUMUpEUlVRcVFsVkhSMWxmU1ZSRlVrRlVUMUpUTEU1QlRVVXNlMlZ1ZEhKcFpYTTZaVzUwY21sbGN5eHJaWGx6T2tsVFgxTkZWRDkyWVd4MVpYTTZZM0psWVhSbFNYUmxjaWhMUlZrcExIWmhiSFZsY3pwMllXeDFaWE45S1gxOVpuVnVZM1JwYjI0Z2FYUmxjbEpsYzNWc2RDaGtiMjVsTEhaaGJIVmxLWHR5WlhSMWNtNTdkbUZzZFdVNmRtRnNkV1VzWkc5dVpUb2hJV1J2Ym1WOWZXWjFibU4wYVc5dUlHbHpTWFJsY21GaWJHVW9hWFFwZTNaaGNpQlBQVTlpYW1WamRDaHBkQ2tzVTNsdFltOXNQV2RzYjJKaGJGdFRXVTFDVDB4ZExHaGhjMFY0ZEQwb1UzbHRZbTlzSmlaVGVXMWliMnhiU1ZSRlVrRlVUMUpkZkh4R1JsOUpWRVZTUVZSUFVpbHBiaUJQTzNKbGRIVnliaUJvWVhORmVIUjhmRk5aVFVKUFRGOUpWRVZTUVZSUFVpQnBiaUJQZkh4b1lYTW9TWFJsY21GMGIzSnpMR05zWVhOemIyWW9UeWtwZldaMWJtTjBhVzl1SUdkbGRFbDBaWEpoZEc5eUtHbDBLWHQyWVhJZ1UzbHRZbTlzUFdkc2IySmhiRnRUV1UxQ1QweGRMR1Y0ZEQxcGRGdFRlVzFpYjJ3bUpsTjViV0p2YkZ0SlZFVlNRVlJQVWwxOGZFWkdYMGxVUlZKQlZFOVNYU3huWlhSSmRHVnlQV1Y0ZEh4OGFYUmJVMWxOUWs5TVgwbFVSVkpCVkU5U1hYeDhTWFJsY21GMGIzSnpXMk5zWVhOemIyWW9hWFFwWFR0eVpYUjFjbTRnWVhOelpYSjBUMkpxWldOMEtHZGxkRWwwWlhJdVkyRnNiQ2hwZENrcGZXWjFibU4wYVc5dUlITjBaWEJEWVd4c0tHWnVMSFpoYkhWbExHVnVkSEpwWlhNcGUzSmxkSFZ5YmlCbGJuUnlhV1Z6UDJsdWRtOXJaU2htYml4MllXeDFaU2s2Wm00b2RtRnNkV1VwZldaMWJtTjBhVzl1SUdOb1pXTnJSR0Z1WjJWeVNYUmxja05zYjNOcGJtY29abTRwZTNaaGNpQmtZVzVuWlhJOWRISjFaVHQyWVhJZ1R6MTdibVY0ZERwbWRXNWpkR2x2YmlncGUzUm9jbTkzSURGOUxGd2ljbVYwZFhKdVhDSTZablZ1WTNScGIyNG9LWHRrWVc1blpYSTlabUZzYzJWOWZUdFBXMU5aVFVKUFRGOUpWRVZTUVZSUFVsMDljbVYwZFhKdVZHaHBjenQwY25sN1ptNG9UeWw5WTJGMFkyZ29aU2w3ZlhKbGRIVnliaUJrWVc1blpYSjlablZ1WTNScGIyNGdZMnh2YzJWSmRHVnlZWFJ2Y2locGRHVnlZWFJ2Y2lsN2RtRnlJSEpsZEQxcGRHVnlZWFJ2Y2x0Y0luSmxkSFZ5Ymx3aVhUdHBaaWh5WlhRaFBUMTFibVJsWm1sdVpXUXBjbVYwTG1OaGJHd29hWFJsY21GMGIzSXBmV1oxYm1OMGFXOXVJSE5oWm1WSmRHVnlRMnh2YzJVb1pYaGxZeXhwZEdWeVlYUnZjaWw3ZEhKNWUyVjRaV01vYVhSbGNtRjBiM0lwZldOaGRHTm9LR1VwZTJOc2IzTmxTWFJsY21GMGIzSW9hWFJsY21GMGIzSXBPM1JvY205M0lHVjlmV1oxYm1OMGFXOXVJR1p2Y2s5bUtHbDBaWEpoWW14bExHVnVkSEpwWlhNc1ptNHNkR2hoZENsN2MyRm1aVWwwWlhKRGJHOXpaU2htZFc1amRHbHZiaWhwZEdWeVlYUnZjaWw3ZG1GeUlHWTlZM1I0S0dadUxIUm9ZWFFzWlc1MGNtbGxjejh5T2pFcExITjBaWEE3ZDJocGJHVW9JU2h6ZEdWd1BXbDBaWEpoZEc5eUxtNWxlSFFvS1NrdVpHOXVaU2xwWmloemRHVndRMkZzYkNobUxITjBaWEF1ZG1Gc2RXVXNaVzUwY21sbGN5azlQVDFtWVd4elpTbDdjbVYwZFhKdUlHTnNiM05sU1hSbGNtRjBiM0lvYVhSbGNtRjBiM0lwZlgwc1oyVjBTWFJsY21GMGIzSW9hWFJsY21GaWJHVXBLWDBoWm5WdVkzUnBiMjRvVkVGSExGTjViV0p2YkZKbFoybHpkSEo1TEVGc2JGTjViV0p2YkhNc2MyVjBkR1Z5S1h0cFppZ2hhWE5PWVhScGRtVW9VM2x0WW05c0tTbDdVM2x0WW05c1BXWjFibU4wYVc5dUtHUmxjMk55YVhCMGFXOXVLWHRoYzNObGNuUW9JU2gwYUdseklHbHVjM1JoYm1ObGIyWWdVM2x0WW05c0tTeFRXVTFDVDB3clhDSWdhWE1nYm05MElHRWdYQ0lyUTA5T1UxUlNWVU5VVDFJcE8zWmhjaUIwWVdjOWRXbGtLR1JsYzJOeWFYQjBhVzl1S1N4emVXMDljMlYwS0dOeVpXRjBaU2hUZVcxaWIyeGJVRkpQVkU5VVdWQkZYU2tzVkVGSExIUmhaeWs3UVd4c1UzbHRZbTlzYzF0MFlXZGRQWE41YlR0RVJWTkRKaVp6WlhSMFpYSW1KbVJsWm1sdVpWQnliM0JsY25SNUtFOWlhbVZqZEZCeWIzUnZMSFJoWnl4N1kyOXVabWxuZFhKaFlteGxPblJ5ZFdVc2MyVjBPbVoxYm1OMGFXOXVLSFpoYkhWbEtYdG9hV1JrWlc0b2RHaHBjeXgwWVdjc2RtRnNkV1VwZlgwcE8zSmxkSFZ5YmlCemVXMTlPMmhwWkdSbGJpaFRlVzFpYjJ4YlVGSlBWRTlVV1ZCRlhTeFVUMTlUVkZKSlRrY3NablZ1WTNScGIyNG9LWHR5WlhSMWNtNGdkR2hwYzF0VVFVZGRmU2w5SkdSbFptbHVaU2hIVEU5Q1FVd3JWMUpCVUN4N1UzbHRZbTlzT2xONWJXSnZiSDBwTzNaaGNpQnplVzFpYjJ4VGRHRjBhV056UFh0Y0ltWnZjbHdpT21aMWJtTjBhVzl1S0d0bGVTbDdjbVYwZFhKdUlHaGhjeWhUZVcxaWIyeFNaV2RwYzNSeWVTeHJaWGtyUFZ3aVhDSXBQMU41YldKdmJGSmxaMmx6ZEhKNVcydGxlVjA2VTNsdFltOXNVbVZuYVhOMGNubGJhMlY1WFQxVGVXMWliMndvYTJWNUtYMHNhWFJsY21GMGIzSTZVMWxOUWs5TVgwbFVSVkpCVkU5U2ZIeG5aWFJYWld4c1MyNXZkMjVUZVcxaWIyd29TVlJGVWtGVVQxSXBMR3RsZVVadmNqcHdZWEowTG1OaGJHd29hMlY1VDJZc1UzbHRZbTlzVW1WbmFYTjBjbmtwTEhOd1pXTnBaWE02VTFsTlFrOU1YMU5RUlVOSlJWTXNkRzlUZEhKcGJtZFVZV2M2VTFsTlFrOU1YMVJCUnoxblpYUlhaV3hzUzI1dmQyNVRlVzFpYjJ3b1ZFOWZVMVJTU1U1SFgxUkJSeXgwY25WbEtTeDFibk5qYjNCaFlteGxjenBUV1UxQ1QweGZWVTVUUTA5UVFVSk1SVk1zY0hWeVpUcHpZV1psVTNsdFltOXNMSE5sZERwelpYUXNkWE5sVTJWMGRHVnlPbVoxYm1OMGFXOXVLQ2w3YzJWMGRHVnlQWFJ5ZFdWOUxIVnpaVk5wYlhCc1pUcG1kVzVqZEdsdmJpZ3BlM05sZEhSbGNqMW1ZV3h6WlgxOU8yWnZja1ZoWTJndVkyRnNiQ2hoY25KaGVTaGNJbWhoYzBsdWMzUmhibU5sTEdselEyOXVZMkYwVTNCeVpXRmtZV0pzWlN4dFlYUmphQ3h5WlhCc1lXTmxMSE5sWVhKamFDeHpjR3hwZEN4MGIxQnlhVzFwZEdsMlpWd2lLU3htZFc1amRHbHZiaWhwZENsN2MzbHRZbTlzVTNSaGRHbGpjMXRwZEYwOVoyVjBWMlZzYkV0dWIzZHVVM2x0WW05c0tHbDBLWDBwT3lSa1pXWnBibVVvVTFSQlZFbERMRk5aVFVKUFRDeHplVzFpYjJ4VGRHRjBhV056S1R0elpYUlViMU4wY21sdVoxUmhaeWhUZVcxaWIyd3NVMWxOUWs5TUtUc2taR1ZtYVc1bEtGTlVRVlJKUXl0R1QxSkRSVVFxSVdselRtRjBhWFpsS0ZONWJXSnZiQ2tzVDBKS1JVTlVMSHRuWlhSUGQyNVFjbTl3WlhKMGVVNWhiV1Z6T21aMWJtTjBhVzl1S0dsMEtYdDJZWElnYm1GdFpYTTlaMlYwVG1GdFpYTW9kRzlQWW1wbFkzUW9hWFFwS1N4eVpYTjFiSFE5VzEwc2EyVjVMR2s5TUR0M2FHbHNaU2h1WVcxbGN5NXNaVzVuZEdnK2FTbG9ZWE1vUVd4c1UzbHRZbTlzY3l4clpYazlibUZ0WlhOYmFTc3JYU2w4ZkhKbGMzVnNkQzV3ZFhOb0tHdGxlU2s3Y21WMGRYSnVJSEpsYzNWc2RIMHNaMlYwVDNkdVVISnZjR1Z5ZEhsVGVXMWliMnh6T21aMWJtTjBhVzl1S0dsMEtYdDJZWElnYm1GdFpYTTlaMlYwVG1GdFpYTW9kRzlQWW1wbFkzUW9hWFFwS1N4eVpYTjFiSFE5VzEwc2EyVjVMR2s5TUR0M2FHbHNaU2h1WVcxbGN5NXNaVzVuZEdnK2FTbG9ZWE1vUVd4c1UzbHRZbTlzY3l4clpYazlibUZ0WlhOYmFTc3JYU2ttSm5KbGMzVnNkQzV3ZFhOb0tFRnNiRk41YldKdmJITmJhMlY1WFNrN2NtVjBkWEp1SUhKbGMzVnNkSDE5S1R0elpYUlViMU4wY21sdVoxUmhaeWhOWVhSb0xFMUJWRWdzZEhKMVpTazdjMlYwVkc5VGRISnBibWRVWVdjb1oyeHZZbUZzTGtwVFQwNHNYQ0pLVTA5T1hDSXNkSEoxWlNsOUtITmhabVZUZVcxaWIyd29YQ0owWVdkY0lpa3NlMzBzZTMwc2RISjFaU2s3SVdaMWJtTjBhVzl1S0NsN2RtRnlJRzlpYW1WamRGTjBZWFJwWXoxN1lYTnphV2R1T21GemMybG5iaXhwY3pwbWRXNWpkR2x2YmloNExIa3BlM0psZEhWeWJpQjRQVDA5ZVQ5NElUMDlNSHg4TVM5NFBUMDlNUzk1T25naFBYZ21KbmtoUFhsOWZUdGNJbDlmY0hKdmRHOWZYMXdpYVc0Z1QySnFaV04wVUhKdmRHOG1KbVoxYm1OMGFXOXVLR0oxWjJkNUxITmxkQ2w3ZEhKNWUzTmxkRDFqZEhnb1kyRnNiQ3huWlhSUGQyNUVaWE5qY21sd2RHOXlLRTlpYW1WamRGQnliM1J2TEZ3aVgxOXdjbTkwYjE5ZlhDSXBMbk5sZEN3eUtUdHpaWFFvZTMwc1FYSnlZWGxRY205MGJ5bDlZMkYwWTJnb1pTbDdZblZuWjNrOWRISjFaWDF2WW1wbFkzUlRkR0YwYVdNdWMyVjBVSEp2ZEc5MGVYQmxUMlk5YzJWMFVISnZkRzkwZVhCbFQyWTljMlYwVUhKdmRHOTBlWEJsVDJaOGZHWjFibU4wYVc5dUtFOHNjSEp2ZEc4cGUyRnpjMlZ5ZEU5aWFtVmpkQ2hQS1R0aGMzTmxjblFvY0hKdmRHODlQVDF1ZFd4c2ZIeHBjMDlpYW1WamRDaHdjbTkwYnlrc2NISnZkRzhzWENJNklHTmhiaWQwSUhObGRDQmhjeUJ3Y205MGIzUjVjR1VoWENJcE8ybG1LR0oxWjJkNUtVOHVYMTl3Y205MGIxOWZQWEJ5YjNSdk8yVnNjMlVnYzJWMEtFOHNjSEp2ZEc4cE8zSmxkSFZ5YmlCUGZYMG9LVHNrWkdWbWFXNWxLRk5VUVZSSlF5eFBRa3BGUTFRc2IySnFaV04wVTNSaGRHbGpLWDBvS1RzaFpuVnVZM1JwYjI0b2RHMXdLWHQwYlhCYlUxbE5RazlNWDFSQlIxMDlSRTlVTzJsbUtHTnZaaWgwYlhBcElUMUVUMVFwYUdsa1pHVnVLRTlpYW1WamRGQnliM1J2TEZSUFgxTlVVa2xPUnl4bWRXNWpkR2x2YmlncGUzSmxkSFZ5Ymx3aVcyOWlhbVZqZENCY0lpdGpiR0Z6YzI5bUtIUm9hWE1wSzF3aVhWd2lmU2w5S0h0OUtUc2hablZ1WTNScGIyNG9LWHRtZFc1amRHbHZiaUIzY21Gd1QySnFaV04wVFdWMGFHOWtLR3RsZVN4TlQwUkZLWHQyWVhJZ1ptNDlUMkpxWldOMFcydGxlVjBzWlhod1BXTnZjbVZiVDBKS1JVTlVYVnRyWlhsZExHWTlNQ3h2UFh0OU8ybG1LQ0ZsZUhCOGZHbHpUbUYwYVhabEtHVjRjQ2twZTI5YmEyVjVYVDFOVDBSRlBUMHhQMloxYm1OMGFXOXVLR2wwS1h0eVpYUjFjbTRnYVhOUFltcGxZM1FvYVhRcFAyWnVLR2wwS1RwcGRIMDZUVTlFUlQwOU1qOW1kVzVqZEdsdmJpaHBkQ2w3Y21WMGRYSnVJR2x6VDJKcVpXTjBLR2wwS1Q5bWJpaHBkQ2s2ZEhKMVpYMDZUVTlFUlQwOU16OW1kVzVqZEdsdmJpaHBkQ2w3Y21WMGRYSnVJR2x6VDJKcVpXTjBLR2wwS1Q5bWJpaHBkQ2s2Wm1Gc2MyVjlPazFQUkVVOVBUUS9ablZ1WTNScGIyNG9hWFFzYTJWNUtYdHlaWFIxY200Z1ptNG9kRzlQWW1wbFkzUW9hWFFwTEd0bGVTbDlPbVoxYm1OMGFXOXVLR2wwS1h0eVpYUjFjbTRnWm00b2RHOVBZbXBsWTNRb2FYUXBLWDA3ZEhKNWUyWnVLRVJQVkNsOVkyRjBZMmdvWlNsN1pqMHhmU1JrWldacGJtVW9VMVJCVkVsREswWlBVa05GUkNwbUxFOUNTa1ZEVkN4dktYMTlkM0poY0U5aWFtVmpkRTFsZEdodlpDaGNJbVp5WldWNlpWd2lMREVwTzNkeVlYQlBZbXBsWTNSTlpYUm9iMlFvWENKelpXRnNYQ0lzTVNrN2QzSmhjRTlpYW1WamRFMWxkR2h2WkNoY0luQnlaWFpsYm5SRmVIUmxibk5wYjI1elhDSXNNU2s3ZDNKaGNFOWlhbVZqZEUxbGRHaHZaQ2hjSW1selJuSnZlbVZ1WENJc01pazdkM0poY0U5aWFtVmpkRTFsZEdodlpDaGNJbWx6VTJWaGJHVmtYQ0lzTWlrN2QzSmhjRTlpYW1WamRFMWxkR2h2WkNoY0ltbHpSWGgwWlc1emFXSnNaVndpTERNcE8zZHlZWEJQWW1wbFkzUk5aWFJvYjJRb1hDSm5aWFJQZDI1UWNtOXdaWEowZVVSbGMyTnlhWEIwYjNKY0lpdzBLVHQzY21Gd1QySnFaV04wVFdWMGFHOWtLRndpWjJWMFVISnZkRzkwZVhCbFQyWmNJaWs3ZDNKaGNFOWlhbVZqZEUxbGRHaHZaQ2hjSW10bGVYTmNJaWs3ZDNKaGNFOWlhbVZqZEUxbGRHaHZaQ2hjSW1kbGRFOTNibEJ5YjNCbGNuUjVUbUZ0WlhOY0lpbDlLQ2s3SVdaMWJtTjBhVzl1S0U1QlRVVXBlMDVCVFVVZ2FXNGdSblZ1WTNScGIyNVFjbTkwYjN4OFJFVlRReVltWkdWbWFXNWxVSEp2Y0dWeWRIa29SblZ1WTNScGIyNVFjbTkwYnl4T1FVMUZMSHRqYjI1bWFXZDFjbUZpYkdVNmRISjFaU3huWlhRNlpuVnVZM1JwYjI0b0tYdDJZWElnYldGMFkyZzlVM1J5YVc1bktIUm9hWE1wTG0xaGRHTm9LQzllWEZ4ekttWjFibU4wYVc5dUlDaGJYaUFvWFNvcEx5a3NibUZ0WlQxdFlYUmphRDl0WVhSamFGc3hYVHBjSWx3aU8yaGhjeWgwYUdsekxFNUJUVVVwZkh4a1pXWnBibVZRY205d1pYSjBlU2gwYUdsekxFNUJUVVVzWkdWelkzSnBjSFJ2Y2lnMUxHNWhiV1VwS1R0eVpYUjFjbTRnYm1GdFpYMHNjMlYwT21aMWJtTjBhVzl1S0haaGJIVmxLWHRvWVhNb2RHaHBjeXhPUVUxRktYeDhaR1ZtYVc1bFVISnZjR1Z5ZEhrb2RHaHBjeXhPUVUxRkxHUmxjMk55YVhCMGIzSW9NQ3gyWVd4MVpTa3BmWDBwZlNoY0ltNWhiV1ZjSWlrN1RuVnRZbVZ5S0Z3aU1HOHhYQ0lwSmlaT2RXMWlaWElvWENJd1lqRmNJaWw4ZkdaMWJtTjBhVzl1S0Y5T2RXMWlaWElzVG5WdFltVnlVSEp2ZEc4cGUyWjFibU4wYVc5dUlIUnZUblZ0WW1WeUtHbDBLWHRwWmlocGMwOWlhbVZqZENocGRDa3BhWFE5ZEc5UWNtbHRhWFJwZG1Vb2FYUXBPMmxtS0hSNWNHVnZaaUJwZEQwOVhDSnpkSEpwYm1kY0lpWW1hWFF1YkdWdVozUm9QakltSm1sMExtTm9ZWEpEYjJSbFFYUW9NQ2s5UFRRNEtYdDJZWElnWW1sdVlYSjVQV1poYkhObE8zTjNhWFJqYUNocGRDNWphR0Z5UTI5a1pVRjBLREVwS1h0allYTmxJRFkyT21OaGMyVWdPVGc2WW1sdVlYSjVQWFJ5ZFdVN1kyRnpaU0EzT1RwallYTmxJREV4TVRweVpYUjFjbTRnY0dGeWMyVkpiblFvYVhRdWMyeHBZMlVvTWlrc1ltbHVZWEo1UHpJNk9DbDlmWEpsZEhWeWJpdHBkSDFtZFc1amRHbHZiaUIwYjFCeWFXMXBkR2wyWlNocGRDbDdkbUZ5SUdadUxIWmhiRHRwWmlocGMwWjFibU4wYVc5dUtHWnVQV2wwTG5aaGJIVmxUMllwSmlZaGFYTlBZbXBsWTNRb2RtRnNQV1p1TG1OaGJHd29hWFFwS1NseVpYUjFjbTRnZG1Gc08ybG1LR2x6Um5WdVkzUnBiMjRvWm00OWFYUmJWRTlmVTFSU1NVNUhYU2ttSmlGcGMwOWlhbVZqZENoMllXdzlabTR1WTJGc2JDaHBkQ2twS1hKbGRIVnliaUIyWVd3N2RHaHliM2NnVkhsd1pVVnljbTl5S0Z3aVEyRnVKM1FnWTI5dWRtVnlkQ0J2WW1wbFkzUWdkRzhnYm5WdFltVnlYQ0lwZlU1MWJXSmxjajFtZFc1amRHbHZiaUJPZFcxaVpYSW9hWFFwZTNKbGRIVnliaUIwYUdseklHbHVjM1JoYm1ObGIyWWdUblZ0WW1WeVAyNWxkeUJmVG5WdFltVnlLSFJ2VG5WdFltVnlLR2wwS1NrNmRHOU9kVzFpWlhJb2FYUXBmVHRtYjNKRllXTm9MbU5oYkd3b1JFVlRRejluWlhST1lXMWxjeWhmVG5WdFltVnlLVHBoY25KaGVTaGNJazFCV0Y5V1FVeFZSU3hOU1U1ZlZrRk1WVVVzVG1GT0xFNUZSMEZVU1ZaRlgwbE9Sa2xPU1ZSWkxGQlBVMGxVU1ZaRlgwbE9Sa2xPU1ZSWlhDSXBMR1oxYm1OMGFXOXVLR3RsZVNsN2EyVjVJR2x1SUU1MWJXSmxjbng4WkdWbWFXNWxVSEp2Y0dWeWRIa29UblZ0WW1WeUxHdGxlU3huWlhSUGQyNUVaWE5qY21sd2RHOXlLRjlPZFcxaVpYSXNhMlY1S1NsOUtUdE9kVzFpWlhKYlVGSlBWRTlVV1ZCRlhUMU9kVzFpWlhKUWNtOTBienRPZFcxaVpYSlFjbTkwYjF0RFQwNVRWRkpWUTFSUFVsMDlUblZ0WW1WeU8yaHBaR1JsYmlobmJHOWlZV3dzVGxWTlFrVlNMRTUxYldKbGNpbDlLRTUxYldKbGNpeE9kVzFpWlhKYlVGSlBWRTlVV1ZCRlhTazdJV1oxYm1OMGFXOXVLR2x6U1c1MFpXZGxjaWw3SkdSbFptbHVaU2hUVkVGVVNVTXNUbFZOUWtWU0xIdEZVRk5KVEU5T09uQnZkeWd5TEMwMU1pa3NhWE5HYVc1cGRHVTZablZ1WTNScGIyNG9hWFFwZTNKbGRIVnliaUIwZVhCbGIyWWdhWFE5UFZ3aWJuVnRZbVZ5WENJbUptbHpSbWx1YVhSbEtHbDBLWDBzYVhOSmJuUmxaMlZ5T21selNXNTBaV2RsY2l4cGMwNWhUanB6WVcxbFRtRk9MR2x6VTJGbVpVbHVkR1ZuWlhJNlpuVnVZM1JwYjI0b2JuVnRZbVZ5S1h0eVpYUjFjbTRnYVhOSmJuUmxaMlZ5S0c1MWJXSmxjaWttSm1GaWN5aHVkVzFpWlhJcFBEMU5RVmhmVTBGR1JWOUpUbFJGUjBWU2ZTeE5RVmhmVTBGR1JWOUpUbFJGUjBWU09rMUJXRjlUUVVaRlgwbE9WRVZIUlZJc1RVbE9YMU5CUmtWZlNVNVVSVWRGVWpvdFRVRllYMU5CUmtWZlNVNVVSVWRGVWl4d1lYSnpaVVpzYjJGME9uQmhjbk5sUm14dllYUXNjR0Z5YzJWSmJuUTZjR0Z5YzJWSmJuUjlLWDBvVG5WdFltVnlMbWx6U1c1MFpXZGxjbng4Wm5WdVkzUnBiMjRvYVhRcGUzSmxkSFZ5YmlGcGMwOWlhbVZqZENocGRDa21KbWx6Um1sdWFYUmxLR2wwS1NZbVpteHZiM0lvYVhRcFBUMDlhWFI5S1RzaFpuVnVZM1JwYjI0b0tYdDJZWElnUlQxTllYUm9Ma1VzWlhod1BVMWhkR2d1Wlhod0xHeHZaejFOWVhSb0xteHZaeXh6Y1hKMFBVMWhkR2d1YzNGeWRDeHphV2R1UFUxaGRHZ3VjMmxuYm54OFpuVnVZM1JwYjI0b2VDbDdjbVYwZFhKdUtIZzlLM2dwUFQwd2ZIeDRJVDE0UDNnNmVEd3dQeTB4T2pGOU8yWjFibU4wYVc5dUlHRnphVzVvS0hncGUzSmxkSFZ5YmlGcGMwWnBibWwwWlNoNFBTdDRLWHg4ZUQwOU1EOTRPbmc4TUQ4dFlYTnBibWdvTFhncE9teHZaeWg0SzNOeGNuUW9lQ3A0S3pFcEtYMW1kVzVqZEdsdmJpQmxlSEJ0TVNoNEtYdHlaWFIxY200b2VEMHJlQ2s5UFRBL2VEcDRQaTB4WlMwMkppWjRQREZsTFRZL2VDdDRLbmd2TWpwbGVIQW9lQ2t0TVgwa1pHVm1hVzVsS0ZOVVFWUkpReXhOUVZSSUxIdGhZMjl6YURwbWRXNWpkR2x2YmloNEtYdHlaWFIxY200b2VEMHJlQ2s4TVQ5T1lVNDZhWE5HYVc1cGRHVW9lQ2svYkc5bktIZ3ZSU3R6Y1hKMEtIZ3JNU2txYzNGeWRDaDRMVEVwTDBVcEt6RTZlSDBzWVhOcGJtZzZZWE5wYm1nc1lYUmhibWc2Wm5WdVkzUnBiMjRvZUNsN2NtVjBkWEp1S0hnOUszZ3BQVDB3UDNnNmJHOW5LQ2d4SzNncEx5Z3hMWGdwS1M4eWZTeGpZbkowT21aMWJtTjBhVzl1S0hncGUzSmxkSFZ5YmlCemFXZHVLSGc5SzNncEtuQnZkeWhoWW5Nb2VDa3NNUzh6S1gwc1kyeDZNekk2Wm5WdVkzUnBiMjRvZUNsN2NtVjBkWEp1S0hnK1BqNDlNQ2svTXpJdGVGdFVUMTlUVkZKSlRrZGRLRElwTG14bGJtZDBhRG96TW4wc1kyOXphRHBtZFc1amRHbHZiaWg0S1h0eVpYUjFjbTRvWlhod0tIZzlLM2dwSzJWNGNDZ3RlQ2twTHpKOUxHVjRjRzB4T21WNGNHMHhMR1p5YjNWdVpEcG1kVzVqZEdsdmJpaDRLWHR5WlhSMWNtNGdibVYzSUVac2IyRjBNekpCY25KaGVTaGJlRjBwV3pCZGZTeG9lWEJ2ZERwbWRXNWpkR2x2YmloMllXeDFaVEVzZG1Gc2RXVXlLWHQyWVhJZ2MzVnRQVEFzYkdWdU1UMWhjbWQxYldWdWRITXViR1Z1WjNSb0xHeGxiakk5YkdWdU1TeGhjbWR6UFVGeWNtRjVLR3hsYmpFcExHeGhjbWM5TFVsdVptbHVhWFI1TEdGeVp6dDNhR2xzWlNoc1pXNHhMUzBwZTJGeVp6MWhjbWR6VzJ4bGJqRmRQU3RoY21kMWJXVnVkSE5iYkdWdU1WMDdhV1lvWVhKblBUMUpibVpwYm1sMGVYeDhZWEpuUFQwdFNXNW1hVzVwZEhrcGNtVjBkWEp1SUVsdVptbHVhWFI1TzJsbUtHRnlaejVzWVhKbktXeGhjbWM5WVhKbmZXeGhjbWM5WVhKbmZId3hPM2RvYVd4bEtHeGxiakl0TFNsemRXMHJQWEJ2ZHloaGNtZHpXMnhsYmpKZEwyeGhjbWNzTWlrN2NtVjBkWEp1SUd4aGNtY3FjM0Z5ZENoemRXMHBmU3hwYlhWc09tWjFibU4wYVc5dUtIZ3NlU2w3ZG1GeUlGVkpiblF4TmowMk5UVXpOU3g0YmowcmVDeDViajByZVN4NGJEMVZTVzUwTVRZbWVHNHNlV3c5VlVsdWRERTJKbmx1TzNKbGRIVnliaUF3Zkhoc0tubHNLeWdvVlVsdWRERTJKbmh1UGo0K01UWXBLbmxzSzNoc0tpaFZTVzUwTVRZbWVXNCtQajR4TmlrOFBERTJQajQrTUNsOUxHeHZaekZ3T21aMWJtTjBhVzl1S0hncGUzSmxkSFZ5YmloNFBTdDRLVDR0TVdVdE9DWW1lRHd4WlMwNFAzZ3RlQ3A0THpJNmJHOW5LREVyZUNsOUxHeHZaekV3T21aMWJtTjBhVzl1S0hncGUzSmxkSFZ5YmlCc2IyY29lQ2t2VFdGMGFDNU1UakV3ZlN4c2IyY3lPbVoxYm1OMGFXOXVLSGdwZTNKbGRIVnliaUJzYjJjb2VDa3ZUV0YwYUM1TVRqSjlMSE5wWjI0NmMybG5iaXh6YVc1b09tWjFibU4wYVc5dUtIZ3BlM0psZEhWeWJpQmhZbk1vZUQwcmVDazhNVDhvWlhod2JURW9lQ2t0Wlhod2JURW9MWGdwS1M4eU9paGxlSEFvZUMweEtTMWxlSEFvTFhndE1Ta3BLaWhGTHpJcGZTeDBZVzVvT21aMWJtTjBhVzl1S0hncGUzWmhjaUJoUFdWNGNHMHhLSGc5SzNncExHSTlaWGh3YlRFb0xYZ3BPM0psZEhWeWJpQmhQVDFKYm1acGJtbDBlVDh4T21JOVBVbHVabWx1YVhSNVB5MHhPaWhoTFdJcEx5aGxlSEFvZUNrclpYaHdLQzE0S1NsOUxIUnlkVzVqT25SeWRXNWpmU2w5S0NrN0lXWjFibU4wYVc5dUtHWnliMjFEYUdGeVEyOWtaU2w3Wm5WdVkzUnBiMjRnWVhOelpYSjBUbTkwVW1WblJYaHdLR2wwS1h0cFppaGpiMllvYVhRcFBUMVNSVWRGV0ZBcGRHaHliM2NnVkhsd1pVVnljbTl5S0NsOUpHUmxabWx1WlNoVFZFRlVTVU1zVTFSU1NVNUhMSHRtY205dFEyOWtaVkJ2YVc1ME9tWjFibU4wYVc5dUtIZ3BlM1poY2lCeVpYTTlXMTBzYkdWdVBXRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnc2FUMHdMR052WkdVN2QyaHBiR1VvYkdWdVBta3BlMk52WkdVOUsyRnlaM1Z0Wlc1MGMxdHBLeXRkTzJsbUtIUnZTVzVrWlhnb1kyOWtaU3d4TVRFME1URXhLU0U5UFdOdlpHVXBkR2h5YjNjZ1VtRnVaMlZGY25KdmNpaGpiMlJsSzF3aUlHbHpJRzV2ZENCaElIWmhiR2xrSUdOdlpHVWdjRzlwYm5SY0lpazdjbVZ6TG5CMWMyZ29ZMjlrWlR3Mk5UVXpOajltY205dFEyaGhja052WkdVb1kyOWtaU2s2Wm5KdmJVTm9ZWEpEYjJSbEtDZ29ZMjlrWlMwOU5qVTFNellwUGo0eE1Da3JOVFV5T1RZc1kyOWtaU1V4TURJMEt6VTJNekl3S1NsOWNtVjBkWEp1SUhKbGN5NXFiMmx1S0Z3aVhDSXBmU3h5WVhjNlpuVnVZM1JwYjI0b1kyRnNiRk5wZEdVcGUzWmhjaUJ5WVhjOWRHOVBZbXBsWTNRb1kyRnNiRk5wZEdVdWNtRjNLU3hzWlc0OWRHOU1aVzVuZEdnb2NtRjNMbXhsYm1kMGFDa3NjMnh1UFdGeVozVnRaVzUwY3k1c1pXNW5kR2dzY21WelBWdGRMR2s5TUR0M2FHbHNaU2hzWlc0K2FTbDdjbVZ6TG5CMWMyZ29VM1J5YVc1bktISmhkMXRwS3l0ZEtTazdhV1lvYVR4emJHNHBjbVZ6TG5CMWMyZ29VM1J5YVc1bktHRnlaM1Z0Wlc1MGMxdHBYU2twZlhKbGRIVnliaUJ5WlhNdWFtOXBiaWhjSWx3aUtYMTlLVHNrWkdWbWFXNWxLRkJTVDFSUExGTlVVa2xPUnl4N1kyOWtaVkJ2YVc1MFFYUTZZM0psWVhSbFVHOXBiblJCZENobVlXeHpaU2tzWlc1a2MxZHBkR2c2Wm5WdVkzUnBiMjRvYzJWaGNtTm9VM1J5YVc1bktYdGhjM05sY25ST2IzUlNaV2RGZUhBb2MyVmhjbU5vVTNSeWFXNW5LVHQyWVhJZ2RHaGhkRDFUZEhKcGJtY29ZWE56WlhKMFJHVm1hVzVsWkNoMGFHbHpLU2tzWlc1a1VHOXphWFJwYjI0OVlYSm5kVzFsYm5Seld6RmRMR3hsYmoxMGIweGxibWQwYUNoMGFHRjBMbXhsYm1kMGFDa3NaVzVrUFdWdVpGQnZjMmwwYVc5dVBUMDlkVzVrWldacGJtVmtQMnhsYmpwdGFXNG9kRzlNWlc1bmRHZ29aVzVrVUc5emFYUnBiMjRwTEd4bGJpazdjMlZoY21Ob1UzUnlhVzVuS3oxY0lsd2lPM0psZEhWeWJpQjBhR0YwTG5Oc2FXTmxLR1Z1WkMxelpXRnlZMmhUZEhKcGJtY3ViR1Z1WjNSb0xHVnVaQ2s5UFQxelpXRnlZMmhUZEhKcGJtZDlMR2x1WTJ4MVpHVnpPbVoxYm1OMGFXOXVLSE5sWVhKamFGTjBjbWx1WnlsN1lYTnpaWEowVG05MFVtVm5SWGh3S0hObFlYSmphRk4wY21sdVp5azdjbVYwZFhKdUlTRitVM1J5YVc1bktHRnpjMlZ5ZEVSbFptbHVaV1FvZEdocGN5a3BMbWx1WkdWNFQyWW9jMlZoY21Ob1UzUnlhVzVuTEdGeVozVnRaVzUwYzFzeFhTbDlMSEpsY0dWaGREcG1kVzVqZEdsdmJpaGpiM1Z1ZENsN2RtRnlJSE4wY2oxVGRISnBibWNvWVhOelpYSjBSR1ZtYVc1bFpDaDBhR2x6S1Nrc2NtVnpQVndpWENJc2JqMTBiMGx1ZEdWblpYSW9ZMjkxYm5RcE8ybG1LREErYm54OGJqMDlTVzVtYVc1cGRIa3BkR2h5YjNjZ1VtRnVaMlZGY25KdmNpaGNJa052ZFc1MElHTmhiaWQwSUdKbElHNWxaMkYwYVhabFhDSXBPMlp2Y2lnN2JqNHdPeWh1UGo0K1BURXBKaVlvYzNSeUt6MXpkSElwS1dsbUtHNG1NU2x5WlhNclBYTjBjanR5WlhSMWNtNGdjbVZ6ZlN4emRHRnlkSE5YYVhSb09tWjFibU4wYVc5dUtITmxZWEpqYUZOMGNtbHVaeWw3WVhOelpYSjBUbTkwVW1WblJYaHdLSE5sWVhKamFGTjBjbWx1WnlrN2RtRnlJSFJvWVhROVUzUnlhVzVuS0dGemMyVnlkRVJsWm1sdVpXUW9kR2hwY3lrcExHbHVaR1Y0UFhSdlRHVnVaM1JvS0cxcGJpaGhjbWQxYldWdWRITmJNVjBzZEdoaGRDNXNaVzVuZEdncEtUdHpaV0Z5WTJoVGRISnBibWNyUFZ3aVhDSTdjbVYwZFhKdUlIUm9ZWFF1YzJ4cFkyVW9hVzVrWlhnc2FXNWtaWGdyYzJWaGNtTm9VM1J5YVc1bkxteGxibWQwYUNrOVBUMXpaV0Z5WTJoVGRISnBibWQ5ZlNsOUtGTjBjbWx1Wnk1bWNtOXRRMmhoY2tOdlpHVXBPeUZtZFc1amRHbHZiaWdwZXlSa1pXWnBibVVvVTFSQlZFbERLMFpQVWtORlJDcGphR1ZqYTBSaGJtZGxja2wwWlhKRGJHOXphVzVuS0VGeWNtRjVMbVp5YjIwcExFRlNVa0ZaTEh0bWNtOXRPbVoxYm1OMGFXOXVLR0Z5Y21GNVRHbHJaU2w3ZG1GeUlFODlUMkpxWldOMEtHRnpjMlZ5ZEVSbFptbHVaV1FvWVhKeVlYbE1hV3RsS1Nrc2JXRndabTQ5WVhKbmRXMWxiblJ6V3pGZExHMWhjSEJwYm1jOWJXRndabTRoUFQxMWJtUmxabWx1WldRc1pqMXRZWEJ3YVc1blAyTjBlQ2h0WVhCbWJpeGhjbWQxYldWdWRITmJNbDBzTWlrNmRXNWtaV1pwYm1Wa0xHbHVaR1Y0UFRBc2JHVnVaM1JvTEhKbGMzVnNkQ3h6ZEdWd08ybG1LR2x6U1hSbGNtRmliR1VvVHlrcGUzSmxjM1ZzZEQxdVpYY29aMlZ1WlhKcFl5aDBhR2x6TEVGeWNtRjVLU2s3YzJGbVpVbDBaWEpEYkc5elpTaG1kVzVqZEdsdmJpaHBkR1Z5WVhSdmNpbDdabTl5S0RzaEtITjBaWEE5YVhSbGNtRjBiM0l1Ym1WNGRDZ3BLUzVrYjI1bE8ybHVaR1Y0S3lzcGUzSmxjM1ZzZEZ0cGJtUmxlRjA5YldGd2NHbHVaejltS0hOMFpYQXVkbUZzZFdVc2FXNWtaWGdwT25OMFpYQXVkbUZzZFdWOWZTeG5aWFJKZEdWeVlYUnZjaWhQS1NsOVpXeHpaWHR5WlhOMWJIUTlibVYzS0dkbGJtVnlhV01vZEdocGN5eEJjbkpoZVNrcEtHeGxibWQwYUQxMGIweGxibWQwYUNoUExteGxibWQwYUNrcE8yWnZjaWc3YkdWdVozUm9QbWx1WkdWNE8ybHVaR1Y0S3lzcGUzSmxjM1ZzZEZ0cGJtUmxlRjA5YldGd2NHbHVaejltS0U5YmFXNWtaWGhkTEdsdVpHVjRLVHBQVzJsdVpHVjRYWDE5Y21WemRXeDBMbXhsYm1kMGFEMXBibVJsZUR0eVpYUjFjbTRnY21WemRXeDBmWDBwT3lSa1pXWnBibVVvVTFSQlZFbERMRUZTVWtGWkxIdHZaanBtZFc1amRHbHZiaWdwZTNaaGNpQnBibVJsZUQwd0xHeGxibWQwYUQxaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvTEhKbGMzVnNkRDF1Wlhjb1oyVnVaWEpwWXloMGFHbHpMRUZ5Y21GNUtTa29iR1Z1WjNSb0tUdDNhR2xzWlNoc1pXNW5kR2crYVc1a1pYZ3BjbVZ6ZFd4MFcybHVaR1Y0WFQxaGNtZDFiV1Z1ZEhOYmFXNWtaWGdySzEwN2NtVnpkV3gwTG14bGJtZDBhRDFzWlc1bmRHZzdjbVYwZFhKdUlISmxjM1ZzZEgxOUtUdHpaWFJUY0dWamFXVnpLRUZ5Y21GNUtYMG9LVHNoWm5WdVkzUnBiMjRvS1hza1pHVm1hVzVsS0ZCU1QxUlBMRUZTVWtGWkxIdGpiM0I1VjJsMGFHbHVPbVoxYm1OMGFXOXVLSFJoY21kbGRDeHpkR0Z5ZENsN2RtRnlJRTg5VDJKcVpXTjBLR0Z6YzJWeWRFUmxabWx1WldRb2RHaHBjeWtwTEd4bGJqMTBiMHhsYm1kMGFDaFBMbXhsYm1kMGFDa3NkRzg5ZEc5SmJtUmxlQ2gwWVhKblpYUXNiR1Z1S1N4bWNtOXRQWFJ2U1c1a1pYZ29jM1JoY25Rc2JHVnVLU3hsYm1ROVlYSm5kVzFsYm5Seld6SmRMR1pwYmoxbGJtUTlQVDExYm1SbFptbHVaV1EvYkdWdU9uUnZTVzVrWlhnb1pXNWtMR3hsYmlrc1kyOTFiblE5YldsdUtHWnBiaTFtY205dExHeGxiaTEwYnlrc2FXNWpQVEU3YVdZb1puSnZiVHgwYnlZbWRHODhabkp2YlN0amIzVnVkQ2w3YVc1alBTMHhPMlp5YjIwOVpuSnZiU3RqYjNWdWRDMHhPM1J2UFhSdksyTnZkVzUwTFRGOWQyaHBiR1VvWTI5MWJuUXRMVDR3S1h0cFppaG1jbTl0SUdsdUlFOHBUMXQwYjEwOVQxdG1jbTl0WFR0bGJITmxJR1JsYkdWMFpTQlBXM1J2WFR0MGJ5czlhVzVqTzJaeWIyMHJQV2x1WTMxeVpYUjFjbTRnVDMwc1ptbHNiRHBtZFc1amRHbHZiaWgyWVd4MVpTbDdkbUZ5SUU4OVQySnFaV04wS0dGemMyVnlkRVJsWm1sdVpXUW9kR2hwY3lrcExHeGxibWQwYUQxMGIweGxibWQwYUNoUExteGxibWQwYUNrc2FXNWtaWGc5ZEc5SmJtUmxlQ2hoY21kMWJXVnVkSE5iTVYwc2JHVnVaM1JvS1N4bGJtUTlZWEpuZFcxbGJuUnpXekpkTEdWdVpGQnZjejFsYm1ROVBUMTFibVJsWm1sdVpXUS9iR1Z1WjNSb09uUnZTVzVrWlhnb1pXNWtMR3hsYm1kMGFDazdkMmhwYkdVb1pXNWtVRzl6UG1sdVpHVjRLVTliYVc1a1pYZ3JLMTA5ZG1Gc2RXVTdjbVYwZFhKdUlFOTlMR1pwYm1RNlkzSmxZWFJsUVhKeVlYbE5aWFJvYjJRb05Ta3NabWx1WkVsdVpHVjRPbU55WldGMFpVRnljbUY1VFdWMGFHOWtLRFlwZlNrN2FXWW9abkpoYldWM2IzSnJLWHRtYjNKRllXTm9MbU5oYkd3b1lYSnlZWGtvWENKbWFXNWtMR1pwYm1SSmJtUmxlQ3htYVd4c0xHTnZjSGxYYVhSb2FXNHNaVzUwY21sbGN5eHJaWGx6TEhaaGJIVmxjMXdpS1N4bWRXNWpkR2x2YmlocGRDbDdRWEp5WVhsVmJuTmpiM0JoWW14bGMxdHBkRjA5ZEhKMVpYMHBPMU5aVFVKUFRGOVZUbE5EVDFCQlFreEZVeUJwYmlCQmNuSmhlVkJ5YjNSdmZIeG9hV1JrWlc0b1FYSnlZWGxRY205MGJ5eFRXVTFDVDB4ZlZVNVRRMDlRUVVKTVJWTXNRWEp5WVhsVmJuTmpiM0JoWW14bGN5bDlmU2dwT3lGbWRXNWpkR2x2YmloaGRDbDdaR1ZtYVc1bFUzUmtTWFJsY21GMGIzSnpLRUZ5Y21GNUxFRlNVa0ZaTEdaMWJtTjBhVzl1S0dsMFpYSmhkR1ZrTEd0cGJtUXBlM05sZENoMGFHbHpMRWxVUlZJc2UyODZkRzlQWW1wbFkzUW9hWFJsY21GMFpXUXBMR2s2TUN4ck9tdHBibVI5S1gwc1puVnVZM1JwYjI0b0tYdDJZWElnYVhSbGNqMTBhR2x6VzBsVVJWSmRMRTg5YVhSbGNpNXZMR3RwYm1ROWFYUmxjaTVyTEdsdVpHVjRQV2wwWlhJdWFTc3JPMmxtS0NGUGZIeHBibVJsZUQ0OVR5NXNaVzVuZEdncGUybDBaWEl1YnoxMWJtUmxabWx1WldRN2NtVjBkWEp1SUdsMFpYSlNaWE4xYkhRb01TbDlhV1lvYTJsdVpEMDlTMFZaS1hKbGRIVnliaUJwZEdWeVVtVnpkV3gwS0RBc2FXNWtaWGdwTzJsbUtHdHBibVE5UFZaQlRGVkZLWEpsZEhWeWJpQnBkR1Z5VW1WemRXeDBLREFzVDF0cGJtUmxlRjBwTzNKbGRIVnliaUJwZEdWeVVtVnpkV3gwS0RBc1cybHVaR1Y0TEU5YmFXNWtaWGhkWFNsOUxGWkJURlZGS1R0SmRHVnlZWFJ2Y25OYlFWSkhWVTFGVGxSVFhUMUpkR1Z5WVhSdmNuTmJRVkpTUVZsZE8yUmxabWx1WlZOMFpFbDBaWEpoZEc5eWN5aFRkSEpwYm1jc1UxUlNTVTVITEdaMWJtTjBhVzl1S0dsMFpYSmhkR1ZrS1h0elpYUW9kR2hwY3l4SlZFVlNMSHR2T2xOMGNtbHVaeWhwZEdWeVlYUmxaQ2tzYVRvd2ZTbDlMR1oxYm1OMGFXOXVLQ2w3ZG1GeUlHbDBaWEk5ZEdocGMxdEpWRVZTWFN4UFBXbDBaWEl1Ynl4cGJtUmxlRDFwZEdWeUxta3NjRzlwYm5RN2FXWW9hVzVrWlhnK1BVOHViR1Z1WjNSb0tYSmxkSFZ5YmlCcGRHVnlVbVZ6ZFd4MEtERXBPM0J2YVc1MFBXRjBMbU5oYkd3b1R5eHBibVJsZUNrN2FYUmxjaTVwS3oxd2IybHVkQzVzWlc1bmRHZzdjbVYwZFhKdUlHbDBaWEpTWlhOMWJIUW9NQ3h3YjJsdWRDbDlLWDBvWTNKbFlYUmxVRzlwYm5SQmRDaDBjblZsS1NrN1JFVlRReVltSVdaMWJtTjBhVzl1S0ZKbFowVjRjRkJ5YjNSdkxGOVNaV2RGZUhBcGUybG1LQ0ZtZFc1amRHbHZiaWdwZTNSeWVYdHlaWFIxY200Z1VtVm5SWGh3S0M5aEwyY3NYQ0pwWENJcFBUMWNJaTloTDJsY0luMWpZWFJqYUNobEtYdDlmU2dwS1h0U1pXZEZlSEE5Wm5WdVkzUnBiMjRnVW1WblJYaHdLSEJoZEhSbGNtNHNabXhoWjNNcGUzSmxkSFZ5YmlCdVpYY2dYMUpsWjBWNGNDaGpiMllvY0dGMGRHVnliaWs5UFZKRlIwVllVQ1ltWm14aFozTWhQVDExYm1SbFptbHVaV1EvY0dGMGRHVnliaTV6YjNWeVkyVTZjR0YwZEdWeWJpeG1iR0ZuY3lsOU8yWnZja1ZoWTJndVkyRnNiQ2huWlhST1lXMWxjeWhmVW1WblJYaHdLU3htZFc1amRHbHZiaWhyWlhrcGUydGxlU0JwYmlCU1pXZEZlSEI4ZkdSbFptbHVaVkJ5YjNCbGNuUjVLRkpsWjBWNGNDeHJaWGtzZTJOdmJtWnBaM1Z5WVdKc1pUcDBjblZsTEdkbGREcG1kVzVqZEdsdmJpZ3BlM0psZEhWeWJpQmZVbVZuUlhod1cydGxlVjE5TEhObGREcG1kVzVqZEdsdmJpaHBkQ2w3WDFKbFowVjRjRnRyWlhsZFBXbDBmWDBwZlNrN1VtVm5SWGh3VUhKdmRHOWJRMDlPVTFSU1ZVTlVUMUpkUFZKbFowVjRjRHRTWldkRmVIQmJVRkpQVkU5VVdWQkZYVDFTWldkRmVIQlFjbTkwYnp0b2FXUmtaVzRvWjJ4dlltRnNMRkpGUjBWWVVDeFNaV2RGZUhBcGZXbG1LQzh1TDJjdVpteGhaM01oUFZ3aVoxd2lLV1JsWm1sdVpWQnliM0JsY25SNUtGSmxaMFY0Y0ZCeWIzUnZMRndpWm14aFozTmNJaXg3WTI5dVptbG5kWEpoWW14bE9uUnlkV1VzWjJWME9tTnlaV0YwWlZKbGNHeGhZMlZ5S0M5ZUxpcGNYQzhvWEZ4M0tpa2tMeXhjSWlReFhDSXBmU2s3YzJWMFUzQmxZMmxsY3loU1pXZEZlSEFwZlNoU1pXZEZlSEJiVUZKUFZFOVVXVkJGWFN4U1pXZEZlSEFwTzJselJuVnVZM1JwYjI0b2MyVjBTVzF0WldScFlYUmxLU1ltYVhOR2RXNWpkR2x2YmloamJHVmhja2x0YldWa2FXRjBaU2w4ZkdaMWJtTjBhVzl1S0U5T1VrVkJSRmxUVkVGVVJVTklRVTVIUlNsN2RtRnlJSEJ2YzNSTlpYTnpZV2RsUFdkc2IySmhiQzV3YjNOMFRXVnpjMkZuWlN4aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5UFdkc2IySmhiQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlMRTFsYzNOaFoyVkRhR0Z1Ym1Wc1BXZHNiMkpoYkM1TlpYTnpZV2RsUTJoaGJtNWxiQ3hqYjNWdWRHVnlQVEFzY1hWbGRXVTllMzBzWkdWbVpYSXNZMmhoYm01bGJDeHdiM0owTzNObGRFbHRiV1ZrYVdGMFpUMW1kVzVqZEdsdmJpaG1iaWw3ZG1GeUlHRnlaM005VzEwc2FUMHhPM2RvYVd4bEtHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnK2FTbGhjbWR6TG5CMWMyZ29ZWEpuZFcxbGJuUnpXMmtySzEwcE8zRjFaWFZsV3lzclkyOTFiblJsY2wwOVpuVnVZM1JwYjI0b0tYdHBiblp2YTJVb2FYTkdkVzVqZEdsdmJpaG1iaWsvWm00NlJuVnVZM1JwYjI0b1ptNHBMR0Z5WjNNcGZUdGtaV1psY2loamIzVnVkR1Z5S1R0eVpYUjFjbTRnWTI5MWJuUmxjbjA3WTJ4bFlYSkpiVzFsWkdsaGRHVTlablZ1WTNScGIyNG9hV1FwZTJSbGJHVjBaU0J4ZFdWMVpWdHBaRjE5TzJaMWJtTjBhVzl1SUhKMWJpaHBaQ2w3YVdZb2FHRnpLSEYxWlhWbExHbGtLU2w3ZG1GeUlHWnVQWEYxWlhWbFcybGtYVHRrWld4bGRHVWdjWFZsZFdWYmFXUmRPMlp1S0NsOWZXWjFibU4wYVc5dUlHeHBjM1J1WlhJb1pYWmxiblFwZTNKMWJpaGxkbVZ1ZEM1a1lYUmhLWDFwWmloT1QwUkZLWHRrWldabGNqMW1kVzVqZEdsdmJpaHBaQ2w3Ym1WNGRGUnBZMnNvY0dGeWRDNWpZV3hzS0hKMWJpeHBaQ2twZlgxbGJITmxJR2xtS0dGa1pFVjJaVzUwVEdsemRHVnVaWEltSm1selJuVnVZM1JwYjI0b2NHOXpkRTFsYzNOaFoyVXBKaVloWjJ4dlltRnNMbWx0Y0c5eWRGTmpjbWx3ZEhNcGUyUmxabVZ5UFdaMWJtTjBhVzl1S0dsa0tYdHdiM04wVFdWemMyRm5aU2hwWkN4Y0lpcGNJaWw5TzJGa1pFVjJaVzUwVEdsemRHVnVaWElvWENKdFpYTnpZV2RsWENJc2JHbHpkRzVsY2l4bVlXeHpaU2w5Wld4elpTQnBaaWhwYzBaMWJtTjBhVzl1S0UxbGMzTmhaMlZEYUdGdWJtVnNLU2w3WTJoaGJtNWxiRDF1WlhjZ1RXVnpjMkZuWlVOb1lXNXVaV3c3Y0c5eWREMWphR0Z1Ym1Wc0xuQnZjblF5TzJOb1lXNXVaV3d1Y0c5eWRERXViMjV0WlhOellXZGxQV3hwYzNSdVpYSTdaR1ZtWlhJOVkzUjRLSEJ2Y25RdWNHOXpkRTFsYzNOaFoyVXNjRzl5ZEN3eEtYMWxiSE5sSUdsbUtHUnZZM1Z0Wlc1MEppWlBUbEpGUVVSWlUxUkJWRVZEU0VGT1IwVWdhVzRnWkc5amRXMWxiblJiUTFKRlFWUkZYMFZNUlUxRlRsUmRLRndpYzJOeWFYQjBYQ0lwS1h0a1pXWmxjajFtZFc1amRHbHZiaWhwWkNsN2FIUnRiQzVoY0hCbGJtUkRhR2xzWkNoa2IyTjFiV1Z1ZEZ0RFVrVkJWRVZmUlV4RlRVVk9WRjBvWENKelkzSnBjSFJjSWlrcFcwOU9Va1ZCUkZsVFZFRlVSVU5JUVU1SFJWMDlablZ1WTNScGIyNG9LWHRvZEcxc0xuSmxiVzkyWlVOb2FXeGtLSFJvYVhNcE8zSjFiaWhwWkNsOWZYMWxiSE5sZTJSbFptVnlQV1oxYm1OMGFXOXVLR2xrS1h0elpYUlVhVzFsYjNWMEtISjFiaXd3TEdsa0tYMTlmU2hjSW05dWNtVmhaSGx6ZEdGMFpXTm9ZVzVuWlZ3aUtUc2taR1ZtYVc1bEtFZE1UMEpCVEN0Q1NVNUVMSHR6WlhSSmJXMWxaR2xoZEdVNmMyVjBTVzF0WldScFlYUmxMR05zWldGeVNXMXRaV1JwWVhSbE9tTnNaV0Z5U1cxdFpXUnBZWFJsZlNrN0lXWjFibU4wYVc5dUtGQnliMjFwYzJVc2RHVnpkQ2w3YVhOR2RXNWpkR2x2YmloUWNtOXRhWE5sS1NZbWFYTkdkVzVqZEdsdmJpaFFjbTl0YVhObExuSmxjMjlzZG1VcEppWlFjbTl0YVhObExuSmxjMjlzZG1Vb2RHVnpkRDF1WlhjZ1VISnZiV2x6WlNobWRXNWpkR2x2YmlncGUzMHBLVDA5ZEdWemRIeDhablZ1WTNScGIyNG9ZWE5oY0N4U1JVTlBVa1FwZTJaMWJtTjBhVzl1SUdselZHaGxibUZpYkdVb2FYUXBlM1poY2lCMGFHVnVPMmxtS0dselQySnFaV04wS0dsMEtTbDBhR1Z1UFdsMExuUm9aVzQ3Y21WMGRYSnVJR2x6Um5WdVkzUnBiMjRvZEdobGJpay9kR2hsYmpwbVlXeHpaWDFtZFc1amRHbHZiaUJvWVc1a2JHVmtVbVZxWldOMGFXOXVUM0pJWVhOUGJsSmxhbVZqZEdWa0tIQnliMjFwYzJVcGUzWmhjaUJ5WldOdmNtUTljSEp2YldselpWdFNSVU5QVWtSZExHTm9ZV2x1UFhKbFkyOXlaQzVqTEdrOU1DeHlaV0ZqZER0cFppaHlaV052Y21RdWFDbHlaWFIxY200Z2RISjFaVHQzYUdsc1pTaGphR0ZwYmk1c1pXNW5kR2crYVNsN2NtVmhZM1E5WTJoaGFXNWJhU3NyWFR0cFppaHlaV0ZqZEM1bVlXbHNmSHhvWVc1a2JHVmtVbVZxWldOMGFXOXVUM0pJWVhOUGJsSmxhbVZqZEdWa0tISmxZV04wTGxBcEtYSmxkSFZ5YmlCMGNuVmxmWDFtZFc1amRHbHZiaUJ1YjNScFpua29jbVZqYjNKa0xISmxhbVZqZENsN2RtRnlJR05vWVdsdVBYSmxZMjl5WkM1ak8ybG1LSEpsYW1WamRIeDhZMmhoYVc0dWJHVnVaM1JvS1dGellYQW9ablZ1WTNScGIyNG9LWHQyWVhJZ2NISnZiV2x6WlQxeVpXTnZjbVF1Y0N4MllXeDFaVDF5WldOdmNtUXVkaXh2YXoxeVpXTnZjbVF1Y3owOU1TeHBQVEE3YVdZb2NtVnFaV04wSmlZaGFHRnVaR3hsWkZKbGFtVmpkR2x2Yms5eVNHRnpUMjVTWldwbFkzUmxaQ2h3Y205dGFYTmxLU2w3YzJWMFZHbHRaVzkxZENobWRXNWpkR2x2YmlncGUybG1LQ0ZvWVc1a2JHVmtVbVZxWldOMGFXOXVUM0pJWVhOUGJsSmxhbVZqZEdWa0tIQnliMjFwYzJVcEtYdHBaaWhPVDBSRktYdHBaaWdoY0hKdlkyVnpjeTVsYldsMEtGd2lkVzVvWVc1a2JHVmtVbVZxWldOMGFXOXVYQ0lzZG1Gc2RXVXNjSEp2YldselpTa3BlMzE5Wld4elpTQnBaaWhwYzBaMWJtTjBhVzl1S0dOdmJuTnZiR1V1WlhKeWIzSXBLWHRqYjI1emIyeGxMbVZ5Y205eUtGd2lWVzVvWVc1a2JHVmtJSEJ5YjIxcGMyVWdjbVZxWldOMGFXOXVYQ0lzZG1Gc2RXVXBmWDE5TERGbE15bDlaV3h6WlNCM2FHbHNaU2hqYUdGcGJpNXNaVzVuZEdnK2FTa2hablZ1WTNScGIyNG9jbVZoWTNRcGUzWmhjaUJqWWoxdmF6OXlaV0ZqZEM1dmF6cHlaV0ZqZEM1bVlXbHNMSEpsZEN4MGFHVnVPM1J5ZVh0cFppaGpZaWw3YVdZb0lXOXJLWEpsWTI5eVpDNW9QWFJ5ZFdVN2NtVjBQV05pUFQwOWRISjFaVDkyWVd4MVpUcGpZaWgyWVd4MVpTazdhV1lvY21WMFBUMDljbVZoWTNRdVVDbDdjbVZoWTNRdWNtVnFLRlI1Y0dWRmNuSnZjaWhRVWs5TlNWTkZLMXdpTFdOb1lXbHVJR041WTJ4bFhDSXBLWDFsYkhObElHbG1LSFJvWlc0OWFYTlVhR1Z1WVdKc1pTaHlaWFFwS1h0MGFHVnVMbU5oYkd3b2NtVjBMSEpsWVdOMExuSmxjeXh5WldGamRDNXlaV29wZldWc2MyVWdjbVZoWTNRdWNtVnpLSEpsZENsOVpXeHpaU0J5WldGamRDNXlaV29vZG1Gc2RXVXBmV05oZEdOb0tHVnljaWw3Y21WaFkzUXVjbVZxS0dWeWNpbDlmU2hqYUdGcGJsdHBLeXRkS1R0amFHRnBiaTVzWlc1bmRHZzlNSDBwZldaMWJtTjBhVzl1SUhKbGMyOXNkbVVvZG1Gc2RXVXBlM1poY2lCeVpXTnZjbVE5ZEdocGN5eDBhR1Z1TEhkeVlYQndaWEk3YVdZb2NtVmpiM0prTG1RcGNtVjBkWEp1TzNKbFkyOXlaQzVrUFhSeWRXVTdjbVZqYjNKa1BYSmxZMjl5WkM1eWZIeHlaV052Y21RN2RISjVlMmxtS0hSb1pXNDlhWE5VYUdWdVlXSnNaU2gyWVd4MVpTa3BlM2R5WVhCd1pYSTllM0k2Y21WamIzSmtMR1E2Wm1Gc2MyVjlPM1JvWlc0dVkyRnNiQ2gyWVd4MVpTeGpkSGdvY21WemIyeDJaU3gzY21Gd2NHVnlMREVwTEdOMGVDaHlaV3BsWTNRc2QzSmhjSEJsY2l3eEtTbDlaV3h6Wlh0eVpXTnZjbVF1ZGoxMllXeDFaVHR5WldOdmNtUXVjejB4TzI1dmRHbG1lU2h5WldOdmNtUXBmWDFqWVhSamFDaGxjbklwZTNKbGFtVmpkQzVqWVd4c0tIZHlZWEJ3WlhKOGZIdHlPbkpsWTI5eVpDeGtPbVpoYkhObGZTeGxjbklwZlgxbWRXNWpkR2x2YmlCeVpXcGxZM1FvZG1Gc2RXVXBlM1poY2lCeVpXTnZjbVE5ZEdocGN6dHBaaWh5WldOdmNtUXVaQ2x5WlhSMWNtNDdjbVZqYjNKa0xtUTlkSEoxWlR0eVpXTnZjbVE5Y21WamIzSmtMbko4ZkhKbFkyOXlaRHR5WldOdmNtUXVkajEyWVd4MVpUdHlaV052Y21RdWN6MHlPMjV2ZEdsbWVTaHlaV052Y21Rc2RISjFaU2w5Wm5WdVkzUnBiMjRnWjJWMFEyOXVjM1J5ZFdOMGIzSW9ReWw3ZG1GeUlGTTlZWE56WlhKMFQySnFaV04wS0VNcFcxTlpUVUpQVEY5VFVFVkRTVVZUWFR0eVpYUjFjbTRnVXlFOWRXNWtaV1pwYm1Wa1AxTTZRMzFRY205dGFYTmxQV1oxYm1OMGFXOXVLR1Y0WldOMWRHOXlLWHRoYzNObGNuUkdkVzVqZEdsdmJpaGxlR1ZqZFhSdmNpazdZWE56WlhKMFNXNXpkR0Z1WTJVb2RHaHBjeXhRY205dGFYTmxMRkJTVDAxSlUwVXBPM1poY2lCeVpXTnZjbVE5ZTNBNmRHaHBjeXhqT2x0ZExITTZNQ3hrT21aaGJITmxMSFk2ZFc1a1pXWnBibVZrTEdnNlptRnNjMlY5TzJocFpHUmxiaWgwYUdsekxGSkZRMDlTUkN4eVpXTnZjbVFwTzNSeWVYdGxlR1ZqZFhSdmNpaGpkSGdvY21WemIyeDJaU3h5WldOdmNtUXNNU2tzWTNSNEtISmxhbVZqZEN4eVpXTnZjbVFzTVNrcGZXTmhkR05vS0dWeWNpbDdjbVZxWldOMExtTmhiR3dvY21WamIzSmtMR1Z5Y2lsOWZUdGhjM05wWjI1SWFXUmtaVzRvVUhKdmJXbHpaVnRRVWs5VVQxUlpVRVZkTEh0MGFHVnVPbVoxYm1OMGFXOXVLRzl1Um5Wc1ptbHNiR1ZrTEc5dVVtVnFaV04wWldRcGUzWmhjaUJUUFdGemMyVnlkRTlpYW1WamRDaGhjM05sY25SUFltcGxZM1FvZEdocGN5bGJRMDlPVTFSU1ZVTlVUMUpkS1Z0VFdVMUNUMHhmVTFCRlEwbEZVMTA3ZG1GeUlISmxZV04wUFh0dmF6cHBjMFoxYm1OMGFXOXVLRzl1Um5Wc1ptbHNiR1ZrS1Q5dmJrWjFiR1pwYkd4bFpEcDBjblZsTEdaaGFXdzZhWE5HZFc1amRHbHZiaWh2YmxKbGFtVmpkR1ZrS1Q5dmJsSmxhbVZqZEdWa09tWmhiSE5sZlN4UVBYSmxZV04wTGxBOWJtVjNLRk1oUFhWdVpHVm1hVzVsWkQ5VE9sQnliMjFwYzJVcEtHWjFibU4wYVc5dUtISmxjMjlzZG1Vc2NtVnFaV04wS1h0eVpXRmpkQzV5WlhNOVlYTnpaWEowUm5WdVkzUnBiMjRvY21WemIyeDJaU2s3Y21WaFkzUXVjbVZxUFdGemMyVnlkRVoxYm1OMGFXOXVLSEpsYW1WamRDbDlLU3h5WldOdmNtUTlkR2hwYzF0U1JVTlBVa1JkTzNKbFkyOXlaQzVqTG5CMWMyZ29jbVZoWTNRcE8zSmxZMjl5WkM1ekppWnViM1JwWm5rb2NtVmpiM0prS1R0eVpYUjFjbTRnVUgwc1hDSmpZWFJqYUZ3aU9tWjFibU4wYVc5dUtHOXVVbVZxWldOMFpXUXBlM0psZEhWeWJpQjBhR2x6TG5Sb1pXNG9kVzVrWldacGJtVmtMRzl1VW1WcVpXTjBaV1FwZlgwcE8yRnpjMmxuYmtocFpHUmxiaWhRY205dGFYTmxMSHRoYkd3NlpuVnVZM1JwYjI0b2FYUmxjbUZpYkdVcGUzWmhjaUJRY205dGFYTmxQV2RsZEVOdmJuTjBjblZqZEc5eUtIUm9hWE1wTEhaaGJIVmxjejFiWFR0eVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb1puVnVZM1JwYjI0b2NtVnpiMngyWlN4eVpXcGxZM1FwZTJadmNrOW1LR2wwWlhKaFlteGxMR1poYkhObExIQjFjMmdzZG1Gc2RXVnpLVHQyWVhJZ2NtVnRZV2x1YVc1blBYWmhiSFZsY3k1c1pXNW5kR2dzY21WemRXeDBjejFCY25KaGVTaHlaVzFoYVc1cGJtY3BPMmxtS0hKbGJXRnBibWx1WnlsbWIzSkZZV05vTG1OaGJHd29kbUZzZFdWekxHWjFibU4wYVc5dUtIQnliMjFwYzJVc2FXNWtaWGdwZTFCeWIyMXBjMlV1Y21WemIyeDJaU2h3Y205dGFYTmxLUzUwYUdWdUtHWjFibU4wYVc5dUtIWmhiSFZsS1h0eVpYTjFiSFJ6VzJsdVpHVjRYVDEyWVd4MVpUc3RMWEpsYldGcGJtbHVaM3g4Y21WemIyeDJaU2h5WlhOMWJIUnpLWDBzY21WcVpXTjBLWDBwTzJWc2MyVWdjbVZ6YjJ4MlpTaHlaWE4xYkhSektYMHBmU3h5WVdObE9tWjFibU4wYVc5dUtHbDBaWEpoWW14bEtYdDJZWElnVUhKdmJXbHpaVDFuWlhSRGIyNXpkSEoxWTNSdmNpaDBhR2x6S1R0eVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb1puVnVZM1JwYjI0b2NtVnpiMngyWlN4eVpXcGxZM1FwZTJadmNrOW1LR2wwWlhKaFlteGxMR1poYkhObExHWjFibU4wYVc5dUtIQnliMjFwYzJVcGUxQnliMjFwYzJVdWNtVnpiMngyWlNod2NtOXRhWE5sS1M1MGFHVnVLSEpsYzI5c2RtVXNjbVZxWldOMEtYMHBmU2w5TEhKbGFtVmpkRHBtZFc1amRHbHZiaWh5S1h0eVpYUjFjbTRnYm1WM0tHZGxkRU52Ym5OMGNuVmpkRzl5S0hSb2FYTXBLU2htZFc1amRHbHZiaWh5WlhOdmJIWmxMSEpsYW1WamRDbDdjbVZxWldOMEtISXBmU2w5TEhKbGMyOXNkbVU2Wm5WdVkzUnBiMjRvZUNsN2NtVjBkWEp1SUdselQySnFaV04wS0hncEppWlNSVU5QVWtRZ2FXNGdlQ1ltWjJWMFVISnZkRzkwZVhCbFQyWW9lQ2s5UFQxMGFHbHpXMUJTVDFSUFZGbFFSVjAvZURwdVpYY29aMlYwUTI5dWMzUnlkV04wYjNJb2RHaHBjeWtwS0daMWJtTjBhVzl1S0hKbGMyOXNkbVVzY21WcVpXTjBLWHR5WlhOdmJIWmxLSGdwZlNsOWZTbDlLRzVsZUhSVWFXTnJmSHh6WlhSSmJXMWxaR2xoZEdVc2MyRm1aVk41YldKdmJDaGNJbkpsWTI5eVpGd2lLU2s3YzJWMFZHOVRkSEpwYm1kVVlXY29VSEp2YldselpTeFFVazlOU1ZORktUdHpaWFJUY0dWamFXVnpLRkJ5YjIxcGMyVXBPeVJrWldacGJtVW9SMHhQUWtGTUswWlBVa05GUkNvaGFYTk9ZWFJwZG1Vb1VISnZiV2x6WlNrc2UxQnliMjFwYzJVNlVISnZiV2x6WlgwcGZTaG5iRzlpWVd4YlVGSlBUVWxUUlYwcE95Rm1kVzVqZEdsdmJpZ3BlM1poY2lCVlNVUTljMkZtWlZONWJXSnZiQ2hjSW5WcFpGd2lLU3hQTVQxellXWmxVM2x0WW05c0tGd2lUekZjSWlrc1YwVkJTejF6WVdabFUzbHRZbTlzS0Z3aWQyVmhhMXdpS1N4TVJVRkxQWE5oWm1WVGVXMWliMndvWENKc1pXRnJYQ0lwTEV4QlUxUTljMkZtWlZONWJXSnZiQ2hjSW14aGMzUmNJaWtzUmtsU1UxUTljMkZtWlZONWJXSnZiQ2hjSW1acGNuTjBYQ0lwTEZOSldrVTlSRVZUUXo5ellXWmxVM2x0WW05c0tGd2ljMmw2WlZ3aUtUcGNJbk5wZW1WY0lpeDFhV1E5TUN4MGJYQTllMzA3Wm5WdVkzUnBiMjRnWjJWMFEyOXNiR1ZqZEdsdmJpaERMRTVCVFVVc2JXVjBhRzlrY3l4amIyMXRiMjVOWlhSb2IyUnpMR2x6VFdGd0xHbHpWMlZoYXlsN2RtRnlJRUZFUkVWU1BXbHpUV0Z3UDF3aWMyVjBYQ0k2WENKaFpHUmNJaXh3Y205MGJ6MURKaVpEVzFCU1QxUlBWRmxRUlYwc1R6MTdmVHRtZFc1amRHbHZiaUJwYm1sMFJuSnZiVWwwWlhKaFlteGxLSFJvWVhRc2FYUmxjbUZpYkdVcGUybG1LR2wwWlhKaFlteGxJVDExYm1SbFptbHVaV1FwWm05eVQyWW9hWFJsY21GaWJHVXNhWE5OWVhBc2RHaGhkRnRCUkVSRlVsMHNkR2hoZENrN2NtVjBkWEp1SUhSb1lYUjlablZ1WTNScGIyNGdabWw0VTFaYUtHdGxlU3hqYUdGcGJpbDdkbUZ5SUcxbGRHaHZaRDF3Y205MGIxdHJaWGxkTzJsbUtHWnlZVzFsZDI5eWF5bHdjbTkwYjF0clpYbGRQV1oxYm1OMGFXOXVLR0VzWWlsN2RtRnlJSEpsYzNWc2REMXRaWFJvYjJRdVkyRnNiQ2gwYUdsekxHRTlQVDB3UHpBNllTeGlLVHR5WlhSMWNtNGdZMmhoYVc0L2RHaHBjenB5WlhOMWJIUjlmV2xtS0NGcGMwNWhkR2wyWlNoREtYeDhJU2hwYzFkbFlXdDhmQ0ZDVlVkSFdWOUpWRVZTUVZSUFVsTW1KbWhoY3lod2NtOTBieXhHVDFKZlJVRkRTQ2ttSm1oaGN5aHdjbTkwYnl4Y0ltVnVkSEpwWlhOY0lpa3BLWHREUFdselYyVmhhejltZFc1amRHbHZiaWhwZEdWeVlXSnNaU2w3WVhOelpYSjBTVzV6ZEdGdVkyVW9kR2hwY3l4RExFNUJUVVVwTzNObGRDaDBhR2x6TEZWSlJDeDFhV1FyS3lrN2FXNXBkRVp5YjIxSmRHVnlZV0pzWlNoMGFHbHpMR2wwWlhKaFlteGxLWDA2Wm5WdVkzUnBiMjRvYVhSbGNtRmliR1VwZTNaaGNpQjBhR0YwUFhSb2FYTTdZWE56WlhKMFNXNXpkR0Z1WTJVb2RHaGhkQ3hETEU1QlRVVXBPM05sZENoMGFHRjBMRTh4TEdOeVpXRjBaU2h1ZFd4c0tTazdjMlYwS0hSb1lYUXNVMGxhUlN3d0tUdHpaWFFvZEdoaGRDeE1RVk5VTEhWdVpHVm1hVzVsWkNrN2MyVjBLSFJvWVhRc1JrbFNVMVFzZFc1a1pXWnBibVZrS1R0cGJtbDBSbkp2YlVsMFpYSmhZbXhsS0hSb1lYUXNhWFJsY21GaWJHVXBmVHRoYzNOcFoyNUlhV1JrWlc0b1lYTnphV2R1U0dsa1pHVnVLRU5iVUZKUFZFOVVXVkJGWFN4dFpYUm9iMlJ6S1N4amIyMXRiMjVOWlhSb2IyUnpLVHRwYzFkbFlXdDhmQ0ZFUlZORGZIeGtaV1pwYm1WUWNtOXdaWEowZVNoRFcxQlNUMVJQVkZsUVJWMHNYQ0p6YVhwbFhDSXNlMmRsZERwbWRXNWpkR2x2YmlncGUzSmxkSFZ5YmlCaGMzTmxjblJFWldacGJtVmtLSFJvYVhOYlUwbGFSVjBwZlgwcGZXVnNjMlY3ZG1GeUlFNWhkR2wyWlQxRExHbHVjM1E5Ym1WM0lFTXNZMmhoYVc0OWFXNXpkRnRCUkVSRlVsMG9hWE5YWldGclAzdDlPaTB3TERFcExHSjFaMmQ1V21WeWJ6dHBaaWhqYUdWamEwUmhibWRsY2tsMFpYSkRiRzl6YVc1bktHWjFibU4wYVc5dUtFOHBlMjVsZHlCREtFOHBmU2twZTBNOVpuVnVZM1JwYjI0b2FYUmxjbUZpYkdVcGUyRnpjMlZ5ZEVsdWMzUmhibU5sS0hSb2FYTXNReXhPUVUxRktUdHlaWFIxY200Z2FXNXBkRVp5YjIxSmRHVnlZV0pzWlNodVpYY2dUbUYwYVhabExHbDBaWEpoWW14bEtYMDdRMXRRVWs5VVQxUlpVRVZkUFhCeWIzUnZPMmxtS0daeVlXMWxkMjl5YXlsd2NtOTBiMXREVDA1VFZGSlZRMVJQVWwwOVEzMXBjMWRsWVd0OGZHbHVjM1JiUms5U1gwVkJRMGhkS0daMWJtTjBhVzl1S0haaGJDeHJaWGtwZTJKMVoyZDVXbVZ5YnoweEwydGxlVDA5UFMxSmJtWnBibWwwZVgwcE8ybG1LR0oxWjJkNVdtVnlieWw3Wm1sNFUxWmFLRndpWkdWc1pYUmxYQ0lwTzJacGVGTldXaWhjSW1oaGMxd2lLVHRwYzAxaGNDWW1abWw0VTFaYUtGd2laMlYwWENJcGZXbG1LR0oxWjJkNVdtVnliM3g4WTJoaGFXNGhQVDFwYm5OMEtXWnBlRk5XV2loQlJFUkZVaXgwY25WbEtYMXpaWFJVYjFOMGNtbHVaMVJoWnloRExFNUJUVVVwTzNObGRGTndaV05wWlhNb1F5azdUMXRPUVUxRlhUMURPeVJrWldacGJtVW9SMHhQUWtGTUsxZFNRVkFyUms5U1EwVkVLaUZwYzA1aGRHbDJaU2hES1N4UEtUdHBjMWRsWVd0OGZHUmxabWx1WlZOMFpFbDBaWEpoZEc5eWN5aERMRTVCVFVVc1puVnVZM1JwYjI0b2FYUmxjbUYwWldRc2EybHVaQ2w3YzJWMEtIUm9hWE1zU1ZSRlVpeDdienBwZEdWeVlYUmxaQ3hyT210cGJtUjlLWDBzWm5WdVkzUnBiMjRvS1h0MllYSWdhWFJsY2oxMGFHbHpXMGxVUlZKZExHdHBibVE5YVhSbGNpNXJMR1Z1ZEhKNVBXbDBaWEl1YkR0M2FHbHNaU2hsYm5SeWVTWW1aVzUwY25rdWNpbGxiblJ5ZVQxbGJuUnllUzV3TzJsbUtDRnBkR1Z5TG05OGZDRW9hWFJsY2k1c1BXVnVkSEo1UFdWdWRISjVQMlZ1ZEhKNUxtNDZhWFJsY2k1dlcwWkpVbE5VWFNrcGUybDBaWEl1YnoxMWJtUmxabWx1WldRN2NtVjBkWEp1SUdsMFpYSlNaWE4xYkhRb01TbDlhV1lvYTJsdVpEMDlTMFZaS1hKbGRIVnliaUJwZEdWeVVtVnpkV3gwS0RBc1pXNTBjbmt1YXlrN2FXWW9hMmx1WkQwOVZrRk1WVVVwY21WMGRYSnVJR2wwWlhKU1pYTjFiSFFvTUN4bGJuUnllUzUyS1R0eVpYUjFjbTRnYVhSbGNsSmxjM1ZzZENnd0xGdGxiblJ5ZVM1ckxHVnVkSEo1TG5aZEtYMHNhWE5OWVhBL1MwVlpLMVpCVEZWRk9sWkJURlZGTENGcGMwMWhjQ2s3Y21WMGRYSnVJRU45Wm5WdVkzUnBiMjRnWm1GemRFdGxlU2hwZEN4amNtVmhkR1VwZTJsbUtDRnBjMDlpYW1WamRDaHBkQ2twY21WMGRYSnVLSFI1Y0dWdlppQnBkRDA5WENKemRISnBibWRjSWo5Y0lsTmNJanBjSWxCY0lpa3JhWFE3YVdZb2FYTkdjbTk2Wlc0b2FYUXBLWEpsZEhWeWJsd2lSbHdpTzJsbUtDRm9ZWE1vYVhRc1ZVbEVLU2w3YVdZb0lXTnlaV0YwWlNseVpYUjFjbTVjSWtWY0lqdG9hV1JrWlc0b2FYUXNWVWxFTENzcmRXbGtLWDF5WlhSMWNtNWNJazljSWl0cGRGdFZTVVJkZldaMWJtTjBhVzl1SUdkbGRFVnVkSEo1S0hSb1lYUXNhMlY1S1h0MllYSWdhVzVrWlhnOVptRnpkRXRsZVNoclpYa3BMR1Z1ZEhKNU8ybG1LR2x1WkdWNElUMWNJa1pjSWlseVpYUjFjbTRnZEdoaGRGdFBNVjFiYVc1a1pYaGRPMlp2Y2lobGJuUnllVDEwYUdGMFcwWkpVbE5VWFR0bGJuUnllVHRsYm5SeWVUMWxiblJ5ZVM1dUtYdHBaaWhsYm5SeWVTNXJQVDFyWlhrcGNtVjBkWEp1SUdWdWRISjVmWDFtZFc1amRHbHZiaUJrWldZb2RHaGhkQ3hyWlhrc2RtRnNkV1VwZTNaaGNpQmxiblJ5ZVQxblpYUkZiblJ5ZVNoMGFHRjBMR3RsZVNrc2NISmxkaXhwYm1SbGVEdHBaaWhsYm5SeWVTbGxiblJ5ZVM1MlBYWmhiSFZsTzJWc2MyVjdkR2hoZEZ0TVFWTlVYVDFsYm5SeWVUMTdhVHBwYm1SbGVEMW1ZWE4wUzJWNUtHdGxlU3gwY25WbEtTeHJPbXRsZVN4Mk9uWmhiSFZsTEhBNmNISmxkajEwYUdGMFcweEJVMVJkTEc0NmRXNWtaV1pwYm1Wa0xISTZabUZzYzJWOU8ybG1LQ0YwYUdGMFcwWkpVbE5VWFNsMGFHRjBXMFpKVWxOVVhUMWxiblJ5ZVR0cFppaHdjbVYyS1hCeVpYWXViajFsYm5SeWVUdDBhR0YwVzFOSldrVmRLeXM3YVdZb2FXNWtaWGdoUFZ3aVJsd2lLWFJvWVhSYlR6RmRXMmx1WkdWNFhUMWxiblJ5ZVgxeVpYUjFjbTRnZEdoaGRIMTJZWElnWTI5c2JHVmpkR2x2YmsxbGRHaHZaSE05ZTJOc1pXRnlPbVoxYm1OMGFXOXVLQ2w3Wm05eUtIWmhjaUIwYUdGMFBYUm9hWE1zWkdGMFlUMTBhR0YwVzA4eFhTeGxiblJ5ZVQxMGFHRjBXMFpKVWxOVVhUdGxiblJ5ZVR0bGJuUnllVDFsYm5SeWVTNXVLWHRsYm5SeWVTNXlQWFJ5ZFdVN1hHNXBaaWhsYm5SeWVTNXdLV1Z1ZEhKNUxuQTlaVzUwY25rdWNDNXVQWFZ1WkdWbWFXNWxaRHRrWld4bGRHVWdaR0YwWVZ0bGJuUnllUzVwWFgxMGFHRjBXMFpKVWxOVVhUMTBhR0YwVzB4QlUxUmRQWFZ1WkdWbWFXNWxaRHQwYUdGMFcxTkpXa1ZkUFRCOUxGd2laR1ZzWlhSbFhDSTZablZ1WTNScGIyNG9hMlY1S1h0MllYSWdkR2hoZEQxMGFHbHpMR1Z1ZEhKNVBXZGxkRVZ1ZEhKNUtIUm9ZWFFzYTJWNUtUdHBaaWhsYm5SeWVTbDdkbUZ5SUc1bGVIUTlaVzUwY25rdWJpeHdjbVYyUFdWdWRISjVMbkE3WkdWc1pYUmxJSFJvWVhSYlR6RmRXMlZ1ZEhKNUxtbGRPMlZ1ZEhKNUxuSTlkSEoxWlR0cFppaHdjbVYyS1hCeVpYWXViajF1WlhoME8ybG1LRzVsZUhRcGJtVjRkQzV3UFhCeVpYWTdhV1lvZEdoaGRGdEdTVkpUVkYwOVBXVnVkSEo1S1hSb1lYUmJSa2xTVTFSZFBXNWxlSFE3YVdZb2RHaGhkRnRNUVZOVVhUMDlaVzUwY25rcGRHaGhkRnRNUVZOVVhUMXdjbVYyTzNSb1lYUmJVMGxhUlYwdExYMXlaWFIxY200aElXVnVkSEo1ZlN4bWIzSkZZV05vT21aMWJtTjBhVzl1S0dOaGJHeGlZV05yWm00cGUzWmhjaUJtUFdOMGVDaGpZV3hzWW1GamEyWnVMR0Z5WjNWdFpXNTBjMXN4WFN3ektTeGxiblJ5ZVR0M2FHbHNaU2hsYm5SeWVUMWxiblJ5ZVQ5bGJuUnllUzV1T25Sb2FYTmJSa2xTVTFSZEtYdG1LR1Z1ZEhKNUxuWXNaVzUwY25rdWF5eDBhR2x6S1R0M2FHbHNaU2hsYm5SeWVTWW1aVzUwY25rdWNpbGxiblJ5ZVQxbGJuUnllUzV3Zlgwc2FHRnpPbVoxYm1OMGFXOXVLR3RsZVNsN2NtVjBkWEp1SVNGblpYUkZiblJ5ZVNoMGFHbHpMR3RsZVNsOWZUdE5ZWEE5WjJWMFEyOXNiR1ZqZEdsdmJpaE5ZWEFzVFVGUUxIdG5aWFE2Wm5WdVkzUnBiMjRvYTJWNUtYdDJZWElnWlc1MGNuazlaMlYwUlc1MGNua29kR2hwY3l4clpYa3BPM0psZEhWeWJpQmxiblJ5ZVNZbVpXNTBjbmt1ZG4wc2MyVjBPbVoxYm1OMGFXOXVLR3RsZVN4MllXeDFaU2w3Y21WMGRYSnVJR1JsWmloMGFHbHpMR3RsZVQwOVBUQS9NRHByWlhrc2RtRnNkV1VwZlgwc1kyOXNiR1ZqZEdsdmJrMWxkR2h2WkhNc2RISjFaU2s3VTJWMFBXZGxkRU52Ykd4bFkzUnBiMjRvVTJWMExGTkZWQ3g3WVdSa09tWjFibU4wYVc5dUtIWmhiSFZsS1h0eVpYUjFjbTRnWkdWbUtIUm9hWE1zZG1Gc2RXVTlkbUZzZFdVOVBUMHdQekE2ZG1Gc2RXVXNkbUZzZFdVcGZYMHNZMjlzYkdWamRHbHZiazFsZEdodlpITXBPMloxYm1OMGFXOXVJR1JsWmxkbFlXc29kR2hoZEN4clpYa3NkbUZzZFdVcGUybG1LR2x6Um5KdmVtVnVLR0Z6YzJWeWRFOWlhbVZqZENoclpYa3BLU2xzWldGclUzUnZjbVVvZEdoaGRDa3VjMlYwS0d0bGVTeDJZV3gxWlNrN1pXeHpaWHRvWVhNb2EyVjVMRmRGUVVzcGZIeG9hV1JrWlc0b2EyVjVMRmRGUVVzc2UzMHBPMnRsZVZ0WFJVRkxYVnQwYUdGMFcxVkpSRjFkUFhaaGJIVmxmWEpsZEhWeWJpQjBhR0YwZldaMWJtTjBhVzl1SUd4bFlXdFRkRzl5WlNoMGFHRjBLWHR5WlhSMWNtNGdkR2hoZEZ0TVJVRkxYWHg4YUdsa1pHVnVLSFJvWVhRc1RFVkJTeXh1WlhjZ1RXRndLVnRNUlVGTFhYMTJZWElnZDJWaGEwMWxkR2h2WkhNOWUxd2laR1ZzWlhSbFhDSTZablZ1WTNScGIyNG9hMlY1S1h0cFppZ2hhWE5QWW1wbFkzUW9hMlY1S1NseVpYUjFjbTRnWm1Gc2MyVTdhV1lvYVhOR2NtOTZaVzRvYTJWNUtTbHlaWFIxY200Z2JHVmhhMU4wYjNKbEtIUm9hWE1wVzF3aVpHVnNaWFJsWENKZEtHdGxlU2s3Y21WMGRYSnVJR2hoY3loclpYa3NWMFZCU3lrbUptaGhjeWhyWlhsYlYwVkJTMTBzZEdocGMxdFZTVVJkS1NZbVpHVnNaWFJsSUd0bGVWdFhSVUZMWFZ0MGFHbHpXMVZKUkYxZGZTeG9ZWE02Wm5WdVkzUnBiMjRvYTJWNUtYdHBaaWdoYVhOUFltcGxZM1FvYTJWNUtTbHlaWFIxY200Z1ptRnNjMlU3YVdZb2FYTkdjbTk2Wlc0b2EyVjVLU2x5WlhSMWNtNGdiR1ZoYTFOMGIzSmxLSFJvYVhNcExtaGhjeWhyWlhrcE8zSmxkSFZ5YmlCb1lYTW9hMlY1TEZkRlFVc3BKaVpvWVhNb2EyVjVXMWRGUVV0ZExIUm9hWE5iVlVsRVhTbDlmVHRYWldGclRXRndQV2RsZEVOdmJHeGxZM1JwYjI0b1YyVmhhMDFoY0N4WFJVRkxUVUZRTEh0blpYUTZablZ1WTNScGIyNG9hMlY1S1h0cFppaHBjMDlpYW1WamRDaHJaWGtwS1h0cFppaHBjMFp5YjNwbGJpaHJaWGtwS1hKbGRIVnliaUJzWldGclUzUnZjbVVvZEdocGN5a3VaMlYwS0d0bGVTazdhV1lvYUdGektHdGxlU3hYUlVGTEtTbHlaWFIxY200Z2EyVjVXMWRGUVV0ZFczUm9hWE5iVlVsRVhWMTlmU3h6WlhRNlpuVnVZM1JwYjI0b2EyVjVMSFpoYkhWbEtYdHlaWFIxY200Z1pHVm1WMlZoYXloMGFHbHpMR3RsZVN4MllXeDFaU2w5ZlN4M1pXRnJUV1YwYUc5a2N5eDBjblZsTEhSeWRXVXBPMmxtS0daeVlXMWxkMjl5YXlZbUtHNWxkeUJYWldGclRXRndLUzV6WlhRb1QySnFaV04wTG1aeVpXVjZaU2gwYlhBcExEY3BMbWRsZENoMGJYQXBJVDAzS1h0bWIzSkZZV05vTG1OaGJHd29ZWEp5WVhrb1hDSmtaV3hsZEdVc2FHRnpMR2RsZEN4elpYUmNJaWtzWm5WdVkzUnBiMjRvYTJWNUtYdDJZWElnYldWMGFHOWtQVmRsWVd0TllYQmJVRkpQVkU5VVdWQkZYVnRyWlhsZE8xZGxZV3ROWVhCYlVGSlBWRTlVV1ZCRlhWdHJaWGxkUFdaMWJtTjBhVzl1S0dFc1lpbDdhV1lvYVhOUFltcGxZM1FvWVNrbUptbHpSbkp2ZW1WdUtHRXBLWHQyWVhJZ2NtVnpkV3gwUFd4bFlXdFRkRzl5WlNoMGFHbHpLVnRyWlhsZEtHRXNZaWs3Y21WMGRYSnVJR3RsZVQwOVhDSnpaWFJjSWo5MGFHbHpPbkpsYzNWc2RIMXlaWFIxY200Z2JXVjBhRzlrTG1OaGJHd29kR2hwY3l4aExHSXBmWDBwZlZkbFlXdFRaWFE5WjJWMFEyOXNiR1ZqZEdsdmJpaFhaV0ZyVTJWMExGZEZRVXRUUlZRc2UyRmtaRHBtZFc1amRHbHZiaWgyWVd4MVpTbDdjbVYwZFhKdUlHUmxabGRsWVdzb2RHaHBjeXgyWVd4MVpTeDBjblZsS1gxOUxIZGxZV3ROWlhSb2IyUnpMR1poYkhObExIUnlkV1VwZlNncE95Rm1kVzVqZEdsdmJpZ3BlMloxYm1OMGFXOXVJRVZ1ZFcxbGNtRjBaU2hwZEdWeVlYUmxaQ2w3ZG1GeUlHdGxlWE05VzEwc2EyVjVPMlp2Y2loclpYa2dhVzRnYVhSbGNtRjBaV1FwYTJWNWN5NXdkWE5vS0d0bGVTazdjMlYwS0hSb2FYTXNTVlJGVWl4N2J6cHBkR1Z5WVhSbFpDeGhPbXRsZVhNc2FUb3dmU2w5WTNKbFlYUmxTWFJsY21GMGIzSW9SVzUxYldWeVlYUmxMRTlDU2tWRFZDeG1kVzVqZEdsdmJpZ3BlM1poY2lCcGRHVnlQWFJvYVhOYlNWUkZVbDBzYTJWNWN6MXBkR1Z5TG1Fc2EyVjVPMlJ2ZTJsbUtHbDBaWEl1YVQ0OWEyVjVjeTVzWlc1bmRHZ3BjbVYwZFhKdUlHbDBaWEpTWlhOMWJIUW9NU2w5ZDJocGJHVW9JU2dvYTJWNVBXdGxlWE5iYVhSbGNpNXBLeXRkS1dsdUlHbDBaWEl1YnlrcE8zSmxkSFZ5YmlCcGRHVnlVbVZ6ZFd4MEtEQXNhMlY1S1gwcE8yWjFibU4wYVc5dUlIZHlZWEFvWm00cGUzSmxkSFZ5YmlCbWRXNWpkR2x2YmlocGRDbDdZWE56WlhKMFQySnFaV04wS0dsMEtUdDBjbmw3Y21WMGRYSnVJR1p1TG1Gd2NHeDVLSFZ1WkdWbWFXNWxaQ3hoY21kMWJXVnVkSE1wTEhSeWRXVjlZMkYwWTJnb1pTbDdjbVYwZFhKdUlHWmhiSE5sZlgxOVpuVnVZM1JwYjI0Z2NtVm1iR1ZqZEVkbGRDaDBZWEpuWlhRc2NISnZjR1Z5ZEhsTFpYa3BlM1poY2lCeVpXTmxhWFpsY2oxaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvUERNL2RHRnlaMlYwT21GeVozVnRaVzUwYzFzeVhTeGtaWE5qUFdkbGRFOTNia1JsYzJOeWFYQjBiM0lvWVhOelpYSjBUMkpxWldOMEtIUmhjbWRsZENrc2NISnZjR1Z5ZEhsTFpYa3BMSEJ5YjNSdk8ybG1LR1JsYzJNcGNtVjBkWEp1SUdoaGN5aGtaWE5qTEZ3aWRtRnNkV1ZjSWlrL1pHVnpZeTUyWVd4MVpUcGtaWE5qTG1kbGREMDlQWFZ1WkdWbWFXNWxaRDkxYm1SbFptbHVaV1E2WkdWell5NW5aWFF1WTJGc2JDaHlaV05sYVhabGNpazdjbVYwZFhKdUlHbHpUMkpxWldOMEtIQnliM1J2UFdkbGRGQnliM1J2ZEhsd1pVOW1LSFJoY21kbGRDa3BQM0psWm14bFkzUkhaWFFvY0hKdmRHOHNjSEp2Y0dWeWRIbExaWGtzY21WalpXbDJaWElwT25WdVpHVm1hVzVsWkgxbWRXNWpkR2x2YmlCeVpXWnNaV04wVTJWMEtIUmhjbWRsZEN4d2NtOXdaWEowZVV0bGVTeFdLWHQyWVhJZ2NtVmpaV2wyWlhJOVlYSm5kVzFsYm5SekxteGxibWQwYUR3MFAzUmhjbWRsZERwaGNtZDFiV1Z1ZEhOYk0xMHNiM2R1UkdWell6MW5aWFJQZDI1RVpYTmpjbWx3ZEc5eUtHRnpjMlZ5ZEU5aWFtVmpkQ2gwWVhKblpYUXBMSEJ5YjNCbGNuUjVTMlY1S1N4bGVHbHpkR2x1WjBSbGMyTnlhWEIwYjNJc2NISnZkRzg3YVdZb0lXOTNia1JsYzJNcGUybG1LR2x6VDJKcVpXTjBLSEJ5YjNSdlBXZGxkRkJ5YjNSdmRIbHdaVTltS0hSaGNtZGxkQ2twS1h0eVpYUjFjbTRnY21WbWJHVmpkRk5sZENod2NtOTBieXh3Y205d1pYSjBlVXRsZVN4V0xISmxZMlZwZG1WeUtYMXZkMjVFWlhOalBXUmxjMk55YVhCMGIzSW9NQ2w5YVdZb2FHRnpLRzkzYmtSbGMyTXNYQ0oyWVd4MVpWd2lLU2w3YVdZb2IzZHVSR1Z6WXk1M2NtbDBZV0pzWlQwOVBXWmhiSE5sZkh3aGFYTlBZbXBsWTNRb2NtVmpaV2wyWlhJcEtYSmxkSFZ5YmlCbVlXeHpaVHRsZUdsemRHbHVaMFJsYzJOeWFYQjBiM0k5WjJWMFQzZHVSR1Z6WTNKcGNIUnZjaWh5WldObGFYWmxjaXh3Y205d1pYSjBlVXRsZVNsOGZHUmxjMk55YVhCMGIzSW9NQ2s3WlhocGMzUnBibWRFWlhOamNtbHdkRzl5TG5aaGJIVmxQVlk3Y21WMGRYSnVJR1JsWm1sdVpWQnliM0JsY25SNUtISmxZMlZwZG1WeUxIQnliM0JsY25SNVMyVjVMR1Y0YVhOMGFXNW5SR1Z6WTNKcGNIUnZjaWtzZEhKMVpYMXlaWFIxY200Z2IzZHVSR1Z6WXk1elpYUTlQVDExYm1SbFptbHVaV1EvWm1Gc2MyVTZLRzkzYmtSbGMyTXVjMlYwTG1OaGJHd29jbVZqWldsMlpYSXNWaWtzZEhKMVpTbDlkbUZ5SUdselJYaDBaVzV6YVdKc1pUMVBZbXBsWTNRdWFYTkZlSFJsYm5OcFlteGxmSHh5WlhSMWNtNUpkRHQyWVhJZ2NtVm1iR1ZqZEQxN1lYQndiSGs2WTNSNEtHTmhiR3dzWVhCd2JIa3NNeWtzWTI5dWMzUnlkV04wT21aMWJtTjBhVzl1S0hSaGNtZGxkQ3hoY21kMWJXVnVkSE5NYVhOMEtYdDJZWElnY0hKdmRHODlZWE56WlhKMFJuVnVZM1JwYjI0b1lYSm5kVzFsYm5SekxteGxibWQwYUR3elAzUmhjbWRsZERwaGNtZDFiV1Z1ZEhOYk1sMHBXMUJTVDFSUFZGbFFSVjBzYVc1emRHRnVZMlU5WTNKbFlYUmxLR2x6VDJKcVpXTjBLSEJ5YjNSdktUOXdjbTkwYnpwUFltcGxZM1JRY205MGJ5a3NjbVZ6ZFd4MFBXRndjR3g1TG1OaGJHd29kR0Z5WjJWMExHbHVjM1JoYm1ObExHRnlaM1Z0Wlc1MGMweHBjM1FwTzNKbGRIVnliaUJwYzA5aWFtVmpkQ2h5WlhOMWJIUXBQM0psYzNWc2REcHBibk4wWVc1alpYMHNaR1ZtYVc1bFVISnZjR1Z5ZEhrNmQzSmhjQ2hrWldacGJtVlFjbTl3WlhKMGVTa3NaR1ZzWlhSbFVISnZjR1Z5ZEhrNlpuVnVZM1JwYjI0b2RHRnlaMlYwTEhCeWIzQmxjblI1UzJWNUtYdDJZWElnWkdWell6MW5aWFJQZDI1RVpYTmpjbWx3ZEc5eUtHRnpjMlZ5ZEU5aWFtVmpkQ2gwWVhKblpYUXBMSEJ5YjNCbGNuUjVTMlY1S1R0eVpYUjFjbTRnWkdWell5WW1JV1JsYzJNdVkyOXVabWxuZFhKaFlteGxQMlpoYkhObE9tUmxiR1YwWlNCMFlYSm5aWFJiY0hKdmNHVnlkSGxMWlhsZGZTeGxiblZ0WlhKaGRHVTZablZ1WTNScGIyNG9kR0Z5WjJWMEtYdHlaWFIxY200Z2JtVjNJRVZ1ZFcxbGNtRjBaU2hoYzNObGNuUlBZbXBsWTNRb2RHRnlaMlYwS1NsOUxHZGxkRHB5Wldac1pXTjBSMlYwTEdkbGRFOTNibEJ5YjNCbGNuUjVSR1Z6WTNKcGNIUnZjanBtZFc1amRHbHZiaWgwWVhKblpYUXNjSEp2Y0dWeWRIbExaWGtwZTNKbGRIVnliaUJuWlhSUGQyNUVaWE5qY21sd2RHOXlLR0Z6YzJWeWRFOWlhbVZqZENoMFlYSm5aWFFwTEhCeWIzQmxjblI1UzJWNUtYMHNaMlYwVUhKdmRHOTBlWEJsVDJZNlpuVnVZM1JwYjI0b2RHRnlaMlYwS1h0eVpYUjFjbTRnWjJWMFVISnZkRzkwZVhCbFQyWW9ZWE56WlhKMFQySnFaV04wS0hSaGNtZGxkQ2twZlN4b1lYTTZablZ1WTNScGIyNG9kR0Z5WjJWMExIQnliM0JsY25SNVMyVjVLWHR5WlhSMWNtNGdjSEp2Y0dWeWRIbExaWGtnYVc0Z2RHRnlaMlYwZlN4cGMwVjRkR1Z1YzJsaWJHVTZablZ1WTNScGIyNG9kR0Z5WjJWMEtYdHlaWFIxY200aElXbHpSWGgwWlc1emFXSnNaU2hoYzNObGNuUlBZbXBsWTNRb2RHRnlaMlYwS1NsOUxHOTNia3RsZVhNNmIzZHVTMlY1Y3l4d2NtVjJaVzUwUlhoMFpXNXphVzl1Y3pwM2NtRndLRTlpYW1WamRDNXdjbVYyWlc1MFJYaDBaVzV6YVc5dWMzeDhjbVYwZFhKdVNYUXBMSE5sZERweVpXWnNaV04wVTJWMGZUdHBaaWh6WlhSUWNtOTBiM1I1Y0dWUFppbHlaV1pzWldOMExuTmxkRkJ5YjNSdmRIbHdaVTltUFdaMWJtTjBhVzl1S0hSaGNtZGxkQ3h3Y205MGJ5bDdjbVYwZFhKdUlITmxkRkJ5YjNSdmRIbHdaVTltS0dGemMyVnlkRTlpYW1WamRDaDBZWEpuWlhRcExIQnliM1J2S1N4MGNuVmxmVHNrWkdWbWFXNWxLRWRNVDBKQlRDeDdVbVZtYkdWamREcDdmWDBwT3lSa1pXWnBibVVvVTFSQlZFbERMRndpVW1WbWJHVmpkRndpTEhKbFpteGxZM1FwZlNncE95Rm1kVzVqZEdsdmJpZ3BleVJrWldacGJtVW9VRkpQVkU4c1FWSlNRVmtzZTJsdVkyeDFaR1Z6T21OeVpXRjBaVUZ5Y21GNVEyOXVkR0ZwYm5Nb2RISjFaU2w5S1Rza1pHVm1hVzVsS0ZCU1QxUlBMRk5VVWtsT1J5eDdZWFE2WTNKbFlYUmxVRzlwYm5SQmRDaDBjblZsS1gwcE8yWjFibU4wYVc5dUlHTnlaV0YwWlU5aWFtVmpkRlJ2UVhKeVlYa29hWE5GYm5SeWFXVnpLWHR5WlhSMWNtNGdablZ1WTNScGIyNG9iMkpxWldOMEtYdDJZWElnVHoxMGIwOWlhbVZqZENodlltcGxZM1FwTEd0bGVYTTlaMlYwUzJWNWN5aHZZbXBsWTNRcExHeGxibWQwYUQxclpYbHpMbXhsYm1kMGFDeHBQVEFzY21WemRXeDBQVUZ5Y21GNUtHeGxibWQwYUNrc2EyVjVPMmxtS0dselJXNTBjbWxsY3lsM2FHbHNaU2hzWlc1bmRHZythU2x5WlhOMWJIUmJhVjA5VzJ0bGVUMXJaWGx6VzJrcksxMHNUMXRyWlhsZFhUdGxiSE5sSUhkb2FXeGxLR3hsYm1kMGFENXBLWEpsYzNWc2RGdHBYVDFQVzJ0bGVYTmJhU3NyWFYwN2NtVjBkWEp1SUhKbGMzVnNkSDE5SkdSbFptbHVaU2hUVkVGVVNVTXNUMEpLUlVOVUxIdG5aWFJQZDI1UWNtOXdaWEowZVVSbGMyTnlhWEIwYjNKek9tWjFibU4wYVc5dUtHOWlhbVZqZENsN2RtRnlJRTg5ZEc5UFltcGxZM1FvYjJKcVpXTjBLU3h5WlhOMWJIUTllMzA3Wm05eVJXRmphQzVqWVd4c0tHOTNia3RsZVhNb1R5a3NablZ1WTNScGIyNG9hMlY1S1h0a1pXWnBibVZRY205d1pYSjBlU2h5WlhOMWJIUXNhMlY1TEdSbGMyTnlhWEIwYjNJb01DeG5aWFJQZDI1RVpYTmpjbWx3ZEc5eUtFOHNhMlY1S1NrcGZTazdjbVYwZFhKdUlISmxjM1ZzZEgwc2RtRnNkV1Z6T21OeVpXRjBaVTlpYW1WamRGUnZRWEp5WVhrb1ptRnNjMlVwTEdWdWRISnBaWE02WTNKbFlYUmxUMkpxWldOMFZHOUJjbkpoZVNoMGNuVmxLWDBwT3lSa1pXWnBibVVvVTFSQlZFbERMRkpGUjBWWVVDeDdaWE5qWVhCbE9tTnlaV0YwWlZKbGNHeGhZMlZ5S0M4b1cxeGNYRnhjWEMxYlhGeGRlMzBvS1NvclB5NHNYaVI4WFNrdlp5eGNJbHhjWEZ3a01Wd2lMSFJ5ZFdVcGZTbDlLQ2s3SVdaMWJtTjBhVzl1S0ZKRlJrVlNSVTVEUlNsN1VrVkdSVkpGVGtORlgwZEZWRDFuWlhSWFpXeHNTMjV2ZDI1VGVXMWliMndvVWtWR1JWSkZUa05GSzF3aVIyVjBYQ0lzZEhKMVpTazdkbUZ5SUZKRlJrVlNSVTVEUlY5VFJWUTlaMlYwVjJWc2JFdHViM2R1VTNsdFltOXNLRkpGUmtWU1JVNURSU3RUUlZRc2RISjFaU2tzVWtWR1JWSkZUa05GWDBSRlRFVlVSVDFuWlhSWFpXeHNTMjV2ZDI1VGVXMWliMndvVWtWR1JWSkZUa05GSzF3aVJHVnNaWFJsWENJc2RISjFaU2s3SkdSbFptbHVaU2hUVkVGVVNVTXNVMWxOUWs5TUxIdHlaV1psY21WdVkyVkhaWFE2VWtWR1JWSkZUa05GWDBkRlZDeHlaV1psY21WdVkyVlRaWFE2VWtWR1JWSkZUa05GWDFORlZDeHlaV1psY21WdVkyVkVaV3hsZEdVNlVrVkdSVkpGVGtORlgwUkZURVZVUlgwcE8yaHBaR1JsYmloR2RXNWpkR2x2YmxCeWIzUnZMRkpGUmtWU1JVNURSVjlIUlZRc2NtVjBkWEp1VkdocGN5azdablZ1WTNScGIyNGdjMlYwVFdGd1RXVjBhRzlrY3loRGIyNXpkSEoxWTNSdmNpbDdhV1lvUTI5dWMzUnlkV04wYjNJcGUzWmhjaUJOWVhCUWNtOTBiejFEYjI1emRISjFZM1J2Y2x0UVVrOVVUMVJaVUVWZE8yaHBaR1JsYmloTllYQlFjbTkwYnl4U1JVWkZVa1ZPUTBWZlIwVlVMRTFoY0ZCeWIzUnZMbWRsZENrN2FHbGtaR1Z1S0UxaGNGQnliM1J2TEZKRlJrVlNSVTVEUlY5VFJWUXNUV0Z3VUhKdmRHOHVjMlYwS1R0b2FXUmtaVzRvVFdGd1VISnZkRzhzVWtWR1JWSkZUa05GWDBSRlRFVlVSU3hOWVhCUWNtOTBiMXRjSW1SbGJHVjBaVndpWFNsOWZYTmxkRTFoY0UxbGRHaHZaSE1vVFdGd0tUdHpaWFJOWVhCTlpYUm9iMlJ6S0ZkbFlXdE5ZWEFwZlNoY0luSmxabVZ5Wlc1alpWd2lLVHNoWm5WdVkzUnBiMjRvWVhKeVlYbFRkR0YwYVdOektYdG1kVzVqZEdsdmJpQnpaWFJCY25KaGVWTjBZWFJwWTNNb2EyVjVjeXhzWlc1bmRHZ3BlMlp2Y2tWaFkyZ3VZMkZzYkNoaGNuSmhlU2hyWlhsektTeG1kVzVqZEdsdmJpaHJaWGtwZTJsbUtHdGxlU0JwYmlCQmNuSmhlVkJ5YjNSdktXRnljbUY1VTNSaGRHbGpjMXRyWlhsZFBXTjBlQ2hqWVd4c0xFRnljbUY1VUhKdmRHOWJhMlY1WFN4c1pXNW5kR2dwZlNsOWMyVjBRWEp5WVhsVGRHRjBhV056S0Z3aWNHOXdMSEpsZG1WeWMyVXNjMmhwWm5Rc2EyVjVjeXgyWVd4MVpYTXNaVzUwY21sbGMxd2lMREVwTzNObGRFRnljbUY1VTNSaGRHbGpjeWhjSW1sdVpHVjRUMllzWlhabGNua3NjMjl0WlN4bWIzSkZZV05vTEcxaGNDeG1hV3gwWlhJc1ptbHVaQ3htYVc1a1NXNWtaWGdzYVc1amJIVmtaWE5jSWl3ektUdHpaWFJCY25KaGVWTjBZWFJwWTNNb1hDSnFiMmx1TEhOc2FXTmxMR052Ym1OaGRDeHdkWE5vTEhOd2JHbGpaU3gxYm5Ob2FXWjBMSE52Y25Rc2JHRnpkRWx1WkdWNFQyWXNYQ0lyWENKeVpXUjFZMlVzY21Wa2RXTmxVbWxuYUhRc1kyOXdlVmRwZEdocGJpeG1hV3hzTEhSMWNtNWNJaWs3SkdSbFptbHVaU2hUVkVGVVNVTXNRVkpTUVZrc1lYSnlZWGxUZEdGMGFXTnpLWDBvZTMwcE95Rm1kVzVqZEdsdmJpaE9iMlJsVEdsemRDbDdhV1lvWm5KaGJXVjNiM0pySmlaT2IyUmxUR2x6ZENZbUlTaFRXVTFDVDB4ZlNWUkZVa0ZVVDFJZ2FXNGdUbTlrWlV4cGMzUmJVRkpQVkU5VVdWQkZYU2twZTJocFpHUmxiaWhPYjJSbFRHbHpkRnRRVWs5VVQxUlpVRVZkTEZOWlRVSlBURjlKVkVWU1FWUlBVaXhKZEdWeVlYUnZjbk5iUVZKU1FWbGRLWDFKZEdWeVlYUnZjbk11VG05a1pVeHBjM1E5U1hSbGNtRjBiM0p6VzBGU1VrRlpYWDBvWjJ4dlltRnNMazV2WkdWTWFYTjBLWDBvZEhsd1pXOW1JSE5sYkdZaFBWd2lkVzVrWldacGJtVmtYQ0ltSm5ObGJHWXVUV0YwYUQwOVBVMWhkR2cvYzJWc1pqcEdkVzVqZEdsdmJpaGNJbkpsZEhWeWJpQjBhR2x6WENJcEtDa3NkSEoxWlNsOUxIdDlYU3d6T2x0bWRXNWpkR2x2YmloeVpYRjFhWEpsTEcxdlpIVnNaU3hsZUhCdmNuUnpLWHNvWm5WdVkzUnBiMjRvWjJ4dlltRnNLWHNoWm5WdVkzUnBiMjRvWjJ4dlltRnNLWHRjSW5WelpTQnpkSEpwWTNSY0lqdDJZWElnYUdGelQzZHVQVTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrN2RtRnlJSFZ1WkdWbWFXNWxaRHQyWVhJZ2FYUmxjbUYwYjNKVGVXMWliMnc5ZEhsd1pXOW1JRk41YldKdmJEMDlQVndpWm5WdVkzUnBiMjVjSWlZbVUzbHRZbTlzTG1sMFpYSmhkRzl5Zkh4Y0lrQkFhWFJsY21GMGIzSmNJanQyWVhJZ2FXNU5iMlIxYkdVOWRIbHdaVzltSUcxdlpIVnNaVDA5UFZ3aWIySnFaV04wWENJN2RtRnlJSEoxYm5ScGJXVTlaMnh2WW1Gc0xuSmxaMlZ1WlhKaGRHOXlVblZ1ZEdsdFpUdHBaaWh5ZFc1MGFXMWxLWHRwWmlocGJrMXZaSFZzWlNsN2JXOWtkV3hsTG1WNGNHOXlkSE05Y25WdWRHbHRaWDF5WlhSMWNtNTljblZ1ZEdsdFpUMW5iRzlpWVd3dWNtVm5aVzVsY21GMGIzSlNkVzUwYVcxbFBXbHVUVzlrZFd4bFAyMXZaSFZzWlM1bGVIQnZjblJ6T250OU8yWjFibU4wYVc5dUlIZHlZWEFvYVc1dVpYSkdiaXh2ZFhSbGNrWnVMSE5sYkdZc2RISjVURzlqYzB4cGMzUXBlM0psZEhWeWJpQnVaWGNnUjJWdVpYSmhkRzl5S0dsdWJtVnlSbTRzYjNWMFpYSkdiaXh6Wld4bWZIeHVkV3hzTEhSeWVVeHZZM05NYVhOMGZIeGJYU2w5Y25WdWRHbHRaUzUzY21Gd1BYZHlZWEE3Wm5WdVkzUnBiMjRnZEhKNVEyRjBZMmdvWm00c2IySnFMR0Z5WnlsN2RISjVlM0psZEhWeWJudDBlWEJsT2x3aWJtOXliV0ZzWENJc1lYSm5PbVp1TG1OaGJHd29iMkpxTEdGeVp5bDlmV05oZEdOb0tHVnljaWw3Y21WMGRYSnVlM1I1Y0dVNlhDSjBhSEp2ZDF3aUxHRnlaenBsY25KOWZYMTJZWElnUjJWdVUzUmhkR1ZUZFhOd1pXNWtaV1JUZEdGeWREMWNJbk4xYzNCbGJtUmxaRk4wWVhKMFhDSTdkbUZ5SUVkbGJsTjBZWFJsVTNWemNHVnVaR1ZrV1dsbGJHUTlYQ0p6ZFhOd1pXNWtaV1JaYVdWc1pGd2lPM1poY2lCSFpXNVRkR0YwWlVWNFpXTjFkR2x1WnoxY0ltVjRaV04xZEdsdVoxd2lPM1poY2lCSFpXNVRkR0YwWlVOdmJYQnNaWFJsWkQxY0ltTnZiWEJzWlhSbFpGd2lPM1poY2lCRGIyNTBhVzUxWlZObGJuUnBibVZzUFh0OU8yWjFibU4wYVc5dUlFZGxibVZ5WVhSdmNrWjFibU4wYVc5dUtDbDdmV1oxYm1OMGFXOXVJRWRsYm1WeVlYUnZja1oxYm1OMGFXOXVVSEp2ZEc5MGVYQmxLQ2w3ZlhaaGNpQkhjRDFIWlc1bGNtRjBiM0pHZFc1amRHbHZibEJ5YjNSdmRIbHdaUzV3Y205MGIzUjVjR1U5UjJWdVpYSmhkRzl5TG5CeWIzUnZkSGx3WlR0SFpXNWxjbUYwYjNKR2RXNWpkR2x2Ymk1d2NtOTBiM1I1Y0dVOVIzQXVZMjl1YzNSeWRXTjBiM0k5UjJWdVpYSmhkRzl5Um5WdVkzUnBiMjVRY205MGIzUjVjR1U3UjJWdVpYSmhkRzl5Um5WdVkzUnBiMjVRY205MGIzUjVjR1V1WTI5dWMzUnlkV04wYjNJOVIyVnVaWEpoZEc5eVJuVnVZM1JwYjI0N1IyVnVaWEpoZEc5eVJuVnVZM1JwYjI0dVpHbHpjR3hoZVU1aGJXVTlYQ0pIWlc1bGNtRjBiM0pHZFc1amRHbHZibHdpTzNKMWJuUnBiV1V1YVhOSFpXNWxjbUYwYjNKR2RXNWpkR2x2YmoxbWRXNWpkR2x2YmloblpXNUdkVzRwZTNaaGNpQmpkRzl5UFhSNWNHVnZaaUJuWlc1R2RXNDlQVDFjSW1aMWJtTjBhVzl1WENJbUptZGxia1oxYmk1amIyNXpkSEoxWTNSdmNqdHlaWFIxY200Z1kzUnZjajlqZEc5eVBUMDlSMlZ1WlhKaGRHOXlSblZ1WTNScGIyNThmQ2hqZEc5eUxtUnBjM0JzWVhsT1lXMWxmSHhqZEc5eUxtNWhiV1VwUFQwOVhDSkhaVzVsY21GMGIzSkdkVzVqZEdsdmJsd2lPbVpoYkhObGZUdHlkVzUwYVcxbExtMWhjbXM5Wm5WdVkzUnBiMjRvWjJWdVJuVnVLWHRuWlc1R2RXNHVYMTl3Y205MGIxOWZQVWRsYm1WeVlYUnZja1oxYm1OMGFXOXVVSEp2ZEc5MGVYQmxPMmRsYmtaMWJpNXdjbTkwYjNSNWNHVTlUMkpxWldOMExtTnlaV0YwWlNoSGNDazdjbVYwZFhKdUlHZGxia1oxYm4wN2NuVnVkR2x0WlM1aGMzbHVZejFtZFc1amRHbHZiaWhwYm01bGNrWnVMRzkxZEdWeVJtNHNjMlZzWml4MGNubE1iMk56VEdsemRDbDdjbVYwZFhKdUlHNWxkeUJRY205dGFYTmxLR1oxYm1OMGFXOXVLSEpsYzI5c2RtVXNjbVZxWldOMEtYdDJZWElnWjJWdVpYSmhkRzl5UFhkeVlYQW9hVzV1WlhKR2JpeHZkWFJsY2tadUxITmxiR1lzZEhKNVRHOWpjMHhwYzNRcE8zWmhjaUJqWVd4c1RtVjRkRDF6ZEdWd0xtSnBibVFvWjJWdVpYSmhkRzl5TG01bGVIUXBPM1poY2lCallXeHNWR2h5YjNjOWMzUmxjQzVpYVc1a0tHZGxibVZ5WVhSdmNsdGNJblJvY205M1hDSmRLVHRtZFc1amRHbHZiaUJ6ZEdWd0tHRnlaeWw3ZG1GeUlISmxZMjl5WkQxMGNubERZWFJqYUNoMGFHbHpMRzUxYkd3c1lYSm5LVHRwWmloeVpXTnZjbVF1ZEhsd1pUMDlQVndpZEdoeWIzZGNJaWw3Y21WcVpXTjBLSEpsWTI5eVpDNWhjbWNwTzNKbGRIVnlibjEyWVhJZ2FXNW1iejF5WldOdmNtUXVZWEpuTzJsbUtHbHVabTh1Wkc5dVpTbDdjbVZ6YjJ4MlpTaHBibVp2TG5aaGJIVmxLWDFsYkhObGUxQnliMjFwYzJVdWNtVnpiMngyWlNocGJtWnZMblpoYkhWbEtTNTBhR1Z1S0dOaGJHeE9aWGgwTEdOaGJHeFVhSEp2ZHlsOWZXTmhiR3hPWlhoMEtDbDlLWDA3Wm5WdVkzUnBiMjRnUjJWdVpYSmhkRzl5S0dsdWJtVnlSbTRzYjNWMFpYSkdiaXh6Wld4bUxIUnllVXh2WTNOTWFYTjBLWHQyWVhJZ1oyVnVaWEpoZEc5eVBXOTFkR1Z5Um00L1QySnFaV04wTG1OeVpXRjBaU2h2ZFhSbGNrWnVMbkJ5YjNSdmRIbHdaU2s2ZEdocGN6dDJZWElnWTI5dWRHVjRkRDF1WlhjZ1EyOXVkR1Y0ZENoMGNubE1iMk56VEdsemRDazdkbUZ5SUhOMFlYUmxQVWRsYmxOMFlYUmxVM1Z6Y0dWdVpHVmtVM1JoY25RN1puVnVZM1JwYjI0Z2FXNTJiMnRsS0cxbGRHaHZaQ3hoY21jcGUybG1LSE4wWVhSbFBUMDlSMlZ1VTNSaGRHVkZlR1ZqZFhScGJtY3BlM1JvY205M0lHNWxkeUJGY25KdmNpaGNJa2RsYm1WeVlYUnZjaUJwY3lCaGJISmxZV1I1SUhKMWJtNXBibWRjSWlsOWFXWW9jM1JoZEdVOVBUMUhaVzVUZEdGMFpVTnZiWEJzWlhSbFpDbDdjbVYwZFhKdUlHUnZibVZTWlhOMWJIUW9LWDEzYUdsc1pTaDBjblZsS1h0MllYSWdaR1ZzWldkaGRHVTlZMjl1ZEdWNGRDNWtaV3hsWjJGMFpUdHBaaWhrWld4bFoyRjBaU2w3ZG1GeUlISmxZMjl5WkQxMGNubERZWFJqYUNoa1pXeGxaMkYwWlM1cGRHVnlZWFJ2Y2x0dFpYUm9iMlJkTEdSbGJHVm5ZWFJsTG1sMFpYSmhkRzl5TEdGeVp5azdhV1lvY21WamIzSmtMblI1Y0dVOVBUMWNJblJvY205M1hDSXBlMk52Ym5SbGVIUXVaR1ZzWldkaGRHVTliblZzYkR0dFpYUm9iMlE5WENKMGFISnZkMXdpTzJGeVp6MXlaV052Y21RdVlYSm5PMk52Ym5ScGJuVmxmVzFsZEdodlpEMWNJbTVsZUhSY0lqdGhjbWM5ZFc1a1pXWnBibVZrTzNaaGNpQnBibVp2UFhKbFkyOXlaQzVoY21jN2FXWW9hVzVtYnk1a2IyNWxLWHRqYjI1MFpYaDBXMlJsYkdWbllYUmxMbkpsYzNWc2RFNWhiV1ZkUFdsdVptOHVkbUZzZFdVN1kyOXVkR1Y0ZEM1dVpYaDBQV1JsYkdWbllYUmxMbTVsZUhSTWIyTjlaV3h6Wlh0emRHRjBaVDFIWlc1VGRHRjBaVk4xYzNCbGJtUmxaRmxwWld4a08zSmxkSFZ5YmlCcGJtWnZmV052Ym5SbGVIUXVaR1ZzWldkaGRHVTliblZzYkgxcFppaHRaWFJvYjJROVBUMWNJbTVsZUhSY0lpbDdhV1lvYzNSaGRHVTlQVDFIWlc1VGRHRjBaVk4xYzNCbGJtUmxaRk4wWVhKMEppWjBlWEJsYjJZZ1lYSm5JVDA5WENKMWJtUmxabWx1WldSY0lpbDdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSW1GMGRHVnRjSFFnZEc4Z2MyVnVaQ0JjSWl0S1UwOU9Mbk4wY21sdVoybG1lU2hoY21jcEsxd2lJSFJ2SUc1bGQySnZjbTRnWjJWdVpYSmhkRzl5WENJcGZXbG1LSE4wWVhSbFBUMDlSMlZ1VTNSaGRHVlRkWE53Wlc1a1pXUlphV1ZzWkNsN1kyOXVkR1Y0ZEM1elpXNTBQV0Z5WjMxbGJITmxlMlJsYkdWMFpTQmpiMjUwWlhoMExuTmxiblI5ZldWc2MyVWdhV1lvYldWMGFHOWtQVDA5WENKMGFISnZkMXdpS1h0cFppaHpkR0YwWlQwOVBVZGxibE4wWVhSbFUzVnpjR1Z1WkdWa1UzUmhjblFwZTNOMFlYUmxQVWRsYmxOMFlYUmxRMjl0Y0d4bGRHVmtPM1JvY205M0lHRnlaMzFwWmloamIyNTBaWGgwTG1ScGMzQmhkR05vUlhoalpYQjBhVzl1S0dGeVp5a3BlMjFsZEdodlpEMWNJbTVsZUhSY0lqdGhjbWM5ZFc1a1pXWnBibVZrZlgxbGJITmxJR2xtS0cxbGRHaHZaRDA5UFZ3aWNtVjBkWEp1WENJcGUyTnZiblJsZUhRdVlXSnlkWEIwS0Z3aWNtVjBkWEp1WENJc1lYSm5LWDF6ZEdGMFpUMUhaVzVUZEdGMFpVVjRaV04xZEdsdVp6dDJZWElnY21WamIzSmtQWFJ5ZVVOaGRHTm9LR2x1Ym1WeVJtNHNjMlZzWml4amIyNTBaWGgwS1R0cFppaHlaV052Y21RdWRIbHdaVDA5UFZ3aWJtOXliV0ZzWENJcGUzTjBZWFJsUFdOdmJuUmxlSFF1Wkc5dVpUOUhaVzVUZEdGMFpVTnZiWEJzWlhSbFpEcEhaVzVUZEdGMFpWTjFjM0JsYm1SbFpGbHBaV3hrTzNaaGNpQnBibVp2UFh0MllXeDFaVHB5WldOdmNtUXVZWEpuTEdSdmJtVTZZMjl1ZEdWNGRDNWtiMjVsZlR0cFppaHlaV052Y21RdVlYSm5QVDA5UTI5dWRHbHVkV1ZUWlc1MGFXNWxiQ2w3YVdZb1kyOXVkR1Y0ZEM1a1pXeGxaMkYwWlNZbWJXVjBhRzlrUFQwOVhDSnVaWGgwWENJcGUyRnlaejExYm1SbFptbHVaV1I5ZldWc2MyVjdjbVYwZFhKdUlHbHVabTk5ZldWc2MyVWdhV1lvY21WamIzSmtMblI1Y0dVOVBUMWNJblJvY205M1hDSXBlM04wWVhSbFBVZGxibE4wWVhSbFEyOXRjR3hsZEdWa08ybG1LRzFsZEdodlpEMDlQVndpYm1WNGRGd2lLWHRqYjI1MFpYaDBMbVJwYzNCaGRHTm9SWGhqWlhCMGFXOXVLSEpsWTI5eVpDNWhjbWNwZldWc2MyVjdZWEpuUFhKbFkyOXlaQzVoY21kOWZYMTlaMlZ1WlhKaGRHOXlMbTVsZUhROWFXNTJiMnRsTG1KcGJtUW9aMlZ1WlhKaGRHOXlMRndpYm1WNGRGd2lLVHRuWlc1bGNtRjBiM0piWENKMGFISnZkMXdpWFQxcGJuWnZhMlV1WW1sdVpDaG5aVzVsY21GMGIzSXNYQ0owYUhKdmQxd2lLVHRuWlc1bGNtRjBiM0piWENKeVpYUjFjbTVjSWwwOWFXNTJiMnRsTG1KcGJtUW9aMlZ1WlhKaGRHOXlMRndpY21WMGRYSnVYQ0lwTzNKbGRIVnliaUJuWlc1bGNtRjBiM0o5UjNCYmFYUmxjbUYwYjNKVGVXMWliMnhkUFdaMWJtTjBhVzl1S0NsN2NtVjBkWEp1SUhSb2FYTjlPMGR3TG5SdlUzUnlhVzVuUFdaMWJtTjBhVzl1S0NsN2NtVjBkWEp1WENKYmIySnFaV04wSUVkbGJtVnlZWFJ2Y2wxY0luMDdablZ1WTNScGIyNGdjSFZ6YUZSeWVVVnVkSEo1S0d4dlkzTXBlM1poY2lCbGJuUnllVDE3ZEhKNVRHOWpPbXh2WTNOYk1GMTlPMmxtS0RFZ2FXNGdiRzlqY3lsN1pXNTBjbmt1WTJGMFkyaE1iMk05Ykc5amMxc3hYWDFwWmlneUlHbHVJR3h2WTNNcGUyVnVkSEo1TG1acGJtRnNiSGxNYjJNOWJHOWpjMXN5WFR0bGJuUnllUzVoWm5SbGNreHZZejFzYjJOeld6TmRmWFJvYVhNdWRISjVSVzUwY21sbGN5NXdkWE5vS0dWdWRISjVLWDFtZFc1amRHbHZiaUJ5WlhObGRGUnllVVZ1ZEhKNUtHVnVkSEo1S1h0MllYSWdjbVZqYjNKa1BXVnVkSEo1TG1OdmJYQnNaWFJwYjI1OGZIdDlPM0psWTI5eVpDNTBlWEJsUFZ3aWJtOXliV0ZzWENJN1pHVnNaWFJsSUhKbFkyOXlaQzVoY21jN1pXNTBjbmt1WTI5dGNHeGxkR2x2YmoxeVpXTnZjbVI5Wm5WdVkzUnBiMjRnUTI5dWRHVjRkQ2gwY25sTWIyTnpUR2x6ZENsN2RHaHBjeTUwY25sRmJuUnlhV1Z6UFZ0N2RISjVURzlqT2x3aWNtOXZkRndpZlYwN2RISjVURzlqYzB4cGMzUXVabTl5UldGamFDaHdkWE5vVkhKNVJXNTBjbmtzZEdocGN5azdkR2hwY3k1eVpYTmxkQ2dwZlhKMWJuUnBiV1V1YTJWNWN6MW1kVzVqZEdsdmJpaHZZbXBsWTNRcGUzWmhjaUJyWlhselBWdGRPMlp2Y2loMllYSWdhMlY1SUdsdUlHOWlhbVZqZENsN2EyVjVjeTV3ZFhOb0tHdGxlU2w5YTJWNWN5NXlaWFpsY25ObEtDazdjbVYwZFhKdUlHWjFibU4wYVc5dUlHNWxlSFFvS1h0M2FHbHNaU2hyWlhsekxteGxibWQwYUNsN2RtRnlJR3RsZVQxclpYbHpMbkJ2Y0NncE8ybG1LR3RsZVNCcGJpQnZZbXBsWTNRcGUyNWxlSFF1ZG1Gc2RXVTlhMlY1TzI1bGVIUXVaRzl1WlQxbVlXeHpaVHR5WlhSMWNtNGdibVY0ZEgxOWJtVjRkQzVrYjI1bFBYUnlkV1U3Y21WMGRYSnVJRzVsZUhSOWZUdG1kVzVqZEdsdmJpQjJZV3gxWlhNb2FYUmxjbUZpYkdVcGUybG1LR2wwWlhKaFlteGxLWHQyWVhJZ2FYUmxjbUYwYjNKTlpYUm9iMlE5YVhSbGNtRmliR1ZiYVhSbGNtRjBiM0pUZVcxaWIyeGRPMmxtS0dsMFpYSmhkRzl5VFdWMGFHOWtLWHR5WlhSMWNtNGdhWFJsY21GMGIzSk5aWFJvYjJRdVkyRnNiQ2hwZEdWeVlXSnNaU2w5YVdZb2RIbHdaVzltSUdsMFpYSmhZbXhsTG01bGVIUTlQVDFjSW1aMWJtTjBhVzl1WENJcGUzSmxkSFZ5YmlCcGRHVnlZV0pzWlgxcFppZ2hhWE5PWVU0b2FYUmxjbUZpYkdVdWJHVnVaM1JvS1NsN2RtRnlJR2s5TFRFc2JtVjRkRDFtZFc1amRHbHZiaUJ1WlhoMEtDbDdkMmhwYkdVb0t5dHBQR2wwWlhKaFlteGxMbXhsYm1kMGFDbDdhV1lvYUdGelQzZHVMbU5oYkd3b2FYUmxjbUZpYkdVc2FTa3BlMjVsZUhRdWRtRnNkV1U5YVhSbGNtRmliR1ZiYVYwN2JtVjRkQzVrYjI1bFBXWmhiSE5sTzNKbGRIVnliaUJ1WlhoMGZYMXVaWGgwTG5aaGJIVmxQWFZ1WkdWbWFXNWxaRHR1WlhoMExtUnZibVU5ZEhKMVpUdHlaWFIxY200Z2JtVjRkSDA3Y21WMGRYSnVJRzVsZUhRdWJtVjRkRDF1WlhoMGZYMXlaWFIxY201N2JtVjRkRHBrYjI1bFVtVnpkV3gwZlgxeWRXNTBhVzFsTG5aaGJIVmxjejEyWVd4MVpYTTdablZ1WTNScGIyNGdaRzl1WlZKbGMzVnNkQ2dwZTNKbGRIVnlibnQyWVd4MVpUcDFibVJsWm1sdVpXUXNaRzl1WlRwMGNuVmxmWDFEYjI1MFpYaDBMbkJ5YjNSdmRIbHdaVDE3WTI5dWMzUnlkV04wYjNJNlEyOXVkR1Y0ZEN4eVpYTmxkRHBtZFc1amRHbHZiaWdwZTNSb2FYTXVjSEpsZGowd08zUm9hWE11Ym1WNGREMHdPM1JvYVhNdWMyVnVkRDExYm1SbFptbHVaV1E3ZEdocGN5NWtiMjVsUFdaaGJITmxPM1JvYVhNdVpHVnNaV2RoZEdVOWJuVnNiRHQwYUdsekxuUnllVVZ1ZEhKcFpYTXVabTl5UldGamFDaHlaWE5sZEZSeWVVVnVkSEo1S1R0bWIzSW9kbUZ5SUhSbGJYQkpibVJsZUQwd0xIUmxiWEJPWVcxbE8yaGhjMDkzYmk1allXeHNLSFJvYVhNc2RHVnRjRTVoYldVOVhDSjBYQ0lyZEdWdGNFbHVaR1Y0S1h4OGRHVnRjRWx1WkdWNFBESXdPeXNyZEdWdGNFbHVaR1Y0S1h0MGFHbHpXM1JsYlhCT1lXMWxYVDF1ZFd4c2ZYMHNjM1J2Y0RwbWRXNWpkR2x2YmlncGUzUm9hWE11Wkc5dVpUMTBjblZsTzNaaGNpQnliMjkwUlc1MGNuazlkR2hwY3k1MGNubEZiblJ5YVdWeld6QmRPM1poY2lCeWIyOTBVbVZqYjNKa1BYSnZiM1JGYm5SeWVTNWpiMjF3YkdWMGFXOXVPMmxtS0hKdmIzUlNaV052Y21RdWRIbHdaVDA5UFZ3aWRHaHliM2RjSWlsN2RHaHliM2NnY205dmRGSmxZMjl5WkM1aGNtZDljbVYwZFhKdUlIUm9hWE11Y25aaGJIMHNaR2x6Y0dGMFkyaEZlR05sY0hScGIyNDZablZ1WTNScGIyNG9aWGhqWlhCMGFXOXVLWHRwWmloMGFHbHpMbVJ2Ym1VcGUzUm9jbTkzSUdWNFkyVndkR2x2Ym4xMllYSWdZMjl1ZEdWNGREMTBhR2x6TzJaMWJtTjBhVzl1SUdoaGJtUnNaU2hzYjJNc1kyRjFaMmgwS1h0eVpXTnZjbVF1ZEhsd1pUMWNJblJvY205M1hDSTdjbVZqYjNKa0xtRnlaejFsZUdObGNIUnBiMjQ3WTI5dWRHVjRkQzV1WlhoMFBXeHZZenR5WlhSMWNtNGhJV05oZFdkb2RIMW1iM0lvZG1GeUlHazlkR2hwY3k1MGNubEZiblJ5YVdWekxteGxibWQwYUMweE8yaytQVEE3TFMxcEtYdDJZWElnWlc1MGNuazlkR2hwY3k1MGNubEZiblJ5YVdWelcybGRPM1poY2lCeVpXTnZjbVE5Wlc1MGNua3VZMjl0Y0d4bGRHbHZianRwWmlobGJuUnllUzUwY25sTWIyTTlQVDFjSW5KdmIzUmNJaWw3Y21WMGRYSnVJR2hoYm1Sc1pTaGNJbVZ1WkZ3aUtYMXBaaWhsYm5SeWVTNTBjbmxNYjJNOFBYUm9hWE11Y0hKbGRpbDdkbUZ5SUdoaGMwTmhkR05vUFdoaGMwOTNiaTVqWVd4c0tHVnVkSEo1TEZ3aVkyRjBZMmhNYjJOY0lpazdkbUZ5SUdoaGMwWnBibUZzYkhrOWFHRnpUM2R1TG1OaGJHd29aVzUwY25rc1hDSm1hVzVoYkd4NVRHOWpYQ0lwTzJsbUtHaGhjME5oZEdOb0ppWm9ZWE5HYVc1aGJHeDVLWHRwWmloMGFHbHpMbkJ5WlhZOFpXNTBjbmt1WTJGMFkyaE1iMk1wZTNKbGRIVnliaUJvWVc1a2JHVW9aVzUwY25rdVkyRjBZMmhNYjJNc2RISjFaU2w5Wld4elpTQnBaaWgwYUdsekxuQnlaWFk4Wlc1MGNua3VabWx1WVd4c2VVeHZZeWw3Y21WMGRYSnVJR2hoYm1Sc1pTaGxiblJ5ZVM1bWFXNWhiR3g1VEc5aktYMTlaV3h6WlNCcFppaG9ZWE5EWVhSamFDbDdhV1lvZEdocGN5NXdjbVYyUEdWdWRISjVMbU5oZEdOb1RHOWpLWHR5WlhSMWNtNGdhR0Z1Wkd4bEtHVnVkSEo1TG1OaGRHTm9URzlqTEhSeWRXVXBmWDFsYkhObElHbG1LR2hoYzBacGJtRnNiSGtwZTJsbUtIUm9hWE11Y0hKbGRqeGxiblJ5ZVM1bWFXNWhiR3g1VEc5aktYdHlaWFIxY200Z2FHRnVaR3hsS0dWdWRISjVMbVpwYm1Gc2JIbE1iMk1wZlgxbGJITmxlM1JvY205M0lHNWxkeUJGY25KdmNpaGNJblJ5ZVNCemRHRjBaVzFsYm5RZ2QybDBhRzkxZENCallYUmphQ0J2Y2lCbWFXNWhiR3g1WENJcGZYMTlmU3hoWW5KMWNIUTZablZ1WTNScGIyNG9kSGx3WlN4aGNtY3BlMlp2Y2loMllYSWdhVDEwYUdsekxuUnllVVZ1ZEhKcFpYTXViR1Z1WjNSb0xURTdhVDQ5TURzdExXa3BlM1poY2lCbGJuUnllVDEwYUdsekxuUnllVVZ1ZEhKcFpYTmJhVjA3YVdZb1pXNTBjbmt1ZEhKNVRHOWpQRDEwYUdsekxuQnlaWFltSm1oaGMwOTNiaTVqWVd4c0tHVnVkSEo1TEZ3aVptbHVZV3hzZVV4dlkxd2lLU1ltZEdocGN5NXdjbVYyUEdWdWRISjVMbVpwYm1Gc2JIbE1iMk1wZTNaaGNpQm1hVzVoYkd4NVJXNTBjbms5Wlc1MGNuazdZbkpsWVd0OWZXbG1LR1pwYm1Gc2JIbEZiblJ5ZVNZbUtIUjVjR1U5UFQxY0ltSnlaV0ZyWENKOGZIUjVjR1U5UFQxY0ltTnZiblJwYm5WbFhDSXBKaVptYVc1aGJHeDVSVzUwY25rdWRISjVURzlqUEQxaGNtY21KbUZ5Wnp4bWFXNWhiR3g1Ulc1MGNua3VabWx1WVd4c2VVeHZZeWw3Wm1sdVlXeHNlVVZ1ZEhKNVBXNTFiR3g5ZG1GeUlISmxZMjl5WkQxbWFXNWhiR3g1Ulc1MGNuay9abWx1WVd4c2VVVnVkSEo1TG1OdmJYQnNaWFJwYjI0NmUzMDdjbVZqYjNKa0xuUjVjR1U5ZEhsd1pUdHlaV052Y21RdVlYSm5QV0Z5Wnp0cFppaG1hVzVoYkd4NVJXNTBjbmtwZTNSb2FYTXVibVY0ZEQxbWFXNWhiR3g1Ulc1MGNua3VabWx1WVd4c2VVeHZZMzFsYkhObGUzUm9hWE11WTI5dGNHeGxkR1VvY21WamIzSmtLWDF5WlhSMWNtNGdRMjl1ZEdsdWRXVlRaVzUwYVc1bGJIMHNZMjl0Y0d4bGRHVTZablZ1WTNScGIyNG9jbVZqYjNKa0xHRm1kR1Z5VEc5aktYdHBaaWh5WldOdmNtUXVkSGx3WlQwOVBWd2lkR2h5YjNkY0lpbDdkR2h5YjNjZ2NtVmpiM0prTG1GeVozMXBaaWh5WldOdmNtUXVkSGx3WlQwOVBWd2lZbkpsWVd0Y0lueDhjbVZqYjNKa0xuUjVjR1U5UFQxY0ltTnZiblJwYm5WbFhDSXBlM1JvYVhNdWJtVjRkRDF5WldOdmNtUXVZWEpuZldWc2MyVWdhV1lvY21WamIzSmtMblI1Y0dVOVBUMWNJbkpsZEhWeWJsd2lLWHQwYUdsekxuSjJZV3c5Y21WamIzSmtMbUZ5Wnp0MGFHbHpMbTVsZUhROVhDSmxibVJjSW4xbGJITmxJR2xtS0hKbFkyOXlaQzUwZVhCbFBUMDlYQ0p1YjNKdFlXeGNJaVltWVdaMFpYSk1iMk1wZTNSb2FYTXVibVY0ZEQxaFpuUmxja3h2WTMxeVpYUjFjbTRnUTI5dWRHbHVkV1ZUWlc1MGFXNWxiSDBzWm1sdWFYTm9PbVoxYm1OMGFXOXVLR1pwYm1Gc2JIbE1iMk1wZTJadmNpaDJZWElnYVQxMGFHbHpMblJ5ZVVWdWRISnBaWE11YkdWdVozUm9MVEU3YVQ0OU1Ec3RMV2twZTNaaGNpQmxiblJ5ZVQxMGFHbHpMblJ5ZVVWdWRISnBaWE5iYVYwN2FXWW9aVzUwY25rdVptbHVZV3hzZVV4dll6MDlQV1pwYm1Gc2JIbE1iMk1wZTNKbGRIVnliaUIwYUdsekxtTnZiWEJzWlhSbEtHVnVkSEo1TG1OdmJYQnNaWFJwYjI0c1pXNTBjbmt1WVdaMFpYSk1iMk1wZlgxOUxGd2lZMkYwWTJoY0lqcG1kVzVqZEdsdmJpaDBjbmxNYjJNcGUyWnZjaWgyWVhJZ2FUMTBhR2x6TG5SeWVVVnVkSEpwWlhNdWJHVnVaM1JvTFRFN2FUNDlNRHN0TFdrcGUzWmhjaUJsYm5SeWVUMTBhR2x6TG5SeWVVVnVkSEpwWlhOYmFWMDdhV1lvWlc1MGNua3VkSEo1VEc5alBUMDlkSEo1VEc5aktYdDJZWElnY21WamIzSmtQV1Z1ZEhKNUxtTnZiWEJzWlhScGIyNDdhV1lvY21WamIzSmtMblI1Y0dVOVBUMWNJblJvY205M1hDSXBlM1poY2lCMGFISnZkMjQ5Y21WamIzSmtMbUZ5Wnp0eVpYTmxkRlJ5ZVVWdWRISjVLR1Z1ZEhKNUtYMXlaWFIxY200Z2RHaHliM2R1ZlgxMGFISnZkeUJ1WlhjZ1JYSnliM0lvWENKcGJHeGxaMkZzSUdOaGRHTm9JR0YwZEdWdGNIUmNJaWw5TEdSbGJHVm5ZWFJsV1dsbGJHUTZablZ1WTNScGIyNG9hWFJsY21GaWJHVXNjbVZ6ZFd4MFRtRnRaU3h1WlhoMFRHOWpLWHQwYUdsekxtUmxiR1ZuWVhSbFBYdHBkR1Z5WVhSdmNqcDJZV3gxWlhNb2FYUmxjbUZpYkdVcExISmxjM1ZzZEU1aGJXVTZjbVZ6ZFd4MFRtRnRaU3h1WlhoMFRHOWpPbTVsZUhSTWIyTjlPM0psZEhWeWJpQkRiMjUwYVc1MVpWTmxiblJwYm1Wc2ZYMTlLSFI1Y0dWdlppQm5iRzlpWVd3OVBUMWNJbTlpYW1WamRGd2lQMmRzYjJKaGJEcDBlWEJsYjJZZ2QybHVaRzkzUFQwOVhDSnZZbXBsWTNSY0lqOTNhVzVrYjNjNmRHaHBjeWw5S1M1allXeHNLSFJvYVhNc2RIbHdaVzltSUdkc2IySmhiQ0U5UFZ3aWRXNWtaV1pwYm1Wa1hDSS9aMnh2WW1Gc09uUjVjR1Z2WmlCelpXeG1JVDA5WENKMWJtUmxabWx1WldSY0lqOXpaV3htT25SNWNHVnZaaUIzYVc1a2IzY2hQVDFjSW5WdVpHVm1hVzVsWkZ3aVAzZHBibVJ2ZHpwN2ZTbDlMSHQ5WFgwc2UzMHNXekZkS1RzaVhYMD0iLCIvKipcbiAqIENvcmUuanMgMC42LjFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzXG4gKiBMaWNlbnNlOiBodHRwOi8vcm9jay5taXQtbGljZW5zZS5vcmdcbiAqIMKpIDIwMTUgRGVuaXMgUHVzaGthcmV2XG4gKi9cbiFmdW5jdGlvbihnbG9iYWwsIGZyYW1ld29yaywgdW5kZWZpbmVkKXtcbid1c2Ugc3RyaWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29tbW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvLyBTaG9ydGN1dHMgZm9yIFtbQ2xhc3NdXSAmIHByb3BlcnR5IG5hbWVzXHJcbnZhciBPQkpFQ1QgICAgICAgICAgPSAnT2JqZWN0J1xyXG4gICwgRlVOQ1RJT04gICAgICAgID0gJ0Z1bmN0aW9uJ1xyXG4gICwgQVJSQVkgICAgICAgICAgID0gJ0FycmF5J1xyXG4gICwgU1RSSU5HICAgICAgICAgID0gJ1N0cmluZydcclxuICAsIE5VTUJFUiAgICAgICAgICA9ICdOdW1iZXInXHJcbiAgLCBSRUdFWFAgICAgICAgICAgPSAnUmVnRXhwJ1xyXG4gICwgREFURSAgICAgICAgICAgID0gJ0RhdGUnXHJcbiAgLCBNQVAgICAgICAgICAgICAgPSAnTWFwJ1xyXG4gICwgU0VUICAgICAgICAgICAgID0gJ1NldCdcclxuICAsIFdFQUtNQVAgICAgICAgICA9ICdXZWFrTWFwJ1xyXG4gICwgV0VBS1NFVCAgICAgICAgID0gJ1dlYWtTZXQnXHJcbiAgLCBTWU1CT0wgICAgICAgICAgPSAnU3ltYm9sJ1xyXG4gICwgUFJPTUlTRSAgICAgICAgID0gJ1Byb21pc2UnXHJcbiAgLCBNQVRIICAgICAgICAgICAgPSAnTWF0aCdcclxuICAsIEFSR1VNRU5UUyAgICAgICA9ICdBcmd1bWVudHMnXHJcbiAgLCBQUk9UT1RZUEUgICAgICAgPSAncHJvdG90eXBlJ1xyXG4gICwgQ09OU1RSVUNUT1IgICAgID0gJ2NvbnN0cnVjdG9yJ1xyXG4gICwgVE9fU1RSSU5HICAgICAgID0gJ3RvU3RyaW5nJ1xyXG4gICwgVE9fU1RSSU5HX1RBRyAgID0gVE9fU1RSSU5HICsgJ1RhZydcclxuICAsIFRPX0xPQ0FMRSAgICAgICA9ICd0b0xvY2FsZVN0cmluZydcclxuICAsIEhBU19PV04gICAgICAgICA9ICdoYXNPd25Qcm9wZXJ0eSdcclxuICAsIEZPUl9FQUNIICAgICAgICA9ICdmb3JFYWNoJ1xyXG4gICwgSVRFUkFUT1IgICAgICAgID0gJ2l0ZXJhdG9yJ1xyXG4gICwgRkZfSVRFUkFUT1IgICAgID0gJ0BAJyArIElURVJBVE9SXHJcbiAgLCBQUk9DRVNTICAgICAgICAgPSAncHJvY2VzcydcclxuICAsIENSRUFURV9FTEVNRU5UICA9ICdjcmVhdGVFbGVtZW50J1xyXG4gIC8vIEFsaWFzZXMgZ2xvYmFsIG9iamVjdHMgYW5kIHByb3RvdHlwZXNcclxuICAsIEZ1bmN0aW9uICAgICAgICA9IGdsb2JhbFtGVU5DVElPTl1cclxuICAsIE9iamVjdCAgICAgICAgICA9IGdsb2JhbFtPQkpFQ1RdXHJcbiAgLCBBcnJheSAgICAgICAgICAgPSBnbG9iYWxbQVJSQVldXHJcbiAgLCBTdHJpbmcgICAgICAgICAgPSBnbG9iYWxbU1RSSU5HXVxyXG4gICwgTnVtYmVyICAgICAgICAgID0gZ2xvYmFsW05VTUJFUl1cclxuICAsIFJlZ0V4cCAgICAgICAgICA9IGdsb2JhbFtSRUdFWFBdXHJcbiAgLCBEYXRlICAgICAgICAgICAgPSBnbG9iYWxbREFURV1cclxuICAsIE1hcCAgICAgICAgICAgICA9IGdsb2JhbFtNQVBdXHJcbiAgLCBTZXQgICAgICAgICAgICAgPSBnbG9iYWxbU0VUXVxyXG4gICwgV2Vha01hcCAgICAgICAgID0gZ2xvYmFsW1dFQUtNQVBdXHJcbiAgLCBXZWFrU2V0ICAgICAgICAgPSBnbG9iYWxbV0VBS1NFVF1cclxuICAsIFN5bWJvbCAgICAgICAgICA9IGdsb2JhbFtTWU1CT0xdXHJcbiAgLCBNYXRoICAgICAgICAgICAgPSBnbG9iYWxbTUFUSF1cclxuICAsIFR5cGVFcnJvciAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcclxuICAsIFJhbmdlRXJyb3IgICAgICA9IGdsb2JhbC5SYW5nZUVycm9yXHJcbiAgLCBzZXRUaW1lb3V0ICAgICAgPSBnbG9iYWwuc2V0VGltZW91dFxyXG4gICwgc2V0SW1tZWRpYXRlICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxyXG4gICwgY2xlYXJJbW1lZGlhdGUgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXHJcbiAgLCBwYXJzZUludCAgICAgICAgPSBnbG9iYWwucGFyc2VJbnRcclxuICAsIGlzRmluaXRlICAgICAgICA9IGdsb2JhbC5pc0Zpbml0ZVxyXG4gICwgcHJvY2VzcyAgICAgICAgID0gZ2xvYmFsW1BST0NFU1NdXHJcbiAgLCBuZXh0VGljayAgICAgICAgPSBwcm9jZXNzICYmIHByb2Nlc3MubmV4dFRpY2tcclxuICAsIGRvY3VtZW50ICAgICAgICA9IGdsb2JhbC5kb2N1bWVudFxyXG4gICwgaHRtbCAgICAgICAgICAgID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcbiAgLCBuYXZpZ2F0b3IgICAgICAgPSBnbG9iYWwubmF2aWdhdG9yXHJcbiAgLCBkZWZpbmUgICAgICAgICAgPSBnbG9iYWwuZGVmaW5lXHJcbiAgLCBjb25zb2xlICAgICAgICAgPSBnbG9iYWwuY29uc29sZSB8fCB7fVxyXG4gICwgQXJyYXlQcm90byAgICAgID0gQXJyYXlbUFJPVE9UWVBFXVxyXG4gICwgT2JqZWN0UHJvdG8gICAgID0gT2JqZWN0W1BST1RPVFlQRV1cclxuICAsIEZ1bmN0aW9uUHJvdG8gICA9IEZ1bmN0aW9uW1BST1RPVFlQRV1cclxuICAsIEluZmluaXR5ICAgICAgICA9IDEgLyAwXHJcbiAgLCBET1QgICAgICAgICAgICAgPSAnLic7XHJcblxyXG4vLyBodHRwOi8vanNwZXJmLmNvbS9jb3JlLWpzLWlzb2JqZWN0XHJcbmZ1bmN0aW9uIGlzT2JqZWN0KGl0KXtcclxuICByZXR1cm4gaXQgIT09IG51bGwgJiYgKHR5cGVvZiBpdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2YgaXQgPT0gJ2Z1bmN0aW9uJyk7XHJcbn1cclxuZnVuY3Rpb24gaXNGdW5jdGlvbihpdCl7XHJcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnZnVuY3Rpb24nO1xyXG59XHJcbi8vIE5hdGl2ZSBmdW5jdGlvbj9cclxudmFyIGlzTmF0aXZlID0gY3R4KC8uLy50ZXN0LCAvXFxbbmF0aXZlIGNvZGVcXF1cXHMqXFx9XFxzKiQvLCAxKTtcclxuXHJcbi8vIE9iamVjdCBpbnRlcm5hbCBbW0NsYXNzXV0gb3IgdG9TdHJpbmdUYWdcclxuLy8gaHR0cDovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xyXG52YXIgdG9TdHJpbmcgPSBPYmplY3RQcm90b1tUT19TVFJJTkddO1xyXG5mdW5jdGlvbiBzZXRUb1N0cmluZ1RhZyhpdCwgdGFnLCBzdGF0KXtcclxuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXRbUFJPVE9UWVBFXSwgU1lNQk9MX1RBRykpaGlkZGVuKGl0LCBTWU1CT0xfVEFHLCB0YWcpO1xyXG59XHJcbmZ1bmN0aW9uIGNvZihpdCl7XHJcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcclxufVxyXG5mdW5jdGlvbiBjbGFzc29mKGl0KXtcclxuICB2YXIgTywgVDtcclxuICByZXR1cm4gaXQgPT0gdW5kZWZpbmVkID8gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogJ051bGwnXHJcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbU1lNQk9MX1RBR10pID09ICdzdHJpbmcnID8gVCA6IGNvZihPKTtcclxufVxyXG5cclxuLy8gRnVuY3Rpb25cclxudmFyIGNhbGwgID0gRnVuY3Rpb25Qcm90by5jYWxsXHJcbiAgLCBhcHBseSA9IEZ1bmN0aW9uUHJvdG8uYXBwbHlcclxuICAsIFJFRkVSRU5DRV9HRVQ7XHJcbi8vIFBhcnRpYWwgYXBwbHlcclxuZnVuY3Rpb24gcGFydCgvKiAuLi5hcmdzICovKXtcclxuICB2YXIgZm4gICAgID0gYXNzZXJ0RnVuY3Rpb24odGhpcylcclxuICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgLCBhcmdzICAgPSBBcnJheShsZW5ndGgpXHJcbiAgICAsIGkgICAgICA9IDBcclxuICAgICwgXyAgICAgID0gcGF0aC5fXHJcbiAgICAsIGhvbGRlciA9IGZhbHNlO1xyXG4gIHdoaWxlKGxlbmd0aCA+IGkpaWYoKGFyZ3NbaV0gPSBhcmd1bWVudHNbaSsrXSkgPT09IF8paG9sZGVyID0gdHJ1ZTtcclxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XHJcbiAgICB2YXIgdGhhdCAgICA9IHRoaXNcclxuICAgICAgLCBfbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAsIGkgPSAwLCBqID0gMCwgX2FyZ3M7XHJcbiAgICBpZighaG9sZGVyICYmICFfbGVuZ3RoKXJldHVybiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xyXG4gICAgX2FyZ3MgPSBhcmdzLnNsaWNlKCk7XHJcbiAgICBpZihob2xkZXIpZm9yKDtsZW5ndGggPiBpOyBpKyspaWYoX2FyZ3NbaV0gPT09IF8pX2FyZ3NbaV0gPSBhcmd1bWVudHNbaisrXTtcclxuICAgIHdoaWxlKF9sZW5ndGggPiBqKV9hcmdzLnB1c2goYXJndW1lbnRzW2orK10pO1xyXG4gICAgcmV0dXJuIGludm9rZShmbiwgX2FyZ3MsIHRoYXQpO1xyXG4gIH1cclxufVxyXG4vLyBPcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcclxuZnVuY3Rpb24gY3R4KGZuLCB0aGF0LCBsZW5ndGgpe1xyXG4gIGFzc2VydEZ1bmN0aW9uKGZuKTtcclxuICBpZih+bGVuZ3RoICYmIHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XHJcbiAgc3dpdGNoKGxlbmd0aCl7XHJcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcclxuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XHJcbiAgICB9XHJcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XHJcbiAgICB9XHJcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcclxuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XHJcbiAgICB9XHJcbiAgfSByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XHJcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xyXG4gIH1cclxufVxyXG4vLyBGYXN0IGFwcGx5XHJcbi8vIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxyXG5mdW5jdGlvbiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpe1xyXG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcclxuICBzd2l0Y2goYXJncy5sZW5ndGggfCAwKXtcclxuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xyXG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xyXG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xyXG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xyXG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xyXG4gICAgY2FzZSA1OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pO1xyXG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcclxufVxyXG5cclxuLy8gT2JqZWN0OlxyXG52YXIgY3JlYXRlICAgICAgICAgICA9IE9iamVjdC5jcmVhdGVcclxuICAsIGdldFByb3RvdHlwZU9mICAgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2ZcclxuICAsIHNldFByb3RvdHlwZU9mICAgPSBPYmplY3Quc2V0UHJvdG90eXBlT2ZcclxuICAsIGRlZmluZVByb3BlcnR5ICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHlcclxuICAsIGRlZmluZVByb3BlcnRpZXMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllc1xyXG4gICwgZ2V0T3duRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JcclxuICAsIGdldEtleXMgICAgICAgICAgPSBPYmplY3Qua2V5c1xyXG4gICwgZ2V0TmFtZXMgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXHJcbiAgLCBnZXRTeW1ib2xzICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sc1xyXG4gICwgaXNGcm96ZW4gICAgICAgICA9IE9iamVjdC5pc0Zyb3plblxyXG4gICwgaGFzICAgICAgICAgICAgICA9IGN0eChjYWxsLCBPYmplY3RQcm90b1tIQVNfT1dOXSwgMilcclxuICAvLyBEdW1teSwgZml4IGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5nIGluIGVzNSBtb2R1bGVcclxuICAsIEVTNU9iamVjdCAgICAgICAgPSBPYmplY3RcclxuICAsIERpY3Q7XHJcbmZ1bmN0aW9uIHRvT2JqZWN0KGl0KXtcclxuICByZXR1cm4gRVM1T2JqZWN0KGFzc2VydERlZmluZWQoaXQpKTtcclxufVxyXG5mdW5jdGlvbiByZXR1cm5JdChpdCl7XHJcbiAgcmV0dXJuIGl0O1xyXG59XHJcbmZ1bmN0aW9uIHJldHVyblRoaXMoKXtcclxuICByZXR1cm4gdGhpcztcclxufVxyXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBrZXkpe1xyXG4gIGlmKGhhcyhvYmplY3QsIGtleSkpcmV0dXJuIG9iamVjdFtrZXldO1xyXG59XHJcbmZ1bmN0aW9uIG93bktleXMoaXQpe1xyXG4gIGFzc2VydE9iamVjdChpdCk7XHJcbiAgcmV0dXJuIGdldFN5bWJvbHMgPyBnZXROYW1lcyhpdCkuY29uY2F0KGdldFN5bWJvbHMoaXQpKSA6IGdldE5hbWVzKGl0KTtcclxufVxyXG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXHJcbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlKXtcclxuICB2YXIgVCA9IE9iamVjdChhc3NlcnREZWZpbmVkKHRhcmdldCkpXHJcbiAgICAsIGwgPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAsIGkgPSAxO1xyXG4gIHdoaWxlKGwgPiBpKXtcclxuICAgIHZhciBTICAgICAgPSBFUzVPYmplY3QoYXJndW1lbnRzW2krK10pXHJcbiAgICAgICwga2V5cyAgID0gZ2V0S2V5cyhTKVxyXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAgICwgaiAgICAgID0gMFxyXG4gICAgICAsIGtleTtcclxuICAgIHdoaWxlKGxlbmd0aCA+IGopVFtrZXkgPSBrZXlzW2orK11dID0gU1trZXldO1xyXG4gIH1cclxuICByZXR1cm4gVDtcclxufVxyXG5mdW5jdGlvbiBrZXlPZihvYmplY3QsIGVsKXtcclxuICB2YXIgTyAgICAgID0gdG9PYmplY3Qob2JqZWN0KVxyXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXHJcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXHJcbiAgICAsIGluZGV4ICA9IDBcclxuICAgICwga2V5O1xyXG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XHJcbn1cclxuXHJcbi8vIEFycmF5XHJcbi8vIGFycmF5KCdzdHIxLHN0cjIsc3RyMycpID0+IFsnc3RyMScsICdzdHIyJywgJ3N0cjMnXVxyXG5mdW5jdGlvbiBhcnJheShpdCl7XHJcbiAgcmV0dXJuIFN0cmluZyhpdCkuc3BsaXQoJywnKTtcclxufVxyXG52YXIgcHVzaCAgICA9IEFycmF5UHJvdG8ucHVzaFxyXG4gICwgdW5zaGlmdCA9IEFycmF5UHJvdG8udW5zaGlmdFxyXG4gICwgc2xpY2UgICA9IEFycmF5UHJvdG8uc2xpY2VcclxuICAsIHNwbGljZSAgPSBBcnJheVByb3RvLnNwbGljZVxyXG4gICwgaW5kZXhPZiA9IEFycmF5UHJvdG8uaW5kZXhPZlxyXG4gICwgZm9yRWFjaCA9IEFycmF5UHJvdG9bRk9SX0VBQ0hdO1xyXG4vKlxyXG4gKiAwIC0+IGZvckVhY2hcclxuICogMSAtPiBtYXBcclxuICogMiAtPiBmaWx0ZXJcclxuICogMyAtPiBzb21lXHJcbiAqIDQgLT4gZXZlcnlcclxuICogNSAtPiBmaW5kXHJcbiAqIDYgLT4gZmluZEluZGV4XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVBcnJheU1ldGhvZCh0eXBlKXtcclxuICB2YXIgaXNNYXAgICAgICAgPSB0eXBlID09IDFcclxuICAgICwgaXNGaWx0ZXIgICAgPSB0eXBlID09IDJcclxuICAgICwgaXNTb21lICAgICAgPSB0eXBlID09IDNcclxuICAgICwgaXNFdmVyeSAgICAgPSB0eXBlID09IDRcclxuICAgICwgaXNGaW5kSW5kZXggPSB0eXBlID09IDZcclxuICAgICwgbm9ob2xlcyAgICAgPSB0eXBlID09IDUgfHwgaXNGaW5kSW5kZXg7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uKGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XHJcbiAgICB2YXIgTyAgICAgID0gT2JqZWN0KGFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICwgdGhhdCAgID0gYXJndW1lbnRzWzFdXHJcbiAgICAgICwgc2VsZiAgID0gRVM1T2JqZWN0KE8pXHJcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXHJcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXHJcbiAgICAgICwgaW5kZXggID0gMFxyXG4gICAgICAsIHJlc3VsdCA9IGlzTWFwID8gQXJyYXkobGVuZ3RoKSA6IGlzRmlsdGVyID8gW10gOiB1bmRlZmluZWRcclxuICAgICAgLCB2YWwsIHJlcztcclxuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYobm9ob2xlcyB8fCBpbmRleCBpbiBzZWxmKXtcclxuICAgICAgdmFsID0gc2VsZltpbmRleF07XHJcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XHJcbiAgICAgIGlmKHR5cGUpe1xyXG4gICAgICAgIGlmKGlzTWFwKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgIC8vIG1hcFxyXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaCh0eXBlKXtcclxuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXHJcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxyXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxyXG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxyXG4gICAgICAgIH0gZWxzZSBpZihpc0V2ZXJ5KXJldHVybiBmYWxzZTsgICAgICAgICAgIC8vIGV2ZXJ5XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBpc0ZpbmRJbmRleCA/IC0xIDogaXNTb21lIHx8IGlzRXZlcnkgPyBpc0V2ZXJ5IDogcmVzdWx0O1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVBcnJheUNvbnRhaW5zKGlzQ29udGFpbnMpe1xyXG4gIHJldHVybiBmdW5jdGlvbihlbCAvKiwgZnJvbUluZGV4ID0gMCAqLyl7XHJcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhpcylcclxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcclxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGFyZ3VtZW50c1sxXSwgbGVuZ3RoKTtcclxuICAgIGlmKGlzQ29udGFpbnMgJiYgZWwgIT0gZWwpe1xyXG4gICAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKHNhbWVOYU4oT1tpbmRleF0pKXJldHVybiBpc0NvbnRhaW5zIHx8IGluZGV4O1xyXG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoaXNDb250YWlucyB8fCBpbmRleCBpbiBPKXtcclxuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBpc0NvbnRhaW5zIHx8IGluZGV4O1xyXG4gICAgfSByZXR1cm4gIWlzQ29udGFpbnMgJiYgLTE7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGdlbmVyaWMoQSwgQil7XHJcbiAgLy8gc3RyYW5nZSBJRSBxdWlya3MgbW9kZSBidWcgLT4gdXNlIHR5cGVvZiB2cyBpc0Z1bmN0aW9uXHJcbiAgcmV0dXJuIHR5cGVvZiBBID09ICdmdW5jdGlvbicgPyBBIDogQjtcclxufVxyXG5cclxuLy8gTWF0aFxyXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MWZmZmZmZmZmZmZmZmYgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxyXG4gICwgcG93ICAgID0gTWF0aC5wb3dcclxuICAsIGFicyAgICA9IE1hdGguYWJzXHJcbiAgLCBjZWlsICAgPSBNYXRoLmNlaWxcclxuICAsIGZsb29yICA9IE1hdGguZmxvb3JcclxuICAsIG1heCAgICA9IE1hdGgubWF4XHJcbiAgLCBtaW4gICAgPSBNYXRoLm1pblxyXG4gICwgcmFuZG9tID0gTWF0aC5yYW5kb21cclxuICAsIHRydW5jICA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24oaXQpe1xyXG4gICAgICByZXR1cm4gKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xyXG4gICAgfVxyXG4vLyAyMC4xLjIuNCBOdW1iZXIuaXNOYU4obnVtYmVyKVxyXG5mdW5jdGlvbiBzYW1lTmFOKG51bWJlcil7XHJcbiAgcmV0dXJuIG51bWJlciAhPSBudW1iZXI7XHJcbn1cclxuLy8gNy4xLjQgVG9JbnRlZ2VyXHJcbmZ1bmN0aW9uIHRvSW50ZWdlcihpdCl7XHJcbiAgcmV0dXJuIGlzTmFOKGl0KSA/IDAgOiB0cnVuYyhpdCk7XHJcbn1cclxuLy8gNy4xLjE1IFRvTGVuZ3RoXHJcbmZ1bmN0aW9uIHRvTGVuZ3RoKGl0KXtcclxuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIE1BWF9TQUZFX0lOVEVHRVIpIDogMDtcclxufVxyXG5mdW5jdGlvbiB0b0luZGV4KGluZGV4LCBsZW5ndGgpe1xyXG4gIHZhciBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XHJcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XHJcbn1cclxuZnVuY3Rpb24gbHoobnVtKXtcclxuICByZXR1cm4gbnVtID4gOSA/IG51bSA6ICcwJyArIG51bTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVwbGFjZXIocmVnRXhwLCByZXBsYWNlLCBpc1N0YXRpYyl7XHJcbiAgdmFyIHJlcGxhY2VyID0gaXNPYmplY3QocmVwbGFjZSkgPyBmdW5jdGlvbihwYXJ0KXtcclxuICAgIHJldHVybiByZXBsYWNlW3BhcnRdO1xyXG4gIH0gOiByZXBsYWNlO1xyXG4gIHJldHVybiBmdW5jdGlvbihpdCl7XHJcbiAgICByZXR1cm4gU3RyaW5nKGlzU3RhdGljID8gaXQgOiB0aGlzKS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZXIpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjcmVhdGVQb2ludEF0KHRvU3RyaW5nKXtcclxuICByZXR1cm4gZnVuY3Rpb24ocG9zKXtcclxuICAgIHZhciBzID0gU3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXHJcbiAgICAgICwgbCA9IHMubGVuZ3RoXHJcbiAgICAgICwgYSwgYjtcclxuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gdG9TdHJpbmcgPyAnJyA6IHVuZGVmaW5lZDtcclxuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XHJcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxyXG4gICAgICA/IHRvU3RyaW5nID8gcy5jaGFyQXQoaSkgOiBhXHJcbiAgICAgIDogdG9TdHJpbmcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBc3NlcnRpb24gJiBlcnJvcnNcclxudmFyIFJFRFVDRV9FUlJPUiA9ICdSZWR1Y2Ugb2YgZW1wdHkgb2JqZWN0IHdpdGggbm8gaW5pdGlhbCB2YWx1ZSc7XHJcbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1zZzEsIG1zZzIpe1xyXG4gIGlmKCFjb25kaXRpb24pdGhyb3cgVHlwZUVycm9yKG1zZzIgPyBtc2cxICsgbXNnMiA6IG1zZzEpO1xyXG59XHJcbmZ1bmN0aW9uIGFzc2VydERlZmluZWQoaXQpe1xyXG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0Z1bmN0aW9uIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZCcpO1xyXG4gIHJldHVybiBpdDtcclxufVxyXG5mdW5jdGlvbiBhc3NlcnRGdW5jdGlvbihpdCl7XHJcbiAgYXNzZXJ0KGlzRnVuY3Rpb24oaXQpLCBpdCwgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcclxuICByZXR1cm4gaXQ7XHJcbn1cclxuZnVuY3Rpb24gYXNzZXJ0T2JqZWN0KGl0KXtcclxuICBhc3NlcnQoaXNPYmplY3QoaXQpLCBpdCwgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xyXG4gIHJldHVybiBpdDtcclxufVxyXG5mdW5jdGlvbiBhc3NlcnRJbnN0YW5jZShpdCwgQ29uc3RydWN0b3IsIG5hbWUpe1xyXG4gIGFzc2VydChpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yLCBuYW1lLCBcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIik7XHJcbn1cclxuXHJcbi8vIFByb3BlcnR5IGRlc2NyaXB0b3JzICYgU3ltYm9sXHJcbmZ1bmN0aW9uIGRlc2NyaXB0b3IoYml0bWFwLCB2YWx1ZSl7XHJcbiAgcmV0dXJuIHtcclxuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcclxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcclxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcclxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gc2ltcGxlU2V0KG9iamVjdCwga2V5LCB2YWx1ZSl7XHJcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcclxuICByZXR1cm4gb2JqZWN0O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZURlZmluZXIoYml0bWFwKXtcclxuICByZXR1cm4gREVTQyA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XHJcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIGRlc2NyaXB0b3IoYml0bWFwLCB2YWx1ZSkpO1xyXG4gIH0gOiBzaW1wbGVTZXQ7XHJcbn1cclxuZnVuY3Rpb24gdWlkKGtleSl7XHJcbiAgcmV0dXJuIFNZTUJPTCArICcoJyArIGtleSArICcpXycgKyAoKytzaWQgKyByYW5kb20oKSlbVE9fU1RSSU5HXSgzNik7XHJcbn1cclxuZnVuY3Rpb24gZ2V0V2VsbEtub3duU3ltYm9sKG5hbWUsIHNldHRlcil7XHJcbiAgcmV0dXJuIChTeW1ib2wgJiYgU3ltYm9sW25hbWVdKSB8fCAoc2V0dGVyID8gU3ltYm9sIDogc2FmZVN5bWJvbCkoU1lNQk9MICsgRE9UICsgbmFtZSk7XHJcbn1cclxuLy8gVGhlIGVuZ2luZSB3b3JrcyBmaW5lIHdpdGggZGVzY3JpcHRvcnM/IFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHkuXHJcbnZhciBERVNDID0gISFmdW5jdGlvbigpe1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gMiB9fSkuYSA9PSAyO1xyXG4gICAgICB9IGNhdGNoKGUpe31cclxuICAgIH0oKVxyXG4gICwgc2lkICAgID0gMFxyXG4gICwgaGlkZGVuID0gY3JlYXRlRGVmaW5lcigxKVxyXG4gICwgc2V0ICAgID0gU3ltYm9sID8gc2ltcGxlU2V0IDogaGlkZGVuXHJcbiAgLCBzYWZlU3ltYm9sID0gU3ltYm9sIHx8IHVpZDtcclxuZnVuY3Rpb24gYXNzaWduSGlkZGVuKHRhcmdldCwgc3JjKXtcclxuICBmb3IodmFyIGtleSBpbiBzcmMpaGlkZGVuKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XHJcbiAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxudmFyIFNZTUJPTF9VTlNDT1BBQkxFUyA9IGdldFdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKVxyXG4gICwgQXJyYXlVbnNjb3BhYmxlcyAgID0gQXJyYXlQcm90b1tTWU1CT0xfVU5TQ09QQUJMRVNdIHx8IHt9XHJcbiAgLCBTWU1CT0xfVEFHICAgICAgICAgPSBnZXRXZWxsS25vd25TeW1ib2woVE9fU1RSSU5HX1RBRylcclxuICAsIFNZTUJPTF9TUEVDSUVTICAgICA9IGdldFdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpXHJcbiAgLCBTWU1CT0xfSVRFUkFUT1I7XHJcbmZ1bmN0aW9uIHNldFNwZWNpZXMoQyl7XHJcbiAgaWYoREVTQyAmJiAoZnJhbWV3b3JrIHx8ICFpc05hdGl2ZShDKSkpZGVmaW5lUHJvcGVydHkoQywgU1lNQk9MX1NQRUNJRVMsIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogcmV0dXJuVGhpc1xyXG4gIH0pO1xyXG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGNvbW1vbi5leHBvcnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbnZhciBOT0RFID0gY29mKHByb2Nlc3MpID09IFBST0NFU1NcclxuICAsIGNvcmUgPSB7fVxyXG4gICwgcGF0aCA9IGZyYW1ld29yayA/IGdsb2JhbCA6IGNvcmVcclxuICAsIG9sZCAgPSBnbG9iYWwuY29yZVxyXG4gICwgZXhwb3J0R2xvYmFsXHJcbiAgLy8gdHlwZSBiaXRtYXBcclxuICAsIEZPUkNFRCA9IDFcclxuICAsIEdMT0JBTCA9IDJcclxuICAsIFNUQVRJQyA9IDRcclxuICAsIFBST1RPICA9IDhcclxuICAsIEJJTkQgICA9IDE2XHJcbiAgLCBXUkFQICAgPSAzMjtcclxuZnVuY3Rpb24gJGRlZmluZSh0eXBlLCBuYW1lLCBzb3VyY2Upe1xyXG4gIHZhciBrZXksIG93biwgb3V0LCBleHBcclxuICAgICwgaXNHbG9iYWwgPSB0eXBlICYgR0xPQkFMXHJcbiAgICAsIHRhcmdldCAgID0gaXNHbG9iYWwgPyBnbG9iYWwgOiAodHlwZSAmIFNUQVRJQylcclxuICAgICAgICA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwgT2JqZWN0UHJvdG8pW1BST1RPVFlQRV1cclxuICAgICwgZXhwb3J0cyAgPSBpc0dsb2JhbCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xyXG4gIGlmKGlzR2xvYmFsKXNvdXJjZSA9IG5hbWU7XHJcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xyXG4gICAgLy8gdGhlcmUgaXMgYSBzaW1pbGFyIG5hdGl2ZVxyXG4gICAgb3duID0gISh0eXBlICYgRk9SQ0VEKSAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldFxyXG4gICAgICAmJiAoIWlzRnVuY3Rpb24odGFyZ2V0W2tleV0pIHx8IGlzTmF0aXZlKHRhcmdldFtrZXldKSk7XHJcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxyXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcclxuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xyXG4gICAgaWYoIWZyYW1ld29yayAmJiBpc0dsb2JhbCAmJiAhaXNGdW5jdGlvbih0YXJnZXRba2V5XSkpZXhwID0gc291cmNlW2tleV07XHJcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxyXG4gICAgZWxzZSBpZih0eXBlICYgQklORCAmJiBvd24pZXhwID0gY3R4KG91dCwgZ2xvYmFsKTtcclxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XHJcbiAgICBlbHNlIGlmKHR5cGUgJiBXUkFQICYmICFmcmFtZXdvcmsgJiYgdGFyZ2V0W2tleV0gPT0gb3V0KXtcclxuICAgICAgZXhwID0gZnVuY3Rpb24ocGFyYW0pe1xyXG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2Ygb3V0ID8gbmV3IG91dChwYXJhbSkgOiBvdXQocGFyYW0pO1xyXG4gICAgICB9XHJcbiAgICAgIGV4cFtQUk9UT1RZUEVdID0gb3V0W1BST1RPVFlQRV07XHJcbiAgICB9IGVsc2UgZXhwID0gdHlwZSAmIFBST1RPICYmIGlzRnVuY3Rpb24ob3V0KSA/IGN0eChjYWxsLCBvdXQpIDogb3V0O1xyXG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxyXG4gICAgaWYoZnJhbWV3b3JrICYmIHRhcmdldCAmJiAhb3duKXtcclxuICAgICAgaWYoaXNHbG9iYWwpdGFyZ2V0W2tleV0gPSBvdXQ7XHJcbiAgICAgIGVsc2UgZGVsZXRlIHRhcmdldFtrZXldICYmIGhpZGRlbih0YXJnZXQsIGtleSwgb3V0KTtcclxuICAgIH1cclxuICAgIC8vIGV4cG9ydFxyXG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRkZW4oZXhwb3J0cywga2V5LCBleHApO1xyXG4gIH1cclxufVxyXG4vLyBDb21tb25KUyBleHBvcnRcclxuaWYodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyltb2R1bGUuZXhwb3J0cyA9IGNvcmU7XHJcbi8vIFJlcXVpcmVKUyBleHBvcnRcclxuZWxzZSBpZihpc0Z1bmN0aW9uKGRlZmluZSkgJiYgZGVmaW5lLmFtZClkZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gY29yZX0pO1xyXG4vLyBFeHBvcnQgdG8gZ2xvYmFsIG9iamVjdFxyXG5lbHNlIGV4cG9ydEdsb2JhbCA9IHRydWU7XHJcbmlmKGV4cG9ydEdsb2JhbCB8fCBmcmFtZXdvcmspe1xyXG4gIGNvcmUubm9Db25mbGljdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBnbG9iYWwuY29yZSA9IG9sZDtcclxuICAgIHJldHVybiBjb3JlO1xyXG4gIH1cclxuICBnbG9iYWwuY29yZSA9IGNvcmU7XHJcbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogY29tbW9uLml0ZXJhdG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuU1lNQk9MX0lURVJBVE9SID0gZ2V0V2VsbEtub3duU3ltYm9sKElURVJBVE9SKTtcclxudmFyIElURVIgID0gc2FmZVN5bWJvbCgnaXRlcicpXHJcbiAgLCBLRVkgICA9IDFcclxuICAsIFZBTFVFID0gMlxyXG4gICwgSXRlcmF0b3JzID0ge31cclxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge31cclxuICAgIC8vIFNhZmFyaSBoYXMgYnlnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcclxuICAsIEJVR0dZX0lURVJBVE9SUyA9ICdrZXlzJyBpbiBBcnJheVByb3RvICYmICEoJ25leHQnIGluIFtdLmtleXMoKSk7XHJcbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXHJcbnNldEl0ZXJhdG9yKEl0ZXJhdG9yUHJvdG90eXBlLCByZXR1cm5UaGlzKTtcclxuZnVuY3Rpb24gc2V0SXRlcmF0b3IoTywgdmFsdWUpe1xyXG4gIGhpZGRlbihPLCBTWU1CT0xfSVRFUkFUT1IsIHZhbHVlKTtcclxuICAvLyBBZGQgaXRlcmF0b3IgZm9yIEZGIGl0ZXJhdG9yIHByb3RvY29sXHJcbiAgRkZfSVRFUkFUT1IgaW4gQXJyYXlQcm90byAmJiBoaWRkZW4oTywgRkZfSVRFUkFUT1IsIHZhbHVlKTtcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVJdGVyYXRvcihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCwgcHJvdG8pe1xyXG4gIENvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBjcmVhdGUocHJvdG8gfHwgSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XHJcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XHJcbn1cclxuZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3IoQ29uc3RydWN0b3IsIE5BTUUsIHZhbHVlLCBERUZBVUxUKXtcclxuICB2YXIgcHJvdG8gPSBDb25zdHJ1Y3RvcltQUk9UT1RZUEVdXHJcbiAgICAsIGl0ZXIgID0gZ2V0KHByb3RvLCBTWU1CT0xfSVRFUkFUT1IpIHx8IGdldChwcm90bywgRkZfSVRFUkFUT1IpIHx8IChERUZBVUxUICYmIGdldChwcm90bywgREVGQVVMVCkpIHx8IHZhbHVlO1xyXG4gIGlmKGZyYW1ld29yayl7XHJcbiAgICAvLyBEZWZpbmUgaXRlcmF0b3JcclxuICAgIHNldEl0ZXJhdG9yKHByb3RvLCBpdGVyKTtcclxuICAgIGlmKGl0ZXIgIT09IHZhbHVlKXtcclxuICAgICAgdmFyIGl0ZXJQcm90byA9IGdldFByb3RvdHlwZU9mKGl0ZXIuY2FsbChuZXcgQ29uc3RydWN0b3IpKTtcclxuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xyXG4gICAgICBzZXRUb1N0cmluZ1RhZyhpdGVyUHJvdG8sIE5BTUUgKyAnIEl0ZXJhdG9yJywgdHJ1ZSk7XHJcbiAgICAgIC8vIEZGIGZpeFxyXG4gICAgICBoYXMocHJvdG8sIEZGX0lURVJBVE9SKSAmJiBzZXRJdGVyYXRvcihpdGVyUHJvdG8sIHJldHVyblRoaXMpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XHJcbiAgSXRlcmF0b3JzW05BTUVdID0gaXRlcjtcclxuICAvLyBGRiAmIHY4IGZpeFxyXG4gIEl0ZXJhdG9yc1tOQU1FICsgJyBJdGVyYXRvciddID0gcmV0dXJuVGhpcztcclxuICByZXR1cm4gaXRlcjtcclxufVxyXG5mdW5jdGlvbiBkZWZpbmVTdGRJdGVyYXRvcnMoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCl7XHJcbiAgZnVuY3Rpb24gY3JlYXRlSXRlcihraW5kKXtcclxuICAgIHJldHVybiBmdW5jdGlvbigpe1xyXG4gICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjcmVhdGVJdGVyYXRvcihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XHJcbiAgdmFyIGVudHJpZXMgPSBjcmVhdGVJdGVyKEtFWStWQUxVRSlcclxuICAgICwgdmFsdWVzICA9IGNyZWF0ZUl0ZXIoVkFMVUUpO1xyXG4gIGlmKERFRkFVTFQgPT0gVkFMVUUpdmFsdWVzID0gZGVmaW5lSXRlcmF0b3IoQmFzZSwgTkFNRSwgdmFsdWVzLCAndmFsdWVzJyk7XHJcbiAgZWxzZSBlbnRyaWVzID0gZGVmaW5lSXRlcmF0b3IoQmFzZSwgTkFNRSwgZW50cmllcywgJ2VudHJpZXMnKTtcclxuICBpZihERUZBVUxUKXtcclxuICAgICRkZWZpbmUoUFJPVE8gKyBGT1JDRUQgKiBCVUdHWV9JVEVSQVRPUlMsIE5BTUUsIHtcclxuICAgICAgZW50cmllczogZW50cmllcyxcclxuICAgICAga2V5czogSVNfU0VUID8gdmFsdWVzIDogY3JlYXRlSXRlcihLRVkpLFxyXG4gICAgICB2YWx1ZXM6IHZhbHVlc1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGl0ZXJSZXN1bHQoZG9uZSwgdmFsdWUpe1xyXG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xyXG59XHJcbmZ1bmN0aW9uIGlzSXRlcmFibGUoaXQpe1xyXG4gIHZhciBPICAgICAgPSBPYmplY3QoaXQpXHJcbiAgICAsIFN5bWJvbCA9IGdsb2JhbFtTWU1CT0xdXHJcbiAgICAsIGhhc0V4dCA9IChTeW1ib2wgJiYgU3ltYm9sW0lURVJBVE9SXSB8fCBGRl9JVEVSQVRPUikgaW4gTztcclxuICByZXR1cm4gaGFzRXh0IHx8IFNZTUJPTF9JVEVSQVRPUiBpbiBPIHx8IGhhcyhJdGVyYXRvcnMsIGNsYXNzb2YoTykpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yKGl0KXtcclxuICB2YXIgU3ltYm9sICA9IGdsb2JhbFtTWU1CT0xdXHJcbiAgICAsIGV4dCAgICAgPSBpdFtTeW1ib2wgJiYgU3ltYm9sW0lURVJBVE9SXSB8fCBGRl9JVEVSQVRPUl1cclxuICAgICwgZ2V0SXRlciA9IGV4dCB8fCBpdFtTWU1CT0xfSVRFUkFUT1JdIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XHJcbiAgcmV0dXJuIGFzc2VydE9iamVjdChnZXRJdGVyLmNhbGwoaXQpKTtcclxufVxyXG5mdW5jdGlvbiBzdGVwQ2FsbChmbiwgdmFsdWUsIGVudHJpZXMpe1xyXG4gIHJldHVybiBlbnRyaWVzID8gaW52b2tlKGZuLCB2YWx1ZSkgOiBmbih2YWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tEYW5nZXJJdGVyQ2xvc2luZyhmbil7XHJcbiAgdmFyIGRhbmdlciA9IHRydWU7XHJcbiAgdmFyIE8gPSB7XHJcbiAgICBuZXh0OiBmdW5jdGlvbigpeyB0aHJvdyAxIH0sXHJcbiAgICAncmV0dXJuJzogZnVuY3Rpb24oKXsgZGFuZ2VyID0gZmFsc2UgfVxyXG4gIH07XHJcbiAgT1tTWU1CT0xfSVRFUkFUT1JdID0gcmV0dXJuVGhpcztcclxuICB0cnkge1xyXG4gICAgZm4oTyk7XHJcbiAgfSBjYXRjaChlKXt9XHJcbiAgcmV0dXJuIGRhbmdlcjtcclxufVxyXG5mdW5jdGlvbiBjbG9zZUl0ZXJhdG9yKGl0ZXJhdG9yKXtcclxuICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xyXG4gIGlmKHJldCAhPT0gdW5kZWZpbmVkKXJldC5jYWxsKGl0ZXJhdG9yKTtcclxufVxyXG5mdW5jdGlvbiBzYWZlSXRlckNsb3NlKGV4ZWMsIGl0ZXJhdG9yKXtcclxuICB0cnkge1xyXG4gICAgZXhlYyhpdGVyYXRvcik7XHJcbiAgfSBjYXRjaChlKXtcclxuICAgIGNsb3NlSXRlcmF0b3IoaXRlcmF0b3IpO1xyXG4gICAgdGhyb3cgZTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZm9yT2YoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0KXtcclxuICBzYWZlSXRlckNsb3NlKGZ1bmN0aW9uKGl0ZXJhdG9yKXtcclxuICAgIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXHJcbiAgICAgICwgc3RlcDtcclxuICAgIHdoaWxlKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSlpZihzdGVwQ2FsbChmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKSA9PT0gZmFsc2Upe1xyXG4gICAgICByZXR1cm4gY2xvc2VJdGVyYXRvcihpdGVyYXRvcik7XHJcbiAgICB9XHJcbiAgfSwgZ2V0SXRlcmF0b3IoaXRlcmFibGUpKTtcclxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYuc3ltYm9sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXHJcbiFmdW5jdGlvbihUQUcsIFN5bWJvbFJlZ2lzdHJ5LCBBbGxTeW1ib2xzLCBzZXR0ZXIpe1xyXG4gIC8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxyXG4gIGlmKCFpc05hdGl2ZShTeW1ib2wpKXtcclxuICAgIFN5bWJvbCA9IGZ1bmN0aW9uKGRlc2NyaXB0aW9uKXtcclxuICAgICAgYXNzZXJ0KCEodGhpcyBpbnN0YW5jZW9mIFN5bWJvbCksIFNZTUJPTCArICcgaXMgbm90IGEgJyArIENPTlNUUlVDVE9SKTtcclxuICAgICAgdmFyIHRhZyA9IHVpZChkZXNjcmlwdGlvbilcclxuICAgICAgICAsIHN5bSA9IHNldChjcmVhdGUoU3ltYm9sW1BST1RPVFlQRV0pLCBUQUcsIHRhZyk7XHJcbiAgICAgIEFsbFN5bWJvbHNbdGFnXSA9IHN5bTtcclxuICAgICAgREVTQyAmJiBzZXR0ZXIgJiYgZGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG8sIHRhZywge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgICAgIGhpZGRlbih0aGlzLCB0YWcsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gc3ltO1xyXG4gICAgfVxyXG4gICAgaGlkZGVuKFN5bWJvbFtQUk9UT1RZUEVdLCBUT19TVFJJTkcsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHJldHVybiB0aGlzW1RBR107XHJcbiAgICB9KTtcclxuICB9XHJcbiAgJGRlZmluZShHTE9CQUwgKyBXUkFQLCB7U3ltYm9sOiBTeW1ib2x9KTtcclxuICBcclxuICB2YXIgc3ltYm9sU3RhdGljcyA9IHtcclxuICAgIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxyXG4gICAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcclxuICAgICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cclxuICAgICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSBTeW1ib2woa2V5KTtcclxuICAgIH0sXHJcbiAgICAvLyAxOS40LjIuNCBTeW1ib2wuaXRlcmF0b3JcclxuICAgIGl0ZXJhdG9yOiBTWU1CT0xfSVRFUkFUT1IgfHwgZ2V0V2VsbEtub3duU3ltYm9sKElURVJBVE9SKSxcclxuICAgIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxyXG4gICAga2V5Rm9yOiBwYXJ0LmNhbGwoa2V5T2YsIFN5bWJvbFJlZ2lzdHJ5KSxcclxuICAgIC8vIDE5LjQuMi4xMCBTeW1ib2wuc3BlY2llc1xyXG4gICAgc3BlY2llczogU1lNQk9MX1NQRUNJRVMsXHJcbiAgICAvLyAxOS40LjIuMTMgU3ltYm9sLnRvU3RyaW5nVGFnXHJcbiAgICB0b1N0cmluZ1RhZzogU1lNQk9MX1RBRyA9IGdldFdlbGxLbm93blN5bWJvbChUT19TVFJJTkdfVEFHLCB0cnVlKSxcclxuICAgIC8vIDE5LjQuMi4xNCBTeW1ib2wudW5zY29wYWJsZXNcclxuICAgIHVuc2NvcGFibGVzOiBTWU1CT0xfVU5TQ09QQUJMRVMsXHJcbiAgICBwdXJlOiBzYWZlU3ltYm9sLFxyXG4gICAgc2V0OiBzZXQsXHJcbiAgICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7c2V0dGVyID0gdHJ1ZX0sXHJcbiAgICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7c2V0dGVyID0gZmFsc2V9XHJcbiAgfTtcclxuICAvLyAxOS40LjIuMiBTeW1ib2wuaGFzSW5zdGFuY2VcclxuICAvLyAxOS40LjIuMyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlXHJcbiAgLy8gMTkuNC4yLjYgU3ltYm9sLm1hdGNoXHJcbiAgLy8gMTkuNC4yLjggU3ltYm9sLnJlcGxhY2VcclxuICAvLyAxOS40LjIuOSBTeW1ib2wuc2VhcmNoXHJcbiAgLy8gMTkuNC4yLjExIFN5bWJvbC5zcGxpdFxyXG4gIC8vIDE5LjQuMi4xMiBTeW1ib2wudG9QcmltaXRpdmVcclxuICBmb3JFYWNoLmNhbGwoYXJyYXkoJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGxpdCx0b1ByaW1pdGl2ZScpLFxyXG4gICAgZnVuY3Rpb24oaXQpe1xyXG4gICAgICBzeW1ib2xTdGF0aWNzW2l0XSA9IGdldFdlbGxLbm93blN5bWJvbChpdCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICAkZGVmaW5lKFNUQVRJQywgU1lNQk9MLCBzeW1ib2xTdGF0aWNzKTtcclxuICBcclxuICBzZXRUb1N0cmluZ1RhZyhTeW1ib2wsIFNZTUJPTCk7XHJcbiAgXHJcbiAgJGRlZmluZShTVEFUSUMgKyBGT1JDRUQgKiAhaXNOYXRpdmUoU3ltYm9sKSwgT0JKRUNULCB7XHJcbiAgICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxyXG4gICAgZ2V0T3duUHJvcGVydHlOYW1lczogZnVuY3Rpb24oaXQpe1xyXG4gICAgICB2YXIgbmFtZXMgPSBnZXROYW1lcyh0b09iamVjdChpdCkpLCByZXN1bHQgPSBbXSwga2V5LCBpID0gMDtcclxuICAgICAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSloYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcbiAgICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXHJcbiAgICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgdmFyIG5hbWVzID0gZ2V0TmFtZXModG9PYmplY3QoaXQpKSwgcmVzdWx0ID0gW10sIGtleSwgaSA9IDA7XHJcbiAgICAgIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIHJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgXHJcbiAgLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxyXG4gIHNldFRvU3RyaW5nVGFnKE1hdGgsIE1BVEgsIHRydWUpO1xyXG4gIC8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXHJcbiAgc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XHJcbn0oc2FmZVN5bWJvbCgndGFnJyksIHt9LCB7fSwgdHJ1ZSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5vYmplY3Quc3RhdGljcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbigpe1xyXG4gIHZhciBvYmplY3RTdGF0aWMgPSB7XHJcbiAgICAvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxyXG4gICAgYXNzaWduOiBhc3NpZ24sXHJcbiAgICAvLyAxOS4xLjMuMTAgT2JqZWN0LmlzKHZhbHVlMSwgdmFsdWUyKVxyXG4gICAgaXM6IGZ1bmN0aW9uKHgsIHkpe1xyXG4gICAgICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXHJcbiAgLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmtzIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxyXG4gICdfX3Byb3RvX18nIGluIE9iamVjdFByb3RvICYmIGZ1bmN0aW9uKGJ1Z2d5LCBzZXQpe1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0ID0gY3R4KGNhbGwsIGdldE93bkRlc2NyaXB0b3IoT2JqZWN0UHJvdG8sICdfX3Byb3RvX18nKS5zZXQsIDIpO1xyXG4gICAgICBzZXQoe30sIEFycmF5UHJvdG8pO1xyXG4gICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlIH1cclxuICAgIG9iamVjdFN0YXRpYy5zZXRQcm90b3R5cGVPZiA9IHNldFByb3RvdHlwZU9mID0gc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTywgcHJvdG8pe1xyXG4gICAgICBhc3NlcnRPYmplY3QoTyk7XHJcbiAgICAgIGFzc2VydChwcm90byA9PT0gbnVsbCB8fCBpc09iamVjdChwcm90byksIHByb3RvLCBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XHJcbiAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XHJcbiAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcclxuICAgICAgcmV0dXJuIE87XHJcbiAgICB9XHJcbiAgfSgpO1xyXG4gICRkZWZpbmUoU1RBVElDLCBPQkpFQ1QsIG9iamVjdFN0YXRpYyk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2Lm9iamVjdC5wcm90b3R5cGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKHRtcCl7XHJcbiAgLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXHJcbiAgdG1wW1NZTUJPTF9UQUddID0gRE9UO1xyXG4gIGlmKGNvZih0bXApICE9IERPVCloaWRkZW4oT2JqZWN0UHJvdG8sIFRPX1NUUklORywgZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcclxuICB9KTtcclxufSh7fSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5vYmplY3Quc3RhdGljcy1hY2NlcHQtcHJpbWl0aXZlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbigpe1xyXG4gIC8vIE9iamVjdCBzdGF0aWMgbWV0aG9kcyBhY2NlcHQgcHJpbWl0aXZlc1xyXG4gIGZ1bmN0aW9uIHdyYXBPYmplY3RNZXRob2Qoa2V5LCBNT0RFKXtcclxuICAgIHZhciBmbiAgPSBPYmplY3Rba2V5XVxyXG4gICAgICAsIGV4cCA9IGNvcmVbT0JKRUNUXVtrZXldXHJcbiAgICAgICwgZiAgID0gMFxyXG4gICAgICAsIG8gICA9IHt9O1xyXG4gICAgaWYoIWV4cCB8fCBpc05hdGl2ZShleHApKXtcclxuICAgICAgb1trZXldID0gTU9ERSA9PSAxID8gZnVuY3Rpb24oaXQpe1xyXG4gICAgICAgIHJldHVybiBpc09iamVjdChpdCkgPyBmbihpdCkgOiBpdDtcclxuICAgICAgfSA6IE1PREUgPT0gMiA/IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogdHJ1ZTtcclxuICAgICAgfSA6IE1PREUgPT0gMyA/IGZ1bmN0aW9uKGl0KXtcclxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gZm4oaXQpIDogZmFsc2U7XHJcbiAgICAgIH0gOiBNT0RFID09IDQgPyBmdW5jdGlvbihpdCwga2V5KXtcclxuICAgICAgICByZXR1cm4gZm4odG9PYmplY3QoaXQpLCBrZXkpO1xyXG4gICAgICB9IDogZnVuY3Rpb24oaXQpe1xyXG4gICAgICAgIHJldHVybiBmbih0b09iamVjdChpdCkpO1xyXG4gICAgICB9O1xyXG4gICAgICB0cnkgeyBmbihET1QpIH1cclxuICAgICAgY2F0Y2goZSl7IGYgPSAxIH1cclxuICAgICAgJGRlZmluZShTVEFUSUMgKyBGT1JDRUQgKiBmLCBPQkpFQ1QsIG8pO1xyXG4gICAgfVxyXG4gIH1cclxuICB3cmFwT2JqZWN0TWV0aG9kKCdmcmVlemUnLCAxKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdzZWFsJywgMSk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgncHJldmVudEV4dGVuc2lvbnMnLCAxKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdpc0Zyb3plbicsIDIpO1xyXG4gIHdyYXBPYmplY3RNZXRob2QoJ2lzU2VhbGVkJywgMik7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnaXNFeHRlbnNpYmxlJywgMyk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgNCk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnZ2V0UHJvdG90eXBlT2YnKTtcclxuICB3cmFwT2JqZWN0TWV0aG9kKCdrZXlzJyk7XHJcbiAgd3JhcE9iamVjdE1ldGhvZCgnZ2V0T3duUHJvcGVydHlOYW1lcycpO1xyXG59KCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5mdW5jdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihOQU1FKXtcclxuICAvLyAxOS4yLjQuMiBuYW1lXHJcbiAgTkFNRSBpbiBGdW5jdGlvblByb3RvIHx8IChERVNDICYmIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG8sIE5BTUUsIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZnVuY3Rpb24oKXtcclxuICAgICAgdmFyIG1hdGNoID0gU3RyaW5nKHRoaXMpLm1hdGNoKC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLylcclxuICAgICAgICAsIG5hbWUgID0gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xyXG4gICAgICBoYXModGhpcywgTkFNRSkgfHwgZGVmaW5lUHJvcGVydHkodGhpcywgTkFNRSwgZGVzY3JpcHRvcig1LCBuYW1lKSk7XHJcbiAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfSxcclxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICBoYXModGhpcywgTkFNRSkgfHwgZGVmaW5lUHJvcGVydHkodGhpcywgTkFNRSwgZGVzY3JpcHRvcigwLCB2YWx1ZSkpO1xyXG4gICAgfVxyXG4gIH0pKTtcclxufSgnbmFtZScpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYubnVtYmVyLmNvbnN0cnVjdG9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5OdW1iZXIoJzBvMScpICYmIE51bWJlcignMGIxJykgfHwgZnVuY3Rpb24oX051bWJlciwgTnVtYmVyUHJvdG8pe1xyXG4gIGZ1bmN0aW9uIHRvTnVtYmVyKGl0KXtcclxuICAgIGlmKGlzT2JqZWN0KGl0KSlpdCA9IHRvUHJpbWl0aXZlKGl0KTtcclxuICAgIGlmKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyICYmIGl0LmNoYXJDb2RlQXQoMCkgPT0gNDgpe1xyXG4gICAgICB2YXIgYmluYXJ5ID0gZmFsc2U7XHJcbiAgICAgIHN3aXRjaChpdC5jaGFyQ29kZUF0KDEpKXtcclxuICAgICAgICBjYXNlIDY2IDogY2FzZSA5OCAgOiBiaW5hcnkgPSB0cnVlO1xyXG4gICAgICAgIGNhc2UgNzkgOiBjYXNlIDExMSA6IHJldHVybiBwYXJzZUludChpdC5zbGljZSgyKSwgYmluYXJ5ID8gMiA6IDgpO1xyXG4gICAgICB9XHJcbiAgICB9IHJldHVybiAraXQ7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHRvUHJpbWl0aXZlKGl0KXtcclxuICAgIHZhciBmbiwgdmFsO1xyXG4gICAgaWYoaXNGdW5jdGlvbihmbiA9IGl0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcclxuICAgIGlmKGlzRnVuY3Rpb24oZm4gPSBpdFtUT19TVFJJTkddKSAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XHJcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBudW1iZXJcIik7XHJcbiAgfVxyXG4gIE51bWJlciA9IGZ1bmN0aW9uIE51bWJlcihpdCl7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIE51bWJlciA/IG5ldyBfTnVtYmVyKHRvTnVtYmVyKGl0KSkgOiB0b051bWJlcihpdCk7XHJcbiAgfVxyXG4gIGZvckVhY2guY2FsbChERVNDID8gZ2V0TmFtZXMoX051bWJlcilcclxuICA6IGFycmF5KCdNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWScpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAga2V5IGluIE51bWJlciB8fCBkZWZpbmVQcm9wZXJ0eShOdW1iZXIsIGtleSwgZ2V0T3duRGVzY3JpcHRvcihfTnVtYmVyLCBrZXkpKTtcclxuICB9KTtcclxuICBOdW1iZXJbUFJPVE9UWVBFXSA9IE51bWJlclByb3RvO1xyXG4gIE51bWJlclByb3RvW0NPTlNUUlVDVE9SXSA9IE51bWJlcjtcclxuICBoaWRkZW4oZ2xvYmFsLCBOVU1CRVIsIE51bWJlcik7XHJcbn0oTnVtYmVyLCBOdW1iZXJbUFJPVE9UWVBFXSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5udW1iZXIuc3RhdGljcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbihpc0ludGVnZXIpe1xyXG4gICRkZWZpbmUoU1RBVElDLCBOVU1CRVIsIHtcclxuICAgIC8vIDIwLjEuMi4xIE51bWJlci5FUFNJTE9OXHJcbiAgICBFUFNJTE9OOiBwb3coMiwgLTUyKSxcclxuICAgIC8vIDIwLjEuMi4yIE51bWJlci5pc0Zpbml0ZShudW1iZXIpXHJcbiAgICBpc0Zpbml0ZTogZnVuY3Rpb24oaXQpe1xyXG4gICAgICByZXR1cm4gdHlwZW9mIGl0ID09ICdudW1iZXInICYmIGlzRmluaXRlKGl0KTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcclxuICAgIGlzSW50ZWdlcjogaXNJbnRlZ2VyLFxyXG4gICAgLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcclxuICAgIGlzTmFOOiBzYW1lTmFOLFxyXG4gICAgLy8gMjAuMS4yLjUgTnVtYmVyLmlzU2FmZUludGVnZXIobnVtYmVyKVxyXG4gICAgaXNTYWZlSW50ZWdlcjogZnVuY3Rpb24obnVtYmVyKXtcclxuICAgICAgcmV0dXJuIGlzSW50ZWdlcihudW1iZXIpICYmIGFicyhudW1iZXIpIDw9IE1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMS4yLjYgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcclxuICAgIE1BWF9TQUZFX0lOVEVHRVI6IE1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAvLyAyMC4xLjIuMTAgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcclxuICAgIE1JTl9TQUZFX0lOVEVHRVI6IC1NQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgLy8gMjAuMS4yLjEyIE51bWJlci5wYXJzZUZsb2F0KHN0cmluZylcclxuICAgIHBhcnNlRmxvYXQ6IHBhcnNlRmxvYXQsXHJcbiAgICAvLyAyMC4xLjIuMTMgTnVtYmVyLnBhcnNlSW50KHN0cmluZywgcmFkaXgpXHJcbiAgICBwYXJzZUludDogcGFyc2VJbnRcclxuICB9KTtcclxuLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXHJcbn0oTnVtYmVyLmlzSW50ZWdlciB8fCBmdW5jdGlvbihpdCl7XHJcbiAgcmV0dXJuICFpc09iamVjdChpdCkgJiYgaXNGaW5pdGUoaXQpICYmIGZsb29yKGl0KSA9PT0gaXQ7XHJcbn0pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYubWF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBFQ01BU2NyaXB0IDYgc2hpbVxyXG4hZnVuY3Rpb24oKXtcclxuICAvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXHJcbiAgdmFyIEUgICAgPSBNYXRoLkVcclxuICAgICwgZXhwICA9IE1hdGguZXhwXHJcbiAgICAsIGxvZyAgPSBNYXRoLmxvZ1xyXG4gICAgLCBzcXJ0ID0gTWF0aC5zcXJ0XHJcbiAgICAsIHNpZ24gPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24oeCl7XHJcbiAgICAgICAgcmV0dXJuICh4ID0gK3gpID09IDAgfHwgeCAhPSB4ID8geCA6IHggPCAwID8gLTEgOiAxO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gIC8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcclxuICBmdW5jdGlvbiBhc2luaCh4KXtcclxuICAgIHJldHVybiAhaXNGaW5pdGUoeCA9ICt4KSB8fCB4ID09IDAgPyB4IDogeCA8IDAgPyAtYXNpbmgoLXgpIDogbG9nKHggKyBzcXJ0KHggKiB4ICsgMSkpO1xyXG4gIH1cclxuICAvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxyXG4gIGZ1bmN0aW9uIGV4cG0xKHgpe1xyXG4gICAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogeCA+IC0xZS02ICYmIHggPCAxZS02ID8geCArIHggKiB4IC8gMiA6IGV4cCh4KSAtIDE7XHJcbiAgfVxyXG4gICAgXHJcbiAgJGRlZmluZShTVEFUSUMsIE1BVEgsIHtcclxuICAgIC8vIDIwLjIuMi4zIE1hdGguYWNvc2goeClcclxuICAgIGFjb3NoOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuICh4ID0gK3gpIDwgMSA/IE5hTiA6IGlzRmluaXRlKHgpID8gbG9nKHggLyBFICsgc3FydCh4ICsgMSkgKiBzcXJ0KHggLSAxKSAvIEUpICsgMSA6IHg7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjUgTWF0aC5hc2luaCh4KVxyXG4gICAgYXNpbmg6IGFzaW5oLFxyXG4gICAgLy8gMjAuMi4yLjcgTWF0aC5hdGFuaCh4KVxyXG4gICAgYXRhbmg6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiBsb2coKDEgKyB4KSAvICgxIC0geCkpIC8gMjtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuOSBNYXRoLmNicnQoeClcclxuICAgIGNicnQ6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gc2lnbih4ID0gK3gpICogcG93KGFicyh4KSwgMSAvIDMpO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4xMSBNYXRoLmNsejMyKHgpXHJcbiAgICBjbHozMjogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiAoeCA+Pj49IDApID8gMzIgLSB4W1RPX1NUUklOR10oMikubGVuZ3RoIDogMzI7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxyXG4gICAgY29zaDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiAoZXhwKHggPSAreCkgKyBleHAoLXgpKSAvIDI7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcclxuICAgIGV4cG0xOiBleHBtMSxcclxuICAgIC8vIDIwLjIuMi4xNiBNYXRoLmZyb3VuZCh4KVxyXG4gICAgLy8gVE9ETzogZmFsbGJhY2sgZm9yIElFOS1cclxuICAgIGZyb3VuZDogZnVuY3Rpb24oeCl7XHJcbiAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFt4XSlbMF07XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjE3IE1hdGguaHlwb3QoW3ZhbHVlMVssIHZhbHVlMlssIOKApiBdXV0pXHJcbiAgICBoeXBvdDogZnVuY3Rpb24odmFsdWUxLCB2YWx1ZTIpe1xyXG4gICAgICB2YXIgc3VtICA9IDBcclxuICAgICAgICAsIGxlbjEgPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICAgLCBsZW4yID0gbGVuMVxyXG4gICAgICAgICwgYXJncyA9IEFycmF5KGxlbjEpXHJcbiAgICAgICAgLCBsYXJnID0gLUluZmluaXR5XHJcbiAgICAgICAgLCBhcmc7XHJcbiAgICAgIHdoaWxlKGxlbjEtLSl7XHJcbiAgICAgICAgYXJnID0gYXJnc1tsZW4xXSA9ICthcmd1bWVudHNbbGVuMV07XHJcbiAgICAgICAgaWYoYXJnID09IEluZmluaXR5IHx8IGFyZyA9PSAtSW5maW5pdHkpcmV0dXJuIEluZmluaXR5O1xyXG4gICAgICAgIGlmKGFyZyA+IGxhcmcpbGFyZyA9IGFyZztcclxuICAgICAgfVxyXG4gICAgICBsYXJnID0gYXJnIHx8IDE7XHJcbiAgICAgIHdoaWxlKGxlbjItLSlzdW0gKz0gcG93KGFyZ3NbbGVuMl0gLyBsYXJnLCAyKTtcclxuICAgICAgcmV0dXJuIGxhcmcgKiBzcXJ0KHN1bSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjE4IE1hdGguaW11bCh4LCB5KVxyXG4gICAgaW11bDogZnVuY3Rpb24oeCwgeSl7XHJcbiAgICAgIHZhciBVSW50MTYgPSAweGZmZmZcclxuICAgICAgICAsIHhuID0gK3hcclxuICAgICAgICAsIHluID0gK3lcclxuICAgICAgICAsIHhsID0gVUludDE2ICYgeG5cclxuICAgICAgICAsIHlsID0gVUludDE2ICYgeW47XHJcbiAgICAgIHJldHVybiAwIHwgeGwgKiB5bCArICgoVUludDE2ICYgeG4gPj4+IDE2KSAqIHlsICsgeGwgKiAoVUludDE2ICYgeW4gPj4+IDE2KSA8PCAxNiA+Pj4gMCk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcclxuICAgIGxvZzFwOiBmdW5jdGlvbih4KXtcclxuICAgICAgcmV0dXJuICh4ID0gK3gpID4gLTFlLTggJiYgeCA8IDFlLTggPyB4IC0geCAqIHggLyAyIDogbG9nKDEgKyB4KTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMjEgTWF0aC5sb2cxMCh4KVxyXG4gICAgbG9nMTA6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gbG9nKHgpIC8gTWF0aC5MTjEwO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4yMiBNYXRoLmxvZzIoeClcclxuICAgIGxvZzI6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gbG9nKHgpIC8gTWF0aC5MTjI7XHJcbiAgICB9LFxyXG4gICAgLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxyXG4gICAgc2lnbjogc2lnbixcclxuICAgIC8vIDIwLjIuMi4zMCBNYXRoLnNpbmgoeClcclxuICAgIHNpbmg6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICByZXR1cm4gKGFicyh4ID0gK3gpIDwgMSkgPyAoZXhwbTEoeCkgLSBleHBtMSgteCkpIC8gMiA6IChleHAoeCAtIDEpIC0gZXhwKC14IC0gMSkpICogKEUgLyAyKTtcclxuICAgIH0sXHJcbiAgICAvLyAyMC4yLjIuMzMgTWF0aC50YW5oKHgpXHJcbiAgICB0YW5oOiBmdW5jdGlvbih4KXtcclxuICAgICAgdmFyIGEgPSBleHBtMSh4ID0gK3gpXHJcbiAgICAgICAgLCBiID0gZXhwbTEoLXgpO1xyXG4gICAgICByZXR1cm4gYSA9PSBJbmZpbml0eSA/IDEgOiBiID09IEluZmluaXR5ID8gLTEgOiAoYSAtIGIpIC8gKGV4cCh4KSArIGV4cCgteCkpO1xyXG4gICAgfSxcclxuICAgIC8vIDIwLjIuMi4zNCBNYXRoLnRydW5jKHgpXHJcbiAgICB0cnVuYzogdHJ1bmNcclxuICB9KTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYuc3RyaW5nICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oZnJvbUNoYXJDb2RlKXtcclxuICBmdW5jdGlvbiBhc3NlcnROb3RSZWdFeHAoaXQpe1xyXG4gICAgaWYoY29mKGl0KSA9PSBSRUdFWFApdGhyb3cgVHlwZUVycm9yKCk7XHJcbiAgfVxyXG4gIFxyXG4gICRkZWZpbmUoU1RBVElDLCBTVFJJTkcsIHtcclxuICAgIC8vIDIxLjEuMi4yIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpXHJcbiAgICBmcm9tQ29kZVBvaW50OiBmdW5jdGlvbih4KXtcclxuICAgICAgdmFyIHJlcyA9IFtdXHJcbiAgICAgICAgLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICAgLCBpICAgPSAwXHJcbiAgICAgICAgLCBjb2RlXHJcbiAgICAgIHdoaWxlKGxlbiA+IGkpe1xyXG4gICAgICAgIGNvZGUgPSArYXJndW1lbnRzW2krK107XHJcbiAgICAgICAgaWYodG9JbmRleChjb2RlLCAweDEwZmZmZikgIT09IGNvZGUpdGhyb3cgUmFuZ2VFcnJvcihjb2RlICsgJyBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50Jyk7XHJcbiAgICAgICAgcmVzLnB1c2goY29kZSA8IDB4MTAwMDBcclxuICAgICAgICAgID8gZnJvbUNoYXJDb2RlKGNvZGUpXHJcbiAgICAgICAgICA6IGZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCBjb2RlICUgMHg0MDAgKyAweGRjMDApXHJcbiAgICAgICAgKTtcclxuICAgICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xyXG4gICAgfSxcclxuICAgIC8vIDIxLjEuMi40IFN0cmluZy5yYXcoY2FsbFNpdGUsIC4uLnN1YnN0aXR1dGlvbnMpXHJcbiAgICByYXc6IGZ1bmN0aW9uKGNhbGxTaXRlKXtcclxuICAgICAgdmFyIHJhdyA9IHRvT2JqZWN0KGNhbGxTaXRlLnJhdylcclxuICAgICAgICAsIGxlbiA9IHRvTGVuZ3RoKHJhdy5sZW5ndGgpXHJcbiAgICAgICAgLCBzbG4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICAgICAgLCByZXMgPSBbXVxyXG4gICAgICAgICwgaSAgID0gMDtcclxuICAgICAgd2hpbGUobGVuID4gaSl7XHJcbiAgICAgICAgcmVzLnB1c2goU3RyaW5nKHJhd1tpKytdKSk7XHJcbiAgICAgICAgaWYoaSA8IHNsbilyZXMucHVzaChTdHJpbmcoYXJndW1lbnRzW2ldKSk7XHJcbiAgICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICAkZGVmaW5lKFBST1RPLCBTVFJJTkcsIHtcclxuICAgIC8vIDIxLjEuMy4zIFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQocG9zKVxyXG4gICAgY29kZVBvaW50QXQ6IGNyZWF0ZVBvaW50QXQoZmFsc2UpLFxyXG4gICAgLy8gMjEuMS4zLjYgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aChzZWFyY2hTdHJpbmcgWywgZW5kUG9zaXRpb25dKVxyXG4gICAgZW5kc1dpdGg6IGZ1bmN0aW9uKHNlYXJjaFN0cmluZyAvKiwgZW5kUG9zaXRpb24gPSBAbGVuZ3RoICovKXtcclxuICAgICAgYXNzZXJ0Tm90UmVnRXhwKHNlYXJjaFN0cmluZyk7XHJcbiAgICAgIHZhciB0aGF0ID0gU3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICAgLCBlbmRQb3NpdGlvbiA9IGFyZ3VtZW50c1sxXVxyXG4gICAgICAgICwgbGVuID0gdG9MZW5ndGgodGhhdC5sZW5ndGgpXHJcbiAgICAgICAgLCBlbmQgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogbWluKHRvTGVuZ3RoKGVuZFBvc2l0aW9uKSwgbGVuKTtcclxuICAgICAgc2VhcmNoU3RyaW5nICs9ICcnO1xyXG4gICAgICByZXR1cm4gdGhhdC5zbGljZShlbmQgLSBzZWFyY2hTdHJpbmcubGVuZ3RoLCBlbmQpID09PSBzZWFyY2hTdHJpbmc7XHJcbiAgICB9LFxyXG4gICAgLy8gMjEuMS4zLjcgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcsIHBvc2l0aW9uID0gMClcclxuICAgIGluY2x1ZGVzOiBmdW5jdGlvbihzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XHJcbiAgICAgIGFzc2VydE5vdFJlZ0V4cChzZWFyY2hTdHJpbmcpO1xyXG4gICAgICByZXR1cm4gISF+U3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBhcmd1bWVudHNbMV0pO1xyXG4gICAgfSxcclxuICAgIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcclxuICAgIHJlcGVhdDogZnVuY3Rpb24oY291bnQpe1xyXG4gICAgICB2YXIgc3RyID0gU3RyaW5nKGFzc2VydERlZmluZWQodGhpcykpXHJcbiAgICAgICAgLCByZXMgPSAnJ1xyXG4gICAgICAgICwgbiAgID0gdG9JbnRlZ2VyKGNvdW50KTtcclxuICAgICAgaWYoMCA+IG4gfHwgbiA9PSBJbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XHJcbiAgICAgIGZvcig7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKWlmKG4gJiAxKXJlcyArPSBzdHI7XHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9LFxyXG4gICAgLy8gMjEuMS4zLjE4IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgWywgcG9zaXRpb24gXSlcclxuICAgIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcclxuICAgICAgYXNzZXJ0Tm90UmVnRXhwKHNlYXJjaFN0cmluZyk7XHJcbiAgICAgIHZhciB0aGF0ICA9IFN0cmluZyhhc3NlcnREZWZpbmVkKHRoaXMpKVxyXG4gICAgICAgICwgaW5kZXggPSB0b0xlbmd0aChtaW4oYXJndW1lbnRzWzFdLCB0aGF0Lmxlbmd0aCkpO1xyXG4gICAgICBzZWFyY2hTdHJpbmcgKz0gJyc7XHJcbiAgICAgIHJldHVybiB0aGF0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaFN0cmluZy5sZW5ndGgpID09PSBzZWFyY2hTdHJpbmc7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0oU3RyaW5nLmZyb21DaGFyQ29kZSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5hcnJheS5zdGF0aWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiFmdW5jdGlvbigpe1xyXG4gICRkZWZpbmUoU1RBVElDICsgRk9SQ0VEICogY2hlY2tEYW5nZXJJdGVyQ2xvc2luZyhBcnJheS5mcm9tKSwgQVJSQVksIHtcclxuICAgIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcclxuICAgIGZyb206IGZ1bmN0aW9uKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcclxuICAgICAgdmFyIE8gICAgICAgPSBPYmplY3QoYXNzZXJ0RGVmaW5lZChhcnJheUxpa2UpKVxyXG4gICAgICAgICwgbWFwZm4gICA9IGFyZ3VtZW50c1sxXVxyXG4gICAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcclxuICAgICAgICAsIGYgICAgICAgPSBtYXBwaW5nID8gY3R4KG1hcGZuLCBhcmd1bWVudHNbMl0sIDIpIDogdW5kZWZpbmVkXHJcbiAgICAgICAgLCBpbmRleCAgID0gMFxyXG4gICAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXA7XHJcbiAgICAgIGlmKGlzSXRlcmFibGUoTykpe1xyXG4gICAgICAgIHJlc3VsdCA9IG5ldyAoZ2VuZXJpYyh0aGlzLCBBcnJheSkpO1xyXG4gICAgICAgIHNhZmVJdGVyQ2xvc2UoZnVuY3Rpb24oaXRlcmF0b3Ipe1xyXG4gICAgICAgICAgZm9yKDsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcclxuICAgICAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBmKHN0ZXAudmFsdWUsIGluZGV4KSA6IHN0ZXAudmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZ2V0SXRlcmF0b3IoTykpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IG5ldyAoZ2VuZXJpYyh0aGlzLCBBcnJheSkpKGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKSk7XHJcbiAgICAgICAgZm9yKDsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xyXG4gICAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBmKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gICRkZWZpbmUoU1RBVElDLCBBUlJBWSwge1xyXG4gICAgLy8gMjIuMS4yLjMgQXJyYXkub2YoIC4uLml0ZW1zKVxyXG4gICAgb2Y6IGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xyXG4gICAgICB2YXIgaW5kZXggID0gMFxyXG4gICAgICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gICAgICAgICwgcmVzdWx0ID0gbmV3IChnZW5lcmljKHRoaXMsIEFycmF5KSkobGVuZ3RoKTtcclxuICAgICAgd2hpbGUobGVuZ3RoID4gaW5kZXgpcmVzdWx0W2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleCsrXTtcclxuICAgICAgcmVzdWx0Lmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9KTtcclxuICBcclxuICBzZXRTcGVjaWVzKEFycmF5KTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczYuYXJyYXkucHJvdG90eXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICAkZGVmaW5lKFBST1RPLCBBUlJBWSwge1xyXG4gICAgLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXHJcbiAgICBjb3B5V2l0aGluOiBmdW5jdGlvbih0YXJnZXQgLyogPSAwICovLCBzdGFydCAvKiA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xyXG4gICAgICB2YXIgTyAgICAgPSBPYmplY3QoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgICAsIGxlbiAgID0gdG9MZW5ndGgoTy5sZW5ndGgpXHJcbiAgICAgICAgLCB0byAgICA9IHRvSW5kZXgodGFyZ2V0LCBsZW4pXHJcbiAgICAgICAgLCBmcm9tICA9IHRvSW5kZXgoc3RhcnQsIGxlbilcclxuICAgICAgICAsIGVuZCAgID0gYXJndW1lbnRzWzJdXHJcbiAgICAgICAgLCBmaW4gICA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogdG9JbmRleChlbmQsIGxlbilcclxuICAgICAgICAsIGNvdW50ID0gbWluKGZpbiAtIGZyb20sIGxlbiAtIHRvKVxyXG4gICAgICAgICwgaW5jICAgPSAxO1xyXG4gICAgICBpZihmcm9tIDwgdG8gJiYgdG8gPCBmcm9tICsgY291bnQpe1xyXG4gICAgICAgIGluYyAgPSAtMTtcclxuICAgICAgICBmcm9tID0gZnJvbSArIGNvdW50IC0gMTtcclxuICAgICAgICB0byAgID0gdG8gKyBjb3VudCAtIDE7XHJcbiAgICAgIH1cclxuICAgICAgd2hpbGUoY291bnQtLSA+IDApe1xyXG4gICAgICAgIGlmKGZyb20gaW4gTylPW3RvXSA9IE9bZnJvbV07XHJcbiAgICAgICAgZWxzZSBkZWxldGUgT1t0b107XHJcbiAgICAgICAgdG8gKz0gaW5jO1xyXG4gICAgICAgIGZyb20gKz0gaW5jO1xyXG4gICAgICB9IHJldHVybiBPO1xyXG4gICAgfSxcclxuICAgIC8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxyXG4gICAgZmlsbDogZnVuY3Rpb24odmFsdWUgLyosIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLyl7XHJcbiAgICAgIHZhciBPICAgICAgPSBPYmplY3QoYXNzZXJ0RGVmaW5lZCh0aGlzKSlcclxuICAgICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxyXG4gICAgICAgICwgaW5kZXggID0gdG9JbmRleChhcmd1bWVudHNbMV0sIGxlbmd0aClcclxuICAgICAgICAsIGVuZCAgICA9IGFyZ3VtZW50c1syXVxyXG4gICAgICAgICwgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0luZGV4KGVuZCwgbGVuZ3RoKTtcclxuICAgICAgd2hpbGUoZW5kUG9zID4gaW5kZXgpT1tpbmRleCsrXSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gTztcclxuICAgIH0sXHJcbiAgICAvLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXHJcbiAgICBmaW5kOiBjcmVhdGVBcnJheU1ldGhvZCg1KSxcclxuICAgIC8vIDIyLjEuMy45IEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgZmluZEluZGV4OiBjcmVhdGVBcnJheU1ldGhvZCg2KVxyXG4gIH0pO1xyXG4gIFxyXG4gIGlmKGZyYW1ld29yayl7XHJcbiAgICAvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXHJcbiAgICBmb3JFYWNoLmNhbGwoYXJyYXkoJ2ZpbmQsZmluZEluZGV4LGZpbGwsY29weVdpdGhpbixlbnRyaWVzLGtleXMsdmFsdWVzJyksIGZ1bmN0aW9uKGl0KXtcclxuICAgICAgQXJyYXlVbnNjb3BhYmxlc1tpdF0gPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICBTWU1CT0xfVU5TQ09QQUJMRVMgaW4gQXJyYXlQcm90byB8fCBoaWRkZW4oQXJyYXlQcm90bywgU1lNQk9MX1VOU0NPUEFCTEVTLCBBcnJheVVuc2NvcGFibGVzKTtcclxuICB9XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2Lml0ZXJhdG9ycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKGF0KXtcclxuICAvLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXHJcbiAgLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcclxuICAvLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXHJcbiAgLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXHJcbiAgZGVmaW5lU3RkSXRlcmF0b3JzKEFycmF5LCBBUlJBWSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xyXG4gICAgc2V0KHRoaXMsIElURVIsIHtvOiB0b09iamVjdChpdGVyYXRlZCksIGk6IDAsIGs6IGtpbmR9KTtcclxuICAvLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcclxuICB9LCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxyXG4gICAgICAsIE8gICAgID0gaXRlci5vXHJcbiAgICAgICwga2luZCAgPSBpdGVyLmtcclxuICAgICAgLCBpbmRleCA9IGl0ZXIuaSsrO1xyXG4gICAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xyXG4gICAgICBpdGVyLm8gPSB1bmRlZmluZWQ7XHJcbiAgICAgIHJldHVybiBpdGVyUmVzdWx0KDEpO1xyXG4gICAgfVxyXG4gICAgaWYoa2luZCA9PSBLRVkpICByZXR1cm4gaXRlclJlc3VsdCgwLCBpbmRleCk7XHJcbiAgICBpZihraW5kID09IFZBTFVFKXJldHVybiBpdGVyUmVzdWx0KDAsIE9baW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJSZXN1bHQoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xyXG4gIH0sIFZBTFVFKTtcclxuICBcclxuICAvLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXHJcbiAgSXRlcmF0b3JzW0FSR1VNRU5UU10gPSBJdGVyYXRvcnNbQVJSQVldO1xyXG4gIFxyXG4gIC8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcclxuICBkZWZpbmVTdGRJdGVyYXRvcnMoU3RyaW5nLCBTVFJJTkcsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcclxuICAgIHNldCh0aGlzLCBJVEVSLCB7bzogU3RyaW5nKGl0ZXJhdGVkKSwgaTogMH0pO1xyXG4gIC8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcclxuICB9LCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGl0ZXIgID0gdGhpc1tJVEVSXVxyXG4gICAgICAsIE8gICAgID0gaXRlci5vXHJcbiAgICAgICwgaW5kZXggPSBpdGVyLmlcclxuICAgICAgLCBwb2ludDtcclxuICAgIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiBpdGVyUmVzdWx0KDEpO1xyXG4gICAgcG9pbnQgPSBhdC5jYWxsKE8sIGluZGV4KTtcclxuICAgIGl0ZXIuaSArPSBwb2ludC5sZW5ndGg7XHJcbiAgICByZXR1cm4gaXRlclJlc3VsdCgwLCBwb2ludCk7XHJcbiAgfSk7XHJcbn0oY3JlYXRlUG9pbnRBdCh0cnVlKSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5yZWdleHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbkRFU0MgJiYgIWZ1bmN0aW9uKFJlZ0V4cFByb3RvLCBfUmVnRXhwKXsgIFxyXG4gIC8vIFJlZ0V4cCBhbGxvd3MgYSByZWdleCB3aXRoIGZsYWdzIGFzIHRoZSBwYXR0ZXJuXHJcbiAgaWYoIWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBSZWdFeHAoL2EvZywgJ2knKSA9PSAnL2EvaSd9Y2F0Y2goZSl7fX0oKSl7XHJcbiAgICBSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocGF0dGVybiwgZmxhZ3Mpe1xyXG4gICAgICByZXR1cm4gbmV3IF9SZWdFeHAoY29mKHBhdHRlcm4pID09IFJFR0VYUCAmJiBmbGFncyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBwYXR0ZXJuLnNvdXJjZSA6IHBhdHRlcm4sIGZsYWdzKTtcclxuICAgIH1cclxuICAgIGZvckVhY2guY2FsbChnZXROYW1lcyhfUmVnRXhwKSwgZnVuY3Rpb24oa2V5KXtcclxuICAgICAga2V5IGluIFJlZ0V4cCB8fCBkZWZpbmVQcm9wZXJ0eShSZWdFeHAsIGtleSwge1xyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBfUmVnRXhwW2tleV0gfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKGl0KXsgX1JlZ0V4cFtrZXldID0gaXQgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgUmVnRXhwUHJvdG9bQ09OU1RSVUNUT1JdID0gUmVnRXhwO1xyXG4gICAgUmVnRXhwW1BST1RPVFlQRV0gPSBSZWdFeHBQcm90bztcclxuICAgIGhpZGRlbihnbG9iYWwsIFJFR0VYUCwgUmVnRXhwKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxyXG4gIGlmKC8uL2cuZmxhZ3MgIT0gJ2cnKWRlZmluZVByb3BlcnR5KFJlZ0V4cFByb3RvLCAnZmxhZ3MnLCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IGNyZWF0ZVJlcGxhY2VyKC9eLipcXC8oXFx3KikkLywgJyQxJylcclxuICB9KTtcclxuICBcclxuICBzZXRTcGVjaWVzKFJlZ0V4cCk7XHJcbn0oUmVnRXhwW1BST1RPVFlQRV0sIFJlZ0V4cCk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IHdlYi5pbW1lZGlhdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIHNldEltbWVkaWF0ZSBzaGltXHJcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIGVsc2U6XHJcbmlzRnVuY3Rpb24oc2V0SW1tZWRpYXRlKSAmJiBpc0Z1bmN0aW9uKGNsZWFySW1tZWRpYXRlKSB8fCBmdW5jdGlvbihPTlJFQURZU1RBVEVDSEFOR0Upe1xyXG4gIHZhciBwb3N0TWVzc2FnZSAgICAgID0gZ2xvYmFsLnBvc3RNZXNzYWdlXHJcbiAgICAsIGFkZEV2ZW50TGlzdGVuZXIgPSBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lclxyXG4gICAgLCBNZXNzYWdlQ2hhbm5lbCAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXHJcbiAgICAsIGNvdW50ZXIgICAgICAgICAgPSAwXHJcbiAgICAsIHF1ZXVlICAgICAgICAgICAgPSB7fVxyXG4gICAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcclxuICBzZXRJbW1lZGlhdGUgPSBmdW5jdGlvbihmbil7XHJcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcclxuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XHJcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcclxuICAgICAgaW52b2tlKGlzRnVuY3Rpb24oZm4pID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgZGVmZXIoY291bnRlcik7XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9XHJcbiAgY2xlYXJJbW1lZGlhdGUgPSBmdW5jdGlvbihpZCl7XHJcbiAgICBkZWxldGUgcXVldWVbaWRdO1xyXG4gIH1cclxuICBmdW5jdGlvbiBydW4oaWQpe1xyXG4gICAgaWYoaGFzKHF1ZXVlLCBpZCkpe1xyXG4gICAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XHJcbiAgICAgIGRlbGV0ZSBxdWV1ZVtpZF07XHJcbiAgICAgIGZuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxpc3RuZXIoZXZlbnQpe1xyXG4gICAgcnVuKGV2ZW50LmRhdGEpO1xyXG4gIH1cclxuICAvLyBOb2RlLmpzIDAuOC1cclxuICBpZihOT0RFKXtcclxuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xyXG4gICAgICBuZXh0VGljayhwYXJ0LmNhbGwocnVuLCBpZCkpO1xyXG4gICAgfVxyXG4gIC8vIE1vZGVybiBicm93c2Vycywgc2tpcCBpbXBsZW1lbnRhdGlvbiBmb3IgV2ViV29ya2Vyc1xyXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzIG9iamVjdFxyXG4gIH0gZWxzZSBpZihhZGRFdmVudExpc3RlbmVyICYmIGlzRnVuY3Rpb24ocG9zdE1lc3NhZ2UpICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgcG9zdE1lc3NhZ2UoaWQsICcqJyk7XHJcbiAgICB9XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdG5lciwgZmFsc2UpO1xyXG4gIC8vIFdlYldvcmtlcnNcclxuICB9IGVsc2UgaWYoaXNGdW5jdGlvbihNZXNzYWdlQ2hhbm5lbCkpe1xyXG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcclxuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xyXG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0bmVyO1xyXG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XHJcbiAgLy8gSUU4LVxyXG4gIH0gZWxzZSBpZihkb2N1bWVudCAmJiBPTlJFQURZU1RBVEVDSEFOR0UgaW4gZG9jdW1lbnRbQ1JFQVRFX0VMRU1FTlRdKCdzY3JpcHQnKSl7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgaHRtbC5hcHBlbmRDaGlsZChkb2N1bWVudFtDUkVBVEVfRUxFTUVOVF0oJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgIHJ1bihpZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcclxuICAgICAgc2V0VGltZW91dChydW4sIDAsIGlkKTtcclxuICAgIH1cclxuICB9XHJcbn0oJ29ucmVhZHlzdGF0ZWNoYW5nZScpO1xyXG4kZGVmaW5lKEdMT0JBTCArIEJJTkQsIHtcclxuICBzZXRJbW1lZGlhdGU6ICAgc2V0SW1tZWRpYXRlLFxyXG4gIGNsZWFySW1tZWRpYXRlOiBjbGVhckltbWVkaWF0ZVxyXG59KTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LnByb21pc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gRVM2IHByb21pc2VzIHNoaW1cclxuLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2dldGlmeS9uYXRpdmUtcHJvbWlzZS1vbmx5L1xyXG4hZnVuY3Rpb24oUHJvbWlzZSwgdGVzdCl7XHJcbiAgaXNGdW5jdGlvbihQcm9taXNlKSAmJiBpc0Z1bmN0aW9uKFByb21pc2UucmVzb2x2ZSlcclxuICAmJiBQcm9taXNlLnJlc29sdmUodGVzdCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKCl7fSkpID09IHRlc3RcclxuICB8fCBmdW5jdGlvbihhc2FwLCBSRUNPUkQpe1xyXG4gICAgZnVuY3Rpb24gaXNUaGVuYWJsZShpdCl7XHJcbiAgICAgIHZhciB0aGVuO1xyXG4gICAgICBpZihpc09iamVjdChpdCkpdGhlbiA9IGl0LnRoZW47XHJcbiAgICAgIHJldHVybiBpc0Z1bmN0aW9uKHRoZW4pID8gdGhlbiA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChwcm9taXNlKXtcclxuICAgICAgdmFyIHJlY29yZCA9IHByb21pc2VbUkVDT1JEXVxyXG4gICAgICAgICwgY2hhaW4gID0gcmVjb3JkLmNcclxuICAgICAgICAsIGkgICAgICA9IDBcclxuICAgICAgICAsIHJlYWN0O1xyXG4gICAgICBpZihyZWNvcmQuaClyZXR1cm4gdHJ1ZTtcclxuICAgICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XHJcbiAgICAgICAgcmVhY3QgPSBjaGFpbltpKytdO1xyXG4gICAgICAgIGlmKHJlYWN0LmZhaWwgfHwgaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChyZWFjdC5QKSlyZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbm90aWZ5KHJlY29yZCwgcmVqZWN0KXtcclxuICAgICAgdmFyIGNoYWluID0gcmVjb3JkLmM7XHJcbiAgICAgIGlmKHJlamVjdCB8fCBjaGFpbi5sZW5ndGgpYXNhcChmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBwcm9taXNlID0gcmVjb3JkLnBcclxuICAgICAgICAgICwgdmFsdWUgICA9IHJlY29yZC52XHJcbiAgICAgICAgICAsIG9rICAgICAgPSByZWNvcmQucyA9PSAxXHJcbiAgICAgICAgICAsIGkgICAgICAgPSAwO1xyXG4gICAgICAgIGlmKHJlamVjdCAmJiAhaGFuZGxlZFJlamVjdGlvbk9ySGFzT25SZWplY3RlZChwcm9taXNlKSl7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKCFoYW5kbGVkUmVqZWN0aW9uT3JIYXNPblJlamVjdGVkKHByb21pc2UpKXtcclxuICAgICAgICAgICAgICBpZihOT0RFKXtcclxuICAgICAgICAgICAgICAgIGlmKCFwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKSl7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgbm9kZS5qcyBiZWhhdmlvclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZihpc0Z1bmN0aW9uKGNvbnNvbGUuZXJyb3IpKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sIDFlMyk7XHJcbiAgICAgICAgfSBlbHNlIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpIWZ1bmN0aW9uKHJlYWN0KXtcclxuICAgICAgICAgIHZhciBjYiA9IG9rID8gcmVhY3Qub2sgOiByZWFjdC5mYWlsXHJcbiAgICAgICAgICAgICwgcmV0LCB0aGVuO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYoY2Ipe1xyXG4gICAgICAgICAgICAgIGlmKCFvaylyZWNvcmQuaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgcmV0ID0gY2IgPT09IHRydWUgPyB2YWx1ZSA6IGNiKHZhbHVlKTtcclxuICAgICAgICAgICAgICBpZihyZXQgPT09IHJlYWN0LlApe1xyXG4gICAgICAgICAgICAgICAgcmVhY3QucmVqKFR5cGVFcnJvcihQUk9NSVNFICsgJy1jaGFpbiBjeWNsZScpKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmV0KSl7XHJcbiAgICAgICAgICAgICAgICB0aGVuLmNhbGwocmV0LCByZWFjdC5yZXMsIHJlYWN0LnJlaik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHJlYWN0LnJlcyhyZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgcmVhY3QucmVqKHZhbHVlKTtcclxuICAgICAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgcmVhY3QucmVqKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfShjaGFpbltpKytdKTtcclxuICAgICAgICBjaGFpbi5sZW5ndGggPSAwO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpe1xyXG4gICAgICB2YXIgcmVjb3JkID0gdGhpc1xyXG4gICAgICAgICwgdGhlbiwgd3JhcHBlcjtcclxuICAgICAgaWYocmVjb3JkLmQpcmV0dXJuO1xyXG4gICAgICByZWNvcmQuZCA9IHRydWU7XHJcbiAgICAgIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcclxuICAgICAgICAgIHdyYXBwZXIgPSB7cjogcmVjb3JkLCBkOiBmYWxzZX07IC8vIHdyYXBcclxuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgocmVqZWN0LCB3cmFwcGVyLCAxKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlY29yZC52ID0gdmFsdWU7XHJcbiAgICAgICAgICByZWNvcmQucyA9IDE7XHJcbiAgICAgICAgICBub3RpZnkocmVjb3JkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICByZWplY3QuY2FsbCh3cmFwcGVyIHx8IHtyOiByZWNvcmQsIGQ6IGZhbHNlfSwgZXJyKTsgLy8gd3JhcFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpe1xyXG4gICAgICB2YXIgcmVjb3JkID0gdGhpcztcclxuICAgICAgaWYocmVjb3JkLmQpcmV0dXJuO1xyXG4gICAgICByZWNvcmQuZCA9IHRydWU7XHJcbiAgICAgIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXHJcbiAgICAgIHJlY29yZC52ID0gdmFsdWU7XHJcbiAgICAgIHJlY29yZC5zID0gMjtcclxuICAgICAgbm90aWZ5KHJlY29yZCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnZXRDb25zdHJ1Y3RvcihDKXtcclxuICAgICAgdmFyIFMgPSBhc3NlcnRPYmplY3QoQylbU1lNQk9MX1NQRUNJRVNdO1xyXG4gICAgICByZXR1cm4gUyAhPSB1bmRlZmluZWQgPyBTIDogQztcclxuICAgIH1cclxuICAgIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXHJcbiAgICBQcm9taXNlID0gZnVuY3Rpb24oZXhlY3V0b3Ipe1xyXG4gICAgICBhc3NlcnRGdW5jdGlvbihleGVjdXRvcik7XHJcbiAgICAgIGFzc2VydEluc3RhbmNlKHRoaXMsIFByb21pc2UsIFBST01JU0UpO1xyXG4gICAgICB2YXIgcmVjb3JkID0ge1xyXG4gICAgICAgIHA6IHRoaXMsICAgICAgLy8gcHJvbWlzZVxyXG4gICAgICAgIGM6IFtdLCAgICAgICAgLy8gY2hhaW5cclxuICAgICAgICBzOiAwLCAgICAgICAgIC8vIHN0YXRlXHJcbiAgICAgICAgZDogZmFsc2UsICAgICAvLyBkb25lXHJcbiAgICAgICAgdjogdW5kZWZpbmVkLCAvLyB2YWx1ZVxyXG4gICAgICAgIGg6IGZhbHNlICAgICAgLy8gaGFuZGxlZCByZWplY3Rpb25cclxuICAgICAgfTtcclxuICAgICAgaGlkZGVuKHRoaXMsIFJFQ09SRCwgcmVjb3JkKTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBleGVjdXRvcihjdHgocmVzb2x2ZSwgcmVjb3JkLCAxKSwgY3R4KHJlamVjdCwgcmVjb3JkLCAxKSk7XHJcbiAgICAgIH0gY2F0Y2goZXJyKXtcclxuICAgICAgICByZWplY3QuY2FsbChyZWNvcmQsIGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGFzc2lnbkhpZGRlbihQcm9taXNlW1BST1RPVFlQRV0sIHtcclxuICAgICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcclxuICAgICAgdGhlbjogZnVuY3Rpb24ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xyXG4gICAgICAgIHZhciBTID0gYXNzZXJ0T2JqZWN0KGFzc2VydE9iamVjdCh0aGlzKVtDT05TVFJVQ1RPUl0pW1NZTUJPTF9TUEVDSUVTXTtcclxuICAgICAgICB2YXIgcmVhY3QgPSB7XHJcbiAgICAgICAgICBvazogICBpc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/IG9uRnVsZmlsbGVkIDogdHJ1ZSxcclxuICAgICAgICAgIGZhaWw6IGlzRnVuY3Rpb24ob25SZWplY3RlZCkgID8gb25SZWplY3RlZCAgOiBmYWxzZVxyXG4gICAgICAgIH0gLCBQID0gcmVhY3QuUCA9IG5ldyAoUyAhPSB1bmRlZmluZWQgPyBTIDogUHJvbWlzZSkoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgIHJlYWN0LnJlcyA9IGFzc2VydEZ1bmN0aW9uKHJlc29sdmUpO1xyXG4gICAgICAgICAgcmVhY3QucmVqID0gYXNzZXJ0RnVuY3Rpb24ocmVqZWN0KTtcclxuICAgICAgICB9KSwgcmVjb3JkID0gdGhpc1tSRUNPUkRdO1xyXG4gICAgICAgIHJlY29yZC5jLnB1c2gocmVhY3QpO1xyXG4gICAgICAgIHJlY29yZC5zICYmIG5vdGlmeShyZWNvcmQpO1xyXG4gICAgICAgIHJldHVybiBQO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxyXG4gICAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcclxuICAgICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgYXNzaWduSGlkZGVuKFByb21pc2UsIHtcclxuICAgICAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXHJcbiAgICAgIGFsbDogZnVuY3Rpb24oaXRlcmFibGUpe1xyXG4gICAgICAgIHZhciBQcm9taXNlID0gZ2V0Q29uc3RydWN0b3IodGhpcylcclxuICAgICAgICAgICwgdmFsdWVzICA9IFtdO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBwdXNoLCB2YWx1ZXMpO1xyXG4gICAgICAgICAgdmFyIHJlbWFpbmluZyA9IHZhbHVlcy5sZW5ndGhcclxuICAgICAgICAgICAgLCByZXN1bHRzICAgPSBBcnJheShyZW1haW5pbmcpO1xyXG4gICAgICAgICAgaWYocmVtYWluaW5nKWZvckVhY2guY2FsbCh2YWx1ZXMsIGZ1bmN0aW9uKHByb21pc2UsIGluZGV4KXtcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZShyZXN1bHRzKTtcclxuICAgICAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWxzZSByZXNvbHZlKHJlc3VsdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXHJcbiAgICAgIHJhY2U6IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgICAgICB2YXIgUHJvbWlzZSA9IGdldENvbnN0cnVjdG9yKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHByb21pc2UpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxyXG4gICAgICByZWplY3Q6IGZ1bmN0aW9uKHIpe1xyXG4gICAgICAgIHJldHVybiBuZXcgKGdldENvbnN0cnVjdG9yKHRoaXMpKShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xyXG4gICAgICAgICAgcmVqZWN0KHIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcclxuICAgICAgcmVzb2x2ZTogZnVuY3Rpb24oeCl7XHJcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHgpICYmIFJFQ09SRCBpbiB4ICYmIGdldFByb3RvdHlwZU9mKHgpID09PSB0aGlzW1BST1RPVFlQRV1cclxuICAgICAgICAgID8geCA6IG5ldyAoZ2V0Q29uc3RydWN0b3IodGhpcykpKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfShuZXh0VGljayB8fCBzZXRJbW1lZGlhdGUsIHNhZmVTeW1ib2woJ3JlY29yZCcpKTtcclxuICBzZXRUb1N0cmluZ1RhZyhQcm9taXNlLCBQUk9NSVNFKTtcclxuICBzZXRTcGVjaWVzKFByb21pc2UpO1xyXG4gICRkZWZpbmUoR0xPQkFMICsgRk9SQ0VEICogIWlzTmF0aXZlKFByb21pc2UpLCB7UHJvbWlzZTogUHJvbWlzZX0pO1xyXG59KGdsb2JhbFtQUk9NSVNFXSk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGVzNi5jb2xsZWN0aW9ucyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEVDTUFTY3JpcHQgNiBjb2xsZWN0aW9ucyBzaGltXHJcbiFmdW5jdGlvbigpe1xyXG4gIHZhciBVSUQgICA9IHNhZmVTeW1ib2woJ3VpZCcpXHJcbiAgICAsIE8xICAgID0gc2FmZVN5bWJvbCgnTzEnKVxyXG4gICAgLCBXRUFLICA9IHNhZmVTeW1ib2woJ3dlYWsnKVxyXG4gICAgLCBMRUFLICA9IHNhZmVTeW1ib2woJ2xlYWsnKVxyXG4gICAgLCBMQVNUICA9IHNhZmVTeW1ib2woJ2xhc3QnKVxyXG4gICAgLCBGSVJTVCA9IHNhZmVTeW1ib2woJ2ZpcnN0JylcclxuICAgICwgU0laRSAgPSBERVNDID8gc2FmZVN5bWJvbCgnc2l6ZScpIDogJ3NpemUnXHJcbiAgICAsIHVpZCAgID0gMFxyXG4gICAgLCB0bXAgICA9IHt9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldENvbGxlY3Rpb24oQywgTkFNRSwgbWV0aG9kcywgY29tbW9uTWV0aG9kcywgaXNNYXAsIGlzV2Vhayl7XHJcbiAgICB2YXIgQURERVIgPSBpc01hcCA/ICdzZXQnIDogJ2FkZCdcclxuICAgICAgLCBwcm90byA9IEMgJiYgQ1tQUk9UT1RZUEVdXHJcbiAgICAgICwgTyAgICAgPSB7fTtcclxuICAgIGZ1bmN0aW9uIGluaXRGcm9tSXRlcmFibGUodGhhdCwgaXRlcmFibGUpe1xyXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIGlzTWFwLCB0aGF0W0FEREVSXSwgdGhhdCk7XHJcbiAgICAgIHJldHVybiB0aGF0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZml4U1ZaKGtleSwgY2hhaW4pe1xyXG4gICAgICB2YXIgbWV0aG9kID0gcHJvdG9ba2V5XTtcclxuICAgICAgaWYoZnJhbWV3b3JrKXByb3RvW2tleV0gPSBmdW5jdGlvbihhLCBiKXtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbWV0aG9kLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTtcclxuICAgICAgICByZXR1cm4gY2hhaW4gPyB0aGlzIDogcmVzdWx0O1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYoIWlzTmF0aXZlKEMpIHx8ICEoaXNXZWFrIHx8ICghQlVHR1lfSVRFUkFUT1JTICYmIGhhcyhwcm90bywgRk9SX0VBQ0gpICYmIGhhcyhwcm90bywgJ2VudHJpZXMnKSkpKXtcclxuICAgICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcclxuICAgICAgQyA9IGlzV2Vha1xyXG4gICAgICAgID8gZnVuY3Rpb24oaXRlcmFibGUpe1xyXG4gICAgICAgICAgICBhc3NlcnRJbnN0YW5jZSh0aGlzLCBDLCBOQU1FKTtcclxuICAgICAgICAgICAgc2V0KHRoaXMsIFVJRCwgdWlkKyspO1xyXG4gICAgICAgICAgICBpbml0RnJvbUl0ZXJhYmxlKHRoaXMsIGl0ZXJhYmxlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICA6IGZ1bmN0aW9uKGl0ZXJhYmxlKXtcclxuICAgICAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBhc3NlcnRJbnN0YW5jZSh0aGF0LCBDLCBOQU1FKTtcclxuICAgICAgICAgICAgc2V0KHRoYXQsIE8xLCBjcmVhdGUobnVsbCkpO1xyXG4gICAgICAgICAgICBzZXQodGhhdCwgU0laRSwgMCk7XHJcbiAgICAgICAgICAgIHNldCh0aGF0LCBMQVNULCB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICBzZXQodGhhdCwgRklSU1QsIHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgIGluaXRGcm9tSXRlcmFibGUodGhhdCwgaXRlcmFibGUpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgYXNzaWduSGlkZGVuKGFzc2lnbkhpZGRlbihDW1BST1RPVFlQRV0sIG1ldGhvZHMpLCBjb21tb25NZXRob2RzKTtcclxuICAgICAgaXNXZWFrIHx8ICFERVNDIHx8IGRlZmluZVByb3BlcnR5KENbUFJPVE9UWVBFXSwgJ3NpemUnLCB7Z2V0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBhc3NlcnREZWZpbmVkKHRoaXNbU0laRV0pO1xyXG4gICAgICB9fSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgTmF0aXZlID0gQ1xyXG4gICAgICAgICwgaW5zdCAgID0gbmV3IENcclxuICAgICAgICAsIGNoYWluICA9IGluc3RbQURERVJdKGlzV2VhayA/IHt9IDogLTAsIDEpXHJcbiAgICAgICAgLCBidWdneVplcm87XHJcbiAgICAgIC8vIHdyYXAgdG8gaW5pdCBjb2xsZWN0aW9ucyBmcm9tIGl0ZXJhYmxlXHJcbiAgICAgIGlmKGNoZWNrRGFuZ2VySXRlckNsb3NpbmcoZnVuY3Rpb24oTyl7IG5ldyBDKE8pIH0pKXtcclxuICAgICAgICBDID0gZnVuY3Rpb24oaXRlcmFibGUpe1xyXG4gICAgICAgICAgYXNzZXJ0SW5zdGFuY2UodGhpcywgQywgTkFNRSk7XHJcbiAgICAgICAgICByZXR1cm4gaW5pdEZyb21JdGVyYWJsZShuZXcgTmF0aXZlLCBpdGVyYWJsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIENbUFJPVE9UWVBFXSA9IHByb3RvO1xyXG4gICAgICAgIGlmKGZyYW1ld29yaylwcm90b1tDT05TVFJVQ1RPUl0gPSBDO1xyXG4gICAgICB9XHJcbiAgICAgIGlzV2VhayB8fCBpbnN0W0ZPUl9FQUNIXShmdW5jdGlvbih2YWwsIGtleSl7XHJcbiAgICAgICAgYnVnZ3laZXJvID0gMSAvIGtleSA9PT0gLUluZmluaXR5O1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gZml4IGNvbnZlcnRpbmcgLTAga2V5IHRvICswXHJcbiAgICAgIGlmKGJ1Z2d5WmVybyl7XHJcbiAgICAgICAgZml4U1ZaKCdkZWxldGUnKTtcclxuICAgICAgICBmaXhTVlooJ2hhcycpO1xyXG4gICAgICAgIGlzTWFwICYmIGZpeFNWWignZ2V0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gKyBmaXggLmFkZCAmIC5zZXQgZm9yIGNoYWluaW5nXHJcbiAgICAgIGlmKGJ1Z2d5WmVybyB8fCBjaGFpbiAhPT0gaW5zdClmaXhTVlooQURERVIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XHJcbiAgICBzZXRTcGVjaWVzKEMpO1xyXG4gICAgXHJcbiAgICBPW05BTUVdID0gQztcclxuICAgICRkZWZpbmUoR0xPQkFMICsgV1JBUCArIEZPUkNFRCAqICFpc05hdGl2ZShDKSwgTyk7XHJcbiAgICBcclxuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxyXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxyXG4gICAgaXNXZWFrIHx8IGRlZmluZVN0ZEl0ZXJhdG9ycyhDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XHJcbiAgICAgIHNldCh0aGlzLCBJVEVSLCB7bzogaXRlcmF0ZWQsIGs6IGtpbmR9KTtcclxuICAgIH0sIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciBpdGVyICA9IHRoaXNbSVRFUl1cclxuICAgICAgICAsIGtpbmQgID0gaXRlci5rXHJcbiAgICAgICAgLCBlbnRyeSA9IGl0ZXIubDtcclxuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XHJcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xyXG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxyXG4gICAgICBpZighaXRlci5vIHx8ICEoaXRlci5sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiBpdGVyLm9bRklSU1RdKSl7XHJcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cclxuICAgICAgICBpdGVyLm8gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIGl0ZXJSZXN1bHQoMSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxyXG4gICAgICBpZihraW5kID09IEtFWSkgIHJldHVybiBpdGVyUmVzdWx0KDAsIGVudHJ5LmspO1xyXG4gICAgICBpZihraW5kID09IFZBTFVFKXJldHVybiBpdGVyUmVzdWx0KDAsIGVudHJ5LnYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyUmVzdWx0KDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7ICAgXHJcbiAgICB9LCBpc01hcCA/IEtFWStWQUxVRSA6IFZBTFVFLCAhaXNNYXApO1xyXG4gICAgXHJcbiAgICByZXR1cm4gQztcclxuICB9XHJcbiAgXHJcbiAgZnVuY3Rpb24gZmFzdEtleShpdCwgY3JlYXRlKXtcclxuICAgIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcclxuICAgIGlmKCFpc09iamVjdChpdCkpcmV0dXJuICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XHJcbiAgICAvLyBjYW4ndCBzZXQgaWQgdG8gZnJvemVuIG9iamVjdFxyXG4gICAgaWYoaXNGcm96ZW4oaXQpKXJldHVybiAnRic7XHJcbiAgICBpZighaGFzKGl0LCBVSUQpKXtcclxuICAgICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgaWRcclxuICAgICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xyXG4gICAgICAvLyBhZGQgbWlzc2luZyBvYmplY3QgaWRcclxuICAgICAgaGlkZGVuKGl0LCBVSUQsICsrdWlkKTtcclxuICAgIC8vIHJldHVybiBvYmplY3QgaWQgd2l0aCBwcmVmaXhcclxuICAgIH0gcmV0dXJuICdPJyArIGl0W1VJRF07XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGdldEVudHJ5KHRoYXQsIGtleSl7XHJcbiAgICAvLyBmYXN0IGNhc2VcclxuICAgIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XHJcbiAgICBpZihpbmRleCAhPSAnRicpcmV0dXJuIHRoYXRbTzFdW2luZGV4XTtcclxuICAgIC8vIGZyb3plbiBvYmplY3QgY2FzZVxyXG4gICAgZm9yKGVudHJ5ID0gdGhhdFtGSVJTVF07IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xyXG4gICAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGRlZih0aGF0LCBrZXksIHZhbHVlKXtcclxuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcclxuICAgICAgLCBwcmV2LCBpbmRleDtcclxuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxyXG4gICAgaWYoZW50cnkpZW50cnkudiA9IHZhbHVlO1xyXG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoYXRbTEFTVF0gPSBlbnRyeSA9IHtcclxuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcclxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XHJcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXHJcbiAgICAgICAgcDogcHJldiA9IHRoYXRbTEFTVF0sICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XHJcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcclxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxyXG4gICAgICB9O1xyXG4gICAgICBpZighdGhhdFtGSVJTVF0pdGhhdFtGSVJTVF0gPSBlbnRyeTtcclxuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcclxuICAgICAgdGhhdFtTSVpFXSsrO1xyXG4gICAgICAvLyBhZGQgdG8gaW5kZXhcclxuICAgICAgaWYoaW5kZXggIT0gJ0YnKXRoYXRbTzFdW2luZGV4XSA9IGVudHJ5O1xyXG4gICAgfSByZXR1cm4gdGhhdDtcclxuICB9XHJcblxyXG4gIHZhciBjb2xsZWN0aW9uTWV0aG9kcyA9IHtcclxuICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxyXG4gICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXHJcbiAgICBjbGVhcjogZnVuY3Rpb24oKXtcclxuICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXRbTzFdLCBlbnRyeSA9IHRoYXRbRklSU1RdOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcclxuICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcclxuICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XHJcbiAgICAgIH1cclxuICAgICAgdGhhdFtGSVJTVF0gPSB0aGF0W0xBU1RdID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGF0W1NJWkVdID0gMDtcclxuICAgIH0sXHJcbiAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXHJcbiAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcclxuICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXHJcbiAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XHJcbiAgICAgIGlmKGVudHJ5KXtcclxuICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cclxuICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XHJcbiAgICAgICAgZGVsZXRlIHRoYXRbTzFdW2VudHJ5LmldO1xyXG4gICAgICAgIGVudHJ5LnIgPSB0cnVlO1xyXG4gICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcclxuICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XHJcbiAgICAgICAgaWYodGhhdFtGSVJTVF0gPT0gZW50cnkpdGhhdFtGSVJTVF0gPSBuZXh0O1xyXG4gICAgICAgIGlmKHRoYXRbTEFTVF0gPT0gZW50cnkpdGhhdFtMQVNUXSA9IHByZXY7XHJcbiAgICAgICAgdGhhdFtTSVpFXS0tO1xyXG4gICAgICB9IHJldHVybiAhIWVudHJ5O1xyXG4gICAgfSxcclxuICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxyXG4gICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXHJcbiAgICBmb3JFYWNoOiBmdW5jdGlvbihjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcclxuICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzWzFdLCAzKVxyXG4gICAgICAgICwgZW50cnk7XHJcbiAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpc1tGSVJTVF0pe1xyXG4gICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XHJcbiAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XHJcbiAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXHJcbiAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcclxuICAgIGhhczogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gMjMuMSBNYXAgT2JqZWN0c1xyXG4gIE1hcCA9IGdldENvbGxlY3Rpb24oTWFwLCBNQVAsIHtcclxuICAgIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcclxuICAgIGdldDogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhpcywga2V5KTtcclxuICAgICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XHJcbiAgICB9LFxyXG4gICAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcclxuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgIHJldHVybiBkZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIGNvbGxlY3Rpb25NZXRob2RzLCB0cnVlKTtcclxuICBcclxuICAvLyAyMy4yIFNldCBPYmplY3RzXHJcbiAgU2V0ID0gZ2V0Q29sbGVjdGlvbihTZXQsIFNFVCwge1xyXG4gICAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXHJcbiAgICBhZGQ6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgcmV0dXJuIGRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfSwgY29sbGVjdGlvbk1ldGhvZHMpO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIGRlZldlYWsodGhhdCwga2V5LCB2YWx1ZSl7XHJcbiAgICBpZihpc0Zyb3plbihhc3NlcnRPYmplY3Qoa2V5KSkpbGVha1N0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICBoYXMoa2V5LCBXRUFLKSB8fCBoaWRkZW4oa2V5LCBXRUFLLCB7fSk7XHJcbiAgICAgIGtleVtXRUFLXVt0aGF0W1VJRF1dID0gdmFsdWU7XHJcbiAgICB9IHJldHVybiB0aGF0O1xyXG4gIH1cclxuICBmdW5jdGlvbiBsZWFrU3RvcmUodGhhdCl7XHJcbiAgICByZXR1cm4gdGhhdFtMRUFLXSB8fCBoaWRkZW4odGhhdCwgTEVBSywgbmV3IE1hcClbTEVBS107XHJcbiAgfVxyXG4gIFxyXG4gIHZhciB3ZWFrTWV0aG9kcyA9IHtcclxuICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXHJcbiAgICAvLyAyMy40LjMuMyBXZWFrU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXHJcbiAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcclxuICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZihpc0Zyb3plbihrZXkpKXJldHVybiBsZWFrU3RvcmUodGhpcylbJ2RlbGV0ZSddKGtleSk7XHJcbiAgICAgIHJldHVybiBoYXMoa2V5LCBXRUFLKSAmJiBoYXMoa2V5W1dFQUtdLCB0aGlzW1VJRF0pICYmIGRlbGV0ZSBrZXlbV0VBS11bdGhpc1tVSURdXTtcclxuICAgIH0sXHJcbiAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxyXG4gICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxyXG4gICAgaGFzOiBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmKGlzRnJvemVuKGtleSkpcmV0dXJuIGxlYWtTdG9yZSh0aGlzKS5oYXMoa2V5KTtcclxuICAgICAgcmV0dXJuIGhhcyhrZXksIFdFQUspICYmIGhhcyhrZXlbV0VBS10sIHRoaXNbVUlEXSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICAvLyAyMy4zIFdlYWtNYXAgT2JqZWN0c1xyXG4gIFdlYWtNYXAgPSBnZXRDb2xsZWN0aW9uKFdlYWtNYXAsIFdFQUtNQVAsIHtcclxuICAgIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXHJcbiAgICBnZXQ6IGZ1bmN0aW9uKGtleSl7XHJcbiAgICAgIGlmKGlzT2JqZWN0KGtleSkpe1xyXG4gICAgICAgIGlmKGlzRnJvemVuKGtleSkpcmV0dXJuIGxlYWtTdG9yZSh0aGlzKS5nZXQoa2V5KTtcclxuICAgICAgICBpZihoYXMoa2V5LCBXRUFLKSlyZXR1cm4ga2V5W1dFQUtdW3RoaXNbVUlEXV07XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcclxuICAgIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XHJcbiAgICAgIHJldHVybiBkZWZXZWFrKHRoaXMsIGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH0sIHdlYWtNZXRob2RzLCB0cnVlLCB0cnVlKTtcclxuICBcclxuICAvLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XHJcbiAgaWYoZnJhbWV3b3JrICYmIG5ldyBXZWFrTWFwKCkuc2V0KE9iamVjdC5mcmVlemUodG1wKSwgNykuZ2V0KHRtcCkgIT0gNyl7XHJcbiAgICBmb3JFYWNoLmNhbGwoYXJyYXkoJ2RlbGV0ZSxoYXMsZ2V0LHNldCcpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgICB2YXIgbWV0aG9kID0gV2Vha01hcFtQUk9UT1RZUEVdW2tleV07XHJcbiAgICAgIFdlYWtNYXBbUFJPVE9UWVBFXVtrZXldID0gZnVuY3Rpb24oYSwgYil7XHJcbiAgICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gbGVha3kgbWFwXHJcbiAgICAgICAgaWYoaXNPYmplY3QoYSkgJiYgaXNGcm96ZW4oYSkpe1xyXG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGxlYWtTdG9yZSh0aGlzKVtrZXldKGEsIGIpO1xyXG4gICAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XHJcbiAgICAgICAgLy8gc3RvcmUgYWxsIHRoZSByZXN0IG9uIG5hdGl2ZSB3ZWFrbWFwXHJcbiAgICAgICAgfSByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgYSwgYik7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gMjMuNCBXZWFrU2V0IE9iamVjdHNcclxuICBXZWFrU2V0ID0gZ2V0Q29sbGVjdGlvbihXZWFrU2V0LCBXRUFLU0VULCB7XHJcbiAgICAvLyAyMy40LjMuMSBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXHJcbiAgICBhZGQ6IGZ1bmN0aW9uKHZhbHVlKXtcclxuICAgICAgcmV0dXJuIGRlZldlYWsodGhpcywgdmFsdWUsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIHdlYWtNZXRob2RzLCBmYWxzZSwgdHJ1ZSk7XHJcbn0oKTtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogTW9kdWxlIDogZXM2LnJlZmxlY3QgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuIWZ1bmN0aW9uKCl7XHJcbiAgZnVuY3Rpb24gRW51bWVyYXRlKGl0ZXJhdGVkKXtcclxuICAgIHZhciBrZXlzID0gW10sIGtleTtcclxuICAgIGZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7XHJcbiAgICBzZXQodGhpcywgSVRFUiwge286IGl0ZXJhdGVkLCBhOiBrZXlzLCBpOiAwfSk7XHJcbiAgfVxyXG4gIGNyZWF0ZUl0ZXJhdG9yKEVudW1lcmF0ZSwgT0JKRUNULCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGl0ZXIgPSB0aGlzW0lURVJdXHJcbiAgICAgICwga2V5cyA9IGl0ZXIuYVxyXG4gICAgICAsIGtleTtcclxuICAgIGRvIHtcclxuICAgICAgaWYoaXRlci5pID49IGtleXMubGVuZ3RoKXJldHVybiBpdGVyUmVzdWx0KDEpO1xyXG4gICAgfSB3aGlsZSghKChrZXkgPSBrZXlzW2l0ZXIuaSsrXSkgaW4gaXRlci5vKSk7XHJcbiAgICByZXR1cm4gaXRlclJlc3VsdCgwLCBrZXkpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIHdyYXAoZm4pe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcclxuICAgICAgYXNzZXJ0T2JqZWN0KGl0KTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gZm4uYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpLCB0cnVlO1xyXG4gICAgICB9IGNhdGNoKGUpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiByZWZsZWN0R2V0KHRhcmdldCwgcHJvcGVydHlLZXkvKiwgcmVjZWl2ZXIqLyl7XHJcbiAgICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXVxyXG4gICAgICAsIGRlc2MgPSBnZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSksIHByb3RvO1xyXG4gICAgaWYoZGVzYylyZXR1cm4gaGFzKGRlc2MsICd2YWx1ZScpXHJcbiAgICAgID8gZGVzYy52YWx1ZVxyXG4gICAgICA6IGRlc2MuZ2V0ID09PSB1bmRlZmluZWRcclxuICAgICAgICA/IHVuZGVmaW5lZFxyXG4gICAgICAgIDogZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XHJcbiAgICByZXR1cm4gaXNPYmplY3QocHJvdG8gPSBnZXRQcm90b3R5cGVPZih0YXJnZXQpKVxyXG4gICAgICA/IHJlZmxlY3RHZXQocHJvdG8sIHByb3BlcnR5S2V5LCByZWNlaXZlcilcclxuICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlZmxlY3RTZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgVi8qLCByZWNlaXZlciovKXtcclxuICAgIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCA0ID8gdGFyZ2V0IDogYXJndW1lbnRzWzNdXHJcbiAgICAgICwgb3duRGVzYyAgPSBnZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSlcclxuICAgICAgLCBleGlzdGluZ0Rlc2NyaXB0b3IsIHByb3RvO1xyXG4gICAgaWYoIW93bkRlc2Mpe1xyXG4gICAgICBpZihpc09iamVjdChwcm90byA9IGdldFByb3RvdHlwZU9mKHRhcmdldCkpKXtcclxuICAgICAgICByZXR1cm4gcmVmbGVjdFNldChwcm90bywgcHJvcGVydHlLZXksIFYsIHJlY2VpdmVyKTtcclxuICAgICAgfVxyXG4gICAgICBvd25EZXNjID0gZGVzY3JpcHRvcigwKTtcclxuICAgIH1cclxuICAgIGlmKGhhcyhvd25EZXNjLCAndmFsdWUnKSl7XHJcbiAgICAgIGlmKG93bkRlc2Mud3JpdGFibGUgPT09IGZhbHNlIHx8ICFpc09iamVjdChyZWNlaXZlcikpcmV0dXJuIGZhbHNlO1xyXG4gICAgICBleGlzdGluZ0Rlc2NyaXB0b3IgPSBnZXRPd25EZXNjcmlwdG9yKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSkgfHwgZGVzY3JpcHRvcigwKTtcclxuICAgICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcclxuICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgZXhpc3RpbmdEZXNjcmlwdG9yKSwgdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvd25EZXNjLnNldCA9PT0gdW5kZWZpbmVkXHJcbiAgICAgID8gZmFsc2VcclxuICAgICAgOiAob3duRGVzYy5zZXQuY2FsbChyZWNlaXZlciwgViksIHRydWUpO1xyXG4gIH1cclxuICB2YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCByZXR1cm5JdDtcclxuICBcclxuICB2YXIgcmVmbGVjdCA9IHtcclxuICAgIC8vIDI2LjEuMSBSZWZsZWN0LmFwcGx5KHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KVxyXG4gICAgYXBwbHk6IGN0eChjYWxsLCBhcHBseSwgMyksXHJcbiAgICAvLyAyNi4xLjIgUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IFssIG5ld1RhcmdldF0pXHJcbiAgICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uKHRhcmdldCwgYXJndW1lbnRzTGlzdCAvKiwgbmV3VGFyZ2V0Ki8pe1xyXG4gICAgICB2YXIgcHJvdG8gICAgPSBhc3NlcnRGdW5jdGlvbihhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXSlbUFJPVE9UWVBFXVxyXG4gICAgICAgICwgaW5zdGFuY2UgPSBjcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3RQcm90bylcclxuICAgICAgICAsIHJlc3VsdCAgID0gYXBwbHkuY2FsbCh0YXJnZXQsIGluc3RhbmNlLCBhcmd1bWVudHNMaXN0KTtcclxuICAgICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcclxuICAgIH0sXHJcbiAgICAvLyAyNi4xLjMgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKVxyXG4gICAgZGVmaW5lUHJvcGVydHk6IHdyYXAoZGVmaW5lUHJvcGVydHkpLFxyXG4gICAgLy8gMjYuMS40IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSlcclxuICAgIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgICAgdmFyIGRlc2MgPSBnZXRPd25EZXNjcmlwdG9yKGFzc2VydE9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XHJcbiAgICAgIHJldHVybiBkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSA/IGZhbHNlIDogZGVsZXRlIHRhcmdldFtwcm9wZXJ0eUtleV07XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS41IFJlZmxlY3QuZW51bWVyYXRlKHRhcmdldClcclxuICAgIGVudW1lcmF0ZTogZnVuY3Rpb24odGFyZ2V0KXtcclxuICAgICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUoYXNzZXJ0T2JqZWN0KHRhcmdldCkpO1xyXG4gICAgfSxcclxuICAgIC8vIDI2LjEuNiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5S2V5IFssIHJlY2VpdmVyXSlcclxuICAgIGdldDogcmVmbGVjdEdldCxcclxuICAgIC8vIDI2LjEuNyBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KVxyXG4gICAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbih0YXJnZXQsIHByb3BlcnR5S2V5KXtcclxuICAgICAgcmV0dXJuIGdldE93bkRlc2NyaXB0b3IoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcclxuICAgIH0sXHJcbiAgICAvLyAyNi4xLjggUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpXHJcbiAgICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24odGFyZ2V0KXtcclxuICAgICAgcmV0dXJuIGdldFByb3RvdHlwZU9mKGFzc2VydE9iamVjdCh0YXJnZXQpKTtcclxuICAgIH0sXHJcbiAgICAvLyAyNi4xLjkgUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wZXJ0eUtleSlcclxuICAgIGhhczogZnVuY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eUtleSl7XHJcbiAgICAgIHJldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXQ7XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS4xMCBSZWZsZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpXHJcbiAgICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uKHRhcmdldCl7XHJcbiAgICAgIHJldHVybiAhIWlzRXh0ZW5zaWJsZShhc3NlcnRPYmplY3QodGFyZ2V0KSk7XHJcbiAgICB9LFxyXG4gICAgLy8gMjYuMS4xMSBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxyXG4gICAgb3duS2V5czogb3duS2V5cyxcclxuICAgIC8vIDI2LjEuMTIgUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpXHJcbiAgICBwcmV2ZW50RXh0ZW5zaW9uczogd3JhcChPYmplY3QucHJldmVudEV4dGVuc2lvbnMgfHwgcmV0dXJuSXQpLFxyXG4gICAgLy8gMjYuMS4xMyBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWIFssIHJlY2VpdmVyXSlcclxuICAgIHNldDogcmVmbGVjdFNldFxyXG4gIH1cclxuICAvLyAyNi4xLjE0IFJlZmxlY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90bylcclxuICBpZihzZXRQcm90b3R5cGVPZilyZWZsZWN0LnNldFByb3RvdHlwZU9mID0gZnVuY3Rpb24odGFyZ2V0LCBwcm90byl7XHJcbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2YoYXNzZXJ0T2JqZWN0KHRhcmdldCksIHByb3RvKSwgdHJ1ZTtcclxuICB9O1xyXG4gIFxyXG4gICRkZWZpbmUoR0xPQkFMLCB7UmVmbGVjdDoge319KTtcclxuICAkZGVmaW5lKFNUQVRJQywgJ1JlZmxlY3QnLCByZWZsZWN0KTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczcucHJvcG9zYWxzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oKXtcclxuICAkZGVmaW5lKFBST1RPLCBBUlJBWSwge1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RvbWVuaWMvQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXHJcbiAgICBpbmNsdWRlczogY3JlYXRlQXJyYXlDb250YWlucyh0cnVlKVxyXG4gIH0pO1xyXG4gICRkZWZpbmUoUFJPVE8sIFNUUklORywge1xyXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxyXG4gICAgYXQ6IGNyZWF0ZVBvaW50QXQodHJ1ZSlcclxuICB9KTtcclxuICBcclxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RUb0FycmF5KGlzRW50cmllcyl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KXtcclxuICAgICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KG9iamVjdClcclxuICAgICAgICAsIGtleXMgICA9IGdldEtleXMob2JqZWN0KVxyXG4gICAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcclxuICAgICAgICAsIGkgICAgICA9IDBcclxuICAgICAgICAsIHJlc3VsdCA9IEFycmF5KGxlbmd0aClcclxuICAgICAgICAsIGtleTtcclxuICAgICAgaWYoaXNFbnRyaWVzKXdoaWxlKGxlbmd0aCA+IGkpcmVzdWx0W2ldID0gW2tleSA9IGtleXNbaSsrXSwgT1trZXldXTtcclxuICAgICAgZWxzZSB3aGlsZShsZW5ndGggPiBpKXJlc3VsdFtpXSA9IE9ba2V5c1tpKytdXTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICB9XHJcbiAgJGRlZmluZShTVEFUSUMsIE9CSkVDVCwge1xyXG4gICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi85MzUzNzgxXHJcbiAgICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbihvYmplY3Qpe1xyXG4gICAgICB2YXIgTyAgICAgID0gdG9PYmplY3Qob2JqZWN0KVxyXG4gICAgICAgICwgcmVzdWx0ID0ge307XHJcbiAgICAgIGZvckVhY2guY2FsbChvd25LZXlzKE8pLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgICAgIGRlZmluZVByb3BlcnR5KHJlc3VsdCwga2V5LCBkZXNjcmlwdG9yKDAsIGdldE93bkRlc2NyaXB0b3IoTywga2V5KSkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcndhbGRyb24vdGMzOS1ub3Rlcy9ibG9iL21hc3Rlci9lczYvMjAxNC0wNC9hcHItOS5tZCM1MS1vYmplY3RlbnRyaWVzLW9iamVjdHZhbHVlc1xyXG4gICAgdmFsdWVzOiAgY3JlYXRlT2JqZWN0VG9BcnJheShmYWxzZSksXHJcbiAgICBlbnRyaWVzOiBjcmVhdGVPYmplY3RUb0FycmF5KHRydWUpXHJcbiAgfSk7XHJcbiAgJGRlZmluZShTVEFUSUMsIFJFR0VYUCwge1xyXG4gICAgLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20va2FuZ2F4Lzk2OTgxMDBcclxuICAgIGVzY2FwZTogY3JlYXRlUmVwbGFjZXIoLyhbXFxcXFxcLVtcXF17fSgpKis/LixeJHxdKS9nLCAnXFxcXCQxJywgdHJ1ZSlcclxuICB9KTtcclxufSgpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiBlczcuYWJzdHJhY3QtcmVmcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemVucGFyc2luZy9lcy1hYnN0cmFjdC1yZWZzXHJcbiFmdW5jdGlvbihSRUZFUkVOQ0Upe1xyXG4gIFJFRkVSRU5DRV9HRVQgPSBnZXRXZWxsS25vd25TeW1ib2woUkVGRVJFTkNFKydHZXQnLCB0cnVlKTtcclxuICB2YXIgUkVGRVJFTkNFX1NFVCA9IGdldFdlbGxLbm93blN5bWJvbChSRUZFUkVOQ0UrU0VULCB0cnVlKVxyXG4gICAgLCBSRUZFUkVOQ0VfREVMRVRFID0gZ2V0V2VsbEtub3duU3ltYm9sKFJFRkVSRU5DRSsnRGVsZXRlJywgdHJ1ZSk7XHJcbiAgXHJcbiAgJGRlZmluZShTVEFUSUMsIFNZTUJPTCwge1xyXG4gICAgcmVmZXJlbmNlR2V0OiBSRUZFUkVOQ0VfR0VULFxyXG4gICAgcmVmZXJlbmNlU2V0OiBSRUZFUkVOQ0VfU0VULFxyXG4gICAgcmVmZXJlbmNlRGVsZXRlOiBSRUZFUkVOQ0VfREVMRVRFXHJcbiAgfSk7XHJcbiAgXHJcbiAgaGlkZGVuKEZ1bmN0aW9uUHJvdG8sIFJFRkVSRU5DRV9HRVQsIHJldHVyblRoaXMpO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIHNldE1hcE1ldGhvZHMoQ29uc3RydWN0b3Ipe1xyXG4gICAgaWYoQ29uc3RydWN0b3Ipe1xyXG4gICAgICB2YXIgTWFwUHJvdG8gPSBDb25zdHJ1Y3RvcltQUk9UT1RZUEVdO1xyXG4gICAgICBoaWRkZW4oTWFwUHJvdG8sIFJFRkVSRU5DRV9HRVQsIE1hcFByb3RvLmdldCk7XHJcbiAgICAgIGhpZGRlbihNYXBQcm90bywgUkVGRVJFTkNFX1NFVCwgTWFwUHJvdG8uc2V0KTtcclxuICAgICAgaGlkZGVuKE1hcFByb3RvLCBSRUZFUkVOQ0VfREVMRVRFLCBNYXBQcm90b1snZGVsZXRlJ10pO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRNYXBNZXRob2RzKE1hcCk7XHJcbiAgc2V0TWFwTWV0aG9kcyhXZWFrTWFwKTtcclxufSgncmVmZXJlbmNlJyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIE1vZHVsZSA6IGpzLmFycmF5LnN0YXRpY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIEphdmFTY3JpcHQgMS42IC8gU3RyYXdtYW4gYXJyYXkgc3RhdGljcyBzaGltXHJcbiFmdW5jdGlvbihhcnJheVN0YXRpY3Mpe1xyXG4gIGZ1bmN0aW9uIHNldEFycmF5U3RhdGljcyhrZXlzLCBsZW5ndGgpe1xyXG4gICAgZm9yRWFjaC5jYWxsKGFycmF5KGtleXMpLCBmdW5jdGlvbihrZXkpe1xyXG4gICAgICBpZihrZXkgaW4gQXJyYXlQcm90bylhcnJheVN0YXRpY3Nba2V5XSA9IGN0eChjYWxsLCBBcnJheVByb3RvW2tleV0sIGxlbmd0aCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgc2V0QXJyYXlTdGF0aWNzKCdwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzJywgMSk7XHJcbiAgc2V0QXJyYXlTdGF0aWNzKCdpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzJywgMyk7XHJcbiAgc2V0QXJyYXlTdGF0aWNzKCdqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YsJyArXHJcbiAgICAgICAgICAgICAgICAgICdyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsLHR1cm4nKTtcclxuICAkZGVmaW5lKFNUQVRJQywgQVJSQVksIGFycmF5U3RhdGljcyk7XHJcbn0oe30pO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBNb2R1bGUgOiB3ZWIuZG9tLml0YXJhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4hZnVuY3Rpb24oTm9kZUxpc3Qpe1xyXG4gIGlmKGZyYW1ld29yayAmJiBOb2RlTGlzdCAmJiAhKFNZTUJPTF9JVEVSQVRPUiBpbiBOb2RlTGlzdFtQUk9UT1RZUEVdKSl7XHJcbiAgICBoaWRkZW4oTm9kZUxpc3RbUFJPVE9UWVBFXSwgU1lNQk9MX0lURVJBVE9SLCBJdGVyYXRvcnNbQVJSQVldKTtcclxuICB9XHJcbiAgSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzW0FSUkFZXTtcclxufShnbG9iYWwuTm9kZUxpc3QpO1xufSh0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKSwgdHJ1ZSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgaXRlcmF0b3JTeW1ib2wgPVxuICAgIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgcmV0dXJuIG5ldyBHZW5lcmF0b3IoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiB8fCBudWxsLCB0cnlMb2NzTGlzdCB8fCBbXSk7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW5lcmF0b3IgPSB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KTtcbiAgICAgIHZhciBjYWxsTmV4dCA9IHN0ZXAuYmluZChnZW5lcmF0b3IubmV4dCk7XG4gICAgICB2YXIgY2FsbFRocm93ID0gc3RlcC5iaW5kKGdlbmVyYXRvcltcInRocm93XCJdKTtcblxuICAgICAgZnVuY3Rpb24gc3RlcChhcmcpIHtcbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHRoaXMsIG51bGwsIGFyZyk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgIHJlc29sdmUoaW5mby52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGluZm8udmFsdWUpLnRoZW4oY2FsbE5leHQsIGNhbGxUaHJvdyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbE5leHQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBHZW5lcmF0b3IoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgZ2VuZXJhdG9yID0gb3V0ZXJGbiA/IE9iamVjdC5jcmVhdGUob3V0ZXJGbi5wcm90b3R5cGUpIDogdGhpcztcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0KTtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3IsXG4gICAgICAgICAgICBhcmdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCAmJlxuICAgICAgICAgICAgICB0eXBlb2YgYXJnICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICBcImF0dGVtcHQgdG8gc2VuZCBcIiArIEpTT04uc3RyaW5naWZ5KGFyZykgKyBcIiB0byBuZXdib3JuIGdlbmVyYXRvclwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCkge1xuICAgICAgICAgICAgY29udGV4dC5zZW50ID0gYXJnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgY29udGV4dC5zZW50O1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcblxuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKHJlY29yZC5hcmcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGdlbmVyYXRvci5uZXh0ID0gaW52b2tlLmJpbmQoZ2VuZXJhdG9yLCBcIm5leHRcIik7XG4gICAgZ2VuZXJhdG9yW1widGhyb3dcIl0gPSBpbnZva2UuYmluZChnZW5lcmF0b3IsIFwidGhyb3dcIik7XG4gICAgZ2VuZXJhdG9yW1wicmV0dXJuXCJdID0gaW52b2tlLmJpbmQoZ2VuZXJhdG9yLCBcInJldHVyblwiKTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cblxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgdGhpcy5zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIC8vIFByZS1pbml0aWFsaXplIGF0IGxlYXN0IDIwIHRlbXBvcmFyeSB2YXJpYWJsZXMgdG8gZW5hYmxlIGhpZGRlblxuICAgICAgLy8gY2xhc3Mgb3B0aW1pemF0aW9ucyBmb3Igc2ltcGxlIGdlbmVyYXRvcnMuXG4gICAgICBmb3IgKHZhciB0ZW1wSW5kZXggPSAwLCB0ZW1wTmFtZTtcbiAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgdGVtcE5hbWUgPSBcInRcIiArIHRlbXBJbmRleCkgfHwgdGVtcEluZGV4IDwgMjA7XG4gICAgICAgICAgICsrdGVtcEluZGV4KSB7XG4gICAgICAgIHRoaXNbdGVtcE5hbWVdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDwgZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6IHRoaXNcbik7XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWlZV0psYkdsbWVTOXViMlJsWDIxdlpIVnNaWE12WW1GaVpXd3RZMjl5WlM5dWIyUmxYMjF2WkhWc1pYTXZjbVZuWlc1bGNtRjBiM0l0WW1GaVpXd3ZjblZ1ZEdsdFpTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVmtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cUtseHVJQ29nUTI5d2VYSnBaMmgwSUNoaktTQXlNREUwTENCR1lXTmxZbTl2YXl3Z1NXNWpMbHh1SUNvZ1FXeHNJSEpwWjJoMGN5QnlaWE5sY25abFpDNWNiaUFxWEc0Z0tpQlVhR2x6SUhOdmRYSmpaU0JqYjJSbElHbHpJR3hwWTJWdWMyVmtJSFZ1WkdWeUlIUm9aU0JDVTBRdGMzUjViR1VnYkdsalpXNXpaU0JtYjNWdVpDQnBiaUIwYUdWY2JpQXFJR2gwZEhCek9pOHZjbUYzTG1kcGRHaDFZaTVqYjIwdlptRmpaV0p2YjJzdmNtVm5aVzVsY21GMGIzSXZiV0Z6ZEdWeUwweEpRMFZPVTBVZ1ptbHNaUzRnUVc1Y2JpQXFJR0ZrWkdsMGFXOXVZV3dnWjNKaGJuUWdiMllnY0dGMFpXNTBJSEpwWjJoMGN5QmpZVzRnWW1VZ1ptOTFibVFnYVc0Z2RHaGxJRkJCVkVWT1ZGTWdabWxzWlNCcGJseHVJQ29nZEdobElITmhiV1VnWkdseVpXTjBiM0o1TGx4dUlDb3ZYRzVjYmlFb1puVnVZM1JwYjI0b1oyeHZZbUZzS1NCN1hHNGdJRndpZFhObElITjBjbWxqZEZ3aU8xeHVYRzRnSUhaaGNpQm9ZWE5QZDI0Z1BTQlBZbXBsWTNRdWNISnZkRzkwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1TzF4dUlDQjJZWElnZFc1a1pXWnBibVZrT3lBdkx5Qk5iM0psSUdOdmJYQnlaWE56YVdKc1pTQjBhR0Z1SUhadmFXUWdNQzVjYmlBZ2RtRnlJR2wwWlhKaGRHOXlVM2x0WW05c0lEMWNiaUFnSUNCMGVYQmxiMllnVTNsdFltOXNJRDA5UFNCY0ltWjFibU4wYVc5dVhDSWdKaVlnVTNsdFltOXNMbWwwWlhKaGRHOXlJSHg4SUZ3aVFFQnBkR1Z5WVhSdmNsd2lPMXh1WEc0Z0lIWmhjaUJwYmsxdlpIVnNaU0E5SUhSNWNHVnZaaUJ0YjJSMWJHVWdQVDA5SUZ3aWIySnFaV04wWENJN1hHNGdJSFpoY2lCeWRXNTBhVzFsSUQwZ1oyeHZZbUZzTG5KbFoyVnVaWEpoZEc5eVVuVnVkR2x0WlR0Y2JpQWdhV1lnS0hKMWJuUnBiV1VwSUh0Y2JpQWdJQ0JwWmlBb2FXNU5iMlIxYkdVcElIdGNiaUFnSUNBZ0lDOHZJRWxtSUhKbFoyVnVaWEpoZEc5eVVuVnVkR2x0WlNCcGN5QmtaV1pwYm1Wa0lHZHNiMkpoYkd4NUlHRnVaQ0IzWlNkeVpTQnBiaUJoSUcxdlpIVnNaU3hjYmlBZ0lDQWdJQzh2SUcxaGEyVWdkR2hsSUdWNGNHOXlkSE1nYjJKcVpXTjBJR2xrWlc1MGFXTmhiQ0IwYnlCeVpXZGxibVZ5WVhSdmNsSjFiblJwYldVdVhHNGdJQ0FnSUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKMWJuUnBiV1U3WEc0Z0lDQWdmVnh1SUNBZ0lDOHZJRVJ2YmlkMElHSnZkR2hsY2lCbGRtRnNkV0YwYVc1bklIUm9aU0J5WlhOMElHOW1JSFJvYVhNZ1ptbHNaU0JwWmlCMGFHVWdjblZ1ZEdsdFpTQjNZWE5jYmlBZ0lDQXZMeUJoYkhKbFlXUjVJR1JsWm1sdVpXUWdaMnh2WW1Gc2JIa3VYRzRnSUNBZ2NtVjBkWEp1TzF4dUlDQjlYRzVjYmlBZ0x5OGdSR1ZtYVc1bElIUm9aU0J5ZFc1MGFXMWxJR2RzYjJKaGJHeDVJQ2hoY3lCbGVIQmxZM1JsWkNCaWVTQm5aVzVsY21GMFpXUWdZMjlrWlNrZ1lYTWdaV2wwYUdWeVhHNGdJQzh2SUcxdlpIVnNaUzVsZUhCdmNuUnpJQ2hwWmlCM1pTZHlaU0JwYmlCaElHMXZaSFZzWlNrZ2IzSWdZU0J1Wlhjc0lHVnRjSFI1SUc5aWFtVmpkQzVjYmlBZ2NuVnVkR2x0WlNBOUlHZHNiMkpoYkM1eVpXZGxibVZ5WVhSdmNsSjFiblJwYldVZ1BTQnBiazF2WkhWc1pTQS9JRzF2WkhWc1pTNWxlSEJ2Y25SeklEb2dlMzA3WEc1Y2JpQWdablZ1WTNScGIyNGdkM0poY0NocGJtNWxja1p1TENCdmRYUmxja1p1TENCelpXeG1MQ0IwY25sTWIyTnpUR2x6ZENrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1IyVnVaWEpoZEc5eUtHbHVibVZ5Um00c0lHOTFkR1Z5Um00c0lITmxiR1lnZkh3Z2JuVnNiQ3dnZEhKNVRHOWpjMHhwYzNRZ2ZId2dXMTBwTzF4dUlDQjlYRzRnSUhKMWJuUnBiV1V1ZDNKaGNDQTlJSGR5WVhBN1hHNWNiaUFnTHk4Z1ZISjVMMk5oZEdOb0lHaGxiSEJsY2lCMGJ5QnRhVzVwYldsNlpTQmtaVzl3ZEdsdGFYcGhkR2x2Ym5NdUlGSmxkSFZ5Ym5NZ1lTQmpiMjF3YkdWMGFXOXVYRzRnSUM4dklISmxZMjl5WkNCc2FXdGxJR052Ym5SbGVIUXVkSEo1Ulc1MGNtbGxjMXRwWFM1amIyMXdiR1YwYVc5dUxpQlVhR2x6SUdsdWRHVnlabUZqWlNCamIzVnNaRnh1SUNBdkx5Qm9ZWFpsSUdKbFpXNGdLR0Z1WkNCM1lYTWdjSEpsZG1sdmRYTnNlU2tnWkdWemFXZHVaV1FnZEc4Z2RHRnJaU0JoSUdOc2IzTjFjbVVnZEc4Z1ltVmNiaUFnTHk4Z2FXNTJiMnRsWkNCM2FYUm9iM1YwSUdGeVozVnRaVzUwY3l3Z1luVjBJR2x1SUdGc2JDQjBhR1VnWTJGelpYTWdkMlVnWTJGeVpTQmhZbTkxZENCM1pWeHVJQ0F2THlCaGJISmxZV1I1SUdoaGRtVWdZVzRnWlhocGMzUnBibWNnYldWMGFHOWtJSGRsSUhkaGJuUWdkRzhnWTJGc2JDd2djMjhnZEdobGNtVW5jeUJ1YnlCdVpXVmtYRzRnSUM4dklIUnZJR055WldGMFpTQmhJRzVsZHlCbWRXNWpkR2x2YmlCdlltcGxZM1F1SUZkbElHTmhiaUJsZG1WdUlHZGxkQ0JoZDJGNUlIZHBkR2dnWVhOemRXMXBibWRjYmlBZ0x5OGdkR2hsSUcxbGRHaHZaQ0IwWVd0bGN5QmxlR0ZqZEd4NUlHOXVaU0JoY21kMWJXVnVkQ3dnYzJsdVkyVWdkR2hoZENCb1lYQndaVzV6SUhSdklHSmxJSFJ5ZFdWY2JpQWdMeThnYVc0Z1pYWmxjbmtnWTJGelpTd2djMjhnZDJVZ1pHOXVKM1FnYUdGMlpTQjBieUIwYjNWamFDQjBhR1VnWVhKbmRXMWxiblJ6SUc5aWFtVmpkQzRnVkdobFhHNGdJQzh2SUc5dWJIa2dZV1JrYVhScGIyNWhiQ0JoYkd4dlkyRjBhVzl1SUhKbGNYVnBjbVZrSUdseklIUm9aU0JqYjIxd2JHVjBhVzl1SUhKbFkyOXlaQ3dnZDJocFkyaGNiaUFnTHk4Z2FHRnpJR0VnYzNSaFlteGxJSE5vWVhCbElHRnVaQ0J6YnlCb2IzQmxablZzYkhrZ2MyaHZkV3hrSUdKbElHTm9aV0Z3SUhSdklHRnNiRzlqWVhSbExseHVJQ0JtZFc1amRHbHZiaUIwY25sRFlYUmphQ2htYml3Z2IySnFMQ0JoY21jcElIdGNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIc2dkSGx3WlRvZ1hDSnViM0p0WVd4Y0lpd2dZWEpuT2lCbWJpNWpZV3hzS0c5aWFpd2dZWEpuS1NCOU8xeHVJQ0FnSUgwZ1kyRjBZMmdnS0dWeWNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIc2dkSGx3WlRvZ1hDSjBhSEp2ZDF3aUxDQmhjbWM2SUdWeWNpQjlPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSFpoY2lCSFpXNVRkR0YwWlZOMWMzQmxibVJsWkZOMFlYSjBJRDBnWENKemRYTndaVzVrWldSVGRHRnlkRndpTzF4dUlDQjJZWElnUjJWdVUzUmhkR1ZUZFhOd1pXNWtaV1JaYVdWc1pDQTlJRndpYzNWemNHVnVaR1ZrV1dsbGJHUmNJanRjYmlBZ2RtRnlJRWRsYmxOMFlYUmxSWGhsWTNWMGFXNW5JRDBnWENKbGVHVmpkWFJwYm1kY0lqdGNiaUFnZG1GeUlFZGxibE4wWVhSbFEyOXRjR3hsZEdWa0lEMGdYQ0pqYjIxd2JHVjBaV1JjSWp0Y2JseHVJQ0F2THlCU1pYUjFjbTVwYm1jZ2RHaHBjeUJ2WW1wbFkzUWdabkp2YlNCMGFHVWdhVzV1WlhKR2JpQm9ZWE1nZEdobElITmhiV1VnWldabVpXTjBJR0Z6WEc0Z0lDOHZJR0p5WldGcmFXNW5JRzkxZENCdlppQjBhR1VnWkdsemNHRjBZMmdnYzNkcGRHTm9JSE4wWVhSbGJXVnVkQzVjYmlBZ2RtRnlJRU52Ym5ScGJuVmxVMlZ1ZEdsdVpXd2dQU0I3ZlR0Y2JseHVJQ0F2THlCRWRXMXRlU0JqYjI1emRISjFZM1J2Y2lCbWRXNWpkR2x2Ym5NZ2RHaGhkQ0IzWlNCMWMyVWdZWE1nZEdobElDNWpiMjV6ZEhKMVkzUnZjaUJoYm1SY2JpQWdMeThnTG1OdmJuTjBjblZqZEc5eUxuQnliM1J2ZEhsd1pTQndjbTl3WlhKMGFXVnpJR1p2Y2lCbWRXNWpkR2x2Ym5NZ2RHaGhkQ0J5WlhSMWNtNGdSMlZ1WlhKaGRHOXlYRzRnSUM4dklHOWlhbVZqZEhNdUlFWnZjaUJtZFd4c0lITndaV01nWTI5dGNHeHBZVzVqWlN3Z2VXOTFJRzFoZVNCM2FYTm9JSFJ2SUdOdmJtWnBaM1Z5WlNCNWIzVnlYRzRnSUM4dklHMXBibWxtYVdWeUlHNXZkQ0IwYnlCdFlXNW5iR1VnZEdobElHNWhiV1Z6SUc5bUlIUm9aWE5sSUhSM2J5Qm1kVzVqZEdsdmJuTXVYRzRnSUdaMWJtTjBhVzl1SUVkbGJtVnlZWFJ2Y2taMWJtTjBhVzl1S0NrZ2UzMWNiaUFnWm5WdVkzUnBiMjRnUjJWdVpYSmhkRzl5Um5WdVkzUnBiMjVRY205MGIzUjVjR1VvS1NCN2ZWeHVYRzRnSUhaaGNpQkhjQ0E5SUVkbGJtVnlZWFJ2Y2taMWJtTjBhVzl1VUhKdmRHOTBlWEJsTG5CeWIzUnZkSGx3WlNBOUlFZGxibVZ5WVhSdmNpNXdjbTkwYjNSNWNHVTdYRzRnSUVkbGJtVnlZWFJ2Y2taMWJtTjBhVzl1TG5CeWIzUnZkSGx3WlNBOUlFZHdMbU52Ym5OMGNuVmpkRzl5SUQwZ1IyVnVaWEpoZEc5eVJuVnVZM1JwYjI1UWNtOTBiM1I1Y0dVN1hHNGdJRWRsYm1WeVlYUnZja1oxYm1OMGFXOXVVSEp2ZEc5MGVYQmxMbU52Ym5OMGNuVmpkRzl5SUQwZ1IyVnVaWEpoZEc5eVJuVnVZM1JwYjI0N1hHNGdJRWRsYm1WeVlYUnZja1oxYm1OMGFXOXVMbVJwYzNCc1lYbE9ZVzFsSUQwZ1hDSkhaVzVsY21GMGIzSkdkVzVqZEdsdmJsd2lPMXh1WEc0Z0lISjFiblJwYldVdWFYTkhaVzVsY21GMGIzSkdkVzVqZEdsdmJpQTlJR1oxYm1OMGFXOXVLR2RsYmtaMWJpa2dlMXh1SUNBZ0lIWmhjaUJqZEc5eUlEMGdkSGx3Wlc5bUlHZGxia1oxYmlBOVBUMGdYQ0ptZFc1amRHbHZibHdpSUNZbUlHZGxia1oxYmk1amIyNXpkSEoxWTNSdmNqdGNiaUFnSUNCeVpYUjFjbTRnWTNSdmNseHVJQ0FnSUNBZ1B5QmpkRzl5SUQwOVBTQkhaVzVsY21GMGIzSkdkVzVqZEdsdmJpQjhmRnh1SUNBZ0lDQWdJQ0F2THlCR2IzSWdkR2hsSUc1aGRHbDJaU0JIWlc1bGNtRjBiM0pHZFc1amRHbHZiaUJqYjI1emRISjFZM1J2Y2l3Z2RHaGxJR0psYzNRZ2QyVWdZMkZ1WEc0Z0lDQWdJQ0FnSUM4dklHUnZJR2x6SUhSdklHTm9aV05ySUdsMGN5QXVibUZ0WlNCd2NtOXdaWEowZVM1Y2JpQWdJQ0FnSUNBZ0tHTjBiM0l1WkdsemNHeGhlVTVoYldVZ2ZId2dZM1J2Y2k1dVlXMWxLU0E5UFQwZ1hDSkhaVzVsY21GMGIzSkdkVzVqZEdsdmJsd2lYRzRnSUNBZ0lDQTZJR1poYkhObE8xeHVJQ0I5TzF4dVhHNGdJSEoxYm5ScGJXVXViV0Z5YXlBOUlHWjFibU4wYVc5dUtHZGxia1oxYmlrZ2UxeHVJQ0FnSUdkbGJrWjFiaTVmWDNCeWIzUnZYMThnUFNCSFpXNWxjbUYwYjNKR2RXNWpkR2x2YmxCeWIzUnZkSGx3WlR0Y2JpQWdJQ0JuWlc1R2RXNHVjSEp2ZEc5MGVYQmxJRDBnVDJKcVpXTjBMbU55WldGMFpTaEhjQ2s3WEc0Z0lDQWdjbVYwZFhKdUlHZGxia1oxYmp0Y2JpQWdmVHRjYmx4dUlDQnlkVzUwYVcxbExtRnplVzVqSUQwZ1puVnVZM1JwYjI0b2FXNXVaWEpHYml3Z2IzVjBaWEpHYml3Z2MyVnNaaXdnZEhKNVRHOWpjMHhwYzNRcElIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb1puVnVZM1JwYjI0b2NtVnpiMngyWlN3Z2NtVnFaV04wS1NCN1hHNGdJQ0FnSUNCMllYSWdaMlZ1WlhKaGRHOXlJRDBnZDNKaGNDaHBibTVsY2tadUxDQnZkWFJsY2tadUxDQnpaV3htTENCMGNubE1iMk56VEdsemRDazdYRzRnSUNBZ0lDQjJZWElnWTJGc2JFNWxlSFFnUFNCemRHVndMbUpwYm1Rb1oyVnVaWEpoZEc5eUxtNWxlSFFwTzF4dUlDQWdJQ0FnZG1GeUlHTmhiR3hVYUhKdmR5QTlJSE4wWlhBdVltbHVaQ2huWlc1bGNtRjBiM0piWENKMGFISnZkMXdpWFNrN1hHNWNiaUFnSUNBZ0lHWjFibU4wYVc5dUlITjBaWEFvWVhKbktTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCeVpXTnZjbVFnUFNCMGNubERZWFJqYUNoMGFHbHpMQ0J1ZFd4c0xDQmhjbWNwTzF4dUlDQWdJQ0FnSUNCcFppQW9jbVZqYjNKa0xuUjVjR1VnUFQwOUlGd2lkR2h5YjNkY0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGFtVmpkQ2h5WldOdmNtUXVZWEpuS1R0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IyWVhJZ2FXNW1ieUE5SUhKbFkyOXlaQzVoY21jN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hwYm1adkxtUnZibVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtHbHVabTh1ZG1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUZCeWIyMXBjMlV1Y21WemIyeDJaU2hwYm1adkxuWmhiSFZsS1M1MGFHVnVLR05oYkd4T1pYaDBMQ0JqWVd4c1ZHaHliM2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHTmhiR3hPWlhoMEtDazdYRzRnSUNBZ2ZTazdYRzRnSUgwN1hHNWNiaUFnWm5WdVkzUnBiMjRnUjJWdVpYSmhkRzl5S0dsdWJtVnlSbTRzSUc5MWRHVnlSbTRzSUhObGJHWXNJSFJ5ZVV4dlkzTk1hWE4wS1NCN1hHNGdJQ0FnZG1GeUlHZGxibVZ5WVhSdmNpQTlJRzkxZEdWeVJtNGdQeUJQWW1wbFkzUXVZM0psWVhSbEtHOTFkR1Z5Um00dWNISnZkRzkwZVhCbEtTQTZJSFJvYVhNN1hHNGdJQ0FnZG1GeUlHTnZiblJsZUhRZ1BTQnVaWGNnUTI5dWRHVjRkQ2gwY25sTWIyTnpUR2x6ZENrN1hHNGdJQ0FnZG1GeUlITjBZWFJsSUQwZ1IyVnVVM1JoZEdWVGRYTndaVzVrWldSVGRHRnlkRHRjYmx4dUlDQWdJR1oxYm1OMGFXOXVJR2x1ZG05clpTaHRaWFJvYjJRc0lHRnlaeWtnZTF4dUlDQWdJQ0FnYVdZZ0tITjBZWFJsSUQwOVBTQkhaVzVUZEdGMFpVVjRaV04xZEdsdVp5a2dlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9YQ0pIWlc1bGNtRjBiM0lnYVhNZ1lXeHlaV0ZrZVNCeWRXNXVhVzVuWENJcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvYzNSaGRHVWdQVDA5SUVkbGJsTjBZWFJsUTI5dGNHeGxkR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRUpsSUdadmNtZHBkbWx1Wnl3Z2NHVnlJREkxTGpNdU15NHpMak1nYjJZZ2RHaGxJSE53WldNNlhHNGdJQ0FnSUNBZ0lDOHZJR2gwZEhCek9pOHZjR1Z2Y0d4bExtMXZlbWxzYkdFdWIzSm5MMzVxYjNKbGJtUnZjbVptTDJWek5pMWtjbUZtZEM1b2RHMXNJM05sWXkxblpXNWxjbUYwYjNKeVpYTjFiV1ZjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1J2Ym1WU1pYTjFiSFFvS1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2QyaHBiR1VnS0hSeWRXVXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHUmxiR1ZuWVhSbElEMGdZMjl1ZEdWNGRDNWtaV3hsWjJGMFpUdGNiaUFnSUNBZ0lDQWdhV1lnS0dSbGJHVm5ZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhKbFkyOXlaQ0E5SUhSeWVVTmhkR05vS0Z4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZzWldkaGRHVXVhWFJsY21GMGIzSmJiV1YwYUc5a1hTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbGJHVm5ZWFJsTG1sMFpYSmhkRzl5TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZWEpuWEc0Z0lDQWdJQ0FnSUNBZ0tUdGNibHh1SUNBZ0lDQWdJQ0FnSUdsbUlDaHlaV052Y21RdWRIbHdaU0E5UFQwZ1hDSjBhSEp2ZDF3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNTBaWGgwTG1SbGJHVm5ZWFJsSUQwZ2JuVnNiRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVEdsclpTQnlaWFIxY201cGJtY2daMlZ1WlhKaGRHOXlMblJvY205M0tIVnVZMkYxWjJoMEtTd2dZblYwSUhkcGRHaHZkWFFnZEdobFhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCdmRtVnlhR1ZoWkNCdlppQmhiaUJsZUhSeVlTQm1kVzVqZEdsdmJpQmpZV3hzTGx4dUlDQWdJQ0FnSUNBZ0lDQWdiV1YwYUc5a0lEMGdYQ0owYUhKdmQxd2lPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lYSm5JRDBnY21WamIzSmtMbUZ5Wnp0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWRHbHVkV1U3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1JHVnNaV2RoZEdVZ1oyVnVaWEpoZEc5eUlISmhiaUJoYm1RZ2FHRnVaR3hsWkNCcGRITWdiM2R1SUdWNFkyVndkR2x2Ym5NZ2MyOWNiaUFnSUNBZ0lDQWdJQ0F2THlCeVpXZGhjbVJzWlhOeklHOW1JSGRvWVhRZ2RHaGxJRzFsZEdodlpDQjNZWE1zSUhkbElHTnZiblJwYm5WbElHRnpJR2xtSUdsMElHbHpYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1hDSnVaWGgwWENJZ2QybDBhQ0JoYmlCMWJtUmxabWx1WldRZ1lYSm5MbHh1SUNBZ0lDQWdJQ0FnSUcxbGRHaHZaQ0E5SUZ3aWJtVjRkRndpTzF4dUlDQWdJQ0FnSUNBZ0lHRnlaeUE5SUhWdVpHVm1hVzVsWkR0Y2JseHVJQ0FnSUNBZ0lDQWdJSFpoY2lCcGJtWnZJRDBnY21WamIzSmtMbUZ5Wnp0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYVc1bWJ5NWtiMjVsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1MFpYaDBXMlJsYkdWbllYUmxMbkpsYzNWc2RFNWhiV1ZkSUQwZ2FXNW1ieTUyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuUmxlSFF1Ym1WNGRDQTlJR1JsYkdWbllYUmxMbTVsZUhSTWIyTTdYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBZWFJsSUQwZ1IyVnVVM1JoZEdWVGRYTndaVzVrWldSWmFXVnNaRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCcGJtWnZPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJR052Ym5SbGVIUXVaR1ZzWldkaGRHVWdQU0J1ZFd4c08xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHMWxkR2h2WkNBOVBUMGdYQ0p1WlhoMFhDSXBJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9jM1JoZEdVZ1BUMDlJRWRsYmxOMFlYUmxVM1Z6Y0dWdVpHVmtVM1JoY25RZ0ppWmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2RIbHdaVzltSUdGeVp5QWhQVDBnWENKMWJtUmxabWx1WldSY0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdhSFIwY0hNNkx5OXdaVzl3YkdVdWJXOTZhV3hzWVM1dmNtY3ZmbXB2Y21WdVpHOXlabVl2WlhNMkxXUnlZV1owTG1oMGJXd2pjMlZqTFdkbGJtVnlZWFJ2Y25KbGMzVnRaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpaGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1hDSmhkSFJsYlhCMElIUnZJSE5sYm1RZ1hDSWdLeUJLVTA5T0xuTjBjbWx1WjJsbWVTaGhjbWNwSUNzZ1hDSWdkRzhnYm1WM1ltOXliaUJuWlc1bGNtRjBiM0pjSWx4dUlDQWdJQ0FnSUNBZ0lDQWdLVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2MzUmhkR1VnUFQwOUlFZGxibE4wWVhSbFUzVnpjR1Z1WkdWa1dXbGxiR1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5SbGVIUXVjMlZ1ZENBOUlHRnlaenRjYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZzWlhSbElHTnZiblJsZUhRdWMyVnVkRHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2h0WlhSb2IyUWdQVDA5SUZ3aWRHaHliM2RjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoemRHRjBaU0E5UFQwZ1IyVnVVM1JoZEdWVGRYTndaVzVrWldSVGRHRnlkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjM1JoZEdVZ1BTQkhaVzVUZEdGMFpVTnZiWEJzWlhSbFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJR0Z5Wnp0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNCcFppQW9ZMjl1ZEdWNGRDNWthWE53WVhSamFFVjRZMlZ3ZEdsdmJpaGhjbWNwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjBhR1VnWkdsemNHRjBZMmhsWkNCbGVHTmxjSFJwYjI0Z2QyRnpJR05oZFdkb2RDQmllU0JoSUdOaGRHTm9JR0pzYjJOckxGeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2RHaGxiaUJzWlhRZ2RHaGhkQ0JqWVhSamFDQmliRzlqYXlCb1lXNWtiR1VnZEdobElHVjRZMlZ3ZEdsdmJpQnViM0p0WVd4c2VTNWNiaUFnSUNBZ0lDQWdJQ0FnSUcxbGRHaHZaQ0E5SUZ3aWJtVjRkRndpTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZWEpuSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHMWxkR2h2WkNBOVBUMGdYQ0p5WlhSMWNtNWNJaWtnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZiblJsZUhRdVlXSnlkWEIwS0Z3aWNtVjBkWEp1WENJc0lHRnlaeWs3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnpkR0YwWlNBOUlFZGxibE4wWVhSbFJYaGxZM1YwYVc1bk8xeHVYRzRnSUNBZ0lDQWdJSFpoY2lCeVpXTnZjbVFnUFNCMGNubERZWFJqYUNocGJtNWxja1p1TENCelpXeG1MQ0JqYjI1MFpYaDBLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tISmxZMjl5WkM1MGVYQmxJRDA5UFNCY0ltNXZjbTFoYkZ3aUtTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdZVzRnWlhoalpYQjBhVzl1SUdseklIUm9jbTkzYmlCbWNtOXRJR2x1Ym1WeVJtNHNJSGRsSUd4bFlYWmxJSE4wWVhSbElEMDlQVnh1SUNBZ0lDQWdJQ0FnSUM4dklFZGxibE4wWVhSbFJYaGxZM1YwYVc1bklHRnVaQ0JzYjI5d0lHSmhZMnNnWm05eUlHRnViM1JvWlhJZ2FXNTJiMk5oZEdsdmJpNWNiaUFnSUNBZ0lDQWdJQ0J6ZEdGMFpTQTlJR052Ym5SbGVIUXVaRzl1WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdQeUJIWlc1VGRHRjBaVU52YlhCc1pYUmxaRnh1SUNBZ0lDQWdJQ0FnSUNBZ09pQkhaVzVUZEdGMFpWTjFjM0JsYm1SbFpGbHBaV3hrTzF4dVhHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdsdVptOGdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlRvZ2NtVmpiM0prTG1GeVp5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdSdmJtVTZJR052Ym5SbGVIUXVaRzl1WlZ4dUlDQWdJQ0FnSUNBZ0lIMDdYRzVjYmlBZ0lDQWdJQ0FnSUNCcFppQW9jbVZqYjNKa0xtRnlaeUE5UFQwZ1EyOXVkR2x1ZFdWVFpXNTBhVzVsYkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTnZiblJsZUhRdVpHVnNaV2RoZEdVZ0ppWWdiV1YwYUc5a0lEMDlQU0JjSW01bGVIUmNJaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCRVpXeHBZbVZ5WVhSbGJIa2dabTl5WjJWMElIUm9aU0JzWVhOMElITmxiblFnZG1Gc2RXVWdjMjhnZEdoaGRDQjNaU0JrYjI0bmRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QmhZMk5wWkdWdWRHRnNiSGtnY0dGemN5QnBkQ0J2YmlCMGJ5QjBhR1VnWkdWc1pXZGhkR1V1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR0Z5WnlBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR2x1Wm04N1hHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2NtVmpiM0prTG5SNWNHVWdQVDA5SUZ3aWRHaHliM2RjSWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJSE4wWVhSbElEMGdSMlZ1VTNSaGRHVkRiMjF3YkdWMFpXUTdYRzVjYmlBZ0lDQWdJQ0FnSUNCcFppQW9iV1YwYUc5a0lEMDlQU0JjSW01bGVIUmNJaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1ZEdWNGRDNWthWE53WVhSamFFVjRZMlZ3ZEdsdmJpaHlaV052Y21RdVlYSm5LVHRjYmlBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZWEpuSUQwZ2NtVmpiM0prTG1GeVp6dGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlc1bGNtRjBiM0l1Ym1WNGRDQTlJR2x1ZG05clpTNWlhVzVrS0dkbGJtVnlZWFJ2Y2l3Z1hDSnVaWGgwWENJcE8xeHVJQ0FnSUdkbGJtVnlZWFJ2Y2x0Y0luUm9jbTkzWENKZElEMGdhVzUyYjJ0bExtSnBibVFvWjJWdVpYSmhkRzl5TENCY0luUm9jbTkzWENJcE8xeHVJQ0FnSUdkbGJtVnlZWFJ2Y2x0Y0luSmxkSFZ5Ymx3aVhTQTlJR2x1ZG05clpTNWlhVzVrS0dkbGJtVnlZWFJ2Y2l3Z1hDSnlaWFIxY201Y0lpazdYRzVjYmlBZ0lDQnlaWFIxY200Z1oyVnVaWEpoZEc5eU8xeHVJQ0I5WEc1Y2JpQWdSM0JiYVhSbGNtRjBiM0pUZVcxaWIyeGRJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDA3WEc1Y2JpQWdSM0F1ZEc5VGRISnBibWNnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCeVpYUjFjbTRnWENKYmIySnFaV04wSUVkbGJtVnlZWFJ2Y2wxY0lqdGNiaUFnZlR0Y2JseHVJQ0JtZFc1amRHbHZiaUJ3ZFhOb1ZISjVSVzUwY25rb2JHOWpjeWtnZTF4dUlDQWdJSFpoY2lCbGJuUnllU0E5SUhzZ2RISjVURzlqT2lCc2IyTnpXekJkSUgwN1hHNWNiaUFnSUNCcFppQW9NU0JwYmlCc2IyTnpLU0I3WEc0Z0lDQWdJQ0JsYm5SeWVTNWpZWFJqYUV4dll5QTlJR3h2WTNOYk1WMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLRElnYVc0Z2JHOWpjeWtnZTF4dUlDQWdJQ0FnWlc1MGNua3VabWx1WVd4c2VVeHZZeUE5SUd4dlkzTmJNbDA3WEc0Z0lDQWdJQ0JsYm5SeWVTNWhablJsY2t4dll5QTlJR3h2WTNOYk0xMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHaHBjeTUwY25sRmJuUnlhV1Z6TG5CMWMyZ29aVzUwY25rcE8xeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdjbVZ6WlhSVWNubEZiblJ5ZVNobGJuUnllU2tnZTF4dUlDQWdJSFpoY2lCeVpXTnZjbVFnUFNCbGJuUnllUzVqYjIxd2JHVjBhVzl1SUh4OElIdDlPMXh1SUNBZ0lISmxZMjl5WkM1MGVYQmxJRDBnWENKdWIzSnRZV3hjSWp0Y2JpQWdJQ0JrWld4bGRHVWdjbVZqYjNKa0xtRnlaenRjYmlBZ0lDQmxiblJ5ZVM1amIyMXdiR1YwYVc5dUlEMGdjbVZqYjNKa08xeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdRMjl1ZEdWNGRDaDBjbmxNYjJOelRHbHpkQ2tnZTF4dUlDQWdJQzh2SUZSb1pTQnliMjkwSUdWdWRISjVJRzlpYW1WamRDQW9aV1ptWldOMGFYWmxiSGtnWVNCMGNua2djM1JoZEdWdFpXNTBJSGRwZEdodmRYUWdZU0JqWVhSamFGeHVJQ0FnSUM4dklHOXlJR0VnWm1sdVlXeHNlU0JpYkc5amF5a2daMmwyWlhNZ2RYTWdZU0J3YkdGalpTQjBieUJ6ZEc5eVpTQjJZV3gxWlhNZ2RHaHliM2R1SUdaeWIyMWNiaUFnSUNBdkx5QnNiMk5oZEdsdmJuTWdkMmhsY21VZ2RHaGxjbVVnYVhNZ2JtOGdaVzVqYkc5emFXNW5JSFJ5ZVNCemRHRjBaVzFsYm5RdVhHNGdJQ0FnZEdocGN5NTBjbmxGYm5SeWFXVnpJRDBnVzNzZ2RISjVURzlqT2lCY0luSnZiM1JjSWlCOVhUdGNiaUFnSUNCMGNubE1iMk56VEdsemRDNW1iM0pGWVdOb0tIQjFjMmhVY25sRmJuUnllU3dnZEdocGN5azdYRzRnSUNBZ2RHaHBjeTV5WlhObGRDZ3BPMXh1SUNCOVhHNWNiaUFnY25WdWRHbHRaUzVyWlhseklEMGdablZ1WTNScGIyNG9iMkpxWldOMEtTQjdYRzRnSUNBZ2RtRnlJR3RsZVhNZ1BTQmJYVHRjYmlBZ0lDQm1iM0lnS0haaGNpQnJaWGtnYVc0Z2IySnFaV04wS1NCN1hHNGdJQ0FnSUNCclpYbHpMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQjlYRzRnSUNBZ2EyVjVjeTV5WlhabGNuTmxLQ2s3WEc1Y2JpQWdJQ0F2THlCU1lYUm9aWElnZEdoaGJpQnlaWFIxY201cGJtY2dZVzRnYjJKcVpXTjBJSGRwZEdnZ1lTQnVaWGgwSUcxbGRHaHZaQ3dnZDJVZ2EyVmxjRnh1SUNBZ0lDOHZJSFJvYVc1bmN5QnphVzF3YkdVZ1lXNWtJSEpsZEhWeWJpQjBhR1VnYm1WNGRDQm1kVzVqZEdsdmJpQnBkSE5sYkdZdVhHNGdJQ0FnY21WMGRYSnVJR1oxYm1OMGFXOXVJRzVsZUhRb0tTQjdYRzRnSUNBZ0lDQjNhR2xzWlNBb2EyVjVjeTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHdGxlU0E5SUd0bGVYTXVjRzl3S0NrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hyWlhrZ2FXNGdiMkpxWldOMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnYm1WNGRDNTJZV3gxWlNBOUlHdGxlVHRjYmlBZ0lDQWdJQ0FnSUNCdVpYaDBMbVJ2Ym1VZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtVjRkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdkx5QlVieUJoZG05cFpDQmpjbVZoZEdsdVp5QmhiaUJoWkdScGRHbHZibUZzSUc5aWFtVmpkQ3dnZDJVZ2FuVnpkQ0JvWVc1bklIUm9aU0F1ZG1Gc2RXVmNiaUFnSUNBZ0lDOHZJR0Z1WkNBdVpHOXVaU0J3Y205d1pYSjBhV1Z6SUc5bVppQjBhR1VnYm1WNGRDQm1kVzVqZEdsdmJpQnZZbXBsWTNRZ2FYUnpaV3htTGlCVWFHbHpYRzRnSUNBZ0lDQXZMeUJoYkhOdklHVnVjM1Z5WlhNZ2RHaGhkQ0IwYUdVZ2JXbHVhV1pwWlhJZ2QybHNiQ0J1YjNRZ1lXNXZibmx0YVhwbElIUm9aU0JtZFc1amRHbHZiaTVjYmlBZ0lDQWdJRzVsZUhRdVpHOXVaU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQnlaWFIxY200Z2JtVjRkRHRjYmlBZ0lDQjlPMXh1SUNCOU8xeHVYRzRnSUdaMWJtTjBhVzl1SUhaaGJIVmxjeWhwZEdWeVlXSnNaU2tnZTF4dUlDQWdJR2xtSUNocGRHVnlZV0pzWlNrZ2UxeHVJQ0FnSUNBZ2RtRnlJR2wwWlhKaGRHOXlUV1YwYUc5a0lEMGdhWFJsY21GaWJHVmJhWFJsY21GMGIzSlRlVzFpYjJ4ZE8xeHVJQ0FnSUNBZ2FXWWdLR2wwWlhKaGRHOXlUV1YwYUc5a0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnBkR1Z5WVhSdmNrMWxkR2h2WkM1allXeHNLR2wwWlhKaFlteGxLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCcGRHVnlZV0pzWlM1dVpYaDBJRDA5UFNCY0ltWjFibU4wYVc5dVhDSXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR2wwWlhKaFlteGxPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JwWmlBb0lXbHpUbUZPS0dsMFpYSmhZbXhsTG14bGJtZDBhQ2twSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR2tnUFNBdE1Td2dibVY0ZENBOUlHWjFibU4wYVc5dUlHNWxlSFFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkMmhwYkdVZ0tDc3JhU0E4SUdsMFpYSmhZbXhsTG14bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0doaGMwOTNiaTVqWVd4c0tHbDBaWEpoWW14bExDQnBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhoMExuWmhiSFZsSUQwZ2FYUmxjbUZpYkdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxlSFF1Wkc5dVpTQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WNGREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNCdVpYaDBMblpoYkhWbElEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lDQWdJQ0FnSUc1bGVIUXVaRzl1WlNBOUlIUnlkV1U3WEc1Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtVjRkRHRjYmlBZ0lDQWdJQ0FnZlR0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtVjRkQzV1WlhoMElEMGdibVY0ZER0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCU1pYUjFjbTRnWVc0Z2FYUmxjbUYwYjNJZ2QybDBhQ0J1YnlCMllXeDFaWE11WEc0Z0lDQWdjbVYwZFhKdUlIc2dibVY0ZERvZ1pHOXVaVkpsYzNWc2RDQjlPMXh1SUNCOVhHNGdJSEoxYm5ScGJXVXVkbUZzZFdWeklEMGdkbUZzZFdWek8xeHVYRzRnSUdaMWJtTjBhVzl1SUdSdmJtVlNaWE4xYkhRb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhzZ2RtRnNkV1U2SUhWdVpHVm1hVzVsWkN3Z1pHOXVaVG9nZEhKMVpTQjlPMXh1SUNCOVhHNWNiaUFnUTI5dWRHVjRkQzV3Y205MGIzUjVjR1VnUFNCN1hHNGdJQ0FnWTI5dWMzUnlkV04wYjNJNklFTnZiblJsZUhRc1hHNWNiaUFnSUNCeVpYTmxkRG9nWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbkJ5WlhZZ1BTQXdPMXh1SUNBZ0lDQWdkR2hwY3k1dVpYaDBJRDBnTUR0Y2JpQWdJQ0FnSUhSb2FYTXVjMlZ1ZENBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lIUm9hWE11Wkc5dVpTQTlJR1poYkhObE8xeHVJQ0FnSUNBZ2RHaHBjeTVrWld4bFoyRjBaU0E5SUc1MWJHdzdYRzVjYmlBZ0lDQWdJSFJvYVhNdWRISjVSVzUwY21sbGN5NW1iM0pGWVdOb0tISmxjMlYwVkhKNVJXNTBjbmtwTzF4dVhHNGdJQ0FnSUNBdkx5QlFjbVV0YVc1cGRHbGhiR2w2WlNCaGRDQnNaV0Z6ZENBeU1DQjBaVzF3YjNKaGNua2dkbUZ5YVdGaWJHVnpJSFJ2SUdWdVlXSnNaU0JvYVdSa1pXNWNiaUFnSUNBZ0lDOHZJR05zWVhOeklHOXdkR2x0YVhwaGRHbHZibk1nWm05eUlITnBiWEJzWlNCblpXNWxjbUYwYjNKekxseHVJQ0FnSUNBZ1ptOXlJQ2gyWVhJZ2RHVnRjRWx1WkdWNElEMGdNQ3dnZEdWdGNFNWhiV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lHaGhjMDkzYmk1allXeHNLSFJvYVhNc0lIUmxiWEJPWVcxbElEMGdYQ0owWENJZ0t5QjBaVzF3U1c1a1pYZ3BJSHg4SUhSbGJYQkpibVJsZUNBOElESXdPMXh1SUNBZ0lDQWdJQ0FnSUNBckszUmxiWEJKYm1SbGVDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdselczUmxiWEJPWVcxbFhTQTlJRzUxYkd3N1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhOMGIzQTZJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NWtiMjVsSUQwZ2RISjFaVHRjYmx4dUlDQWdJQ0FnZG1GeUlISnZiM1JGYm5SeWVTQTlJSFJvYVhNdWRISjVSVzUwY21sbGMxc3dYVHRjYmlBZ0lDQWdJSFpoY2lCeWIyOTBVbVZqYjNKa0lEMGdjbTl2ZEVWdWRISjVMbU52YlhCc1pYUnBiMjQ3WEc0Z0lDQWdJQ0JwWmlBb2NtOXZkRkpsWTI5eVpDNTBlWEJsSUQwOVBTQmNJblJvY205M1hDSXBJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2djbTl2ZEZKbFkyOXlaQzVoY21jN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbkoyWVd3N1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdScGMzQmhkR05vUlhoalpYQjBhVzl1T2lCbWRXNWpkR2x2YmlobGVHTmxjSFJwYjI0cElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtUnZibVVwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnWlhoalpYQjBhVzl1TzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMllYSWdZMjl1ZEdWNGRDQTlJSFJvYVhNN1hHNGdJQ0FnSUNCbWRXNWpkR2x2YmlCb1lXNWtiR1VvYkc5akxDQmpZWFZuYUhRcElIdGNiaUFnSUNBZ0lDQWdjbVZqYjNKa0xuUjVjR1VnUFNCY0luUm9jbTkzWENJN1hHNGdJQ0FnSUNBZ0lISmxZMjl5WkM1aGNtY2dQU0JsZUdObGNIUnBiMjQ3WEc0Z0lDQWdJQ0FnSUdOdmJuUmxlSFF1Ym1WNGRDQTlJR3h2WXp0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNFaFkyRjFaMmgwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdkR2hwY3k1MGNubEZiblJ5YVdWekxteGxibWQwYUNBdElERTdJR2tnUGowZ01Ec2dMUzFwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJsYm5SeWVTQTlJSFJvYVhNdWRISjVSVzUwY21sbGMxdHBYVHRjYmlBZ0lDQWdJQ0FnZG1GeUlISmxZMjl5WkNBOUlHVnVkSEo1TG1OdmJYQnNaWFJwYjI0N1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0dWdWRISjVMblJ5ZVV4dll5QTlQVDBnWENKeWIyOTBYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZMeUJGZUdObGNIUnBiMjRnZEdoeWIzZHVJRzkxZEhOcFpHVWdiMllnWVc1NUlIUnllU0JpYkc5amF5QjBhR0YwSUdOdmRXeGtJR2hoYm1Sc1pWeHVJQ0FnSUNBZ0lDQWdJQzh2SUdsMExDQnpieUJ6WlhRZ2RHaGxJR052YlhCc1pYUnBiMjRnZG1Gc2RXVWdiMllnZEdobElHVnVkR2x5WlNCbWRXNWpkR2x2YmlCMGIxeHVJQ0FnSUNBZ0lDQWdJQzh2SUhSb2NtOTNJSFJvWlNCbGVHTmxjSFJwYjI0dVhHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHaGhibVJzWlNoY0ltVnVaRndpS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNobGJuUnllUzUwY25sTWIyTWdQRDBnZEdocGN5NXdjbVYyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdoaGMwTmhkR05vSUQwZ2FHRnpUM2R1TG1OaGJHd29aVzUwY25rc0lGd2lZMkYwWTJoTWIyTmNJaWs3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR2hoYzBacGJtRnNiSGtnUFNCb1lYTlBkMjR1WTJGc2JDaGxiblJ5ZVN3Z1hDSm1hVzVoYkd4NVRHOWpYQ0lwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0doaGMwTmhkR05vSUNZbUlHaGhjMFpwYm1Gc2JIa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQnlaWFlnUENCbGJuUnllUzVqWVhSamFFeHZZeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdhR0Z1Wkd4bEtHVnVkSEo1TG1OaGRHTm9URzlqTENCMGNuVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9kR2hwY3k1d2NtVjJJRHdnWlc1MGNua3VabWx1WVd4c2VVeHZZeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdhR0Z1Wkd4bEtHVnVkSEo1TG1acGJtRnNiSGxNYjJNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hvWVhORFlYUmphQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjSEpsZGlBOElHVnVkSEo1TG1OaGRHTm9URzlqS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJvWVc1a2JHVW9aVzUwY25rdVkyRjBZMmhNYjJNc0lIUnlkV1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaG9ZWE5HYVc1aGJHeDVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXdjbVYySUR3Z1pXNTBjbmt1Wm1sdVlXeHNlVXh2WXlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYUdGdVpHeGxLR1Z1ZEhKNUxtWnBibUZzYkhsTWIyTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0luUnllU0J6ZEdGMFpXMWxiblFnZDJsMGFHOTFkQ0JqWVhSamFDQnZjaUJtYVc1aGJHeDVYQ0lwTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmhZbkoxY0hRNklHWjFibU4wYVc5dUtIUjVjR1VzSUdGeVp5a2dlMXh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SUhSb2FYTXVkSEo1Ulc1MGNtbGxjeTVzWlc1bmRHZ2dMU0F4T3lCcElENDlJREE3SUMwdGFTa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1pXNTBjbmtnUFNCMGFHbHpMblJ5ZVVWdWRISnBaWE5iYVYwN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hsYm5SeWVTNTBjbmxNYjJNZ1BEMGdkR2hwY3k1d2NtVjJJQ1ltWEc0Z0lDQWdJQ0FnSUNBZ0lDQm9ZWE5QZDI0dVkyRnNiQ2hsYm5SeWVTd2dYQ0ptYVc1aGJHeDVURzlqWENJcElDWW1YRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJ5WlhZZ1BDQmxiblJ5ZVM1bWFXNWhiR3g1VEc5aktTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHWnBibUZzYkhsRmJuUnllU0E5SUdWdWRISjVPMXh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdsbUlDaG1hVzVoYkd4NVJXNTBjbmtnSmlaY2JpQWdJQ0FnSUNBZ0lDQW9kSGx3WlNBOVBUMGdYQ0ppY21WaGExd2lJSHg4WEc0Z0lDQWdJQ0FnSUNBZ0lIUjVjR1VnUFQwOUlGd2lZMjl1ZEdsdWRXVmNJaWtnSmlaY2JpQWdJQ0FnSUNBZ0lDQm1hVzVoYkd4NVJXNTBjbmt1ZEhKNVRHOWpJRHc5SUdGeVp5QW1KbHh1SUNBZ0lDQWdJQ0FnSUdGeVp5QThJR1pwYm1Gc2JIbEZiblJ5ZVM1bWFXNWhiR3g1VEc5aktTQjdYRzRnSUNBZ0lDQWdJQzh2SUVsbmJtOXlaU0IwYUdVZ1ptbHVZV3hzZVNCbGJuUnllU0JwWmlCamIyNTBjbTlzSUdseklHNXZkQ0JxZFcxd2FXNW5JSFJ2SUdGY2JpQWdJQ0FnSUNBZ0x5OGdiRzlqWVhScGIyNGdiM1YwYzJsa1pTQjBhR1VnZEhKNUwyTmhkR05vSUdKc2IyTnJMbHh1SUNBZ0lDQWdJQ0JtYVc1aGJHeDVSVzUwY25rZ1BTQnVkV3hzTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMllYSWdjbVZqYjNKa0lEMGdabWx1WVd4c2VVVnVkSEo1SUQ4Z1ptbHVZV3hzZVVWdWRISjVMbU52YlhCc1pYUnBiMjRnT2lCN2ZUdGNiaUFnSUNBZ0lISmxZMjl5WkM1MGVYQmxJRDBnZEhsd1pUdGNiaUFnSUNBZ0lISmxZMjl5WkM1aGNtY2dQU0JoY21jN1hHNWNiaUFnSUNBZ0lHbG1JQ2htYVc1aGJHeDVSVzUwY25rcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dVpYaDBJRDBnWm1sdVlXeHNlVVZ1ZEhKNUxtWnBibUZzYkhsTWIyTTdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OdmJYQnNaWFJsS0hKbFkyOXlaQ2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJEYjI1MGFXNTFaVk5sYm5ScGJtVnNPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjF3YkdWMFpUb2dablZ1WTNScGIyNG9jbVZqYjNKa0xDQmhablJsY2t4dll5a2dlMXh1SUNBZ0lDQWdhV1lnS0hKbFkyOXlaQzUwZVhCbElEMDlQU0JjSW5Sb2NtOTNYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnY21WamIzSmtMbUZ5Wnp0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2FXWWdLSEpsWTI5eVpDNTBlWEJsSUQwOVBTQmNJbUp5WldGclhDSWdmSHhjYmlBZ0lDQWdJQ0FnSUNCeVpXTnZjbVF1ZEhsd1pTQTlQVDBnWENKamIyNTBhVzUxWlZ3aUtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJtVjRkQ0E5SUhKbFkyOXlaQzVoY21jN1hHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tISmxZMjl5WkM1MGVYQmxJRDA5UFNCY0luSmxkSFZ5Ymx3aUtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNuWmhiQ0E5SUhKbFkyOXlaQzVoY21jN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym1WNGRDQTlJRndpWlc1a1hDSTdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSEpsWTI5eVpDNTBlWEJsSUQwOVBTQmNJbTV2Y20xaGJGd2lJQ1ltSUdGbWRHVnlURzlqS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym1WNGRDQTlJR0ZtZEdWeVRHOWpPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdRMjl1ZEdsdWRXVlRaVzUwYVc1bGJEdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1ptbHVhWE5vT2lCbWRXNWpkR2x2YmlobWFXNWhiR3g1VEc5aktTQjdYRzRnSUNBZ0lDQm1iM0lnS0haaGNpQnBJRDBnZEdocGN5NTBjbmxGYm5SeWFXVnpMbXhsYm1kMGFDQXRJREU3SUdrZ1BqMGdNRHNnTFMxcEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCbGJuUnllU0E5SUhSb2FYTXVkSEo1Ulc1MGNtbGxjMXRwWFR0Y2JpQWdJQ0FnSUNBZ2FXWWdLR1Z1ZEhKNUxtWnBibUZzYkhsTWIyTWdQVDA5SUdacGJtRnNiSGxNYjJNcElIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1amIyMXdiR1YwWlNobGJuUnllUzVqYjIxd2JHVjBhVzl1TENCbGJuUnllUzVoWm5SbGNreHZZeWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWENKallYUmphRndpT2lCbWRXNWpkR2x2YmloMGNubE1iMk1wSUh0Y2JpQWdJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQjBhR2x6TG5SeWVVVnVkSEpwWlhNdWJHVnVaM1JvSUMwZ01Uc2dhU0ErUFNBd095QXRMV2twSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR1Z1ZEhKNUlEMGdkR2hwY3k1MGNubEZiblJ5YVdWelcybGRPMXh1SUNBZ0lDQWdJQ0JwWmlBb1pXNTBjbmt1ZEhKNVRHOWpJRDA5UFNCMGNubE1iMk1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZWElnY21WamIzSmtJRDBnWlc1MGNua3VZMjl0Y0d4bGRHbHZianRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9jbVZqYjNKa0xuUjVjR1VnUFQwOUlGd2lkR2h5YjNkY0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJSFJvY205M2JpQTlJSEpsWTI5eVpDNWhjbWM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWE5sZEZSeWVVVnVkSEo1S0dWdWRISjVLVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUm9jbTkzYmp0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJVYUdVZ1kyOXVkR1Y0ZEM1allYUmphQ0J0WlhSb2IyUWdiWFZ6ZENCdmJteDVJR0psSUdOaGJHeGxaQ0IzYVhSb0lHRWdiRzlqWVhScGIyNWNiaUFnSUNBZ0lDOHZJR0Z5WjNWdFpXNTBJSFJvWVhRZ1kyOXljbVZ6Y0c5dVpITWdkRzhnWVNCcmJtOTNiaUJqWVhSamFDQmliRzlqYXk1Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjSW1sc2JHVm5ZV3dnWTJGMFkyZ2dZWFIwWlcxd2RGd2lLVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdaR1ZzWldkaGRHVlphV1ZzWkRvZ1puVnVZM1JwYjI0b2FYUmxjbUZpYkdVc0lISmxjM1ZzZEU1aGJXVXNJRzVsZUhSTWIyTXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVpHVnNaV2RoZEdVZ1BTQjdYRzRnSUNBZ0lDQWdJR2wwWlhKaGRHOXlPaUIyWVd4MVpYTW9hWFJsY21GaWJHVXBMRnh1SUNBZ0lDQWdJQ0J5WlhOMWJIUk9ZVzFsT2lCeVpYTjFiSFJPWVcxbExGeHVJQ0FnSUNBZ0lDQnVaWGgwVEc5ak9pQnVaWGgwVEc5alhHNGdJQ0FnSUNCOU8xeHVYRzRnSUNBZ0lDQnlaWFIxY200Z1EyOXVkR2x1ZFdWVFpXNTBhVzVsYkR0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzU5S1NoY2JpQWdMeThnUVcxdmJtY2dkR2hsSUhaaGNtbHZkWE1nZEhKcFkydHpJR1p2Y2lCdlluUmhhVzVwYm1jZ1lTQnlaV1psY21WdVkyVWdkRzhnZEdobElHZHNiMkpoYkZ4dUlDQXZMeUJ2WW1wbFkzUXNJSFJvYVhNZ2MyVmxiWE1nZEc4Z1ltVWdkR2hsSUcxdmMzUWdjbVZzYVdGaWJHVWdkR1ZqYUc1cGNYVmxJSFJvWVhRZ1pHOWxjeUJ1YjNSY2JpQWdMeThnZFhObElHbHVaR2x5WldOMElHVjJZV3dnS0hkb2FXTm9JSFpwYjJ4aGRHVnpJRU52Ym5SbGJuUWdVMlZqZFhKcGRIa2dVRzlzYVdONUtTNWNiaUFnZEhsd1pXOW1JR2RzYjJKaGJDQTlQVDBnWENKdlltcGxZM1JjSWlBL0lHZHNiMkpoYkNBNlhHNGdJSFI1Y0dWdlppQjNhVzVrYjNjZ1BUMDlJRndpYjJKcVpXTjBYQ0lnUHlCM2FXNWtiM2NnT2lCMGFHbHpYRzRwTzF4dUlsMTkiLCJ2YXIgUmVjb25uZWN0aW5nV2ViU29ja2V0ID0gcmVxdWlyZShcIlJlY29ubmVjdGluZ1dlYlNvY2tldFwiKTtcblxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5TY3JlZW5JbnZhZGVyID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIEFQSSA9IGZ1bmN0aW9uKHVyaSkge1xuICAgIHRoaXMuc29ja2V0ID0gbmV3IFJlY29ubmVjdGluZ1dlYlNvY2tldCh1cmkpO1xuICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zb2NrZXQub25lcnJvciA9IHRoaXMub25FcnJvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IHRoaXMub25PcGVuLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSB7fTtcbiAgfTtcbiAgZnVuY3Rpb24gd2FpdEZvclNvY2tldENvbm5lY3Rpb24oc29ja2V0LCBjYWxsYmFjayl7XG4gICAgc2V0VGltZW91dChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHNvY2tldC5yZWFkeVN0YXRlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYoY2FsbGJhY2sgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3YWl0Rm9yU29ja2V0Q29ubmVjdGlvbihzb2NrZXQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCAxMDApOyAvLyB3YWl0IDEwMCBtaWxpc2Vjb25kIGZvciB0aGUgY29ubmVjdGlvbi4uLlxuICB9XG5cbiAgQVBJLnByb3RvdHlwZSA9IHtcbiAgICBvblJlY2VpdmU6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICB0aGlzLm9uUmVjZWl2ZUNhbGxiYWNrID0gZm47XG4gICAgfSxcbiAgICBvbk1lc3NhZ2U6IGZ1bmN0aW9uKGV2KSB7XG4gICAgICB0cnkge1xuICAgICAgdmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UoZXYuZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhldi5kYXRhKVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHVwZGF0ZSkpIHtcbiAgICAgICAgLy8gaW5pdGlhbCBmdWxsIHN5bmMuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB1cGRhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUuZXZlbnRzID0ge307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaWYgKHVwZGF0ZVswXS5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAvLyB1cGRhdGUgaGFzIHRoZSBmb3JtYXQga2V5LCBvcGVyYXRpb24sIHZhbHVlIGhlcmUuXG4gICAgICAgICAgdmFyIHBhdGggPSB1cGRhdGVbMF0uc3BsaXQoJy8nKTtcbiAgICAgICAgICBwYXRoLnNoaWZ0KCk7XG4gICAgICAgICAgaWYodXBkYXRlWzFdID09IFwiV1wiKSB7XG4gICAgICAgICAgICBcdGlmKHVwZGF0ZVsyXS5jaGFyQXQoMCkgPT0gJ2InKSB7XG5cdFx0XHR1cGRhdGVbMl0gPSB1cGRhdGVbMl0gPT09IFwiYnRydWVcIiA/IHRydWUgOiBmYWxzZVxuXHRcdH0gZWxzZSBpZih1cGRhdGVbMl0uY2hhckF0KDApID09ICduJykge1xuXHRcdFx0aWYodXBkYXRlWzJdLmluZGV4T2YoXCIuXCIpID4gLTEpXG4gICAgICAgICAgICAgICAgICAgICAgICBcdHVwZGF0ZVsyXSA9IHBhcnNlRmxvYXQodXBkYXRlWzJdLnN1YnN0cmluZygxKSk7XG5cdFx0XHRlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVsyXSA9IHBhcnNlSW50KHVwZGF0ZVsyXS5zdWJzdHJpbmcoMSkpO1xuXHRcdH0gZWxzZSBpZih1cGRhdGVbMl0uY2hhckF0KDApID09ICdzJykge1xuXHRcdFx0dXBkYXRlWzJdID0gdXBkYXRlWzJdLnN1YnN0cmluZygxKTtcblx0XHR9XG5cdFx0Ly9jb25zb2xlLmRlYnVnKCdjaGFuZ2luZyAnICsgdXBkYXRlWzBdICsgJyBmcm9tICcgK1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgIHRoaXMuZ2V0QnlQYXRoKHRoaXMuc3RhdGUsIHBhdGguc2xpY2UoMCkpICtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAnIHRvICcgKyB1cGRhdGVbMl0pO1xuXHRcdHRoaXMuc2V0QnlQYXRoKHRoaXMuc3RhdGUsIHBhdGguc2xpY2UoMCksIHVwZGF0ZVsyXSk7XG5cdFxuXHRcdHZhciBldmVudE5hbWUgPSB1cGRhdGVbMF07XG5cdFx0bGV0IGVoID0gdGhpcy5ldmVudEhhbmRsZXJzO1xuXHRcdE9iamVjdC5rZXlzKGVoKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgIFx0XHRcdGlmIChldmVudE5hbWUuc3RhcnRzV2l0aChrZXkpKSB7XG5cdFx0XHRcdHZhciBoYW5kbGVycyA9IGVoW2tleV0gICBcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoaGFuZGxlcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcdFx0aGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRoYW5kbGVyKGV2ZW50TmFtZSwgdXBkYXRlWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFx0XHR9KTtcbiAgIFxuIFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XHRcblx0XHR9KTtcbiAgICAgICAgICB9IGVsc2UgaWYodXBkYXRlWzFdID09IFwiRFwiKSB7XG5cdFx0dGhpcy5kZWxldGVCeVBhdGgodGhpcy5zdGF0ZSwgcGF0aC5zbGljZSgwKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHVwZGF0ZSBoYXMgdGhlIGZvbGxvd2luZyBmb3JtYXQ6IGV2ZW50LCBvcGVyYXRpb24sIHZhbHVlXG4gICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IHVwZGF0ZVswXSxcbiAgICAgICAgICAgICAgcGFyYW1zID0gdXBkYXRlWzJdO1xuICAgICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGhhbmRsZXJzKSkge1xuICAgICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICAgIGhhbmRsZXIocGFyYW1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH19Y2F0Y2goZXJyb3IpIHtcbiAgICAgIGlmICh0eXBlb2YodGhpcy5vblJlY2VpdmVDYWxsYmFjaykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMub25SZWNlaXZlQ2FsbGJhY2soZXYuZGF0YSk7XG4gICAgICB9XG4gICAgICB9ICBcbiAgICB9LFxuICAgIHNldEJ5UGF0aDogZnVuY3Rpb24gKG9iaiwgcGF0aCwgdmFsdWUpIHtcbiAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICBpZihrZXkuY2hhckF0KDApID09ICcjJykge1xuICAgICAgICAgIC8vZW5jb3VudGVyZWQgYW4gYXJyYXkgZWxlbWVudFxuICAgICAgICAgIGtleSA9IHBhcnNlSW50KGtleS5zdWJzdHJpbmcoMSkpO1xuICAgICAgICB9IGVsc2UgaWYoa2V5ID09IFwiLlwiKSB7XG4gICAgICAgICAgLy9lbmNvdW50ZXJlZCBhIGRpcmVjdG9yeSBlbGVtZW50IC0+IGlnbm9yZVxuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYob2JqW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmKHBhdGgubGVuZ3RoID49IDEgJiYgcGF0aFswXSA9PSBcIi5cIikge1xuICAgICAgICAgICAgaWYodmFsdWUuY2hhckF0KDApID09ICdBJykge1xuICAgICAgICAgICAgICAvL2NyZWF0ZSBhbiBhcnJheVxuICAgICAgICAgICAgICBvYmpba2V5XSA9IFtdO1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vY3JlYXRlIGFuIG9iamVjdFxuICAgICAgICAgICAgICBvYmpba2V5XSA9IHt9O1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRCeVBhdGgob2JqW2tleV0sIHBhdGgsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGtleSA9IHBhdGguc2hpZnQoKTtcbiAgICAgICAgaWYoa2V5ID09IFwiLlwiKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZUJ5UGF0aDogZnVuY3Rpb24gKG9iaiwgcGF0aCkge1xuICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICBrZXkgPSBwYXRoLnNoaWZ0KCk7XG4gICAgICAgIGlmKGtleS5jaGFyQXQoMCkgPT0gJyMnKSB7XG4gICAgICAgICAga2V5ID0gcGFyc2VJbnQoa2V5LnN1YnN0cmluZygxKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihwYXRoWzBdID09IFwiLlwiKSB7XG4gICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICBpZihvYmoubGVuZ3RoIDwgMilcbiAgICAgICAgICAgICAgb2JqID0gW107XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIG9iai5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIG9ialtrZXldO1xuXG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5kZWxldGVCeVBhdGgob2JqW2tleV0sIHBhdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICBkZWxldGUgb2JqW2tleV07XG4gICAgICB9XG4gICAgfSwgXG5cdFx0Z2V0QnlQYXRoOiBmdW5jdGlvbihvYmosIHBhdGgpIHtcbiAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5ID0gcGF0aC5zaGlmdCgpO1xuICAgICAgICBpZihrZXkgPT0gXCIuXCIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ5UGF0aChvYmpba2V5XSwgcGF0aCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZm4pIHtcbiAgICAgIHRoaXMuZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gdGhpcy5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0gfHwgW107XG4gICAgICB0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgICB9LFxuICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gZm47XG4gICAgfSxcbiAgICBvbk9wZW46IGZ1bmN0aW9uKGV2KSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgaWYodGhpcy5vbnJlYWR5KVxuXHR0aGlzLm9ucmVhZHkoKTtcbiAgICB9LFxuICAgIG9uUmVhZHk6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICB0aGlzLm9ucmVhZHkgPSBmbjtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNvY2tldC5zZW5kKCdzZXR1cCcpO1xuICAgIH0sXG4gICAgc2VuZDogZnVuY3Rpb24oY29tbWFuZCwga2V5LCB2YWx1ZSkge1xuICAgICBsZXQgc29jayA9IHRoaXMuc29ja2V0O1xuICAgICBsZXQgYXJndiA9IGFyZ3VtZW50cztcbiAgICAgIHdhaXRGb3JTb2NrZXRDb25uZWN0aW9uKHRoaXMuc29ja2V0LCBmdW5jdGlvbigpe1xuICAgICAgICBzb2NrLnNlbmQoXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICAgICAgICAgICAgYXJndikpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcHVibGlzaDogZnVuY3Rpb24oa2V5LCBvcCwgdmFsdWUpIHtcbiAgICAgIGlmKHZhbHVlID09IG51bGwpIHtcblx0dmFsdWUgPSBvcDtcblx0b3AgPSBcIldcIjtcbiAgICAgIH1cblx0XG4gICAgICB0aGlzLnNlbmQoJ3B1Ymxpc2gnLCBrZXksIG9wLCB2YWx1ZSk7XG4gICAgfSxcbiAgICBnZXRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgICB9XG59O1xuXG4gIHJldHVybiBBUEk7XG59KSk7XG4iLCIvLyBNSVQgTGljZW5zZTpcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxMiwgSm9lIFdhbG5lc1xuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8qKlxuICogVGhpcyBiZWhhdmVzIGxpa2UgYSBXZWJTb2NrZXQgaW4gZXZlcnkgd2F5LCBleGNlcHQgaWYgaXQgZmFpbHMgdG8gY29ubmVjdCxcbiAqIG9yIGl0IGdldHMgZGlzY29ubmVjdGVkLCBpdCB3aWxsIHJlcGVhdGVkbHkgcG9sbCB1bnRpbCBpdCBzdWNjZXNzZnVsbHkgY29ubmVjdHNcbiAqIGFnYWluLlxuICpcbiAqIEl0IGlzIEFQSSBjb21wYXRpYmxlLCBzbyB3aGVuIHlvdSBoYXZlOlxuICogICB3cyA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vLi4uLicpO1xuICogeW91IGNhbiByZXBsYWNlIHdpdGg6XG4gKiAgIHdzID0gbmV3IFJlY29ubmVjdGluZ1dlYlNvY2tldCgnd3M6Ly8uLi4uJyk7XG4gKlxuICogVGhlIGV2ZW50IHN0cmVhbSB3aWxsIHR5cGljYWxseSBsb29rIGxpa2U6XG4gKiAgb25jb25uZWN0aW5nXG4gKiAgb25vcGVuXG4gKiAgb25tZXNzYWdlXG4gKiAgb25tZXNzYWdlXG4gKiAgb25jbG9zZSAvLyBsb3N0IGNvbm5lY3Rpb25cbiAqICBvbmNvbm5lY3RpbmdcbiAqICBvbm9wZW4gIC8vIHNvbWV0aW1lIGxhdGVyLi4uXG4gKiAgb25tZXNzYWdlXG4gKiAgb25tZXNzYWdlXG4gKiAgZXRjLi4uXG4gKlxuICogSXQgaXMgQVBJIGNvbXBhdGlibGUgd2l0aCB0aGUgc3RhbmRhcmQgV2ViU29ja2V0IEFQSSwgYXBhcnQgZnJvbSB0aGUgZm9sbG93aW5nIG1lbWJlcnM6XG4gKlxuICogLSBgYnVmZmVyZWRBbW91bnRgXG4gKiAtIGBleHRlbnNpb25zYFxuICogLSBgYmluYXJ5VHlwZWBcbiAqXG4gKiBMYXRlc3QgdmVyc2lvbjogaHR0cHM6Ly9naXRodWIuY29tL2pvZXdhbG5lcy9yZWNvbm5lY3Rpbmctd2Vic29ja2V0L1xuICogLSBKb2UgV2FsbmVzXG4gKlxuICogU3ludGF4XG4gKiA9PT09PT1cbiAqIHZhciBzb2NrZXQgPSBuZXcgUmVjb25uZWN0aW5nV2ViU29ja2V0KHVybCwgcHJvdG9jb2xzLCBvcHRpb25zKTtcbiAqXG4gKiBQYXJhbWV0ZXJzXG4gKiA9PT09PT09PT09XG4gKiB1cmwgLSBUaGUgdXJsIHlvdSBhcmUgY29ubmVjdGluZyB0by5cbiAqIHByb3RvY29scyAtIE9wdGlvbmFsIHN0cmluZyBvciBhcnJheSBvZiBwcm90b2NvbHMuXG4gKiBvcHRpb25zIC0gU2VlIGJlbG93XG4gKlxuICogT3B0aW9uc1xuICogPT09PT09PVxuICogT3B0aW9ucyBjYW4gZWl0aGVyIGJlIHBhc3NlZCB1cG9uIGluc3RhbnRpYXRpb24gb3Igc2V0IGFmdGVyIGluc3RhbnRpYXRpb246XG4gKlxuICogdmFyIHNvY2tldCA9IG5ldyBSZWNvbm5lY3RpbmdXZWJTb2NrZXQodXJsLCBudWxsLCB7IGRlYnVnOiB0cnVlLCByZWNvbm5lY3RJbnRlcnZhbDogNDAwMCB9KTtcbiAqXG4gKiBvclxuICpcbiAqIHZhciBzb2NrZXQgPSBuZXcgUmVjb25uZWN0aW5nV2ViU29ja2V0KHVybCk7XG4gKiBzb2NrZXQuZGVidWcgPSB0cnVlO1xuICogc29ja2V0LnJlY29ubmVjdEludGVydmFsID0gNDAwMDtcbiAqXG4gKiBkZWJ1Z1xuICogLSBXaGV0aGVyIHRoaXMgaW5zdGFuY2Ugc2hvdWxkIGxvZyBkZWJ1ZyBtZXNzYWdlcy4gQWNjZXB0cyB0cnVlIG9yIGZhbHNlLiBEZWZhdWx0OiBmYWxzZS5cbiAqXG4gKiBhdXRvbWF0aWNPcGVuXG4gKiAtIFdoZXRoZXIgb3Igbm90IHRoZSB3ZWJzb2NrZXQgc2hvdWxkIGF0dGVtcHQgdG8gY29ubmVjdCBpbW1lZGlhdGVseSB1cG9uIGluc3RhbnRpYXRpb24uIFRoZSBzb2NrZXQgY2FuIGJlIG1hbnVhbGx5IG9wZW5lZCBvciBjbG9zZWQgYXQgYW55IHRpbWUgdXNpbmcgd3Mub3BlbigpIGFuZCB3cy5jbG9zZSgpLlxuICpcbiAqIHJlY29ubmVjdEludGVydmFsXG4gKiAtIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5IGJlZm9yZSBhdHRlbXB0aW5nIHRvIHJlY29ubmVjdC4gQWNjZXB0cyBpbnRlZ2VyLiBEZWZhdWx0OiAxMDAwLlxuICpcbiAqIG1heFJlY29ubmVjdEludGVydmFsXG4gKiAtIFRoZSBtYXhpbXVtIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkgYSByZWNvbm5lY3Rpb24gYXR0ZW1wdC4gQWNjZXB0cyBpbnRlZ2VyLiBEZWZhdWx0OiAzMDAwMC5cbiAqXG4gKiByZWNvbm5lY3REZWNheVxuICogLSBUaGUgcmF0ZSBvZiBpbmNyZWFzZSBvZiB0aGUgcmVjb25uZWN0IGRlbGF5LiBBbGxvd3MgcmVjb25uZWN0IGF0dGVtcHRzIHRvIGJhY2sgb2ZmIHdoZW4gcHJvYmxlbXMgcGVyc2lzdC4gQWNjZXB0cyBpbnRlZ2VyIG9yIGZsb2F0LiBEZWZhdWx0OiAxLjUuXG4gKlxuICogdGltZW91dEludGVydmFsXG4gKiAtIFRoZSBtYXhpbXVtIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHdhaXQgZm9yIGEgY29ubmVjdGlvbiB0byBzdWNjZWVkIGJlZm9yZSBjbG9zaW5nIGFuZCByZXRyeWluZy4gQWNjZXB0cyBpbnRlZ2VyLiBEZWZhdWx0OiAyMDAwLlxuICpcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyl7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdsb2JhbC5SZWNvbm5lY3RpbmdXZWJTb2NrZXQgPSBmYWN0b3J5KCk7XG4gICAgfVxufSkodGhpcywgZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKCEoJ1dlYlNvY2tldCcgaW4gd2luZG93KSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUmVjb25uZWN0aW5nV2ViU29ja2V0KHVybCwgcHJvdG9jb2xzLCBvcHRpb25zKSB7XG5cbiAgICAgICAgLy8gRGVmYXVsdCBzZXR0aW5nc1xuICAgICAgICB2YXIgc2V0dGluZ3MgPSB7XG5cbiAgICAgICAgICAgIC8qKiBXaGV0aGVyIHRoaXMgaW5zdGFuY2Ugc2hvdWxkIGxvZyBkZWJ1ZyBtZXNzYWdlcy4gKi9cbiAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcblxuICAgICAgICAgICAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSB3ZWJzb2NrZXQgc2hvdWxkIGF0dGVtcHQgdG8gY29ubmVjdCBpbW1lZGlhdGVseSB1cG9uIGluc3RhbnRpYXRpb24uICovXG4gICAgICAgICAgICBhdXRvbWF0aWNPcGVuOiB0cnVlLFxuXG4gICAgICAgICAgICAvKiogVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcmVjb25uZWN0LiAqL1xuICAgICAgICAgICAgcmVjb25uZWN0SW50ZXJ2YWw6IDEwMDAsXG4gICAgICAgICAgICAvKiogVGhlIG1heGltdW0gbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheSBhIHJlY29ubmVjdGlvbiBhdHRlbXB0LiAqL1xuICAgICAgICAgICAgbWF4UmVjb25uZWN0SW50ZXJ2YWw6IDMwMDAwLFxuICAgICAgICAgICAgLyoqIFRoZSByYXRlIG9mIGluY3JlYXNlIG9mIHRoZSByZWNvbm5lY3QgZGVsYXkuIEFsbG93cyByZWNvbm5lY3QgYXR0ZW1wdHMgdG8gYmFjayBvZmYgd2hlbiBwcm9ibGVtcyBwZXJzaXN0LiAqL1xuICAgICAgICAgICAgcmVjb25uZWN0RGVjYXk6IDEuNSxcblxuICAgICAgICAgICAgLyoqIFRoZSBtYXhpbXVtIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHdhaXQgZm9yIGEgY29ubmVjdGlvbiB0byBzdWNjZWVkIGJlZm9yZSBjbG9zaW5nIGFuZCByZXRyeWluZy4gKi9cbiAgICAgICAgICAgIHRpbWVvdXRJbnRlcnZhbDogMjAwMCxcblxuICAgICAgICAgICAgLyoqIFRoZSBtYXhpbXVtIG51bWJlciBvZiByZWNvbm5lY3Rpb24gYXR0ZW1wdHMgdG8gbWFrZS4gVW5saW1pdGVkIGlmIG51bGwuICovXG4gICAgICAgICAgICBtYXhSZWNvbm5lY3RBdHRlbXB0czogbnVsbCxcblxuICAgICAgICAgICAgLyoqIFRoZSBiaW5hcnkgdHlwZSwgcG9zc2libGUgdmFsdWVzICdibG9iJyBvciAnYXJyYXlidWZmZXInLCBkZWZhdWx0ICdibG9iJy4gKi9cbiAgICAgICAgICAgIGJpbmFyeVR5cGU6ICdibG9iJ1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucykgeyBvcHRpb25zID0ge307IH1cblxuICAgICAgICAvLyBPdmVyd3JpdGUgYW5kIGRlZmluZSBzZXR0aW5ncyB3aXRoIG9wdGlvbnMgaWYgdGhleSBleGlzdC5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNldHRpbmdzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnNba2V5XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHNldHRpbmdzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGVzZSBzaG91bGQgYmUgdHJlYXRlZCBhcyByZWFkLW9ubHkgcHJvcGVydGllc1xuXG4gICAgICAgIC8qKiBUaGUgVVJMIGFzIHJlc29sdmVkIGJ5IHRoZSBjb25zdHJ1Y3Rvci4gVGhpcyBpcyBhbHdheXMgYW4gYWJzb2x1dGUgVVJMLiBSZWFkIG9ubHkuICovXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuXG4gICAgICAgIC8qKiBUaGUgbnVtYmVyIG9mIGF0dGVtcHRlZCByZWNvbm5lY3RzIHNpbmNlIHN0YXJ0aW5nLCBvciB0aGUgbGFzdCBzdWNjZXNzZnVsIGNvbm5lY3Rpb24uIFJlYWQgb25seS4gKi9cbiAgICAgICAgdGhpcy5yZWNvbm5lY3RBdHRlbXB0cyA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBjb25uZWN0aW9uLlxuICAgICAgICAgKiBDYW4gYmUgb25lIG9mOiBXZWJTb2NrZXQuQ09OTkVDVElORywgV2ViU29ja2V0Lk9QRU4sIFdlYlNvY2tldC5DTE9TSU5HLCBXZWJTb2NrZXQuQ0xPU0VEXG4gICAgICAgICAqIFJlYWQgb25seS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5DT05ORUNUSU5HO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHN0cmluZyBpbmRpY2F0aW5nIHRoZSBuYW1lIG9mIHRoZSBzdWItcHJvdG9jb2wgdGhlIHNlcnZlciBzZWxlY3RlZDsgdGhpcyB3aWxsIGJlIG9uZSBvZlxuICAgICAgICAgKiB0aGUgc3RyaW5ncyBzcGVjaWZpZWQgaW4gdGhlIHByb3RvY29scyBwYXJhbWV0ZXIgd2hlbiBjcmVhdGluZyB0aGUgV2ViU29ja2V0IG9iamVjdC5cbiAgICAgICAgICogUmVhZCBvbmx5LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcm90b2NvbCA9IG51bGw7XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBzdGF0ZSB2YXJpYWJsZXNcblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciB3cztcbiAgICAgICAgdmFyIGZvcmNlZENsb3NlID0gZmFsc2U7XG4gICAgICAgIHZhciB0aW1lZE91dCA9IGZhbHNlO1xuICAgICAgICB2YXIgZXZlbnRUYXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAvLyBXaXJlIHVwIFwib24qXCIgcHJvcGVydGllcyBhcyBldmVudCBoYW5kbGVyc1xuXG4gICAgICAgIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCAgICAgICBmdW5jdGlvbihldmVudCkgeyBzZWxmLm9ub3BlbihldmVudCk7IH0pO1xuICAgICAgICBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICAgICAgZnVuY3Rpb24oZXZlbnQpIHsgc2VsZi5vbmNsb3NlKGV2ZW50KTsgfSk7XG4gICAgICAgIGV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2Nvbm5lY3RpbmcnLCBmdW5jdGlvbihldmVudCkgeyBzZWxmLm9uY29ubmVjdGluZyhldmVudCk7IH0pO1xuICAgICAgICBldmVudFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgICAgZnVuY3Rpb24oZXZlbnQpIHsgc2VsZi5vbm1lc3NhZ2UoZXZlbnQpOyB9KTtcbiAgICAgICAgZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7IHNlbGYub25lcnJvcihldmVudCk7IH0pO1xuXG4gICAgICAgIC8vIEV4cG9zZSB0aGUgQVBJIHJlcXVpcmVkIGJ5IEV2ZW50VGFyZ2V0XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyID0gZXZlbnRUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lci5iaW5kKGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyID0gZXZlbnRUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKGV2ZW50VGFyZ2V0KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50ID0gZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudC5iaW5kKGV2ZW50VGFyZ2V0KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgYW4gZXZlbnQgdGhhdCBpcyBjb21wYXRpYmxlIHdpdGggc3RhbmRhcmRcbiAgICAgICAgICogY29tcGxpYW50IGJyb3dzZXJzIGFuZCBJRTkgLSBJRTExXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgd2lsbCBwcmV2ZW50IHRoZSBlcnJvcjpcbiAgICAgICAgICogT2JqZWN0IGRvZXNuJ3Qgc3VwcG9ydCB0aGlzIGFjdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5MzQ1MzkyL3doeS1hcmVudC1teS1wYXJhbWV0ZXJzLWdldHRpbmctcGFzc2VkLXRocm91Z2gtdG8tYS1kaXNwYXRjaGVkLWV2ZW50LzE5MzQ1NTYzIzE5MzQ1NTYzXG4gICAgICAgICAqIEBwYXJhbSBzIFN0cmluZyBUaGUgbmFtZSB0aGF0IHRoZSBldmVudCBzaG91bGQgdXNlXG4gICAgICAgICAqIEBwYXJhbSBhcmdzIE9iamVjdCBhbiBvcHRpb25hbCBvYmplY3QgdGhhdCB0aGUgZXZlbnQgd2lsbCB1c2VcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlRXZlbnQocywgYXJncykge1xuICAgICAgICBcdHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgICAgICBcdGV2dC5pbml0Q3VzdG9tRXZlbnQocywgZmFsc2UsIGZhbHNlLCBhcmdzKTtcbiAgICAgICAgXHRyZXR1cm4gZXZ0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uIChyZWNvbm5lY3RBdHRlbXB0KSB7XG4gICAgICAgICAgICB3cyA9IG5ldyBXZWJTb2NrZXQoc2VsZi51cmwsIHByb3RvY29scyB8fCBbXSk7XG4gICAgICAgICAgICB3cy5iaW5hcnlUeXBlID0gdGhpcy5iaW5hcnlUeXBlO1xuXG4gICAgICAgICAgICBpZiAocmVjb25uZWN0QXR0ZW1wdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1heFJlY29ubmVjdEF0dGVtcHRzICYmIHRoaXMucmVjb25uZWN0QXR0ZW1wdHMgPiB0aGlzLm1heFJlY29ubmVjdEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoZ2VuZXJhdGVFdmVudCgnY29ubmVjdGluZycpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdEF0dGVtcHRzID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNlbGYuZGVidWcgfHwgUmVjb25uZWN0aW5nV2ViU29ja2V0LmRlYnVnQWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnUmVjb25uZWN0aW5nV2ViU29ja2V0JywgJ2F0dGVtcHQtY29ubmVjdCcsIHNlbGYudXJsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxvY2FsV3MgPSB3cztcbiAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5kZWJ1ZyB8fCBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuZGVidWdBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnUmVjb25uZWN0aW5nV2ViU29ja2V0JywgJ2Nvbm5lY3Rpb24tdGltZW91dCcsIHNlbGYudXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGltZWRPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxvY2FsV3MuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB0aW1lZE91dCA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgc2VsZi50aW1lb3V0SW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICB3cy5vbm9wZW4gPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5kZWJ1ZyB8fCBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuZGVidWdBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnUmVjb25uZWN0aW5nV2ViU29ja2V0JywgJ29ub3BlbicsIHNlbGYudXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5wcm90b2NvbCA9IHdzLnByb3RvY29sO1xuICAgICAgICAgICAgICAgIHNlbGYucmVhZHlTdGF0ZSA9IFdlYlNvY2tldC5PUEVOO1xuICAgICAgICAgICAgICAgIHNlbGYucmVjb25uZWN0QXR0ZW1wdHMgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBlID0gZ2VuZXJhdGVFdmVudCgnb3BlbicpO1xuICAgICAgICAgICAgICAgIGUuaXNSZWNvbm5lY3QgPSByZWNvbm5lY3RBdHRlbXB0O1xuICAgICAgICAgICAgICAgIHJlY29ubmVjdEF0dGVtcHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHdzID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoZm9yY2VkQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NFRDtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChnZW5lcmF0ZUV2ZW50KCdjbG9zZScpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ09OTkVDVElORztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSBnZW5lcmF0ZUV2ZW50KCdjb25uZWN0aW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGUuY29kZSA9IGV2ZW50LmNvZGU7XG4gICAgICAgICAgICAgICAgICAgIGUucmVhc29uID0gZXZlbnQucmVhc29uO1xuICAgICAgICAgICAgICAgICAgICBlLndhc0NsZWFuID0gZXZlbnQud2FzQ2xlYW47XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVjb25uZWN0QXR0ZW1wdCAmJiAhdGltZWRPdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRlYnVnIHx8IFJlY29ubmVjdGluZ1dlYlNvY2tldC5kZWJ1Z0FsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJ1JlY29ubmVjdGluZ1dlYlNvY2tldCcsICdvbmNsb3NlJywgc2VsZi51cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChnZW5lcmF0ZUV2ZW50KCdjbG9zZScpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciB0aW1lb3V0ID0gc2VsZi5yZWNvbm5lY3RJbnRlcnZhbCAqIE1hdGgucG93KHNlbGYucmVjb25uZWN0RGVjYXksIHNlbGYucmVjb25uZWN0QXR0ZW1wdHMpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWNvbm5lY3RBdHRlbXB0cysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5vcGVuKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aW1lb3V0ID4gc2VsZi5tYXhSZWNvbm5lY3RJbnRlcnZhbCA/IHNlbGYubWF4UmVjb25uZWN0SW50ZXJ2YWwgOiB0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd3Mub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5kZWJ1ZyB8fCBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuZGVidWdBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnUmVjb25uZWN0aW5nV2ViU29ja2V0JywgJ29ubWVzc2FnZScsIHNlbGYudXJsLCBldmVudC5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBnZW5lcmF0ZUV2ZW50KCdtZXNzYWdlJyk7XG4gICAgICAgICAgICAgICAgZS5kYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHdzLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmRlYnVnIHx8IFJlY29ubmVjdGluZ1dlYlNvY2tldC5kZWJ1Z0FsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdSZWNvbm5lY3RpbmdXZWJTb2NrZXQnLCAnb25lcnJvcicsIHNlbGYudXJsLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV2ZW50VGFyZ2V0LmRpc3BhdGNoRXZlbnQoZ2VuZXJhdGVFdmVudCgnZXJyb3InKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hldGhlciBvciBub3QgdG8gY3JlYXRlIGEgd2Vic29ja2V0IHVwb24gaW5zdGFudGlhdGlvblxuICAgICAgICBpZiAodGhpcy5hdXRvbWF0aWNPcGVuID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbihmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJhbnNtaXRzIGRhdGEgdG8gdGhlIHNlcnZlciBvdmVyIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIGRhdGEgYSB0ZXh0IHN0cmluZywgQXJyYXlCdWZmZXIgb3IgQmxvYiB0byBzZW5kIHRvIHRoZSBzZXJ2ZXIuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNlbmQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBpZiAod3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5kZWJ1ZyB8fCBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuZGVidWdBbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnUmVjb25uZWN0aW5nV2ViU29ja2V0JywgJ3NlbmQnLCBzZWxmLnVybCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB3cy5zZW5kKGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnSU5WQUxJRF9TVEFURV9FUlIgOiBQYXVzaW5nIHRvIHJlY29ubmVjdCB3ZWJzb2NrZXQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbG9zZXMgdGhlIFdlYlNvY2tldCBjb25uZWN0aW9uIG9yIGNvbm5lY3Rpb24gYXR0ZW1wdCwgaWYgYW55LlxuICAgICAgICAgKiBJZiB0aGUgY29ubmVjdGlvbiBpcyBhbHJlYWR5IENMT1NFRCwgdGhpcyBtZXRob2QgZG9lcyBub3RoaW5nLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jbG9zZSA9IGZ1bmN0aW9uKGNvZGUsIHJlYXNvbikge1xuICAgICAgICAgICAgLy8gRGVmYXVsdCBDTE9TRV9OT1JNQUwgY29kZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2RlID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29kZSA9IDEwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JjZWRDbG9zZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAod3MpIHtcbiAgICAgICAgICAgICAgICB3cy5jbG9zZShjb2RlLCByZWFzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIHB1YmxpYyBBUEkgbWV0aG9kIHRvIHJlZnJlc2ggdGhlIGNvbm5lY3Rpb24gaWYgc3RpbGwgb3BlbiAoY2xvc2UsIHJlLW9wZW4pLlxuICAgICAgICAgKiBGb3IgZXhhbXBsZSwgaWYgdGhlIGFwcCBzdXNwZWN0cyBiYWQgZGF0YSAvIG1pc3NlZCBoZWFydCBiZWF0cywgaXQgY2FuIHRyeSB0byByZWZyZXNoLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAod3MpIHtcbiAgICAgICAgICAgICAgICB3cy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBXZWJTb2NrZXQgY29ubmVjdGlvbidzIHJlYWR5U3RhdGUgY2hhbmdlcyB0byBPUEVOO1xuICAgICAqIHRoaXMgaW5kaWNhdGVzIHRoYXQgdGhlIGNvbm5lY3Rpb24gaXMgcmVhZHkgdG8gc2VuZCBhbmQgcmVjZWl2ZSBkYXRhLlxuICAgICAqL1xuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUub25vcGVuID0gZnVuY3Rpb24oZXZlbnQpIHt9O1xuICAgIC8qKiBBbiBldmVudCBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgV2ViU29ja2V0IGNvbm5lY3Rpb24ncyByZWFkeVN0YXRlIGNoYW5nZXMgdG8gQ0xPU0VELiAqL1xuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5wcm90b3R5cGUub25jbG9zZSA9IGZ1bmN0aW9uKGV2ZW50KSB7fTtcbiAgICAvKiogQW4gZXZlbnQgbGlzdGVuZXIgdG8gYmUgY2FsbGVkIHdoZW4gYSBjb25uZWN0aW9uIGJlZ2lucyBiZWluZyBhdHRlbXB0ZWQuICovXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5vbmNvbm5lY3RpbmcgPSBmdW5jdGlvbihldmVudCkge307XG4gICAgLyoqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIGEgbWVzc2FnZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBzZXJ2ZXIuICovXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LnByb3RvdHlwZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge307XG4gICAgLyoqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIGFuIGVycm9yIG9jY3Vycy4gKi9cbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbihldmVudCkge307XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGFsbCBpbnN0YW5jZXMgb2YgUmVjb25uZWN0aW5nV2ViU29ja2V0IHNob3VsZCBsb2cgZGVidWcgbWVzc2FnZXMuXG4gICAgICogU2V0dGluZyB0aGlzIHRvIHRydWUgaXMgdGhlIGVxdWl2YWxlbnQgb2Ygc2V0dGluZyBhbGwgaW5zdGFuY2VzIG9mIFJlY29ubmVjdGluZ1dlYlNvY2tldC5kZWJ1ZyB0byB0cnVlLlxuICAgICAqL1xuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5kZWJ1Z0FsbCA9IGZhbHNlO1xuXG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LkNPTk5FQ1RJTkcgPSBXZWJTb2NrZXQuQ09OTkVDVElORztcbiAgICBSZWNvbm5lY3RpbmdXZWJTb2NrZXQuT1BFTiA9IFdlYlNvY2tldC5PUEVOO1xuICAgIFJlY29ubmVjdGluZ1dlYlNvY2tldC5DTE9TSU5HID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgUmVjb25uZWN0aW5nV2ViU29ja2V0LkNMT1NFRCA9IFdlYlNvY2tldC5DTE9TRUQ7XG5cbiAgICByZXR1cm4gUmVjb25uZWN0aW5nV2ViU29ja2V0O1xufSk7XG4iLCIhZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9dC5IVE1MQ2FudmFzRWxlbWVudCYmdC5IVE1MQ2FudmFzRWxlbWVudC5wcm90b3R5cGUsbz10LkJsb2ImJmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBCb29sZWFuKG5ldyBCbG9iKX1jYXRjaCh0KXtyZXR1cm4hMX19KCksbj1vJiZ0LlVpbnQ4QXJyYXkmJmZ1bmN0aW9uKCl7dHJ5e3JldHVybiAxMDA9PT1uZXcgQmxvYihbbmV3IFVpbnQ4QXJyYXkoMTAwKV0pLnNpemV9Y2F0Y2godCl7cmV0dXJuITF9fSgpLHI9dC5CbG9iQnVpbGRlcnx8dC5XZWJLaXRCbG9iQnVpbGRlcnx8dC5Nb3pCbG9iQnVpbGRlcnx8dC5NU0Jsb2JCdWlsZGVyLGE9L15kYXRhOigoLio/KSg7Y2hhcnNldD0uKj8pPykoO2Jhc2U2NCk/LC8saT0ob3x8cikmJnQuYXRvYiYmdC5BcnJheUJ1ZmZlciYmdC5VaW50OEFycmF5JiZmdW5jdGlvbih0KXt2YXIgZSxpLGwsdSxiLGMsZCxCLGY7aWYoZT10Lm1hdGNoKGEpLCFlKXRocm93IG5ldyBFcnJvcihcImludmFsaWQgZGF0YSBVUklcIik7Zm9yKGk9ZVsyXT9lWzFdOlwidGV4dC9wbGFpblwiKyhlWzNdfHxcIjtjaGFyc2V0PVVTLUFTQ0lJXCIpLGw9ISFlWzRdLHU9dC5zbGljZShlWzBdLmxlbmd0aCksYj1sP2F0b2IodSk6ZGVjb2RlVVJJQ29tcG9uZW50KHUpLGM9bmV3IEFycmF5QnVmZmVyKGIubGVuZ3RoKSxkPW5ldyBVaW50OEFycmF5KGMpLEI9MDtCPGIubGVuZ3RoO0IrPTEpZFtCXT1iLmNoYXJDb2RlQXQoQik7cmV0dXJuIG8/bmV3IEJsb2IoW24/ZDpjXSx7dHlwZTppfSk6KGY9bmV3IHIsZi5hcHBlbmQoYyksZi5nZXRCbG9iKGkpKX07dC5IVE1MQ2FudmFzRWxlbWVudCYmIWUudG9CbG9iJiYoZS5tb3pHZXRBc0ZpbGU/ZS50b0Jsb2I9ZnVuY3Rpb24odCxvLG4pe3QobiYmZS50b0RhdGFVUkwmJmk/aSh0aGlzLnRvRGF0YVVSTChvLG4pKTp0aGlzLm1vekdldEFzRmlsZShcImJsb2JcIixvKSl9OmUudG9EYXRhVVJMJiZpJiYoZS50b0Jsb2I9ZnVuY3Rpb24odCxlLG8pe3QoaSh0aGlzLnRvRGF0YVVSTChlLG8pKSl9KSksXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBpfSk6XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9aTp0LmRhdGFVUkx0b0Jsb2I9aX0od2luZG93KTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc29ja2V0VXJpOiAnd3NzOi8vbGllYnQtZGljaC5vcmc6ODEzMCdcbn07XG4iLCJpbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9iYWJlbGlmeS9ub2RlX21vZHVsZXMvYmFiZWwtY29yZS9icm93c2VyLXBvbHlmaWxsLmpzJztcblxuaW1wb3J0IEFQSSBmcm9tICdqYW5vc2guanMnO1xuaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5cbnZhciBqYW5vc2ggPSBuZXcgQVBJKGNvbmZpZy5zb2NrZXRVcmkpO1xuLy9pbXBvcnQgSnBlZ0NhbWVyYVN3ZiBmcm9tICdqcGVnLWNhbWVyYS1lczYvbGliL2pwZWdfY2FtZXJhLnN3Zic7XG4vL2ltcG9ydCAnc2NyaXB0LWxvYWRlciFqcGVnLWNhbWVyYS1lczYvbGliL3N3Zm9iamVjdC5taW4uanMnO1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvanBlZy1jYW1lcmEvZGlzdC9jYW52YXMtdG8tYmxvYi5taW4uanMnO1xuXG5pbXBvcnQgSnBlZ0NhbWVyYSBmcm9tICdqcGVnLWNhbWVyYS1lczYnO1xuXG5mdW5jdGlvbiBBcnJheUJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcikge1xuICAgIHJldHVybiBCaW5hcnlUb1N0cmluZyhTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShuZXcgVWludDhBcnJheShidWZmZXIpKSkpO1xufVxuXG5mdW5jdGlvbiBCaW5hcnlUb1N0cmluZyhiaW5hcnkpIHtcbiAgICB2YXIgZXJyb3I7XG5cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShiaW5hcnkpKTtcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcbiAgICAgICAgZXJyb3IgPSBfZXJyb3I7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFVSSUVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gYmluYXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHdlIHNlZW0gdG8gbmVlZCBET01Db250ZW50TG9hZGVkIGhlcmUsIGJlY2F1c2Ugc2NyaXB0IHRhZ3MsXG4vLyBpbmNsdWRpbmcgb3VyIG11c3RhY2hlIHRlbXBsYXRlcyBhcmVuJ3QgbmVjZXNzYXJpbHkgbG9hZGVkXG4vLyBvbiBkb2N1bWVudC5sb2FkKCkuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZXYgPT4ge1xuICAvLyBlaXRoZXIgSFRNTDUgb3IgRmxhc2ggYXJlIGF2YWlsYWJsZVxubGV0IHRoZVdlYmNhbSA9IG51bGw7XG5sZXQgdGhlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYScpXG5sZXQgcGFnZSA9IDBcbnZhciBqYyA9IG5ldyBKcGVnQ2FtZXJhKHRoZUNvbnRhaW5lciwge1xuICAgIG9uSW5pdDogKHdlYmNhbSkgPT4ge1xuICAgICAgLy8gaGVyZSB5b3UgY2FuIGRvIHNvbWUgaW5pdGlhbGlzYXRpb24gaWYgcmVxdWlyZWQuXG4gICAgICAvLyBzYXZlIHRoZSBtb2R1bGUgcmVmZXJlbmNlIHNvIHdlIGNhbiBjYWxsIGl0XG4gICAgICB0aGVXZWJjYW0gPSB3ZWJjYW07XG4gICAgfSxcbiAgICBvblJlYWR5OiAoc3BlY3MpID0+IHsgIH0sXG4gICAgb25FcnJvcjogKGVycikgPT4geyAvKiBkbyBzb21ldGhpbmcgd2hlbiB0aGVyZSdzIGFuIGVycm9yICovIH0sXG4gICAgb25EZWJ1ZzogKGRlYnVnKSA9PiB7IGNvbnNvbGUubG9nKGRlYnVnKTsgfSxcbiAgICBzaHV0dGVyOiBmYWxzZSxcbiAgICBtaXJyb3I6IGZhbHNlLFxuICAgIHByZXZpZXdNaXJyb3I6IGZhbHNlLFxuICB9KTtcbiBcbiAgdmFyIHNuYXBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25hcGJ0bicpO1xuXG4gIHNuYXBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKGV2KSB7XG4gIFx0dmFyIHNuYXBzaG90ID0gdGhlV2ViY2FtLmNhcHR1cmUoKTtcblx0c25hcHNob3QuZ2V0QmxvYihmdW5jdGlvbihibG9iKSB7XG5cdFx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsIGZ1bmN0aW9uKCkge1xuIFx0XHRcdC8vIHJlYWRlci5yZXN1bHQgY29udGFpbnMgdGhlIGNvbnRlbnRzIG9mIGJsb2IgYXMgYSB0eXBlZCBhcnJheVxuXHRcdFx0dmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5cdFx0XHR2YXIgbWFpbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgICAgXHRcdG1haW5DYW52YXMud2lkdGggPSAyMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluQ2FudmFzLmhlaWdodCA9IDIwMDtcblx0XHRcdHZhciBjdHggPSBtYWluQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRcdHZhciBzdHJCbG9iID0gQXJyYXlCdWZmZXJUb1N0cmluZyhyZWFkZXIucmVzdWx0KTtcblx0XHRcdHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLDIwMCwyMDApO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBqYW5vc2gucHVibGlzaChcInN1Ym1pdFwiLFwiV1wiLG1haW5DYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiKSk7XG5cdFx0XHR9XG5cdFx0XHRpbWcuc3JjID0gXCJkYXRhOmltYWdlL2pwZWc7YmFzZTY0LFwiKyBidG9hKHN0ckJsb2IpO1xuXHRcdH0pO1xuXHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcblx0fSlcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW1hZ2UoYmFzZTY0KSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWFnZXNcIik7XG4gICAgICAgIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cblxuXHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1hZ2VzXCIpO1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LnN0eWxlPVwiZGlzcGxheTogaW5saW5lO1wiO1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUw9XCJYXCI7XG4gICAgICAgIGJ1dHRvbi5zdHlsZT1cImRpc3BsYXk6IGJsb2NrO1wiO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgaW1nLnNyYz1iYXNlNjQ7XG4gICAgICAgIGltZy5zdHlsZT1cIndpZHRoOjIwMHB4OyBoZWlnaHQ6MjAwcHg7XCI7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfTtcbiAgXG4gIGphbm9zaC5zdWJzY3JpYmUoXCJub3RpZnlcIiwgKHZhbHVlKSA9PiB7XG4gIH0pXG5cbiAgamFub3NoLm9uUmVjZWl2ZSgodmFsdWUpID0+IHtcblx0aWYodmFsdWUgPT0gXCJjaGVhdFwiKVxuXHRcdGFsZXJ0KFwiUGxlYXNlIGRvbid0IGNoZWF0LiBTdWJtaXQgcHJvcGVyIHNuYXBzaG90c1wiKTtcblx0ZWxzZVxuXHRcdG1ha2VJbWFnZSh2YWx1ZSk7XG4gIH0pO1xuXG4gIGphbm9zaC5vbkVycm9yKChlcnJvcikgPT4ge1xuICB9KTtcbn0pO1xuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiSnBlZ0NhbWVyYVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJKcGVnQ2FtZXJhXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzZWxmKSB7XG5cdHZhciBfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gdHJ1ZTtcblx0dmFyIF9kaWRJdGVyYXRvckVycm9yID0gZmFsc2U7XG5cdHZhciBfaXRlcmF0b3JFcnJvciA9IHVuZGVmaW5lZDtcblxuXHR0cnkge1xuXHRcdGZvciAodmFyIF9pdGVyYXRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNlbGYuY29uc3RydWN0b3IucHJvdG90eXBlKVtTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwOyAhKF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSAoX3N0ZXAgPSBfaXRlcmF0b3IubmV4dCgpKS5kb25lKTsgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWUpIHtcblx0XHRcdHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcblxuXHRcdFx0dmFyIHZhbCA9IHNlbGZba2V5XTtcblxuXHRcdFx0aWYgKGtleSAhPT0gJ2NvbnN0cnVjdG9yJyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHNlbGZba2V5XSA9IHZhbC5iaW5kKHNlbGYpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0X2RpZEl0ZXJhdG9yRXJyb3IgPSB0cnVlO1xuXHRcdF9pdGVyYXRvckVycm9yID0gZXJyO1xuXHR9IGZpbmFsbHkge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gJiYgX2l0ZXJhdG9yLnJldHVybikge1xuXHRcdFx0XHRfaXRlcmF0b3IucmV0dXJuKCk7XG5cdFx0XHR9XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdGlmIChfZGlkSXRlcmF0b3JFcnJvcikge1xuXHRcdFx0XHR0aHJvdyBfaXRlcmF0b3JFcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gc2VsZjtcbn07XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hZGRQcmVmaXhlZFN0eWxlID0gZXhwb3J0cy5pc0NhbnZhc1N1cHBvcnRlZCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9zbmFwc2hvdCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbnZhciBfc25hcHNob3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc25hcHNob3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgaXNDYW52YXNTdXBwb3J0ZWQgPSBleHBvcnRzLmlzQ2FudmFzU3VwcG9ydGVkID0gZnVuY3Rpb24gaXNDYW52YXNTdXBwb3J0ZWQoKSB7XG4gIHJldHVybiAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQ7XG59O1xuXG4vLyBIZWxwZXIgZm9yIHNldHRpbmcgcHJlZml4ZWQgQ1NTIGRlY2xhcmF0aW9ucy5cbi8vXG4vLyBAbm9kb2Ncbi8vIEBwcml2YXRlXG52YXIgYWRkUHJlZml4ZWRTdHlsZSA9IGV4cG9ydHMuYWRkUHJlZml4ZWRTdHlsZSA9IGZ1bmN0aW9uIGFkZFByZWZpeGVkU3R5bGUodGhlRWxlbWVudCwgc3R5bGUsIHZhbHVlKSB7XG4gIHZhciBlbGVtZW50ID0gdGhlRWxlbWVudDtcbiAgdmFyIHVwcGVyY2FzZVN0eWxlID0gc3R5bGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHlsZS5zbGljZSgxKTtcbiAgZWxlbWVudC5zdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgZWxlbWVudC5zdHlsZVsnV2Via2l0JyArIHVwcGVyY2FzZVN0eWxlXSA9IHZhbHVlO1xuICBlbGVtZW50LnN0eWxlWydNb3onICsgdXBwZXJjYXNlU3R5bGVdID0gdmFsdWU7XG4gIGVsZW1lbnQuc3R5bGVbJ21zJyArIHVwcGVyY2FzZVN0eWxlXSA9IHZhbHVlO1xuICBlbGVtZW50LnN0eWxlWydPJyArIHVwcGVyY2FzZVN0eWxlXSA9IHZhbHVlO1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLy8gQmFzZSBjbGFzcyBmb3IgSnBlZ0NhbWVyYSBpbXBsZW1lbnRhdGlvbnMuIFN1YmNsYXNzZXMgcHJvdmlkZSBmdW5jdGlvbmFsaXR5XG4vLyBkZWZpbmVkIGJ5IHRoaXMgQVBJIHVzaW5nIGRpZmZlcmVudCBlbmdpbmVzLiBPbiBzdXBwb3J0ZWQgYnJvd3NlcnMgSFRNTDVcbi8vIGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCwgb3RoZXJ3aXNlIEZsYXNoIHdpbGwgYmUgdXNlZCBpZiBhdmFpbGFibGUuXG5cbnZhciBKcGVnQ2FtZXJhQmFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgX2NyZWF0ZUNsYXNzKEpwZWdDYW1lcmFCYXNlLCBbe1xuICAgIGtleTogJ2NhbnZhc1N1cHBvcnRlZCcsXG5cblxuICAgIC8vIFRlbGxzIHdoZXRoZXIgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYGNhbnZhc2AgZWxlbWVudCBhbmQgeW91IGNhbiB1c2VcbiAgICAvLyB7U25hcHNob3QjZ2V0Q2FudmFzfSBtZXRob2QgdG8gZGlzcGxheSBzbmFwc2hvdHMgb3V0c2lkZSB0aGUgY2FtZXJhXG4gICAgLy8gY29udGFpbmVyLlxuICAgIC8vXG4gICAgLy8gQWxsIGJyb3dzZXJzIGV4Y2VwdCBJbnRlcm5ldCBFeHBsb3JlciA4IGFuZCBlYXJsaWVyIHN1cHBvcnQgYGNhbnZhc2BcbiAgICAvLyBlbGVtZW50LlxuICAgIC8vXG4gICAgLy8gQHJldHVybiBbQm9vbGVhbl0gVHJ1ZSBpZiBgY2FudmFzYCBpcyBzdXBwb3J0ZWQuXG5cblxuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cblxuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cblxuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cblxuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbnZhc1N1cHBvcnRlZCgpIHtcbiAgICAgIHJldHVybiBpc0NhbnZhc1N1cHBvcnRlZCgpO1xuICAgIH1cblxuICAgIC8vIENvbnN0cnVjdCBuZXcgY2FtZXJhLlxuICAgIC8vXG4gICAgLy8gSnBlZ0NhbWVyYSB3aWxsIGZpbGwgdGhlIGVudGlyZSBjb250YWluZXIgZWxlbWVudC4gSWYgdGhlIGVsZW1lbnQncyBhc3BlY3RcbiAgICAvLyByYXRpbyBpcyBkaWZmZXJlbnQgdGhhbiB0aGF0IG9mIHRoZSBjYW1lcmEgc3RyZWFtICh1c3VhbGx5IDQ6MywgYnV0XG4gICAgLy8gc29tZXRpbWVzIDE2OjkpIHRoZSBzdHJlYW0gd2lsbCBiZSBjbGlwcGVkIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5LlxuICAgIC8vXG4gICAgLy8gVG8gZGlzcGxheSB0aGUgaW1hZ2Ugb24gdGhlIGNsaWVudCBzaWRlIHRoZSBpbWFnZSBtaWdodCBhZGRpdGlvbmFsbHkgZ2V0XG4gICAgLy8gcmVzaXplZCB0byBtYXRjaCBjb250YWluZXIgZWxlbWVudCwgYnV0IHRoZSBmaWxlIHNlbnQgdG8gdGhlIHNlcnZlciB3aWxsXG4gICAgLy8gYWx3YXlzIGJlIGluIGNhbWVyYSdzIG5hdGl2ZSByZXNvbHV0aW9uLlxuICAgIC8vXG4gICAgLy8gQnkgZGVzaWduIHRoZSBmaWxlIHNlbnQgdG8gdGhlIHNlcnZlciB3aWxsIG9ubHkgY29udGFpbiB0aGUgYXJlYSB0aGF0IHdhc1xuICAgIC8vIHZpc2libGUgdG8gdGhlIHVzZXIgZHVyaW5nIGNhcHR1cmUuIFRoZXJlIGlzIG5vIHdheSBvZiBzZW5kaW5nIHVuY2xpcHBlZCxcbiAgICAvLyBmdWxsIGNhbWVyYSBmcmFtZSB3aXRob3V0IHNob3dpbmcgdGhlIHdob2xlIGZyYW1lIHRvIHRoZSB1c2VyLlxuICAgIC8vXG4gICAgLy8gUmVzaXppbmcgY29udGFpbmVyIGFmdGVyIHRoZSBjYW1lcmEgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgaXMgbm90IHN1cHBvcnRlZC5cbiAgICAvL1xuICAgIC8vIFZhcmlvdXMgb3B0aW9ucyBwcm92aWRlZCBoZXJlIGNhbiBiZSBvdmVyd3JpdHRlbiB3aGVuIGNhbGxpbmdcbiAgICAvLyB7SnBlZ0NhbWVyYSNjYXB0dXJlIGNhcHR1cmV9IG9yIHtTbmFwc2hvdCN1cGxvYWR9LlxuICAgIC8vXG4gICAgLy8gQHBhcmFtIGNvbnRhaW5lciBbRE9NRWxlbWVudCwgU3RyaW5nXSBET00gZWxlbWVudCBvciBlbGVtZW50J3MgSUQuXG4gICAgLy9cbiAgICAvLyBAb3B0aW9uIG9wdGlvbnMgc3dmVXJsIFtTdHJpbmddIFVSTCB0byB0aGUgU1dGIGZpbGUgdGhhdCBzaG91bGQgYmUgdXNlZFxuICAgIC8vICAgZm9yIGZhbGxiYWNrIGlmIEhUTUw1IGNhbm5vdCBiZSB1c2VkLiAnL2pwZWdfY2FtZXJhL2pwZWdfY2FtZXJhLnN3ZicgYnlcbiAgICAvLyAgIGRlZmF1bHQuXG4gICAgLy8gQG9wdGlvbiBvcHRpb25zIHNodXR0ZXJNcDNVcmwgW1N0cmluZ10gVVJMIHRvIHRoZSBzaHV0dGVyIG1wMyBzb3VuZCBmaWxlLlxuICAgIC8vICAgVXNlZCBieSBmbGFzaC4gJy9qcGVnX2NhbWVyYS9zaHV0dGVyLm1wMycgYnkgZGVmYXVsdC5cbiAgICAvLyBAb3B0aW9uIG9wdGlvbnMgc2h1dHRlck9nZ1VybCBbU3RyaW5nXSBVUkwgdG8gdGhlIHNodXR0ZXIgb2dnIHNvdW5kIGZpbGUuXG4gICAgLy8gICBVc2VkIGJ5IEhUTUw1LiAnL2pwZWdfY2FtZXJhL3NodXR0ZXIub2dnJyBieSBkZWZhdWx0LlxuICAgIC8vIEBvcHRpb24gb3B0aW9ucyBvblJlYWR5IFtGdW5jdGlvbl0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNhbWVyYSBpcyByZWFkeS5cbiAgICAvLyAgIEluc2lkZSB0aGUgY2FsbGJhY2sgY2FtZXJhIG9iamVjdCBjYW4gYmUgYWNjZXNzZWQgYXMgYHRoaXNgLiBUaGlzXG4gICAgLy8gICBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgb2JqZWN0IHdpdGggYHZpZGVvV2lkdGhgIGFuZCBgdmlkZW9IZWlnaHRgXG4gICAgLy8gICBwcm9wZXJ0aWVzIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4gVGhlc2UgaW5kaWNhdGUgY2FtZXJhJ3MgbmF0aXZlXG4gICAgLy8gICByZXNvbHV0aW9uLiBTZWUgYWxzbyB7SnBlZ0NhbWVyYSNyZWFkeX0uXG4gICAgLy8gQG9wdGlvbiBvcHRpb25zIG9uRGVidWcgW0Z1bmN0aW9uXSBUaGlzIGNhbGxiYWNrIGNhbiBiZSB1c2VkIHRvIGxvZyB2YXJpb3VzXG4gICAgLy8gICBldmVudHMgYW5kIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHVzZWZ1bCB3aGVuIGRlYnVnZ2luZyBKcGVnQ2FtZXJhLiBEZWJ1Z1xuICAgIC8vICAgbWVzc2FnZSB3aWxsIGJlIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQuIEluc2lkZSB0aGUgY2FsbGJhY2sgY2FtZXJhXG4gICAgLy8gICBvYmplY3QgY2FuIGJlIGFjY2Vzc2VkIGFzIGB0aGlzYC4gVGhlcmUgaXMgYSBkZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mXG4gICAgLy8gICB0aGlzIGNhbGxiYWNrIHRoYXQgbG9ncyBtZXNzYWdlcyB0byB3aW5kb3cuY29uc29sZSBpZiBhdmFpbGFibGUuXG4gICAgLy8gQG9wdGlvbiBvcHRpb25zIHJlc29sdXRpb24gW051bWJlcl0gVGhlIGhvcml6b250YWwgcmVzb2x1dGlvbiB0byBhc2sgY2FtZXJhIGZvciB3aGVuXG4gICAgLy8gICBpbml0aWFsaXNpbmcuIENhbWVyYSB3aWxsIGJlIGluaXRpYWxpc2VkIGF0IGNsb3Nlc3QgYWxsb3dlZCBob3Jpem9udGFsIHJlc29sdXRpb24uXG4gICAgLy8gQG9wdGlvbiBvcHRpb25zIHF1YWxpdHkgW0Zsb2F0XSBRdWFsaXR5IG9mIHRoZSBKUEVHIGZpbGUgdGhhdCB3aWxsIGJlXG4gICAgLy8gICB1cGxvYWRlZCB0byB0aGUgc2VydmVyLiBTaG91bGQgYmUgYmV0d2VlbiAwIGFuZCAxLiAwLjkgYnkgZGVmYXVsdC4gQ2FuIGJlXG4gICAgLy8gICBvdmVyd3JpdHRlbiB3aGVuIGNhbGxpbmcge0pwZWdDYW1lcmEjY2FwdHVyZSBjYXB0dXJlfS4gX0Nhbm5vdF8gYmVcbiAgICAvLyAgIG92ZXJ3cml0dGVuIGF0IHRoZSB0aW1lIG9mIHVwbG9hZC5cbiAgICAvLyBAb3B0aW9uIG9wdGlvbnMgbWlycm9yIFtCb29sZWFuXSBUaGUgdmlkZW8gc3RyZWFtIGFuZCBpbWFnZXMgZGlzcGxheWVkIG9uXG4gICAgLy8gICB0aGUgY2xpZW50IHNpZGUgbWltaWMgYSBtaXJyb3IsIGJlY2F1c2UgdGhhdCdzIGhvdyBwZW9wbGUgYXJlIHVzZWQgdG9cbiAgICAvLyAgIHNlZWluZyB0aGVtc2VsdmVzLiBCeSBkZWZhdWx0IGltYWdlcyBhcmUgdXBsb2FkZWQgdG8gdGhlIHNlcnZlciBpbiB0aGVpclxuICAgIC8vICAgbmF0dXJhbCBvcmllbnRhdGlvbiAtIGhvdyB0aGUgZnJvbnQgZmFjaW5nIGNhbWVyYSBzZWVzIHRoZSB1c2VyLlxuICAgIC8vICAgVGhpcyBvcHRpb24gY2FuIGJlIHNldCB0byB0cnVlIHRvIHVwbG9hZCBpbWFnZXMgdGhlIHdheSB0aGUgdXNlciBzZWVzXG4gICAgLy8gICB0aGVtLiBDYW4gYmUgb3ZlcndyaXR0ZW4gd2hlbiBjYWxsaW5nIHtKcGVnQ2FtZXJhI2NhcHR1cmUgY2FwdHVyZX0uXG4gICAgLy8gICBfQ2Fubm90XyBiZSBvdmVyd3JpdHRlbiBhdCB0aGUgdGltZSBvZiB1cGxvYWQuXG4gICAgLy8gQG9wdGlvbiBvcHRpb25zIHNodXR0ZXIgW0Jvb2xlYW5dIFdoZXRoZXIgdG8gcGxheSBzaHV0dGVyIHNvdW5kIHdoZW5cbiAgICAvLyAgIGNhcHR1cmluZyBzbmFwc2hvdHMuIENhbiBiZSBvdmVyd3JpdHRlbiB3aGVuIGNhbGxpbmdcbiAgICAvLyAgIHtKcGVnQ2FtZXJhI2NhcHR1cmUgY2FwdHVyZX0uXG5cblxuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cblxuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cblxuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cblxuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cbiAgICAvLyBAbm9kb2NcbiAgICAvLyBAcHJpdmF0ZVxuXG4gIH1dKTtcblxuICBmdW5jdGlvbiBKcGVnQ2FtZXJhQmFzZSh0aGVDb250YWluZXIsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSnBlZ0NhbWVyYUJhc2UpO1xuXG4gICAgdGhpcy5kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIHNodXR0ZXJPZ2dVcmw6IG51bGwsXG4gICAgICBzaHV0dGVyTXAzVXJsOiBudWxsLFxuICAgICAgc3dmVXJsOiBudWxsLFxuICAgICAgb25EZWJ1ZzogZnVuY3Rpb24gb25EZWJ1ZyhtZXNzYWdlKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUubG9nKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKCdKcGVnQ2FtZXJhOiAnICsgbWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuXG4gICAgICByZXNvbHV0aW9uOiAzODQwLFxuICAgICAgcXVhbGl0eTogMC45LFxuICAgICAgc2h1dHRlcjogdHJ1ZSxcbiAgICAgIG1pcnJvcjogZmFsc2UsXG4gICAgICBwcmV2aWV3TWlycm9yOiB0cnVlLFxuICAgICAgc2NhbGU6IDEuMCxcbiAgICAgIGFjY2Vzc01lc3NhZ2U6ICdQbGVhc2UgYWxsb3cgY2FtZXJhIGFjY2VzcyB3aGVuIHByb21wdGVkIGJ5IHRoZSBicm93c2VyLjxicj48YnI+JyArICdMb29rIGZvciBjYW1lcmEgaWNvbiBhcm91bmQgeW91ciBhZGRyZXNzIGJhci4nXG4gICAgfTtcbiAgICB0aGlzLmlzUmVhZHkgPSBmYWxzZTtcbiAgICB0aGlzLmVycm9yT2NjdXJlZCA9IGZhbHNlO1xuICAgIHRoaXMuc3RhdHNDYXB0dXJlU2NhbGUgPSAwLjI7XG4gICAgdGhpcy5zbmFwc2hvdHMgPSB7fTtcbiAgICB0aGlzLmRpc3BsYXllZFNuYXBzaG90ID0gbnVsbDtcbiAgICB0aGlzLm92ZXJsYXkgPSBudWxsO1xuICAgIHRoaXMudmlld1dpZHRoID0gbnVsbDtcbiAgICB0aGlzLnZpZXdIZWlnaHQgPSBudWxsO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9IHRoZUNvbnRhaW5lcjtcbiAgICBpZiAodHlwZW9mIGNvbnRhaW5lciA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lci5yZXBsYWNlKCcjJywgJycpKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbnRhaW5lciB8fCAhY29udGFpbmVyLm9mZnNldFdpZHRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pwZWdDYW1lcmE6IGludmFsaWQgY29udGFpbmVyJyk7XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMudmlld1dpZHRoID0gcGFyc2VJbnQoY29udGFpbmVyLm9mZnNldFdpZHRoLCAxMCk7XG4gICAgdGhpcy52aWV3SGVpZ2h0ID0gcGFyc2VJbnQoY29udGFpbmVyLm9mZnNldEhlaWdodCwgMTApO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgdGhpcy5jb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcblxuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEpwZWdDYW1lcmFCYXNlLCBbe1xuICAgIGtleTogJ3Jlc2l6ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZShjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0KSB7XG4gICAgICB0aGlzLnZpZXdXaWR0aCA9IHBhcnNlSW50KGNvbnRhaW5lcldpZHRoLCAxMCk7XG4gICAgICB0aGlzLnZpZXdIZWlnaHQgPSBwYXJzZUludChjb250YWluZXJIZWlnaHQsIDEwKTtcbiAgICAgIHRoaXMucmVzaXplUHJldmlldygpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQmluZCBjYWxsYmFjayBmb3IgY2FtZXJhIHJlYWR5IGV2ZW50LlxuICAgIC8vXG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhbGxiYWNrIHNldCB1c2luZyBfX29uUmVhZHlfXyBvcHRpb24gZHVyaW5nIGluaXRpYWxpemF0aW9uLlxuICAgIC8vXG4gICAgLy8gSWYgdGhlIGV2ZW50IGhhcyBhbHJlYWR5IGhhcHBlbmVkIHRoZSBhcmd1bWVudCB3aWxsIGJlIGNhbGxlZCBpbW1lZGlhdGVseS5cbiAgICAvL1xuICAgIC8vIEBwYXJhbSBjYWxsYmFjayBbRnVuY3Rpb25dIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjYW1lcmEgaXMgcmVhZHkuIENhbWVyYVxuICAgIC8vICAgb2JqZWN0IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGB0aGlzYC4gVGhpcyBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgb2JqZWN0IHdpdGhcbiAgICAvLyAgIGB2aWRlb1dpZHRoYCBhbmQgYHZpZGVvSGVpZ2h0YCBwcm9wZXJ0aWVzIGFzIHRoZSBmaXJzdCBhcmd1bWVudC4gVGhlc2VcbiAgICAvLyAgIGluZGljYXRlIGNhbWVyYSdzIG5hdGl2ZSByZXNvbHV0aW9uLlxuICAgIC8vXG4gICAgLy8gQHJldHVybiBbSnBlZ0NhbWVyYUJhc2VdIFNlbGYgZm9yIGNoYWluaW5nLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdyZWFkeScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9wdGlvbnMub25SZWFkeSA9IGNhbGxiYWNrO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5vblJlYWR5ICYmIHRoaXMuaXNSZWFkeSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMub25SZWFkeS5jYWxsKHRoaXMsIHtcbiAgICAgICAgICB2aWRlb1dpZHRoOiB0aGlzLnZpZGVvV2lkdGgsXG4gICAgICAgICAgdmlkZW9IZWlnaHQ6IHRoaXMudmlkZW9IZWlnaHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBQZWFrIGludG8gdmlkZW8gc3RyZWFtIGFuZCBjYWxjdWxhdGUgcGl4ZWwgc3RhdGlzdGljcy5cbiAgICAvL1xuICAgIC8vIENhbiBiZSB1c2VmdWwgdG8gZ2l2ZSB0aGUgdXNlciBoaW50cyBhYm91dCBiYWQgbGlnaHRpbmcuIEl0IHVzZXMgZnVsbFxuICAgIC8vIGNhcHR1cmUgYXJlYSwgYnV0IGF0IG11Y2ggbG93ZXIgcmVzb2x1dGlvbi4gSXQncyBtb3JlIGVmZmljaWVudCB0aGFuIHRha2luZ1xuICAgIC8vIGEgcmVndWxhciBjYXB0dXJlIGFuZCBjYWxsaW5nIHtTbmFwc2hvdCNnZXRTdGF0c30uXG4gICAgLy9cbiAgICAvLyBCZWNhdXNlIHJlYWRpbmcgaW1hZ2UgZGF0YSBjYW4gdGFrZSBhIHdoaWxlIHdoZW4gRmxhc2ggZmFsbGJhY2sgaXMgYmVpbmdcbiAgICAvLyB1c2VkIHRoaXMgbWV0aG9kIGRvZXMgbm90IHJldHVybiB0aGUgZGF0YSBpbW1lZGlhdGVseS4gSW5zdGVhZCBpdCBhY2NlcHRzXG4gICAgLy8gYSBjYWxsYmFjayB0aGF0IGxhdGVyIHdpbGwgYmUgY2FsbGVkIHdpdGggYSB7U3RhdHN9IGluc3RhbmNlIGFzIGFuIGFyZ3VtZW50LlxuICAgIC8vIFRoZSBjYW1lcmEgb2JqZWN0IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGB0aGlzYC5cbiAgICAvL1xuICAgIC8vIEBwYXJhbSBjYWxsYmFjayBbRnVuY3Rpb25dIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBkYXRhIGlzIGF2YWlsYWJsZS4gQ2FtZXJhXG4gICAgLy8gICBvYmplY3Qgd2lsbCBiZSBhdmFpbGFibGUgYXMgYHRoaXNgLCB0aGUge1N0YXRzfSBpbnN0YW5jZSB3aWxsIGJlIHBhc3NlZFxuICAgIC8vICAgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICAgIC8vXG4gICAgLy8gQHJldHVybiBbdm9pZF1cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0U3RhdHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGF0cyhjYWxsYmFjaykge1xuICAgICAgdmFyIHNuYXBzaG90ID0gbmV3IF9zbmFwc2hvdDIuZGVmYXVsdCh0aGlzLCB7fSk7XG5cbiAgICAgIHRoaXMuZW5naW5lQ2FwdHVyZShzbmFwc2hvdCwgZmFsc2UsIDAuMSwgdGhpcy5zdGF0c0NhcHR1cmVTY2FsZSk7XG5cbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHJldHVybiBzbmFwc2hvdC5nZXRTdGF0cyhmdW5jdGlvbiAoc3RhdHMpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhhdCwgc3RhdHMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ2FwdHVyZSBjYW1lcmEgc25hcHNob3QuXG4gICAgLy9cbiAgICAvLyBBbGwgb2YgdGhlIG9wdGlvbnMgY2FuIGhhdmUgdGhlaXIgZGVmYXVsdHMgc2V0IHdoZW4gY29uc3RydWN0aW5nIGNhbWVyYVxuICAgIC8vIG9iamVjdC5cbiAgICAvL1xuICAgIC8vIEBvcHRpb24gb3B0aW9ucyBxdWFsaXR5IFtGbG9hdF0gUXVhbGl0eSBvZiB0aGUgSlBFRyBmaWxlIHRoYXQgd2lsbCBiZVxuICAgIC8vICAgdXBsb2FkZWQgdG8gdGhlIHNlcnZlci4gU2hvdWxkIGJlIGJldHdlZW4gMCBhbmQgMS4gRGVmYXVsdHMgdG8gMC45IG9yXG4gICAgLy8gICB3aGF0ZXZlciB3YXMgc2V0IGR1cmluZyBjYW1lcmEgaW5pdGlhbGl6YXRpb24uIF9DYW5ub3RfIGJlXG4gICAgLy8gICBvdmVyd3JpdHRlbiBhdCB0aGUgdGltZSBvZiB1cGxvYWQuXG4gICAgLy8gQG9wdGlvbiBvcHRpb25zIG1pcnJvciBbQm9vbGVhbl0gVGhlIHZpZGVvIHN0cmVhbSBhbmQgaW1hZ2VzIGRpc3BsYXllZCBvblxuICAgIC8vICAgdGhlIGNsaWVudCBzaWRlIG1pbWljIGEgbWlycm9yLCBiZWNhdXNlIHRoYXQncyBob3cgcGVvcGxlIGFyZSB1c2VkIHRvXG4gICAgLy8gICBzZWVpbmcgdGhlbXNlbHZlcy4gQnkgZGVmYXVsdCBpbWFnZXMgYXJlIHVwbG9hZGVkIHRvIHRoZSBzZXJ2ZXIgaW4gdGhlaXJcbiAgICAvLyAgIG5hdHVyYWwgb3JpZW50YXRpb24gLSBob3cgdGhlIGZyb250IGZhY2luZyBjYW1lcmEgc2VlcyB0aGUgdXNlci5cbiAgICAvLyAgIFRoaXMgb3B0aW9uIGNhbiBiZSBzZXQgdG8gdHJ1ZSB0byB1cGxvYWQgaW1hZ2VzIHRoZSB3YXkgdGhlIHVzZXIgc2Vlc1xuICAgIC8vICAgdGhlbS4gX0Nhbm5vdF8gYmUgb3ZlcndyaXR0ZW4gYXQgdGhlIHRpbWUgb2YgdXBsb2FkLlxuICAgIC8vIEBvcHRpb24gb3B0aW9ucyBzY2FsZSBbRmxvYXRdIEJ5IGRlZmF1bHQgc25hcHNob3RzIGFyZSBjYXB0dXJlZCBhbmQgdXBsb2FkZWRcbiAgICAvLyAgIHVzaW5nIGhpZ2hlc3QgcG9zc2libGUgcmVzb2x1dGlvbi4gU2V0IHRoaXMgdG8gYSBudW1iZXIgbGVzcyB0aGFuIDEuMCB0b1xuICAgIC8vICAgZ2V0IHNtYWxsZXIgc25hcHNob3RzLlxuICAgIC8vIEBvcHRpb24gb3B0aW9ucyBzaHV0dGVyIFtCb29sZWFuXSBXaGV0aGVyIHRvIHBsYXkgdGhlIHNodXR0ZXIgc291bmQuXG4gICAgLy9cbiAgICAvLyBAcmV0dXJuIFtTbmFwc2hvdF0gVGhlIHNuYXBzaG90IHRoYXQgd2FzIHRha2VuLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdjYXB0dXJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FwdHVyZShuZXdPcHRpb25zKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucyk7XG4gICAgICBpZiAobmV3T3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywgbmV3T3B0aW9ucyk7XG4gICAgICB9XG4gICAgICB2YXIgc25hcHNob3QgPSBuZXcgX3NuYXBzaG90Mi5kZWZhdWx0KHRoaXMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5zbmFwc2hvdHNbc25hcHNob3QuaWRdID0gc25hcHNob3Q7XG5cbiAgICAgIGlmIChvcHRpb25zLnNodXR0ZXIpIHtcbiAgICAgICAgdGhpcy5lbmdpbmVQbGF5U2h1dHRlclNvdW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzY2FsZSA9IE1hdGgubWluKDEuMCwgb3B0aW9ucy5zY2FsZSk7XG4gICAgICBzY2FsZSA9IE1hdGgubWF4KDAuMDEsIHNjYWxlKTtcblxuICAgICAgdGhpcy5lbmdpbmVDYXB0dXJlKHNuYXBzaG90LCBvcHRpb25zLm1pcnJvciwgb3B0aW9ucy5xdWFsaXR5LCBzY2FsZSk7XG5cbiAgICAgIHJldHVybiBzbmFwc2hvdDtcbiAgICB9XG5cbiAgICAvLyBIaWRlIGN1cnJlbnRseSBkaXNwbGF5ZWQgc25hcHNob3QgYW5kIHNob3cgdGhlIHZpZGVvIHN0cmVhbS5cbiAgICAvL1xuICAgIC8vIEByZXR1cm4gW0pwZWdDYW1lcmFCYXNlXSBTZWxmIGZvciBjaGFpbmluZy5cblxuICB9LCB7XG4gICAga2V5OiAnc2hvd1N0cmVhbScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dTdHJlYW0oKSB7XG4gICAgICB0aGlzLmVuZ2luZVNob3dTdHJlYW0oKTtcbiAgICAgIHRoaXMuZGlzcGxheWVkU25hcHNob3QgPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gRGlzY2FyZCBhbGwgc25hcHNob3RzIGFuZCBzaG93IHZpZGVvIHN0cmVhbS5cbiAgICAvL1xuICAgIC8vIEByZXR1cm4gW0pwZWdDYW1lcmFCYXNlXSBTZWxmIGZvciBjaGFpbmluZy5cblxuICB9LCB7XG4gICAga2V5OiAnZGlzY2FyZEFsbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2NhcmRBbGwoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5kaXNwbGF5ZWRTbmFwc2hvdCkge1xuICAgICAgICB0aGlzLnNob3dTdHJlYW0oKTtcbiAgICAgIH1cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3BhbnNob3RzKS5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciBzbmFwc2hvdCA9IF90aGlzLnNuYXBzaG90c1tpZF07XG4gICAgICAgIF90aGlzLmVuZ2luZURpc2NhcmQoc25hcHNob3QpO1xuICAgICAgICBzbmFwc2hvdC5kaXNjYXJkZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zbmFwc2hvdHMgPSB7fTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIExvZyBkZWJ1ZyBtZXNzYWdlc1xuICAgIC8vXG4gICAgLy8gQG5vZG9jXG4gICAgLy8gQHByaXZhdGVcblxuICB9LCB7XG4gICAga2V5OiAnZGVidWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZWJ1ZyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLm9uRGVidWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5vbkRlYnVnLmNhbGwodGhpcywgbWVzc2FnZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBAbm9kb2NcbiAgICAvLyBAcHJpdmF0ZVxuXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzcGxheShzbmFwc2hvdCkge1xuICAgICAgdGhpcy5lbmdpbmVEaXNwbGF5KHNuYXBzaG90KTtcbiAgICAgIHRoaXMuZGlzcGxheWVkU25hcHNob3QgPSBzbmFwc2hvdDtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXllZFNuYXBzaG90O1xuICAgIH1cblxuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cbiAgfSwge1xuICAgIGtleTogJ2Rpc2NhcmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjYXJkKHNuYXBzaG90KSB7XG4gICAgICBpZiAodGhpcy5kaXNwbGF5ZWRTbmFwc2hvdCA9PT0gc25hcHNob3QpIHtcbiAgICAgICAgdGhpcy5zaG93U3RyZWFtKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmVuZ2luZURpc2NhcmQoc25hcHNob3QpO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBzbmFwc2hvdC5kaXNjYXJkZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGRlbGV0ZSB0aGlzLnNuYXBzaG90c1tzbmFwc2hvdC5pZF07XG4gICAgfVxuXG4gICAgLy8gQ2FsbGVkIGJ5IHRoZSBlbmdpbmUgd2hlbiBjYW1lcmEgaXMgcmVhZHkuXG4gICAgLy9cbiAgICAvLyBAbm9kb2NcbiAgICAvLyBAcHJpdmF0ZVxuXG4gIH0sIHtcbiAgICBrZXk6ICdwcmVwYXJlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZXBhcmVkKHZpZGVvV2lkdGgsIHZpZGVvSGVpZ2h0KSB7XG4gICAgICB0aGlzLnZpZGVvV2lkdGggPSB2aWRlb1dpZHRoO1xuICAgICAgdGhpcy52aWRlb0hlaWdodCA9IHZpZGVvSGVpZ2h0O1xuXG4gICAgICAvLyBYWFggU2luY2UgdGhpcyBtZXRob2QgaXMgY2FsbGVkIGZyb20gaW5zaWRlIHRoZSBGbGFzaCBvYmplY3QsIHdlIG5lZWQgdG9cbiAgICAgIC8vIHJldHVybiBjb250cm9sIHRvIG1ha2UgZmxhc2ggb2JqZWN0IHVzYWJsZSBhZ2Fpbi5cbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoYXQud2FpdFVudGlsU3RyZWFtTG9va3NPayh0cnVlKTtcbiAgICAgIH0sIDEpO1xuICAgIH1cblxuICAgIC8vIFRoaXMgcGVha3MgaW50byB0aGUgdmlkZW8gc3RyZWFtIHVzaW5nIHZlcnkgc21hbGwgcmVuZGVyaW5nIGFuZCBjYWxjdWxhdGVzXG4gICAgLy8gY29sb3JzIG1lYW4gdmFsdWUgYW5kIHN0YW5kYXJkIGRldmlhdGlvbi4gSWYgc3RhbmRhcmQgZGV2aWF0aW9uIGlzXG4gICAgLy8gbmVnbGlnaWJsZSB0aGVuIHdlIGFzc3VtZSBjYW1lcmEgaXNuJ3QgcmVhZHkgeWV0IGFuZCB3YWl0IGEgbGl0dGxlIGxvbmdlci5cbiAgICAvL1xuICAgIC8vIEBub2RvY1xuICAgIC8vIEBwcml2YXRlXG5cbiAgfSwge1xuICAgIGtleTogJ3dhaXRVbnRpbFN0cmVhbUxvb2tzT2snLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3YWl0VW50aWxTdHJlYW1Mb29rc09rKHNob3dEZWJ1Zykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiB0aGlzLmdldFN0YXRzKGZ1bmN0aW9uIChzdGF0cykge1xuICAgICAgICBpZiAoc3RhdHMuc3RkID4gMikge1xuICAgICAgICAgIF90aGlzMi5kZWJ1ZygnU3RyZWFtIG1lYW4gZ3JheSB2YWx1ZSA9ICcgKyBzdGF0cy5tZWFuICsgJyBzdGFuZGFyZCBkZXZpYXRpb24gPSAnICsgc3RhdHMuc3RkKTtcbiAgICAgICAgICBfdGhpczIuZGVidWcoJ0NhbWVyYSBpcyByZWFkeScpO1xuXG4gICAgICAgICAgX3RoaXMyLmlzUmVhZHkgPSB0cnVlO1xuICAgICAgICAgIGlmIChfdGhpczIub3B0aW9ucy5vblJlYWR5KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLm9wdGlvbnMub25SZWFkeS5jYWxsKF90aGlzMiwge1xuICAgICAgICAgICAgICB2aWRlb1dpZHRoOiBfdGhpczIudmlkZW9XaWR0aCxcbiAgICAgICAgICAgICAgdmlkZW9IZWlnaHQ6IF90aGlzMi52aWRlb0hlaWdodFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzaG93RGVidWcpIHtcbiAgICAgICAgICAgIF90aGlzMi5kZWJ1ZygnU3RyZWFtIG1lYW4gZ3JheSB2YWx1ZSA9ICcgKyBzdGF0cy5tZWFuICsgJyBzdGFuZGFyZCBkZXZpYXRpb24gPSAnICsgc3RhdHMuc3RkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHRoYXQgPSBfdGhpczI7XG4gICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoYXQud2FpdFVudGlsU3RyZWFtTG9va3NPayhmYWxzZSk7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2hvd3MgYW4gb3ZlcmxheSBvdmVyIHRoZSBjb250YWluZXIgdG8gYmxvY2sgbW91c2UgYWNjZXNzLlxuICAgIC8vXG4gICAgLy8gUHJldmVudHMgY2hhbmdpbmcgZmxhc2ggcGVybWlzc2lvbiBhZnRlciBjYW1lcmEgaGFzIGJlZW4gZW5hYmxlZCBvciBzdG9wcGluZ1xuICAgIC8vIHRoZSBIVE1MNSB2aWRlbyBzdHJlYW0gLSBib3RoIG9wdGlvbnMgYXZhaWxhYmxlIHRocm91Z2ggY29udGV4dCBtZW51IG9mXG4gICAgLy8gRmxhc2ggb2JqZWN0IG9yIDx2aWRlbz4gZWxlbWVudHMuXG4gICAgLy9cbiAgICAvLyBAbm9kb2NcbiAgICAvLyBAcHJpdmF0ZVxuXG4gIH0sIHtcbiAgICBrZXk6ICdibG9ja0VsZW1lbnRBY2Nlc3MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibG9ja0VsZW1lbnRBY2Nlc3MoKSB7XG4gICAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLnRvcCA9IDA7XG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGUubGVmdCA9IDA7XG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gMjtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEpwZWdDYW1lcmFCYXNlO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBKcGVnQ2FtZXJhQmFzZTtcblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vXG4vLyBDb250YWlucyBwb3NzaWJsZSBlcnJvciBzdGF0ZXMgb2YgdGhlIGNvbXBvbmVudC5cbi8vIFRoaXMgb2JqZWN0IGlzIHRocm93biBmcm9tIGNvbXBvbmVudCBpbiBjYXNlIG9mIHByb2JsZW1zLlxuLy9cbnZhciBXZWJjYW1FcnJvciA9IGV4cG9ydHMuV2ViY2FtRXJyb3IgPSBmdW5jdGlvbiBXZWJjYW1FcnJvcihlcnJvckNvZGUpIHtcbiAgdmFyIGRldGFpbHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG5cbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYmNhbUVycm9yKTtcblxuICB0aGlzLmVycm9yID0gZXJyb3JDb2RlO1xuICB0aGlzLmRldGFpbHMgPSBkZXRhaWxzO1xufTtcblxudmFyIFdlYmNhbUVycm9ycyA9IGV4cG9ydHMuV2ViY2FtRXJyb3JzID0ge1xuICBJTkNPUlJFQ1RfSU5JVElBTElTQVRJT046ICdJTkNPUlJFQ1RfSU5JVElBTElTQVRJT04nLFxuICBVTktOT1dOX0VSUk9SOiAnVU5LTk9XTl9FUlJPUicsXG4gIEdFVF9NRURJQV9GQUlMRURfSU5JVDogJ0dFVF9NRURJQV9GQUlMRURfSU5JVCcsXG4gIEZMQVNIX0ZBSUxFRF9MT0FESU5HOiAnRkxBU0hfRkFJTEVEX0xPQURJTkcnLFxuICBGTEFTSF9XSU5ET1dfVE9PX1NNQUxMOiAnRkxBU0hfV0lORE9XX1RPT19TTUFMTCcsXG4gIENBTUVSQV9OT1RfUkVBRFk6ICdDQU1FUkFfTk9UX1JFQURZJyxcbiAgR0VORVJJQ19FUlJPUjogJ0dFTkVSSUNfRVJST1InLFxuICBOT19HRVRfTUVESUFfTk9SX0ZMQVNIX0FWQUlMQUJMRTogJ05PX0dFVF9NRURJQV9OT1JfRkxBU0hfQVZBSUxBQkxFJ1xufTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfanBlZ19jYW1lcmFfaHRtbCA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbnZhciBfanBlZ19jYW1lcmFfaHRtbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9qcGVnX2NhbWVyYV9odG1sKTtcblxudmFyIF9qcGVnX2NhbWVyYV9mbGFzaCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbnZhciBfanBlZ19jYW1lcmFfZmxhc2gyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfanBlZ19jYW1lcmFfZmxhc2gpO1xuXG52YXIgX2Vycm9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmlmICghbmF2aWdhdG9yLmdldFVzZXJNZWRpYSkge1xuICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhID0gbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhIHx8IG5hdmlnYXRvci5tc0dldFVzZXJNZWRpYTtcbn1cbmlmICghd2luZG93LkF1ZGlvQ29udGV4dCkge1xuICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbn1cblxuLyoqXG4gKiBAb3B0aW9uIG9wdGlvbnMgZG9udENoZWNrRmxhc2ggW0Jvb2xlYW5dIC0gaWYgdGhpcyBvcHRpb24gaXMgc2V0IHRoZSBlbmdpbmUgd2lsbFxuICogICB0cnkgdGhlIEhUTUw1IHZlcnNpb24gZmlyc3QgYW5kIGlmIHRoaXMgZmFpbHMgaXQgd2lsbCByZW5kZXIgdGhlIGZsYXNoIG9iamVjdFxuICogICB3aXRob3V0IHRyeWluZyB0byBkZXRlcm1pbmUgaWYgZmxhc2ggaXMgaW5zdGFsbGVkIGFuZCB3aGF0IHZlcnNpb24gaXMgaXQuXG4gKiAgIFRoaXMgaXMgcmVxdWlyZWQgZm9yIFNhZmFyaSAxMCB3aGljaCBoaWRlcyB0aGUgZmFjdCBvZiBGbGFzaCBiZWluZyBpbnN0YWxsZWQgKGJ1dCBkaXNhYmxlZFxuICogICBieSBkZWZhdWx0KS4gUmVuZGVyaW5nIHRoZSBGbGFzaCBvYmplY3Qgd2lsbCB0cmlnZ2VyIGNvbmZpcm1hdGlvbiBkaWFsb2cgXCJXb3VsZCB5b3UgbGlrZVxuICogICB0byB1c2UgRmxhc2hcIi4gV0FSTklORyAtIGZvcmNpbmcgcmVuZGVyIGluIHN1Y2ggd2F5IG1lYW5zIHRoYXQgdGhlIG9uRXJyb3Igd2lsbCBuZXZlciBnZXRcbiAqICAgZXhlY3V0ZWQgaW4gY2FzZSB0aGUgY2xpZW50IGRpc2FsbG93IEZsYXNoIHRvIHJ1bi5cbiAqL1xuXG52YXIgSnBlZ0NhbWVyYSA9IGZ1bmN0aW9uIEpwZWdDYW1lcmEoY29udGFpbmVyLCBvcHRpb25zKSB7XG4gIHZhciBodG1sNUluaXQgPSBmdW5jdGlvbiBodG1sNUluaXQoKSB7XG4gICAgcmV0dXJuIG5ldyBfanBlZ19jYW1lcmFfaHRtbDIuZGVmYXVsdChjb250YWluZXIsIG9wdGlvbnMpO1xuICB9O1xuICB2YXIgZmxhc2hJbml0ID0gZnVuY3Rpb24gZmxhc2hJbml0KCkge1xuICAgIHJldHVybiBuZXcgX2pwZWdfY2FtZXJhX2ZsYXNoMi5kZWZhdWx0KGNvbnRhaW5lciwgb3B0aW9ucyk7XG4gIH07XG4gIHZhciBpbml0RXJyb3IgPSBmdW5jdGlvbiBpbml0RXJyb3IoKSB7XG4gICAgdGhyb3cgbmV3IF9lcnJvcnMuV2ViY2FtRXJyb3IoX2Vycm9ycy5XZWJjYW1FcnJvcnMuTk9fR0VUX01FRElBX05PUl9GTEFTSF9BVkFJTEFCTEUpO1xuICB9O1xuXG4gIGlmICghb3B0aW9ucy5vbkluaXQpIHtcbiAgICB0aHJvdyBuZXcgX2Vycm9ycy5XZWJjYW1FcnJvcihfZXJyb3JzLldlYmNhbUVycm9ycy5JTkNPUlJFQ1RfSU5JVElBTElTQVRJT04pO1xuICB9XG5cbiAgX2pwZWdfY2FtZXJhX2h0bWwyLmRlZmF1bHQuZW5naW5lQ2hlY2soXG4gIC8qIHN1Y2Nlc3MgKi9mdW5jdGlvbiAoKSB7XG4gICAgb3B0aW9ucy5vbkluaXQoaHRtbDVJbml0KCkpO1xuICB9LFxuICAvKiBmYWlsdXJlICovZnVuY3Rpb24gKCkge1xuICAgIF9qcGVnX2NhbWVyYV9mbGFzaDIuZGVmYXVsdC5lbmdpbmVDaGVjayhcbiAgICAvKiBzdWNjZXNzICovZnVuY3Rpb24gKCkge1xuICAgICAgb3B0aW9ucy5vbkluaXQoZmxhc2hJbml0KCkpO1xuICAgIH0sXG4gICAgLyogZmFpbHVyZSAqL2Z1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvcHRpb25zLm9uRXJyb3IpIG9wdGlvbnMub25FcnJvcihpbml0RXJyb3IoKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSnBlZ0NhbWVyYTtcblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfYXV0b0JpbmQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgX2F1dG9CaW5kMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9CaW5kKTtcblxudmFyIF9qcGVnX2NhbWVyYSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbnZhciBfanBlZ19jYW1lcmEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfanBlZ19jYW1lcmEpO1xuXG52YXIgX2Vycm9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGNhblBsYXkgPSBmdW5jdGlvbiBjYW5QbGF5KHR5cGUpIHtcbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICByZXR1cm4gISEoZWxlbS5jYW5QbGF5VHlwZSAmJiBlbGVtLmNhblBsYXlUeXBlKHR5cGUpLnJlcGxhY2UoL25vLywgJycpKTtcbn07XG5cbi8vIEpwZWdDYW1lcmEgaW1wbGVtZW50YXRpb24gdGhhdCB1c2VzIF9nZXRVc2VyTWVkaWFfIHRvIGNhcHR1cmUgc25hcHNob3RzLFxuLy8gX2NhbnZhc19lbGVtZW50XyB0byBkaXNwbGF5IHRoZW0gYW5kIG9wdGlvbmFsbHkgX1dlYl9BdWRpb19BUElfIHRvIHBsYXkgc2h1dHRlciBzb3VuZC5cbi8vXG4vLyBAcHJpdmF0ZVxuXG52YXIgSnBlZ0NhbWVyYUh0bWw1ID0gZnVuY3Rpb24gKF9KcGVnQ2FtZXJhQmFzZSkge1xuICBfaW5oZXJpdHMoSnBlZ0NhbWVyYUh0bWw1LCBfSnBlZ0NhbWVyYUJhc2UpO1xuXG4gIGZ1bmN0aW9uIEpwZWdDYW1lcmFIdG1sNSh0aGVDb250YWluZXIsIG9wdGlvbnMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSnBlZ0NhbWVyYUh0bWw1KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChKcGVnQ2FtZXJhSHRtbDUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihKcGVnQ2FtZXJhSHRtbDUpKS5jYWxsKHRoaXMsIHRoZUNvbnRhaW5lciwgb3B0aW9ucykpO1xuXG4gICAgX3RoaXMud2FpdEZvclZpZGVvUmVhZHlUaW1lciA9IG51bGw7XG5cbiAgICBfdGhpcy5zdGF0dXNDaGVja3NDb3VudCA9IDA7XG4gICAgX3RoaXMudm9yYmlzQXVkaW8gPSAnYXVkaW8vb2dnOyBjb2RlY3M9dm9yYmlzJztcbiAgICBfdGhpcy5tcGVnQXVkaW8gPSAnYXVkaW8vbXBlZzsgJztcbiAgICBfdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICBfdGhpcy52aWRlb0NvbnRhaW5lciA9IG51bGw7XG4gICAgX3RoaXMuc3RyZWFtID0gbnVsbDtcbiAgICAoMCwgX2F1dG9CaW5kMi5kZWZhdWx0KShfdGhpcyk7XG4gICAgX3RoaXMuZW5naW5lSW5pdCgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhKcGVnQ2FtZXJhSHRtbDUsIFt7XG4gICAga2V5OiAnZGVzdHJ1Y3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdCgpIHtcbiAgICAgIHRoaXMud2FpdEZvclZpZGVvUmVhZHlUaW1lciA9IG51bGw7XG4gICAgICBpZiAodGhpcy52aWRlbykge1xuICAgICAgICB0aGlzLnZpZGVvLnBhdXNlKCk7XG4gICAgICAgIHRoaXMudmlkZW8uc3JjID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdHJlYW0pIHtcbiAgICAgICAgdGhpcy5zdHJlYW0uZ2V0VmlkZW9UcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaykge1xuICAgICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RyZWFtLmdldEF1ZGlvVHJhY2tzKCkuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgICAgICB0cmFjay5zdG9wKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZUluaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVJbml0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZGVidWcoJ1VzaW5nIEhUTUw1IGVuZ2luZS4nKTtcblxuICAgICAgdGhpcy5tZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLm1lc3NhZ2UuY2xhc3MgPSAnbWVzc2FnZSc7XG4gICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgKDAsIF9qcGVnX2NhbWVyYS5hZGRQcmVmaXhlZFN0eWxlKSh0aGlzLm1lc3NhZ2UsICdib3hTaXppbmcnLCAnYm9yZGVyLWJveCcpO1xuICAgICAgdGhpcy5tZXNzYWdlLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5tZXNzYWdlLnN0eWxlLnpJbmRleCA9IDM7XG4gICAgICB0aGlzLm1lc3NhZ2UuaW5uZXJIVE1MID0gdGhpcy5vcHRpb25zLmFjY2Vzc01lc3NhZ2U7XG5cbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubWVzc2FnZSk7XG5cbiAgICAgIHRoaXMudmlkZW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMudmlkZW9Db250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgIHRoaXMudmlkZW9Db250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy52aWRlb0NvbnRhaW5lci5zdHlsZS56SW5kZXggPSAxO1xuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvQ29udGFpbmVyKTtcbiAgICAgIHRoaXMucmVzaXplVmlkZW9Db250YWluZXIoKTtcblxuICAgICAgdGhpcy52aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICB0aGlzLnZpZGVvLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJldmlld01pcnJvcikgKDAsIF9qcGVnX2NhbWVyYS5hZGRQcmVmaXhlZFN0eWxlKSh0aGlzLnZpZGVvLCAndHJhbnNmb3JtJywgJ3NjYWxleCgtMS4wKScpO1xuXG4gICAgICBpZiAod2luZG93LkF1ZGlvQ29udGV4dCkge1xuICAgICAgICBpZiAoY2FuUGxheSh0aGlzLnZvcmJpc0F1ZGlvKSkge1xuICAgICAgICAgIHRoaXMubG9hZFNodXR0ZXJTb3VuZCh0aGlzLm9wdGlvbnMuc2h1dHRlck9nZ1VybCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2FuUGxheSh0aGlzLm1wZWdBdWRpbykpIHtcbiAgICAgICAgICB0aGlzLmxvYWRTaHV0dGVyU291bmQodGhpcy5vcHRpb25zLnNodXR0ZXJNcDNVcmwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBzdWNjZXNzID0gZnVuY3Rpb24gc3VjY2VzcyhzdHJlYW0pIHtcbiAgICAgICAgX3RoaXMyLnJlbW92ZU1lc3NhZ2UoKTtcbiAgICAgICAgX3RoaXMyLnN0cmVhbSA9IHN0cmVhbTtcblxuICAgICAgICBpZiAod2luZG93LlVSTCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfdGhpczIudmlkZW8uc3JjT2JqZWN0ID0gc3RyZWFtO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpczIudmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdHJlYW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczIudmlkZW8uc3JjID0gc3RyZWFtO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMyLmJsb2NrRWxlbWVudEFjY2VzcygpO1xuXG4gICAgICAgIHJldHVybiBfdGhpczIud2FpdEZvclZpZGVvUmVhZHkoKTtcbiAgICAgIH07XG5cbiAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHtcbiAgICAgICAgdmlkZW86IHtcbiAgICAgICAgICB3aWR0aDoge1xuICAgICAgICAgICAgbWluOiA2NDAsXG4gICAgICAgICAgICBpZGVhbDogdGhpcy5vcHRpb25zLnJlc29sdXRpb25cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGF1ZGlvOiBmYWxzZVxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoc3RyZWFtKSB7XG4gICAgICAgIGlmICghX3RoaXMyLnN0cmVhbSkge1xuICAgICAgICAgIHZhciB0cmFja3MgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKTtcbiAgICAgICAgICB2YXIgc2V0dGluZ3MgPSB0cmFja3NbMF0uZ2V0U2V0dGluZ3MoKTtcbiAgICAgICAgICBfdGhpczIuZGVidWcoJ0NhbWVyYSByZXNvbHV0aW9uICcgKyBzZXR0aW5ncy53aWR0aCArICd4JyArIHNldHRpbmdzLmhlaWdodCArICdweCcpO1xuICAgICAgICAgIHN1Y2Nlc3Moc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIF90aGlzMi5tZXNzYWdlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aHJvdyBuZXcgX2Vycm9ycy5XZWJjYW1FcnJvcihfZXJyb3JzLldlYmNhbUVycm9ycy5HRVRfTUVESUFfRkFJTEVEX0lOSVQsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2l6ZVByZXZpZXcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNpemVQcmV2aWV3KCkge1xuICAgICAgdGhpcy5yZXNpemVWaWRlb0NvbnRhaW5lcigpO1xuICAgICAgdGhpcy5yZXNpemVWaWRlb0JveCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2l6ZVZpZGVvQ29udGFpbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzaXplVmlkZW9Db250YWluZXIoKSB7XG4gICAgICB2YXIgdmVydGljYWxQYWRkaW5nID0gTWF0aC5mbG9vcih0aGlzLnZpZXdIZWlnaHQgKiAwLjIpO1xuICAgICAgdmFyIGhvcml6b250YWxQYWRkaW5nID0gTWF0aC5mbG9vcih0aGlzLnZpZXdXaWR0aCAqIDAuMik7XG4gICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUucGFkZGluZ1RvcCA9IHZlcnRpY2FsUGFkZGluZyArICdweCc7XG4gICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUucGFkZGluZ0JvdHRvbSA9IHZlcnRpY2FsUGFkZGluZyArICdweCc7XG4gICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUucGFkZGluZ0xlZnQgPSBob3Jpem9udGFsUGFkZGluZyArICdweCc7XG4gICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUucGFkZGluZ1JpZ2h0ID0gaG9yaXpvbnRhbFBhZGRpbmcgKyAncHgnO1xuICAgICAgdGhpcy52aWRlb0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMudmlld1dpZHRoICsgJ3B4JztcbiAgICAgIHRoaXMudmlkZW9Db250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy52aWV3SGVpZ2h0ICsgJ3B4JztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVQbGF5U2h1dHRlclNvdW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5naW5lUGxheVNodXR0ZXJTb3VuZCgpIHtcbiAgICAgIGlmICghdGhpcy5zaHV0dGVyQnVmZmVyKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgICBzb3VyY2UuYnVmZmVyID0gdGhpcy5zaHV0dGVyQnVmZmVyO1xuICAgICAgc291cmNlLmNvbm5lY3QodGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xuICAgICAgcmV0dXJuIHNvdXJjZS5zdGFydCgwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVDYXB0dXJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5naW5lQ2FwdHVyZSh0aGVTbmFwc2hvdCwgbWlycm9yLCBxdWFsaXR5LCBzY2FsZSkge1xuICAgICAgdmFyIHNuYXBzaG90ID0gdGhlU25hcHNob3Q7XG4gICAgICB2YXIgY3JvcCA9IHRoaXMuZ2V0Q2FwdHVyZUNyb3AoKTtcblxuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzLndpZHRoID0gTWF0aC5yb3VuZChjcm9wLndpZHRoICogc2NhbGUpO1xuICAgICAgY2FudmFzLmhlaWdodCA9IE1hdGgucm91bmQoY3JvcC5oZWlnaHQgKiBzY2FsZSk7XG5cbiAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBjb250ZXh0LmRyYXdJbWFnZSh0aGlzLnZpZGVvLCBjcm9wLnhPZmZzZXQsIGNyb3AueU9mZnNldCwgY3JvcC53aWR0aCwgY3JvcC5oZWlnaHQsIDAsIDAsIE1hdGgucm91bmQoY3JvcC53aWR0aCAqIHNjYWxlKSwgTWF0aC5yb3VuZChjcm9wLmhlaWdodCAqIHNjYWxlKSk7XG5cbiAgICAgIHNuYXBzaG90LmNhbnZhcyA9IGNhbnZhcztcbiAgICAgIHNuYXBzaG90Lm1pcnJvciA9IG1pcnJvcjtcbiAgICAgIHNuYXBzaG90LnF1YWxpdHkgPSBxdWFsaXR5O1xuXG4gICAgICByZXR1cm4gc25hcHNob3Q7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZURpc3BsYXkoc25hcHNob3QpIHtcbiAgICAgIGlmICh0aGlzLmRpc3BsYXllZGNhbnZhcykge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmRpc3BsYXllZGNhbnZhcyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZGlzcGxheWVkY2FudmFzID0gc25hcHNob3QuY2FudmFzO1xuICAgICAgdGhpcy5kaXNwbGF5ZWRjYW52YXMuc3R5bGUud2lkdGggPSB0aGlzLnZpZXdXaWR0aCArICdweCc7XG4gICAgICB0aGlzLmRpc3BsYXllZGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLnZpZXdIZWlnaHQgKyAncHgnO1xuICAgICAgdGhpcy5kaXNwbGF5ZWRjYW52YXMuc3R5bGUudG9wID0gMDtcbiAgICAgIHRoaXMuZGlzcGxheWVkY2FudmFzLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgdGhpcy5kaXNwbGF5ZWRjYW52YXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5kaXNwbGF5ZWRjYW52YXMuc3R5bGUuekluZGV4ID0gMjtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMucHJldmlld01pcnJvcikgKDAsIF9qcGVnX2NhbWVyYS5hZGRQcmVmaXhlZFN0eWxlKSh0aGlzLmRpc3BsYXllZGNhbnZhcywgJ3RyYW5zZm9ybScsICdzY2FsZXgoLTEuMCknKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZGlzcGxheWVkY2FudmFzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVHZXRjYW52YXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVHZXRjYW52YXMoc25hcHNob3QpIHtcbiAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGNhbnZhcy53aWR0aCA9IHNuYXBzaG90LmNhbnZhcy53aWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSBzbmFwc2hvdC5jYW52YXMuaGVpZ2h0O1xuICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHNuYXBzaG90LmNhbnZhcywgMCwgMCk7XG4gICAgICByZXR1cm4gY2FudmFzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZUdldEltYWdlRGF0YScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZUdldEltYWdlRGF0YShzbmFwc2hvdCkge1xuICAgICAgdmFyIGNhbnZhcyA9IHNuYXBzaG90LmNhbnZhcztcbiAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICByZXR1cm4gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVHZXRCbG9iJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5naW5lR2V0QmxvYihzbmFwc2hvdCwgbWltZSwgbWlycm9yLCBxdWFsaXR5LCBjYWxsYmFjaykge1xuICAgICAgdmFyIGNhbnZhcyA9IHZvaWQgMDtcbiAgICAgIGlmIChtaXJyb3IpIHtcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNuYXBzaG90LmNhbnZhcy53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNuYXBzaG90LmNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7IC8vIHJlc2V0IHRyYW5zZm9ybWF0aW9uIG1hdHJpeFxuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZShjYW52YXMud2lkdGgsIDApO1xuICAgICAgICBjb250ZXh0LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc25hcHNob3QuY2FudmFzLCAwLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbnZhcyA9IHNuYXBzaG90LmNhbnZhcztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbnZhcy50b0Jsb2IoZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGJsb2IpO1xuICAgICAgfSwgbWltZSwgcXVhbGl0eSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lRGlzY2FyZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZURpc2NhcmQoc25hcHNob3QpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgcmV0dXJuIGRlbGV0ZSBzbmFwc2hvdC5jYW52YXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lU2hvd1N0cmVhbScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZVNob3dTdHJlYW0oKSB7XG4gICAgICBpZiAodGhpcy5kaXNwbGF5ZWRjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5kaXNwbGF5ZWRjYW52YXMpO1xuICAgICAgICB0aGlzLmRpc3BsYXllZGNhbnZhcyA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLnZpZGVvQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlTWVzc2FnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZU1lc3NhZ2UoKSB7XG4gICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xvYWRTaHV0dGVyU291bmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2FkU2h1dHRlclNvdW5kKHVybCkge1xuICAgICAgaWYgKHRoaXMuYXVkaW9Db250ZXh0IHx8ICF1cmwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuXG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoYXQuYXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YShyZXF1ZXN0LnJlc3BvbnNlLCBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICAgICAgdGhhdC5zaHV0dGVyQnVmZmVyID0gYnVmZmVyO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gcmVxdWVzdC5zZW5kKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnd2FpdEZvclZpZGVvUmVhZHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3YWl0Rm9yVmlkZW9SZWFkeSgpIHtcbiAgICAgIHZhciB2aWRlb1dpZHRoID0gcGFyc2VJbnQodGhpcy52aWRlby52aWRlb1dpZHRoLCAxMCk7XG4gICAgICB2YXIgdmlkZW9IZWlnaHQgPSBwYXJzZUludCh0aGlzLnZpZGVvLnZpZGVvSGVpZ2h0LCAxMCk7XG5cbiAgICAgIGlmICh2aWRlb1dpZHRoID4gMCAmJiB2aWRlb0hlaWdodCA+IDApIHtcbiAgICAgICAgdGhpcy52aWRlb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnZpZGVvKTtcblxuICAgICAgICB0aGlzLnZpZGVvV2lkdGggPSB2aWRlb1dpZHRoO1xuICAgICAgICB0aGlzLnZpZGVvSGVpZ2h0ID0gdmlkZW9IZWlnaHQ7XG5cbiAgICAgICAgdGhpcy52aWRlby5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRoaXMucmVzaXplVmlkZW9Cb3goKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcmVwYXJlZCh0aGlzLnZpZGVvV2lkdGgsIHRoaXMudmlkZW9IZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1c0NoZWNrc0NvdW50ID4gMTAwKSB7XG4gICAgICAgIHRocm93IG5ldyBfZXJyb3JzLldlYmNhbUVycm9yKF9lcnJvcnMuV2ViY2FtRXJyb3IuQ0FNRVJBX05PVF9SRUFEWSk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXR1c0NoZWNrc0NvdW50Kys7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB0aGlzLndhaXRGb3JWaWRlb1JlYWR5VGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoYXQud2FpdEZvclZpZGVvUmVhZHkoKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXNpemVWaWRlb0JveCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZVZpZGVvQm94KCkge1xuICAgICAgdmFyIGNyb3AgPSB0aGlzLmdldFZpZGVvQ3JvcCgpO1xuICAgICAgdGhpcy52aWRlby5zdHlsZS53aWR0aCA9IGNyb3Aud2lkdGggKyAncHgnO1xuICAgICAgdGhpcy52aWRlby5zdHlsZS5oZWlnaHQgPSBjcm9wLmhlaWdodCArICdweCc7XG4gICAgICB0aGlzLnZpZGVvLnN0eWxlLmxlZnQgPSBjcm9wLnhPZmZzZXQgKyAncHgnO1xuICAgICAgdGhpcy52aWRlby5zdHlsZS50b3AgPSBjcm9wLnlPZmZzZXQgKyAncHgnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZpZGVvQ3JvcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZpZGVvQ3JvcCgpIHtcbiAgICAgIHZhciB2aWRlb1NjYWxlID0gdm9pZCAwO1xuICAgICAgdmFyIHZpZGVvUmF0aW8gPSB0aGlzLnZpZGVvV2lkdGggLyB0aGlzLnZpZGVvSGVpZ2h0O1xuICAgICAgdmFyIHZpZXdSYXRpbyA9IHRoaXMudmlld1dpZHRoIC8gdGhpcy52aWV3SGVpZ2h0O1xuXG4gICAgICBpZiAodmlkZW9SYXRpbyA+PSB2aWV3UmF0aW8pIHtcbiAgICAgICAgLy8gZmlsbCBoZWlnaHQsIGNyb3Agd2lkdGhcbiAgICAgICAgdGhpcy5kZWJ1ZygnRmlsbGluZyBoZWlnaHQnKTtcbiAgICAgICAgdmlkZW9TY2FsZSA9IHRoaXMudmlld0hlaWdodCAvIHRoaXMudmlkZW9IZWlnaHQ7XG4gICAgICAgIHZhciBzY2FsZWRWaWRlb1dpZHRoID0gTWF0aC5yb3VuZCh0aGlzLnZpZGVvV2lkdGggKiB2aWRlb1NjYWxlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiBzY2FsZWRWaWRlb1dpZHRoLFxuICAgICAgICAgIGhlaWdodDogdGhpcy52aWV3SGVpZ2h0LFxuICAgICAgICAgIHhPZmZzZXQ6IC1NYXRoLmZsb29yKChzY2FsZWRWaWRlb1dpZHRoIC0gdGhpcy52aWV3V2lkdGgpIC8gMi4wKSxcbiAgICAgICAgICB5T2Zmc2V0OiAwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyBmaWxsIHdpZHRoLCBjcm9wIGhlaWdodFxuICAgICAgdGhpcy5kZWJ1ZygnRmlsbGluZyB3aWR0aCcpO1xuICAgICAgdmlkZW9TY2FsZSA9IHRoaXMudmlld1dpZHRoIC8gdGhpcy52aWRlb1dpZHRoO1xuICAgICAgdmFyIHNjYWxlZFZpZGVvSGVpZ2h0ID0gTWF0aC5yb3VuZCh0aGlzLnZpZGVvSGVpZ2h0ICogdmlkZW9TY2FsZSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLnZpZXdXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBzY2FsZWRWaWRlb0hlaWdodCxcbiAgICAgICAgeE9mZnNldDogMCxcbiAgICAgICAgeU9mZnNldDogLU1hdGguZmxvb3IoKHNjYWxlZFZpZGVvSGVpZ2h0IC0gdGhpcy52aWV3SGVpZ2h0KSAvIDIuMClcbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2FwdHVyZUNyb3AnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDYXB0dXJlQ3JvcCgpIHtcbiAgICAgIHZhciB2aWRlb1JhdGlvID0gdGhpcy52aWRlb1dpZHRoIC8gdGhpcy52aWRlb0hlaWdodDtcbiAgICAgIHZhciB2aWV3UmF0aW8gPSB0aGlzLnZpZXdXaWR0aCAvIHRoaXMudmlld0hlaWdodDtcblxuICAgICAgaWYgKHZpZGVvUmF0aW8gPj0gdmlld1JhdGlvKSB7XG4gICAgICAgIC8vIHRha2UgZnVsbCBoZWlnaHQsIGNyb3Agd2lkdGhcbiAgICAgICAgdmFyIHNuYXBzaG90V2lkdGggPSBNYXRoLnJvdW5kKHRoaXMudmlkZW9IZWlnaHQgKiB2aWV3UmF0aW8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IHNuYXBzaG90V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLnZpZGVvSGVpZ2h0LFxuICAgICAgICAgIHhPZmZzZXQ6IE1hdGguZmxvb3IoKHRoaXMudmlkZW9XaWR0aCAtIHNuYXBzaG90V2lkdGgpIC8gMi4wKSxcbiAgICAgICAgICB5T2Zmc2V0OiAwXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICAvLyB0YWtlIGZ1bGwgd2lkdGgsIGNyb3AgaGVpZ2h0XG4gICAgICB2YXIgc25hcHNob3RIZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMudmlkZW9XaWR0aCAvIHZpZXdSYXRpbyk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiB0aGlzLnZpZGVvV2lkdGgsXG4gICAgICAgIGhlaWdodDogc25hcHNob3RIZWlnaHQsXG4gICAgICAgIHhPZmZzZXQ6IDAsXG4gICAgICAgIHlPZmZzZXQ6IE1hdGguZmxvb3IoKHRoaXMudmlkZW9IZWlnaHQgLSBzbmFwc2hvdEhlaWdodCkgLyAyLjApXG4gICAgICB9O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBKcGVnQ2FtZXJhSHRtbDU7XG59KF9qcGVnX2NhbWVyYTIuZGVmYXVsdCk7XG5cbkpwZWdDYW1lcmFIdG1sNS5lbmdpbmVDaGVjayA9IGZ1bmN0aW9uIChzdWNjZXNzLCBmYWlsdXJlKSB7XG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgaWYgKGNhbnZhcy5nZXRDb250ZXh0ICYmICFjYW52YXMudG9CbG9iKSB7XG4gICAgZmFpbHVyZSgnSnBlZ0NhbWVyYTogQ2FudmFzLXRvLUJsb2IgaXMgbm90IGxvYWRlZCcpO1xuICB9XG4gIHRyeSB7XG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5lbnVtZXJhdGVEZXZpY2VzKCkudGhlbihmdW5jdGlvbiAoZGV2aWNlcykge1xuICAgICAgaWYgKGRldmljZXMpIHtcbiAgICAgICAgc3VjY2VzcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmFpbHVyZSgpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZhaWx1cmUoKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZmFpbHVyZSgpO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBKcGVnQ2FtZXJhSHRtbDU7XG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2F1dG9CaW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9hdXRvQmluZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvQmluZCk7XG5cbnZhciBfc3RhdHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG52YXIgX3N0YXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRzKTtcblxudmFyIF9qcGVnX2NhbWVyYSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vIFNuYXBzaG90IHRha2VuIHVzaW5nIHtKcGVnQ2FtZXJhfS5cbnZhciBTbmFwc2hvdCA9IGZ1bmN0aW9uICgpIHtcblxuICAvLyBAbm9kb2NcbiAgLy8gQHByaXZhdGVcblxuXG4gIC8vIEBub2RvY1xuICAvLyBAcHJpdmF0ZVxuXG5cbiAgLy8gQG5vZG9jXG4gIC8vIEBwcml2YXRlXG5cblxuICAvLyBAbm9kb2NcbiAgLy8gQHByaXZhdGVcbiAgZnVuY3Rpb24gU25hcHNob3QoY2FtZXJhLCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNuYXBzaG90KTtcblxuICAgIHRoaXMubmV4dFNuYXBzaG90SWQgPSAxO1xuICAgIHRoaXMuZGlzY2FyZGVkID0gZmFsc2U7XG4gICAgdGhpcy5leHRyYUNhbnZhcyA9IG51bGw7XG4gICAgdGhpcy5ibG9iID0gbnVsbDtcbiAgICB0aGlzLmJsb2JNaW1lID0gbnVsbDtcbiAgICB0aGlzLmltYWdlRGF0YSA9IG51bGw7XG4gICAgdGhpcy5zdGF0cyA9IG51bGw7XG4gICAgdGhpcy5nZXRDYW52YXNUaW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmdldEJsb2JUaW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmdldEltYWdlRGF0YVRpbWVvdXQgPSBudWxsO1xuXG4gICAgKDAsIF9hdXRvQmluZDIuZGVmYXVsdCkodGhpcyk7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmlkID0gdGhpcy5uZXh0U25hcHNob3RJZCsrO1xuICB9XG5cbiAgLy8gRGlzcGxheSB0aGUgc25hcHNob3Qgd2l0aCB0aGUgY2FtZXJhIGVsZW1lbnQgaXQgd2FzIHRha2VuIHdpdGguXG4gIC8vXG4gIC8vIEByZXR1cm4gW1NuYXBzaG90XSBTZWxmIGZvciBjaGFpbmluZy5cblxuXG4gIC8vIEBub2RvY1xuICAvLyBAcHJpdmF0ZVxuXG4gIC8vIEBub2RvY1xuICAvLyBAcHJpdmF0ZVxuXG5cbiAgLy8gQG5vZG9jXG4gIC8vIEBwcml2YXRlXG5cbiAgLy8gU25hcHNob3QgSURzIGFyZSB1bmlxdWUgd2l0aGluIGJyb3dzZXIgc2Vzc2lvbi4gVGhpcyBjbGFzcyB2YXJpYWJsZSBob2xkc1xuICAvLyB0aGUgdmFsdWUgb2YgdGhlIG5leHQgSUQgdG8gdXNlLlxuICAvL1xuICAvLyBAbm9kb2NcbiAgLy8gQHByaXZhdGVcblxuXG4gIF9jcmVhdGVDbGFzcyhTbmFwc2hvdCwgW3tcbiAgICBrZXk6ICdzaG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIGlmICh0aGlzLmRpc2NhcmRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Rpc2NhcmRlZCBzbmFwc2hvdCBjYW5ub3QgYmUgdXNlZCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNhbWVyYS5kaXNwbGF5KHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gU3RvcCBkaXNwbGF5aW5nIHRoZSBzbmFwc2hvdCBhbmQgcmV0dXJuIHRvIHNob3dpbmcgbGl2ZSBjYW1lcmEgc3RyZWFtLlxuICAgIC8vXG4gICAgLy8gSWdub3JlZCBpZiBjYW1lcmEgaXMgZGlzcGxheWluZyBkaWZmZXJlbnQgc25hcHNob3QuXG4gICAgLy9cbiAgICAvLyBAcmV0dXJuIFtTbmFwc2hvdF0gU2VsZiBmb3IgY2hhaW5pbmcuXG5cbiAgfSwge1xuICAgIGtleTogJ2hpZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgaWYgKHRoaXMuY2FtZXJhLmRpc3BsYXllZFNuYXBzaG90KCkgPT09IHRoaXMpIHtcbiAgICAgICAgdGhpcy5jYW1lcmEuc2hvd1N0cmVhbSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIHNuYXBzaG90IHBpeGVsIHN0YXRpc3RpY3MgKG1lYW4gZ3JheSB2YWx1ZSwgc3RkKS5cbiAgICAvL1xuICAgIC8vIEJlY2F1c2UgcmVhZGluZyBpbWFnZSBkYXRhIGNhbiB0YWtlIGEgd2hpbGUgd2hlbiBGbGFzaCBmYWxsYmFjayBpcyBiZWluZ1xuICAgIC8vIHVzZWQgdGhpcyBtZXRob2QgZG9lcyBub3QgcmV0dXJuIHRoZSBkYXRhIGltbWVkaWF0ZWx5LiBJbnN0ZWFkIGl0IGFjY2VwdHNcbiAgICAvLyBhIGNhbGxiYWNrIHRoYXQgbGF0ZXIgd2lsbCBiZSBjYWxsZWQgd2l0aCBhIHtTdGF0c30gb2JqZWN0IGFzIGFuIGFyZ3VtZW50LlxuICAgIC8vIFNuYXBzaG90IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGB0aGlzYC5cbiAgICAvL1xuICAgIC8vIEBwYXJhbSBjYWxsYmFjayBbRnVuY3Rpb25dIEZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBkYXRhIGlzIGF2YWlsYWJsZS4gU25hcHNob3RcbiAgICAvLyAgIG9iamVjdCB3aWxsIGJlIGF2YWlsYWJsZSBhcyBgdGhpc2AsIHRoZSB7U3RhdHN9IGluc3RhbmNlIHdpbGwgYmUgcGFzc2VkXG4gICAgLy8gICBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXG4gICAgLy9cbiAgICAvLyBAcmV0dXJuIFt2b2lkXVxuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTdGF0cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXRzKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodGhpcy5kaXNjYXJkZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXNjYXJkZWQgc25hcHNob3QgY2Fubm90IGJlIHVzZWQnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0SW1hZ2VEYXRhKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jYWxjdWxhdGVTdGF0cyhkYXRhLCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBHZXQgY2FudmFzIGVsZW1lbnQgc2hvd2luZyB0aGUgc25hcHNob3QuXG4gICAgLy9cbiAgICAvLyBUaGlzIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgdGhlIHNuYXBzaG90IG91dHNpZGUgdGhlIGNhbWVyYSdzIGNvbnRhaW5lci5cbiAgICAvLyBZb3UgY2FuIHNob3cgbXVsdGlwbGUgc25hcHNob3RzIGF0IGEgdGltZSBhbmQgYWxsb3cgdGhlIHVzZXIgdG8gcGljayBvbmVcbiAgICAvLyBoZSBsaWtlcyBiZXN0LlxuICAgIC8vXG4gICAgLy8gQ2FudmFzIHByb2R1Y2VkIGJ5IHRoaXMgbWV0aG9kIGhhcyBhIHJlc29sdXRpb24gb2YgdGhlIHNuYXBzaG90ICh3aGljaFxuICAgIC8vIGRlcGVuZHMgb24gdGhlIGNhbWVyYSdzIG5hdGl2ZSByZXNvbHV0aW9uKSwgbm90IHRoYXQgb2YgdGhlIGNhbWVyYSdzXG4gICAgLy8gY29udGFpbmVyLiBVc2UgQ1NTIHRvIGRpc3BsYXkgdGhpcyBjYW52YXMgaW4gZGlmZmVyZW50IHNpemVzLlxuICAgIC8vXG4gICAgLy8gQmVjYXVzZSByZWFkaW5nIGltYWdlIGRhdGEgY2FuIHRha2UgYSB3aGlsZSB3aGVuIEZsYXNoIGZhbGxiYWNrIGlzIGJlaW5nXG4gICAgLy8gdXNlZCB0aGlzIG1ldGhvZCBkb2VzIG5vdCByZXR1cm4gdGhlIGBjYW52YXNgIGVsZW1lbnQgaW1tZWRpYXRlbHkuIEluc3RlYWRcbiAgICAvLyBpdCBhY2NlcHRzIGEgY2FsbGJhY2sgdGhhdCBsYXRlciB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBgY2FudmFzYCBlbGVtZW50IGFzXG4gICAgLy8gYW4gYXJndW1lbnQuIFNuYXBzaG90IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGB0aGlzYC5cbiAgICAvL1xuICAgIC8vIE11bHRpcGxlIGNhbGxzIHRvIHRoaXMgbWV0aG9kIHdpbGwgeWllbGQgdGhlIHNhbWUgY2FudmFzIGVsZW1lbnQuXG4gICAgLy9cbiAgICAvLyBPbmUgY2F2ZWF0IGlzIHRoYXQgdGhlIHVuZGVybGF5aW5nIGRhdGEgb2YgdGhpcyBjYW52YXMgaXMgbm90IG1pcnJvcmVkIGxpa2VcbiAgICAvLyB0aGUgc3RyZWFtIHNob3duIGluIHRoZSBjYW1lcmEgY29udGFpbmVyLiBTcGVjaWFsIENTUyB0cmFuc2Zvcm0gZGlyZWN0aXZlXG4gICAgLy8gaXMgYXBwbGllZCBvbiBpdCBzbyB0aGF0IGl0IGxvb2tzIGxpa2UgdGhlIHBpY3R1cmUgaW4gdGhlIGNhbWVyYSB3aGVuXG4gICAgLy8gZGlzcGxheWVkLiBUaGlzIG9ubHkgbWF0dGVycyB3aGVuIG1hbmlwdWxhdGluZyB0aGUgY2FudmFzIG9yIHJlYWRpbmcgaXQnc1xuICAgIC8vIGRhdGEuIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IG1pcnJvcmluZyBpbiB7SnBlZ0NhbWVyYSNjYXB0dXJlfS5cbiAgICAvL1xuICAgIC8vIFRoaXMgbWV0aG9kIGRvZXNuJ3Qgd29yayBpbiBJbnRlcm5ldCBFeHBsb3JlciA4IG9yIGVhcmxpZXIsIGJlY2F1c2UgaXQgZG9lc1xuICAgIC8vIG5vdCBzdXBwb3J0IGBjYW52YXNgIGVsZW1lbnQuIENhbGwge2lzQ2FudmFzU3VwcG9ydGVkfSB0byBsZWFyblxuICAgIC8vIHdoZXRoZXIgeW91IGNhbiB1c2UgdGhpcyBtZXRob2QuXG4gICAgLy9cbiAgICAvLyBAcGFyYW0gY2FsbGJhY2sgW0Z1bmN0aW9uXSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gYGNhbnZhc2AgZWxlbWVudCBpc1xuICAgIC8vICAgYXZhaWxhYmxlLiBTbmFwc2hvdCBvYmplY3Qgd2lsbCBiZSBhdmFpbGFibGUgYXMgYHRoaXNgLCB0aGUgYGNhbnZhc2BcbiAgICAvLyAgIGVsZW1lbnQgd2lsbCBiZSBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICAgIC8vXG4gICAgLy8gQHJldHVybiBbQm9vbGVhbl0gV2hldGhlciBjYW52YXMgaXMgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3Nlci5cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q2FudmFzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2FudmFzKGNhbGxiYWNrKSB7XG4gICAgICBpZiAodGhpcy5kaXNjYXJkZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXNjYXJkZWQgc25hcHNob3QgY2Fubm90IGJlIHVzZWQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoMCwgX2pwZWdfY2FtZXJhLmlzQ2FudmFzU3VwcG9ydGVkKSgpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdGhpcy5nZXRDYW52YXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhhdC5leHRyYUNhbnZhcykge1xuICAgICAgICAgIHRoYXQuZXh0cmFDYW52YXMgPSB0aGF0LmNhbWVyYS5lbmdpbmVHZXRDYW52YXModGhhdCk7XG4gICAgICAgIH1cbiAgICAgICAgKDAsIF9qcGVnX2NhbWVyYS5hZGRQcmVmaXhlZFN0eWxlKSh0aGF0LmV4dHJhQ2FudmFzLCAndHJhbnNmb3JtJywgJ3NjYWxleCgtMS4wKScpO1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGF0LCB0aGF0LmV4dHJhQ2FudmFzKTtcbiAgICAgIH0sIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBmaWxlIHRoYXQgd291bGQgYmUgdXBsb2FkZWQgdG8gdGhlIHNlcnZlciBhcyBhIEJsb2Igb2JqZWN0LlxuICAgIC8vXG4gICAgLy8gVGhpcyBjYW4gYmUgdXNlZnVsIGlmIHlvdSB3YW50IHRvIHN0cmVhbSB0aGUgZGF0YSB2aWEgYSB3ZWJzb2NrZXQuIE5vdGUgdGhhdFxuICAgIC8vIHVzaW5nIGB1cGxvYWRgIGlzIG1vcmUgZWZmaWNpZW50IGlmIGFsbCB5b3Ugd2FudCB0byBkbyBpcyB1cGxvYWQgdGhpcyBmaWxlXG4gICAgLy8gdG8gYSBzZXJ2ZXIgdmlhIFBPU1QgY2FsbC5cbiAgICAvL1xuICAgIC8vIFRoaXMgbWV0aG9kIGRvZXNuJ3Qgd29yayBpbiBJbnRlcm5ldCBFeHBsb3JlciA4IG9yIGVhcmxpZXIsIGJlY2F1c2UgaXQgZG9lc1xuICAgIC8vIG5vdCBzdXBwb3J0IGBjYW52YXNgIGVsZW1lbnQuIENhbGwge2lzQ2FudmFzU3VwcG9ydGVkfSB0byBsZWFyblxuICAgIC8vIHdoZXRoZXIgeW91IGNhbiB1c2UgdGhpcyBtZXRob2QuXG4gICAgLy9cbiAgICAvLyBCZWNhdXNlIHByZXBhcmluZyBpbWFnZSBibG9iIGNhbiB0YWtlIGEgd2hpbGUgdGhpcyBtZXRob2QgZG9lcyBub3QgcmV0dXJuXG4gICAgLy8gdGhlIGRhdGEgaW1tZWRpYXRlbHkuIEluc3RlYWQgaXQgYWNjZXB0cyBhIGNhbGxiYWNrIHRoYXQgbGF0ZXIgd2lsbCBiZVxuICAgIC8vIGNhbGxlZCB3aXRoIHRoZSBkYXRhIG9iamVjdCBhcyBhbiBhcmd1bWVudC4gU25hcHNob3Qgd2lsbCBiZSBhdmFpbGFibGUgYXNcbiAgICAvLyBgdGhpc2AuXG4gICAgLy9cbiAgICAvLyBNdWx0aXBsZSBjYWxscyB0byB0aGlzIG1ldGhvZCB3aWxsIHlpZWxkIHRoZSBzYW1lIGRhdGEgb2JqZWN0LlxuICAgIC8vXG4gICAgLy8gQHBhcmFtIGNhbGxiYWNrIFtGdW5jdGlvbl0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGRhdGEgaXMgYXZhaWxhYmxlLiBTbmFwc2hvdFxuICAgIC8vICAgb2JqZWN0IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGB0aGlzYCwgdGhlIGJsb2Igb2JqZWN0IHdpbGwgYmUgcGFzc2VkIGFzIHRoZVxuICAgIC8vICAgZmlyc3QgYXJndW1lbnQuXG4gICAgLy8gQHBhcmFtIG1pbWVUeXBlIFtTdHJpbmddIE1pbWUgdHlwZSBvZiB0aGUgcmVxdWVzdGVkIGJsb2IuIFwiaW1hZ2UvanBlZ1wiIGJ5XG4gICAgLy8gICBkZWZhdWx0LlxuICAgIC8vXG4gICAgLy8gQHJldHVybiBbQm9vbGVhbl0gV2hldGhlciBjYW52YXMgaXMgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3Nlci5cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0QmxvYicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEJsb2IoY2FsbGJhY2ssIG1pbWVUeXBlKSB7XG4gICAgICB2YXIgdGhlTWltZVR5cGUgPSBtaW1lVHlwZTtcbiAgICAgIGlmICh0aGVNaW1lVHlwZSA9PSBudWxsKSB7XG4gICAgICAgIHRoZU1pbWVUeXBlID0gJ2ltYWdlL2pwZWcnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGlzY2FyZGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGlzY2FyZGVkIHNuYXBzaG90IGNhbm5vdCBiZSB1c2VkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKDAsIF9qcGVnX2NhbWVyYS5pc0NhbnZhc1N1cHBvcnRlZCkoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHRoaXMuZ2V0QmxvYlRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoYXQuYmxvYk1pbWUgIT09IHRoZU1pbWVUeXBlKSB7XG4gICAgICAgICAgdGhhdC5ibG9iID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGF0LmJsb2JNaW1lID0gdGhlTWltZVR5cGU7XG4gICAgICAgIGlmICh0aGF0LmJsb2IpIHtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGF0LCB0aGF0LmJsb2IpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtaXJyb3IgPSB0aGF0Lm9wdGlvbnMubWlycm9yO1xuICAgICAgICB2YXIgcXVhbGl0eSA9IHRoYXQub3B0aW9ucy5xdWFsaXR5O1xuXG4gICAgICAgIHJldHVybiB0aGF0LmNhbWVyYS5lbmdpbmVHZXRCbG9iKHRoYXQsIHRoZU1pbWVUeXBlLCBtaXJyb3IsIHF1YWxpdHksIGZ1bmN0aW9uIChiKSB7XG4gICAgICAgICAgdGhhdC5ibG9iID0gYjtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGF0LCB0aGF0LmJsb2IpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDEpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gR2V0IEltYWdlRGF0YSBvYmplY3QgY29udGFpbmluZyBjb2xvciB2YWx1ZXMgZm9yIGVhY2ggcGl4ZWwgb2YgdGhlIHNuYXBzaG90LlxuICAgIC8vXG4gICAgLy8gRGF0YSBwcm9kdWNlZCBieSB0aGlzIG1ldGhvZCBoYXMgYSByZXNvbHV0aW9uIG9mIHRoZSBzbmFwc2hvdCAod2hpY2ggZGVwZW5kc1xuICAgIC8vIG9uIHRoZSBjYW1lcmEncyBuYXRpdmUgcmVzb2x1dGlvbiksIG5vdCB0aGF0IG9mIHRoZSBjYW1lcmEncyBjb250YWluZXIuXG4gICAgLy9cbiAgICAvLyBSZWFkIG1vcmUgYWJvdXQgSW1hZ2VEYXRhIG9iamVjdCBvbiBbTW96aWxsYSdzIHdlYnNpdGVcbiAgICAvLyBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbWFnZURhdGEpLlxuICAgIC8vXG4gICAgLy8gQmVjYXVzZSByZWFkaW5nIGltYWdlIGRhdGEgY2FuIHRha2UgYSB3aGlsZSB3aGVuIEZsYXNoIGZhbGxiYWNrIGlzIGJlaW5nXG4gICAgLy8gdXNlZCB0aGlzIG1ldGhvZCBkb2VzIG5vdCByZXR1cm4gdGhlIGRhdGEgaW1tZWRpYXRlbHkuIEluc3RlYWQgaXQgYWNjZXB0c1xuICAgIC8vIGEgY2FsbGJhY2sgdGhhdCBsYXRlciB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBkYXRhIG9iamVjdCBhcyBhbiBhcmd1bWVudC5cbiAgICAvLyBTbmFwc2hvdCB3aWxsIGJlIGF2YWlsYWJsZSBhcyBgdGhpc2AuXG4gICAgLy9cbiAgICAvLyBNdWx0aXBsZSBjYWxscyB0byB0aGlzIG1ldGhvZCB3aWxsIHlpZWxkIHRoZSBzYW1lIGRhdGEgb2JqZWN0LlxuICAgIC8vXG4gICAgLy8gT25lIGNhdmVhdCBpcyB0aGF0IHRoZSByZXR1cm5lZCBkYXRhIGlzIG5vdCBtaXJyb3JlZCBsaWtlIHRoZSBzdHJlYW0gc2hvd25cbiAgICAvLyBpbiB0aGUgY2FtZXJhIGNvbnRhaW5lci4gVGhpcyBvbmx5IG1hdHRlcnMgd2hlbiBtYW5pcHVsYXRpbmcgdGhlIGNhbnZhcyBvclxuICAgIC8vIHJlYWRpbmcgaXQncyBkYXRhLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBtaXJyb3JpbmcgaW5cbiAgICAvLyB7SnBlZ0NhbWVyYSNjYXB0dXJlfS5cbiAgICAvL1xuICAgIC8vIFRoaXMgbWV0aG9kIHJldHVybnMgbmF0aXZlIFtJbWFnZURhdGFcbiAgICAvLyBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9JbWFnZURhdGEpIG9iamVjdCBpbiBhbGxcbiAgICAvLyBicm93c2VycyBleGNlcHQgSW50ZXJuZXQgRXhwbG9yZXIgOCBvciBlYXJsaWVyIHdoaWNoIGRvZXMgbm90IHN1cHBvcnRcbiAgICAvLyB0aGUgYGNhbnZhc2AgZWxlbWVudC4gSW4gdGhhdCBicm93c2VyIGEgZ2VuZXJpYyBKYXZhU2NyaXB0IG9iamVjdCB3aWxsIGJlXG4gICAgLy8gcmV0dXJuZWQgdGhhdCBtaW1pY3MgdGhlIG5hdGl2ZSBmb3JtYXQuIENhbGwge2lzQ2FudmFzU3VwcG9ydGVkfVxuICAgIC8vIHRvIGxlYXJuIHdoZXRoZXIgYGNhbnZhc2AgaXMgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyLlxuICAgIC8vXG4gICAgLy8gQHBhcmFtIGNhbGxiYWNrIFtGdW5jdGlvbl0gRnVuY3Rpb24gdG8gY2FsbCB3aGVuIGRhdGEgaXMgYXZhaWxhYmxlLiBTbmFwc2hvdFxuICAgIC8vICAgb2JqZWN0IHdpbGwgYmUgYXZhaWxhYmxlIGFzIGB0aGlzYCwgdGhlIGRhdGEgd2lsbCBiZSBwYXNzZWQgYXMgdGhlXG4gICAgLy8gICBmaXJzdCBhcmd1bWVudC5cbiAgICAvL1xuICAgIC8vIEByZXR1cm4gW3ZvaWRdXG5cbiAgfSwge1xuICAgIGtleTogJ2dldEltYWdlRGF0YScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEltYWdlRGF0YShjYWxsYmFjaykge1xuICAgICAgaWYgKHRoaXMuZGlzY2FyZGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZGlzY2FyZGVkIHNuYXBzaG90IGNhbm5vdCBiZSB1c2VkJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHRoaXMuZ2V0SW1hZ2VEYXRhVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoYXQuaW1hZ2VEYXRhKSB7XG4gICAgICAgICAgdGhhdC5pbWFnZURhdGEgPSB0aGF0LmNhbWVyYS5lbmdpbmVHZXRJbWFnZURhdGEodGhhdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhhdCwgdGhhdC5pbWFnZURhdGEpO1xuICAgICAgfSwgMSk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIEhpZGUgYW5kIGRpc2NhcmQgdGhpcyBzbmFwc2hvdC5cbiAgICAvL1xuICAgIC8vIEFmdGVyIGRpc2NhcmRpbmcgYSBzbmFwc2hvdCBhbiBhdHRlbXB0IHRvIHNob3cgb3IgdXBsb2FkIGl0IHdpbGwgcmFpc2VcbiAgICAvLyBhbiBlcnJvci5cbiAgICAvL1xuICAgIC8vIEByZXR1cm4gW3ZvaWRdXG5cbiAgfSwge1xuICAgIGtleTogJ2Rpc2NhcmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjYXJkKCkge1xuICAgICAgdGhpcy5jYW1lcmEuZGlzY2FyZCh0aGlzKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmV4dHJhQ2FudmFzO1xuICAgICAgZGVsZXRlIHRoaXMuaW1hZ2VEYXRhO1xuICAgICAgZGVsZXRlIHRoaXMuYmxvYjtcbiAgICB9XG5cbiAgICAvLyBTbmFwc2hvdCBvcHRpb25zXG4gICAgLy9cbiAgICAvLyBAbm9kb2NcbiAgICAvLyBAcHJpdmF0ZVxuXG4gIH0sIHtcbiAgICBrZXk6ICdvcHRpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3B0aW9ucygpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNhbWVyYS5vcHRpb25zLCB0aGlzLm9wdGlvbnMsIHRoaXMudXBsb2FkT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBzbmFwc2hvdCBwaXhlbCBzdGF0aXN0aWNzIGdpdmVuIGltYWdlIGRhdGEgYW5kIGNhbGwgY2FsbGJhY2suXG4gICAgLy9cbiAgICAvLyBAbm9kb2NcbiAgICAvLyBAcHJpdmF0ZVxuXG4gIH0sIHtcbiAgICBrZXk6ICdjYWxjdWxhdGVTdGF0cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNhbGN1bGF0ZVN0YXRzKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdHMpIHtcbiAgICAgICAgdmFyIGdyYXkgPSB2b2lkIDA7XG4gICAgICAgIHZhciBuID0gZGF0YS53aWR0aCAqIGRhdGEuaGVpZ2h0O1xuICAgICAgICB2YXIgc3VtID0gMC4wO1xuICAgICAgICB2YXIgZ3JheVZhbHVlcyA9IG5ldyBBcnJheShuKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gbjsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGluZGV4ID0gaSAqIDQ7XG4gICAgICAgICAgZ3JheSA9IDAuMjEyNiAqIGRhdGEuZGF0YVtpbmRleCArIDBdICsgLy8gcmVkXG4gICAgICAgICAgMC43MTUyICogZGF0YS5kYXRhW2luZGV4ICsgMV0gKyAvLyBncmVlblxuICAgICAgICAgIDAuMDcyMiAqIGRhdGEuZGF0YVtpbmRleCArIDJdOyAvLyBibHVlXG4gICAgICAgICAgZ3JheSA9IE1hdGgucm91bmQoZ3JheSk7XG5cbiAgICAgICAgICBzdW0gKz0gZ3JheTtcbiAgICAgICAgICBncmF5VmFsdWVzW2ldID0gZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtZWFuID0gTWF0aC5yb3VuZChzdW0gLyBuKTtcblxuICAgICAgICB2YXIgc3VtT2ZTcXVhcmVEaXN0YW5jZXMgPSAwO1xuICAgICAgICBncmF5VmFsdWVzLmZvckVhY2goZnVuY3Rpb24gKG9uZUdyYXkpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG4gICAgICAgICAgc3VtT2ZTcXVhcmVEaXN0YW5jZXMgKz0gTWF0aC5wb3cob25lR3JheSAtIG1lYW4sIDIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnN0YXRzID0gbmV3IF9zdGF0czIuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnN0YXRzLm1lYW4gPSBtZWFuO1xuICAgICAgICB0aGlzLnN0YXRzLnN0ZCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KHN1bU9mU3F1YXJlRGlzdGFuY2VzIC8gbikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgdGhpcy5zdGF0cyk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNuYXBzaG90O1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBTbmFwc2hvdDtcblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8vXG4vLyBDb250YWlucyBzb21lIHBpeGVsIHN0YXRpc3RpY3Mgb2Yge1NuYXBzaG90fSBvciBjYW1lcmEgc3RyZWFtLlxuLy9cbi8vIENhbiBiZSByZXRyaWV2ZWQgdXNpbmcge0pwZWdDYW1lcmEjZ2V0U3RhdHN9IG9yIHtTbmFwc2hvdCNnZXRTdGF0c30gbWV0aG9kcy5cbi8vXG52YXIgU3RhdHMgPSBmdW5jdGlvbiBTdGF0cygpIHtcbiAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRzKTtcblxuICB0aGlzLm1lYW4gPSBudWxsO1xuICB0aGlzLnN0ZCA9IG51bGw7XG59XG4vLyBAcHJvcGVydHkgW0Zsb2F0XSBtZWFuIGdyYXkgdmFsdWUgb2YgcGl4ZWxzICgwLTI1NSlcblxuXG4vLyBAcHJvcGVydHkgW0Zsb2F0XSBzdGFuZGFyZCBkZXZpYXRpb24gb2YgZ3JheSB2YWx1ZXNcbjtcblxuZXhwb3J0cy5kZWZhdWx0ID0gU3RhdHM7XG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2F1dG9CaW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxudmFyIF9hdXRvQmluZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvQmluZCk7XG5cbnZhciBfanBlZ19jYW1lcmEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX2pwZWdfY2FtZXJhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pwZWdfY2FtZXJhKTtcblxudmFyIF9lcnJvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vXG4vLyBKcGVnQ2FtZXJhIGltcGxlbWVudGF0aW9uIHRoYXQgdXNlcyBGbGFzaCB0byBjYXB0dXJlIGFuZCBkaXNwbGF5IHNuYXBzaG90cy5cbi8vXG4vLyBAcHJpdmF0ZVxudmFyIEpwZWdDYW1lcmFGbGFzaCA9IGZ1bmN0aW9uIChfSnBlZ0NhbWVyYUJhc2UpIHtcbiAgX2luaGVyaXRzKEpwZWdDYW1lcmFGbGFzaCwgX0pwZWdDYW1lcmFCYXNlKTtcblxuICBmdW5jdGlvbiBKcGVnQ2FtZXJhRmxhc2godGhlQ29udGFpbmVyLCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEpwZWdDYW1lcmFGbGFzaCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSnBlZ0NhbWVyYUZsYXNoLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSnBlZ0NhbWVyYUZsYXNoKSkuY2FsbCh0aGlzLCB0aGVDb250YWluZXIsIG9wdGlvbnMpKTtcblxuICAgIF90aGlzLndhaXRGb3JWaWRlb1JlYWR5VGltZXIgPSBudWxsO1xuXG4gICAgX3RoaXMuaW5zdGFuY2VzID0ge307XG4gICAgX3RoaXMubmV4dElkID0gMTtcbiAgICAoMCwgX2F1dG9CaW5kMi5kZWZhdWx0KShfdGhpcyk7XG4gICAgX3RoaXMuZW5naW5lSW5pdCgpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhKcGVnQ2FtZXJhRmxhc2gsIFt7XG4gICAga2V5OiAnZGVzdHJ1Y3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cnVjdCgpIHtcbiAgICAgIHRoaXMud2FpdEZvclZpZGVvUmVhZHlUaW1lciA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gVXNlZCBieSBmbGFzaCBvYmplY3QgdG8gc2VuZCBtZXNzYWdlIHRvIG91ciBpbnN0YW5jZS5cblxuICB9LCB7XG4gICAga2V5OiAnc2VuZE1lc3NhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kTWVzc2FnZShpZCwgbWV0aG9kKSB7XG4gICAgICB2YXIgX3Byb3RvdHlwZSRtZXRob2Q7XG5cbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzW3BhcnNlSW50KGlkLCAxMCldO1xuXG4gICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoX3Byb3RvdHlwZSRtZXRob2QgPSB0aGlzLnByb3RvdHlwZVttZXRob2RdKS5hcHBseS5hcHBseShfcHJvdG90eXBlJG1ldGhvZCwgW2luc3RhbmNlXS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZUluaXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVJbml0KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuZGVidWcoJ1VzaW5nIEZsYXNoIGVuZ2luZScpO1xuXG4gICAgICAvLyByZWdpc3RlciBvdXIgaW5zdGFuY2VcbiAgICAgIHRoaXMuaWQgPSB0aGlzLm5leHRJZCsrO1xuICAgICAgdGhpcy5pbnN0YW5jZXNbdGhpcy5pZF0gPSB0aGlzO1xuXG4gICAgICB2YXIgZmxhc2hPYmplY3RJZCA9ICdmbGFzaF9vYmplY3RfJyArIHRoaXMuaWQ7XG5cbiAgICAgIHZhciBwYXJhbXMgPSB7XG4gICAgICAgIGxvb3A6ICdmYWxzZScsXG4gICAgICAgIGFsbG93U2NyaXB0QWNjZXNzOiAnYWx3YXlzJyxcbiAgICAgICAgYWxsb3dGdWxsU2NyZWVuOiAnZmFsc2UnLFxuICAgICAgICBxdWFsaXR5OiAnYmVzdCcsXG4gICAgICAgIHdtb2RlOiAnb3BhcXVlJyxcbiAgICAgICAgbWVudTogJ2ZhbHNlJ1xuICAgICAgfTtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0ge1xuICAgICAgICBpZDogZmxhc2hPYmplY3RJZCxcbiAgICAgICAgYWxpZ246ICdtaWRkbGUnXG4gICAgICB9O1xuICAgICAgdmFyIGZsYXNodmFycyA9IHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHdpZHRoOiB0aGlzLnZpZXdXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnZpZXdIZWlnaHQsXG4gICAgICAgIHNodXR0ZXJfdXJsOiB0aGlzLm9wdGlvbnMuc2h1dHRlck1wM1VybCA/IHRoaXMub3B0aW9ucy5zaHV0dGVyTXAzVXJsIDogJydcbiAgICAgIH07XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnN1Y2Nlc3MpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgX2Vycm9ycy5XZWJjYW1FcnJvcihfZXJyb3JzLldlYmNhbUVycm9ycy5GTEFTSF9GQUlMRURfTE9BRElORywgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuZGVidWcoJ0ZsYXNoIGxvYWRlZC4nKTtcbiAgICAgICAgdGhhdC5mbGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZsYXNoT2JqZWN0SWQpO1xuICAgICAgICBpZiAoX3RoaXMyLm9wdGlvbnMub25SZWFkeSkge1xuICAgICAgICAgIF90aGlzMi53YWl0Rm9yVmlkZW9SZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfTtcblxuICAgICAgdmFyIGNvbnRhaW5lclRvQmVSZXBsYWNlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udGFpbmVyVG9CZVJlcGxhY2VkLmlkID0gJ2pwZWdfY2FtZXJhZmxhc2hfJyArIHRoaXMuaWQ7XG4gICAgICBjb250YWluZXJUb0JlUmVwbGFjZWQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICBjb250YWluZXJUb0JlUmVwbGFjZWQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wcmV2aWV3TWlycm9yKSB7XG4gICAgICAgICgwLCBfanBlZ19jYW1lcmEuYWRkUHJlZml4ZWRTdHlsZSkoY29udGFpbmVyVG9CZVJlcGxhY2VkLCAndHJhbnNmb3JtJywgJ3NjYWxleCgtMS4wKScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJUb0JlUmVwbGFjZWQpO1xuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICAgIHN3Zm9iamVjdC5lbWJlZFNXRih0aGlzLm9wdGlvbnMuc3dmVXJsLCBjb250YWluZXJUb0JlUmVwbGFjZWQuaWQsIHRoaXMudmlld1dpZHRoLCB0aGlzLnZpZXdIZWlnaHQsICcwJywgbnVsbCwgZmxhc2h2YXJzLCBwYXJhbXMsIGF0dHJpYnV0ZXMsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3YWl0Rm9yVmlkZW9SZWFkeScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdhaXRGb3JWaWRlb1JlYWR5KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICAgIGlmICh0aGlzLmZsYXNoLl9jYXB0dXJlKDEsIGZhbHNlLCAwLjEsIDEpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5vblJlYWR5LmNhbGwodGhpcywgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAvLyBkbyBub3RoaW5nXG5cbiAgICAgIC8qXG4gICAgICAqL1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdGhpcy53YWl0Rm9yVmlkZW9SZWFkeVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGF0LndhaXRGb3JWaWRlb1JlYWR5KCk7XG4gICAgICB9LCA1MDApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVzaXplUHJldmlldycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2l6ZVByZXZpZXcoKSB7XG4gICAgICBpZiAodGhpcy52aWV3V2lkdGggPCAyMTUgfHwgdGhpcy52aWV3SGVpZ2h0IDwgMTM4KSB7XG4gICAgICAgIHRocm93IG5ldyBfZXJyb3JzLldlYmNhbUVycm9yKF9lcnJvcnMuV2ViY2FtRXJyb3JzLkZMQVNIX1dJTkRPV19UT09fU01BTEwpO1xuICAgICAgfVxuICAgICAgdGhpcy5mbGFzaC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZmxhc2gpO1xuICAgICAgdGhpcy5mbGFzaCA9IG51bGw7XG4gICAgICB0aGlzLmVuZ2luZUluaXQoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZVBsYXlTaHV0dGVyU291bmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVQbGF5U2h1dHRlclNvdW5kKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICByZXR1cm4gdGhpcy5mbGFzaC5fcGxheV9zaHV0dGVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lQ2FwdHVyZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZUNhcHR1cmUoc25hcHNob3QsIG1pcnJvciwgcXVhbGl0eSwgc2NhbGUpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgcmV0dXJuIHRoaXMuZmxhc2guX2NhcHR1cmUoc25hcHNob3QuaWQsIG1pcnJvciwgcXVhbGl0eSwgc2NhbGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVEaXNwbGF5KHNuYXBzaG90KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgIHJldHVybiB0aGlzLmZsYXNoLl9kaXNwbGF5KHNuYXBzaG90LmlkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVHZXRDYW52YXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVHZXRDYW52YXMoc25hcHNob3QpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgaWYgKCFzbmFwc2hvdC5pbWFnZURhdGEpIHtcbiAgICAgICAgc25hcHNob3QuaW1hZ2VEYXRhID0gdGhpcy5lbmdpbmVHZXRJbWFnZURhdGEoc25hcHNob3QpO1xuICAgICAgfVxuICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzLndpZHRoID0gc25hcHNob3QuaW1hZ2VEYXRhLndpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IHNuYXBzaG90LmltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY29udGV4dC5wdXRJbWFnZURhdGEoc25hcHNob3QuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgIHJldHVybiBjYW52YXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lR2V0SW1hZ2VEYXRhJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5naW5lR2V0SW1hZ2VEYXRhKHNuYXBzaG90KSB7XG4gICAgICB2YXIgcmVzdWx0ID0gdm9pZCAwO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gICAgICB2YXIgZmxhc2hEYXRhID0gdGhpcy5mbGFzaC5fZ2V0X2ltYWdlX2RhdGEoc25hcHNob3QuaWQpO1xuXG4gICAgICBpZiAoKDAsIF9qcGVnX2NhbWVyYS5pc0NhbnZhc1N1cHBvcnRlZCkoKSkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGZsYXNoRGF0YS53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGZsYXNoRGF0YS5oZWlnaHQ7XG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlSW1hZ2VEYXRhKGZsYXNoRGF0YS53aWR0aCwgZmxhc2hEYXRhLmhlaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgd2lkdGg6IGZsYXNoRGF0YS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGZsYXNoRGF0YS5oZWlnaHRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbGFzaERhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGl4ZWwgPSBmbGFzaERhdGEuZGF0YVtpXTtcbiAgICAgICAgdmFyIGluZGV4ID0gaSAqIDQ7XG5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuICAgICAgICB2YXIgcmVkID0gcGl4ZWwgPj4gMTYgJiAweGZmO1xuICAgICAgICB2YXIgZ3JlZW4gPSBwaXhlbCA+PiA4ICYgMHhmZjtcbiAgICAgICAgdmFyIGJsdWUgPSBwaXhlbCAmIDB4ZmY7XG5cbiAgICAgICAgcmVzdWx0LmRhdGFbaW5kZXggKyAwXSA9IHJlZDtcbiAgICAgICAgcmVzdWx0LmRhdGFbaW5kZXggKyAxXSA9IGdyZWVuO1xuICAgICAgICByZXN1bHQuZGF0YVtpbmRleCArIDJdID0gYmx1ZTtcbiAgICAgICAgcmVzdWx0LmRhdGFbaW5kZXggKyAzXSA9IDI1NTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5naW5lR2V0QmxvYicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZ2luZUdldEJsb2Ioc25hcHNob3QsIG1pbWUsIG1pcnJvciwgcXVhbGl0eSwgY2FsbGJhY2spIHtcbiAgICAgIHZhciBjYW52YXMgPSB2b2lkIDA7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIGlmICghc25hcHNob3QuZXh0cmFDYW52YXMpIHtcbiAgICAgICAgc25hcHNob3QuZXh0cmFDYW52YXMgPSB0aGlzLmVuZ2luZUdldENhbnZhcyhzbmFwc2hvdCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtaXJyb3IpIHtcbiAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHNuYXBzaG90LmNhbnZhcy53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHNuYXBzaG90LmNhbnZhcy5oZWlnaHQ7XG5cbiAgICAgICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7IC8vIHJlc2V0IHRyYW5zZm9ybWF0aW9uIG1hdHJpeFxuICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZShjYW52YXMud2lkdGgsIDApO1xuICAgICAgICBjb250ZXh0LnNjYWxlKC0xLCAxKTtcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2Uoc25hcHNob3QuZXh0cmFDYW52YXMsIDAsIDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FudmFzID0gc25hcHNob3QuZXh0cmFDYW52YXM7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYW52YXMudG9CbG9iKGZ1bmN0aW9uIChibG9iKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhibG9iKTtcbiAgICAgIH0sIG1pbWUsIHF1YWxpdHkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZURpc2NhcmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmdpbmVEaXNjYXJkKHNuYXBzaG90KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGVcbiAgICAgIHJldHVybiB0aGlzLmZsYXNoLl9kaXNjYXJkKHNuYXBzaG90LmlkKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmdpbmVTaG93U3RyZWFtJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5naW5lU2hvd1N0cmVhbSgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZVxuICAgICAgcmV0dXJuIHRoaXMuZmxhc2guX3Nob3dfc3RyZWFtKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZmxhc2hQcmVwYXJlZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZsYXNoUHJlcGFyZWQod2lkdGgsIGhlaWdodCkge1xuICAgICAgdGhpcy5ibG9ja0VsZW1lbnRBY2Nlc3MoKTtcblxuICAgICAgLy8gWFhYIHN0ZWFsIGZvY3VzIGZyb20gdGhlIGZsYXNoIG9iamVjdFxuICAgICAgZG9jdW1lbnQuYm9keS50YWJJbmRleCA9IDA7XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG5cbiAgICAgIHJldHVybiB0aGlzLnByZXBhcmVkKHdpZHRoLCBoZWlnaHQpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBKcGVnQ2FtZXJhRmxhc2g7XG59KF9qcGVnX2NhbWVyYTIuZGVmYXVsdCk7XG5cbkpwZWdDYW1lcmFGbGFzaC5lbmdpbmVDaGVjayA9IGZ1bmN0aW9uIChzdWNjZXNzLCBmYWlsdXJlKSB7XG4gIGlmICghd2luZG93LnN3Zm9iamVjdCkge1xuICAgIGZhaWx1cmUoJ0pwZWdDYW1lcmE6IFNXRk9iamVjdCBpcyBub3QgbG9hZGVkLicpO1xuICB9XG4gIC8vIFRPRE8gZGlzYWJsZWQgdW50aWwgSSBmaWd1cmUgb3V0IGhvdyB0byBkZXRlY3QgZmxhc2ggY3Jvc3MtYnJvd3NlciB3YXlcbiAgLy8gaWYgKCF3aW5kb3cuc3dmb2JqZWN0Lmhhc0ZsYXNoUGxheWVyVmVyc2lvbignOScpKSB7XG4gIC8vICAgZmFpbHVyZSgnTm8gRmxhc2ggaW4gdmVyc2lvbiA5IGF2YWlsYWJsZS4nKTtcbiAgLy8gfVxuICBzdWNjZXNzKCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBKcGVnQ2FtZXJhRmxhc2g7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyJdfQ==
