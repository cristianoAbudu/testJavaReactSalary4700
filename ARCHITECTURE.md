# Arquitetura inicial

Backend:
- Controller: entrada HTTP.
- Service: orquestração da operação.
- Repository: acesso ao banco.
- Domain: entidade e contratos de entrada/saída.

Frontend:
- App: composição da tela.
- OrderForm: entrada de dados.
- OrderList: apresentação.
- orderApi: integração REST.

Ao implementar a tarefa, preserve essas responsabilidades sempre que possível.
