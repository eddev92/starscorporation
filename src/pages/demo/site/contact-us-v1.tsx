// react
import React from 'react';
// application
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockMap from '~/components/blocks/BlockMap';
import BlockSpace from '~/components/blocks/BlockSpace';
import PageTitle from '~/components/shared/PageTitle';
// data
import theme from '~/data/theme';

function Page() {
    return (
        <React.Fragment>
            <PageTitle>Contáctanos</PageTitle>

            <BlockMap />

            <BlockHeader
                pageTitle="Contáctanos"
                afterHeader={false}
            />

            <div className="block">
                <div className="container container--max--lg">
                    <div className="card">
                        <div className="card-body card-body--padding--2">
                            <div className="row">
                                <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                                    <div className="mr-1">
                                        <h4 className="contact-us__header card-title">Oficina principal</h4>

                                        <div className="contact-us__address">
                                            <p>
                                                Jr. Vulcano Mz B Lte 7, Urbanización La Libertard, Santiago de Surco - Lima, Perú
                                                <br />
                                                {`Email: ${theme.contacts.email[0]}`}
                                                <br />
                                                Teléfonos: (+51) 994 381 708 - 963 763 193
                                            </p>

                                            <p>
                                                <strong>Horario de atención</strong>
                                                <br />
                                                Lunes a Viernes: 9am-6pm
                                                <br />
                                                Sábado: 9am-3pm
                                            </p>

                                            {/* <p>

                                                <strong>Comment</strong>
                                                <br />
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                                                suscipit suscipit mi, non
                                                tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit.
                                            </p> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="ml-1">
                                        <h4 className="contact-us__header card-title">Déjanos un mensaje</h4>

                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-name">Nombre</label>
                                                    <input
                                                        type="text"
                                                        id="form-name"
                                                        className="form-control"
                                                        placeholder="Tu nombre o razón social"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="form-email">Email</label>
                                                    <input
                                                        type="email"
                                                        id="form-email"
                                                        className="form-control"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-subject">Asunto</label>
                                                <input
                                                    type="text"
                                                    id="form-subject"
                                                    className="form-control"
                                                    placeholder="Asunto"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="form-message">Mensaje</label>
                                                <textarea
                                                    id="form-message"
                                                    className="form-control"
                                                    rows={4}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Enviar mensaje</button>
                                        </form>
                                    </div>
                                </div>
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
