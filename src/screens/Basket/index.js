import { View, Text, StyleSheet, FlatList } from "react-native";
import BasketDishItem from "../../components/BasketDishitem";
import restaunrants from "../../../assets/data/restaurants.json";

const restaunrant = restaunrants[0];

const Basket = () => {
    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaunrant.name}</Text>

            <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 19 }}>
                Your items
            </Text>

            <FlatList data={restaunrant.dishes}
                renderItem={({ item }) => <BasketDishItem basketDish={item} />}
            
            />
            <View style={styles.separator} />

            <View style={styles.button}>
                <Text style={styles.buttonText}>Create Order</Text>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100",
        paddingVertical: 40,
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 10,
    },
    description: {
        color: "grey",
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 15,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
    },
    quantityContainer: {
        backgroundColor: "lightgray",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderColor: 3,
    }
});




export default Basket;