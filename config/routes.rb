Rails.application.routes.draw do
	devise_for :users, controllers: { registrations: 'users/registrations' }
	resources :books, except: [:show] do
		resources :borrowings, :only => [:destroy], defaults: {format: :json}
		resources :interests, :only => [:create, :destroy], defaults: {format: :json}
	end
	resources :books, only: [:show], defaults: {format: :json}
	resources :transitions, only: [:index, :create, :destroy], defaults: {format: :json}
	resources :categories

	resources :users, only: [:index], defaults: {format: :json}
    resources :dashboard, only: [:index], defaults: {format: :json}

	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	root "home#index"
	get "*path", to: "home#index", :constraints => lambda{|req| req.path !~ /\.(png|jpg|js|css|json)$/ }
end
