import { View, Text, Image } from 'react-native';
import restaurants from "../../../assets/data/restaurants.json"
import styles from './styles';
const restaunrant = restaurants[0];
("");
const RestaurantHeader = ({ restaunrant }) => {
    return (
        <View styles={styles.page}>
            <Image source={{ uri: restaunrant.image }} style={styles.image} />
            <View style={styles.container}>
                <Text style={styles.title}>{restaunrant.name}</Text>
                <Text style={styles.subtitle}>
                    $ {restaunrant.deliveryFee} $#8226; {restaunrant.minDeliveryTime}-
                    {restaunrant.maxDeliveryTime} minutes
                </Text>
                <Text style={styles.menuTitle}>Menu</Text>
            </View>
        </View >
    );
};

export default RestaurantHeader;