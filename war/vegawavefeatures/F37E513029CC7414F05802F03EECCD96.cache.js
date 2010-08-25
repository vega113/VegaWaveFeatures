(function(){
var $gwt_version = "2.0.4";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $strongName = 'F37E513029CC7414F05802F03EECCD96';
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
$stats && $stats({moduleName:'vegawavefeatures',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var $intern_0 = '', $intern_7 = '\n', $intern_15 = ' ', $intern_1 = '(', $intern_6 = ':', $intern_4 = 'Unknown', $intern_5 = 'Unknown source', $intern_9 = '[', $intern_3 = 'anonymous', $intern_8 = 'at ', $intern_11 = 'com.vegalabs.features.client.VegaWaveFeatures', $intern_10 = 'com.vegalabs.general.client.VegaGeneral', $intern_2 = 'function', $intern_13 = 'moduleStartup', $intern_14 = 'onModuleLoadStart', $intern_12 = 'startup';
var _;
function nullMethod(){
}

function java_lang_Object(){
}

_ = java_lang_Object.prototype = {};
_.java_lang_Object_typeMarker$ = nullMethod;
_.java_lang_Object_typeId$ = 1;
function java_lang_Throwable_$setStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2V(stackTrace){
  var c, copy, i;
  copy = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit, 0, 0, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (!stackTrace[i]) {
      throw java_lang_NullPointerException_$NullPointerException__Ljava_lang_NullPointerException_2Ljava_lang_NullPointerException_2(new java_lang_NullPointerException);
    }
    copy[i] = stackTrace[i];
  }
}

function java_lang_Throwable(){
}

_ = java_lang_Throwable.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 3;
function java_lang_Exception(){
}

_ = java_lang_Exception.prototype = new java_lang_Throwable;
_.java_lang_Object_typeId$ = 4;
function java_lang_RuntimeException(){
}

_ = java_lang_RuntimeException.prototype = new java_lang_Exception;
_.java_lang_Object_typeId$ = 5;
function com_google_gwt_core_client_JavaScriptException_$JavaScriptException__Lcom_google_gwt_core_client_JavaScriptException_2Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2(this$static, e){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  this$static.com_google_gwt_core_client_JavaScriptException_e = e;
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$createStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JavaScriptException_2V(new com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome, this$static);
  return this$static;
}

function com_google_gwt_core_client_JavaScriptException(){
}

_ = com_google_gwt_core_client_JavaScriptException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 6;
_.com_google_gwt_core_client_JavaScriptException_e = null;
function com_google_gwt_core_client_Scheduler(){
}

_ = com_google_gwt_core_client_Scheduler.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(jsFunction){
  return function(){
    return com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
  }
  ;
}

function com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, arguments){
  var initialEntry;
  initialEntry = com_google_gwt_core_client_impl_Impl_entryDepth++ == 0;
  try {
    return jsFunction.apply(thisObj, arguments);
  }
   finally {
    initialEntry && com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    --com_google_gwt_core_client_impl_Impl_entryDepth;
  }
}

var com_google_gwt_core_client_impl_Impl_entryDepth = 0;
function com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V(){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V = nullMethod;
  com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE = com_google_gwt_core_client_impl_SchedulerImpl_$SchedulerImpl__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_impl_SchedulerImpl_2(new com_google_gwt_core_client_impl_SchedulerImpl);
}

function com_google_gwt_core_client_impl_SchedulerImpl_$SchedulerImpl__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_impl_SchedulerImpl_2(this$static){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V();
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher = com_google_gwt_core_client_impl_SchedulerImpl$1_$SchedulerImpl$1__Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2(new com_google_gwt_core_client_impl_SchedulerImpl$1, this$static);
  com_google_gwt_core_client_impl_SchedulerImpl$2_$SchedulerImpl$2__Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2(new com_google_gwt_core_client_impl_SchedulerImpl$2, this$static);
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = [];
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = [];
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = [];
  return this$static;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldFinally;
  oldFinally = this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands;
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = [];
  com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2V(oldFinally, this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands);
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldDeferred;
  oldDeferred = this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands;
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = [];
  com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2V(oldDeferred, this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands);
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = com_google_gwt_core_client_impl_SchedulerImpl_runRepeatingTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands);
}

function com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this$static){
  return this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands.length > 0 || this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands.length > 0;
}

function com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z(cmd){
  return cmd.execute__Z();
}

function com_google_gwt_core_client_impl_SchedulerImpl_runRepeatingTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks){
  var canceledSomeTasks, i, length, newTasks, start, t;
  canceledSomeTasks = false;
  length = tasks.length;
  start = (new Date).getTime();
  while ((new Date).getTime() - start < 100) {
    for (i = 0; i < length; ++i) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      if (!t[0].execute__Z()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length; ++i) {
      if (!tasks[i]) {
        continue;
      }
      newTasks[newTasks.length] = tasks[i];
    }
    return newTasks;
  }
   else {
    return tasks;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2V(tasks, rescheduled){
  var $e0, i, j, t;
  for (i = 0 , j = tasks.length; i < j; ++i) {
    t = tasks[i];
    try {
      t[1]?t[0].execute__Z() && (rescheduled[rescheduled.length] = t , undefined):t[0].nullMethod();
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ($e0, 2))
        throw $e0;
    }
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(cmd, delayMs){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V();
  $wnd.setTimeout(function(){
    var ret = $entry(com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z)(cmd);
    ret && $wnd.setTimeout(arguments.callee, delayMs);
  }
  , delayMs);
}

function com_google_gwt_core_client_impl_SchedulerImpl(){
}

_ = com_google_gwt_core_client_impl_SchedulerImpl.prototype = new com_google_gwt_core_client_Scheduler;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
_.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = false;
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
function com_google_gwt_core_client_impl_SchedulerImpl$1_$SchedulerImpl$1__Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2(this$static, this$0){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0 = this$0;
  return this$static;
}

function com_google_gwt_core_client_impl_SchedulerImpl$1_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = true;
  com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0);
  this.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
  return this.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0);
}

function com_google_gwt_core_client_impl_SchedulerImpl$1(){
}

_ = com_google_gwt_core_client_impl_SchedulerImpl$1.prototype = new java_lang_Object;
_.execute__Z = com_google_gwt_core_client_impl_SchedulerImpl$1_execute__Z;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_core_client_impl_SchedulerImpl$1_this$0 = null;
function com_google_gwt_core_client_impl_SchedulerImpl$2_$SchedulerImpl$2__Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2(this$static, this$0){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl$2_this$0 = this$0;
  return this$static;
}

function com_google_gwt_core_client_impl_SchedulerImpl$2_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$2_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning && com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this.com_google_gwt_core_client_impl_SchedulerImpl$2_this$0.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
  return this.com_google_gwt_core_client_impl_SchedulerImpl$2_this$0.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning;
}

function com_google_gwt_core_client_impl_SchedulerImpl$2(){
}

_ = com_google_gwt_core_client_impl_SchedulerImpl$2.prototype = new java_lang_Object;
_.execute__Z = com_google_gwt_core_client_impl_SchedulerImpl$2_execute__Z;
_.java_lang_Object_typeId$ = 0;
_.com_google_gwt_core_client_impl_SchedulerImpl$2_this$0 = null;
function com_google_gwt_core_client_impl_StackTraceCreator_extractNameFromToString__Ljava_lang_String_2Ljava_lang_String_2(fnToString){
  var index, start, toReturn;
  toReturn = $intern_0;
  fnToString = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(fnToString);
  index = fnToString.indexOf($intern_1);
  if (index != -1) {
    start = fnToString.indexOf($intern_2) == 0?8:0;
    toReturn = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(fnToString.substr(start, index - start));
  }
  return toReturn.length > 0?toReturn:$intern_3;
}

function com_google_gwt_core_client_impl_StackTraceCreator_splice__Lcom_google_gwt_core_client_JsArrayString_2ILcom_google_gwt_core_client_JsArrayString_2(arr, length){
  arr.length >= length && arr.splice(0, length);
  return arr;
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_$createStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JavaScriptException_2V(this$static, e){
  var i, j, stack, stackTrace;
  stack = com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_$inferFrom__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(this$static, com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(e.com_google_gwt_core_client_JavaScriptException_e)?com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(e.com_google_gwt_core_client_JavaScriptException_e):null);
  stackTrace = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit, 0, 0, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = java_lang_StackTraceElement_$StackTraceElement__Ljava_lang_StackTraceElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ILjava_lang_StackTraceElement_2(new java_lang_StackTraceElement, $intern_4, stack[i], $intern_5, 0);
  }
  java_lang_Throwable_$setStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2V(stackTrace);
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V(){
  var i, j, stack, stackTrace;
  stack = com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_$collect__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_2Lcom_google_gwt_core_client_JsArrayString_2(new com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome);
  stackTrace = com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit, 0, 0, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = java_lang_StackTraceElement_$StackTraceElement__Ljava_lang_StackTraceElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ILjava_lang_StackTraceElement_2(new java_lang_StackTraceElement, $intern_4, stack[i], $intern_5, 0);
  }
  java_lang_Throwable_$setStackTrace__Ljava_lang_Throwable_2_3Ljava_lang_StackTraceElement_2V(stackTrace);
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_$makeException__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JavaScriptObject_2(){
  try {
    null.a();
  }
   catch (e) {
    return e;
  }
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_collect__Lcom_google_gwt_core_client_JsArrayString_2(){
  var seen = {};
  var toReturn = [];
  var callee = arguments.callee.caller.caller;
  while (callee) {
    var name = this.extractName__Ljava_lang_String_2Ljava_lang_String_2(callee.toString());
    toReturn.push(name);
    var keyName = $intern_6 + name;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return toReturn;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
  return toReturn;
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_extractName__Ljava_lang_String_2Ljava_lang_String_2(fnToString){
  return com_google_gwt_core_client_impl_StackTraceCreator_extractNameFromToString__Ljava_lang_String_2Ljava_lang_String_2(fnToString);
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector_inferFrom__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(e){
  return [];
}

function com_google_gwt_core_client_impl_StackTraceCreator$Collector(){
}

_ = com_google_gwt_core_client_impl_StackTraceCreator$Collector.prototype = new java_lang_Object;
_.collect__Lcom_google_gwt_core_client_JsArrayString_2 = com_google_gwt_core_client_impl_StackTraceCreator$Collector_collect__Lcom_google_gwt_core_client_JsArrayString_2;
_.extractName__Ljava_lang_String_2Ljava_lang_String_2 = com_google_gwt_core_client_impl_StackTraceCreator$Collector_extractName__Ljava_lang_String_2Ljava_lang_String_2;
_.inferFrom__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2 = com_google_gwt_core_client_impl_StackTraceCreator$Collector_inferFrom__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_$inferFrom__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(this$static, e){
  var i, j, stack;
  stack = e && e.stack?e.stack.split($intern_7):[];
  for (i = 0 , j = stack.length; i < j; ++i) {
    stack[i] = this$static.extractName__Ljava_lang_String_2Ljava_lang_String_2(stack[i]);
  }
  return stack;
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_collect__Lcom_google_gwt_core_client_JsArrayString_2(){
  return com_google_gwt_core_client_impl_StackTraceCreator_splice__Lcom_google_gwt_core_client_JsArrayString_2ILcom_google_gwt_core_client_JsArrayString_2(this.inferFrom__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(com_google_gwt_core_client_impl_StackTraceCreator$Collector_$makeException__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JavaScriptObject_2()), this.toSplice__I());
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_inferFrom__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(e){
  return com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_$inferFrom__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(this, e);
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_toSplice__I(){
  return 2;
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz(){
}

_ = com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz.prototype = new com_google_gwt_core_client_impl_StackTraceCreator$Collector;
_.collect__Lcom_google_gwt_core_client_JsArrayString_2 = com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_collect__Lcom_google_gwt_core_client_JsArrayString_2;
_.inferFrom__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2 = com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_inferFrom__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2;
_.toSplice__I = com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_toSplice__I;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_$collect__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_2Lcom_google_gwt_core_client_JsArrayString_2(this$static){
  var res;
  res = com_google_gwt_core_client_impl_StackTraceCreator_splice__Lcom_google_gwt_core_client_JsArrayString_2ILcom_google_gwt_core_client_JsArrayString_2(com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_$inferFrom__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(this$static, com_google_gwt_core_client_impl_StackTraceCreator$Collector_$makeException__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Lcom_google_gwt_core_client_JavaScriptObject_2()), 3);
  res.length == 0 && (res = com_google_gwt_core_client_impl_StackTraceCreator_splice__Lcom_google_gwt_core_client_JsArrayString_2ILcom_google_gwt_core_client_JsArrayString_2((new com_google_gwt_core_client_impl_StackTraceCreator$Collector).collect__Lcom_google_gwt_core_client_JsArrayString_2(), 1));
  return res;
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_$inferFrom__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(this$static, e){
  var stack;
  stack = com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_$inferFrom__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(this$static, e);
  if (stack.length == 0) {
    return (new com_google_gwt_core_client_impl_StackTraceCreator$Collector).inferFrom__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(e);
  }
   else {
    return stack.length >= 1 && stack.splice(0, 1) , stack;
  }
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_collect__Lcom_google_gwt_core_client_JsArrayString_2(){
  return com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_$collect__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_2Lcom_google_gwt_core_client_JsArrayString_2(this);
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_extractName__Ljava_lang_String_2Ljava_lang_String_2(fnToString){
  var index, toReturn;
  if (fnToString.length == 0) {
    return $intern_3;
  }
  toReturn = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(fnToString);
  toReturn.indexOf($intern_8) == 0 && (toReturn = toReturn.substr(3, toReturn.length - 3));
  index = toReturn.indexOf($intern_9);
  index == -1 && (index = toReturn.indexOf($intern_1));
  if (index == -1) {
    return $intern_3;
  }
   else {
    toReturn = java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(toReturn.substr(0, index - 0));
  }
  index = toReturn.indexOf(java_lang_String_fromCodePoint__ILjava_lang_String_2(46));
  index != -1 && (toReturn = toReturn.substr(index + 1, toReturn.length - (index + 1)));
  return toReturn.length > 0?toReturn:$intern_3;
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_inferFrom__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(e){
  return com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_$inferFrom__Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2(this, e);
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_toSplice__I(){
  return 3;
}

function com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome(){
}

_ = com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome.prototype = new com_google_gwt_core_client_impl_StackTraceCreator$CollectorMoz;
_.collect__Lcom_google_gwt_core_client_JsArrayString_2 = com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_collect__Lcom_google_gwt_core_client_JsArrayString_2;
_.extractName__Ljava_lang_String_2Ljava_lang_String_2 = com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_extractName__Ljava_lang_String_2Ljava_lang_String_2;
_.inferFrom__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2 = com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_inferFrom__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JsArrayString_2;
_.toSplice__I = com_google_gwt_core_client_impl_StackTraceCreator$CollectorChrome_toSplice__I;
_.java_lang_Object_typeId$ = 0;
function com_google_gwt_lang_Array_createFromSeed__IILcom_google_gwt_lang_Array_2(seedType, length){
  var array = new Array(length);
  if (seedType > 0) {
    var value = [null, 0, false, [0, 0]][seedType];
    for (var i = 0; i < length; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function com_google_gwt_lang_Array_initDim__Ljava_lang_Class_2IIIILcom_google_gwt_lang_Array_2(arrayClass, typeId, queryId, length, seedType){
  var result;
  result = com_google_gwt_lang_Array_createFromSeed__IILcom_google_gwt_lang_Array_2(seedType, length);
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V();
  com_google_gwt_lang_Array$ExpandoWrapper_wrapArray__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(result, com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues);
  result.java_lang_Object_typeId$ = typeId;
  return result;
}

function com_google_gwt_lang_Array(){
}

_ = com_google_gwt_lang_Array.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
_.length = 0;
function com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V(){
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V = nullMethod;
  com_google_gwt_lang_Array$ExpandoWrapper_expandoNames = [];
  com_google_gwt_lang_Array$ExpandoWrapper_expandoValues = [];
  com_google_gwt_lang_Array$ExpandoWrapper_initExpandos__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(new com_google_gwt_lang_Array, com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues);
}

function com_google_gwt_lang_Array$ExpandoWrapper_initExpandos__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name in protoType) {
    if (value = protoType[name]) {
      expandoNames[i] = name;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function com_google_gwt_lang_Array$ExpandoWrapper_wrapArray__Lcom_google_gwt_lang_Array_2Ljava_lang_Object_2Ljava_lang_Object_2V(array, expandoNames, expandoValues){
  com_google_gwt_lang_Array$ExpandoWrapper_$clinit__V();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var com_google_gwt_lang_Array$ExpandoWrapper_expandoNames, com_google_gwt_lang_Array$ExpandoWrapper_expandoValues;
function com_google_gwt_lang_Cast_canCast__IIZ(srcId, dstId){
  return srcId && !!com_google_gwt_lang_Cast_typeIdArray[srcId][dstId];
}

function com_google_gwt_lang_Cast_dynamicCastJso__Ljava_lang_Object_2Ljava_lang_Object_2(src){
  if (src != null && (src.java_lang_Object_typeMarker$ == nullMethod || src.java_lang_Object_typeId$ == 2)) {
    throw java_lang_ClassCastException_$ClassCastException__Ljava_lang_ClassCastException_2Ljava_lang_ClassCastException_2(new java_lang_ClassCastException);
  }
  return src;
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2IZ(src, dstId){
  return src != null && com_google_gwt_lang_Cast_canCast__IIZ(src.java_lang_Object_typeId$, dstId);
}

function com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(src){
  return src != null && src.java_lang_Object_typeMarker$ != nullMethod && src.java_lang_Object_typeId$ != 2;
}

var com_google_gwt_lang_Cast_typeIdArray = [{}, {}, {1:1}, {3:1}, {3:1}, {2:1, 3:1}, {2:1, 3:1}, {2:1, 3:1}, {2:1, 3:1}, {3:1}, {3:1}, {2:1, 3:1}, {2:1, 3:1}];
function com_google_gwt_lang_EntryMethodHolder_init__V(){
  !!$stats && com_google_gwt_lang_Stats_onModuleStart__Ljava_lang_String_2Z($intern_10);
  !!$stats && com_google_gwt_lang_Stats_onModuleStart__Ljava_lang_String_2Z($intern_11);
}

function com_google_gwt_lang_Exceptions_caught__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  if (e != null && com_google_gwt_lang_Cast_canCast__IIZ(e.java_lang_Object_typeId$, 3)) {
    return e;
  }
  return com_google_gwt_core_client_JavaScriptException_$JavaScriptException__Lcom_google_gwt_core_client_JavaScriptException_2Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptException_2(new com_google_gwt_core_client_JavaScriptException, e);
}

function com_google_gwt_lang_Stats_onModuleStart__Ljava_lang_String_2Z(mainClassName){
  return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:$intern_12, evtGroup:$intern_13, millis:(new Date).getTime(), type:$intern_14, className:mainClassName});
}

function java_lang_Class(){
}

_ = java_lang_Class.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function java_lang_ClassCastException_$ClassCastException__Ljava_lang_ClassCastException_2Ljava_lang_ClassCastException_2(this$static){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_ClassCastException(){
}

_ = java_lang_ClassCastException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 11;
function java_lang_NullPointerException_$NullPointerException__Ljava_lang_NullPointerException_2Ljava_lang_NullPointerException_2(this$static){
  com_google_gwt_core_client_impl_StackTraceCreator$Collector_$fillInStackTrace__Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2Ljava_lang_Throwable_2V();
  return this$static;
}

function java_lang_NullPointerException(){
}

_ = java_lang_NullPointerException.prototype = new java_lang_RuntimeException;
_.java_lang_Object_typeId$ = 12;
function java_lang_StackTraceElement_$StackTraceElement__Ljava_lang_StackTraceElement_2Ljava_lang_String_2Ljava_lang_String_2Ljava_lang_String_2ILjava_lang_StackTraceElement_2(this$static, className, methodName, fileName, lineNumber){
  return this$static;
}

function java_lang_StackTraceElement(){
}

_ = java_lang_StackTraceElement.prototype = new java_lang_Object;
_.java_lang_Object_typeId$ = 0;
function java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(this$static){
  if (this$static.length == 0 || this$static[0] > $intern_15 && this$static[this$static.length - 1] > $intern_15) {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, $intern_0);
  var r2 = r1.replace(/\s*$/, $intern_0);
  return r2;
}

function java_lang_String_fromCodePoint__ILjava_lang_String_2(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (~~(codePoint - 65536) >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & 65535;
    return String.fromCharCode(hiSurrogate) + String.fromCharCode(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

_ = String.prototype;
_.java_lang_Object_typeId$ = 2;
var $entry = com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(com_google_gwt_lang_EntryMethodHolder_init__V)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(com_google_gwt_lang_EntryMethodHolder_init__V)();
  }
}

var com_google_gwt_lang_ClassLiteralHolder__13Ljava_1lang_1StackTraceElement_12_1classLit = new java_lang_Class;
$stats && $stats({moduleName:'vegawavefeatures',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (vegawavefeatures) vegawavefeatures.onScriptLoad(gwtOnLoad);
})();
