window.App = Ember.Application.create({
    rootElement: "#personal-app"
});

// http://guides.emberjs.com/v1.10.0/templates/binding-element-attributes/
Ember.LinkView.reopen({
    attributeBindings: ['data-toggle', 'data-target']
});

var games = [
    { id: "1", name: "Aerial Assault", url: "http://m9band.com", genre: "Arcade", description: "x", year: "2001", technology: "QBasic", platform: "Zune" },
    { id: "2", name: "Planetary Assault", url: "http://m9band.com", genre: "Arcade", description: "x", year: "2006", technology: "VB6", platform: "Windows" },
    { id: "3", name: "Trifecta", url: "http://m9band.com", genre: "Arcade", description: "x", year: "2007", technology: "DirectX / Windows GDI", platform: "Windows" },
    { id: "4", name: "Gears of Geometry Wars", url: "http://m9band.com", genre: "Arcade", description: "x", year: "2008", technology: "C++", platform: "GameCube" },
    { id: "5", name: "Sunshine Slashers", url: "http://m9band.com", genre: "FPS", description: "x", year: "2008", technology: "XNA", platform: "Windows / Xbox 360" },
    { id: "6", name: "Ever-Rotating Machine of the Apocalypse", url: "http://m9band.com", genre: "RPG", description: "x", year: "2008", technology: "XNA", platform: "Zune" },
    { id: "7", name: "Door to Beelzebub's Sepulchral Caverns of Flesh", url: "http://m9band.com", genre: "FPS", description: "x", year: "2009", technology: "XNA", platform: "Windows / Xbox 360" },
    { id: "8", name: "Synchronosis", url: "http://m9band.com", genre: "FPS", description: "x", year: "2010", technology: "XNA", platform: "Windows" },
    { id: "9", name: "Renovatio", url: "http://m9band.com", genre: "RPG", description: "x", year: "2013", technology: "XNA", platform: "Windows" },
    { id: "10", name: "Untitled Platformer", url: "http://m9band.com", genre: "Platformer", description: "x", year: "2014", technology: "Monogame", platform: "Windows" }
];

var songs = [
    { id: "1", name: "At the MAP", url: "http://m9band.com", genre: "pop/rock", description:"", year:"2005"},
    { id: "2", name: "Party Grove City Style", url: "http://m9band.com", genre: "rapcore", description: "", year: "2005" },
    { id: "3", name: "Phoenix Rising", url: "http://m9band.com", genre: "folk", description: "", year: "2006" },
    { id: "4", name: "Aurora Sunrise", url: "http://m9band.com", genre: "ballad", description: "", year: "2006" },
    { id: "5", name: "Confused", url: "http://m9band.com", genre: "acoustic rock", description: "", year: "2006" },
    { id: "6", name: "Last Chance", url: "http://m9band.com", genre: "funky pop", description: "", year: "2008" },
    { id: "7", name: "One of Us", url: "http://m9band.com", genre: "piano-driven pop/rock", description: "", year: "2007" },
    { id: "8", name: "Thanks a Million", url: "http://m9band.com", genre: "piano-driven pop/rock", description: "", year: "2007" },
    { id: "9", name: "Kick Back", url: "http://m9band.com", genre: "rock", description: "", year: "2008" },
    { id: "10", name: "Not in Me", url: "http://m9band.com", genre: "piano rock", description: "", year: "2009" }
];

var personalSongs = [
    { id: "1", name: "At the MAP", url: "http://m9band.com", genre: "pop/rock", description: "", year: "2014" },
];


var quotes = [
    { id: "1", quote: "\"Talk is cheap. Show me the code.\" (Linus Torvalds)" }
];

// http://www.junauza.com/2010/12/top-50-programming-quotes-of-all-time.html