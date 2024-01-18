import NavbarHeader from '../components/Navbar';

export default function Dashboard() {
  return (
    <>
      <NavbarHeader brand={'Dashboard'} />
      <div className="content">
        <div className="container-fluid">
          <div className="header text-center ml-auto mr-auto">
            <h3 className="title">Material Dashboard Heading</h3>
            <p className="category">Created using Roboto Font Family</p>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div id="typography">
                    <div className="card-title">
                      <h2>Typography</h2>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
