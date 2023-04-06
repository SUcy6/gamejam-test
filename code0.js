gdjs.introCode = {};
gdjs.introCode.GDDialogueObjects1= [];
gdjs.introCode.GDDialogueObjects2= [];
gdjs.introCode.GDTagObjects1= [];
gdjs.introCode.GDTagObjects2= [];
gdjs.introCode.GDManObjects1= [];
gdjs.introCode.GDManObjects2= [];
gdjs.introCode.GDNewVideoObjects1= [];
gdjs.introCode.GDNewVideoObjects2= [];


gdjs.introCode.asyncCallback13110844 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Entry1", false);
}}
gdjs.introCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.introCode.asyncCallback13110844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.introCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.introCode.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.introCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.introCode.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.introCode.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.introCode.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.introCode.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.introCode.GDNewVideoObjects1[k] = gdjs.introCode.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.introCode.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.introCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.introCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.introCode.GDDialogueObjects1.length = 0;
gdjs.introCode.GDDialogueObjects2.length = 0;
gdjs.introCode.GDTagObjects1.length = 0;
gdjs.introCode.GDTagObjects2.length = 0;
gdjs.introCode.GDManObjects1.length = 0;
gdjs.introCode.GDManObjects2.length = 0;
gdjs.introCode.GDNewVideoObjects1.length = 0;
gdjs.introCode.GDNewVideoObjects2.length = 0;

gdjs.introCode.eventsList1(runtimeScene);

return;

}

gdjs['introCode'] = gdjs.introCode;
