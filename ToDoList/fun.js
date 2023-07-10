let plusBtn = document.getElementById("plus-btn");
let tasks = document.getElementById("tasks");
let inputBtn = document.getElementById("input-btn");
let trashBtn = document.getElementById("trash-btn");
let li = document.createElement('li');

plusBtn.addEventListener('click', function () {
     if(inputBtn.value==="Add Task..."){
        alert("Add tasks first!!!");
     }

    else{
    let li = document.createElement('li');
    li.innerText = inputBtn.value;
    tasks.appendChild(li);
    li.addEventListener('click',function(){
        li.style.textDecoration="line-through";
    })

    }
   trashBtn.addEventListener('click',function(){
    if(inputBtn.value==="Add Task..."){
        alert("Nothing to delete!!!!");
     }
 else{
    window.location.reload();
 }
   })
})