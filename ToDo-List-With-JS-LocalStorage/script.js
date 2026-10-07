const body = document.querySelector("body");
const div = document.createElement("div");
const form = document.createElement("form")
const input = document.createElement("input")
const subBtn = document.createElement("button")
subBtn.textContent ="Add Task"
subBtn.type = "submit"
form.append(input , subBtn)
const ul = document.createElement("ul")
div.append(form,ul)
body.append(div)
const errorP = document.createElement("p");
const tasks = ["hom work" , "study book" , "practice coding"]

function addTodo(event){

    if(input.value.trim() == ""){
        errorP.textContent = "Please Enter a task";
        div.append(errorP)
    }else if(input.value.trim() != ""){
        errorP.textContent = ""
        div.append(errorP)
        tasks.push(input.value.trim())
    }
ul.textContent = ""
showTodo();
}

function showTodo(){
    tasks.map( (task) => {

        const li = document.createElement("li")
        li.textContent = task
        const delBtn = document.createElement("button") 
        delBtn.textContent = "Delete"
        li.append(delBtn)
        ul.append(li )
        console.log("Task : " , task);
        
    })
};
showTodo();

form.addEventListener("submit" ,(event) =>{
    event.preventDefault();
    addTodo()
})