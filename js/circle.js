// Circle object
function Circle(x,y,totalOut,color,name,minCircleRad,index,hc) {
  var _this = this;

  // constructor
  (function() {
  _this.totalIn = 0;
  _this.show_text = false;
  _this.hc = hc || null;
  _this.x = x || null;
  _this.y = y || null;
  _this.radius = Math.sqrt(totalOut) || null;
  _this.totalOut = totalOut || null;
  _this.color = color || null;
  _this.name = name || null;
  _this.mcr = minCircleRad || null;
  _this.index = index || null;
  })();
  
  this.update = function() {
    // 
  }

  this.draw = function(ctx,minCircleRad,dragIndex) {
    if(!_this.x || !_this.y || !_this.radius || !_this.color) {
      return;
    }
    ctx.beginPath();
    ctx.arc(_this.x, _this.y, _this.radius + minCircleRad, 0, 2 * Math.PI, false);

    if(_this.index == dragIndex){
      ctx.fillStyle = "rgba(110, 177, 134,0.8)";
      ctx.strokeStyle = 'grey';
    }else{
      ctx.fillStyle = _this.color;
      ctx.strokeStyle = 'white';
    }
    ctx.fill();
    ctx.lineWidth = 1;
    
    ctx.stroke();
    
  };

  this.drawLabel = function(ctx){  
    var t = formatNumber(parseInt(_this.totalOut * 1000));
    var txt = _this.name + " (" + t + ")";
    var nameHeight = -40;

    ctx.save();
    ctx.fillStyle = 'rgb(218, 218, 218)';
    ctx.font = "bold 12px Arial";
    var width = ctx.measureText(txt).width + 20;
    /// draw background rect assuming height of font
    ctx.fillRect(_this.x - (width /2), _this.y + nameHeight, width, 32);
    ctx.strokeRect(_this.x - (width /2), _this.y + nameHeight, width, 32);
    ctx.textBaseline = 'top';
    ctx.fillStyle = '#000';
    ctx.lineWidth = 1;
    ctx.fillText(txt, _this.x -(width/2) +10, _this.y + nameHeight + 10);
    ctx.restore();
  }

  this.checkIfHover = function(mousePos){
    var x0 = _this.x;
    var y0 = _this.y;
    var x1 = mousePos.x;
    var y1 = mousePos.y;
    var r = _this.radius + _this.mcr;

    if(Math.sqrt((x1-x0)*(x1-x0) + (y1-y0)*(y1-y0)) < r){
      return true
    }
    
    // var a = ( (Math.pow(c.x - e.x, 2)) + (Math.pow(c.y - e.y,2) ) 
    // if( (Math.pow((c.x - e.x),2) + Math.pow((c.y-e.y),2)) <= c.radius)

    return false;
  }
  this.addIngoing = function(add){
    var addin = add;
    _this.totalIn = _this.totalIn + addin;
  }
}

function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
}
