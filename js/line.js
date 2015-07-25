// Circle object
function Line(source,target,value,cities,colour,dragIndex) {
  var _this = this;
  var s = source;
  var t = target;
  var tn = t;

  // constructor
  (function() {
    _this.source = source || null;
    _this.target = target || null;
    _this.x1 = cities[s].x || null;
    _this.y1 = cities[s].y || null;
    _this.x2 = cities[tn].x || null;
    _this.y2 = cities[tn].y || null;
    _this.di = dragIndex || null;
    _this.val = value || null;
    _this.selected;
    _this.r1 = Math.sqrt(cities[s].total) || null;
    _this.r2 = Math.sqrt(cities[t].total) || null;
    _this.colour = colour || null;
  })();

  this.update = function() {
    _this.x1 = cities[s].x || null;
    _this.y1 = cities[s].y || null;
    _this.x2 = cities[t].x || null;
    _this.y2 = cities[t].y || null;
  }

  this.draw = function(ctx, dragIndex, flowDirection){
    if(!_this.x1 || !_this.y1 || !_this.x2 || !_this.y2){
      return;
    }

    x1 = _this.x1;
    y1 = _this.y1;
    x2 = _this.x2;
    y2 = _this.y2;

    var di = dragIndex;
    var r1 = cities[s].radius;
    var r2 = cities[t].radius;
    var d = Math.sqrt((_this.x1-_this.x2)*(_this.x1-_this.x2) + (_this.y1-_this.y2)*(_this.y1-_this.y2));
    // Define angle
    var a = Math.atan2(_this.y2-_this.y1, _this.x2-_this.x1);

    ctx.beginPath();
    ctx.moveTo(_this.x1, _this.y1);
    ctx.lineTo(_this.x2, _this.y2);
    ctx.lineWidth = _this.val;
    
    if(t == di ){
      _this.selected = true;
      ctx.strokeStyle = "rgba(110, 177, 134,0.8)";
    }else{
      _this.selected = false;
      ctx.strokeStyle = _this.colour;
    }

    ctx.stroke();
    
    /*
    ctx.save(); // saves the coordinate system
    ctx.translate(_this.x1, _this.y1); // now the position (0,0) is found at (250,50)
    ctx.rotate(a); // rotate around the start point of your line
    ctx.moveTo(_this.x1, _this.y1 + Math.sqrt(r1) );
    ctx.lineTo(x1 + d, y1 + Math.sqrt(r2) );
    ctx.lineTo(x1 + d, y1 - Math.sqrt(r2) );
    ctx.lineTo(x1, y1 - Math.sqrt(r1) );
    ctx.fill();
    ctx.restore(); // restores the coordinate system back to (0,0)
    */
  };
}
