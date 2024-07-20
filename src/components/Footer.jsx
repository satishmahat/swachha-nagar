

function Footer(){
    return(
        <div className="footer-container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top w-4/5 mx-auto">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <i className="fa-solid fa-truck"></i>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary text-lg">&copy; 2024 Swachha Nagar</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary text-lg" href="#"><i className="bi bi-twitter"></i></a></li>
                    <li className="ms-3"><a className="text-body-secondary text-lg" href="#"><i className="bi bi-instagram"></i></a></li>
                    <li className="ms-3"><a className="text-body-secondary text-lg" href="#"><i className="bi bi-facebook"></i></a></li>
                </ul>
            </footer>
        </div>


    )
}
export default Footer