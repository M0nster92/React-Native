import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

const BlogPostForm = ({onSubmit, initialValue }) => {
    const [title, setTitle] = useState(initialValue.title);
    const [content, setContent] = useState(initialValue.content);


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
            <Button title="Save Blog"
                onPress={()=> onSubmit(title, content)}
            />
            </View>
            
        </View>
    )
};

BlogPostForm.defaultProps = {
    initialValue : {
        title : '',
        content : ''
    }
}

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

export default BlogPostForm;