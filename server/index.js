const express = require("express");
const cors = require("cors");
const { url } = require("inspector");
const e = require("express");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.



app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});

app.get("/api/fortune", (req, res) => {
  const fortune = [
    "A good time to finish up old tasks.",
    "Adventure can be real happiness.",
    "All your hard work will soon pay off.",
    "An inch of time is an inch of gold.",
    "Do not let ambitions overshadow small success.",
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/goal", (req, res) => {
  const goals = [
    "Improve your salary",
    "Workout for 1 hour",
    "Make 5 new friends",
    "Cook a meal for you and someone else"
  ];

  let randomIndex = Math.floor(Math.random() * goals.length);
  let randomGoal = goals[randomIndex];

  res.status(200).send(randomGoal);
});



app.listen(4000, () => console.log("Server running on 4000"));
