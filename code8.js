gdjs._20027_20219_23545_35805Code = {};
gdjs._20027_20219_23545_35805Code.GDNewText3Objects1= [];
gdjs._20027_20219_23545_35805Code.GDNewText3Objects2= [];
gdjs._20027_20219_23545_35805Code.GDNewTextObjects1= [];
gdjs._20027_20219_23545_35805Code.GDNewTextObjects2= [];
gdjs._20027_20219_23545_35805Code.GDyesObjects1= [];
gdjs._20027_20219_23545_35805Code.GDyesObjects2= [];
gdjs._20027_20219_23545_35805Code.GDnoObjects1= [];
gdjs._20027_20219_23545_35805Code.GDnoObjects2= [];
gdjs._20027_20219_23545_35805Code.GDNewText2Objects1= [];
gdjs._20027_20219_23545_35805Code.GDNewText2Objects2= [];

gdjs._20027_20219_23545_35805Code.conditionTrue_0 = {val:false};
gdjs._20027_20219_23545_35805Code.condition0IsTrue_0 = {val:false};
gdjs._20027_20219_23545_35805Code.condition1IsTrue_0 = {val:false};


gdjs._20027_20219_23545_35805Code.eventsList0 = function(runtimeScene) {

{


gdjs._20027_20219_23545_35805Code.condition0IsTrue_0.val = false;
{
gdjs._20027_20219_23545_35805Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "b");
}if (gdjs._20027_20219_23545_35805Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "神秘女子", false);
}}

}


};

gdjs._20027_20219_23545_35805Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._20027_20219_23545_35805Code.GDNewText3Objects1.length = 0;
gdjs._20027_20219_23545_35805Code.GDNewText3Objects2.length = 0;
gdjs._20027_20219_23545_35805Code.GDNewTextObjects1.length = 0;
gdjs._20027_20219_23545_35805Code.GDNewTextObjects2.length = 0;
gdjs._20027_20219_23545_35805Code.GDyesObjects1.length = 0;
gdjs._20027_20219_23545_35805Code.GDyesObjects2.length = 0;
gdjs._20027_20219_23545_35805Code.GDnoObjects1.length = 0;
gdjs._20027_20219_23545_35805Code.GDnoObjects2.length = 0;
gdjs._20027_20219_23545_35805Code.GDNewText2Objects1.length = 0;
gdjs._20027_20219_23545_35805Code.GDNewText2Objects2.length = 0;

gdjs._20027_20219_23545_35805Code.eventsList0(runtimeScene);

return;

}

gdjs['_20027_20219_23545_35805Code'] = gdjs._20027_20219_23545_35805Code;
