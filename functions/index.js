const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = rquire("stripe")(
  "sk_test_51ISZRjIv9jWTDXdNmPcjB4rO0obZtTaKmgkLGngBCooe39Bs6htDMa9KCX8Gp7PqrJhIiXjYoVcsVEY41fNiMBWK000a7z25GJ"
);

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency; "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
export.api = functions.https.onRequest(app);

//Example endpoint
