import { DataProps } from "./interfaces";

// FUNÇÃO FILTRA POR NOME OU POSIÇÃO OU TELEFONE
export function SearchFilter ( data: DataProps[], search  : string) {
    return data.filter( 
                (data : DataProps) => ( data.name.toUpperCase().includes(search.toUpperCase()) || 
                                        data.position.toUpperCase().includes(search.toUpperCase()) || 
                                        data.tel.includes(search))
                );
}

// FUNÇÃO GERA E FORMATA DATAS
export function DateResolve () {
    //Função que gera data aleatória start = datainicial end = datafinal
    const RandomDate = (DateStart : Date, DateEnd : Date) => new Date( DateStart.getTime() + (Math.random()) * (DateEnd.getTime() - DateStart.getTime()) );
    
    const ResultRandomDate = RandomDate(new Date(2015, 0, 1), new Date(2022, 12, 31));

    const Day = ( "0" + ( ResultRandomDate.getDay() > 0 ? ResultRandomDate.getDate() : ResultRandomDate.getDate() + 1 ) ).slice(-2); // Adiciona +1 caso o dia seja 0
    const Month = ( "0" + ( ResultRandomDate.getMonth() + 1 ) ).slice(-2); // inicia em 0 por isso o +1
    const Year = ResultRandomDate.getFullYear();

    return `${Day}/${Month}/${Year}`;
}

// FUNÇÃO PARA FORMATAR TELEFONE
export function TelResolve (tel : string) {

    const perTwo = Math.floor(tel.length / 2)
    const FormatTel = tel.substring(0, perTwo)+"-"+tel.substring(perTwo, tel.length)

    return `+55 (53) 9 ${FormatTel}`;
}