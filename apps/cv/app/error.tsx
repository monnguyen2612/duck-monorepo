'use client'; // Error components must be Client components
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- idk*/
// eslint-disable-next-line import/no-extraneous-dependencies -- alias
import { Error } from '@duck/components';


export default function Page({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <Error error={error} reset={reset} />;
}
