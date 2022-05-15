export async function copyTextToClipboard(text: string) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  }
}

export const generateSlogans = () => {
  const slogans = [
    'coziness building for tomorrow',
    'There is no Sore it will Not Heal, No cool it will not Subdue.',
  ];

  return [...Array(50)]
    .reduce<Array<string>>((prev) => [...prev, ...slogans], [])
    .map((slogan, idx) => ({ key: idx, slogan }));
};
