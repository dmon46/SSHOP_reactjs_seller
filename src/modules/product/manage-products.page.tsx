import { Flex, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import ProductList from "../../components/product/product.list";

const ManageProducts = () => {
    const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();

    return (
        <>
            <Flex>
                <h1 className='dmon-title-header'>Manage Products</h1>
            </Flex>
            <Content
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 400,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <ProductList></ProductList>
            </Content>
        </>
    );
};

export default ManageProducts;