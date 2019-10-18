import React from 'react';
import 'react-native';
import ReadingsTable from '../ReadingsTable';
import renderer from 'react-test-renderer';
import {resultsStyle} from '../../styles';

describe('should render successfully', () => {
  it('should return null if no array or empty array is passed', () => {
    const tree = renderer
      .create(
        <ReadingsTable
          readings={null}
          headerStyle={resultsStyle.readingsTableHeader}
          cellStyle={resultsStyle.readingTableCell}
          tableStyle={resultsStyle.readingsTable}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display a table with results', () => {
    const readings = [
      {
        temperature: 39,
        cough: true,
        feverInLast5Days: true,
        isFlu: true,
      },
      {
        temperature: 36,
        cough: false,
        feverInLast5Days: false,
        isFlu: false,
      },
    ];

    const tree = renderer
      .create(
        <ReadingsTable
          readings={readings}
          headerStyle={resultsStyle.readingsTableHeader}
          cellStyle={resultsStyle.readingTableCell}
          tableStyle={resultsStyle.readingsTable}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
