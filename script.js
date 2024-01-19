

QUESTS = [
    {
        title: "En faisant ton 3eme don",
        credit: "100",
        action: "Prendre Rendez-Vous ici",
        link: "",
        logo: "assets/logoEFS.webp",
        image: "assets/calendar.svg",
        success: {
            text: "Bravo, tu as gagné 100 crédits !",
            icon: "assets/help.svg"
        }
    },
    {
        title: "En partageant aux autres",
        credit: "25",
        action: "Partager vos bonnes actions",
        link: "https://www.instagram.com/",
        logo: "assets/share.svg",
        image: "assets/send.svg",
        success: null
    },
    {
        title: "En Atteignant 20 dons dans ta famille",
        credit: "150",
        action: "Prendre Rendez-Vous ici",
        link: "",
        logo: "assets/family2.svg",
        image: "assets/calendar.svg",
        success: {
            text: "Bravo, tu as gagné 150 crédits !",
            icon: "assets/help.svg"
        }
    },
    {
        title: "En ayant 25 personnes dans ta famille",
        credit: "100",
        action: "Trouve ton code de parainage ici",
        link: "",
        logo: "assets/family2.svg",
        image: "assets/family.svg",
        success: {
            text: "Bravo, tu as gagné 100 crédits !",
            icon: "assets/help.svg"
        }
    },
    {
        title: "En suivant l'EFS sur instagram",
        credit: "25",
        action: "Le compte instagram de l'EFS ici",
        link: "https://www.instagram.com/efs_officiel/",
        logo: "assets/share.svg",
        image: "assets/send.svg",
        success: null
    },
    {
        title: "En parrainant un donneur",
        credit: "25",
        action: "Trouve ton code de parainage ici",
        link: "",
        logo: "assets/family2.svg",
        image: "assets/family.svg",
        success: {
            text: "Bravo, tu as gagné 25 crédits !",
            icon: "assets/help.svg"
        }
    },
]

const NUMBER = 6;


function addQuest(title, credit, action, link, logo, image, success = null) {
    var quest = document.createElement('div');
    quest.className = 'quest';
    var clickableTextAction = document.createElement('a');
    if (success != null) {
        clickableTextAction.onclick = () => endQuest(quest, success);
    } else {
        clickableTextAction.href = link;
    }
    clickableTextAction.innerHTML = action;
    quest.innerHTML = `
        <div>
            <div class="logo">
                <img src="${logo}" alt="">
            </div>
            <h4>${title}</h4>
        </div>
        <p>+${credit} crédits</span></p>
        <div class="link">
        </div>
        <a href="${link}" class="action-icon">
            <img src="${image}">
        </a>
    `
    quest.getElementsByClassName('link')[0].appendChild(clickableTextAction);
    document.getElementsByClassName('quests')[0].appendChild(quest);
}

for (let i = 0; i < NUMBER; i++) {
    var sel = Math.floor(Math.random() * QUESTS.length);
    addQuest(QUESTS[sel].title, QUESTS[sel].credit, QUESTS[sel].action, QUESTS[sel].link, QUESTS[sel].logo, QUESTS[sel].image, QUESTS[sel].success);
    QUESTS.splice(sel, 1);
}

function notify(text, icon) {
    var notificationDiv = document.getElementById('notif-div');
    var notif = document.createElement('div');
    notif.innerHTML = `
        <img src="${icon}" alt="">
        <p>${text}</p>
    `;
    notificationDiv.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function endQuest(quest, success) {
    if (success) {
        notify(success.text, success.icon);
    }
    if (quest) {
        quest.remove();
    }
}
