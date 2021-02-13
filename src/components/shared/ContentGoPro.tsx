// react,
import React, { useState } from 'react';
// application
import { Card, Row, Col, Button, Modal } from 'antd';
import url from '~/services/url';
import { AccesoriesGoPRo } from '~/data/gopro';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const gridStyle = {
  maxWidth: '30%',
  textAlign: 'center',
  border: '1px solid #ee791f',
  // margin: '14px',
};
const { Meta } = Card;
function ContentGoProShop({ openModal = () => {} }: any) {
  // const openModal = (el: any) => {
  //   console.log('open modal', el)
  // }
    return (
        <React.Fragment>
          <Row>
          {
                          AccesoriesGoPRo && AccesoriesGoPRo.map(el => {
                            return (
                              <Col span={8}>
                                 <Card
                                    hoverable
                                    id="card-product"
                                    style={{ width: 300 }}
                                    cover={
                                      <img
                                        alt="example"
                                        src={(el && el.img) && el.img}
                                        className="img-responsive"
                                      />
                                    }
                                    >
                                    <Meta
                                      title={el.name}
                                      description={`Precio de...  S/ ${el.price}`}
                                    />
                                    <Button type="primary" size="large" onClick={() => openModal(el)}>PEDIR</Button>
                                </Card>
                              </Col>                             
                              )
                          })
                        }
          </Row>                        
        </React.Fragment>
    );
}

export default ContentGoProShop;
