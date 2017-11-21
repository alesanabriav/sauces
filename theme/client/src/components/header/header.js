import React, { Component } from 'react';
import _ from 'lodash';
import HeaderNav from './headerNav';

class Header extends Component {


	render() {
		const { menu } = this.props;
		const links = _.groupBy(menu, 'menu_item_parent');

		return (
			<section className="header">
				<img className="header-logo" src={`${templateUri}/public/img/logo@2x.png`} width="150" />
				<a href="#" className="header-navicon"><i className="ion-navicon"></i></a>
				<HeaderNav links={links} />
				<style jsx>{`
					.header {
						height: 90px;
						background: url(${templateUri}/public/img/wood_header@2x.png) no-repeat;
						background-size: 100% 100%;
						display: flex;
						align-items: center;
						justify-content: flex-end;
						position: relative;
						z-index: 90;
					}

					.header-logo {
						width: 100px;
						position: absolute;
						left: 0;
						right: 0;
						margin: auto;
						z-index: 92;
					}

					.header-navicon {
						color: #fff;
						font-size: 40px;
						margin-right: 20px;
					}

					@media (min-width: 1024px) {
						.header {
							height: 145px;
						}

						.header-logo {
							display: none;
						}

						.header-navicon {
							display: none;
						}
						
					}

				`}</style>
			</section>
		)
	}
}

export default Header;
