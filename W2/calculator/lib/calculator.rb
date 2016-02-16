class Calculator

  def result(firstnum, secondnum, calculation)
    if calculation == 'add' 
      result = firstnum + secondnum
    elsif calculation == 'subtract' 
      result = firstnum - secondnum
    elsif calculation == 'multiply' 
      result = firstnum * secondnum
    elsif calculation == 'divide' 
      result = firstnum / secondnum
    end
  end

  def symbol(calculation)
     if calculation == 'add' 
      "+"
    elsif calculation == 'subtract' 
      "-"
    elsif calculation == 'multiply' 
      "*"
    elsif calculation == 'divide' 
      "/"
    end
  end

end

#it works even if it's not saving the results.
class Memory
  def save_memory(result)
      IO.write("memory.txt",result)
  end
end
