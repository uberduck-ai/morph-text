import {Composition} from 'remotion';
import {MorphText} from './MorphText';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MorphText"
				component={MorphText}
				durationInFrames={300}
				fps={30}
				width={1000}
				height={450}
				defaultProps={{
					texts: ['Hey', 'Johnny', 'Welcome', 'to', 'UBERDUCK'],
					colors: ['black', 'black', 'black', 'black', 'blue'],
					backgroundColor: 'white',
					textSize: 'L',
					backgroundImage:
						'https://uberduck-demo.s3.us-west-2.amazonaws.com/marble.jpeg',
				}}
			/>
		</>
	);
};
