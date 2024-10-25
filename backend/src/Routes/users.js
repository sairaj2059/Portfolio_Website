const express = require('express');
const router = express.Router();
const userProfileDefaultData = {
    Name: "RAJ GURAGAIN",
    UserName: "raj_guragain",
    DOB: "01-03-2003",
    Address: " Bangalore",
    EmailID: "raj@gmail.com",
    PhoneNo: "987665432",
    Description: "Sairam",
  };

// Define a route
router.get('/getData', (req, res) => {
    res.send(JSON.stringify(userProfileDefaultData));
    // this gets executed when user visit http://localhost:3000/user
});

router.get('/101', (req, res) => {
    res.send('this is user 101 route');// this gets executed when user visit http://localhost:3000/user/101
});

router.get('/102', (req, res) => {
    res.send('this is user 102 route');// this gets executed when user visit http://localhost:3000/user/102
});

// export the router module so that server.js file can use it
module.exports = router;