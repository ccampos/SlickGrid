var grid;
var columns = [
	{
		id: 'title', name: 'Title', field: 'title'
	},
	{
		id: 'duration', name: 'Duration', field: 'duration'
	},
	{
		id: 'genre', name: 'Genre', field: 'genre'
	}
];

var options = {
	enableCellNavigation: true,
	enableColumnReorder: false
};

var data = [
	{
		title: 'Hello',
		duration: '5 minutes'
	},
	{
		title: 'World',
		duration: '10 minutes'
	}
];

var slickgrid = new Slick.Grid('#node', data, columns, options);