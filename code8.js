gdjs._31070_31192_22899_23376_32972_24433Code = {};
gdjs._31070_31192_22899_23376_32972_24433Code.GDDialogueObjects1= [];
gdjs._31070_31192_22899_23376_32972_24433Code.GDDialogueObjects2= [];
gdjs._31070_31192_22899_23376_32972_24433Code.GDTagObjects1= [];
gdjs._31070_31192_22899_23376_32972_24433Code.GDTagObjects2= [];
gdjs._31070_31192_22899_23376_32972_24433Code.GDManObjects1= [];
gdjs._31070_31192_22899_23376_32972_24433Code.GDManObjects2= [];
gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects1= [];
gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects2= [];
gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1= [];
gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects2= [];


gdjs._31070_31192_22899_23376_32972_24433Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9532972_9524433Code_46GDStart2Objects1Objects = Hashtable.newFrom({"Start2": gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1});
gdjs._31070_31192_22899_23376_32972_24433Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9532972_9524433Code_46GDStart2Objects1Objects = Hashtable.newFrom({"Start2": gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1});
gdjs._31070_31192_22899_23376_32972_24433Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9532972_9524433Code_46GDStart2Objects1Objects = Hashtable.newFrom({"Start2": gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1});
gdjs._31070_31192_22899_23376_32972_24433Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13358420);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "某悬疑片段音乐.aac", true, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start2"), gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_32972_24433Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9532972_9524433Code_46GDStart2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1 */
{for(var i = 0, len = gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1[i].setOpacity(150);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start2"), gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_32972_24433Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9532972_9524433Code_46GDStart2Objects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1 */
{for(var i = 0, len = gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1[i].setOpacity(255);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start2"), gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs._31070_31192_22899_23376_32972_24433Code.mapOfGDgdjs_46_9531070_9531192_9522899_9523376_9532972_9524433Code_46GDStart2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackGround2"), gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "按钮音效B.aac", false, 15, 2);
}{for(var i = 0, len = gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects1.length ;i < len;++i) {
    gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects1[i].getBehavior("Tween").addObjectOpacityTween("start", 0, "easeOutExpo", 3000, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackGround2"), gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects1.length;i<l;++i) {
    if ( gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects1[k] = gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects1[i];
        ++k;
    }
}
gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "神秘女子对话1", false);
}}

}


};

gdjs._31070_31192_22899_23376_32972_24433Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._31070_31192_22899_23376_32972_24433Code.GDDialogueObjects1.length = 0;
gdjs._31070_31192_22899_23376_32972_24433Code.GDDialogueObjects2.length = 0;
gdjs._31070_31192_22899_23376_32972_24433Code.GDTagObjects1.length = 0;
gdjs._31070_31192_22899_23376_32972_24433Code.GDTagObjects2.length = 0;
gdjs._31070_31192_22899_23376_32972_24433Code.GDManObjects1.length = 0;
gdjs._31070_31192_22899_23376_32972_24433Code.GDManObjects2.length = 0;
gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects1.length = 0;
gdjs._31070_31192_22899_23376_32972_24433Code.GDBackGround2Objects2.length = 0;
gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects1.length = 0;
gdjs._31070_31192_22899_23376_32972_24433Code.GDStart2Objects2.length = 0;

gdjs._31070_31192_22899_23376_32972_24433Code.eventsList0(runtimeScene);

return;

}

gdjs['_31070_31192_22899_23376_32972_24433Code'] = gdjs._31070_31192_22899_23376_32972_24433Code;
