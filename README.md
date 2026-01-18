This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).


## Project Overview

ALX Listing App is a property-listing web application inspired by platforms like Airbnb.
The goal of the project is to help users browse property listings, view details, and interact with reusable UI components such as cards and buttons.

This project is built using Next.js, TypeScript, and TailwindCSS, focusing on modular structure, code readability, and reusability.

## Project Goals

Develop a clean and scalable front-end architecture using the Pages Router in Next.js.

Implement reusable UI components for cards, buttons, and layout consistency.

Enforce type safety using TypeScript.

Use TailwindCSS for a responsive, modern interface.

Maintain code quality with ESLint.

## Project Structure

Here’s a quick overview of the main directories and their purposes:
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx        # Reusable card component to display property details
│       └── Button.tsx      # Reusable button component for actions (Book Now, Details)
│
├── interfaces/
│   └── index.ts            # TypeScript interfaces for props and shared data types
│
├── constants/
│   └── index.ts            # Project-wide constants (API URLs, UI text, config)
│
├── pages/
│   ├── index.tsx           # Homepage using Next.js Pages Router
│   └── api/                # API route examples (if needed)
│
├── public/
│   └── assets/             # Static assets such as images or icons
│
├── styles/
│   └── globals.css         # Global TailwindCSS styles
│
└── README.md


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Tech Stack

Next.js 16 (Pages Router)

TypeScript (for type safety)

TailwindCSS 4 (for styling)

ESLint (for linting)

PostCSS (for Tailwind processing)
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

