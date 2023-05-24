class Main {
	constructor() {

	}

	get_html_table() {

		let table = [];
		let bodyTable: string = ``;
		bodyTable = `
		<tr id="row1">
			<td></td><td></td><td></td>
		</tr>
		<tr id="row3">
			<td></td><td></td><td></td>
		</tr>
		<tr id="row3">
			<td></td><td></td><td></td>
		</tr>
		`;

		table = document.createElement('table');
		table.innerHTML = bodyTable;
		return table;
	}
}
