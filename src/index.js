import setup from './js/dom';
import './style.css';
import Project from './js/project';
import { updateStorage, GetData, store } from './js/storage';

let array = [];
let recentProject = [];
setup();
const form = document.querySelector('.form');

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


const deleteProject = () => {
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
  });
}

const newProject = (name) => {
  const project = new Project();
  project.name = name;
  updateStorage(project);
  const contain2 = document.querySelector('.content');
  free(contain2);
}

const cross = () => {
  document.getElementById('id01').style.display = 'none';
}
// Event listener
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', (getData) => {
  getData.preventDefault();
  const title = document.getElementById('101').value;
  newProject(title);
  recentProject.push(title);
  sideBar(recentProject);
  form.reset();
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', (e) => {
  e.preventDefault();
  form.reset();
});

const show = document.querySelector('.show');
show.addEventListener('click', (ek) => {
  ek.preventDefault();
  display();
});

const spa = document.querySelector('.cross');
spa.addEventListener('click', cross);