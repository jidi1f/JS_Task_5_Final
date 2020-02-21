window.onload = function() {

  let container = this.document.querySelector(".container");
  let ul = this.document.querySelector("#pagination");
  let listCl = this.document.querySelector("#Mlist");
  let nolistCl = this.document.querySelector("#Mnolist");
  let srtUp = this.document.querySelector("#sortUp"); 
  let srtDown = this.document.querySelector("#sortDown"); 
  let backetCount = this.document.querySelector(".shop_count");
  let addPr = this.document.querySelector(".add_product");
  let btnPop = this.document.querySelector(".btn2");
  let popup = this.document.querySelector(".popup");
  let layer = this.document.querySelector(".layer");
  
  window.localStorage.clear();
  backetCount.innerHTML = localStorage.length;

  let arrObj = [
    {name: "some Plant" ,
    description: "some Desription",
    value: "28$",
    variation: {
      first: {color:"img/C_1.jpg", avaliable: "avaliable"} , 
      second: {color:"img/C_2.jpg", avaliable: "not avaliable"} , 
      third: {color:"img/C_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "33$",
    variation: {
      first: {color:"img/A_1.jpg", avaliable: "avaliable"} , 
      second: {color:"img/A_2.jpg", avaliable: "not avaliable"} , 
      third: {color:"img/A_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "42$",
    variation: {
      first: {color:"img/G_1.jpg", avaliable: "not avaliable"} , 
      second: {color:"img/G_2.jpg", avaliable: "avaliable"} , 
      third: {color:"img/G_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "42$",
    variation: {
      first: {color:"img/E_1.jpg", avaliable: "not avaliable"} , 
      second: {color:"img/E_2.jpg", avaliable: "avaliable"} , 
      third: {color:"img/E_3.jpg", avaliable: "not avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "30$",
    variation: {
      first: {color:"img/J_1.jpg", avaliable: "avaliable"} , 
      second: {color:"img/J_2.jpg", avaliable: "avaliable"} , 
      third: {color:"img/J_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "38$",
    variation: {
      first: {color:"img/D_1.jpg", avaliable: "avaliable"} , 
      second: {color:"img/D_2.jpg", avaliable: "avaliable"} , 
      third: {color:"img/D_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "52$",
    variation: {
      first: {color:"img/T_1.jpg", avaliable: "avaliable"} , 
      second: {color:"img/T_2.jpg", avaliable: "avaliable"} , 
      third: {color:"img/T_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "25$",
    variation: {
      first: {color:"img/H_1.jpg", avaliable: "not avaliable"} , 
      second: {color:"img/H_2.jpg", avaliable: "avaliable"} , 
      third: {color:"img/H_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "42$",
    variation: {
      first: {color:"img/G_1.jpg", avaliable: "not avaliable"} , 
      second: {color:"img/G_2.jpg", avaliable: "avaliable"} , 
      third: {color:"img/G_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "42$",
    variation: {
      first: {color:"img/E_1.jpg", avaliable: "not avaliable"} , 
      second: {color:"img/E_2.jpg", avaliable: "avaliable"} , 
      third: {color:"img/E_3.jpg", avaliable: "not avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "30$",
    variation: {
      first: {color:"img/J_1.jpg", avaliable: "avaliable"} , 
      second: {color:"img/J_2.jpg", avaliable: "avaliable"} , 
      third: {color:"img/J_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "38$",
    variation: {
      first: {color:"img/D_1.jpg", avaliable: "avaliable"} , 
      second: {color:"img/D_2.jpg", avaliable: "avaliable"} , 
      third: {color:"img/D_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "52$",
    variation: {
          first: {color:"img/T_1.jpg", avaliable: "avaliable"} , 
          second: {color:"img/T_2.jpg", avaliable: "avaliable"} , 
          third: {color:"img/T_3.jpg", avaliable: "not avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "25$",
    variation: {
          first: {color:"img/H_1.jpg", avaliable: "not avaliable"} , 
          second: {color:"img/H_2.jpg", avaliable: "avaliable"} , 
          third: {color:"img/H_3.jpg", avaliable: "not available"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "28$",
    variation: {
          first: {color:"img/C_1.jpg", avaliable: "avaliable"} , 
          second: {color:"img/C_2.jpg", avaliable: "not avaliable"} , 
          third: {color:"img/C_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "33$",
    variation: {
          first: {color:"img/A_1.jpg", avaliable: "avaliable"} , 
          second: {color:"img/A_2.jpg", avaliable: "avaliable"} , 
          third: {color:"img/A_3.jpg", avaliable: "not avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "28$",
    variation: {
          first: {color:"img/C_1.jpg", avaliable: "avaliable"} , 
          second: {color:"img/C_2.jpg", avaliable: "not avaliable"} , 
          third: {color:"img/C_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "33$",
    variation: {
          first: {color:"img/A_1.jpg", avaliable: "avaliable"} , 
          second: {color:"img/A_2.jpg", avaliable: "avaliable"} , 
          third: {color:"img/A_3.jpg", avaliable: "not avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "42$",
    variation: {
          first: {color:"img/G_1.jpg", avaliable: "not avaliable"} , 
          second: {color:"img/G_2.jpg", avaliable: "avaliable"} , 
          third: {color:"img/G_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "42$",
    variation: {
          first: {color:"img/E_1.jpg", avaliable: "not avaliable"} , 
          second: {color:"img/E_2.jpg", avaliable: "avaliable"} , 
          third: {color:"img/E_3.jpg", avaliable: "not avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "30$",
    variation: {
          first: {color:"img/J_1.jpg", avaliable: "avaliable"} , 
          second: {color:"img/J_2.jpg", avaliable: "avaliable"} , 
          third: {color:"img/J_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "38$",
    variation: {
          first: {color:"img/D_1.jpg", avaliable: "avaliable"} , 
          second: {color:"img/D_2.jpg", avaliable: "avaliable"} , 
          third: {color:"img/D_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "33$",
    variation: {
          first: {color:"img/A_1.jpg", avaliable: "avaliable"} , 
          second: {color:"img/A_2.jpg", avaliable: "avaliable"} , 
          third: {color:"img/A_3.jpg", avaliable: "not avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "42$",
    variation: {
          first: {color:"img/G_1.jpg", avaliable: "not avaliable"} , 
          second: {color:"img/G_2.jpg", avaliable: "avaliable"} , 
          third: {color:"img/G_3.jpg", avaliable: "avaliable"}  
      }},
    {name: "some Plant" ,
    description: "some Desription",
    value: "42$",
    variation: {
          first: {color:"img/E_1.jpg", avaliable: "not avaliable"} , 
          second: {color:"img/E_2.jpg", avaliable: "avaliable"} , 
          third: {color:"img/E_3.jpg", avaliable: "not avaliable"}  
      }},
  ];
  
  let itemsOnPage = 8;
  let liCount = Math.ceil(arrObj.length / itemsOnPage);
  let arrOfLi = [];
  let arrForSort = [];
  let active;
  let activeLi;
  let flag = 0;
  let count = 0;

  addPr.onclick = function(){
    popup.classList.remove('not_active_display');
    layer.classList.remove('not_active_display');
    
  }

  layer.onclick = function(){
    popup.classList.add('not_active_display');
    layer.classList.add('not_active_display');
  }

  btnPop.onclick = function(){
    AdminAdd(popup);
    displayItems(activeLi);
    popup.classList.add('not_active_display');
    layer.classList.add('not_active_display');
  }

  // Добавить продукт

  function AdminAdd(popup){
    let first = new function(){
      this.color = popup.childNodes[7].value;
      this.avaliable  = popup.childNodes[13].options[popup.childNodes[13].selectedIndex].innerHTML;
    }
    let second = new function(){
      this.color = popup.childNodes[9].value;
      this.avaliable = popup.childNodes[15].options[popup.childNodes[15].selectedIndex].innerHTML;
    }
    let third = new function(){
      this.color = popup.childNodes[11].value;
      this.avaliable = popup.childNodes[17].options[popup.childNodes[17].selectedIndex].innerHTML;
    }

    let variation = new function(){
      this.first = first ;
      this.second = second ;
      this.third = third;
    }
    let tmp = new function(){
      this.name = popup.childNodes[1].value;
      this.description = popup.childNodes[3].value;
      this.value = popup.childNodes[5].value + '$';

      this.variation = variation;
      }
    arrObj.unshift(tmp);
  }

  // Создаю пагинацию и вешаю событие на каждую
  
  for(let i = 1; i <= liCount; i++){
    let li = document.createElement('li');
    li.innerHTML = i;
    ul.appendChild(li);
    arrOfLi.push(li);
  }
  
  for(let li of arrOfLi){
    li.addEventListener('click',function(){
      displayItems(this);
    })
  }

 
  
  // Вывожу первую страницу

  displayItems(arrOfLi[0]);
  
  // Функция вывода

  function displayItems(li){
         if(active){
          active.classList.remove('active');
         }
         active = li;
         activeLi = li;

         li.classList.add('active');

         let numOfpage = +li.innerHTML;
         
         let start = (numOfpage - 1) * itemsOnPage;
         let end = start + itemsOnPage;
         if(end > arrObj.length){
           end = start + (arrObj.length - start);
         }
         
         let currentItems = createArrOfItems(start, end, flag);
         container.innerHTML = '';
         arrForSort = [];
          let countA = 0;
          for(let i = start; i < end; i++){
            arrForSort[countA++] = arrObj[i];
          }
          countA = 0;
          for(let items of currentItems){
            container.appendChild(items);
            }
      
   }

   //Сортировка

   srtUp.onclick = function() {
    flag = 1;
    displayItems(activeLi);
    flag = 0;
   }
   
   srtDown.onclick = function() {
    flag = 2;
    displayItems(activeLi);
    flag = 0;
   }

  //Создаю массив Node элемментов из обычного массива. Основная функция с вложиными в нее;

  function createArrOfItems(start, end, flag){
      let tmpArr = [];
      let countA = 0;
      arrForSort = [];
      for(let i = start; i < end; i++){
        arrForSort[countA++] = arrObj[i];
      }
      countA = 0;
      if(flag == 1) {
        SortStuffDown(arrForSort);
      }
      if(flag == 2){
        SortStuffUp(arrForSort);
      }

      for(let i = 0; i < arrForSort.length; i++){

        let row = document.createElement('div');
        if(container.closest('.modeNoList')){
          row.classList.add('row');
        }
        else  row.classList.add('column');
        
        let colorDiv = document.createElement('div');
        colorDiv.classList.add('change_color');
        colorDiv.innerHTML = `<div class="circle_color red active_color"></div><div class="circle_color orange"></div><div class="circle_color green"></div>`;
        
        let button = document.createElement('div');
        button.classList.add('addToBacket');
        button.innerHTML = 'To the backet';

        createImg(arrForSort[i].variation.first.color, row);
        row.appendChild(colorDiv);
        createCell(arrForSort[i].name, row);
        createCell(arrForSort[i].description, row);
        createCell(arrForSort[i].value, row);
        createCell(arrForSort[i].variation.first.avaliable, row);
        if(arrForSort[i].variation.first.avaliable == 'not avaliable')  button.classList.add('notAvaliable');
        row.appendChild(button);
        
        //Подвешуем событие на событие смены цвета

        colorDiv.addEventListener("click", function(e){
          if(e.target.closest('.circle_color')){
            ChangeImgEvent(e.target, row,arrForSort[i].variation)
          }
        })
        
        button.addEventListener("click", function(e){
         ToBacket(e.target,row);
         })


        tmpArr.push(row);
    }
    return tmpArr;
  
    //Вложенные функции на создания яечек
  
    function createImg(src, row){
      if(container.closest('.modeNoList')){
      var myImage = new Image(150, 150);
      myImage.src = src;
      row.appendChild(myImage);
      }
      else {
      var myImage = new Image(75, 75);
      myImage.src = src;
      row.appendChild(myImage);
      }
    }

    function createCell(text, row){
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.innerHTML = text;
      row.appendChild(cell);
    }

    // Ивент на извенение картинки

    function ChangeImgEvent(div, row, obj){
    
      row.firstChild.remove();
      ChangeActiveColor(div);

    if(row.parentNode.className == 'container'){
        var myImage = new Image(75, 75);
      }
      else {
      var myImage = new Image(150, 160);
      }
      if(div.className == 'circle_color red active_color'){
        myImage.src = obj.first.color;
        row.childNodes[4].innerHTML = obj.first.avaliable;
        row.insertBefore(myImage, row.firstChild);
      }
      else if (div.className == 'circle_color orange active_color'){
        myImage.src = obj.second.color;
        row.childNodes[4].innerHTML = obj.second.avaliable;
        row.insertBefore(myImage, row.firstChild);
      }
      else {
        myImage.src = obj.third.color;
        row.childNodes[4].innerHTML = obj.third.avaliable;
        row.insertBefore(myImage, row.firstChild);
      }

      if(row.childNodes[5].innerHTML == 'not avaliable')  row.childNodes[6].classList.add('notAvaliable');
      if(row.childNodes[5].innerHTML == 'avaliable')  row.childNodes[6].classList.remove('notAvaliable');
    
  }

    function ChangeActiveColor(div){
       let parent = div.parentNode;
       
       for(let i = 0 ; i < parent.childNodes.length; i++){
         if(parent.childNodes[i].closest('.active_color')){
          parent.childNodes[i].classList.remove('active_color');
         }
       }
       div.classList.add('active_color');
    }

    // Функция добавления в корзину

    function ToBacket(btn,row){
       
      let tmpArr = [];

       if(btn.closest('.notAvaliable')){

       }
       else{
        let Ncolor;
        for(let i = 0; i < 3; i++){
          if(this.colorDiv = row.childNodes[1].childNodes[i].closest('.active_color')) Ncolor = row.childNodes[1].childNodes[i].className;
        }
        let tmpObj = new function(){
            this.color = row.childNodes[0].src;
            this.name = row.childNodes[2].innerHTML;
            this.description = row.childNodes[3].innerHTML;
            this.value = row.childNodes[4].innerHTML;
            this.colorDiv = Ncolor;
            this.count = 1;
            this.all = 0;
        }
        let JSodj = JSON.stringify(tmpObj);
        window.localStorage.setItem(localStorage.length+1, JSodj);
        backetCount.innerHTML = localStorage.length;
       }
    }

  }
    
  // Переключение режимов показа
  
  listCl.onclick = function(){
    container.classList.remove('modeNoList');
    addClassItems('column', '70px','70px')
    flagMode = 1;
   }

  nolistCl.onclick = function(){
    container.classList.add('modeNoList');
     addClassItems('row', '150px','160px');
     flagMode = 0;
   }

    //Добавляет класс дочерним єллементам

    function addClassItems(clName, Pwidth, Pheight){
      for (var i = 0; i < container.childNodes.length; i++) {
        container.childNodes[i].className = clName;
        container.childNodes[i].firstElementChild.style.width = Pwidth;
        container.childNodes[i].firstElementChild.style.height = Pheight;
      }
    }


   function SortStuffUp(arr){
      arr.sort((a, b) => {
        let a1 = parseInt(a.value.split(' ')[0]);
        let b1 = parseInt(b.value.split(' ')[0]);

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
          let a1 = parseInt(a.value.split(' ')[0]);
          let b1 = parseInt(b.value.split(' ')[0]);

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

        
  
   
