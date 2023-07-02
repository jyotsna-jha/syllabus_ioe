"use client"
import React, { useState } from 'react';
import { SyllabusTable, NavigationButton, Heading } from './page.styled';
import { FaBook } from 'react-icons/fa';

// fetch json data from public/syllabus.json
import syllabus_ from '../../../public/BCT_syllabus.json';

const Syllabus = () => {
  const [currentYear, setCurrentYear] = useState(1);

  const handleYearChange = (year) => {
    setCurrentYear(year);
  };

  const renderSyllabusTable = (year) => {
    switch (year) {
      case 1:
        return (
          <SyllabusTable>
            <thead>
              <tr>
                <th>Semester 1</th>
                <th>Semester 2</th>
              </tr>
            </thead>

            <tbody>
              {/* Loop over 0 to max of length of syllabus[0] and syllabus[1]*/}
              {Array.from(
                { length: Math.max(syllabus_[0].length, syllabus_[1].length) },
                (_, i) => (
                  <tr key={i}>
                    {/* if ith index doesnt exist display _ */}
                    <td>{syllabus_[0][i].Title || '_'} [{syllabus_[0][i].Code || '_'}]</td>
                    <td>{syllabus_[1][i].Title || '_'} [{syllabus_[1][i].Code || '_'}]</td>
                  </tr>
                )
              )}
            </tbody>
          </SyllabusTable>
        );
      case 2:
        return (
          <SyllabusTable>
            <thead>
              <tr>
                <th>Semester 1</th>
                <th>Semester 2</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(
                { length: Math.max(syllabus_[2].length, syllabus_[3].length) },
                (_, i) => (
                  <tr key={i}>
                    {/* if ith index doesnt exist display _ */}
                    <td>{syllabus_[2][i].Title || '_'} [{syllabus_[2][i].Code || '_'}]</td>
                    <td>{syllabus_[3][i].Title || '_'} [{syllabus_[3][i].Code || '_'}]</td>
                  </tr>
                )
              )}

            </tbody>
          </SyllabusTable>
        );
      case 3:
        return (
          <SyllabusTable>
            <thead>
              <tr>
                <th>Semester 1</th>
                <th>Semester 2</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(
                { length: Math.max(syllabus_[4].length, syllabus_[5].length) },
                (_, i) => (
                  <tr key={i}>
                    {/* if ith index doesnt exist display _ */}
                    <td>{syllabus_[4][i].Title || '_'} [{syllabus_[4][i].Code || '_'}]</td>
                    <td>{syllabus_[5][i].Title || '_'} [{syllabus_[5][i].Code || '_'}]</td>
                  </tr>
                )
              )}
            </tbody>
          </SyllabusTable>
        );
      case 4:
        return (
          <SyllabusTable>
            <thead>
              <tr>
                <th>Semester 1</th>
                <th>Semester 2</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(
                { length: Math.max(syllabus_[6].length, syllabus_[7].length) },
                (_, i) => (
                  <tr key={i}>
                    {/* if there is no ith index display _ else display title and code*/}
                    {syllabus_[6][i] ? (
                      <td>
                        {syllabus_[6][i].Title} [{syllabus_[6][i].Code}]
                      </td>
                    ) : (
                      <td>_</td>
                    )}
                    {syllabus_[7][i] ? (
                      <td>
                        {syllabus_[7][i].Title} [{syllabus_[7][i].Code}]
                      </td>
                    ) : (
                      <td>_</td>
                    )}

                  </tr>
                )
              )}
            </tbody>
          </SyllabusTable>
        );
      default:
        return null;
    }
  };

  return (
    <>

      <Heading>

        Syllabus
      </Heading>

      <hr />
      <div>
        {[1, 2, 3, 4].map((year) => (
          <NavigationButton
            key={year}
            isActive={year === currentYear}
            onClick={() => handleYearChange(year)}
          >
            Year {year}
          </NavigationButton>
        ))}
      </div>

      {renderSyllabusTable(currentYear)}
    </>
  );
};

export default Syllabus;
