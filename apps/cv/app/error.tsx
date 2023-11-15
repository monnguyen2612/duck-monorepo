'use client'; // Error components must be Client components

export default function Page({
  error,
}: {
  error: Error;
}) {
  return error;
}
