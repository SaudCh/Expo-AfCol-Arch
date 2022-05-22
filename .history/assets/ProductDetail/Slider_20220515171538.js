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
    const { item } = props;
    const Img = item.AllPixList.split(",");
    Img.forEach(myFunction);

    function myFunction(item, index) {
        //item = item.split(":");
        if (item != "") {
            Img[index] = {
                indx: index,
                value: item,
            };
            //console.log(Img[index]);
        }
        //console.log(Img[index]);
    }

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

    return (
        <View>
            {/* <Text>{Img}</Text> */}
            <FlatList
                data={Img}
                keyExtractor={(item, indx) => "key" + indx}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <SliderImg url={item.value} />;
                }}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { x: scrollX } } },
                ])}
            />
            <View style={styles.dotView}>
                {Img.map((itm, i) => {
                    let opacity = position.interpolate({
                        inputRange: [i - 1, i, i + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp",
                    });
                    return <AnimatedView itm={itm} i={i} opacity={opacity} />;
                })}
            </View>
            {/* <SliderImg url={Img[3]} /> */}
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