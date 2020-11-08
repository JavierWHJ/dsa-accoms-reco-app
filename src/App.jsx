import 'antd/dist/antd.css';
import './App.css';
import CarouselComponent from './components/CarouselComponent';

import { Layout, Menu, Button } from 'antd';
import LogoComponent from './components/LogoComponent';

const { Header, Content, Footer } = Layout;

function App() {
    return (
        <Layout className="layout">
            <Header style={{padding: "0px"}}>
                <LogoComponent/>
                <Menu mode="horizontal" style={{textAlign: "right"}}>
                    <Menu.Item key="1">Accomodations</Menu.Item>
                    <Menu.Item key="2">Bookings</Menu.Item>
                    <Menu.Item key="3"></Menu.Item>
                    <Menu.Item key="4">Sign up</Menu.Item>
                    <Menu.Item key="5"><Button type="primary">Sign in</Button></Menu.Item>
                </Menu>
            </Header>
            <Content>
                <CarouselComponent/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>AccomsFinder ©2020</Footer>
        </Layout>
    );
}

export default App;
