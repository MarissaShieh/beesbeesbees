var Bee = function() {
  Grub.call(this);
  // constructor(variables here){

  // }
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;