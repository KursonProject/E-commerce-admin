# 📊 Lumino Admin Dashboard

This is the **Admin Dashboard** for **Lumino**, a platform for selling **website templates** and **AI agents**.  
Built with **React**, **Vite**, **TailwindCSS**, and **shadcn/ui**, the dashboard provides a modern, responsive, and high-performance interface for managing products, orders, customers, and platform settings.

---

## ✨ Features

- 📦 **Product Management** – Add, edit, and manage website templates & AI agents.
- 🛒 **Order Management** – Track customer orders and payment statuses.
- 👤 **User Management** – View and manage platform users.
- 📈 **Dashboard Analytics** – Overview of sales, revenue, and performance metrics.
- 🎨 **Modern UI** – Built with TailwindCSS and shadcn/ui for a sleek look.
- ⚡ **Fast Development** – Powered by Vite for an optimized workflow.

---

## 📦 Tech Stack

- [React](https://react.dev/) – Frontend library for building UI
- [Vite](https://vitejs.dev/) – Next-generation build tool
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) – Reusable UI components
- [Radix UI](https://www.radix-ui.com/) – Accessible UI primitives

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KursonProject/E-commerce-admin.git
   cd E-commerce-admin
   ```
Install dependencies

```bash
npm install
# or
yarn install
```
Initialize shadcn/ui (if not already configured)

```bash
npx shadcn-ui init
```
Run the development server
```bash
npm run dev
```
📂 Folder Structure
```csharp
├── src
│   ├── components   # Reusable UI components
│   ├── pages        # Dashboard pages (Products, Orders, Users, etc.)
│   ├── hooks        # Utility functions & API helpers
│   ├── app.tsx      # place me router and middleware
│   ├── index.css    # TailwindCSS & global styles
│   └── main.tsx     # Application entry point
├── public           # Static assets
├── index.html       # Main HTML file
```

🖥 Running the App
```bash
npm run dev
```
Open:

http://localhost:5173
