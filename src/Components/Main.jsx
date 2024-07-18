import React from 'react';

export default function MainPage(props) {

    return(
       <main className={props.toggleMode ? "for-darkMode" : "for-lightMode"}>
        <h1>Fun fact about React</h1>
        <ul>
            <li>{props.title}Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobil apps</li>
        </ul>
       </main>
        
    )
}
