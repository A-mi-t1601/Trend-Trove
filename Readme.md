# Trend-Trove GitHub Documentation

Welcome to the Trend-Trove GitHub Documentation! and this repository contains the source code and documentation.

## Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Key Features](#key-features)
4. [Project Structure](#project-structure)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Contributing] (#contributing)

## Introduction

Trend-Trove is a full-stack E-Commerce application designed to provide a seamless shopping experience for users while offering robust administrative controls. The application is built using modern technologies to ensure performance, scalability, and a smooth user interface.

## Tech Stack

Trend-Trove's Tech Stack comprises the following components:-

## Frontend

- **TypeScript & ReactJS:**:- For building a dynamic and type-safe user interface.
- **Redux & RTK Query**: For state management and efficient data fetching.
- **SCSS**: For scalable and maintainable stylesheets.

## Backend

- **NodeJS & ExpressJS**: For building the server and handling API requests.
- **MongoDB**: As the database solution for storing and managing application data.
- **Stripe**: Integrated for secure payment processing.
- **Firebase**: Used for user authentication and authorization.

## Key Features

### User Interface

- **Responsive Design**: The application is styled using SCSS, ensuring a modern and responsive design that works across all devices.
- **Product Filtering**: Users can filter products by price (high to low, low to high) and by category, making it easy to find exactly what they need.
- **Shipping Form**: A dedicated shipping form allows users to enter their shipping details, which redirects them to a secure payment gateway powered by Stripe.
- **Authentication**: Firebase is integrated for secure and reliable user authentication, including sign-up, login, and password management.

### Admin Interface

- **Dashboard**: The admin dashboard provides visual insights into the application’s data using Line, Pie, and Bar charts. These charts help measure product and user ratios, track sales, and more.
- **User & Order Management**: Admins have a separate route where they can manage users and track their shopping data. This includes tracking order statuses like shipping, processing, and delivery.
- **Custom Admin Forms**: Admins can use specialized forms to manage and analyze user shopping data, ensuring that all processes are up-to-date and efficient.

## Project Structure

### Routes

- **User Routes**: Provide users with access to the shopping interface, filtering options, and the checkout process.
- **Admin Routes**: Restricted routes that allow admins to manage products, users, and view detailed analytics.

### Components

- **Product Filtering**: Components that allow users to filter products based on price and category.
- **Charts**: Line, Pie, and Bar charts integrated into the admin dashboard for data visualization.

### Forms

- **Shipping Form**: Collects user shipping information and redirects to the payment gateway.
- **Admin Forms**: Allows admins to manage order statuses and track user shopping behavior.

## Installation

To install Trend-Trove locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables as per the provided `.env.example` file. and add MongoDB, Firebase, and Stripe API keys.
4. Run the application using `npm start`.

## Usage

### Browsing Products

- **Home Page**: Upon entering the site, users are greeted with a homepage displaying featured products.
- **Product Search & Filtering**: Users can search for products using the search bar or filter products by categories such as electronics, fashion, etc. Additionally, users can sort products by price in ascending or descending order.

### User Authentication

- **Sign Up / Login**: Users need to sign up or log in to make purchases. Firebase handles authentication, ensuring secure and seamless access.
- **Profile Management**: Logged-in users can view and manage their profiles, including updating personal information and viewing order history.

### Shopping Cart & Checkout

- **Adding to Cart**: Users can add products to their shopping cart from product listings or individual product pages.
- **View Cart**: Users can review the items in their cart, update quantities, or remove items before proceeding to checkout.
- **Shipping Information**: During checkout, users fill out a shipping form with their address details.
- **Payment**: After submitting the shipping form, users are redirected to a secure Stripe payment page to complete their purchase.

### Admin Dashboard

- **Accessing Admin Panel**: Admins have a dedicated login route and can access the admin dashboard to manage the application.
- **Analytics Overview**: Admins can view key statistics, including sales data and user activity, through line, pie, and bar charts.
- **Product & Order Management**: Admins can add, edit, or delete products, as well as track orders through various stages such as shipping, processing, and delivery.
- **User Management**: Admins can view user data, track user orders, and manage user accounts.

### Managing Orders

- **Order Tracking**: Users can track their order status in their profile, with updates on shipping, processing, and delivery.
- **Order History**: Both users and admins can view a history of completed orders.

### Filtering and Searching

- **Category Filters**: Users can filter products by categories like electronics, fashion, home appliances, etc.
- **Price Sorting**: Products can be sorted from high to low or low to high based on price.

### Updating Product Listings (Admin)

- **Adding New Products**: Admins can add new products with detailed descriptions, images, and pricing.
- **Editing Products**: Existing products can be updated with new information as needed.
- **Deleting Products**: Products can be removed from the listing if no longer available.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.
