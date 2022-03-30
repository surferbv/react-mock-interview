import React, { Component, useEffect } from 'react';
import { useState } from 'react';

// Should be called in useEffect
const GetAllLaunches = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    fetch("https://api.spacexdata.com/v3/capsules/past")
    .then( res => res.json())
    .then( (result)=>{
        console.log('SUCCESS fetching getAllLaunches:');
        console.log(result);
        setIsLoaded(true);
        setItems(result);
    },
    (error) =>{
        console.log('ERROR fetching getAllLaunches:');
        console.log(error);
        setIsLoaded(true);
        setError(error);
    })
}

export default GetAllLaunches;