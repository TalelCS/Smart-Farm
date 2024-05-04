import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const MyCard = ({ title, content, imageUrl, link }) => (
  <Card style={styles.card}>
    <Card.Cover source={imageUrl} style={styles.cardCover} />
    <Card.Content style={styles.cardContent}>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="bodyMedium">{content}</Text>
    </Card.Content>
    <Card.Actions style={styles.cardActions}>
      <Link href= {link}>
      <Button icon="cog" mode="outlined" style={styles.button} >
        Monitor & Control
      </Button>
      </Link>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    borderRadius: 5,
    elevation: 3,
  },
  cardCover: {
    // No styles needed here for now
  },
  cardContent: {
    padding: 5
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: 10,
  },
});

export default MyCard;
