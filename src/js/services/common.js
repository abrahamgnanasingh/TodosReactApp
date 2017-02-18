import axios from 'axios';

const getDateTime = () => {
	return axios.get('http://date.jsontest.com');
};

export default {
	getDateTime //same as getDateTime: getDateTime
};