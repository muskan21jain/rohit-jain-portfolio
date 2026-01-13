
'use client';

import { useState } from 'react';

const ReadMore = ({ text, maxLength }: { text: string[], maxLength: number }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const fullText = text.join(' ');
  const truncatedText = fullText.slice(0, maxLength);

  if (fullText.length <= maxLength) {
    return (
      <div className="text-muted-foreground text-sm space-y-4">
        {text.map((paragraph, i) => (
          <p key={i} className="text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="text-muted-foreground text-sm space-y-4">
        {isTruncated ? (
          <p className="text-justify">{`${truncatedText}...`}</p>
        ) : (
          text.map((paragraph, i) => (
            <p key={i} className="text-justify">
              {paragraph}
            </p>
          ))
        )}
      </div>
      <button
        onClick={() => setIsTruncated(!isTruncated)}
        className="text-primary hover:underline mt-4 text-sm"
      >
        {isTruncated ? 'Read More' : 'Read Less'}
      </button>
    </div>
  );
};

export default ReadMore;
