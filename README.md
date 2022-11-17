# Adoptanimal

## Introduction

This is a Web Project of "Web Application Development" course for the third year in university.  
Welcome to Adoptanimal, we're all about getting homeless pets into homes.

## Website Address

[adoptanimal.net](http://adoptanimal.net)  
[Azure Test site](https://salmon-ground-0766fae03.2.azurestaticapps.net)

## Contributor

Suvorov Denis Vitalievich / Суворов Денис Витальевич  
![vk](https://img.shields.io/badge/VK-denissvvv-green)
![email](https://img.shields.io/badge/mail-erkobraxx%40gmail.com-blue)  
Guo ZiHan / Го Цзыхань  
![vk](https://img.shields.io/badge/VK-zjjhgzh-green)
![email](https://img.shields.io/badge/mail-zjjhgzh%40gmail.com-blue)

## Technology Stack

HTML/css, Vue3, Node.js, Express, Vite, TypeScript, Vue-Router, Pinia, Vitest, Cypress, Mysql

Third Partiy Libraries: unplugin-auto-import, pm2

## Architecture

Vue3 + Node.js + Express + Database

![Architecture](https://www.bezkoder.com/wp-content/uploads/2019/12/vue-node-express-mysql-architecture.png)

- Node.js Express exports REST APIs & interacts with MySQL Database using _query()_ method to execute MySQL script: INSERT, SELECT, UPDATE, DELETE.
- Vue Client sends HTTP Requests and retrieves HTTP Responses using axios, consume data on the components. Vue Router is used for navigating to pages.
