import setup from './js/dom';
import './style.css';
import Project from './js/project';

const array = [];
setup();
const form = document.querySelector('.form');


function display() {
  const contain = document.querySelector('.content');
  contain.innerHTML = '';
  array.forEach((project) => {
    const Div = document.createElement('div');
    Div.setAttribute('class', 'project');
    const title = document.createElement('h3');
    title.setAttribute('class', 'title');
    title.innerHTML = project.name;

    const date = document.createElement('h3');
    date.setAttribute('class', 'title');
    date.innerHTML = project.date;

    Div.append(title, date);
    contain.appendChild(Div);
  });
}

function newProject(name, date) {
  const project = new Project();
  project.name = name;
  project.date = date;
  array.push(project);
}

function getData() {
  


}
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', (getData) => {
  getData.preventDefault();
  const title = document.getElementById('101').value;
  const date1 = document.getElementById('1od').value;
  newProject(title, date1);
  form.reset();
  display();
});