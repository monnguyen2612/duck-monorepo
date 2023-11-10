'use client'; // Error components must be Client components

export default function Page({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return 1;
}
