# Distinctiveness and Complexity:
Well the closest thing we did to a messaging app in the course was the email project but this project is supposed to act like a live chatting app, so I believe it's distinct enough, And I've really struggled to make this chatting feature, and I know it isn't as complex as it could've been but it was either this or Django channels and I have no idea how that works and it seems to complicated. so I settled with that, I hope it's complex enough.

## web_project:
It has the typical django boilerplate stuff

## fproject:
It's the app file and inside are:

### views.py:
I imported a lot of the same stuff from past projects and index was empty at the start so I'll get back to it later,
I did the login/logout/register stuff also from past projects,

#### explore route:
 send context for users who are not in the friends list,

#### send_request route:
 makes an object for the friend_request model and if they want to remove it it just deletes it, and redirects back to the explore route

#### notifications route:
 renders a page that shows incoming friend requests where you can accept them (you can also accept them in the explore page)

#### friends route:
 renders a page that shows your added friends and two options to start chat or to remove friend,

#### chat route:
Now the main part of the app, this is the part I most struggled with, I first started trying to learn how to use Django Channels but that was too complicated so I decide to go with a workaround, I have a model for messages so the route takes the name of the other user and then It gets all of the messages sent from and to the requesting user then combines them and orders them, that is how I got the messages to show up but the actually hard part was making it show the messages without refreshing

### send_message route:
 just makes an object for the message model,

#### json_chat route:
 I decided to make a route that has the messages data that javascript can fetch from, so I added a serialize function to the message model I replicated from the email project,

#### index route:
It makes a list and takes the latest message from all chats and lists the users you chatted with before,

### models.py:
It has the classic User model, friend_request model for storing friend requests, a message model for storing messages, And I know this kind of defeats the purpose of the chat app because the chat is VERY unsecure hence why I titled it "Extremly Unsecure Messenger",

## static:
It has:

### fproject.js:
here it has the function that fetches the messages data from json_chat route and makes the element for the chat html and appends them,

### styles.css:
it has some random css,

### images:
has the logo.

## templates:
it has:

### layout.html:
Has basic layout for the page with some logic for the navbar,

### index.html:
It lists friends you chatted with before,

### explore.html:
It lists register users that are not in your friends list with send friend request button,

### friends.html:
It lists users in your friends list with buttons to start chat or remove friends,

### notifications.html:
It lists incoming friend requests where you can accept them,

### chat.html:
Now the css for this page is all taken from elsewhere as credited, It has two hidden divs for javascript to be able to get the other user and access json_chat, and at the bottom of the page there is the script tag it just gets the name of the other user and calls newloadchat function with it as the parameter and the trick I used to make it seem like it is a live chat is by making the function be called every 2 seconds, so every 2 second the chat bubbles update and it seems like it's live,
the thing wasn't able to do is making sending messages also not reload but so when you send it has to reload the page.

## tests.py:
It has some tests for some model functions and for some pages.

# How to run:
This web app is supposed to work with multiple users but because it's local you should use an incognito tab to sign into multiple users at the same time and then send a friend request from a user, accept it on the other, then open the chat for both of them and when you send a message it should appear on the other tab in 2 seconds at most, and on the index page you can see users you chatted with before and beneath it the last message sent from either you or the other user.

### note: 
I'm not good with designing stuff that why it looks really simplestic sorry.