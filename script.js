document.getElementById('fare-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const passengerFare = parseFloat(document.getElementById('passenger-fare').value);
    const terminalPair = parseFloat(document.getElementById('terminal-pair').value);
    const totalFare = passengerFare + terminalPair;
    document.getElementById('total-fare').textContent = 'Total Fare: Php ' + totalFare.toFixed(2);
});

