function generateRandomNumber(min, max)  {
  return Math.random() * (max - min) + min; 
}

starFilled = '⭐'
starEmpty = '☆'

const setStars = (rate) => {
  stars =  document.querySelectorAll('.star');
  stars.forEach((s) => {
    s.innerText = parseInt(s.getAttribute('data-value')) <= rate ? starFilled : starEmpty
  })
}

const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;
let shape = []
const engine = Engine.create();
const { world } = engine;
engine.world.gravity.y = 0.2;
let container = document.getElementById('competence-chart')
const render = Render.create({
  element: container,
  engine: engine,
  options: {
    wireframes: false,
    background: '#FFFFFF',
    width: window.innerWidth,  // Largeur du canvas égale à la largeur de la fenêtre
  }
});

Render.run(render);

const runner = Runner.create();
Runner.run(runner, engine);

const ground1 = Bodies.rectangle(container.clientWidth /2, container.clientHeight-20, container.clientWidth, 2, {
  isStatic: true,
  render: { fillStyle: '#FFFFFF' }
});
const roof = Bodies.rectangle(container.clientWidth /2, 1, container.clientWidth, 2, {
  isStatic: true,
  render: { fillStyle: '#2c3e50' }
});
const ground2 = Bodies.rectangle(container.clientWidth /2, container.clientHeight-5, container.clientWidth, 2, {
  isStatic: true,
  render: { fillStyle: '#2c3e50' }
});  
const wallL = Bodies.rectangle(container.clientWidth-1, container.clientHeight/2, 2, container.clientHeight, {
  isStatic: true,
  render: { fillStyle: '#2c3e50' }
});
const wallR = Bodies.rectangle(1, container.clientHeight/2, 2, container.clientHeight, {
  isStatic: true,
  render: { fillStyle: '#2c3e50' }
});

Composite.add(world, [ground1, ground2, wallL, wallR, roof]);


data_fr.competence.forEach(elem => {
  const box = Bodies.rectangle(generateRandomNumber(60 ,container.clientWidth- 60), generateRandomNumber(60 ,container.clientHeight- 60), 100, 100, {
    id : elem,
    render: {
      sprite: {
        texture: elem.image,
      },
      strokeStyle: '#ff5733',
      lineWidth: 5
    }
  });
  shape.push(box)
  Composite.add(world, box);
});
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 1,
  },
  render: {
    visible: true // Masque le trait de la contrainte
  }
});

Events.on(mouseConstraint, 'mousemove', function(event) {
  const mousePosition = event.mouse.position;
  let res =  shape.find((e) =>Matter.Bounds.contains(e.bounds, mousePosition) )
  if (!res) {
    document.getElementById('competence-desc').innerText = data_local['competence-desc']
    setStars(0)
    return
  }
  document.getElementById('competence-desc').innerText = res?.id.name
  setStars(res?.id.rate ?? 0)
});