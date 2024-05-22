/** @format */

const ModelMeme = require('../models/ModelMeme');

class ControllerMemes {
  #memes = [
    {
      id: 1,
      title: 'Meme 1',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGZmNXF6eWF2OHk0MW82bGhja3N0Y3owOW92eWo4b3VtMzczZGpleiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EEqHpYcj0bjRSNkvaD/giphy.gif',
    },
    {
      id: 2,
      title: 'Meme 2',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2wxaWZkaXNiZ3I5N2t5YWppcTVlMHdtY3Ruam03NDcyYmQ5d2o1MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v30YlTgNw1L2jVTdps/giphy.gif',
    },
    {
      id: 3,
      title: 'Meme 3',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTVidHY5MWgzcmlhd256Z252azdkNndmMmNsbXZnYnQxam9tZndvayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f3kHbfbOdzcvRUsrGt/giphy.gif',
    },
    {
      id: 4,
      title: 'Meme 4',
      url: 'https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif?cid=790b76113rcs0xcjk4ntikwwdkfw167k5krjii75ba0gk6ar&ep=v1_gifs_trending&rid=giphy.gif&ct=g',
    },
    {
      id: 5,
      title: 'Meme 5',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjM4bnFpYmhxMXg5Y2FoZG03aWkxZXgwOHNncjRiaGw4OHJsNmk5bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LqxcbUg4udre4OY8g7/giphy.gif',
    },
    {
      id: 6,
      title: 'Meme 6',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjM4bnFpYmhxMXg5Y2FoZG03aWkxZXgwOHNncjRiaGw4OHJsNmk5bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/uxv6t1fIOojDy/giphy.gif',
    },
    {
      id: 7,
      title: 'Meme 7',
      url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjh6c2JuaXViOHVwY2M4OGg3b2c1cXk2OGFnbmp4ejZhdmxrZ2puZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8vIFoKU8s4m4CBqCao/giphy.gif',
    },
    {
      id: 8,
      title: 'Meme 8',
      url: 'https://media.giphy.com/media/BY8ORoRpnJDXeBNwxg/giphy.gif?cid=790b7611e75s85cuu0v6g8zfil4imiuegozwc5amq2omgh0e&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    },
    {
      id: 9,
      title: 'Meme 9',
      url: 'https://media.giphy.com/media/hyyV7pnbE0FqLNBAzs/giphy.gif?cid=ecf05e471c2s3s3duxdnokpmh6xpzm2uake9ibvbdsgte6tv&ep=v1_gifs_search&rid=giphy.gif&ct=g',
    },
  ];

  getRandomMeme() {
    const randomIndex = Math.floor(Math.random() * this.#memes.length);
    return console.log(this.#memes[randomIndex]);
  }

  // create(title, url) {
  //   const meme = new ModelMeme(title, url);
  //   this.#memes.push(meme);
  //   return { id: meme.id, title: meme.title, url: meme.url };
  // }

  // read(id) {
  //   const memeFound = this.#memes.find(function (meme) {
  //     if (meme.id === id) return true;
  //     return false;
  //   });
  //   return memeFound;
  // }

  // update(id, title, url) {
  //   const memeFound = this.#memes.find(function (meme) {
  //     if (meme.id === id) return true;
  //     return false;
  //   });
  //   memeFound.title = title;
  //   memeFound.url = url;
  //   return { id: memeFound.id, title: memeFound.title, url: memeFound.url };
  // }

  // delete(id) {
  //   const memeFound = this.#memes.find(function (meme) {
  //     if (meme.id === id) return true;
  //     return false;
  //   });
  //   const index = this.#memes.indexOf(memeFound);
  //   this.#memes.splice(index, 1);
  // }
}

module.exports = ControllerMemes;
