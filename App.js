import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

import foto from './assets/foto.jpg';
import Card from './components/Card';


export default function App() {

  function handleRedeSocial(rede_social){
    switch(rede_social){

      case 'github':
            Alert.alert('Github', 'https://www.github.com/aan3dree/')
            break
      case 'instagram':
            Alert.alert('Instagram','https://www.instagram.com/an3dree/')
            break
      case 'linkedin':
            Alert.alert('Linkedin','https://www.linkedin.com/in/andr%C3%A9-souza-3104a6195/')
            break
    }
  }
  return (
    <View style={styles.page}>
      <View style={styles.container_header}>

        <Image source={foto} style={styles.foto}/>
        <Text style={styles.nome}>André Souza</Text>
        <Text style={styles.cargo}>Desenvolvedor SharePoint</Text>

        <View style={styles.redes}>
          <TouchableOpacity onPress={()=> handleRedeSocial('github')}>
            <AntDesign name="github" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleRedeSocial('instagram')}>
            <AntDesign name="instagram" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handleRedeSocial('linkedin')}>
            <AntDesign name="linkedin-square" size={24} color="black" />
          </TouchableOpacity>
        </View>

      </View>

      
      <Card titulo='Formação Academcica'>
          <Text style={styles.card_content_text}>UNINASSAU</Text>
          <Text style={styles.card_content_text}>IFPE</Text>
          <Text style={styles.card_content_text}>Supletivo</Text>
      </Card>

      <Card titulo='Experiência Profissional'>
          <Text style={styles.card_content_text}>Epione</Text>
          <Text style={styles.card_content_text}>Condica</Text>
          <Text style={styles.card_content_text}>Tecmdia</Text>
      </Card>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
    alignItems: 'center',

  },
  container_header: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10
    
  },
  foto: {
    width: 180,
    height: 180,
    borderRadius: 125
  },
  cargo: {
    color: '#939393',
    marginBottom: 10,
    
  },
  redes: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 5,
    justifyContent: 'space-between',
    width: '60%',
    paddingLeft: 5
    
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  card: {
    width: '60%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#939393',
    backgroundColor: '#FFF',
    padding: 10,
  },
  card_header: {

  },
  card_content: {
    marginTop: 10,
    
  },
  card_content_text: {
    color: '#939393',
    marginTop: 10
  },

});
