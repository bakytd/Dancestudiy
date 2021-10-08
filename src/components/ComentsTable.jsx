import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { adminContext } from '../context/AdminContext';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function ComentsTable() {
    const classes = useStyles();

    const { products2, getProducts2 } = useContext(adminContext)

    useEffect(() => {
        getProducts2()
    }, [])

    return (
        <div className="color-black">
            <>
                {
                    products2 ? (
                        <TableContainer component={Paper} >
                            <Table className={classes.table} aria-label="caption table">
                                <caption>A basic table example with a caption</caption>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>№</TableCell>
                                        <TableCell align="left">Название</TableCell>
                                      
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products2.map((row, index) => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell align="left">{row.title}</TableCell>
                                         
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </>
        </div>
    );
}