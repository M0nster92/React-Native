import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import BlogPostForm from '../component/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({navigation}) => {
    const {state, editBlogPost } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam("id"));

    return <BlogPostForm 
        initialValue={{title : blogPost.title, content: blogPost.content}}
        onSubmit={(title, content)=> {
            editBlogPost(navigation.getParam('id'), title, content, ()=> {
                navigation.pop();
            })
        }}
    />

};

const styles = StyleSheet.create({
});

export default EditScreen;