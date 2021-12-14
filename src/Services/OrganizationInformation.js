import axios from 'axios';

export const getOrganizationInformation = async () => {
    const {data} = await axios.get('http://ongapi.alkemy.org/api/organization')
    return data
}
