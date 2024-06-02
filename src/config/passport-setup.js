import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import User from "../models/user-model.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    (accessToken, refreshToken, profile, done) => {
      const existingUser = User.findOne({ google_id: profile.id }).then(
        (currentUser) => {
          if (existingUser) {
            return done(null, existingUser);
          } else {
            new User({
              google_id: profile.id,
              username: profile.displayName,
            })
              .save()
              .then((newUser) => {
                console.log(newUser);
              });
          }
        }
      );

      return done(null, profile);
    }
  )
);

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});
