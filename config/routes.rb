Rails.application.routes.draw do
  root 'welcome#index'
  get 'welcome/index'
  get 'welcome/speakers'
  get 'welcome/location'
  get 'welcome/sponsors'
  get 'welcome/about'
  get 'welcome/party'
  get '/2018', to: redirect('https://williamcaput.wixsite.com/norcon')
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
