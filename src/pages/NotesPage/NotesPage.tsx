// import { Button, ConfigProvider, Space } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './NotesPage.css'
import UserNotesList from './NotesComponents/UserNotesList/UserNotesList';
import { NavLink, Outlet, useLocation} from 'react-router-dom';
import { Input, Modal, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';

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
    const [isModalOpen, setModalOpen] = useState<boolean>(false)
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false)
    const [okModalButtonText, setOkModalButtonText] = useState<string>('Create')

    const showModal = () => {
        setModalOpen(true)
    }

    const handleOk = () => {
        setConfirmLoading(true)
        setOkModalButtonText('Saving...')
        setTimeout(() => {
            setOkModalButtonText('Create')
            setModalOpen(false)
            setConfirmLoading(false)
        }, 2000);
    }

    const handleCancel = () => {
        setModalOpen(false)
    }

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
                        <span onClick={showModal}>or create one</span>
                        <Modal
                            title={
                                <div className='ModalTitle'>
                                    <span>Create a new note</span>
                                    <span>Press ESC to close</span>
                                </div>}
                            okText={okModalButtonText}
                            open={isModalOpen}
                            destroyOnClose={true}
                            keyboard={true}
                            confirmLoading={confirmLoading}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            >
                                <div className='ModalBody'>
                                    <div>
                                        <span>Theme</span>
                                        <Input onChange={(e) => console.log(e.target.value)} placeholder='theme of note (max length is 50 symbols' maxLength={50}/>
                                    </div>
                                    <br></br>
                                    <div className='notes-create-rate'>
                                        <div>
                                            <span>Note</span>
                                            <TextArea onChange={(e) => console.log(e.target.value)} placeholder='describe your note here'/>
                                        </div>
                                        <Rate onChange={(value) => console.log(value)} style={{color: 'black'}}/>
                                    </div>
                            </div>
                        </Modal>
                    </div>
                }
            </div>
        </div>
    );
};

export default NotesPage;