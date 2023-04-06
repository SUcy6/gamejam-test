gdjs._21387_21147_27893Code = {};
gdjs._21387_21147_27893Code.GDDialogueObjects1= [];
gdjs._21387_21147_27893Code.GDDialogueObjects2= [];
gdjs._21387_21147_27893Code.GDTagObjects1= [];
gdjs._21387_21147_27893Code.GDTagObjects2= [];
gdjs._21387_21147_27893Code.GDManObjects1= [];
gdjs._21387_21147_27893Code.GDManObjects2= [];
gdjs._21387_21147_27893Code.GDBlueBottleObjects1= [];
gdjs._21387_21147_27893Code.GDBlueBottleObjects2= [];
gdjs._21387_21147_27893Code.GDBlueDotBarObjects1= [];
gdjs._21387_21147_27893Code.GDBlueDotBarObjects2= [];
gdjs._21387_21147_27893Code.GDcommentObjects1= [];
gdjs._21387_21147_27893Code.GDcommentObjects2= [];
gdjs._21387_21147_27893Code.GDBGObjects1= [];
gdjs._21387_21147_27893Code.GDBGObjects2= [];
gdjs._21387_21147_27893Code.GDRollObjects1= [];
gdjs._21387_21147_27893Code.GDRollObjects2= [];
gdjs._21387_21147_27893Code.GDstage1Objects1= [];
gdjs._21387_21147_27893Code.GDstage1Objects2= [];
gdjs._21387_21147_27893Code.GDstage2Objects1= [];
gdjs._21387_21147_27893Code.GDstage2Objects2= [];
gdjs._21387_21147_27893Code.GDstage3Objects1= [];
gdjs._21387_21147_27893Code.GDstage3Objects2= [];
gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1= [];
gdjs._21387_21147_27893Code.GDNewTextBeforeObjects2= [];
gdjs._21387_21147_27893Code.GDNewText1Objects1= [];
gdjs._21387_21147_27893Code.GDNewText1Objects2= [];
gdjs._21387_21147_27893Code.GDNewText2Objects1= [];
gdjs._21387_21147_27893Code.GDNewText2Objects2= [];
gdjs._21387_21147_27893Code.GDNewText3Objects1= [];
gdjs._21387_21147_27893Code.GDNewText3Objects2= [];
gdjs._21387_21147_27893Code.GDname2Objects1= [];
gdjs._21387_21147_27893Code.GDname2Objects2= [];
gdjs._21387_21147_27893Code.GDname1Objects1= [];
gdjs._21387_21147_27893Code.GDname1Objects2= [];
gdjs._21387_21147_27893Code.GDNewText3aObjects1= [];
gdjs._21387_21147_27893Code.GDNewText3aObjects2= [];
gdjs._21387_21147_27893Code.GDNewText4Objects1= [];
gdjs._21387_21147_27893Code.GDNewText4Objects2= [];


gdjs._21387_21147_27893Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._21387_21147_27893Code.GDDialogueObjects1});
gdjs._21387_21147_27893Code.asyncCallback13308340 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._21387_21147_27893Code.GDDialogueObjects2);
gdjs.copyArray(runtimeScene.getObjects("Man"), gdjs._21387_21147_27893Code.GDManObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewText1"), gdjs._21387_21147_27893Code.GDNewText1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._21387_21147_27893Code.GDTagObjects2);
gdjs.copyArray(runtimeScene.getObjects("name2"), gdjs._21387_21147_27893Code.GDname2Objects2);
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDDialogueObjects2.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDDialogueObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDTagObjects2.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDTagObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname2Objects2.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname2Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDManObjects2.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDManObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText1Objects2.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText1Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText1Objects2.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText1Objects2[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().get("NextText").setNumber(1);
}}
gdjs._21387_21147_27893Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._21387_21147_27893Code.asyncCallback13308340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._21387_21147_27893Code.GDDialogueObjects1});
gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._21387_21147_27893Code.GDDialogueObjects1});
gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._21387_21147_27893Code.GDDialogueObjects1});
gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._21387_21147_27893Code.GDDialogueObjects1});
gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects = Hashtable.newFrom({"Dialogue": gdjs._21387_21147_27893Code.GDDialogueObjects1});
gdjs._21387_21147_27893Code.asyncCallback13319716 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "end", false);
}}
gdjs._21387_21147_27893Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs._21387_21147_27893Code.asyncCallback13319716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDBlueBottleObjects1Objects = Hashtable.newFrom({"BlueBottle": gdjs._21387_21147_27893Code.GDBlueBottleObjects1});
gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDRollObjects1Objects = Hashtable.newFrom({"Roll": gdjs._21387_21147_27893Code.GDRollObjects1});
gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDRollObjects1Objects = Hashtable.newFrom({"Roll": gdjs._21387_21147_27893Code.GDRollObjects1});
gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDRollObjects1Objects = Hashtable.newFrom({"Roll": gdjs._21387_21147_27893Code.GDRollObjects1});
gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDRollObjects1Objects = Hashtable.newFrom({"Roll": gdjs._21387_21147_27893Code.GDRollObjects1});
gdjs._21387_21147_27893Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._21387_21147_27893Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("Man"), gdjs._21387_21147_27893Code.GDManObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText1"), gdjs._21387_21147_27893Code.GDNewText1Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._21387_21147_27893Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._21387_21147_27893Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3a"), gdjs._21387_21147_27893Code.GDNewText3aObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._21387_21147_27893Code.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewTextBefore"), gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._21387_21147_27893Code.GDTagObjects1);
gdjs.copyArray(runtimeScene.getObjects("name1"), gdjs._21387_21147_27893Code.GDname1Objects1);
gdjs.copyArray(runtimeScene.getObjects("name2"), gdjs._21387_21147_27893Code.GDname2Objects1);
gdjs.copyArray(runtimeScene.getObjects("stage1"), gdjs._21387_21147_27893Code.GDstage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("stage2"), gdjs._21387_21147_27893Code.GDstage2Objects1);
gdjs.copyArray(runtimeScene.getObjects("stage3"), gdjs._21387_21147_27893Code.GDstage3Objects1);
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDstage1Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDstage1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDstage2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDstage2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDstage3Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDstage3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDManObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDManObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDDialogueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDTagObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDTagObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname1Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText1Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText3aObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText3aObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText1Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText1Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText3aObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText3aObjects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("IsInstruction"), false);
}
{ //Subevents
gdjs._21387_21147_27893Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._21387_21147_27893Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTextBefore"), gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1[k] = gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("IsInstruction"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13305444);
}
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._21387_21147_27893Code.GDDialogueObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Man"), gdjs._21387_21147_27893Code.GDManObjects1);
/* Reuse gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._21387_21147_27893Code.GDTagObjects1);
gdjs.copyArray(runtimeScene.getObjects("name2"), gdjs._21387_21147_27893Code.GDname2Objects1);
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDManObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDManObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDTagObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDTagObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname2Objects1[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("IsInstruction"), true);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("stage1"), gdjs._21387_21147_27893Code.GDstage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("stage2"), gdjs._21387_21147_27893Code.GDstage2Objects1);
gdjs.copyArray(runtimeScene.getObjects("stage3"), gdjs._21387_21147_27893Code.GDstage3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDstage1Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDstage1Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDstage1Objects1[k] = gdjs._21387_21147_27893Code.GDstage1Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDstage1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDstage2Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDstage2Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDstage2Objects1[k] = gdjs._21387_21147_27893Code.GDstage2Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDstage2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDstage3Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDstage3Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDstage3Objects1[k] = gdjs._21387_21147_27893Code.GDstage3Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDstage3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13308132);
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._21387_21147_27893Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._21387_21147_27893Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText1"), gdjs._21387_21147_27893Code.GDNewText1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDNewText1Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDNewText1Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDNewText1Objects1[k] = gdjs._21387_21147_27893Code.GDNewText1Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDNewText1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NextText")) == 1;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._21387_21147_27893Code.GDNewText1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._21387_21147_27893Code.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("name1"), gdjs._21387_21147_27893Code.GDname1Objects1);
gdjs.copyArray(runtimeScene.getObjects("name2"), gdjs._21387_21147_27893Code.GDname2Objects1);
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText1Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname1Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname2Objects1[i].setOpacity(0);
}
}{runtimeScene.getScene().getVariables().get("NextText").setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._21387_21147_27893Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._21387_21147_27893Code.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDNewText2Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDNewText2Objects1[k] = gdjs._21387_21147_27893Code.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDNewText2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NextText")) == 2;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._21387_21147_27893Code.GDNewText2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._21387_21147_27893Code.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("name1"), gdjs._21387_21147_27893Code.GDname1Objects1);
gdjs.copyArray(runtimeScene.getObjects("name2"), gdjs._21387_21147_27893Code.GDname2Objects1);
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname1Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname2Objects1[i].setOpacity(255);
}
}{runtimeScene.getScene().getVariables().get("NextText").setNumber(3);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._21387_21147_27893Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs._21387_21147_27893Code.GDNewText3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDNewText3Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDNewText3Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDNewText3Objects1[k] = gdjs._21387_21147_27893Code.GDNewText3Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDNewText3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NextText")) == 3;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._21387_21147_27893Code.GDNewText3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText3a"), gdjs._21387_21147_27893Code.GDNewText3aObjects1);
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText3Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText3aObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText3aObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText3aObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText3aObjects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().get("NextText").setNumber(4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._21387_21147_27893Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3a"), gdjs._21387_21147_27893Code.GDNewText3aObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDNewText3aObjects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDNewText3aObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDNewText3aObjects1[k] = gdjs._21387_21147_27893Code.GDNewText3aObjects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDNewText3aObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NextText")) == 4;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._21387_21147_27893Code.GDNewText3aObjects1 */
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._21387_21147_27893Code.GDNewText4Objects1);
gdjs.copyArray(runtimeScene.getObjects("name1"), gdjs._21387_21147_27893Code.GDname1Objects1);
gdjs.copyArray(runtimeScene.getObjects("name2"), gdjs._21387_21147_27893Code.GDname2Objects1);
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText3aObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText3aObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname1Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname1Objects1[i].setOpacity(255);
}
}{runtimeScene.getScene().getVariables().get("NextText").setNumber(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs._21387_21147_27893Code.GDDialogueObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs._21387_21147_27893Code.GDNewText4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDDialogueObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDNewText4Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDNewText4Objects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDNewText4Objects1[k] = gdjs._21387_21147_27893Code.GDNewText4Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDNewText4Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("NextText")) == 5;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._21387_21147_27893Code.GDDialogueObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Man"), gdjs._21387_21147_27893Code.GDManObjects1);
/* Reuse gdjs._21387_21147_27893Code.GDNewText4Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Tag"), gdjs._21387_21147_27893Code.GDTagObjects1);
gdjs.copyArray(runtimeScene.getObjects("name1"), gdjs._21387_21147_27893Code.GDname1Objects1);
gdjs.copyArray(runtimeScene.getObjects("name2"), gdjs._21387_21147_27893Code.GDname2Objects1);
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDNewText4Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDNewText4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDManObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDManObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDDialogueObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDDialogueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDTagObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDTagObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname1Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDname2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDname2Objects1[i].hide();
}
}
{ //Subevents
gdjs._21387_21147_27893Code.eventsList2(runtimeScene);} //End of subevents
}

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


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBottle"), gdjs._21387_21147_27893Code.GDBlueBottleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDBlueBottleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlueDotBar"), gdjs._21387_21147_27893Code.GDBlueDotBarObjects1);
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDBlueDotBarObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDBlueDotBarObjects1[i].SetValue(gdjs._21387_21147_27893Code.GDBlueDotBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "生育瓶滴水音效.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueDotBar"), gdjs._21387_21147_27893Code.GDBlueDotBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDBlueDotBarObjects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDBlueDotBarObjects1[i].IsFull((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDBlueDotBarObjects1[k] = gdjs._21387_21147_27893Code.GDBlueDotBarObjects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDBlueDotBarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "入职对话2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Roll"), gdjs._21387_21147_27893Code.GDRollObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDRollObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs._21387_21147_27893Code.GDRollObjects1 */
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDRollObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDRollObjects1[i].setAngle(gdjs._21387_21147_27893Code.GDRollObjects1[i].getAngle() + (35));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Roll"), gdjs._21387_21147_27893Code.GDRollObjects1);
gdjs.copyArray(runtimeScene.getObjects("stage1"), gdjs._21387_21147_27893Code.GDstage1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDRollObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDstage1Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDstage1Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDstage1Objects1[k] = gdjs._21387_21147_27893Code.GDstage1Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDstage1Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._21387_21147_27893Code.GDRollObjects1 */
/* Reuse gdjs._21387_21147_27893Code.GDstage1Objects1 */
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDRollObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDRollObjects1[i].setAngle(gdjs._21387_21147_27893Code.GDRollObjects1[i].getAngle() + (35));
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDstage1Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDstage1Objects1[i].getBehavior("Tween").addObjectOpacityTween("in1", 255, "easeInExpo", 2000, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "氧气阀音效.aac", false, 80, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Roll"), gdjs._21387_21147_27893Code.GDRollObjects1);
gdjs.copyArray(runtimeScene.getObjects("stage1"), gdjs._21387_21147_27893Code.GDstage1Objects1);
gdjs.copyArray(runtimeScene.getObjects("stage2"), gdjs._21387_21147_27893Code.GDstage2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDRollObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDstage1Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDstage1Objects1[i].getBehavior("Tween").hasFinished("in1") ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDstage1Objects1[k] = gdjs._21387_21147_27893Code.GDstage1Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDstage1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDstage2Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDstage2Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDstage2Objects1[k] = gdjs._21387_21147_27893Code.GDstage2Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDstage2Objects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._21387_21147_27893Code.GDRollObjects1 */
/* Reuse gdjs._21387_21147_27893Code.GDstage2Objects1 */
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDRollObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDRollObjects1[i].setAngle(gdjs._21387_21147_27893Code.GDRollObjects1[i].getAngle() + (35));
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDstage2Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDstage2Objects1[i].getBehavior("Tween").addObjectOpacityTween("in2", 255, "easeInExpo", 2000, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "氧气阀音效.aac", false, 80, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Roll"), gdjs._21387_21147_27893Code.GDRollObjects1);
gdjs.copyArray(runtimeScene.getObjects("stage2"), gdjs._21387_21147_27893Code.GDstage2Objects1);
gdjs.copyArray(runtimeScene.getObjects("stage3"), gdjs._21387_21147_27893Code.GDstage3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._21387_21147_27893Code.mapOfGDgdjs_46_9521387_9521147_9527893Code_46GDRollObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDstage2Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDstage2Objects1[i].getBehavior("Tween").hasFinished("in2") ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDstage2Objects1[k] = gdjs._21387_21147_27893Code.GDstage2Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDstage2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._21387_21147_27893Code.GDstage3Objects1.length;i<l;++i) {
    if ( gdjs._21387_21147_27893Code.GDstage3Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._21387_21147_27893Code.GDstage3Objects1[k] = gdjs._21387_21147_27893Code.GDstage3Objects1[i];
        ++k;
    }
}
gdjs._21387_21147_27893Code.GDstage3Objects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._21387_21147_27893Code.GDRollObjects1 */
/* Reuse gdjs._21387_21147_27893Code.GDstage3Objects1 */
{for(var i = 0, len = gdjs._21387_21147_27893Code.GDRollObjects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDRollObjects1[i].setAngle(gdjs._21387_21147_27893Code.GDRollObjects1[i].getAngle() + (35));
}
}{for(var i = 0, len = gdjs._21387_21147_27893Code.GDstage3Objects1.length ;i < len;++i) {
    gdjs._21387_21147_27893Code.GDstage3Objects1[i].getBehavior("Tween").addObjectOpacityTween("in3", 255, "easeInExpo", 2000, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "氧气阀音效.aac", false, 80, 1);
}}

}


};

gdjs._21387_21147_27893Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._21387_21147_27893Code.GDDialogueObjects1.length = 0;
gdjs._21387_21147_27893Code.GDDialogueObjects2.length = 0;
gdjs._21387_21147_27893Code.GDTagObjects1.length = 0;
gdjs._21387_21147_27893Code.GDTagObjects2.length = 0;
gdjs._21387_21147_27893Code.GDManObjects1.length = 0;
gdjs._21387_21147_27893Code.GDManObjects2.length = 0;
gdjs._21387_21147_27893Code.GDBlueBottleObjects1.length = 0;
gdjs._21387_21147_27893Code.GDBlueBottleObjects2.length = 0;
gdjs._21387_21147_27893Code.GDBlueDotBarObjects1.length = 0;
gdjs._21387_21147_27893Code.GDBlueDotBarObjects2.length = 0;
gdjs._21387_21147_27893Code.GDcommentObjects1.length = 0;
gdjs._21387_21147_27893Code.GDcommentObjects2.length = 0;
gdjs._21387_21147_27893Code.GDBGObjects1.length = 0;
gdjs._21387_21147_27893Code.GDBGObjects2.length = 0;
gdjs._21387_21147_27893Code.GDRollObjects1.length = 0;
gdjs._21387_21147_27893Code.GDRollObjects2.length = 0;
gdjs._21387_21147_27893Code.GDstage1Objects1.length = 0;
gdjs._21387_21147_27893Code.GDstage1Objects2.length = 0;
gdjs._21387_21147_27893Code.GDstage2Objects1.length = 0;
gdjs._21387_21147_27893Code.GDstage2Objects2.length = 0;
gdjs._21387_21147_27893Code.GDstage3Objects1.length = 0;
gdjs._21387_21147_27893Code.GDstage3Objects2.length = 0;
gdjs._21387_21147_27893Code.GDNewTextBeforeObjects1.length = 0;
gdjs._21387_21147_27893Code.GDNewTextBeforeObjects2.length = 0;
gdjs._21387_21147_27893Code.GDNewText1Objects1.length = 0;
gdjs._21387_21147_27893Code.GDNewText1Objects2.length = 0;
gdjs._21387_21147_27893Code.GDNewText2Objects1.length = 0;
gdjs._21387_21147_27893Code.GDNewText2Objects2.length = 0;
gdjs._21387_21147_27893Code.GDNewText3Objects1.length = 0;
gdjs._21387_21147_27893Code.GDNewText3Objects2.length = 0;
gdjs._21387_21147_27893Code.GDname2Objects1.length = 0;
gdjs._21387_21147_27893Code.GDname2Objects2.length = 0;
gdjs._21387_21147_27893Code.GDname1Objects1.length = 0;
gdjs._21387_21147_27893Code.GDname1Objects2.length = 0;
gdjs._21387_21147_27893Code.GDNewText3aObjects1.length = 0;
gdjs._21387_21147_27893Code.GDNewText3aObjects2.length = 0;
gdjs._21387_21147_27893Code.GDNewText4Objects1.length = 0;
gdjs._21387_21147_27893Code.GDNewText4Objects2.length = 0;

gdjs._21387_21147_27893Code.eventsList3(runtimeScene);

return;

}

gdjs['_21387_21147_27893Code'] = gdjs._21387_21147_27893Code;
