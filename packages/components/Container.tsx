import { cn } from '@duck/libs/utils'
import React from 'react'

type ContainerProps = {
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

export default function Container({
  children,
  className = '',
}: ContainerProps) {
  return (
    <div className={cn('container max-w-6xl m-auto px-4 mb-10', className)}>
      {children}
    </div>
  )
}
