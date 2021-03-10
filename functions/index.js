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

// - Listen command
export.api = functions.https.onRequest(app)
