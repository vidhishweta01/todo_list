function TopNav() {
  const element = document.createElement('header');
  const todo = document.createElement('h1');
  todo.innerHTML = 'TO-DO-LIST >>';
  element.append(todo);
  document.body.append(element);
}

function sideNav() {
  const element = document.createElement('div');
  element.setAttribute('class', 'sidenav');
  const inbox = document.createElement('div');
  const project = document.createElement('div');
  project.setAttribute('class', 'project');
  const projHead = document.createElement('h2');
  projHead.innerHTML = 'Projects';
  project.append(projHead);

  const addProject = document.createElement('button');
  addProject.innerHTML = '+ Add Project';

  const inbx = document.createElement('button');
  inbx.innerHTML = 'Inbox';
  const today = document.createElement('button');
  today.innerHTML = 'Today';
  const thisWeek = document.createElement('button');
  thisWeek.innerHTML = 'This Week';
  
  inbox.append(inbx, today, thisWeek);

  element.append(inbox, project, addProject);

  document.body.append(element);
}

function contain() {
  const element = document.createElement('div');
  element.setAttribute('class', 'content');
  document.body.append(element);
}

export default function setup() {
  TopNav();
  sideNav();
  contain();
}