import passport from "passport";
import { Strategy } from "passport-google-oauth20";

passport.use(
  new Strategy({
    // Options
  }),
  () => {
    // Callback
  }
);
