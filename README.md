# pharmazone.app

Laravel Proyect / Vuex

Plataforma Web de gestión de cursos en video por suscripción, desarrollo en Laravel


-- cp .env.example .env

-- Cambiar usuario y Password de la base de datos


cp ../ph.x/.env .

mkdir public/images/productos

mv ../ph.x/public/images/productos/* public/images/productos/.

sudo chmod -R o+rw bootstrap/cache

sudo chmod -R o+rw storage

sudo chmod -R o+rw public/images/productos

-- Cambiar direccion en todos los archivos http://127.0.0.1:8000 por https://pharmazone.app


composer install

php artisan key:generate

php artisan migrate

php artisan passport:install



npm install

npm audit fix (si da problema de librerias obsoletas)

npm audit fix --force (si aun asi hay problema)


npm run watch (siempre antes de las siguientes instrucciones)


npm run prod (si es en ambiente de Produccion)

npm run dev (si es en ambiente de desarrollo)

php artisan serve (solo en ambiente local)

Es necesario cambiar la direccion de ip al dominio del servidor (no olvidar)