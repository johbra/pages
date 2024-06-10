// Compiled by ClojureScript 1.10.844 {}
goog.provide('figwheel.repl.logging');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('goog.debug.Console');
figwheel.repl.logging.get_logger = (function figwheel$repl$logging$get_logger(nm){
return goog.log.getLogger.call(null,nm);
});
figwheel.repl.logging.error = (function figwheel$repl$logging$error(log,msg_ex){
return goog.log.error.call(null,log,msg_ex);
});
figwheel.repl.logging.fine = (function figwheel$repl$logging$fine(log,msg){
return goog.log.fine.call(null,log,msg);
});
figwheel.repl.logging.info = (function figwheel$repl$logging$info(log,msg){
return goog.log.info.call(null,log,msg);
});
figwheel.repl.logging.warning = (function figwheel$repl$logging$warning(log,msg){
return goog.log.warning.call(null,log,msg);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logging !== 'undefined') && (typeof figwheel.repl.logging.LogLevel !== 'undefined')){
} else {
figwheel.repl.logging.LogLevel = (function (){var or__4160__auto__ = goog.log.Level;
if(cljs.core.truth_(or__4160__auto__)){
return or__4160__auto__;
} else {
return goog.debug.Logger.Level;
}
})();
}
figwheel.repl.logging.debug = (function figwheel$repl$logging$debug(log,msg){
return goog.log.log.call(null,log,figwheel.repl.logging.LogLevel.FINEST,msg);
});
figwheel.repl.logging.console_logging = (function figwheel$repl$logging$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_29097 = (new goog.debug.Console());
var G__29096_29098 = c_29097.getFormatter();
goog.object.set(G__29096_29098,"showAbsoluteTime",false);

goog.object.set(G__29096_29098,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_29097);

}

var temp__5457__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5457__auto__)){
var console_instance = temp__5457__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
figwheel.repl.logging.log_levels = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,clojure.string.lower_case,(function (p1__29099_SHARP_){
return goog.object.get(figwheel.repl.logging.LogLevel,p1__29099_SHARP_);
})),cljs.core.map.call(null,cljs.core.str,cljs.core.list(new cljs.core.Symbol(null,"SEVERE","SEVERE",2038088045,null),new cljs.core.Symbol(null,"WARNING","WARNING",1233939303,null),new cljs.core.Symbol(null,"INFO","INFO",578874437,null),new cljs.core.Symbol(null,"CONFIG","CONFIG",1613043737,null),new cljs.core.Symbol(null,"FINE","FINE",1120074650,null),new cljs.core.Symbol(null,"FINER","FINER",1219697631,null),new cljs.core.Symbol(null,"FINEST","FINEST",-1116440228,null)))));
figwheel.repl.logging.set_log_level = (function figwheel$repl$logging$set_log_level(logger_SINGLEQUOTE_,level){
var temp__5455__auto__ = cljs.core.get.call(null,figwheel.repl.logging.log_levels,level);
if(cljs.core.truth_(temp__5455__auto__)){
var lvl = temp__5455__auto__;
figwheel.repl.logging.debug.call(null,logger_SINGLEQUOTE_,["setting log level to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(level)].join(''));

if((!((goog.object.get(logger_SINGLEQUOTE_,"setLevel") == null)))){
return logger_SINGLEQUOTE_.setLevel(lvl);
} else {
return goog.log.setLevel(logger_SINGLEQUOTE_,lvl);
}
} else {
return figwheel.repl.logging.warning.call(null,logger_SINGLEQUOTE_,["Log level ",cljs.core.pr_str.call(null,level)," doesn't exist must be one of ",cljs.core.pr_str.call(null,cljs.core.list("severe","warning","info","config","fine","finer","finest"))].join(''));
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logging !== 'undefined') && (typeof figwheel.repl.logging.log_console !== 'undefined')){
} else {
figwheel.repl.logging.log_console = figwheel.repl.logging.console_logging.call(null);
}

//# sourceMappingURL=logging.js.map
