function Rectangle(height, width) {
  this.area = () => { return height * width };
  this.perimeter = () => { return 2 * (height + width) };
}

//  X, Y plain distance
function Point(x, y) {
  this.x = x;
  this.y = y;
  this.distanceFrom = function (another) {
    return Math.sqrt(Math.pow((this.x - another.x), 2) + Math.pow((this.y - another.y), 2)); // a^2 + b^2
  }
}

String.prototype.isPalindrome = function () {
  return this.split('').reverse().join('') == this; // with a == operator we don't need to use the valueOf method. WHY?? Check the type of this.split('').reverse().join('')
}