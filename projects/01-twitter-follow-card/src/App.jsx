import TwitterFollowCard from './TwitterFollowCard'
import './App.css'

function App() {
	const users = [
		{
			id: 1,
			userName: 'wendyb',
			name: 'Wendy Arcia',
			isFollowing: true,
			imageUrl: 'https://unavatar.io/duckduckgo/gummibeer.dev',
		},
		{
			id: 2,
			userName: 'celijze',
			name: 'Celimar Juarez',

			isFollowing: false,
			imageUrl: 'https://unavatar.io/readcv/elenatorro',
		},

		{
			id: 3,
			userName: 'gustavoP',
			name: 'Gustavo Pino',
			isFollowing: true,
			imageUrl:
				'https://unavatar.io/github/37t?fallback=https://avatar.vercel.sh/37t?size=400',
		},

		{
			id: 4,
			userName: 'danielaP',
			name: 'Daniela Arcia',
			isFollowing: true,
			imageUrl:
				'https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4',
		},
	]
	return (
		<>
			<section className='App'>
				{users.map(({ id, userName, name, isFollowing, imageUrl }) => (
					<TwitterFollowCard
						key={id}
						userName={userName}
						initialIsFollowing={isFollowing}
						imageUrl={imageUrl}
					>
						{name}
					</TwitterFollowCard>
				))}
			</section>
		</>
	)
}

export default App
