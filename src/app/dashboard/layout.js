import Sidebar from "../components/Sidebar";

const routes = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'dashboard',
  }
];

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="wrapper">
      <Sidebar routes={routes} />
      <div className="main-panel">
        {children}
      </div>
    </div>
  )
}