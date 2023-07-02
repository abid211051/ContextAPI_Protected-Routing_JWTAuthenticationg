import React, { useEffect, useState } from 'react';
import { Outlet, Navigate, useLoaderData } from 'react-router-dom';

const Private = () => {
  const data = useLoaderData();
  return data ? <Outlet/> : <Navigate to={'/'}/>
}
export default Private;
