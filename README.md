# SharedLib
- [Sobre](#Sobre)
- [Desenvolvimento](#Desenvolvimento)
- [Contribuições](#Contribuições)
## Sobre
`In progress...`

## Desenvolvimento

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
