const findKey = (object, callback) => {
  for (prop in object){
    if(callback(object[prop])) {
      return prop
    }
  }
}
