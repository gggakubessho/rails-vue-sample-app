Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions:      'users/sessions'
  }
  root to: 'home#index'

  namespace :api, { format: 'json' } do
    resources :kbnboards, only: [:index]
  end
end
