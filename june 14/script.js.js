
var database  = [
    {
        username: "nive",
        password: "1234"  },
   
];
    var newsfeed= [
        {
            username: "sruthi",
            timeline: "hai guys . have a nyc day"
        },
        {
            username: "sravani",
            timeline: "i love pspk"
        },
        {

            username: "jensy",
            timeline: "dont know what to say"
        }
    ];
   
    function signIn(username, password) {


    if (username === database [0] .username && password=== database[0].password){
    console.log (newsfeed);
    }
    else {
        alert("Sorry, wrong username and password");
    }
}
     var userNamePrompt = prompt("WhatI's your username?");
    var passwordPrompt =   prompt("WhatI's your password");
  
 signIn(userNamePrompt, passwordPrompt);