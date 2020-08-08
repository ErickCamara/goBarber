# Recuperação de Senha

**Requisitos Funcionais**

- O usuario deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**Requisitos não funcionais**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (baclground job);

**Regras de Negocio**

- O link enviado por email para resetar senha deve expirar e 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha o usuário deve informar sua senha antiga;
- Para atualizar sua senha o usuário deve confirmar a nova senha;

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para controle do prestador;


# Agendamento de serviços

**RF**

- O usuárui deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponivel de um prestador;
- O usuário deve poder listar horários disponiveis em um dia especifico de um prestador;
- O usuário deve poder realizar um agendamento

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar exatamente 1hr;
- Os agendamentos devem estar disponiveis entre 8h às 18h (primeiro as 8, último as 17);
- O usuário não pode agendar em um horário já marcado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;
