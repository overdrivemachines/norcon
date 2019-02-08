# == Route Map
#
#                    Prefix Verb URI Pattern                                                                              Controller#Action
#                      root GET  /                                                                                        welcome#index
#                     index GET  /index(.:format)                                                                         welcome#index
#                  speakers GET  /speakers(.:format)                                                                      speakers#index
#            speakers_index GET  /speakers/index(.:format)                                                                speakers#index
#             speakers_2018 GET  /speakers/2018(.:format)                                                                 speakers#speakers_2018
#             speakers_2017 GET  /speakers/2017(.:format)                                                                 speakers#speakers_2017
#                           GET  /2018(.:format)                                                                          redirect(301, https://williamcaput.wixsite.com/norcon)
#        rails_service_blob GET  /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET  /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
#        rails_disk_service GET  /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT  /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
#      rails_direct_uploads POST /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

Rails.application.routes.draw do
  root 'welcome#index'
  get 'index', to: 'welcome#index'
  # TODO
  # get 'welcome/party'

  get 'speakers', to: 'speakers#index'
  get 'speakers/index'
  get 'speakers/2018', to: 'speakers#speakers_2018'
  get 'speakers/2017', to: 'speakers#speakers_2017'

  get '/2018', to: redirect('https://williamcaput.wixsite.com/norcon')
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
