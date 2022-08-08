const path = require("path")
const express = require("express");
const exphbs = require("express-handlebars")
const session = require("express-session");
const routers = require("./controllers");
const sequelize = require("./config/connection")
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const PORT = process.env.PORT || 3001;
const app = express();

//set up our session
const sess = {
    secret: "placeholder",
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}
//set up handlebars
const hbs = exphbs.create()
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")
//set up our session
app.use(session(sess));
//standard middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//set up our routing
app.use(routers)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log("Server is running.");
    });;
});