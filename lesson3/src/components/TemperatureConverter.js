import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TemperatureConverter() {
    const [typeCelsius, setTypeCelsius] = useState(true);
    const [typeCalc, setTypeCalc] = useState("");
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);

    useEffect(() => {
        if (typeCelsius) {
            setTypeCalc("Преобразовать в градусы по Фаренгейту");
        } else {
            setTypeCalc("Преобразовать в градусы Цельсия");
        };
      }, [typeCelsius]);

    function handlerClick () {
        setTypeCelsius(!typeCelsius);
        if (typeCelsius) {
            setFahrenheit(Calc(celsius));
            setCelsius("");
            setTypeCalc("Преобразовать в градусы по Фаренгейту");
        } else {
            setCelsius(Calc(fahrenheit));
            setFahrenheit("");
            setTypeCalc("Преобразовать в градусы Цельсия");
        }; 
    };  

    function Calc (degrees) {
        if (typeCelsius) {
            return 9 / 5 * degrees + 32;
        } else {
            return 5 / 9 * (degrees - 32) 
        }; 
    }

    function handlerChangeCelsius (e) {
        setCelsius(e.target.value);
        setFahrenheit("");
        setTypeCelsius(true);
    }

    function handlerChangeFahrenheit (e) {
        setFahrenheit(e.target.value);
        setCelsius("");
        setTypeCelsius(false);
    }

    return (
        <div className="TemperatureConverter">
            <TextField
                id="outlined-degreesCelsius"
                label="Градусы Цельсия"
                helperText="Температура в градусах Цельсия"
                type="number"
                value={celsius}
                onChange={handlerChangeCelsius}
            />
            <TextField
                id="outlined-degreesFahrenheit"
                label="Градусы по Фаренгейту"
                helperText="Температура в градусах по Фаренгейту"
                type="number"
                value={fahrenheit}
                onChange={handlerChangeFahrenheit}
            />
            <Button variant="contained" onClick={handlerClick}>{typeCalc}</Button>
        </div>
    );
}

export default TemperatureConverter;