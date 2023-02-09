export type Post = {
	id: string
	title: string
	content: Array<{
		type: string
		chrildren: { text: string }[]
	}>
}

export type Posts = {
	docs: Post[]
}