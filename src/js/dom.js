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
  const project = document.createElement('div');
  project.setAttribute('class', 'project');
  const projHead = document.createElement('h2');
  projHead.innerHTML = 'Projects';
  const show = document.createElement('button');
  show.setAttribute('class', 'show');
  show.innerHTML = 'show';
  project.append(projHead, show);

  element.append(project);

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
  const head = document.createElement('h6');
  head.innerHTML = 'create Project to do';
  const br = document.createElement('br');
  const br1 = document.createElement('br');
  element.setAttribute('id', 'form');
  element.setAttribute('class', 'form');
  const i = document.createElement('input');
  i.setAttribute('type', 'text');
  i.setAttribute('name', 'name');
  i.setAttribute('id', '101');
  const gfg = document.createElement('input');
  gfg.setAttribute('type', 'date');
  gfg.setAttribute('id', '1od');
  const button = document.createElement('div');
  button.setAttribute('class', 'button-div');
  const sub = document.createElement('button');
  sub.setAttribute('class', 'submit');
  sub.innerHTML = 'Submit';
  const cancel = document.createElement('button');
  cancel.setAttribute('class', 'cancel');
  cancel.innerHTML = 'Cancel';
  button.append(sub, cancel);
  element.append(i, br1, gfg, br, button);
  document.body.append(element);
}

function contain3() {
  const element = document.createElement('div');
  element.setAttribute('id', 'id01');
  element.setAttribute('class', 'modal');
  const modalContent = document.createElement('div');
  modalContent.setAttribute('class', 'modal-content');
  const contain = document.createElement('div');
  contain.setAttribute('class', 'contain');
  const span = document.createElement('span');
  span.setAttribute('class', 'cross display-top-right');
  span.innerHTML = '&times;';
  const par = document.createElement('div');
  par.setAttribute('class', 'conten');
  par.innerHTML = 'project not present to delete';
  contain.append(span, par);
  modalContent.append(contain);
  element.append(modalContent);
  document.body.append(element);
}

export default function setup() {
  TopNav();
  sideNav();
  contain2();
  contain();
  contain3();
}