Rails.application.routes.draw do
  get 'main/bob_test'

  resources :recipes

  # Defines the root path route ("/")
  # root "articles#index"
end
