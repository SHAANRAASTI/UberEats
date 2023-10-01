import { StyleSheet, View, FlatList } from 'react-native';
import RestaurantItem from "../../components/RestaurantItem";
import restaunrants from "../../../assets/data/restaurants.json"
export default function HomeScreen() {
    return (
        <View style={styles.page}>
            <FlatList
                data={restaunrants}
                renderItem={({ item }) => <RestaurantItem restaunrant={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
    }

});
