import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import AppLoading  from 'expo-app-loading'
import * as Font from "expo-font";

import todayImage from '../../assets/imgs/today.jpg'
import commonStyle from '../commonStyle';

import Task from '../components/Task';

import moment from 'moment'
import 'moment/locale/pt-br'

export default class TaksList extends Component {

    state = {
        isReady: false, 
    }

    // async componentDidMount() { 
    //     await Font.loadAsync({
    //         'Lato': require('../../assets/fonts/Lato.ttf'),
    //         'Allison': require('../../assets/fonts/Allison-Regular.ttf')
    //     });
    //     this.setState({isReady: true}); 
    // }

    fetchFonts() { 
        return Font.loadAsync({
            'Lato': require('../../assets/fonts/Lato.ttf'),
            'Allison': require('../../assets/fonts/Allison-Regular.ttf')
        });
    }

    render() {

        const today = moment().locale('pt-br').format('dddd, DD [de] MMMM')

        if (!this.state.isReady) {
            return <AppLoading
                startAsync={this.fetchFonts}
                onFinish={() => this.setState({isReady: true})}
                onError={console.warn}
            />
        }
        return (
            <View style={styles.container} >
                <ImageBackground 
                    style= {styles.background}
                    source={todayImage} >
                    <View style={styles.titleBar}>
                        {/* <Text>Hoje</Text> */}
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground > 

                <View style={styles.taskList}>
                    {/* <Text style={styles.text}>Tarefa #01</Text>
                    <Text style={styles.text}>Tarefa #02</Text>
                    <Text style={styles.text}>Tarefa #03</Text> */}
                    <Task description="Comprar Livro" estimateAt={new Date()} doneAt={new Date()}/>
                    <Task description="Ler Livro" estimateAt={new Date()} doneAt={null}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4f4f4',
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 50,
        fontFamily: commonStyle.fontFamily,
        color: commonStyle.colors.secondary,
        marginLeft: 20,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 20,
        fontFamily: commonStyle.fontFamily,
        color: commonStyle.colors.secondary,
        marginLeft: 20,
        marginBottom: 30,
    },
})

//   <AppLoading
//     startAsync={this._cacheResourcesAsync}
//     onFinish={() => this.setState({ isReady: true })}
//     onError={console.warn}
//   />

// fontess = useFonts({
    //     'Lato': require('../../assets/fonts/Lato.ttf'),
    //     'Allison': require('../../assets/fonts/Allison-Regular.ttf'),
    // })

 /*
    _loadFontsAsync = async () => {
        let isLoaded = Font.loadAsync({
            'Lato': require('../../assets/fonts/Lato.ttf'),
            'Allison': require('../../assets/fonts/Allison-Regular.ttf')
        });
        this.setState({ isReady: isLoaded });
    };
    */
    
    // async _cacheResourcesAsync() {
    //     const images = [require('../../assets/fonts/icon.png')];
    
    //     const cacheImages = images.map(image => {
    //       return Asset.fromModule(image).downloadAsync();
    //     }); 
    //     return Promise.all(cacheImages);
    // }
    
    // componentDidMount() {
    //   this._loadFontsAsync();
    // }