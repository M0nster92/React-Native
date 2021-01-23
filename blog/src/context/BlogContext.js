import React, {useState} from 'react';
import { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
	switch(action.type){
		case 'add_blogpost':
			return [...state, { title : `Blog Post #${state.length+1}`}]
		default:
			return state
	}
}

export const BlogProvider = ({children}) => {
	const [blogPosts, dispatch] = useReducer(blogReducer, []);

	const AddBlogPost = () => {
		dispatch({type: 'add_blogpost'})
	}

	return <BlogContext.Provider value={{data : blogPosts, AddBlogPost}}>
		{children}
	</BlogContext.Provider>
};

export default BlogContext;


