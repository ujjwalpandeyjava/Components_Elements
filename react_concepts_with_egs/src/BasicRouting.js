import { Fragment } from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { About, Home, PageNotFound } from './BasicRoutingExport';
import configure from "../package.json";

function BasicRouting() {
    return (
        <Fragment>
            <div style={{ border: '1px solid gray', margin: '8px', padding: "8px", borderRadius: 5 }}>
                <h2>Routing example component</h2>
                <BrowserRouter basename={configure.homepage}>
                    <Link to='/'>Home page</Link> | <Link to='/about'>About page</Link> | <Link to='/notAvailablePage'>Fake page</Link>
                    <hr style={{ marginBlock: '1rem' }} />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <div style={{ backgroundColor: 'pink', padding: 7, margin: '25px 7px 7px 7px', borderRadius: 6 }}>
                <span style={{ color: 'red' }}>These are normal components, showing the full details.</span>
                <Home />
                <About />
                <PageNotFound />
            </div>
        </Fragment>
    );
}

export default BasicRouting