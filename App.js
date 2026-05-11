"import \"@/App.css\";
import { BrowserRouter, Routes, Route } from \"react-router-dom\";
import { Toaster } from \"sonner\";
import Home from \"./pages/Home\";

function App() {
  return (
    <div className=\"App\" data-testid=\"app-root\">
      <BrowserRouter>
        <Routes>
          <Route path=\"/\" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position=\"bottom-right\"
        theme=\"dark\"
        toastOptions={{
          style: {
            background: \"#141416\",
            color: \"#f4f4f5\",
            border: \"1px solid rgba(255,107,26,0.25)\",
          },
        }}
      />
    </div>
  );
}

export default App;
"