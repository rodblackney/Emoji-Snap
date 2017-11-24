
console.log('Hey There!');

// define players

var user = {
	name: 'user',
	roundsWon: 0,
	currentEmoji: undefined,
};

var pc = {
	name: 'pc',
	roundsWon: 0,
	currentEmoji: undefined,
};

// define our emojis
var emojis = ['😵','🤢','🌏','🔥','🍔','🎮'];
var joker = '🤡';

// define state
var currentRound = 0;

var startNextRound = function () {
	currentRound ++;

	// set players emojis
	pc.currentEmoji = 'getRandomEmoji()';
	user.currentEmoji = 'getRandomEmoji()';

	console.log('emojis',pc.currentEmoji,'vs',user.currentEmoji)
};

var getRandomEmoji = function () {
	var randomNumber = Math.round(Math.random() * emojis.length-1);
	var randomEmoji = emojis[randomNumber];

	return randomEmoji;
};

// check for undefined emojis
if (pc.currentEmoji == undefined || user.currentEmoji == undefined) {
	return false;
}

var snap = function (pcCalledSnap) {
	// compare between two emojis
	// if its a joker then snap is true
	// if snap then the user/pc get's +1 roundsWon
	// if the user gets it wrong then pc get +1 roundsWon
	// notify of what just happened - console/ui/html


var snap = pc.currentEmoji == user.currentEmoji;

// check
	if (pc.currentEmoji == joker || user.currentEmoji == joker) {
		snap == true;
	}

console.group('Snap Called by: '+(pcCalledSnap ? 'PC' : 'User'));

	// pc pcCalledSnap
	if (pcCalledSnap) {
		if (snap) {
				pc.roundsWon ++;
				console.log('pc won the round');
		} else {
			user.roundsWon ++;
			console.log('pc lost the round');
		}

		// use called
		} else {
			if (snap) {
				user.roundsWon ++;
				console.log('user won the round');
			} else {
				pc.roundsWon ++;
				console.log('user lost the round');
			}
		}

		pc.currentEmoji = undefined;
		user.currentEmoji = undefined;

		if (user.roundsWon == 3) {
				console.log('user won the game')
				console.log('game over')
		} else if (pc.roundsWon == 4) {
				console.log('pc won the game');
		}

		console.log('snap', snap)
		console.groupEnd();
	};


// console.log('emojisArray',emojis);
