# E-commerce Project

An e-commerce web application built with Vue.js and Vite that provides a seamless online shopping experience, including product browsing, sorting, cart management, and cart.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Project Overview
This project is a single-page application (SPA) that simulates a fully functional e-commerce platform. Users can view products, sort them by cartegories and price, add items to their cart, and navigate between different pages using Vue Router and Nested Vue Router. This is the final project for the frontend bootcamp at CodeOp cohort FEPT08 2024.

## Features
- **Responsive Design**: 
Mobile-first design scaling across devices.
- **Product Management**:
  - View a list of products filtered by categories: all, jewelery, electronics, men's clothing and woman's clothing.
  - Sort products by price (high to low or low to high).
  - Clear filters to reset the product list.
- **Shopping Cart**:
  - Add or remove products.
  - Display the total number of items in the cart.
  - Total amount to be paid, including shipping costs.
  - Button to simulate the checkout and payment process, storing buyer's information in an array.
- **Navigation**:
  - Navigate to products, cart, and user profile pages.
  - Persistent navigation bar.
  - Links for redirecting to social networks.
- **State Management**: Vue and Pinia.

## Tech Stack
- **Figma**: for the design.
- **Vue.js**: framework for building user interfaces.
- **Tailwind CSS**: for responsive styling and utility-first design.
- **Pinia**: for store integration for managing global state.
- **Font Awesome**: icons for navigation.
- **Fake Store API**: integration for fetching products -> https://fakestoreapi.com/

### Build Tools
- **Vite**: build tool.

## Setup and Installation

### Dependencies:
- Vue 3
- Vite
- Tailwind CSS
- Font Awesome
- Poppins font family -> https://fonts.google.com/specimen/Poppins

### Step by Step
```bash
#1 clone repository
git clone https://github.com/AleAzp/FEPT08-Ecommerce.git
cd FEPT08-Ecommerce

#2 Install dependencies
npm install

#3 Run the development server:
npm run dev