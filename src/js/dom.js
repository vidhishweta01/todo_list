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
  addProject.setAttribute('class', 'add-project');
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
  const addproject = document.createElement('button');
  addproject.setAttribute('class', 'add-project');
  addproject.innerHTML = '+ Add Project';
  document.body.append(element);
}

function contain2() {
  const element = document.createElement('form');
  const br = document.createElement('br');
  const br1 = document.createElement('br');
  element.setAttribute('id', 'form');
  element.setAttribute('class', 'form');
  var i = document.createElement("input");
  i.setAttribute('type',"text");
  i.setAttribute('name', "name");
  i.setAttribute('id', "101");
  const gfg = document.createElement("input") 
  gfg.setAttribute("type", "date");
  gfg.setAttribute("id", "1od");
  const sub = document.createElement('button');
  sub.setAttribute('class', 'submit');
  sub.innerHTML = 'Submit';
  element.append(i, br1, gfg, br, sub);
  document.body.append(element);
}

export default function setup() {
  TopNav();
  sideNav();
  contain();
  contain2();
}