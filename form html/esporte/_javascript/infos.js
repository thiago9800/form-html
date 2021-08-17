var button1 = document.getElementById("valor");
button1.addEventListener("click", verificar);
/**************************************
                ↑↑ botão ↑↑
 **************************************/
function verificar() {

    var dado_formulario = {
        Name: Nome(),
        Nickname: Apelido(),
        Birth_date: aniversario(),
        Cpf: Cpf(),
        Team_id: Time_do_coração(),
        Sport: checkbox(),
    }
    /**********************************************************
     ↑↑ variável que armazena todos os campos do formulario ↑↑
     *********************************************************/
    if (dado_formulario.Name != false && dado_formulario.Nickname != false && dado_formulario.Birth_date != false && dado_formulario.Cpf != false && dado_formulario.Team_id != false && dado_formulario.Sport != false) {
        /***************************************************************
        ↑↑ esse if verificar se algum campo do formulario nâo foi preenchido ↑↑
         **************************************************************/
        var json = JSON.stringify(dado_formulario);
        console.log(json);
        document.write("<h1>Dados</h1>");//escreve o titulo do json
        document.write(json);//escreve os dados do furmulario no json
        return json;
        /**********************************
        ↑↑ cria e prenche o arquivo json ↑↑
         **********************************/
    }
}
/***********************************************************************
↓↓ funções para verificar se os dados do formulario foram preenchidos ↓↓
 ***********************************************************************/
function Nome() {

    if (document.getElementById("name").value == "") {
        alert("nome esta vazio");
        return (false);
    } else {
        if (document.getElementById('name').value.length >= 10 && document.getElementById('name').value.length <= 80) {
            return (document.getElementById('name').value)
        } else {
            alert("nome muito curto");
            return (false);
        }
    }
}
function Apelido() {
    if (document.getElementById("nickname").value == "") {
        alert("Apelido esta vazio");
        return (false);
    } else {
        if (document.getElementById("nickname").value.length >= 2 && document.getElementById("nickname").value.length <= 20) {
            return (document.getElementById("nickname").value);
        } else {
            alert("nome muito curto");
            return (false);
        }
    }
}
function aniversario() {
    var a = year();
    var m = month();
    var d = day()
    return (a + "/" + m + "/" + d)
}
function day() {
    if (document.getElementById("day").value == "") {
        alert("dia esta vazio");
        return (false);
    } else {
        if (document.getElementById("day").value.length == 2 && document.getElementById("day").value >= 01 && document.getElementById("day").value <= 31) {
            return (document.getElementById("day").value)
        } else {
            alert("dia invalido");
            return (false);
        }
    }
}
function month() {
    if (document.getElementById("month").value == "") {
        alert("mes esta vazio");
        return (false);
    } else {
        if (document.getElementById("month").value.length == 2 && document.getElementById("month").value >= 01 && document.getElementById("month").value <= 12) {
            return (document.getElementById("month").value);
        } else {
            alert("mes invalida");
            return (false);
        }
    }
}
function year() {
    if (document.getElementById("year").value == "") {
        alert("Ano esta vazio");
        return (false);
    } else {
        var data = new Date();
        var agora = data.getFullYear();
        if (document.getElementById("year").value.length == 4 && document.getElementById("year").value >= 1900 && document.getElementById("year").value <= agora) {
            return (document.getElementById("year").value);
        } else {
            alert("ano invalida");
            return (false);
        }
    }
}
function Cpf() {
    if (document.getElementById("cpf").value == "") {
        alert("CPF esta vazio");
        return (false);
    } else {
        var strCPF = TestaCPF(document.getElementById("cpf").value);
        if (strCPF != true) {
            alert("CPF invalido");
            return (false);
        } else {

            var cpf_errado = document.getElementById("cpf").value;
            r = cpf_errado.split("");//transformar uma string em um array separrando cada letra
            var cpf_certo = r[0] + r[1] + r[2] + "." + r[3] + r[4] + r[5] + "." + r[6] + r[7] + r[8] + "-" + r[9] + r[10]//combina o array em uma string 

            return (cpf_certo)
        }
    }
}
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}
function Time_do_coração() {
    if (document.getElementById("team_id").value == "") {
        alert("escolha o seu Time do coração");
    } else {
        return (document.getElementById("team_id").value)
    }
}
function checkbox() {
    var result = [];
    j = 0;
    for (i = 1; i <= 7; i++) {
        if (document.getElementById(i).checked == true) {
            result[j] = i;
            j++;
        }
    }
    if (j == 0) {
        alert("escolha pelo menos um Esportes de interesse")
        return (false)
    }
    return (result)
}



