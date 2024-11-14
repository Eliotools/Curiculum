let scene, camera, renderer;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff); // Fon

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 10, 20); // Vue plus en hauteur
  camera.lookAt(0, 0, 0); // 
  const sunGeometry = new THREE.SphereGeometry(0.2, 32, 32);
  const sunMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(sun);
  // Renderer
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight); // Redimensionner le canevas pour s'adapter à la fenêtre
  camera.aspect = window.innerWidth / window.innerHeight; // Ajuster le ratio de la caméra
  camera.updateProjectionMatrix();
  document.getElementById('competence-chart').appendChild(renderer.domElement);

  const cameraLight = new THREE.PointLight(0xffffff, 0.5); // Lumière à la position de la caméra
  cameraLight.position.copy(camera.position);
  scene.add(cameraLight);
  data_fr.competence.forEach(createPlanet)
console.log(planets.length)
}

// Tableau pour stocker les planètes
const planets = [];
const labels = [];

const createPlanet = (c) => {
  const planetGeometry = new THREE.SphereGeometry(0.5, 16, 16);
  const planetMaterial = new THREE.MeshStandardMaterial({ color: c.color });
 
  const planet = new THREE.Mesh(planetGeometry, planetMaterial);
  planet.position.set(0, 0, 0); 
  scene.add(planet);
  planet.userData = { distance: c.pos, speed: getRandomInt(10)/1000+0.01, angle: getRandomInt(10) };
  const loader = new THREE.FontLoader();
  loader.load('https://threejs.org/examples/fonts/optimer_regular.typeface.json', function (font) {
  const textGeometry = new THREE.TextGeometry(c.name, {
    font: font,
    size: 0.5,
    height: 0.1
  });
  const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const label = new THREE.Mesh(textGeometry, textMaterial);
  label.position.set(planet.position.x - 0.5, planet.position.y + 1, planet.position.z); // Positionner le label au-dessus de la planète
  scene.add(label);
  labels.push(label)
});
  planets.push(planet);
}

function animate() {
  requestAnimationFrame(animate);
  let i = 0
  // Animer la révolution de chaque planète
  planets.forEach(planet => {
    
    planet.userData.angle += planet.userData.speed;
    planet.position.x = planet.userData.distance * Math.cos(planet.userData.angle);
    planet.position.z = planet.userData.distance * Math.sin(planet.userData.angle);
    labels[i].position.x = planet.position.x - 0.5;
    labels[i].position.y = planet.position.y + 1;
    labels[i].position.z = planet.position.z;
    i++;
  });

  // Rendu de la scène
  renderer.render(scene, camera);
}



init();
animate();
