import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component }) => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return isAuthenticated ? <Component /> : <Navigate to="login" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired, // 'element' is a React component
};
export default ProtectedRoute;
