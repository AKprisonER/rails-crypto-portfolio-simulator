Rails.application.routes.draw do
  # Homepage
  root 'home#index'
  get 'home/about'
  get :lookup, controller: :home
  post '/lookup' => 'home#lookup'
  resources :searches

  # Signup. The first renders a form, the second receives the form and create a user in the database.
  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  # these routes are for showing users a login form and log in / out.
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'

  # Gmail signup/login
  get "/auth/:provider/callback" => "sessions#create_from_omniauth"
  get 'auth/failure', to: redirect('/')
  get 'login', to: redirect('/auth/google_oauth2'), as: 'login_google'

  #Portfolio and Movements
  resources :portfolios do
    resources :cryptos 
    resources :movements
  end
  resources :cryptos
  post 'portfolios/:id/cryptos/new' => 'cryptos#create'

end
