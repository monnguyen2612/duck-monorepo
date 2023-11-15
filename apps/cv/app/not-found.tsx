'use client'; // Error components must be Client components

// eslint-disable-next-line import/no-extraneous-dependencies -- alias
import { Error, Container } from '@duck/components';

export default function NotFound() {
  return (
    <Container>
      <Error />
    </Container>
  );
}
