function generateRandomNumber(min, max)  {
  return Math.random() * (max - min) + min; 
  
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
      background: '#FFFFFF'
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
        // Image comme texture
        sprite: {
          texture: elem.image, // Chemin vers l'image
          xScale: 1, // Échelle horizontale de l'image
          yScale: 1  // Échelle verticale de l'image
        },
        // Contour autour de la forme
        fillStyle: 'transparent', // Pas de remplissage, uniquement le contour
        strokeStyle: '#ff5733', // Couleur du contour
        lineWidth: 5 // Épaisseur du contour
      }
    });
    shape.push(box)
    Composite.add(world, box);
   });
   const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2
  }
});
Events.on(mouseConstraint, 'mousemove', function(event) {
  const mousePosition = event.mouse.position;
  // console.log(mousePosition)
  let res =  shape.find((e) =>Matter.Bounds.contains(e.bounds, mousePosition) )
  if (!res) {
    document.getElementById('competences-desc').innerText = 'HOVER'
    return
  }
  document.getElementById('competences-desc').innerText = res?.id.name
  // if (hovered) {
  //   hexagon.render.fillStyle = '#e74c3c'; // Changer la couleur
  // } else {
  //   hexagon.render.fillStyle = '#3498db'; // Restaurer la couleur d'origine
  // }
});


   window.addEventListener('resize', () => {
     render.bounds.max.x = window.innerWidth;
     render.bounds.max.y = window.innerHeight;
     render.options.width = window.innerWidth;
     render.options.height = window.innerHeight;

     Render.stop(render);
     Render.run(render);
   });