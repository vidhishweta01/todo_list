import Project from './project';
import Task from './todo';
import {
  updateStorage, updateTask, updateKeys, storeTask, getTask,
} from './storage';

const newProject = (name) => {
  const project = new Project();
  project.name = name;
  updateStorage(project);
  return true;
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
  return true;
};

export { newProject, newTask };