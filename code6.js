gdjs._20837_32844_23545_358052Code = {};
gdjs._20837_32844_23545_358052Code.GDNewText3Objects1= [];
gdjs._20837_32844_23545_358052Code.GDNewText3Objects2= [];
gdjs._20837_32844_23545_358052Code.GDHollyObjects1= [];
gdjs._20837_32844_23545_358052Code.GDHollyObjects2= [];
gdjs._20837_32844_23545_358052Code.GDNewTextObjects1= [];
gdjs._20837_32844_23545_358052Code.GDNewTextObjects2= [];
gdjs._20837_32844_23545_358052Code.GDRedButtonWithShadowObjects1= [];
gdjs._20837_32844_23545_358052Code.GDRedButtonWithShadowObjects2= [];

gdjs._20837_32844_23545_358052Code.conditionTrue_0 = {val:false};
gdjs._20837_32844_23545_358052Code.condition0IsTrue_0 = {val:false};
gdjs._20837_32844_23545_358052Code.condition1IsTrue_0 = {val:false};


gdjs._20837_32844_23545_358052Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs._20837_32844_23545_358052Code.GDRedButtonWithShadowObjects1);

gdjs._20837_32844_23545_358052Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._20837_32844_23545_358052Code.GDRedButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs._20837_32844_23545_358052Code.GDRedButtonWithShadowObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._20837_32844_23545_358052Code.condition0IsTrue_0.val = true;
        gdjs._20837_32844_23545_358052Code.GDRedButtonWithShadowObjects1[k] = gdjs._20837_32844_23545_358052Code.GDRedButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs._20837_32844_23545_358052Code.GDRedButtonWithShadowObjects1.length = k;}if (gdjs._20837_32844_23545_358052Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "神秘女子", false);
}}

}


};

gdjs._20837_32844_23545_358052Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20837_32844_23545_358052Code.GDNewText3Objects1.length = 0;
gdjs._20837_32844_23545_358052Code.GDNewText3Objects2.length = 0;
gdjs._20837_32844_23545_358052Code.GDHollyObjects1.length = 0;
gdjs._20837_32844_23545_358052Code.GDHollyObjects2.length = 0;
gdjs._20837_32844_23545_358052Code.GDNewTextObjects1.length = 0;
gdjs._20837_32844_23545_358052Code.GDNewTextObjects2.length = 0;
gdjs._20837_32844_23545_358052Code.GDRedButtonWithShadowObjects1.length = 0;
gdjs._20837_32844_23545_358052Code.GDRedButtonWithShadowObjects2.length = 0;

gdjs._20837_32844_23545_358052Code.eventsList0(runtimeScene);

return;

}

gdjs['_20837_32844_23545_358052Code'] = gdjs._20837_32844_23545_358052Code;
