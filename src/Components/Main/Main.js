import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Card, Icon } from 'antd';

const { Meta } = Card;

const Main = () => {
	const [ cartoons, setCartoons ] = useState([]);

	const getCartoons = () => {
		return [
			{
				id: '1',
				name: 'test1',
				img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
			},
			{
				id: '2',
				name: 'test2',
				img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
			},
			{
				id: '3',
				name: 'test3',
				img: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
			}
		];
	};

	useEffect(() => {
		setCartoons(getCartoons);
	}, []);

	return (
		<Fragment>
			<h1>การ์ตูนวันนี้</h1>
			<Row gutter={16}>
				{cartoons.map((cartoon) => (
					<Col key={`col-${cartoon.id}`} span={12} style={{ marginBottom: 16 }}>
						<Card
							style={{ width: '100%' }}
							cover={<img alt={cartoon.name} src={cartoon.img} />}
							actions={[ <Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" /> ]}
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
