import React, {useContext} from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const {data, AddBlogPost} = useContext(BlogContext)

    return(
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress={AddBlogPost}/>
            <FlatList
                data={data}
                keyExtractor={(blogPosts)=> blogPosts.title}
                renderItem={({item})=> {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default IndexScreen;