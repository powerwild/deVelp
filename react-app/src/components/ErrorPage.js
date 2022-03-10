
import React, { useEffect, useState } from "react";

function ErrorPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return null;
  }

  return (
    <div className="error-video">
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  )
}

export default ErrorPage;

