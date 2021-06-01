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
        <tbody>
            {context.developerState.filteredUsers[0] !== undefined &&
            context.developerState.filteredUsers[0].name !== undefined ? (
                context.developerState.filteredUsers.map(
                   ({login, name, picture, phone, email, dob}) => {
                       return (
                           <tr key = {login.uuid}>
                               <td data-th="Image" className="align-middle">
                                   <img src={"picture image for " + name.first + " " + name.last}
                                   className="img-responsive"
                                   />
                               </td>
                               <td data-th="Name" className="name-cell align-middle">
                                   {name.first} {name.last}
                               </td>
                               <td data-th="Phone" className="align-middle">
                                   {phone}
                               </td>
                               <td data-th="Email" className="align-middle">
                                   <a href={"mailto:" + email} target="_blank">
                                       {email}
                                   </a>
                               </td>
                               <td data-th="DOB" className="align-middle">
                                   {formatDate(dob.date)}
                               </td>
                           </tr>
                       );
                   } 
                )
            ) 
             (
            <></>
       
        )}
        </tbody>
    );
};

export default Body;