import { Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import Perfil from "../view/perfil";
import React from 'react';
import EditUser from "../components/admin/EditUser";
import AddAsistencia from "../components/admin/AddAsistencia";
import EliminarUser from "../components/admin/EliminarUser";
import UserCreate from "../components/admin/UserCreate";
import PanelAdmin from "../components/admin/PanelAdmin";

export function Rutas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/admin" element={<PanelAdmin />} />
            <Route path="/admin/create-user" element={<UserCreate />} />
            <Route path="/admin/edit-user" element={<EditUser />} />
            <Route path="/admin/delete-user" element={<EliminarUser />} />
            <Route path="/admin/addAsistencia" element={<AddAsistencia />} />
        </Routes>
    );
}
