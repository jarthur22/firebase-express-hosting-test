import data from './projectData.json';

const axiosConfigURL = () => {
    console.log(process.env);
    return `${process.env.NODE_ENV}` === 'production' ?
    getLiveURL() : getDevURL();
}

const getDevURL = () => {
    return `http://localhost:${data.port}/${data.name}/${data.location}`
}

const getLiveURL = () => {
    return `https://${data.location}-${data.name}.cloudfunctions.net/`;
}

export default axiosConfigURL;