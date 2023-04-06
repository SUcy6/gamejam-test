gdjs.Entry2Code = {};
gdjs.Entry2Code.GDDialogueObjects1= [];
gdjs.Entry2Code.GDDialogueObjects2= [];
gdjs.Entry2Code.GDTagObjects1= [];
gdjs.Entry2Code.GDTagObjects2= [];
gdjs.Entry2Code.GDManObjects1= [];
gdjs.Entry2Code.GDManObjects2= [];
gdjs.Entry2Code.GDNewVideoObjects1= [];
gdjs.Entry2Code.GDNewVideoObjects2= [];
gdjs.Entry2Code.GDNewVideo2Objects1= [];
gdjs.Entry2Code.GDNewVideo2Objects2= [];


gdjs.Entry2Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Entry2Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.Entry2Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Entry2Code.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Entry2Code.GDNewVideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Entry2Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Entry2Code.GDNewVideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Entry2Code.GDNewVideoObjects1[k] = gdjs.Entry2Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Entry2Code.GDNewVideoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "睡眠教育", false);
}}

}


};

gdjs.Entry2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Entry2Code.GDDialogueObjects1.length = 0;
gdjs.Entry2Code.GDDialogueObjects2.length = 0;
gdjs.Entry2Code.GDTagObjects1.length = 0;
gdjs.Entry2Code.GDTagObjects2.length = 0;
gdjs.Entry2Code.GDManObjects1.length = 0;
gdjs.Entry2Code.GDManObjects2.length = 0;
gdjs.Entry2Code.GDNewVideoObjects1.length = 0;
gdjs.Entry2Code.GDNewVideoObjects2.length = 0;
gdjs.Entry2Code.GDNewVideo2Objects1.length = 0;
gdjs.Entry2Code.GDNewVideo2Objects2.length = 0;

gdjs.Entry2Code.eventsList0(runtimeScene);

return;

}

gdjs['Entry2Code'] = gdjs.Entry2Code;
