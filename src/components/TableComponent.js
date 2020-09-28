import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponent = (props) => {


    const [tryRates, setRates] = useState([]);

    useEffect(() => {
        axios.get(`https://api.ratesapi.io/api/latest?symbols=USD,GBP,JPY,EUR,DKK&base=TRY`)
            .then(res =>  console.log("wwww",res)) //setRates(res.data.rates)


    }, []);

    return(
        <div className="table-block">

            <div className="left-block">
                <div className="left-item">
                    <p>O</p>
                </div>
            </div>
            <div className="mid-block">
                {
                    tryRates && Object.keys(tryRates).map((item, index) => <div key={index} className="mid-item">
                        <p>{ item }</p>
                    </div>)
                }
            </div>
            <div className="right-block">
                {
                    tryRates && Object.values(tryRates).map((item, index) => <div key={index} className="right-item">
                        <p>{ item }</p>
                    </div>)
                }
            </div>

            {/*{*/}
            {/*    tryRates && Object.values(tryRates).map((item, index) => <div key={index} className="table-block">*/}
            {/*        <div className="table-item">*/}
            {/*            <div className="icon-item">*/}
            {/*                <i>{ item }</i>*/}
            {/*            </div>*/}
            {/*            <div className="nation-item">*/}
            {/*                <p>{ item }</p>*/}
            {/*            </div>*/}
            {/*            <div className="rates-item">*/}
            {/*                <p>{ item }</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>)*/}
            {/*}*/}
        </div>
    )
}

export default TableComponent;