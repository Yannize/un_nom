// function generate random id
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

console.log(generateId());
