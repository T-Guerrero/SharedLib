Rails.application.routes.draw do
	devise_for :users
	resources :books do
		resources :interests
	end
	resources :categories

    resources :dashboard, only: :index, defaults: {format: :json}

	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	root "home#index"
	get "*path", to: "home#index", :constraints => lambda{|req| req.path !~ /\.(png|jpg|js|css|json)$/ }
end
