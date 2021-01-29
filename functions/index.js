const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hv9AFIudlHVyTegZ8E4QmZ94hlXoyf0LqMlQtVy16vEY45Am344hjBesZ0OeW6nl8NAUSqqLetGsm89o7BikTlX002ccODLtS');

//Setup Express API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
//Send and Receive Data in JSON
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example API
// http://localhost:5001/matterhorn-site/us-central1/api

