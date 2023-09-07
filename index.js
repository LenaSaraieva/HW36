function displayTable() {
    const form = document.getElementById('registration-form');
    const userData = document.getElementById('userData');
    const table = userData.querySelector('table');
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    const formData = new FormData(form);
    for (const [field, value] of formData.entries()) {
        const row = table.insertRow(-1);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = field;
        cell2.textContent = value;
    }
    userData.style.display = 'block';
}
