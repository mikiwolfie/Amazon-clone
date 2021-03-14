const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51ISZRjIv9jWTDXdNmPcjB4rO0obZtTaKmgkLGngBCooe39Bs6htDMa9KCX8Gp7PqrJhIiXjYoVcsVEY41fNiMBWK000a7z25GJ")

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send
("hello world"))

app.post("/payments/create", async (request, response) => {
    const total = reques.query.total;

    console.log("Payment Request Recieved BAMBAM! for this amount >>",total)

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, //subnits of the currency
      currency: "usd",
    });

    //  OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app)
