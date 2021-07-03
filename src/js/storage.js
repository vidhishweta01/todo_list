function store(array) {
  localStorage.setItem('array', JSON.stringify(array));
}

function updateStorage(data) {
  const arr = localStorage.getItem('array');
  if (arr) {
    const array = JSON.parse(arr);
    array.push(data);
    store(array);
  } else {
    const aa = [];
    aa.push(data);
    store(aa);
  }
}

function GetData() {
  const p = localStorage.getItem('array');
  if (p) {
    return JSON.parse(p);
  }
 return false;
}

export { store, updateStorage, GetData};