"use client"
import React, { useState } from 'react';
import { SyllabusTable, NavigationButton,Heading} from './page.styled';
import { FaBook } from 'react-icons/fa';


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
              <tr>
                <td>Engineering Drawing I [ME 401]</td>
                <td>Engineering Mathematics II [SH 451]</td>
              </tr>
              <tr>
                <td>Engineering Physics [SH 402]</td>
                <td>Engineering Chemistry [SH 453]</td>
              </tr>
              <tr>
                <td>Basic Electrical Engineering[EE 401]</td>
                <td>Workshop Technology [ME 453]</td>
              </tr>
              <tr>
                <td>Digital Logic [EX 502]</td>
                <td>Object Oriented Programming [CT 501]</td>
              </tr>
              <tr>
                <td>Engineering Mathematics [SH 401]</td>
                <td>Microprocessor [EX 551]</td>
              </tr>
              <tr>
                <td>Computer Programming [CT 401]</td>
                <td>Electric Cuircuit And Machines </td>
              </tr>
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
              <tr>
                <td>Second Year Sem 1</td>
                <td>Second Year Sem 2</td>
              </tr>
              <tr>
                <td>Second Year Sem 1</td>
                <td>Second Year Sem 2</td>
              </tr>
              <tr>
                <td>Second Year Sem 1</td>
                <td>Second Year Sem 2</td>
              </tr>
              <tr>
                <td>Second Year Sem 1</td>
                <td>Second Year Sem 2</td>
              </tr>
              <tr>
                <td>Second Year Sem 1</td>
                <td>Second Year Sem 2</td>
              </tr>
              <tr>
                <td>Second Year Sem 1</td>
                <td>Second Year Sem 2</td>
              </tr>
              <tr>
                <td>Second Year Sem 1</td>
                <td>Second Year Sem 2</td>
              </tr>
              
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
              <tr>
                <td>Third Year Sem 1</td>
                <td>Third Year Sem 2</td>
              </tr>
              <tr>
                <td>Third Year Sem 1</td>
                <td>Third Year Sem 2</td>
              </tr>
              <tr>
                <td>Third Year Sem 1</td>
                <td>Third Year Sem 2</td>
              </tr>
              <tr>
                <td>Third Year Sem 1</td>
                <td>Third Year Sem 2</td>
              </tr>
              <tr>
                <td>Third Year Sem 1</td>
                <td>Third Year Sem 2</td>
              </tr>
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
              <tr>
                <td>Fourth Year Sem 1</td>
                <td>Fourth Year Sem 2</td>
              </tr>
              <tr>
                <td>Fourth Year Sem 1</td>
                <td>Fourth Year Sem 2</td>
              </tr>
              <tr>
                <td>Fourth Year Sem 1</td>
                <td>Fourth Year Sem 2</td>
              </tr>
              <tr>
                <td>Fourth Year Sem 1</td>
                <td>Fourth Year Sem 2</td>
              </tr>
              <tr>
                <td>Fourth Year Sem 1</td>
                <td>Fourth Year Sem 2</td>
              </tr>
              <tr>
                <td>Fourth Year Sem 1</td>
                <td>Fourth Year Sem 2</td>
              </tr>
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
