import { React, useContext, useState } from 'react';
import { adminContext } from '../context/AdminContext';

import { useHistory } from 'react-router';
import '../index.css'
import { TextField, Button } from '@material-ui/core';



const Coments = () => {
    const [danserCom, setDanserCom] = useState({
        title: '',
      
    })
    const history = useHistory()

    const { createProduct } = useContext(adminContext)


    function handleInputs(e) {
        let newProduct = {
            ...danserCom,
            [e.target.name]: e.target.value
        }
        setDanserCom(newProduct)
    }
    function handleClick(){
        createProduct(danserCom)
        setDanserCom({
        title: '',

        })

    }

    return (
        <div>
            <div className="add-inputs">
                <form>
                    <TextField className="add-inputs1" id="standard-basic" label="Имя" value={danserCom.title} name="title" onChange={handleInputs} />

                    <Button onClick={(e) => {
                        e.preventDefault()
                        if (
                            !danserCom.title.trim() 

                        ) {
                            alert('Заполните все поля!')
                            return
                        }
                       handleClick()
                    }}
                        variant="outlined"
                        color="primary"
                        className="add-inputs1">
                        Создать
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Coments;
