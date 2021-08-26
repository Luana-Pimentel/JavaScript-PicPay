function adicionar() {  //definir ações ao clicar em "cadastrar"

    //variável recebe o valor inserido no campo "nome" pelo id do campo
    var nome = document.getElementById('nome').value;  

    //variável recebe o valor inserido no campo "sobrenome" pelo id do campo
    var sobrenome  = document.getElementById('sobrenome').value;  

    //variável recebe o valor inserido no campo "data" pelo id do campo
    var data = document.getElementById('data').value;  

    //variável criada para pegar ano atual, criando uma nova data
    var data_atual = new Date(); 

    //variável recebe a data inserida pelo usuário
    var data_Nascimento = new Date(data);  

    //variável recebe dados da idade
    var situacao = idade;


    var idade = data_atual.getFullYear() - data_Nascimento.getFullYear(); //calculando idade pelo ano


        if(data_atual.getMonth() != data_Nascimento.getMonth() ) //se mês atual for diferente do mês de nascimento
        {
            if(data_atual.getMonth() < data_Nascimento.getMonth() )  //se mês atual for menor que o mês de nascimento (ainda não fez aniversário)
            {
                idade--;
            }
        }
        else {
            if(data_atual.getDate() < data_Nascimento.getDate() ) //se dia atual for menor que o dia de nascimento
            {
                idade--;
            }
        }

        if(idade >= 18)  //se a pessoa tiver 18 anos ou mais
        {
            situacao = "Maior de idade";
        }
        else {
            situacao = "Menor de idade";
        }



    tabela = document.getElementById("tabela"); //criando tabela pelo id


    var linha   = tabela.insertRow(-1);  //cadastrar linha

    //variáveis de cada coluna da tabela

    var coluna1 = linha.insertCell(0);  
    var coluna2 = linha.insertCell(1);
    var coluna3 = linha.insertCell(2);
    var coluna4 = linha.insertCell(3);
    var coluna5 = linha.insertCell(4);


    //dados que aparecerão em cada coluna da tabela
    
    coluna1.innerHTML = "Nome: " + " " + nome;
    coluna2.innerHTML = "Sobrenome: " + " " + sobrenome;
    coluna3.innerHTML = "Data de nascimento: " + " " + data;
    coluna4.innerHTML = "Idade: " + " " + idade;
    coluna5.innerHTML = situacao;
    
}
