import format from 'date-fns/format';

export function formatDate(date) {
  return format(new Date(date), 'dd LLL yyyy');
}

export function convertDateToString(date) {
  return date.toLocaleDateString();
}

export function convertStringToDate(str) {
  return new Date(str);
}

export function formatPrice(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP'
  }).format(amount);
}

export function invoicesCountText(invoiceCount) {
  let msg;
  if (invoiceCount === 0) {
    msg = 'No invoices';
  } else if (invoiceCount === 1) {
    msg = '1 Invoice';
  } else {
    msg = `${invoiceCount} Invoices`;
  }
  return msg;
}
