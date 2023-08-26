var dt = new Date();
document.getElementById('date').innerHTML=dt;



window.addEventListener('load',() =>{
    const form =document.querySelector('#task-form');
    const input =document.querySelector('#task-input');
    const list =document.querySelector('#tasks');

    form.addEventListener('submit',(e) => {
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Fill Task");
            return;
        }
        const task_el =document.createElement("div");
        task_el.classList.add("task");
        
        const task_content =document.createElement("div");
        task_content.classList.add("content");
        
        
        task_el.appendChild(task_content);
        
        const task_input =document.createElement("input");
        task_input.classList.add("text");
        task_input.type= "text";
        task_input.value = task;
        task_input.setAttribute("readonly","readonly");

        task_content.appendChild(task_input);

        const task_action = document.createElement("div");
        task_action.classList.add("actions");
        
        const task_edit = document.createElement("button");
        task_edit.classList.add("edit");
        task_edit.innerHTML = "Edit";
        
        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML = "Delete";

        task_action.appendChild(task_edit);
        task_action.appendChild(task_delete);

        task_el.appendChild(task_action);


        list.appendChild(task_el)

        input.value="";

        task_edit.addEventListener('click',()=>{
            if(task_edit.innerText.toLowerCase() == "edit"){
                task_input.removeAttribute("readonly");
                task_input.focus();
                task_edit.innerText = "Save";
            }
            else{
                task_input.setAttribute("readonly","readonly");
                task_edit.innerText = "Edit";
            }
        });
            task_delete.addEventListener('click', (e) => {
                list.removeChild(task_el);
            });
    })
})


