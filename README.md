# EU Fucking Cookies

After messing with a few other "implementations" which did not work for me, I decided to try and write my own.

It was surprisingly easy, so if you find any bugs, let me know.

How to use:

See the `index.html` in the `build` folder. Basically it's like this:

```html
<html>
  <head>
    <!--blablabla-->

    <link rel="stylesheet" href="css/basic.css">
    <!-- It's easy to apply your own styles. You can add an additional stylesheet and just override the things you need-->
  </head>
  <body>
    <!--blablabla-->

    <script src="bundle.js"></script>
    <script>
      var cookieManager = new EUFuckingLaw({
        // Here come the options
        allowRevoke: true, // After the user has accepted the cookies, he shall be allowed to change his mind and revoke the access easily
        allowReject: true, // If set to false, the user will not see the "Decline" button, but only the "Got it" button

        // Here come the callbacks
        onCookiesAccepted: function () {
          // Set all our cookies here, thank the user for his approval by showing an alert or donate all your money to Donald Trump
        },
        onCookiesRejected: function () {
          // May only be called if allowReject is set to true
          // Hit the user with a hammer or redirect him to Pornhub
        },
        onCookiesRevoked: function () {
          // May only be called if allowRevoke is set to true
          // Remove all set cookies and hit the user with a hammer or redirect him to Pornhub
        }
      })
    </script>
</html>
```

Yo, that's it. Have a nice day.
