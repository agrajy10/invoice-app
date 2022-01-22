import format from 'date-fns/format';

export function formatDate(date) {
  return format(new Date(date), 'dd LLL yyyy');
}

export function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP'
  }).format(amount);
}
