// import { Button, ConfigProvider, Space } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './NotesPage.css'
import UserNotesList from './NotesComponents/UserNotesList/UserNotesList';
import { NavLink, Outlet, useLocation} from 'react-router-dom';

export declare interface User {
    id: number
    name: string
    username: string
    email: string
    address: {
        street?: string
        suite?: string
        city?: string
        zipcode?: string
        geo?: {
            lat?: number
            lng?: number
        }
    }
    phone: string
    website?: string
    company?: {
        name?: string
        catchPhrase?: string
        bs?: string
    }
}

const NotesPage = () => {

    const [userNotes, setUserNotes] = useState<User[]>()

    useEffect(() => {
        axios.get<User[]>('https://jsonplaceholder.typicode.com/users').then((resp) => {
            setUserNotes(resp.data)
            if (userNotes) {
                console.log(userNotes)
            }
            
        })
    }, [])

    const location = useLocation()
    console.log(location);
    

    return (
        <div className='notes'>
            <div className='notes-block'>
                {userNotes ? userNotes?.map(user => 
                    <NavLink key={user.id} to={user.id.toString()} className={({isActive}) => isActive ? 'notes-active-note' : ''}><UserNotesList key={user.id} user={user}/></NavLink>
                ) 
                : ''
                }
            </div>
            <div className='notes-block'>
                {location.pathname !== '/notes' ? <Outlet context={{users: userNotes}}/> : 
                    <div className='notes-waiting'>
                        <img src='/src/assets/icons/note-medical.svg'></img>
                        <span>Choose note</span>
                        <span>or create one</span>
                    </div>
                }
            </div>
        </div>
    );
};

export default NotesPage;