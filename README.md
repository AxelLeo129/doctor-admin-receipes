# pharmazone.app

Laravel Proyect / Vuex

Plataforma Web de gestión de cursos en video por suscripción, desarrollo en Laravel



composer install

cp .env.example .env

Cambiar usuario y Password de la base de datos

php artisan key:generate


sudo chmod -R o+rw bootstrap/cache

sudo chmod -R o+rw storage

php artisan migrate

php artisan passport:install



npm install

npm audit fix (si da problema de librerias obsoletas)

npm run watch (siempre antes de las siguientes instrucciones)

npm run prod (si es en ambiente de Produccion)

npm run dev (si es en ambiente de desarrollo)

php artisan serve (solo en ambiente local)

Es necesario cambiar la direccion de ip al dominio del servidor (no olvidar)