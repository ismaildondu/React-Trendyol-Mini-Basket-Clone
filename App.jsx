import { ReactFragment } from "react";
import Container from "./components/frame/Container";
import Header from "./components/frame/Header";
import AddItem from "./components/frame/AddItem";

import BasketContext from "./components/frame/ContextProvider";
function App() {
  return (
    <BasketContext>
      <Container>
        <Header />
        <AddItem />
      </Container>
    </BasketContext>
  );
}

export default App;
