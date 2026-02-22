'use client';

import React from 'react';

export function AsyncFontLink() {
  return (
    <>
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* PT Sans */}
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
        media="print"
        onLoad={(e) => {
          const target = e.currentTarget;
          target.media = 'all';
        }}
      />

      {/* Pacifico (handwritten) */}
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
        media="print"
        onLoad={(e) => {
          const target = e.currentTarget;
          target.media = 'all';
        }}
      />

      <noscript>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </noscript>
    </>
  );
}