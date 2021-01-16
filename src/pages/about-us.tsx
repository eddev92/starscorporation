// react
import React from 'react';
// application
import AppImage from '~/components/shared/AppImage';
import BlockReviews from '~/components/blocks/BlockReviews';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlockTeammates from '~/components/blocks/BlockTeammates';
import Decor from '~/components/shared/Decor';
import PageTitle from '~/components/shared/PageTitle';
import { baseUrl } from '~/services/utils';

function Page() {
    return (
        <React.Fragment>
            <PageTitle>
                Nosotros
            </PageTitle>

            <div className="about">
                <div className="about__body">
                    <div className="about__image">
                        <div
                            className="about__image-bg"
                            style={{
                                backgroundImage: `url(${baseUrl('/images/about.jpg')})`,
                            }}
                        />
                        <Decor className="about__image-decor" type="bottom" />
                    </div>

                    <div className="about__card">
                        <div className="about__card-title">Nosotros</div>
                        <div className="about__card-text">
                            Somos una empresa dedicada a la venta de equipos de protección personal y seguridad industrial, cumpliendo con los estándares y proveendo de productos de calidad con los mejores precios del mercado.
                        </div>
                        <div className="about__card-author">Dirección General</div>
                        <div className="about__card-signature">
                            <AppImage src="/images/signature.jpg" width="160" height="55" />
                        </div>
                    </div>

                    <div className="about__indicators">
                        <div className="about__indicators-body">
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">+30</div>
                                <div className="about__indicators-item-title">Productos para ti</div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">+100</div>
                                <div className="about__indicators-item-title">Ventas concretadas en el último año </div>
                            </div>
                            <div className="about__indicators-item">
                                <div className="about__indicators-item-value">+20</div>
                                <div className="about__indicators-item-title">Clientes satisfechos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BlockSpace layout="divider-xl" />

            <BlockTeammates />

            <BlockSpace layout="divider-xl" />

            <BlockReviews />

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default Page;
