
const parent = document.getElementById('glides_container')

data_fr.competence.forEach(elem => {
  const box = document.createElement('div')
  box.classList.add([ 'glide__slide' ,'slide'])
  box.innerHTML = `<img src=${elem.image}></img>`
  parent.appendChild(box)
})


document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
      type: 'carousel',  // Type de slider : carousel, slider ou autre
      startAt: 0,        // Index de départ
      perView: 6,        // Nombre de slides visibles
      gap: 10,           // Espacement entre les slides en pixels
      autoplay: 1000,    // Défilement automatique en millisecondes (désactivé si null)
    }).mount();
  });
