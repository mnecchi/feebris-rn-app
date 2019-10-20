import React from 'react';
import {Table, Row, Rows} from 'react-native-table-component';

const ReadingsTable = ({readings, tableStyle, cellStyle, headerStyle}) => {
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
        style={headerStyle}
        data={['date', 'temp.', 'cough', '5 days fever', 'flu']}
        flexArr={[2, 1, 1, 1, 1]}
        textStyle={cellStyle}
      />
      <Rows textStyle={cellStyle} data={data} flexArr={[2, 1, 1, 1, 1]} />
    </Table>
  );
};

export default ReadingsTable;
