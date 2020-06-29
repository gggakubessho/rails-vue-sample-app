class Api::KbnboardsController < ApplicationController
  before_action :authenticate_user!
  def index
    @tasklists = current_user.tasklists.includes(:tasks)
  end
end
