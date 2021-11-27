import * as React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import * as Progress from "react-native-progress";
export default function ProgressBar({
  progress,
  style,
  width,
  color,
  unfilledColor,
  ...restProps
}: {
  progress: number | undefined;
  style?: StyleProp<ViewStyle>;
  width: number | null | undefined;
  color?: string | undefined;
  unfilledColor?: string | undefined;
}) {
  return (
    <View>
      <Progress.Bar
        progress={progress}
        width={width}
        style={style}
        color={color}
        unfilledColor={unfilledColor}
        {...restProps}
      />
    </View>
  );
}
