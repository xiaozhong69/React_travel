import React, { useEffect } from 'react';
import styles from './SearchPage.module.css';
import { Header, Footer, FilterArea, ProductList } from '../../components';
import { Spin } from 'antd';
import { SearchProduct } from '../../redux/productSearch/slice';
import { useSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';

interface MatchLoaction {
    keywords: string
}

export const SearchPage: React.FC = () => {
    
    const loading = useSelector(state=>state.productSearch.loading);
    const error = useSelector(state=>state.productSearch.error);
    const productList = useSelector(state=>state.productSearch.data);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(SearchProduct());
    },[])

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
                {/* 分类过滤器 */}
                <div className={styles['product-list-container']}>
                    <FilterArea />
                </div>

                {/* 产品列表 */}
                <div className={styles['product-list-container']}>
                    <ProductList
                        data={productList}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}