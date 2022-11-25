import { DataProps } from "./interfaces";

export function searchFilter ( data: DataProps[], search  : string) {
	return data.filter(
		(data : DataProps) => ( data.name.toUpperCase().includes(search.toUpperCase()) ||
                                data.position.toUpperCase().includes(search.toUpperCase()) ||
                                data.tel.includes(search))
	);
}
export function dateResolve () {
	const randomDate = (dateStart : Date, dateEnd : Date) => new Date(dateStart.getTime() + (Math.random()) * (dateEnd.getTime() - dateStart.getTime()));
	const resultRandomDate = randomDate(new Date(2015, 0, 1), new Date(2022, 12, 31));
	const day = ( "0" + ( resultRandomDate.getDay() > 0 ? resultRandomDate.getDate() : resultRandomDate.getDate() + 1 ) ).slice(-2);
	const month = ( "0" + ( resultRandomDate.getMonth() + 1 ) ).slice(-2);
	const year = resultRandomDate.getFullYear();

	return `${day}/${month}/${year}`;
}
export function telResolve (tel : string) {
	const ddi = tel.substring(0, 2);
	const ddd = tel.substring(2, 4);
	const nonoDigito = tel.substring(4, 5);
	const partOne = tel.substring(5, (tel.length-4));
	const partTwo = tel.substring((tel.length-4), tel.length);

	return `+${ddi} (${ddd}) ${nonoDigito} ${partOne} - ${partTwo}`;
}