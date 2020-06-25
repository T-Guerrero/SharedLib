Rails.application.routes.draw do
	devise_for :users, controllers: { registrations: 'users/registrations' }
	resources :books, except: [:show, :destroy]
	resources :categories

	namespace :api , defaults: { format: :json } do
		resources :books, only: [:show, :destroy] do
			resources :borrowings, :only => [:destroy]
			resources :interests, :only => [:create, :destroy]
		end
		resources :transitions, only: [:index, :create, :destroy]
		resources :users, only: [:index]
		resources :dashboard, only: [:index]
	end


	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	root "home#index"
	get "*path", to: "home#index", :constraints => lambda{|req| req.path !~ /\.(png|jpg|js|css|json)$/ }
end
