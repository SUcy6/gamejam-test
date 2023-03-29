gdjs._31070_31192_22899_23376Code = {};
gdjs._31070_31192_22899_23376Code.GDNewText3Objects1= [];
gdjs._31070_31192_22899_23376Code.GDNewText3Objects2= [];
gdjs._31070_31192_22899_23376Code.GDNewTextObjects1= [];
gdjs._31070_31192_22899_23376Code.GDNewTextObjects2= [];
gdjs._31070_31192_22899_23376Code.GDYesObjects1= [];
gdjs._31070_31192_22899_23376Code.GDYesObjects2= [];
gdjs._31070_31192_22899_23376Code.GDNoObjects1= [];
gdjs._31070_31192_22899_23376Code.GDNoObjects2= [];
gdjs._31070_31192_22899_23376Code.GDcommentObjects1= [];
gdjs._31070_31192_22899_23376Code.GDcommentObjects2= [];

gdjs._31070_31192_22899_23376Code.conditionTrue_0 = {val:false};
gdjs._31070_31192_22899_23376Code.condition0IsTrue_0 = {val:false};
gdjs._31070_31192_22899_23376Code.condition1IsTrue_0 = {val:false};


gdjs._31070_31192_22899_23376Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Yes"), gdjs._31070_31192_22899_23376Code.GDYesObjects1);

gdjs._31070_31192_22899_23376Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._31070_31192_22899_23376Code.GDYesObjects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376Code.GDYesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._31070_31192_22899_23376Code.condition0IsTrue_0.val = true;
        gdjs._31070_31192_22899_23376Code.GDYesObjects1[k] = gdjs._31070_31192_22899_23376Code.GDYesObjects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376Code.GDYesObjects1.length = k;}if (gdjs._31070_31192_22899_23376Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "主任对话", false);
}}

}


{


{
}

}


};

gdjs._31070_31192_22899_23376Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._31070_31192_22899_23376Code.GDNewText3Objects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDNewText3Objects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDNewTextObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDNewTextObjects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDYesObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDYesObjects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDNoObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDNoObjects2.length = 0;
gdjs._31070_31192_22899_23376Code.GDcommentObjects1.length = 0;
gdjs._31070_31192_22899_23376Code.GDcommentObjects2.length = 0;

gdjs._31070_31192_22899_23376Code.eventsList0(runtimeScene);

return;

}

gdjs['_31070_31192_22899_23376Code'] = gdjs._31070_31192_22899_23376Code;
