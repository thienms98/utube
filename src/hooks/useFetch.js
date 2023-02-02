import { useState } from 'react';
import { options } from '../utilities/apiOpts';

function useFetch(url, callback) {
  // const [result, setResult] = useState();

  fetch(url, options)
    .then((res) => res.json())
    .then((res) => callback(res))
    .catch((err) => console.log(err));

  // return result;
}

export default useFetch;
