import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {addCategory}  from "../../apis/category.js";

const TableComponent = (props) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([
    {
      name: "Electric Bill",
      description: "Electric Bill desc",
    },
    {
      name: "Groceries",
      description: "Groceries desc",
    },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  const renderTableRows = () => {
    return data.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.description}</td>
      </tr>
    ));
  };

  const submitCategory = () => {
    console.log(name,description,'rrrrrrrrrrrrrrrr')
    const data =  {name,parentId:"99",familyId:"99",description};
    setData((c)=>{
      return [...c,data]
    })
    addCategory(data).then(res=>{
      console.log(res,'rrrrrrrrrrrr');
      setName('');
      setDescription('');
    })
    handleClose()
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h1>{props.name}</h1>
        <Button variant="primary" onClick={handleShow}>
        {props.btnType}
      </Button>
      </div>

      <br />
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </Table>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control value={description} onChange={(e)=>setDescription(e.target.value)} as="textarea" rows={3} />
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submitCategory} variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TableComponent;
