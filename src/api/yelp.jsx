import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer S7WuPYoy_wtBsTmO3In0cnl_dBKJNYirZWiURIxcIZfsKy9bcdTgVtjYbnkm9BQfuoGSVdFtUTNfpubn74zVZ7FIyPXyskbemNRLZxnSYnt4LKaYrmnJryaf2CzBX3Yx'
    }
});

