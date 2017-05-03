# tasteFight
Personal project for Enspiral Dev Academy Wellington. Pit your discerning taste against the metataste of the Internet!  

# v4 : state management, client-side routing, backend and auth!
Objectives of this version :
- [x] Learn how to use Vuex, the leading state management library for Vue.js.
- [x] Learn how to implement client side routing with vue-router (v2).
- [ ] Learn how to implement authentication in Vue.js
- [ ] Link to an Express + MongoDB backend

# use it on Heroku

https://tastefight.herokuapp.com/

Bugs to be resolved :

- [ ] Dynamic routing broken if not accessed through the proper user flow (directly accessing https://tastefight.herokuapp.com/movie/1366 gets a 404, searching for *Rocky* and clicking on it int the search result list doesn't)
- [ ] Spinners are ntot spinning! Static image instead of animation


# install it locally
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`** by running `node -v` and `npm -v` in a terminal.

Clone the repo in `tasteFight` directory and install dependencies :
```
git clone https://github.com/mathieu-anderson/tasteFight_v4/ tasteFight
```

Start local dev server on port 8080 :
```
npm run dev
```
