function randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}

function hide(nb) {
    if (document.getElementsByClassName("hide_btn")[nb-1].innerHTML == "Griser") {
        document.getElementsByClassName("program")[nb-1].style.opacity = "50%";
        document.getElementsByClassName("hide_btn")[nb-1].innerHTML = "Dégriser";
        document.getElementsByClassName("select_btn")[nb-1].disabled = true;
    } else {
        document.getElementsByClassName("program")[nb-1].style.opacity = "100%";
        document.getElementsByClassName("hide_btn")[nb-1].innerHTML = "Griser";
        document.getElementsByClassName("select_btn")[nb-1].disabled = false;
    }
}

function select(nb) {
    document.getElementById("hider_div1").style.animationPlayState = "running";
    document.getElementById("hider_div2").style.animationPlayState = "running";
    document.getElementById("hider_div3").style.animationPlayState = "running";
    document.getElementById("hider_div4").style.animationPlayState = "running";
    var p = new URLSearchParams();
    p.append("R", nb.toString());
    setTimeout(function () { window.location.href = "result.html?"+ p.toString(); }, 1200);
}

///

var nbMax = document.getElementsByClassName("program").length;
var orderList = randomize([...Array(nbMax).keys()]);

for (var nb in [...Array(nbMax).keys()]) { document.getElementsByClassName("program")[nb].style.order = orderList[nb]; }

///

const candidatesList = ["Jean-Luc Mélenchon", "Valérie Pécresse", "Anne Hidalgo", "Natalie Arthaud", "Marine Le Pen", "Nicolas Dupont-Aignan", "Yannick Jadot", "Philippe Poutou", "Jean Lassalle", "Éric Zemmour", "Fabien Roussel", "Emmanuel Macron"];
const initialsList = ["jlm", "vp", "ah", "na", "mlp", "nda", "yj", "pp", "jl", "ez", "fr", "em"];
const namesList = [
    [
    "Augmenter le SMIC.<br>Salaire maximum autorisé.",
    "Service citoyen obligatoire.",
    "100% d’énergie renouvelable d’ici à 2050.<br>Sortir du nucléaire.<br>Règle verte dans la constitution.",
    "Interdire les OGM et pesticides.",
    "Créer une université de l'espace.",
    "Taxer les héritages importants.",
    "Retraite à 60 ans.",
    "Passer à la VIe République.",
    "Refonder la police.",
    "Renégocier les traités européens.",
    "Autres mesures … "
    ],[
    "Réduire les dépenses publiques.",
    "Augmenter les salaires.",
    "Fin des 35 heures.",
    "Retraite à 65 ans.",
    "Revenu jeunes actifs.",
    "Ralentir l’immigration.<br>Supprimer le droit du sol.",
    "Renforcer les moyens de la police et de la justice.",
    "Miser sur le nucléaire.<br>Développer des modes de transports en commun plus propres.",
    "2h de français et 1h de maths.",
    "Pass vaccinal.",
    "Autres mesures … "
    ],[
    "Droit de vote à 16 ans.",
    "Augmenter le SMIC de 15%.",
    "5 000€ pour les jeunes de 18 ans.<br>Revenu minimum jeunesse.",
    "Mieux rémunérer les enseignant.",
    "Ministre du climat en n°2 du gouvernement.<br>Lutte pour le climat dans la constitution.",
    "Mise en place d’un ISF climatique.",
    "Rétablissement d’un ministère des droits des femmes.",
    "35H plus flexibles.",
    "Loi pour une fin de vie digne.",
    "Référendum d'initiative citoyenne.",
    "Autres mesures … "
    ],[
    "Supprimer la TVA.",
    "SMIC à 2 000€.",
    "Mettre fin au chômage.<br>Réduire du temps de travail.<br>Retraite à 60 ans.",
    "Supprimer les frais à l'université.",
    "Soins gratuits.",
    "Fin des opérations militaires.",
    "Accueillir tous les réfugiés.",
    "Permettre de révoquer les élus.",
    "Allonger le congé paternité.",
    "Annuler les JO de Paris.",
    "Autres mesures … "
    ],[
    "Référendum sur l'immigration.<br>Loi Citoyenneté Identité Immigration.",
    "Retour des peines planchers.",
    "Plus de souveraineté vis à vis de l'Europe.",
    "Plus d'impôt sur le revenu pour les moins de 30 ans.",
    "Prêt de l'état qui se transforme en don.",
    "Augmenter les salaires les plus faibles.",
    "Baisser la TVA.",
    "Miser sur le nucléaire.",
    "Avancer la retraite pour certains travaux.",
    "Augmenter le budget de la Défense.",
    "Autres mesures … "
    ],[
    "Mettre fin au pass vaccinal.",
    "Augmenter les salaires.<br>Rétablir l’ISF.",
    "Rendre la justice plus ferme.",
    "Expulser les délinquants étrangers.<br>Supprimer le droit du sol.",
    "Changer l’Union européenne.",
    "Redonner le pouvoir de décision aux Français.",
    "Créer un service national civique obligatoire.",
    "Créer une allocation de réinsertion.",
    "Renforcer l’apprentissage du français et des maths à l’école.",
    "Investir dans la santé.",
    "Autres mesures … "
    ],[
    "Sortir de l’élevage industriel.",
    "Sortir du nucléaire.",
    "Mettre en place un ISF climatique.",
    "Éradiquer la grande pauvreté.<br>Augmenter le SMIC.",
    "Augmenter le salaire des enseignants et du personnel soignant.",
    "Réduire et assouplir du temps de travail.",
    "\"Déverrouiller les institutions\".",
    "Lutter contre les violences sexistes et sexuelles.",
    "Changer de politique avec la Chine.",
    "Réformer la police.",
    "Autres mesures … "
    ],[
    "Sortir du capitalisme.<br>Nationaliser les secteurs clés de l’économie.",
    "1800 euros nets par mois minimum pour tous.",
    "Diminuer le temps de travail.",
    "Interdire les licenciements.",
    "Détruire l’arme nucléaire française.",
    "100% d’énergies renouvelables en 2050.",
    "Transports en commun gratuits.",
    "Accueillir tous les migrants sans distinction.",
    "Allongement du délai légal pour avorter.",
    "Fin du pass vaccinal.",
    "Autres mesures … "
    ],[
    "Ouvrir 20 000 lits.<br>Recruter 100 000 soignants.",
    "Rétablir l’ISF.",
    "RSA Jeunes.<br>Prêt étudiant à taux 0 de 20 000 €.",
    "Rétablir un service national universel.",
    "Nationaliser des entreprises dans les secteurs clés de l’économie.",
    "Ticket Paysan.",
    "Assurer un toit à tous les sans-abri.",
    "Reconnaître le RIC et le vote blanc.",
    "Désengagement de la France de l’OTAN.",
    "Stopper l’éolien.<br>Investir dans les énergies renouvelables et le nucléaire.",
    "Autres mesures … "
    ],[
    "Réduire l’immigration à 0.",
    "Réduire les droits et aides aux étrangers.",
    "Renvoyer les étrangers qu’il juge “indésirables”.",
    "Abaisser la majorité pénale.",
    "Baisser les impôts sur la production.",
    "Augmenter le salaire net des travailleurs modestes.",
    "Classes de niveaux.",
    "Interdiction des signes religieux dans l’espace public.",
    "Miser sur le nucléaire.",
    "Interdire le recours à la PMA sans père.",
    "Autres mesures … "
    ],[
    "“Révolutionner le travail”.",
    "Investir dans les services publics.",
    "850 € par mois pour tous les étudiants.",
    "Tripler l’ISF.",
    "Garantir à tout le monde le droit de “bien manger”.",
    "Miser sur le nucléaire.",
    "Refonte de la police.",
    "Quitter l’OTAN.",
    "Une ruralité heureuse.",
    "Supprimer l'élection au suffrage universel du président de la République.<br>Redonner le pouvoir au Parlement et au peuple.",
    "Autres mesures … "
    ],[
    "Bientôt disponible ... ",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    ]
]
const hoverList = [
    [
    "X souhaite augmenter le SMIC (=salaire minimum) pour qu'il atteigne 1400€ net/mois (contre 1269€ aujourd'hui). Il veut également mettre en place un « salaire maximum autorisé » : Cela consiste à empêcher que le plus haut salaire dans une entreprise soit plus de 20 fois supérieur au salaire le plus faible. Il souhaite aussi verser une « allocation d'autonomie » d'un montant de 1063€/mois pour les moins de 25 ans, sont concernés les jeunes qui étudient à l'université ou en lycée professionnel et qui sont indépendants de leurs parents.",
    "X veut mettre en place un « service citoyen obligatoire » de 9 mois payé au SMIC. Ce service comprend une partie militaire (optionnelle) et une formation pour par exemple rejoindre une association, participer à des projets de défense de l'environnement ou encore apprendre les premiers secours … Ce service serait pour les femmes et les hommes et serait obligatoire pour tous les moins de 25.",
    "X souhaite que d'ici 2050, 100% de l'énergie en France proviennent de sources d'énergie renouvelable (solaire, éolien, …). X souhaite abandonner les énergies fossiles mais aussi sortir du nucléaire. X veut qu’une « règle verte » soit inscrite dans la constitution pour que l'état s'engage à ne pas prélever plus dans la nature que ce que la nature peut reconstituer. Pour s'assurer que cette règle est respectée, X veut mettre en place « une planification écologique » : C'est savoir qui produit quoi et en quelles quantités.",
    "X propose aussi d'interdire en France les OGM (graines modifiées en laboratoire) ainsi que les pesticides pour limiter les impactes néfastes sur la santé et sur l'environnement.",
    "X veut que la France participe davantage dans les programmes de recherche spatiale. X milite pour la création d'une université de l'espace pour créer des emplois car X estime que la France à sa place dans ce domaine et doit l’affirmer.",
    "Pour financer sont « allocation d'autonomie », X veut taxer davantage les héritages les plus élevés, (supérieur à 12 000 000 €), dans le but de réduire les inégalités. X souhaite que l'état prélève tout ce qui dépasse 12 millions d'euros.",
    "X veut faire passer l'âge de la retraite à taux plein (=montant maximum possible) à 60 ans (contre 65 ans aujourd'hui). X veut aussi réduire le nombre d'années de travail pour les personnes ayant un travail pénible (travailleurs de nuit, … ).",
    "X veut mettre fin à la 5ème république pour passer à la 6ème république. X considère que la 5ème république donne trop de pouvoir au président, qu’elle manque parfois de transparence et que les citoyens n'ont pas assez de pouvoir. X propose de changer le fonctionnement des différentes institutions de la république (=assemblée nationale, sénat, rôle du président, rôle du prêt ministre). Pour modifier cette constitution, X propose de convoquer une assemblée constituante (=ensemble de citoyens) pour rédiger une nouvelle constitution qui donnerait plus de pouvoir à l'assemblée notamment et moins de pouvoirs au président de la république. Ce nouveau texte serait ensuite adopté par référendum (=tous les citoyens seraient appelés à voter).",
    "Selon X, la population n'a plus confiance en la police et la police se méfie trop de la population. X souhaite démanteler la BAC (=brigade anticriminalité), qui est spécialisée dans les interventions en zone sensible pour la remplacer par une police de proximité, plus spécialisés par zone et qui serait plus proche de la population. X souhaite aussi changer les méthodes de travail de la police dans certains cas en interdisant certaines méthodes que X juge trop violentes.",
    "X souhaite changer les traités européens tels qu'ils sont pour qu'ils soient en accord avec son programme avec par exemple plus de protectionnisme écologique. X souhaite favoriser les produits qui sont fabriqués en France par exemple en taxant les produits qui viennent d'ailleurs ou alors en donnant des subventions aux productions françaises qui sont respectueuses de l'environnement. Si les autres pays refusent ces changements, X propose que la France arrête de participer à certains programmes européens.",
    "X veut aussi : bloquer les prix des produits de première nécessité ; quitter l'OTAN ; mettre en place un budget d'un milliard d'euros pour lutter contre le sexisme et contre les violences faites aux femmes ; que l'allocation adulte handicapé soit indépendante des revenus du conjoint ; légaliser le cannabis ; mettre fin au « pass vaccinal » ; que l'état reprenne le contrôle de plusieurs secteurs clés de l'économie (aéroports, la française des jeux, autoroutes … ) ; … "
    ],[
    "X veut réduire les dépenses de l'état, pour ça X propose de supprimer 200 000 postes de fonctionnaires mais en parallèle d’en recruter 50 000 nouveaux pour « protéger soigner et éduquer » avec notamment 25 000 personnes pour le secteur de la santé.",
    "X souhaite une augmentation des salaires, X parle d'une augmentation de 3% des salaires nets d'ici 2023, pour tous les salariés. Cette hausse serait permise par une prise en charge par l'état d'une partie des cotisations sociales. Cette augmentation concerne les gens qui travaillent dans le privé, l’augmentation des fonctionnaire serait négocié secteur par secteur. (Cette hausse ferais passer les personnes au SMIC (= salaire minimum) de 1269€ net/mois à 1304€ net/mois mais toucherais également tout les autres salaires du privée).",
    "X veut que les français travaillent davantage, pour cela X veut mettre fin à la règle des 35h/semaine et veut que le plan de travail soit négocié en interne dans chaque entreprise avec une base de 39h/semaine.",
    "Pour augmenter le temps de travail, X veut progressivement augmenter l'âge légal de départ à la retraite pour atteindre 65 ans en 2030. (contre 62 ans aujourd'hui).",
    "X veut donner accès à un « revenu jeune actif » (dispositif qu’X a déjà lancé dans une région) au moins de 26 ans qui ne sont ni étudiants, ni employés. Il s’agit d’un revenu de 500 à 670€/mois à condition qu’en échange les jeunes suivent une formation pour se former à un métier qui recrute.",
    "X veut ralentir l'immigration en France, pour cela X souhaite mettre en place des quotas d'accueil pour les immigrés (=nombre maximum d'immigrés par an), qui serait voté chaque année par le parlement. X veut mettre fin au droit du sol (=aujourd’hui les enfants de parents étrangers qui naissent sur le sol français ont quasiment automatiquement nationalité française à leurs 18 ans).",
    "X veut renforcer les moyens de la police et de la justice en investissant 5 milliards d’euros pour l'équipement des policiers, armer les policiers municipaux ou encore construire 20 000 nouvelles places de prison. X à aussi promis une peine automatique d'un an de prison ferme pour ceux qui s'en prendraient physiquement aux forces de l'ordre (=implique un changement de la constitution).",
    "X veut que la France continue de miser sur le nucléaire en modernisant les centrales existantes pour augmenter leurs durée de vie mais aussi en créant de nouvelles centrales pour en finir avec le pétrole ou le gaz. X s'oppose à ce qu'elle appelle une « écologie punitive » (=écologie avec taxes et amendes). X veut développer des modes de transport en commun plus propres (métros,  bus électriques, …) et interdire à partir de 2035 les ventes de voitures neuves qui fonctionne à l'essence et au diesel. (=mesure déjà porté par la commission européenne à l'échelle de tous les pays de l'UE).",
    "X veut qu'il y ait 2h de français et 1h de maths en plus par semaine à l'école primaire et veut aussi créer un examen avant l'entrée en classe de sixième (=pour les cm2). Selon X le but n'est pas d'empêcher l'entrée en sixième mais serait de pouvoir repérer les élèves les plus en difficulté pour les rassembler dans des classes de remise à niveau en 6ème.",
    "X est favorable au pass vaccinal et veut ordonner en cas de nouveau pics de l'épidémie de COVID19 un confinement des personnes non vaccinées.",
    "X veut aussi : avoir de plus fortes relations diplomatique avec les USA ; qu'une personne puisse avoir jusqu'à 200 000 € d'héritage sans payer d'impôts (seuil fixé à 100 000€ aujourd'hui) ; charger un comité de réaliser une grande simplification du fonctionnement de l'administration française ; abaisser la majorité pénale à 16 ans (=âge auquel une personne est jugée avec la même sévérité qu’un adulte) ; qu’un prélèvement soit fait directement sur le salaire d'une personne qui ne paye pas une amende ; la création d’une prime de 900€/an pour un premier enfant ; (jusqu'au 18 ans de l'enfant) ; pour encourager et relancer la natalité ; créer une « banque des jeunes » pour les aider à financer leurs études ou créer leur entreprise, (les jeunes auraient à rembourser leurs prêts que si ils atteignent un certain niveau de salaire, sinon l’état rembourserait à leurs place) ; … "
    ],[
    "X souhaite accorder le droit de vote dès l'âge de 16 ans et veut aussi accorder le droit de vote aux étrangers pour les élections locales (élections municipales, …).",
    "X souhaite augmenter le SMIC (=salaire minimum) de 15 % ce qui correspond à une hausse d'environ 200€ net/mois. Le SMIC s'élèverait donc à 1450€/mois (contre 1269€/mois actuellement).",
    "X veut créer un versement de 5000€ pour tous les jeunes à leurs 18 ans sans conditions (=peu importe les revenus des parents). L’objectif est d'aider à financer des projets professionnels ou personnels sans justification. X veut aussi instaurer un « revenu minimum jeunesse » de 564€/mois pour les jeunes qui sont les plus en difficulté financièrement.",
    "X veut augmenter le salaire des enseignants pour qu’un professeur qui débute gagne l'équivalent du salaire d'un cadre débutant à bac+5, (=2300€net/mois contre 1700€net/mois aujourd'hui).",
    "X veut que le numéro deux du gouvernement soit un ministre ou une ministre du climat de la biodiversité et de l'économie. Il serait considéré comme le deuxième ministre le plus important juste après le premier ministre. X veut aussi inscrire la lutte contre le changement climatique dans la constitution. ",
    "X veut rétablir l’impôt sur la fortune, (=impôts payé par les plus riches, supprimé par Emmanuel Macron). Cependant X souhaite le remplacer par un « impôt sur la fortune climatique », un impôt sur la fortune modulé en fonction de l'impact environnemental des placements financiers des riches ménages. Cette idée s'appuie sur un rapport du laboratoire des inégalités mondiales qui indique que 10% des plus fortunés sont responsables de la moitié des émissions mondiales de CO2.",
    "X veut rétablir un ministère 100% dédié aux droits des femmes (supprimé par Emmanuel Macron et remplacé par un secrétariat d'état, puis par un ministère plus large qui comprend aussi la lutte contre les discriminations). X souhaite aussi adopter certaines mesures appliquées en Espagne à savoir la formation des policiers, des gendarmes, des magistrats, la présence d'assistantes sociales dans les commissariats ou encore l'éloignement des conjoints ou ex-conjoints violents.",
    "X veut rendre possible des négociations en interne au sein des entreprises pour travailler moins de 35 heures par semaine. L’idée est de garder la base des 35 heures par semaine mais de laisser la possibilité aux entreprises de faire moins.",
    "X veut mettre en place une loi pour « garantir le droit à une fin de vie digne », cette loi permettrait à ceux qui le souhaitent de pouvoir se faire euthanasier légalement, (=mettre fin à leur jour de manière médicale et encadrée), ceci pour éviter que certains français se rendent à l'étranger pour le faire.",
    "X veut créer un « référendum d'initiative citoyenne », l'objectif serait de permettre aux citoyens de réunir un certain nombre de signatures (fixé par la loi) pour organiser un référendum sur un sujet sans avoir besoin de l'accord du parlement ou du président.",
    "X veut aussi : la suppression de Parcoursup pour créer un nouveau système ; construire 150 000 logements sociaux par an ; prolonger le congé paternité à 16 semaines (=contre 4 semaines actuellement) ; mettre en place une loi pour atteindre l'égalité des salaires femme/homme en 5 ans, en rendant notamment publique la liste des entreprises qui ne respectent pas cette égalité de salaire et en leur imposant des pénalités ; arriver à 100% d'énergies renouvelables aussi rapidement que possible sans construire de nouvelles centrales nucléaires ; mettre l'union européenne vraiment au cœur de son projet ; … "
    ],[
    "X souhaite supprimer la TVA (=taxe payé pour tous à chaque achat d’un produit ou utilisation d’un service). X trouve cette taxe injuste puisque tout monde paye de la même façon alors que tout le monde n'a pas forcément les mêmes moyens et les mêmes revenus. Pour compenser la perte pour l’état, X propose d’augmenter les taxes sur les profits notamment des grandes entreprises.",
    "X souhaite qu'aucun salaire et qu’aucune pension de retraite ne soit inférieur à 2000€ net/mois, alors qu'aujourd'hui le salaire minimum est de 1269€ net/mois. Pour financer une telle mesure, X compte là aussi prendre davantage sur les profits des multinationales et des grandes entreprises.",
    "X à un objectif de « zéro chômeur » en France et elle compte y parvenir de deux manières, tout d'abord en réduisant la durée de temps de travail sans baisser les salaires de façon à ce que le travail soit davantage répartis au sein de la population et en interdisant les licenciement. En cas de faute professionnelle d'un salarié ce ne serait pas au patron mais aux autres travailleurs de l'entreprise de décider du sort de ce salarié. X veut par ailleurs faire passer l'âge de la retraite à taux plein (=avec le montant maximum possible) à 60 ans aujourd'hui la règle générale c'est qu'il faut attendre 65 ans.",
    "X veut supprimer complètement les frais d'inscription à l'université et augmenter les bourses étudiantes.",
    "X souhaite que tous les soins de santé prescrit par un médecin soit gratuit pour tous est pris en charge dans son intégralité par l'assurance maladie. Selon X, cette mesure peut être financée en prenant sur les profits des grands groupes industriels notamment pharmaceutiques et de la finance (à l'heure actuelle tous les soins ne sont pas remboursés dans leur intégralité dans le pays).",
    "Selon X, les guerres menées à l'étranger son menées pour le profit et jamais dans l'intérêt des peuples, X veut y mettre fin. (Aujourd'hui les forces armées françaises sont déployées pour deux grandes opérations majeures : « Barkan » au Sahel et au Sahara (=Afrique) et « Shamal » en Syrie et en Irak (=Moyen Orient). A noter qu'Emmanuel Macron a annoncé le retrait d'ici six mois des 2500 soldats français présents au Mali (Barkan), entre 2500 et 3000 soldats français resteront cependant engagés dans d'autres pays du Sahel, notamment au Burkina Faso ou encore au Niger avec l'objectif affiché par le gouvernement de venir en soutien aux forces africaines dans la lutte antiterroriste).",
    "X souhaite accueillir tous les réfugiés migrants qui peuvent entrer sur le territoire et ce sans conditions, X veut une liberté totale de circulation et d'installation sur le territoire français à tous les migrants. X défend l’idée d'une Europe totalement débarrassée de ses frontières.",
    "X souhaite donner la possibilité à la population de révoquer (=destituer) à tout moment n'importe quel élu (=maire, député, président de la république, …). Pour cela, X envisage plusieurs procédures : une nouvelle élection aux municipales ou législatives suite à des pétitions massive, des manifestations importantes ou encore un référendum local. L'idée est de permettre davantage de contrôle sur les élus et de pouvoir les changer plus facilement qu’aujourd'hui.",
    "X souhaite allonger la durée du congé paternité pour qu'il soit identique au congé maternité à la naissance de l'enfant (actuellement la durée du congé paternité est de 28 jours contre 16 à 26 semaines pour le congé maternité).",
    "Avec X, il n'y aurait pas de jeux olympiques d'été de 2024 à Paris. Pour X, ces jeux olympiques sont un gaspillage financier, économique ou encore écologique (=le budget de ces jeux est de plus de 7 milliards d'euros).",
    "X veut aussi : que l'état paie en partie ou dans son intégralité le permis de conduire des jeunes les plus défavorisés ; prendre en compte le vote blanc ; supprimer le secret industriel et commercial ; interdire la chasse à courre ; mettre fin à l'élevage et l'abattage intensifs ; … "
    ],[
    "X affirme que sa première mesure sera d'engager un référendum sur l'immigration pour faire du contrôle de l'immigration une priorité. Avec ce référendum, X veut faire adopter une loi intitulée « citoyenneté identité immigration » qui viserait à réduire très fortement l'immigration et les droits des étrangers. Elle comporte des mesures comme : l’expulsion des étrangers qui n'ont pas travaillé pendant un an, l’expulsion des étrangers qui ont été condamnés par la justice, la suppression du droit du sol (= qui permet aux personnes nés en France d'acquérir la nationalité française).  Les allocations familiales seraient réservées aux français et le revenu de solidarité active (= revenu pour les plus démunis) serait interdit aux étrangers qui n'ont pas travaillé plus de cinq ans en France. L’aide médicale d'état (= aide médicale pour les étrangers en situation irrégulière) serait également supprimée. X souhaite aussi rendre prioritaires les français par rapport aux étrangers notamment dans le cadre d'une offre d'emploi ou encore d'un logement.",
    "X souhaite « faire de la sécurité partout et pour tous » la priorité de son quinquennat. X veut rétablir les peines planchers (= imposer une peine minimale en cas de récidive, mis en place par N.Sarkozy en 2007, mais supprimé par F.Hollande en 2017). X souhaite également supprimer toute possibilité de réduction et d'aménagement de peine en particulier pour les violences contre les personnes et établir la possibilité d'une peine de prison à perpétuité réelle (sans aucuns aménagements).",
    "X veut changer le fonctionnement de l'Union européenne de l'intérieur, en restant dans la zone euro et en s'alliant avec d'autres gouvernements européens qui veulent changer l'UE, comme Viktor Orbán (Hongrie). X souhaite négocier les traités européens qui sont en place aujourd'hui pour que l'UE ait moins de pouvoir et que le droit français redevienne supérieur au droit européen.",
    "X souhaite supprimer les impôts sur le revenu pour tous les moins de 30 ans, peu importe leur revenu (personnes modestes comme personnes ayant des revenus très importants). L'objectif de cette mesure est d'encourager les jeunes à rester en France et ne pas aller à l'étranger. (Cette mesure pourrait être compliquée à mettre en place car la constitution garantit aujourd'hui que deux personnes en situation égale et aux revenus égaux doivent payer le même impôt au nom de l'égalité devant l'impôt). X souhaite également supprimer l'impôt sur les sociétés des entrepreneurs de moins de 30 ans et ce pendant les cinq premières années de leur entreprise. Là aussi dans l'objectif est d'encourager à entreprendre directement en France.",
    "X rendra possible un prêt de l'état à taux zéro sur 10 ans (= sans avoir à payer d’intérêts). Les conditions de ce prêt sont assez particulières et concernent les couples souhaitant acheter un logement : un couple dont la moyenne d'âge est inférieure à 30 ans et dont au moins un des deux est français pourra se faire prêter jusqu'à 100 000€ par l'état, or la particularité de ce prêt à taux zéro est qu’il ne sera plus nécessaire pour le couple de le rembourser dès lors qu’il mettra au monde son troisième enfant. L’objectif est de faciliter l'accès à la propriété, mais surtout d'encourager les naissances.",
    "X propose d'encourager les entreprises à augmenter les salaires les plus faibles en ne mettant pas de cotisations patronales (= cotisation que l'entreprise doit payer sur toute augmentation de salaire allant jusqu'à 10%). Cela s’appliquerait à tous les salaires allant jusqu'à trois fois le SMIC.",
    "X veut baisser la TVA  (= taxe sur la valeur ajoutée) qui est présente aujourd'hui sur les carburants, le gaz et le fioul en la faisant passer à 5,5 %. (Aujourd’hui, la TVA est fixée à 20 % sur les produits de première nécessité).",
    "X veut lancer la construction de six réacteurs nouvelle génération de type EPR, et veut également réouvrir la plus vieille centrale nucléaire de France, la centrale de Fessenheim (fermée en juin 2021). X souhaite démanteler et retirer toutes les éoliennes de France, car selon X, elles polluent visuellement le paysage et ne sont pas une source d'énergie suffisamment fiable.",
    "X propose que l'âge minimal de départ à la retraite reste à 62 ans, mais souhaite par contre que les personnes ayant commencé à travailler avant leurs 20 ans puissent partir plus tôt pour compenser la pénibilité de certains emplois.",
    "X veut augmenter le budget du ministère de la Défense de plus de 30 % d'ici à 2027 pour que ce budget atteigne 55 milliards d'euros pour que la France puisse être davantage indépendante sur le plan militaire. X veut aussi sortir de l'OTAN.",
    "X veut aussi : rendre gratuits les trains pour les jeunes de moins de 25 ans, mais uniquement aux heures creuses ; créer 100 000 nouveaux logements sociaux ; revaloriser l'allocation adulte handicapé ; instaurer le référendum d'initiative citoyenne (= permet l’organiser d’un référendum sur un sujet qui a recueilli un certain nombre de signatures) ; organiser un référendum sur l'écologie avec 15 questions en faveur du localisme ; elle souhaite renationaliser les autoroutes ; créer un ministère d'état de la mer et de l'outre-mer ainsi qu'un ministère dédié spécifiquement à la lutte contre les fraudes ; supprimer le « pass vaccinal » ; … "
    ],[
    "X veut supprimer toutes les restrictions sanitaires et notamment au « pass vaccinal », car X considère que c'est une privation de liberté.",
    "X souhaite une augmentation de 8 % du salaire de tous les français qui gagnent moins de 3 fois le SMIC (= moins de 4800 € brut/mois environ). Cette augmentation de salaire reviendrait au versement d'un mois supplémentaire de salaires. Pour rendre cela possible, X veut réduire les cotisations salariales, selon X, cela coûterait environ 20 milliards d'euros à l'état par an mais ce serait financé par les économies tirées de la lutte contre la fraude à la carte vitale. Selon X, il y aurait 1,8 millions de fausses cartes vitales en circulation en France (chiffre très contesté). X souhaite aussi rétablir l’ISF, (= impôt sur les très grandes fortunes supprimé par Emmanuel Macron).",
    "X veut la suppression de la loi qui aménage les peines de prison courtes, (= loi votée en 2019 pour mettre en place des peines alternatives à la prison dans le cas de délits). X veut être plus ferme et souhaite abaisser la majorité pénale à 16 ans (= âge auquel une personne est jugée avec la même sévérité qu’un adulte). X veut aussi créer 40 000 places de prison supplémentaires en utilisant une partie des casernes qui sont aujourd'hui désaffectées.",
    "X souhaite expulser les délinquants étrangers à l'issue de leur peine et propose même que leur emprisonnement se fasse dans leur pays d'origine quand cela est possible. X veut également renvoyer les mineurs isolés étrangers (= jeunes de moins de 18 ans arrivé en France sans représentant légal en France, actuellement, les mineurs isolés étrangers bénéficient de la protection de l'enfance qui leur donne certains droits). X veut supprimer le droit du sol (= aujourd'hui un enfant né en France de parents étrangers obtient la nationalité française à sa majorité sous certaines conditions).",
    "X souhaite sortir de l'Union européenne ou en tout cas sortir de l'UE telle qu'elle fonctionne aujourd'hui. Pour X, cette organisation est inefficace, dangereuse et dépassée. X veut la remplacer par une « communauté des nations libres » pour favoriser les réunions en petits groupes avec 3 ou 4 pays autour de projets spécifiques. X veut donc arrêter immédiatement toutes les négociations pour l'élargissement de l'UE et l'intégration de nouveaux pays.",
    "X souhaite faire adopter ses grandes réformes par référendum (= en faisant voter la population), et dans ce même but X veut aussi instaurer le RIC (=  référendum d'initiative citoyenne). Dès qu'un projet est soutenu par 500 000 citoyens inscrits sur les listes électorales (qui signent par exemple une pétition), il est soumis au référendum. X souhaite également revenir à un mandat pour le président de la république qui durait 7 ans (contre 5 ans aujourd'hui) mais qui serait non renouvelable et mettre en place un référendum à mi-mandat qui permettrait de destituer le président. X souhaite aussi que le vote blanc soit pris en compte lors des élections et que le résultat d'une élection soit annulée si le vote blanc est majoritaire.",
    "X veut créer un « service national civique » obligatoire de trois mois pour les femmes comme les hommes. A leurs 18 ans, tous les jeunes devront participer à des missions de service public pendant trois mois. Ils pourront passer leur permis de conduire gratuitement en échange de ces missions. Ces trois mois obligatoires pourront être prolongés par un service militaire d'un an (facultatif) dont l'objectif serait d'augmenter le nombre de soldats réservistes (= soldats militaire à temps partiel qui ont un autre métier, mais qui peuvent être appelés en cas de conflit ou de crise majeure). X veut recruter 40 000 soldats de plus.",
    "X propose de créer un contrat de travail pour les jeunes et les chômeurs de longue durée (= somme d'argent versée en échange d'une activité d'intérêt général a mi-temps). X est opposé au fait de verser une somme d'argent à tous les jeunes sans conditions.",
    "X veut rétablir le bac comme il était avant la réforme du ministre de l’Éducation nationale (= Jean-Michel Blanquer). Cela veut dire notamment remettre en place les filières L, S et ES, et supprimer la prise en compte du contrôle continu dans l'obtention du bac. X souhaite également passer de 9 heures à 15 heures le temps hebdomadaire consacré aux français et aux maths à l'école primaire et augmenter le salaire brut des enseignants de 20 %.",
    "X veut mettre fin aux déserts médicaux (= zones où la population rencontre des difficultés pour accéder à des soins de santé, car il n'y a plus de médecins dans les environs et où les hôpitaux sont loin). X propose de rouvrir un hôpital ou une maternité dans chaque département, mais aussi de doubler le nombre de médecins, d'infirmières scolaires ou encore d'assistante sociale dans tout le pays, d’augmenter de 15 % leur salaire brut et d’accorder des primes spéciales aux personnes qui travaillent dans les hôpitaux. X veut également créer 80 000 postes supplémentaires dans les EHPAD et ouvrir 250 000 places de crèches supplémentaires.",
    "X veut aussi : maintenir le nucléaire à 70 % dans la production d'énergie ; supprimer toutes les éoliennes qui selon X, pourrissent les paysages ; développer fortement les transports en communs propres hybrides ou encore électriques ; lancer un remplacement des 5 millions de véhicules les plus polluants d'ici 10 ans ; ouvrir les musées gratuitement le dimanche aux français … X est contre la légalisation du cannabis et ne souhaite pas non plus interdire ou limiter la chasse."
    ],[
    "X souhaite sortir de l'élevage industriel (= méthode d'élevage qui consiste à exploiter un maximum d'animaux dans des surfaces réduites). Pour sortir de cet élevage industriel, X veut commencer par interdire l'élevage en cage et les élevages d'animaux à fourrure.",
    "X veut sortir du nucléaire d'ici 15 à 20 ans en fermant 10 réacteurs nucléaires d'ici à 2035. Pour cela, X veut notamment miser sur les énergies renouvelables et notamment sur les éoliennes, avec un objectif de 12 000 éoliennes d'ici la fin de son mandat (= contre 9 500 aujourd'hui).",
    "X veut rétablir l’impôt sur la fortune, (= impôts payé par les plus riches, supprimé par Emmanuel Macron). Mais avec une nuance, l’impôt serait modulé en fonction de la richesse mais aussi en fonction de l'impact environnemental, ce qui permettrait de pénaliser en plus ceux qui participent le plus au changement climatique. (= par exemple des personnes ayant des placements dans des entreprises polluantes).",
    "X veut éradiquer la grande pauvreté et pour ça, X veut mettre en place un « revenu citoyen » versé automatiquement. Cette somme d'argent serait variable selon les personnes, l'objectif est de s'assurer que personne en France ne vit avec moins de 920 €/mois. X souhaite aussi augmenter le SMIC (= salaire minimum) de 225 € dès fin 2022 pour atteindre environ 1400 € net/mois (= contre 1269 € actuellement) et X souhaite ensuite que ce salaire minimum passe à 1500 € net /mois d'ici à 2027.",
    "X propose d'augmenter les salaires des enseignants d'une moyenne d'environ 20 % (= actuellement selon les derniers chiffres du site du ministère l’Éducation nationale, le salaire moyen d'un enseignant en France et de 2490 € net/mois, chiffre qui varie énormément en fonction du statut de chaque professeur). X veut également recruter 65 000 enseignants supplémentaires pour baisser le nombre d'élèves dans les classes, qu’X juge actuellement trop élevé. X veut en fait une hausse de 10 % des salaires du personnel soignant et embaucher 100 000 infirmiers.",
    "X veut faire en sorte que les français travaillent moins et pour ça, X envisage la semaine de 4 jours ou encore les 32 h de travail par semaine (= contre les 35h aujourd'hui). Car X veut permettre de « retrouver un équilibre entre vie privée et vie professionnelle ». Cependant, X ne souhaite pas imposer le passage aux 32 h à l'ensemble du pays mais est favorable à une « convention citoyenne » (= des débats et des discussions), pour discuter de ce sujet.",
    "X veut « déverrouiller les institutions », pour ça, X souhaite supprimer le cumul des mandats(= qu'un président puisse être élu deux fois d'affiler). X souhaite au-delà allonger le mandat présidentiel à 7 ans (= au lieu de 5 ans actuellement), X veut également mettre l'assemblée nationale au cœur de la démocratie et recentrer les pouvoirs sur le parlement car selon X le pouvoir est aujourd'hui trop centré autour du président de la République.",
    "X propose un plan pour lutter contre les violences faites aux femmes qui prévoie un investissement d’un milliard d'euros dans la lutte contre les violences sexistes et sexuelles pour je cite « prévenir, détecter et sanctionner les violences sexuelles et sexistes et protéger les femmes exposées». X veut aussi inscrire le droit à l'IVG (= interruption volontaire de grossesse) dans la constitution pour en faire un principe fondamental de la république française. X veut aussi une assemblée nationale paritaire avec une femme comme présidente.",
    "A l'international, X considère la Chine comme « une dictature d'une violence absolue » et souhaite donc que la France soit plus ferme face au gouvernement chinois. X dénonce d'ailleurs régulièrement l'accord d'investissement qui a été signé entre l'UE et la Chine en 2021 mal grès la situation des Ouïghours (= minorité musulmane persécutée en Chine).",
    "X souhaite remplacer l'IGPN (= police des polices) et l’IGGN (= police de la gendarmerie) pour les fusionner en un seul organisme qui serait indépendant du ministère de l'intérieur et rattaché aux défenseur des droits. X reproche à l’IGPN d'être trop complaisante vis-à-vis des policiers notamment dans les cas de violences policières, et pour X la résolution de ce problème passe par davantage d'indépendance.",
    "X veut aussi : abaisser le droit de vote à 16 ans ; supprimer Parcoursup ; créer 60 000 à 100 000 places en première année dans l'enseignement supérieur ; légaliser le cannabis ; reconnaître le burn-out et la dépression comme des maladies professionnelles ; créer 700 000 nouveaux logements sociaux ; … "
    ],[
    "Pour réduire les inégalités, X veut sortir du capitalisme (= système économique qui repose sur la propriété privée des moyens de production et sur l’économie de marché). X veut donc que l'état reprenne le contrôle des secteurs clés de l'économie (= banques, transports, communications, industries pharmaceutiques … ), qui sont aujourd'hui gérés des entreprises privées.",
    "X souhaite que tout le monde en France gagne au moins 1800 € net/mois, selon X, c'est le montant minimal pour pouvoir se loger, se nourrir correctement, s'habiller, cultiver ses passions …  Cela passe par une augmentation du SMIC (= salaire minimum) de 5131€ pour atteindre 1800 € net/mois (= hausse de 42%). Pour ceux qui ne travaillent pas, X souhaite une revalorisation du RSA, du chômage, des retraites, pour atteindre là aussi 1800 € net/mois. X souhaite aussi les jeunes âgés de 16 à 25 ans puissent recevoir une allocation d'autonomie d'un montant égal à ce nouveau SMIC ( = 1800 € net/mois). X veut financer cette hausse des revenus et des allocations «  en prenant plus sur les profits », cela implique de taxer beaucoup plus les plus riches et les entreprises.",
    "X veut diminuer le temps de travail pour « ne pas perdre sa vie à la gagner ». Selon X, cette baisse du temps de travail permettrait à la fois de mieux répartir les emplois au sein de la société mais aussi que chacun puisse profiter davantage de la vie. Pour ça, X veut d'abord baisser le temps travail hebdomadaire en passant à une semaine de 4 jours avec 28 heures de travail par semaine (= contre 35 h sur 5 jours aujourd’hui), et ce sans que les salaires soient diminués. X veut également introduire une sixième semaine de congés payés pour les salariés. Pour diminuer le temps de travail, X veut aussi abaisser l'âge de départ à la retraite de 2 ans pour passer à 60 ans pour réduire le chômage en répartissant mieux le travail au sein de la société.",
    "X veut interdire la réduction du salaire d’un ouvrier en fonction de la production de son entreprise et veut aussi interdire les licenciements en cas de délocalisation par exemple, ceci en obligeant les entreprises qui changent leurs productions à trouver un autre travail dans une autre branche ou dans une autre entreprise pour leurs salariés.",
    "X souhaite détruire l’arme nucléaire française, en effet X souhaite une société démilitarisée (c'est donc une réflexion qui est plus globale et ne concerne pas que la France). X veut mettre fin aux ventes d'armes à des pays étrangers (aujourd'hui, la France est le troisième exportateur mondial d'armes). X veut également que la France cesse toutes ses opérations militaires à l'étranger et qu’elle sorte de toutes les alliances militaires dont elle fait partie.",
    "X veut atteindre 100% d'énergies renouvelables en France en 2050, X souhaite également démanteler et exproprier les groupes pétroliers ou encore les banques qui subventionnent ces extractions de pétrole et de gaz.",
    "X veut rendre les transports en commun totalement gratuit pour tout le monde et les développer pour qu’il y est davantage de lignes.",
    "X veut ouvrir les frontières pour que la France accueille tous les migrants qui désirent venir et souhaite également la régularisation de tous les sans-papiers.",
    "X souhaite porter le délai légal pour avorter à 24 semaines après le début de la grossesse, donc jusqu'à cinq mois et demi (= contre 12 semaines maximum aujourd'hui). X veut également rendre possible la procréation médicalement assistée pour tous les couples.",
    "X veut mettre fin aux « pass vaccinal » et investir massivement dans le système de santé, X affirme vouloir embaucher 200 000 personnels hospitaliers et ouvrir 100 000 lits supplémentaires, en s'attachant à rouvrir des hôpitaux dans les zones rurales. X veut absolument que tous les soins soient remboursés à 100 % pour tout le monde et interdire la possibilité pour les médecins de faire des dépassements d'honoraires (= faire payer plus que la somme remboursée par la sécurité sociale).",
    "X veut aussi : accorder le droit de vote aux étrangers à toutes les élections ; rembourser à 100 % les parcours de transition et de changement d'état civil pour toutes les personnes trans sur simple demande ; réquisitionner tous les logements non occupés pour loger les sans-abri ; … "
    ],[
    "X souhaite ouvrir 20 000 lits d'hôpitaux et recruter 100 000 infirmiers et aides soignants au cours de son mandat, X souhaite aussi mettre fin aux brevets pharmaceutiques sur les médicaments qu'il juge les plus importants, ce qui permettrait de les rendre plus accessibles en facilitant leurs productions (= en ne réservant pas la production au créateur du produit).",
    "X souhaite rétablir l’ISF (= impôt de solidarité sur la fortune), qui a été supprimé en 2010 par E. Macron pour être remplacé par l’IFI (= impôt sur la fortune immobilière). L’ISF permettait de taxer les français les plus riches (= ceux dont le patrimoine dépasse 1,3 millions d'euros). L’IFI actuel fonctionne quasiment pareil, mais il ne prend en compte que le patrimoine immobilier (= appartements, maisons, … ), il concerne donc beaucoup moins de monde.",
    "X souhaite élargir aux jeunes de 18 à 25 ans l'accès au RSA (= revenu de solidarité active, qui est un revenu aux personnes les plus démunies). Aujourd'hui il est réservé au plus de 25 ans et est accessible au moins de 25 ans uniquement s'ils ont des parents isolés ou qu'ils ont occupé un emploi pendant au moins 2 ans. X veut aussi favoriser la gratuité des transports publics pour les jeunes, X propose également que tous les étudiants puissent avoir accès à un prêt de 20 000 € de l'état à taux zéro pour financer leurs études.",
    "X souhaite rétablir un service national universel civils ou militaires (au choix) qui concernerait toutes les filles et garçons de 18 ans et qui durerait 9 mois. Les jeunes seront rémunérées autour de 500 €/mois (qui conterons dans les cotisations de retraite). Il sera possible de passer son permis pendant ce service. Le service militaire étant optionnel, il sera possible de travailler dans d'autres domaines (= comme les hôpitaux ou encore la reconstruction de villas).",
    "X souhaite redonner à l'état « l'initiative dans les secteurs-clés de l'économie », pour cela X souhaite que l'état rachète un certain nombre d'entreprises « sensibles et stratégiques » qui sont aujourd'hui privées (dans les domaines de l'agriculture, l'industrie, les énergies nouvelles, l'automobile ou encore l'aéronautique). Cela concerne notamment EDF, les autoroutes de France et toutes les entreprises liées à la défense nationale.",
    "X porte un intérêt particulier au monde rural et veut s'engager à 3 milliards d'euros d'investissements pour aider la ruralité. X propose aussi de mettre en place un « ticket paysan » qui fonctionnerait comme un ticket-restaurant mais qui permettrait d'acheter et bien plutôt des produits locaux et régionaux pour encourager les habitants à acheter proche de chez eux. X veut aussi revoir la distribution des aides aux agriculteurs (= qui sont aujourd'hui fixés par la « politique agricole commune » à l'échelle européenne), car X veut que les aides économiques aillent en priorité aux paysans « qui respectent leurs terres et leurs bêtes » et pas aux grandes exploitations qui selon lui ne vont pas dans ce sens.",
    "X a assuré que tous les sans-abris en France auront un toit, pour ce faire X souhaite améliorer l'information et la prévention avec le SAMU social et les maraudes et encourager le bénévolat pour travailler sur des solutions pérennes et long terme pour les sans-abris. X proposera des logements sociaux à bas loyers et un accompagnement pour l'accès aux services de santé et les différentes démarches administratives. Pour améliorer les conditions de vie des plus modestes, X veut également revaloriser le salaire minimum à 1400 € net/mois (contre 1269 € net/mois aujourd'hui).",
    "X veut instaurer le référendum d’initiative citoyenne (= RIC) pour entraîner davantage l'engagement des citoyens dans le débat public et leur permettre de peser plus directement dans les institutions et dans les lois votées. (= X souhaite que lorsque 700 000 personnes signent une pétition, un référendum soit organisé sur une question ou une mesure, l’état sera alors obligé de respecter l’issue du référendum). X veut aussi effectuer un référendum sur la durée du mandat présidentiel pour qu'il repasse à 7 ans (= contre 5 ans aujourd'hui), et également que le vote blanc soit reconnu (= comptabilisé dans les pourcentages comme un vote pour un candidat). Si lors d’un second tour aucun des deux candidats n’attend 50 %, X souhaite que de nouvelles élections soient organisées.",
    "X veut sortir la France de l'OTAN (= alliance politique et militaire entre les USA et de nombreux pays européens) et souhaite donner davantage de parole à la population, par exemple, X souhaite que le retrait des forces françaises engagées dans des pays étrangers puisse être décidé par un vote au parlement ou par un référendum. X souhaite enfin renforcer la cyber défense et la recherche spatiale.",
    "X souhaite investir dans les énergies renouvelables et veut développer l'énergie solaire, géothermique et l'énergie de la mer. Cependant, X souhaite que les maires et leurs habitants puissent interdire toutes les constructions d'éoliennes dans leurs alentours. X veut construire de nouvelles centrales nucléaires, car c’est selon lui plus sûr et moins cher. ",
    "X veut aussi : recruter 6 000 gendarmes et policiers ; rétablir le cumul des mandats de maire et de parlementaires (= un député ou un sénateur pourrait désormais en même temps être maire d'une ville, ce qui n'est plus autorisé depuis 2010) ; augmenter le salaire des enseignants en début de carrière (en passant de 1500 à 2400 € net/mois) ; que l'allocation aux adultes handicapés sois indépendante des revenus du conjoint ; mettre en place un suivi psychologique plus important pour les élèves victimes de harcèlement ; … ",
    ],[
    "X souhaite réduire l'immigration à presque zéro pour stopper ce qu'il appelle le « grand remplacement » (= remplacement supposé de la population européenne par une population immigrée). Pour stopper ça, X veut donc réduire le nombre de gens autorisés à entrer en France et souhaite mettre fin au regroupement familial (= possibilité pour les étrangers avec un titre de séjour d'être rejoint par les membres de leur famille). X veut aussi limiter le droit d'asile à quelques dizaines ou centaines de personnes par an et sélectionner avec plus d exigence les étudiants étrangers qui viennent en France en n’accueillant que les meilleurs pour favoriser « le rayonnement de la France ».",
    "X souhaite réduire certains droits des étrangers comme le droit du sol (= possibilité pour un enfant né en France de parents étrangers d’obtenir la nationalité française sous certaines conditions). Concernant les aides financières, X souhaite supprimer toutes les aides sociales non-contributives (= allocations familiales, aides au logement, RSA, minimum vieillesse, … ) aux étrangers qui ne sont pas originaires d'Europe et veut également supprimer l'aide médicale d'état (= qui permet aujourd'hui aux étrangers d'avoir des soins de santé gratuits sous certaines conditions).",
    "X souhaite expulser tous les étrangers qu’il juge « indésirable », concrètement, il s’agit de tous les étrangers sans emploi depuis 6 mois ou encore tous les étrangers arrivés clandestinement. X veut aussi expulser tous les délinquants et criminels étrangers et souhaite retirer la nationalité française à tous les criminels et délinquants multirécidivistes qui ont une double nationalité pour les expulser après déchéance de leur nationalité.",
    "X veut que la justice soit plus ferme pour les mineurs et il propose donc d'abaisser la majorité pénale de 18 à 16 ans (= avec une majorité pénale à 16 ans, un jeune qui à 16 ou 17 ans sera jugé comme un adulte, donc avec des peines plus lourdes qu’aujourd'hui). X supprimera aussi toutes aides financières aux parents de mineurs délinquants.",
    "X souhaite réduire les impôts sur la production et les importations pour faire en sorte que les entreprises paient moins d'impôts au quotidien. X veut aussi supprimer les droits de succession et de donation (= impôt payé lors de la transmission des entreprises familiales), son objectif est d'encourager les français à transmettre leur entreprise à leurs enfants.",
    "X souhaite augmenter le salaire net des travailleurs modestes, pour ça, il compte supprimer la Contribution sociale généralisée pour ceux qui gagnent moins de 2000 € net/mois (aujourd'hui, tout le monde doit payer cet impôt). Cette mesure permettra par exemple à un travailleur qui gagne près de 1269 € net/mois de gagner à peu près 100 € de plus par mois. Pour financer cela, X compte supprimer les aides sociales pour les étrangers (RSA, allocations familiales, allocations logement, … ). X souhaite par ailleurs que les heures supplémentaires rapportent davantage aux salariés en supprimant les impôts et les cotisations sociales sur ces heures supplémentaires. Aussi, pour redonner du pouvoir d'achat, X souhaite mettre en place la prime zéro charge (= la possibilité pour une entreprise de verser une prime sans qu'il n'y ait de cotisations à payer des deux côtés). Cette prime pourra représenter jusqu'à trois mois de salaire et sera versée une fois par an maximum par l'employeur.",
    "X veut mettre fin au collège unique (= le fait que tous les élèves de France est les mêmes enseignements au collège). A la place, X veut réinstaurer des classes de niveau (= des classes avec des bons élèves d'un côté et d'autres classes avec des élèves qui ont un niveau plus faible). Aussi, en primaire, l'apprentissage des langues étrangères sera supprimé pour augmenter les heures de français et de mathématiques et la blouse sera obligatoire à l'école primaire.",
    "X est favorable à une interdiction totale des signes religieux dans l'espace public, à l'exception des « professionnels de la religion », X évoque la laïcité et le devoir de discrétion dans l'espace public pour justifier cette interdiction dans l'espace public du voile par exemple. Plus globalement, X considère que l'islam n'est pas qu'une religion, mais aussi « une nation une loi est une civilisation », qui serait selon lui incompatible avec la République française.",
    "X souhaite renouveler et développer le nucléaire à grande échelle en ouvrant 14 réacteurs EPR en France d'ici 2050 (= un EPR est un réacteur nucléaire présenté par ceux qui le défendent comme capable de produire davantage d'électricité à partir de la même quantité de combustible qu’un réacteur de deuxième génération). X veut également interdire la construction d'éoliennes sur terre et en mer, car selon X, elle nuirait à la santé des gens, elle pourrait détériorer la beauté des paysages et elle produirait une énergie trop faible par rapport au nucléaire qu'il juge davantage fiable.",
    "X est pour l’interdiction de la procréation médicalement assistée (= PMA), dès lors qu'il n'y pas de pères. La PMA permet à un couple qui ne le peut pas d'avoir un enfant grâce à certaines techniques médicales (depuis septembre dernier, la PMA est accessible à toutes les femmes). X veut donc restreindre à la PMA aux seuls couples hétérosexuels et donc l’interdire dans le cas d'un couple de femmes par exemple.",
    "X veut aussi : interdire aux parents de donner un prénom étranger à leurs enfants ; verser 10 000 € à chaque famille qui vit en zone rurale pour toute nouvelle naissance ; supprimer le permis à point ; faire rembourser par les entreprises la moitié des frais de carburant de leurs salariés pour leur trajet domicile travail ; … "
    ],[
    "X souhaite « révolutionner le travail » et résume cela par la formule « travailler tous, travailler moins, travailler mieux ». Pour cela, X veut augmenter le SMIC (= salaire minimum) pour le passer à 1500 € net/mois (contre 1269 € net/mois aujourd'hui). X souhaite également instaurer la semaine de travail de 32 h sans diminution de salaire (contre 35 h aujourd'hui), l'objectif étant de mieux répartir le travail au sein de la population pour éviter les sans-emploi. X veut aussi abaisser l'âge de départ à la retraite à taux plein à 60 ans et souhaite aussi permettre à ceux qui ont un travail pénible de pouvoir partir plus tôt.",
    "X veut réinvestir dans les services publics en augmentant par exemple le budget de l'éducation nationale de 45 % (ce qui représente 25 milliards d'euros supplémentaires) et celui de l'enseignement supérieur de 43 %.  Plus largement, X propose de recruter 500 000 fonctionnaires dont 100 000 emplois dans l'hôpital (= infirmiers, aides soignants, aides à domicile), 100 000 personnes dans les maisons de retraite. X veut aussi créer 90 000 emplois d'enseignants. Le salaire de tous les fonctionnaires (= personnes employées par l'état) serait augmenté pour que les enseignants par exemple ai une augmentation de salaire de 30 %.",
    "X veut créer un revenu étudiant de 850 €/mois minimum, il serait versé à tous les étudiants sans conditions (= sans conditions sur le revenu de leurs parents, … ) pour leur permettre d'être plus autonomes et de mieux vivre pendant leurs études. X veut aussi que l’accès au RSA (= revenu de solidarité active) soit étendu aux 18-25 ans. X veut également que les personnes en alternance soient payées au moins au SMIC, et veut tendre vers le zéro jeunes au chômage. Pour cela X, souhaite que chaque étudiant qui termine ses études ai une offre d'emploi en CDI correspondant à ses compétences. Pour le permettre, X veut que les entreprises de plus de 50 salariés soient obligées de réserver au moins 10 % des nouvelles embauches aux moins de 25 an.",
    "Pour répondre à la question du financement de ses mesures, X veut remettre en place l’ISF (= impôt sur la fortune qui concernait les français ayant un patrimoine d'au moins 1,3 million d'euros et qui a été supprimé par E.Macron pour être remplacé par l'impôt sur la fortune immobilière, un impôt qui ne prend en compte que les biens immobiliers). X propose au-delà de ça de tripler le montant de cet impôt.",
    "X veut que chacun puisse bien manger, pour cela X veut généraliser dans tout le pays le repas à 1 € dans les cantines scolaires, favoriser les produits bio et locaux, défendre une agriculture principalement française à taille humaine, sans pesticides, et qui garantit des prix de base rémunérateurs pour les agriculteurs. Pour cela, X veut interdire l'importation de produits ne respectant pas les normes de production française, afin d'éviter une forme de concurrence déloyale. X veut également augmenter les retraites agricoles pour qu'elle ne soit pas en dessous du SMIC, avec pour objectif un total de 500 000 agriculteurs en France d'ici à 2030 (= contre près de 389 000 actuellement). Cela passe selon lui par la création de postes d'enseignants et formateurs agricole et plus largement par un investissement dans la recherche pour l'agriculture.",
    "X veut miser sur le nucléaire tout en continuant de développer les énergies renouvelables (= éoliennes, énergie solaire, … ). Selon X, il faut miser sur le nucléaire parce que c'est une source d'énergie qui n'émet que très peu de CO2, qui est non intermittente (= ne dépends pas de la météo) et qui permet à la France d'assurer son indépendance pour sa production d'électricité. X veut construire 6 à 8 réacteurs nucléaires nouvelles générations.",
    "En matière de sécurité, X veut créer une police nationale de proximité de 30 000 personnes qui aurait pour objectif de « reconquérir » certains quartiers abandonnés par l'état et de recréer un lien entre la police et la population. X veut créer une infraction spécifique concernant les violences faites contre les policiers et augmenter leurs salaires.",
    "X veut quitter l'OTAN (= organisation militaire de pays d'Europe et d'Amérique du Nord, menée principalement par les USA). En effet, pour X, la France doit se détacher des USA est retrouver davantage d'indépendance sur le plan militaire. X est même favorable à la dissolution de l'OTAN et souhaite que la France crée une nouvelle organisation avec l’Europe et ses états voisins. X veut également mettre fin aux opérations militaires françaises à l'étranger et fermer toutes les bases militaires françaises présentes à l'étranger.",
    "X veut réinvestir dans les zones rurales, pour cela, X souhaite rouvrir les maternités de proximité (en 20 ans, 40 % d'entre elles ont fermé). X souhaite aussi lutter contre ce que les déserts médicaux en faisant en sorte que tout le monde est un établissement de santé à moins de trente minutes de transport de son domicile. X souhaite aussi rouvrir des petites lignes SNCF pour ces territoires éloignés et mettre en place un plan national de rénovation et de construction de logements dans ces petites villes ou alors villages.",
    "X veut supprimer l'élection au suffrage universel du président de la République pour qu’il ne soit plus élu par la population et qu’il n’ai plus qu’un rôle de représentant de la nation. Le pays serait réellement dirigé est gouverné par le Premier ministre et son gouvernement, qui serait lui élu par l’Assemblée nationale, ceci pour éviter que le pouvoir soit concentré sur une seule personne. X souhaite donc que l’Assemblée nationale joue un rôle plus important. X veut aussi supprimer l'article 49:3 de la constitution (= qui permet aujourd'hui au Premier ministre de passer en force une loi, malgré un avis contraire de l'Assemblée nationale), et veut également mettre en place un « droit de pétition », qui permettrait à 500 000 citoyens de pouvoir faire inscrire une proposition de loi à l'ordre du jour du parlement afin qu’il s'en saisisse et puisse discuter et voter sur cette loi.",
    "X veut aussi : supprimer Parcoursup ; rendre gratuits les transports en commun et le permis de conduire pour les moins de 25 ans ; créer 350 000 nouveaux logements CROUS destinés aux étudiants ainsi que 200 000 nouveaux logements sociaux par an ; allouer 1 milliard d'euros à la lutte contre les violences sexuelles et sexistes ; rendre les protections menstruelles totalement gratuite ; inscrire l'avortement comme un droit fondamental dans la constitution ; … "
    ],[
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    ]
]

for (i = 0; i < document.getElementsByClassName("program").length; i++) {
    for (j = 0; j < document.getElementsByClassName("program".concat("_", (i+1).toString())).length; j++) {
        document.getElementsByClassName("program".concat("_", (i+1).toString()))[j].innerHTML = namesList[i][j];
        document.getElementsByClassName("program".concat("_", (i+1).toString()))[j].id = hoverList[i][j];
    }
}
