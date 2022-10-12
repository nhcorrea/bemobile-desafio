import { ContainerHome } from "./styles";

import Header from "../../components/Header";
import TitleHeader from "../../components/TitleHeader";
import Search from "../../components/Search";
import Table from "../../components/Table";

import * as Animatable from 'react-native-animatable';

export default function Home() {
    return (
            <ContainerHome>

                <Animatable.View
                    delay={300}
                    animation="fadeInDown"
                >
                    <Header />
                </Animatable.View>

                <Animatable.View
                    delay={300}
                    animation="fadeInLeft"
                >
                    <TitleHeader />
                    <Search />
                </Animatable.View>
                
                <Animatable.View
                    style={{ flex: 1 }}
                    delay={300}
                    animation="fadeInUp"
                >
                   <Table />
                </Animatable.View>

            </ContainerHome>
    );
}