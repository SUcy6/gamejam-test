gdjs._31070_31192_22899_23376_23545_358052Code = {};
gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects2= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects1= [];
gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects2= [];


gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13425612 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Man"), gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects2);

{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects2.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects2[i].getBehavior("Tween").addObjectOpacityTween("appear", 255, "easeInExpo", 2000, false);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects2.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects2[i].getBehavior("Tween").addObjectPositionXTween("enter", 800, "easeInExpo", 2000, false);
}
}}
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1) asyncObjectsList.addObject("Dialogue", obj);
for (const obj of gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects1) asyncObjectsList.addObject("Man", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13425612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1});
gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1});
gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1});
gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13434220 = function (runtimeScene, asyncObjectsList) {
}
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13434220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1});
gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13436436 = function (runtimeScene, asyncObjectsList) {
}
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13436436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1});
gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13438604 = function (runtimeScene, asyncObjectsList) {
}
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13438604(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1});
gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13440772 = function (runtimeScene, asyncObjectsList) {
}
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13440772(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1});
gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13442940 = function (runtimeScene, asyncObjectsList) {
}
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13442940(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1});
gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13445252 = function (runtimeScene, asyncObjectsList) {
}
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13445252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1});
gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13447420 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects2);
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects2.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects2[i].getBehavior("Tween").addObjectOpacityTween("endBG", 0, "easeOutExpo", 2000, false);
}
}}
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs._31070_31192_22899_23376_23545_358052Code.asyncCallback13447420(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._31070_31192_22899_23376_23545_358052Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Man"), gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText10"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText7"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText8"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText9"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects1);
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects1[i].setX(1110);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "某悬疑片段音乐.aac", true, 50, 1);
}
{ //Subevents
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1[i].getBehavior("Tween").hasFinished("appear") ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects1);
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1);
/* Reuse gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1[i].setOpacity(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1);
/* Reuse gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1);
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1);
/* Reuse gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1);
/* Reuse gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1);
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1);
/* Reuse gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1);
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText6"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1);
/* Reuse gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText7"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1);
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText7"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1);
/* Reuse gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText8"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1);
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText8"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1);
/* Reuse gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText9"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1);
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText9"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_23545_358052Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9523545_95358052Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText10"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1);
/* Reuse gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1 */
{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._31070_31192_22899_23376_23545_358052Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText10"), gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects1[i].getBehavior("Tween").hasFinished("endBG") ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1[k] = gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "神秘女子", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._31070_31192_22899_23376_23545_358052Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDDialogueObjects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewTextObjects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText2Objects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText3Objects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText4Objects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText5Objects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText6Objects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText7Objects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText8Objects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText9Objects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDNewText10Objects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDBackGroundObjects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDManObjects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDName1Objects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDName2Objects2.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects1.length = 0;
gdjs._31070_31192_22899_23376_23545_358052Code.GDTagObjects2.length = 0;

gdjs._31070_31192_22899_23376_23545_358052Code.eventsList8(runtimeScene);

return;

}

gdjs['_31070_31192_22899_23376_23545_358052Code'] = gdjs._31070_31192_22899_23376_23545_358052Code;
