# App

GymPass style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [] Deve ser possível obter o perfil de um usuário logado;
- [] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [] Deve ser possível o usuário obter seu histórico de check-ins;
- [] Deve ser possível o usuário buscar academias próximas;
- [] Deve ser possível o usuário buscar academias pelo nome;
- [] Deve ser possível o usuário realizar check-in em uma academia;
- [] Deve ser possível validar o check-in de usuário;
- [] Deve ser possível cadastrar uma academia;

## RNs (Regra de negócio)

- [x] o usuário não deve poder se cadastrar com um e-mail duplicado;
- [] o usuário não pode fazer 2 check-ins no mesmo dia;
- [] o usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [] o check-in só pode ser validado até 20 minutos após criado;
- [] o check-in só pode ser validado por administradores;
- [] a academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam esta persistidos em um banco PostgreSQL;
- [] Todas lista de dados precisam estar paginadas com 20 itens por paginas;
- [] O usuário deve ser identificado por JWT (Json web Token);

# api-solid
