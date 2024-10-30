function lookForUpdades() {}

const INTERVAL_30_MINUTES = 30 * 60 * 1000;

setInterval(lookForUpdades, INTERVAL_30_MINUTES);

function calculateDiscount(price, discount) {
  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  return { finalPrice, discountAmount };
}
