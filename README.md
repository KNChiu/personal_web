# Personal Portfolio Website

A modern personal portfolio website built with React + TypeScript + Tailwind CSS, showcasing personal information, skills, and project portfolio.

## 🎯 Project Features

- **Modern Tech Stack**: React 19 + TypeScript + Vite + Tailwind CSS 4
- **Responsive Design**: Perfectly adapted to various device screen sizes
- **Dark Theme**: Professional dark color scheme
- **Interactive Components**: Skill category switching, project filtering, etc.
- **Form Validation**: Complete contact form validation mechanism
- **Performance Optimized**: Using Vite build tool for fast loading

## 🛠️ Tech Stack

### Frontend Framework
- **React** 19.1.0 - Latest version of React
- **TypeScript** 5.8.3 - Type-safe JavaScript superset
- **Vite** 6.3.5 - Fast build tool

### Styling
- **Tailwind CSS** 4.1.7 - Utility-first CSS framework
- **PostCSS** 8.5.3 - CSS post-processor
- **Custom Theme Configuration** - Complete color system and design tokens

### Development Tools
- **ESLint** - Code quality checking
- **TypeScript ESLint** - TypeScript-specific ESLint rules
- **Google Fonts** - Poppins font family

## 📱 Features

### 🎨 Hero Section
- Personal name and title display
- Concise self-introduction
- GitHub and LinkedIn social media links
- Gradient background design

### 👤 About Section
- Detailed personal background introduction
- Personal photo placeholder
- Responsive two-column layout

### 💪 Skills Section
- **Category Switching**: Frontend/Backend skill categories
- **Visual Progress Bars**: Custom-styled skill level display
- **Skill Items**:
  - Frontend: React (90%), TypeScript (85%), JavaScript (95%), HTML/CSS (100%)
  - Backend: Node.js (85%), Express (80%)

### 🚀 Projects Section
- **Project Filtering**: Filter projects by technology tags
- **Responsive Grid Layout**: Adaptive project card arrangement
- **Project Information**: Including description, tech tags, links, etc.
- **Sample Projects**: E-commerce website, Weather app, Task management system, Blog platform

### 📧 Contact Section
- **Complete Form Validation**: Name, email, message field validation
- **Real-time Error Feedback**: Visual feedback for input errors
- **Submission State Management**: Handling submitting, success, failure states
- **Form Reset Function**: Auto-clear form after successful submission

### 🔗 Footer Section
- Copyright information display
- Quick navigation links
- Social media links (GitHub, LinkedIn, Email)
- Responsive three-column layout

## 🎨 Design System

### Color Configuration
- **Primary Background**: Dark blue (`rgb(15, 23, 42)`)
- **Card Background**: Dark blue-gray (`rgb(30, 41, 59)`)
- **Primary Accent**: Purple-blue series (`rgb(99, 102, 241)`)
- **Secondary Color**: Cyan-green series (`rgb(6, 182, 212)`)
- **Text Color**: Light (`rgb(248, 250, 252)`)

### Typography System
- **Primary Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 🚀 Quick Start

### Requirements
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation Steps

1. **Clone the project**
```bash
git clone <repository-url>
cd personal_web
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open browser**
Navigate to `http://localhost:5173` to view the website

### Build Project

```bash
# Build production version
npm run build

# Preview build result
npm run preview
```

## 📁 Project Structure

```
personal_web/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Skills.tsx     # Skills section
│   │   ├── Projects.tsx   # Projects section
│   │   ├── Contact.tsx    # Contact form section
│   │   ├── Footer.tsx     # Footer section
│   │   ├── Button.tsx     # Button component
│   │   ├── Card.tsx       # Card component
│   │   ├── Heading.tsx    # Heading component
│   │   └── Input.tsx      # Input component
│   ├── styles/            # Style files
│   │   └── shared.ts      # Shared styles
│   ├── App.tsx            # Main app component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── main.tsx           # App entry point
├── index.html             # HTML template
├── package.json           # Project configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## 🎯 Customization Guide

### Personal Information Updates
1. **Hero Section**: Edit `src/components/Hero.tsx` to update name, title, introduction
2. **About Section**: Edit `src/components/About.tsx` to update personal background
3. **Skills Information**: Edit `src/components/Skills.tsx` to update skill items and levels
4. **Project Portfolio**: Edit `src/components/Projects.tsx` to update project information
5. **Contact Information**: Edit `src/components/Footer.tsx` to update social media links

### Style Customization
- Primary Colors: Edit colors settings in `tailwind.config.js`
- Font Settings: Edit fontFamily settings in `tailwind.config.js`
- Global Styles: Edit `src/index.css`

## 📝 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build production version
npm run preview  # Preview build result
npm run lint     # Run ESLint checks
```

## 🌟 Future Plans

- [ ] Add website SEO optimization (meta tags)
- [ ] Integrate Google Analytics
- [ ] Add Netlify CMS content management
- [ ] Implement dark/light theme toggle
- [ ] Add project detail pages
- [ ] Implement blog functionality
- [ ] Add multi-language support

## 📄 License

This project is for personal portfolio use only.

---

**Created**: 2025  
**Tech Stack**: React + TypeScript + Tailwind CSS + Vite  
**Author**: KNChiu
