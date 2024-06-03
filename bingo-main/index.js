function criartTabela(){
    //criando elementos principais
    const tabela = document.createElement("table");
    const thead  = document.createElement("thead");
    const tbody = document.createElement("tbody");

    //criando cabeçalho
    const tr_nome = document.createElement("tr");
    const td_nome = document.createElement("td");
    td_nome.innerHTML= nome;
    td_nome.colSpan = 5;

    const th_B = document.createElement("th");
    th_B.innerHTML = "B";
    const th_I = document.createElement("th");
    th_I.innerHTML = "I";
    const th_N = document.createElement("th");
    th_N.innerHTML = "N";
    const th_G = document.createElement("th");
    th_G.innerHTML = "G"
    const th_O = document.createElement("th");
    th_O.innerHTML = "O";



}