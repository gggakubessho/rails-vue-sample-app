class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  def after_sign_up_path_for(resource)
    root_path(resource)
  end
end
