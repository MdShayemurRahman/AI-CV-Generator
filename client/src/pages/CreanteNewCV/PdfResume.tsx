import { FC } from 'react';
import FaceIcon from '@mui/icons-material/Face';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { Resume } from "../../types/Resume";
import avatar from '../../mockData/img_avatar.png'


interface datapProps {
  Resume: Resume[];
}
// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: '85vh'
  },
  section: {
    flexGrow: 1,
    padding: 10,
  },
  header: {
   height: '20vh',
  },
  image: {
    padding: '100px',
    backgroundColor: 'yellow',
   },
});

// Create Document Component
const Pdfpage: FC<datapProps> = ({ Resume }: datapProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {Resume.map((item, index) => (
          <View style={styles.header} key={index}>
            <View style={styles.image} key={index}>
            <Image src={avatar} />
            </View>
            <View style={styles.section} key={index}>
            <Text>{item.personal_info.first_name}</Text>
          </View>
          <View style={styles.section} key={index}>
              <Text>{item.personal_info.last_name}</Text>
          </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default Pdfpage;
