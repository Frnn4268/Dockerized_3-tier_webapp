import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from "axios";
import './App.css';

const queryClient = new QueryClient();

function CurrentTime(props) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [props.api],
    queryFn: () =>
      axios
        .get(`${props.api}`)
        .then((res) => res.data),
  });

  if (isLoading) return `Loading ${props.api}... `;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      <p>---</p>
      <p>API: {data.api}</p>
      <p>Data from DB: {JSON.stringify(data)}</p>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

function TableData(props) {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: [props.api],
    queryFn: () =>
      axios
        .get(`${props.api}`)
        .then((res) => res.data),
  });

  if (isLoading) return `Loading ${props.api}... `;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      <p>---</p>
      <h2>Data from 'example' table</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ textAlign: "center", listStyleType: "none" }}>
            <p>Name: {item.name}</p>
            <p>Value: {item.value}</p>
          </li>
        ))}
      </ul>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Hello, we're using the Minimal 3-Tier Web Application👋</h1>
      <CurrentTime api="/api/golang/" />
      <CurrentTime api="/api/node/" />
      <TableData api="/api/seed-node/" /> 
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
