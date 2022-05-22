import React from "react";
import {
    View,
    FlatList,
    Dimensions,
    Animated,
    StyleSheet,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function Slider(props) {
    const { images } = props;

    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);

    const AnimatedView = ({ itm, i, opacity }) => {
        return itm ? (
            <Animated.View
                key={i}
                style={{
                    opacity,
                    height: 10,
                    width: 10,
                    backgroundColor: "#595959",
                    margin: 8,
                    borderRadius: 5,
                }}
            />
        ) : (
            <View></View>
        );
    };

    const SliderImage = (props) => {
        console.log(props)
        return props.url ? (
            <View style={{ ...styles.cardView }}>
                <Image
                    source={{ uri: `` }}
                    style={{ ...styles.ImgStyle }}
                />
            </View>
        ) : (
            <View></View>
        );
    };

    return (
        <View>
            <FlatList
                data={images}
                keyExtractor={(item, _id) => "key" + _id}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <SliderImage item={item} />
                }}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ])}
            />
            <View style={styles.dotView}>
                {images.map((itm, i) => {
                    let opacity = position.interpolate({
                        inputRange: [i - 1, i, i + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp",
                    });
                    return <AnimatedView itm={itm} i={i} opacity={opacity} />;
                })}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    dotView: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
    },
});