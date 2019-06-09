import React, { Fragment, useState, useEffect } from 'react';
import { List, BackTop } from 'antd';
import axios from '../../utils/axios';

const Chapter = ({ match }) => {
    const [cartoons, setCartoons] = useState([]);
    const [loading, setLoading] = useState(true);

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
        <Fragment>
            <BackTop />
            <List
                bordered
                loading={loading}
                header={
                    <Fragment>
                        <h1 className="ant-card-meta-title">
                            {match.params.name}
                            <small> ตอน : {match.params.chapter}</small>
                        </h1>
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
        </Fragment>
    );
};

export default Chapter;
