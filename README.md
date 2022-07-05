![Create react app](https://img.shields.io/badge/build_with-create_react_app-09D3AC?style=for-the-badge&logo=Create-React-App)
![NodeJs](https://img.shields.io/badge/Node.js-17.0.2-339933?style=for-the-badge&logo=Node.js)
![Redux](https://img.shields.io/badge/React_Redux-8.0.1-764ABC?style=for-the-badge&logo=Redux)

# HRnet

![HRnet](public/readMe/logo.svg)

_**HRnet**_ is an internal web application of the **Wealth Health** company. The goal here was to move from a [jQuery application] (https://github.com/mayccos/HRnet.git) to a React application. Four jQuery plugins were present in the initial application :

-   [jQuery DateTimePicker](https://github.com/xdan/datetimepicker)
-   [jQuery Select](https://github.com/jquery/jquery-ui/blob/main/ui/widgets/selectmenu.js)
-   [jQuery DataTables](https://github.com/DataTables/DataTables)
-   [jQuery Modal](https://github.com/kylefox/jquery-modal)

All of them had to be replaced by a **React** component :

-   [react-table](https://www.npmjs.com/package/react-table)
-   [react-date picker](https://www.npmjs.com/package/react-datepicker)
-   [modal ](https://github.com/beckerjean-christophe_14_19052022/src/components/Modal/index.jsx): For the modal, we created a basic react component that could be improved in the future;
-   [lycant-library ](https://www.npmjs.com/package/lycant-library): We created our dropdown library which is in its first version.

## Prerequisites

-   [NodeJs (version 17.0.2)](https://nodejs.org/en/)
-   [Yarn (version 1.22.11)](https://yarnpkg.com/)
-   Visual Studio Code or another IDE of your choice

## Installation

-   Fork and clone the Front-end APP on your computer: git clone https://github.com/mayccos/beckerjean-christophe_14_19052022.git
-   Install the dependencies with yarn install or npm install

## Usage

-   Run the App, which will then listen on port 3000 by default with "yarn start" or "npm start"

## Author information

Becker Jean-Christophe

-   Study at OpenClassrooms
