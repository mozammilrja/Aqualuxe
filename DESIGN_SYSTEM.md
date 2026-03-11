# Aqualuxe Design System
## Premium Water Bottle Brand

---

## 1. Design Philosophy

### Brand Essence
**"Luxury Hydration"** — We're not selling water bottles, we're selling a lifestyle of premium self-care and modern aesthetics.

### Design Pillars
| Pillar | Description |
|--------|-------------|
| **Cinematic** | Every scroll feels like a movie scene |
| **Premium** | Apple-level attention to detail |
| **Minimal** | Less is more, every element earns its place |
| **Emotional** | Create desire, not just information |
| **Fluid** | Smooth, buttery animations throughout |

### Inspiration References
- Apple.com (product storytelling)
- Stripe.com (depth and polish)
- Linear.app (modern SaaS aesthetic)
- Aesop.com (luxury product presentation)
- Nothing.tech (bold typography)

---

## 2. Color System

### Primary Palette
```css
--color-primary: #0A0A0B;        /* Rich Black - backgrounds */
--color-primary-light: #18181B;   /* Elevated surfaces */
--color-primary-muted: #27272A;   /* Cards, containers */

--color-accent: #3B82F6;          /* Electric Blue - CTAs */
--color-accent-glow: #60A5FA;     /* Hover states */
--color-accent-subtle: #1D4ED8;   /* Pressed states */

--color-text-primary: #FAFAFA;    /* Headings */
--color-text-secondary: #A1A1AA;  /* Body text */
--color-text-muted: #71717A;      /* Captions */

--color-surface: #FFFFFF;         /* Light mode cards */
--color-border: rgba(255,255,255,0.1); /* Subtle dividers */
```

### Gradient System
```css
/* Hero gradient - depth effect */
--gradient-hero: radial-gradient(
  ellipse 80% 50% at 50% -20%,
  rgba(59, 130, 246, 0.15),
  transparent
);

/* Glass effect */
--gradient-glass: linear-gradient(
  135deg,
  rgba(255,255,255,0.1),
  rgba(255,255,255,0.05)
);

/* Premium shine */
--gradient-shine: linear-gradient(
  90deg,
  transparent,
  rgba(255,255,255,0.1),
  transparent
);

/* Product glow */
--gradient-glow: radial-gradient(
  circle at center,
  rgba(59, 130, 246, 0.4),
  transparent 70%
);
```

### Semantic Colors
```css
--color-success: #22C55E;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;
```

---

## 3. Typography System

### Font Stack
```css
--font-display: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Inter', -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

### Type Scale
| Token | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| `display-2xl` | 72px / 4.5rem | 700 | 1.0 | Hero headline |
| `display-xl` | 60px / 3.75rem | 700 | 1.1 | Section headers |
| `display-lg` | 48px / 3rem | 600 | 1.1 | Sub-headlines |
| `heading-xl` | 36px / 2.25rem | 600 | 1.2 | Card titles |
| `heading-lg` | 30px / 1.875rem | 600 | 1.3 | Feature headers |
| `heading-md` | 24px / 1.5rem | 600 | 1.4 | Product names |
| `body-lg` | 20px / 1.25rem | 400 | 1.6 | Lead paragraphs |
| `body-md` | 16px / 1rem | 400 | 1.6 | Body text |
| `body-sm` | 14px / 0.875rem | 400 | 1.5 | Captions |
| `label` | 12px / 0.75rem | 500 | 1.4 | Tags, labels |

### Typography CSS
```css
.display-2xl {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.03em;
}

.display-xl {
  font-size: clamp(2rem, 6vw, 3.75rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
}

.body-lg {
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: -0.01em;
}
```

---

## 4. Spacing System

### Base Unit: 4px

| Token | Value | Use |
|-------|-------|-----|
| `space-1` | 4px | Tight gaps |
| `space-2` | 8px | Icon spacing |
| `space-3` | 12px | Small gaps |
| `space-4` | 16px | Default gap |
| `space-5` | 20px | Component padding |
| `space-6` | 24px | Card padding |
| `space-8` | 32px | Section gaps |
| `space-10` | 40px | Large gaps |
| `space-12` | 48px | Section padding |
| `space-16` | 64px | Section margins |
| `space-20` | 80px | Large sections |
| `space-24` | 96px | Hero padding |
| `space-32` | 128px | Mega sections |

### Section Spacing
```css
--section-padding-y: clamp(4rem, 10vh, 8rem);
--container-padding-x: clamp(1rem, 5vw, 4rem);
--container-max-width: 1400px;
```

---

## 5. Layout System

### Grid
```css
/* 12-column grid */
--grid-columns: 12;
--grid-gap: 24px;
--grid-gap-mobile: 16px;

/* Container widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;
```

### Breakpoints
| Token | Value | Target |
|-------|-------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## 6. Component System

### Card Styles
```css
/* Glass Card */
.card-glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
}

/* Elevated Card */
.card-elevated {
  background: var(--color-primary-light);
  border-radius: 20px;
  box-shadow: 
    0 0 0 1px rgba(255,255,255,0.05),
    0 20px 50px -20px rgba(0,0,0,0.5);
}

/* Product Card */
.card-product {
  background: linear-gradient(
    180deg,
    var(--color-primary-muted),
    var(--color-primary-light)
  );
  border-radius: 32px;
  overflow: hidden;
}
```

### Button Styles
```css
/* Primary CTA */
.btn-primary {
  background: var(--color-accent);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  background: var(--color-accent-glow);
  transform: translateY(-2px);
  box-shadow: 0 20px 40px -15px rgba(59, 130, 246, 0.5);
}

/* Secondary */
.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
}

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--color-text-secondary);
  padding: 12px 24px;
}
```

---

## 7. Animation System

### Timing Functions
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Duration Scale
| Token | Value | Use |
|-------|-------|-----|
| `fast` | 150ms | Micro-interactions |
| `normal` | 300ms | Standard transitions |
| `slow` | 500ms | Page transitions |
| `slower` | 800ms | Cinematic reveals |

### Animation Presets

#### Fade Up (Scroll Reveal)
```javascript
{
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}
```

#### Stagger Children
```javascript
{
  container: {
    animate: { transition: { staggerChildren: 0.1 } }
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  }
}
```

#### Scale In
```javascript
{
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
}
```

#### Float (Continuous)
```javascript
{
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}
```

#### Glow Pulse
```javascript
{
  animate: {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.3)",
      "0 0 40px rgba(59, 130, 246, 0.5)",
      "0 0 20px rgba(59, 130, 246, 0.3)"
    ],
    transition: { duration: 2, repeat: Infinity }
  }
}
```

### Scroll Animations
| Element | Animation | Trigger |
|---------|-----------|---------|
| Section titles | Fade up + blur | Enter viewport |
| Product cards | Stagger fade up | Enter viewport |
| Images | Scale + parallax | Scroll position |
| Stats | Counter animation | Enter viewport |
| CTA buttons | Glow pulse | Hover |

---

## 8. Section Designs

### 8.1 Hero Section
```
┌─────────────────────────────────────────────────────────┐
│  ░░░░░░░░░ GRADIENT GLOW BACKGROUND ░░░░░░░░░          │
│                                                         │
│     [KENLY LIK]  ← Animated logo                       │
│                                                         │
│           ╔═══════════════════════════╗                 │
│           ║    STAY HYDRATED.        ║  ← Reveal anim  │
│           ║    STAY STYLISH.         ║                 │
│           ╚═══════════════════════════╝                 │
│                                                         │
│     Premium water bottles for the modern lifestyle      │
│                                                         │
│        ┌──────────────┐  ┌──────────────┐              │
│        │  Shop Now →  │  │  Learn More  │              │
│        └──────────────┘  └──────────────┘              │
│                                                         │
│              ┌─────────────────┐                        │
│              │                 │  ← Floating product    │
│              │   [BOTTLE 3D]   │    with glow          │
│              │                 │                        │
│              └─────────────────┘                        │
│                                                         │
│                    ↓ Scroll                             │
└─────────────────────────────────────────────────────────┘
```

**Animations:**
- Logo fades in with blur (0.5s)
- Headline reveals word by word (stagger 0.1s)
- Subtext fades up (0.3s delay)
- Buttons scale in (0.4s delay)
- Product floats continuously
- Background has subtle parallax

### 8.2 Brand Story Section
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                        WHY                              │
│                     KENLY LIK                           │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │    🌊    │  │    ♻️    │  │    ✨    │              │
│  │   PURE   │  │   ECO    │  │ PREMIUM  │              │
│  │Hydration │  │ Friendly │  │ Quality  │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│                                                         │
│                 ↓ Drag scroll                           │
│                                                         │
│  ═══════════════════════════════════════════════════   │
│     "Crafted for those who                             │
│      demand the extraordinary"                          │
│                                               — Quote   │
│  ═══════════════════════════════════════════════════   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 8.3 Product Showcase
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              THE COLLECTION                             │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │ ░░░ GLOW ░░░   │  │ ░░░ GLOW ░░░   │              │
│  │                 │  │                 │              │
│  │   [PRODUCT]     │  │   [PRODUCT]     │              │
│  │                 │  │                 │              │
│  │─────────────────│  │─────────────────│              │
│  │ Classic 500ml   │  │ Sport 750ml     │              │
│  │ ₹499           │  │ ₹699            │              │
│  │ [Order →]       │  │ [Order →]       │              │
│  └─────────────────┘  └─────────────────┘              │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────┐              │
│  │   [PRODUCT]     │  │   [PRODUCT]     │              │
│  │ Pro 1000ml      │  │ Premium 750ml   │              │
│  │ ₹899           │  │ ₹1,199         │              │
│  └─────────────────┘  └─────────────────┘              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Product Card Animation:**
- Hover: Scale 1.02, lift shadow
- Image: Subtle float effect
- Button: Glow on hover
- Background: Gradient shift

### 8.4 Features Section
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              ENGINEERED FOR                             │
│               PERFECTION                                │
│                                                         │
│  ┌───────────────────────────────────────────────────┐ │
│  │                                                   │ │
│  │   [LARGE PRODUCT IMAGE]        24 HOURS COLD     │ │
│  │                                12 HOURS HOT      │ │
│  │                                                   │ │
│  │                                Double-wall        │ │
│  │                                vacuum insulated   │ │
│  │                                                   │ │
│  └───────────────────────────────────────────────────┘ │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │ Leak     │  │ BPA      │  │ Premium  │             │
│  │ Proof    │  │ Free     │  │ Steel    │             │
│  └──────────┘  └──────────┘  └──────────┘             │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 8.5 Social Proof
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│           LOVED BY THOUSANDS                            │
│                                                         │
│    ┌────────┐   ┌────────┐   ┌────────┐               │
│    │  500+  │   │  4.9   │   │  100%  │               │
│    │ Happy  │   │ Rating │   │  Safe  │               │
│    │Customers│   │        │   │Materials│               │
│    └────────┘   └────────┘   └────────┘               │
│                                                         │
│  ═══════════════════════════════════════════════════   │
│                                                         │
│  "Best water bottle I've ever owned. The quality       │
│   is exceptional and it keeps my water cold all day."  │
│                                         — Customer      │
│                                                         │
│  ═══════════════════════════════════════════════════   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 8.6 CTA Section
```
┌─────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░░░░░░░░░ GRADIENT BACKGROUND ░░░░░░░░░░░░░░░░░░   │
│                                                         │
│                                                         │
│               READY TO UPGRADE                          │
│              YOUR HYDRATION?                            │
│                                                         │
│         ┌─────────────────────────────┐                │
│         │     Order via WhatsApp →    │  ← Glowing    │
│         └─────────────────────────────┘                │
│                                                         │
│              Free shipping on ₹999+                    │
│                                                         │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────────────┘
```

### 8.7 Footer
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│     KENLY LIK                   Quick Links            │
│     Stay Hydrated,              • Products             │
│     Stay Stylish                • About                │
│                                 • Contact              │
│     ──────────────                                     │
│                                 Follow Us              │
│     © 2026 Kenly Lik            [IG] [TW] [FB]        │
│     All rights reserved                                │
│                                                         │
│     Made with 💙 in India                              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 9. Interaction Patterns

### Hover Effects
| Element | Effect |
|---------|--------|
| Buttons | Scale 1.02 + glow shadow |
| Cards | Lift (translateY -4px) + deeper shadow |
| Links | Underline reveal animation |
| Images | Subtle zoom (scale 1.05) |
| Nav items | Color transition + dot indicator |

### Scroll Behaviors
| Trigger | Action |
|---------|--------|
| 50px scroll | Navbar becomes solid |
| Section enter | Content fades up |
| Parallax | Background moves at 0.5x speed |
| Product cards | Staggered reveal |

### Click Feedback
| Element | Feedback |
|---------|----------|
| Buttons | Scale down briefly (0.98) |
| Cards | Quick highlight flash |
| WhatsApp CTA | Pulse animation |

---

## 10. Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Larger touch targets (min 48px)
- Reduced motion (respect prefers-reduced-motion)
- Sticky mobile CTA bar
- Hamburger navigation

### Tablet (768px - 1024px)
- 2-column product grid
- Side-by-side feature layouts
- Full navigation visible

### Desktop (> 1024px)
- 3-4 column product grid
- Horizontal feature scrolls
- Full animations enabled
- Hover effects active

---

## 11. Accessibility

### Requirements
- [ ] Color contrast ratio ≥ 4.5:1
- [ ] Focus visible indicators
- [ ] Skip navigation link
- [ ] Alt text for all images
- [ ] ARIA labels for interactive elements
- [ ] Keyboard navigable
- [ ] Reduced motion support

### Focus States
```css
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
  border-radius: 4px;
}
```

---

## 12. Performance Budget

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.0s |
| Cumulative Layout Shift | < 0.1 |
| Total page size | < 1MB |
| Image optimization | WebP, lazy loading |

---

*Design System v1.0 — Kenly Lik*
*Created: 2026-03-11*
