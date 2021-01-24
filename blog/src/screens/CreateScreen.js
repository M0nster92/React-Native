import React, { useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreeen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { addBlogPost } = useContext(Context)

    return (
        <View>
            <View style={styles.label}>
                <Text>Enter Title:</Text>
            </View>
            
            <TextInput style={styles.input} value={title} onChangeText={(text)=> setTitle(text)}/>
            <View style={styles.label}>
                <Text>Enter Content:</Text>
            </View>
            <TextInput style={styles.input} value={content} onChangeText={(text)=> setContent(text)}/>
            <View style={styles.buttonView}>
            <Button title="Add Blog"
                onPress={()=> {
                    addBlogPost(title, content);
                    navigation.navigate('Index');
                }}
            />
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    input : {
        borderWidth: 1,
        height : 35,
        justifyContent : 'space-between',
        margin: 10,
        padding : 5
    },
    label : {
        flexDirection : 'row',
        justifyContent : 'center',
        margin: 10
    },
    buttonView : {
        flexDirection : 'row',
        justifyContent : 'center'
    }
});

export default CreateScreeen;