const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function deleteToDo(event) {
    /* 어떤 버튼이 클릭되었는지 알 수 있음
    여기서 target은 button이기 때문에 이것의 parent는 li tag */
    const li = event.target.parentElement;
    li.remove(); 
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDo();
}

function paintToDo(newTodo) {   // argument가 object type로 들어옴
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    /* 위와 같이 생성한 태그에 id 값을 주고 싶다면 아래처럼 setAttribute()를 사용 */
    button.setAttribute("id", "todoButtonID");

    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()      // id로 각각의 li item 구별(랜덤 값)
    }
    toDos.push(newTodoObj);     // text가 아닌 object를 저장
    paintToDo(newTodoObj);
    saveToDo();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
} 