class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    render json: resource
  end

  def respond_to_on_destroy
    head :ok
  end

  def after_sign_in_path_for(resource)
    api_kbnboards_path(resource)
  end
end
