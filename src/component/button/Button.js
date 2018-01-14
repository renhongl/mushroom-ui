
import { extend } from '../tool.js';

export default class Button{
	constructor(options) {
		this.className = 'mr-button';
		this.options = {
			type: 'default'
		}
		this.options = extend(this.options, options);
		this._init();
	}
	
	_init(){
		this._render();
	}
	
	_render() {
		let container = this.options.container;
		container.setAttribute('class', this.className + ' ' + this.className + '-' + this.options.type);
		this._clickButton(container);
	}

	_clickButton(container) {
		container.addEventListener('click', (e) => {
            let x = e.offsetX;
			let y = e.offsetY;
			let span = document.createElement('span');
			span.setAttribute('class', 'mr-button-move')
			span.style.left = x + 'px';
			span.style.top = y + 'px';
            container.appendChild(span);
			setTimeout(function() {
                container.removeChild(span);
			}, 500)
        })
	}
}
