const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(event){
    event.preventDefault();

    if(inputBox.value === ''){
          alert("输入不能为空");
    }else{
        let li=document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        //删除按钮
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}   

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        //删除父节点即<li>
        e.target.parentElement.remove();
        saveData();

    }
}, false)
inputBox.addEventListener("keydown", function (e){
    if (e.key === "Enter") {
        addTask(e);
        saveData();
    }
});
document.querySelector(".add").addEventListener("click", function (e){
    addTask(e);
    saveData();
});
function saveData(){
    //localStorage.本地保存data
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
//自动运行js，从本地获取 data数据
showTask();