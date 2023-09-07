Angular Weather App Documentation

This documentation provides an overview of an Angular weather app project. The project consists of multiple components, services, and stylesheets to display weather information for different cities.
Table of Contents

    Project Structure
    Components
        Header Component
        Footer Component
        Main Content Component
    Services
        CityService
        CollectingDataService
    Routing
    Styling
    Usage

Project Structure <a name="project-structure"></a>

The project is organized as follows:

    src/app: Contains the main application files.
        app-routing.module.ts: Defines application routes.
        app.module.ts: The root module of the Angular application.
        app.component.ts: The root component of the application.
        header: Contains the header component files.
        footer: Contains the footer component files.
        main-content: Contains the main content component files.
        services: Contains the service files.

Components <a name="components"></a>
Header Component <a name="header-component"></a>

The Header Component is responsible for displaying the application header, including the app name and navigation links to select different cities.

    header.component.html: The HTML template for the header.
    header.component.ts: The TypeScript code for the header component.

Footer Component <a name="footer-component"></a>

The Footer Component displays a footer section with a link to Coursera for enhancing skills.

    footer.component.html: The HTML template for the footer.

Main Content Component <a name="main-content-component"></a>

The Main Content Component is the core of the application. It displays weather information for a selected city, including the current temperature, wind speed, relative humidity, and hourly forecasts.

    main-content.component.html: The HTML template for the main content.
    main-content.component.ts: The TypeScript code for the main content component.

Services <a name="services"></a>
CityService <a name="cityservice"></a>

The CityService is a shared service used to manage the selected city. It provides methods to change and retrieve the selected city using BehaviorSubject.

    city-service.service.ts: The TypeScript code for the CityService.

CollectingDataService <a name="collectingdataservice"></a>

The CollectingDataService is responsible for making HTTP requests to fetch weather data for specific cities (Berlin and Zemun in this case).

    collecting-data.service.ts: The TypeScript code for the CollectingDataService.

Routing <a name="routing"></a>

The application uses Angular Router to define routes for different cities. The default route redirects to the "Zemun" city.

    app-routing.module.ts: Defines the application routes.

Styling <a name="styling"></a>

The application uses Tailwind CSS for styling. The tailwind.config.js file contains the configuration for Tailwind CSS.
Usage <a name="usage"></a>

To use the Angular Weather App:

    Install the necessary dependencies using npm or yarn.

    bash

npm install

Start the Angular development server.

bash

    ng serve

    Access the application in your browser at http://localhost:4200.

You can select a city from the header navigation to view weather information for that city in the main content section. The data is fetched from external APIs using the CollectingDataService. The selected city is managed by the CityService.

Feel free to customize and extend the application as needed for your weather forecasting needs.
