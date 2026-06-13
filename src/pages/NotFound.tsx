import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404 → redirecionando para home. Rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navigate to="/" replace />
    </>
  );
};

export default NotFound;
