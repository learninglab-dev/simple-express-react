# simple-express-react

## LOG STEPS

1. `git clone https://github.com/learninglab-dev/simple-express-react.git`
2. `cd simple-express-react`
3. `express --view=ejs`
4. `npm install`
5. change `package.json`, adding `"devstart": "PORT=3001 nodemon ./bin/www"` to scripts.


### create-react-app option

6. `create-react-app client` (assuming you've already typed `npm install -g create-react-app`)
7. add  `"proxy": "http://localhost:3001"` just after scripts in the client's `package.json` file.
8. `yarn add concurrently --dev`
9. add scripts to the main package json with concurrently:
```
"scripts": {
  "start": "node ./bin/www",
  "client": "cd client && yarn start",
  "server": "PORT=3001 nodemon ./bin/www",
  "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
},
```
10. comment out regular index ("/") route? Have index hit react?
11. or make react a different route?
12. add `__basedir` as global? `global.__basedir = __dirname;`
13. serve react page in response to react request?
```

```


### no create-react-app
