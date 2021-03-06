<!DOCTYPE html>
<!--
	NOTES:
	1. All tokens are represented by '$' sign in the template.
	2. You can write your code only wherever mentioned.
	3. All occurrences of existing tokens will be replaced by their appropriate values.
	4. Blank lines will be removed automatically.
	5. Remove unnecessary comments before creating your template.
-->
<html>
<head>
<meta charset="UTF-8">
<meta name="authoring-tool" content="Adobe_Animate_CC">
<title>Debbi</title>
<!-- write your code here -->
<style>
  #animation_container {
	position:absolute;
	margin:auto;
	left:0;right:0;
	top:0;bottom:0;
  }
</style>
<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
<script>
(function (lib, img, cjs, ss, an) {
var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Debbi_atlas_P_", frames: [[3567,4025,32,32],[3341,5458,496,279],[3633,892,256,280],[2541,4070,800,800],[1840,4937,572,876],[0,3303,2539,1099],[3343,4792,732,331],[3341,5125,732,331],[3633,0,460,444],[3633,446,460,444],[2541,3303,1024,765],[3839,5458,236,233],[3633,1174,256,256],[3567,3303,410,720],[3343,4070,580,720],[0,4937,918,610],[920,5549,918,610],[920,4937,918,610],[0,5549,918,610],[3891,892,42,92],[3633,1432,320,201],[3633,1635,320,201],[3633,1838,320,201],[0,4404,2539,531],[2541,4872,798,726],[0,2202,3631,1099],[0,0,3631,1099],[0,1101,3631,1099],[3955,1022,128,128],[3955,892,128,128]]}
];
lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		
lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		
lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		
	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		
lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		
	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
(lib.ComboBox = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
(lib.flowerBTN = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
(lib.V = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
(lib.X = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
(lib.סטופר = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
(lib.סיוםמשחק = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
(lib.ענן = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
(lib.ענן_1 = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
(lib.פטריה1 = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
(lib.פטריה2 = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
(lib.רקע = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
(lib.שעון = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();
(lib.שופר = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();
(lib.דבש = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
(lib.דבורהדבש = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
(lib.דביהדבורה = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
(lib.דביהדבורהpng1 = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
(lib.דביהדבורה2 = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();
(lib.דביהדבורה2png2 = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();
(lib.טיפה = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();
(lib.כפתורמצברגיל1 = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();
(lib.כפתורמצברגיל = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();
(lib.כפתורמצברגילpngcopy = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();
(lib.כותרת = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();
(lib.כוורת = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();
(lib.כלהכבוד = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();
(lib.כלהכבוד2pngcopy = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();
(lib.כלהכבוד3 = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();
(lib.מצות = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();
(lib.מדורה = function() {
	this.spriteSheet = ss["Debbi_atlas_P_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();
// helper functions:
function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}
function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}
(lib.pic3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.מדורה();
	this.instance.parent = this;
	this.instance.setTransform(-26,-25,0.389,0.389);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.pic3, new cjs.Rectangle(-26,-25,49.8,49.8), null);
(lib.pic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.מצות();
	this.instance.parent = this;
	this.instance.setTransform(-23,-23,0.353,0.353);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.pic2, new cjs.Rectangle(-23,-23,45.2,45.2), null);
(lib.pic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.שופר();
	this.instance.parent = this;
	this.instance.setTransform(-22,-24,0.169,0.184);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.pic1, new cjs.Rectangle(-22,-24,43.4,47.1), null);
(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("AF2AAQAACbhuBtQhtBuibAAQiaAAhthuQhuhtAAibQAAiaBuhuQBthtCaAAQCbAABtBtQBuBuAACag");
	this.shape.setTransform(0.3,0.1);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkHEIQhuhtAAibQAAiaBuhuQBthtCaAAQCbAABtBtQBuBuAACaQAACbhuBtQhtBuibAAQiaAAhthug");
	this.shape_1.setTransform(0.3,0.1);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(-38.1,-38.2,76.8,76.8), null);
(lib.StartFlowers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.פטריה1();
	this.instance.parent = this;
	this.instance.setTransform(-106,-102,0.456,0.456);
	this.instance_1 = new lib.פטריה2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-106,-102,0.456,0.456);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).wait(15));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-102,209.8,202.5);
(lib.anan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.Tanan = new cjs.Text("", "bold 24px 'Tahoma'");
	this.Tanan.name = "Tanan";
	this.Tanan.textAlign = "center";
	this.Tanan.lineHeight = 31;
	this.Tanan.lineWidth = 540;
	this.Tanan.parent = this;
	this.Tanan.setTransform(12,-38.9);
	this.instance = new lib.ענן();
	this.instance.parent = this;
	this.instance.setTransform(-319,-143,0.918,0.885);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.Tanan}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.anan, new cjs.Rectangle(-319,-143,672.1,293), null);
(lib.white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhCpAaYMAAAg0vMCFTAAAMAAAA0vg");
	this.shape.setTransform(-14.3,-8.8);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = getMCSymbolPrototype(lib.white, new cjs.Rectangle(-440.9,-177.6,853.2,337.6), null);
(lib.honey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop();
	}
	this.frame_1 = function() {
		this.gotoAndStop();
	}
	this.frame_2 = function() {
		this.gotoAndStop();
	}
	this.frame_3 = function() {
		this.gotoAndStop();
	}
	this.frame_4 = function() {
		this.gotoAndStop();
	}
	this.frame_5 = function() {
		this.gotoAndStop();
	}
	this.frame_6 = function() {
		this.gotoAndStop();
	}
	this.frame_7 = function() {
		this.gotoAndStop();
	}
	this.frame_8 = function() {
		this.gotoAndStop();
	}
	this.frame_9 = function() {
		this.gotoAndStop();
	}
	this.frame_10 = function() {
		this.gotoAndStop();
	}
	this.frame_11 = function() {
		this.gotoAndStop();
	}
	this.frame_12 = function() {
		this.gotoAndStop();
	}
	this.frame_13 = function() {
		this.gotoAndStop();
	}
	this.frame_14 = function() {
		this.gotoAndStop();
	}
	this.frame_15 = function() {
		this.gotoAndStop();
	}
	this.frame_16 = function() {
		this.gotoAndStop();
	}
	this.frame_17 = function() {
		this.gotoAndStop();
	}
	this.frame_18 = function() {
		this.gotoAndStop();
	}
	this.frame_19 = function() {
		this.gotoAndStop();
	}
	this.frame_20 = function() {
		this.gotoAndStop();
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1));
	// Layer_1
	this.instance = new lib.כוורת();
	this.instance.parent = this;
	this.instance.setTransform(-191,-68,0.547,0.547);
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9900").s().p("AigBEIgEgEQgNgOgHgFQgPgKgmAAIhOgBQgUgBgJgBQgQgDgKgHQgHgFgKgLIgEgGIAAhDIMPAAIAAA8IgeAHQgZAGgZANQgXANgJACIgQACQgKACgFADIgIAGQgFAEgEABQgEAAgHgCQgJgDgEAAQgHABgOALIgMAJg");
	this.shape.setTransform(32.7,215.6);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AiRBcIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAgzIg+AAIAAhAINvAAIAABAIgiAAIAAArIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_1.setTransform(31.2,213.2);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AiRB0IgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAgzIg+AAIAAgoIggAAIAAhIIOvAAIAABIIggAAIAAAoIgiAAIAAArIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_2.setTransform(31.2,210.8);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AiZCMIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgnIggAAIAAgoIgIAAIAAhQIPPAAIAABQIgYAAIAAAoIggAAIAAAnIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_3.setTransform(32,208.4);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("Ah1CgIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgnIgIAAIAAg4IhIAAIAAhAIQPAAIAAAoIAIAAIAABQIgYAAIAAAnIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_4.setTransform(28.4,206.4);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AiBDIIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgnIhAAAIAAgQIgIAAIAAhAIAIAAIAAhQIQnAAIAACgIgYAAIAAAnIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_5.setTransform(29.6,202.4);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AixDwIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgPIgIAAIAAhAIAIAAIAAhQIgYAAIAAhQISvAAIAABQIhwAAIAACfIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_6.setTransform(34.4,198.4);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9900").s().p("AilEYIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAg/IAIAAIAAhQIgYAAIAAgYIgYAAIAAiIISPAAIAABQIA4AAIAABQIhwAAIAACfIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_7.setTransform(33.2,194.4);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AiVE8IgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAg/IAIAAIAAhQIgYAAIAAgYIgYAAIAAhIIggAAIAAiIITPAAIAACIIggAAIAAAQIA4AAIAABQIhwAAIAACfIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_8.setTransform(31.6,190.8);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9900").s().p("AiZFcIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAhAIAIAAIAAhPIgYAAIAAgYIgYAAIAAhIIggAAIAAhgIgIAAIAAhoIT/AAIAABoIgoAAIAABgIggAAIAAAQIA4AAIAABQIhwAAIAACfIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_9.setTransform(32,187.6);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9900").s().p("AilF8IgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAhAIAIAAIAAhPIgYAAIAAgYIgYAAIAAhIIggAAIAAhgIgIAAIAAhoIAIAAIAAhAIUPAAIAAB4IgYAAIAAAwIgoAAIAABgIggAAIAAAQIA4AAIAABQIhwAAIAACfIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_10.setTransform(33.2,184.4);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9900").s().p("AiVGkIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAhAIAIAAIAAhQIgYAAIAAgXIgYAAIAAhIIggAAIAAhgIgIAAIAAhoIggAAIAAiQIUfAAIAABQIAYAAIAAB4IgYAAIAAAwIgoAAIAABgIggAAIAAAQIA4AAIAABPIhwAAIAACgIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_11.setTransform(31.6,180.4);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9900").s().p("AiVHIIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAhAIAIAAIAAhQIgYAAIAAgYIgYAAIAAhHIggAAIAAhgIgIAAIAAhoIggAAIAAiQIAgAAIAAhIIT3AAIAABIIAIAAIAABQIAYAAIAAB4IgYAAIAAAwIgoAAIAABgIggAAIAAAQIA4AAIAABPIhwAAIAACgIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_12.setTransform(31.6,176.8);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AiVHwIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAhAIAIAAIAAhQIgYAAIAAgYIgYAAIAAhIIggAAIAAhfIgIAAIAAhoIggAAIAAiQIAgAAIAAhIIAIAAIAAhQITnAAIAABQIAIAAIAABIIAIAAIAABQIAYAAIAAB4IgYAAIAAAwIgoAAIAABfIggAAIAAAQIA4AAIAABQIhwAAIAACgIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_13.setTransform(31.6,172.8);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AiVIkIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAhAIAIAAIAAhQIgYAAIAAgYIgYAAIAAhIIggAAIAAhfIgIAAIAAhoIggAAIAAiQIAgAAIAAhIIAIAAIAAhQIAoAAIAAhoIR/AAIAABoIBAAAIAABQIAIAAIAABIIAIAAIAABQIAYAAIAAB4IgYAAIAAAwIgoAAIAABfIggAAIAAAQIA4AAIAABQIhwAAIAACgIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_14.setTransform(31.6,167.6);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF9900").s().p("AiVJMIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAhAIAIAAIAAhQIgYAAIAAgYIgYAAIAAhIIggAAIAAhfIgIAAIAAhoIggAAIAAiQIAgAAIAAhIIAIAAIAAhQIAoAAIAAhoIAoAAIAAhQIR3AAIAABwIggAAIAABIIBAAAIAABQIAIAAIAABIIAIAAIAABQIAYAAIAAB4IgYAAIAAAwIgoAAIAABfIggAAIAAAQIA4AAIAABQIhwAAIAACgIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_15.setTransform(31.6,163.6);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF9900").s().p("AiVJ4IgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAhAIAIAAIAAhQIgYAAIAAgYIgYAAIAAhIIggAAIAAhgIgIAAIAAhnIggAAIAAiQIAgAAIAAhIIAIAAIAAhQIAoAAIAAhoIAoAAIAAhQIAgAAIAAhYIP/AAIAABYIBYAAIAABwIggAAIAABIIBAAAIAABQIAIAAIAABIIAIAAIAABQIAYAAIAAB4IgYAAIAAAvIgoAAIAABgIggAAIAAAQIA4AAIAABQIhwAAIAACgIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_16.setTransform(31.6,159.2);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF9900").s().p("AiVKUIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAhAIAIAAIAAhQIgYAAIAAgYIgYAAIAAhIIggAAIAAhgIgIAAIAAhnIggAAIAAiQIAgAAIAAhIIAIAAIAAhQIAoAAIAAhoIAoAAIAAhQIAgAAIAAhYIBIAAIAAg4IOnAAIAAA4IAQAAIAABYIBYAAIAABwIggAAIAABIIBAAAIAABQIAIAAIAABIIAIAAIAABQIAYAAIAAB3IgYAAIAAAwIgoAAIAABgIggAAIAAAQIA4AAIAABQIhwAAIAACgIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_17.setTransform(31.6,156.4);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF9900").s().p("AiVKwIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAhAIAIAAIAAhQIgYAAIAAgYIgYAAIAAhIIggAAIAAhgIgIAAIAAhnIggAAIAAiQIAgAAIAAhIIAIAAIAAhQIAoAAIAAhoIAoAAIAAhQIAgAAIAAhYIBIAAIAAg4IAgAAIAAg4INPAAIAAA4IA4AAIAAA4IAQAAIAABYIBYAAIAABwIggAAIAABIIBAAAIAABQIAIAAIAABIIAIAAIAABQIAYAAIAAB3IgYAAIAAAwIgoAAIAABgIggAAIAAAQIA4AAIAABQIhwAAIAACgIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_18.setTransform(31.6,153.6);
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF9900").s().p("AiVLgIgEgEQgOgOgHgFQgPgKgmAAIhNgBQgUgBgKgBQgPgDgKgHQgIgFgJgLIgFgGIAAg0Ig+AAIAAgoIggAAIAAgoIgIAAIAAgoIhAAAIAAgQIgIAAIAAhAIAIAAIAAhQIgYAAIAAgYIgYAAIAAhIIggAAIAAhgIgIAAIAAhoIggAAIAAiPIAgAAIAAhIIAIAAIAAhQIAoAAIAAhoIAoAAIAAhQIAgAAIAAhYIBIAAIAAg4IAgAAIAAg4IA4AAIAAhgILPAAIAABgIBIAAIAAA4IA4AAIAAA4IAQAAIAABYIBYAAIAABwIggAAIAABIIBAAAIAABQIAIAAIAABIIAIAAIAABQIAYAAIAAB3IgYAAIAAAwIgoAAIAABgIggAAIAAAQIA4AAIAABQIhwAAIAACgIgYAAIAAAoIgYAAIAAAoIggAAIAAAoIgiAAIAAAsIgeAIQgZAGgZANQgWANgJACIgRACQgJACgGADIgHAGQgFAEgEABQgFAAgHgCQgJgDgDAAQgHABgOALIgNAJg");
	this.shape_19.setTransform(31.6,148.8);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},1).to({state:[{t:this.shape_1},{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.instance}]},1).to({state:[{t:this.shape_3},{t:this.instance}]},1).to({state:[{t:this.shape_4},{t:this.instance}]},1).to({state:[{t:this.shape_5},{t:this.instance}]},1).to({state:[{t:this.shape_6},{t:this.instance}]},1).to({state:[{t:this.shape_7},{t:this.instance}]},1).to({state:[{t:this.shape_8},{t:this.instance}]},1).to({state:[{t:this.shape_9},{t:this.instance}]},1).to({state:[{t:this.shape_10},{t:this.instance}]},1).to({state:[{t:this.shape_11},{t:this.instance}]},1).to({state:[{t:this.shape_12},{t:this.instance}]},1).to({state:[{t:this.shape_13},{t:this.instance}]},1).to({state:[{t:this.shape_14},{t:this.instance}]},1).to({state:[{t:this.shape_15},{t:this.instance}]},1).to({state:[{t:this.shape_16},{t:this.instance}]},1).to({state:[{t:this.shape_17},{t:this.instance}]},1).to({state:[{t:this.shape_18},{t:this.instance}]},1).to({state:[{t:this.shape_19},{t:this.instance}]},1).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191,-68,436.7,397.3);
(lib.debiTheBee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.כותרת();
	this.instance.parent = this;
	this.instance.setTransform(-561,-138,0.431,0.424);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.debiTheBee, new cjs.Rectangle(-561,-138,1093.1,225), null);
(lib.teaching = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAfIAAgKIgBgUIgBgGQAAgJAIgHIgQAAIAAgJIAlAAIAAAHQgJAAgFAGQgFAFAAAIIAAAGIACAUIAAAJg");
	this.shape.setTransform(67.6,0);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQAgIAAgfQAAgJgCgEQgCgEgFgDQgGgCgJAAIgSACIAAgKQAKgBAKAAQASAAAIAHQAHAHAAAPIAAAhgAgaAgIAAgjIALAAIAAAjg");
	this.shape_1.setTransform(61.6,-0.1);
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQAgIAAgfQAAgJgCgEQgCgEgFgDQgGgCgJAAIgSACIAAgKQAKgBAKAAQASAAAIAHQAHAHAAAPIAAAhgAgaAgIAAgjIALAAIAAAjg");
	this.shape_2.setTransform(54.4,-0.1);
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAfIAAg9IALAAIAAA9g");
	this.shape_3.setTransform(45.9,0);
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgEQABgEADgDIAEgEIADgHIABgGIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAPIgBAKIgFAIIgDAFQgFAGAAAHIAAAKg");
	this.shape_4.setTransform(41.5,-1.2);
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAQAgIAAghQAAgHgCgEQgBgEgFgCQgEgCgIgBIgLABIAAA0IgLAAIAAg9QAMgBALAAQAKAAAHADQAHADADAGQADAFAAAKIAAAjg");
	this.shape_5.setTransform(35.3,-0.1);
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFArIAAguIgTgnIANAAIANAfQAFgDACgEIACgJIACgPIAMAAIgCASQgCAQgQAGIAAAtg");
	this.shape_6.setTransform(28.8,1.2);
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAYIARgDIgLg2IAMAAIAIAyQAKgEADgHQACgGAAgMIABgVIALAAIgBARIgBAQQAAAEgCAGQgDAGgFAEQgFAEgJAEQgIADgRADg");
	this.shape_7.setTransform(19.4,0.2);
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgBArIAAgJQAAgHABgEQABgEADgDIAEgEIADgHIABgGIAAgIIgiAAIAAghIALAAIAAAYIAiAAIAAAPIgBAKIgFAIIgDAFQgFAGAAAHIAAAKg");
	this.shape_8.setTransform(13.6,-1.2);
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAQAgIAAgfQAAgJgCgEQgDgEgFgDQgFgCgJAAIgSACIgBgKQALgBAKAAQATAAAHAHQAIAHAAAPIAAAhgAgaAgIAAgjIALAAIAAAjg");
	this.shape_9.setTransform(4.1,-0.1);
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAcIADgKQAGAEAIAAQAJAAAIgFQAHgGAAgLQAAgKgGgGQgFgGgJAAIgJABIAAAMQAAAGAGABIAFgBIABAHQgDACgEAAQgIgBgEgEQgFgCAAgJIAAgSQALgDALAAQANAAAIAIQAKAIAAAPQAAAOgKAJQgJAJgQAAQgLAAgHgEg");
	this.shape_10.setTransform(-2.8,0);
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAOAgIAAgfQAAgIgCgEQgCgFgFgCQgFgCgIgBIgPABIgBgJIAQgBQASAAAIAHQAHAHAAAPIAAAhg");
	this.shape_11.setTransform(-9.5,-0.1);
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAQAgIAAghQAAgHgCgEQgBgEgFgCQgEgCgIgBIgLABIAAA0IgLAAIAAg9QAMgBALAAQAKAAAHADQAHADADAGQADAFAAAKIAAAjg");
	this.shape_12.setTransform(-15.8,-0.1);
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAQAgIAAgfQAAgJgCgEQgCgEgGgDQgFgCgJAAIgSACIAAgKQAKgBAKAAQATAAAHAHQAIAHAAAPIAAAhgAgaAgIAAgjIALAAIAAAjg");
	this.shape_13.setTransform(-26.3,-0.1);
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBAgIAAgKIATAAIAAgSIAAgOQgBgFgDgDQgCgDgFAAQgHAAgDAHQgFAHgDAPIgEAYIgLAAIAEgZIAEgKIgKgbIALAAIAEAOQADgGAGgEQAEgEAIAAQAGAAAGADQAFAEACAHQACAHAAANIAAAcg");
	this.shape_14.setTransform(-33.8,-0.1);
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AggAeIACgJIAGABQAFAAABgBQACgCgBgFIAAgjIgMABIgBgJQAOgCAOAAQAMAAAHADQAIACAEAGQAEAHAAAMIAAAgIgLAAIAAgeQAAgIgCgFQgBgEgEgCQgFgDgKAAIgGAAIAAAlIgBAJQgBADgDACQgDACgHAAQgGAAgFgCg");
	this.shape_15.setTransform(-41.3,-0.1);
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAPAfIgWggQgGABgBAJIgCAWIgMAAIACgWQACgNALgGIgPgUIAOAAIATAcQADgDACgDIACgJIACgNIALAAIgBANQgBAIgDAFQgDAFgHADIATAbg");
	this.shape_16.setTransform(-48.1,0);
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFAQIAAgfIALAAIAAAfg");
	this.shape_17.setTransform(-53.1,-1.5);
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgaAgIAAg9QAMgBALAAQAKAAAHADQAHADADAGQADAFAAAKIAAAjgAgPgUIAAAqIAfAAIAAgXQAAgHgCgEQgBgEgFgCQgEgCgIgBIgLABg");
	this.shape_18.setTransform(-58.2,-0.1);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.teaching, new cjs.Rectangle(-135,-9.7,278,17.4), null);
(lib.apple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
}).prototype = getMCSymbolPrototype(lib.apple, null, null);
(lib.time = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_2
	this.Ttime = new cjs.Text("", "bold 24px 'Tahoma'");
	this.Ttime.name = "Ttime";
	this.Ttime.textAlign = "center";
	this.Ttime.lineHeight = 31;
	this.Ttime.lineWidth = 40;
	this.Ttime.parent = this;
	this.Ttime.setTransform(-0.9,-11.6,0.955,0.902);
	this.timeline.addTween(cjs.Tween.get(this.Ttime).wait(1));
	// Layer_1
	this.instance = new lib.שעון();
	this.instance.parent = this;
	this.instance.setTransform(-45,-46,0.376,0.366);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.time, new cjs.Rectangle(-45,-46,88.8,85.4), null);
(lib.StartFlowers1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
(lib.anan_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.Tanan_1 = new cjs.Text("", "bold 24px 'Tahoma'");
	this.Tanan_1.name = "Tanan_1";
	this.Tanan_1.textAlign = "center";
	this.Tanan_1.lineHeight = 31;
	this.Tanan_1.lineWidth = 540;
	this.Tanan_1.parent = this;
	this.Tanan_1.setTransform(12,-38.9);
	this.instance_1 = new lib.ענן_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-319,-143,0.918,0.885);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.Tanan_1}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.anan_1, new cjs.Rectangle(-319,-143,672.1,293), null);
(lib.endGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.סיוםמשחק();
	this.instance.parent = this;
	this.instance.setTransform(-251,-166,0.197,0.188);
	this.textAlltime = new cjs.Text("", "bold 20px 'Tahoma'");
	this.textAlltime.name = "textAlltime";
	this.textAlltime.textAlign = "right";
	this.textAlltime.lineHeight = 26;
	this.textAlltime.lineWidth = 68;
	this.textAlltime.parent = this;
	this.textAlltime.setTransform(-106.5,-4.2);
	this.textPoints = new cjs.Text("", "bold 20px 'Tahoma'");
	this.textPoints.name = "textPoints";
	this.textPoints.textAlign = "right";
	this.textPoints.lineHeight = 26;
	this.textPoints.lineWidth = 68;
	this.textPoints.parent = this;
	this.textPoints.setTransform(65,-5.2);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.textPoints},{t:this.textAlltime},{t:this.instance}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.endGame, new cjs.Rectangle(-251,-166,499.2,207), null);
(lib.great = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.כלהכבוד();
	this.instance.parent = this;
	this.instance.setTransform(-447,-294,0.247,0.241);
	this.instance_1 = new lib.כלהכבוד2pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-447,-294,0.247,0.241);
	this.instance_2 = new lib.כלהכבוד3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-447,-294,0.247,0.24);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.247,scaleY:0.241,x:-447}}]}).to({state:[{t:this.instance_1,p:{scaleY:0.241,y:-294}}]},12).to({state:[{t:this.instance,p:{scaleX:0.246,scaleY:0.235,x:-445}},{t:this.instance_1,p:{scaleY:0.239,y:-295}},{t:this.instance_2}]},11).wait(12));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-447,-294,897,265);
(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.דבורהדבש();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.594,0.594);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,344.8,428), null);
(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.instance = new lib.טיפה();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.522);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,28,48), null);
(lib.bigDEBI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.דביהדבורהpng1();
	this.instance.parent = this;
	this.instance.setTransform(-159,-105,0.35,0.35);
	this.instance_1 = new lib.דביהדבורה2png2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-159,-106,0.35,0.35);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).wait(7));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159,-105,321.3,213.5);
(lib.debi0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.דביהדבורהpng1();
	this.instance.parent = this;
	this.instance.setTransform(-90,-61,0.196,0.198);
	this.instance_1 = new lib.דביהדבורה2png2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-90,-61,0.196,0.198);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{rotation:0,x:-90,y:-61}}]},8).to({state:[]},17).to({state:[{t:this.instance_1,p:{rotation:-0.7,x:-548.7,y:-158.8}}]},11).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-61,179.6,121);
(lib.debiFly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.דביהדבורה();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.196,0.198);
	this.instance_1 = new lib.דביהדבורה2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.196,0.198);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).wait(3));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.6,121);
(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);
p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
(lib.מצבלחיצהעלמסיח = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("A0zFoIAArPMApnAAAIAALPg");
	this.shape.setTransform(-3,0.8);
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.2,-35.2,266.4,72);
(lib.but11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.text = new cjs.Text("המשך", "bold 40px 'Tahoma'");
	this.text.textAlign = "right";
	this.text.lineHeight = 50;
	this.text.lineWidth = 139;
	this.text.parent = this;
	this.text.setTransform(42,-38.8,0.717,0.703);
	this.instance = new lib.כפתורמצברגילpngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-121,-96,0.744,0.731);
	this.text_1 = new cjs.Text("המשך", "bold 40px 'Tahoma'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 50;
	this.text_1.lineWidth = 139;
	this.text_1.parent = this;
	this.text_1.setTransform(59.2,-46.9);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.instance},{t:this.text}]}).to({state:[{t:this.text_1},{t:this.instance},{t:this.text}]},2).to({state:[{t:this.text_1},{t:this.instance},{t:this.text}]},1).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-96,238,147);
(lib.כפתורהתחלמשחק = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.text = new cjs.Text("התחל משחק", "bold 20px 'Tahoma'");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 149;
	this.text.parent = this;
	this.text.setTransform(0.5,-9,0.937,0.931);
	this.instance = new lib.כפתורמצברגיל();
	this.instance.parent = this;
	this.instance.setTransform(-125,-77,0.781,0.771);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-77,250,155);
(lib.כפתורסיוםמשחק = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.text = new cjs.Text("סיום", "bold 20px 'Tahoma'");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 108;
	this.text.parent = this;
	this.text.setTransform(-92.5,53.1);
	this.instance = new lib.כפתורמצברגיל1();
	this.instance.parent = this;
	this.instance.setTransform(-192,20,0.475,0.453);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202.5,20,162.5,91);
(lib.התחל = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.text = new cjs.Text("התחל", "bold 24px 'Tahoma'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 114;
	this.text.parent = this;
	this.text.setTransform(0.1,-11.5,0.68,0.685);
	this.instance = new lib.כפתורמצברגיל();
	this.instance.parent = this;
	this.instance.setTransform(-83,-59,0.519,0.562);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-59,166,113);
(lib.שחקשוב = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.text = new cjs.Text("שחק שוב", "bold 20px 'Tahoma'");
	this.text.textAlign = "right";
	this.text.lineHeight = 26;
	this.text.lineWidth = 108;
	this.text.parent = this;
	this.text.setTransform(169,55.1);
	this.instance = new lib.כפתורמצברגיל1();
	this.instance.parent = this;
	this.instance.setTransform(48,21,0.475,0.453);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48,21,152,91);
(lib.V_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.V();
	this.instance.parent = this;
	this.instance.setTransform(-14,-13,0.117,0.117);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.V_1, new cjs.Rectangle(-14,-13,30,32.8), null);
(lib.X_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.X();
	this.instance.parent = this;
	this.instance.setTransform(-20,-21,0.047,0.047);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.X_1, new cjs.Rectangle(-20,-21,38,38), null);
(lib.ananim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_3
	this.instance = new lib.anan();
	this.instance.parent = this;
	this.instance.setTransform(199.1,64.1,0.652,0.781,0,0,0,17.1,3.4);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:3.5,x:199.3,y:64.2},0).wait(1).to({x:199.5},0).wait(1).to({x:199.7},0).wait(1).to({x:199.9},0).wait(1).to({x:200.1},0).wait(1).to({x:200.3},0).wait(1).to({x:200.5},0).wait(1).to({x:200.7},0).wait(1).to({x:200.9},0).wait(1).to({x:201.1},0).wait(1).to({x:201.3},0).wait(1).to({x:201.5},0).wait(1).to({x:201.7},0).wait(1).to({x:201.9},0).wait(1).to({x:202.2},0).wait(1).to({x:202.4},0).wait(1).to({x:202.6},0).wait(1).to({x:202.8},0).wait(1).to({x:203},0).wait(1).to({x:203.2},0).wait(1).to({x:203.4},0).wait(1).to({x:203.6},0).wait(1).to({x:203.8},0).wait(1).to({x:204},0).wait(1).to({x:204.2},0).wait(1).to({x:204.4},0).wait(1).to({x:204.6},0).wait(1).to({x:204.8},0).wait(1).to({x:205.1},0).wait(1).to({x:205.3},0).wait(1).to({x:205.5},0).wait(1).to({x:205.7},0).wait(1).to({x:205.9},0).wait(1).to({x:206.1},0).wait(1).to({x:206.3},0).wait(1).to({x:206.5},0).wait(1).to({x:206.7},0).wait(1).to({x:206.9},0).wait(1).to({x:207.1},0).wait(1).to({x:207.3},0).wait(1).to({x:207.5},0).wait(1).to({x:207.7},0).wait(1).to({x:208},0).wait(1).to({x:208.2},0).wait(1).to({x:208.4},0).wait(1).to({x:208.6},0).wait(1).to({x:208.8},0).wait(1).to({x:209},0).wait(1).to({x:209.2},0).wait(1).to({x:209.4},0).wait(1).to({x:209.6},0).wait(1).to({x:209.8},0).wait(1).to({x:210},0).wait(1).to({x:210.2},0).wait(1).to({x:210.4},0).wait(1).to({x:210.6},0).wait(1).to({x:210.9},0).wait(1).to({x:211.1},0).wait(1).to({x:211.3},0).wait(1).to({x:211.5},0).wait(1).to({x:211.7},0).wait(1).to({x:211.9},0).wait(1).to({x:212.1},0).wait(1).to({x:212.3},0).wait(1).to({x:212.5},0).wait(1).to({x:212.7},0).wait(1).to({x:212.9},0).wait(1).to({x:213.1},0).wait(1).to({x:213.3},0).wait(1).to({x:213.5},0).wait(1).to({x:213.7},0).wait(1).to({x:213.5},0).wait(1).to({x:213.3},0).wait(1).to({x:213.1},0).wait(1).to({x:212.9},0).wait(1).to({x:212.7},0).wait(1).to({x:212.4},0).wait(1).to({x:212.2},0).wait(1).to({x:212},0).wait(1).to({x:211.8},0).wait(1).to({x:211.6},0).wait(1).to({x:211.4},0).wait(1).to({x:211.1},0).wait(1).to({x:210.9},0).wait(1).to({x:210.7},0).wait(1).to({x:210.5},0).wait(1).to({x:210.3},0).wait(1).to({x:210},0).wait(1).to({x:209.8},0).wait(1).to({x:209.6},0).wait(1).to({x:209.4},0).wait(1).to({x:209.2},0).wait(1).to({x:209},0).wait(1).to({x:208.7},0).wait(1).to({x:208.5},0).wait(1).to({x:208.3},0).wait(1).to({x:208.1},0).wait(1).to({x:207.9},0).wait(1).to({x:207.6},0).wait(1).to({x:207.4},0).wait(1).to({x:207.2},0).wait(1).to({x:207},0).wait(1).to({x:206.8},0).wait(1).to({x:206.6},0).wait(1).to({x:206.3},0).wait(1).to({x:206.1},0).wait(1).to({x:205.9},0).wait(1).to({x:205.7},0).wait(1).to({x:205.5},0).wait(1).to({x:205.2},0).wait(1).to({x:205},0).wait(1).to({x:204.8},0).wait(1).to({x:204.6},0).wait(1).to({x:204.4},0).wait(1).to({x:204.2},0).wait(1).to({x:203.9},0).wait(1).to({x:203.7},0).wait(1).to({x:203.5},0).wait(1).to({x:203.3},0).wait(1).to({x:203.1},0).wait(1).to({x:202.8},0).wait(1).to({x:202.6},0).wait(1).to({x:202.4},0).wait(1).to({x:202.2},0).wait(1).to({x:202},0).wait(1).to({x:201.8},0).wait(1).to({x:201.5},0).wait(1).to({x:201.3},0).wait(1).to({x:201.1},0).wait(1).to({x:200.9},0).wait(1).to({x:200.7},0).wait(1).to({x:200.4},0).wait(1).to({x:200.2},0).wait(1).to({x:200},0).wait(1).to({x:199.8},0).wait(1).to({x:199.6},0).wait(1).to({x:199.4},0).wait(1).to({x:199.1},0).wait(1).to({x:198.9},0).wait(1).to({x:198.7},0).wait(1).to({x:198.5},0).wait(1).to({x:198.3},0).wait(1).to({x:198},0).wait(1));
	// Layer_4
	this.instance_1 = new lib.anan();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-200.8,193.1,0.598,0.768,0,0,0,17.1,3.4);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:3.5,x:-200.4},0).wait(1).to({x:-200.1},0).wait(1).to({x:-199.7},0).wait(1).to({x:-199.4},0).wait(1).to({x:-199},0).wait(1).to({x:-198.7},0).wait(1).to({x:-198.3},0).wait(1).to({x:-198,y:193},0).wait(1).to({x:-197.6},0).wait(1).to({x:-197.3},0).wait(1).to({x:-196.9},0).wait(1).to({x:-196.6},0).wait(1).to({x:-196.2},0).wait(1).to({x:-195.9},0).wait(1).to({x:-195.5,y:192.9},0).wait(1).to({x:-195.2},0).wait(1).to({x:-194.8},0).wait(1).to({x:-194.5},0).wait(1).to({x:-194.1},0).wait(1).to({x:-193.8},0).wait(1).to({x:-193.4},0).wait(1).to({x:-193.1,y:192.8},0).wait(1).to({x:-192.7},0).wait(1).to({x:-192.3},0).wait(1).to({x:-192},0).wait(1).to({x:-191.6},0).wait(1).to({x:-191.3},0).wait(1).to({x:-190.9},0).wait(1).to({x:-190.6,y:192.7},0).wait(1).to({x:-190.2},0).wait(1).to({x:-189.9},0).wait(1).to({x:-189.5},0).wait(1).to({x:-189.2},0).wait(1).to({x:-188.8},0).wait(1).to({x:-188.5},0).wait(1).to({x:-188.1,y:192.6},0).wait(1).to({x:-187.8},0).wait(1).to({x:-187.4},0).wait(1).to({x:-187.1},0).wait(1).to({x:-186.7},0).wait(1).to({x:-186.4},0).wait(1).to({x:-186},0).wait(1).to({x:-185.7,y:192.5},0).wait(1).to({x:-185.3},0).wait(1).to({x:-185},0).wait(1).to({x:-184.6},0).wait(1).to({x:-184.3},0).wait(1).to({x:-183.9},0).wait(1).to({x:-183.5},0).wait(1).to({x:-183.2,y:192.4},0).wait(1).to({x:-182.8},0).wait(1).to({x:-182.5},0).wait(1).to({x:-182.1},0).wait(1).to({x:-181.8},0).wait(1).to({x:-181.4},0).wait(1).to({x:-181.1},0).wait(1).to({x:-180.7,y:192.3},0).wait(1).to({x:-180.4},0).wait(1).to({x:-180},0).wait(1).to({x:-179.7},0).wait(1).to({x:-179.3},0).wait(1).to({x:-179},0).wait(1).to({x:-178.6},0).wait(1).to({x:-178.3,y:192.2},0).wait(1).to({x:-177.9},0).wait(1).to({x:-177.6},0).wait(1).to({x:-177.2},0).wait(1).to({x:-176.9},0).wait(1).to({x:-176.5},0).wait(1).to({x:-176.2},0).wait(1).to({x:-175.8,y:192.1},0).wait(1).to({x:-176.1,y:192.2},0).wait(1).to({x:-176.5},0).wait(1).to({x:-176.8},0).wait(1).to({x:-177.1},0).wait(1).to({x:-177.5},0).wait(1).to({x:-177.8},0).wait(1).to({x:-178.1},0).wait(1).to({x:-178.5,y:192.3},0).wait(1).to({x:-178.8},0).wait(1).to({x:-179.1},0).wait(1).to({x:-179.5},0).wait(1).to({x:-179.8},0).wait(1).to({x:-180.1},0).wait(1).to({x:-180.5},0).wait(1).to({x:-180.8,y:192.4},0).wait(1).to({x:-181.1},0).wait(1).to({x:-181.5},0).wait(1).to({x:-181.8},0).wait(1).to({x:-182.1},0).wait(1).to({x:-182.5},0).wait(1).to({x:-182.8},0).wait(1).to({x:-183.1,y:192.5},0).wait(1).to({x:-183.5},0).wait(1).to({x:-183.8},0).wait(1).to({x:-184.1},0).wait(1).to({x:-184.5},0).wait(1).to({x:-184.8},0).wait(1).to({x:-185.1},0).wait(1).to({x:-185.5,y:192.6},0).wait(1).to({x:-185.8},0).wait(1).to({x:-186.1},0).wait(1).to({x:-186.5},0).wait(1).to({x:-186.8},0).wait(1).to({x:-187.1},0).wait(1).to({x:-187.5},0).wait(1).to({x:-187.8},0).wait(1).to({x:-188.1,y:192.7},0).wait(1).to({x:-188.5},0).wait(1).to({x:-188.8},0).wait(1).to({x:-189.1},0).wait(1).to({x:-189.5},0).wait(1).to({x:-189.8},0).wait(1).to({x:-190.1},0).wait(1).to({x:-190.5,y:192.8},0).wait(1).to({x:-190.8},0).wait(1).to({x:-191.1},0).wait(1).to({x:-191.5},0).wait(1).to({x:-191.8},0).wait(1).to({x:-192.1},0).wait(1).to({x:-192.5},0).wait(1).to({x:-192.8,y:192.9},0).wait(1).to({x:-193.1},0).wait(1).to({x:-193.5},0).wait(1).to({x:-193.8},0).wait(1).to({x:-194.1},0).wait(1).to({x:-194.5},0).wait(1).to({x:-194.8},0).wait(1).to({x:-195.1,y:193},0).wait(1).to({x:-195.5},0).wait(1).to({x:-195.8},0).wait(1).to({x:-196.1},0).wait(1).to({x:-196.5},0).wait(1).to({x:-196.8},0).wait(1).to({x:-197.1},0).wait(1).to({x:-197.5,y:193.1},0).wait(1).to({x:-197.8},0).wait(1).to({x:-198.1},0).wait(1).to({x:-198.5},0).wait(1).to({x:-198.8},0).wait(1).to({x:-199.1},0).wait(1).to({x:-199.5},0).wait(1).to({x:-199.8},0).wait(1));
	// Layer_2
	this.instance_2 = new lib.anan();
	this.instance_2.parent = this;
	this.instance_2.setTransform(388.1,216.1,0.631,0.693,0,0,0,17.1,3.5);
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:387.9},0).wait(1).to({x:387.7},0).wait(1).to({x:387.5},0).wait(1).to({x:387.3,y:216},0).wait(1).to({x:387.1},0).wait(1).to({x:387},0).wait(1).to({x:386.8},0).wait(1).to({x:386.6},0).wait(1).to({x:386.4},0).wait(1).to({x:386.2},0).wait(1).to({x:386,y:215.9},0).wait(1).to({x:385.9},0).wait(1).to({x:385.7},0).wait(1).to({x:385.5},0).wait(1).to({x:385.3},0).wait(1).to({x:385.1},0).wait(1).to({x:384.9},0).wait(1).to({x:384.8,y:215.8},0).wait(1).to({x:384.6},0).wait(1).to({x:384.4},0).wait(1).to({x:384.2},0).wait(1).to({x:384},0).wait(1).to({x:383.8},0).wait(1).to({x:383.7},0).wait(1).to({x:383.5,y:215.7},0).wait(1).to({x:383.3},0).wait(1).to({x:383.1},0).wait(1).to({x:382.9},0).wait(1).to({x:382.7},0).wait(1).to({x:382.6},0).wait(1).to({x:382.4},0).wait(1).to({x:382.2,y:215.6},0).wait(1).to({x:382},0).wait(1).to({x:381.8},0).wait(1).to({x:381.6},0).wait(1).to({x:381.5},0).wait(1).to({x:381.3},0).wait(1).to({x:381.1},0).wait(1).to({x:380.9},0).wait(1).to({x:380.7,y:215.5},0).wait(1).to({x:380.5},0).wait(1).to({x:380.4},0).wait(1).to({x:380.2},0).wait(1).to({x:380},0).wait(1).to({x:379.8},0).wait(1).to({x:379.6},0).wait(1).to({x:379.4,y:215.4},0).wait(1).to({x:379.3},0).wait(1).to({x:379.1},0).wait(1).to({x:378.9},0).wait(1).to({x:378.7},0).wait(1).to({x:378.5},0).wait(1).to({x:378.3},0).wait(1).to({x:378.2,y:215.3},0).wait(1).to({x:378},0).wait(1).to({x:377.8},0).wait(1).to({x:377.6},0).wait(1).to({x:377.4},0).wait(1).to({x:377.2},0).wait(1).to({x:377.1},0).wait(1).to({x:376.9,y:215.2},0).wait(1).to({x:376.7},0).wait(1).to({x:376.5},0).wait(1).to({x:376.3},0).wait(1).to({x:376.1},0).wait(1).to({x:376},0).wait(1).to({x:375.8},0).wait(1).to({x:375.6,y:215.1},0).wait(1).to({x:375.4},0).wait(1).to({x:375.2},0).wait(1).to({x:375},0).wait(1).to({x:375.3},0).wait(1).to({x:375.5,y:215.2},0).wait(1).to({x:375.8},0).wait(1).to({x:376},0).wait(1).to({x:376.2},0).wait(1).to({x:376.5,y:215.3},0).wait(1).to({x:376.7},0).wait(1).to({x:376.9},0).wait(1).to({x:377.2},0).wait(1).to({x:377.4,y:215.4},0).wait(1).to({x:377.6},0).wait(1).to({x:377.9},0).wait(1).to({x:378.1,y:215.5},0).wait(1).to({x:378.4},0).wait(1).to({x:378.6},0).wait(1).to({x:378.8},0).wait(1).to({x:379.1,y:215.6},0).wait(1).to({x:379.3},0).wait(1).to({x:379.5},0).wait(1).to({x:379.8,y:215.7},0).wait(1).to({x:380},0).wait(1).to({x:380.2},0).wait(1).to({x:380.5},0).wait(1).to({x:380.7,y:215.8},0).wait(1).to({x:381},0).wait(1).to({x:381.2},0).wait(1).to({x:381.4},0).wait(1).to({x:381.7,y:215.9},0).wait(1).to({x:381.9},0).wait(1).to({x:382.1},0).wait(1).to({x:382.4,y:216},0).wait(1).to({x:382.6},0).wait(1).to({x:382.8},0).wait(1).to({x:383.1},0).wait(1).to({x:383.3,y:216.1},0).wait(1).to({x:383.5},0).wait(1).to({x:383.8},0).wait(1).to({x:384,y:216.2},0).wait(1).to({x:384.3},0).wait(1).to({x:384.5},0).wait(1).to({x:384.7},0).wait(1).to({x:385,y:216.3},0).wait(1).to({x:385.2},0).wait(1).to({x:385.4},0).wait(1).to({x:385.7},0).wait(1).to({x:385.9,y:216.4},0).wait(1).to({x:386.1},0).wait(1).to({x:386.4},0).wait(1).to({x:386.6,y:216.5},0).wait(1).to({x:386.9},0).wait(1).to({x:387.1},0).wait(1).to({x:387.3},0).wait(1).to({x:387.6,y:216.6},0).wait(1).to({x:387.8},0).wait(1).to({x:388},0).wait(1).to({x:388.3,y:216.7},0).wait(1).to({x:388.5},0).wait(1).to({x:388.7},0).wait(1).to({x:389},0).wait(1).to({x:389.2,y:216.8},0).wait(1).to({x:389.5},0).wait(1).to({x:389.7},0).wait(1).to({x:389.9},0).wait(1).to({x:390.2,y:216.9},0).wait(1).to({x:390.4},0).wait(1).to({x:390.6},0).wait(1).to({x:390.9,y:217},0).wait(1).to({x:391.1},0).wait(1).to({x:391.3},0).wait(1).to({x:391.6},0).wait(1).to({x:391.8,y:217.1},0).wait(1).to({x:392},0).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401.9,-50.3,1002,367.9);
(lib.NoTime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.but11();
	this.instance.parent = this;
	this.instance.setTransform(13.1,256);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.but11(), 3);
	this.instance_1 = new lib.סטופר();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-118,-215,0.461,0.472);
	this.afterTIMEout = new cjs.Text("המשך", "bold 28px 'Tahoma'");
	this.afterTIMEout.name = "afterTIMEout";
	this.afterTIMEout.textAlign = "center";
	this.afterTIMEout.lineHeight = 36;
	this.afterTIMEout.lineWidth = 120;
	this.afterTIMEout.parent = this;
	this.afterTIMEout.setTransform(11.9,216.2);
	this.text = new cjs.Text("הזמן אזל!", "bold 28px 'Tahoma'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 209;
	this.text.parent = this;
	this.text.setTransform(13.9,-264.9);
	this.instance_2 = new lib.כפתורמצברגיל();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-110,159,0.75,0.75);
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AAA4XMAAAAwv");
	this.shape.setTransform(482,47);
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Eg0KArJMAAAhWRMBoVAAAMAAABWRg");
	this.shape_1.setTransform(13.1,-0.9);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.text},{t:this.afterTIMEout},{t:this.instance_1},{t:this.instance}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.NoTime, new cjs.Rectangle(-320.8,-277,803.8,586.8), null);
(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 1
	this.startbtn = new lib.התחל();
	this.startbtn.parent = this;
	this.startbtn.setTransform(86.9,68.4,1.372,1.291,0,0,0,52.6,17.2);
	new cjs.ButtonHelper(this.startbtn, 0, 1, 1);
	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר משחק, 0, דבי לומדת על חגי ישראל, 1, דבי שומרת על הסביבה, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});
	this.mycb.setTransform(14.4,-40.8,2.086,1.279,0,0,0,49.7,10.9);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));
}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-99.1,-55.4,227.8,171.4), null);
(lib.anima = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer 4
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(-99,-38.9,1,0.792,0,0,0,13.1,23.8);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:14,regY:24,scaleX:1.05,scaleY:0.86,x:-97.5,y:-18},0).wait(1).to({scaleX:1.09,scaleY:0.92,x:-97,y:2.8},0).wait(1).to({scaleX:1.14,scaleY:0.98,x:-96.4,y:23.5},0).wait(1).to({scaleX:1.19,scaleY:1.05,x:-95.9,y:44.3},0).wait(1).to({scaleX:1.23,scaleY:1.11,x:-95.4,y:65},0).wait(1).to({scaleX:1.28,scaleY:1.18,x:-94.8,y:85.7},0).wait(1).to({scaleX:1.33,scaleY:1.24,x:-94.3,y:106.5},0).wait(1).to({scaleX:1.37,scaleY:1.3,x:-93.8,y:127.3},0).wait(1).to({scaleX:1.42,scaleY:1.37,x:-93.2,y:148},0).wait(1).to({scaleX:1.46,scaleY:1.43,x:-92.7,y:168.8},0).wait(1).to({scaleX:1.51,scaleY:1.49,x:-92.2,y:189.5},0).wait(1));
	// Layer 3
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-127.1,-96.8,0.676,0.541,0,0,0,13.4,23.4);
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:14,regY:24,scaleX:0.69,scaleY:0.56,x:-126.9,y:-71.5},0).wait(1).to({scaleX:0.71,scaleY:0.58,x:-127.1,y:-46.5},0).wait(1).to({scaleX:0.73,scaleY:0.6,x:-127.2,y:-21.6},0).wait(1).to({scaleX:0.75,scaleY:0.62,x:-127.4,y:3.4},0).wait(1).to({scaleX:0.77,scaleY:0.64,x:-127.6,y:28.3},0).wait(1).to({scaleX:0.78,scaleY:0.66,x:-127.7,y:53.3},0).wait(1).to({scaleX:0.8,scaleY:0.67,x:-127.9,y:78.3},0).wait(1).to({scaleX:0.82,scaleY:0.69,x:-128.1,y:103.2},0).wait(1).to({scaleX:0.84,scaleY:0.71,x:-128.3,y:128.2},0).wait(1).to({scaleX:0.86,scaleY:0.73,x:-128.5,y:153.2},0).wait(1).to({scaleX:0.87,scaleY:0.75,x:-128.7,y:178.2},0).wait(1));
	// Layer_1
	this.instance_2 = new lib.דבש();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-197,-84,0.442,0.442);
	this.animatime = new cjs.Text("", "bold 20px 'Arial'", "#FFFFFF");
	this.animatime.name = "animatime";
	this.animatime.textAlign = "center";
	this.animatime.lineHeight = 24;
	this.animatime.lineWidth = 101;
	this.animatime.alpha = 0.00000000;
	this.animatime.parent = this;
	this.animatime.setTransform(-106.7,161.9);
	this.instance_3 = new lib.Symbol4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(31.3,29,1,1,0,0,0,172.3,214);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.animatime},{t:this.instance_2}]}).wait(12));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197,-185,400.8,428);
(lib.debi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{animation0:1,animation1:60,animation2:119,animation3:178});
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
		stage.afterDebiAnimation();
	}
	this.frame_118 = function() {
		this.stop();
		stage.afterDebiAnimation();
	}
	this.frame_177 = function() {
		this.stop();
		stage.afterDebiAnimation();
	}
	this.frame_236 = function() {
		this.stop();
		stage.afterDebiAnimation();
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(59).call(this.frame_118).wait(59).call(this.frame_177).wait(59).call(this.frame_236).wait(1));
	// Layer_6
	this.instance = new lib.debiFly();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.5,1,1,0,0,0,89.8,60.5);
	this.instance._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(178).to({_off:false},0).wait(1).to({regX:90,rotation:-0.8,x:-8.5,y:15.2},0).wait(1).to({rotation:-1.6,x:-21.6,y:27.7},0).wait(1).to({rotation:-2.4,x:-35.8,y:38.9},0).wait(1).to({rotation:-3.1,x:-50.6,y:49.3},0).wait(1).to({rotation:-3.9,x:-65.7,y:59.2},0).wait(1).to({rotation:-4.7,x:-81,y:68.8},0).wait(1).to({rotation:-5.5,x:-96.5,y:78.1},0).wait(1).to({rotation:-6.3,x:-112.2,y:87.2},0).wait(1).to({rotation:-7.1,x:-128,y:96.1},0).wait(1).to({rotation:-7.8,x:-143.8,y:104.9},0).wait(1).to({rotation:-8.6,x:-159.7,y:113.5},0).wait(1).to({rotation:-9.4,x:-175.6,y:122.1},0).wait(1).to({rotation:-10.2,x:-191.6,y:130.5},0).wait(1).to({rotation:-11,x:-207.7,y:138.8},0).wait(1).to({rotation:-11.8,x:-223.8,y:147.1},0).wait(1).to({rotation:-12.5,x:-239.9,y:155.3},0).wait(1).to({rotation:-13.3,x:-256.1,y:163.5},0).wait(1).to({rotation:-14.1,x:-272.3,y:171.6},0).wait(1).to({rotation:-14.9,x:-288.5,y:179.6},0).wait(1).to({rotation:-15.7,x:-304.7,y:187.7},0).wait(1).to({rotation:-16.5,x:-321,y:195.6},0).wait(1).to({rotation:-17.2,x:-337.2,y:203.6},0).wait(1).to({rotation:-18,x:-353.5,y:211.5},0).wait(1).to({rotation:-18.8,x:-369.8,y:219.3},0).wait(1).to({rotation:-19.6,x:-386.1,y:227.3},0).wait(1).to({rotation:-20.4,x:-402.4,y:235.2},0).wait(1).to({rotation:-21.2,x:-418.6,y:243.1},0).wait(1).to({rotation:-22,x:-434.9,y:251.1},0).wait(1).to({rotation:-22.7,x:-451,y:259.4},0).wait(1).to({rotation:-19.4,x:-459.3,y:245.5},0).wait(1).to({rotation:-16,x:-467.7,y:231.7},0).wait(1).to({rotation:-12.6,x:-476.1,y:217.9},0).wait(1).to({rotation:-9.2,x:-484.6,y:204.1},0).wait(1).to({rotation:-5.8,x:-493.2,y:190.4},0).wait(1).to({rotation:-3.7,x:-501.8,y:176.6},0).wait(1).to({rotation:-1.6,x:-510.5,y:163},0).wait(1).to({rotation:0.5,x:-519.2,y:149.3},0).wait(1).to({rotation:2.6,x:-528,y:135.7},0).wait(1).to({rotation:4.7,x:-536.8,y:122.1},0).wait(1).to({rotation:6.8,x:-545.7,y:108.6},0).wait(1).to({rotation:8.9,x:-554.7,y:95.1},0).wait(1).to({rotation:7,x:-563.7,y:81.6},0).wait(1).to({rotation:5,x:-572.8,y:68.2},0).wait(1).to({rotation:3,x:-582,y:54.9},0).wait(1).to({rotation:1.1,x:-591.3,y:41.7},0).wait(1).to({rotation:-0.9,x:-600.7,y:28.4},0).wait(1).to({rotation:-2.9,x:-610.2,y:15.2},0).wait(1).to({rotation:-4.9,x:-619.9,y:2.3},0).wait(1).to({rotation:-6.8,x:-629.6,y:-10.7},0).wait(1).to({rotation:-8.8,x:-639.6,y:-23.4},0).wait(1).to({rotation:-10.8,x:-649.8,y:-36.1},0).wait(1).to({rotation:-12.7,x:-660.1,y:-48.5},0).wait(1).to({rotation:-14.7,x:-670.9,y:-60.7},0).wait(1).to({rotation:-16.7,x:-682,y:-72.5},0).wait(1).to({rotation:-18.6,x:-693.7,y:-83.7},0).wait(1).to({rotation:-20.6,x:-706.2,y:-93.9},0).wait(1).to({rotation:-22.6,x:-720.2,y:-102.1},0).wait(1).to({rotation:-24.5,x:-736,y:-102.5},0).wait(1));
	// Layer_5
	this.instance_1 = new lib.debiFly();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,-0.5,1,1,0,0,0,89.8,60.5);
	this.instance_1._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).wait(1).to({regX:90,rotation:-1.1,x:-1.2,y:13.5},0).wait(1).to({rotation:-2.3,x:-2.8,y:27.4},0).wait(1).to({rotation:-3.4,x:-4.7,y:41.2},0).wait(1).to({rotation:-4.5,x:-6.9,y:55},0).wait(1).to({rotation:-5.7,x:-9.2,y:68.8},0).wait(1).to({rotation:-6.8,x:-11.7,y:82.5},0).wait(1).to({rotation:-8,x:-14.5,y:96.3},0).wait(1).to({rotation:-9.1,x:-17.4,y:110},0).wait(1).to({rotation:-10.2,x:-20.6,y:123.6},0).wait(1).to({rotation:-11.4,x:-24,y:137.1},0).wait(1).to({rotation:-12.5,x:-27.6,y:150.6},0).wait(1).to({rotation:-13.6,x:-31.6,y:164.1},0).wait(1).to({rotation:-14.8,x:-35.9,y:177.4},0).wait(1).to({rotation:-15.9,x:-40.6,y:190.5},0).wait(1).to({rotation:-17.1,x:-45.8,y:203.5},0).wait(1).to({rotation:-18.2,x:-51.6,y:216.3},0).wait(1).to({rotation:-19.3,x:-58.2,y:228.6},0).wait(1).to({rotation:-20.5,x:-65.8,y:240.3},0).wait(1).to({rotation:-21.6,x:-74.9,y:250.9},0).wait(1).to({rotation:-22.7,x:-86,y:259.4},0).wait(1).to({rotation:-19.4,x:-102.5,y:248.7},0).wait(1).to({rotation:-16,x:-119,y:238},0).wait(1).to({rotation:-12.6,x:-135.5,y:227.3},0).wait(1).to({rotation:-9.2,x:-152,y:216.6},0).wait(1).to({rotation:-5.8,x:-168.6,y:206},0).wait(1).to({rotation:-3.7,x:-185.2,y:195.4},0).wait(1).to({rotation:-1.6,x:-201.9,y:184.9},0).wait(1).to({rotation:0.5,x:-218.5,y:174.3},0).wait(1).to({rotation:2.6,x:-235.1,y:163.8},0).wait(1).to({rotation:4.7,x:-251.8,y:153.3},0).wait(1).to({rotation:6.8,x:-268.5,y:142.9},0).wait(1).to({rotation:8.9,x:-285.2,y:132.4},0).wait(1).to({rotation:7.6,x:-301.9,y:122},0).wait(1).to({rotation:6.3,x:-318.6,y:111.7},0).wait(1).to({rotation:5.1,x:-335.4,y:101.3},0).wait(1).to({rotation:3.8,x:-352.2,y:91},0).wait(1).to({rotation:2.5,x:-369,y:80.7},0).wait(1).to({rotation:1.2,x:-385.8,y:70.5},0).wait(1).to({rotation:-0.1,x:-402.7,y:60.4},0).wait(1).to({rotation:-1.4,x:-419.6,y:50.3},0).wait(1).to({rotation:-2.7,x:-436.5,y:40.2},0).wait(1).to({rotation:-3.9,x:-453.4,y:30.1},0).wait(1).to({rotation:-5.2,x:-470.5,y:20.1},0).wait(1).to({rotation:-6.5,x:-487.5,y:10.2},0).wait(1).to({rotation:-7.8,x:-504.5,y:0.4},0).wait(1).to({rotation:-9.1,x:-521.6,y:-9.3},0).wait(1).to({rotation:-10.4,x:-538.7,y:-19},0).wait(1).to({rotation:-11.7,x:-556,y:-28.6},0).wait(1).to({rotation:-13,x:-573.3,y:-38},0).wait(1).to({rotation:-14.2,x:-590.6,y:-47.3},0).wait(1).to({rotation:-15.5,x:-608.1,y:-56.5},0).wait(1).to({rotation:-16.8,x:-625.6,y:-65.4},0).wait(1).to({rotation:-18.1,x:-643.3,y:-74.1},0).wait(1).to({rotation:-19.4,x:-661.1,y:-82.4},0).wait(1).to({rotation:-20.7,x:-679.3,y:-90.2},0).wait(1).to({rotation:-22,x:-697.6,y:-97.2},0).wait(1).to({rotation:-23.2,x:-716.5,y:-102.7},0).wait(1).to({rotation:-24.5,x:-736,y:-102.5},0).to({_off:true},1).wait(59));
	// Layer_3
	this.instance_2 = new lib.debiFly();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.2,-0.5,1,1,0,0,0,89.8,60.5);
	this.instance_2._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).wait(1).to({regX:90,rotation:-0.8,x:-8.7,y:12.7},0).wait(1).to({rotation:-1.6,x:-22.7,y:21.3},0).wait(1).to({rotation:-2.4,x:-37.6,y:27.9},0).wait(1).to({rotation:-3.1,x:-53,y:33.5},0).wait(1).to({rotation:-3.9,x:-68.5,y:38.4},0).wait(1).to({rotation:-4.7,x:-84.3,y:42.9},0).wait(1).to({rotation:-5.5,x:-100,y:47.1},0).wait(1).to({rotation:-6.3,x:-115.9,y:51},0).wait(1).to({rotation:-7.1,x:-131.8,y:54.7},0).wait(1).to({rotation:-7.8,x:-147.8,y:58.2},0).wait(1).to({rotation:-8.6,x:-163.8,y:61.6},0).wait(1).to({rotation:-9.4,x:-179.7,y:65},0).wait(1).to({rotation:-10.2,x:-195.8,y:68.2},0).wait(1).to({rotation:-11,x:-211.8,y:71.3},0).wait(1).to({rotation:-11.8,x:-227.8,y:74.4},0).wait(1).to({rotation:-12.5,x:-243.9,y:77.5},0).wait(1).to({rotation:-13.3,x:-259.9,y:80.5},0).wait(1).to({rotation:-14.1,x:-276,y:83.5},0).wait(1).to({rotation:-14.9,x:-292.1,y:86.5},0).wait(1).to({rotation:-15.7,x:-308.2,y:89.5},0).wait(1).to({rotation:-16.5,x:-324.2,y:92.5},0).wait(1).to({rotation:-17.2,x:-340.3,y:95.6},0).wait(1).to({rotation:-18,x:-356.3,y:98.7},0).wait(1).to({rotation:-18.8,x:-372.3,y:101.9},0).wait(1).to({rotation:-19.6,x:-388.3,y:105.3},0).wait(1).to({rotation:-20.4,x:-404.3,y:108.9},0).wait(1).to({rotation:-21.2,x:-420.1,y:112.8},0).wait(1).to({rotation:-22,x:-435.8,y:117.3},0).wait(1).to({rotation:-22.7,x:-451,y:123.4},0).wait(1).to({rotation:-19.4,x:-459.7,y:114},0).wait(1).to({rotation:-16,x:-468.4,y:104.6},0).wait(1).to({rotation:-12.6,x:-477.2,y:95.3},0).wait(1).to({rotation:-9.2,x:-486,y:86},0).wait(1).to({rotation:-5.8,x:-494.9,y:76.8},0).wait(1).to({rotation:-3.7,x:-503.8,y:67.6},0).wait(1).to({rotation:-1.6,x:-512.9,y:58.5},0).wait(1).to({rotation:0.5,x:-521.8,y:49.4},0).wait(1).to({rotation:2.6,x:-531,y:40.4},0).wait(1).to({rotation:4.7,x:-540.1,y:31.4},0).wait(1).to({rotation:6.8,x:-549.3,y:22.4},0).wait(1).to({rotation:8.9,x:-558.5,y:13.5},0).wait(1).to({rotation:7,x:-567.8,y:4.7},0).wait(1).to({rotation:5,x:-577.2,y:-4.1},0).wait(1).to({rotation:3,x:-586.6,y:-12.7},0).wait(1).to({rotation:1.1,x:-596.1,y:-21.3},0).wait(1).to({rotation:-0.9,x:-605.8,y:-29.8},0).wait(1).to({rotation:-2.9,x:-615.5,y:-38.3},0).wait(1).to({rotation:-4.9,x:-625.3,y:-46.4},0).wait(1).to({rotation:-6.8,x:-635.2,y:-54.6},0).wait(1).to({rotation:-8.8,x:-645.3,y:-62.5},0).wait(1).to({rotation:-10.8,x:-655.6,y:-70.2},0).wait(1).to({rotation:-12.7,x:-666,y:-77.7},0).wait(1).to({rotation:-14.7,x:-676.7,y:-84.8},0).wait(1).to({rotation:-16.7,x:-687.7,y:-91.4},0).wait(1).to({rotation:-18.6,x:-699,y:-97.3},0).wait(1).to({rotation:-20.6,x:-710.9,y:-102.1},0).wait(1).to({rotation:-22.6,x:-723.5,y:-104.8},0).wait(1).to({rotation:-24.5,x:-736,y:-102.5},0).to({_off:true},1).wait(118));
	// Layer_1
	this.instance_3 = new lib.דביהדבורה();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-90,-61,0.196,0.198);
	this.instance_4 = new lib.debiFly();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.2,-0.5,1,1,0,0,0,89.8,60.5);
	this.instance_4._off = true;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(177));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).wait(1).to({regX:90,rotation:-2.5,x:-2.2,y:17},0).wait(1).to({rotation:-5.1,x:-6.3,y:33.9},0).wait(1).to({rotation:-7.6,x:-12.7,y:50.3},0).wait(1).to({rotation:-10.1,x:-21.2,y:65.6},0).wait(1).to({rotation:-12.6,x:-31.5,y:79.8},0).wait(1).to({rotation:-15.2,x:-43.4,y:92.7},0).wait(1).to({rotation:-17.7,x:-56.6,y:104.2},0).wait(1).to({rotation:-20.2,x:-70.9,y:114.4},0).wait(1).to({rotation:-22.7,x:-86,y:123.4},0).wait(1).to({rotation:-19.4,x:-99,y:117.9},0).wait(1).to({rotation:-16,x:-112,y:112.4},0).wait(1).to({rotation:-12.6,x:-124.9,y:106.9},0).wait(1).to({rotation:-9.2,x:-137.9,y:101.5},0).wait(1).to({rotation:-5.8,x:-151,y:96.1},0).wait(1).to({rotation:-3.7,x:-164,y:90.6},0).wait(1).to({rotation:-1.6,x:-177,y:85.3},0).wait(1).to({rotation:0.5,x:-190,y:79.9},0).wait(1).to({rotation:2.6,x:-203.1,y:74.5},0).wait(1).to({rotation:4.7,x:-216.2,y:69.2},0).wait(1).to({rotation:6.8,x:-229.3,y:63.9},0).wait(1).to({rotation:8.9,x:-242.3,y:58.5},0).wait(1).to({rotation:8,x:-255.4,y:53.2},0).wait(1).to({rotation:7.1,x:-268.5,y:48},0).wait(1).to({rotation:6.2,x:-281.6,y:42.7},0).wait(1).to({rotation:5.3,x:-294.7,y:37.4},0).wait(1).to({rotation:4.4,x:-307.7,y:32.1},0).wait(1).to({rotation:3.5,x:-320.8,y:27},0).wait(1).to({rotation:2.6,x:-334,y:21.7},0).wait(1).to({rotation:1.7,x:-347.1,y:16.5},0).wait(1).to({rotation:0.8,x:-360.3,y:11.4},0).wait(1).to({rotation:-0.1,x:-373.4,y:6.3},0).wait(1).to({rotation:-1,x:-386.5,y:1.2},0).wait(1).to({rotation:-1.9,x:-399.7,y:-4},0).wait(1).to({rotation:-2.8,x:-412.9,y:-9},0).wait(1).to({rotation:-3.7,x:-426.1,y:-14},0).wait(1).to({rotation:-4.6,x:-439.3,y:-19},0).wait(1).to({rotation:-5.5,x:-452.4,y:-24},0).wait(1).to({rotation:-6.4,x:-465.7,y:-28.9},0).wait(1).to({rotation:-7.4,x:-478.9,y:-33.8},0).wait(1).to({rotation:-8.3,x:-492.2,y:-38.7},0).wait(1).to({rotation:-9.2,x:-505.4,y:-43.5},0).wait(1).to({rotation:-10.1,x:-518.8,y:-48.3},0).wait(1).to({rotation:-11,x:-532,y:-53},0).wait(1).to({rotation:-11.9,x:-545.4,y:-57.6},0).wait(1).to({rotation:-12.8,x:-558.7,y:-62.2},0).wait(1).to({rotation:-13.7,x:-572.1,y:-66.7},0).wait(1).to({rotation:-14.6,x:-585.4,y:-71.2},0).wait(1).to({rotation:-15.5,x:-598.9,y:-75.5},0).wait(1).to({rotation:-16.4,x:-612.3,y:-79.8},0).wait(1).to({rotation:-17.3,x:-625.8,y:-83.9},0).wait(1).to({rotation:-18.2,x:-639.4,y:-87.9},0).wait(1).to({rotation:-19.1,x:-653,y:-91.8},0).wait(1).to({rotation:-20,x:-666.6,y:-95.4},0).wait(1).to({rotation:-20.9,x:-680.3,y:-98.7},0).wait(1).to({rotation:-21.8,x:-694.1,y:-101.6},0).wait(1).to({rotation:-22.7,x:-708.1,y:-103.8},0).wait(1).to({rotation:-23.6,x:-722.1,y:-104.8},0).wait(1).to({rotation:-24.5,x:-736,y:-102.5},0).to({_off:true},1).wait(177));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-61,179.6,121);
(lib.but = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.but11();
	this.instance.parent = this;
	this.instance.setTransform(11.1,7.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.but11(), 3);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.but, new cjs.Rectangle(-109.9,-88.4,238,147), null);
(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.כפתורהתחלמשחק();
	this.instance.parent = this;
	this.instance.setTransform(-1,1.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.start, new cjs.Rectangle(-126,-75.4,250,155), null);
(lib.playAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.שחקשוב();
	this.instance.parent = this;
	this.instance.setTransform(-0.9,-2.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.playAgain, new cjs.Rectangle(47.1,18.1,152,91), null);
(lib.finishGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// Layer_1
	this.instance = new lib.כפתורסיוםמשחק();
	this.instance.parent = this;
	this.instance.setTransform(-1.7,-0.4);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = getMCSymbolPrototype(lib.finishGame, new cjs.Rectangle(-204.2,19.6,162.5,91), null);
(lib.answer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop();
	}
	this.frame_1 = function() {
		this.gotoAndStop();
	}
	this.frame_2 = function() {
		this.gotoAndStop();
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));
	// Layer_1
	this.instance = new lib.מצבלחיצהעלמסיח();
	this.instance.parent = this;
	this.instance.setTransform(6.8,-7.9,1,1.217);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);
	this.Tanswer1 = new cjs.Text("", "bold 24px 'Tahoma'");
	this.Tanswer1.name = "Tanswer1";
	this.Tanswer1.textAlign = "right";
	this.Tanswer1.lineHeight = 29;
	this.Tanswer1.lineWidth = 265;
	this.Tanswer1.parent = this;
	this.Tanswer1.setTransform(40.4,-40.6,0.712,0.627);
	this.instance_1 = new lib.flowerBTN();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-185,-112,0.77,0.792);
	this.instance_2 = new lib.V_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(163.2,-5.9,3.933,3.933,0,0,0,1.3,3.4);
	this.instance_3 = new lib.X_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.5,-21.5,3.848,3.848,0,0,0,-0.8,-1.9);
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.Tanswer1,p:{x:40.4,y:-40.6}},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance_2},{t:this.Tanswer1,p:{x:40,y:-41.2}}]},1).to({state:[{t:this.instance_1},{t:this.instance_3},{t:this.Tanswer1,p:{x:39,y:-40.2}}]},1).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185,-112,382,221);
// stage content:
(lib.debiTHEbee222 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	// timeline functions:
	this.frame_0 = function() {
		var Questions = new Array();
		var myQetion = 0;
		var sivuvOne = true;
		//---------------- הכנסת השאלות למערך -------------------------------------
		function sabject(choice) {
			if (choice == 1) {
				Questions[0] = ["מהן האותיות המופיעות על הסביבון בחג החנוכה?", "t", "א, ב, ג, ד", "נ, ג, ה, פ", "ג, ק, מ, ל", "ק, ר, ש, ת", 1, true, 1];
				Questions[1] = ["באיזה חג תוקעים בשופר?", "p", "שבועות", "טו בשבט", "יום הכיפורים", "יום העצמאות", 2, true, 1,lib.pic1];
				Questions[2] = ["באיזה חג נהוג לאכול פירות יבשים?", "t", "ראש השנה", "סוכות", "טו בשבט", "יום העצמאות", 2, true, 1];
				Questions[3] = ["בחג הפסח, מהם שמות ארבעת הבנים?", "t", "חכם, רשע, תם ושאינו יודע לשאול", "רשע, מצחיק, רע ושאינו יודע לדבר", "חכם, טיפש, עצוב ושאינו יודע לכתוב", "תם, רשע, מצחיק ושאינו יודע לאכול", 0, true, 1];
				Questions[4] = ["מהי הסיבה העיקרית להדלקת הנרות בחג החנוכה, וחגיגתו למשך שמונה ימים?", "t", "השמן הספיק לשמונה ימים", "מרד החשמונאים התרחש שמונה ימים", "הנרות הספיקו לשמונה ימים", "המכבים ניצחו לאחר שמונה ימים ", 0, true, 1];
				Questions[5] = ["בפורים נהוג בעיקר:", "t", "לאכול אוזני אמן", "לאכול מצות ", "להדליק נרות", "להתחפש", 3, true, 1];
				Questions[6] = ["באיזה חג נהוג לאכול מאכלים מלאים בשמן?", "t", "סוכות", "חנוכה", "פורים", "שבועות", 1, true, 1];
				Questions[7] = ["בחג הפסח, המצות מסמלות את?", "p", "נס פח השמן", "נס היהודים", "נס ארבעת האחים", "נס יציאת מצרים", 3, true, 1,lib.pic2];
				Questions[8] = ["באיזה חג נהוג לאכול מוצרי חלב וגבינה?", "t", "יום העצמאות", "חנוכה", "שבועות", "סוכות", 2, true, 1];
				Questions[9] = ["מהו היום בו נהוג להבעיר מדורות?", "p", "לג בעומר", "יום העצמאות", "טו באב", "טו בשבט", 0, true, 1,lib.pic3];
			} else if (choice == 2) {
				Questions[0] = ["כשהולכים לים, הכי כדאי לקחת את הציוד ב", "t", "שקית ניילון", "תיק או שקית מבד", "שקית פלסטיק", "חומר השקית אינו פוגע בסביבה", 1, true, 1];
				Questions[1] = ["אין כמו לנשנש בטיול בפארק, והכי כדאי לקחת את האוכל ב", "t", "שקיות כאלו שמשמיעות רעש", "שקיות שלא משמיעות רעש", "כלים חד פעמיים", "כלים רב פעמיים", 3, true, 1];
				Questions[2] = ["סיימתם לקרוא עיתון בים, מה הכי כדאי לעשות איתו", "t", "להשאיר בחוף", "לזרוק לפח", "לזרוק בפח המיחזור המיוחד לעיתונים", "להשליך אותו לים", 2, true, 1];
				Questions[3] = ["מי מבין אמצעי התחבורה הבאים הוא הידידותי ביותר לסביבה", "t", "אופנוע", "אופניים", "רכבת", "אוטובוס", 1, true, 1];
				Questions[4] = ["כיצד קוראים לגשם המכיל כימיקלים שפוגעים בסביבה", "t", "גשם חומצי", "משקעים", "גשם מזוהם", "גשם כימי", 0, true, 1];
				Questions[5] = ["מה המשמעות של ציון יום כדור הארץ", "t", "יום המציין אחדות ושיתוף פעולה בין כל הארצות", "יום המציין איחוד לבבות בין אנשים ברחבי העולם", " יום המציין את הקיום על כדור הארץ", " יום המציין מודעות להגנת הסביבה של כדור הארץ", 3, true, 1];
				Questions[6] = ["?מהו קומפוסט", "t", "אשפה שמעבירים להטמנה", "מאכל הולנדי", "דשן המופק מפסולת אורגנית", "יצירה מוזיקלית", 2, true, 1];
				Questions[7] = ["?כיצד נפחית את זיהום האויר", "t", "נטוס המטוס", "נלך ברגל", "נסע ברכב", "נזמין מונית", 1, true, 1];
				Questions[8] = ["?איזה חומר אינו מתכלה לעולם", "t", "נייר", "קרטון", "אוכל", "קלקר", 3, true, 1];
				Questions[9] = ["זהו חומר המזהם את הסביבה", "t", "מים", "חול", "נפט", "שוקולד", 2, true, 1];
			}
		}
		$("#canvas").css("direction", "rtl");
		var stageWidth = parseInt(canvas.style.width); //רוחב הבמה
		var stageHeight = parseInt(canvas.style.height); //אורך הבמה
		var selfHome = this;
		//עצירת זמן
		var mytimer = true;
		//מסך פתיחה של בחירת משחק
		var subjects = ["בחר משחק", "דבי לומדת על חגי ישראל", "דבי שומרת על הסביבה"];
		//משתנה שיעזור לברר איזה ערך מסומן בכל פעם בקומבו בוקס. עם הפתיחה מופיע הערך הראשון ולכן הערך ההתחלתי הוא 0
		var mychoice = 0;
		//הערך
		var myValue = 0;
		var counter = 0;
		var totalTime = 0;
		var myPic; //משתנה להופעת תמונה בשאלה
		var myCircle;
		//סאונד
		init();
		function init() {
			//	//לטעון את הסאונד - נתיב + שם
			createjs.Sound.registerSound("https://shellysha.github.io/DEBBI/sounds/CorrectAnswer.mp3", "Correct");
			createjs.Sound.registerSound("https://shellysha.github.io/DEBBI/sounds/WrongAnswer.mp3", "Wrong");
			createjs.Sound.registerSound("https://shellysha.github.io/DEBBI/sounds/TimesUp.mp3", "Timesup");
		}
		//--------------------------------------------------------------------
		START();
		function START() {
			//הוספה עננים זזים
			var ananim = new lib.ananim();
			ananim.x = 400;
			ananim.y = 20;
			ananim.name = "ananim";
			stage.addChild(ananim);
			//הוספת כותרת דבי הדבורה
			var debiTheBee = new lib.debiTheBee();
			debiTheBee.x = 960 / 2;
			debiTheBee.y = 180;
			debiTheBee.name = "debiTheBee";
			stage.addChild(debiTheBee);
			//הוספת דבי הדבורה בגדול
			var bigDEBI = new lib.bigDEBI();
			bigDEBI.x = 750;
			bigDEBI.y = 370;
			bigDEBI.name = "bigDEBI";
			stage.addChild(bigDEBI);
			//הוספת פרחים
			var StartFlowers = new lib.StartFlowers();
			StartFlowers.x = 170;
			StartFlowers.y = 500;
			StartFlowers.name = "StartFlowers";
			stage.addChild(StartFlowers);
			//מיקום תיבת בחירת המשחק
			var Teiva = new createjs.Text();
			Teiva.x = 400;
			Teiva.y = 10;
			Teiva.name = "Teiva";
			//עיצוב התיבה
			Teiva.color = "000000";
			Teiva.font = "13px Tahoma";
			stage.addChild(Teiva);
			//הוספת הקומבו לבמה
			var forcombo = new lib.forcomb();
			forcombo.x = 450;
			forcombo.y = 350;
			forcombo.name = "forcombo";
			stage.addChild(forcombo);
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.alpha = 0.6;
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		}
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			var Teiva = stage.getChildByName("Teiva");
			var forcombo = stage.getChildByName("forcombo");
			Teiva.text = ""; //ניקוי הבחירה הקודמת
			//שימרת הערך שנבחר בקומבו
			console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
			}
			myValue = evt.currentTarget.value;
			sabject(myValue);
		}
		//לחיצה על בחר-----------------------------------------------------------------------
		function fl_ClickToPosition() {
			var Teiva = stage.getChildByName("Teiva");
			var forcombo = stage.getChildByName("forcombo");
			Teiva.text = subjects[mychoice];
			//מחיקת אובייקטים
			stage.removeChild(forcombo);
			//מחיקת כותרת דבי הדבורה
			var debiTheBee = stage.getChildByName("debiTheBee");
			stage.removeChild(debiTheBee);
			//מחיקת דבי מסך פתיחה
			var bigDEBI = stage.getChildByName("bigDEBI");
			stage.removeChild(bigDEBI);
			//מחיקת פרחים מסך פתיחה
			var StartFlowers = stage.getChildByName("StartFlowers");
			stage.removeChild(StartFlowers);
			//מחיקת עננים
			var ananim = stage.getChildByName("ananim");
			stage.removeChild(ananim);
			//הוספה של הענן ומיקום שלו
			var anan = new lib.anan();
			anan.x = 480;
			anan.y = 170;
			anan.name = "anan";
			stage.addChild(anan);
			anan.Tanan.text = "עזרו לדבי הדבורה למלא את הכוורת בדבש";
			//הוספה של כפתור - התחל משחק
			var start = new lib.start();
			start.x = 480;
			start.y = 360;
			start.name = "start";
			start.alpha = 1;
			stage.addChild(start);
			start.addEventListener("click", startgame);
			// הוספת שקיפות למעבר עכבר
			var frequency = 3;
			stage.enableMouseOver(frequency);
			start.addEventListener("mouseover", MouseOver.bind(this));
			function MouseOver() {
				start.alpha = 0.6
			}
			//יציאה ממעבר עכבר
			start.addEventListener("mouseout", MouseOut.bind(this));
			function MouseOut() {
				start.alpha = 1
			}
			//הוספה של דבי הדבורה
			var debi = new lib.debi();
			debi.x = 480;
			debi.y = 205;
			debi.name = "debi";
			stage.addChild(debi);
			//הוספת הכוורת
			var honey = new lib.honey();
			honey.x = 80;
			honey.y = 60;
			honey.name = "honey";
			stage.addChild(honey);
		}
		//לחיצה על התחל משחק-----------------------------------------------------------
		function startgame() {
			//העלמת הכפתור
			var start = stage.getChildByName("start");
			stage.removeChild(start);
			//שינוי מיקום הדבורה
			var debi = stage.getChildByName("debi");
			debi.x = 880;
			debi.y = 205;
			debi.gotoAndStop(0);
			//הוספת רקע לבן
			var white = new lib.white();
			white.x = 490;
			white.y = 480;
			white.name = "white";
			stage.addChild(white);
			stage.getChildByName("white").alpha = 0.7;
			//הוספת הוראה
			var teaching = new lib.teaching();
			teaching.x = 480;
			teaching.y = 220;
			teaching.name = "teaching";
			stage.addChild(teaching);
			//החדרת השאלה
			var anan = stage.getChildByName("anan");
			anan.Tanan.text = Questions[myQetion][0];
			//תנאי שיצור תמונה לשאלה עם תמונה מהמערך
			stage.removeChild(stage.getChildByName("mybox"));
			stage.removeChild(stage.getChildByName("myPic"));
			if (Questions[myQetion][1] == "p") {
				myPic = new Questions[myQetion][9]();
				myPic.x = 480;
				myPic.y = 70;
				myPic.name = "myPic";
				stage.addChild(myCircle);
				stage.addChild(myPic);
			}
			// הוספת מלבני המסיחים
			var answers = [
				[lib.answer1, 658, 397],
				[lib.answer1, 278, 397],
				[lib.answer1, 658, 520],
				[lib.answer1, 278, 520]
			];
			for (i = 0; i < answers.length; i++) {
				var answer = new(answers[i][0]);
				answer.x = answers[i][1];
				answer.y = answers[i][2];
				answer.name = "answer" + i;
				answer.addEventListener("click", clickAnswer);
				stage.addChild(answer);
				//החדרת הטקסט למסיחים
				answer.Tanswer1.text = Questions[myQetion][i + 2];
			}
			//שעון טיימר
			var time = new lib.time();
			time.x = 890;
			time.y = 45;
			time.name = "time";
			stage.addChild(time);
			//החדרת השניות לתוך בשעון
			var Ttime = 30;
			time.Ttime.text = Ttime;
			var stoper = setInterval(function () {
				if (mytimer == true) {
					Ttime--;
					totalTime++;
					time.Ttime.text = Ttime;
					if (Ttime == 0) {
						//var timesup = createjs.Sound.play("Timesup");
						//מה קורה שנגמר הזמן
						clearInterval(stoper);
						//העלמת האובקייטים מהמסך
						white.visible = false;
						var anan = stage.getChildByName("anan");
						anan.visible = false;
						for (i = 0; i < 4; i++) {
							var answer = stage.getChildByName("answer" + i);
							answer.visible = false;
						}
						teaching.visible = false;
						var honey = stage.getChildByName("honey");
						honey.visible = false;
						//הודעה הזמן אזל
						var NoTime = new lib.NoTime();
						NoTime.x = 450;
						NoTime.y = 305;
						NoTime.name = "NoTime";
						stage.addChild(NoTime);
						NoTime.addEventListener("click", nextQ);
					}
				} else {
					clearInterval(stoper);
				}
			}, 1000);
		}
		//---------------------------------------------------------
		function Scale(circle, content) // פונקציה למציאת היחס אליו נרצה לשנות את התמונה
		{
			var circleBounds = circle.nominalBounds; // גודל המעגל
			var contentBounds = content.nominalBounds; // גודל התמונה
			var z; // משתנה אליו נכניס את יחס אורך התמונה ורוחב התמונה
			var shorter; // משתנה שהערך שלו יהיה מה יותר קצר - רוחב התמונה או אורך התמונה - הסיבה זה לחישוב היחס אליו נרצה לשנות את התמונה
			var r = circleBounds.width / 2; // משתנה שמחזיק את יחס המעגל
			if (contentBounds.height > contentBounds.width) // בודק האם אורך התמונה גדול יותר מרוחב התמונה
			{
				z = contentBounds.height / contentBounds.width; // משתנה ששומר את יחס אורך התמונה ורוחב התמונה
				shorter = contentBounds.width; // משתנה שמכיל את הצלע הקטנה בתמונה
			} else {
				z = contentBounds.width / contentBounds.height;
				shorter = contentBounds.height;
			}
			var newSize = 2 * (Math.sqrt((r * r) / ((z * z) + 1))); // משפט פיתגורס * 2 = אורך הצלע הקטנה שצריך בכדי להכניס את התמונה לעיגול
			return ((newSize / shorter) * 0.97); // היחס שצריך להקטין את התמונה המקורית כדי שתכנס בעיגול פחות 3%
			// אפשר לשנות את האחוזים בכדי להתאים יותר טוב את התמונה לעיגול שלך - פשוט לשנות את 0.97
		}
		//תשובה נכונה ------------------------------------------------------------------
		function clickAnswer(evt) {
			mytimer = false;
			for (i = 0; i < 4; i++) {
				(stage.getChildByName("answer" + i)).removeEventListener("click", clickAnswer);
			}
			var num = parseInt(evt.currentTarget.name.charAt(6)); //משתנה שלוקח את השם של האובייקט שעליו לחצו	
			var correct = Questions[myQetion][6]; //משתנה שלוקח את התשובה הנכונה מהמערך
			if (num == correct) { //השוואה בין שני המשתנים
				Questions[myQetion][7] = false;
				for (i = 0; i < 4; i++) {
					if (num == i) {
						var YES = createjs.Sound.play("Correct");
						stage.getChildByName("answer" + i).alpha = 1;
						// הוספת אובייקטים במתן תשובה נכונה
						stage.getChildByName("answer" + i).gotoAndPlay(1);
						var debi = stage.getChildByName("debi");
						stage.setChildIndex(debi, stage.getNumChildren() - 1);
						debi.gotoAndPlay("animation" + num);
						counter++;
					} else {
						stage.getChildByName("answer" + i).alpha = 0.5;
					}
				}
				//בחירת תשובה לא נכונה
			} else {
				Questions[myQetion][8] += 1;
				for (i = 0; i < 4; i++) {
					if (num == i) {
						var No = createjs.Sound.play("Wrong");
						stage.getChildByName("answer" + i).alpha = 1;
						stage.getChildByName("answer" + i).gotoAndPlay(2);
					} else {
						stage.getChildByName("answer" + i).alpha = 0.5;
					}
				}
				//הוספת כפתור המשך ----------------------------------------------------
				var but = new lib.but();
				but.x = 960 / 2;
				but.y = 590 / 2;
				but.name = "but";
				stage.addChild(but);
				but.addEventListener("click", nextQ);
			}
		}
		//הוספת דבש
		stage.afterDebiAnimation = function () {
			var honey = stage.getChildByName("honey");
			honey.gotoAndStop(counter * 2);
			//הוספת כפתור המשך ----------------------------------------------------
			var but = new lib.but();
			but.x = 960 / 2;
			but.y = 590 / 2;
			but.name = "but";
			stage.addChild(but);
			but.addEventListener("click", nextQ);
		}
		function nextQ() {
			//יצירת עיגול שבתוכו נכניס את התמונות
			myCircle = new lib.circle;
			myCircle.x = 480;
			myCircle.y = 70;
			myCircle.name = "mybox";
			// יצירת התמונות בקוד
			var myPicture = new lib.pic1;
			var myPicture2 = new lib.pic2;
			var myPicture3 = new lib.pic3;
			var scale1 = Scale(myCircle, myPicture); // שימוש בפונקציה בכדי לקבוע מה היחס אותו אנחנו צריכים בכדי לכניס את התמונה בצורה מקסימלית לתוך העיגול
			myPicture.scaleX = scale1; // שינוי גודל התמונה
			myPicture.scaleY = scale1; // שינוי גודל התמונה
			var scale2 = Scale(myCircle, myPicture2); // שימוש בפונקציה בכדי לקבוע מה היחס אותו אנחנו צריכים בכדי לכניס את התמונה בצורה מקסימלית לתוך העיגול
			myPicture2.scaleX = scale2; // שינוי גודל התמונה
			myPicture2.scaleY = scale2; // שינוי גודל התמונה
			var scale3 = Scale(myCircle, myPicture3); // שימוש בפונקציה בכדי לקבוע מה היחס אותו אנחנו צריכים בכדי לכניס את התמונה בצורה מקסימלית לתוך העיגול
			myPicture3.scaleX = scale3; // שינוי גודל התמונה
			myPicture3.scaleY = scale3; // שינוי גודל התמונה
			//------------------------------------------------------
			mytimer = true;
			//חזרה על השאלות במידה ולא נענו נכון
			if (trueQ() == true) {
				if (myQetion >= (Questions.length)) {
					myQetion = -1;
				}
				do {
					myQetion++;
				} while ((Questions[myQetion][7] == false));
				stage.removeChild(stage.getChildByName("NoTime"));
				//העלמת כפתור המשך
				var but = stage.getChildByName("but");
				stage.removeChild(but);
				// החדרת השאלה החדשה
				var white = stage.getChildByName("white");
				white.visible = true;
				var teaching = stage.getChildByName("teaching");
				teaching.visible = true;
				var honey = stage.getChildByName("honey");
				honey.visible = true;
				//תנאי שיתקיים במידה ויש לשאלה תמונה במערך
				stage.removeChild(stage.getChildByName("mybox"));
				stage.removeChild(stage.getChildByName("myPic"));
				if (Questions[myQetion][1] == "p") {
					myPic = new Questions[myQetion][9]();
					myPic.x = 480;
					myPic.y = 70;
					myPic.name = "myPic";
					stage.addChild(myCircle);
					stage.addChild(myPic);
					myPic.addEventListener("mouseover", BiggerPic);
				}
				//יצירת מעבר עכבר להגדלת התמונות בשאלה
				function BiggerPic(e) {
					var bigger = e.currentTarget.clone(); //יצירת אינסטנס חדש של התמונה
					bigger.scaleX = 4; //פי כמה להגדיל
					bigger.scaleY = 4;
					bigger.x = 960 / 2; //מיקום באמצע הבמה
					bigger.y = 300;
					stage.addChild(bigger);
					bigger.visible = true;
					bigger.addEventListener("mouseout", Normal);
				}
				function Normal(e) {
					stage.removeChild(e.currentTarget);
				}
				var anan = stage.getChildByName("anan");
				anan.visible = true;
				anan.Tanan.text = Questions[myQetion][0];
				//החדרת הטקסט למסיחים
				for (i = 0; i < 4; i++) {
					var answer = stage.getChildByName("answer" + i);
					answer.visible = true;
					answer.gotoAndStop(0);
					answer.alpha = 1;
					answer.Tanswer1.text = Questions[myQetion][i + 2];
					(stage.getChildByName("answer" + i)).addEventListener("click", clickAnswer);
				}
				//החדרת השעון
				var time = stage.getChildByName("time");
				//החדרת השניות לתוך בשעון
				var Ttime = 30;
				time.Ttime.text = Ttime;
				var stoper = setInterval(function () {
					if (mytimer == true) {
						Ttime--;
						totalTime++;
						time.Ttime.text = Ttime;
						if (Ttime == 0) {
							var timesup = createjs.Sound.play("Timesup");
							//מה קורה שנגמר הזמן
							clearInterval(stoper);
							//העלמת האובקייטים מהמסך
							white.visible = false;
							var anan = stage.getChildByName("anan");
							anan.visible = false;
							for (i = 0; i < 4; i++) {
								var answer = stage.getChildByName("answer" + i);
								answer.visible = false;
							}
							teaching.visible = false;
							var honey = stage.getChildByName("honey");
							honey.visible = false;
							//הודעה הזמן אזל
							var NoTime = new lib.NoTime();
							NoTime.x = 450;
							NoTime.y = 305;
							NoTime.name = "NoTime";
							stage.addChild(NoTime);
							NoTime.addEventListener("click", nextQ);
						}
					} else {
						clearInterval(stoper);
					}
				}, 1000);
				var debi = stage.getChildByName("debi");
				debi.gotoAndStop(0);
			} else {
				//סיום משחק_____________________________________________________________
				end();
			}
		}
		//מסך אנימציה וסיום משחק__________________________________________
		function end() {
			stage.removeChild(stage.getChildByName("mybox"));
			stage.removeChild(stage.getChildByName("myPic"));
			//העלמת האובייקטים מהמסך
			//העלמת הענן
			var anan = stage.getChildByName("anan");
			stage.removeChild(anan);
			//העלמת המסיחים
			for (i = 0; i < 4; i++) {
				var answer = stage.getChildByName("answer" + i);
				stage.removeChild(answer);
			}
			//העלמת הסטופר
			var time = stage.getChildByName("time");
			stage.removeChild(time);
			//העלמת צנצת דבש
			var honey = stage.getChildByName("honey");
			stage.removeChild(honey);
			//העלמת ההוראה
			var teaching = stage.getChildByName("teaching");
			stage.removeChild(teaching);
			//העלמת כפתור המשך
			var but = stage.getChildByName("but");
			stage.removeChild(but);
			//העלמת רקע לבן
			var white = stage.getChildByName("white");
			stage.removeChild(white);
			//העלמת הדבורה
			var debi = stage.getChildByName("debi");
			stage.removeChild(debi);
			var Cheer = createjs.Sound.play("Cheer");
			//הוספת האנימציה
			var anima = new lib.anima();
			anima.x = 490;
			anima.y = 305;
			anima.name = "anima";
			stage.addChild(anima);
			//הוספת כל הכבוד
			var great = new lib.great();
			great.x = 480;
			great.y = 290;
			great.name = "great";
			stage.addChild(great);
			//הקצבת זמן לאנימציה
			var animatime = 7;
			anima.animatime.text = animatime;
			var cheer = createjs.Sound.play("Cheer");
			var stoper2 = setInterval(function () {
				animatime--;
				if (animatime == 0) {
					//מה קורה שנגמר הזמן
					clearInterval(stoper2);
					//העלמת האנימציה				
					clearInterval(stoper2);
					stage.removeChild(anima);
					//העלמת כל הכבוד
					stage.removeChild(great);
					//הוספת מסך סיום משחק ציון וזמן כולל
					var endGame = new lib.endGame();
					endGame.x = 450;
					endGame.y = 305;
					endGame.name = "endGame";
					stage.addChild(endGame);
					//החדרת הציון אל תוך הטקסט
					endGame.textPoints.text = points();
					//החזרת הזמן הכולל
					var minutes = parseInt(totalTime / 60);
					var secondes = totalTime % 60;
					if (minutes < 10) {
						minutes = "0" + minutes.toString();
					}
					if (secondes < 10) {
						secondes = "0" + secondes.toString();
					}
					endGame.textAlltime.text = 0;
					endGame.textAlltime.text = minutes + ":" + secondes;
					//הוספת כפתור שחק שוב
					var playAgain = new lib.playAgain();
					playAgain.x = 450;
					playAgain.y = 305;
					playAgain.name = "playAgain";
					stage.addChild(playAgain);
					playAgain.addEventListener("click", clickPLAYagain);
					//הוספת כפתור סיום משחק
					var finishGame = new lib.finishGame();
					finishGame.x = 450;
					finishGame.y = 305;
					finishGame.name = "finishGame";
					stage.addChild(finishGame);
					finishGame.addEventListener("click", finishTHEgame);
				}
			}, 1000);
		}
		//פונקציה בעת לחיצה על שחק שוב 
		function clickPLAYagain() {
			//העלמת האובייקטים 
			var endGame = stage.getChildByName("endGame");
			stage.removeChild(endGame);
			var playAgain = stage.getChildByName("playAgain");
			stage.removeChild(playAgain);
			var finishGame = stage.getChildByName("finishGame");
			stage.removeChild(finishGame);
			//חזרה למסך התחלה
			sabject(myValue);
			fl_ClickToPosition();
		}
		//פונקציה בעת לחיצה על סיום
		function finishTHEgame() {
			//העלמת האובייקטים 
			var endGame = stage.getChildByName("endGame");
			stage.removeChild(endGame);
			var playAgain = stage.getChildByName("playAgain");
			stage.removeChild(playAgain);
			var finishGame = stage.getChildByName("finishGame");
			stage.removeChild(finishGame);
			//העלמת הנושא
			var Teiva = stage.getChildByName("Teiva");
			stage.removeChild(Teiva);
			//חזרה למסך פתיחת משחק
			START();
		}
		function trueQ(){
			var q=0;
			for(i=0;i<Questions.length;i++){
				if(Questions[i][7] == true){
					q++;
				}
			}
			if(q==0){
				return false;
			}else{
				return true;
			}
		}
		//ציון
		function points(){
			var mypoint=0;
			for(i=0;i<Questions.length;i++){
				mypoint+= Math.floor(100/(Questions.length*Questions[i][8]));
			}
			return mypoint;
		}
		playSound("GameSound",-1);
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	// Layer 1
	this.instance = new lib.רקע();
	this.instance.parent = this;
	this.instance.setTransform(0,-7,0.938,0.793,0,0,0.2);
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,288,960.1,610.6);
// library properties:
lib.properties = {
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Debbi_atlas_P_.png", id:"Debbi_atlas_P_"},
		{src:"sounds/GameSound.mp3", id:"GameSound"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js", id:"an.ComboBox"}
	],
	preloads: []
};
function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}
function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
</script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	images = images||{};
	ss = ss||{};
	var loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt) {	
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRoot = new lib.debiTHEbee222();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.enableMouseOver();	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(false,'both',false,1);	
	fnStartAnimation();
}
function playSound(id, loop) {
	return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}
</script>
<!-- write your code here -->
</head>
<body onload="init();" style="margin:0px;">
	<div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:960px; height:590px">
		<canvas id="canvas" width="960" height="590" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:960px; height:590px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>
</body>
</html>