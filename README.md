# Vastulogy — Premium Astrology & Vastu Consultancy Website

> Transform Your Life Through Astrology, Vastu & Spiritual Guidance

A premium, production-ready React + Vite + Tailwind CSS website for **Vastulogy**, Dehradun.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Navigate to the project folder
cd vastulogy

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Deploy to Vercel, Netlify, or any static host.

---

## 🗂️ Project Structure

```
src/
├── assets/           # Images and icons
├── components/
│   ├── ui/           # Reusable UI components
│   │   └── index.jsx # Reveal, SectionTitle, buttons, cards
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingCTA.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── ProblemsSections.jsx
│       ├── ServicesPricingSections.jsx
│       └── TestimonialsFAQContact.jsx
├── data/
│   └── index.js      # All site content (edit here!)
├── hooks/
│   └── useScrollReveal.js
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## ✏️ Customization

### Update contact details
Edit `src/data/index.js` → `CONTACT` object:
```js
export const CONTACT = {
  phone: '+91 7863 863 863',
  phoneRaw: '7863863863',
  email: 'vastulogy@gmail.com',
  location: 'Dehradun, Uttarakhand, India',
}
```

### Update pricing
Edit `src/data/index.js` → `PRICING_PLANS` array.

### Add/update services
Edit `src/data/index.js` → `SERVICES` array.

### Update colors
Edit `tailwind.config.js`:
```js
colors: {
  navy: '#0F172A',
  gold: '#D4AF37',
  beige: '#F8F4EC',
}
```

### Add a logo image
1. Place your logo in `src/assets/images/logo.png`
2. Import it in `Navbar.jsx` and replace the 🔱 emoji:
```jsx
import logo from '../../assets/images/logo.png'
// ...
<img src={logo} alt="Vastulogy" className="h-11 w-11 rounded-full" />
```

---

## 📚 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| Framer Motion | (ready to extend animations) |
| React Router DOM | Routing |
| React Hook Form | Contact form validation |
| Lucide React | Icons (available) |
| React Icons | Icons (available) |

---

## 📱 Features

- ✅ Fully responsive (mobile-first)
- ✅ Sticky navbar with scroll effect
- ✅ Cosmic hero with animated rings
- ✅ Scroll reveal animations
- ✅ Hover lift card effects
- ✅ Pricing cards with Most Popular badge
- ✅ FAQ accordion
- ✅ Contact form → opens WhatsApp pre-filled
- ✅ Floating WhatsApp + Call buttons
- ✅ No horizontal scrolling

---

## 📞 Contact

**Vastulogy**  
📞 +91 7863 863 863  
✉️ vastulogy@gmail.com  
📍 Dehradun, Uttarakhand, India
