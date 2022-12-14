import { ProSidebarProvider } from 'react-pro-sidebar';
import {HeaderBar, HeaderContainer, NavLinks} from "../../styles/header";
import React from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import AdminActions from "./actions";
import Actions from "../header/actions";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../header";


function AdminPage() {
  return (


        <div>
          <HeaderContainer>
          <HeaderBar>
            GameShop
          </HeaderBar>

          <AdminActions/>
          </HeaderContainer>
          <Dashboard />
          {/*<Routes>*/}
          {/*  <Route path="/" element={<Dashboard />} />*/}
          {/*</Routes>*/}
        </div>

  )
}
export default AdminPage;