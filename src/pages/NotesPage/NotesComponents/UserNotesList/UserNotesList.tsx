import React from 'react';
import { User } from '../../NotesPage';
import './UserNotesList.css'

interface UserNotesListProps {
    user: User
}

const UserNotesList = ({user}: UserNotesListProps) => {
    return (
        <div className='user-notes-block'>
            <div>
                <img src={`https://api.dicebear.com/7.x/avataaars-neutral/png?seed=${user.id}`}></img>
            </div>
            <div>
                <div>
                    <span>{user.name}</span>
                    <span>5 days ago</span>
                    {user.id == 1 || user.id == 2 ? <img src='/src/assets/icons/thumbtack.svg'></img> : ''}
                </div>
                <div>
                    <span className='note-short'>
                        {user.company?.catchPhrase}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UserNotesList;