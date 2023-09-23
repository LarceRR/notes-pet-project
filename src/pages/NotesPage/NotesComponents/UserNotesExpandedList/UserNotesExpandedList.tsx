import { useEffect, useState } from 'react';
import './UserNotesExpandedList.css'
import { useOutletContext, useParams } from 'react-router-dom';
import axios from 'axios';
import { User } from '../../NotesPage';
import { Input, Modal, Rate, Table } from 'antd';
import Loading from '../../../../components/Loading/Loading';
import TextArea from 'antd/es/input/TextArea';

export declare interface UserNotes {
    body: string
    id: number
    title: string
    userId: number
}

type Users = {
    users: User[]
}

const UserNotesExpandedList = () => {
    const { users } = useOutletContext<Users>()
    const [notes, setNotes] = useState<UserNotes[]>()
    const { id } = useParams<string>()
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
    
    function randomIntFromInterval(min: number, max: number) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    useEffect(() => {
        axios.get<UserNotes[]>('https://jsonplaceholder.typicode.com/posts?userId='+id).then((resp) => {
            setNotes(resp.data)
        })
    }, [id])

    const columns: any = [
        {
            title: 'Note',
            dataIndex: 'title',
            render: (text: string, record: any) => 
                <div className='note-table-title'>
                    <span>{text}</span>
                    <span>{record.body}</span>
                </div>,
            width: '900px',
            minWidth: '600px'
        },
        {
            title: 'Priority',
            render: (text: string) => <Rate style={{color: 'black', flexWrap: 'nowrap', display: 'flex'}} defaultValue={randomIntFromInterval(0,5)} />,
            width: '200px'
        },
        {
            title: 'Date',
            render: (text: string) => <a>02.03.2023</a>
        },
        {
            title: 'Actions',
            render: (text: string) => {
                return (
                    <div className='notes-table-actions'>
                        <img src='/src/assets/icons/pencil.svg'></img>
                        <img src='/src/assets/icons/trash-can.svg'></img>
                    </div>
                )
            }
        },
    ]
    
    return (
        <div>
            <div className='notes-expanded-header'>
                <div>
                    <img src={`https://api.dicebear.com/7.x/avataaars-neutral/png?seed=${id}`}></img>
                    <div className='notes-expanded-header-username'>
                        <span>{users ? users[Number(id)-1].name : ''}</span>
                        <span>Last note 5 days ago</span>
                    </div>
                </div>
                <button onClick={showModal}>
                    Create new note
                    <img src='/src/assets/icons/plus.svg'></img>
                </button>
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
            <div className='notes-expanded-block'>
                <div>
                    {notes != undefined ? 
                        notes?.length > 0 ?
                            <Table columns={columns} dataSource={notes}/>
                            :
                                <Loading />  
                        
                    : <Loading /> }
                </div>
            </div>
        </div>
    );
};

export default UserNotesExpandedList;