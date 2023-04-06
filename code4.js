gdjs._20027_20219_20986_223302Code = {};
gdjs._20027_20219_20986_223302Code.GDDialogueObjects1= [];
gdjs._20027_20219_20986_223302Code.GDDialogueObjects2= [];
gdjs._20027_20219_20986_223302Code.GDTagObjects1= [];
gdjs._20027_20219_20986_223302Code.GDTagObjects2= [];
gdjs._20027_20219_20986_223302Code.GDManObjects1= [];
gdjs._20027_20219_20986_223302Code.GDManObjects2= [];
gdjs._20027_20219_20986_223302Code.GDNewTextObjects1= [];
gdjs._20027_20219_20986_223302Code.GDNewTextObjects2= [];
gdjs._20027_20219_20986_223302Code.GDNewText2Objects1= [];
gdjs._20027_20219_20986_223302Code.GDNewText2Objects2= [];
gdjs._20027_20219_20986_223302Code.GDNewText3Objects1= [];
gdjs._20027_20219_20986_223302Code.GDNewText3Objects2= [];
gdjs._20027_20219_20986_223302Code.GDNewText4Objects1= [];
gdjs._20027_20219_20986_223302Code.GDNewText4Objects2= [];
gdjs._20027_20219_20986_223302Code.GDNewText6Objects1= [];
gdjs._20027_20219_20986_223302Code.GDNewText6Objects2= [];
gdjs._20027_20219_20986_223302Code.GDNewText8Objects1= [];
gdjs._20027_20219_20986_223302Code.GDNewText8Objects2= [];
gdjs._20027_20219_20986_223302Code.GDNewText5Objects1= [];
gdjs._20027_20219_20986_223302Code.GDNewText5Objects2= [];
gdjs._20027_20219_20986_223302Code.GDNewText7Objects1= [];
gdjs._20027_20219_20986_223302Code.GDNewText7Objects2= [];
gdjs._20027_20219_20986_223302Code.GDNewTextEnterObjects1= [];
gdjs._20027_20219_20986_223302Code.GDNewTextEnterObjects2= [];
gdjs._20027_20219_20986_223302Code.GDBackGroundObjects1= [];
gdjs._20027_20219_20986_223302Code.GDBackGroundObjects2= [];
gdjs._20027_20219_20986_223302Code.GDTagObjects1= [];
gdjs._20027_20219_20986_223302Code.GDTagObjects2= [];
gdjs._20027_20219_20986_223302Code.GDName1Objects1= [];
gdjs._20027_20219_20986_223302Code.GDName1Objects2= [];
gdjs._20027_20219_20986_223302Code.GDName2Objects1= [];
gdjs._20027_20219_20986_223302Code.GDName2Objects2= [];
gdjs._20027_20219_20986_223302Code.GDManObjects1= [];
gdjs._20027_20219_20986_223302Code.GDManObjects2= [];


gdjs._20027_20219_20986_223302Code.asyncCallback13225364 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Dialogue"), gdjs._20027_20219_20986_223302Code.GDDialogueObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Man"), gdjs._20027_20219_20986_223302Code.GDManObjects2);

{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDDialogueObjects2.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDDialogueObjects2[i].getBehavior("Tween").addObjectOpacityTween("appear", 255, "easeInExpo", 2000, false);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDManObjects2.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDManObjects2[i].getBehavior("Tween").addObjectPositionXTween("enter", 800, "easeInExpo", 2000, false);
}
}}
gdjs._20027_20219_20986_223302Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._20027_20219_20986_223302Code.GDDialogueObjects1) asyncObjectsList.addObject("Dialogue", obj);
for (const obj of gdjs._20027_20219_20986_223302Code.GDManObjects1) asyncObjectsList.addObject("Man", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._20027_20219_20986_223302Code.asyncCallback13225364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._20027_20219_20986_223302Code.GDDialogueObjects1});
gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._20027_20219_20986_223302Code.GDDialogueObjects1});
gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._20027_20219_20986_223302Code.GDDialogueObjects1});
gdjs._20027_20219_20986_223302Code.asyncCallback13233356 = function (runtimeScene, asyncObjectsList) {
}
gdjs._20027_20219_20986_223302Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._20027_20219_20986_223302Code.asyncCallback13233356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._20027_20219_20986_223302Code.GDDialogueObjects1});
gdjs._20027_20219_20986_223302Code.asyncCallback13235516 = function (runtimeScene, asyncObjectsList) {
}
gdjs._20027_20219_20986_223302Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._20027_20219_20986_223302Code.asyncCallback13235516(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._20027_20219_20986_223302Code.GDDialogueObjects1});
gdjs._20027_20219_20986_223302Code.asyncCallback13237604 = function (runtimeScene, asyncObjectsList) {
}
gdjs._20027_20219_20986_223302Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._20027_20219_20986_223302Code.asyncCallback13237604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._20027_20219_20986_223302Code.GDDialogueObjects1});
gdjs._20027_20219_20986_223302Code.asyncCallback13239676 = function (runtimeScene, asyncObjectsList) {
}
gdjs._20027_20219_20986_223302Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._20027_20219_20986_223302Code.asyncCallback13239676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._20027_20219_20986_223302Code.GDDialogueObjects1});
gdjs._20027_20219_20986_223302Code.asyncCallback13241764 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs._20027_20219_20986_223302Code.GDBackGroundObjects2);
{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDBackGroundObjects2.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDBackGroundObjects2[i].getBehavior("Tween").addObjectOpacityTween("endBG", 0, "easeOutExpo", 2000, false);
}
}}
gdjs._20027_20219_20986_223302Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._20027_20219_20986_223302Code.asyncCallback13241764(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._20027_20219_20986_223302Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_223302Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Man"), gdjs._20027_20219_20986_223302Code.GDManObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_223302Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_223302Code.GDName2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._20027_20219_20986_223302Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._20027_20219_20986_223302Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._20027_20219_20986_223302Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._20027_20219_20986_223302Code.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._20027_20219_20986_223302Code.GDNewText5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._20027_20219_20986_223302Code.GDNewText6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText7"), gdjs._20027_20219_20986_223302Code.GDNewText7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText8"), gdjs._20027_20219_20986_223302Code.GDNewText8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._20027_20219_20986_223302Code.GDTagObjects1);
{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDDialogueObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDManObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDManObjects1[i].setX(1110);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText6Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText7Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText7Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText8Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText8Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText5Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText6Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText7Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText7Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText8Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText8Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDTagObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDTagObjects1[i].hide();
}
}
{ //Subevents
gdjs._20027_20219_20986_223302Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_223302Code.GDDialogueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_223302Code.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_223302Code.GDDialogueObjects1[i].getBehavior("Tween").hasFinished("appear") ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_223302Code.GDDialogueObjects1[k] = gdjs._20027_20219_20986_223302Code.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_223302Code.GDDialogueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_223302Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._20027_20219_20986_223302Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._20027_20219_20986_223302Code.GDTagObjects1);
{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDTagObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDTagObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewTextObjects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_223302Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._20027_20219_20986_223302Code.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_223302Code.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_223302Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_223302Code.GDNewTextObjects1[k] = gdjs._20027_20219_20986_223302Code.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_223302Code.GDNewTextObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_223302Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_223302Code.GDName2Objects1);
/* Reuse gdjs._20027_20219_20986_223302Code.GDNewTextObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._20027_20219_20986_223302Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewTextObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName1Objects1[i].setOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_223302Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._20027_20219_20986_223302Code.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_223302Code.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_223302Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_223302Code.GDNewText2Objects1[k] = gdjs._20027_20219_20986_223302Code.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_223302Code.GDNewText2Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_223302Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_223302Code.GDName2Objects1);
/* Reuse gdjs._20027_20219_20986_223302Code.GDNewText2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._20027_20219_20986_223302Code.GDNewText3Objects1);
{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText3Objects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_223302Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._20027_20219_20986_223302Code.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_223302Code.GDNewText3Objects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_223302Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_223302Code.GDNewText3Objects1[k] = gdjs._20027_20219_20986_223302Code.GDNewText3Objects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_223302Code.GDNewText3Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_223302Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_223302Code.GDName2Objects1);
/* Reuse gdjs._20027_20219_20986_223302Code.GDNewText3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._20027_20219_20986_223302Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText4Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._20027_20219_20986_223302Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_223302Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._20027_20219_20986_223302Code.GDNewText4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_223302Code.GDNewText4Objects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_223302Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_223302Code.GDNewText4Objects1[k] = gdjs._20027_20219_20986_223302Code.GDNewText4Objects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_223302Code.GDNewText4Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_223302Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_223302Code.GDName2Objects1);
/* Reuse gdjs._20027_20219_20986_223302Code.GDNewText4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._20027_20219_20986_223302Code.GDNewText5Objects1);
{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText5Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText5Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._20027_20219_20986_223302Code.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_223302Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._20027_20219_20986_223302Code.GDNewText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_223302Code.GDNewText5Objects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_223302Code.GDNewText5Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_223302Code.GDNewText5Objects1[k] = gdjs._20027_20219_20986_223302Code.GDNewText5Objects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_223302Code.GDNewText5Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_223302Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_223302Code.GDName2Objects1);
/* Reuse gdjs._20027_20219_20986_223302Code.GDNewText5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._20027_20219_20986_223302Code.GDNewText6Objects1);
{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText6Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText6Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._20027_20219_20986_223302Code.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_223302Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._20027_20219_20986_223302Code.GDNewText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_223302Code.GDNewText6Objects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_223302Code.GDNewText6Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_223302Code.GDNewText6Objects1[k] = gdjs._20027_20219_20986_223302Code.GDNewText6Objects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_223302Code.GDNewText6Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_223302Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_223302Code.GDName2Objects1);
/* Reuse gdjs._20027_20219_20986_223302Code.GDNewText6Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText7"), gdjs._20027_20219_20986_223302Code.GDNewText7Objects1);
{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText6Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText7Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText7Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText7Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText7Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._20027_20219_20986_223302Code.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_223302Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText7"), gdjs._20027_20219_20986_223302Code.GDNewText7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_223302Code.mapOfGDgdjs_46_9520027_9520219_9520986_95223302Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_223302Code.GDNewText7Objects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_223302Code.GDNewText7Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_223302Code.GDNewText7Objects1[k] = gdjs._20027_20219_20986_223302Code.GDNewText7Objects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_223302Code.GDNewText7Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_223302Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_223302Code.GDName2Objects1);
/* Reuse gdjs._20027_20219_20986_223302Code.GDNewText7Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText8"), gdjs._20027_20219_20986_223302Code.GDNewText8Objects1);
{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText7Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText7Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDName2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText8Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText8Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_223302Code.GDNewText8Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_223302Code.GDNewText8Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._20027_20219_20986_223302Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs._20027_20219_20986_223302Code.GDBackGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText8"), gdjs._20027_20219_20986_223302Code.GDNewText8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_223302Code.GDBackGroundObjects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_223302Code.GDBackGroundObjects1[i].getBehavior("Tween").hasFinished("endBG") ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_223302Code.GDBackGroundObjects1[k] = gdjs._20027_20219_20986_223302Code.GDBackGroundObjects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_223302Code.GDBackGroundObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_223302Code.GDNewText8Objects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_223302Code.GDNewText8Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_223302Code.GDNewText8Objects1[k] = gdjs._20027_20219_20986_223302Code.GDNewText8Objects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_223302Code.GDNewText8Objects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "注射器游戏", false);
}}

}


};

gdjs._20027_20219_20986_223302Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20027_20219_20986_223302Code.GDDialogueObjects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDDialogueObjects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDTagObjects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDTagObjects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDManObjects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDManObjects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewTextObjects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewTextObjects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText2Objects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText2Objects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText3Objects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText3Objects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText4Objects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText4Objects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText6Objects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText6Objects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText8Objects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText8Objects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText5Objects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText5Objects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText7Objects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewText7Objects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewTextEnterObjects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDNewTextEnterObjects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDBackGroundObjects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDBackGroundObjects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDTagObjects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDTagObjects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDName1Objects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDName1Objects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDName2Objects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDName2Objects2.length = 0;
gdjs._20027_20219_20986_223302Code.GDManObjects1.length = 0;
gdjs._20027_20219_20986_223302Code.GDManObjects2.length = 0;

gdjs._20027_20219_20986_223302Code.eventsList6(runtimeScene);

return;

}

gdjs['_20027_20219_20986_223302Code'] = gdjs._20027_20219_20986_223302Code;
