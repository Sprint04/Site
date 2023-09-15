async function buscarCep() {
    var cep = cep_input.value
    var url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep.length >= 8) {
        fetch(url)
        console.log(
            fetch(url)
        )
        try {
            var resposta = await fetch(url)
            resposta.json()
            console.log(resposta)
            if (resposta.ok) {
                var respostaJson = await resposta.json()
                console.log('DADOS RECEBIDOS', respostaJson)
                rua_input.value = respostaJson.logradouro;
                bairro_input.value = respostaJson.bairro;
                cidade_input.value = respostaJson.localidade;
                estado_input.value = respostaJson.uf;
            }
        } catch (erro) {
            console.log("Erro", erro)
        }

        console.log(
            fetch(url)
        )
        fetch(url).then(
            function (resposta) {
                // funcionamento em json
                console.log('Deu certo', resposta)

                resposta.json()
                    .then(
                        function (respostaJson) {
                            console.log('DADOS RECEBIDOS', respostaJson)
                            rua_input.value = respostaJson.logradouro;
                            bairro_input.value = respostaJson.bairro;
                            cidade_input.value = respostaJson.localidade;
                            estado_input.value = respostaJson.uf;
                        }
                    )
            })
            .catch(
                function (erro) {
                    console.log(`Deu erro`)
                    console.log(erro)
                }
            )
    }
}
