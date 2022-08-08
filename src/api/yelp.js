import axios from "axios";
import env from "./../../env.js"
export default axios.create({
    //root url that we will make a request to
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `${env.YELP_TOKEN}`
    }
});

console.log(env.YELP_TOKEN)