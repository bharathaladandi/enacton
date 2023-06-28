import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Homepage } from '../Pages/Homepage';
import { AllMovies } from '../Pages/AllMovies';
import { SearchMovies } from '../Pages/SearchMovies';

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/allmovies' element={<AllMovies />}></Route>
                <Route path='/search' element={<SearchMovies />}></Route>

            </Routes>
        </div>

    )
}
