gdjs._22521_357571Code = {};
gdjs._22521_357571Code.GDNewText3Objects1= [];
gdjs._22521_357571Code.GDNewText3Objects2= [];
gdjs._22521_357571Code.GDBottle3Objects1= [];
gdjs._22521_357571Code.GDBottle3Objects2= [];
gdjs._22521_357571Code.GDBottle1Objects1= [];
gdjs._22521_357571Code.GDBottle1Objects2= [];
gdjs._22521_357571Code.GDBottle2Objects1= [];
gdjs._22521_357571Code.GDBottle2Objects2= [];
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggleObjects1= [];
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggleObjects2= [];
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggle2Objects1= [];
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggle2Objects2= [];
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggle22Objects1= [];
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggle22Objects2= [];
gdjs._22521_357571Code.GDcommentObjects1= [];
gdjs._22521_357571Code.GDcommentObjects2= [];

gdjs._22521_357571Code.conditionTrue_0 = {val:false};
gdjs._22521_357571Code.condition0IsTrue_0 = {val:false};
gdjs._22521_357571Code.condition1IsTrue_0 = {val:false};


gdjs._22521_357571Code.asyncCallback9257820 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "培训2", false);
}}
gdjs._22521_357571Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._22521_357571Code.asyncCallback9257820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._22521_357571Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundToggle"), gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggleObjects1);

gdjs._22521_357571Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggleObjects1.length;i<l;++i) {
    if ( gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggleObjects1[i].IsChecked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs._22521_357571Code.condition0IsTrue_0.val = true;
        gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggleObjects1[k] = gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggleObjects1[i];
        ++k;
    }
}
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggleObjects1.length = k;}if (gdjs._22521_357571Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._22521_357571Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._22521_357571Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._22521_357571Code.GDNewText3Objects1.length = 0;
gdjs._22521_357571Code.GDNewText3Objects2.length = 0;
gdjs._22521_357571Code.GDBottle3Objects1.length = 0;
gdjs._22521_357571Code.GDBottle3Objects2.length = 0;
gdjs._22521_357571Code.GDBottle1Objects1.length = 0;
gdjs._22521_357571Code.GDBottle1Objects2.length = 0;
gdjs._22521_357571Code.GDBottle2Objects1.length = 0;
gdjs._22521_357571Code.GDBottle2Objects2.length = 0;
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggleObjects1.length = 0;
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggleObjects2.length = 0;
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggle2Objects1.length = 0;
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggle2Objects2.length = 0;
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggle22Objects1.length = 0;
gdjs._22521_357571Code.GDSmallGreenPlasticRoundToggle22Objects2.length = 0;
gdjs._22521_357571Code.GDcommentObjects1.length = 0;
gdjs._22521_357571Code.GDcommentObjects2.length = 0;

gdjs._22521_357571Code.eventsList1(runtimeScene);

return;

}

gdjs['_22521_357571Code'] = gdjs._22521_357571Code;
