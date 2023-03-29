gdjs.Entry1Code = {};
gdjs.Entry1Code.GDNewText3Objects1= [];
gdjs.Entry1Code.GDNewText3Objects2= [];
gdjs.Entry1Code.GDentryTitleObjects1= [];
gdjs.Entry1Code.GDentryTitleObjects2= [];
gdjs.Entry1Code.GDNewVideoObjects1= [];
gdjs.Entry1Code.GDNewVideoObjects2= [];
gdjs.Entry1Code.GDStartObjects1= [];
gdjs.Entry1Code.GDStartObjects2= [];

gdjs.Entry1Code.conditionTrue_0 = {val:false};
gdjs.Entry1Code.condition0IsTrue_0 = {val:false};
gdjs.Entry1Code.condition1IsTrue_0 = {val:false};
gdjs.Entry1Code.condition2IsTrue_0 = {val:false};


gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Entry1Code.GDStartObjects1});
gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Entry1Code.GDStartObjects1});
gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Entry1Code.GDStartObjects1});
gdjs.Entry1Code.eventsList0 = function(runtimeScene) {

{


gdjs.Entry1Code.condition0IsTrue_0.val = false;
{
gdjs.Entry1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Entry1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("entryTitle"), gdjs.Entry1Code.GDentryTitleObjects1);
{for(var i = 0, len = gdjs.Entry1Code.GDentryTitleObjects1.length ;i < len;++i) {
    gdjs.Entry1Code.GDentryTitleObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Entry1Code.GDStartObjects1);

gdjs.Entry1Code.condition0IsTrue_0.val = false;
{
gdjs.Entry1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects, runtimeScene, true, false);
}if (gdjs.Entry1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Entry1Code.GDStartObjects1 */
{for(var i = 0, len = gdjs.Entry1Code.GDStartObjects1.length ;i < len;++i) {
    gdjs.Entry1Code.GDStartObjects1[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Entry1Code.GDStartObjects1);

gdjs.Entry1Code.condition0IsTrue_0.val = false;
{
gdjs.Entry1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects, runtimeScene, true, true);
}if (gdjs.Entry1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Entry1Code.GDStartObjects1 */
{for(var i = 0, len = gdjs.Entry1Code.GDStartObjects1.length ;i < len;++i) {
    gdjs.Entry1Code.GDStartObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Entry1Code.GDStartObjects1);

gdjs.Entry1Code.condition0IsTrue_0.val = false;
gdjs.Entry1Code.condition1IsTrue_0.val = false;
{
gdjs.Entry1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Entry1Code.condition0IsTrue_0.val ) {
{
gdjs.Entry1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Entry1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Entry2", false);
}}

}


};

gdjs.Entry1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Entry1Code.GDNewText3Objects1.length = 0;
gdjs.Entry1Code.GDNewText3Objects2.length = 0;
gdjs.Entry1Code.GDentryTitleObjects1.length = 0;
gdjs.Entry1Code.GDentryTitleObjects2.length = 0;
gdjs.Entry1Code.GDNewVideoObjects1.length = 0;
gdjs.Entry1Code.GDNewVideoObjects2.length = 0;
gdjs.Entry1Code.GDStartObjects1.length = 0;
gdjs.Entry1Code.GDStartObjects2.length = 0;

gdjs.Entry1Code.eventsList0(runtimeScene);

return;

}

gdjs['Entry1Code'] = gdjs.Entry1Code;
