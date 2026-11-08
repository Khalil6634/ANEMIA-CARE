import React from 'react';
import { Navigate, Outlet } from 'react-router';

interface ProtectedRouteProps {
  allowedRoles: string[]; // Contoh: ['ADMIN']
}

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  // Contoh mengambil data user dari localStorage (sesuaikan dengan state management Anda)
  const userStorage = localStorage.getItem('user');
  const user = userStorage ? JSON.parse(userStorage) : null;

  // 1. Jika user belum login, arahkan ke halaman login
  if (!user || !user.token) {
    return <Navigate to="/Login" replace />;
  }

  // 2. Jika role user tidak ada di dalam daftar yang diizinkan, lempar ke halaman unauthorized atau beranda
  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />; // Atau ke halaman /unauthorized
  }

  // 3. Jika lolos, izinkan akses masuk ke halaman tujuan (nested routes / children)
  return <Outlet />;
}