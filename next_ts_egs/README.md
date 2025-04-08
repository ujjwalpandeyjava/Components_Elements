# Learning

## Run in dev mode

`npm run next --turbopack`

## Run in production mode

`npm run build` --> `npm run start`

## Client, Server Component

Next.js has by default `Server components`

Long on the server component are visible in the terminal and in the browser console with tag server.

### When to use what component?

Use server component all the time until you need user interaction on the component.

https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components

### Server components

Came from React's Server components.

- SEO
- Direct DB connection
- File system connection
- Less JS for client side
- Faster for initial page load
- Keep sensitive token on server

### Client Component

The base of SPA (Single page application)

- Only initial load on the client side
- Faster in interaction
- Dynamic page section update

> To make a component client component use: `use client` on top of component.

## Server-Side pre-rendering

All the client components are pre-renders on server side.

**Server-side pre-rendering** refers to generating the HTML for a web page on the server before sending it to the client, renders all static sections, and intractable section as placeholder which are put by browser. This ensures that users receive a fully rendered HTML page immediately, improving initial load times and SEO.

Unlike client-side rendering, which relies on JavaScript in the browser, server-side pre-rendering avoids delays caused by loading and executing scripts.

## Routing (latest app routing)

## Route Groups

- Used to organize routes and folders
- Used to organize layout of groups
- Manage route segments, render content all without showing in url/ui

```eg
(group_name)
 - route a
   - route a-a
 - route b
   - [id] nested route
```

It have have it's layout, middleware and more.

Organize route structure, no impact on the url, and can have different layouts.

Don't need page.tsx files.

## Error Handling

Very important

## Default

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

##

When you create a Next.js project with TypeScript and the App Router without editing any files, the default structure includes the following key files and folders:

### **1. `app/` Folder**

- **Purpose**: Houses all routes and components for your application.
- **Key Files**:
  - `layout.tsx`: Defines the global layout of your app (e.g., `, `). The `children` prop dynamically renders the content of specific pages.
  - `page.tsx`: Represents the homepage (`/`) of your app. This is the default route.
  - `globals.css`: A global CSS file for styling across your application.

### **2. `public/` Folder**

- **Purpose**: Stores static assets like images, fonts, or icons.
- **Key Files**:
  - `favicon.ico`: The default favicon for your app.

### **3. `tsconfig.json`**

- **Purpose**: Configures TypeScript settings for your project.

### **4. `next.config.js`**

- **Purpose**: Contains configuration settings for Next.js, such as enabling experimental features or custom build options.

### **5. Other Files**

- `.eslintrc.json`: Configures ESLint for code linting.
- `.gitignore`: Specifies files to ignore in version control.
- `package.json`: Lists dependencies and scripts for managing the project.

This structure is optimized for projects using the App Router, with server-side rendering (SSR) by default and support for layouts, nested routes, and modern React features.
