gdjs._20027_20219_20986_22330Code = {};
gdjs._20027_20219_20986_22330Code.GDDialogueObjects1= [];
gdjs._20027_20219_20986_22330Code.GDDialogueObjects2= [];
gdjs._20027_20219_20986_22330Code.GDTagObjects1= [];
gdjs._20027_20219_20986_22330Code.GDTagObjects2= [];
gdjs._20027_20219_20986_22330Code.GDManObjects1= [];
gdjs._20027_20219_20986_22330Code.GDManObjects2= [];
gdjs._20027_20219_20986_22330Code.GDNewTextObjects1= [];
gdjs._20027_20219_20986_22330Code.GDNewTextObjects2= [];
gdjs._20027_20219_20986_22330Code.GDNewText2Objects1= [];
gdjs._20027_20219_20986_22330Code.GDNewText2Objects2= [];
gdjs._20027_20219_20986_22330Code.GDNewText3Objects1= [];
gdjs._20027_20219_20986_22330Code.GDNewText3Objects2= [];
gdjs._20027_20219_20986_22330Code.GDNewText4Objects1= [];
gdjs._20027_20219_20986_22330Code.GDNewText4Objects2= [];
gdjs._20027_20219_20986_22330Code.GDNewText5Objects1= [];
gdjs._20027_20219_20986_22330Code.GDNewText5Objects2= [];
gdjs._20027_20219_20986_22330Code.GDBackGroundObjects1= [];
gdjs._20027_20219_20986_22330Code.GDBackGroundObjects2= [];
gdjs._20027_20219_20986_22330Code.GDTagObjects1= [];
gdjs._20027_20219_20986_22330Code.GDTagObjects2= [];
gdjs._20027_20219_20986_22330Code.GDName1Objects1= [];
gdjs._20027_20219_20986_22330Code.GDName1Objects2= [];
gdjs._20027_20219_20986_22330Code.GDName2Objects1= [];
gdjs._20027_20219_20986_22330Code.GDName2Objects2= [];
gdjs._20027_20219_20986_22330Code.GDManObjects1= [];
gdjs._20027_20219_20986_22330Code.GDManObjects2= [];


gdjs._20027_20219_20986_22330Code.asyncCallback13131068 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Dialogue"), gdjs._20027_20219_20986_22330Code.GDDialogueObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("Man"), gdjs._20027_20219_20986_22330Code.GDManObjects2);

{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDDialogueObjects2.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDDialogueObjects2[i].getBehavior("Tween").addObjectOpacityTween("appear", 255, "easeInExpo", 2000, false);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDManObjects2.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDManObjects2[i].getBehavior("Tween").addObjectPositionXTween("enter", 800, "easeInExpo", 2000, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "主题曲.aac", true, 50, 1);
}}
gdjs._20027_20219_20986_22330Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._20027_20219_20986_22330Code.GDDialogueObjects1) asyncObjectsList.addObject("Dialogue", obj);
for (const obj of gdjs._20027_20219_20986_22330Code.GDManObjects1) asyncObjectsList.addObject("Man", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._20027_20219_20986_22330Code.asyncCallback13131068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._20027_20219_20986_22330Code.GDDialogueObjects1});
gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._20027_20219_20986_22330Code.GDDialogueObjects1});
gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._20027_20219_20986_22330Code.GDDialogueObjects1});
gdjs._20027_20219_20986_22330Code.asyncCallback13141804 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs._20027_20219_20986_22330Code.GDBackGroundObjects2);
{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDBackGroundObjects2.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDBackGroundObjects2[i].getBehavior("Tween").addObjectOpacityTween("endBG", 0, "easeOutExpo", 2000, false);
}
}}
gdjs._20027_20219_20986_22330Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._20027_20219_20986_22330Code.asyncCallback13141804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDNewText5Objects1Objects = Hashtable.newFrom({"NewText5": gdjs._20027_20219_20986_22330Code.GDNewText5Objects1});
gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDNewText5Objects1Objects = Hashtable.newFrom({"NewText5": gdjs._20027_20219_20986_22330Code.GDNewText5Objects1});
gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDNewText5Objects1Objects = Hashtable.newFrom({"NewText5": gdjs._20027_20219_20986_22330Code.GDNewText5Objects1});
gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDNewText5Objects1Objects = Hashtable.newFrom({"NewText5": gdjs._20027_20219_20986_22330Code.GDNewText5Objects1});
gdjs._20027_20219_20986_22330Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_22330Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Man"), gdjs._20027_20219_20986_22330Code.GDManObjects1);
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_22330Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_22330Code.GDName2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._20027_20219_20986_22330Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._20027_20219_20986_22330Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._20027_20219_20986_22330Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._20027_20219_20986_22330Code.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._20027_20219_20986_22330Code.GDTagObjects1);
{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDDialogueObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDManObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDManObjects1[i].setX(1110);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewTextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDName1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDName2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDTagObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDTagObjects1[i].hide();
}
}
{ //Subevents
gdjs._20027_20219_20986_22330Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_22330Code.GDDialogueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_22330Code.GDDialogueObjects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_22330Code.GDDialogueObjects1[i].getBehavior("Tween").hasFinished("appear") ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_22330Code.GDDialogueObjects1[k] = gdjs._20027_20219_20986_22330Code.GDDialogueObjects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_22330Code.GDDialogueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_22330Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._20027_20219_20986_22330Code.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._20027_20219_20986_22330Code.GDTagObjects1);
{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDTagObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDTagObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDName1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewTextObjects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_22330Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._20027_20219_20986_22330Code.GDNewTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_22330Code.GDNewTextObjects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_22330Code.GDNewTextObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_22330Code.GDNewTextObjects1[k] = gdjs._20027_20219_20986_22330Code.GDNewTextObjects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_22330Code.GDNewTextObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_22330Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_22330Code.GDName2Objects1);
/* Reuse gdjs._20027_20219_20986_22330Code.GDNewTextObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._20027_20219_20986_22330Code.GDNewText2Objects1);
{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewTextObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDName2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDName1Objects1[i].setOpacity(0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_22330Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._20027_20219_20986_22330Code.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_22330Code.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_22330Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_22330Code.GDNewText2Objects1[k] = gdjs._20027_20219_20986_22330Code.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_22330Code.GDNewText2Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_22330Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_22330Code.GDName2Objects1);
/* Reuse gdjs._20027_20219_20986_22330Code.GDNewText2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._20027_20219_20986_22330Code.GDNewText3Objects1);
{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDName2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDName1Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText3Objects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._20027_20219_20986_22330Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._20027_20219_20986_22330Code.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_22330Code.GDNewText3Objects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_22330Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_22330Code.GDNewText3Objects1[k] = gdjs._20027_20219_20986_22330Code.GDNewText3Objects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_22330Code.GDNewText3Objects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Name1"), gdjs._20027_20219_20986_22330Code.GDName1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Name2"), gdjs._20027_20219_20986_22330Code.GDName2Objects1);
/* Reuse gdjs._20027_20219_20986_22330Code.GDNewText3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._20027_20219_20986_22330Code.GDNewText4Objects1);
{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDName1Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDName1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDName2Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDName2Objects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText4Objects1[i].hide(false);
}
}
{ //Subevents
gdjs._20027_20219_20986_22330Code.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BackGround"), gdjs._20027_20219_20986_22330Code.GDBackGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._20027_20219_20986_22330Code.GDNewText4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_22330Code.GDBackGroundObjects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_22330Code.GDBackGroundObjects1[i].getBehavior("Tween").hasFinished("endBG") ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_22330Code.GDBackGroundObjects1[k] = gdjs._20027_20219_20986_22330Code.GDBackGroundObjects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_22330Code.GDBackGroundObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._20027_20219_20986_22330Code.GDNewText4Objects1.length;i<l;++i) {
    if ( gdjs._20027_20219_20986_22330Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._20027_20219_20986_22330Code.GDNewText4Objects1[k] = gdjs._20027_20219_20986_22330Code.GDNewText4Objects1[i];
        ++k;
    }
}
gdjs._20027_20219_20986_22330Code.GDNewText4Objects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "睡眠教育", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._20027_20219_20986_22330Code.GDNewText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDNewText5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "按钮音效B.aac", false, 15, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._20027_20219_20986_22330Code.GDNewText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDNewText5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "睡眠教育", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._20027_20219_20986_22330Code.GDNewText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDNewText5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._20027_20219_20986_22330Code.GDNewText5Objects1 */
{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText5Objects1[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText5"), gdjs._20027_20219_20986_22330Code.GDNewText5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._20027_20219_20986_22330Code.mapOfGDgdjs_46_9520027_9520219_9520986_9522330Code_46GDNewText5Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._20027_20219_20986_22330Code.GDNewText5Objects1 */
{for(var i = 0, len = gdjs._20027_20219_20986_22330Code.GDNewText5Objects1.length ;i < len;++i) {
    gdjs._20027_20219_20986_22330Code.GDNewText5Objects1[i].setOpacity(255);
}
}}

}


};

gdjs._20027_20219_20986_22330Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20027_20219_20986_22330Code.GDDialogueObjects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDDialogueObjects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDTagObjects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDTagObjects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDManObjects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDManObjects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDNewTextObjects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDNewTextObjects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDNewText2Objects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDNewText2Objects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDNewText3Objects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDNewText3Objects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDNewText4Objects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDNewText4Objects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDNewText5Objects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDNewText5Objects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDBackGroundObjects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDBackGroundObjects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDTagObjects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDTagObjects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDName1Objects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDName1Objects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDName2Objects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDName2Objects2.length = 0;
gdjs._20027_20219_20986_22330Code.GDManObjects1.length = 0;
gdjs._20027_20219_20986_22330Code.GDManObjects2.length = 0;

gdjs._20027_20219_20986_22330Code.eventsList2(runtimeScene);

return;

}

gdjs['_20027_20219_20986_22330Code'] = gdjs._20027_20219_20986_22330Code;
