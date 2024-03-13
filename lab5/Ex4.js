function moviesManager(commands) {
    var movies = [];

    function addMovie(movieName) {
        movies.push({
            name: movieName,
            date: '',
            direct: ''
        });
    }
    function addDirect(movieName, director) {
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].name === movieName) {
                movies[i].direct = director;
                return;
            }
        }
    }
    function addDate(movieName, date) {
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].name === movieName) {
                movies[i].date = date;
                return;
            }
        }
    }
    function print() {
        const validMovies = movies.filter(movie => movie.name && movie.direct && movie.date);
        console.log(validMovies);
    }
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];
        if (command.startsWith('addMovie')) {
            let movieName = command.split(' ').slice(1).join(' ');
            addMovie(movieName);
        } else {
            if (command.includes('directedBy')) {
                let movieName = command.split(' directedBy ')[0];
                let director = command.split('directedBy ')[1];
                addDirect(movieName, director);
            } else if (command.includes('onDate')) {
                let movieName = command.split(' onDate ')[0];
                let date = command.split('onDate ')[1];
                addDate(movieName, date);
            }
        }
    }
    print();
}

moviesManager([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

