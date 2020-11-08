const express = require('express');
const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AaU8tQfmz1_MFDTKuf84yYERXvAZ6S4t3Wtgm6hiJi9Xhk5zYAqvY5pWbE5Mp-0cXnyx79WtJbIFYqxSLWDQKKL1Cqmpkp2M-qVRcMGu4GdDt2ZFJVrxhNW_49DazF4A_F0VBuKyV5_nntyEdZqUa5Oq9ZBj65GV',
  'client_secret': 'EAZ8aFDU4lHHLy1bQqULYWqznf3dBknXZW3AH__zFC0bUsEL_OSc_C6f4tXYYzBq20CkV58HlY5ALE7RkZHINtClivwxebua7X6Q9k62ffFoMTPfCaSS5TIwBXg6Db8AGUyR6RNbm-jHvqtikX7PsSqMO5vxuvKm'
});

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index'));

app.post('/pay', (req, res) => {
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/success",
        "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Let Me Sleep",
                "sku": "001",
                "price": "5.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "5.00"
        },
        "description": "Let Me Sleep sticker"
    }],
    "transactions": [{
      "item_list": {
          "items": [{
              "name": "Work in Progress",
              "sku": "002",
              "price": "5.00",
              "currency": "USD",
              "quantity": 1
          }]
      },
      "amount": {
          "currency": "USD",
          "total": "5.00"
      },
      "description": "Work in Progress sticker"
  }],
  "transactions": [{
    "item_list": {
        "items": [{
            "name": "Atlas Moth",
            "sku": "003",
            "price": "5.00",
            "currency": "USD",
            "quantity": 1
        }]
    },
    "amount": {
        "currency": "USD",
        "total": "5.00"
    },
    "description": "Atlas Moth sticker"
}]
};

paypal.payment.create(create_payment_json, function (error, payment) {
  if (error) {
      throw error;
  } else {
      for(let i = 0;i < payment.links.length;i++){
        if(payment.links[i].rel === 'approval_url'){
          res.redirect(payment.links[i].href);
        }
      }
  }
});

});

app.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "5.00"
        }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        res.send('Success');
    }
});
});

app.get('/cancel', (req, res) => res.send('Cancelled'));

app.listen(3000, () => console.log('Server Started'));
