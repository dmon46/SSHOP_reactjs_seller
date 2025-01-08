import React, { useState } from 'react';
import { Badge, Dropdown, Space, Table, Tag } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { TableRowSelection } from 'antd/es/table/interface';
import { DownOutlined as DownIcon } from '@ant-design/icons';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tag: string;
}

const columns: TableProps<DataType>['columns'] = [
    Table.SELECTION_COLUMN,
    { title: 'Product', dataIndex: 'name', key: 'name', },
    Table.EXPAND_COLUMN,
    { title: 'SKU', dataIndex: 'age', key: 'age', },
    { title: 'Quantity', dataIndex: 'address', key: 'address', },
    { title: 'Retail Price', dataIndex: 'address', key: 'retail_price', },
    { title: 'Sales', dataIndex: 'sales', key: 'sales', },
    { title: 'Updated On', dataIndex: 'updatedOn', key: 'updatedOn', },
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
        title: '',
        key: 'action',
        render: () => (
            //_, record
            <Space size="middle" direction='vertical'>
                <a>Edit</a>
                <a>Deactivate</a>
                <Dropdown menu={{ items }}>
                    <a> <DownIcon /> </a>
                </Dropdown>
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
        age: 0,
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

interface ExpandedDataType {
    key: React.Key;
    date: string;
    name: string;
    upgradeNum: string;
}

const items = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
];

const expandData = Array.from({ length: 3 }).map<ExpandedDataType>((_, i) => ({
    key: i.toString(),
    date: '2014-12-24 23:12:00',
    name: 'This is production name',
    upgradeNum: 'Upgraded: 56',
}));

const expandColumns: TableColumnsType<ExpandedDataType> = [
    { title: 'SKU', dataIndex: 'date', key: 'date' },
    { title: 'Quantity', dataIndex: 'name', key: 'name' },
    { title: 'Retail Price', dataIndex: 'retailPrice', key: 'retailPrice' },
    { title: 'Sales', dataIndex: 'sales', key: 'sales' },
    {
        title: 'Status',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />,
    },
    {
        title: '',
        key: 'actionV2',
        render: () => (
            <Space size="middle">
                <a>Edit</a>
                <a>Deactivate</a>
            </Space>
        ),
    },
];

const expandedRowRender = () => (
    <Table<ExpandedDataType>
        columns={expandColumns}
        dataSource={expandData}
        pagination={false}
    />
);

const ProductList = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <Table<DataType>
            columns={columns}
            dataSource={data}
            rowSelection={rowSelection}
            expandable={{ expandedRowRender }}
        />
    );
};

export default ProductList;