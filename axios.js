const axios = require('axios');

// Make a GET request

axios.get('https://jsonplaceholder.typicode.com/posts')

  .then(response => {

    console.log(response.data);

  })

  .catch(error => {

    console.error(error);

  });

// Make a POST request with data

axios.post('https://jsonplaceholder.typicode.com/posts', {

    title: 'foo',

    body: 'bar',

    userId: 1

  })

  .then(response => {

    console.log(response.data);

  })

  .catch(error => {

    console.error(error);

  });

