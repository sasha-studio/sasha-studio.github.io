# Sasha Makarov — Design Portfolio

English-language game art and visual design portfolio. A cinematic storybook direction combines midnight indigo, warm gold, cream, and lavender. React + Vite, with adapted React Bits motion components.

## Local development

Requires Node.js 22.12+. Run `npm ci`, then `npm run dev`.
Build with `npm run build`; inspect the production build with `npm run preview`.

## Updating content

Edit `src/data.js`:

- `profile`: name, introduction, biography, role, email. A contact link appears only when an email is provided.
- `projects`: case studies with unique URL-safe slugs, descriptions, services, and media.
- Put media under `public/media/`, referencing files as `/media/filename.webp`.
- Add `cover: '/media/cover.webp'` to replace an illustrated cover.
- Gallery entries accept `{ src: '/media/detail.webp', title: 'Packaging details' }`. Clicking opens an enlarged image dialog, with Escape and backdrop dismissal.
- Set `video: { src: '/media/film.mp4', type: 'video/mp4', captions: '/media/film-en.vtt' }` to enable the video player. Captions are optional. With `video: null`, a coming-soon panel appears.

The four initial projects are **illustrative concepts**, not claims of Sasha's client work. Two AI-generated sample illustrations support the environment and character directions. Game UI and editorial covers are editable HTML/CSS compositions. AI imagery is labelled on the homepage and relevant case studies. Replace draft copy and artwork with approved project content. Real project videos, screenshots, and contact details have not been supplied.

Categories and counts are driven by `src/data.js`. Game projects lead the homepage; Graphic design appears in a separate feature and has its own filter. Keep at least one Graphic design project while using the current homepage layout.

## Design and motion

- Fraunces: expressive storybook headlines; DM Sans: navigation and body copy.
- BlurText: a brief word reveal for the hero heading.
- FadeContent: restrained GSAP ScrollTrigger entrances for sections and project cards.
- TiltedCard: spring-based pointer tilt (1.3 degrees for the featured world, 3 degrees for other covers).
- Touch devices keep static cards. Reduced-motion users get visible static text and sections with no tilt or smooth scrolling.
- Sources, adaptation notes, and the upstream license are in `src/components/react-bits/`.
- Illustration assets are delivered as WebP, approximately 505 KiB combined. No canvas or WebGL background is required.

## Routes and hosting

- Home: `/#/`
- Example case: `/#/projects/moonlit-kingdom`

Hash routing supports direct links and refreshes on GitHub Pages without server-side redirects. Unknown projects show a recovery page.

The workflow deploys on pushes to `main` or a manual run. In repository Settings → Pages, select **GitHub Actions**. The workflow was prepared locally; this task did not push or publish the website. The configuration targets the root domain `sasha-studio.github.io`; subdirectory hosting requires adjusting Vite's base and media paths.

## Accessibility and validation

Responsive layouts, visible keyboard focus, skip link, reduced-motion support, native dialog, and native video controls. Google Fonts supplies Fraunces and DM Sans with system fallbacks.

Build passed. Browser checks covered the 1440px homepage, 375px homepage and case layouts, Game UI and Graphic design filtering, gallery enlargement and Escape dismissal, and direct case reload in the production build. Production navigation through the environment, character, and game UI cases passed without browser errors. Actual video playback must be checked once media is supplied. Reduced-motion behaviour is implemented in the components and CSS; OS-level preference switching was not part of the browser check.
