const bchaddr = require('bchaddrjs');

const convertCashAddrToLegacy = (coin, address) => {
  if (!['bch', 'tbch'].includes(coin)) {
    return address;
  }

  try {
    const format = bchaddr.detectAddressFormat(address);

    if (format === bchaddr.Format.Cashaddr) {
      console.log('log [MrCoin]: received address in CashAddr format (%s), converting to Legacy format...', address);
      address = bchaddr.toLegacyAddress(address);
    }
  } catch (e) {
    console.log('error [MrCoin]: received invalid BCH address: %s', address);
    // Let BitGo handle invalid address formats from this point.
  }

  return address;
};

module.exports = {
  convertCashAddrToLegacy
};
