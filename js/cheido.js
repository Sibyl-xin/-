//iframe
if(screen.width<400){
	function iFrameHeight() {   
				var ifm= document.getElementById("myiframe");   
				var subWeb = document.frames ? document.frames["myiframe"].document : ifm.contentDocument;   
				if(ifm != null && subWeb != null) {
				   ifm.height = subWeb.body.scrollHeight;
				  
				}   
			} 
			window.onresize=function(){
				iFrameHeight();
	
			}
}
			function iFrameHeight() {   
				var ifm= document.getElementById("myiframe");   
				var subWeb = document.frames ? document.frames["myiframe"].document : ifm.contentDocument;   
				if(ifm != null && subWeb != null) {
				   ifm.height = subWeb.body.scrollHeight;
				  
				}   
			} 
			window.onresize=function(){
				iFrameHeight();
	
			}
/*左侧菜单栏的手风琴效果*/
			$(function() {
				var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;
				// Variables privadas
				var links = this.el.find('.link');
				// Evento
				links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
			}
			Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
					$this = $(this),
					$next = $this.next();
					$next.slideToggle();
					$this.parent().toggleClass('open');
					if (!e.data.multiple) {
					$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
				};
			}	
				var accordion = new Accordion($('#accordion'), false);
		});
			
			/*小菜单栏*/
			$(function(){
				$('#nhome').hover(function(){
					$('#navhome').show();
				},function(){
					$('#navhome').hide();
				})
				$('#navhome').hover(function(){
					$('#navhome').css("display","block");
				},function(){
					$('#navhome').css("display","none");
				})
				
				$('#nbasic').hover(function(){
					$('#navbasic').show();
				},function(){
					$('#navbasic').hide();
				})
				$('#navbasic').hover(function(){
					$('#navbasic').css("display","block");
				},function(){
					$('#navbasic').css("display","none");
				})
				
				$('#nrepair').hover(function(){
					$('#navrepair').show();
				},function(){
					$('#navrepair').hide();
				})
				$('#navrepair').hover(function(){
					$('#navrepair').css("display","block");
				},function(){
					$('#navrepair').css("display","none");
				})
				
				$('#ndispatch').hover(function(){
					$('#navdispatch').show();
				},function(){
					$('#navdispatch').hide();
				})
				$('#navdispatch').hover(function(){
					$('#navdispatch').css("display","block");
				},function(){
					$('#navdispatch').css("display","none");
				})
				
				$('#naccessory').hover(function(){
					$('#navaccessory').show();
				},function(){
					$('#navaccessory').hide();
				})
				$('#navaccessory').hover(function(){
					$('#navaccessory').css("display","block");
				},function(){
					$('#navaccessory').css("display","none");
				})
				
				$('#nsafe').hover(function(){
					$('#navsafe').show();
				},function(){
					$('#navsafe').hide();
				})
				$('#navsafe').hover(function(){
					$('#navsafe').css("display","block");
				},function(){
					$('#navsafe').css("display","none");
				})
				
				$('#nsystem').hover(function(){
					$('#navsystem').show();
				},function(){
					$('#navsystem').hide();
				})
				$('#navsystem').hover(function(){
					$('#navsystem').css("display","block");
				},function(){
					$('#navsystem').css("display","none");
				})
				
				$('#nbill').hover(function(){
					$('#navbill').show();
				},function(){
					$('#navbill').hide();
				})
				$('#navbill').hover(function(){
					$('#navbill').css("display","block");
				},function(){
					$('#navbill').css("display","none");
				})
				
				$('#nonline').hover(function(){
					$('#navonline').show();
				},function(){
					$('#navonline').hide();
				})
				$('#navonline').hover(function(){
					$('#navonline').css("display","block");
				},function(){
					$('#navonline').css("display","none");
				})
			})