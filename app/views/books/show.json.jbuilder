json.book do
    json.id @book.id
    json.image_url url_for(@book.image)
    json.name @book.name
    json.author @book.author
    json.edition @book.edition
    json.year @book.year
    json.category @book.category.name
    json.owner @book.user.name
    json.borrowed @book.borrowed
    json.available @book.available
    json.inTransition !@book.transition.nil?
    if (!@book.transition.nil?)
        json.transition do
            json.userId @book.transition.newUser.id
        end
    end
    if (@book.borrowed)
        json.borrowing do
            json.id @book.borrowing.id
            json.userId @book.borrowing.user.id
            json.userName @book.borrowing.user.name
            json.deadline @book.borrowing.deadline
        end
    end
    json.interestsCount @book.interests.size
    json.hasInterest !@book.interests.where(user_id: current_user.id).first.nil?
    if (!@book.interests.where(user_id: current_user.id).first.nil?)
        json.interestId @book.interests.where(user_id: current_user.id).first.id
    end
end

json.users do
    json.currentUser current_user.id
    json.owner @book.user.id
end
