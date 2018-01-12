

import { extend } from '../tool.js';

export default class Menu {
    constructor(options) {
        this.className = 'mr-menu';
        this.options = {
            type: 'left'
        }
        this.options = extend(this.options, options);
        this._init();
    }

    _init() {
        this._render();
    }

    _render() {
        let container = this.options.container;
        let children = container.getElementsByTagName('a');
        let coverEle = document.createElement('li');
        coverEle.setAttribute('class', 'cover');
        container.appendChild(coverEle);
        container.setAttribute('class', this.className + ' ' + this.className + '-' + this.options.type);
        container.onclick = function (e) {
            let key = Number(e.target.parentNode.getAttribute('key'));
            if(key){
                coverEle.style.top = 50 * (key - 1) + 'px';
            }
            Array.prototype.slice.call(children).forEach((item, i) => {
                item.setAttribute('class', '');
            });
            e.target.setAttribute('class', 'active');
        }
        container.onmouseover = function(e) {
            let key = Number(e.target.parentNode.getAttribute('key'));
            if(key){
                coverEle.style.top = 50 * (key - 1) + 'px';
            }
        }
    }

    _extend(target, source){
		for (var key in source) {
			if (source.hasOwnProperty(key)) {
				target[key] = source[key];
			}
		}
		return target;
	}
}