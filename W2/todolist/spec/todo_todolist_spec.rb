require 'rspec'
require 'pry'
require './todo_todolist.rb'
require './todo_task.rb'

RSpec.describe "Unit Tests for TodoList" do

  before :each do
    @todo = Todolist.new('Josh')
  end

  it "add tasks to the tasks list" do
    @todo.add_task(Task.new("walk the dog"))
    @todo.add_task(Task.new("buy groceries"))
    expect(@todo.tasks.size).to eq(2)
  end

  it "remove task by its ID" do
    @todo.add_task(Task.new("walk the dog"))
    @todo.add_task(Task.new("buy groceries"))
    @todo.add_task(Task.new("do homework"))
    expect(@todo.tasks.size).to eq(3)
    
    @todo.delete_task!(4)
    expect(@todo.find_by_id(4)).to eq(nil)
  end

  it "fetch task by its ID" do
    task1 = Task.new("tidy up my room")
    @todo.add_task(task1)
    expect(@todo.find_by_id(task1.id).content).to eq("tidy up my room")
    expect(@todo.find_by_id(task1.id).id).to eq(task1.id)
  end

  it "return and array with tasks sorted by time created ascending" do
    @todo.add_task(Task.new("walk the dog"))
    @todo.add_task(Task.new("buy groceries"))
    sorted_tasks = @todo.sort_by_created("ASC")
    expect(sorted_tasks[0].created_at < sorted_tasks[1].created_at).to eq(true)
  end

  it "return array with tasks sorted by time created descending" do
    @todo.add_task(Task.new("walk the dog"))
    @todo.add_task(Task.new("buy groceries"))
    sorted_tasks = @todo.sort_by_created("DESC")
    expect(sorted_tasks[1].created_at < sorted_tasks[0].created_at).to eq(true)
  end

  it "class accepts a user argument" do
    expect(Todolist.new("Eli").user).to eq("Eli")
  end

  it "stores tasks to YAML and get them with load" do 
    user = "Eli"
    yaml_todo = Todolist.new(user)
    yaml_todo.add_task(Task.new('one'))
    yaml_todo.add_task(Task.new('two'))
    yaml_todo.add_task(Task.new('three'))
    yaml_todo.save
    yaml_todo.load_tasks
    expect(yaml_todo.tasks['Eli'].length).to eq(3)
  end
end
