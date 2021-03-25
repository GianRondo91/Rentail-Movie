import NetSlider from 'netslider';
import 'netslider/dist/styles.min.css';
import data from './Data.json';
import SliderContainer from '../lib/SliderContainer';

function SliderTemplate(props) {
	return (
		<div className='slider-container-wrapper'>
			<SliderContainer videoModel={props.videoModel} model={props.model} />
		</div>
	);
}
export default function NetSliderContainer(props) {
	return (
		<div className='netslider-container' style={{ overflow: 'hidden', height: '400px' }}>
			<h1 style={{ textAlign: 'center', margin: '40px 0' }}>NetSlider</h1>
			<NetSlider
				className='netslider_title_card'
				data={data}
				slideTemplate={props => <SliderTemplate {...props} />}
			/>
		</div>
	);
}