<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

    <title>PHARMAZone</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset(mix('css/main.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/iconfont.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/material-icons/material-icons.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/vuesax.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/prism-tomorrow.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">
    <!-- Favicon -->
    {{-- <link rel="shortcut icon" href="{{ asset('images/logo/favicon.png') }}"> --}}

    {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script> --}}
    <link rel="apple-touch-icon" sizes="180x180" href="https://pharmazone.app/images/logo/apple-touch-icon.png"/><link rel="icon" type="image/png" sizes="32x32" href="https://pharmazone.app/images/logo/favicon-32x32.png"/><link rel="icon" type="image/png" sizes="194x194" href="https://pharmazone.app/images/logo/favicon-194x194.png"/><link rel="icon" type="image/png" sizes="192x192" href="https://pharmazone.app/images/logo/android-chrome-192x192.png"/><link rel="icon" type="image/png" sizes="16x16" href="https://pharmazone.app/images/logo/favicon-16x16.png"/><link rel="manifest" href="https://pharmazone.app/images/logo/site.webmanifest"/><link rel="mask-icon" href="https://pharmazone.app/images/logo/safari-pinned-tab.svg" color="#1a237e"/><link rel="shortcut icon" href="https://pharmazone.app/images/logo/favicon.ico"/><meta name="apple-mobile-web-app-title" content="PHARMAZone"/><meta name="application-name" content="PHARMAZone"/><meta name="msapplication-TileColor" content="#e5e7e9"/><meta name="msapplication-TileImage" content="https://pharmazone.app/images/logo/mstile-144x144.png"/><meta name="msapplication-config" content="https://pharmazone.app/images/logo/browserconfig.xml"/><meta name="theme-color" content="#ffffff"/>
  </head>
  <body>
    <noscript>
      <strong>Lo sentimos, estamos en mantenimiento.</strong>
    </noscript>
    <div id="app">
    </div>

    <!-- <script src="js/app.js"></script> -->
    <script src="{{ asset(mix('js/app.js')) }}"></script>
    {{-- <script src='https://app.efectiva.merke.app/chats/chat_serviceResponsive.js'></script> --}}
  </body>
</html>
