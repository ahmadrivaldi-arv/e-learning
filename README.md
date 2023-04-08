    # web technologies used
|tool| version  | type| 
|--|--| -- |
| Laravel | 10.x  | framework |
| Inertia | 1.x | adapter |
| ReactJs | >=16.9| library |
| Vite | 4.2.x | assets bundling |

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

