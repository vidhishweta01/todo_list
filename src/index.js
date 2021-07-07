import { Today, setup } from './js/dom';
import './style.css';
import Task from './js/todo';
import { newProject, newTask } from './js/construc';
import { GetData, store, storeTask, getTask, updateTask, updateKeys, getkey, storKey } from './js/storage';

let array = [];
let recentProject = [];
let taskey = [];
localStorage.setItem('today', JSON.stringify(Today));

setup();
const form = document.querySelector('.form');
const form1 = document.querySelector('.task-form');

const free = (cont) => {
  let child = cont.lastElementChild;
  while (child) {
    cont.removeChild(child);
    child = cont.lastElementChild;
  }
}

const deleteProject2 = (name) => {
  if (recentProject.indexOf(name) !== -1) {
    console.log('Im here');
    const j = recentProject.indexOf(name);
    recentProject.splice(j, 1);
    sideBar(recentProject);
  }
}

const displayTask = () => {
  const todo = document.querySelector('.today');
  free(todo);
  let a = 0;
  const k = getkey();
  if (k) {
    taskey = k;
  }
  taskey.forEach((key) => {
    const Projectname = document.createElement('h6');
    const num = a.toString();
    Projectname.setAttribute('id', num);
    Projectname.innerHTML = key;
    todo.append(Projectname);
    const arr = getTask(key);
    arr.forEach((task) => {
      const div = document.createElement('div');
      div.setAttribute('class', 'to-do');
      const name = document.createElement('h6');
      name.innerHTML = task.name;
      const para = document.createElement('p');
      para.innerHTML = task.description;
      const date = document.createElement('h6');
      date.innerHTML = task.dueDate;
      div.append(name, date, para);
      todo.append(div);
    });
    a = a + 1;
  });
}

function deleteProject() {
  localStorage.clear();
  const k = array.slice(this.parentNode)[0].name;
  array.splice(this.parentNode, 1);
  this.parentNode.remove();
  store(array);
  deleteProject2(k);
}

const sideBar = (recentProject) => {
  const pro = document.querySelector('.project');
  free(pro);
  recentProject.forEach((project) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'side-project')
    const name = document.createElement('p');
    name.setAttribute('class', 'titl');
    name.innerHTML = project;
    div.append(name);
    pro.appendChild(div);
  });
}

function Addtask() {
  const k = array.slice(this.parentNode)[0].name;
  console.log(k);
  form1.style.display = 'flex';
  document.querySelector('.projectname').innerHTML = k;
}


const display = () => {
  const h = GetData();
  if (h) {
    array = h;
  }
  const contain = document.querySelector('.content');
  free(contain);
  array.forEach((project) => {
    const Div = document.createElement('div');
    Div.setAttribute('class', 'project1');
    const titl = document.createElement('h4');
    titl.setAttribute('class', 'title');
    titl.innerHTML = project.name;
    const title = document.createElement('h6');
    title.setAttribute('class', 'titl');
    title.innerHTML = project.name;
    const AddTask = document.createElement('button');
    AddTask.setAttribute('class', 'AddTask');
    AddTask.innerHTML = '+ Add Task';
    const dele = document.createElement('button');
    dele.setAttribute('class', 'del');
    dele.innerHTML = 'delete';
    Div.append(titl, AddTask, dele);
    contain.appendChild(Div);
    dele.addEventListener('click', deleteProject);
    AddTask.addEventListener('click', Addtask);
  });
}

const cross = () => {
  document.getElementById('id01').style.display = 'none';
}
// Event listener
const adPro = document.querySelector('.Add-project');
adPro.addEventListener('click', (j) => {
  j.preventDefault();
  form.style.display = 'flex';
});

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', (getData) => {
  getData.preventDefault();
  const title = document.getElementById('101').value;
  if (title !== '') {
    newProject(title);
    recentProject.push(title);
    sideBar(recentProject);
  } else {
    document.getElementById('id01').style.display = 'block';
  }
  form.reset();
  form.style.display = 'none';
}); 

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
  form.style.display = 'none';
});

const sub = document.querySelector('.task-submit');
sub.addEventListener('click', (h) => {
  h.preventDefault();
  const projectName = document.querySelector('.projectname').innerHTML;
  const taskName = document.getElementById('102').value;
  const description = document.getElementById('103').value;
  const Date = document.getElementById('1od').value;
  const task = new Task(taskName, description, Date);
  const k = getTask(projectName); 
  if (k) {
    console.log('is present');
    updateTask(projectName, task);
  } else {
    console.log('is not present');
    const arr = [];
    arr.push(task);
    storeTask(projectName, arr);
    updateKeys(projectName);

  }
});

const can = document.querySelector('.task-cancel');
can.addEventListener('click', (c) => {
  c.preventDefault();
  form1.reset();
  form1.style.display = 'none';
});

const show = document.querySelector('.show');
show.addEventListener('click', (ek) => {
  ek.preventDefault();
  display();
});

const showtask = document.querySelector('.show-task');
showtask.addEventListener('click', (g) => {
  g.preventDefault();
  displayTask();
});

const spa = document.querySelector('.cross');
spa.addEventListener('click', cross);

const tody = document.getElementById('Today');
tody.addEventListener('click', (e) => {
  e.preventDefault();
  form1.style.display = 'flex';
  document.querySelector('.projectname').innerHTML = 'Today';
});