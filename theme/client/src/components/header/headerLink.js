import React, { Component } from 'react';
import classnames from 'classnames';

class HeaderLink extends Component {
	state = {
		showSubnav: false
	}

	toggleSubnav = () => {
		this.setState({ showSubnav: !this.state.showSubnav });
	}

	render() {
		const { link, links } = this.props;
		const {showSubnav } = this.state;
		const subnavClass = classnames('header__nav_subnav', {
			'header__nav_subnav--open': showSubnav
		});

		return (
			<li
				className="header__nav_link"
				onMouseEnter={this.toggleSubnav} 
				onMouseLeave={this.toggleSubnav}
			>
				<a href={link.url}>{link.title}</a>
				{links.hasOwnProperty(link.ID) && 
					<div className={subnavClass}>
						{links[link.ID].map(sublink => (
							<section key={sublink.ID}>
								<span className="subnav-title">{sublink.title}</span>
								{links.hasOwnProperty(sublink.ID) && 
									<ul>
										{links[sublink.ID].map(l => 
											<li key={l.ID}><a href={l.url}>{l.title}</a></li>
										)}
									</ul>
								}
							</section>
						))}
					</div>
				}
				
				<style jsx>{`
				.header__nav_link > a {
						color: #fff;
						padding: 0 40px;
						font-size: 16px;
						font-weight: 600;
						letter-spacing: 2px;
						display: flex;
						height: 145px;
						align-items: center;
					}

					.header__nav_link a:hover {
						text-decoration: none;
					}

					.header__nav_link:first-child  > a{
						padding-left: 0;
					}

					.header__nav_subnav {
						width: 100%;
    				position: absolute;
    				left: 0;
						padding: 60px 0;
						background: rgba(230, 70, 51, 0.9);
						opacity: 0;
						pointer-events: none;
						transition: opacity .15s;
						display: flex;
						justify-content: space-around;
						text-align: center;
						
					}

					.header__nav_subnav ul li a {
						color: #fff;
						font-weight: 500;
					}

					.header__nav_subnav--open {
						opacity: 1;
						pointer-events: all;
					}

					.subnav-title {
						font-size: 16px;
						font-weight: 600;
					}

				`}</style>
			</li>
		)
	}
}

export default HeaderLink;
