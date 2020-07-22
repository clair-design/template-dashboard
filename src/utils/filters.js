export function formatNumber(number) {
  return Intl.NumberFormat('en').format(number)
}

export function percentage(number, precision = 2) {
  return Intl.NumberFormat('en', {
    style: 'percent',
    minimumFractionDigits: precision
  }).format(number)
}
