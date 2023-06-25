# App

GymPass style app.

## RFs (Requisitos funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível o usuário obter seu histórico de check-ins;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário buscar academias próximas;
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regra de negócio)

- [x] o usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] o usuário não pode fazer 2 check-ins no mesmo dia;
- [x] o usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] o check-in só pode ser validado até 20 minutos após criado;
- [] o check-in só pode ser validado por administradores;
- [] a academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam esta persistidos em um banco PostgreSQL;
- [x] Todas lista de dados precisam estar paginadas com 20 itens por paginas;
- [] O usuário deve ser identificado por JWT (Json web Token);

# api-solid
