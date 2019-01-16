window.cfields=[];window._show_thank_you=function(id,message,trackcmp_url){var form=document.getElementById('_form_'+id+'_'),thank_you=form.querySelector('._form-thank-you');form.querySelector('._form-content').style.display='none';thank_you.innerHTML=message;thank_you.style.display='block';if(typeof(trackcmp_url)!='undefined'&&trackcmp_url){_load_script(trackcmp_url)}
if(typeof window._form_callback!=='undefined')window._form_callback(id)};window._show_error=function(id,message,html){var form=document.getElementById('_form_'+id+'_'),err=document.createElement('div'),button=form.querySelector('button'),old_error=form.querySelector('._form_error');if(old_error)old_error.parentNode.removeChild(old_error);err.innerHTML=message;err.className='_error-inner _form_error _no_arrow';var wrapper=document.createElement('div');wrapper.className='_form-inner';wrapper.appendChild(err);button.parentNode.insertBefore(wrapper,button);document.querySelector('[id^="_form"][id$="_submit"]').disabled=!1;if(html){var div=document.createElement('div');div.className='_error-html';div.innerHTML=html;err.appendChild(div)}};window._load_script=function(url,callback){var head=document.querySelector('head'),script=document.createElement('script'),r=!1;script.type='text/javascript';script.charset='utf-8';script.src=url;if(callback){script.onload=script.onreadystatechange=function(){if(!r&&(!this.readyState||this.readyState=='complete')){r=!0;callback()}}}
head.appendChild(script)};function subscribe_email($id){if(window.location.search.search("excludeform")!==-1)return!1;var getCookie=function(name){var match=document.cookie.match(new RegExp('(^|; )'+name+'=([^;]+)'));return match?match[2]:null}
var setCookie=function(name,value){var now=new Date();var time=now.getTime();var expireTime=time+1000*60*60*24*365;now.setTime(expireTime);document.cookie=name+'='+value+'; expires='+now+';path=/'}
var addEvent=function(element,event,func){if(element.addEventListener){element.addEventListener(event,func)}else{var oldFunc=element['on'+event];element['on'+event]=function(){oldFunc.apply(this,arguments);func.apply(this,arguments)}}}
var _removed=!1;var form_to_submit=document.getElementById('_form_'+$id+'_');var allInputs=form_to_submit.querySelectorAll('input, select, textarea'),tooltips=[],submitted=!1;var getUrlParam=function(name){var regexStr='[\?&]'+name+'=([^&#]*)';var results=new RegExp(regexStr,'i').exec(window.location.href);return results!=undefined?decodeURIComponent(results[1]):!1};for(var i=0;i<allInputs.length;i++){var regexStr="field\\[(\\d+)\\]";var results=new RegExp(regexStr).exec(allInputs[i].name);if(results!=undefined){allInputs[i].dataset.name=window.cfields[results[1]]}else{allInputs[i].dataset.name=allInputs[i].name}
var fieldVal=getUrlParam(allInputs[i].dataset.name);if(fieldVal){if(allInputs[i].type=="radio"||allInputs[i].type=="checkbox"){if(allInputs[i].value==fieldVal){allInputs[i].checked=!0}}else{allInputs[i].value=fieldVal}}}
var remove_tooltips=function(){for(var i=0;i<tooltips.length;i++){tooltips[i].tip.parentNode.removeChild(tooltips[i].tip)}
tooltips=[]};var remove_tooltip=function(elem){for(var i=0;i<tooltips.length;i++){if(tooltips[i].elem===elem){tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);tooltips.splice(i,1);return}}};var create_tooltip=function(elem,text){var tooltip=document.createElement('div'),arrow=document.createElement('div'),inner=document.createElement('div'),new_tooltip={};if(elem.type!='radio'&&elem.type!='checkbox'){tooltip.className='_error';arrow.className='_error-arrow';inner.className='_error-inner';inner.innerHTML=text;tooltip.appendChild(arrow);tooltip.appendChild(inner);elem.parentNode.appendChild(tooltip)}else{tooltip.className='_error-inner _no_arrow';tooltip.innerHTML=text;elem.parentNode.insertBefore(tooltip,elem);new_tooltip.no_arrow=!0}
new_tooltip.tip=tooltip;new_tooltip.elem=elem;tooltips.push(new_tooltip);return new_tooltip};var resize_tooltip=function(tooltip){var rect=tooltip.elem.getBoundingClientRect();var doc=document.documentElement,scrollPosition=rect.top-((window.pageYOffset||doc.scrollTop)-(doc.clientTop||0));if(scrollPosition<40){tooltip.tip.className=tooltip.tip.className.replace(/ ?(_above|_below) ?/g,'')+' _below'}else{tooltip.tip.className=tooltip.tip.className.replace(/ ?(_above|_below) ?/g,'')+' _above'}};var resize_tooltips=function(){if(_removed)return;for(var i=0;i<tooltips.length;i++){if(!tooltips[i].no_arrow)resize_tooltip(tooltips[i])}};var validate_field=function(elem,remove){var tooltip=null,value=elem.value,no_error=!0;remove?remove_tooltip(elem):!1;if(elem.type!='checkbox')elem.className=elem.className.replace(/ ?_has_error ?/g,'');if(elem.getAttribute('required')!==null){if(elem.type=='radio'||(elem.type=='checkbox'&&/any/.test(elem.className))){var elems=form_to_submit.elements[elem.name];if(!(elems instanceof NodeList||elems instanceof HTMLCollection)||elems.length<=1){no_error=elem.checked}
else{no_error=!1;for(var i=0;i<elems.length;i++){if(elems[i].checked)no_error=!0}}
if(!no_error){tooltip=create_tooltip(elem,"Please select an option.")}}else if(elem.type=='checkbox'){var elems=form_to_submit.elements[elem.name],found=!1,err=[];no_error=!0;for(var i=0;i<elems.length;i++){if(elems[i].getAttribute('required')===null)continue;if(!found&&elems[i]!==elem)return!0;found=!0;elems[i].className=elems[i].className.replace(/ ?_has_error ?/g,'');if(!elems[i].checked){no_error=!1;elems[i].className=elems[i].className+' _has_error';err.push("Checking %s is required".replace("%s",elems[i].value))}}
if(!no_error){tooltip=create_tooltip(elem,err.join('<br/>'))}}else if(elem.tagName=='SELECT'){var selected=!0;if(elem.multiple){selected=!1;for(var i=0;i<elem.options.length;i++){if(elem.options[i].selected){selected=!0;break}}}else{for(var i=0;i<elem.options.length;i++){if(elem.options[i].selected&&!elem.options[i].value){selected=!1}}}
if(!selected){elem.className=elem.className+' _has_error';no_error=!1;tooltip=create_tooltip(elem,"Please select an option.")}}else if(value===undefined||value===null||value===''){elem.className=elem.className+' _has_error';no_error=!1;tooltip=create_tooltip(elem,"This field is required.")}}
if(no_error&&elem.name=='email'){if(!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)){elem.className=elem.className+' _has_error';no_error=!1;tooltip=create_tooltip(elem,"Enter a valid email address.")}}
if(no_error&&/date_field/.test(elem.className)){if(!value.match(/^\d\d\d\d-\d\d-\d\d$/)){elem.className=elem.className+' _has_error';no_error=!1;tooltip=create_tooltip(elem,"Enter a valid date.")}}
tooltip?resize_tooltip(tooltip):!1;return no_error};var needs_validate=function(el){return el.name=='email'||el.getAttribute('required')!==null};var validate_form=function(e){var err=form_to_submit.querySelector('._form_error'),no_error=!0;if(!submitted){submitted=!0;for(var i=0,len=allInputs.length;i<len;i++){var input=allInputs[i];if(needs_validate(input)){if(input.type=='text'){addEvent(input,'blur',function(){this.value=this.value.trim();validate_field(this,!0)});addEvent(input,'input',function(){validate_field(this,!0)})}else if(input.type=='radio'||input.type=='checkbox'){(function(el){var radios=form_to_submit.elements[el.name];for(var i=0;i<radios.length;i++){addEvent(radios[i],'click',function(){validate_field(el,!0)})}})(input)}else if(input.tagName=='SELECT'){addEvent(input,'change',function(){validate_field(this,!0)})}else if(input.type=='textarea'){addEvent(input,'input',function(){validate_field(this,!0)})}}}}
remove_tooltips();for(var i=0,len=allInputs.length;i<len;i++){var elem=allInputs[i];if(needs_validate(elem)){if(elem.tagName.toLowerCase()!=="select"){elem.value=elem.value.trim()}
validate_field(elem)?!0:no_error=!1}}
if(!no_error&&e){e.preventDefault()}
resize_tooltips();return no_error};addEvent(window,'resize',resize_tooltips);addEvent(window,'scroll',resize_tooltips);window._old_serialize=null;if(typeof serialize!=='undefined')window._old_serialize=window.serialize;window._form_serialize=window.serialize;if(window._old_serialize)
window.serialize=window._old_serialize;var form_submit=function(e){e.preventDefault();if(validate_form()){document.querySelector('#_form_'+$id+'_submit').disabled=!0;var serialized=_form_serialize(document.getElementById('_form_'+$id+'_'));var err=form_to_submit.querySelector('._form_error');err?err.parentNode.removeChild(err):!1;document.getElementById('form_'+$id+'_loader').style.display="inline";_load_script('https://littlebigbyte.activehosted.com/proc.php?'+serialized+'&jsonp=true')}
return!1};addEvent(form_to_submit,'submit',form_submit);document.getElementById('form_'+$id+'_loader').style.display="none"};function serialize(form){if(!form||form.nodeName!=="FORM"){return}
var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}
switch(form.elements[i].nodeName){case "INPUT":switch(form.elements[i].type){case "text":case "hidden":case "password":case "button":case "reset":case "submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case "checkbox":case "radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}
break;case "file":break}
break;case "TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case "SELECT":switch(form.elements[i].type){case "select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case "select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}
break}
break;case "BUTTON":switch(form.elements[i].type){case "reset":case "submit":case "button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}
break}}
return q.join("&")}