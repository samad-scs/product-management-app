export const currencyConvert = value => {
  if (!value || isNaN(Number(value))) return '';
  return value.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'INR',
  });
};
