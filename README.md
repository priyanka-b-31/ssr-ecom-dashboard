Server-Rendered E-commerce Admin Dashboard

A full-stack Server-Side Rendered (SSR) E-commerce Product Management Dashboard built with Next.js App Router, MongoDB, and Cloudinary. This project provides a complete admin interface to manage products with CRUD operations, image uploads, charts, and secure admin login.


Live Deployment

Live URL: https://ssrecomdashboard.vercel.app

Admin Login: https://ssrecomdashboard.vercel.app/admin/login


Admin Credentials 

Dummy credentials created (These credentials are created using a secure admin seed route)
1. Email: admin@example.com
2. Password: admin123


Objective

The objective of this project is to design and develop a server-side rendered (SSR) admin dashboard that allows administrators to efficiently manage products in an e-commerce platform. Server-side rendering ensures faster page loads, better SEO, and reliable data fetching, making the dashboard suitable for real production use cases.


Project Description

This project implements a real-world product management dashboard using Next.js App Router with server-side rendering. Product data is fetched and rendered on the server before being sent to the client, ensuring improved performance and consistency.

Administrators can:
1. Add, edit, and delete products
2. Upload product images securely
3. Visualize product stock and pricing data using charts
4. Manage data through a clean, intuitive interface


Core Features

1. Admin Authentication : Ensures secure admin login system, passwords are hashed using bcrypt, admin seeding mechanism is done (not accessible to general users)
   
2. Product Management : Product CRUD includes creating new products, viewing all products, updating price and stock and deleting products.Changes are reflected instantly via server revalidation.

3. Multi-Step Product Form : Ensures structured and error-free product creation

Step 1: Product details

Step 2: Image upload

Step 3: Pricing & stock

4. Image Upload & Storage : Product images are uploaded securely to Cloudinary, image URLs are stored in the database and the images are displayed in the dashboard table.

5. Data Visualization : Stock level chart per product, Price vs stock comparison chart are displayed on the dashboard. It helps admins to quickly analyze inventory.

6. Server-Side Rendering (SSR) : Dashboard is rendered on the server, no client-side fetching for admin data, improves performance and scalability


Technology Stack:

1. Frontend & Backend: Next.js (App Router), React, TypeScript
2. Data & Storage: MongoDB Atlas, Mongoose (ODM)
3. Image Storage: Cloudinary
4. Data Visualization: Chart.js
5. Authentication: bcryptjs
6. Deployment: Vercel


Application Workflow
1. Admin logs in securely
2. Server validates credentials
3. Dashboard page is server-rendered
4. Product data is fetched from MongoDB
5. Admin performs CRUD operations
6. Server revalidates and updates UI instantly


Environment Variables
1. Create a .env.local file and add: MONGODB_URI, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
2. On Vercel, add these under Project → Settings → Environment Variables


Steps to Run Locally:
1. Clone the repository
2. Install dependencies- npm install
3. Setup environment variables- Create .env.local and add the values
4. Seed admin user- http://localhost:3000/api/seed-admin
5. Run the project- npm run dev
6. Now visit:

Home → http://localhost:3000
Admin Login → http://localhost:3000/admin/login
Dashboard → http://localhost:3000/admin/dashboard


API Endpoints

1. Authentication : POST /api/auth/login - Admin login using email and password.

2. Admin Setup : GET /api/seed-admin - Creates a default admin account (one-time setup for demo).

3. Products
1. GET /api/products – Fetch all products
2. POST /api/products – Add a new product
3. PUT /api/products – Update product price and stock
4. DELETE /api/products – Delete a product

4. Image Upload
1. POST /api/upload
2. Uploads product images to Cloudinary.


Key Learnings

1. Practical use of Server-Side Rendering
2. Building secure admin-only dashboards
3. Integrating third-party services (Cloudinary)
4. Full-stack deployment on Vercel
5. Managing real-world application workflows

