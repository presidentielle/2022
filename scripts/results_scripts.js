function select(nb) {
    document.getElementById("cand_img").src = "src/".concat(initialsCandList[nb],".jpg");
    document.getElementById("cand_img").alt = candidatesList[nb];
    document.getElementById("part_img").src = "src/".concat(initialsPartList[nb],".png");
    document.getElementById("part_img").alt = partysList[nb];
    document.getElementById("name").innerHTML = candidatesList[nb];
    document.getElementById("party").innerHTML = partysList[nb];
    document.getElementById("info_text").innerHTML = infosList[nb];
    document.getElementsByClassName("id_div")[0].style.background = colorsList[nb];
    document.getElementsByClassName("id_div")[0].style.boxShadow = "0 0 50px 0px "+colorsList[nb];
    document.getElementById("prog_name").innerHTML = candidatesList[nb];
    document.getElementById("program_link").href = programsList[nb];
}

const candidatesList = ["Jean-Luc Mélenchon", "Valérie Pécresse", "Anne Hidalgo", "Natalie Arthaud", "Marine Le Pen", "Nicolas Dupont-Aignan", "Yannick Jadot", "Philippe Poutou", "Jean Lassalle", "Éric Zemmour"];
const partysList = ["La France insoumise (LFI)", "Les Républicains (LR)", "Parti socialiste (PS)", "Lutte ouvrière (LO)", "Rassemblement national (RN)", "Debout la France (DLF)", "Europe Écologie Les Verts (EELV)", "Nouveau Parti anticapitaliste (NPA)", "Résistons (R!)", "Reconquête (R)"];
const colorsList = ["#cc2443", "#0066cc", "#FF8080", "#bb0000", "#0D378A", "#0082C4", "#00c000", "#bb0000", "#26c4ec", "#0D378A"];
const initialsCandList = ["jlm", "vp", "ah", "na", "mlp", "nda", "yj", "pp", "jl", "ez"];
const initialsPartList = ["lfi", "lr", "ps", "lo", "rn", "dlf", "eelv", "npa", "r", "rc"];
const programsList = [
    "https://melenchon2022.fr/programme/",
    "https://valeriepecresse.fr/projets/",
    "https://www.2022avechidalgo.fr/notre_programme",
    "https://www.nathalie-arthaud.info/programme",
    "https://mlafrance.fr/programme",
    "https://2022nda.fr/",
    "https://www.jadot2022.fr/programme",
    "https://poutou2022.org/programme",
    "https://jl2022.fr/#projet",
    "https://programme.zemmour2022.fr/"
];
const infosList = [
    "Président du groupe parlementaire de LFI à l'Assemblée nationale et quatrième au premier tour des dernières élections présidentielles, il est candidat depuis le 8 novembre 2020. Il a recueilli 150 000 signatures sur une plateforme en ligne, donnant le coup d'envoi de sa campagne. Son programme qui prône \"l'union populaire\" est axé sur le social.",
    "La présidente de la région Île-de-France a été désignée par les militants LR, le samedi 4 décembre 2021, avec 60,95 % des voix face au député des Alpes-Maritimes Eric Ciotti. Elle avait annoncé sa candidature à l'élection présidentielle le 22 juillet 2021. C'est la première fois qu'une femme va défendre les couleurs des Républicains à une élection présidentielle.",
    "Actuellement maire de Paris, elle a officialisé sa candidature le dimanche 12 septembre, à Rouen. Elle a remporté la primaire du Parti socialiste le 14 octobre 2021 avec plus de 72 % des voix face à Stéphane le Foll, le maire du Mans. Elle souhaite \"bâtir une France plus juste\" dans un programme tourné vers l'écologie et la reconstruction industrielle. Soutenue par les cadres du PS, elle n'a pas été élue par une primaire interne et le parti ne lui a pas officiellement donné son investiture.",
    "Militante historique du mouvement pour faire entendre les travailleurs, elle a été désignée candidate du parti à l'issue de son congrès, les 19 et 20 décembre 2020.",
    "Députée du Pas-de-Calais et conseillère régionale des Hauts-de-France, elle a annoncé sa candidature le 16 janvier 2020. Elle a obtenu plus de 20 % des suffrages au second tour de la dernière présidentielle et laisse le temps de la campagne la présidence du RN à Jordan Bardella.",
    "Ancien député de l'Essonne, au programme souverainiste, il a annoncé sa candidature le 26 septembre 2020.",
    "À l'issue du scrutin du second tour de la primaire du parti d'Europe-Ecologie-Les Verts, organisé en ligne et qui doit désigner le candidat du parti pour l'élection présidentielle de 2022, Yannick Jadot est arrivé en tête avec 51,03% des voix devant Sandrine Rousseau (48,97%). L'euro-député est le candidat des Verts pour la présidentielle 2022.",
    "Conseiller municipal de Bordeaux, il a déjà représenté le NPA à la dernière élection présidentielle. Le 28 juin, les délégués du parti ont voté pour présenter à nouveau sa candidature. Sa campagne vise le SMIC à 1800 euros nets, la nationalisation des banques, la gratuité des transports ou encore la liberté d'installation et de circulation pour les migrants.",
    "Député du Béarn, il a annoncé sa candidature le 16 mars 2021. Il veut \"incarner la joie malgré la crise\".",
    "L'ex-polémiste se présente pour la première fois à l'élection présidentielle. Il a officialisé sa candidature le 30 novembre 2021 dans une vidéo Youtube."
];

var p = new URLSearchParams(window.location.search);
var nb = p.get("R");
select(nb-1);