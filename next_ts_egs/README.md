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
