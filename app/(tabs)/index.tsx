import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <Calendar
          current={'2025-03-05'}
          minDate={'2020-01-01'}
          maxDate={'2030-12-31'}
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
          monthFormat={'yyyy MM'}
          onMonthChange={(month) => {
            console.log('month changed', month);
          }}
          hideArrows={false}
          hideExtraDays={true}
          disableMonthChange={true}
          enableSwipeMonths={true}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
