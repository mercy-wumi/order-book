import Dashboard from "./pages/Dashboard";
import BookContextProvider from './contexts/BookContext'


export default function App() {
  return (
    <BookContextProvider>
      <div>
        <Dashboard />
      </div>
    </BookContextProvider>
  )
}