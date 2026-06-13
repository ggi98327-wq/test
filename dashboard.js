const visitorData = {
  total: 1279840,
  daily: 6542,
  monthly: 174268,
  annual: 1028395,
};

function formatNumber(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function renderVisitorDashboard(data) {
  document.getElementById('totalVisitors').textContent = formatNumber(data.total);
  document.getElementById('dailyVisitors').textContent = formatNumber(data.daily);
  document.getElementById('monthlyVisitors').textContent = formatNumber(data.monthly);
  document.getElementById('annualVisitors').textContent = formatNumber(data.annual);
}

document.addEventListener('DOMContentLoaded', () => {
  renderVisitorDashboard(visitorData);
});
