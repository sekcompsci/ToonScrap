import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import axios from '../../utils/axios';

const { Meta } = Card;

const Main = () => {
	const [ cartoons, setCartoons ] = useState([]);

	const getCartoons = async () => {
		try {
			let { data } = await axios.get('/all');

			return setCartoons(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCartoons();
	}, []);

	return (
		<Fragment>
			<h1>การ์ตูนวันนี้</h1>
			<Row gutter={16}>
				{cartoons.map((cartoon, index) => (
					<Col key={`col-${index}`} span={12} style={{ marginBottom: 16 }}>
						<Card
							className="card-cartoon"
							cover={<img alt={cartoon.name} src={cartoon.img} />}
							actions={[ <Icon type="star" />, <Icon type="notification" />, <Icon type="share-alt" /> ]}
						>
							<Meta title={cartoon.name} />
						</Card>
					</Col>
				))}
			</Row>
		</Fragment>
	);
};

export default Main;
