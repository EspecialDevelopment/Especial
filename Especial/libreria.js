function dimensionar()
{
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;

  var dp = document.getElementById('principal');

  var dpw = (w * .95);
  var dph = (h * .95);

  dp.style.width  = dpw + 'px';
  dp.style.height = dph + 'px';


  var f = document.getElementById('f');
  var p = document.getElementById('p');
  var m = document.getElementById('m');
  var t = document.getElementById('t');
  c = document.getElementById('c');

  f.style.width  = (dpw * .30)+'px';
  f.style.height = (dph * .70)+'px';

  p.style.width = (dpw * .50)+'px';
  p.style.height = (dph * .70)+'px';

  m.style.width = (dpw - (dpw * .30)- (dpw * .50) - 6) +'px';
  m.style.height = dph+'px';

  margen = Math.round( (dph * .70)-dph );

  t.style.marginTop = margen+'px';
  t.style.height = (dph-(dph * .70)-2)+'px';
  t.style.width = (dpw * .55)+'px';

  c.style.marginTop = margen+'px';
  c.style.marginLeft = (dpw * .55)+'px';
  c.style.height = (dph-(dph * .70)-2)+'px';
  c.style.width =  ((Math.round(dpw - (dpw * .55) - ((dpw - (dpw * .30)- (dpw * .50) - 10))))-7) + 'px'; 

  
}

function cargaTabla(id,f,c,wc,tc)
{
  /* id = espacio determinado para la tabla
      f = filas de la tabla
      c = columnas de la tabla
      wc = arreglo con anchos de columna
      tc = arreglo con titulos de columna
  */
  
  var divTabla = document.getElementById(id);
  
  var hTabla = divTabla.style.height;
  
  hTabla = hTabla.replace('px','');
  
  hTabla = Math.trunc(hTabla)-15;
  
  var hCelda = hTabla / f;
  
  var html = '<table id="lista" class="cssTabla">'
  
  var noid = 0;
  
  for(var x=1; x<=f;x++)
  {
    html = html + '<tr class="cssCelda"'+'id="'+'R'+x+'">';
    for(var y=1; y<=c;y++)
    {
      if ((y <= c) && ( x== 1))
      {
        html = html + '<th style="height:'+hCelda+'px;'+'width:'+wc[y-1]+'" class="cssCeldaTitulo">'+tc[y-1]+'</th>';   
      }
      else
      { 
        noid++;
        html = html + '<td id="L'+ noid +'" style="height:'+hCelda+'px" class="cssCelda">x </td>';
      }
    }
    html = html + '</tr>';    
  }
  
  html = html + '</table>';
  
  divTabla.innerHTML = html;
  
  var row = document.getElementById('R2');
  
  row.style.background = '#ccffff';
}

function nuevaFila(id,div)
{
   var tabla = document.getElementById(id);
   
   var nrows = tabla.rows.length;
   
   var ncells = tabla.rows[0].cells.length;
  
   var ncellsTot = (ncells * nrows) - ncells;
  
   var row = tabla.insertRow(nrows);
  
   row.setAttribute('id','R'+(nrows+1));
   row.setAttribute('class','cssCelda');
   row.style.background ='#ccffff';
  
   var cell;
  
  //--------------------------------------------------------
  
   var divTabla = document.getElementById(div);

   var hTabla = divTabla.style.height;
  
   hTabla = hTabla.replace('px','');
  
   hTabla = Math.trunc(hTabla);
  
   var hCelda = hTabla / 5;
  
  
   for(var x=0; x < ncells ;x++)
   {
     ncellsTot++;
     
     cell = row.insertCell(x);
     
     cell.id ='C'+ncellsTot;
     
     cell.className = 'cssCelda';
     
     cell.style.height = hCelda + 'px';
     
     cell.innerHTML = 'x';
     
     //cell.style.background = 'red';
     
   }
 
   row.setAttribute('class','cssCelda');
    
   document.getElementById('R'+(nrows)).style.background = 'white';
  
   //-----FOCUS------------//
  
   divTabla.scrollTop = 1000;
  
    
  

}

function clickCalc(e)
{
  var dato = e.innerHTML;
  
  var num = parseFloat(document.getElementById('calcVal').value).toFixed( 2 );
  
  if (isNaN(num))
  {
    document.getElementById('calcVal').value = e.innerHTML;
  }
  else
   {
     document.getElementById('calcVal').value = document.getElementById('calcVal').value + e.innerHTML;
   }
  
  if (e.innerHTML == 'C')
  {
    document.getElementById('calcVal').value = '';
  }
  
}

function cargaCalc(id,f,c,wc,tc)
{
  
  var divTabla = document.getElementById(id);
  
  var hTabla = divTabla.style.height;
  
  hTabla = hTabla.replace('px','');
  
  hTabla = Math.trunc(hTabla)-15;
  
  var hCelda = hTabla / f;
  
  var html = '<table id="lista" class="cssTabla">'
  
  var noid = 0;
  
 
  for(var x=1; x<=f;x++)
  {
    html = html + '<tr class="cssCelda"'+'id="'+'R'+x+'">';
   
    for(var y=1; y<=c;y++)
    {
        if ((y == 1) && ( x== 1))
        {
          html = html + '<td id="C'+ noid +'" style="height:'+hCelda+'px;'+'width:'+wc[y-1]+'" style="background:black" colspan="'+c+'">'+
          
          '<input type="text" class="cssCalcVal" id="calcVal">'+
          
          '</td>'; 
          
          break;
        }
        else
        {
          html = html + '<td id="C'+ noid +'" style="height:'+hCelda+'px;'+'width:'+wc[y-1]+'" class="cssCeldaCalc" " onclick="clickCalc(this)">'+tc[noid]+'</td>';   
        }
       
        noid++;
     
    }
    html = html + '</tr>';    
  }
  
  html = html + '</table>';
  
  divTabla.innerHTML = html;
}

function cargaMenu(id,f,c)
{
  /* id = espacio determinado para la tabla
      f = filas de la tabla
      c = columnas de la tabla
  */
  
  var divTabla = document.getElementById(id);
  
  var hTabla = divTabla.style.height;
  
  hTabla = hTabla.replace('px','');
  
  hTabla = Math.trunc(hTabla);
  
  var hCelda = Math.trunc(hTabla / f)-3;
  
  var wTabla = divTabla.style.width;
  
  wTabla = wTabla.replace('px','');
  
  wTabla = Math.trunc(wTabla);
  
  var wCelda = wTabla / c;
  
  var html = '<table id="lista" class="cssTabla">'
  
  var noid = 0;
  
  for(var x=1; x<=f;x++)
  {
    html = html + '<tr class="cssCelda"'+'id="'+'R'+x+'">';
    for(var y=1; y<=c;y++)
    {
        noid++;
        html = html + '<td id="L'+ noid +'" style="height:'+hCelda+'px;'+'width:'+wCelda+'" class="cssBoton">esto es una prueba</td>';
    }
    html = html + '</tr>';    
  }
  
  html = html + '</table>';
  
  divTabla.innerHTML = html;
  
  var row = document.getElementById('R2');
  
  row.style.background = '#ccffff';
  
  
}

function carga()
{
  dimensionar();
  cargaTabla('t',5,4,['10%','60%','10%','10%'], ['Cantidad','Descripcion','Precio','SubTotal']);
  cargaCalc('c',5,4,['25%','25%','25%','25%'], ['7','8','9','C','4','5','6','CE','1','2','3','X','0','00','.','&#x2713']); 
  cargaMenu('m',8,2);
}


