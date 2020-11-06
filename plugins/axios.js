import cookie from 'js-cookie';
export default function ({ $axios, redirect, store, app }) {
  $axios.setHeader('Accept', 'application/json')
  $axios.setHeader('Content-Type', 'application/json; charset=utf-8');
  $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
    'post'
  ]);
  $axios.setHeader('Content-Type', 'application/json', [
    'get'
  ]);

  $axios.onRequest(req => {
    let url = req.url;
    url = process.env.baseURL + url;
    req.url = url;

    store.commit('setLoading', true);

    let authToken = cookie.get('auth');

    if(authToken) {
      req.headers.common.Authorization = `Bearer ${authToken.accessToken}`
    }
    console.log(req);
  })

  $axios.onResponse((res) => {
    console.log(1111111, res);
    return res.data
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
