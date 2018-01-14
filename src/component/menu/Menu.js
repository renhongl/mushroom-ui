

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
        this._clickMenu(container, children, coverEle);
        this._mouseMenu(container, children, coverEle);
    }

    _mouseMenu(container, children, coverEle) {
        container.onmouseover = function(e) {
            let key = Number(e.target.parentNode.getAttribute('key'));
            if(key){
                coverEle.style.top = 50 * (key - 1) + 'px';
            }
        }
    }

    _clickMenu(container, children, coverEle) {
        container.onclick = (e) => {
            let key = Number(e.target.parentNode.getAttribute('key'));
            if(key){
                coverEle.style.top = 50 * (key - 1) + 'px';
            }
            Array.prototype.slice.call(children).forEach((item, i) => {
                item.setAttribute('class', '');
            });
            e.target.setAttribute('class', 'active');
            this._menuRain(e);
        }
    }

    _menuRain(e) {
        let span = document.createElement('span');
        let x = e.offsetX;
        let y = e.offsetY;
        span.setAttribute('class', 'click');
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        e.target.parentNode.appendChild(span);
        setTimeout(() => {
            e.target.parentNode.removeChild(span);
        }, 500);
    }
}