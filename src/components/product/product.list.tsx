import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tag: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Product',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'SKU',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Quantity',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Retail Prices',
        dataIndex: 'address',
        key: 'retail_price',
    },
    {
        title: 'Sales',
        dataIndex: 'sales',
        key: 'sales',
    },
    {
        title: 'Updated On',
        dataIndex: 'updatedOn',
        key: 'updatedOn',
    },
    {
        title: 'Status',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tag }) => {
            let color = 'green';
            //Product Status: DRAFT, REVIEWING, LIVE, DEACTIVATED, SUSPENDED, DELETED
            switch (tag) {
                case 'DRAFT':
                    color = 'geekblue';
                    break;
                case 'REVIEWING':
                    color = 'gold';
                    break;
                case 'LIVE':
                    color = 'green';
                    break;
                case 'DEACTIVATED':
                    color = 'geekblue';
                    break;
                case 'SUSPENDED':
                    color = 'volcano';
                    break;
                case 'DELETED':
                    color = 'volcano';
                    break;
            }
            return (
                <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                </Tag>
            );
        }
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle" direction='vertical'>
                <a>Edit</a>
                <a>Deactivated</a>
                <a>Copy</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tag: 'LIVE',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tag: 'REVIEWING',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tag: 'SUSPENDED',
    },
    {
        key: '4',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tag: 'DRAFT',
    },
];

const ProductList: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default ProductList;