Rails.application.routes.draw do

	#devise_for :users, skip: :registrations
	resources :books do
		resources :borrowings
		resources :interests, :only => [:create, :destroy]
	end
	resources :categories

    resources :dashboard, only: :index, defaults: {format: :json}

    devise_for :users, controllers: { registrations: 'users/registrations' }

	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	root "home#index"
	get "*path", to: "home#index", :constraints => lambda{|req| req.path !~ /\.(png|jpg|js|css|json)$/ }
end
