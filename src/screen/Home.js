import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Card from '../Components/Card'
import Icon from 'react-native-vector-icons/FontAwesome';
import Xicon from '../../icon/x-icon.png'

const Home = () => {

  const pessoas = [
    {
      nome: 'Mc poze',
      idade: '20',
      bio: 'loremipson',
      distancia: '200km',
      img: 'https://www.meiahora.com.br/_midias/jpg/2020/11/27/700x930/1_mc_poze-20603451.jpg'
    },
    {
      nome: 'Gugu',
      idade: '20',
      bio: 'loremipson',
      distancia: '20km',
      img: 'https://scontent.fmea3-1.fna.fbcdn.net/v/t1.6435-9/48374337_581129612349530_3948564637250748416_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_eui2=AeG8GV6Rn7y4J7e3aVI6INvt9h47PFXhONP2Hjs8VeE40zfq-QOlvE6AtRsbRu2Dh2vBLfqgU02UhPrVuKRLfs9x&_nc_ohc=VujAeSW3XG0AX8dkXRF&_nc_ht=scontent.fmea3-1.fna&oh=1e574a8a5ad74cfd2456b626a0da3dd1&oe=60EC1AD7'
    },
    {
      nome: 'Leticia',
      idade: '25',
      bio: 'loremipson',
      distancia: '12km',
      img: 'https://i.pinimg.com/originals/83/7d/41/837d41681e37675b7d01f1e22b033d37.jpg'
    },
    {
      nome: 'Paula',
      idade: '22',
      bio: 'loremipson',
      distancia: '29km',
      img: 'https://pm1.narvii.com/6512/179c69138257b8a7f810c6acaedcc558b629b485_hq.jpg'
    },
    {
      nome: 'Juan',
      idade: '27',
      bio: 'loremipson',
      distancia: '123km',
      img: 'https://homensquesecuidam.com/wp-content/uploads/2018/05/jaqueta-jeans-masculina-1-8-homens-que-se-cuidam-por-juan-alves.jpg'
    },
    {
      nome: 'Julia',
      idade: '40',
      bio: 'loremipson',
      distancia: '2390km',
      img: 'https://a-static.besthdwallpaper.com/labios-carnudos-famosa-angelina-jolie-papel-de-parede-640x960-48701_169.jpg'
    },
    {
      nome: 'Adao',
      idade: '60',
      bio: 'loremipson',
      distancia: '4090km',
      img: 'https://www.estrelando.com.br/uploads/2020/04/02/adam-sandler-1585836352.jpg'
    },
    {
      nome: 'Jessica',
      idade: '24',
      bio: 'loremipson',
      distancia: 'Menos de 1km',
      img: 'https://portaldozacarias.com.br/site//arquivos/imagens/imgeditor/182988618_290553462616931_1252721546318634952_n.jpg'
    },
    {
      nome: 'Batmao',
      idade: '??',
      bio: 'Baatemao brabao',
      distancia: 'La em arkhan',
      img: 'https://tecnoblog.net/wp-content/uploads/2021/04/Qual-a-ordem-cronologica-dos-filmes-do-Batman-Deny-Freeman-Flickr.jpg'
    },
    {
      nome: 'Bruna',
      idade: '19',
      bio: 'loremipson',
      distancia: '60km',
      img: 'https://i1.sndcdn.com/artworks-azOnl875k7ebwtaJ-w1aAqw-t500x500.jpg'
    },
    {
      nome: 'Bruna',
      idade: '30',
      bio: 'loremipson',
      distancia: '90km',
      img: 'https://i.pinimg.com/originals/26/17/0e/26170e293568bccc9d35224d4f921f66.jpg'
    }

  ]
  const [contador, setContador] = useState(0)

  const [pessoa, setPessoa] = useState(pessoas[contador]);

  const [end, setEnd] = useState(true)

  const change = () => {
    if (contador + 1 >= pessoas.length) {
      setEnd(false)
    } else {
      setPessoa(pessoas[contador + 1])
      setContador(contador + 1)
    }
  }

  if (end) {
    return (
      <View style={styles.screen}>
        <View style={styles.swipeArea}>
          <Swiper
            cards={pessoas}
            cardIndex={contador}
            renderCard={card => <Card card={card} pessoa={pessoa} />}
            onSwiped={change}
            disableBottomSwipe
            disableTopSwipe
            backgroundColor={'#f2f2f2'}
          />
        </View>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btnClose} onPress={change}>
            <Image style={{ width: 50, height: 50 }} source={Xicon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnPequeno} onPress={change}>
            <Icon name="star" size={25} color="#22baff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnCoracao} onPress={change}>
            <Icon name="heart" size={35} color="#43eac3" />

          </TouchableOpacity>

        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.imgSelf}>

        <Image style={styles.profileImg} source={{ uri: 'https://avaazdo.s3.amazonaws.com/original_5bdede30ca834.png' }} />
        <Text>
          Acabaram os Matches em potencial na sua area.
        </Text>
        <TouchableOpacity style={styles.btnInternacional}>
          <Text>
            Ativar modo Internacional
          </Text>
        </TouchableOpacity>

      </View>
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between'
  },

  btnArea: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    padding: 10,
    position: 'relative',
    bottom: 10
  },

  btnPequeno: {
    height: 35,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#22baff'
  },
  btnCoracao: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#43eac3"
  },
  btnClose: {
    height: 55,
    width: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'red'
  },
  swipeArea: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgSelf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnInternacional: {
    backgroundColor: '#ff5b63',
    margin: 15,
    padding: 15,
    borderRadius: 30
  },
  profileImg: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginBottom: 10
  },
})

export default Home;
