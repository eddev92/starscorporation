// react
import React from 'react';
// application
import { Card } from 'antd';
import url from '~/services/url';
import { AccesoriesGoPRo } from '~/data/gopro';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const gridStyle = {
  minWidth: '33.3%',
  textAlign: 'center',
  border: '1px solid #ee791f'
};
const { Meta } = Card;
function ContentGoProShop() {
  const openModal = (el) => {
    console.log('open modal', el)
  }
    return (
        <React.Fragment>
          <Card>
                        {
                          AccesoriesGoPRo && AccesoriesGoPRo.map(el => {
                            return  <Card.Grid style={gridStyle}>
                              <Card
                              id="card-product"
                                  style={{ width: 300 }}
                                  cover={
                                    <img
                                      alt="example"
                                      src={(el && el.img) && el.img}
                                    />
                                  }
                                  >
                                  <Meta
                                    title={el.name}
                                    description={`Precio de...  S/ ${el.price}`}
                                  />
                                  <button onClick={() => openModal(el)}>PEDIR</button>
                              </Card>
                            </Card.Grid>
                          })
                        }
          </Card>
        </React.Fragment>
    );
}

export default ContentGoProShop;
