export function capitalize(string) {
  if (string.length === 1) {
    return string.toUpperCase();
  } else if (string.length === 0) {
    return string;
  }
  let firstLetter = string.toUpperCase().slice(0, 1);
  let remainingString = string.toLowerCase().slice(1);
  return firstLetter + remainingString;
}

// console.log(capitalize("MANchester"));
