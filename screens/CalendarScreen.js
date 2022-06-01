import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CalendarView from '../components/CalendarView';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';

export let nowdate=1

function CalendarScreen() {
  const { logs } = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const markedDates = logs.reduce((acc, current) => {
    const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
    acc[formattedDate] = { marked: true };
    return acc;
  }, {});
  const filteredLogs = logs.filter(
    (log) => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
    );
  nowdate=selectedDate


  return (
    <View style={styles.block}>
      <FeedList
        logs={filteredLogs}
        ListHeaderComponent={
          <CalendarView
            markedDates={markedDates}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
        }
      />
      <FloatingWriteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default CalendarScreen;