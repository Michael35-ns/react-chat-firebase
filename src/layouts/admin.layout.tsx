import Navbar from "@/components/navbar";
import { Suspense } from "react";
import { Navigate, Outlet } from "react-router";
import { useSigninCheck, useUser } from "reactfire";

const AdminLayout = () => {
  const { status, data: signInCheckResult, hasEmitted } = useSigninCheck();

  //mostrar Loading mientras se verifica el estado de la sesión
  if (status === "loading" || !hasEmitted) {
    return <div>Loading...</div>;
  }

  //Redirigir si el usuario no está autenticado
  if (status === "success" && !signInCheckResult.signedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <Suspense fallback={<div>Loading user...</div>}>
      <AunthenticatedLayout />
    </Suspense>
  );
};

export default AdminLayout;

const AunthenticatedLayout = () => {
  useUser({
    suspense: true,
  });
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};
