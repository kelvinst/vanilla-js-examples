$('button').click(function() {
  console.log('clicked!');
});

function Animal(name) {
  this.name = name;
}

Animal.prototype.toString = function() {
  return this.name;
}

window.animals = [];
window.animalIndex = 0;

$('.new-animal').click(function() {
  window.animals.push(new Animal("animal" + window.animalIndex));
  window.animalIndex++;
});
