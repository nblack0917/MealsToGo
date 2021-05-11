import React from "react";
import { List } from "react-native-paper";

export const MenuCard = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Menu">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={(props) => <List.Icon {...props} icon="food" />}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={(props) => <List.Icon {...props} icon="food" />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  );
};
