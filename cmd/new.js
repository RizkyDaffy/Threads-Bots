const { Client } = require('@threadsjs/threads.js');

(async () => { const client = new Client(); // You can also specify a token: const client = new Client({ token: 'token' }); await client.login('user', 'pass');

await client.posts.create(1, { contents: "I create this thread with javascript " })

await client.users.fetch(25025320).then(user => { console.log(user); }); })();
