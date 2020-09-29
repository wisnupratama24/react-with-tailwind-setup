export default (formatNumber) => {
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(formatNumber);
};
