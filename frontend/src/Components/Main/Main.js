import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Card, Icon, Spin, BackTop } from 'antd';
import { Link } from 'react-router-dom';
import axios from '../../utils/axios';

const { Meta } = Card;

const renderLoading = (
    <div className="spin-container">
        <Spin />
    </div>
);

const Main = () => {
    const [cartoons, setCartoons] = useState([]);
    const [loading, setLoading] = useState(true);

    const getCartoons = async () => {
        try {
            let { data } = await axios.get('/getAll');

            setLoading(false);
            return setCartoons(data.data);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getCartoons();
    }, []);

    return (
        <Fragment>
            <BackTop />
            <h1>อัพเดตล่าสุด</h1>
            <Row gutter={16}>
                {loading && renderLoading}
                {cartoons.map((cartoon, index) => (
                    <Col key={`col-${index}`} span={12} style={{ marginBottom: 16 }}>
                        <Card
                            className="card-cartoon"
                            cover={
                                <Link to={`/${cartoon.link}`}>
                                    <img alt={cartoon.name} src={cartoon.img} />
                                </Link>
                            }
                            actions={[<Icon type="star" />, <Icon type="share-alt" />]}
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
