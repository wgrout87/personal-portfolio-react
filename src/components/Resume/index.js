import React, { useEffect } from "react";

function Resume() {
    useEffect(() => {
        if (window.innerWidth <= 650) {
            document.body.style.backgroundPosition = '0% 50%';
            document.getElementById('clouds').style.backgroundPosition = '0% 75%';
            document.getElementById('hills').style.backgroundPosition = '0% 100%';
            document.getElementById('me').style.backgroundPosition = '0% 0vh';
            return;
        }
        document.body.style.backgroundPosition = '0% 30%';
        document.getElementById('clouds').style.backgroundPosition = '0% 45%';
        document.getElementById('hills').style.backgroundPosition = '0% 60%';
        document.getElementById('me').style.backgroundPosition = '0% 85%';
    }, []);

    return (
        <div id="resume" className="transition container flex-row mb-4" style={{ transform: 'translateY(-100vh)' }}>
            <div className="col-sm-12 col-xl-6 p-3"></div>
            <div className="col-sm-12 col-xl-6 p-3 bg-primary rounded-corners">
                <iframe className="rounded-corners" src="https://docs.google.com/document/d/e/2PACX-1vSBY415PnIYC1JegAFIP9M8_XlWafJJ-ZZ2J2R92JDYkououpmEm-up7K-Qx9oM5i_-Uq_r5Y5NN5Ky/pub?embedded=true" title="resume" height='100%' width='100%'></iframe>
                <div className="w-100 flex-row">
                    <a className='btn pill px-5 mx-auto' href="https://docs.google.com/document/d/e/2PACX-1vSBY415PnIYC1JegAFIP9M8_XlWafJJ-ZZ2J2R92JDYkououpmEm-up7K-Qx9oM5i_-Uq_r5Y5NN5Ky/pub" target="_blank" rel="noreferrer">View on Google Drive</a>
                </div>
            </div>
        </div>
    )
}

export default Resume;