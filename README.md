# Digital-Technology-Service-Website

## Project Structure

```text
technology-service-app/
├─ app/
│  ├─ api/
│  │  ├─ action.ts
│  │  └─ contact/
│  │     └─ route.js
│  ├─ contacts/
│  │  └─ page.tsx
│  └─ service/
│     ├─ audio/
│     │  └─ page.tsx
│     ├─ laptops/
│     │  └─ page.tsx
│     ├─ monitors/
│     │  └─ page.tsx
│     ├─ television/
│     │  └─ page.tsx
│     └─ video/
│        └─ page.tsx
│
├─ components/
│  ├─ contactspage/
│  │  ├─ ContactsCards.tsx
│  │  ├─ ContactsForm.tsx
│  │  └─ ContactsHero.tsx
│  ├─ homepage/
│  │  ├─ footer/
│  │  │  ├─ ContactListItem.tsx
│  │  │  └─ Footer.tsx
│  │  ├─ header/
│  │  │  ├─ Header.tsx
│  │  │  ├─ HeaderActions.tsx
│  │  │  ├─ HeaderLogo.tsx
│  │  │  ├─ ListItem.tsx
│  │  │  ├─ MobileActionButtons.tsx
│  │  │  ├─ MobileHamburger.tsx
│  │  │  └─ MobileMenuItems.tsx
│  │  ├─ hero/
│  │  │  ├─ Hero.tsx
│  │  │  ├─ HeroBadge.tsx
│  │  │  ├─ HeroCta.tsx
│  │  │  ├─ HeroDescription.tsx
│  │  │  ├─ HeroHeading.tsx
│  │  │  ├─ HeroLogoCard.tsx
│  │  │  ├─ HeroLongCard.tsx
│  │  │  ├─ HeroServiceCard.tsx
│  │  │  ├─ HeroStatItem.tsx
│  │  │  └─ HeroStatistics.tsx
│  │  ├─ section-header/
│  │  │  └─ SectionHeading.tsx
│  │  └─ service-info/
│  │     ├─ ServiceCard.tsx
│  │     └─ ServiceInfo.tsx
│  ├─ servicepage/
│  │  ├─ ServiceCta.tsx
│  │  ├─ ServiceDescLeft.tsx
│  │  ├─ ServiceDescRight.tsx
│  │  ├─ ServiceDescription.tsx
│  │  ├─ ServiceDetails.tsx
│  │  ├─ ServiceDetailsLItem.tsx
│  │  ├─ ServiceDetailsLeft.tsx
│  │  ├─ ServiceDetailsRItem.tsx
│  │  ├─ ServiceDetailsRight.tsx
│  │  ├─ ServiceFaq.tsx
│  │  ├─ ServiceFaqHeading.tsx
│  │  ├─ ServiceFaqIcon.tsx
│  │  ├─ ServiceFaqItem.tsx
│  │  ├─ ServiceHeading.tsx
│  │  ├─ ServiceHero.tsx
│  │  ├─ ServiceMiniNav.tsx
│  │  └─ ...
│  └─ ui/
│     ├─ ArrowIcon.tsx
│     ├─ AudioIcon.tsx
│     ├─ CheckBadge.tsx
│     ├─ CheckCircle.tsx
│     ├─ ChevronRight.tsx
│     ├─ DesktopIcon.tsx
│     ├─ LaptopIcon.tsx
│     ├─ MailIcon.tsx
│     ├─ MapPinIcon.tsx
│     ├─ PhoneIcon.tsx
│     ├─ QuestionIcon.tsx
│     ├─ TvIcon.tsx
│     ├─ UserGroup.tsx
│     └─ VideoIcon.tsx
│
├─ lib/
│  ├─ definitions.ts
│  └─ placeholderdata.ts
│
├─ public/
│  ├─ Gemini_Generated_Image_yj8ifuyj8ifuyj8i.jpg
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ hardware-detect-svgrepo-com.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
│
├─ AGENTS.md
├─ CLAUDE.md
├─ README.md
├─ eslint.config.mjs
├─ next-env.d.ts
├─ next.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
├─ postcss.config.mjs
├─ tsconfig.json
└─ .gitignore
```

### Folder overview

- `app/` – app routes and page-level structure for the Next.js website.
- `components/` – reusable UI and page-specific components.
- `lib/` – shared data definitions and placeholder content.
- `public/` – static assets and media files used by the app.
- Root config files – project configuration for Next.js, TypeScript, ESLint, and pnpm workspace management.
