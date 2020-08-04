import React from 'react';
import { Typography } from '@material-ui/core';

export default function Title(props){

    return(

    <Typography variant="h2">{props.title || "test title "}</Typography>

    );

}