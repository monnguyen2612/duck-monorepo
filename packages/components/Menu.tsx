import Link from 'next/link'

import { cn } from '@duck/libs/utils'
import React from 'react'

const URL =
  process.env.NEXT_PUBLIC_DUCK_URL || 'https://monnguyen2612.github.io/duck-monorepo'
const INSIGHTS_URL =
  process.env.NEXT_PUBLIC_DUCK_INSIGHTS_URL || 'https://github.com/monnguyen2612/duck-monorepo/graphs/traffic';

const navigation = [
  { name: 'About', href: `${URL}` },
  { name: 'Insights', href: INSIGHTS_URL },
  { name: 'Archives', href: `${URL}/blogs` },
]

type Props = {
  className?: string
}

export default function Menu({ className }: Props) {
  return (
    <div className={cn('flex flex-row gap-5 flex-wrap', className)}>
      {navigation.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className="hover:underline underline-offset-8"
        >
          {name}
        </Link>
      ))}
    </div>
  )
}
