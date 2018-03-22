
var YY = 2018; // Ano
var MM = 07; // Mês
var DD = 22; // Dia
var HH = 00; //Horas
var MI = 00; // Minutos
var SS = 00;  //Segundos

var coutdownRefresh = function() {
  var now = new Date();
  var future = new Date(YY,MM-1,DD,HH,MI,SS); // Também recebe string ('000/00/00 00:00:00') 

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
    console.log(missing);//Retorno da Contagem regressiva se maior que zero
    setTimeout(coutdownRefresh,1000);
  } else {
    console.log('FINISH!'); // Se não acabou a contagem regressiva
    setTimeout(coutdownRefresh,1000);
  }
  
 
}
	
	
	