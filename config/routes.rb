Rails.application.routes.draw do
	devise_for :users, skip: [:registrations]
	devise_scope :user do
		get '/users/cancel' => 'users/registrations#cancel', as: :cancel_user_registration
		get '/users/sign_up' => 'users/registrations#new', as: :new_user_registration
		patch '/users' => 'users/registrations#update', as: :user_registration
		put '/users' => 'users/registrations#update'
		delete '/users' => 'users/registrations#destroy'
		post '/users' => 'users/registrations#create'
	end
	
	resources :categories, except: [:index, :show]

	namespace :api , defaults: { format: :json } do
		resources :books, only: [:index, :show, :destroy, :create, :update] do
			resources :borrowings, path: "borrowings/:type", :only => [:destroy]
			resources :interests, :only => [:create, :destroy]
		end
		resources :transitions, only: [:index, :create, :destroy]
		resources :users, only: [:index, :show]
		resources :dashboard, only: [:index]
		resources :dashboard, path: "/dashboard/:type", only: [:update]
        resources :search, only: [:index]
        resources :categories, only: [:index, :show]
	end


	# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
	root "welcome#index"
	get "*path", to: "welcome#index", :constraints => lambda{|req| req.path !~ /\.(png|jpg|js|css|json)$/ }
end
