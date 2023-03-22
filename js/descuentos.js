const form = document.querySelector('#auto-form');
const output = document.querySelector('#descuento-output');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const marca = form.elements.marca.value.toLowerCase();
  const modelo = form.elements.modelo.value.toLowerCase();
  let descuento;

  if (marca === 'ford') {
    if (modelo === 'fiesta') {
      descuento = 0.05;
    } else if (modelo === 'focus') {
      descuento = 0.1;
    } else {
      descuento = 0.03;
    }
  } else {
    descuento = 0.03;
  }

  output.textContent = `El descuento para un ${marca} ${modelo} es del ${descuento * 100}%`;
});
