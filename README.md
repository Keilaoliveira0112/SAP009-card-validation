# Cartão de Crédito Válido



1. Introdução

O algoritmo de Luhn , também chamado de módulo 10, é um método de soma de verificação, usado para validar números de identificação, como o IMEI de telefones celulares, cartões de crédito etc.

Esse algoritmo é simples. Obtemos o inverso do número a ser verificado (que contém apenas dígitos [0-9]); todos os números que ocupam uma posição par devem ser multiplicados por dois; se esse número for maior ou igual a 10, deve adicionar os dígitos do resultado; o número a verificar será válido se a soma de seus dígitos finais para um múltiplo de 10.


2. Resumo do projeto

Neste projeto, desenvolvi uma página de check-out de uma empresa. Onde o usuário atraves de um formulário faz o cadastro com algumas infomações pessoais e dados do seu cartão de crédito.
Além disso, você foi implementado a funcionalidade para ocultar todos os dígitos de um cartão, exceto os quatro últimos.

Assim que o usuário preenche todas as informações, e essas são válidas uma tela com uma mensagem de validação aparece confirmando que os dados foram válidados com sucesso.

Caso falte o preenchimento de algum campo, os campos não preenchidos ficam vermelhos para que sejam preenchidos e assim seja feito a validação.

3. Considerações gerais

**Quem são os principais usuários do produto?**

São pessoas de que querem fazer algum determinado tipo de comprar por um site especifico e precisa da validação do seu cartão para aprovação da compra.


**Quais são os objetivos desses usuários em relação ao seu produto?**

O objetivo do usuário é validar seu cartão de crédito para o comprar produtos para eventos especificos ou no dia-a-dia.



**Como você acha que o produto que você está criando está resolvendo seus problemas?**

Facilitar a compra com a opção de cartão de crédito e com a validação do cartão de crédito a experiência do usuário não será prejudicada na reta final da compra e assim irá diminuir a quantidade de desistências causadas por erros de digitação;
Aumentar o fluxo de vendas da empresa.

Com base nessas respostas partir do plano em criar uma página que fosse intuitiva para que o usuário soubesse aonde preencher os dados para validação e quais os dados a serem preeenchidos.