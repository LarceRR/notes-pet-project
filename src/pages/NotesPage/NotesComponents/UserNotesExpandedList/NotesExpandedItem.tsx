import React from 'react';
import { UserNotes } from './UserNotesExpandedList';
import RenderCounter from '../../../../components/RenderCounter';

interface NotesExpandedItemProps {
    note: UserNotes
}

const NotesExpandedItem = ({ note }: NotesExpandedItemProps) => {
    // console.log(note);
    return (
        
        <div>
            <div className='expanded-list-header'>
                <div className='expanded-list-note'>
                    <span>Theme</span>
                    <span>Lorem*1</span>
                </div>
                <div className='expanded-list-priority'>
                    <span>Theme</span>
                    <span>Lorem*1</span>
                </div>
                <div className='expanded-list-date'>
                    <span>Theme</span>
                    <span>Lorem*1</span>
                </div>
                <div className='expanded-list-actions'>
                    <span>Theme</span>
                    <span>Lorem*1</span>
                </div>
            </div>
        </div>
    );

};

export default NotesExpandedItem;