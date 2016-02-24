class Link < ActiveRecord::Base

  def self.short
    Array.new(3){[*'a'..'z', *'A'..'Z'].sample}.join
  end



end

