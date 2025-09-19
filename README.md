# 🔗 URLite – Modern URL Shortener

A modern **Next.js + MongoDB full-stack project** that turns long messy URLs into short, clean links in seconds ⚡.  
Deployed live on **Vercel** for instant access.

---

## 🚀 Features
- Shorten long URLs into clean, shareable links.
- Fast redirection from shortened URLs to original links.
- Responsive and modern UI with TailwindCSS.
- Persists all links in **MongoDB Atlas**.
- Easy deployment with Vercel.

---

## 🛠️ Tech Stack
- **Frontend:** Next.js App Router + TailwindCSS  
- **Backend:** Next.js API Routes  
- **Database:** MongoDB Atlas  
- **Deployment:** Vercel  

---

## 📂 Project Structure

```
URLite/
├── app/ # Next.js App Router frontend pages/components
│ └── page.jsx # Main page for URL shortening
├── api/ # Next.js API Routes
│ ├── shorten.js # Endpoint to create short URLs
│ └── redirect.js # Endpoint to handle redirection
├── lib/ # Helper functions (DB connection, etc.)
├── README.md
└── tailwind.config.js # TailwindCSS config
```
---

---

## 💡 Key Learnings
- Managing **client + server logic** in Next.js.
- Securely connecting to **MongoDB Atlas**.
- Deploying a full-stack project on **Vercel**.

---

## 📌 Future Improvements
- Click analytics for shortened URLs.  
- QR code generation for links.  
- User authentication for managing personal links.  

---

## Live Project: [https://urllite.vercel.app](https://urllite.vercel.app)

---

## 👨‍💻 Author
Developed by **Jeel Patel** ✨
