import Dashboard from "./pages/Dashboard";
import BookContextProvider from './contexts/BookContext'


export default function App() {
  return (
    <BookContextProvider>
      <div>
        <Dashboard />
        <div className="lg:hidden flex items-center justify-center h-screen max-w-[500px] text-center mx-auto px-8">
          <span className="text-md semibold">You have to be on a larger screen of atleast <span className="font-bold">1024px</span> to view this dashboard</span>
        </div>
      </div>
    </BookContextProvider>
  )
}