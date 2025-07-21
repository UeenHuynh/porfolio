# Design Document

## Overview

The Uyen Portfolio website will be a modern, responsive single-page application (SPA) built with HTML5, CSS3, and JavaScript. The design follows a clean, professional aesthetic similar to the DevPatel portfolio, featuring smooth animations, dark/light theme switching, and mobile-first responsive design. The portfolio will showcase Uyen's expertise in biotechnology and AI through an intuitive, visually appealing interface.

## Architecture

### Frontend Architecture
- **Single Page Application (SPA)**: All content loads on a single HTML page with JavaScript-driven navigation
- **Component-Based Structure**: Modular sections (Header, Hero, About, Skills, Projects, Experience, Contact, Footer)
- **Progressive Enhancement**: Core content accessible without JavaScript, enhanced with interactive features
- **Mobile-First Design**: Responsive breakpoints starting from mobile (320px) to desktop (1920px+)

### Technology Stack
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with Flexbox/Grid, CSS Variables for theming, CSS Animations
- **Vanilla JavaScript**: No framework dependencies for optimal performance
- **Font Awesome**: Icon library for consistent iconography
- **Google Fonts**: Typography (similar to DevPatel's font choices)

## Components and Interfaces

### 1. Header Component
**Purpose**: Navigation and branding
**Features**:
- Logo with "Uyen" branding (similar to DevPatel's logo style)
- Responsive navigation menu with smooth scroll links
- Theme toggle button (light/dark mode)
- Mobile hamburger menu for small screens

**Interface**:
```html
<header class="header-area">
  <nav class="navbar">
    <div class="logo">UyenHuynh</div>
    <ul class="nav-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="theme-toggle">🌙/☀️</button>
  </nav>
</header>
```

### 2. Hero Section
**Purpose**: First impression and key information
**Features**:
- Professional photo of Uyen
- Name, title, and brief tagline
- Contact information (email, phone, location)
- Call-to-action buttons (Download CV, Contact Me)
- Animated background elements

**Content**:
- Name: "Uyen Huynh Khoi Minh"
- Title: "Biotechnology Student & AI Enthusiast"
- Tagline: "Integrating AI into Biotechnology for innovative research solutions"
- Location: "Ho Chi Minh City, Vietnam"

### 3. About Section
**Purpose**: Detailed background and objectives
**Features**:
- Educational background
- Career objectives
- Professional memberships
- Language skills
- Personal interests

**Content Structure**:
- University: University of Agriculture and Forestry Ho Chi Minh City
- Expected graduation: 2025
- AIVIETNAM membership
- Objective focusing on AI-biotech integration
- Languages: Vietnamese (Native), English (TOEIC 700+), French (B2), Chinese (HSK 3)

### 4. Skills Section
**Purpose**: Technical competencies showcase
**Features**:
- Skill categories with progress bars or rating systems
- Interactive hover effects
- Icons for each skill category

**Skill Categories**:
- **Programming**: Python, HTML, CSS
- **AI/ML**: Machine Learning, Deep Learning, Data Analysis
- **Biotechnology**: Food Microbiology, Genetic Engineering, Drug Discovery
- **Tools**: Data Manipulation, Research Methods

### 5. Projects Section
**Purpose**: Portfolio of academic and personal projects
**Features**:
- Project cards with images, descriptions, and links
- Filter/category system
- GitHub integration
- Modal popups for detailed project views

**Key Projects**:
1. **DeepGPT-DILI**: Drug-induced liver injury prediction (AUC: 0.9208)
2. **CRISPRON**: CRISPR/Cas9 repair outcome prediction
3. **Energy Gel for Athletes**: Advanced energy gel development
4. **Traffic Sign Detection**: Object detection for autonomous systems
5. **Cardiovascular Prediction**: Stacking ensemble learning
6. **Microbial Genome Analysis**: DNA sequencing and analysis

### 6. Experience Section
**Purpose**: Professional and research experience
**Features**:
- Timeline layout
- Company/institution logos
- Detailed descriptions
- Duration and location information

**Experience Items**:
1. **French Language Tutor** (2022-current) - Freelance
2. **Food Microbiology Lab** (2022-current) - NLU
3. **Mat Bao Corporation Internship** (7/2024-9/2024)

### 7. Contact Section
**Purpose**: Communication and networking
**Features**:
- Contact form with validation
- Direct contact information
- Social media links
- Location map (optional)

## Data Models

### Portfolio Data Structure
```javascript
const portfolioData = {
  personal: {
    name: "Uyen Huynh Khoi Minh",
    title: "Biotechnology Student & AI Enthusiast",
    email: "uyenhuynhkhoiminh.1.1@gmail.com",
    phone: "+84397849278",
    location: "Ho Chi Minh City, Vietnam",
    photo: "assets/images/uyen-profile.jpg"
  },
  education: {
    degree: "Biotech Engineer",
    university: "University of Agriculture and Forestry Ho Chi Minh City",
    expectedGraduation: "2025",
    memberships: ["AIVIETNAM (2023-current)"]
  },
  skills: [
    { category: "Programming", items: ["Python", "HTML", "CSS"], level: 85 },
    { category: "AI/ML", items: ["Machine Learning", "Deep Learning", "Data Analysis"], level: 90 },
    { category: "Languages", items: ["Vietnamese (Native)", "English (TOEIC 700+)", "French (B2)", "Chinese (HSK 3)"], level: 80 }
  ],
  projects: [
    {
      title: "DeepGPT-DILI",
      description: "Drug-induced liver injury prediction using GCN and NLP",
      technologies: ["Python", "Deep Learning", "NLP"],
      github: "https://github.com/username/DILI-2024",
      performance: "AUC: 0.9208"
    }
    // ... other projects
  ],
  experience: [
    {
      title: "French Language Tutor",
      company: "Freelance",
      duration: "2022 - current",
      location: "Ho Chi Minh City, Vietnam",
      description: "Helps high-school students enhance communication skills in French"
    }
    // ... other experiences
  ]
};
```

## Error Handling

### Form Validation
- **Client-side validation**: Real-time validation for contact form fields
- **Email validation**: Regex pattern matching for email format
- **Required field validation**: Visual indicators for missing required fields
- **Success/error messaging**: User feedback for form submission status

### Performance Error Handling
- **Image loading fallbacks**: Placeholder images for failed loads
- **Graceful degradation**: Core functionality without JavaScript
- **Browser compatibility**: Polyfills for older browser support

## Testing Strategy

### Manual Testing
1. **Cross-browser testing**: Chrome, Firefox, Safari, Edge
2. **Device testing**: Mobile phones, tablets, desktops
3. **Accessibility testing**: Screen readers, keyboard navigation
4. **Performance testing**: Page load times, animation smoothness

### Automated Testing
1. **HTML validation**: W3C markup validator
2. **CSS validation**: W3C CSS validator
3. **Accessibility testing**: axe-core or similar tools
4. **Performance testing**: Lighthouse audits

### Test Scenarios
1. **Navigation testing**: All menu links work correctly
2. **Form testing**: Contact form validation and submission
3. **Theme switching**: Light/dark mode functionality
4. **Responsive testing**: Layout adaptation across screen sizes
5. **Content loading**: All images and content load properly

## Visual Design Specifications

### Color Scheme
**Light Theme**:
- Primary: #2563eb (blue)
- Secondary: #f59e0b (amber)
- Background: #ffffff
- Text: #1f2937
- Accent: #10b981 (emerald)

**Dark Theme**:
- Primary: #3b82f6 (blue)
- Secondary: #fbbf24 (amber)
- Background: #111827
- Text: #f9fafb
- Accent: #34d399 (emerald)

### Typography
- **Primary Font**: Inter or similar modern sans-serif
- **Heading Font**: Poppins or similar for headings
- **Code Font**: Fira Code for technical content

### Layout Grid
- **Desktop**: 12-column grid with 1200px max-width
- **Tablet**: 8-column grid with flexible width
- **Mobile**: Single column with 16px margins

### Animation Guidelines
- **Scroll animations**: Fade-in and slide-up effects
- **Hover effects**: Subtle scale and color transitions
- **Page transitions**: Smooth scrolling between sections
- **Loading animations**: Skeleton screens for content loading

## Accessibility Features

1. **Semantic HTML**: Proper heading hierarchy and landmark elements
2. **ARIA labels**: Screen reader support for interactive elements
3. **Keyboard navigation**: Tab order and focus management
4. **Color contrast**: WCAG AA compliance for text readability
5. **Alt text**: Descriptive alternative text for all images
6. **Focus indicators**: Visible focus states for keyboard users