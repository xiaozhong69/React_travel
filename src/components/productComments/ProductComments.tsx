import React from 'react';
import { Comment, List } from 'antd';

interface PropsType {
    data: {
        author: string,
        avatar: string,
        content: string,
        datetime: string
    }[]
}

export const ProductComments: React.FC<PropsType> = ({ data }) => {
    return (
        <List
            dataSource={data}
            itemLayout='horizontal'
            renderItem={item => {
                return (
                    <li>
                        <Comment
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                        />
                    </li>
                );
            }}
        >

        </List>
    )
}