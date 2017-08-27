
export function copyObject(obj){
  return  JSON.parse(JSON.stringify(obj));
}

export function numberWithCommas(x) {
    var parts = x.toString().split(",");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(",");
}

export function updateObject(oldObject,newValues) {
  return Object.assign({},oldObject, newValues);
}

export function updateItemInArrayById(array, itemId, updateItemCallback) {
  const updatedItems = array.map( item => {
    if(item.id !== itemId) return item;

    const updatedItem = updateItemCallback(item);
    return updatedItem;
  })
  return updatedItems;
}

export function updateItemInArrayByKey(array, key, value, updateItemCallback) {
  const updatedItems = array.map( item => {
    if(item[key] !== value) return item;

    const updatedItem = updateItemCallback(item);
    return updatedItem;
  })
  return updatedItems;
}

export function updateActiveItemInArray(array, updateItemCallback){
  const updatedItems = array.map( item => {
    if(!item.active) return item;

    const updatedItem = updateItemCallback(item);
    return updatedItem;
  })
  return updatedItems;
}

export function getIdFromActiveItem(array){
  const item = array.filter((item) => item.active === true)[0];

  return item ? item.id : -1;
}

export function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

export function uglyClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}


export function forEachKey(object, callback) {
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
        callback(property);
    }
  }
}

export function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
