var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

//Progression 1: Add ___ chocolates of ____ color
const addChocolates = function (chocolates, color, count) {
  for (i = 0; i < count; i++) {
    chocolates.unshift(color);
  }

  if (count <= 0) {
    return 'Number cannot be zero/negative';
  }
};

//Progression 2: Remove ___ chocolates from the top the dispenser
const removeChocolates = function (chocolates, number) {
  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }
  if (number < 0) {
    return 'Number cannot be zero/negative';
  }

  let a = [];
  for (i = 0; i < number; i++) {
    a.push(chocolates.shift());
  }
  return a;
};

//Progression 3: Dispense ___ chocolates
const dispenseChocolates = function (chocolates, number) {
  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }

  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }

  let a = [];
  for (i = 0; i < number; i++) {
    a.push(chocolates.pop());
  }
  return a;
};

//Progression 4: Dispense ___ chocolates of ____ color
const dispenseChocolatesOfColor = function (chocolates, number, color) {
  if (number > chocolates.length) {
    return 'Insufficient chocolates in the dispenser';
  }

  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }

  let a = [];
  for (i = 0; i < number; i++) {
    a.push(chocolates.pop(color));
  }
  return a;
};

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {
  let a = [],
    colors = ['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];

  colors.forEach((e) => {
    let s = 0;
    chocolates.forEach((c) => {
      if (e == c) {
        s++;
      }
    });
    if (s > 0) a.push(s);
  });
  return a;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
const sortChocolateBasedOnCount = function () {};

//Progression 7: Change ___ chocolates of ____ color to ____ color
const changeChocolateColor = function (chocolates, number, color, finalColor) {
  if (number <= 0) {
    return 'Number cannot be zero/negative';
  }
  if (color == finalColor) {
    return "Can't replace the same chocolates";
  }

  if (chocolates.length == 0) {
    return [];
  }
  let a = [];
  for (i = 0; i < chocolates.length; i++) {
    a.push((chocolates[color] = finalColor));
  }
  return a;
};

//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

//Challenge 1: Remove one chocolate of x color from the top

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
