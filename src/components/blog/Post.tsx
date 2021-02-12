// react
import React from 'react';
// third-party
import classNames from 'classnames';
// application
import AppImage from '~/components/shared/AppImage';
import AppLink from '~/components/shared/AppLink';
import CommentsList from '~/components/blog/CommentsList';
import Pagination from '~/components/shared/Pagination';
import ShareLinks from '~/components/shared/ShareLinks';
import { ArrowRoundedLeft7x11Svg, ArrowRoundedRight7x11Svg } from '~/svg';
// data
import dataBlogComments from '~/data/blogComments';
import dataBlogPosts from '~/data/blogPosts';
import { Tabs } from 'antd';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { TabPane } = Tabs;

interface Props extends React.HTMLAttributes<HTMLDivElement> { }

function Post(props: Props) {
    const { className, ...rootProps } = props;

    const rootClasses = classNames(className);

    return (
        <div className={rootClasses} {...rootProps}>
            <div className="post-view__card post">
                <div className="post__body typography">
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab="PLATOS" key="1">                        
                            <Card
                                style={{ width: 300 }}
                                cover={
                                <img
                                    alt="example"
                                    src="https://cdn.cuponidad.pe/images/Deals/Buffet-Bolivar4.jpg"
                                />
                                }
                                actions={[
                                <SettingOutlined key="setting" />,
                                <EditOutlined key="edit" />,
                                <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="POLLITO CHINEX"
                                description="Su pollaso + sus papas y su seca ...S/ 75.00 "
                                />
                            </Card>
                        </TabPane>
                        <TabPane tab="COMBOS" key="2">
                        COMBOS
                        </TabPane>
                        <TabPane tab="BEBIDAS" key="3">
                        BEBIDAS
                        </TabPane>
                    </Tabs>
                </div>
                {/* <div className="post__body typography">
                    <p>
                        Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit
                        quis magna placerat lobortis
                        eget pharetra magna. Nulla tristique sollicitudin turpis, eget maximus risus faucibus non. Nulla
                        vestibulum ipsum risus,
                        vitae maximus nunc bibendum quis.
                    </p>
                    <p>
                        Raesent eu consequat nibh. Quisque ullamcorper, augue eu fringilla sodales, leo metus volutpat
                        risus, at suscipit ipsum diam
                        eget sem. Maecenas dictum elit in enim molestie, vel sollicitudin erat ultricies. Sed risus
                        tellus, molestie finibus dui quis,
                        suscipit consequat ex.
                    </p>
                    <blockquote>
                        <p>
                            Sed a dictum elit. In iaculis porttitor luctus. Maecenas ultricies dolor et semper placerat.
                            Proin at lectus felis.
                        </p>
                        <p><cite>John Mcarthy</cite></p>
                    </blockquote>
                    <p>
                        Vivamus in nisi at turpis rhoncus feugiat. Mauris scelerisque non ante et ultrices. Donec sit
                        amet sem lobortis,
                        ullamcorper felis at, finibus sem. Curabitur tincidunt neque nunc.
                    </p>
                    <h2>Nam Eget Blandit Diam</h2>
                    <p>
                        Quisque semper magna eget libero maximus, a sollicitudin nunc hendrerit. Cras efficitur, ante
                        vitae fringilla rutrum, mi tortor
                        dapibus metus, in egestas metus erat sit amet orci. Ut faucibus non ante dapibus efficitur. Nam
                        eget blandit diam, imperdiet
                        condimentum neque. Donec risus nisi, aliquet a commodo ac, elementum vitae leo.
                    </p>
                    <p>
                        Vestibulum sagittis justo sit amet nisl semper, et pulvinar elit maximus. Morbi interdum velit
                        quis magna placerat lobortis
                        eget pharetra magna.
                    </p>
                    <p>
                        <strong>Nulla fringilla:</strong>
                        {' '}
                        <AppLink href="/">Donec aliquet at felis et dignissim</AppLink>
                    </p>

                    <figure>
                        <AppLink href="/">
                            <AppImage src="/images/posts/post-3.jpg" />
                        </AppLink>
                        <figcaption>Nunc viverra, dui nec commodo dignissim, libero arcu.</figcaption>
                    </figure>

                    <p>
                        Vestibulum non varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet
                        velit. Suspendisse sed velit nec
                        ante facilisis pharetra.
                    </p>
                    <p>
                        Phasellus ut elit vestibulum, dignissim mi non, suscipit ex. Praesent eu consequat nibh. Quisque
                        ullamcorper, augue eu
                        fringilla sodales, leo metus volutpat risus,
                        {' '}
                        <AppLink href="/">at suscipit ipsum diam eget sem</AppLink>
                        .
                        Maecenas dictum elit in enim
                        molestie, vel sollicitudin erat ultricies. Sed risus tellus, molestie finibus dui quis, suscipit
                        consequat ex.
                    </p>
                    <hr />
                    <h2>Nunc Dapibus Varius Ligula</h2>
                    <p>
                        Maecenas ultrices arcu ut feugiat semper. Praesent dictum tincidunt justo, ac tincidunt ante
                        fermentum at. Vestibulum non
                        varius lectus. Cras vel elit id ligula laoreet imperdiet. Mauris quis laoreet velit.
                        Suspendisse sed velit nec ante facilisis
                        pharetra. Duis vitae fermentum elit. Integer ac mattis elit.
                    </p>
                    <p>
                        Mauris scelerisque non ante et ultrices. Donec sit amet sem lobortis:
                    </p>
                    <ol>
                        <li>
                            Duis
                            {' '}
                            <strong>finibus imperdiet ultricies</strong>
                            . Donec vel pretium turpis. In auctor
                            euismod posuere.
                        </li>
                        <li>
                            Praesent dictum tincidunt justo, ac tincidunt ante fermentum at. Vestibulum non varius
                            lectus. Cras vel elit id ligula
                            laoreet imperdiet.
                        </li>
                        <li>
                            <strong>In iaculis porttitor luctus</strong>
                            . Maecenas ultricies dolor et semper
                            placerat. Proin at lectus felis. Quisque
                            dapibus auctor justo id dictum.
                        </li>
                    </ol>
                    <p>
                        Ut faucibus non ante dapibus efficitur. Nam eget blandit diam, imperdiet condimentum neque.
                        Donec risus nisi, aliquet a
                        commodo ac, elementum vitae leo.
                    </p>
                </div> */}

             
                <div className="post__author">
                    <div className="post__author-avatar">
                        <AppImage src="/images/avatars/avatar-4.jpg" />
                    </div>
                    <div className="post__author-info">
                        <div className="post__author-name">
                            OFERTA DEL DIA
                        </div>
                        <div className="post__author-about">
                            Aliquam ullamcorper elementum sagittis. Etiam lacus lacus, mollis in mattis in, vehicula eu
                            nulla. Nulla nec tellus
                            pellentesque.
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Post;
