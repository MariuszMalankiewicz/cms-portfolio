# CMS Portfolio

This is a CMS application for managing a portfolio, built using Vue.js, Laravel 11, and Tailwind CSS. The project aims to enable easy and intuitive management of portfolio content, providing full responsiveness and a modern user interface.

## Features

- **Login and Authentication:** Implementation of a login system for the administrator and authentication via Sanctum.
- **Dynamic Content Rendering:** Creation of a SPA architecture for dynamically rendering portfolio pages.
- **Responsiveness and UI/UX:** Using Vue.js to create a modern, responsive user interface with a focus on UX/UI using Tailwind CSS.
- **Data Management:** Optimization of queries and MySQL database structure.
- **RESTful API:** Creation of an API for file and image uploads and communication between the frontend and backend.
- **API Testing:** Testing the API and data flows using Postman to ensure endpoint functionality.
- **TDD and CI/CD:** Applying TDD for developing key features and implementing CI/CD to automate testing and deployment processes.

## Technologies

- **Frontend:** Vue.js 3.5, TypeScript 5,6,  Tailwind CSS 3.4
- **Backend:** Laravel 11, PHP 8.2
- **Database:** MySQL 8.0
- **API:** RESTful API, file upload
- **Version Control::** Git, GitHub
- **Testing:** Postman, TDD, PHPUnit 11.4
- **CI/CD:** Github actions
- **Bundler** Vite 6.0

## Live

Check out the live version of the project: [Live Version Link](https://mariuszmalankiewicz.pl/)

## Project Structure

The project is divided into two main modules:

- **Frontend:** The module responsible for the user interface, built using Vue.js, TypeScript and Tailwind CSS.
- **Backend:** The module responsible for the application logic and API, built using Laravel 11.

## Project Requirements
##### Node.js:
- Version 16.x or higher (recommended)
- npm (Node Package Manager) comes bundled with Node.js and is used to install frontend dependencies.

##### Composer:
- Version 2.x or higher (recommended)
- Composer is used to install and manage PHP dependencies for the backend.


## Installation

Instructions for installing and setting up the project:

1. Clone the repository to your machine:
   ```bash
   git clone https://github.com/MariuszMalankiewicz/cms-portfolio.git
   ```
2. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
   ```
 3. Install backend dependencies:
    ```bash
    cd backend
    composer install
    copy .env.example .env
    php artisan key:generate
    ```
4. Configure the .env file in the backend folder according to your requirements.

5. Run database migrations:
    ```bash
    php artisan migrate
    ```

6. Start the local server:
    ###### Frontend:
    ```bash
    cd frontend 
    npm run dev
    ```
    ###### Backend:
    ```bash
    
    cd backend
    php artisan serve
    ```

## License
This project is licensed under the MIT License.