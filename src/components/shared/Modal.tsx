import React from 'react';
import { Modal } from 'antd';
import { Form, Input, Button, InputNumber, Card, Row, Col, Table, Tag, Space } from 'antd';
const { Meta } = Card

function ModalComponent({ productSelected = {}, visible = false, closeModal = () => {}, onFinishFailed = () =>{}, onFinish = () =>{},
tailLayout, layout }: any): any {
  console.log(productSelected)
  if (productSelected) {
    return (
      <Modal
      destroyOnClose={true}
        title={(productSelected && productSelected.name) && productSelected.name.toUpperCase()}
        centered
        visible={visible}
        okButtonProps={{hidden: true}}
        // onOk={() => setVisible(state)}
        onCancel={() => closeModal()}
        width={800}
      >
      <Row>
          <Col span={8}>
          <Card
          style={{ width: 'auto' }}
          id="card-product-selected"
          cover={
            <img
              alt="example"
              src={productSelected.img}
            />
          }
        >
          <table id="table-info-product">
          <thead>
            <tr>
              <th scope="col">PRECIO</th>
              <th scope="col">DESCRIPCION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Account">S/ {productSelected.price}</td>
              <td data-label="Due Date" id="desc-product" >{(productSelected && productSelected.desc) && productSelected.desc}</td>
            </tr>
          </tbody>
        </table>
        </Card>
          </Col>
          <Col span={16}>
          <Form
      {...layout}
      name="basic"
      // initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
              <Form.Item
                label="Nombres y apellidos"
                name="fullNames"
                rules={[{ required: true, message: 'Nombres y apellidos son requeridos' }]}
              >
                <Input
                />
              </Form.Item>
              <Form.Item
                label="DNI"
                name="dni"
                rules={[{ required: true, message: 'DNI es requerido' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Teléfono de contacto"
                name="phones"
                rules={[{ required: true, message: 'Teléfono de contacto es requerido' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Dirección de envío"
                name="address"
                rules={[{ required: true, message: 'Dirección de envío es requerido' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item label="Cantidad">
            <Form.Item name="quantityItems" noStyle >
              <InputNumber min={1} max={10} defaultValue={1} />
            </Form.Item>
            <span className="ant-form-text"> unidades</span>
          </Form.Item>
              <Form.Item name={['clientComment', 'comment']} label="Comentario:">
                <Input.TextArea value={productSelected.comment} />
              </Form.Item>
              <Form.Item {...tailLayout}>
                TOTAL:
                <br/>
                <Button type="primary" htmlType="submit">
                  PEDIR YA!
                </Button>
              </Form.Item>
            </Form>
          </Col>
      </Row>
      </Modal>
    )
  }
}

export default ModalComponent;
