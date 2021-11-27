import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { CLOSE_WHITE } from "../assets/images";
import { BELUGA } from "../constants/Colors";

export default function FooterPopup({
  bg,
  text,
  clickableText,
  onTextClick,
  onClose,
  ...restProps
}: {
  bg: string;
  text: string;
  clickableText?: string | undefined;
  onTextClick?: Function | undefined;
  onClose: Function;
}) {
  return (
    <View style={[styles.container, { backgroundColor: bg }]} {...restProps}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        {clickableText && onTextClick ? (
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Tap me"
            accessibilityHint="Opens the poll popup"
            onPress={() => onTextClick()}
          >
            <Text style={[styles.text, { textDecorationLine: "underline" }]}>
              {clickableText}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.close}>
        <TouchableOpacity
          accessibilityLabel="Close me"
          accessibilityHint="Removes the poll footer component from the screen"
          onPress={() => {
            onClose();
          }}
        >
          <Image source={CLOSE_WHITE} height={9} width={9} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 12,
    marginHorizontal: 12,
    justifyContent: "space-between",
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: BELUGA,
    marginLeft: 16,
    marginVertical: 16,
  },
  close: {
    justifyContent: "center",
    marginRight: 22,
  },
  textContainer: {
    flexDirection: "row",
  },
});
