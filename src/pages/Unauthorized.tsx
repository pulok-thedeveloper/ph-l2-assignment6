import { Link } from "react-router";

const Unauthorized = () => {
    return (
        <div>
            <h1>Unauthorized Access</h1>
            <p>You do not have permission to view this page.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
};

export default Unauthorized;