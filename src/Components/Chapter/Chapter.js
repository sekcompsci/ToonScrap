import React, { Fragment, useState, useEffect } from 'react';
import { List } from 'antd';
import axios from '../../utils/axios';

const Chapter = ({ match }) => {
	const [ cartoons, setCartoons ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getCartoonChapter = async () => {
		try {
			let { data } = await axios.get(`/${match.params.name}/${match.params.chapter}`);

			console.log(data);

			setLoading(false);
			return setCartoons(data.data);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		getCartoonChapter();
	}, []);

	return (
		<List
			bordered
			loading={loading}
			header={
				<Fragment>
					<b>{match.params.name}</b>
					<span> ตอน : {match.params.chapter}</span>
				</Fragment>
			}
			dataSource={cartoons}
			className="cartoon-img"
			renderItem={(item, index) => (
				<List.Item>
					<img src={item.img} alt={match.params.name + '/' + index} />
				</List.Item>
			)}
		/>
	);
};

export default Chapter;
