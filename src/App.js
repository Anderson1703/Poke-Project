import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import ContextProvider from "./contexts/favoritePokemons";
import Home from "./pages/Home/index.js";
import Header from "./components/Header";
import MyPokemons from "./pages/MyPokemons/index.js";
import Detalles from "./pages/Detalles/index.js";
import Error from "./pages/Error/index.js"

function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/my-pokemons" exact element={<MyPokemons />} />
        <Route path="/detalles/:pokemon" exact element={<Detalles />} />
        <Route path="/404" exact element={<Error/>} />
      </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </ContextProvider>
  );
}

export default App;
