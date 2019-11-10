# Laravel Blog

A simple blog for demonstration purpose. Based on Laravel 5.8

## Requirements

- Laravel 5.8
- PHP >= 7.1.3
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Ctype PHP Extension
- JSON PHP Extension
- BCMath PHP Extension


## Installation

```
git clone https://github.com/milon/laravel-blog.git blog
cd blog
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan db:seed --class=DummyDataSeeder
```

## Using
1. Login data: user: contact@milon.im | password: password
2. Go to the "Posts" page and press "edit" button
3. Press "Insert Pixabay Button"

