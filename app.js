const express = require('express');
const { engine } = require('express-handlebars');


const path = require('path');
const app = express();

const homeRouter = require('./routes/home');

const compareHelpers = require('./Public/helpers/compare');
const validateHelpers = require('./Public/helpers/validate');

app.engine(
  'hbs',
  engine({
    helpers: {
      IsEqual: compareHelpers.IsEqual,
      ValidateRow1: validateHelpers.ValidateRow1,
      ValidateRow2: validateHelpers.ValidateRow2,
      ValidateRow3: validateHelpers.ValidateRow3,
      ValidateRow4: validateHelpers.ValidateRow4,
      ValidateRow5: validateHelpers.ValidateRow5,
      ValidateRow6: validateHelpers.ValidateRow6,
      ValidateRow7: validateHelpers.ValidateRow7,
      ValidateRow8: validateHelpers.ValidateRow8,
      ValidateRow9: validateHelpers.ValidateRow9,
    },
  })
);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRouter);

app.use(function (req, res, next) {
  res.status(404).render('404', { layout: false });
  
});


app.listen(3000, function () {
  console.log(`server running on: http://localhost:${this.address().port}`);
});
