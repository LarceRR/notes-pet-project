import MainPage from "./pages/MainPage"
import DataPage from "./pages/DataPage"
import WeatherPage from "./pages/WeatherPage"
import CamsPage from "./pages/CamsPage"
import SecurityPage from "./pages/SecurityPage"
import CalendarPage from "./pages/CalendarPage"
import AlarmPage from "./pages/AlarmPage"
import MessangerPage from "./pages/MessangerPage"
import NotesPage from "./pages/NotesPage/NotesPage"
import NotFoundPage from "./pages/NotFoundPage"
import NavbarLayout from "./components/NavbarLayout/NavbarLayout"
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom"
import UserNotesExpandedList from "./pages/NotesPage/NotesComponents/UserNotesExpandedList/UserNotesExpandedList"

const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<NavbarLayout />}>
            <Route index element={<MainPage />}/>
            <Route path="data" element={<DataPage />}/>
            <Route path="weather" element={<WeatherPage />}/>
            <Route path="cams" element={<CamsPage />}/>
            <Route path="security" element={<SecurityPage />}/>
            <Route path="calendar" element={<CalendarPage />}/>
            <Route path="alarm" element={<AlarmPage />}/>
            <Route path="messanger" element={<MessangerPage />}/>
            <Route path="notes/*" element={<NotesPage />}>
                <Route path=":id" element={<UserNotesExpandedList />}/>
            </Route>
            <Route path="*" element={<NotFoundPage />}/>
        </Route>
    ))
    return (
        <RouterProvider router={router} />
    );
};

export default App;