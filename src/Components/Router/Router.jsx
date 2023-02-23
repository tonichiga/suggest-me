import { Details, Home } from "../../Pages";
import { Route, Routes } from "react-router-dom";


const Router = () => {
    return ( 
        <Routes>
            <Route index element={<Home />} />
            <Route path={"details/:id"} element={<Details />} />
        </Routes>
     );
};
 
export default Router;