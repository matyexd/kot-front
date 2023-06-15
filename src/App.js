import { RenderRoutes, ROUTES } from "./routes/routes";
import { useHistory } from "react-router-dom";
import { useSelector } from "./hooks/mobxStoreHooks/useSelector";
import React from "react";

const useConstructor = (callBack = () => {}) => {
  const hasBeenCalled = React.useRef(false);
  if (hasBeenCalled.current) return;
  callBack();
  hasBeenCalled.current = true;
};

function App() {
  const history = useHistory();
  const authStore = useSelector((store) => store.authStore);

  useConstructor(() => {
    authStore.setHistory(history);
  });

  return (
    <div className="App">
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
