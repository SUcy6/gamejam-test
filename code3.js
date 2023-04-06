gdjs._30561_30496_25945_32946Code = {};
gdjs._30561_30496_25945_32946Code.GDDialogueObjects1= [];
gdjs._30561_30496_25945_32946Code.GDDialogueObjects2= [];
gdjs._30561_30496_25945_32946Code.GDTagObjects1= [];
gdjs._30561_30496_25945_32946Code.GDTagObjects2= [];
gdjs._30561_30496_25945_32946Code.GDManObjects1= [];
gdjs._30561_30496_25945_32946Code.GDManObjects2= [];
gdjs._30561_30496_25945_32946Code.GDLaptopObjects1= [];
gdjs._30561_30496_25945_32946Code.GDLaptopObjects2= [];
gdjs._30561_30496_25945_32946Code.GDtext1Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext1Objects2= [];
gdjs._30561_30496_25945_32946Code.GDtext12Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext12Objects2= [];
gdjs._30561_30496_25945_32946Code.GDtext2Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext2Objects2= [];
gdjs._30561_30496_25945_32946Code.GDtext22Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext22Objects2= [];
gdjs._30561_30496_25945_32946Code.GDtext3Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext3Objects2= [];
gdjs._30561_30496_25945_32946Code.GDtext32Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext32Objects2= [];
gdjs._30561_30496_25945_32946Code.GDtext4Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext4Objects2= [];
gdjs._30561_30496_25945_32946Code.GDtext42Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext42Objects2= [];
gdjs._30561_30496_25945_32946Code.GDtext5Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext5Objects2= [];
gdjs._30561_30496_25945_32946Code.GDtext52Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext52Objects2= [];
gdjs._30561_30496_25945_32946Code.GDtext6Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext6Objects2= [];
gdjs._30561_30496_25945_32946Code.GDtext62Objects1= [];
gdjs._30561_30496_25945_32946Code.GDtext62Objects2= [];
gdjs._30561_30496_25945_32946Code.GDcommentObjects1= [];
gdjs._30561_30496_25945_32946Code.GDcommentObjects2= [];
gdjs._30561_30496_25945_32946Code.GDwhiteObjects1= [];
gdjs._30561_30496_25945_32946Code.GDwhiteObjects2= [];
gdjs._30561_30496_25945_32946Code.GDT1Objects1= [];
gdjs._30561_30496_25945_32946Code.GDT1Objects2= [];
gdjs._30561_30496_25945_32946Code.GDT2Objects1= [];
gdjs._30561_30496_25945_32946Code.GDT2Objects2= [];
gdjs._30561_30496_25945_32946Code.GDT3Objects1= [];
gdjs._30561_30496_25945_32946Code.GDT3Objects2= [];
gdjs._30561_30496_25945_32946Code.GDT4Objects1= [];
gdjs._30561_30496_25945_32946Code.GDT4Objects2= [];
gdjs._30561_30496_25945_32946Code.GDT5Objects1= [];
gdjs._30561_30496_25945_32946Code.GDT5Objects2= [];
gdjs._30561_30496_25945_32946Code.GDT6Objects1= [];
gdjs._30561_30496_25945_32946Code.GDT6Objects2= [];


gdjs._30561_30496_25945_32946Code.asyncCallback13165508 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects2);

{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDLaptopObjects2.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDLaptopObjects2[i].getBehavior("Tween").addObjectOpacityTween("fadein", 255, "easeInExpo", 2000, false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("finishReadText"), false);
}}
gdjs._30561_30496_25945_32946Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._30561_30496_25945_32946Code.GDLaptopObjects1) asyncObjectsList.addObject("Laptop", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._30561_30496_25945_32946Code.asyncCallback13165508(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._30561_30496_25945_32946Code.asyncCallback13167364 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("T1"), gdjs._30561_30496_25945_32946Code.GDT1Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("T2"), gdjs._30561_30496_25945_32946Code.GDT2Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("T3"), gdjs._30561_30496_25945_32946Code.GDT3Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("T4"), gdjs._30561_30496_25945_32946Code.GDT4Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("T5"), gdjs._30561_30496_25945_32946Code.GDT5Objects2);

gdjs.copyArray(asyncObjectsList.getObjects("T6"), gdjs._30561_30496_25945_32946Code.GDT6Objects2);

{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT1Objects2.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT1Objects2[i].getBehavior("Tween").addObjectOpacityTween("allin", 255, "easeInExpo", 2000, false);
}
for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT2Objects2.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT2Objects2[i].getBehavior("Tween").addObjectOpacityTween("allin", 255, "easeInExpo", 2000, false);
}
for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT3Objects2.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT3Objects2[i].getBehavior("Tween").addObjectOpacityTween("allin", 255, "easeInExpo", 2000, false);
}
for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT4Objects2.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT4Objects2[i].getBehavior("Tween").addObjectOpacityTween("allin", 255, "easeInExpo", 2000, false);
}
for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT5Objects2.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT5Objects2[i].getBehavior("Tween").addObjectOpacityTween("allin", 255, "easeInExpo", 2000, false);
}
for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT6Objects2.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT6Objects2[i].getBehavior("Tween").addObjectOpacityTween("allin", 255, "easeInExpo", 2000, false);
}
}}
gdjs._30561_30496_25945_32946Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs._30561_30496_25945_32946Code.GDT1Objects1) asyncObjectsList.addObject("T1", obj);
for (const obj of gdjs._30561_30496_25945_32946Code.GDT2Objects1) asyncObjectsList.addObject("T2", obj);
for (const obj of gdjs._30561_30496_25945_32946Code.GDT3Objects1) asyncObjectsList.addObject("T3", obj);
for (const obj of gdjs._30561_30496_25945_32946Code.GDT4Objects1) asyncObjectsList.addObject("T4", obj);
for (const obj of gdjs._30561_30496_25945_32946Code.GDT5Objects1) asyncObjectsList.addObject("T5", obj);
for (const obj of gdjs._30561_30496_25945_32946Code.GDT6Objects1) asyncObjectsList.addObject("T6", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._30561_30496_25945_32946Code.asyncCallback13167364(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT1Objects1Objects = Hashtable.newFrom({"T1": gdjs._30561_30496_25945_32946Code.GDT1Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT2Objects1Objects = Hashtable.newFrom({"T2": gdjs._30561_30496_25945_32946Code.GDT2Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.asyncCallback13171236 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.sound.playSound(runtimeScene, "2delta.aac", false, 100, 1);
}}
gdjs._30561_30496_25945_32946Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._30561_30496_25945_32946Code.asyncCallback13171236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT2Objects1Objects = Hashtable.newFrom({"T2": gdjs._30561_30496_25945_32946Code.GDT2Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT3Objects1Objects = Hashtable.newFrom({"T3": gdjs._30561_30496_25945_32946Code.GDT3Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.asyncCallback13174972 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.sound.playSound(runtimeScene, "3alpha.aac", false, 100, 1);
}}
gdjs._30561_30496_25945_32946Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._30561_30496_25945_32946Code.asyncCallback13174972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT3Objects1Objects = Hashtable.newFrom({"T3": gdjs._30561_30496_25945_32946Code.GDT3Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT4Objects1Objects = Hashtable.newFrom({"T4": gdjs._30561_30496_25945_32946Code.GDT4Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.asyncCallback13108132 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.sound.playSound(runtimeScene, "5green.aac", false, 100, 1);
}}
gdjs._30561_30496_25945_32946Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._30561_30496_25945_32946Code.asyncCallback13108132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT4Objects1Objects = Hashtable.newFrom({"T4": gdjs._30561_30496_25945_32946Code.GDT4Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT5Objects1Objects = Hashtable.newFrom({"T5": gdjs._30561_30496_25945_32946Code.GDT5Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.asyncCallback13143036 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.sound.playSound(runtimeScene, "4marriage.aac", false, 100, 1);
}}
gdjs._30561_30496_25945_32946Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._30561_30496_25945_32946Code.asyncCallback13143036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT5Objects1Objects = Hashtable.newFrom({"T5": gdjs._30561_30496_25945_32946Code.GDT5Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT6Objects1Objects = Hashtable.newFrom({"T6": gdjs._30561_30496_25945_32946Code.GDT6Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.asyncCallback13178684 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "6bottle.aac", 1, false, 100, 1);
}}
gdjs._30561_30496_25945_32946Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._30561_30496_25945_32946Code.asyncCallback13178684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT6Objects1Objects = Hashtable.newFrom({"T6": gdjs._30561_30496_25945_32946Code.GDT6Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.asyncCallback13183252 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "主任出场2", false);
}}
gdjs._30561_30496_25945_32946Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._30561_30496_25945_32946Code.asyncCallback13183252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDtext3Objects1Objects = Hashtable.newFrom({"text3": gdjs._30561_30496_25945_32946Code.GDtext3Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDtext4Objects1Objects = Hashtable.newFrom({"text4": gdjs._30561_30496_25945_32946Code.GDtext4Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDtext5Objects1Objects = Hashtable.newFrom({"text5": gdjs._30561_30496_25945_32946Code.GDtext5Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDtext6Objects1Objects = Hashtable.newFrom({"text6": gdjs._30561_30496_25945_32946Code.GDtext6Objects1});
gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects = Hashtable.newFrom({"Laptop": gdjs._30561_30496_25945_32946Code.GDLaptopObjects1});
gdjs._30561_30496_25945_32946Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1"), gdjs._30561_30496_25945_32946Code.GDT1Objects1);
gdjs.copyArray(runtimeScene.getObjects("T2"), gdjs._30561_30496_25945_32946Code.GDT2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T3"), gdjs._30561_30496_25945_32946Code.GDT3Objects1);
gdjs.copyArray(runtimeScene.getObjects("T4"), gdjs._30561_30496_25945_32946Code.GDT4Objects1);
gdjs.copyArray(runtimeScene.getObjects("T5"), gdjs._30561_30496_25945_32946Code.GDT5Objects1);
gdjs.copyArray(runtimeScene.getObjects("T6"), gdjs._30561_30496_25945_32946Code.GDT6Objects1);
gdjs.copyArray(runtimeScene.getObjects("text12"), gdjs._30561_30496_25945_32946Code.GDtext12Objects1);
gdjs.copyArray(runtimeScene.getObjects("text22"), gdjs._30561_30496_25945_32946Code.GDtext22Objects1);
gdjs.copyArray(runtimeScene.getObjects("text32"), gdjs._30561_30496_25945_32946Code.GDtext32Objects1);
gdjs.copyArray(runtimeScene.getObjects("text42"), gdjs._30561_30496_25945_32946Code.GDtext42Objects1);
gdjs.copyArray(runtimeScene.getObjects("text52"), gdjs._30561_30496_25945_32946Code.GDtext52Objects1);
gdjs.copyArray(runtimeScene.getObjects("text62"), gdjs._30561_30496_25945_32946Code.GDtext62Objects1);
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDLaptopObjects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDLaptopObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "收音机噪音背景音效.aac", true, 10, 1);
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext12Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext12Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext22Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext22Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext32Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext32Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext42Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext42Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext52Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext52Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext62Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext62Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT1Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT1Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT2Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT2Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT3Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT3Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT4Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT4Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT5Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT5Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT6Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT6Objects1[i].setOpacity(0);
}
}
{ //Subevents
gdjs._30561_30496_25945_32946Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1"), gdjs._30561_30496_25945_32946Code.GDT1Objects1);
gdjs.copyArray(runtimeScene.getObjects("T2"), gdjs._30561_30496_25945_32946Code.GDT2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T3"), gdjs._30561_30496_25945_32946Code.GDT3Objects1);
gdjs.copyArray(runtimeScene.getObjects("T4"), gdjs._30561_30496_25945_32946Code.GDT4Objects1);
gdjs.copyArray(runtimeScene.getObjects("T5"), gdjs._30561_30496_25945_32946Code.GDT5Objects1);
gdjs.copyArray(runtimeScene.getObjects("T6"), gdjs._30561_30496_25945_32946Code.GDT6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDLaptopObjects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDLaptopObjects1[i].getBehavior("Tween").hasFinished("fadein") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDLaptopObjects1[k] = gdjs._30561_30496_25945_32946Code.GDLaptopObjects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDLaptopObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT1Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT1Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT1Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT1Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT2Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT2Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT2Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT2Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT3Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT3Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT3Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT3Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT4Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT4Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT4Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT4Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT4Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT5Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT5Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT5Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT5Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT5Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT6Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT6Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT6Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT6Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT6Objects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._30561_30496_25945_32946Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1"), gdjs._30561_30496_25945_32946Code.GDT1Objects1);
gdjs.copyArray(runtimeScene.getObjects("T2"), gdjs._30561_30496_25945_32946Code.GDT2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T3"), gdjs._30561_30496_25945_32946Code.GDT3Objects1);
gdjs.copyArray(runtimeScene.getObjects("T4"), gdjs._30561_30496_25945_32946Code.GDT4Objects1);
gdjs.copyArray(runtimeScene.getObjects("T5"), gdjs._30561_30496_25945_32946Code.GDT5Objects1);
gdjs.copyArray(runtimeScene.getObjects("T6"), gdjs._30561_30496_25945_32946Code.GDT6Objects1);
gdjs.copyArray(runtimeScene.getObjects("text12"), gdjs._30561_30496_25945_32946Code.GDtext12Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT1Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT1Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT1Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT1Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT1Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT2Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT2Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT2Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT2Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT3Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT3Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT3Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT3Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT4Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT4Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT4Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT4Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT4Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT5Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT5Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT5Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT5Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT5Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT6Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT6Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT6Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT6Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext12Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext12Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext12Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext12Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext12Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13168252);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT1Objects1 */
/* Reuse gdjs._30561_30496_25945_32946Code.GDtext12Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "1beida.aac", false, 100, 1);
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext12Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext12Objects1[i].getBehavior("Tween").addObjectOpacityTween("first", 255, "easeInExpo", 1000, false);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT1Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT1Objects1[i].getBehavior("Tween").addObjectOpacityTween("out1", 0, "easeOutExpo", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("T1"), gdjs._30561_30496_25945_32946Code.GDT1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT1Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT1Objects1[i].getBehavior("Tween").hasFinished("out1") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT1Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT1Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT1Objects1 */
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT1Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T2"), gdjs._30561_30496_25945_32946Code.GDT2Objects1);
gdjs.copyArray(runtimeScene.getObjects("text12"), gdjs._30561_30496_25945_32946Code.GDtext12Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext12Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext12Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext12Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext12Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext12Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT2Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13171100);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._30561_30496_25945_32946Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1"), gdjs._30561_30496_25945_32946Code.GDT1Objects1);
gdjs.copyArray(runtimeScene.getObjects("T2"), gdjs._30561_30496_25945_32946Code.GDT2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T3"), gdjs._30561_30496_25945_32946Code.GDT3Objects1);
gdjs.copyArray(runtimeScene.getObjects("T4"), gdjs._30561_30496_25945_32946Code.GDT4Objects1);
gdjs.copyArray(runtimeScene.getObjects("T5"), gdjs._30561_30496_25945_32946Code.GDT5Objects1);
gdjs.copyArray(runtimeScene.getObjects("T6"), gdjs._30561_30496_25945_32946Code.GDT6Objects1);
gdjs.copyArray(runtimeScene.getObjects("text12"), gdjs._30561_30496_25945_32946Code.GDtext12Objects1);
gdjs.copyArray(runtimeScene.getObjects("text22"), gdjs._30561_30496_25945_32946Code.GDtext22Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT2Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT1Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT1Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT1Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT1Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT2Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT2Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT2Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT2Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT3Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT3Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT3Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT3Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT4Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT4Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT4Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT4Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT4Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT5Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT5Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT5Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT5Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT5Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT6Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT6Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT6Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT6Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext12Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext12Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext12Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext12Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext12Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext22Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext22Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext22Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext22Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext22Objects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT2Objects1 */
/* Reuse gdjs._30561_30496_25945_32946Code.GDtext22Objects1 */
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext22Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext22Objects1[i].getBehavior("Tween").addObjectOpacityTween("second", 255, "easeInExpo", 1000, false);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT2Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT2Objects1[i].getBehavior("Tween").addObjectOpacityTween("out2", 0, "easeOutExpo", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("T2"), gdjs._30561_30496_25945_32946Code.GDT2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT2Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT2Objects1[i].getBehavior("Tween").hasFinished("out2") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT2Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT2Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT2Objects1 */
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT2Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T3"), gdjs._30561_30496_25945_32946Code.GDT3Objects1);
gdjs.copyArray(runtimeScene.getObjects("text22"), gdjs._30561_30496_25945_32946Code.GDtext22Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext22Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext22Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext22Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext22Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext22Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT3Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13174772);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._30561_30496_25945_32946Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T1"), gdjs._30561_30496_25945_32946Code.GDT1Objects1);
gdjs.copyArray(runtimeScene.getObjects("T2"), gdjs._30561_30496_25945_32946Code.GDT2Objects1);
gdjs.copyArray(runtimeScene.getObjects("T3"), gdjs._30561_30496_25945_32946Code.GDT3Objects1);
gdjs.copyArray(runtimeScene.getObjects("T4"), gdjs._30561_30496_25945_32946Code.GDT4Objects1);
gdjs.copyArray(runtimeScene.getObjects("T5"), gdjs._30561_30496_25945_32946Code.GDT5Objects1);
gdjs.copyArray(runtimeScene.getObjects("T6"), gdjs._30561_30496_25945_32946Code.GDT6Objects1);
gdjs.copyArray(runtimeScene.getObjects("text22"), gdjs._30561_30496_25945_32946Code.GDtext22Objects1);
gdjs.copyArray(runtimeScene.getObjects("text32"), gdjs._30561_30496_25945_32946Code.GDtext32Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT3Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT1Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT1Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT1Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT1Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT1Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT2Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT2Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT2Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT2Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT3Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT3Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT3Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT3Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT3Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT4Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT4Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT4Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT4Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT4Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT5Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT5Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT5Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT5Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT5Objects1.length = k;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT6Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT6Objects1[i].getBehavior("Tween").hasFinished("allin") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT6Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT6Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT6Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext22Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext22Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext22Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext22Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext22Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext32Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext32Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext32Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext32Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext32Objects1.length = k;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT3Objects1 */
/* Reuse gdjs._30561_30496_25945_32946Code.GDtext32Objects1 */
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext32Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext32Objects1[i].getBehavior("Tween").addObjectOpacityTween("third", 255, "easeInExpo", 1000, false);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT3Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT3Objects1[i].getBehavior("Tween").addObjectOpacityTween("out3", 0, "easeOutExpo", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("T3"), gdjs._30561_30496_25945_32946Code.GDT3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT3Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT3Objects1[i].getBehavior("Tween").hasFinished("out3") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT3Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT3Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT3Objects1 */
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT3Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT3Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T4"), gdjs._30561_30496_25945_32946Code.GDT4Objects1);
gdjs.copyArray(runtimeScene.getObjects("text32"), gdjs._30561_30496_25945_32946Code.GDtext32Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext32Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext32Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext32Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext32Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext32Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT4Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13112316);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._30561_30496_25945_32946Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T4"), gdjs._30561_30496_25945_32946Code.GDT4Objects1);
gdjs.copyArray(runtimeScene.getObjects("text32"), gdjs._30561_30496_25945_32946Code.GDtext32Objects1);
gdjs.copyArray(runtimeScene.getObjects("text42"), gdjs._30561_30496_25945_32946Code.GDtext42Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT4Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext32Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext32Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext32Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext32Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext32Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext42Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext42Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext42Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext42Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext42Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT4Objects1 */
/* Reuse gdjs._30561_30496_25945_32946Code.GDtext42Objects1 */
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext42Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext42Objects1[i].getBehavior("Tween").addObjectOpacityTween("forth", 255, "easeInExpo", 1000, false);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT4Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT4Objects1[i].getBehavior("Tween").addObjectOpacityTween("out4", 0, "easeOutExpo", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("T4"), gdjs._30561_30496_25945_32946Code.GDT4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT4Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT4Objects1[i].getBehavior("Tween").hasFinished("out4") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT4Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT4Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT4Objects1 */
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT4Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT4Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T5"), gdjs._30561_30496_25945_32946Code.GDT5Objects1);
gdjs.copyArray(runtimeScene.getObjects("text42"), gdjs._30561_30496_25945_32946Code.GDtext42Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext42Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext42Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext42Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext42Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext42Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT5Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13149132);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._30561_30496_25945_32946Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T5"), gdjs._30561_30496_25945_32946Code.GDT5Objects1);
gdjs.copyArray(runtimeScene.getObjects("text42"), gdjs._30561_30496_25945_32946Code.GDtext42Objects1);
gdjs.copyArray(runtimeScene.getObjects("text52"), gdjs._30561_30496_25945_32946Code.GDtext52Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT5Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext42Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext42Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext42Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext42Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext42Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext52Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext52Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext52Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext52Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext52Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT5Objects1 */
/* Reuse gdjs._30561_30496_25945_32946Code.GDtext52Objects1 */
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext52Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext52Objects1[i].getBehavior("Tween").addObjectOpacityTween("fifth", 255, "easeInExpo", 1000, false);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT5Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT5Objects1[i].getBehavior("Tween").addObjectOpacityTween("out5", 0, "easeOutExpo", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("T5"), gdjs._30561_30496_25945_32946Code.GDT5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT5Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT5Objects1[i].getBehavior("Tween").hasFinished("out5") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT5Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT5Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT5Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT5Objects1 */
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT5Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT5Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T6"), gdjs._30561_30496_25945_32946Code.GDT6Objects1);
gdjs.copyArray(runtimeScene.getObjects("text52"), gdjs._30561_30496_25945_32946Code.GDtext52Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext52Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext52Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext52Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext52Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext52Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT6Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13178396);
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._30561_30496_25945_32946Code.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("T6"), gdjs._30561_30496_25945_32946Code.GDT6Objects1);
gdjs.copyArray(runtimeScene.getObjects("text52"), gdjs._30561_30496_25945_32946Code.GDtext52Objects1);
gdjs.copyArray(runtimeScene.getObjects("text62"), gdjs._30561_30496_25945_32946Code.GDtext62Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDT6Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext52Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext52Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext52Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext52Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext52Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext62Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext62Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext62Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext62Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext62Objects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT6Objects1 */
/* Reuse gdjs._30561_30496_25945_32946Code.GDtext62Objects1 */
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDtext62Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDtext62Objects1[i].getBehavior("Tween").addObjectOpacityTween("sixth", 255, "easeInExpo", 1000, false);
}
}{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT6Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT6Objects1[i].getBehavior("Tween").addObjectOpacityTween("out6", 0, "easeOutExpo", 1000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("T6"), gdjs._30561_30496_25945_32946Code.GDT6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDT6Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDT6Objects1[i].getBehavior("Tween").hasFinished("out6") ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDT6Objects1[k] = gdjs._30561_30496_25945_32946Code.GDT6Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDT6Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._30561_30496_25945_32946Code.GDT6Objects1 */
{for(var i = 0, len = gdjs._30561_30496_25945_32946Code.GDT6Objects1.length ;i < len;++i) {
    gdjs._30561_30496_25945_32946Code.GDT6Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("finishReadText"), true);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("text12"), gdjs._30561_30496_25945_32946Code.GDtext12Objects1);
gdjs.copyArray(runtimeScene.getObjects("text22"), gdjs._30561_30496_25945_32946Code.GDtext22Objects1);
gdjs.copyArray(runtimeScene.getObjects("text32"), gdjs._30561_30496_25945_32946Code.GDtext32Objects1);
gdjs.copyArray(runtimeScene.getObjects("text42"), gdjs._30561_30496_25945_32946Code.GDtext42Objects1);
gdjs.copyArray(runtimeScene.getObjects("text52"), gdjs._30561_30496_25945_32946Code.GDtext52Objects1);
gdjs.copyArray(runtimeScene.getObjects("text62"), gdjs._30561_30496_25945_32946Code.GDtext62Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("finishReadText"), true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext12Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext12Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext12Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext12Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext12Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext22Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext22Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext22Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext22Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext22Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext32Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext32Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext32Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext32Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext32Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext42Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext42Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext42Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext42Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext42Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext52Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext52Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext52Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext52Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext52Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._30561_30496_25945_32946Code.GDtext62Objects1.length;i<l;++i) {
    if ( gdjs._30561_30496_25945_32946Code.GDtext62Objects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs._30561_30496_25945_32946Code.GDtext62Objects1[k] = gdjs._30561_30496_25945_32946Code.GDtext62Objects1[i];
        ++k;
    }
}
gdjs._30561_30496_25945_32946Code.GDtext62Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
}
}
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._30561_30496_25945_32946Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("text3"), gdjs._30561_30496_25945_32946Code.GDtext3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDtext3Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13183652);
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("text4"), gdjs._30561_30496_25945_32946Code.GDtext4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDtext4Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13184220);
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("text5"), gdjs._30561_30496_25945_32946Code.GDtext5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDtext5Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13184820);
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Laptop"), gdjs._30561_30496_25945_32946Code.GDLaptopObjects1);
gdjs.copyArray(runtimeScene.getObjects("text6"), gdjs._30561_30496_25945_32946Code.GDtext6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDtext6Objects1Objects, gdjs._30561_30496_25945_32946Code.mapOfGDgdjs_46_9530561_9530496_9525945_9532946Code_46GDLaptopObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13185476);
}
}
if (isConditionTrue_0) {
}

}


};

gdjs._30561_30496_25945_32946Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._30561_30496_25945_32946Code.GDDialogueObjects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDDialogueObjects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDTagObjects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDTagObjects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDManObjects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDManObjects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDLaptopObjects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDLaptopObjects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext1Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext1Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext12Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext12Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext2Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext2Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext22Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext22Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext3Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext3Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext32Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext32Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext4Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext4Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext42Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext42Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext5Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext5Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext52Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext52Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext6Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext6Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext62Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDtext62Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDcommentObjects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDcommentObjects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDwhiteObjects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDwhiteObjects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDT1Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDT1Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDT2Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDT2Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDT3Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDT3Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDT4Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDT4Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDT5Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDT5Objects2.length = 0;
gdjs._30561_30496_25945_32946Code.GDT6Objects1.length = 0;
gdjs._30561_30496_25945_32946Code.GDT6Objects2.length = 0;

gdjs._30561_30496_25945_32946Code.eventsList8(runtimeScene);

return;

}

gdjs['_30561_30496_25945_32946Code'] = gdjs._30561_30496_25945_32946Code;
