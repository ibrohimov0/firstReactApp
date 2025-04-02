import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/menuItems";
import { MENU_IMAGES } from "@/constants/menuImages";

export default function MenuScree() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme)
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const seperatorComp = <View style={styles.seperator} />
    // const headerComp = <Text>Top of List</Text>
    const footerComp = <Text style={{color: theme.text}}>End of Menu</Text>
    return (
        <Container>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={seperatorComp}
                // ListHeaderComponent={headerComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footerComp}
                ListEmptyComponent={<Text>no items</Text>}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <View style={styles.menuTextRow}>
                            <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
                            <Text style={styles.menuItemText}>{item.description}</Text>
                        </View>
                        <Image style={styles.menuImage} source={MENU_IMAGES[item.id - 1]} />
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
        },
        footerComp: {
            marginHorizontal: "auto"
        },
        row: {
            flexDirection: 'row',
            width: "100%",
            maxWidth: 600,
            height: 100,
            marginBottom: 10,
            borderStyle: "solid",
            borderColor: colorSchema === 'dark' ? "papayawhip" : '#000',
            borderWidth: 1,
            borderRadius: 20,
            overflow: "hiddden",
            marginHorizontal: "auto",
        },
        menuTextRow: {
            width: "65%",
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1
        },
        menuItemTitle: {
            fontSize: 18,
            textDecorationLine: "underline"
        },
        menuItemText: {
            color: theme.text,
        },
        menuImage: {
            width: 100,
            height: 100
        }
    })
}