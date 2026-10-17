# Abdullah Askari — Portfolio

Personal portfolio for Abdullah Askari, a software engineering student focused on React Native mobile apps and modern web development.

**Website:** [abdullahaskari.dev](https://abdullahaskari.dev)

## Features

- Responsive hero with rotating Ideas, Concepts, and Designs text and an animated 3D knot.
- Fixed navigation with active section highlighting and a mobile menu that locks background scrolling and supports keyboard dismissal.
- About section with a photo, draggable cards, a Pakistan time clock, a globe, and an orbiting tech stack.
- Featured projects with detail dialogs and desktop hover previews.
- Internship experience timeline.
- Email, WhatsApp, and social contact links.

## Stack

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, and CSS Modules. Three.js, React Three Fiber, and Drei render the hero model; Motion, GSAP, and COBE support other animations and visuals.

## Local development

Use Node.js compatible with Next.js and pnpm. The installed Next.js version requires Node.js 20.9 or newer; the project's package manager is pinned to `pnpm@11.22.0` in `package.json`.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open [localhost:3000](http://localhost:3000). If that port is already occupied, use the address printed by the development server.

Font loading uses Google Fonts, so an initial build may need network access.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start development with live updates |
| `pnpm lint` | Run ESLint |
| `pnpm build` | Create a production build and check TypeScript |
| `pnpm start` | Serve the existing production build |

Run `pnpm build` before `pnpm start`. For changes to appear immediately while editing, use `pnpm dev` instead.

## Project structure

```text
app/
  layout.tsx                   Metadata, fonts, and global stylesheet
  page.tsx                     Page section composition
  globals.css                  Shared styles and preserved legacy rules
  sections/
    NavBar.tsx                 Navigation and mobile menu behavior
    NavBar.module.css          Navigation styles
    Hero.tsx                   Hero layout and WebGL canvas
    Hero.module.css            Hero layout styles
    About.tsx
    Projects.tsx
    Experience.tsx
    Contact.tsx
    Footer.tsx
  components/
    HeroText.tsx               Original hero wording and rotating words
    HeroText.module.css        Hero typography and link styles
    HeroModel.tsx              Procedural 3D knot, lights, and animation
    Project.tsx                Project list item
    ProjectDetails.tsx         Project detail dialog
    ...                        Shared visual and interactive components
constants/
  index.ts                     Navigation, projects, experience, and socials
  types.ts                     Shared TypeScript types
public/
  assets/                      Project images, icons, and illustrations
  models/                      Existing astronaut model asset
  me.jpeg                      Profile photo
.github/workflows/ci.yml       Pull request lint and build checks
```

## Updating content and design

- **Projects, internship bullet points, and social links:** edit `constants/index.ts`.
- **Hero wording:** edit `app/components/HeroText.tsx`.
- **Hero model:** edit `app/components/HeroModel.tsx`. The active knot is generated in code; it does not load the astronaut asset.
- **Navigation:** edit `app/sections/NavBar.tsx` and its CSS module.
- **Hero layout and typography:** use `Hero.module.css` and `HeroText.module.css` respectively.
- **Bio and profile photo:** edit `app/sections/About.tsx` and the image in `public/`.
- **Contact details:** edit `app/sections/Contact.tsx`; update the defaults in `MailButton.tsx` and `CopyEmailButton.tsx` when changing the email address.
- **Page title, description, and icons:** edit `app/layout.tsx`.

Keep component styles in their CSS modules. Preserve existing rules in `globals.css`; append any necessary shared overrides after the existing styles.

## Preview on an Android phone with ADB

Start the local server, connect a phone with USB or wireless debugging enabled, and authorize the computer on the phone. With Android Platform Tools installed, run:

```bash
adb devices
adb reverse tcp:3000 tcp:3000
adb shell am start -a android.intent.action.VIEW -d http://localhost:3000
```

The reverse mapping lets the phone access the computer's server through its own `localhost:3000`. The server and ADB connection must remain active. If multiple devices are connected, select one with `adb -s SERIAL`.

Capture the phone screen to the computer:

```bash
adb exec-out screencap -p > mobile-preview.png
```

Remove the port mapping when finished:

```bash
adb reverse --remove tcp:3000
```

## Validation and deployment

Before deploying:

```bash
pnpm lint
pnpm build
```

Check the mobile menu, section links, project dialogs, and hero rendering in a browser. The hero pauses rendering when offscreen and disables its animation when reduced motion is requested.

`vercel.json` identifies this as a Next.js project for Vercel. The GitHub Actions workflow runs lint and production build checks for pull requests targeting `main`.

No environment variables are currently required. Contact actions use email and external links rather than a server-side contact form.
