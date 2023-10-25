# Phyxable Code Challenge

## Introduction

This is a code challenge to create a simple application which will be a bottom tab view for mobile screens and for web (Desktop) it will be a sidebar view. Create a card component to show the the title , description , image and id of the books stored in json format . The books data is api/books.json file.

The sidebar/ bottom tab has been taken care of. You just need to create the card component and show the data in the card component
The api is already created using nest cli.

No need to create connect to any database. Just use the json file as the database.

## Requirements

- node 18 or above
- yarn (npm install -g yarn)
- expo-cli (npm install -g expo-cli)

## Installation

- Clone the repo
- cd api
  - yarn install
  - yarn dev
    - This will start the api server on port 3000
    - swagger docs will be available on <http://localhost:3000/docs>
- cd client
  - cp .env.example .env.local
  - yarn install
  - yarn start
  - npx expo install
  - yarn web (for web)
  - yarn android (for android)
  - yarn ios (for ios)

## Submission

- Fork this repo
- Create a branch with your name
- Push your code to the branch
- Create a pull request to the main branch
