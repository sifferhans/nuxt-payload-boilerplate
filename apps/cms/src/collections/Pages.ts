import { CollectionConfig } from 'payload/types';

const Pages: CollectionConfig = {
	slug: 'pages',
	fields: [
		{
			name: 'slug',
			type: 'text',
			required: true,
			admin: {
				position: 'sidebar'
			}
		},
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

export default Pages;