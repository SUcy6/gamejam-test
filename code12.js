gdjs._31070_31192_22899_23376Code = {};
gdjs._31070_31192_22899_23376Code.GDDialogueObjects1= [];
gdjs._31070_31192_22899_23376Code.GDDialogueObjects2= [];
gdjs._31070_31192_22899_23376Code.GDTagObjects1= [];
gdjs._31070_31192_22899_23376Code.GDTagObjects2= [];
gdjs._31070_31192_22899_23376Code.GDManObjects1= [];
gdjs._31070_31192_22899_23376Code.GDManObjects2= [];
gdjs._31070_31192_22899_23376Code.GDNewTextObjects1= [];
gdjs._31070_31192_22899_23376Code.GDNewTextObjects2= [];
gdjs._31070_31192_22899_23376Code.GDNewText2Objects1= [];
gdjs._31070_31192_22899_23376Code.GDNewText2Objects2= [];
gdjs._31070_31192_22899_23376Code.GDYesObjects1= [];
gdjs._31070_31192_22899_23376Code.GDYesObjects2= [];
gdjs._31070_31192_22899_23376Code.GDNoObjects1= [];
gdjs._31070_31192_22899_23376Code.GDNoObjects2= [];
gdjs._31070_31192_22899_23376Code.GDcommentObjects1= [];
gdjs._31070_31192_22899_23376Code.GDcommentObjects2= [];
gdjs._31070_31192_22899_23376Code.GDName2Objects1= [];
gdjs._31070_31192_22899_23376Code.GDName2Objects2= [];
gdjs._31070_31192_22899_23376Code.GDTagObjects1= [];
gdjs._31070_31192_22899_23376Code.GDTagObjects2= [];
gdjs._31070_31192_22899_23376Code.GDBackGroundObjects1= [];
gdjs._31070_31192_22899_23376Code.GDBackGroundObjects2= [];


gdjs._31070_31192_22899_23376Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs._31070_31192_22899_23376Code.GDYesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376Code.GDYesObjects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376Code.GDYesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376Code.GDYesObjects1[k] = gdjs._31070_31192_22899_23376Code.GDYesObjects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376Code.GDYesObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "选项A主任电击室", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("No"), gdjs._31070_31192_22899_23376Code.GDNoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376Code.GDNoObjects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376Code.GDNoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376Code.GDNoObjects1[k] = gdjs._31070_31192_22899_23376Code.GDNoObjects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376Code.GDNoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "选项B主任保留区", false);
}}

}


};

gdjs._31070_31192_22899_23376Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._31070_31192_22899_23376Code.GDDialogueObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDDialogueObjects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDTagObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDTagObjects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDManObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDManObjects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDNewTextObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDNewTextObjects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDNewText2Objects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDNewText2Objects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDYesObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDYesObjects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDNoObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDNoObjects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDcommentObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDcommentObjects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDName2Objects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDName2Objects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDTagObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDTagObjects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDBackGroundObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDBackGroundObjects2.length = 0;

gdjs._31070_31192_22899_23376Code.eventsList0(runtimeScene);

return;

}

gdjs['_31070_31192_22899_23376Code'] = gdjs._31070_31192_22899_23376Code;
