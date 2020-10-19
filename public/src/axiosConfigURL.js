import data from './projectData.json';

const axiosConfigURL = () => {
    return process.env.PUBLIC_URL.startsWith('https://') ?
    getLiveURL() : getDevURL();
}

const getDevURL = () => {
    return `http://localhost:${data.port}/${data.name}/${data.location}`
}

const getLiveURL = () => {
    return `https://${data.location}-${data.name}.cloudfunctions.net/`;
}

export default axiosConfigURL;