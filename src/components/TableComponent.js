import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableComponent = (props) => {

    const countries = [
        "US",
        "EU",
        "JP",
        "DK",
        "GB"
    ];

    const [tryRates, setRates] = useState([]);

    useEffect(() => {
        axios.get(`https://api.ratesapi.io/api/${props.date}?base=TRY&symbols=USD,GBP,JPY,EUR,DKK`)
            .then(res =>  setRates(res.data.rates))

    }, [props.date]);



    return(
        <div className="table-block">

            <div className="left-block">
                {
                    countries.map((item, index) => <div key={index} className="left-item">
                        <img src={`http://www.geognos.com/api/en/countries/flag/${item}.png`} alt={item}/>
                    </div>)
                }

            </div>
            <div className="mid-block">
                {
                    tryRates && Object.keys(tryRates).map((item, index) => <div key={index} className="mid-item">
                        <span>{ item }</span>
                    </div>)
                }
            </div>
            <div className="right-block">
                {
                    tryRates && Object.values(tryRates).map((item, index) => <div key={index} className="right-item">
                        <span>{ item }</span>
                    </div>)
                }
            </div>
        </div>
    )
}

export default TableComponent;