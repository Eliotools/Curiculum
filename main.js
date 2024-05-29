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


const redirect = {
    "action-nav-info" : (node) => node.addEventListener('click', () => switchContent('content-info', node)),
    "action-nav-formation" : (node) => node.addEventListener('click', () => switchContent('content-formation', node)),
    "action-nav-experience" : (node) => node.addEventListener('click', () => switchContent('content-experience', node)),
    "action-nav-loisir" : (node) => node.addEventListener('click', () => switchContent('content-loisir', node)),
    "action-nav-eip" : (node) => node.addEventListener('click', () => switchContent('content-eip', node)),
    "action-nav-competence" : (node) => node.addEventListener('click', () => switchContent('content-competence', node)),
    "action-formation-list" : (node) => buildFormation(node),
    "action-experience-list" : (node) => buildExperience(node),
    "action-eip-content" : (node) => buildEip(),
    "action-competence-chart" : (node) => buildCompetence(node),
};

const buildEip = () => {
    document.getElementById('eip-pict').addEventListener('click', () => window.open(data.eip.showcase))
    document.getElementById('eip-pict').src = data.eip.image
    document.getElementById('eip-desc').innerHTML = data.eip.description
    document.getElementById('eip-dedal').innerHTML = data.eip.dedal_description
}

const buildCompetence = (node) => {
    let ratio = window.screen.availWidth < 600
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
    new Chart(node, {
        type: 'bar',
        data: {
        labels: data.competence.map((elem) => elem.name),
        datasets: [{
            label: 'Connaissance global / 5',
            data: data.competence.map((elem) => elem.value),
            borderWidth: 0,
            backgroundColor : data.competence.map((elem) => 'grey'),
        }]
        },
        options: {
            events: [],
            plugins: {
                legend: {
                    display: false
                },
            },
            indexAxis: ratio ? 'x' : 'y',
            scales: {
                x: {
                    ticks : !ratio ? start : start,
                    grid: {
                    display: false
                    }
                },
                y: {
                    ticks : !ratio ? tickes : start, 
                    grid: {
                    display: false
                    }
                },
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

const buildFormation = (node) => {
    let card = document.getElementById('formation-container')
    data.formation.forEach((item, index) => {
        let newCard = card.cloneNode(true)
        changeChildsId(newCard, '-'+index, 'formation-' )
        node.appendChild(newCard)
        document.getElementById('formation-item-date-' + index).innerHTML = item.date
        document.getElementById('formation-item-name-' + index).innerHTML = item.name
        let list = document.getElementById('formation-item-desc-' + index)
        item.desc.forEach((elem, liIndex) => {
            let li = document.createElement('li')
            li.id = 'formation-desc-' + liIndex
            li.innerHTML = elem
            if (liIndex != 0) {
                li.classList.add('light')
            }
        
            list.appendChild(li)
        })
    })
    card.style.display = 'none'
}

const buildExperience = (node) => {
    let card = document.getElementById('experience-container')
    data.experience.forEach((item, index) => {
        let newCard = card.cloneNode(true)
        changeChildsId(newCard, '-'+index, 'experience-' )
        node.appendChild(newCard)
        document.getElementById('experience-item-date-start-' + index).innerHTML = item.dateStart
        document.getElementById('experience-item-date-lenght-' + index).innerHTML = item.lenght
        document.getElementById('experience-item-date-end-' + index).innerHTML = item.dateEnd
        document.getElementById('experience-item-name-' + index).innerHTML = `<b >[${item.type}]</b> ${item.name}`
        let list = document.getElementById('experience-item-desc-' + index)
        item.desc.forEach((elem, liIndex) => {
            let li = document.createElement('li')
            li.id = 'experience-desc-' + liIndex
            li.innerHTML = elem
            list.appendChild(li)
        })
    })
    card.style.display = 'none'
}

switchContent = (type, node) => {
    document.querySelectorAll('[selected]').forEach((elem) => elem.removeAttribute('selected'))
    document.querySelectorAll(`[id=${node.id}]`).forEach((elem) => elem.setAttribute('selected', true))
    node.setAttribute('selected', true)
    document.getElementById('sec-nav').style.display = type == 'content-info' ? 'none' : ratio ? 'grid' : 'flex'
    document.querySelectorAll("[id^=content-]").forEach ((node) => node.style.display = node.id == type ? 'flex' : 'none')
}




data = {
    formation : [    {
        "name" : "Epitech Lille",
        "desc" : ["Master d'expert en technologies de l'information.", "Approfondissement gestion de projet"],
        "date" : '2024',
        "image" : "https://yt3.googleusercontent.com/8mA9eT4kl-CHHHQdCtNfMCWeL6RFFQElfY1ytMoNHF5BG1iMtHQ0b9YaonhC7bydvrG-9hkA=s900-c-k-c0x00ffffff-no-rj"
    },{
        "name" : "Technological University Dublin",
        "desc" : ["Diplome d'IT management", "Strategic & project Management (Scrum / Agile)", "Business Modeling"],
        "date" : '2023',
        "image" : "https://www.ieabroad.com/wp-content/uploads/TUD.png"
    }, {
        "name" : "Epitech Lille",
        "desc" : ["Bachelor", "Pédagogie par project", "Travaux de groupe"],
        "date" : '2022',
        "image" : "https://yt3.googleusercontent.com/8mA9eT4kl-CHHHQdCtNfMCWeL6RFFQElfY1ytMoNHF5BG1iMtHQ0b9YaonhC7bydvrG-9hkA=s900-c-k-c0x00ffffff-no-rj"
    }, {
        "name" : "Lycée Guist'hau, Nantes",
        "desc" : ["Bacalauréa Scientifique","Spécialité Mathématique"],
        "date" : '2019',
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXFOGuHabIn7GjpXicZ1p0cwAHPspmnwt7PYyUV4usbg&s"
    }],
    experience : [
            {
                "dateStart" : "06/23",
                "dateEnd" : "Now",
                "name" : "Jagger-Lewis",
                "lenght" :"1 an",
                "type" : "CDI",
                "desc" : ["Application mobile en <b>Flutter</b>", "Développement d'une API <b>JS<b>", "Développement de pipe-line en <b>Python<b>", "Mise en place d'outil de <b>CI</b> sur les différentes solution "],
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
                "desc" : ["Maintient d'une application de gestion de stock", "<b>HTML / CSS & Google AppScript"],
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
                "name" : "Sygmatel",
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
                "desc" : ["Ideation d'un projet autour de l'allergie", "<b>Marketing, User Experience, Maquette", "Travail en collaboration avec l'Afpral"],
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
                "name" : "Sygmatel",
                "lenght" :"1 mois",
                "type" : "Interim",
                "desc" : ["Job d'été", "Électricien", "Instalisation éélctrique dans un immeuble, "],
                "image" : "https://www.sygmatel.fr/wp-content/uploads/2021/04/Sygmatel-LOW.jpg"
            }
    ],
    competence : 
         [
            {
                name : 'HTML/CSS',
                value : '4',
                color : 'rgba(47, 106, 241, 0.2)',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            }, {
                name : 'JavaScript',
                value : '5',
                color : 'rgba(247, 224, 41, 0.5)',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            }, {
                name : 'React Native',
                value : '4',
                color : 'rgba(103, 218, 251, 0.5)',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            },  {
                name : 'Flutter',
                value : '5',
                color : 'rgba(89, 199, 248, 0.5)',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            },  {
                name : 'Python',
                value : '5',
                color: 'rgba(89, 199, 248, 0.5)',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            },  {
                name : 'C',
                value : '4',
                color : 'rgba(62, 117, 164, 0.5)',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            },  {
                name : 'C++',
                value : '3',
                color : 'rgba(105, 157, 211, 0.5)',
                graph : {
                    values : ['web', 'animation', 'responive', 'autonomie'],
                    keys : ['100', '20', '80', '100'] 
                },
            },
        ],
        eip : {
            description : "L'Epitech Inovative Project, c'est le projet de fin d'étude à Epitech<br>De la 3e à la 5e année les groupe de 4 à 10 étudiants créent leur project et le poussent jusqu'a une hypothetique commercialisation.<br><br><br>",
            dedal_description : "J'ai eu la chance d'être pendent 2 ans le responsable du groupe DEDAL, avec lequel nous sommes années jusqu'en finale national pour présenter notre project d'application mobile simplifiant les visites touristiques.",
            image : 'asset/dedal.png',
            showcase : 'https://dedal-showcasewebsite.vercel.app/'
        }
}

let ratio = window.screen.availWidth < 600

document.querySelectorAll("[id^=action]").forEach((node) => {
    if (redirect[node.id]) {
        redirect[node.id](node)
    }
    else {
        console.log(node.id, 'not handle')
    }
})