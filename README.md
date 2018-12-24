# feup-sinf

Projects for the Information Systems (SINF) class of the Master in Informatics and Computer Engineering (MIEIC) at the Faculty of Engineering of the University of Porto (FEUP).

- [Proposed Theme](#proposed-theme)
- [Project](#project)
- [Build](#build)
- [Screenshots](#screenshots)

Made in colaboration with [André Cruz](https://github.com/AndreFCruz), [Edgar Carneiro](https://github.com/EdgarACarneiro) and [Xavier Fontes](https://github.com/xfontes42).<br>
**Completed in 23/12/2018.**

## Proposed Theme
### 360º Company Dashboard
Develop a Web app to provide to a complete information of the company status, regarding the information that is contained on the SAF-T (standard audit file for tax purposes) and information regarding sales orders, purchases, inventory, and accounts payable, using a dashboard to provide high level/graphical information with drill down functionalities.

### ERP - Extensibility Objectives
Create an External Authorization layer , generate SAF-T file from an external file.

### ERP - Basic Usage Objectives
- Proper use of master data, create customers, ...
- Register Sales Orders, Delivery Notes, Invoices
- Register basic accounting transactions
- Register payments and costumer receipts
- Understand the content of the SAF-T file

## Project
This project consists of the development of a web application to provide data and key performance indicators (KPIs) relevant to the business. In order to provide a better user experience, we decided to use **Angular**, a front-end web application framework.

The use of comprehensive visualizations aims to simplify the analysis of the large stream of data inherent to the business, thus easing the decision making process.

The dashboard presents information regarding the financial performance of the company, its sales, its purchases from suppliers, its inventory, and its products' specifications.
The app relies on and inter-operates with the *Primavera ERP*, but all authentication data and KPIs calculations are handled by our own backend service.

This WebApp is for the company's internal use and thus should not have pages indexed in search engines, safe for the login page.

**Disclaimer:** The design was inspired on an existing *Angular* template but developed from scratch. [Live Preview](https://youtu.be/hagMcrfp2qU)

## Build

First you need to install **node.js** and **yarn**.

### Run SAF-T Api
* Open Terminal
* Go to the `/saft-api` folder
* Follow instructions
* Run in terminal `.\run.sh primedemo.xml`
### Run Angular Project
* Open Terminal
* Go to the `/sinf` folder
* Run in terminal `npm install -g @angular/cli`
* Then `npm install`
* And finally `ng serve`

## Screenshots

### Login
<img src="https://github.com/literallysofia/feup-sinf/blob/master/docs/screenshots/login.jpg" width="800">

### Core Views
#### Overview
<img src="https://github.com/literallysofia/feup-sinf/blob/master/docs/screenshots/overview.jpg" width="800">

#### Sales
<img src="https://github.com/literallysofia/feup-sinf/blob/master/docs/screenshots/sales.jpg" width="800">

#### Financial
<img src="https://github.com/literallysofia/feup-sinf/blob/master/docs/screenshots/financial.jpg" width="800">

#### Procurement
<img src="https://github.com/literallysofia/feup-sinf/blob/master/docs/screenshots/procurement.jpg" width="800">

#### Inventory
<img src="https://github.com/literallysofia/feup-sinf/blob/master/docs/screenshots/inventory.jpg" width="800">

#### Product Drill Down
<img src="https://github.com/literallysofia/feup-sinf/blob/master/docs/screenshots/product-drill.jpg" width="800">

#### Client Drill Down
<img src="https://github.com/literallysofia/feup-sinf/blob/master/docs/screenshots/client-drill.jpg" width="800">

#### Supplier Drill Down
<img src="https://github.com/literallysofia/feup-sinf/blob/master/docs/screenshots/supplier-drill.jpg" width="800">
