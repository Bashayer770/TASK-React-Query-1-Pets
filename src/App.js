import "./App.css";
import PetsList from "./Components/PetsList";
// import petsData from "./petsData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import NewPage from "./Components/NewPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <PetsList petsData={[]} />
            </div>
          }
        />

        <Route path="/AddPet" element={<NewPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
