'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class" storageKey='theme' themes={['light', 'dark']}>{children}</ThemeProvider>
}
