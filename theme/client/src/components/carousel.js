import slick from 'slick-carousel';
import React, { Component } from 'react';
import jQuery from 'jquery';

class Slider extends Component {
	componentDidMount() {
		jQuery(this.slider).slick({
			arrows: false,
			dots: true,
			appendDots: jQuery(this.dots)
		});
	}

	render() {
		const { images } = this.props;

		return (
			<section>
				<div ref={ref => this.slider = ref}>
				{images.map(imageUrl => {
					return <div key={imageUrl} ><img src={imageUrl} alt=""/></div>
				})}
				
				
	
				</div>
				<div className="dots" ref={ref => this.dots = ref}></div>
			
			<style jsx>{`
				section {
					position: relative;
				}
				.dots {
					position: absolute;
					left: 0;
					right: 0;
					margin: 0 auto;
					bottom: 40px;
				}

				.slick-dots button {
					background: red;
				}
				img {
					width: 100%;
				}
			`}</style>
			</section>
		);
	}
}

export default Slider;
