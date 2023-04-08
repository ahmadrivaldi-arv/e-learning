
|tool| version|
|--|--|
| Laravel | 10.x|
| Inertia | 1.x |
| ReactJs | >=16.9|
| Vite | 4.2.x |

using [ant-design](https://ant.design) as React UI library

welcome to the e-learning project! To start contributing, fork this project to your github account.

and then run this command to install all dependencies

# Backend Setup

#### install laravel dependencies
````shell
composer install
````
#### create .env file
```shell
# macos/linux
cp .env-example .env

#windows
copy .env-example .env
```

#### generate key

```shell
php artisan key:generate
```
#### start the server
if you are using valet just type your project name to browser e.g `http://e-learning.test`

if not using valet just run this command
```shell
php artisan serve
```
___

# Frontend Setup

#### using npm
```shell
# macos / linux
npm install && npm run dev
#or
yarn && yarn run dev
    
#windows
npm install; npm run dev
#or 
yarn; yarn run dev
```

