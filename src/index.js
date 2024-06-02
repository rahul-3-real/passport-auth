import "dotenv/config";
import express from "express";
import session from "express-session";
import passport from "passport";

import AuthRouter from "./routes/auth-routes.js";

// Initialize Application
const app = express();

// Session middleware configuration
app.use(
  session({
    secret: "your-session-secret",
    resave: false,
    saveUninitialized: true,
  })
);

// Initialize Passport and Passport session
app.use(passport.initialize());
app.use(passport.session());

// Setup Template Engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});
app.use("/auth", AuthRouter);

app.listen(8000, () => {
  console.log(`Server running on port 3000`);
});
