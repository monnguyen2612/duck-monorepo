import React from "react";

export default function Head() {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta content="follow, index" name="robots" />
      <meta content="ie=edge" httpEquiv="x-ua-compatible" />
      <link href={`${process.env.NODE_ENV === 'production' ? '/duck-monorepo' : ''}/dark-logo.svg`} rel="icon" sizes="any" />
    </head>
  )
}
