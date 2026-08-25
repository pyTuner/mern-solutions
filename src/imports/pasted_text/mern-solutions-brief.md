# Ninexo — Website Design Brief (for Figma Make)

## 0. ONE-LINE BRIEF
Design a **premium, bright, trustworthy marketing/sales website** for Ninexo, a digital solutions agency. This is a **customer-conversion website**, NOT a developer portfolio, NOT a tech-stack showcase. Every section must speak to a non-technical business owner about **their business goals**, not about our technology.

**North star line to repeat throughout:**
> "You know your business. We know how to build the digital solution."

---

## 1. WHO WE ARE BUILDING FOR
Non-technical small/medium business owners, entrepreneurs, startups, and established businesses who think in outcomes, not tech stacks:
- "I need a website."
- "I want my customers to order online."
- "I need a mobile app."
- "I want to automate my business."
- "I have an idea but don't know how to build it."
- "I already have a website/app and want to improve it."

Visitor should leave thinking: *"They understand businesses like mine, they can build what I need, their work looks professional, I trust them, I should contact them."*

---

## 2. DESIGN SYSTEM (use exactly)

**Colors — Pure Trust Blue system**
A single cohesive blue family carries trust, credibility, and professionalism throughout. No secondary hue (green/amber) is used — depth and warmth come from tint/shade variation within blue plus generous whitespace, not from a second color family. Name/logo-agnostic: this palette is chosen for what it communicates, not tied to "NINEXO."

| Token | Hex | Use |
|---|---|---|
| Background | `#FFFFFF` | Primary background |
| Soft background | `#F6F8FC` | Alternating/section background |
| Card background | `#FFFFFF` | Cards, forms |
| Primary text | `#111827` | Headings/body |
| Secondary text | `#5B6472` | Supporting copy |
| Border | `#E4E9F2` | Card/section borders |
| Primary accent (core blue) | `#2F5FE0` | CTAs, links, active states, icons |
| Accent — deep (hover/pressed) | `#1E45C4` | Button hover/active, emphasis text |
| Accent — tint (light) | `#E8EEFC` | Highlighted chips, selected states, subtle section washes |
| Accent — pale (backdrop) | `#F2F5FE` | Large soft background blocks behind hero/feature visuals |

**Avoid:** dark/black-heavy themes, neon/electric blue, heavy gradients, excessive purple, a second competing hue (no green/amber as brand color — keep it monochrome-blue for a clean, corporate-safe, globally-neutral trust signal), low-contrast text.

**Typography:** Inter / Manrope / Plus Jakarta Sans / DM Sans. Large friendly headlines, strong hierarchy, generous line-height, highly readable body text. Avoid futuristic/technical-looking type.

**Components:** White cards, subtle borders/soft shadows, moderate rounded corners, plenty of whitespace, editorial (not generic SaaS-grid) layouts, real product screenshots/device mockups over stock photos or generic illustrations.

**Motion:** Smooth scroll reveals, subtle hover/image movement, portfolio zoom-on-hover, clean transitions. Avoid heavy parallax, flashing, floating loops, large 3D animation.

**Responsive:** Design mobile seriously (375–390px width) — large tap targets, no horizontal scroll, simplified nav, forms, and portfolio that still feel premium, not a shrunk desktop layout.

---

## 3. SITE MAP
1. Homepage (main narrative — see §5)
2. Services (overview/detail)
3. Our Work / Portfolio
4. Chhava Vegetables — Case Study page
5. About
6. Contact
7. Shared Footer

---

## 4. GLOBAL CONTENT RULE (non-negotiable)
**Never fabricate:** testimonials, client logos, statistics, revenue/growth numbers, user counts, awards, certifications, partnerships, or business results. If data isn't provided, use a clearly labeled placeholder (e.g., "Client feedback coming soon"). This applies to every section below.

Also never lead with tech stack (React/Node/MongoDB). If technology is mentioned at all, keep it to one small, secondary line — never a homepage focus.

---

## 5. HOMEPAGE — SECTION-BY-SECTION

The homepage must follow this emotional/narrative arc:
**I have a business/idea → I need a digital solution → Ninexo understands my problem → They can build it → They've already built real products → Their process is simple → I trust them → Let's Talk.**

### 5.1 Hero
- Headline: **"Your Business. Your Idea. Our Digital Solutions."** (alt: "Digital Solutions That Help Your Business Grow.")
- Subhead: "We help businesses build modern websites, mobile apps, online stores, and custom digital solutions that make it easier to reach customers and grow."
- Primary CTA: **Start a Project**
- Secondary CTA: **Explore Our Work**
- Visual: one clean composed graphic showing multiple digital products together (website preview + mobile app + online store + dashboard + customer interface). No stock photos, no generic "person coding" imagery.

### 5.2 "Not sure what you need?" (empathy section)
- Heading: "Not sure what digital solution your business needs?"
- Subhead: "That's okay. You don't need to know the technology. Tell us what you want your business to achieve, and we'll help you find the right solution."
- Show 6 tappable problem statements (each links toward relevant service): website / online ordering / mobile app / automation / custom software / "I have an idea."

### 5.3 Services — "What Can We Build For Your Business?"
Subhead: "From your first online presence to a complete digital platform, we build solutions around what your business actually needs."

6 service cards, each = short outcome-focused description + CTA:
| Service | One-line pitch | CTA |
|---|---|---|
| Business Websites | Strong first impression, easy way for customers to find you | Build My Website → |
| Mobile Applications | Let customers connect with you from anywhere | Build My App → |
| Online Stores | Take products online — browse, order, buy | Start Selling Online → |
| Custom Business Software | Replace spreadsheets/manual work with software built for you | Build My Business System → |
| Business Automation | Turn repetitive manual work into simple workflows | Explore Automation → |
| Improve an Existing Product | Redesign, maintain, or expand what you already have | Improve My Product → |

### 5.4 Featured Project — Chhava Vegetables
Treat as a real business solution, not a portfolio card. Large, visually rich section.
- Eyebrow label: **FEATURED PROJECT**
- Heading: "Taking a Local Business Online"
- Sub: **Chhava Vegetables**
- Copy: "A complete digital ordering solution designed to help a vegetable business reach customers online and manage its daily operations more efficiently."
- Show large device mockups: mobile app browsing, categories, product detail, cart/checkout, and the business/admin interface. Visual-first — minimal text needed to understand it.
- Story, told plainly (no invented metrics):
  - **The Need:** wanted a more convenient way to connect with customers and manage online orders.
  - **What We Built:** a digital ordering experience plus business management tools.
  - **The Result:** a more convenient customer experience and a more organized way to manage operations.
- Closing CTA block: "Want something similar for your business?" → "Your business may need something completely different. Tell us what you're trying to achieve and we'll help you find the right solution." → **Let's Discuss Your Business →**

### 5.5 Selected Work — "We've Built It. Now Let's Build Yours."
Editorial portfolio layout (not a plain 4-card grid) — Chhava large/featured, three others smaller:
| Project | Category | Description |
|---|---|---|
| Chhava Vegetables | E-commerce / Mobile App | Digital ordering solution for a local vegetable business (largest/featured) |
| Restructurers | Business Website | Professional site for a psychological healing & wellness business |
| Election Advertisement | Demo Web App — **label clearly as "DEMO PROJECT"**, never implies real election use | Demonstration voting/candidate-management experience |
| Innovera Schools | Education Website/Web App | Digital site/experience for an educational organization |

Each card: large visual, name, short description, category tag, "View Project" CTA. Hover = subtle image shift + CTA reveal + metadata emphasis.

### 5.6 Interactive — "Tell Us What You Need"
Heading: "Tell Us What You Need." / Sub: "You don't need to know exactly how to build it. Just tell us what you're trying to achieve."
7 selectable options (website / sell online / mobile app / business software / automate something / have an idea / already have a site-app). On selection, reveal a 1–2 line plain-language explanation + **Let's Talk →** CTA.

### 5.7 How We Work (process, not technical)
Heading: "Simple Process. Clear Communication."
6 steps: 01 Tell Us About Your Business → 02 We Find the Right Solution → 03 We Design the Experience → 04 We Build It → 05 We Launch → 06 We Keep Improving.

### 5.8 Why Choose Us
Heading: "You Know Your Business. We Know How to Build It."
6 trust points: We Listen First · Built Around Your Needs · Clear & Simple (no jargon) · One Partner From Start to Launch · Practical Solutions · Built for the Future.

### 5.9 Trust Section (no fake stats)
Use qualitative pillars instead of numbers: Real Work · Real Solutions · Clear Communication · Business-Focused. Leave a reserved slot for genuine testimonials later — do not populate with fake ones.

### 5.10 About (short)
Heading: "We Believe Technology Should Make Business Easier."
Copy: "Ninexo is a digital solutions company focused on helping businesses establish, improve, and grow their digital presence. Whether you need a professional website, a mobile application, an online store, or a custom system for your business, we help turn your requirements into practical digital solutions." Keep brief, not corporate.

### 5.11 Final CTA
Heading: "Have a Business Idea in Mind?" (alt: "Let's Build Something That Works for Your Business.")
Copy: "Tell us what you're trying to achieve. We'll help you figure out the right digital solution."
Primary: **Start a Conversation** · Secondary: **WhatsApp Us**

### 5.12 Contact
Heading: "Let's Talk About Your Business." / Sub: "You don't need a detailed technical specification. Just tell us what you're looking for."
Form fields: Name · Business Name · Email · Phone/WhatsApp · What are you looking for? · Tell us about your requirement · (optional) Budget · (optional) Timeline. CTA: **Send Enquiry**. Also show direct WhatsApp / Email / Call options.

### 5.13 Footer
"Ninexo — Digital solutions that help businesses grow."
Nav: Home · Services · Our Work · About · Contact
Services list: Websites · Mobile Apps · Online Stores · Business Software · Automation
Contact/social links. Copyright: **© 2026 Ninexo. All rights reserved.**

---

## 6. CHHAVA VEGETABLES — DEDICATED CASE STUDY PAGE
Same story beats as §5.4 but expanded: full product showcase (browsing, categories, product detail, cart, order flow, admin/business interface) using large realistic device mockups, told mostly through visuals with minimal supporting text. End with the same "Want something similar?" conversion CTA.

---

## 7. VOICE & FRAMING RULES
Always translate technical framing into outcome framing:
- ❌ "We are experts in React, Node.js, MongoDB." → ✅ "We build digital solutions around the way your business works."
- ❌ "Our technical expertise." → ✅ "What can we build for your business?"
- ❌ "Our technology stack." → ✅ "The solution your business needs."

The customer is always the protagonist; Ninexo is the partner helping them get there.

---

## 8. SEO CONTEXT (weave naturally, don't stuff)
digital solutions, business website, website development, mobile application, e-commerce, online store, custom business software, business automation, web application, digital transformation.

---

## 9. DELIVERABLE
A complete, high-fidelity, responsive prototype covering: Homepage (all sections in §5), Services, Selected Work, Chhava case-study page, About, Contact, Footer — built with a consistent, reusable component system per §2. Optimize for: **clarity, trust, customer relatability, visual proof, conversion, professionalism.**