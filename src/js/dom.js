import Project from './project';
const Today = new Project('Today');
const TopNav = () => {
  const element = document.createElement('header');
  const todo = document.createElement('h1');
  todo.innerHTML = 'TO-DO-LIST >>';
  element.append(todo);
  document.body.append(element);
}

const sideNav = () => {
  const element = document.createElement('div');
  element.setAttribute('class', 'sidenav');
  const defaultProject = document.createElement('div');
  defaultProject.setAttribute('class', 'default-project');
  const project = document.createElement('div');
  const today = document.createElement('h5');
  today.innerHTML = Today.name;
  const AddTask = document.createElement('button');
  AddTask.setAttribute('id', 'Today');
  defaultProject.append(today, AddTask);
  AddTask.setAttribute('class', 'AddTask');
  AddTask.innerHTML = '+ Add Task';
  project.setAttribute('class', 'projectt');
  const projHead = document.createElement('h5');
  projHead.innerHTML = 'Recent Projects';
  const projectt = document.createElement('div');
  projectt.setAttribute('class', 'project');
  const AddProject = document.createElement('button');
  AddProject.setAttribute('class', 'Add-project');
  AddProject.innerHTML = '+ Add Project';
  const show = document.createElement('button');
  show.setAttribute('class', 'show');
  show.innerHTML = 'show';
  const br1 = document.createElement('br');
  const showTask = document.createElement('button');
  showTask.setAttribute('class', 'show-task');
  showTask.innerHTML = 'Show Task';
  project.append(defaultProject, projHead, projectt, AddProject, show, br1, showTask);
  const clearAll = document.createElement('button');
  clearAll.setAttribute('class', 'clear-all');
  clearAll.innerHTML = 'clear All';
  element.append(project, clearAll);

  document.body.append(element);
}

const contain = () => {
  const element = document.createElement('div');
  element.setAttribute('class', 'content');
  const addproject = document.createElement('button');
  addproject.setAttribute('class', 'add-project');
  addproject.innerHTML = '+ Add Project';
  document.body.append(element);
}

const contain1 = () => {
  const element = document.createElement('div');
  element.setAttribute('class', 'today');
  document.body.append(element);
}

const contain2 = () => {
  const element = document.createElement('form');
  const head = document.createElement('h6');
  head.innerHTML = 'Create Project';
  element.setAttribute('id', 'form');
  element.setAttribute('class', 'form');
  const i = document.createElement('input');
  i.setAttribute('type', 'text');
  i.setAttribute('name', 'name');
  i.setAttribute('id', '101');
  const br = document.createElement('br');
  const button = document.createElement('div');
  button.setAttribute('class', 'button-div');
  const sub = document.createElement('button');
  sub.setAttribute('class', 'submit');
  sub.innerHTML = 'Submit';
  const cancel = document.createElement('button');
  cancel.setAttribute('class', 'cancel');
  cancel.innerHTML = 'Cancel';
  button.append(sub, cancel);
  element.append(head, i, br, button);
  document.body.append(element);
}

const contain4 = () => {
  const element = document.createElement('form');
  element.setAttribute('class', 'task-form');
  const head = document.createElement('h6');
  head.setAttribute('class', 'projectname');
  head.innerHTML = 'Task';
  const i = document.createElement('input');
  i.setAttribute('type', 'text');
  i.setAttribute('name', 'name');
  i.setAttribute('id', '102');
  const head2 = document.createElement('h6');
  head2.innerHTML = 'Description';
  const j = document.createElement('input');
  j.setAttribute('type', 'textArea');
  j.setAttribute('description', 'name');
  j.setAttribute('id', '103');
  
  const date = document.createElement('input');
  date.setAttribute('type', 'date');
  date.setAttribute('id', '1od');
  const br = document.createElement('br');
  const br2 = document.createElement('br');
  const button = document.createElement('div');
  button.setAttribute('class', 'button-div');
  const sub = document.createElement('button');
  sub.setAttribute('class', 'task-submit');
  sub.innerHTML = 'Submit';
  const cancel = document.createElement('button');
  cancel.setAttribute('class', 'task-cancel');
  cancel.innerHTML = 'Cancel';
  button.append(sub, cancel);
  element.append(head, i, head2, j, br2, date, br, button);
  document.body.append(element);
}


const contain3 = () => {
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
  par.innerHTML = 'cannot create empty project or empty task';
  contain.append(span, par);
  modalContent.append(contain);
  element.append(modalContent);
  document.body.append(element);
}

const setup = () => {
  TopNav();
  sideNav();
  contain1();
  contain2();
  contain4();
  contain();
  contain3();
}

export { Today, setup };