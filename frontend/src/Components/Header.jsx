const Header = ({isHomePage=false}) => {
  const username = localStorage.getItem("username");
  return (
    <div className="bg-linear-to-r from-gray-900 to-gray-950 flex flex-row justify-between px-8 py-2">
      <div>
        <a href="/" className="flex flex-row items-center">
          <img src="./src/Assets/logo.png" alt="logo" className="h-24" />
          <span className="text-gray-200 text-4xl">Helpdesk</span>
        </a>
      </div>
      <div className="flex flex-row items-center gap-10 text-gray-200 text-2xl">
        {isHomePage ? (
          <>
            <a href="#" className="hover:text-gray-300 duration-100">
              Pricing
            </a>
            <a href="#" className="hover:text-gray-300 duration-100">
              About service
            </a>
            <a href="/login" className="hover:text-gray-300 duration-100">
              Log in
            </a>
          </>
        ) : (
          <>
            <a href="" className="hover:text-gray-300 duration-100">
              Pricing
            </a>
            <a href="/dashboard" className="hover:text-gray-300 duration-100">
              Dasboard
            </a>
            <a href="/#" className="hover:text-gray-300 duration-100">{username}</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
