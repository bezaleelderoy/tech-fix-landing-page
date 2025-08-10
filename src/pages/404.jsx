const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h1 className="text-blue-500 text-8xl font-bold">404</h1>
      <p>
        Oops. Page not found{" "}
        <a href="/" className="underline">
          Go back to home
        </a>
      </p>
    </div>
  );
};

export default ErrorPage;
