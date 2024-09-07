import { Provider } from "react-redux";
import { RouterProvider } from "./context/Router";
import { store } from "./redux/store";

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider />
      </Provider>
    </>
  );
};
