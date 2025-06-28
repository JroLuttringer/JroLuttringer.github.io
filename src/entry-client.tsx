// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

console.log("✅ entry-client is running");

// Handle GitHub Pages redirection from 404.html
function handleGitHubPagesRedirects() {
  // Check if we are redirected with the ?/ pattern (from our 404.html)
  const searchParams = new URLSearchParams(window.location.search);
  const redirectPath = searchParams.get("/");
  
  if (redirectPath) {
    // Clean up the URL by replacing the current entry in the history
    window.history.replaceState(
      null,
      document.title,
      window.location.pathname.replace(/\/index\.html$/, "/") + redirectPath
    );
  }
}

// Run immediately for handling GitHub Pages redirects
if (typeof window !== "undefined") {
  handleGitHubPagesRedirects();
}

// Mount the app
// mount(() => <StartClient />, document);
mount(() => <StartClient />, document.getElementById("app")!);

// Default export required by the build system
export default function() {
  console.log("✅ entry-client is running2");
  return <StartClient />;
}
