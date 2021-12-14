import { Container, Grid, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomCard from '../Card/CustomCard'
import { setCKEditorText } from "../../Components/common/ckEditor/setCKEditorText";

const CardsSection = ({title, button, getInformation, slices, clickeable}) => {
    const [cardsInfo, setCardsInfo] = useState([]);
    useEffect(() => {
        getInformation().then(res => {
            if(slices){
                setCardsInfo(res.slice(-slices));
            }else{
                setCardsInfo(res)
            }
        })
    },[])
    return (
        <Container sx={{display:'flex', flexDirection:'column', alignItems:'center', my:1,mb:7,mt:9}}>
            <Typography variant="h4">{title}</Typography>
            <Grid container sx={{m:3}}>
                {cardsInfo && cardsInfo.map(card => (
                    <Grid xs={4} >
                        <CustomCard title={card.name} img={card.image} route={clickeable && `${clickeable.to}/${card.id}`}
                            description={(card.content && setCKEditorText(card, "content")) || card.description && setCKEditorText(card, "description")}
                            lines={card.description && 3}/>
                    </Grid>
                ))}
            </Grid>
            {button && <Button component={Link} to={button.to} variant="outlined">{button.text}</Button>}
        </Container>
    )
}


export default CardsSection;
