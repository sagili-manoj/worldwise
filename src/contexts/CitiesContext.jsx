import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Load from localStorage on mount
  useEffect(() => {
    dispatch({ type: "loading" });
    try {
      const data = JSON.parse(localStorage.getItem("cities")) || [];
      dispatch({ type: "cities/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "Failed to load cities from localStorage",
      });
    }
  }, []);

  const getCity = useCallback(
    function getCity(id) {
      dispatch({ type: "loading" });
      const foundCity = cities.find((city) => city.id === Number(id));
      if (foundCity)
        dispatch({ type: "city/loaded", payload: foundCity });
      else
        dispatch({
          type: "rejected",
          payload: "City not found",
        });
    },
    [cities]
  );

  function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const cityWithId = { ...newCity, id: Date.now() };
      const updatedCities = [...cities, cityWithId];
      localStorage.setItem("cities", JSON.stringify(updatedCities));
      dispatch({ type: "city/created", payload: cityWithId });
    } catch {
      dispatch({
        type: "rejected",
        payload: "Error saving new city to localStorage",
      });
    }
  }

  function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      const updatedCities = cities.filter((city) => city.id !== id);
      localStorage.setItem("cities", JSON.stringify(updatedCities));
      dispatch({ type: "city/deleted", payload: id });
    } catch {
      dispatch({
        type: "rejected",
        payload: "Error deleting city from localStorage",
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
