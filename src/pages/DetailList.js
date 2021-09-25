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

    const [imgUrl, setImgUrl] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleBack = (item) => {
        history.push('/');
    }

    const handleShowImage = (value) => {
        setImgUrl(value);
        setIsOpen(true);
    }

    const handleCloseImage = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="row" style={{ padding: 50 }}>
                <Table striped bordered>
                    <tr>
                        <td width={'20%'}>Poster</td>
                        <td>
                            <img src={item.Poster} style={{ width: 100 }}  onClick={() => {
                                handleShowImage(item.Poster)
                            }}/>
                        </td>
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
            {
                (isOpen) && (
                    <dialog
                        style={{
                            left: '0',
                            top: '0',
                            width: '20%',
                            position: "absolute",
                            margin: '0 auto',
                            border: 0
                        }}
                        open
                        onClick={handleCloseImage}
                    >
                        <img
                            src={imgUrl}
                            onClick={handleCloseImage}
                            alt="no image"
                        />
                        * Click to close
                    </dialog>
                )
            }
        </div>
    );
}

DetailList = connect()(DetailList)

export default DetailList;
