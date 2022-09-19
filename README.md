
Projeto feito no módulo de Back-End na instituição de ensino Trybe. 
# [Car-Shop]()

Uma API TypeScript com CRUD seguindo os princípios de Programação Orientada a Objetos (POO) e um banco de dados MongoDB para gerenciar uma concessionária de veículos. 
## Apresentação

No que se refere a modelagem de software, percebe-se a vastidão de metodologias dispostas para organização e segurança disponíveis para serem implementadas nas aplicações. Baseado nessa premissa e na forma de escrever os testes unitários que essa API foi construída. Nela, vamos ter uma construção baseada em POO e SOLID utilizando arquitetura MSC (Camada de Modelo, Camada de Serviço e Camada de Controladores). 
Além de tudo isso, tornou-se constante uma reflexão na construção do projeto: "será que essa é a melhor forma de fazer isso?", e foi através desse questionamento que fixei de maneira mais coesa e elaborada todos os conhecimentos necessários para aderência do código à especificação, organização do código e, por fim, a qualidade e a cobertura de 100% dos testes unitários.
## Objetivos

- Exercitar o conhecimento dos pilares da Programação Orientada a Objetos: Herança (capacidade de herdar), Abstração (não exibição do funcionamento interno da classe), Encapsulamento (disponibiliza apenas os atributos e métodos que são necessários) e Polimorfismo (métodos implementados, mas que não necessariamente se comportam da mesma forma);
- Treinar a utilização de Composição;
- Realizar a criação e utilização de Interfaces;
- Implementar, em TypeScript: Classes, Instâncias, Atributos, Métodos e Objetos;
- Aplicar os conhecimentos de MongoDB, Typescript, SOLID e POO para criar uma API com CRUD.


## Como usar
- [Fork o repositório](https://github.com/Italo9/Project-car-shop);

- Clone para sua máquina local: `git clone https://github.com/`YourAccount`/Project-car-shop.git`;
### Com docker:
- Rode os serviços node e db com o comando `docker-compose up -d`
- `docker exec -it car_shop bash`
- Instale as dependências: `npm install`;
### Sem docker:
- Instale as dependências: `npm install`;
