$(function() {
	var grid;
	var columns = [
		{
			id: 'title', name: 'Title', field: 'title'
		},
		{
			id: 'duration', name: 'Duration', field: 'duration'
		},
		{
			id: '%', name: '% Complete', field: 'percentComplete'
		},
		{
			id: 'start', name: 'Start', field: 'start'
		},
		{
			id: 'finish', name: 'Finish', field: 'finish'
		},
		{
			id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven'
		}
	];

	var options = {
		enableCellNavigation: true,
		enableColumnReorder: true,
		fullWidthRows: true
	};

	$(function() {
		var data = [];

		var i;
		var startDate;
		for (i = 0; i < 50000; i += 1) {
			data[i] = {
				title: 'Task ' + i,
				duration: randomNumber(31) + ' days',
				percentComplete: randomNumber(100),
				start: new Date(startDate = randomNumber(1111111111111)).toJSON().substring(0,10),
				finish: new Date(startDate + randomNumber(111111111111)).toJSON().substring(0,10),
				effortDriven: (i % 5 == 0)
			};
		};

		var slickgrid = new Slick.Grid('#grid', data, columns, options);
		console.log(slickgrid.getOptions());

		/**
		* Generates a random number
		*
		* @method randomNumber
		* @param {Number} range
		* @return {Number} Returns random number
		*/
		function randomNumber(upperLimit) {
			var uL,
				randomNumber;

			uL = upperLimit;
			randomNumber = Math.round(Math.random() * uL);

			return randomNumber; 
		};
	});
});