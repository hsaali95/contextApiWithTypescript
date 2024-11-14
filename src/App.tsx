import GlobalContext from "./store/context";
import AppRoutes from "./app-routes";

function App() {
  return (
    <>
      <GlobalContext>
        <AppRoutes />
      </GlobalContext>
    </>
  );
}

export default App;
