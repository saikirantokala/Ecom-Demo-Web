import React, { useState, useEffect } from "react";

import { backgroundBorderColorTheme, fontMedium } from '../utils/AppStyle';
import { isNullOrEmpty } from "../utils/appUtil";

import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import { clientNameErr, tokenErr, clientNameHint, tokenHint } from "../utils/Strings";
import { btnProceed } from "../utils/Strings";
import { GetUrl } from "../utils/appUtil";

const DemoHome = () => {
    let history = useHistory();
    const [type, setType] = useState('text');
    const [clientNameText, setClientNameText] = useState(clientNameHint);
    const [tokenText, setTokenText] = useState(tokenHint);
    const [clientNameErrMsg, setClientNameErrMsg] = useState(clientNameErr);
    const [tokenErrMsg, setTokenErrMsg] = useState(tokenErr);
    const [clientName, setClientName] = useState('');
    const [token, setToken] = useState('');
    const [isClientNameError, setClientNameError] = useState(false);
    const [isTokenError, setTokenError] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);

    useEffect(() => {

    }, []);

    /* When pressed enter automatically Submit */
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleSubmit()
        }
    }

    const handleChange = (e) => {
        let value = e.target.value;
        let nt = e.target.name;
        if (nt === 'setClientName') {
            setClientName(value);
        }
        else if (nt === 'setToken') {
            setToken(value);
        }
    }

    const handleSubmit = () => {

        //if (!isSubmitted) {

        if ((!isNullOrEmpty(clientName)) && (!isNullOrEmpty(token))) {
            setSubmitted(true);
            setClientNameError(false)
            setTokenError(false)
            GetUrl(clientName, token, history);
        }
        else {
            if (isNullOrEmpty(clientName)) {
                setClientNameError(true)
                //setClientNameErrMsg("Please enter " + clientNameText);
            }
            else {
                setClientNameError(false)
            }
            if (isNullOrEmpty(token)) {
                setTokenError(true)
                //setTokenErrMsg("Please enter your " + tokenText);
            }
            else {
                setTokenError(false)
            }
        }
        //}
    }

    return (
        <div>
            <div className="centerContent">
                <div className="actionCard">
                    <div>
                        <h5 className="start-demo">Start Demo</h5>
                        <div>
                            <div>
                                <table style={{"width":"100%"}}>
                                    <tr>
                                        <td align="right" style={{verticalAlign:"top"}}>
                                            <div className="home-field-title">
                                                <span style={fontMedium}>{clientNameText}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div className={(isClientNameError === true) ? "inputStyleDivErr" : "inputStyleDiv"}>
                                                    <input className="inputStyle" placeholder={clientNameText} style={fontMedium} value={clientName} name='setClientName' onKeyDown={(e) => handleKeyDown(e)} onChange={handleChange} required />

                                                </div>
                                                {
                                                    (isClientNameError === true) ?
                                                        <span className="errorMsgStyle" style={fontMedium}>{clientNameErrMsg}</span> : null
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right" style={{verticalAlign:"top"}}>
                                            <div className="home-field-title">
                                                <span style={fontMedium}>{tokenText}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <div className={(isTokenError === true) ? "inputStyleDivErr" : "inputStyleDiv"}>
                                                    <input className="inputStyle" type={type} placeholder={tokenText} style={fontMedium} value={token} name='setToken' onKeyDown={(e) => handleKeyDown(e)} onChange={handleChange} required />

                                                </div>
                                                {
                                                    (isTokenError === true) ?
                                                        <span className="errorMsgStyle" style={fontMedium}>{tokenErrMsg}</span> : null
                                                }
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <button className="full-primary-button" style={backgroundBorderColorTheme} onClick={handleSubmit}>{btnProceed}</button>
                                        </td>
                                    </tr>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(DemoHome);