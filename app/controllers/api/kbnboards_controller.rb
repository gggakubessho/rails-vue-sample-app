class Api::KbnboardsController < ApplicationController
  before_action :authenticate_user!
  def index
    @tasklists = current_user.tasklists.includes(:tasks)
  end

  def create
    task = current_user.tasks.build(task_params)
    if task.save
      render json: { status: 'SUCCESS', data: task }
    else
      render json: { status: 'ERROR', data: task.errors }
    end
  end

  def update
    task = current_user.tasks.find(params[:id])
    if task.update_attributes(task_params)
      render json: { status: 'SUCCESS', message: 'Update the task', data: task }
    else
      render json: { status: 'ERROR', message: 'Failed to update the task', data: task.errors }
    end
  end

  def move
    task = current_user.tasks.find_by(id: params[:id], tasklist_id: task_move_params[:from])
    if task.update(tasklist_id: task_move_params[:to])
      render json: { status: 'SUCCESS', message: 'moved the task', data: task }
    else
      render json: { status: 'ERROR', message: 'Failed to move the task', data: task.errors }
    end
  end

  def destroy
    task = current_user.tasks.find(params[:id]).destroy
    render json: { status: 'SUCCESS', message: 'Delete the task', data: task }
  end

  private

  def task_params
    params.permit(:tasklist_id, :name, :description)
  end

  def task_move_params
    params.permit(:from, :to)
  end

end
