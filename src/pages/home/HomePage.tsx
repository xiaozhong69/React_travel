import React, { Component } from 'react';
import { Row, Col, Typography, Spin } from 'antd';
import { Header, Footer, SideMenu, Carousel, ProductCollection, BusinessPartners } from '../../components';

import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css';
import { withTranslation, WithTranslation } from 'react-i18next';
import axios from 'axios';

interface State {
	productList: any[],
	loading: boolean,
	error: null | string
}

interface CatchType {
	message: any
}

class HomePageComponent extends Component<WithTranslation, State> {

	constructor(props) {
		super(props);
		this.state = {
			productList: [],
			loading: true,
			error: null
		}
	}

	componentDidMount() {
		try {
			axios
				.get("https://www.fastmock.site/mock/ef752190847359716b80418509711210/api/productCollections")
				.then(res => {
					console.log(res.data[0].touristRoutes);
					this.setState({
						productList: res.data,
						loading: false,
						error: null
					});
				})
		} catch (error) {
			const u = error as CatchType;
			this.setState({
				error: u.message,
				loading: false
			})
		}

	}

	render() {
		const { t } = this.props;
		const { productList, loading, error } = this.state;

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

		if(error){
			return <div>网站出错：{error}</div>
		}
		
		return (
			<>
				<Header />
				{/* 页面内容 */}
				<div className={styles["page-content"]}>
					<Row style={{ marginTop: 20 }}>
						<Col span={6}>
							<SideMenu />
						</Col>
						<Col span={18}>
							<Carousel />
						</Col>
					</Row>
					<ProductCollection
						title={<Typography.Title level={3} type="danger">{t("home_page.hot_recommended")}</Typography.Title>}
						sideImage={sideImage}
						products={productList[0].touristRoutes}
					/>
					<ProductCollection
						title={<Typography.Title level={3} type="warning">{t("home_page.new_arrival")}</Typography.Title>}
						sideImage={sideImage2}
						products={productList[1].touristRoutes}
					/>
					<ProductCollection
						title={<Typography.Title level={3} type="success">{t("home_page.domestic_travel")}</Typography.Title>}
						sideImage={sideImage3}
						products={productList[2].touristRoutes}
					/>
					<BusinessPartners />
				</div>
				<Footer />
			</>
		)
	}
}

export const HomePage = withTranslation()(HomePageComponent);