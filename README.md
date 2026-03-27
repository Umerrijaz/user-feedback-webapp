# 🚀 User Feedback Webapp

A modern, full-stack user feedback platform designed to help product owners collect, manage, and prioritize feature requests from their users. Built with **Next.js**, **Supabase**, and **PostgreSQL**.

## 🛠 Tech Stack

  * **Framework:** [Next.js (App Router)](https://nextjs.org/)
  * **Database & Auth:** [Supabase](https://supabase.com/)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
  * **Payments:** [Stripe](https://stripe.com/)
  * **Language:** TypeScript

## 📂 Database Architecture

This application uses a relational PostgreSQL schema to manage data integrity and complex relationships:

  * **`profiles`**: Stores user-specific data. Automatically synchronized with Supabase Auth via database triggers.
  * **`boards`**: Dedicated spaces for different products or feedback categories.
  * **`posts`**: Individual feedback entries, ideas, or bug reports.
  * **`votes`**: Tracks user engagement. Unique constraints ensure one vote per user per post.

## 🚀 Getting Started

### 1\. Clone and Install

```bash
git clone https://github.com/Umerrijaz/user-feedback-webapp.git
cd user-feedback-webapp
npm install
```

### 2\. Environment Configuration

Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3\. Database Initialization

1.  Run the provided SQL scripts in your Supabase SQL Editor to generate the necessary tables.
2.  Enable **Row Level Security (RLS)** to protect user data.
3.  Set up the `handle_new_user` function and trigger to automate profile creation.

### 4\. Launch Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) to view your application locally.

## 🔒 Security & Permissions

Security is handled at the database level using **Row Level Security (RLS)**:

  * **Public Access:** Anyone can view boards and posts.
  * **Authenticated Access:** Logged-in users can create posts and cast votes.
  * **Owner Access:** Users can only modify or delete their own profiles and content.

-----


