# Project Code

# Frontend
To run the user interface for our application, download the 'frontend' folder that is within the 'project' folder. To run the user interface, node.js must be installed on the local device (intsall from here: https://nodejs.org/en/download/). Then, from the terminal, navigate into the 'frontend' folder and run the command:
```
npm install
```
This will install all the required JavaScript packages needed to run the program. Then in the terminal, run the command:
```
npm start
```
This will run the code for the website locally and open it in a tab in the browser. This code represents what the website would look like to a user that is already logged in. Therefore, this application does not yet include features such as login or editing of profiles.

# R Code
We have made 2 different Shiny App: The Crime Statistics Dashboard, and Indexes and Corridor.  Shiny is an R package that makes it easy to build interactive web apps straight from R. Each app has 2 main parts: UI and Server. The UI section is used to set the layout of the app. The Server section is where the data is transformed and plots, maps, and visualisations are created. For both the apps, we have used 15 different R packages to create the plots, and dashboard.  
