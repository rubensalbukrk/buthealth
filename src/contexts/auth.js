'use strict';
import React,{ createContext, useState} from "react";
import { useNavigation, NavigationAction } from "@react-navigation/native";
import AppStack from "../pages/appStack";

export const AuthContext = createContext({})

let usuarios =  [
    {
      id: 1,
      nome: 'Rubens',
      idade: 27,
      status: true,
      avatar: "https://instagram.fjpa9-1.fna.fbcdn.net/v/t51.2885-19/344786585_910507630229148_1756043573616289114_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjpa9-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=beuxDUWDnO0AX8ziH91&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAtC2bvGkZDA5QWYb_K9l9jz45Watq8xVpdCIrhFys_eA&oe=646B7648&_nc_sid=640168"
    },
    {
      id: 2,
      nome: 'Valdir',
      idade: 45,
      status: false,
      avatar: "https://instagram.fjpa9-1.fna.fbcdn.net/v/t51.2885-19/222049443_343658050716508_2230379693903539097_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjpa9-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=di7hQWwIfZ4AX_Zxr0s&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AfA0LvH99Z-4aohtLwG4Kl4y806MwJBkZSAfep42D5Bzcw&oe=646A763C&_nc_sid=344c19"
    },
    {
      id: 3,
      nome: 'Vanessa',
      idade: 29,
      status: false,
      avatar: "https://instagram.fjpa9-1.fna.fbcdn.net/v/t51.2885-19/335610092_707808387689172_2367223911369829847_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjpa9-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=UilZZAsFx1cAX-Doi1H&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AfCSDAkzi9gd005lWc0HXHG8fUM0lgssnGSa2c2UV7j8rQ&oe=6469B51B&_nc_sid=344c19"
    },
    {
      id: 4,
      nome: 'Tyago',
      idade: 30,
      status: true,
      avatar: "https://instagram.fjpa9-1.fna.fbcdn.net/v/t51.2885-19/265722493_625218818623540_4900370622977066227_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjpa9-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=AgdYjbXmI9cAX9ATXq9&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AfA0betZD5U8sCOgrvyUhbIL5k2ffq_u042lUQu_qHWxIg&oe=6469A5E6&_nc_sid=344c19"
    },
    {
      id: 5,
      nome: 'Anderson',
      idade: 29,
      status: true,
      avatar: "https://instagram.fjpa9-1.fna.fbcdn.net/v/t51.2885-19/329852974_1445218959584275_6527865811893981090_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjpa9-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=_zb91Re_QkQAX9jz5gG&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AfD6V6yu8gASpABBZ0hsW8_y98lC2qlsqfs538lw0KNEwg&oe=646A44CF&_nc_sid=344c19"
    },
    {
      id: 6,
      nome: 'Maisa',
      idade: 24,
      status: true,
      avatar: "https://instagram.fjpa9-1.fna.fbcdn.net/v/t51.2885-19/271554970_144052724652899_2201036481569130988_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjpa9-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=3IdQETSjahgAX-0gksX&edm=AHG7ALcBAAAA&ccb=7-5&oh=00_AfCvslPms6AxMNz5-Cfw643Wx4vYuITQNDucdyTZnxL6iw&oe=646B224F&_nc_sid=344c19"
    }
  ];

function AuthProvider({children}){
    const [user, setUser] = useState({})
    const navigation = useNavigation('');

    function getStarted(nome){
        if (nome !== ''){
            setUser({
                nome: nome
            })
           navigation.navigate('GetInfo')
        }
    }

    function getInfo(nome, idade, altura, peso){
      if (idade !== '' && altura !== '' && peso !== ''){
        setUser({
          nome: nome,
          idade: idade,
          altura: altura,
          peso: peso
        })
        navigation.reset({
          routes:[{name:'appStack'}]
      });
       
      }
    }

    return (
        <AuthContext.Provider value={{user, getStarted, getInfo}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
