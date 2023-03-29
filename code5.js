gdjs._22521_357572Code = {};
gdjs._22521_357572Code.GDNewText3Objects1= [];
gdjs._22521_357572Code.GDNewText3Objects2= [];
gdjs._22521_357572Code.GDBlueBottleObjects1= [];
gdjs._22521_357572Code.GDBlueBottleObjects2= [];
gdjs._22521_357572Code.GDwhyObjects1= [];
gdjs._22521_357572Code.GDwhyObjects2= [];
gdjs._22521_357572Code.GDwhy2Objects1= [];
gdjs._22521_357572Code.GDwhy2Objects2= [];
gdjs._22521_357572Code.GDreply1Objects1= [];
gdjs._22521_357572Code.GDreply1Objects2= [];
gdjs._22521_357572Code.GDreply2Objects1= [];
gdjs._22521_357572Code.GDreply2Objects2= [];
gdjs._22521_357572Code.GDBlueDotBarObjects1= [];
gdjs._22521_357572Code.GDBlueDotBarObjects2= [];
gdjs._22521_357572Code.GDcommentObjects1= [];
gdjs._22521_357572Code.GDcommentObjects2= [];

gdjs._22521_357572Code.conditionTrue_0 = {val:false};
gdjs._22521_357572Code.condition0IsTrue_0 = {val:false};
gdjs._22521_357572Code.condition1IsTrue_0 = {val:false};
gdjs._22521_357572Code.condition2IsTrue_0 = {val:false};


gdjs._22521_357572Code.asyncCallback8122916 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("why2"), gdjs._22521_357572Code.GDwhy2Objects2);
{for(var i = 0, len = gdjs._22521_357572Code.GDwhy2Objects2.length ;i < len;++i) {
    gdjs._22521_357572Code.GDwhy2Objects2[i].hide(false);
}
}}
gdjs._22521_357572Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._22521_357572Code.asyncCallback8122916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._22521_357572Code.mapOfGDgdjs_46_9522521_95357572Code_46GDBlueBottleObjects1Objects = Hashtable.newFrom({"BlueBottle": gdjs._22521_357572Code.GDBlueBottleObjects1});
gdjs._22521_357572Code.eventsList1 = function(runtimeScene) {

{


gdjs._22521_357572Code.condition0IsTrue_0.val = false;
{
gdjs._22521_357572Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._22521_357572Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("reply1"), gdjs._22521_357572Code.GDreply1Objects1);
gdjs.copyArray(runtimeScene.getObjects("reply2"), gdjs._22521_357572Code.GDreply2Objects1);
gdjs.copyArray(runtimeScene.getObjects("why2"), gdjs._22521_357572Code.GDwhy2Objects1);
{for(var i = 0, len = gdjs._22521_357572Code.GDreply1Objects1.length ;i < len;++i) {
    gdjs._22521_357572Code.GDreply1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._22521_357572Code.GDreply2Objects1.length ;i < len;++i) {
    gdjs._22521_357572Code.GDreply2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs._22521_357572Code.GDwhy2Objects1.length ;i < len;++i) {
    gdjs._22521_357572Code.GDwhy2Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("why"), gdjs._22521_357572Code.GDwhyObjects1);

gdjs._22521_357572Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._22521_357572Code.GDwhyObjects1.length;i<l;++i) {
    if ( gdjs._22521_357572Code.GDwhyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._22521_357572Code.condition0IsTrue_0.val = true;
        gdjs._22521_357572Code.GDwhyObjects1[k] = gdjs._22521_357572Code.GDwhyObjects1[i];
        ++k;
    }
}
gdjs._22521_357572Code.GDwhyObjects1.length = k;}if (gdjs._22521_357572Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("reply1"), gdjs._22521_357572Code.GDreply1Objects1);
{for(var i = 0, len = gdjs._22521_357572Code.GDreply1Objects1.length ;i < len;++i) {
    gdjs._22521_357572Code.GDreply1Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("reply1"), gdjs._22521_357572Code.GDreply1Objects1);

gdjs._22521_357572Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._22521_357572Code.GDreply1Objects1.length;i<l;++i) {
    if ( gdjs._22521_357572Code.GDreply1Objects1[i].isVisible() ) {
        gdjs._22521_357572Code.condition0IsTrue_0.val = true;
        gdjs._22521_357572Code.GDreply1Objects1[k] = gdjs._22521_357572Code.GDreply1Objects1[i];
        ++k;
    }
}
gdjs._22521_357572Code.GDreply1Objects1.length = k;}if (gdjs._22521_357572Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._22521_357572Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("why2"), gdjs._22521_357572Code.GDwhy2Objects1);

gdjs._22521_357572Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._22521_357572Code.GDwhy2Objects1.length;i<l;++i) {
    if ( gdjs._22521_357572Code.GDwhy2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._22521_357572Code.condition0IsTrue_0.val = true;
        gdjs._22521_357572Code.GDwhy2Objects1[k] = gdjs._22521_357572Code.GDwhy2Objects1[i];
        ++k;
    }
}
gdjs._22521_357572Code.GDwhy2Objects1.length = k;}if (gdjs._22521_357572Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("reply2"), gdjs._22521_357572Code.GDreply2Objects1);
{for(var i = 0, len = gdjs._22521_357572Code.GDreply2Objects1.length ;i < len;++i) {
    gdjs._22521_357572Code.GDreply2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBottle"), gdjs._22521_357572Code.GDBlueBottleObjects1);

gdjs._22521_357572Code.condition0IsTrue_0.val = false;
gdjs._22521_357572Code.condition1IsTrue_0.val = false;
{
gdjs._22521_357572Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._22521_357572Code.mapOfGDgdjs_46_9522521_95357572Code_46GDBlueBottleObjects1Objects, runtimeScene, true, false);
}if ( gdjs._22521_357572Code.condition0IsTrue_0.val ) {
{
gdjs._22521_357572Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs._22521_357572Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlueDotBar"), gdjs._22521_357572Code.GDBlueDotBarObjects1);
{for(var i = 0, len = gdjs._22521_357572Code.GDBlueDotBarObjects1.length ;i < len;++i) {
    gdjs._22521_357572Code.GDBlueDotBarObjects1[i].SetValue(gdjs._22521_357572Code.GDBlueDotBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (2), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueDotBar"), gdjs._22521_357572Code.GDBlueDotBarObjects1);

gdjs._22521_357572Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._22521_357572Code.GDBlueDotBarObjects1.length;i<l;++i) {
    if ( gdjs._22521_357572Code.GDBlueDotBarObjects1[i].IsFull((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._22521_357572Code.condition0IsTrue_0.val = true;
        gdjs._22521_357572Code.GDBlueDotBarObjects1[k] = gdjs._22521_357572Code.GDBlueDotBarObjects1[i];
        ++k;
    }
}
gdjs._22521_357572Code.GDBlueDotBarObjects1.length = k;}if (gdjs._22521_357572Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "入职对话2", false);
}}

}


};

gdjs._22521_357572Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22521_357572Code.GDNewText3Objects1.length = 0;
gdjs._22521_357572Code.GDNewText3Objects2.length = 0;
gdjs._22521_357572Code.GDBlueBottleObjects1.length = 0;
gdjs._22521_357572Code.GDBlueBottleObjects2.length = 0;
gdjs._22521_357572Code.GDwhyObjects1.length = 0;
gdjs._22521_357572Code.GDwhyObjects2.length = 0;
gdjs._22521_357572Code.GDwhy2Objects1.length = 0;
gdjs._22521_357572Code.GDwhy2Objects2.length = 0;
gdjs._22521_357572Code.GDreply1Objects1.length = 0;
gdjs._22521_357572Code.GDreply1Objects2.length = 0;
gdjs._22521_357572Code.GDreply2Objects1.length = 0;
gdjs._22521_357572Code.GDreply2Objects2.length = 0;
gdjs._22521_357572Code.GDBlueDotBarObjects1.length = 0;
gdjs._22521_357572Code.GDBlueDotBarObjects2.length = 0;
gdjs._22521_357572Code.GDcommentObjects1.length = 0;
gdjs._22521_357572Code.GDcommentObjects2.length = 0;

gdjs._22521_357572Code.eventsList1(runtimeScene);

return;

}

gdjs['_22521_357572Code'] = gdjs._22521_357572Code;
