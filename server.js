const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers')
const session = require('express-session');
const path = require('path');
const PORT = process.env.PORT || 3001
const hbs = exphbs.create({ helpers });
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express()

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));




app.use(routes)
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening port ',PORT));
  });