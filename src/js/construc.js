import Project from './project';
import Task from './todo';
import { updateStorage, updateTask } from './storage';

const free = (cont) => {
  let child = cont.lastElementChild;
  while (child) {
    cont.removeChild(child);
    child = cont.lastElementChild;
  }
};

const newProject = (name) => {
  const project = new Project();
  project.name = name;
  updateStorage(project);
  const contain2 = document.querySelector('.content');
  free(contain2);
};
  
const newTask = (taskName, description, duedate, projectName) => {
  const TasK = new Task(taskName, description, duedate);
  updateTask(projectName, TasK);
};

export { newProject, newTask };