import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {App, ThemeProvider} from "app";

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);
