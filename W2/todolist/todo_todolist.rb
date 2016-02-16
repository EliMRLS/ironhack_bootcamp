require './todo_task.rb'
require 'yaml/store'
require './manage_data.rb'

class Todolist
  include ManageData
  attr_reader :tasks, :user

  def initialize(user)
    @todo_store = YAML::Store.new("./public/tasks.yml")
    @tasks = []
    @user = user
  end

  def add_task(task)
    @tasks << task
  end

  def delete_task!(del_id)
    @tasks.delete_if {|task| task.id == del_id}
  end

  def find_by_id(search_id)
    @tasks.find { |task| task.id == search_id }
  end

  def sort_by_created(mode)
    if mode == "ASC"
      @tasks.sort do |task1, task2|
        task1.created_at <=> task2.created_at
      end
    elsif mode == "DESC"
      @tasks.sort do |task1, task2|
        task2.created_at <=> task1.created_at
      end
    end
  end

end

#   def save
#     @todo_store.transaction do
#       @tasks = @todo_store[@user] 
#     end
#   end

#   def load_tasks
#     @tasks = YAML.load_file('./public/tasks.yml')
#   end

# end

