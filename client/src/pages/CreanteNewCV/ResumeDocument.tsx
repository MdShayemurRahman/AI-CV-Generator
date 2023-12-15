import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { CreateResume } from '../../types/Resume';

const ResumeDocument: React.FC<{resume : CreateResume}> = ({ resume }) => (
  <Document>
    {/* {resume.map((item, index) => (
      <Page key={index} size='A4'>
        
      </Page>
    ))} */}
  </Document>
);

export default ResumeDocument;
