import React, {useEffect, useState}  from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function DetailList(props)
{
    const dispatch = useDispatch();
    const history = useHistory();

    const films = useSelector(state => state.films);

    const item = films.selected;

    const handleBack = (item) => {
        history.push('/');
    }

    return (
        <div>
            <div className="row" style={{ padding: 50 }}>
                <Table striped bordered>
                    <tr>
                        <td width={'20%'}>Poster</td>
                        <td><img src={item.Poster} style={{ width: 100 }}/></td>
                    </tr>
                    <tr>
                        <td>Title</td>
                        <td>{item.Title}</td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>{item.Year}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td>{item.Type}</td>
                    </tr>
                </Table>
                <Button  size={'small'} onClick={handleBack}>Back</Button>
            </div>
            
        </div>
    );
}

DetailList = connect()(DetailList)

export default DetailList;
