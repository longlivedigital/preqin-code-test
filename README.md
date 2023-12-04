This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Points of consideration

VARIABLES AND PROXY
Proxying was for dev but if this was a production project it would probably have endpoints on different URLs or ports, that could then be set with environment variables.

TESTING
Due to time contrains i chose not to write unit test. If i did i would have used jest and react testing library adding the different cases for the useFetch hook for example and the error message. If there was a larger set of components then i with uses storybook with visual tests with cypress along with using cypress to test the individual pages.

SECURITY
The access token would take some discussion for security. Its sensitive information so need to consider XSS or cross site request forgery. I stored it in local storage which doesnt have an expiration but an alternative could be for the JWT token to be split and backend to be able to re-construct on request. Also i presume on production everything is using SSH.

USEFETCH
 There are some requests that run when the component mounts and others which are triggered by user interaction. My thinking was that the logic is similar to rather that duplicate code i created useFetch that can be used on mount and can be triggered by the user.

 In projection i would expect that this would run the suite of tests (jest and cypress), tslint, prettier, and snyk for security and something for code quality and complexity.
 