import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import profile from '../../assets/images/profile.png';
import { router } from 'expo-router';
import logo from '../../assets/images/LooksLogo.jpeg'
import ImageCard from '../components/imageCard';
import image from '../../assets/images/look1.png';
import image1 from '../../assets/images/look2.png';
import image2 from '../../assets/images/look3.png';
import image3 from '../../assets/images/look4.png';



export default function Index() {
  const images = [
    { id: 1, source: image, title: 'Casual Chic', date: '2024-06-10' },
    { id: 2, source: image1, title: 'Summer Vibes', date: '2024-06-08' },
    { id: 3, source: image2, title: 'Office Ready', date: '2024-06-05' },
    { id: 4, source: image1, title: 'Evening Glow', date: '2024-06-03' },
  ];
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Image
            source={logo}
            style={{ width: 180, height: 60, marginBottom: 4 }}
          />
          <Text style={styles.subtitle}>Your style, your story</Text>
        </View>

        <TouchableOpacity>
          <Image
            source={profile}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={24} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your looks..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity>
          <Ionicons name="filter-outline" size={24} color="#999" />
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="sparkles" size={20} color="#a855f7" />
          <Text style={styles.statNumber}>47</Text>
          <Text style={styles.statLabel}>Total Looks</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="trending-up" size={20} color="#a855f7" />
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>This Month</Text>
        </View>

        <View style={styles.statCard}>
          <Ionicons name="book-outline" size={20} color="#a855f7" />
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Collections</Text>
        </View>
      </View>
      
      <View style={styles.recentLooks}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1a1a1a' }}>Recent Looks</Text>
        <TouchableOpacity
          onPress={() => router.push('tabs/myLooks')}
        >
          <Text style={{ fontSize: 16, color: '#a855f7' }}>View All</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.gridContainer}>
        {images.map((image, index) => (
          <View key={image.id} style={styles.gridItem}>
            <ImageCard
              imageSource={image.source}
              title={image.title}
              date={image.date}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fdf2f8',
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#d6336c',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 12,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#6b7280',
    textAlign: 'center',
  },
  recentLooks: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  gridItem: {
    width: '48%',
    marginBottom: 16,
  },
});