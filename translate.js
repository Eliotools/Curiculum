local_fr = {
    "action-nav-info": "INFOS",
    "action-nav-formation": "FORMATION &amp; DÎPLOMES",
    "action-nav-experience": "EXPERIENCE",
    "action-nav-loisir": "LOISIR",
    "action-nav-competence": "COMPETENCE",
    "action-nav-eip": "EIP",
    "job": "\n<li><b>Developpeur</b></li>\n<li><b>Scrum Master</b></li>\n<li><b>Project Owner</b></li>\n",
    "birthday": "\n23/01/2001\n",
    "dimploma": "\nBac +5\n",
    "action-nav-info": "INFOS",
    "action-nav-formation": "FORMATION &amp; DÎPLOMES",
    "action-nav-experience": "EXPERIENCE",
    "action-nav-loisir": "LOISIR",
    "action-nav-competence": "COMPETENCE",
    "action-nav-eip": "EIP",
    "formation-item-desc": "\n    ",
    "experience-item-name": "Epitech Lille",
    "experience-item-desc": "\n    ",
    "loisir-item-title": "Pour me reposer",
    "loisir-item-desc1": "\n<li>Natation</li>\n<li>Skate</li>\n<li>Escalade</li>\n",
    "loisir-item-desc2": "\n<li>Lecture: LoveCraft</li>\n<li>Lego</li>\n<li>Magic the Gathering</li>\n",
    "loisir-item-name": "Pour me defouler",
    "eip-get-site": "Accéder au site : ",
    "eip-get-site" : "Accéder au site :",
    "competence-desc" : "Passez-votre souris sur les icons"
}
local_en = {
    "action-nav-info": "INFOS",
    "action-nav-formation": "FORMATION &amp; DIPLOMES",
    "action-nav-experience": "EXPERIENCE",
    "action-nav-loisir": "HOBBIES",
    "action-nav-competence": "COMPETENCE",
    "action-nav-eip": "EIP",
    "job": "\n<li><b>Developer</b></li>\n<li><b>Scrum Master</b></li>\n<li><b>Project Owner</b></li>\n",
    "birthday": "\n23/01/2001\n",
    "dimploma": "\nBac +5\n",
    "action-nav-info": "INFOS",
    "action-nav-formation": "FORMATION &amp; DIPLOMES",
    "action-nav-experience": "EXPERIENCE",
    "action-nav-loisir": "HOBBIES",
    "action-nav-competence": "COMPETENCE",
    "action-nav-eip": "EIP",
    "formation-item-desc": "\n    ",
    "experience-item-name": "Epitech Lille",
    "experience-item-desc": "\n    ",
    "loisir-item-title": "To rest",
    "loisir-item-desc1": "\n<li>Swimming</li>\n<li>Skate</li>\n<li>Climbing</li>\n",
    "loisir-item-desc2": "\n<li>Reading: LoveCraft</li>\n<li>Lego</li>\n<li>Magic the Gathering</li>\n",
    "loisir-item-name": "To let off steam",
    "eip-get-site": "Go to website : ",
    // "competence-desc" : "Wipe your mouse over the icons"

} 

let data_local = local ? local_fr : local_en

Object.keys(data_local).forEach((key) => {
  const node = document.getElementById(key)
  if (node) {
    node.innerHTML = data_local[key]
  }
}
)
