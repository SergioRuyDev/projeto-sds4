import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <NavBar />
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Sergio Ruy Sales</h1>
                <p className="lead">Performance Analysis of Sales by different perspectives.</p>
                <hr/>
                <p>This application consists of displaying a dashboard provided by a back end built with spring boot.</p>
                <Link className="btn btn-primary btn-lg" to="/dashboard">
                    Access dashboard
                </Link>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Home;
