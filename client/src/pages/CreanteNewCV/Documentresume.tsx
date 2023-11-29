import React, { FC } from 'react';
import { PDFDownloadLink, Page, Document, View, Text, StyleSheet } from '@react-pdf/renderer';
import { Button } from '@mui/material';
import FormData from '../../mockData/ResumeInterface';

interface DataProps {
  Resume: FormData[];
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  section: {
    flexGrow: 1,
    padding: 10,
    border: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginLeft: 20,
    marginBottom: 30,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

const DocumentResume: FC<DataProps> = ({ Resume }: DataProps) => (
  <div>
    <Document>
      {Resume.map((item, index) => (
        <Page key={index} size="A4" style={styles.page}>
          <View style={styles.header}>
            <View style={styles.section}>
              <Text style={styles.section}>{`Name: ${item.personalInformation.firstName} ${item.personalInformation.lastName}`}</Text>

              <View style={styles.section}>
                <Text style={styles.section}>{`Institute: ${item.education.institute}`}</Text>
                <Text style={styles.section}>{`Degree: ${item.education.degree}`}</Text>
                <Text style={styles.section}>{`GPA: ${item.education.gpa}`}</Text>
                <Text style={styles.section}>{`Graduation Date: ${new Date(item.education.graduationDate).toLocaleDateString()}`}</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.section}>{`Technical Skills: ${item.skills.technicalSkills}`}</Text>
                <Text style={styles.section}>{`Soft Skills: ${item.skills.softSkills}`}</Text>
                <Text style={styles.section}>{`Language: ${item.skills.language}`}</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.section}>{`Job Title: ${item.workExperience.jobTitle}`}</Text>
                <Text style={styles.section}>{`Company Name: ${item.workExperience.companyName}`}</Text>
                <Text style={styles.section}>{`Employment Start Date: ${new Date(item.workExperience.employmentStartDate).toLocaleDateString()}`}</Text>
                <Text style={styles.section}>{`Employment End Date: ${new Date(item.workExperience.employmentEndDate).toLocaleDateString()}`}</Text>
                <Text style={styles.section}>{`Description: ${item.workExperience.description}`}</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.section}>{`Project Title: ${item.projects.title}`}</Text>
                <Text style={styles.section}>{`Outcomes: ${item.projects.outcomes}`}</Text>
                <Text style={styles.section}>{`Project Start Date: ${new Date(item.projects.projectStartDate).toLocaleDateString()}`}</Text>
                <Text style={styles.section}>{`Project End Date: ${new Date(item.projects.projectEndDate).toLocaleDateString()}`}</Text>
                <Text style={styles.section}>{`Project Description: ${item.projects.projectDescription}`}</Text>
              </View>
            </View>
          </View>
        </Page>
      ))}
      
    </Document> 

    <PDFDownloadLink
      document={
        <Document>
        {Resume.map((item, index) => (
          <Page key={index} size="A4" style={styles.page}>
            <View style={styles.header}>
              <View style={styles.section}>
                <Text style={styles.section}>{`Name: ${item.personalInformation.firstName} ${item.personalInformation.lastName}`}</Text>
  
                <View style={styles.section}>
                  <Text style={styles.section}>{`Institute: ${item.education.institute}`}</Text>
                  <Text style={styles.section}>{`Degree: ${item.education.degree}`}</Text>
                  <Text style={styles.section}>{`GPA: ${item.education.gpa}`}</Text>
                  <Text style={styles.section}>{`Graduation Date: ${new Date(item.education.graduationDate).toLocaleDateString()}`}</Text>
                </View>
  
                <View style={styles.section}>
                  <Text style={styles.section}>{`Technical Skills: ${item.skills.technicalSkills}`}</Text>
                  <Text style={styles.section}>{`Soft Skills: ${item.skills.softSkills}`}</Text>
                  <Text style={styles.section}>{`Language: ${item.skills.language}`}</Text>
                </View>
  
                <View style={styles.section}>
                  <Text style={styles.section}>{`Job Title: ${item.workExperience.jobTitle}`}</Text>
                  <Text style={styles.section}>{`Company Name: ${item.workExperience.companyName}`}</Text>
                  <Text style={styles.section}>{`Employment Start Date: ${new Date(item.workExperience.employmentStartDate).toLocaleDateString()}`}</Text>
                  <Text style={styles.section}>{`Employment End Date: ${new Date(item.workExperience.employmentEndDate).toLocaleDateString()}`}</Text>
                  <Text style={styles.section}>{`Description: ${item.workExperience.description}`}</Text>
                </View>
  
                <View style={styles.section}>
                  <Text style={styles.section}>{`Project Title: ${item.projects.title}`}</Text>
                  <Text style={styles.section}>{`Outcomes: ${item.projects.outcomes}`}</Text>
                  <Text style={styles.section}>{`Project Start Date: ${new Date(item.projects.projectStartDate).toLocaleDateString()}`}</Text>
                  <Text style={styles.section}>{`Project End Date: ${new Date(item.projects.projectEndDate).toLocaleDateString()}`}</Text>
                  <Text style={styles.section}>{`Project Description: ${item.projects.projectDescription}`}</Text>
                </View>
              </View>
            </View>
          </Page>
        ))}
        
      </Document> 
      }
      fileName={Resume.map(item => `${item.personalInformation.firstName} ${item.personalInformation.lastName}`).join(',')}
    >
      {({ loading }) => (
        <Button variant="contained" disabled={loading}>
          {loading ? "Loading document..." : "Download PDF"}
        </Button>
      )}
    </PDFDownloadLink>
  </div>
);

export default DocumentResume; 