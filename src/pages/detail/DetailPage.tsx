import React, { useState, useEffect } from 'react';
import { RouteComponentProps, useParams } from 'react-router-dom';
import axios from 'axios';
import { Spin, Row, Col, DatePicker,Divider,Typography } from 'antd';
import styles from './DetailPage.module.css';
import { Header, Footer, ProductIntro } from '../../components';

interface MatchParams {
    touristRouteId: string;
}
interface ErrorType {
    message: any;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = () => {
    const { touristRouteId } = useParams<MatchParams>();
    const [loading, setLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(`https://www.fastmock.site/mock/ef752190847359716b80418509711210/api/touristRoutes`);
                setProduct(data);
                setLoading(false);
            } catch (error) {
                const u = error as ErrorType;
                setError(u.message);
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) {
        return <Spin
            size='large'
            style={{
                marginTop: 200,
                marginBottom: 200,
                marginLeft: "auto",
                marginRight: "auto",
                width: "100%"
            }}
        />
    }

    if (error) {
        return <div>网站出错：{error}</div>
    }

    return (
        <>
            <Header />
            <div className={styles['page-content']}>
                {/* 产品简介 与 日期选择 */}
                <div className={styles['product-intro-container']}>
                    <Row>
                        <Col span={13}>
                            <ProductIntro
                                title={product.title}
                                shortDescription={product.description}
                                price={product.originalPrice}
                                coupons={product.coupons}
                                points={product.points}
                                discount={product.price}
                                rating={product.rating}
                                pictures={product.touristRoutePictures.map((p) => p.url)}
                            />
                        </Col>
                        <Col span={11}>
                            <DatePicker
                                open
                                style={{ marginTop: 20 }}
                            />
                        </Col>
                    </Row>
                </div>

                {/* 锚点菜单 */}
                <div className={styles['product-detail-anchor']}></div>

                {/* 产品特色 */}
                <div id='feature' className={styles['product-detail-container']}>
                    <Divider orientation='center'>
                        <Typography.Title level={3} type='warning'>产品特色</Typography.Title>
                    </Divider>
                    <div
                        dangerouslySetInnerHTML={{__html:product.features}}
                        style={{margin:50}}
                    ></div>
                </div>

                {/* 费用 */}
                <div id='fees' className={styles['product-detail-container']}>
                <Divider orientation='center'>
                        <Typography.Title level={3} type='warning'>费用</Typography.Title>
                    </Divider>
                    <div
                        dangerouslySetInnerHTML={{__html:product.fees}}
                        style={{margin:50}}
                    ></div>
                </div>

                {/* 预定须知 */}
                <div id='notes' className={styles['product-detail-container']}>
                <Divider orientation='center'>
                        <Typography.Title level={3} type='warning'>预定须知</Typography.Title>
                    </Divider>
                    <div
                        dangerouslySetInnerHTML={{__html:product.notes}}
                        style={{margin:50}}
                    ></div>
                </div>

                {/* 商品评价 */}
                <div id='comments' className={styles['product-detail-container']}></div>
            </div>
            <Footer />
        </>
    )
}