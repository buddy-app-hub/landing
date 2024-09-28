export const highlightWords = (text: string) => {
  const regex = /\b(Buddy|Buddies)\b/g;
  const parts = text.split(regex);

  return parts.map((part: string, index: number) => {
    if (part === 'Buddy' || part === 'Buddies') {
      return (
        <span key={index} style={{ fontStyle: 'italic' }}>
          {part}
        </span>
      );
    }
    return part;
  });
};
