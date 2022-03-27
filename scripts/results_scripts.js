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
    for (var i in [...Array(candidatesList.length).keys()]) { document.getElementsByClassName("video")[i].src = videoList[i][nb]; }
}

const candidatesList = ["Jean-Luc Mélenchon", "Valérie Pécresse", "Anne Hidalgo", "Natalie Arthaud", "Marine Le Pen", "Nicolas Dupont-Aignan", "Yannick Jadot", "Philippe Poutou", "Jean Lassalle", "Éric Zemmour", "Fabien Roussel", "Emmanuel Macron"];
const partysList = ["La France insoumise (LFI)", "Les Républicains (LR)", "Parti socialiste (PS)", "Lutte ouvrière (LO)", "Rassemblement national (RN)", "Debout la France (DLF)", "Europe Écologie Les Verts (EELV)", "Nouveau Parti anticapitaliste (NPA)", "Résistons (RES)", "Reconquête (REC)", "Parti communiste français (PCF)", "La République en marche (LREM)"];
const colorsList = ["#cc2443", "#0066cc", "#FF8080", "#bb0000", "#0D378A", "#0082C4", "#00c000", "#bb0000", "#26c4ec", "#0D378A", "#dd0000", "#ffeb00"];
const initialsCandList = ["jlm", "vp", "ah", "na", "mlp", "nda", "yj", "pp", "jl", "ez", "fr", "em"];
const initialsPartList = ["lfi", "lr", "ps", "lo", "rn", "dlf", "eelv", "npa", "res", "rec", "pcf", "lrem"];
const infosList = [
    "Déjà candidat aux élections de 2012 et 2017, il propose sa candidature le 8 novembre 2020, sollicitant une « investiture populaire » de 150 000 personnes pour valider sa candidature, ce qu'il obtient rapidement.",
    "Ministre de l'Enseignement supérieur puis ministre du Budget sous la présidence de Nicolas Sarkozy, elle devient présidente du conseil régional d'Île-de-France en 2015 et annonce sa candidature le 22 juillet 2021 à la primaire de la droite. Elle remporte le congrès des Républicains le 4 décembre 202129. Outre LR et le mouvement « Libres ! », elle est aussi soutenue par l'UDI et Les Centristes.",
    "Elle annonce sa candidature le 12 septembre 2021, puis est désignée par les adhérents socialistes le 14 octobre suivant.",
    "Porte-parole de Lutte ouvrière depuis 2008, elle est la candidate de ce parti en 2012 et en 2017. LO décide de sa candidature à l'occasion de son 50e congrès, en décembre 2020, afin d'« assurer la présence du courant communiste révolutionnaire » à cette élection. Elle annonce sa candidature le 16 septembre 2021.",
    "Élue présidente du Front national en 2011, elle en est déjà la candidate en 2012 et en 2017, où elle termine en troisième puis deuxième position, étant battue par Emmanuel Macron au second tour de cette dernière élection. Elle annonce sa candidature à la présidence lors d'une conférence de presse le 16 janvier 2020.",
    "Ancien maire d'Yerres et député de l'Essonne, il est président de Debout la France. Il se présente aux élections présidentielles de 2012 et 2017, lors desquelles il obtient respectivement 1,79 % et 4,70 % des voix, s'alliant à Marine Le Pen pour le second tour en 2017. Il annonce une troisième candidature le 26 septembre 2020.",
    "Après avoir remporté la primaire écologiste de 2016 face à Michèle Rivasi en vue de l'élection présidentielle de 2017, il se retire finalement pour soutenir le candidat socialiste Benoît Hamon. Candidat à la primaire présidentielle de l'écologie en septembre 2021, il l’emporte de justesse au second tour face à Sandrine Rousseau.",
    "Ancien syndicaliste à l'usine Ford de Bordeaux, il est candidat du Nouveau Parti anticapitaliste aux élections présidentielles de 2012 (1,15 % des suffrages exprimés) et de 2017 (1,09 %). Il est investi par son parti en vue du scrutin de 2022.",
    "Membre du Mouvement démocrate, il prend ses distances avec François Bayrou sur fond de désaccord stratégique et quitte le parti en 2016. Il est connu pour sa marche à travers la France en 2013. Candidat en 2017 ayant obtenu 1,21 % au premier tour, il officialise sa nouvelle candidature le 16 mars 2021.",
    "Journaliste et écrivain, il annonce sa candidature le 30 novembre 2021. Jean-Frédéric Poisson, président de Via, la voie du peuple, ainsi que Jacline Mouraud, figure des Gilets jaunes, se désistent alors en sa faveur.",
    "Député de la 20e circonscription du Nord depuis 2017, il devient secrétaire national du Parti communiste français en 2018. Il annonce sa candidature le 26 novembre 2020. Les militants du parti confirment leur soutien à sa candidature lors d'une consultation interne en mai 2021.",
    "Ministre de l'Économie, de l'Industrie et du Numérique sous la présidence de François Hollande. Élu président de la République en 2017, il officialise sa candidature à un second mandat le 3 mars 2022 dans une « Lettre aux français »."
];
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
    "https://programme.zemmour2022.fr/",
    "https://www.fabienroussel2022.fr/le_programme",
    "EM"
];
const videoList = [
    [
        "https://www.youtube.com/embed/qgLorzVBy_U",
        "https://www.youtube.com/embed/vHO2MI-J9NI",
        "https://www.youtube.com/embed/THcPKzw9sVQ",
        "https://www.youtube.com/embed/tEAgvk4HQ6w",
        "https://www.youtube.com/embed/Q5WJrOebzHo",
        "https://www.youtube.com/embed/JIfxGah-j34",
        "https://www.youtube.com/embed/okFxckRQhwI",
        "https://www.youtube.com/embed/0uubrn0vt78",
        "https://www.youtube.com/embed/kF_aXyY2FzQ",
        "https://www.youtube.com/embed/vybg3RSQekg",
        "https://www.youtube.com/embed/OeJjaSXpR8g",
        "em"
    ],[
        "https://www.youtube.com/embed/ZqYezph-hgg",
        "vp",
        "https://www.youtube.com/embed/89gh4O4Jh9c",
        "https://www.youtube.com/embed/AOZk2Yh79QY",
        "https://www.youtube.com/embed/CMpqrm78vl4",
        "https://www.youtube.com/embed/y0W6OzWb8tI",
        "https://www.youtube.com/embed/sp0nSHxeNIk",
        "https://www.youtube.com/embed/GSUmEZPmNPg",
        "https://www.youtube.com/embed/fPgHWkXM7ZU",
        "https://www.youtube.com/embed/RkH3QjL7O80",
        "https://www.youtube.com/embed/1HFbzdgFA8I",
        "em"
    ]
]

var p = new URLSearchParams(window.location.search);
var nb = p.get("R");
select(nb-1);
