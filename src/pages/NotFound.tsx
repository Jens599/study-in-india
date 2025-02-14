import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-background-gray flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1
          className={`text-primary-blue mb-4 text-8xl font-bold transition-all duration-1000 ease-in-out ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          404
        </h1>
        <h2 className="text-primary-green mb-6 text-2xl font-semibold">
          Oops! Page not found
        </h2>
        <p className="text-text-gray mx-auto mb-8 max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="bg-accent-yellow text-primary-green hover:bg-accent-red inline-block rounded px-6 py-3 transition-colors duration-300 ease-in-out"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
