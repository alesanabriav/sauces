import React, { Component } from 'react';
import HeaderLink from './headerLink';

class HeaderNav extends Component {
	render() {
		const { links } = this.props;

		return (
			<ul className="header__nav">
			{links[0].map(link => {
				if(link.title === 'logo') {
						return <li key={link.ID} className="header__nav_logo">
							<a href={link.url}><img src={`${templateUri}/public/img/logo@2x.png`} /></a>
						</li>
					}

				return <HeaderLink key={link.ID} links={links} link={link} />
			})}
			<style jsx>{`
				.header__nav {
					display: none;	
				}

					.header__nav li a:hover {
						text-decoration: none;
					}

					.header__nav_logo {
						position: relative;
						width: 150px;
					}

					.header__nav_logo img {
						position: absolute;
						width: 150px;
						top: 20px;
						left: 0;
						z-index: 90;
					}

					@media (min-width: 1024px) { 
						.header__nav {
							display: flex;
							justify-content: center;
							align-content: center;
							width: 100%;
							padding: 0
						}
					}

			`}</style>
		</ul>
		)
	}
}

export default HeaderNav;
