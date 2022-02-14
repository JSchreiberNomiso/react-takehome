// DO NOT MODIFY
const hashStr = (str) => {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString(16).slice(1);
};

// This function returns an object with an unique id for any object passed in
export const createUniqueObjectId = (obj) => {
  const uniqStr = Object.values(obj).reduce((memo, value) => {
    return memo + JSON.stringify(value);
  }, `${Date.now()},${Math.random()}`);

  return { ...obj, id: hashStr(uniqStr) };
};
