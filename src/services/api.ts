import axios from "axios";

/*
## REACT NATIVE NÃO ENTENDE "LOCAL_HOST" ENTÃO UTILIZAMOS O IP LOCAL
##
## DADOS DA CONFIGURAÇÃO NO PACKAGE.JSON - SCRIPTS
##
## "server": "json-server server.json -w --host 192.168.100.7 --port 4444"
## 
## EM LOCAL_IP COLOCAMOS O IP UTILIZADO EM --host E EM PORT A PORTA DISPONIBILIZADA EM --port 4444
##
## EXEMPLO:
## LOCAL_IP = "192.168.100.7"
## PORT = "4444"
*/

const LOCAL_IP = "192.168.100.7";
const PORT = "4444";

export const api = axios.create({
    baseURL: `http://${LOCAL_IP}:${PORT}`
})