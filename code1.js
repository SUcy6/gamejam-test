gdjs.Entry2Code = {};
gdjs.Entry2Code.GDNewText3Objects1= [];
gdjs.Entry2Code.GDNewText3Objects2= [];
gdjs.Entry2Code.GDNewVideoObjects1= [];
gdjs.Entry2Code.GDNewVideoObjects2= [];

gdjs.Entry2Code.conditionTrue_0 = {val:false};
gdjs.Entry2Code.condition0IsTrue_0 = {val:false};
gdjs.Entry2Code.condition1IsTrue_0 = {val:false};


gdjs.Entry2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Entry2Code.condition0IsTrue_0.val = false;
{
gdjs.Entry2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Entry2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Entry2Code.GDNewVideoObjects1);
{for(var i = 0, len = gdjs.Entry2Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Entry2Code.GDNewVideoObjects1[i].play();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Entry2Code.GDNewVideoObjects1);

gdjs.Entry2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Entry2Code.GDNewVideoObjects1.length;i<l;++i) {
    if ( gdjs.Entry2Code.GDNewVideoObjects1[i].isEnded() ) {
        gdjs.Entry2Code.condition0IsTrue_0.val = true;
        gdjs.Entry2Code.GDNewVideoObjects1[k] = gdjs.Entry2Code.GDNewVideoObjects1[i];
        ++k;
    }
}
gdjs.Entry2Code.GDNewVideoObjects1.length = k;}if (gdjs.Entry2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "睡眠教育", false);
}}

}


};

gdjs.Entry2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Entry2Code.GDNewText3Objects1.length = 0;
gdjs.Entry2Code.GDNewText3Objects2.length = 0;
gdjs.Entry2Code.GDNewVideoObjects1.length = 0;
gdjs.Entry2Code.GDNewVideoObjects2.length = 0;

gdjs.Entry2Code.eventsList0(runtimeScene);

return;

}

gdjs['Entry2Code'] = gdjs.Entry2Code;
