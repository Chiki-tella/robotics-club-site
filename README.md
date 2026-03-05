# RCA Robotics Club Website

A modern, interactive website for the RCA Robotics Club built with React, TypeScript, and Tailwind CSS. Features a sleek dark theme with cyan accents and smooth animations.

## Features

- **Modern UI/UX**: Dark theme with vibrant cyan and blue gradients
- **Responsive Design**: Fully responsive across all devices
- **Interactive Components**: Smooth animations using Motion (Framer Motion)
- **Dynamic Dialogs**: Login, registration, project details, event details, and blog article modals
- **Component Library**: Built with Radix UI primitives and shadcn/ui components
- **Type-Safe**: Written in TypeScript for better developer experience

## Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **Animations**: Motion 12.23.24
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd robotics
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist` directory.

## Project Structure

```
robotics/
├── public/                      # Static assets
│   ├── robotics_club_dark.png  # Club logo
│   └── sleek-black-robot.avif  # Hero image
├── src/
│   ├── app/
│   │   ├── components/          # React components
│   │   │   ├── dialogs/        # Modal dialogs
│   │   │   ├── ui/             # UI primitives
│   │   │   ├── About.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── Events.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── JoinCTA.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Team.tsx
│   │   └── App.tsx             # Main app component
│   ├── styles/                  # Global styles
│   └── main.tsx                # App entry point
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## Key Sections

- **Hero**: Eye-catching landing section with call-to-action buttons
- **About**: Information about the robotics club
- **Projects**: Showcase of club projects with detailed modals
- **Team**: Meet the team members
- **Events**: Upcoming workshops and competitions
- **Gallery**: Photo gallery of club activities
- **Blog**: Articles and tutorials
- **Contact/Join**: Registration form for new members

## Customization

### Colors

The site uses a cyan and blue color scheme. To modify colors, update the Tailwind configuration or component styles:

- Primary: Cyan (cyan-400, cyan-500)
- Secondary: Blue (blue-500, blue-600)
- Background: Black and dark grays

### Content

Update content in the respective component files:
- Projects: `src/app/components/Projects.tsx`
- Events: `src/app/components/Events.tsx`
- Blog: `src/app/components/Blog.tsx`
- Team: `src/app/components/Team.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

RCA Robotics Club
- Email: info@rcarobotics.com
- Phone: (555)090909
- Address: Nyabihu,Mukamira, RCA

---

Built with ❤️ by the RCA Robotics Club
