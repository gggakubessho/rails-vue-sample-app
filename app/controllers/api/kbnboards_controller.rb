class Api::KbnboardsController < ApplicationController
  before_action :authenticate_user!
  def index
    tasks = current_user.tasks.joins(:tasklist).select('tasks.*,tasklists.name as task_list_name')
    @tasks = tasks.group_by { |task| [task[:tasklist_id], task[:task_list_name]] }
  end
end
