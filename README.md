# 🧠 NeuroBridge - Bridging Minds Through AI & Emotion

**NeuroBridge** is a full-stack mental wellness web app that enables users to track their mood, get AI-driven insights, and engage with therapeutic activities in their preferred language. Built using modern web technologies, this project aims to support emotional well-being in an accessible and inclusive way.

---

## 🚀 Project Workflow Model

- **Frontend**: React with Vite for fast development
- **Backend**: Express.js with MongoDB
- **Authentication**: JWT-based login system (stateful)
- **Authorization**: Role-based (user/admin for future expansion)
- **DevOps**: GitHub for version control and CI-ready structure
- **Workflow**: Feature branching and frequent commits (as per SIPP guidelines)

---

## 🎨 UI/UX Approach

- **User-Friendly Interface** using React and Bootstrap/Tailwind
- **Multilingual Support** with `i18next`
- **Minimalist & Accessible Design**
- **Responsive** for mobile, tablet, and desktop

---

## 🧑‍💻 Tech Stack

| Layer        | Technology                      |
|--------------|----------------------------------|
| Frontend     | React (Vite), JavaScript, EJS (if needed) |
| Backend      | Node.js, Express.js              |
| Database     | MongoDB (via Compass)            |
| Styling      | CSS3, TailwindCSS / Bootstrap    |
| Auth         | JWT (JSON Web Tokens)            |
| Localization | i18next                          |
| Versioning   | Git & GitHub                     |

---

## 🗃️ Database Design

- **Users**: Registration, login, role
- **Moods**: Emoji + note + timestamp
- **Chat Logs** (optional): AI prompts and replies

---

## 📁 Modules & Planned Routes

### 1. **User Module**
- `POST /api/register` – User registration
- `POST /api/login` – Login with JWT
- `GET /api/me` – Get logged-in user details

### 2. **Mood Tracker**
- `POST /api/mood` – Add mood entry
- `GET /api/mood` – Fetch mood history

### 3. **OpenAI Chat Module**
- `POST /api/chat` – Send a prompt and receive AI response

### 4. **Language Support**
- Implemented via `i18next` in frontend

---

## 📅 6-Week Milestone Plan

| Week | Focus Area                             |
|------|----------------------------------------|
| 1    | Project setup (frontend, backend, GitHub), DB, auth |
| 2    | Login/registration UI + backend, DB models |
| 3    | Mood tracker UI + routes, save/view moods |
| 4    | ChatGPT API integration (basic)        |
| 5    | Add multilingual UI + OpenAI reply history |
| 6    | Final testing, bug fixes, polish, and documentation |

---

## ✅ Commit Guidelines

- ~30–40 commits per week
- Clear, meaningful commit messages:
  - `feat: added login form validation`
  - `fix: resolved CORS error in backend`
  - `refactor: modularized mood tracker route`

---

## 🙋‍♂️ Author

**Anay Gupta**  
BTech CSE – 3rd Year  
Summer Immersion Placement Program (SIPP 2025)

---

## 📌 License

This project is open-source for learning and personal development only.
