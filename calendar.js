var dDate = new Date();
var cur_month = dDate.getMonth();
var day_of_month = dDate.getDate();
var cur_year = dDate.getFullYear();
var Prev_Element = new Object();
var dStart, wEnd, dEnd, today, oldElem, oldBgColor, oldColor;
var todayIndex=0;
var my_month;
let changebleIndex = new Array ();

function DaysInMonth(iMonth, iYear) {
  var prev_date = new Date(iYear, iMonth, 0);
  return prev_date.getDate();
}

//создаем масив из чисел месяца
function build_cal(iYear, iMonth) {
  var the_month = new Array();
    the_month[0] = new Array("Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс");
    the_month[1] = new Array(7);
    the_month[2] = new Array(7);
    the_month[3] = new Array(7);
    the_month[4] = new Array(7);
    the_month[5] = new Array(7);
    the_month[6] = new Array(7);
  var dCalDate = new Date(iYear, iMonth-1, 1);
  var day_first = dCalDate.getDay();
  var iDaysInMonth = DaysInMonth(iMonth, iYear);
  var prevDaysInMonth = DaysInMonth(iMonth-1, iYear);
  var iVarDate = 1;
  var d, w;
  if (day_first==0) day_first = 6;
  else day_first = day_first - 1;
  dStart = day_first
  for (d=day_first-1; d >= 0; d--) {        //тута добавляем числа прошлого месяца
    the_month[1][d] = prevDaysInMonth;
    prevDaysInMonth--;
  }
  for (d=day_first; d < 7; d++) {
    the_month[1][d] = iVarDate;
    iVarDate++;
    if (the_month[1][d]===day_of_month) {todayIndex=1;}
  }
  for (w=2; w < 7; w++) {
    for (d=0; d < 7; d++) {
      if (iVarDate <= iDaysInMonth) {
        the_month[w][d] = iVarDate;
        iVarDate++;
      } else {iVarDate = 1;                 // добавляем числа следующего месяца
         wEnd = w;
         dEnd = d;
         the_month[w][d] = iVarDate;
         iVarDate++;
        }
      if (the_month[w][d]===day_of_month && todayIndex === 0) {todayIndex=w;}
    }
  }
return the_month;
}

//рисуем наш колендарь
function draw_cal(iYear, iMonth) {
  my_month=build_cal(iYear, iMonth);
  document.write("<div style='display: flex; flex-wrap: wrap; width: 390px; height: 510px; justify-content: space-between; align-content: space-between; margin: 0 auto;'>")
  document.write("<div id='cityName' style='width: 390px; height: 30px; text-align: center; background-color: blue; color: white'><b></b></div>");
  document.write("<div id='pickDate'style='width: 390px; height: 30px; text-align: center; background-color: blue; color: white'><b>" + day_of_month +"/"+ Number(cur_month+1) +"/"+ cur_year + "</b></div>");
  document.write("<div id='temperature'style='width: 390px; height: 30px; text-align: center; background-color: blue; color: white'><b>&deg C</b></div>");
  document.write("<div id='discription' style='width: 390px; height: 30px; text-align: center; background-color: blue; color: white'><b></b></div>");
  document.write("<div style='width: 50px; height: 50px; text-align: center; background-color: lightblue'><b>" + my_month[0][0] + "</b></div>");
  document.write("<div style='width: 50px; height: 50px; text-align: center; background-color: lightblue'><b>" + my_month[0][1] + "</b></div>");
  document.write("<div style='width: 50px; height: 50px; text-align: center; background-color: lightblue'><b>" + my_month[0][2] + "</b></div>");
  document.write("<div style='width: 50px; height: 50px; text-align: center; background-color: lightblue'><b>" + my_month[0][3] + "</b></div>");
  document.write("<div style='width: 50px; height: 50px; text-align: center; background-color: lightblue'><b>" + my_month[0][4] + "</b></div>");
  document.write("<div style='width: 50px; height: 50px; text-align: center; background-color: pink; color: white'><b>" + my_month[0][5] + "</b></div>");
  document.write("<div style='width: 50px; height: 50px; text-align: center; background-color: pink; color: white'><b>" + my_month[0][6] + "</b></div>");
  for (w=1; w < 7; w++) {
    for (d=0; d < 7; d++) {
      if (my_month[w][d]==day_of_month && todayIndex === w) {document.write("<div id="+ w + d + " onmouseover='changecolor(this)' onmouseout ='returncolor(this)' onclick='pickNewDate(this, )' style='text-align: center; background-color: lightgreen; color: white; width: 50px; height: 50px;font-weight: bold'>");
          today = String(w) + String(d);
      }else if (w === 1 && d < dStart)  document.write("<div id="+ w + d + " onmouseover='changecolor(this)' onmouseout ='returncolor(this)' onclick='pickNewDate(this)' style='text-align: center; background-color: white; color: grey; width: 50px; height: 50px;font-weight: bold'>");
      else if (w === wEnd && d >= dEnd)  document.write("<div  id="+ w + d + " onmouseover='changecolor(this)' onmouseout ='returncolor(this)' onclick='pickNewDate(this)' style='text-align: center; background-color: white; color: grey; width: 50px; height: 50px;font-weight: bold'>");
      else if (w > wEnd)  document.write("<div id="+ w + d + " onmouseover='changecolor(this)' onmouseout ='returncolor(this)' onclick='pickNewDate(this)' style='text-align: center; background-color: white; color: grey; width: 50px; height: 50px;font-weight: bold;'>");
      else {document.write("<div class='clickable' id="+ w + d + "  onmouseover='changecolor(this)' onmouseout ='returncolor(this)' onclick='pickNewDate(this)' style='text-align: center; background-color: silver; width: 50px; height: 50px; font-weight: bold; '>");
      }
    document.write("<font id=cal_text >" + my_month[w][d] + "</div>"); //заполняем его цислами из массива
    }
  }
  document.write("</div>")
}

// обновляем календарь при смене месяца или года (изменяем цвета, заносим новые числа и меняем свойство кликабельности через class)
function update(iYear, iMonth) {
  my_month=build_cal(iYear, iMonth);
  document.all.selected_date.value="";
  for (w=1; w < 7; w++) {
   for (d=0; d < 7; d++) {
    if (w === 1 && d < dStart)  { iCell = String(w) + String (d);
      let elem = document.getElementById(iCell);
      elem.style.backgroundColor = "white";
      elem.style.color = "grey";
      elem.className = "";
      } else if (w === wEnd && d >= dEnd) { 
        iCell = String(w) + String (d);
        let elem = document.getElementById(iCell);
        elem.style.backgroundColor = "white";
        elem.style.color = "grey";
        elem.className = "";
        } else if (w > wEnd) { 
            iCell = String(w) + String (d);
            let elem = document.getElementById(iCell);
            elem.style.backgroundColor = "white";
            elem.style.color = "grey";
            elem.className = "";
            } else { iCell = String(w) + String (d);
                let elem = document.getElementById(iCell);
                elem.style.backgroundColor = "silver";
                elem.style.color = "black";
                elem.className = "clickable";
                }
    cal_text[((7*w)+d)-7].innerText=my_month[w][d];
    }
  }
  if (((iMonth-1)==cur_month) && (iYear==cur_year)) {
    let elem = document.getElementById(today);
    elem.style.backgroundColor= "lightgreen";
    elem.style.color = "wight";
  } 
}

// меняем цвет блока при наведении курсора
function changecolor (elem) {
  oldBgColor =elem.style.backgroundColor;
  oldColor = elem.style.color;
  elem.style.backgroundColor = "blue";
  elem.style.color = "white";
}

// возвращаем цвет блока при убирании курсора
function returncolor (elem) {
  elem.style.backgroundColor = oldBgColor;
  elem.style.color = oldColor;
}

//просто функционал для смены даты (меняет дату в блоке под названием города, погода не меняется т.к. юзаю openweathermap)
function pickNewDate (elem) {
    if (elem.className === "clickable") {
      if (oldElem){
        if (oldElem.style.color = "red") {oldElem.style.color = "black";}
      }
      elem.style.color = "red";
      oldElem = elem;
      pickDate.innerText = my_month[Number(elem.id[0])][Number(elem.id[1])] + "/" + c_fоrm.sel_month.value + "/" + c_fоrm.sel_year.value;
    }
    else alert("Эту дату нельзя выбрать!!!");
}

//инициализация всего процесса  
var cur_date=new Date();
draw_cal(cur_date.getFullYear(), cur_date.getMonth()+1);
c_fоrm.sel_month.options[cur_date.getMonth()].selected=true;
for (i=0; i < c_fоrm.sel_year.length; i++){
 if (c_fоrm.sel_year.options[i].value==cur_date.getFullYear()){
    c_fоrm.sel_year.options[i].selected=true;}
}