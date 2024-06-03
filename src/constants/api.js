let BASE_URL = '';
if (process.env.NODE_ENV === 'production') {
   BASE_URL = 'https://rcwrites.com/omdb';
}else{
    BASE_URL = 'http://localhost:4000';
}

export {BASE_URL};