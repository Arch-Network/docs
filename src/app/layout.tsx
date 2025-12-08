import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/arch-favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/real-icon.png" type="image/png" sizes="64x64" />
        <link rel="icon" href="/arch-logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/real-icon.png" sizes="64x64" />
        <meta name="theme-color" content="#4E3AF1" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

