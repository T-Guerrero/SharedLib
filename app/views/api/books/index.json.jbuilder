json.all_books @books.each do |book|
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

json.my_books @my_books.each do |book|
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

json.books_from_others @books_from_others.each do |book|
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
