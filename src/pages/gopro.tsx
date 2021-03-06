// react
import React, { useState } from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import Terms from '~/components/shared/Terms';
import ContentGoProShop from '~/components/shared/ContentGoPro';
import ModalComponent from '~/components/shared/Modal';

function Page() {
    const finalOrderObj:any = {
        fullNames:'',
        dni: '',
        phone: '',
        address: '',
        quantity: 1,
        comment: ''
    }
    const productSelectedInitial:any = {
        comment: ''
    }
    const [openModalUI, setOpenModalUI] = useState(false)
    const [productSelected, setProductSelected] = useState(productSelectedInitial)
    const [finalOrder, setFinalOrder] = useState(finalOrderObj)
    const openModal = (el: any) => {
      console.log('open modal', el)
      setProductSelected(el)
      setOpenModalUI(true)
    }
    const closeModal = () => {        
        const listInputs: any = [
            'basic_fullNames',
            'basic_dni',
            'basic_phones',
            'basic_username',
            'basic_quantityItems',
            'basic_clientComment',
        ]
        // const names: any = document.querySelectorAll('#')
        listInputs.forEach(el => {
            const aux: any = document.querySelectorAll(`#${el}`)
            if (aux && aux[0] && aux[0].id === 'basic_quantityItems') {
                console.log(aux[0])
                aux[0].value = 1
            }
            if (aux && aux[0]) {
                console.log(aux[0])
                aux[0].value = ''
            }
        })
        console.log('close modal')
        setOpenModalUI(false)
    //   setProductSelected({fullNames: ''})
      setFinalOrder(finalOrderObj)
    }
    const onFinish = (values: any) => {
        setFinalOrder(values)
        console.log(values)
        console.log('Success:', finalOrder);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
      const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
    return (
        <React.Fragment>
            <PageTitle>
                GOPRO & CAM's
            </PageTitle>

            <BlockSpace layout="spaceship-ledge-height" />

            <div className="block">
                <div className="container">
                    <div className="document gopro">
                        <div className="document__header">
                            <h1 className="document__title">FERRETERIA DE LAS CAMARAS DE ACCION</h1>
                            <div className="document__subtitle">Encuentra diversos accesorios para tu cámara de accion</div>
                        </div>
                        <div className="document__content card">
                            <div className="typography">
                                <ContentGoProShop openModal={openModal}/>

                                {/* <div className="document__signature">
                                    <AppImage src="/images/signature.jpg" width="160" height="55" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalComponent 
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                finalOrder={finalOrder}
                visible={openModalUI}
                closeModal={closeModal}
                productSelected={productSelected}
                layout={layout}
                tailLayout={tailLayout}
            />
            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
