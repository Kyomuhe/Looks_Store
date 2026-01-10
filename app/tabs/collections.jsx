import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";

export default function Collections() {
  const handleFABPress = () => {
    console.log('FAB pressed');
  };

  return (
    <View style={styles.container}>

      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Text style={{ fontSize: 38, fontWeight: 'bold', color: '#ec4899' }}>Collections</Text>
          <Text style={{ fontSize: 16, color: 'gray',marginTop: 8 }}>Create folders to organise your looks</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search collections..."
            placeholderTextColor="#999"
          />
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
});