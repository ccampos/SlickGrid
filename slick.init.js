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
	enableColumnReorder: false
};

$(function() {
	var data = [];

	var i;
	for (i = 0; i < 50000; i += 1) {
		data[i] = {
			title: 'Task ' + i,
			duration: '5 days',
			percentComplete: Math.round(Math.random() * 100),
			start: '01/01/2012',
			finish: '12/31/2012',
			effortDriven: (i % 5 == 0)
		};
	};

	var slickgrid = new Slick.Grid('#node', data, columns, options);
});