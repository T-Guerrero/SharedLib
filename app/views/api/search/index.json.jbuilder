json.books @books.each do |book|
    json.id book.id
    json.name book.name
    json.author book.author
    json.borrowed book.borrowed
    json.category_name book.category.name
    json.available book.available
    json.borrowed book.borrowed
    json.inTransition !book.transition.nil?
    json.image_url url_for(book.image)
end

json.categories @categories.each do |category|
    json.id category.id
    json.name category.name
end

json.authors_books @authors_books.each do |book|
    json.id book.id
    json.name book.name
    json.author book.author
    json.borrowed book.borrowed
    json.category_name book.category.name
    json.available book.available
    json.borrowed book.borrowed
    json.inTransition !book.transition.nil?
    json.image_url url_for(book.image)
end
