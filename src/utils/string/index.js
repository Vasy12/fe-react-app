const hashCode = str =>
  str
    .slice(0, 20)
    .split('')
    .reduce((hash, char) => char.charCodeAt(0) + ((hash << 5) - hash), 0);

function intToRGB(i) {
  const c = (i & 0x00ffffff).toString(16).toUpperCase();

  return '00000'.substring(0, 6 - c.length) + c;
}

export const stringToHexColor = str => `#${intToRGB(hashCode(str))}`;
