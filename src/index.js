import { setup } from './js/dom';
import './style.css';
import { newProject, newTask} from './js/construc';
import {
  GetData, store, storeTask,
  getTask, getkey, storKey,
} from './js/storage';

let array = [];
const recentProject = [];
let taskey = [];
setup();
const form = document.querySelector('.form');
const form1 = document.querySelector('.task-form');

const free = (cont) => {
  let child = cont.lastElementChild;
  while (child) {
    cont.removeChild(child);
    child = cont.lastElementChild;
  }
};

const sideBar = (recentProject) => {
  const pro = document.querySelector('.project');
  free(pro);
  recentProject.forEach((project) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'side-project');
    const name = document.createElement('p');
    name.setAttribute('class', 'titl');
    name.innerHTML = project;
    div.append(name);
    pro.appendChild(div);
  });
};

const deleteProject2 = (name) => {
  if (recentProject.indexOf(name) !== -1) {
    const j = recentProject.indexOf(name);
    recentProject.splice(j, 1);
    sideBar(recentProject);
  }
  localStorage.removeItem(name);
  if (taskey.indexOf(name) !== -1) {
    localStorage.removeItem('keyArray');
    const k = taskey.indexOf(name);
    taskey.splice(k, 1);
    storKey(taskey);
  }
  displayTask(); // eslint-disable-line
};

function deleteAllTask() {
  const k = this.parentNode.lastElementChild;
  const j = this.parentNode.firstElementChild.innerHTML;
  localStorage.removeItem(j);
  if (taskey.indexOf(j) !== -1) {
    localStorage.removeItem('keyArray');
    taskey.splice(j, 1);
    storKey(taskey);
  }
  k.remove();
  this.remove();
  displayTask(); // eslint-disable-line
}

function editOneTask() {
  const l = this.parentNode.children;
  const m = document.querySelector('.task-form').children;
  m[0].innerHTML = l[0].innerHTML;
  m[1].value = l[2].innerHTML;
  m[3].value = l[6].innerHTML;
  m[5].value = l[4].innerHTML;
  document.getElementById('id01').style.display = 'none';
  document.querySelector('.task-form').style.display = 'flex';
  const j = this.parentNode.firstElementChild.innerHTML;
  const h = getTask(j);
  const k = this.parentNode.children[2].innerHTML;
  console.log(k);
  const arr = [];
  if (h) {
    h.forEach((task) => {
      arr.push(task.name);
    });
    const i = arr.indexOf(k);
    h.splice(i, 1);
    localStorage.removeItem(j);
    storeTask(j, h);
    document.getElementById('id01').style.display = 'none';
    displayTask(); // eslint-disable-line
  }
}

function deleteOneTask() {
  const j = this.parentNode.firstElementChild.innerHTML;
  const h = getTask(j);
  const k = this.parentNode.children[2].innerHTML;
  const arr = [];
  if (h) {
    h.forEach((task) => {
      arr.push(task.name);
    });
    const i = arr.indexOf(k);
    h.splice(i, 1);
    localStorage.removeItem(j);
    storeTask(j, h);
    document.getElementById('id01').style.display = 'none';
    displayTask(); // eslint-disable-line
  }
}

function showTasks() {
  const div = document.querySelector('.show-Task');
  const del = document.createElement('button');
  del.innerHTML = 'delete';
  const edi = document.createElement('button');
  del.innerHTML = 'delete';
  edi.innerHTML = 'edit';
  const k = this.parentNode.previousSibling.innerHTML;
  free(div);
  const c = this.children;
  let txt = '';
  for (let i = 0; i < c.length; i = i + 1) { // eslint-disable-line
    txt = txt +'<h4>' + c[i].innerHTML+ '</h4>' + '<br>';  // eslint-disable-line
  }
  txt = '<h4>' + k + '</h4>' + '<br>' + txt;  // eslint-disable-line
  div.innerHTML = txt;
  div.append(del, edi);
  document.querySelector('.contain').style.height = '100%';
  document.querySelector('.warning').style.display = 'none';
  document.getElementById('id01').style.display = 'block';
  del.addEventListener('click', deleteOneTask);
  edi.addEventListener('click', editOneTask);
}

const displayTask = () => {
  const todo = document.querySelector('.today');
  free(todo);
  const k = getkey();
  if (k) {
    taskey = k;
  }
  taskey.forEach((key) => {
    const Projectname = document.createElement('h6');
    const delet = document.createElement('button');
    delet.innerHTML = 'Delete all';
    delet.setAttribute('class', 'all-task-delete');
    const allTask = document.createElement('div');
    allTask.setAttribute('class', 'all-task');
    Projectname.setAttribute('class', 'proj-name');
    Projectname.innerHTML = key;
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
      allTask.append(div);
      div.addEventListener('click', showTasks);
    });
    todo.append(Projectname, allTask, delet);
    delet.addEventListener('click', deleteAllTask);
  });
};

displayTask();

function deleteProject() {
  localStorage.removeItem('array');
  const k = array.slice(this.parentNode)[0].name;
  array.splice(this.parentNode, 1);
  this.parentNode.remove();
  store(array);
  deleteProject2(k);
}

function Addtask() {
  const k = this.parentNode.firstElementChild.innerHTML;
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
};

display();

const cross = () => {
  document.getElementById('id01').style.display = 'none';
};

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
  display();
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
  if (taskName !== '') {
    newTask(taskName, description, Date, projectName);
  } else {
    document.getElementById('id01').style.display = 'block';
  }
  form1.reset();
  form1.style.display = 'none';
  displayTask();
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

const clearAll = document.querySelector('.clear-all');
clearAll.addEventListener('click', (g) => {
  g.preventDefault();
  localStorage.clear();
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