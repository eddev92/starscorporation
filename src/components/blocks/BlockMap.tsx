// react
import React from 'react';

function BlockMap() {
    return (
        <div className="block block-map">
            <div className="block-map__body">
            <iframe 
                    title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819.9125171964756!2d-76.99403385425418!3d-12.16792773237591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa20deab9855bbf41!2sStars%20Corporation!5e0!3m2!1ses-419!2spe!4v1610336992930!5m2!1ses-419!2spe"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}></iframe>
                {/* <iframe
                    title="Google Map"
                    src="https://maps.google.com/maps?q=Holbrook-Palmer%20Park&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                /> */}
            </div>
        </div>
    );
}

export default BlockMap;
