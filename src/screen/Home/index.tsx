import Header from "../../components/Header";
import Title from "../../components/Title";
import Search from "../../components/Search";
import { ViewBody } from "./styles";
import TableHeader from "../../components/TableHeader";
import TableRows from "../../components/TableRows";
import * as Animatable from 'react-native-animatable';

export default function Home() {
    return (
            <ViewBody>
                <Header />
                <Title />
                <Search />
                <TableHeader />
                <TableRows />
            </ViewBody>
    );
}