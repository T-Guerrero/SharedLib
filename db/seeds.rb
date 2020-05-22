# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

tmp_dir = Rails.root.join("tmp")

############################## USUÁRIOS ##############################

pena = User.create(name: 'Thiago Pena', email: 'tjbpena@gmail.com', phone: '(11) 97982-9433', password: "123456", password_confirmation: "123456")
guerrero = User.create(name: 'Thiago Guerrero', email: 'guerrero@gmail.com', phone: '(11) 22222-2222', password: "123456", password_confirmation: "123456")
carol = User.create(name: 'Carol', email: 'carol@gmail.com', phone: '(11) 11111-1111', password: "123456", password_confirmation: "123456")
joao = User.create(name: 'João', email: 'joao@usp.br', phone: '(11) 99999-9999', password: "123456", password_confirmation: "123456")
pedro = User.create(name: 'Pedro', email: 'pedro@usp.br', phone: '(11) 88888-8888', password: "123456", password_confirmation: "123456")

############################## CATEGORIAS ##############################

matematica = Category.create(name: 'Matemática')
fisica = Category.create(name: 'Física')
computacao = Category.create(name: 'Computação')
engenharia = Category.create(name: 'Engenharia')
direito = Category.create(name: 'Direito')
medicina = Category.create(name: 'Medicina')
biologia = Category.create(name: 'Biologia')
quimica = Category.create(name: 'Química')

############################## LIVROS ##############################

# Pena
pena_guidorizziV1 = Book.create(
    name: 'Um Curso De Cálculo Vol. 1',
    author: 'Guidorizzi, Hamilton Luiz',
    edition: '5ª Ed. 2011',
    category: matematica,
    user: pena
)
pena_guidorizziV1.image.attach(io: File.open("#{tmp_dir}/seed_files/guidorizziV1.jpg"), filename: "guidorizziV1.jpg")

pena_franca = Book.create(
    name: 'Mecânica Geral',
    author: 'Franca, Luis Novaes Ferreira',
    edition: '3ª Ed. 2012',
    category: engenharia,
    user: pena
)
pena_franca.image.attach(io: File.open("#{tmp_dir}/seed_files/franca.jpg"), filename: "franca.jpg")

# Guerrero
guerrero_algorithms = Book.create(
    name: 'Algorithms',
    author: 'Sedgewick, Robert - Wayne, Kevin',
    edition: '4ª Ed. 2011',
    category: computacao,
    user: guerrero
)
guerrero_algorithms.image.attach(io: File.open("#{tmp_dir}/seed_files/sedgewick.jpg"), filename: "sedgewick.jpg")

# Guerrero
carol_apostolV2 = Book.create(
    name: 'Calculo Vol. 2',
    author: 'Apostol, Tom M.',
    edition: '2ª Ed. 2018',
    category: matematica,
    user: carol
)
carol_apostolV2.image.attach(io: File.open("#{tmp_dir}/seed_files/apostolV2.jpg"), filename: "apostolV2.jpg")

############################## EMPRÉSTIMOS ##############################



############################## INTERESSES ##############################
