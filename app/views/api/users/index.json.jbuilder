json.user do
    json.id @user.id
    if (!@user.photo.blank?)
        json.photo_url url_for(@user.photo)
    end
    json.name @user.name
    json.email @user.email
    json.phone @user.phone
    json.nusp @user.nusp
end