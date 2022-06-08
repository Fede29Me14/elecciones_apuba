module.exports = function cuantasUrnas (opcion){

    let numSede = {
        0  : ['Clínicas', 1, 16, ['Urna', 'Lista_Verde', 'Lista_Roja', 'Blanco', 'Nulo']],
        1  : ['Roffo', 16, 18, ['Urna', 'Lista_04', 'Lista_05', 'Lista_06']],
        2  : ['Lanari', 18, 20, ['Urna', 'Lista_12', 'Lista_09', 'Blanco', 'Nulo']],
        3  : ['Vaccarezza', 20, 21, ['Urna', 'Lista_01', 'Lista_02']],
        4  : ['Agronomía', 21, 22, ['Urna', 'Lista_Verde', 'Lista_Roja', 'Blanco', 'Nulo']],
        5  : ['Arquitectura', 22, 24],
        6  : ['Pellegrini', 24, 25],
        7  : ['CBC', 25, 35],
        8  : ['Deportes', 35, 36],
        9  : ['Derecho', 36, 38],
        10  : ['Económicas', 38, 40],
        11  : ['Exactas', 40, 42],
        12  : ['Farmacia', 42, 43],
        13  : ['Ingeniería', 43, 46],
        14  : ['Medicina', 46, 50],
        15  : ['Nacional Buenos Aires', 50, 51],
        16  : ['Dosuba', 51, 53],
        17  : ['Odontología', 53, 55],
        18  : ['Psicología', 55, 57],
        19  : ['Rojas', 57, 58],
        20  : ['Rectorado', 58, 67],
        21  : ['Sociales', 67, 69],
        22  : ['Veterinaria', 69, 71],
        23  : ['Filosofía', 71, 75],
        24  : ['Jubilados', 75, 77],
    };
    return numSede[opcion] || 'not found';
}

