import{ Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
export default function ImageCard({ imageSource, title, date }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={{textAlign: 'center', color: 'gray', marginBottom: 8 ,fontSize: 11}}>{date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
    color:'#ec4899'
  },
}); 