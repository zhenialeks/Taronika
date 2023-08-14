
var lang_code = "en"
let g_settings = {
	lang:"en",
	vol:5,
	is_music_on:true
};

l12n = {
	"game_title": ["Taronika", "Taronika"],
	"start_reading": ["Start reading", "Начать гадание"],
	"settings": ["Settings", "Настройки"],
	"about": ["About", "О приложении"],
	"rules": ["Rules of reading", "Правила гадания"],
	"quit": ["Quit", "Выход"],
	"enter_seed": ["Enter initial seed", "Введите начальный\nсид"],
	"how_many_cards": ["How many cards?", "Сколько карт?"],
	"ok": ["OK", "OK"],
	"loading": ["Loading. Please, wait", "Загрузка. Пожалуйста, подождите"],
	"processing": ["Your deck is computing", "Ваш расклад обрабатывается"],
	"Language": ["Language", "Язык"],
	"Music": ["Music", "Музыка"],
	"Volume": ["Volume", "Громкость"],
	"en":["English", "Английский"],
	"ru": ["Russian", "Русский"],
	"on": ["On", "Вкл"],
	"off": ["Off", "Выкл"],
	"select_the_card": ["select the card", "выберете карту"],
	"card_is_closed":["Card is closed", "Карта закрыта"]
};//todo: movable cards
//todo: save the settings
//todo: favicon
/* CSS HEX */
var color_pallete = {
	reseda_green: "#727d71ff",
	coral_pink: "#fe938cff",
	rosy_brown: "#c49792ff",
	saffron: "#f2c42cff",
	eerie_black: "#242423ff",
};


function l12n_text(msg) {
	let variant = 0;
	if (g_settings.lang == "ru")
		variant = 1;
	
	return l12n[msg][variant];
};



function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

		async function cards_need_time(ctx){
			/*
			const img = new Image();
			img.src = 'https://www.pngitem.com/pimgs/m/3-34767_free-png-download-open-eye-crying-laughing-emoji.png';
			for (i = 0; i < 3; ++i){
				ctx.clearRect(0,0,200,200);
				dots = (i %3);
				displayed_dots = ""
				for (j = 0; j < dots; ++j)
					displayed_dots += "."
				ctx.fillText("Ваш расклад обрабатывается"+displayed_dots, 10, 20);
				console.log(i)
				await delay(1000);
			}
			ctx.drawImage(img, 30, 30, 80, 80);
			ctx.fillStyle = "magenta";
			ctx.fillText("У вас Водолей в доме Девы,",10, 40);
			ctx.fillText("вы не сможете быть вместе :с", 10, 50);
			await delay(1000);
*/

		}

		var c = document.querySelector("#c");
		var ctx = c.getContext("2d");
		const WIDTH = 200;
		const HEIGHT = 200;
		c.width = WIDTH;
		c.height = HEIGHT;
		c.style.width = (c.width * 4) + "px";
		c.style.height = (c.height * 4) + "px";


		ctx.lineWidth = 1;

		ctx.strokeRect(0,0,c.width,c.height);

		ctx.moveTo(0,0);
		ctx.lineTo(200, 200);
		ctx.stroke();

		ctx.font = "10px Arial";
		ctx.fillText(l12n_text("processing"), 10, 20) 
		cards_need_time(ctx);

var MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}



		/* basic ui elements */

		class _UI_element {
			constructor(x=0, y=0){
				this.x = x;
				this.y = y;
				this.width = 0;
				this.height = 0;
				this.is_hidden = false;
				this.is_focusable = false;
				this.elements = [];
			}
			move(new_x,new_y){
				this.x = new_x;
				this.y = new_y;
			}
			hide(){
				this.is_hidden = true;
			}
			unhide(){
				this.is_hidden = false
			}

			draw (ctx) {
				if (!this.is_hidden) this.render(ctx);
			}
			render(ctx){
				throw "can't render abstract object";
			}
		}
/*
		class UI_Image extends _UI_element{
			constructor(x, y){
				super(x, y);
				this.img = null;
				this.src = "";
				load();
			}
			load(){
				this.img = new Image();
				this.img.src = this.src;
			}
		}
*/
		class _BG extends _UI_element{
			constructor(x=0, y=0, img_obj=null){
				super(x, y);
				if (img_obj==null){
					this.is_color = true;
					this.color = "white"
				}else{
					this.is_color = false;
					this.img_obj = img_obj;
				}
				this.width = WIDTH;
				this.height = HEIGHT;
			}
			render(ctx){
				ctx.save();
				ctx.fillStyle=this.color;
				ctx.fillRect(this.x, this.y, this.width, this.height);
				ctx.restore();
			}
		}

		class _UI_Text extends _UI_element{
			constructor(x, y, str_text, length='default', font="10px Arial", line_height="default"){
				super(x, y);
				this.x = x;
				this.y = y;
				this.text = str_text;
				this.color = color_pallete.eerie_black;
				this.font = font;
				this.max_width = length;
				this.render_array = [];
				this.str_text = str_text;
				if (line_height == "default")
					this.line_height = 13;
				else
					this.line_height = line_height;
			}
			render(ctx){
				ctx.save();
				let tmp_font = ctx.font;
				ctx.fillStyle = this.color;
				
				ctx.font = this.font;

				this.render_array = this.text.split("\n");

				for (let i = 0; i < this.render_array.length; ++i) {
					if (this.max_width !== 'default')
						ctx.fillText(this.render_array[i], this.x, this.y + i * this.line_height, this.max_width);
					else
						ctx.fillText(this.render_array[i], this.x, this.y + i * this.line_height);
				}


				ctx.restore();
				ctx.font = tmp_font;
			}
		}

		class _Btn extends _UI_element{
			constructor(x, y, str_text, width=60, height=15){
				super(x, y);

				this.width = width;
				this.height = height;
				this.bg_color = "grey";
				this.orig_bg_color = null;
				this.font = "9px Helvetica";
				this.focused = false;
				this.focused_bg_color = color_pallete.eerie_black;
				this.enabled = true;

				const tmp_path = new Path2D();
				tmp_path.rect(4*x, 4*y, 4*width, 4*height);
				tmp_path.closePath();
				this.path = tmp_path;

				// this.ptag = null; //deprecated
				// this.paddings = {x: 18, y: 4}
				this.paddings = {x:5, y:11};

				let _text = new _UI_Text(x + this.paddings.x, y +this.paddings.y, str_text, 'default', this.font);
				this._ui_text = _text;

			}
			setBgColor(color){
				this.bg_color = color;
				this.orig_bg_color = color;
			}
			render(ctx){
				ctx.save();
				if (this.focused)
					this.bg_color = this.focused_bg_color;
				 else
					this.bg_color = this.orig_bg_color;

				ctx.fillStyle = this.bg_color;

				if (this.bg_color == null)
					ctx.strokeRect(this.x, this.y, this.width, this.height);
				else
					ctx.fillRect(this.x, this.y, this.width, this.height);

				this._ui_text.draw(ctx);
				ctx.restore();
			}
			enter(){
				alert("you've clicked on" + this._ui_text.text);
			}

		}

		class Menu_Btn extends _Btn{
			constructor(x, y, str_text, width=60, height=15) {
				super(x, y, str_text, width, height);
				this._ui_text.color = "white"
				this.setBgColor(color_pallete.coral_pink);
			}
			keydown(event){

			}
		}

		class TextInput extends _UI_element{ //fixme
			constructor(x, y, width=60, height=10, default_input="10") {
				super(x, y);
				this.width = width;
				this.height = height;
				this.input_buff = default_input;
				this.font = "9px Arial";

				this.path = new Path2D();
				this.path.rect(x*4, y*4, this.width*4, this.height*4);
				this.path.closePath();
				this.tpaddings={x:2, y:2}
				this.counter = 0;
				this.flipper = false;
			}
			keydown(e){
				if (e.key.length === 1){
					if (this.text_metric.width +5 > this.width)
						return;
					this.input_buff += e.key;
				} else if (e.keyCode === 13)
					this.enter(e);
				else if (e.keyCode === 8) //backspace
					this.input_buff= this.input_buff.slice(0, this.input_buff.length-1);
			}
			enter(e){
				cur_screen.im.focus_down();
			}
			render(ctx){
				ctx.save();
				ctx.fillStyle="black";
				ctx.strokeStyle = "black";
				ctx.lineWidth = 1;
				ctx.font = this.font;
				this.text_metric = ctx.measureText(this.input_buff);//todo: optimize
				// ctx.strokeRect(this.x, this.y, this.width, this.height);
				ctx.beginPath();
				ctx.moveTo(this.x, this.y+this.height+0.5);
				ctx.lineTo(this.x+this.width, this.y+this.height+0.5);
				ctx.closePath();

				ctx.stroke();
				ctx.fillText(this.input_buff.toString(), this.x+this.tpaddings.x, this.y+this.height-this.tpaddings.y, this.width);

				if (this.focused) {
					this.counter++;
					if ((this.counter %= 10) === 0)
						this.flipper = !this.flipper;
					if (this.flipper)
						ctx.fillRect(this.x + (this.text_metric.width + 2 > this.width ? this.width : this.text_metric.width + 2), this.y + 1, 1, this.height - 3);
				}
				ctx.restore();
			}

		}



		/* More complex UI elements */

		class DialogTypeEnum{
			static OK_CANCEL_DIALOG = 1;
			static YES_NO_DIALOG = 2;
			static INPUT_TEXT_DIALOG = 3;
		}

		class Dialog_Window extends _UI_element{
			constructor(dialog_type, msg) {
				super();
				this.width = WIDTH/2;
				this.height = HEIGHT/2;
				this.position_self_centered(this.width, this.height);

				//contains:
				this.bar_height = 10;
				this.bg = new _BG(this.x, this.y);
				this.bar = new _BG(this.x, this.y);
				this.bar.height = this.bar_height;
				this.bar.width = this.width;
				this.bar.color = color_pallete.reseda_green;
				this.bg.color = color_pallete.coral_pink;
				this.bg.width = this.width;
				this.bg.height = this.height;
				this.input_field = null;

				//bar_btn
				this.bar_btn = new _Btn(this.x + this.width - 10, this.y, 'X', 10, 10);
				this.bar_btn._ui_text.x = this.bar_btn.x+2.5;
				this.bar_btn._ui_text.y = this.bar_btn.y+9;
				this.bar_btn.setBgColor('green');
				this.bar_btn.enter = () => {
					this.try_to_quit();
				}

				this.elements.push(this.bg, this.bar, this.bar_btn);
				this.focusable = []
				this._text = msg;
				this.response = null;
				this.tpaddings = {x:5, y:5};
				this._text_field = new _UI_Text(this.x + this.tpaddings.x, this.y + 10 + this.tpaddings.y, msg, this.width-this.tpaddings.x);

				//buttons and actions
				if (dialog_type === DialogTypeEnum.OK_CANCEL_DIALOG){
					const ok_btn = new _Btn(this.x+this.tpaddings.x, this.y+this.height-20, 'OK', this.width/3, 16);
					ok_btn._ui_text.x += 5;
					ok_btn.setBgColor("grey");
					ok_btn.enter = this.ok;

					const cancel_btn = new _Btn(this.x+this.width -this.tpaddings.x-this.width/3, this.y+this.height-20, 'Cancel', this.width/3, 16);
					cancel_btn._ui_text.x -= 2;
					cancel_btn.enter = this.cancel;

					this.elements.push(ok_btn, cancel_btn);
					this.focusable.push(ok_btn, cancel_btn);
				} else if (dialog_type === DialogTypeEnum.YES_NO_DIALOG){
					const ok_btn = new _Btn(this.x+this.tpaddings.x, this.y+this.height-25, 'Yes', this.width/3, 16);
					ok_btn.enter = this.yes;

					const no_btn = new _Btn(this.x+this.width -this.tpaddings.x-this.width/3, this.y+this.height-25, 'No', this.width/3, 16);
					no_btn.enter = this.no;

					this.elements.push(ok_btn, no_btn);
					this.focusable.push(ok_btn, no_btn);
				} else if (dialog_type === DialogTypeEnum.INPUT_TEXT_DIALOG){
					const _text = new _UI_Text(this.x + this.tpaddings.x, this.y + this.bar_height +this.tpaddings.y + 10,
						this._text, 'default', "9px Arial");
					const input_field = new TextInput(_text.x, _text.y + _text.height+ 20, 60, 10, "");
					this.input_field = input_field;
					const ok_btn = new _Btn(this.x + input_field.width + 10, input_field.y, "Ok", 25, 10);
					ok_btn.setBgColor('grey');
					ok_btn._ui_text.x += 2;
					ok_btn._ui_text.y -= 3;
					ok_btn.enter = this.input_ok;
					this.elements.push(ok_btn, _text, input_field);
					this.focusable.push(input_field, ok_btn);
				}

			}
			position_self_centered(w, h){
				this.x = WIDTH/2 - w/2;
				this.y = HEIGHT/2 - h/2;
			}
			try_to_quit(){
				throw 'override me!';
			}
			ok(){
				throw 'override me!';
			}
			cancel(){
				throw 'override me!';
			}
			yes() {throw 'override me'}
			no() {throw 'override me'}
			input_ok() {
				cur_screen.dialog_msg = cur_screen.dialog.input_field.input_buff;
				cur_screen.close_dialog();

				switch (cur_screen.state) {
					case AppScreenState.INITIAL:
						cur_screen.state = AppScreenState.SEED_ENTERED;
						cur_screen.count_scene();
						break;
					case AppScreenState.SEED_ENTERED:
						cur_screen.state = AppScreenState.COUNT_ENTERED;
						cur_screen.main_scene();
						break;
				}
			}
			render(ctx){
				ctx.save();
				this.elements.forEach(e => {
					e.draw(ctx);
				})
				ctx.restore();
			}

		}

		class _Screen extends _UI_element{
			constructor(){
				super(0,0);
				this.elements = [];
				this.keybindings = [];
				this.focusable = [];
				this.bg = null;
				this.dialog_msg = null;
				this.dialog = null;
				this.im = null;

				this.buffer_bg_color = null;

			}
			pushElement(el){
				this.elements.push(el);
			}
			render(ctx) {
                this.elements.forEach(el => {
                    el.draw(ctx);
                });
            }
            activate_bindings(){
				document.addEventListener('keydown', this.im.keydown);
				c.addEventListener('mouseup', this.im.mouseup);
				c.addEventListener('mousedown', this.im.mousedown);
				c.addEventListener('mousemove', this.im.mousemove);
				c.addEventListener('click', this.im.click);
			}
            deactivate_bindings(){
				document.removeEventListener('keydown', this.im.keydown);
				c.removeEventListener('mouseup', this.im.mouseup);
				c.removeEventListener('mousedown', this.im.mousedown);
				c.removeEventListener('mousemove', this.im.mousemove);
				c.removeEventListener('click', this.im.click);
            }
			remake_im(focusable_list=this.focusable){
				if (g_InputManager !== null){
					cur_screen.deactivate_bindings();
					this.im = null;
				}

				this.im = new InputManager();
				g_InputManager = this.im;
				this.im.setFocusableElements(focusable_list);
				this.im.init_focus();
				this.activate_bindings();
			}
			close_dialog(){
				this.elements.splice(this.elements.indexOf(this.dialog), 1);
				delete this.dialog;
				this.dialog = null;

				this.remake_im();
			}

		}

		class InputManager{
			constructor(){
				this.focusable_els = []
				this.focusable_paths = []
				this.cur = null;
				this.is_mouse_holded = false;
			}
			setFocusableElements(_list){
				this.focusable_els = this.focusable_els.concat(_list)
			}
			init_focus(){
                if (this.focusable_els.length === 0) return;
				this.cur_no = 0;
				this.max_focus_no = this.focusable_els.length;
				this.cur = this.focusable_els[this.cur_no];
				this.cur.focused = true;
			}
			focus_down(){
                if (this.focusable_els.length === 0) return;
				this.cur.focused = false;
				this.cur_no = (this.cur_no + 1) % this.max_focus_no;
				this.cur = this.focusable_els[this.cur_no];
				this.cur.focused = true;
			}
			focus_right(){}
			focus_up(){
                if (this.focusable_els.length === 0) return;
				this.cur.focused = false;
				this.cur_no = (this.cur_no - 1) >= 0 ? (this.cur_no - 1) : this.max_focus_no-1;
				this.cur = this.focusable_els[this.cur_no];
				this.cur.focused = true;
			}
			focus_on(el){
				this.cur.focused = false;
				this.cur_no = this.focusable_els.findIndex(value => value===el);
				this.cur = el;
				this.cur.focused = true;
			}
			focus_left(){}
			keydown(e){

				if (g_InputManager.cur instanceof TextInput && !(e.keyCode in [38, 40])){
					g_InputManager.cur.keydown(e);
				}
				if (g_InputManager.cur instanceof VolumeControl && (e.keyCode != 38) && (e.keyCode != 40)) {
					g_InputManager.cur.adjust(e.keyCode);
				}

				switch (e.keyCode) {
					case 37://left
						cur_screen.im.focus_left();
						break;
					case 38://UP
						cur_screen.im.focus_up();
						break;
					case 39://right;
						cur_screen.im.focus_right();
						break;
                    case 40://DOWN
						cur_screen.im.focus_down();
						break;
					case 13://ENTER:
						cur_screen.im.cur.enter();
						break;
                    case 27://ESC:
                        cur_screen.im.escape();
                        break;
					case 9://TAB
						cur_screen.im.tab();
						break;
					default:
						// alert(e.keyCode);

				}
			}
            escape(){
                if (cur_screen instanceof SettingsScreen || cur_screen instanceof AppScreen || cur_screen instanceof AboutScreen){
                    cur_screen.deactivate_bindings();
                    cur_screen = new Main_Screen();
                }
			}
			mousedown(e) { this.is_mouse_holded = true; }
			mouseup(e) { this.is_mouse_holded = false; }
			mousemove(e) { //todo: move to 30fps check, fixme moving

				let cursor_flag = false;
				for (let i = 0; i < g_InputManager.focusable_els.length; i++) {
					if (ctx.isPointInPath(g_InputManager.focusable_els[i].path, e.offsetX, e.offsetY)){
						cursor_flag = true;
						g_InputManager.focus_on(g_InputManager.focusable_els[i]);
						break;
					}
				}
				c.style['cursor'] = cursor_flag ? 'pointer' : 'auto';

				// if (this.is_mouse_holded && g_InputManager.cur instanceof Card) {
				// 	let card = g_InputManager.cur;
				// 	card.move(e.offsetX / 4, e.offsetY / 4);
				// }

			}
			click(e){
				if (g_InputManager.cur != null)
					if (ctx.isPointInPath(g_InputManager.cur.path, e.offsetX, e.offsetY))
						g_InputManager.cur.enter();
			}
			tab(){}
		}

		class ResourceManager{

			static card_postfix = ".png";
			static card_prefix = "imgs/deck/";
			static card_names_en = ["the tower", "2 of cups", "queen of coins", "the hanged man", "7 of wands", "3 of wands", "4 of cups", "2 of swords", "queen of wands", "justice", "6 of cups", "ace of cups", "4 of swords", "2 of coins", "king of swords", "5 of cups", "6 of swords", "ace of swords", "4 of coins", "2 of wands", "king of coins", "5 of swords", "6 of coins", "ace of coins", "4 of wands", "the devil", "king of wands", "5 of coins", "6 of wands", "ace of wands", "10 of cups", "the hierophant", "the Moon", "5 of wands", "the fool", "temperance", "10 of swords", "the emperor", "the magician", "knight of cups", "strength", "the lovers", "10 of coins", "the empress", "the world", "knight of swords", "the deatch", "8 of cups", "10 of wands", "the cariot", "the hermit", "knight of coins", "the sum", "8 of swords", "9 of cups", "wheel of fortune", "page of cups", "kingd of wands", "judgement", "8 of coins", "9 of swords", "king of cups", "page of swords", "7 of cups", "3 of cups", "8 of wands", "9 of coins", "queen of cups", "page of coins", "7 of swords", "3 of swords", "the high priestess", "9 of wands", "queen of swords", "page of wands", "7 of coins", "3 of coins", "the star"];
			static card_names_ru = ["башня", "2 чаш", "королева пентаклей", "повешенный", "7 жезлов", "3 жезлов", "4 чаш", "2 мечей", "королева жезлов", "правосудие", "6 чаш", "туз чаш", "4 мечей", "2 пентаклей", "король мечей", "5 чаш", "6 мечей", "туз мечей", "4 пентаклей", "2 жезлов", "король пентаклей", "5 мечей", "6 пентаклей", "туз пентаклей", "4 жезлов", "дьявол", "король жезлов", "5 пентаклей", "6 жезлов", "туз жезлов", "9 чаш", "иерофант", "луна", "5 жезлов", "шут", "умеренность", "10 мечей", "император", "маг", "рыцарь чаш", "сила", "влюблённые", "10 пентаклей", "императрица", "мир", "рыцарь мечей", "смерть", "8 чаш", "10 жезлов", "колесница", "отшельник", "рыцарь пентаклей", "солнце", "восьмёрка мечей", "9 чаш", "колесо фортуны", "паж чаш", "рыцарь жезлов", "суд", "8 пентаклей", "9 мечей", "король чаш", "паж мечей", "7 чаш", "3 чаш", "8 жезлов", "9 пентклей", "королева чаш", "паж пентаклей", "7 мечей", "3 мечей", "жрица", "9 жезлов", "королева мечей", "паж жезлов", "7 пентаклей", "3 пентаклей", "звезда"];
			static card_names =["bashnya", "dvojka_chash", "koroleva_pentaklej", "poveshennyj", "semerka_zhezlov", "trojka_zhezlov", "chetverka_chash", "dvojka_mechej", "koroleva_zhezlov", "pravosudie", "shesterka_chash", "tuz_chash", "chetverka_mechej", "dvojka_pentaklej", "korol_mechej", "pyaterka_chash", "shesterka_mechej", "tuz_mechej", "chetverka_pentaklej", "dvojka_zhezlov", "korol_pentaklej", "pyaterka_mechej", "shesterka_pentaklej", "tuz_pentaklej", "chetverka_zhezlov", "dyavol", "korol_zhezlov", "pyaterka_pentaklej", "shesterka_zhezlov", "tuz_zhezlov", "desyatka_chash", "ierofant", "luna", "pyaterka_zhezlov", "shut", "umerennost", "desyatka_mechej", "imperator", "mag", "rytsar_chash", "sila", "vlyublennye", "desyatka_pentaklej", "imperatritsa", "mir", "rytsar_mechej", "smert", "vosmerka_chash", "desyatka_zhezlov", "kolesnitsa", "otshelnik", "rytsar_pentaklej", "solntse", "vosmerka_mechej", "devyatka_chash", "koleso_fortuny", "pazh_chash", "rytsar_zhezlov", "sud", "vosmerka_pentaklej", "devyatka_mechej", "korol_chash", "pazh_mechej", "semerka_chash", "trojka_chash", "vosmerka_zhezlov", "devyatka_pentaklej", "koroleva_chash", "pazh_pentaklej", "semerka_mechej", "trojka_mechej", "zhritsa", "devyatka_zhezlov", "koroleva_mechej", "pazh_zhezlov", "semerka_pentaklej", "trojka_pentaklej", "zvezda"];
			static paths={
				music:{
					startup:"/audio/startup.mp3"
				},
				images:{
					backgrounds:{
						main_screen:"",
						settings_screen:""
					},
					card_shirt:"",
					cards:{}
				}
			};
			static resources;

			static generate_card_paths(){ 
				this.card_names.forEach(cardname => {
					this.paths.images.cards[cardname] = cardname + this.card_postfix;
				})
			}

			constructor() {
				ResourceManager.generate_card_paths();

				this.resources = {
					music: {startup:null},
					images: {
						backgrounds: {main_screen: null, settings_screen: null},
						card_shirt: null,
						cards: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
					}
				}
				this.is_loading = false;
				this.is_loaded = false;
				this.total_count = 81;
				this.cur_count = 0;
			}

			start_loading() {
				this.is_loading = true;

				//loading cards:
				for (var i = 0; i < 78; ++i){
					this.resources.images.cards[i] = new Image();
					this.resources.images.cards[i].src = ResourceManager.card_prefix + ResourceManager.paths.images.cards[ResourceManager.card_names[i]];
					this.resources.images.cards[i].addEventListener('load', e => {
						g_ResourceManager.cur_count++;
					});
				}
				this.resources.images.card_shirt = new Image();
				this.resources.images.card_shirt.src = 'imgs/shirt.png';
				this.resources.images.card_shirt.addEventListener('load', e => {
					g_ResourceManager.cur_count++;
				});
				this.update_status().then(()=>{console.log("card loading is done!");this.sound_manager()});

			}
			async update_status(){
				while (this.cur_count !== this.total_count){
					await delay(100);
				}
				this.is_loaded = true;
				this.is_loading = false;

			}
			sound_manager(){

				const today = new Date();
				const audioElement = document.querySelector(".startup");
				if (today.getDay() === 5){
					audioElement.play();
					audioElement.addEventListener('ended', () => {
						g_ResourceManager.start_playing_bgm();
					})
				} else {
					this.start_playing_bgm();
				}
			}
			start_playing_bgm(){
				const a = document.querySelector('.bgm');
				a.play();
				a.addEventListener('ended', this.start_playing_bgm);
			}
		}


		/* Main_Screen */

		class Main_Screen extends _Screen{
			constructor() {
				super();
				this.bg = new _BG();

				this.LOGO = new _UI_Text(WIDTH/2 - 45, 30, l12n_text("game_title"), 'default', '22px Arial');

				let start_btn = new Menu_Btn(WIDTH / 2 - 80 / 2, 50, l12n_text("start_reading"), 80);
                start_btn.enter = () => {
                    this.deactivate_bindings();
                    cur_screen = new AppScreen();
                }
				let setting_btn = new Menu_Btn(WIDTH / 2 - 80 / 2, 70, l12n_text("settings"), 80);
				setting_btn.enter =  ()=>{
                    this.deactivate_bindings();
					cur_screen = new SettingsScreen();
				}
				let about_btn = new Menu_Btn(WIDTH / 2 - 80 / 2, 90, l12n_text("about"), 80);
				about_btn.enter = () => {
					this.deactivate_bindings();
					cur_screen = new AboutScreen();
				}
				let rules_btn = new Menu_Btn(WIDTH / 2 - 80 / 2, 110, l12n_text("rules"), 80);
				rules_btn.enter = () =>{alert('read rules somewhere else, please. Thanks!')}//fixme
				let exit_btn = new Menu_Btn(WIDTH / 2 - 80 / 2, 130, l12n_text("quit"), 80);
				exit_btn.enter = () => {window.close();}

				this.elements.push(this.bg, this.LOGO, start_btn, setting_btn, about_btn, rules_btn, exit_btn);
				this.focusable.push(start_btn, setting_btn, about_btn, rules_btn, exit_btn);

				this.im = new InputManager();
				this.im.setFocusableElements(this.focusable);
				this.im.init_focus();
				g_InputManager = this.im;
				this.activate_bindings();
			}
			render(ctx) {
				if (g_ResourceManager.is_loaded)
					super.render(ctx);
				else{
					ctx.save();
					ctx.fillStyle = "white";
					ctx.fillRect(0, 0, WIDTH, HEIGHT);
					ctx.fillStyle = "violet";
					ctx.fillText(l12n_text("loading"), WIDTH/2 - 10, HEIGHT/2);
					ctx.restore();
				}
			}


		}

/* Settings Screen */
		
		class SettingsControl extends _UI_element{
			constructor(x, y, title) {
				super(x, y);
				this.x = x;
				this.y = y;
				this.title = title;
				this.width = 150;
				this.height = 20;
				this.focused_bg_color = color_pallete.saffron;
				this.orig_bg_color = color_pallete.coral_pink;
				this.focused = false;
				// this.control_type = control_type;
				// this.state = g_settings[control_type];

				const tmp_path = new Path2D();
				tmp_path.rect(4*x, 4*y, 4*this.width, 4*this.height);
				tmp_path.closePath();
				this.path = tmp_path;//todo: разобраться опять с областями фокуса

				this.paddings = {x:2, y:10};

				let _text = new _UI_Text(x + this.paddings.x, y + this.paddings.y, title, 'default', "10px Arial");
				this._ui_text = _text;
			}
			render(ctx) {
				ctx.save();
				if (this.focused)
					this.bg_color = this.focused_bg_color;
				 else
					this.bg_color = this.orig_bg_color;

				ctx.fillStyle = this.bg_color;

				if (this.bg_color == null)
					ctx.strokeRect(this.x, this.y, this.width, this.height);
				else
					ctx.fillRect(this.x, this.y, this.width, this.height);


				this._ui_text.draw(ctx);
				ctx.restore();
			}
		}

		class LanguageControl extends SettingsControl{
			constructor(x, y) {
				super(x, y, l12n_text("Language"));
			}
			enter() {
				if (g_settings.lang == "en")
					g_settings.lang = "ru";
				else if (g_settings.lang == "ru")
					g_settings.lang = "en";
				else
					throw "unknown language";
				
				cur_screen = new SettingsScreen();
			}

			render(ctx) {
				super.render(ctx);
				ctx.save();

				ctx.font = "10px Arial";
				// ctx.color = color_pallete.reseda_green;
				ctx.fillText(l12n_text(g_settings.lang), this.width - 50, this.height);
				
				ctx.restore();
			}
		}

		class VolumeControl extends SettingsControl{
			constructor(x, y) {
				super(x, y, l12n_text("Volume"));
			}

			adjust(keycode = null) {
				if (keycode === 37){ //left
					if (g_settings.vol - 1 >= 0) 
						g_settings.vol--;
					
				} else if (keycode === 39) { //right{
					if (g_settings.vol + 1 <= MAX_VOLUME)
						g_settings.vol++;
				}
				document.querySelector('.bgm').volume = g_settings.vol / 10;
			}

			render(ctx) {
				super.render(ctx);
				ctx.save();

				let start_x = this.x + 51;
				let start_y = this.y + 2;
				let i_w = 8;
				let i_h = 16;
				let x_p = 2;

				ctx.fillStyle = color_pallete.reseda_green;
				ctx.strokeStyle = color_pallete.reseda_green;

				for (var i = 0; i < MAX_VOLUME; ++i) {
					if ((i+1) <= g_settings.vol){
						ctx.fillRect(start_x + (i_w + x_p) * i,
							start_y,
							i_w, i_h
						);
						ctx.strokeRect(start_x + (i_w + x_p) * i,
						start_y,
						i_w, i_h);
					} else {
						ctx.strokeRect(start_x + (i_w + x_p) * i,
						start_y,
						i_w, i_h);
					}
				}
				ctx.restore();
			}

		}

		class MusicControl extends SettingsControl{
			constructor(x, y) {
				super(x, y, l12n_text("Music"));
			}
			enter() {
				g_settings.is_music_on = !g_settings.is_music_on;
				document.querySelector(".bgm");
				if (g_settings.is_music_on) {
					document.querySelector(".bgm").play();
				} else
					document.querySelector(".bgm").pause();
			}
			render(ctx) {
				super.render(ctx);
				ctx.save();

				ctx.font = "10px Arial";
				ctx.fillText(l12n_text(g_settings.is_music_on ? "on" : "off"), this.width - 30, this.y+10);

				ctx.restore();
			}
		}

		class SettingsTable extends _UI_element{
			constructor(x, y) {
				super(x, y);
				let lang_control = new LanguageControl(x, y);
				let vol_control = new VolumeControl(x, y+ 25);
				let mus_control = new MusicControl(x, y+ 50);

				this.elements.push(lang_control, vol_control, mus_control);
			}
			render(ctx) {
				this.elements.forEach(el =>{
					el.render(ctx);
				});
			}
		}

		class SettingsScreen extends _Screen{
			constructor() {
				super();
				this.bg = new _BG();
				this.bg.color = "grey";

				let settings_table = new SettingsTable(10, 10);
				this.elements.push(this.bg, settings_table);
				this.focusable = settings_table.elements;

				this.im = new InputManager();
				this.im.setFocusableElements(this.focusable);
				this.im.init_focus();
				g_InputManager = this.im;
                // alert("activating bindings");
                this.activate_bindings();
			}


		}

		/* AppScreen */

		class Card extends _UI_element{
			constructor(x, y, val=-1, width = 30) {
				super(x, y);

				if (val==-1)
					this.img = g_ResourceManager.resources.images.cards[Math.floor((Math.random()*78))];
				else
					this.img = g_ResourceManager.resources.images.cards[val];
				this.shirt_img = g_ResourceManager.resources.images.card_shirt;
				this.val = val;
				this.is_hidden = false;
				this.width = this.img.width = width;
				this.height = this.img.height = this.width * 1.78;

				//todo: new approach to InputManager
				this.is_focusable = true;
				this.path = new Path2D();
				this.path.rect(4*x, 4*y, 4*width, 4*width*1.78);
				this.path.closePath();

				this.is_shirt_up = true;
				this.cur_state = 0; //0..3
				this.is_animation_started = false;
				this.animation_shift = [0, -5];
			}

			get_next_scale() {
				if (!this.is_animation_started)
					return 1;

				switch (this.cur_state) {
					case 0:
						this.is_animation_started = true;
						this.cur_state++;
						return 0.6;
					case 1:
						this.cur_state++;
						this.is_shirt_up = !this.is_shirt_up;
						return 0.1;
					case 2:
						this.cur_state++;
						return 0.6;
					case 3:
						this.is_animation_started = false;
						this.cur_state = 0;
						return 1;
				}
			}

			enter(){
				this.is_animation_started = true;
			}

			render(ctx) {
				ctx.save();
				if (this.is_animation_started) {
					ctx.translate(this.width / 2 + this.x, this.height / 2 + this.y);
					ctx.scale(this.get_next_scale(), 1);
					ctx.translate(-(this.width/2 + this.x) + this.animation_shift[0], -(this.height/2 + this.y) + this.animation_shift[1]);
				}
				if (this.focused) {
					ctx.strokeStyle = "2 blue";
					ctx.strokeRect(this.x, this.y, this.width, this.height);
				}
				ctx.drawImage(this.is_shirt_up ? this.shirt_img : this.img, this.x, this.y, this.width, this.height);
				ctx.restore();
			}

			generate_hint_message(order = 0) {
				var postfix;
				if (g_settings.lang == "en") {
					postfix = ResourceManager.card_names_en[this.val];
				} else
					postfix = ResourceManager.card_names_ru[this.val];
				this.hint_message = (order + 1) + ". " + postfix;
			}

			move(x, y) { //fixme
				super.move(x, y);
				this.path.moveTo(x, y);
			}

		}

		class Hint extends _UI_Text{
			constructor(x, y, str_text, length='default', font='10px Arial') {
				super(x, y, str_text, length, font);
				this.color = "white";
			}
			render(ctx) {
				if (!g_InputManager.cur.is_shirt_up)
					this.text = g_InputManager.cur.hint_message;
				else
					this.text = l12n_text("card_is_closed");
				ctx.save();
				ctx.fillStyle = "rgba(0,0,0,0.5)";
				ctx.fillRect(0, this.y-15, WIDTH, 20);
				ctx.restore();
				super.render(ctx);

			}

		}

		class AppScreenState{
			static INITIAL=1;
			static SEED_ENTERED=2;
			static COUNT_ENTERED=3;
		}

		class AppScreen extends _Screen{
			constructor() {
				//bg
                super();
				this.bg = new _BG();
				this.bg.color = color_pallete.saffron;
				this.date = new Date();
				this.state =
                //content

				this.focusable = [];
				this.elements.push(this.bg);
				this.state = AppScreenState.INITIAL;
				this.initial_scene();
                //input_manager
                // this.remake_im();

			}
			activate_bindings() {
				super.activate_bindings();
				// this.im.tab = this.show_input_dialog;//todo: remove this line;
			}
			show_input_dialog(msg, default_text=null){
				this.dialog = new Dialog_Window(DialogTypeEnum.INPUT_TEXT_DIALOG, msg);
				if (default_text != null) this.dialog.input_field.input_buff=default_text;
				this.elements.push(this.dialog);
				this.remake_im(this.dialog.focusable);
			}
			initial_scene(){
				for (var i = 0; i <78; ++i){
					const card = new Card(Math.floor(Math.random()*175), Math.floor(Math.random()*155.5), i);
					this.elements.push(card);
				}
				this.show_input_dialog(l12n_text("enter_seed"));
/*				(paseInt(MD5(this.date.toISOString()),16) + parseInt(MD5(cur_screen.dialog_msg))) % 78;
				console.log(paseInt(cur_screen.dialog_msg))*/

			}
			count_scene(){
				this.seed=this.dialog_msg;
				this.show_input_dialog(l12n_text("how_many_cards"), "10");

			}
			next_hash(seed, is_first_time = false){
				if (is_first_time)
					return MD5(this.date.toISOString())+MD5(seed);
				else
					return MD5(seed+Math.random()*78);
			}
			main_scene(){
				this.count = parseInt(this.dialog_msg);
				this.elements = [this.bg];
				this.focusable = [];
				this.seed = this.next_hash(this.seed);

				let cur_x = 10;
				let cur_y = 10;
				this.nums_on_board = []
				for (var i = 0; i < this.count; ++i){
					let num;
					do {
						num = parseInt("0x" + this.seed, 16) % 78;
						this.seed = this.next_hash(this.seed);
					} while (this.nums_on_board.includes(num));

					const card = new Card(cur_x, cur_y, num);
					card.generate_hint_message(i);
					this.elements.push(card);
					this.focusable.push(card);
					this.nums_on_board.push(card.val);
					cur_x += 45;
					if (cur_x >= 175) {
						cur_x = 10;
						cur_y += 65;
					}
				}

				this.im.setFocusableElements(this.focusable);
				this.im.init_focus();
				this.im.focus_right=this.im.focus_down;
				this.im.focus_left = this.im.focus_up;
				this.im.focus_up=() =>{};
				this.im.focus_down=()=>{};
				let hint = new Hint(10, HEIGHT-3, l12n_text("select_the_card"));

				this.elements.push(hint);
				console.log('partial success');
			}
			start

		}

		class AboutScreen extends _Screen{
			constructor() {
				super();
				this.bg = new _BG();
				this.bg.color = "white";

				this.text = new _UI_Text(10, 20, "music: Erik Satie - Gymnopédie\n No.1 8bit Jazz Version (youtube)", 'default', '9px Arial');
				this.text2 = new _UI_Text(10, 80, "app author: Eugene Aleksandrov", 'default', '9px Arial');
				this.text3 = new _UI_Text(10, 100, "esc - back to main menu, arrows - navigate", 'default', '9px Arial');
				this.text4 = new _UI_Text(10, 140, "enter - enter; ", 'default', '9px Arial');


				this.elements = [this.bg, this.text, this.text2, this.text3, this.text4];
				this.focusable = [];
				this.remake_im();
			}

		}
