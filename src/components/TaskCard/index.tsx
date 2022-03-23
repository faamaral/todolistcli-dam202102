import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

export function TaskCard(title: any, onPress: any) {
  return (
      <TouchableOpacity style={styles.buttonTask}
      onPress={onPress}>
          <Text style={styles.textTask}>
              {title}
            </Text>
      </TouchableOpacity>
  );
}