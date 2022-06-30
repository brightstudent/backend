# Date your food
This is an app that helps the users visually decide which restaurant to go to. At the moment the app has the basic functionality to reject or save a restaurant to a favorites list. You get to see one restaurant at a time. Each restaurant is presented as a carousel of pictures that you can navigate bij pressing on the left or the right half of the picture. 
Ideally the app would also have a function to set your preferences and filter the restaurants based on location or diet. But unfortunately that’s a bit complicated at the moment. 

## The feature
As mentioned before, the app only has only the functionality switch between restaurants and save your favorites in a separate list. 

## Let's install and run the app

the first step to use the is, is cloning this repo. You can do this by typing the following command in your terminal:

```
$ git clone https://github.com/brightstudent/backend
```

If you're using a mac like me, git will be already installed on your device. You can check this by typing in your terminal: 
```
$ git --version 
```
If you don’t have it installed already, it will prompt you to install it.

If you're on a Windows machine, visit <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git> for an installation guide.

This app comes with a bunch of npm packages, like expressjs. Which is the framework that the app is build on. Without it the pages won't load. So the next step is to install NPM. This can be done by typing the following command in your terminal: 

```
$ npm install
```

And now the moment of truth. To run the app, just type this commant in your terminal: 

```
$ npm start
```

Congrats, you are almost set. 

## Database connection

> I use mongoDB as my database. So If you want to have a functional application, you'll have to create your own account. 

If you already have an account, or if you created an accout. You will need to shield your information. Therefor you need to install [dotenv](https://www.npmjs.com/package/dotenv)

### Install
To install this package type the following in the command line. 

```
npm i dotenv --save
```

If the installation is succesful you can create a .env file with the following lines of code. 
> I have already created a template for this file `(envexample)`. But you'll need to change the the name to `.env` en don't forget to fill in your own information.

```
PORT=3000
DB_HOST= hostexample
DB_NAME= name-example
DB_USERNAME= username-example
DB_PASS= password-example
```


## Author
Zaid El Boustani
## License 
Copyright © 2022.

This project is [MIT](https://choosealicense.com/licenses/mit/#suggest-this-license) licensed.