🛒 Server-Rendered E-commerce Admin Dashboard

A full-stack Server-Side Rendered (SSR) E-commerce Product Management Dashboard built with Next.js App Router, MongoDB, and Cloudinary.
This project provides a complete admin interface to manage products with CRUD operations, image uploads, charts, and secure admin login.

🚀 Live Demo

🔗 Deployed on Vercel:
👉 https://ssrecomdashboard.vercel.app

🔐 Admin Login:
👉 https://ssrecomdashboard.vercel.app/admin/login

👤 Admin Credentials (Demo)
Email: admin@example.com
Password: admin123


⚠️ For demo purposes only. In production, always change credentials.

📌 Project Features
🔐 Admin Authentication

Secure admin login using bcrypt password hashing

Admin data stored in MongoDB

Seed admin API for first-time setup

📦 Product Management (CRUD)

Add new products

Update price & stock

Delete products

Server Actions for secure mutations

🖼 Image Upload (Cloudinary)

Multi-step product creation form

Upload product images to Cloudinary

Image URL stored in MongoDB

Images displayed in dashboard table

📊 Data Visualization

Stock Chart (per product)

Price vs Stock Chart

Built using chart components

⚡ Server-Side Rendering (SSR)

Dashboard data rendered on the server

Faster load times

SEO-friendly pages

🌐 Deployment

Deployed on Vercel

MongoDB Atlas cloud database

Cloudinary cloud storage

🛠 Tech Stack

Frontend

Next.js 14 (App Router)

React

TypeScript

Backend

Next.js API Routes

Server Actions

MongoDB + Mongoose

Authentication

bcryptjs

Image Storage

Cloudinary

Charts

Chart components (Recharts / custom)

Deployment

Vercel

MongoDB Atlas

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

🔑 Environment Variables

Create a .env.local file (for local development):

MONGODB_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


On Vercel, add these under Project → Settings → Environment Variables

▶️ How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/your-username/ssr-ecom-dashboard.git
cd ssr-ecom-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Setup environment variables

Create .env.local and add the values shown above.

4️⃣ Seed admin user
http://localhost:3000/api/seed-admin

5️⃣ Run the project
npm run dev


Visit:

Home → http://localhost:3000

Admin Login → http://localhost:3000/admin/login

Dashboard → http://localhost:3000/admin/dashboard

🧪 API Endpoints
Method	Endpoint	Description
POST	/api/auth/login	Admin login
GET	/api/seed-admin	Seed admin user
POST	/api/upload	Upload image to Cloudinary
GET	/api/products	Fetch products
POST	/api/products	Create product
🧠 Learning Outcomes

Built a real SSR dashboard

Used Next.js Server Actions

Integrated MongoDB Atlas

Implemented Cloudinary uploads

Deployed a full-stack app on Vercel

Understood authentication flow
