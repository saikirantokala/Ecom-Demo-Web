import React, { useState, useEffect } from "react";
import { getErrorIconPath } from '../Config';
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { backgroundBorderColorTheme, fontMedium, fontRegular } from "../utils/AppStyle";
import { errMsg1, errMsg2, errMsg3, btnTryAgain, internalErrorTitle } from "../utils/Strings";
import { isNullOrEmpty } from "../utils/appUtil";

const ErrorComponent = () => {
    let history = useHistory();

    let errorTitle1 = sessionStorage.getItem('response_title');
    let errorMsg1 = sessionStorage.getItem('response_msg');

    let tokenValid = sessionStorage.getItem('token_valid');

    let showTable = sessionStorage.getItem('show_table');

    let tableData = JSON.parse(sessionStorage.getItem("table_data")); //{"tableHeader":"Missing Dates", "colHeaders":["From","To"], "body":[["2020-05-06","2020-05-07"],["2020-05-08","2020-05-09"],["2020-05-10","2020-05-11"],["2020-05-12","2020-05-13"],["2020-05-10","2020-05-11"],["2020-05-12","2020-05-13"],["2020-05-10","2020-05-11"],["2020-05-12","2020-05-13"]]};

    const [showButtons, setShowButtons] = useState(true);

    const [showTryAgain, setShowTryAgain] = useState(sessionStorage.getItem('show_try_again'));

    const [errorMsg, setErrorMsg] = useState(errorMsg1);

    const [errorTitle, setErrorTitle] = useState(errorTitle1);

    useEffect(() => {
        if (tokenValid === "false") {
            setShowTryAgain("false");
        }
        let url_string = window.location.href;
        let url = new URL(url_string);
        let params = url.searchParams;
        if (!isNullOrEmpty(params)) {
            setErrorTitle(internalErrorTitle);
            setShowButtons(false);
            let msgId = params.get("msg_id", "");
            if (msgId == 1) {
                setErrorMsg(errMsg1);
            }
            else if (msgId == 2) {
                setErrorMsg(errMsg2);
            }
            else {
                setErrorMsg(errMsg3);
            }
        }
    }, []);

    const handleRetry = () => {
        history.push("/")
    }

    return (
        <div className="centerContent">
            <div className="normalCard">
                <div style={{ marginTop: '30px' }}>
                    <img src={getErrorIconPath()} className="respImgStyle" alt="error" />
                    <br /><br />
                    <div className="cardTitle" style={fontMedium}>{errorTitle}</div><br />
                    <div className="cardMsg" style={fontMedium}>
                        {errorMsg}
                    </div>
                    <br />
                    {
                        (showTable == "true") ?
                            <div>
                                <h3 className="cardTitle" style={fontMedium}>{tableData.tableHeader}</h3>
                                <div style={{maxHeight:"180px",overflow:"auto"}}>
                                <table style={fontRegular}>
                                    <thead>
                                        <tr>
                                            <th className="cardTitle">{tableData.colHeaders[0]}</th>
                                            <th className="cardTitle">{tableData.colHeaders[1]}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.body.map((item) => {
                                            return (
                                                <tr>
                                                    <td>{item[0]}</td>
                                                    <td>{item[1]}</td>
                                                </tr>
                                                )
                                        })}
                                    </tbody>
                                </table>
                                </div>
                            </div>
                            : null
                    }
                    <br /><br /><br /><br />
                    {
                        (showButtons === true) ?
                            <div className='bottomDiv'>
                                <button className='full-primary-button' style={backgroundBorderColorTheme} onClick={handleRetry}>{btnTryAgain}</button> 
                            </div> :
                            null
                    }
                </div>
            </div>
        </div>
    );
};

export default withRouter(ErrorComponent);
