import "./Header.scss";

const Header = () => {
  const { loggedInUser } = { firstName: "firstName" };
  return (
    <header>
      <h1>Progress Planning and Report</h1>
      {loggedInUser && (
        <p className="welcome"> Welcome, {loggedInUser.firstName}!</p>
      )}
    </header>
  );
};

export default Header;
