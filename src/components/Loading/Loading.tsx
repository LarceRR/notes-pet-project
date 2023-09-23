import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd'
import './Loading.css'

const Loading = () => {

    const loadingIcon = <LoadingOutlined style={{fontSize: 24}} spin/>

    return (
        <div className='LoadingBody'>
            <Spin indicator={loadingIcon} />
        </div>
    );
};

export default Loading;