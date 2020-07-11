# SharedLib
- [Projeto](#Projeto)
- [Sobre](#Sobre)
- [Desenvolvimento](#Desenvolvimento)
- [Contribuições](#Contribuições)

## Projeto
Usando Ruby on Rails e React esse projeto foi feito para a disciplina MAC0218 - Técnicas de Programação 2 - com o intuito de implementar e construir um RESTful SaaS utilizando arquitetura MVC.

## Sobre
A SharedLib é uma biblioteca virtual que não possui nenhum livro! Feito para os estudantes da Universidade de São Paulo do campus da capital, ela usa os livros físicos dos próprios usuários e cria uma rede onde os usuários podem emprestar livros entre si!

* Gerencie seus livros, interesses e empréstimos

* Aumente o seu limite de livros que pode pegar emprestado cadastrando os seus livros no sistema

* Pegue um livro emprestado por 10 dias e renove automaticamente caso não exista lista de espera

* Manifeste interesse e fique na lista de espera para pegar um livro emprestado

* Ache facilmente os dados de contato da pessoa que receberá o livro e entre em contato com ela para marcar o encontro

* Confirme o recebimento de um livro após recebê-lo


## Desenvolvimento
### Como executar
Execute:
```bash
#Terminal
 $> bundle install
 $> yarn install
 $> rails db:reset
 #Cheque a sessão "Server" para saber todas as opções de inicialização do servidor
 $> rails s
```
Acesse `http://localhost:3000`
### Outros
Para executar o `dev webpacker server` use:
```bash
#Terminal
$> ./bin/webpack-dev-server
```

Para executar o `Rails Console` use:
```bash
#Terminal
$> rails c
```
### Server
Para executar o `Rails Server` use:
```bash
#Terminal
$> rails server
```
 :exclamation: Usando esse método não será inicializado os cron jobs e as rake tasks automaticamente, se você deseja inicializar, olhe o      próximo tópico
<br>

### Server (com cron jobs)
Para executar o `Rails Server` execute no diretório raiz:
```bash
#Terminal
$> bash ./bin/server
```
E, após fechar o servidor, execute no diretório raiz:
```bash
#Terminal
$> bash ./bin/server-close
```

### Cron jobs
Para definir os cron jobs no seu SO através da gema `whenever` use: 

(**Obs:** Iniciando o server com cron jobs esse passo já é realizado automaticamente)
```bash
#Terminal
$> whenever --update-crontab
# Outra opção
$> whenever -i
```

Comandos para manipular a crontab:
```bash
#Terminal
#Lista o arquivo cron definido no SO
$> crontab -l

#Remove o arquivo cron definido no SO
$> crontab -r
```

## Contribuições

* Carolina Senra Marques  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" width="28px" height="28px"> [(CarolSMarques)](https://github.com/CarolSMarques)
* Thiago Guerrero  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" width="28px" height="28px"> [(T-Guerrero)](https://github.com/T-Guerrero)
* Thiago Jose Benitez Pena  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" width="28px" height="28px"> [(tjbpena)](https://github.com/tjbpena)
