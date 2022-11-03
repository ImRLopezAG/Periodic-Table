const homeRouter = require('express').Router();
const {
  row1,
  row2,
  row3,
  row4,
  row5,
  row6,
  row7,
} = require('../assets/js/rows');

const elementsRow = [row1, row2, row3, row4, row5, row6, row7];

// only
homeRouter.get('/', (req, res, next) => {
  res.render('home', {
    layout: false,
    elements: elementsRow,
  });
});

module.exports = homeRouter;
