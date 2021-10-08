import { React, useContext, useState } from 'react';
import { adminContext } from '../context/AdminContext';

import { useHistory } from 'react-router';
import '../index.css'
import { TextField, Button } from '@material-ui/core';



const AdminProduct = () => {
    const [danserFam, setDanserFam] = useState({
        title: '',
        description: '',
        price: '',
        week: '',
        photo: '',
        modal: ''
    })
    const history = useHistory()

    const { createProduct } = useContext(adminContext)


    function handleInputs(e) {
        let newProduct = {
            ...danserFam,
            [e.target.name]: e.target.value
        }
        setDanserFam(newProduct)
    }
    function handleClick(){
        createProduct(danserFam)
        setDanserFam({
        title: '',
        description: '',
        price: '',
        week: '',
        photo: '',
        modal: ''

        })

    }

    return (
        <div>
            <div className="add-inputs">
                <form>
                    <TextField className="add-inputs1" id="standard-basic" label="Имя" value={danserFam.title} name="title" onChange={handleInputs} />
                    <TextField className="add-inputs1" id="standard-basic" label="Описание" value={danserFam.description} name="description" onChange={handleInputs} />
                    <TextField className="add-inputs1" type="number" id="standard-basic" label="Цена за месяц" value={danserFam.price} name="price" onChange={handleInputs} />
                    <TextField className="add-inputs1" id="standard-basic" label="week" value={danserFam.week} name="week" onChange={handleInputs} />
                    <TextField className="add-inputs1" id="standard-basic" label="Фото манги" value={danserFam.photo} name="photo" onChange={handleInputs} />
                    <TextField className="add-inputs1" id="standard-basic" label="Бренд манги" value={danserFam.modal} name="modal" onChange={handleInputs} />
                    <Button onClick={(e) => {
                        e.preventDefault()
                        if (
                            !danserFam.title.trim() ||
                            !danserFam.description.trim() ||
                            !danserFam.price.trim() ||
                            !danserFam.week.trim() ||
                            !danserFam.photo.trim() ||
                            !danserFam.modal.trim()

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
                    <Button className="add-inputs1" onClick={() => {
                        history.push("/main")
                    }}>Back</Button>
                </form>
            </div>
        </div>
    );
};

export default AdminProduct;