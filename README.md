# Aperxium Technologies

Website for Aperxium Technologies, built with Next.js and TypeScript.

Live site: [www.apexiumstechnologies.com](https://www.apexiumstechnologies.com/)

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router) with React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, `tailwindcss-animate`, `tw-animate-css`
- **UI components:** [shadcn/ui](https://ui.shadcn.com/) on top of Radix UI primitives
- **Animation:** Framer Motion, `react-scroll-parallax`
- **Forms and validation:** React Hook Form, Zod
- **Charts:** Recharts
- **Icons:** Lucide, React Icons
- **Messaging:** Twilio SDK
- **Theming:** `next-themes`

## Project Structure

```
.
├── app/          # Next.js App Router pages and layouts
├── components/   # Reusable UI components
├── data/         # Static content and data
├── hooks/        # Custom React hooks
├── lib/          # Utilities and helpers
├── public/       # Static assets (images, fonts, icons)
├── styles/       # Global styles
├── components.json      # shadcn/ui configuration
├── next.config.mjs      # Next.js configuration
├── postcss.config.mjs   # PostCSS / Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm or pnpm (both `package-lock.json` and `pnpm-lock.yaml` are included)

### Installation

```bash
git clone https://github.com/Nabeehamaqsood/Aperxium-Technologies.git
cd Aperxium-Technologies
npm install
# or
pnpm install
```

### Environment Variables

The project includes the Twilio SDK. If you use any Twilio-powered features, create a `.env.local` file in the project root with your credentials:

```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
```

Never commit `.env.local` or any real credentials. Adjust the variable names to match what the code in the repo reads.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads as you edit files.

## Available Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build             |
| `npm run lint`  | Run Next.js linting                  |

## Deployment

The app can be deployed to any platform that supports Next.js, such as [Vercel](https://vercel.com/). Build with `npm run build` and serve with `npm run start`, or connect the repository to your hosting provider for automatic deployments.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

No license has been specified for this project yet. Add a `LICENSE` file to define how others may use the code.
