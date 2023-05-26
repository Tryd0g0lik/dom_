class Main {
	table: HTMLTableElement | undefined;
	constructor() {
		this.table;
		this.create_html_table();
	}

	create_html_table() {

		let bodyTable: string = ``;
		bodyTable = `
		<tr id="row1">
			<td></td><td></td><td></td><td></td>
		</tr>
		<tr id="row3">
			<td></td><td></td><td></td><td></td>
		</tr>
		<tr id="row3">
			<td></td><td></td><td></td><td></td>
		</tr>
		<tr id="row4">
			<td></td><td></td><td></td><td></td>
		</tr>
		`;

		this.table = document.createElement('table');
		this.table.innerHTML = bodyTable;

	}

}

export class GamingInGobline extends Main {
	constructor() {
		super();
	}


	create_html_goblin() {
		return "<img src='../pic/goblin.png'> "
	}


	insert_tableInto_page() {
		let div: Element | null;
		// Тип "HTMLTableRowElement | undefined
		let t: string;
		console.log(this.table)
		let i: number = 0;
		let table: HTMLTableElement | undefined = this.table;

		// table.getElementsByTagName("tr")
		// for i in
		// 	t = this.table?.rows;
		// console.log(t);
		console.log("привет мир" + "---------------")
		div = document.body.lastElementChild
		// div?.append(String(t));
	}

	start_game() {
		let max: undefined | number;
		this.insert_tableInto_page();

		let td;
		// let td: undefined | [string];
		td = document.getElementById("row1")
			?.getElementsByTagName("td")
	}
}

let block;
block = new GamingInGobline();
block.start_game()
