class CommentsController < ApplicationController

  def create
    @concert = Concert.find_by(id: params[:concert_id])
    @comment = @concert.comments.new(comment_params)

    @comment.save
    redirect_to concert_path(@concert)
  end

private

  def comment_params
  params.require(:comment).permit(:opinion, :name)
  end

end



   