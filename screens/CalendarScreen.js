import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CalendarView from '../components/CalendarView';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';
import FloatingWriteButton from '../components/FloatingWriteButton';

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