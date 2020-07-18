json.my_books @my_books.each do |book|
    json.id book.id
    json.name book.name
    json.author book.author
    json.borrowed book.borrowed
    json.category_name book.category.name
    json.available book.available
    json.borrowed book.borrowed
    json.inTrasition !book.transition.nil?
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
        json.inTransition !interest.book.transition.nil?
        json.image_url url_for(interest.book.image)
    end
    json.owner do
        json.id interest.book.user.id
        json.name interest.book.user.name
        json.email interest.book.user.email
        json.phone interest.book.user.phone
    end
end

json.my_transitions @my_transitions.each do |transition|
    json.id transition.id
    json.deadline transition.deadline
    json.book do
        json.id transition.book.id
        json.name transition.book.name
        json.author transition.book.author
        json.borrowed transition.book.borrowed
        json.category_name transition.book.category.name
        json.available transition.book.available
        json.deadline transition.deadline
        json.borrowed transition.book.borrowed
        !transition.nil?
        json.image_url url_for(transition.book.image)
    end
    json.oldUser do
        json.id transition.oldUser.id
        json.name transition.oldUser.name
        json.email transition.oldUser.email
        json.phone transition.oldUser.phone
    end
end

json.transitions_to_deliver @transitions_to_deliver.each do |transition|
    json.id transition.id
    json.deadline transition.deadline
    json.book do
        json.id transition.book.id
        json.name transition.book.name
        json.author transition.book.author
        json.borrowed transition.book.borrowed
        json.category_name transition.book.category.name
        json.available transition.book.available
        json.deadline transition.deadline
        json.borrowed transition.book.borrowed
        json.image_url url_for(transition.book.image)
    end
    json.newUser do
        json.id transition.newUser.id
        json.name transition.newUser.name
        json.email transition.newUser.email
        json.phone transition.newUser.phone
    end
end

json.my_borrowings @my_borrowings.each do |borrowing|
    json.id borrowing.id
    json.deadline borrowing.deadline
    json.book do
        json.id borrowing.book.id
        json.name borrowing.book.name
        json.author borrowing.book.author
        json.borrowed borrowing.book.borrowed
        json.category_name borrowing.book.category.name
        json.available borrowing.book.available
        json.borrowed borrowing.book.borrowed
        json.image_url url_for(borrowing.book.image)
    end
    json.owner do
        json.id borrowing.user.id
        json.name borrowing.user.name
        json.email borrowing.user.email
        json.phone borrowing.user.phone
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
    json.my_transitions do
        json.showing @transitions_counter[:showing]
        json.total @transitions_counter[:total]
    end
    json.transitions_to_deliver do
        json.showing @transitions_to_deliver_counter[:showing]
        json.total @transitions_to_deliver_counter[:total]
    end
    json.my_borrowings do
        json.showing @borrowings_counter[:showing]
        json.total @borrowings_counter[:total]
    end
end

json.currentUser do
    json.maxBorrowings current_user.max_borrowings - (current_user.interests.count + current_user.borrowings.count +
    current_user.myTransitions.count + current_user.transitions.count)
end