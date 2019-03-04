import React, { Fragment, useState, useEffect } from 'react';
import { List, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

const Name = ({ match }) => {
	const [ cartoons, setCartoons ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getCartoonsName = async () => {
		try {
			let { data } = await axios.get(`/${match.params.name}`);

			console.log(data);

			setLoading(false);
			return setCartoons(data.data);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		getCartoonsName();
	}, []);

	return (
		<Fragment>
			<h1>{match.params.name}</h1>
			<List
				bordered
				size="large"
				className="cartoon-list"
				dataSource={cartoons}
				loading={loading}
				renderItem={(item) => (
					<Skeleton avatar title={false} loading={item.loading} active>
						<List.Item>
							<Link to={`/${match.params.name}/${item.link.split('/')[4]}`}>{item.name}</Link>
							<span>{item.date}</span>
						</List.Item>
					</Skeleton>
				)}
			/>
		</Fragment>
	);
};

export default Name;
