# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

assets_dir = Rails.root.join("app/assets")

case Rails.env
when "production"
    ############################## CATEGORIAS ##############################
   Category.create(name: 'Exatas')
   Category.create(name: 'Humanas')
   Category.create(name: 'Biológicas')
   Category.create(name: 'Outros')
   
when "development"
   ############################## USUÁRIOS ##############################
   
   pena = User.create(name: 'Thiago Pena', email: 'tjbpena@gmail.com', phone: '(11) 97982-9433', password: "123456", password_confirmation: "123456", max_borrowings: 4, nusp: 6847829)
   guerrero = User.create(name: 'Thiago Guerrero', email: 'guerrero@gmail.com', phone: '(11) 22222-2222', password: "123456", password_confirmation: "123456", max_borrowings: 2, nusp: 11275297)
   carol = User.create(name: 'Carol', email: 'carol@gmail.com', phone: '(11) 11111-1111', password: "123456", password_confirmation: "123456", max_borrowings: 2, nusp: 1073701)
   joao = User.create(name: 'João', email: 'joao@usp.br', phone: '(11) 99999-9999', password: "123456", password_confirmation: "123456", nusp: 1234567)
   pedro = User.create(name: 'Pedro', email: 'pedro@usp.br', phone: '(11) 88888-8888', password: "123456", password_confirmation: "123456", nusp: 7654321)
   
   ############################## CATEGORIAS ##############################
   
   matematica = Category.create(name: 'Matemática')
   fisica = Category.create(name: 'Física')
   computacao = Category.create(name: 'Computação')
   engenharia = Category.create(name: 'Engenharia')
   direito = Category.create(name: 'Direito')
   medicina = Category.create(name: 'Medicina')
   biologia = Category.create(name: 'Biologia')
   quimica = Category.create(name: 'Química')
   variados = Category.create(name: 'Variados')
   
   ############################## LIVROS ##############################
   
   # Pena
   pena_guidorizzi1 = Book.new(
       name: 'Um Curso De Cálculo Vol. 1',
       author: 'Guidorizzi, Hamilton Luiz',
       edition: '5ª Ed.',
       year: 2011,
       category: matematica,
       user: pena
   )
   pena_guidorizzi1.image.attach(io: File.open("#{assets_dir}/seeds_images/guidorizziV1.jpg"), filename: "guidorizziV1.jpg")
   pena_guidorizzi1.save
   
   pena_franca = Book.new(
       name: 'Mecânica Geral',
       author: 'Franca, Luis Novaes Ferreira',
       edition: '3ª Ed.',
       year: 2012,
       category: engenharia,
       user: pena
   )
   pena_franca.image.attach(io: File.open("#{assets_dir}/seeds_images/franca.jpg"), filename: "franca.jpg")
   pena_franca.save
   
   pena_feynman = Book.new(
       name: "Surely You're Joking, Mr. Feynman: Adventures of a Curious Character",
       author: 'Richard Phillips Feynman',
       edition: '1ª Ed.',
       year: 1997,
       category: variados,
       user: pena
   )
   pena_feynman.image.attach(io: File.open("#{assets_dir}/seeds_images/jokingFeynman.jpg"), filename: "jokingFeynman.jpg")
   pena_feynman.save
   
   pena_clanguage = Book.new(
       name: 'The C Programming Language',
       author: 'Kernighan, Brian W. - Ritchie, Dennis M.',
       edition: '2ª Ed.',
       year: 1988,
       category: computacao,
       user: pena
   )
   pena_clanguage.image.attach(io: File.open("#{assets_dir}/seeds_images/clanguage.jpg"), filename: "clanguage.jpg")
   pena_clanguage.save
   
   # Guerrero
   guerrero_algorithms = Book.new(
       name: 'Algorithms',
       author: 'Sedgewick, Robert - Wayne, Kevin',
       edition: '4ª Ed.',
       year: 2011,
       category: computacao,
       user: guerrero
   )
   guerrero_algorithms.image.attach(io: File.open("#{assets_dir}/seeds_images/sedgewick.jpg"), filename: "sedgewick.jpg")
   guerrero_algorithms.save
   
   guerrero_iwoz = Book.new(
       name: 'Iwoz - a Verdadeira História da Apple Segundo Seu Cofundador',
       author: 'Wozniak, Steve - Smith, Gina ',
       edition: '1ª Ed.',
       year: 2010,
       category: variados,
       user: guerrero
   )
   guerrero_iwoz.image.attach(io: File.open("#{assets_dir}/seeds_images/iwoz.jpg"), filename: "iwoz.jpg")
   guerrero_iwoz.save
   
   # Carol
   carol_apostol2 = Book.new(
       name: 'Calculo Vol. 2',
       author: 'Apostol, Tom M.',
       edition: '2ª Ed.',
       year: 2018,
       category: matematica,
       user: carol
   )
   carol_apostol2.image.attach(io: File.open("#{assets_dir}/seeds_images/apostolV2.jpg"), filename: "apostolV2.jpg")
   carol_apostol2.save
   
   carol_olivrodoscodigos = Book.new(
       name: 'O Livro dos Codigos',
       author: 'Singh, Simon ',
       edition: '1ª Ed.',
       year: 2002,
       category: computacao,
       user: carol
   )
   carol_olivrodoscodigos.image.attach(io: File.open("#{assets_dir}/seeds_images/olivrodoscodigos.jpg"), filename: "olivrodoscodigos.jpg")
   carol_olivrodoscodigos.save
   
   
   ############################## INTERESSES ##############################
   
   # # Pena
   # pena.interests << Interest.new(book: guerrero_algorithms)
   # pena.interests << Interest.new(book: carol_apostol2)
   # pena.interests << Interest.new(book: guerrero_iwoz)
   
   # # Guerrero
   # guerrero.interests << Interest.new(book: pena_guidorizzi1)
   # guerrero.interests << Interest.new(book: carol_apostol2)
   
   # # Carol
   # carol.interests << Interest.new(book: pena_franca)
   # carol.interests << Interest.new(book: guerrero_algorithms)
   
   
   ############################## EMPRÉSTIMOS ##############################
end
