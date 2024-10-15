// Function to calculate Link Budget
function calculateLinkBudget(Pt, Gt, Gr, FSPL) {
    return Pt + Gt + Gr - FSPL; // Link Budget formula
}

// Event listener for the form submission
document.getElementById('linkBudgetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get values from the input fields
    const Pt = parseFloat(document.getElementById('pt').value);
    const Gt = parseFloat(document.getElementById('gt').value);
    const Gr = parseFloat(document.getElementById('gr').value);
    const FSPL = parseFloat(document.getElementById('fspl').value);

    // Validate input
    if (isNaN(Pt) || isNaN(Gt) || isNaN(Gr) || isNaN(FSPL)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }

    // Calculate Link Budget
    const linkBudget = calculateLinkBudget(Pt, Gt, Gr, FSPL);

    // Display the result
    document.getElementById('result').textContent = `Link Budget: ${linkBudget.toFixed(2)} dB`;
});
