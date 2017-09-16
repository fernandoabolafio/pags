import request from 'superagent';

const API_CONFIG = {
  base_path: process.env.NODE_ENV === 'development' ?
  'http://localhost:4000/' : 'https://warm-earth-92561.herokuapp.com/',
  header: {
    'Content-Type': 'application/json'
  }
};

const get = (endpoint) => {
  const { base_path, header } = API_CONFIG;
  return new Promise((resolve, reject) => {
    request.get(base_path + endpoint)
    .set(header)
    .end((err, res) => {
      if (res) {
        console.log(res);
        resolve(res.body.data);
      }
      if (err) {
        reject(err);
      }
    });
  });
}

export const getPosts = () => {
  return get('posts');
}
