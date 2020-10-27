import React from 'react';
import { Feather, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper'


export default function CustomOnboarding(){
  const navigation = useNavigation()


  return (

    <Onboarding
    
      showDone
      onDone={() => navigation.navigate('LoginPage')}
      onSkip={() => navigation.navigate('LoginPage')}
      titleStyles={{ fontSize: 32 }}
      subTitleStyles={{ fontSize: 22 }}
      pages={[
        {
          title: 'Hey!',
          subtitle: 'Welcome to $App!',
          backgroundColor: '#DD3355',
          image: (
            <Feather
              name="plus"
              size={100}
              color="white"
            />
          ),
        },
        {
          title: 'Sempre atento(a)!',
          subtitle: 'Aqui você poderá criar alarmes para seus medicamentos!!',
          backgroundColor: '#FF9900',
          image: (
            <MaterialCommunityIcons name="alarm-light" size={200} color="white" />
          ),
        },
        {
          title: 'Seus medicamentos já estarão cadastrados!!',
          subtitle: 'Será só criar um alarmes para eles.',
          backgroundColor: '#FFCC00',
          image: (
            <FontAwesome5 name="briefcase-medical" size={200} color="white" />
          ),
        }
      ]}
    />
  )
}



