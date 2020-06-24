json.my_books @my_books.each do |book|
    json.id book.id
    json.name book.name
    json.author book.author
    json.borrowed book.borrowed
    json.category_name book.category.name
    json.available book.available
    json.borrowed book.borrowed
    json.image_url url_for(book.image)
end

json.my_interests @my_interests.each do |interest|
    json.id interest.id
    json.book do
        json.id interest.book.id
        json.name interest.book.name
        json.author interest.book.author
        json.borrowed interest.book.borrowed
        json.category_name interest.book.category.name
        json.available interest.book.available
        json.borrowed interest.book.borrowed
        json.image_url url_for(interest.book.image)
    end
    json.owner do
        json.id interest.book.user.id
        json.name interest.book.user.name
        json.email interest.book.user.email
        json.phone interest.book.user.phone
    end
end

json.counter do
    json.books do
        json.showing @book_counter[:showing]
        json.total @book_counter[:total]
    end
    json.interests do
        json.showing @interest_counter[:showing]
        json.total @interest_counter[:total]
    end
end
