Rails.application.routes.draw do
  get 'pages/contact', to: 'pages#contact', as: :contact
  root to: 'pages#about'
end
