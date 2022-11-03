const elementsValue = require('./eValues');


const ValidateRow1 = function (element) {
  if (elementsValue.row1.length > element.length) {
    elementsValue.row1.forEach((object) => {
      if (!element.find((item) => item.symbol == object.symbol)) {
        element.splice(elementsValue.row1.indexOf(object), 0, {
          symbol: 'deleted',
          group: 'deleted',
        });

        return element;
      }
    });
  } else {
    return element;
  }
};

const ValidateRow2 = function (element) {
  if (elementsValue.row2.length > element.length) {
    elementsValue.row2.forEach((object) => {
      if (!element.find((item) => item.symbol == object.symbol)) {
        element.splice(elementsValue.row2.indexOf(object), 0, {
          symbol: 'deleted',
          group: 'deleted',
        });

        return element;
      }
    });
  } else {
    return element;
  }
};

const ValidateRow3 = function (element) {
  if (elementsValue.row3.length > element.length) {
    elementsValue.row3.forEach((object) => {
      if (!element.find((item) => item.symbol == object.symbol)) {
        element.splice(elementsValue.row3.indexOf(object), 0, {
          symbol: 'deleted',
          group: 'deleted',
        });

        return element;
      }
    });
  } else {
    return element;
  }
};

const ValidateRow4 = function (element) {
  if (elementsValue.row4.length > element.length) {
    elementsValue.row4.forEach((object) => {
      if (!element.find((item) => item.symbol == object.symbol)) {
        element.splice(elementsValue.row4.indexOf(object), 0, {
          symbol: 'deleted',
          group: 'deleted',
        });

        return element;
      }
    });
  } else {
    return element;
  }
};

const ValidateRow5 = function (element) {
  if (elementsValue.row5.length > element.length) {
    elementsValue.row5.forEach((object) => {
      if (!element.find((item) => item.symbol == object.symbol)) {
        element.splice(elementsValue.row5.indexOf(object), 0, {
          symbol: 'deleted',
          group: 'deleted',
        });

        return element;
      }
    });
  } else {
    return element;
  }
};

const ValidateRow6 = function (element) {
  if (elementsValue.row6.length > element.length) {
    elementsValue.row6.forEach((object) => {
      if (!element.find((item) => item.symbol == object.symbol)) {
        element.splice(elementsValue.row6.indexOf(object), 0, {
          symbol: 'deleted',
          group: 'deleted',
        });

        return element;
      }
    });
  } else {
    return element;
  }
};

const ValidateRow7 = function (element) {
  if (elementsValue.row7.length > element.length) {
    elementsValue.row7.forEach((object) => {
      if (!element.find((item) => item.symbol == object.symbol)) {
        element.splice(elementsValue.row7.indexOf(object), 0, {
          symbol: 'deleted',
          group: 'deleted',
        });

        return element;
      }
    });
  } else {
    return element;
  }
};

const ValidateRow8 = function (element) {
  if (elementsValue.row8.length > element.length) {
    elementsValue.row8.forEach((object) => {
      if (!element.find((item) => item.symbol == object.symbol)) {
        element.splice(elementsValue.row8.indexOf(object), 0, {
          symbol: 'deleted',
          group: 'deleted',
        });

        return element;
      }
    });
  } else {
    return element;
  }
};

const ValidateRow9 = function (element) {
  if (elementsValue.row9.length > element.length) {
    elementsValue.row9.forEach((object) => {
      if (!element.find((item) => item.symbol == object.symbol)) {
        element.splice(elementsValue.row9.indexOf(object), 0, {
          symbol: 'deleted',
          group: 'deleted',
        });

        return element;
      }
    });
  } else {
    return element;
  }
};

exports.ValidateRow1 = ValidateRow1;
exports.ValidateRow2 = ValidateRow2;
exports.ValidateRow3 = ValidateRow3;
exports.ValidateRow4 = ValidateRow4;
exports.ValidateRow5 = ValidateRow5;
exports.ValidateRow6 = ValidateRow6;
exports.ValidateRow7 = ValidateRow7;
exports.ValidateRow8 = ValidateRow8;
exports.ValidateRow9 = ValidateRow9;
