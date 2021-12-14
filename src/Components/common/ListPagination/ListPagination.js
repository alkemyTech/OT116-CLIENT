import {useState, useEffect} from "react";
import { Container, IconButton } from "@mui/material";
import {ArrowLeft} from '@mui/icons-material';
import {ArrowRight} from '@mui/icons-material';
const cards = 9;

const ListPagination = ({items, showItemsListComponent}) => {
    const [currentItems, setCurrentItems]=useState(null);
    const [currentPag, setCurrentPag]= useState(0);

   useEffect(()=>{
        if(items.length>1)setCurrentItems([...items].splice(0,cards))
    },[items])

    function setItemsPage(items,index,page){
        setCurrentItems([...items].splice(index,cards))
        setCurrentPag(page);
    };

    const next=()=>{
        const totalOfItems= items.length;
        const next= currentPag + 1;
        const index= next * cards;
        if(index> totalOfItems) return;
        setItemsPage(items,index,next);
    };

    const prev=()=>{
        const prev= currentPag - 1;
        if(prev < 0) return;
        const index= prev * cards;
        setItemsPage(items,index,prev);
    };

return (
        <div className='paginacion'>
            <div className='paginacion_activities'>
                {showItemsListComponent(currentItems)}
            </div>
          <Container sx={{display:'flex', justifyContent:'center', gap:'10px'}}>
                <IconButton size="small" sx={{border:'1px solid #29527b'}} onClick={()=>prev()}><ArrowLeft fontSize="large"/></IconButton>
                <IconButton size="small" sx={{border:'1px solid #29527b'}} onClick={()=>next()}><ArrowRight fontSize="large"/></IconButton>
          </Container>
        </div>
    )
};

export default ListPagination;
