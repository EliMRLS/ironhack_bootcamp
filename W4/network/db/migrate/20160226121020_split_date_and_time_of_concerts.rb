class SplitDateAndTimeOfConcerts < ActiveRecord::Migration
  def change
    change_column :concerts, :date, :date
    add_column :concerts, :time, :string
  end
end
