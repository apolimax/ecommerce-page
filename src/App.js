import Header from "./components/Header";
import Preview from "./components/Preview";
import ProductInfo from "./components/ProductInfo";
import ContextProvider from "./context/cartContext";

import * as S from './styles';

function App() {
  return (
    <ContextProvider>
      <Header />
      <S.ProductContainer>
        <Preview />
        <ProductInfo />
      </S.ProductContainer>
    </ContextProvider>
  );
}

export default App;
