# 동국대 멋사 ajax 기초 ㄱㄱ

## 기초 세팅
### bash
```bash
rails g controller home index
rails g model comment body
rake db:migrate
```
### config/route.rb
```ruby
    .
  root 'home#index'
  post 'home/new'
    .
```
### app/controllers/application_controller.rb
```ruby
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
end
```
3번째 주석처리
### app/controllers/home_controller.rb
```ruby
class HomeController < ApplicationController
  def index
    @comments = Comment.all
  end
  def new
    Comment.create(body: params[:body])
    redirect_to :back
  end
end
```
### app/views/home/index.html.erb
```html
<form action="/home/new" method="POST">
    <input type="text" name="body" id="body">
    <input type="submit" id="submit" >
</form>
<br>
<% @comments.each do |c| %>
    <%= c.body%>
    <hr>
<% end %>
```

## ajax를 위한 세팅
### app/views/layouts/application.html.erb
```html
    .
  <%= stylesheet_link_tag    'application', media: 'all', 'data-turbolinks-track' => false %>
  <%= javascript_include_tag 'application', 'data-turbolinks-track' => false %>
    .
```
true에서 false로 바꾸기
### app/assets/javascript/application.js
```js
//= require turbolinks 
제거하기
```
turbolinks 제거하기