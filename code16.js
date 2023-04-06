gdjs._36873_39033B_20027_20219_20445_30041_21306Code = {};
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects2= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects1= [];
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects2= [];


gdjs._36873_39033B_20027_20219_20445_30041_21306Code.asyncCallback13549052 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Dialogue"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Man"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects2);

{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects2.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects2[i].getBehavior("Tween").addObjectOpacityTween("appear", 255, "easeInExpo", 2000, false);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects2.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects2[i].getBehavior("Tween").addObjectPositionXTween("enter", 800, "easeInExpo", 2000, false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("toCheck"), false);
}}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1) asyncObjectsList.addObject("Dialogue", obj);
for (const obj of gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects1) asyncObjectsList.addObject("Man", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._36873_39033B_20027_20219_20445_30041_21306Code.asyncCallback13549052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1});
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.asyncCallback13552988 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("toCheck"), true);
}}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._36873_39033B_20027_20219_20445_30041_21306Code.asyncCallback13552988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1});
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.asyncCallback13559540 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects2);
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects2.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects2[i].getBehavior("Tween").addObjectOpacityTween("endBG", 0, "easeOutExpo", 2000, false);
}
}}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(7), (runtimeScene) => (gdjs._36873_39033B_20027_20219_20445_30041_21306Code.asyncCallback13559540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1});
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.asyncCallback13561708 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects2);
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects2.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects2[i].getBehavior("Tween").addObjectOpacityTween("endBG", 0, "easeOutExpo", 2000, false);
}
}}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._36873_39033B_20027_20219_20445_30041_21306Code.asyncCallback13561708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._36873_39033B_20027_20219_20445_30041_21306Code.asyncCallback13562964 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "胎儿新闻", false);
}}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._36873_39033B_20027_20219_20445_30041_21306Code.asyncCallback13562964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects = Hashtable.newFrom({"NewText6": gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1});
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects = Hashtable.newFrom({"NewText6": gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1});
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects = Hashtable.newFrom({"NewText6": gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1});
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects = Hashtable.newFrom({"NewText6": gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1});
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects = Hashtable.newFrom({"NewText6": gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1});
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects = Hashtable.newFrom({"NewText6": gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1});
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects = Hashtable.newFrom({"NewText6": gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1});
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects = Hashtable.newFrom({"NewText6": gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1});
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Man"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1);
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects1[i].setX(1110);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "主题曲.aac", true, 50, 1);
}
{ //Subevents
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1[i].getBehavior("Tween").hasFinished("appear") ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects1);
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1);
/* Reuse gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1 */
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1);
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1[i].setOpacity(0);
}
}
{ //Subevents
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("toCheck"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("No"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1);
/* Reuse gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1 */
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("toCheck"), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("No"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("toCheck"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1[i].IsActivated((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1);
/* Reuse gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1);
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("toCheck"), false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1);
/* Reuse gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1);
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1);
/* Reuse gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1);
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1[i].getBehavior("Tween").hasFinished("endBG") ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按钮音效B.aac", false, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "胎儿新闻", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1 */
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1 */
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1[i].setOpacity(255);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1[i].getBehavior("Tween").hasFinished("endBG") ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1.length;i<l;++i) {
    if ( gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1[k] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1[i];
        ++k;
    }
}
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "胎儿新闻", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按钮音效B.aac", false, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "胎儿新闻", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1 */
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._36873_39033B_20027_20219_20445_30041_21306Code.mapOfGDgdjs_46_9536873_9539033B_9520027_9520219_9520445_9530041_9521306Code_46GDNewText6Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1 */
{for(var i = 0, len = gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1[i].setOpacity(255);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._36873_39033B_20027_20219_20445_30041_21306Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDDialogueObjects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewTextObjects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText2Objects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText3Objects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText4Objects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText5Objects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNewText6Objects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDYesObjects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDNoObjects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDBackGroundObjects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDTagObjects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName1Objects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDName2Objects2.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects1.length = 0;
gdjs._36873_39033B_20027_20219_20445_30041_21306Code.GDManObjects2.length = 0;

gdjs._36873_39033B_20027_20219_20445_30041_21306Code.eventsList5(runtimeScene);

return;

}

gdjs['_36873_39033B_20027_20219_20445_30041_21306Code'] = gdjs._36873_39033B_20027_20219_20445_30041_21306Code;
