'use client'
import React, { useEffect } from 'react';

export type IframeProps = {
    url: string;
    title: string;
}

const Iframe = ({ url, title }: IframeProps) => {
  useEffect(() => {
    const iframe = document.getElementById('yourIframe') as HTMLIFrameElement;

    if (iframe) {
      // Set the URL dynamically
      iframe.src = url;

      // Listen for messages from the iframe
      const messageHandler = (event: { origin: string; data: any; }) => {
        if (event.origin === 'https://monnguyen2612.github.io/duck-monorepo/') {
          console.log('Message received from iframe:', event.data);
        }
      };

      window.addEventListener('message', messageHandler);

      // Clean up event listener when the component is unmounted
      return () => {
        window.removeEventListener('message', messageHandler);
      };
    }
  }, [url]);

  return (
    <iframe id="yourIframe" title={title} />
  );
};

export default Iframe;
