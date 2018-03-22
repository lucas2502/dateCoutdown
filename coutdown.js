
var YY = 2018;
var MM = 07;
var DD = 22;
var HH = 00;
var MI = 00;
var SS = 00; 

var coutdownRefresh = function() {
  var now = new Date();
  var future = new Date(YY,MM-1,DD,HH,MI,SS); 

  var ss = parseInt((futuro - hoje) / 1000);
  var mm = parseInt(ss / 60);
  var hh = parseInt(mm / 60);
  var dd = parseInt(hh / 24); 

  ss = ss - (mm * 60);
  mm = mm - (hh * 60);
  hh = hh - (dd * 24); 

  var missing = '';
  faltam += (dd && dd > 1) ? dd+' dias, ' : (dd==1 ? '1 dia, ' : '');
  faltam += (toString(hh).length) ? hh+' hr, ' : '';
  faltam += (toString(mm).length) ? mm+' min e ' : '';
  faltam += ss+' seg'; 

  if (dd+hh+mm+ss > 0) {
    console.log(missing);
    setTimeout(coutdownRefresh,1000);
  } else {
    console.log('CHEGOU!!!!');
    setTimeout(coutdownRefresh,1000);
  }
  
 
}
	
	
	