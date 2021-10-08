import { Button, TextField } from '@material-ui/core';
import React, { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { adminContext } from '../context/AdminContext';

const EditProduct = () => {
    const { productToEdit, getProductToEdit, saveDancerProduct } = useContext(adminContext)

    const [editDancerHore, setEditDancerHore] = useState()

    const {id} = useParams()

    const history = useHistory()
    console.log(id)
    
    useEffect(() => {
        setEditDancerHore(productToEdit)
    }, [productToEdit])

    useEffect(() => {
        getProductToEdit(id)
    }, [])

    const handleInputs = (e) => {
        let obj = {
            ...editDancerHore,
            [e.target.name]: e.target.value,
        }
        setEditDancerHore(obj)
    }
    console.log(editDancerHore)

    return (
        <div>
            {
                editDancerHore ? (
                    <div className="add-inputs">
                        <form>
                            <TextField id="standard-basic" label="Имя" value={editDancerHore.title} name="title" onChange={handleInputs} />
                            <TextField id="standard-basic" label="" value={editDancerHore.description} name="description" onChange={handleInputs} />
                            <TextField type="number" id="standard-basic" label="Цена" value={editDancerHore.price} name="price" onChange={handleInputs} />

                            <TextField id="standard-basic" label="week" value={editDancerHore.week} name="week" onChange={handleInputs} />
                            <TextField id="standard-basic" label="Фото " value={editDancerHore.photo} name="photo" onChange={handleInputs} />
                            <TextField id="standard-basic" label="Псевдоним" value={editDancerHore.modal} name="modal" onChange={handleInputs} />
 

                            <Button onClick={(e) => {
                                e.preventDefault()
                                if (
                                    !editDancerHore.title.trim() ||
                                    !editDancerHore.description.trim() ||
                                    !editDancerHore.price.toString().trim() ||
                                    !editDancerHore.week.trim() ||
                                    !editDancerHore.photo.trim() ||
                                    !editDancerHore.modal.trim() 
                                   
                                ) {
                                    alert('Заполните все поля!')
                                    return
                                }
                                saveDancerProduct(editDancerHore)
                                history.push('/admin')
                            }}
                                variant="outlined"
                                color="primary">
                                Сохранить
                            </Button>
                        </form>
                    </div>
                ) : (
                    <h2>Loading...</h2>
                )
            }
        </div>
    );
};

export default EditProduct;