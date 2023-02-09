import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
	slug: 'posts',
	fields: [
		{
			name: 'title',
			type: 'text',
			required: true
		},
		{
			name: 'content',
			type: 'richText'
		}
	],
};

export default Posts;