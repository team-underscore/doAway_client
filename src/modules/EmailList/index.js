// {bucket_name}/emails

import React from 'react';

import { List } from 'antd';

const listData = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class EmailList extends React.Component {
  render() {
    return (
      <List
        itemLayout="vertical"
        size="small"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 8,
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
          >
            <List.Item.Meta
              title={<p href={item.href}>{item.title}</p>}
              description={item.description}
            />
          </List.Item>
        )}
      />)
  }
}

export default EmailList;
