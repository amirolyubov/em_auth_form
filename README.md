# auth form для evil martians

## start
`
yarn install && yarn start
`

## data
valid user:pass `test@test.com:Iwannabeyourdog1` or `@test:Iwannabeyourdog1` 
valid token `1234`

## security
in Auth wrapper i'd wrote a fake request to get a Csrf token, and put it in hidden input in every form

## tasks
### pages
* [x] sign in 
* [x] sign up 
* [x] forgot password 
* [x] change password 
* [x] 404 
### features
* [x] base components 
* [x] error handling 
* [x] animations 
* [x] keybinds 
* [x] input names for autocomplete 
* [x] request states
* [x] security request design
* [x] fake requests 
* [x] responsive design 
* [x] user validation with regexp 
* [x] token validation 
* [x] username/email for user 
* [x] tooltips 
* [x] protected routes
* [x] show/hide password
* [ ] helper with data to test this app
* [x] headers
### nice to do
* [ ] add another errors from backend, such as 500
* [ ] add signin/signup with google, fb and others
* [ ] more friendful texts
* [x] less contrast ui colors
