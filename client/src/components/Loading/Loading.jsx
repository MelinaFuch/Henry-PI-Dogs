import React from "react";
import style from "./Loading.module.css";

export default function Loading() {
    return (
        <div className={style.loading}>
            <img src={"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fbf4ac69162281.5b76bdfceea96.gif"} alt="ññ" />
        </div>
    );
}