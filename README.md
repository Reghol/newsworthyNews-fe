# NewsWorthy News

## About

NewsWorthy News is a social news aggregation site developed with React. The site has been developed with mobile-first design principles in mind.

You can find the hosted version of this repository [here](https://newsworthy-news.netlify.com/)

NewsWorthy News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can remove any comments which they have added.

All data comes from the NewsWorthy News API server created by me and available [here](https://newsworthy-news-nc.herokuapp.com/api/) and git repository [here](https://github.com/Reghol/Newsworthy-News) .

## IMPORTANT

You will have to log in (an existing user has been set up for ease of us, password is the same for all users) to test all the features of the site.

## Setup

You will need Node.js, npm and git installed before being able to run this project.

To check if Node.js is installed on your machine open a terminal window and enter:

```
\$ node -v
```

If you do not already have Node.js installed follow the instructions on this guide.

To check if npm is installed on your machine enter this command in you terminal window:

```
\$ npm -v
If you do not have npm already installed follow this guide to set it up.

```

To check if git is installed on your machine enter the following in your terminal window:

```
\$ git --version
```

If you do not already have git installed on your machine follow this guide.

## Prerequisites

Dependencies used in the project:

```
"@fortawesome/fontawesome-svg-core": "^1.2.26",
"@fortawesome/free-solid-svg-icons": "^5.12.0",
"@fortawesome/react-fontawesome": "^0.1.8",
"@reach/router": "^1.2.1",
"@testing-library/jest-dom": "^4.2.4",
"@testing-library/react": "^9.3.2",
"@testing-library/user-event": "^7.1.2",
"axios": "^0.19.0",
"netlify-cli": "^2.21.0",
"prettier": "^1.19.1",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-modal": "^3.11.1",
"react-scripts": "3.3.0"
```

## Installation

To run this project you will need to clone this repository onto your local machine.

```
\$ git clone https://github.com/Reghol/newsworthyNews-fe
```

Navigate inside the folder and install all dependencies by entering the following commands on your terminal window:

```
$ cd news-app
$ npm install
```

To run the application locally enter:

```
\$ npm start
```

The application will run on http://localhost:3000.

Version
1.0

Author
Jakub Reginia
