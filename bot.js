const { Client } = require('@threadsjs/threads.js');

(async () => {
  const client = new Client();
  // You can also specify a token: const client = new Client({ token: 'token' });
  await client.login('username', 'password');

  //this are autolike based on post IDs (it can cause 2 post can have same IDs even tho it is not the same  post)
  await client.posts.like("DANn-97tu0V", 56898984341).then(user => {
    console.log(user);
  });
  
})();
