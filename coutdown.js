
var YY = 2018; //Ano
var MM = 07; //Mês
var DD = 22; //Dia
var HH = 00; //Horas
var MI = 00; //Minutos
var SS = 00; //Segundos

var coutdownRefresh = function() {
  var now = new Date(); 
  var future = new Date(YY,MM-1,DD,HH,MI,SS); // new Date('0000/00/00 00:00:00) Também funciona 

  var ss = parseInt((future - now) / 1000);
  var mm = parseInt(ss / 60);
  var hh = parseInt(mm / 60);
  var dd = parseInt(hh / 24); 

  ss = ss - (mm * 60);
  mm = mm - (hh * 60);
  hh = hh - (dd * 24); 

  var missing = '';
  missing += (dd && dd > 1) ? dd + ' dias, ' : (dd == 1 ? '1 dia, ' : '');
  missing += (toString(hh).length) ? hh + ' hr, ' : '';
  missing += (toString(mm).length) ? mm + ' min e ' : '';
  missing += ss + ' seg'; 

  if (dd + hh + mm + ss > 0) {
    console.log(missing);
    setTimeout(coutdownRefresh,1000);
  } else {
    console.log('FINISH');
    setTimeout(coutdownRefresh,1000);
  }
 }
 
 coutdownRefresh()
 
 
 
 
 
 
 
 
 
 
 
 