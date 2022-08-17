import React, { useEffect } from "react";

function Resume() {
    useEffect(() => {
        document.body.style.backgroundPosition = '0% 30%';
        document.getElementById('clouds').style.backgroundPosition = '0% 45%';
        document.getElementById('hills').style.backgroundPosition = '0% 60%';
        document.getElementById('me').style.backgroundPosition = '0% 85%';
    }, []);

    function viewResume() {
        window.location.replace('https://docs.google.com/document/d/e/2PACX-1vSOglPP5YOYdv7YC3Qb49pT7mTR56d_7oc-RqDDLxCA6iQ-Xk1m3isRjwQDJE90RGMf65TLr1VxJi_U/pub');
    }

    return (
        <div id="resume" className="transition container flex-row mb-4" style={{ transform: 'translateY(-100vh)' }}>
            <div className="col-sm-12 col-xl-6 p-3"></div>
            <div className="col-sm-12 col-xl-6 p-3 bg-primary rounded-corners">
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vSOglPP5YOYdv7YC3Qb49pT7mTR56d_7oc-RqDDLxCA6iQ-Xk1m3isRjwQDJE90RGMf65TLr1VxJi_U/pub?embedded=true" title="resume" height='100%' width='100%'></iframe>
                <div className="w-100 flex-row">
                    <button className='btn pill px-5 mx-auto' onClick={viewResume}>View on Google Drive</button>
                </div>
            </div>
        </div>
    )
}

export default Resume;