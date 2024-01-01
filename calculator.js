const taxRates = {
    'Berlin': 0.14,
    'Munich': 0.16,
    'Hamburg': 0.15,
    'Frankfurt': 0.14,
    'Cologne': 0.15
};

function calculateTax() {
    // Retrieve the profit and selected city from the input fields
    const profit = parseFloat(document.getElementById('profit').value);
    const selectedCity = document.getElementById('city').value;

    // Calculate the trade tax
    const taxRate = taxRates[selectedCity];
    const tax = profit * taxRate;

    // Display the result to the user
    document.getElementById('result').innerText = `For ${selectedCity}, the Gewerbesteuer on a profit of €${profit} is approximately €${tax.toFixed(2)}.`;
}
