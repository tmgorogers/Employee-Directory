import React, { useContext } from "react";
import DataAreaContext from "../utils/DataAreaContext";

const Body = () => {
    //<div style= {{ width: "100%", height: "600px", backgroundColor: "blue", color: "white", textAlign: "center", fontSize: "20px", lineHeight: "600px"}} >Here is our Body, {props.user}</div>
    const context = useContext(DataAreaContext);

    function formatDate(date) {
        const dataArray = date.split(" - ");
        const year = dateArray[0];
        const month = dateArray[1];
        const dayArray = dateArray[2].split("T");
        const day = dayArray[0];
        const formatDate = [month, day, year].join(" - ");
        return formatDate;
    }

    return (
        <tbody
    )
}

export default Body;