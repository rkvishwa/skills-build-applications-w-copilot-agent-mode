import { NavLink, Route, Routes } from 'react-router-dom';

const features = [
  'User authentication and profiles',
  'Activity logging and tracking',
  'Team creation and management',
  'Competitive leaderboard',
  'Personalized workout suggestions',
];

function Section({ title, description }: { title: string; description: string }) {
  return (
    <section className="card feature-card h-100 border-0 shadow-sm">
      <div className="card-body">
        <h2 className="h5 fw-semibold">{title}</h2>
        <p className="mb-0 text-body-secondary">{description}</p>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="container py-5">
      <div className="hero p-4 p-md-5 rounded-4 text-white mb-4">
        <p className="text-uppercase small mb-2 hero-kicker">OctoFit Tracker</p>
        <h1 className="display-5 fw-bold">Modern multi-tier fitness tracking, ready for expansion.</h1>
        <p className="lead col-lg-8 mb-0">
          React 19 on the presentation tier, Express and TypeScript on the logic tier, and MongoDB through
          Mongoose on the data tier.
        </p>
      </div>

      <div className="row g-4 mb-4">
        {features.map((feature) => (
          <div className="col-12 col-md-6 col-lg-4" key={feature}>
            <Section title={feature} description="Scaffolded into the application structure and ready for implementation." />
          </div>
        ))}
      </div>

      <div className="d-flex flex-wrap gap-3">
        <NavLink className="btn btn-primary btn-lg" to="/dashboard">
          Open dashboard
        </NavLink>
        <NavLink className="btn btn-outline-light btn-lg" to="/teams">
          Manage teams
        </NavLink>
      </div>
    </div>
  );
}

function PlaceholderPage({ label }: { label: string }) {
  return (
    <div className="container py-5">
      <div className="card border-0 shadow-sm">
        <div className="card-body p-4 p-md-5">
          <h1 className="h3 fw-bold mb-2">{label}</h1>
          <p className="mb-0 text-body-secondary">This route is ready for the next implementation step.</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark border-bottom border-white border-opacity-10">
        <div className="container py-2">
          <NavLink className="navbar-brand fw-bold" to="/">
            OctoFit Tracker
          </NavLink>
          <div className="navbar-nav ms-auto gap-2">
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className="nav-link" to="/activities">
              Activities
            </NavLink>
            <NavLink className="nav-link" to="/teams">
              Teams
            </NavLink>
            <NavLink className="nav-link" to="/leaderboard">
              Leaderboard
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PlaceholderPage label="Dashboard" />} />
        <Route path="/activities" element={<PlaceholderPage label="Activities" />} />
        <Route path="/teams" element={<PlaceholderPage label="Teams" />} />
        <Route path="/leaderboard" element={<PlaceholderPage label="Leaderboard" />} />
      </Routes>
    </div>
  );
}
