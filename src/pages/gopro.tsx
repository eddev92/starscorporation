// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
import Terms from '~/components/shared/Terms';
import ContentGoProShop from '~/components/shared/ContentGoPro';

function Page() {
    return (
        <React.Fragment>
            <PageTitle>
                GOPRO & CAM's
            </PageTitle>

            <BlockSpace layout="spaceship-ledge-height" />

            <div className="block">
                <div className="container">
                    <div className="document">
                        <div className="document__header">
                            <h1 className="document__title">FERRETERIA DE LAS CAMARAS DE ACCION</h1>
                            <div className="document__subtitle">Encuentra diversos accesorios para tu cámara de accion</div>
                        </div>
                        <div className="document__content card">
                            <div className="typography">
                                <ContentGoProShop />

                                {/* <div className="document__signature">
                                    <AppImage src="/images/signature.jpg" width="160" height="55" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
