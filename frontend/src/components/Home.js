import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
            <Link to="/" className="navbar-brand">Black Coffee</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
     <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/datalist" className="nav-link text-white">Datalist</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/barchart" className="nav-link text-white">Bar Chart</Link>
        </li>
        <li className="nav-item">
          <Link to="/piechart" className="nav-link text-white">Pie Chart</Link>
        </li>
        <li className="nav-item">
          <Link to="/doughnutchart" className="nav-link text-white">Doughnut Chart</Link>
        </li>
        <li className="nav-item">
          <Link to="/linechart" className="nav-link text-white">Line Chart</Link>
        </li>

            </ul>
    </div>
  </div>
</nav>
</>
         
   );
}

export default Home;