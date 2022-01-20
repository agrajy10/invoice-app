import format from 'date-fns/format';

export function formatDate(date) {
  const [year, month, monthDate] = date.split('-');
  return format(new Date(year, month, monthDate), 'dd LLL yyyy');
}

export function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP'
  }).format(amount);
}
