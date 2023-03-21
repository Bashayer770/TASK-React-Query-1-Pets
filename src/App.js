import "./App.css";
import PetsList from "./Components/PetsList";
// import petsData from "./petsData";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PetsList petsData={[]} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
