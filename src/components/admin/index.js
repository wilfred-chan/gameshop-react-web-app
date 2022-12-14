import { ProSidebarProvider } from 'react-pro-sidebar';
import LeftBar from "./LeftBar";
import {HeaderBar} from "../../styles/header";
import React from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import AdminActions from "./actions";


function AdminPage() {
  return (
      <ProSidebarProvider >

        <div>
          <HeaderBar>
            GameShop
          </HeaderBar>
          <AdminActions/>
          <Dashboard />
          {/*<Routes>*/}
          {/*  <Route path="/" element={<Dashboard />} />*/}
          {/*</Routes>*/}
        </div>
      </ProSidebarProvider>
  )
}
export default AdminPage;