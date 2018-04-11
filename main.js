'use strict';

var dateContainer= document.querySelector('.date');
var weekDay= document.querySelector('.weekday');
var monthYear= document.querySelector('.month-year');
var dayNumber= document.querySelector('.daynumber');

var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f=new Date();
var showDay= diasSemana[f.getDay()]
var showMonthYear=meses[f.getMonth()] + " de " + f.getFullYear()
var showDayNumber=f.getDate()

weekDay.innerHTML= showDay;
monthYear.innerHTML= showMonthYear;
dayNumber.innerHTML= showDayNumber;

var addButton= document.querySelector('.addButton')

function addDutty(){
      var listHTML = '';

        listHTML =  '<div class="ingredients"><input type="radio" id="radioButton"><div class="contador">hola</div><div class="detailsingredient"><h3>adios</h3><h4>gemma</h4></div><h3>€</h3></div>';

      var container = document.querySelector('.container');
      container.innerHTML += listHTML;

    };
addButton.addEventListener('click', addDutty)
