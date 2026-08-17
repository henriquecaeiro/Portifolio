export const localize = (value, isEnglish) => {
  if (!value || typeof value === "string") return value;
  return isEnglish ? value.en : value.pt;
};
