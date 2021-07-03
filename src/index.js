import setup from './js/dom';
import './style.css';
import Project from './js/project';
import { updateStorage } from './js/storage';
import { GetData } from './js/storage';
import { store } from './js/storage';

let array = [];
setup();
const form = document.querySelector('.form');

function free(cont) {
  let child = cont.lastElementChild;
  while (child) {
    cont.removeChild(child);
    child = cont.lastElementChild;
  }
}

function display() {
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

    const date = document.createElement('h3');
    date.setAttribute('class', 'date');
    date.innerHTML = project.date;

    const dele = document.createElement('button');
    dele.setAttribute('class', 'del');
    dele.innerHTML = 'delete';
    
    Div.append(titl, date, dele);
    contain.appendChild(Div);

    dele.addEventListener('click', deleteProject);
  });
}

function newProject(name, date) {
  const project = new Project();
  project.name = name;
  project.date = date;
  updateStorage(project);
  const contain2 = document.querySelector('.content');
  free(contain2);
}

function deleteProject() {
  localStorage.clear();
  array.splice(this.parentNode, 1);
  this.parentNode.remove();
  store(array);

}

function cross() {
  document.getElementById('id01').style.display = 'none';
}
// Event listener
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', (getData) => {
  getData.preventDefault();
  const title = document.getElementById('101').value;
  const date1 = document.getElementById('1od').value;
  newProject(title, date1);
  form.reset();
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', (e) => {
  form.reset();
});

const show = document.querySelector('.show');
show.addEventListener('click', (ek) => {
  display();
});

const spa = document.querySelector('.cross');
spa.addEventListener('click', cross);