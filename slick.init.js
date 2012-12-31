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

		var i,
			duration,
			startNum,
			startDate,
			finishDate;
		for (i = 0; i < 5; i += 1) {
			duration = randomNumber(31);
			startNum = randomNumber(1111111111111);
			startDate =  new Date(startNum);
			console.log('startDate:', startDate);
			data[i] = {
				title: 'Task ' + i,
				duration: duration + ' days',
				percentComplete: randomNumber(100),
				// start: new Date(startNum).toJSON().substring(0,10),
				start: toJSONsubstring(startDate, 0, 10),
				// finish: new Date(startDate.setDate(startDate.getDate() + duration)).toJSON().substring(0,10),
				finish: toJSONsubstring(startDate.setDate(startDate.getDate() + duration), 0, 10),
				effortDriven: (i % randomNumber(5) === 0)
			};
		};

		var slickgrid = new Slick.Grid('#grid', data, columns, options);
		console.log(slickgrid.getOptions());


		/**
		* Returns date to JSON format substring
		*
		* @method toJSONsubstring
		* @param {Object} Date
		* @param {Number} start substring
		* @param {Number} end substring
		* @return {String} JSON format substring
		*/
		function toJSONsubstring(date, start, end) {
			var d = date,
				s = start,
				e = end,
				substring;

			substring = d.toJSON().substring(s,e);

			return substring;
		};

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