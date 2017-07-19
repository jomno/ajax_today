class HomeController < ApplicationController
  def index
    @comments = Comment.all
  end
  def new
    Comment.create(body: params[:body])
    redirect_to :back
  end
end
