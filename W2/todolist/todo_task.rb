require 'yaml/store'

class Task
  attr_reader :content, :id, :complete, :created_at, :updated_at
  @@current_id = 1

  def initialize(content)
    @content = content
    @id = @@current_id
    @@current_id += 1
    @complete = false
    @created_at = Time.now
    @updated_at = nil
  end

  def complete?
    @complete
  end

  def complete!
    @complete = true
  end

  def make_incomplete!
    @complete = false
  end

  def update_content!(content)
    @updated_at = Time.now.strftime("%d/%b/%Y:%H:%M:%S")
    @content = content
  end

end
