import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type CSSViewerProps = {
  markup: string;
  hiddenCSS: string;
  css: string;
};

const CSSViewer = ({ markup, hiddenCSS, css }: CSSViewerProps) => {
  const iframe = useRef<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (iframe.current && iframe.current.contentWindow) {
      iframe.current.onload = function () {
        if (iframe.current && iframe.current.contentWindow) {
          const height =
            iframe.current.contentWindow.document.body.scrollHeight;
          setHeight(height);
        }
      };
    }
  }, [iframe]);

  const code = `<!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
        }
        ${hiddenCSS}
        ${css}
      </style>
    </head>
    <body>
      ${markup}
    </body>
  </html>
  `;

  return (
    <Iframe ref={iframe} title="css-viewer" srcDoc={code} height={height} />
  );
};

const Iframe = styled.iframe`
  width: 100%;
  border: 0;
`;

export default CSSViewer;
