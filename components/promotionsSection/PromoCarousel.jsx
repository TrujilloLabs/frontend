import { Image, ScrollView, Text, View } from "react-native";

const PromoCarousel = ({ promos }) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-4 pl-4"
        >
            {promos.map((promo) => (
                <View key={promo.id} className="mr-4">
                    <Image
                        source={{ uri: promo.image }}
                        className="w-80 h-40 rounded-2xl"
                    />
                    <Text className="mt-2 font-semibold">{promo.title}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

export default PromoCarousel;
