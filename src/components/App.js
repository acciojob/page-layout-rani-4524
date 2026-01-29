
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <PageLayout props={props}>
          <h1>Welcome to my website</h1>
          <p>This is the content of my website.</p>
          <footer> &copy; 2023 My Website. All rights reserved.</footer>
      </PageLayout>
    </div>
  )
}

export default App
