

QUESTS = [
    {
        title: "En faisant ton 3eme don",
        credit: "100",
        action: "Prendre Rendez-Vous ici",
        link: "",
        logo: "assets/logoEFS.webp",
        image: "assets/calendar.svg"
    },
    {
        title: "En partageant aux autres",
        credit: "25",
        action: "Partager vos bonnes actions",
        link: "https://www.instagram.com/",
        logo: "assets/share.svg",
        image: "assets/send.svg"
    },
    {
        title: "En Atteignant 20 dons dans ta famille",
        credit: "150",
        action: "Prendre Rendez-Vous ici",
        link: "",
        logo: "assets/family2.svg",
        image: "assets/calendar.svg"
    },
    {
        title: "En ayant 25 personnes dans ta famille",
        credit: "100",
        action: "Trouve ton code de parainage ici",
        link: "",
        logo: "assets/family2.svg",
        image: "assets/family.svg"
    },
    {
        title: "En suivant l'EFS sur instagram",
        credit: "25",
        action: "Le compte instagram de l'EFS ici",
        link: "https://www.instagram.com/efs_officiel/",
        logo: "assets/share.svg",
        image: "assets/send.svg"
    },
    {
        title: "En parrainant un donneur",
        credit: "25",
        action: "Trouve ton code de parainage ici",
        link: "",
        logo: "assets/family2.svg",
        image: "assets/family.svg"
    },
]

const NUMBER = 9;


function addQuest(title, credit, action, link, logo, image) {
    var quest = document.createElement('div');
    quest.className = 'quest';
    quest.innerHTML = /*html*/`
        <div>
            <div class="logo">
                <img src="${logo}" alt="">
            </div>
            <h4>${title}</h4>
        </div>
        <p>+${credit} crédits</span></p>
        <div class="link">
            <a href="${link}">${action}</a>
        </div>
        <a href="" class="action-icon">
            <img src="${image}">
        </a>
    `
    document.getElementsByClassName('quests')[0].appendChild(quest);
}


//addQuest("Test1", 35, "Click", "assets/logoEFS.webp", "assets/help.svg");

for (let i = 0; i < NUMBER; i++) {
    var sel = Math.floor(Math.random() * QUESTS.length);
    addQuest(QUESTS[sel].title, QUESTS[sel].credit, QUESTS[sel].action, QUESTS[sel].link, QUESTS[sel].logo, QUESTS[sel].image);
}
