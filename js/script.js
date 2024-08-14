// Ini Javascript

// Mengambil elemen dari DOM
const form = document.querySelector('form');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const ageInput = document.getElementById('age');
const resultBox = document.querySelector('.result-box');
const bmiValueElement = document.querySelector('.bmi-value');
const bmiCategoryElement = document.querySelector('.bmi-category');
const resultDescriptionElement = document.querySelector('.result-description');
const resetButton = document.querySelector('.btn-secondary');

// Event listener untuk BMI
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit default
    
    // Mengambil nilai input dari user
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Ubah tinggi ke meter
    
    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Mohon masukkan nilai yang valid untuk berat badan dan tinggi badan.');
        return;
    }

    // Menghitung BMI
    const bmi = calculateBMI(weight, height);

    // Menampilkan hasil perhitungan
    displayResult(bmi);
});

// Fungsi untuk menghitung BMI
function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(1);
}

// Function untuk hasil BMI
function displayResult(bmi) {
    bmiValueElement.textContent = bmi;
    
    let category = '';
    let description = '';

    if (bmi < 18.5) {
        category = 'Berat Badan Kurang';
        description = 'Anda memiliki berat badan di bawah normal.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Berat Badan Normal';
        description = 'Anda memiliki berat badan yang ideal.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Berat Badan Lebih';
        description = 'Anda memiliki berat badan berlebih.';
    } else {
        category = 'Obesitas';
        description = 'Anda memiliki obesitas. Disarankan untuk berkonsultasi dengan dokter.';
    }

    bmiCategoryElement.textContent = category;
    resultDescriptionElement.textContent = description;
    resultBox.style.display = 'block'; // Tampilkan kotak hasil
}

// Event Listener untuk reset
resetButton.addEventListener('click', function() {
    // Mengosongkan input dan menyembunyikan hasil
    form.reset();
    resultBox.style.display = 'none';
});