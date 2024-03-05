<div align="center">
    <img src="https://static.fillout.com/og-image.png" width="50%" height="50%"/>
</div>

# Fillout Filter - Coding Challenge

## Overview
>
> This is a Node.js application that provides an endpoint for fetching data from an external API, filtering the response based on user-defined criteria, and maintaining pagination. It is designed to be flexible, allowing users to specify various filter conditions and pagination parameters to retrieve the desired data efficiently.

## Demo
>
> Live demo:
> [Try out the endpoint](https://fillout-filter-b8yz.onrender.com/cLZojxk94ous/filteredResponses)
>
> * Change the form id in the url if you want
> * Send any of the original Fillout query params (limit, afterDate, beforeDate, offset, status, includeEditLink, sort)
> * Send the new filter query param following this JSON structure and stringifying it:
>
> ```
>{
>   id: string;
>   condition: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than';
>   value: number | string;
>}[]
> ```

## How to run

> * Clone the project;
> * Create a .env file in the root directory of the project:
>
> ```
> API_KEY=your_api_key_here
> PORT=3000
> ```
>
> * Run the commands below on your cmd:
>
> ```
> npm install
> npm run dev
> ```
>
> * You can find the project running on `localhost:[your_port_from_env]`.

## Main Tech Stack

> * Node JS;
> * Express:
> * TypeScript:
