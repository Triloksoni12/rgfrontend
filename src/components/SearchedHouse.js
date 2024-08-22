import { useLocation } from "react-router-dom";
import House from "./House";
import { useState,useEffect } from "react";
import axios from "axios";
const SearchedHouse = (props) => {
    let [searchedHouse,setSearchedHouse] =  useState({});
    let loca = useLocation();
    console.log(loca.state.id);
    useEffect( () =>{
        let fetchData = async () => {
            let result = await axios.get(`http://localhost:4000/houses/houseById/${loca.state._id}`);
          // console.log(housesData);
          setSearchedHouse(result.data)
        }
        fetchData();
      },[]);
   
    console.log(searchedHouse);




    if(!searchedHouse) {
        return "...loading data";
    }
    return (
        <>
        <h1> Searched House</h1>
        <House houseInfo = {searchedHouse}/>
        </>
       
     );
}
 
export default SearchedHouse;
