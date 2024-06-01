import express from "express";
import session from "express-session";
import passport from "passport";

import AuthRouter from "./routes/auth-routes.js";

// Initialize Application
const app = express();

// Setup Template Engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/", (req, res) => {
  res.render("home");
});
app.use("/auth", AuthRouter);

app.listen(8000, () => {
  console.log(`Server running on port 3000`);
});
