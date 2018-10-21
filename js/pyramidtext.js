function pyramidText(text) {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += text.slice(0, i) + '\n';
  }
  for (let i = text.length; i > 0; i--) {
    result += text.slice(0, i) + '\n';
  }
  return result;
}