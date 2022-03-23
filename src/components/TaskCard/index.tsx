import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

interface TaskCardProps {
    title: string;
    onPress: () => void;
}

export function TaskCard({title, onPress}: TaskCardProps) {
  return (
      <TouchableOpacity style={styles.buttonTask}
      onPress={onPress}>
          <Text style={styles.textTask}>
              {title}
            </Text>
      </TouchableOpacity>
  );
}