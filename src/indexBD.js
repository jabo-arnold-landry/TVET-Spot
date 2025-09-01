async function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("port", 1);
    request.onupgradeneeded = () => {
      let db = request.result;
      if (!db.objectStoreNames.contains("port")) {
        db.createObjectStore("port", { keyPath: "id", autoIncrement: true });
      }
    };
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
}
async function gettingItems() {
  let db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("port", "readonly");
    const store = tx.objectStore("port");
    const request = store.getAll();
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
}
export async function settingItems(url) {
  let db = await initDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("port", "readwrite");
    const store = tx.objectStore("port");
    const request = store.add(url);
    request.onsuccess = () => {
      resolve(request.result);
    };
    request.onerror = () => {
      reject(request.error);
    };
  });
}
