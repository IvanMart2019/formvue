(function(e){function t(t){for(var r,i,s=t[0],l=t[1],d=t[2],m=0,v=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/formvue/form/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Form")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submitHandle(t)}}},[a("h2",[e._v("Расскажите о себе:")]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input1"}},[e._v("Фамилия")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.$v.second_name.$model,expression:"$v.second_name.$model",modifiers:{lazy:!0}}],attrs:{type:"text",id:"Input1"},domProps:{value:e.$v.second_name.$model},on:{change:function(t){return e.$set(e.$v.second_name,"$model",t.target.value)}}})]),e.$v.second_name.$dirty&&!e.$v.second_name.minLength?a("small",[e._v("Фамилия должна иметь больше 2 букв")]):e.$v.second_name.$dirty&&!e.$v.second_name.required?a("small",[e._v("Укажите фамилию")]):e._e()]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input2"}},[e._v("Имя")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.$v.name.$model,expression:"$v.name.$model",modifiers:{lazy:!0}}],attrs:{type:"text",id:"Input2"},domProps:{value:e.$v.name.$model},on:{change:function(t){return e.$set(e.$v.name,"$model",t.target.value)}}})]),e.$v.name.$dirty&&!e.$v.name.minLength?a("small",[e._v("Имя должно иметь больше 2 букв")]):e.$v.name.$dirty&&!e.$v.name.required?a("small",[e._v("Укажите имя")]):e._e()]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input3"}},[e._v("Отчество")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.patronymic,expression:"patronymic"}],attrs:{type:"text",id:"Input3"},domProps:{value:e.patronymic},on:{input:function(t){t.target.composing||(e.patronymic=t.target.value)}}})])]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input4"}},[e._v("Дата рождения")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.$v.date_foundation.$model,expression:"$v.date_foundation.$model",modifiers:{lazy:!0}}],attrs:{type:"date",value:"2012-06-01",id:"Input4",max:"2020-01-01",min:"1950-01-01"},domProps:{value:e.$v.date_foundation.$model},on:{change:function(t){return e.$set(e.$v.date_foundation,"$model",t.target.value)}}})]),e.$v.date_foundation.$dirty&&!e.$v.date_foundation.required?a("small",[e._v("Укажите дату рождения")]):e._e()]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input5"}},[e._v("Телефон")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.$v.telephone.$model,expression:"$v.telephone.$model",modifiers:{lazy:!0}}],attrs:{type:"number",id:"Input5"},domProps:{value:e.$v.telephone.$model},on:{change:function(t){return e.$set(e.$v.telephone,"$model",t.target.value)}}})]),e.$v.telephone.$dirty&&!e.$v.telephone.minLength?a("small",[e._v("Номер должен состоять из 11 цифр")]):e.$v.telephone.$dirty&&!e.$v.telephone.required?a("small",[e._v("Укажите номер телефна")]):e._e(),e.telephoneValNum?a("small",[e._v("Номер телефна должне наченаться с цифры 7")]):e._e()]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("b",[e._v("Пол")]),a("div",{staticClass:"gender"},[a("label",{attrs:{for:"Input6"}},[e._v("Муж")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",id:"Input6",value:"men"},domProps:{checked:e._q(e.gender,"men")},on:{change:function(t){e.gender="men"}}}),a("label",{attrs:{for:"Input7"}},[e._v("Жен")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",id:"Input7",value:"female"},domProps:{checked:e._q(e.gender,"female")},on:{change:function(t){e.gender="female"}}})])])]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input8"}},[e._v("Сегмент")]),a("select",{directives:[{name:"model",rawName:"v-model.lazy",value:e.$v.segment.$model,expression:"$v.segment.$model",modifiers:{lazy:!0}}],attrs:{id:"Input8"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.segment,"$model",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"1",selected:"selected"}},[e._v("VIP")]),a("option",{attrs:{value:"2"}},[e._v("Проблемные")]),a("option",{attrs:{value:"3"}},[e._v("ОМС")])])]),e.$v.segment.$dirty&&!e.$v.segment.required?a("small",[e._v("Укажите к какому сегменту относится клиент")]):e._e()]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input9"}},[e._v("Лечащий врач")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.attending_doctor,expression:"attending_doctor"}],attrs:{id:"Input9"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.attending_doctor=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"1",selected:"selected"}},[e._v("Иванов")]),a("option",{attrs:{value:"2"}},[e._v("Захаров")]),a("option",{attrs:{value:"3"}},[e._v("Чернышева")])])])]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input10"}},[e._v("Отправлять СМС оповещения")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.send_sms,expression:"send_sms"}],attrs:{type:"checkbox",id:"Input10"},domProps:{checked:Array.isArray(e.send_sms)?e._i(e.send_sms,null)>-1:e.send_sms},on:{change:function(t){var a=e.send_sms,r=t.target,n=!!r.checked;if(Array.isArray(a)){var o=null,i=e._i(a,o);r.checked?i<0&&(e.send_sms=a.concat([o])):i>-1&&(e.send_sms=a.slice(0,i).concat(a.slice(i+1)))}else e.send_sms=n}}})])]),a("h2",[e._v("Адрес:")]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input11"}},[e._v("Почтовый индекс")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.index,expression:"index"}],attrs:{type:"text",id:"Input11"},domProps:{value:e.index},on:{input:function(t){t.target.composing||(e.index=t.target.value)}}})])]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input12"}},[e._v("Страна")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.country,expression:"country"}],attrs:{type:"text",id:"Input12"},domProps:{value:e.country},on:{input:function(t){t.target.composing||(e.country=t.target.value)}}})])]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input13"}},[e._v("Область")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.region,expression:"region"}],attrs:{type:"text",id:"Input13"},domProps:{value:e.region},on:{input:function(t){t.target.composing||(e.region=t.target.value)}}})])]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input14"}},[e._v("Город")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.$v.city.$model,expression:"$v.city.$model",modifiers:{lazy:!0}}],attrs:{type:"text",id:"Input14"},domProps:{value:e.$v.city.$model},on:{change:function(t){return e.$set(e.$v.city,"$model",t.target.value)}}})]),e.$v.city.$dirty&&!e.$v.city.required?a("small",[e._v("Укажите город")]):e._e()]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input15"}},[e._v("Улица")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.street,expression:"street"}],attrs:{type:"text",id:"Input15"},domProps:{value:e.street},on:{input:function(t){t.target.composing||(e.street=t.target.value)}}})])]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input16"}},[e._v("Дом")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.hose,expression:"hose"}],attrs:{type:"text",id:"Input16"},domProps:{value:e.hose},on:{input:function(t){t.target.composing||(e.hose=t.target.value)}}})])]),a("h2",[e._v("Документы")]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input17"}},[e._v("Документ")]),a("select",{directives:[{name:"model",rawName:"v-model.lazy",value:e.$v.document.$model,expression:"$v.document.$model",modifiers:{lazy:!0}}],attrs:{id:"Input17"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.$v.document,"$model",t.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"1",selected:"selected"}},[e._v("Паспорт")]),a("option",{attrs:{value:"2"}},[e._v("Свидетельство о рождении")]),a("option",{attrs:{value:"3"}},[e._v("Driver's license")])])]),e.$v.document.$dirty&&!e.$v.document.required?a("small",[e._v("Укажите тип документа")]):e._e()]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input18"}},[e._v("Улица")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.street,expression:"street"}],attrs:{type:"text",id:"Input18"},domProps:{value:e.street},on:{input:function(t){t.target.composing||(e.street=t.target.value)}}})])]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input19"}},[e._v("Номер")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.number_document,expression:"number_document"}],attrs:{type:"text",id:"Input19"},domProps:{value:e.number_document},on:{input:function(t){t.target.composing||(e.number_document=t.target.value)}}})])]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input20"}},[e._v("Кем выдан")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.issued_by,expression:"issued_by"}],attrs:{type:"text",id:"Input20"},domProps:{value:e.issued_by},on:{input:function(t){t.target.composing||(e.issued_by=t.target.value)}}})])]),a("div",{staticClass:"form__field"},[a("div",{staticClass:"form__wrap"},[a("label",{attrs:{for:"Input21"}},[e._v("Дата выдачи")]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.$v.date_of_issue.$model,expression:"$v.date_of_issue.$model",modifiers:{lazy:!0}}],attrs:{type:"date",value:"2019-06-01",id:"Input21",max:"2020-01-01",min:"2010-01-01"},domProps:{value:e.$v.date_of_issue.$model},on:{change:function(t){return e.$set(e.$v.date_of_issue,"$model",t.target.value)}}})]),e.$v.date_of_issue.$dirty&&!e.$v.date_of_issue.required?a("small",[e._v("Укажите дату выдачи")]):e._e()]),a("button",{attrs:{type:"submit"}},[e._v("Отправить")])])])},s=[],l=(a("d3b7"),a("25f0"),a("b5ae")),d={name:"Form",data:function(){return{name:"",second_name:"",patronymic:"",date_foundation:"",date_of_issue:"",telephone:0,gender:"",segment:"1",attending_doctor:"",send_sms:!0,index:"",country:"",region:"",city:"",street:"",hose:"",document:"1",issued_by:"",number_document:"",telephoneValNum:!1,age:0}},validations:{name:{required:l["required"],minLength:Object(l["minLength"])(2)},second_name:{required:l["required"],minLength:Object(l["minLength"])(2)},date_foundation:{required:l["required"]},telephone:{required:l["required"],minLength:Object(l["minLength"])(11)},city:{required:l["required"]},segment:{required:l["required"]},document:{required:l["required"]},date_of_issue:{required:l["required"]}},methods:{submitHandle:function(){this.$v.$invalid?this.$v.$touch():7==this.telephone.toString().charAt(0)?(this.telephoneValNum=!1,alert(" Новый клиент успешно создан...")):this.telephoneValNum=!0}}},u=d,m=(a("8f7c"),a("2877")),v=Object(m["a"])(u,i,s,!1,null,"d559215a",null),c=v.exports,p={name:"App",components:{Form:c}},_=p,f=(a("5c0b"),Object(m["a"])(_,n,o,!1,null,null,null)),$=f.exports,g=a("1dce"),y=a.n(g);r["a"].use(y.a),r["a"].config.productionTip=!1,r["a"].config.devtools=!0,new r["a"]({render:function(e){return e($)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"8f7c":function(e,t,a){"use strict";var r=a("f807"),n=a.n(r);n.a},"9c0c":function(e,t,a){},f807:function(e,t,a){}});
//# sourceMappingURL=app.9f440136.js.map