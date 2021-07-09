const store = (array) => {
  localStorage.setItem('array', JSON.stringify(array));
}

const GetData = () => {
  const p = localStorage.getItem('array');
  if (p) {
    return JSON.parse(p);
  }
  return false;
}

const updateStorage = (data) => {
  const arr = GetData();
  if (arr) {
    if (arr.indexOf(data) === -1) {
      arr.push(data);
      store(arr);
    } else {
      return true;
    }
  } else {
    const aa = [];
    aa.push(data);
    store(aa);
  }
  return true;
}

const storeTask = (projectName, task) => {
  localStorage.setItem(projectName, JSON.stringify(task));
};

const getTask = (projectName) => {
  const task = localStorage.getItem(projectName);
  if (task) {
    return JSON.parse(task);
  }
  return false;
};

const updateTask = (projectName, task) => {
  const arr = localStorage.getItem(projectName);
  if (arr) {
    const array = JSON.parse(arr);
    array.push(task);
    storeTask(projectName, array);
  } else {
    const aa = [];
    aa.push(task);
    storeTask(projectName, aa);
  }
};

const storKey = (keyArray) => {
  localStorage.setItem('keyArray', JSON.stringify(keyArray));
};

const getkey = () => {
  const keyarr = localStorage.getItem('keyArray');
  if (keyarr) {
    return JSON.parse(keyarr);
  }
  return false;
};

const updateKeys = (key) => {
  const keyarr = getkey();
  if (keyarr) {
    keyarr.push(key);
    storKey(keyarr);
  } else {
    const keyar = [];
    keyar.push(key);
    storKey(keyar);
  }
};

export {
  store, updateStorage, GetData, storeTask,
  getTask, updateTask, updateKeys, getkey, storKey,
};