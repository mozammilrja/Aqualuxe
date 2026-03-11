# Product Requirements Document (PRD)
## Kenly Lik - Packaged Drinking Water

---

## 1. Overview

### 1.1 Product Name
**Kenly Lik** — Premium Packaged Drinking Water

### 1.2 Document Version
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-11 | - | Initial PRD |
| 2.0 | 2026-03-11 | - | Updated for mineral water business |

### 1.3 Executive Summary
Kenly Lik is a packaged drinking water brand offering BIS-certified, 10-stage purified mineral water. The business sells water in multiple pack sizes (250ml to 20L jars) for homes, offices, events, and retail. Orders are placed via WhatsApp with home delivery service.

---

## 2. Business Model

### 2.1 Product Line

| Product | Pack Size | Quantity | Price (₹) | Target Customer |
|---------|-----------|----------|-----------|-----------------|
| 250ml Pack | 250ml | 24 bottles | 85 | Events, Meetings, Travel |
| 500ml Pack | 500ml | 24 bottles | 150 | Daily use, Office, Gym |
| 1 Litre Pack | 1L | 12 bottles | 120 | Family, Home |
| 2 Litre Pack | 2L | 9 bottles | 150 | Large families |
| 20 Litre Jar | 20L | 1 jar | 60 | Home/Office Dispensers |

### 2.2 Revenue Streams
1. **Retail Sales** - Direct to consumers via WhatsApp orders
2. **Bulk Orders** - Events, weddings, corporate functions
3. **Subscription Service** - Monthly 20L jar delivery for homes/offices
4. **B2B Sales** - Restaurants, hotels, shops (future)

### 2.3 Delivery Model
- Free delivery for 20L jars (minimum 2 jars)
- Delivery charges for small packs based on location
- Same-day delivery within city limits
- Subscription customers get priority delivery

---

## 3. Problem Statement

### 3.1 Current Situation
- Local areas often lack reliable packaged water supply
- Customers want trusted, certified drinking water
- Existing brands are expensive or unavailable
- No easy way to order water online in local area

### 3.2 Desired Outcome
- Establish Kenly Lik as trusted local water brand
- Easy ordering via WhatsApp with home delivery
- Build loyal customer base through quality service
- Scale to larger distribution over time

---

## 4. Goals & Success Metrics

### 4.1 Business Goals
| Goal | Description | Timeline |
|------|-------------|----------|
| G1 | Launch website and start taking orders | Week 1 |
| G2 | Acquire first 50 customers | Month 1 |
| G3 | 100+ 20L jar subscriptions | Month 3 |
| G4 | Event/bulk orders: 5+ per month | Month 2 |
| G5 | Break-even on operations | Month 6 |

### 4.2 Success Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| Website live | Day 1 | Deployed on Vercel |
| Daily WhatsApp inquiries | 10+ | Message count |
| Conversion rate | 30%+ | Orders / Inquiries |
| Repeat customers | 50% | Monthly retention |
| 20L jar deliveries/day | 20+ | Delivery records |
| Customer satisfaction | 4.5+ stars | Feedback |

---

## 5. User Personas

### 5.1 Homemaker (Sunita)
| Attribute | Description |
|-----------|-------------|
| **Age** | 35-50 |
| **Need** | Safe drinking water for family |
| **Pain Point** | Unreliable local water, health concerns |
| **Behavior** | Orders monthly, wants doorstep delivery |
| **Preferred Product** | 20L Jar subscription |

### 5.2 Office Manager (Rahul)
| Attribute | Description |
|-----------|-------------|
| **Age** | 28-40 |
| **Need** | Water supply for office of 20-50 people |
| **Pain Point** | Inconsistent delivery from current supplier |
| **Behavior** | Needs reliable weekly delivery, invoice |
| **Preferred Product** | 20L Jars (5-10 per week) |

### 5.3 Event Planner (Priya)
| Attribute | Description |
|-----------|-------------|
| **Age** | 25-45 |
| **Need** | Bulk water bottles for events |
| **Pain Point** | Last-minute availability, bulk pricing |
| **Behavior** | Orders 200-500+ bottles per event |
| **Preferred Product** | 500ml or 1L packs |

### 5.4 Shop Owner (Amit)
| Attribute | Description |
|-----------|-------------|
| **Age** | 30-55 |
| **Need** | Stock water bottles for retail |
| **Pain Point** | Margins, credit terms |
| **Behavior** | Weekly restocking |
| **Preferred Product** | All sizes for resale |

---

## 6. Product Features

### 6.1 Water Quality
| Feature | Specification |
|---------|---------------|
| Purification | 10-Stage (Sediment → Carbon → RO → UV → UF → Ozone) |
| TDS Level | 50-150 ppm (optimal mineral balance) |
| pH Level | 7.0 - 7.5 (neutral) |
| Certification | BIS (Bureau of Indian Standards) IS 14543 |
| Testing | Daily quality checks, lab reports |

### 6.2 Packaging
| Feature | Specification |
|---------|---------------|
| Bottle Material | Food-grade PET (BPA-free) |
| Cap | Tamper-evident seal |
| Label | Brand name, batch no., expiry, BIS mark |
| Jar (20L) | Reusable, sanitized before refill |
| Shelf Life | 6 months (sealed) |

### 6.3 Delivery
| Feature | Specification |
|---------|---------------|
| Coverage | Within 15 km radius |
| Timing | 8 AM - 8 PM |
| Same-day | Orders before 2 PM |
| Free Delivery | 20L jars (min 2), bulk orders |
| Tracking | WhatsApp updates |

---

## 7. Website Requirements

### 7.1 Landing Page Sections

#### 7.1.1 Hero Section
| Requirement | Description | Priority |
|-------------|-------------|----------|
| FR1.1 | Brand logo + name "Kenly Lik" | P0 |
| FR1.2 | Tagline: "Pure Water, Pure Life" | P0 |
| FR1.3 | Hero image of water bottle | P0 |
| FR1.4 | Trust badges (BIS Certified, Free Delivery) | P0 |
| FR1.5 | CTA buttons (View Products, Order Now) | P0 |
| FR1.6 | Quality indicators (TDS, pH level) | P1 |

#### 7.1.2 Products Section
| Requirement | Description | Priority |
|-------------|-------------|----------|
| FR2.1 | Display all 5 products in grid | P0 |
| FR2.2 | Each product: image, name, size, price | P0 |
| FR2.3 | "Order via WhatsApp" button per product | P0 |
| FR2.4 | Badge for popular/bestseller items | P1 |
| FR2.5 | Original price with discount (if any) | P1 |

#### 7.1.3 Features Section
| Requirement | Description | Priority |
|-------------|-------------|----------|
| FR3.1 | 10-Stage Purification | P0 |
| FR3.2 | BIS Certified | P0 |
| FR3.3 | Free Home Delivery | P0 |
| FR3.4 | Mineral Balanced | P1 |

#### 7.1.4 Stats/Social Proof
| Requirement | Description | Priority |
|-------------|-------------|----------|
| FR4.1 | Customer count | P1 |
| FR4.2 | Delivery coverage | P1 |
| FR4.3 | Customer testimonials | P1 |
| FR4.4 | Star ratings | P2 |

#### 7.1.5 Contact/CTA Section
| Requirement | Description | Priority |
|-------------|-------------|----------|
| FR5.1 | Large WhatsApp order button | P0 |
| FR5.2 | Phone number | P1 |
| FR5.3 | Delivery areas | P2 |

#### 7.1.6 Footer
| Requirement | Description | Priority |
|-------------|-------------|----------|
| FR6.1 | Brand info | P1 |
| FR6.2 | Quick links | P2 |
| FR6.3 | Social media | P2 |
| FR6.4 | Copyright | P1 |

### 7.2 WhatsApp Integration
| Requirement | Description |
|-------------|-------------|
| Default message | "Hi! I'm interested in ordering Kenly Lik packaged drinking water. Please share the details." |
| Product-specific | "Hi! I want to order [Product Name] - ₹[Price]/[Unit]" |
| Phone number | +91 8102472325 |

---

## 8. Technical Specifications

### 8.1 Tech Stack
| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Hosting | Vercel |
| Images | Unsplash (placeholder) → Real photos |

### 8.2 Data Schema

```typescript
interface Product {
  id: number;
  name: string;           // "500ml Pack"
  subtitle: string;       // "Case of 24 Bottles"
  price: number;          // 150
  originalPrice?: number; // for discounts
  description: string;
  image: string;
  features: string[];     // ["BIS Certified", "UV Treated"]
  badge?: string;         // "Bestseller"
  color: string;          // accent color
  unit: string;           // "Pack", "Jar"
}

interface SiteConfig {
  name: string;           // "Kenly Lik"
  tagline: string;        // "Pure Water, Pure Life"
  description: string;
  contact: {
    whatsapp: string;     // "918102472325"
    email: string;
    location: string;
  };
}
```

---

## 9. Competitive Analysis

### 9.1 Direct Competitors
| Brand | Strengths | Weaknesses | Our Advantage |
|-------|-----------|------------|---------------|
| Bisleri | Brand trust, wide availability | Expensive, no local delivery | Lower price, personal service |
| Kinley | Coca-Cola backing | Limited local presence | Home delivery, subscription |
| Aquafina | PepsiCo brand | Premium pricing | Better value |
| Local RO plants | Cheap | No certification, quality varies | BIS certified, consistent |

### 9.2 Our Differentiators
1. **Personal Service** - WhatsApp ordering, know your delivery person
2. **Subscription Model** - Hassle-free monthly delivery
3. **Certified Quality** - BIS certified, transparent testing
4. **Competitive Pricing** - Better than national brands
5. **Local Presence** - Quick delivery, easy returns

---

## 10. Marketing Strategy

### 10.1 Phase 1: Launch (Month 1)
| Channel | Activity | Budget |
|---------|----------|--------|
| WhatsApp | Broadcast to contacts | Free |
| Instagram | Create page, post daily | Free |
| Local flyers | Distribute in apartments | ₹2,000 |
| Word of mouth | Friends & family | Free |

### 10.2 Phase 2: Growth (Month 2-6)
| Channel | Activity | Budget |
|---------|----------|--------|
| Google Maps | List business | Free |
| Facebook Ads | Target local area | ₹5,000/mo |
| Partnerships | Gyms, offices, shops | Commission-based |
| Referral program | ₹50 off for referrals | Variable |

### 10.3 Phase 3: Scale (Month 6+)
| Channel | Activity |
|---------|----------|
| B2B Sales | Hotels, restaurants, caterers |
| Franchise | Expand to nearby areas |
| Online ordering | Add payment gateway |
| Mobile app | For subscriptions |

---

## 11. Operations Plan

### 11.1 Daily Operations
| Time | Activity |
|------|----------|
| 6:00 AM | Production starts (filling, sealing) |
| 8:00 AM | Deliveries begin |
| 2:00 PM | Cutoff for same-day orders |
| 6:00 PM | Evening delivery slot ends |
| 7:00 PM | Inventory check, next-day planning |

### 11.2 Quality Control
| Check | Frequency |
|-------|-----------|
| TDS testing | Every batch |
| pH testing | Every batch |
| Microbial testing | Weekly (external lab) |
| Packaging inspection | Every batch |
| Customer feedback review | Daily |

### 11.3 Inventory Management
| Product | Min Stock | Reorder Point |
|---------|-----------|---------------|
| 250ml | 50 packs | 20 packs |
| 500ml | 100 packs | 40 packs |
| 1L | 50 packs | 20 packs |
| 2L | 30 packs | 15 packs |
| 20L Jars | 100 jars | 50 jars |

---

## 12. Financial Projections

### 12.1 Startup Costs
| Item | Cost (₹) |
|------|----------|
| RO Plant + Equipment | 2,00,000 |
| 20L Jars (100 pcs) | 15,000 |
| Packaging materials | 20,000 |
| Delivery vehicle | 50,000 |
| Website + Branding | 10,000 |
| Working capital | 50,000 |
| **Total** | **3,45,000** |

### 12.2 Monthly Operating Costs
| Item | Cost (₹) |
|------|----------|
| Raw water | 5,000 |
| Electricity | 8,000 |
| Packaging | 15,000 |
| Staff (2 people) | 30,000 |
| Delivery fuel | 10,000 |
| Marketing | 5,000 |
| Miscellaneous | 5,000 |
| **Total** | **78,000** |

### 12.3 Revenue Projections
| Month | 20L Jars | Small Packs | Bulk Orders | Total Revenue |
|-------|----------|-------------|-------------|---------------|
| 1 | 200 × ₹60 = ₹12,000 | ₹10,000 | ₹5,000 | ₹27,000 |
| 3 | 500 × ₹60 = ₹30,000 | ₹25,000 | ₹15,000 | ₹70,000 |
| 6 | 800 × ₹60 = ₹48,000 | ₹40,000 | ₹30,000 | ₹1,18,000 |
| 12 | 1500 × ₹60 = ₹90,000 | ₹60,000 | ₹50,000 | ₹2,00,000 |

---

## 13. 5-Year Roadmap

### Year 1: Establish
- ✅ Website launch
- ✅ Start local deliveries
- 🎯 500+ regular customers
- 🎯 Break-even by month 6

### Year 2: Grow
- 🎯 Online payment integration
- 🎯 Mobile app for subscriptions
- 🎯 2nd delivery vehicle
- 🎯 B2B partnerships (10+ businesses)

### Year 3: Expand
- 🎯 Open 2nd location/franchise
- 🎯 3000+ customers
- 🎯 Enter retail (shops, supermarkets)
- 🎯 Monthly revenue ₹5,00,000+

### Year 4: Scale
- 🎯 5 locations/franchises
- 🎯 10,000+ customers
- 🎯 Own brand recognition
- 🎯 Export to nearby districts

### Year 5: Diversify
- 🎯 Add flavored water line
- 🎯 Ice/cold water services
- 🎯 Water dispenser sales
- 🎯 Annual revenue ₹50,00,000+

---

## 14. Risk Analysis

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Water quality issue | Low | High | Daily testing, insurance |
| Competition entry | Medium | Medium | Build loyal customer base |
| Equipment failure | Medium | High | Maintenance schedule, backup |
| Delivery delays | Medium | Medium | Buffer stock, multiple vehicles |
| Seasonal demand drop | Medium | Low | Subscription model smooths revenue |
| Regulatory changes | Low | High | Stay compliant, monitor updates |

---

## 15. Success Criteria

### Phase 1 (Month 1-3) ✓ Complete when:
- [ ] Website live and operational
- [ ] 50+ active customers
- [ ] 10+ daily orders
- [ ] Positive customer feedback

### Phase 2 (Month 4-6) ✓ Complete when:
- [ ] 200+ regular customers
- [ ] 5+ B2B accounts
- [ ] Break-even achieved
- [ ] Consistent quality maintained

### Phase 3 (Month 7-12) ✓ Complete when:
- [ ] 500+ customers
- [ ] Monthly profit ₹30,000+
- [ ] Brand recognition in local area
- [ ] Ready for expansion

---

## 16. Appendix

### 16.1 Contact Information
| Detail | Value |
|--------|-------|
| Brand Name | Kenly Lik |
| WhatsApp | +91 8102472325 |
| Website | https://kenlylik.vercel.app |
| Email | hello@kenlylik.com |

### 16.2 BIS Certification Requirements
- Apply at manakonline.bis.gov.in
- Water quality testing from NABL-accredited lab
- Plant inspection by BIS officer
- Annual license renewal

### 16.3 Useful Links
- BIS Standards: IS 14543 (Packaged Drinking Water)
- FSSAI Registration: foscos.fssai.gov.in
- GST Registration: gst.gov.in

---

*Document Last Updated: March 11, 2026*
