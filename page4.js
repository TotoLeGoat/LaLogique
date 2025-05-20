const popupData = {
    langage: {
        titre: "Langage & Communication",
        texte: "Le langage est le fondement de la culture humaine. Il permet de transmettre des idées, des émotions et des savoirs. Les premières formes de langage remontent à plus de 50 000 ans. Aujourd'hui, plus de 7000 langues sont parlées dans le monde.",
        img: "img/12.jpg",
        legend: "Peintures rupestres (Grotte Chauvet, France) : premiers récits visuels."
    },
    art: {
        titre: "Art & Symboles",
        texte: "L'art est un langage universel. Des grottes ornées de Lascaux aux sculptures modernes, il reflète la créativité, la spiritualité et l'identité des sociétés humaines.",
        img: "img/13.jpg",
        legend: "Peinture de la grotte de Lascaux : l'une des plus anciennes œuvres d'art connues."
    },
    techniques: {
        titre: "Techniques & Inventions",
        texte: "L'évolution technique a permis à l'Homme de maîtriser son environnement. De la taille du silex à l'informatique, chaque invention a marqué une étape majeure dans l'histoire humaine.",
        img: "img/14.jpg",
        legend: "Outils en pierre taillée : premiers outils de l'humanité."
    },
    societes: {
        titre: "Sociétés & Civilisations",
        texte: "Les sociétés humaines se sont structurées autour de lois, de religions, de traditions et de cultures. Les civilisations antiques, comme l'Égypte ou la Grèce, ont laissé un héritage immense.",
        img: "img/15.jpg",
        legend: "L'Acropole d'Athènes : symbole de la civilisation grecque."
    },
    echanges: {
        titre: "Échanges & Mondialisation",
        texte: "Les échanges entre peuples (commerce, voyages, internet) ont permis la diffusion des idées, des technologies et des cultures, rapprochant l'humanité.",
        img: "img/16.jpg",
        legend: "La route de la soie : un réseau d'échanges reliant l'Orient et l'Occident."
    }
};

window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.museum-artifact').forEach(el => {
        el.addEventListener('click', function() {
            const key = this.getAttribute('data-popup');
            const data = popupData[key];
            if (!data) return;
            document.getElementById('popupInner').innerHTML = `
                <h2>${data.titre}</h2>
                <img src="${data.img}" alt="${data.titre}">
                <p>${data.texte}</p>
                <p style="font-size:0.98em;color:#888;margin-top:8px;">${data.legend}</p>
            `;
            document.getElementById('popupBg').style.display = 'flex';
            setTimeout(() => {
                document.getElementById('popupContent').style.animation = 'fadeInUp 0.6s';
            }, 10);
        });
    });

    document.getElementById('closePopupBtn').onclick = function() {
        document.getElementById('popupBg').style.display = 'none';
    };

    document.getElementById('popupBg').onclick = function(e) {
        if (e.target === this) document.getElementById('popupBg').style.display = 'none';
    };
});