'use strict';
window.onload = function() {
  
    let container = this.document.querySelector(".container");
    let srtUp = this.document.querySelector("#sortUp"); 
    let srtDown = this.document.querySelector("#sortDown"); 
    let backetCount = this.document.querySelector(".shop_count");
    let clear = this.document.querySelector(".clear");

    let arrObj = [];
    let arrAllobj = [];
    let arrMatch = [];
    let flag = 0;
    
    Rehydration();
    CreateItems();

    clear.onclick = function(){
      window.localStorage.clear();
      container.innerHTML = "";
    }
    
   // Функция хидрации

    function hydration(mass){
      for(let i = 0; i < mass.length; i++){
      let JSodj = JSON.stringify(mass[i]);
      window.localStorage.setItem(localStorage.length+1, JSodj);
      }
    }
    
// Функция рехидрации

    function Rehydration(){
        for(let i = 1; i <= localStorage.length; i++){
          let tmp = JSON.parse(localStorage.getItem(i));
          arrObj.push(tmp);
          arrAllobj.push(tmp);
          arrMatch.push(tmp);
        }
      
      }

      // Функция уникальности єллементов массива

    function ArrUnic(arr){

      for(let i = 0; i < arr.length; i++){
        for(let j = i + 1 ; j < arr.length; j++){
          if(arr[i].color == arr[j].color){
            arr.splice(j, 1);
            j--;
           }
        }
      }
    }

    srtUp.onclick = function() {
      ArrUnic(arrMatch);
      container.innerHTML ='';
      SortStuffDown(arrMatch);
      CreateItems()
    }

    srtDown.onclick = function() {
      ArrUnic(arrMatch);
      container.innerHTML ='';
      SortStuffUp(arrMatch);
      CreateItems()
    }

    // Основная функция отображения и подсчета общего количества
    
    function CreateItems(){
        let count = 0;
        ArrUnic(arrMatch);
        
        for(let i = 0; i < arrMatch.length; i++){
           for(let j = 0; j < arrAllobj.length; j++){
             if(arrMatch[i].color == arrAllobj[j].color){
               count++;
             }
           }
            let row = document.createElement('div');
            row.classList.add('column');
            
            let colorDiv = document.createElement('div');
            colorDiv.classList.add('change_color');
            colorDiv.innerHTML = `<div class="${arrMatch[i].colorDiv}">`;
            
            let tablCont = document.createElement('div');
            tablCont.classList.add('countContainer');

            let genValue = document.createElement('div');
            genValue.innerHTML = (parseInt(arrMatch[i].value) * count) + '$';
            arrMatch[i].all = genValue.innerHTML;

            let tabl = document.createElement('div');
            tabl.classList.add('countOfItem');
            tabl.innerHTML = count;
            flag = 1;
            createImg('img/minus.png', tablCont, flag,i);
            tablCont.appendChild(tabl);
            createImg('img/plus.png', tablCont,flag,i);
            flag = 0;
            
            createImg(arrMatch[i].color, row,flag,i);
            row.appendChild(colorDiv);
            createCell(arrMatch[i].name, row);
            createCell(arrMatch[i].description, row);
            createCell(arrMatch[i].value, row);
            row.appendChild(tablCont);
            row.appendChild(genValue);

            container.appendChild(row);
            count = 0;
           } 

         function createImg(src, row, flag,i){
          var myImage;
           if(flag == 1){
             myImage = new Image(30, 30);
             myImage.classList.add('cursor');
             if(src == 'img/minus.png'){
                myImage.onclick = function(){
                  countMinus(row.parentNode);
                }
            }
             else {
              myImage.onclick = function(){
                countPlus(row.parentNode,i);
              }
            }
           }
           else myImage = new Image(100, 100);
           
           myImage.src = src;
           row.appendChild(myImage);
        }
      
          function createCell(text, row){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.innerHTML = text;
            row.appendChild(cell);
          }

          //функции на удаления и припавления товаров

          function countMinus(row,i){
            let tmp =  parseInt(row.childNodes[5].childNodes[1].innerHTML);
            let value = parseInt(row.childNodes[4].innerHTML);

            row.childNodes[5].childNodes[1].innerHTML = tmp - 1;
            row.lastChild.innerHTML =  (parseInt(row.lastChild.innerHTML) - value) + '$';
            
            if(row.childNodes[5].childNodes[1].innerHTML == 0){
              row.remove();
            }
            
            for(let j = 0; j < arrAllobj.length; j++){
              
              if(row.childNodes[0].src == arrAllobj[j].color){
                arrAllobj.splice(j, 1);
                break;
              }
            }
            localStorage.clear();
            hydration(arrAllobj);
            }

          function countPlus(row,i){
            let tmp =  parseInt(row.childNodes[5].childNodes[1].innerHTML);
            let value = row.childNodes[4].innerHTML;
            let count = row.childNodes[5].childNodes[1].innerHTML = tmp + 1;
            row.lastChild.innerHTML =  (parseInt(value) * count) + '$';
            createObj(i);
            
          }
          function createObj(i){
            let tmpObj = new function(){
            this.color = arrObj[i].color;
            this.name = arrObj[i].name;
            this.description = arrObj[i].description;
            this.value = arrObj[i].value;
            this.colorDiv = arrObj[i].colorDiv;
            this.count = 1;
        }
        arrAllobj.push(tmpObj);
        arrMatch.push(tmpObj);
        let JSodj = JSON.stringify(tmpObj);
        window.localStorage.setItem(localStorage.length+1, JSodj);
      }
}     

function SortStuffUp(arr){
  arr.sort((a, b) => {
    let a1 = parseInt(a.all.split(' ')[0]);
    let b1 = parseInt(b.all.split(' ')[0]);

    let res = 0;
    if (a1 > b1) {
        res++;
    } else if (a1 < b1) {
        res--
    } else {
        res;
    }
    return res;
})
}

function SortStuffDown(arr) {
  
  arr.sort((a, b) => {
      let a1 = parseInt(a.all.split(' ')[0]);
      let b1 = parseInt(b.all.split(' ')[0]);

      let res = 0;
      if (a1 > b1) {
          res--;
      } else if (a1 < b1) {
          res++;
      } else {
          res;
      }
       return res;
  })
}

}