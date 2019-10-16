import React from 'react';
import {Table, Row, Rows} from 'react-native-table-component';

const ReadingsTable = ({readings, tableStyle}) => {
  if (!Array.isArray(readings) || readings.length === 0) {
    return null;
  }

  const data = readings.reduce((acc, reading) => {
    acc.push([
      new Date(reading.createdAt).toLocaleString(),
      reading.temperature,
      reading.cough ? '🤧' : '',
      reading.feverInLast5Days ? '🤒' : '',
      reading.isFlu ? '💊' : '',
    ]);

    return acc;
  }, []);

  return (
    <Table borderStyle={tableStyle}>
      <Row
        data={[
          'date',
          'temperature',
          'cough?',
          'fever in the last 5 days',
          'is flu?',
        ]}
      />
      <Rows data={data} />
    </Table>
  );
};

export default ReadingsTable;
