function generate_table(countries) {
	$('#table tbody').empty();
	for (i in countries){
		let country = countries[i];
		let checked = "<input type = \"checkbox\"";
		checked += country.english ? "checked>":">";
		$('#table').append('<tr><th scope="row">' +(Number(i)+1)+
			'</th><td>'+country.name+
			'</th><td>'+country.area+
			'</th><td>'+checked+'</td></tr>');
	}
}