const myInput = document.getElementById('myInput');
const myUL = document.getElementById('myUL');

function addCloseButton(target) {
    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    target.appendChild(span);
  }

function addNewTask() {
    const task = myInput.value.trim();
    console.log(task);
    myInput.value = '';

    if(task === "") {
        alert('Введіть текст!');
        return
    }
    createLi(task);
}

function createLi(text) {
    const liEl = document.createElement('li');
    liEl.textContent = text;
    myUL.appendChild(liEl);
    addCloseButton(liEl)
}

function handleTaskBehavior({target}) {
    // console.log(target);
    if(target.nodeName === 'LI') {
        // console.log('li');
        target.classList.toggle('checked')
    } else if(target.classList.contains('close')) {
        
    }
}

export {addNewTask, handleTaskBehavior}