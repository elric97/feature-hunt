<p align="center">
<img width="657" alt="Feature Hunt" src="https://user-images.githubusercontent.com/11090612/135201949-a1f1de9d-f80a-4adf-a7ac-886c77c4c226.png">
</p>

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/6ce3145d4fd9471594d957b90167c2d5)](https://www.codacy.com/gh/elric97/feature-hunt/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=elric97/feature-hunt&amp;utm_campaign=Badge_Grade)
[![DOI](https://zenodo.org/badge/426076067.svg)](https://zenodo.org/badge/latestdoi/426076067)
[![GitHub license](https://img.shields.io/github/license/shahrk/feature-hunt)](https://github.com/shahrk/feature-hunt/blob/main/LICENSE)
[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-blue)](https://www.javascript.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Docker](https://img.shields.io/badge/Containerized-Docker-blue)](https://docs.docker.com/compose/)
[![GitHub issues](https://img.shields.io/badge/issues-6%20open-green)](https://github.com/elric97/feature-hunt/issues)
[![GitHub closed issues](https://img.shields.io/badge/issues-12%20closed-red)](https://github.com/elric97/feature-hunt/issues?q=is%3Aissue+is%3Aclosed)
[![Build](https://github.com/CSC510-Group-25/feature-hunt/actions/workflows/nodejs.yml/badge.svg)](https://github.com/elric97/feature-hunt/blob/main/.github/workflows/nodejs.yml)
[![Tests](https://github.com/CSC510-Group-25/feature-hunt/actions/workflows/nodejs_tests.yml/badge.svg)](https://github.com/elric97/feature-hunt/blob/main/.github/workflows/nodejs_tests.yml)
[![Coverage Status](https://coveralls.io/repos/github/CSC510-Group-25/feature-hunt/badge.svg?branch=main)](https://coveralls.io/github/elric97/feature-hunt)
[![CodeQL](https://github.com/CSC510-Group-25/feature-hunt/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/elric97/feature-hunt/blob/main/.github/workflows/codeql-analysis.yml)
[![Pylint](https://github.com/CSC510-Group-25/feature-hunt/actions/workflows/pylint.yml/badge.svg)](https://github.com/elric97/feature-hunt/blob/main/.github/workflows/pylint.yml)
[![Netlify](https://img.shields.io/netlify/dbecc37c-c273-4b45-bfff-3fd33d20cae0)](https://feature-hunt-g29.netlify.app/)

Have a look at [Phase3-Video](https://youtu.be/watch?v=TEacECgr1qk)
## INTRODUCTION ⚡️

Stop letting ideas slip through the cracks. Collect, analyze, and organize feedback and feature requests in your product's feedback board to make better product decisions.  
  
Feature Hunt is a platform that allows you to do just that. Users can share/vote/discuss feature requests and product owners can organize them to make better product decisions 🎯.

### Watch this short video to know more:

[<img src="https://github.com/elric97/feature-hunt/blob/main/docs/phase_3_images/video_thumbnail.png">](https://youtu.be/watch?v=TEacECgr1qk)

The following technologies were used for the development of this project:  

<p align="left">
  <a href="https://www.reactjs.org" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="react" width="30" height="30"/>
  </a>
  <a href="https://www.javascript.com" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="js" width="30" height="30"/>
  </a> 
  <a href="https://www.mongodb.com" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" alt="mongo" width="30" height="30"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg" alt="js" width="30" height="30"/>
  </a>
  <a href="https://www.python.org" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-plain.svg" alt="python" width="30" height="30"/>
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS" target="_blank"> 
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg" alt="css" width="30" height="30"/>
  </a>
</p>  

React (P.S. we use hooks)  
JavaScript  
Python3  
Flask  
MongoDB  
HTML  
CSS  

We have started using [MaterialUI] for styled components. 

For more information, visit our [wiki page on tools, hooks, and services](https://github.com/CSC510-Group-25/feature-hunt/wiki/Tools,-Hooks,-Services).

## Preview

The **Home** Page - It has a list of different products for which you can provide feature requests
<img width="1200" alt="Screen Shot 2021-09-19 at 5 24 43 PM" src="https://user-images.githubusercontent.com/11090612/133943516-d55244b5-9f5e-4166-a18e-af35cf020146.png">  

The **Product** Page - It has a list of feature requests added by users
<img width="1148" alt="Screen Shot 2021-09-19 at 5 25 04 PM" src="https://user-images.githubusercontent.com/11090612/133944169-5529ea32-40c8-4786-b198-6e5c1eecd64f.png">  

The **Comment** Section - Each product page has a comment section (Powered by [utteranc.es](https://utteranc.es))
<img width="830" alt="Screen Shot 2021-09-19 at 5 25 15 PM" src="https://user-images.githubusercontent.com/11090612/133943532-1a834e0e-2ea5-477f-a09f-122b05f7de7a.png">

### Newest Features:
You can now create an account and mange the products you are a part of! This includes - 

**Project Submittal** - You can instantly add new products to be reviewed by the community. 
<img width="1200" alt="Screen Shot 2021-09-19 at 5 24 43 PM" src="https://github.com/CSC510-Group-25/feature-hunt/blob/group25-improvements/docs/component-screenshots/Screenshot%202021-11-04%20submitform.png">  

**Tag Management** - You can now give feature feedback though tags. Want to say that you are working on a feature? Add a `IN DEVELOPMENT` tag!
<img width="1200" alt="Screen Shot 2021-09-19 at 5 24 43 PM" src="https://user-images.githubusercontent.com/78971563/140238752-a6ebe8ab-942f-462e-94b6-5d3d4064115e.png"> 

### Phase 3 Enhancements :
We have fixed various bugs in the Project and we have also added new features. To know more details please check our [Delta Document](https://github.com/elric97/feature-hunt/blob/main/Phase_3_Docs/deltaDocument.md)
## Getting Started
#### Before you get started, if you are using Windows, please visit our [wiki page on Windows development](https://github.com/CSC510-Group-25/feature-hunt/wiki/How-to-develop-with-Windows).
There are two ways to install and develop for featurehunt 

1. Using Docker

2. Using Local machine

## Installation With Docker.

#### 1.  Follow the steps to install Docker for your OS
```
https://docs.docker.com/get-docker
```
#### 2. Git clone the Repository using 
```
git clone https://github.com/elric97/feature-hunt.git
```

#### 3. Run the following Commands
```
cd feature-hunt

docker-compose up --build (This is only needed when you're running the project for the first time. Upon building once, you can run this command without providing --build option)
```

This will run two docker containers. The frontend will run on port 3000 and the backend will run on port 5000

## Installation in Local Machine without Docker.

### First Time Setup

#### 1. Git clone the Repository using 
```
git clone https://github.com/elric97/feature-hunt.git
```
#### 2. Run the following Commands
```
cd feature-hunt
```
>Optional: In the project directory run `git config --local core.hooksPath hooks` to make sure you have access to the Git Hooks.
Run the following commands in order:

#### 3. `npm install`

Installs the dependencies for the React App

#### 4. `pip install -r backend/requirements.txt`

Installs the requirements for the Flask API

#### 5. `yarn start`

Runs the frontend React app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

To run backend flask api in development mode:  
 
 export DB_PATH='Your mongoDb connection URL'

#### 6. `yarn start-api`

Runs the backend flask API in development mode.\
The API runs on [http://localhost:5000](http://localhost:5000).

Requests made to [http://localhost:3000](http://localhost:3000) that don't exist on the react server are automatically forwarded to this API


## Connecting with a Database

> We use Mongo Cloud Atlas for our project as we find it very convenient. You may choose to use a local mongodb instance or run a docker container

#### Check out our [tutorial](https://github.com/CSC510-Group-25/feature-hunt/wiki/Getting-Started-with-Database-Development:-Connection-and-Setup) to get started with creating and connecting to a database.

> You can also connect to the database from your shell using [mongosh](https://docs.mongodb.com/mongodb-shell/)

#### Update :
> Connecting with DB - We have introduced an environment variable DB_PATH, make sure that you set it to your local or deployed environment

## Other Available Scripts

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Applies Prettier to all .js files.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Deployment
We used Heroku and Netlify for deploying the application.
We have deployed our application's front end you can check it out [here]( https://feature-hunt-g29.netlify.app/)
, the application's backend can be found [here](https://feature-hunt-final.herokuapp.com/).

Check out our [wiki page](https://github.com/elric97/feature-hunt/wiki/Deployment) to understand how to deploy the application.
## Future Scope
We believe in the ability to add new features in any project (including our own). 

#### Check out our ideas for the future: [Future scope](https://github.com/elric97/feature-hunt/projects/1)

## Contributors 🎯

<table>
  <tr>
    <td>Group 27</td>
    <td align="center"><a href="https://github.com/shahrk/"><img src="https://avatars.githubusercontent.com/u/11090612?v=4" width="80px;" alt=""/><br /><sub><b>Raj Shah</b></sub></a></td>
    <td align="center"><a href="https://github.com/Nirav1929/"><img src="https://avatars.githubusercontent.com/u/11133468?v=4" width="80px;" alt=""/><br /><sub><b>Nirav Patel</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/Parth59/"><img src="https://avatars.githubusercontent.com/u/22288099?v=4" width="80px;" alt=""/><br /><sub><b>Parth Kanakiya</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/mithildave/"><img src="https://avatars.githubusercontent.com/u/26930183?v=4" width="80px;" alt=""/><br /><sub><b>Mithil Dave</b></sub></a><br /></td>
    <td align="center"><a href="https://www.github.com/BhargavJethwa"><img src="https://avatars.githubusercontent.com/u/70560970?v=4" width="80px;" alt=""/><br /><sub><b>Bhargav Jethwa</b></sub></a><br /></td>   
  </tr>
  
  <tr>
    <td>Group 25</td>
    <td align="center"><a href="https://github.com/etracey7/"><img src="https://avatars.githubusercontent.com/u/78971563?v=4" width="80px;" alt=""/><br /><sub><b>Emily Tracey</b></sub></a></td>
    <td align="center"><a href="https://github.com/peeyush10234/"><img src="https://avatars.githubusercontent.com/u/10905673?v=4" width="80px;" alt=""/><br /><sub><b>Peeyush Taneja</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/jhnguye4/"><img src="https://avatars.githubusercontent.com/u/42051115?v=4" width="80px;" alt=""/><br /><sub><b>Jonathan Nguyen</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/snapcat/"><img src="https://avatars.githubusercontent.com/u/89357283?v=4" width="80px;" alt=""/><br /><sub><b>Leila Moran</b></sub></a><br /></td>
    <td align="center"><a href="https://www.github.com/shraddhamishra7"><img src="https://avatars.githubusercontent.com/u/7471821?v=4" width="80px;" alt=""/><br /><sub><b>Shraddha Mishra</b></sub></a><br /></td>
  </tr>
  
  <tr>
    <td>Group 29</td>
    <td align="center"><a href="https://github.com/palvitgarg99/"><img src="https://avatars.githubusercontent.com/u/16212546?v=4" width="80px;" alt=""/><br /><sub><b>Palvit Garg</b></sub></a></td>
    <td align="center"><a href="https://github.com/elric97/"><img src="https://avatars.githubusercontent.com/u/17125417?v=4" width="80px;" alt=""/><br /><sub><b>Rachit Sharma</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/aditi12200"><img src="https://avatars.githubusercontent.com/u/55187770?v=4" width="80px;" alt=""/><br /><sub><b>Aditi Bhagwat</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/anumitgarg"><img src="https://avatars.githubusercontent.com/u/32408402?v=4" width="80px;" alt=""/><br /><sub><b>Anumit Garg</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/ShreeSub"><img src="https://avatars.githubusercontent.com/u/67685445?v=4" width="80px;" alt=""/><br /><sub><b>Shree Lakshmi Ramasubramanian</b></sub></a><br /></td>
  </tr>
</table>
