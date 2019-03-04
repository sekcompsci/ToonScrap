import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

const { Meta } = Card;

const Main = ({ history }) => {
	const [ cartoons, setCartoons ] = useState([]);

	const getCartoons = async () => {
		try {
			let { data } = await axios.get('/all');

			return setCartoons(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	const enterCartoon = (name) => () => history.push(`/${name}`);

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
							cover={
								<Link to={`/${cartoon.link}`}>
									<img alt={cartoon.name} src={cartoon.img} />
								</Link>
							}
							actions={[ <Icon type="star" />, <Icon type="notification" />, <Icon type="share-alt" /> ]}
						>
							<Meta title={<Link to={`/${cartoon.link}`}>{cartoon.name}</Link>} />
						</Card>
					</Col>
				))}
			</Row>
		</Fragment>
	);
};

export default Main;
