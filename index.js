(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:
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


(lib.timmyai = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Hamburger
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3B054").s().p("A1tKKQgvgHgmgnQhOhOAniaQAchyBbiSQByi2CliVQHFmaKYgUIA1AAQBDABBKAGQDsAXDUBLQKpDwDCKkIAGArQAFA1gIArQgXCLiHAAg");
	this.shape.setTransform(152.7,65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ECD77D").s().p("AveipIk1AAQhUAAgYgXQgQgQAAg2QABgmA9gQQAfgIAfAAMApFAAAQBAAAASAYQAMAPAAA2QgBAnguAPIgvAII6lAAImSHug");
	this.shape_1.setTransform(152.9,233.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5B55A").s().p("A2OB5QgThUAAh4QAEh7AAgnQAAhhB8gXQA9gLA+AHMAmMAAAQCHAAAnBOQAUAmgIAnQAAFuh8CEQg+BCg+gIQ+cAfl0AAQjsAAg6j8g");
	this.shape_2.setTransform(154.4,276.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#773F20").s().p("AzlCbQgmAAgmgUQhOgmAAhhQAAhgBOgmQAYgNAdgEQAOgDAJAAUAluAAfAB7AAAQBYAAAUAfQAQAXAABkQAABNguAfQgPAKgSAEIgOACg");
	this.shape_3.setTransform(154.5,226);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#88D774").s().p("AmkCOQgbgMgsgnQgtgqgfgPQhNgmhNAPQgZAEgVAKIgQAJQjCCaiLhNQgsgYghgtIgYgnQiHAAg2hMQgRgZgHgdIgDgYMAnJAAAQDCAABdAQQAuAIAIAHQA6CahlAPQgfAFgsgKIglgKQh0hNhOAfQgYAKgRASIgNASQhNBhg+gYQgTgHgQgSIgLgRQgfg2g2geQhtg+h0BzQh5B5hYgNQgggFgugZQg1gggfgPQhNgnhsAQQgiAEghAKIgaAJQiRBXhYAAQgeAAgXgKg");
	this.shape_4.setTransform(154,142.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#976F40").s().p("AzkDXQibguAAibQAAiZCbg+QBNgfBOAAMAiyAAAQEXAAAAEVQAAB0iLAvQgsAOg0AGIgsADMgiyAAAQgUACgUAAQg6AAg5gSg");
	this.shape_5.setTransform(154.5,178.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CA6F6B").s().p("A0xBfQg+gfAAhNQAAhNBNgQQAmgHAnAHUAkQAAfAB8AAAQBsAAAfAMQAvARgBA/QAAA6hcAYQgdAHgjADMgnIAABQgfAAgegPg");
	this.shape_6.setTransform(152.9,143.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,305.4,314.2);
p.frameBounds = [rect];


(lib.clipTimmy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// timmy
	this.instance = new lib.timmyai("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-50,0.318,0.318,0,0,0,152.4,156.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.clipTimmy, rect = new cjs.Rectangle(-49.9,-100,97.2,100), [rect]);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'B851D4F25CD945D7AE2D7497DD2C6ED3',
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B851D4F25CD945D7AE2D7497DD2C6ED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;