import Project from './project';
import Task from './todo';
import {
  updateStorage, updateTask, updateKeys, storeTask, getTask,
} from './storage';

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
  const task = new Task(taskName, description, duedate);
  const k = getTask(projectName);
  if (k) {
    updateTask(projectName, task);
  } else {
    const arr = [];
    arr.push(task);
    storeTask(projectName, arr);
    updateKeys(projectName);
  }
};

export { newProject, newTask };