gdjs._20837_32844_22521_35757Code = {};
gdjs._20837_32844_22521_35757Code.GDNewText3Objects1= [];
gdjs._20837_32844_22521_35757Code.GDNewText3Objects2= [];
gdjs._20837_32844_22521_35757Code.GDHollyObjects1= [];
gdjs._20837_32844_22521_35757Code.GDHollyObjects2= [];
gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1= [];
gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects2= [];
gdjs._20837_32844_22521_35757Code.GDDialogueObjects1= [];
gdjs._20837_32844_22521_35757Code.GDDialogueObjects2= [];

gdjs._20837_32844_22521_35757Code.conditionTrue_0 = {val:false};
gdjs._20837_32844_22521_35757Code.condition0IsTrue_0 = {val:false};
gdjs._20837_32844_22521_35757Code.condition1IsTrue_0 = {val:false};


gdjs._20837_32844_22521_35757Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithShadow"), gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1);

gdjs._20837_32844_22521_35757Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._20837_32844_22521_35757Code.condition0IsTrue_0.val = true;
        gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1[k] = gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1.length = k;}if (gdjs._20837_32844_22521_35757Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "培训1", false);
}}

}


};

gdjs._20837_32844_22521_35757Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20837_32844_22521_35757Code.GDNewText3Objects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDNewText3Objects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDHollyObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDHollyObjects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDPurpleButtonWithShadowObjects2.length = 0;
gdjs._20837_32844_22521_35757Code.GDDialogueObjects1.length = 0;
gdjs._20837_32844_22521_35757Code.GDDialogueObjects2.length = 0;

gdjs._20837_32844_22521_35757Code.eventsList0(runtimeScene);

return;

}

gdjs['_20837_32844_22521_35757Code'] = gdjs._20837_32844_22521_35757Code;
