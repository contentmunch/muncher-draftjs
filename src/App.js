import React, {useState} from 'react';
import './App.scss';
import {Muncher} from "./components";

export default function App() {
    const [html, setHtml] = useState("");
    return (
        <div className="container">
            <Muncher content={"<h1 class=\"text-align--center\">This is heading</h1>\n" +
            "<p class=\"text-align--center\">This is <a href=\"http://localhost:3000/what\">paragraph</a></p>\n" +
            "<blockquote class=\"text-align--center\">this is it</blockquote>\n" +
            "<ol type=\"a\">\n" +
            "  <li class=\"text-align--center\">This is first</li>\n" +
            "</ol>"}
                     html={html}
                     setHtml={setHtml}
                     handleSave={() => {
                         console.log("save clicked");
                     }}
            />
        </div>

    );
};
