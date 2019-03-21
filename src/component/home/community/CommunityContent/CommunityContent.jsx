import React,{Component} from 'react'
import { List, Avatar, Icon,BackTop  } from 'antd';
import { communityContent } from '../../../../rooter/rootTable'
import CommunityBanner from './CommunityBanner/communityBanner'
import QueueAnim from 'rc-queue-anim';
import { OverPack } from 'rc-scroll-anim';

import './CommunityContent.scss'
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `wahaha ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'we like it!',
    content: 'hahahaxixixi',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
export default class CommunityContent extends Component{
render(){
  return(
    <div className={'communityContent'}>
      <CommunityBanner/>
     <div className={'ContentList'}>
       <List
         itemLayout="vertical"
         size="large"
         pagination={{
           pageSize: 10,
         }}
         dataSource={listData}
         footer={<div><b>wahaha</b> footer part</div>}
         renderItem={item => (

         <QueueAnim key="queue" className={'ListItemStyle'} type={'scaleBig'} leaveReverse >
             <List.Item
               key={item.title}
               actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
               extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
             >
               <List.Item.Meta
                 avatar={<Avatar src={item.avatar} />}
                 title={<a href={item.href}>{item.title}</a>}
                 description={item.description}
               />
               {item.content}
             </List.Item>
         </QueueAnim>
         )}
       />
     </div>
      <BackTop/>
    </div>
  )}}