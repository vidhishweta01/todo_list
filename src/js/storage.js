export default class Store {
  store(name) {
    let db = localStorage.getItem(name);
    if (db) {
      return JSON.parse(db);
    }
    db = localStorage.setItem(name, JSON.stringify([]));
    return JSON.parse(db);
  }
  
  updateStorage(db, content) {
    const data = store(db);
    data.push(content);
    localStorage.setItem(db, JSON.stringify(data));
    return true;
  }
}