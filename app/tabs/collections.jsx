import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from "react-native";
import kay from '../../assets/images/kay.png'

export default function Collections() {
  const handleFABPress = () => {
    console.log('FAB pressed');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Text style={{ fontSize: 38, fontWeight: 'bold', color: '#a855f7' }}>Collections</Text>
          <Text style={{ fontSize: 16, color: 'gray', marginTop: 8 }}>Create folders to organise your looks</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search collections..."
            placeholderTextColor="#999"
          />
          <View style={styles.folder}>
            <View style={styles.imageContainer}>
              <Image source={kay} style={styles.folderImage} />
              
              <View style={styles.badge}>
                <Text style={styles.badgeText}>12 looks</Text>
              </View>
            </View>
            
            <Text style={styles.titleText}>Boss Mode</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={handleFABPress}
        activeOpacity={0.8}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf2f8',
  },
  searchContainer: {
    paddingVertical: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#f3e8ff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  scrollView: {
    flex: 1,
    padding: 15,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ec4899',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabIcon: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '300',
  },
  folder: {
    height: 150,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 120,
    position: 'relative',
  },
  folderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#ec4899',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
});