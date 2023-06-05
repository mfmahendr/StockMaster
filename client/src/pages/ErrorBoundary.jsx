import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleErrors = (error, errorInfo) => {
      // penanganan error di sini
      console.log(error, errorInfo);
      setHasError(true);
    };

    window.addEventListener('error', handleErrors);
    window.addEventListener('unhandledrejection', handleErrors);

    return () => {
      window.removeEventListener('error', handleErrors);
      window.removeEventListener('unhandledrejection', handleErrors);
    };
  }, []);

  if (hasError) {
    // halaman Error di sini
    return (
      <div>
        <h1>Error</h1>
        <p>Something went wrong.</p>
      </div>
    );
  }

  return children;
};

export default ErrorBoundary;