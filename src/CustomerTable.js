import React from 'react';
import axios from 'axios';
import App from './table/App';
const Customer = () => {
    const addCustomer = () =>{};
   
    return (
        <div>
       
         <form>
           <label>
              Customer Name:
            <input type="text" name="name" />
           </label>
            <input  onClick={addCustomer} type="submit" value="Add" />
         </form>
        <App/>
        </div>
    );

};
 export default Customer;