/**
 * 
 */

export default class Message {
	constructor(options) {
		this.messageDOM = document.createElement('span');
		this.className = 'mr-message';
		this.options = {
			position: 'center-top',
			message: 'default message',
			delay: 4000,
			type: 'infor'
		};
		this.options = this._extend(this.options, options);
		this._init();
	}
	
	_init() {
		this._render();
		this._destroy();
	}
	
	_destroy() {
		setTimeout(function() {
			this.messageDOM.style.opacity = 0;
			setTimeout(function() {
				document.body.removeChild(this.messageDOM);
			}.bind(this), 1000);
		}.bind(this), this.options.delay)
	}
	
	_render() {
		let numbers = document.querySelectorAll('.' + this.className + '-' + this.options.position).length;
		this.messageDOM.setAttribute('class', this.className + ' ' + this.className + '-' + this.options.position + ' '+ this.className + '-' + this.options.type);
		this.messageDOM.innerText = this.options.message;
		if(this.options.position !== 'center-bottom') {
			this.messageDOM.style.top = numbers * 50 + 'px';
		} else {
			this.messageDOM.style.bottom = numbers * 50 + 'px';
		}
		document.body.appendChild(this.messageDOM);
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
//---------------Plugin end---------------------------
