require 'rspec'
require './todo_task.rb'

RSpec.describe "Unit Tests for Tasks" do
 
  before :each do
    @task = Task.new("buy milk")
  end

  it "returns false by default when a task is created" do
    expect(@task.complete?).to be false
  end

  it "changes the 'completed' attribute to true" do
    expect(@task.complete!).to be true
  end

  it "changes the 'completed' attribute to false" do
    expect(@task.make_incomplete!).to be false
  end

  it "updates the task's text" do
    expect(@task.update_content!("buy chocolate")).to eq("buy chocolate")
  end

  it "add the task's updated date" do
    @task.update_content!("buy chocolate")
    expect(@task.updated_at).to eq(Time.now.strftime("%d/%b/%Y:%H:%M:%S"))
  end

end

