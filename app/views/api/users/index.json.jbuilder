json.user do
    if (!@user.photo.blank?)
        json.photo_url url_for(@user.photo)
    end
    json.name @user.name
end