gdjs.Entry1Code = {};
gdjs.Entry1Code.GDDialogueObjects1= [];
gdjs.Entry1Code.GDDialogueObjects2= [];
gdjs.Entry1Code.GDTagObjects1= [];
gdjs.Entry1Code.GDTagObjects2= [];
gdjs.Entry1Code.GDManObjects1= [];
gdjs.Entry1Code.GDManObjects2= [];
gdjs.Entry1Code.GDentryTitleObjects1= [];
gdjs.Entry1Code.GDentryTitleObjects2= [];
gdjs.Entry1Code.GDStartObjects1= [];
gdjs.Entry1Code.GDStartObjects2= [];
gdjs.Entry1Code.GDBackGroundObjects1= [];
gdjs.Entry1Code.GDBackGroundObjects2= [];


gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Entry1Code.GDStartObjects1});
gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Entry1Code.GDStartObjects1});
gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects = Hashtable.newFrom({"Start": gdjs.Entry1Code.GDStartObjects1});
gdjs.Entry1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13114812);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "主题曲.aac", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("entryTitle"), gdjs.Entry1Code.GDentryTitleObjects1);
{for(var i = 0, len = gdjs.Entry1Code.GDentryTitleObjects1.length ;i < len;++i) {
    gdjs.Entry1Code.GDentryTitleObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Entry1Code.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Entry1Code.GDStartObjects1 */
{for(var i = 0, len = gdjs.Entry1Code.GDStartObjects1.length ;i < len;++i) {
    gdjs.Entry1Code.GDStartObjects1[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Entry1Code.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Entry1Code.GDStartObjects1 */
{for(var i = 0, len = gdjs.Entry1Code.GDStartObjects1.length ;i < len;++i) {
    gdjs.Entry1Code.GDStartObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Entry1Code.GDStartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Entry1Code.mapOfGDgdjs_46Entry1Code_46GDStartObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs.Entry1Code.GDBackGroundObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "按钮音效B.aac", false, 15, 2);
}{for(var i = 0, len = gdjs.Entry1Code.GDBackGroundObjects1.length ;i < len;++i) {
    gdjs.Entry1Code.GDBackGroundObjects1[i].getBehavior("Tween").addObjectOpacityTween("start", 0, "easeOutExpo", 3000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs.Entry1Code.GDBackGroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Entry1Code.GDBackGroundObjects1.length;i<l;++i) {
    if ( gdjs.Entry1Code.GDBackGroundObjects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Entry1Code.GDBackGroundObjects1[k] = gdjs.Entry1Code.GDBackGroundObjects1[i];
        ++k;
    }
}
gdjs.Entry1Code.GDBackGroundObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "主任出场", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Entry1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Entry1Code.GDDialogueObjects1.length = 0;
gdjs.Entry1Code.GDDialogueObjects2.length = 0;
gdjs.Entry1Code.GDTagObjects1.length = 0;
gdjs.Entry1Code.GDTagObjects2.length = 0;
gdjs.Entry1Code.GDManObjects1.length = 0;
gdjs.Entry1Code.GDManObjects2.length = 0;
gdjs.Entry1Code.GDentryTitleObjects1.length = 0;
gdjs.Entry1Code.GDentryTitleObjects2.length = 0;
gdjs.Entry1Code.GDStartObjects1.length = 0;
gdjs.Entry1Code.GDStartObjects2.length = 0;
gdjs.Entry1Code.GDBackGroundObjects1.length = 0;
gdjs.Entry1Code.GDBackGroundObjects2.length = 0;

gdjs.Entry1Code.eventsList0(runtimeScene);

return;

}

gdjs['Entry1Code'] = gdjs.Entry1Code;
