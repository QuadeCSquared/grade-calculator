function calculateAverage() {
    const gradeInputs = document.querySelectorAll('.grade');
    let total = 0;
    let count = 0;

    gradeInputs.forEach(input => {
        const grade = parseFloat(input.value);
        if (!isNaN(grade)) {
            total += grade;
            count++;
        }
    });

    const average = count > 0 ? (total / count).toFixed(2) : 0;
    document.getElementById('result').textContent = `Average Grade: ${average}`;
}
