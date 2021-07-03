function store(array)
{
  localStorage.setItem('array', JSON.stringify(array));
}

function updateStorage(data) {
  let arr = localStorage.getItem('array');
  if (arr) {
    const array = JSON.parse(arr);
  array.push(data);
  store(array);
  }
  else {
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
  else return false;
}
// function store(name) {
//   let db = localStorage.getItem(name);
//   if (db) {
//     return JSON.parse(db);
//   }
//   db = localStorage.setItem(name, JSON.stringify([]));
//   return JSON.parse(db);
// }

// function updateStorage(db, content) {
//   const data = store(db);
//   data.push(content);
//   localStorage.setItem(db, JSON.stringify(data));
//   return true;
// }

 export { store, updateStorage, GetData};