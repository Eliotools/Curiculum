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

const scrollToId = (id) => document.getElementById(id).scrollIntoView(true)


const redirect = {
    "action-nav-info" : (node) => node.addEventListener('click', () => switchContent('content-info', node)),
    "action-nav-formation" : (node) => node.addEventListener('click', () => document.getElementById('formation-title').scrollIntoView( { behavior: "smooth"})),
    "action-nav-experience" : (node) => node.addEventListener('click', () => document.getElementById('experience-title').scrollIntoView( { behavior: "smooth"})),
    "action-nav-loisir" : (node) => node.addEventListener('click', () => document.getElementById('loisir-title').scrollIntoView( { behavior: "smooth"})),
    "action-nav-eip" : (node) => node.addEventListener('click', () => document.getElementById('eip-title').scrollIntoView( { behavior: "smooth"})),
    "action-nav-competence" : (node) => node.addEventListener('click', () => document.getElementById('competences-title').scrollIntoView( { behavior: "smooth"})),
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

const buildFormation = (node) => {
    let card = document.getElementById('formation-container')
    data.formation.forEach((item, index) => {
        let newCard = card.cloneNode(true)
        changeChildsId(newCard, '-'+index, 'formation-' )
        node.appendChild(newCard)
        if (index == 0) {
        document.getElementById('formation-dote-line-' + index).setAttribute('first' ,null)
        }
        if (index == data.formation.length-1) {
        document.getElementById('formation-dote-line-' + index).setAttribute('last', null)
        }
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
        if (index == 0) {
            document.getElementById('experience-dote-line-' + index).setAttribute('first' ,null)
            }
        if (index == data.experience.length-1) {
            document.getElementById('experience-dote-line-' + index).setAttribute('last', null)
        }
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
        let indexContainer = document.getElementById('experience-item-index-' + index)
        item.index?.forEach((elem) => {
          indexNode = document.createElement('div')
          indexNode.classList.add('formation-index')
          indexNode.innerText= elem;
          indexContainer.appendChild(indexNode)
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




data_fr = {
    formation : [    {
        "name" : "Master d'expert en technologies de l'information",
        "desc" : ["Epitech Lille", "Approfondissement gestion de projet"],
        "date" : '2024',
        "image" : "https://yt3.googleusercontent.com/8mA9eT4kl-CHHHQdCtNfMCWeL6RFFQElfY1ytMoNHF5BG1iMtHQ0b9YaonhC7bydvrG-9hkA=s900-c-k-c0x00ffffff-no-rj"
    },{
        "name" : "Diplome d'IT management",
        "desc" : ["Technological University Dublin", "Strategic & project Management (Scrum / Agile)", "Business Modeling"],
        "date" : '2023',
        "image" : "https://www.ieabroad.com/wp-content/uploads/TUD.png"
    }, {
        "name" : "Bachelor",
        "desc" : ["Epitech Lille", "Pédagogie par project", "Travaux de groupe"],
        "date" : '2022',
        "image" : "https://yt3.googleusercontent.com/8mA9eT4kl-CHHHQdCtNfMCWeL6RFFQElfY1ytMoNHF5BG1iMtHQ0b9YaonhC7bydvrG-9hkA=s900-c-k-c0x00ffffff-no-rj"
    }, {
        "name" : "Bacalauréa Scientifique",
        "desc" : ["Lycée Guist'hau, Nantes","Spécialité Mathématique"],
        "date" : '2019',
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXFOGuHabIn7GjpXicZ1p0cwAHPspmnwt7PYyUV4usbg&s"
    }],
    experience : [
      {
        "dateStart" : "03/25",
        "dateEnd" : "07/25",
        "name" : "Stracker",
        "lenght" :"4 mois",
        "type" : "CDI",
        "index" : ["TS","REACT", "RUSH"],
        "desc" : ['<b>Project Owner | Lead Teck Front</b>','Création de <b>Roadmaps</b> détaillées','Rédation du <b>UseCase</b>' ,'Developpement application mobile en <b>Flutter</b>'],
        "image" : 'https://assets-global.website-files.com/6549f4ba8294cf140608d893/654b6a20bf057d68593d620a_logo.png'
    },
      {
          "dateStart" : "06/23",
          "dateEnd" : "03/25",
          "name" : "Jagger-Lewis",
          "lenght" :"2 an",
          "type" : "CDI",
          "index" : ["AGILE","NOTION", "FLUTTER"],
          "desc" : ['<b>Project Owner | Lead Teck Front</b>','Création de <b>Roadmaps</b> détaillées','Rédation du <b>UseCase</b>' ,'Developpement application mobile en <b>Flutter</b>'],
          "image" : 'https://assets-global.website-files.com/6549f4ba8294cf140608d893/654b6a20bf057d68593d620a_logo.png'
      },
      {
          "dateStart" : "06/21",
          "dateEnd" : "01/24",
          "name" : "DEDAL",
          "lenght" :"3 an",
          "type" : "PROJET",
          "index" : ["AGILE", "JIRA", "FLUTTER", "JS", "INTERNATIONAL"],
          "desc" : ['<b>Project Owner | Lead Teck Front</b>','Gestion équipe <b>international<b/>','<b>Finaliste</b> concours france sur 60 équipes' ,"Projet de fin d'étude"],
          "image" : 'https://assets-global.website-files.com/6549f4ba8294cf140608d893/654b6a20bf057d68593d620a_logo.png'
      }, {
                "dateStart" : "03/22",
                "dateEnd" : "06/22",
                "name" : "Chantier Carré",
                "lenght" :"4 mois",
                "type" : "Stage",
                "index" : ["SCRUM","NOTION", 'NEXT'],
                "desc" : ['<b>Lead Teck</b>', "Application Web en <b>Next JS<b>", "Server Less", "Gestion d'une équipe de 3 personnes", "Organisation <b>Agile<b>"],
                "image" : "https://media.licdn.com/dms/image/C4D0BAQF7XnLK8hBAcQ/company-logo_200_200/0/1630474703807/chantiercarr_logo?e=1723075200&v=beta&t=BFU4ASoiBSeIvH_fwp8DgC7LO9ov8Nr9iXf84lGfnbY"
            },{
                "dateStart" : "09/21",
                "dateEnd" : "02/22",
                "name" : "Décathlon Btwin Village",
                "lenght" :"8 mois",
                "index" : ["HTML", "CSS", "Google AppScript"],
                "type" : "Stage 2 jours semaine",
                "desc" : ["Maintient d'une application de gestion de stock", "<b>HTML / CSS & Google AppScript"],
                "image" : "https://cdn6.aptoide.com/imgs/c/5/d/c5d8abab5e239065201a510f9fc15141_icon.png"
            },{
                "dateStart" : "09/20",
                "dateEnd" : "12/20",
                "name" : "Sygmatel",
                "lenght" :"4 mois",
                "index" : ["Python"],
                "type" : "Stage",
                "desc" : ["Creation d'une CVteck", "Application windows" ,"<b>Python"],
                "image" : "https://www.sygmatel.fr/wp-content/uploads/2021/04/Sygmatel-LOW.jpg"
            },{
                "dateEnd" : "01/19",
                "dateStart" : "<br>",
                "name" : "Respir@ction",
                "lenght" :"2 jours",
                "index" : ["User Experience", "BrainStorming"],
                "type" : "Hackathon",
                "desc" : ["Ideation d'un projet autour de l'allergie", "<b>Marketing, User Experience, Maquette", "Travail en collaboration avec l'Afpral"],
                "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpESjnY33osAlDQo1tLFSAY6ccmYf014IHLTBm9AkDWA&s"
            }
    ],
    competence : 
         [
          {
            name : 'HTML',
            image : 'asset/html.png',
            rate : 5,
          },
          {
            name : 'CSS',
            image : 'asset/css.png',
            rate : 5
          }
          ,{
            name : 'JavaScript',
            image : 'asset/js.png',
            rate : 5
          }
          ,{
            name : 'React Native',
            image : 'asset/react.png',
            rate : 5

          }
          ,{
            name : 'Flutter',
            image : 'asset/flutter.png',
            rate : 5

          }
          ,{
            name : 'Python',
            image : 'asset/python.png',
            rate : 5
          }
          ,{
            name : 'C',
            image : 'asset/c.png',
            rate : 3

          }
          ,{
            name : 'C++',
            image : 'asset/cpp.png',
            rate : 3

          }
          ,{
            name : 'Tailwind',
            image : 'asset/tailwind.png',
            rate : 3
          },
          ,{
            name : 'Notion',
            image : 'asset/notion.png',
            rate : 5
          },
          ,{
            name : 'Jira',
            image : 'asset/jira.png',
            rate : 4
          },
          ,{
            name : 'Github',
            image : 'asset/github.png',
            rate : 5
          },
          ,{
            name : 'Agile',
            image : 'asset/agile.png',
            rate : 5
          }
        ],
        eip : {
            description : "L'Epitech Inovative Project, c'est le projet de fin d'études à Epitech <br>De la 3e à la 5e année, les groupes de 4 à 10 étudiants créent leur projet et le poussent jusqu'à une hypothétique commercialisation.<br><br><br>",
            dedal_description : "J'ai eu la chance d'être pendant 2 ans le responsable du groupe DEDAL, avec lequel nous sommes allés jusqu'en finale nationale pour présenter notre projet d'application mobile simplifiant les visites touristiques.",
            image : 'asset/dedal.png',
            showcase : 'https://dedal-showcasewebsite.vercel.app/'
        }
}

data_en = {
    formation : [    {
        "name" : "Master's degree in information technology",
        "desc" : ["Epitech Lille", "Project management"],
        "date" : '2024',
        "image" : "https://yt3.googleusercontent.com/8mA9eT4kl-CHHHQdCtNfMCWeL6RFFQElfY1ytMoNHF5BG1iMtHQ0b9YaonhC7bydvrG-9hkA=s900-c-k-c0x00ffffff-no-rj"
    },{
        "name" : "IT management diploma",
        "desc" : ["Technological University Dublin", "Strategic & project Management (Scrum / Agile)", "Business Modeling"],
        "date" : '2023',
        "image" : "https://www.ieabroad.com/wp-content/uploads/TUD.png"
    }, {
        "name" : "Bachelor's degree",
        "desc" : ["Epitech Lille", "Project-based teaching", "Group work"],
        "date" : '2022',
        "image" : "https://yt3.googleusercontent.com/8mA9eT4kl-CHHHQdCtNfMCWeL6RFFQElfY1ytMoNHF5BG1iMtHQ0b9YaonhC7bydvrG-9hkA=s900-c-k-c0x00ffffff-no-rj"
    }, {
        "name" : "Scientific Bacalaurea",
        "desc" : ["Lycée Guist'hau, Nantes","Mathematics"],
        "date" : '2019',
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXFOGuHabIn7GjpXicZ1p0cwAHPspmnwt7PYyUV4usbg&s"
    }],
    experience : [
        {
            "dateStart" : "07/25",
            "dateEnd" : "Now",
            "name" : "Stracker",
            "lenght" :"4 months",
            "index" : ["TS","REACT", "RUSH"],
            "type" : "CDI",
            "desc" : ["Web application in <b>React TS</b>", "Managing <b>Monorepo<b>", "Configuration mangement with <b>Pulumi<b>"],
            "image" : 'https://assets-global.website-files.com/6549f4ba8294cf140608d893/654b6a20bf057d68593d620a_logo.png'
        },
            {
              "dateStart" : "06/23",
              "dateEnd" : "03/25",
                "index" : ["AGILE","NOTION", "FLUTTER"],
                "name" : "Jagger-Lewis",
                "lenght" :"2 years",
                "type" : "CDI",
                "desc" : ["Mobile application in <b>Flutter</b>", "Development of an API <b>JS<b>", "Pipeline development in <b>Python<b>", "Implementation of <b>CI</b> tools on various solutions"],
                "image" : 'https://assets-global.website-files.com/6549f4ba8294cf140608d893/654b6a20bf057d68593d620a_logo.png'
            }, {
              "dateStart" : "06/21",
              "dateEnd" : "01/24",
              "name" : "DEDAL",
              "lenght" :"3 years",
              "type" : "PROJET",
              "index" : ["AGILE", "JIRA", "FLUTTER", "JS", "INTERNATIONAL"],
              "desc" : ['<b>Project Owner | Lead Teck Front</b>','Team management <b>international<b/>','<b>Finalist</b> in the France competition on 60 teams' ,"End of study project"],
              "image" : 'https://assets-global.website-files.com/6549f4ba8294cf140608d893/654b6a20bf057d68593d620a_logo.png'
          }, {
                "dateStart" : "03/22",
                "dateEnd" : "06/22",
                "index" : ["SCRUM","NOTION", 'NEXT'],
                "name" : "Chantier Carré",
                "lenght" :"4 months",
                "type" : "Internship",
                "desc" : ["Web application in <b>Next JS<b>.", "Server Less", "Management of a team of 3 people", "Agile<b> organization"],
                "image" : "https://media.licdn.com/dms/image/C4D0BAQF7XnLK8hBAcQ/company-logo_200_200/0/1630474703807/chantiercarr_logo?e=1723075200&v=beta&t=BFU4ASoiBSeIvH_fwp8DgC7LO9ov8Nr9iXf84lGfnbY"
            },{
                "dateStart" : "09/21",
                "dateEnd" : "02/22",
                "name" : "Décathlon Btwin Village",
                "lenght" :"8 months",
                "index" : ["HTML", "CSS", "Google AppScript"],
                "type" : "Stage 2 jours semaine",
                "desc" : ["Maintenance of a stock management application", "<b>HTML / CSS & Google AppScript"],
                "image" : "https://cdn6.aptoide.com/imgs/c/5/d/c5d8abab5e239065201a510f9fc15141_icon.png"
            },{
                "dateStart" : "09/20",
                "dateEnd" : "12/20",
                "name" : "Sygmatel",
                "lenght" :"4 months",
                "index" : ["Python"],
                "type" : "Internship",
                "desc" : ["Creating a CVteck", "Application windows" ,"<b>Python"],
                "image" : "https://www.sygmatel.fr/wp-content/uploads/2021/04/Sygmatel-LOW.jpg"
            },{
                "dateEnd" : "01/19",
                "dateStart" : "<br>",
                "name" : "Respir@ction",
                "lenght" :"2 days",
                "index" : ["User Experience", "BrainStorming"],
                "type" : "Hackathon",
                "desc" : ["Ideation of an allergy project", "<b>Marketing, User Experience, Model", "Working in collaboration with Afpral"],
                "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpESjnY33osAlDQo1tLFSAY6ccmYf014IHLTBm9AkDWA&s"
            },
            
    ],
    competence : 
    [
      {
        name : 'HTML',
        image : 'asset/html.png',
        rate : 5,
      },
      {
        name : 'CSS',
        image : 'asset/css.png',
        rate : 5
      }
      ,{
        name : 'JavaScript',
        image : 'asset/js.png',
        rate : 5
      }
      ,{
        name : 'React Native',
        image : 'asset/react.png',
        rate : 5

      }
      ,{
        name : 'Flutter',
        image : 'asset/flutter.png',
        rate : 5

      }
      ,{
        name : 'Python',
        image : 'asset/python.png',
        rate : 5
      }
      ,{
        name : 'C',
        image : 'asset/c.png',
        rate : 3

      }
      ,{
        name : 'C++',
        image : 'asset/cpp.png',
        rate : 3

      }
      ,{
        name : 'Tailwind',
        image : 'asset/tailwind.png',
        rate : 3
      },
      ,{
        name : 'Notion',
        image : 'asset/notion.png',
        rate : 5
      },
      ,{
        name : 'Jira',
        image : 'asset/jira.png',
        rate : 4
      },
      ,{
        name : 'Github',
        image : 'asset/github.png',
        rate : 5
      },
    ],
        eip : {
            description : "The Epitech Inovative Project is the end-of-study project at Epitech<br>From 3rd to 5th year, groups of 4 to 10 students create their project and push it to a hypothetical commercialization.<br><br><br>.",
            dedal_description : "For 2 years, I was in charge of the DEDAL group, with whom we made it all the way to the national finals to present our project for a mobile application to simplify tourist visits.",
            image : 'asset/dedal.png',
            showcase : 'https://dedal-showcasewebsite.vercel.app/'
        }
}

let ratio = window.screen.availWidth < 600


let local = navigator.language.includes('fr')
let data = local ? data_fr : data_en
document.querySelectorAll("[id^=action]").forEach((node) => {
    if (redirect[node.id]) {
        redirect[node.id](node)
    }
    else {
        console.log(node.id, 'not handle')
    }
})