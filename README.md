🛒 Server-Rendered E-commerce Admin Dashboard

A full-stack Server-Side Rendered (SSR) E-commerce Product Management Dashboard built with Next.js App Router, MongoDB, and Cloudinary.
This project provides a complete admin interface to manage products with CRUD operations, image uploads, charts, and secure admin login.

Live Deployment
Live URL: https://ssrecomdashboard.vercel.app
Admin Login: https://ssrecomdashboard.vercel.app/admin/login

Dummy Admin Credentials created (These credentials are created using a secure admin seed route)
Email: admin@example.com
Password: admin123

Objective
The objective of this project is to design and develop a server-side rendered (SSR) admin dashboard that allows administrators to efficiently manage products in an e-commerce platform.
Server-side rendering ensures faster page loads, better SEO, and reliable data fetching, making the dashboard suitable for real production use cases.

Project Description

This project implements a real-world product management dashboard using Next.js App Router with server-side rendering.
Product data is fetched and rendered on the server before being sent to the client, ensuring improved performance and consistency.
Administrators can:
1. Add, edit, and delete products
2. Upload product images securely
3. Visualize product stock and pricing data using charts
4. Manage data through a clean, intuitive interface

Core Features

1.Admin Authentication:
-Secure admin login system
-Passwords hashed using bcrypt
-Admin seeding mechanism (not accessible to general users)

2.Product Management:
-Create new products
-View all products
-Update price and stock
-Delete products
-Changes reflected instantly via server revalidation

3.Multi-Step Product Form:
Step 1: Product details
Step 2: Image upload
Step 3: Pricing & stock
-Ensures structured and error-free product creation

4.Image Upload & Storage:
-Product images uploaded securely to Cloudinary
-Image URLs stored in the database
-Images displayed in the dashboard table

5.Data Visualization:
-Stock level chart per product
-Price vs stock comparison chart
-Helps admins quickly analyze inventory

6.Server-Side Rendering (SSR):
-Dashboard rendered on the server
-No client-side fetching for admin data
-Better performance and scalability

Technology Stack
Frontend & Backend: Next.js (App Router), React, TypeScript
Data & Storage: MongoDB Atlas, Mongoose (ODM)
Image Storage: Cloudinary
Data Visualization: Chart.js
Authentication: bcryptjs
Deployment: Vercel

Application Workflow
1. Admin logs in securely
2. Server validates credentials
3. Dashboard page is server-rendered
4. Product data is fetched from MongoDB
5. Admin performs CRUD operations
6. Server revalidates and updates UI instantly


📂 Project Structure
app/
 ├── admin/
 │   ├── login/
 │   └── dashboard/
 │       ├── page.tsx
 │       ├── MultiStepAddForm.tsx
 │       ├── ProductChart.tsx
 │       └── PriceStockChart.tsx
 │
 ├── api/
 │   ├── auth/login/route.ts
 │   ├── products/route.ts
 │   ├── upload/route.ts
 │   └── seed-admin/route.ts
 │
 ├── lib/
 │   ├── db.ts
 │   └── cloudinary.ts
 │
models/
 ├── Admin.ts
 └── Product.ts

Environment Variables
Create a .env.local file and add:
MONGODB_URI, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
On Vercel, add these under Project → Settings → Environment Variables

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
Method	Endpoint	Description
POST	/api/auth/login	Admin login
GET	/api/seed-admin	Seed admin user
POST	/api/upload	Upload image to Cloudinary
GET	/api/products	Fetch products
POST	/api/products	Create product

Key Learnings:
-Practical use of Server-Side Rendering
-Building secure admin-only dashboards
-Integrating third-party services (Cloudinary)
-Full-stack deployment on Vercel
-Managing real-world application workflows

