import React, {useState, useEffect} from 'react';
import './assets/styles/main.css';
import TableComponent from './components/TableComponent';

const App = () => {

    const [dropDownData, setDropDownData] = useState([]);
    const [selectedDate, setSelectDate] = useState((new Date().getFullYear() + '-' + (new Date().getDate()) + '-' + (new Date().getMonth() + 1)));


    useEffect(() => {
        let date = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();

        let dropDates = [];
        for (let i = 0; i < 7; i++) {

            dropDates.push(year + '-' + (date - (i)) + '-' + month)

        }
        setDropDownData(dropDates);
    }, []);

    console.log(dropDownData);

    const handleSelected = (data) => {
        setSelectDate(data.target.value);
    }


    return (
        <div className="App">
            <div className="home-root">
                <div className="home-wrapper">
                    <div className="home-container">
                        <div className="date-select-block">
                            <select value={selectedDate} onChange={handleSelected}>
                                {
                                    dropDownData.length > 0 && dropDownData.map((item, index) => <option
                                       key={index} value={item}>{item}</option>)
                                }
                            </select>
                        </div>
                        {
                            <TableComponent date={selectedDate}/>

                        }

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
