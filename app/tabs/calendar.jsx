import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';

export default function CalendarScreen() {
  const [currentMonth, setCurrentMonth] = useState(new Date().toISOString().split('T')[0]);

  const onMonthChange = (month) => {
    setCurrentMonth(month.dateString);
  };

  const moveMonth = (direction) => {
    const date = new Date(currentMonth);
    if (direction === 'prev') {
      date.setMonth(date.getMonth() - 1);
    } else {
      date.setMonth(date.getMonth() + 1);
    }
    setCurrentMonth(date.toISOString().split('T')[0]);
  };

  const formatMonthYear = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Calendar</Text>
          <Text style={styles.subtitle}>Plan your outfits</Text>
        </View>

        <View style={styles.calendarContainer}>
          <View style={styles.customHeader}>
            <TouchableOpacity onPress={() => moveMonth('prev')} style={styles.arrowButton}>
              <Text style={styles.arrow}>‹</Text>
            </TouchableOpacity>
            <Text style={styles.monthText}>{formatMonthYear(currentMonth)}</Text>
            <TouchableOpacity onPress={() => moveMonth('next')} style={styles.arrowButton}>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.tapInstruction}>Tap a day to add a look</Text>

          <Calendar
            current={currentMonth}
            markedDates={{}}
            theme={{
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#6b7280',
              selectedDayBackgroundColor: '#c026d3',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#c026d3',
              dayTextColor: '#1f2937',
              textDisabledColor: '#d1d5db',
              textDayFontSize: 16,
              textDayHeaderFontSize: 14,
            }}
            style={styles.calendar}
            hideExtraDays={true}
            hideArrows={true}
            onDayPress={(day) => {
              console.log('selected day', day);
            }}
            onMonthChange={onMonthChange}
            renderHeader={() => null}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: '#fdf2f8',

    },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#a855f7',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  calendarContainer: {
    margin: 20,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  customHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  arrowButton: {
    padding: 10,
  },
  arrow: {
    fontSize: 32,
    color: '#c026d3',
    fontWeight: 'bold',
  },
  monthText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  tapInstruction: {
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  calendar: {
    borderRadius: 16,
  },
});