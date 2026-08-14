function canConstruct(ransomNote: string, magazine: string): boolean {
  const letters = Array(26).fill(0);

  magazine.split("").forEach((letter) => {
    ++letters[letter.charCodeAt(0) - "a".charCodeAt(0)];
  });

  for (const cha of ransomNote) {
    const idx = cha.charCodeAt(0) - "a".charCodeAt(0);
    --letters[idx];
    if (letters[idx] < 0) {
      return false;
    }
  }

  return true;
}
