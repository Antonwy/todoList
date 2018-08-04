
const submit = $("#addForm");
const input = $("#newTask");

submit.addEventListener("submit", addTask);

function addTask(event){
    event.preventDefault();
    
    if(inputIsValid()){
        var li = document.createElement("li");
        li.innerHTML = input.value;
        li.className = "list-group-item";
        $(".taskList").appendChild(li);

        input.value = "";
    }

}

function inputIsValid(){
    return input.value.length > 0;
}

function $(objName, all){
    return document.querySelectorAll(objName);
}

function $(objName){
    return document.querySelector(objName);
}