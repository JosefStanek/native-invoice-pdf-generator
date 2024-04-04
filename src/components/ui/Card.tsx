import { View, StyleSheet } from "react-native";
interface CardProps {
  children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: { flex: 1, padding: 10 },
});

export default Card;
