import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer>
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon alt ${icon}`} target="_blank">
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; Jeff Graham</li>
        {/* <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
        <li>
          Demo Images: <a href="http://unsplash.com">Unsplash</a>
        </li> */}
      </ul>
    </footer>
  );
}
