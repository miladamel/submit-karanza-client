import React from "react";
import './success.css';
 const Success = () => {
    return (
        <div className="suc">
            <h1>
                ثبت با موفقیت انجام شد
            </h1>
            <button className="buttonBack">
                <a href="/">
                    بازگشت به صفحه ثبت نام
                </a>
            </button>
        </div>
    )
}

export default Success;