import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  // Simulasi data
  const userApakahSudahLogin = true; 
  const roleUser = 'pelanggan'; 

  // Satpam bereaksi tanpa suara:
  // Jika belum login ATAU bukan admin, langsung lempar ke login
  if (!userApakahSudahLogin || roleUser !== 'admin') {
    return <Navigate to="/login" replace />;
  }

  // Jika lolos, silakan masuk ke ruangan
  return <>{children}</>;
}

export default ProtectedRoute;