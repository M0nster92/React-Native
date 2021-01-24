import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    console.log(state)

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
};

ShowScreen.navigationOptions = ({navigation}) => {
    return{
        headerRight : ()=> (
            <TouchableOpacity style={{right: 5}} onPress={() => navigation.navigate('Edit', {id : navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={30}/>
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({

});

export default ShowScreen;