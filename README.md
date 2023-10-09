# Getting Started

## Project Structure

This project is built in screaming architecture with hexagonal principles. It means that we have a features folder that contains all the bussines logic and methods (domain and application layer) and more folders that are structure to suport our bussines logic. The folder structure is as follows:

### app
For now only contains app.tsx file. But it's important to keep this folder if we wont to add redux or global context in the future, pagination or if we need load any content before home page appears.

### components
Contains our generic components. In this folder we would create the components that we want to use. Even if we want import a component from 3rd party never import this directly where it is used because if we want to change the library in the future, we would only have to make changes in this file and not in all the project. In fact we could put this folder in features, because it will only be consumed by some module but for basic convetion remains separated.

### features 
This is the domain and application layer. **The most important part of our application** as it contains the bussines logic. For example, to manage the list of items is bussines logic core. It doesn't matter which table or render method we use. If we want we could add Context in this folders easily.

### pages
Here are the page files, but they contain no logic. They are like the page files of NEXTjs and only renders components from features folder.

### services
Contains API generic functions consumed by features. It's a adapter layer. If in the future we want change the fetching data method to axios (or whatever), or we need to fetch data from GraphQL, for example, it will be easy to change. Moreover if api response changes it is easy to change too.

### infraestructure
It isn't a Pandora's box. At this moment only contains the implementation of api call, but we can add custom css files for generic styles, a localstorage file, traductions, and generic functions used in all project for example.

## Legal Disclaimer