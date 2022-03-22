import React from 'react';
import {Divider,Typography,Row,Col} from 'antd';
import styles from './BusinessPartners.module.css';

import image1 from '../../assets/images/microsoft-80658_640.png';
import image2 from '../../assets/images/icon-720944_640.png';
import image3 from '../../assets/images/follow-826033_640.png';
import image4 from '../../assets/images/facebook-807588_640.png';

const resImage = [
    {src:image1},
    {src:image2},
    {src:image3},
    {src:image4}
]

export const BusinessPartners : React.FC = ()=>{
    return(
        <div className={styles.content}>
            <Divider orientation="left">
                <Typography.Title level={3}>合作企业</Typography.Title>
            </Divider>
            <Row>
                {resImage.map((item,index)=>
                    <Col span={6} key={`image-src${index}`}>
                        <img 
                            src={item.src} alt=''
                            style={{
                                width:'80%',
                                marginLeft:'auto',
                                marginRight:'auto',
                                display:'block'
                            }}      
                        />
                    </Col>
                )}
            </Row>
        </div>
    )
}