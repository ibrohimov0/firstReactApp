import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/menuItems";
import { MENU_IMAGES } from "@/constants/menuImages";

export default function MenuScree() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme)
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const seperatorComp = <View style={styles.seperator}/>
    return (
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showktHeaderComponent={}
                // ListFooterComponent={}
                ListFooterComponentStyle={}
                renderItem={({ item }) => (
                    <View>
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.description}</Text>
                            <Image source={MENU_IMAGES[item.id - 1]} />
                        </View>
                    </View>
                )}
            />
        </Container>
    )
}

function createStyles(theme, colorSchema) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.background,
        },
        seperator: {
            height: 1,
            backgroundColor: colorSchema === "dark" ? "papayawhip" : "#000",
            width: "50%",
            maxWidth: 300,
            marginHorizontal: "auto",
            marginBottom: 10,
        }
    })
}