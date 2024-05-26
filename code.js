//LIB


const triggerModal = (id = 0) => {
    let modal = document.getElementById('modal')
    if (modal.classList.contains('hide')) {
        modal.classList.remove('hide')
        modal.style.display = 'flex'
        initModalGraph(DATA.competence.content[id])
    }
    else {
        let canvas =  document.getElementById('modal-graph')
        let newCanvas = canvas.cloneNode()
        canvas.parentElement.replaceChild(newCanvas, canvas)
        modal.classList.add('hide')
        modal.style.display = 'none'
    }
}

const initModalGraph = (data) => {
    let graph = document.getElementById('modal-graph')
    new Chart(graph, {
        type: 'radar',
        data: {
            labels: data.graph.values,
            datasets: [{
              label: data.name,
              data: data.graph.keys,
            },]
          },
          options: {
            scale: {
                min: 0,
                max: 100,
                stepSize: 20,
            },
        },
       
    });
}

const showDate = (date) => {

    const dateObject = new Date(date);

    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; 
    const year = dateObject.getFullYear();

    return `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;
}


const changeChildsId = (node, suffix, filter) => {
    if (filter) {
        if (node.id && node.id.includes(filter))
            node.id = node.id + suffix
        }
    else node.id = node.id + suffix
    if(node.hasChildNodes) {
        var childs = node.childNodes;
        for(var index=0; index<childs.length; index++) {
            changeChildsId(childs[index], suffix, filter)
        }
    }
}

//DATA

const clear = (id) => {
    document.querySelectorAll('[id="detail-'+id+'"]').forEach((node, index) => index != 0 ? node.remove() : false)
}


const switchContent = (node, id) => {
    
    document.querySelectorAll('[id$="main-container"]').forEach((node) => node.style.display = 'none');
    document.querySelectorAll('[id^="action-list-container"]').forEach((node) => node.classList.remove('selected'));
    if (!node.classList.contains('selected')) {
        node.classList.add('selected')
    }
    document.getElementById(id).style.display = 'flex'
}

const  dispatch = {
    'action-list-container-0': (node) => node.addEventListener('click', () => switchContent(node, 'personal-main-container')),
    'action-list-container-1': (node) => node.addEventListener('click', () => switchContent(node, 'formation-main-container')),
    'action-list-container-2': (node) => node.addEventListener('click', () => switchContent(node, 'experience-main-container')),
    'action-list-container-3': (node) => node.addEventListener('click', () => switchContent(node, 'loisir-main-container')),
    'action-list-container-4': (node) => node.addEventListener('click', () => switchContent(node, 'competence-main-container')),
    'action-list-container-5': (node) => node.addEventListener('click', () => switchContent(node, 'eip-main-container')),
    'action-personal-name': (node) => node.innerHTML = `${DATA.personal.firstName} ${DATA.personal.lastName}`,
    'action-personal-birthday': (node) =>  node.innerHTML = DATA.personal.birthDay,
    'action-personal-phone': (node) =>  node.innerHTML =  DATA.personal.phone,
    'action-personal-email': (node) =>  {node.setAttribute('href', "mailto: " +  DATA.personal.email);node.innerHTML =  DATA.personal.email},
    'action-personal-study': (node) =>  node.innerHTML =  DATA.personal.study,
    'action-personal-job': (node) =>  buildList(node, DATA.personal.job.map((elem) => `<b>${elem}<b>`)),
    'action-personal-pict': (node) =>  node.src =  DATA.personal.pict,
    'action-personal-title': (node) => node.innerHTML = DATA.personal.title,
    'action-experience-title': (node) => node.innerHTML = DATA.experience.title,
    'action-formation-title': (node) => node.innerHTML = DATA.formation.title,
    'action-loisir-title': (node) => node.innerHTML = DATA.loisir.title,
    'action-competence-title': (node) => node.innerHTML = DATA.competence.title,
    'action-eip-title': (node) => node.innerHTML = DATA.eip.title,
    'action-formation-main-content' : (node) => buildFormation(node),
    'action-experience-main-content' : (node) => buildExperience(node),
    'action-loisir-main-content' : (node) => buildLoisir(node),
    'action-competence-main-content' : (node) => buildCompetence(node),
    'action-eip-main-content' : (node) => buildEip(node),
}


const buildList = (node, list) => {
    list.forEach((elem) => {
        let div = document.createElement('div')
        div.innerHTML = elem
        node.appendChild(div)
    })
}

const buildFormation = (node) => {
    let parent = node.parentElement;
    DATA.formation.content.forEach((elem, index) => {
        let newNode = node.cloneNode(true)
        newNode.style.display = 'flex',
        changeChildsId(newNode, '-'+index, 'formation-')
        parent.appendChild(newNode)
        document.getElementById('formation-date-' + index).innerHTML = elem.date
        document.getElementById('formation-name-' + index).innerHTML = `<b>${elem.name}<b>`
        elem.image ? document.getElementById('formation-dote-' + index).src = elem.image : null

        let descContent = document.getElementById('formation-description-' + index)
        elem.desc.forEach((desc) => {
            let li = document.createElement('li')
            li.id = 'formation-description-li' + index
            li.innerHTML = desc
            descContent.appendChild(li)
        })
    })
}
const buildLoisir = (node) => {
    let parent = node.parentElement;
    DATA.loisir.content.forEach((elem, index) => {
        let newNode = node.cloneNode(true)
        newNode.style.display = 'flex',
        changeChildsId(newNode, '-'+index, 'loisir-')
        parent.appendChild(newNode)
        document.getElementById('loisir-name-' + index).innerHTML = `<b>${elem.name}`
        let sub = document.getElementById('loisir-sub-content-' + index)
        elem.content.forEach((desc, descIndex) => {
            let newDesc = sub.cloneNode(true)
            changeChildsId(newDesc, '-'+descIndex, 'loisir-description')
            sub.parentNode.appendChild(newDesc)
            document.getElementById(`loisir-description-${index}-${descIndex}`).innerHTML = desc
            // newDesc.innerHTML = desc
        })
        sub.style.display = 'none'
    })
}

const buildExperience = (node) => {
    let parent = node.parentElement;
    DATA.experience.content.forEach((elem, index) => {
        let newNode = node.cloneNode(true)
        newNode.style.display = 'flex',
        changeChildsId(newNode, '-'+index, 'experience-')
        parent.appendChild(newNode)
        document.getElementById('experience-date-start-' + index).innerHTML = elem.dateStart
        document.getElementById('experience-date-end-' + index).innerHTML = elem.dateEnd
        document.getElementById('experience-date-lenght-' + index).innerHTML = elem.lenght
        elem.image ? document.getElementById('experience-dote-' + index).src = elem.image : null
        document.getElementById('experience-name-' + index).innerHTML = ` <b>[${elem.type}]</b>: ${elem.name}`
        let descContent = document.getElementById('experience-description-' + index)
        elem.desc.forEach((desc) => {
            let li = document.createElement('li')
            li.id = 'experience-description-li' + index
            li.innerHTML = desc
            descContent.appendChild(li)
        })
    })
}

const buildCompetence = (node) => {
    const ctx = document.getElementById('competence-chart');
    let start =  {
        beginAtZero: true,
    }
    let tickes = { ticks: {
        callback: function(value, index, ticks) {
            switch (value) {
                case 0 : 
                    return 'Inconnu'
                case 1 : 
                    return "Besoin d'un exemple"
                case 2 : 
                    return 'Faut que je me documente'
                case 3 : 
                    return 'pas de soucis'
                case 4 : 
                    return 'Je gère'
                case 5 : 
                    return 'Déja fini'
                default : ''
            }
        }
    }}
    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: DATA.competence.content.map((elem) => elem.name),
        datasets: [{
            label: 'Connaissance global / 5',
            data: DATA.competence.content.map((elem) => elem.value),
            borderWidth: 2
        }]
        },
        options: {
            legend: {
                display: false
             },
        indexAxis: ratio > 1 ? 'x' : 'y',
        scales: {
            y: {
                beginAtZero: true,
               
            },
            x : { ticks: {
                // Include a dollar sign in the ticks
                callback: function(value, index, ticks) {
                    switch (value) {
                        case 0 : 
                            return 'Inconnu'
                        case 1 : 
                            return "Besoin d'un exemple"
                        case 2 : 
                            return 'Faut que je me document '
                        case 3 : 
                            return 'pas de soucis'
                        case 4 : 
                            return 'Je gère'
                        case 5 : 
                            return 'Déja fini'
                        default : ''
                    }
                }
            }}
        },
        maintainAspectRatio: false,
        // onClick: function(_,index) {
        //     if (!index[0]) {
        //         return
        //     }
        //     triggerModal(index[0].index)
        // }
        }
    });
    return
}

const buildEip = () => {
    document.getElementById('action-eip-description').innerHTML = DATA.eip.description
    document.getElementById('action-eip-description-teck').innerHTML = DATA.eip.dedal_description
    // document.getElementById('action-eip-pict').src = DATA.eip.image
    // document.getElementById('action-eip-pict').addEventListener('click', ()=>window.open(DATA.eip.showcase))
}


const displayData = () => {
    let nodes = document.querySelectorAll('[id^="action"]');
    nodes.forEach((node) => dispatch[node.id] ? dispatch[node.id](node) : console.log(`${node.id} is not handle`))
}


function onSuccess() {
    let card = document.getElementById('action-list-container')
    let node = document.getElementById('client-list')
    DATA.title.forEach((str, index) => {
        newCard = card.cloneNode(true)
        newCard.classList.remove("hide");
        changeChildsId(newCard, '-'+index, 'list')
        node.appendChild(newCard)
        document.getElementById('list-name-'+index).innerHTML = str
        if (index == 0) {
        newCard.classList.add('selected')
        }
    })
    displayData()
    
}


let DATA = {
title : ["Informations","Formations & Diplômes", "Experience","Loisirs", "Compétences", "EIP" ],
personal : 
    {
        "title" : "Informations",
        "firstName" :"Eliot",
        "lastName" : "Martin",
        "birthDay" : "23/01/2001",
        "phone" : "+33.6.12.96.53.98",
        "email" : "eliot.martin@hotmail.fr",
        "pict" : "asset/profil.jpg",
        "study" :"Bac +5",
        "job" : ["Developpeur", "Scrum Master", "Project Owner"],
    },
    formation : {
        "title" : "Formations & Diplomes",
                "content" : [
                    {
                        "name" : "Epitech Lille",
                        "desc" : ["Master d’expert en technologies de l'information."],
                        "date" : '2024',
                        "image" : "https://yt3.googleusercontent.com/8mA9eT4kl-CHHHQdCtNfMCWeL6RFFQElfY1ytMoNHF5BG1iMtHQ0b9YaonhC7bydvrG-9hkA=s900-c-k-c0x00ffffff-no-rj"
                    },{
                        "name" : "Technological University Dublin",
                        "desc" : ["Diplome d’IT management", "Strategic & project Management (Scrum / Agile)", "Business Modeling"],
                        "date" : '2023',
                        "image" : "https://www.ieabroad.com/wp-content/uploads/TUD.png"
                    }, {
                        "name" : "Epitech Lille",
                        "desc" : ["Bachelor", "Strategic & project Management (Scrum / Agile)", "Business Modeling"],
                        "date" : '2022',
                        "image" : "https://yt3.googleusercontent.com/8mA9eT4kl-CHHHQdCtNfMCWeL6RFFQElfY1ytMoNHF5BG1iMtHQ0b9YaonhC7bydvrG-9hkA=s900-c-k-c0x00ffffff-no-rj"
                    }, {
                        "name" : "Lycée Guist'hau, Nantes",
                        "desc" : ["Bacalauréa Scientifique","Spécialité Mathématique"],
                        "date" : '2019',
                        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXFOGuHabIn7GjpXicZ1p0cwAHPspmnwt7PYyUV4usbg&s"
                    }
                ]
    },
experience : {
        "title" : "Experience",
        "content" : [
            {
                "dateStart" : "06/23",
                "dateEnd" : "Now",
                "name" : "Jagger-Lewis",
                "lenght" :"1 an",
                "type" : "CDI",
                "desc" : ["Application mobile en <b>Flutter<b>", "Développement d’une API <b>JS<b>", "Développement de pipe-line en <b>Python<b>", "Mise en place d'outil de <b>CI</b> sur les différentes solution "],
                "image" : 'https://assets-global.website-files.com/6549f4ba8294cf140608d893/654b6a20bf057d68593d620a_logo.png'
            }, {
                "dateStart" : "03/22",
                "dateEnd" : "06/22",
                "name" : "Chantier Carré",
                "lenght" :"4 mois",
                "type" : "Stage",
                "desc" : ["Application Web en <b>Next JS<b>", "Server Less", "Gestion d'une équipe de 3 personnes", "Organisation <b>Agile<b>"],
                "image" : "https://media.licdn.com/dms/image/C4D0BAQF7XnLK8hBAcQ/company-logo_200_200/0/1630474703807/chantiercarr_logo?e=1723075200&v=beta&t=BFU4ASoiBSeIvH_fwp8DgC7LO9ov8Nr9iXf84lGfnbY"
            },{
                "dateStart" : "09/21",
                "dateEnd" : "02/22",
                "name" : "Décathlon Btwin Village",
                "lenght" :"8 mois",
                "type" : "Stage 2 jours semaine",
                "desc" : ["Maintient d’une application de gestion de stock", "<b>HTML / CSS & Google AppScript"],
                "image" : "https://cdn6.aptoide.com/imgs/c/5/d/c5d8abab5e239065201a510f9fc15141_icon.png"
            },{
                "dateStart" : "06/21",
                "dateEnd" : "08/21",
                "name" : "Castorama",
                "lenght" :"2 mois",
                "type" : "Interim",
                "desc" : ["Job d'été", "Mise en rayon", "Préparation de commande drive"],
                "image" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAh1BMVEX////2+v0IetcIfNgRgNkAdtYAeNfp8/ujzO9ztOhkrOZ9ueqw1PLi7/pbp+W32PMojNwXg9o/mODH4PX6/P4jidxQoePY6vjN5Pb/+uD/7X//63OKrWGBqmsihLz/4B//3ADl0RgJe9CVxe0vkN4ohrj/5UPBwzX/9sH/9LdLlJpBkKJtsegsk00aAAAAyklEQVR4AdSSQxYEMRRFg7JtG/tfX6OsnB73m0Q334AgiPAkigjQzCT8bwDL8YIgSpAAyAparnj4BKgUs0mT74CKmIOUG8Dq83HGNPYG8NPBMC0o2Ywt32KwqOndmow57j0Lc9p7W0Z+EIZRFCcbwH3fdbApzSblxQqUX6DaDWSLapKFZn5v0TkGcye6vh+GEe9Z6JMPOO0FCQBCHSqJZaWKQRIgVnK5lG4AMPGRcH5004EPAGCFxYjNkSYKSuJ7OpzKwkMxXxDM/gCBTxHm74MunQAAAABJRU5ErkJggg=="
            },{
                "dateStart" : "09/20",
                "dateEnd" : "12/20",
                "name" : "Sigmatel",
                "lenght" :"4 mois",
                "type" : "Stage",
                "desc" : ["Creation d'une CVteck", "Application windows" ,"<b>Python"],
                "image" : "https://www.sygmatel.fr/wp-content/uploads/2021/04/Sygmatel-LOW.jpg"
            },{
                "dateEnd" : "01/19",
                "dateStart" : "<br>",
                "name" : "Respir@ction",
                "lenght" :"2 jours",
                "type" : "Hackathon",
                "desc" : ["Ideation d’un projet autour de l’allergie", "<b>Marketing, User Experience, Maquette", "Travail en collaboration avec l'Afpral"],
                "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpESjnY33osAlDQo1tLFSAY6ccmYf014IHLTBm9AkDWA&s"
            },{
                "dateStart" : "07/18",
                "dateEnd" : "08/18",
                "name" : "Pheonix Pharma",
                "lenght" :"1 mois",
                "type" : "Interim",
                "desc" : ["Job d'été", "Agent de quai", "Stockage de produits pharmaceutique", "Création de commande clients"],
                "image" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDElEQVR4AYzQgQbCQByA8ZKBEMKCSUgIhBACbElICIEEQggECIQQyEaPEAIBkkySSULPEHqM9V1uuXQy/Nz8d75zlwjDMCnkPCeFPCam52xZb/AR4IQF6jDE/ogasHGAi0bOs4usJixUMZfREdKfgDy5iatcTR15iIUzVjCiQBFH2DLma7nvK5RQwQWtKLDETLlK+MeDq2XlWwS8VUEEeuJDEwg4tcs65v9dmXdgYAjr84g/AdfZKLN+NCc2VfdrA9IOZdSwVuaDeAG9JzJfAQYFGDECe7SVfSYyIuBzr9eM8YUBFleyQg10h0cjaQYgohEjIREyAC0hYSZlUNxD498SQzNmUqY8M1GcnQGOkvCOpiJKjwAAAABJRU5ErkJggg=="
            },
            {
                "dateStart" : "07/17",
                "dateEnd" : "08/17",
                "name" : "Sigmatel",
                "lenght" :"1 mois",
                "type" : "Interim",
                "desc" : ["Job d'été", "Électricien", "Instalisation éélctrique dans un immeuble, "],
                "image" : "https://www.sygmatel.fr/wp-content/uploads/2021/04/Sygmatel-LOW.jpg"
            }
        ]
    },
    loisir : {
        "title" : "Loisirs",
        "content" : [
            {
                'name' : 'Pour me defouler',
                'content' : ["Tennis", "Natation", "Escalade", "Skate"]
            },
            {
                'name' :  'Pour me reposer',
                "content" : ["Lecture:  LoveCraft", "Lego", "Magic the gathering"]
            }
        ]
    },
    competence : {
        title : 'Compétence',
        content : [
            {
                name : 'HTML/CSS',
                value : '4',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            },
            {
                name : 'JavaScript',
                value : '5',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            },
            {
                name : 'React Native',
                value : '4',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            },  {
                name : 'Flutter',
                value : '5',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            },  {
                name : 'Python',
                value : '5',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            },  {
                name : 'C',
                value : '4',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            },  {
                name : 'C++',
                value : '3',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
            },
            },
        ]
    },
    eip : {
        title : 'EIP',
        description : "L'Epitech Inovative Project, c'est le projet de fin d'étude à Epitech<br>De la 3e à la 5e année les groupe de 4 à 10 étudiants créent leur project et le poussent jusqu'a une hypothetique commercialisation.<br><br><br>",
        dedal_description : "J'ai eu la chance d'être pendent 2 ans le responsable du groupe DEDAL, avec lequel nous sommes années jusqu'en finale national pour présenter notre project d'application mobile simplifiant les visites touristiques.<br>",
        image : 'https://dedal-showcasewebsite.vercel.app/images/logo-Dedal.png',
        showcase : 'https://dedal-showcasewebsite.vercel.app/'
    }

}

DATA = JSON.parse(JSON.stringify(DATA).replaceAll('ô', 	'&ocirc;').replaceAll('é', '&eacute').replaceAll('’', '&#146'))

let ratio = window.screen.availHeight / window.screen.availWidth
onSuccess(DATA)
//  google.script.run.withSuccessHandler(onSuccess).getData();
