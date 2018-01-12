/**
 * Created by ***
 */
var express = require('express');
var app = express();

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html lang="">
    <head>
      <meta charset="utf-8">
      <meta name="description"
            content="An Amaze UI Touch template that helps you build fast, modern mobile web apps.">
      <meta name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
      <title>Amaze UI Touch Starter Kit</title>
    
      <!-- Set render engine for 360 browser -->
      <meta name="renderer" content="webkit">
    
      <!-- No Baidu Siteapp-->
      <meta http-equiv="Cache-Control" content="no-siteapp"/>
    
      <link rel="icon" type="image/png" href="i/favicon.png">
    
      <!-- Add to homescreen -->
      <link rel="manifest" href="manifest.json">
    
      <!-- Fallback to homescreen for Chrome <39 on Android -->
      <meta name="mobile-web-app-capable" content="yes">
      <meta name="application-name" content="Web Starter Kit">
      <link rel="icon" sizes="192x192" href="i/touch/chrome-touch-icon-192x192.png">
    
      <!-- Add to homescreen for Safari on iOS -->
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black">
      <meta name="apple-mobile-web-app-title"
            content="Amaze UI Starter Kit">
      <link rel="apple-touch-icon" href="i/touch/apple-touch-icon.png">
    
      <!-- Tile icon for Win8 (144x144 + tile color) -->
      <meta name="msapplication-TileImage"
            content="i/touch/ms-touch-icon-144x144-precomposed.png">
      <meta name="msapplication-TileColor" content="#0e90d2">
    
      <!-- SEO: If your mobile URL is different from the desktop URL, add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones -->
      <!--
      <link rel="canonical" href="http://www.example.com/">
      -->
    </head>
    <body>
    <div class="root" id="root">
    </div>
    <script type="text/javascript" src="//localhost:3000/js/app.js"></script>
    </body>
    </html>
      `
}

app.use(function (req, res) {
  res.send(renderFullPage())
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://localhost:" + port)

})