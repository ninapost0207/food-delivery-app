import { Route, Routes } from 'react-router-dom'
import { SignInPage } from './templates/pages/SignInPage'
import { SignUpPage } from './templates/pages/SignUpPage'
import { SearchDishPage } from './templates/pages/SearchDishPage'
import { SearchRestaurantPage } from './templates/pages/SearchRestaurentPage'
import { MainPage } from './templates/pages/MainPage'
import { BioPage } from './templates/pages/BioPage'
import { PaymentMethodPage } from './templates/pages/PaymentMethodPage'
import { UploadPhotoPage } from './templates/pages/UploadPhotoPage'
import { SetLocationPage } from './templates/pages/SetLocationPage'
import { CongratsPage } from './templates/pages/CongratsPage'
import { VerificationCodePage } from './templates/pages/VerificationCodePage'

function App() {
    return (
        <>            
            <Routes>
                <Route path="/" element={<MainPage />} />                
                <Route path="/searchdish" element={<SearchDishPage />} />
                <Route path="/searchrestaurant" element={<SearchRestaurantPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/bio" element={<BioPage />} />
                <Route path="/payment" element={<PaymentMethodPage />} />
                <Route path="/upload" element={<UploadPhotoPage />} />
                <Route path="/location" element={<SetLocationPage />} />
                <Route path="/congrats" element={<CongratsPage />} />
                <Route path="/verification" element={<VerificationCodePage />} />
                
            </Routes>
        </>
        
    )
}

export default App;
