import { Route, Routes, Navigate } from 'react-router-dom';
import { PageTemplate } from './components/PageTemplate';

export const RouteCompontents = ({ Components }) => {
    const {RootLayout, HomePage, TourPage, ServicesPage, ContactPage, TourDetail} = Components

    return (
        <Routes>
            <Route index element={<PageTemplate Layout={RootLayout} Content={HomePage}/>}/>
            <Route path='/tours' element={<PageTemplate Layout={RootLayout} Content={TourPage}/>}/>
            <Route path='/service' element={<PageTemplate Layout={RootLayout} Content={ServicesPage}/>}/>
            <Route path='/contact' element={<PageTemplate Layout={RootLayout} Content={ContactPage}/>}/>
            <Route path='/tours/:id' element={<PageTemplate Layout={RootLayout} Content={TourDetail}/>}/>
        </Routes>
    )
}