import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import image from '../../assets/images/look1.png';
import image2 from '../../assets/images/look2.png';
import image3 from '../../assets/images/look3.png';
import image4 from '../../assets/images/look4.png';
import { Ionicons } from "@expo/vector-icons";

export default function AllLooks() {
  const looksByDate = [
    {
      date: '2024-06-10',
      looks: [
        { id: 1, source: image },
        { id: 2, source: image2 },
        { id: 3, source: image3 },
        { id: 4, source: image4 },
        { id: 5, source: image },
        { id: 6, source: image },
        { id: 7, source: image },
        { id: 8, source: image2 },
        { id: 9, source: image3 },
        { id: 10, source: image4 },
      ]
    },
    {
      date: '2024-07-08',
      looks: [
        { id: 11, source: image },
        { id: 12, source: image2 },
        { id: 13, source: image3 },
        { id: 14, source: image4 },
        { id: 15, source: image },
        { id: 16, source: image },
        { id: 17, source: image2 },
      ]
    },
  ];

  // Formating date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short',
        year: 'numeric'
      });
    }
  };

  return (
    <View style={styles.container}>
    <ScrollView >
      <View style={styles.header}>
        <Text style={styles.title}>All Looks</Text>
      </View>

      {looksByDate.map((section, sectionIndex) => (
        <View key={sectionIndex} style={styles.dateSection}>
          <Text style={styles.dateHeader}>{formatDate(section.date)}</Text>
          
          <View style={styles.gridContainer}>
            {section.looks.map((look) => (
              <TouchableOpacity key={look.id} style={styles.gridItem}>
                <Image source={look.source} style={styles.thumbnail} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
    <TouchableOpacity style={styles.fab}>
      <Ionicons name="camera" size={30} color="#ffffff" />
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf2f8',
  },
  header: {
    marginTop: 50,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#a855f7',
  },
  dateSection: {
    marginBottom: 20,
  },
  dateHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: 'gray',
    marginBottom: 8,
    paddingHorizontal: 15,
  },
  gridContainer: {
    flexDirection: 'row',
   flexWrap: 'wrap',
    gap: 2,
  },
  gridItem: {
    width: '24.5%',
    aspectRatio: 1,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ec4899',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },  
});