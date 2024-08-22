function getup(){
    console.log("Updating List")
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    date = document.getElementById('datepicker').value;
    if(localStorage.getItem('item')== null){
        strArr = [];
       strArr.push([tit , desc, date]);
       localStorage.setItem('item', JSON.stringify(strArr))
     }
     else{
     itemstr = localStorage.getItem('item');
      strArr = JSON.parse(itemstr);
      strArr.push([tit , desc, date]);
      localStorage.setItem('item', JSON.stringify(strArr))
     }
     update()  
}
 function update(){
   
  if(localStorage.getItem('item')== null){
     strArr = [];

    localStorage.setItem('item', JSON.stringify(strArr))
  }
  else{
    itemstr = localStorage.getItem('item');
   strArr = JSON.parse(itemstr);

  }
  let tbody = document.getElementById('tableBody')
   let str ="";
   strArr.forEach((element, index) => {
    str += ` <tr>
                    <th scope="row">${index+1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td>${element[2]}</td> 
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                  </tr>`
   });
   tbody.innerHTML = str;
}
   ad = document.getElementById('add');

   ad.addEventListener("click", getup);
   update();

   function deleted(itemdel){
    console.log("delete item", itemdel);
    itemstr = localStorage.getItem('item');
    strArr = JSON.parse(itemstr);
      strArr.splice(itemdel, 1);
      localStorage.setItem('item', JSON.stringify(strArr))
      update();
   }
   function clearStorage(){
    if (confirm("Do you areally want to clear?")){
    console.log('Clearing the storage')
    localStorage.clear();
    update()
    }
}

card1 = document.getElementById('card-1');
card2 = document.getElementById('card-2');
card3 = document.getElementById('card-3');

card2.addEventListener("click", ()=>{
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0'); 
  const year = today.getFullYear();
  const todayFormatted = `${month}/${day}/${year}`;


  itemstr = localStorage.getItem('item');
  strArr = JSON.parse(itemstr);
 const fillter = strArr.filter(subArray => {
    const date = subArray[2]
    return date == todayFormatted;

});
let tbody = document.getElementById('tableBody')
let str ="";
fillter.forEach((element, index) => {
 str += ` <tr>
                 <th scope="row">${index+1}</th>
                 <td>${element[0]}</td>
                 <td>${element[1]}</td> 
                 <td>${element[2]}</td> 
                 <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
               </tr>`
});
tbody.innerHTML = str;
  
})

card1.addEventListener('click',update)

card3.addEventListener("click", ()=>{
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0'); 
  const year = today.getFullYear();
  const todayFormatted = `${month}/${day}/${year}`;


  itemstr = localStorage.getItem('item');
  strArr = JSON.parse(itemstr);
 const fillter = strArr.filter(subArray => {
    const date = subArray[2]
    return (date != todayFormatted && date < todayFormatted)
});
let tbody = document.getElementById('tableBody')
let str ="";
fillter.forEach((element, index) => {
 str += ` <tr>
                 <th scope="row">${index+1}</th>
                 <td>${element[0]}</td>
                 <td>${element[1]}</td> 
                 <td>${element[2]}</td> 
                 <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
               </tr>`
});
tbody.innerHTML = str;
  
})
