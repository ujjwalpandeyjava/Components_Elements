# What to add

(.woff, .woff2, .ttf)

This folder contains the fonts .woff files (locally hosted font files).

These fonts can be integrated into your application using the next/font/local API, which optimizes font loading and ensures better performance and privacy by avoiding external requests.

```Example
import localFont from 'next/font/local';

const myFont = localFont({ src: './fonts/my-font.woff2' });

export default function App() {
  return <div className={myFont.className}>Hello World</div>;
}
```
