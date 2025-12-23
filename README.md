# The Spec
[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen)](https://ekich.github.io/the-specs)

[![CI](https://github.com/eKICH/the-specs/deployments)]

The Specs is an electronic device specification platform built with Angular 17. The application provides a structured way to browse, categorize, and view deep technical details for various gadgets, utilizing a robust routing system and a modular architecture.

The project is fully automated and hosted via GitHub Pages, utilizing GitHub Actions for continuous integration and deployment.

# Tech Stack
- **Framework**: Angular 17 (NgModule-based architecture)

- **Data Management**: Angular In-Memory Web API

- **Routing**: Angular Router for deep-linking and view navigation

- **Styling**: SCSS

# Architecture & Features
Components
Navigation: Header and Footer components provide a consistent layout across all routes.

Home Page: A landing experience featuring:

Banner: High-impact hero section.

Categories: Quick filtering for device types (e.g., Smartphones, Laptops).

Testimony: User feedback and reviews.

Product Catalog: * ProductComponent: Displays the collection of devices.

ProductDetailsComponent: Deep-dive view for specific hardware specs (CPU, RAM, Display, etc.).

Services & Routing
ProductService: Centralized logic for fetching device data.

Routing: Implements a clean URL structure (/home, /products, /products/:id) for a seamless single-page application experience.

# CI/CD & Deployment
This project uses GitHub Actions to automate the deployment process. Every time code is pushed to the master branch:

The environment is set up with Node.js.

Dependencies are installed via npm.

The Angular application is built using the --base-href flag.

The production-ready files are automatically deployed to the gh-pages branch.



