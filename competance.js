
const parent = document.getElementById('glides_container')

data_fr.competence.forEach(elem => {
  const box = document.createElement('li')
  box.classList.add('slide')
  box.innerHTML = `<img src=${elem.image}></img>`
  box.addEventListener('mouseenter', (e) => {
    const text = elem.name;
    tooltip.textContent = text;
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
    tooltip.style.top = `${e.clientY - 40}px`; 
    tooltip.style.left = `${e.clientX}px`;
  });

  box.addEventListener('mousemove', (e) => {
    tooltip.style.top = `${e.clientY - 40}px`;
    tooltip.style.left = `${e.clientX}px`;
  });

  box.addEventListener('mouseleave', () => {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
  });
  parent.appendChild(box)
})


document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
      type: 'carousel',  // Type de slider : carousel, slider ou autre
      startAt: 0,        // Index de départ
      perView: 4,        // Nombre de slides visibles
      gap: 10,           // Espacement entre les slides en pixels
      autoplay: 1000,    // Défilement automatique en millisecondes (désactivé si null)
    }).mount();
  });
