Rails.application.routes.draw do
  root 'welcome#index'
  get 'index', to: 'welcome#index'
  # TODO
  # get 'welcome/party'

  get 'speakers/index'
  get 'speakers/2018', to: 'speakers#speakers_2018'
  get 'speakers/2017', to: 'speakers#speakers_2017'

  get '/2018', to: redirect('https://williamcaput.wixsite.com/norcon')
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
