import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import  { Box, Container, Button} from '@mui/material';
import { getOrganizationInformation } from '../../Services/OrganizationInformation';

const OrganizationData = () => {

    const { push } = useHistory()
    const [orgData,setOrgData]= useState({})

    const loadData = async () => {
        const {data} = await getOrganizationInformation()
        setOrgData(data)
    }
    useEffect(()=>{
        loadData()
    },[])

    const redirectToEditionForm = () => push("/backoffice/organization/edit")

    return (
        <Container >
            <img alt="organizationPhoto" src={orgData.logo} />
            <h3>{orgData.name}</h3>
            <Box sx={{display: 'flex'}}>
                {orgData.short_description}
            </Box>
            <Button variant="contained" onClick={redirectToEditionForm}>Editar</Button>
        </Container>
    );
}

export default OrganizationData;
