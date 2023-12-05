const lista = ["Um", "Dois", "Três"];

export function getLista()
{
    return lista;
}

export function limpaLista()
{
    lista.splice(0);
}

export function adicionaNaLista()
{
    lista.push(novoItem);
}

export function removeDaLista()
{
    lista.splice(posicao, 1);
}
