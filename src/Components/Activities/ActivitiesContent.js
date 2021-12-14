import React from 'react'
import ReactHtmlParser from 'react-html-parser';
const ActivitiesContent = ({description}) => {
    return (
        <div>
           {ReactHtmlParser({description})}
        </div>
    )
}
//
export default ActivitiesContent
