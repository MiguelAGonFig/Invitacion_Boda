simplyCountdown('#cuenta', {
	year: 2022, 
	month: 4, 
	day: 30, 
	hours: 12, 
	minutes: 59, 
	seconds: 0, 
	words: { 
		days: 'Día',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's'
	},
	plural: true, 
	inline: false, 
	inlineClass: 'simply-countdown-inline', 
	
	enableUtc: true, 
	onEnd: function() {
		document.getElementById('portada').classList.add('oculta');
		return; 
	}, 
	refresh: 1000, 
	sectionClass: 'simply-section', 
	amountClass: 'simply-amount', 
	wordClass: 'simply-word', 
	zeroPad: false,
	countUp: false
});
