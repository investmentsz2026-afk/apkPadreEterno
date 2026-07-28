import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { QueryProvider } from '../components/QueryProvider';
import { AuthGuard } from '../components/AuthGuard';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ApkExcel - Campo Santo y Florería',
  description: 'Sistema administrativo y de control de pagos moderno para la gestión de clientes, sectores y vencimientos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#e11d48" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('apkexcel_theme');
                  if (saved === 'dark' || (!saved && true)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();

              if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(reg) { console.log('PWA ServiceWorker registered'); },
                    function(err) { console.log('PWA ServiceWorker registration failed', err); }
                  );
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} h-full antialiased`}>
        <QueryProvider>
          <AuthGuard>
            {children}
          </AuthGuard>
        </QueryProvider>
      </body>
    </html>
  );
}
