import axios from "axios";

export default axios.create({
    //root url that we will make a request to
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer MgHwdjhAKcQBdcxuJF5ak9ReVPGSpEnHYVZxUdCpoX1JOww0PJun8KUlhT-JzMz73AQC548fdDQyWynG-kGXmMzYxkwYetqol4Ycrb29HBtFIDNY6bAoOmWiC8TrYnYx'
    }
});
