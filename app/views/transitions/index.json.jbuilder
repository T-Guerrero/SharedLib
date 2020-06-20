json.transitions @transitions.each do |transition|
    json.id transition.id
    json.image_url url_for(transition.book.image)
    json.book transition.book
    json.oldUser transition.oldUser
    json.category transition.book.category.name
    json.deadline transition.deadline
end