import { Router } from "express";
import passport from "passport";

// Ensure the GoogleStrategy file is imported to initialize the strategy
import "../config/passport-setup.js";

const router = Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/auth/login" }),
  (req, res) => {
    // Successful authentication, redirect or respond accordingly
    res.send("Callback URI");
  }
);

router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.send("logout");
  });
});

export default router;
