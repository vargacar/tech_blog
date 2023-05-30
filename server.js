const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers')

const hbs = exphbs.create({ helpers });


const app = express()

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3001

app.use(routes)
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening port ',PORT));
  });