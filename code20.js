gdjs._20837_32844_22521_35757Code = {};
gdjs._20837_32844_22521_35757Code.GDDialogueObjects1= [];
gdjs._20837_32844_22521_35757Code.GDDialogueObjects2= [];
gdjs._20837_32844_22521_35757Code.GDTagObjects1= [];
gdjs._20837_32844_22521_35757Code.GDTagObjects2= [];
gdjs._20837_32844_22521_35757Code.GDManObjects1= [];
gdjs._20837_32844_22521_35757Code.GDManObjects2= [];
gdjs._20837_32844_22521_35757Code.GDHollyObjects1= [];
gdjs._20837_32844_22521_35757Code.GDHollyObjects2= [];
gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1= [];
gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects2= [];
gdjs._20837_32844_22521_35757Code.GDDialogueObjects1= [];
gdjs._20837_32844_22521_35757Code.GDDialogueObjects2= [];
gdjs._20837_32844_22521_35757Code.GDNewTextObjects1= [];
gdjs._20837_32844_22521_35757Code.GDNewTextObjects2= [];
gdjs._20837_32844_22521_35757Code.GDNewText2Objects1= [];
gdjs._20837_32844_22521_35757Code.GDNewText2Objects2= [];
gdjs._20837_32844_22521_35757Code.GDNewText3Objects1= [];
gdjs._20837_32844_22521_35757Code.GDNewText3Objects2= [];
gdjs._20837_32844_22521_35757Code.GDNewText4Objects1= [];
gdjs._20837_32844_22521_35757Code.GDNewText4Objects2= [];
gdjs._20837_32844_22521_35757Code.GDNewBBTextObjects1= [];
gdjs._20837_32844_22521_35757Code.GDNewBBTextObjects2= [];
gdjs._20837_32844_22521_35757Code.GDNewText5Objects1= [];
gdjs._20837_32844_22521_35757Code.GDNewText5Objects2= [];
gdjs._20837_32844_22521_35757Code.GDNewText6Objects1= [];
gdjs._20837_32844_22521_35757Code.GDNewText6Objects2= [];
gdjs._20837_32844_22521_35757Code.GDNewText7Objects1= [];
gdjs._20837_32844_22521_35757Code.GDNewText7Objects2= [];
gdjs._20837_32844_22521_35757Code.GDBGObjects1= [];
gdjs._20837_32844_22521_35757Code.GDBGObjects2= [];


gdjs._20837_32844_22521_35757Code.mapOfGDgdjs_46_9520837_9532844_9522521_9535757Code_46GDPurpleButtonWithShadowObjects1Objects = Hashtable.newFrom({"PurpleButtonWithShadow": gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1});
gdjs._20837_32844_22521_35757Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1[k] = gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "注射器游戏", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "工厂噪音背景音效.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20837_32844_22521_35757Code.mapOfGDgdjs_46_9520837_9532844_9522521_9535757Code_46GDPurpleButtonWithShadowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按钮音效B.aac", false, 15, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13609828);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "某悬疑片段音乐.aac", true, 100, 1);
}}

}


};

gdjs._20837_32844_22521_35757Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20837_32844_22521_35757Code.GDDialogueObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDDialogueObjects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDTagObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDTagObjects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDManObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDManObjects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDHollyObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDHollyObjects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDDialogueObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDDialogueObjects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewTextObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewTextObjects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText2Objects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText2Objects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText3Objects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText3Objects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText4Objects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText4Objects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewBBTextObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewBBTextObjects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText5Objects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText5Objects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText6Objects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText6Objects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText7Objects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText7Objects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDBGObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDBGObjects2.length = 0;

gdjs._20837_32844_22521_35757Code.eventsList0(runtimeScene);

return;

}

gdjs['_20837_32844_22521_35757Code'] = gdjs._20837_32844_22521_35757Code;
