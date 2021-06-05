const express=require('express')
const app=express()
const passport=require('passport')
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('./config/keys')


app.get('/auth/google',
passport.authenticate('google',{
    scope:['profile','email']
})
);

app.get('/auth/google/callback',passport.authenticate('google'))



passport.use(new GoogleStrategy({
clientID:keys.googleClientID,
clientSecret:keys.googleClientSecret,
callbackURL:'/auth/google/callback'
    
},(accessToken,refreshToken,profile)=>{
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
}));
app.listen(5000);