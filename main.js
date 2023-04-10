(()=>{"use strict";var t=document.querySelector(".popup_type_edit"),e=t.querySelector(".popup__form"),n=document.querySelector(".profile__edit-btn"),r=t.querySelector(".popup__input_type_name"),o=t.querySelector(".popup__input_type_about"),i=document.querySelector(".popup_type_add").querySelector(".popup__form"),u=document.querySelector(".profile__add-btn"),c={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-btn",inactiveButtonClass:"popup__submit-btn_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},a=Array.from(document.querySelectorAll(c.formSelector)),l={},s=document.querySelector(".profile__avatar-container");function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}var y=function(){function t(e,n,r,o,i,u,c){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._userId=n,this._isLiked=this._likes.some((function(t){return a._userId===t._id})),this._id=e._id,this._ownerId=e.owner._id,this._isOwner=!1,this._openPopupPicture=r,this._placeTemplateSelector=c,this._onDeleteClick=o,this._putLike=i,this._deleteLike=u}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._placeTemplateSelector).content.querySelector(".place").cloneNode(!0)}},{key:"_handleLikeClick",value:function(){this._isLiked?this._handleLikedClick():this._handleNotLikedClick()}},{key:"_handleLikedClick",value:function(){this._isLiked=!this._isLiked,this._deleteLike(this._id,this._placeLikeCountElement,this._placeLikeElement)}},{key:"_handleNotLikedClick",value:function(){this._isLiked=!this._isLiked,this._putLike(this._id,this._placeLikeCountElement,this._placeLikeElement)}},{key:"_handleDeleteClick",value:function(){this._onDeleteClick(this._id,this._element)}},{key:"_handleImageClick",value:function(){this._openPopupPicture({image:this._link,name:this._name})}},{key:"_setEventListeners",value:function(){var t=this;this._placeLikeElement.addEventListener("click",(function(){t._handleLikeClick()})),this._placeImageElement.addEventListener("click",(function(){t._handleImageClick()})),this._isOwner&&this._placeDeleteElement.addEventListener("click",(function(){t._handleDeleteClick()}))}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._placeNameElement=this._element.querySelector(".place__name"),this._placeImageElement=this._element.querySelector(".place__image"),this._placeLikeElement=this._element.querySelector(".place__like"),this._placeLikeCountElement=this._element.querySelector(".place__like-count"),this._ownerId===this._userId&&(this._placeDeleteElement=document.createElement("button"),this._placeDeleteElement.classList.add("place__delete"),this._element.prepend(this._placeDeleteElement),this._isOwner=!0),this._isLiked&&this._placeLikeElement.classList.add("place__like_active"),this._placeNameElement.textContent=this._name,this._placeImageElement.src=this._link,this._placeImageElement.alt=this._name,this._placeLikeCountElement.textContent=this._likes.length,this._setEventListeners(),this._element}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var d=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._inputArray=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonSubmit=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputArray.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonSubmit.classList.add(this._inactiveButtonClass),this._buttonSubmit.setAttribute("disabled","disabled")):(this._buttonSubmit.classList.remove(this._inactiveButtonClass),this._buttonSubmit.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputArray.forEach((function(e){return e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"resetValidation",value:function(){var t=this;this._inputArray.forEach((function(e){t._hideInputError(e)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}var v=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._initialArray=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._initialArray.reverse().forEach((function(e){t._renderer(e)}))}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var k=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__close-btn")&&t.close()}))}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},O.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(r);if(o){var n=P(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._imageElement=n._popup.querySelector(".picture__image"),n._titleElement=n._popup.querySelector(".picture__title"),n}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.image;this._imageElement.src=n,this._imageElement.alt=n,this._titleElement.textContent=e,O(P(u.prototype),"open",this).call(this)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},R.apply(this,arguments)}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function q(t){return q=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},q(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(r);if(o){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=t.handleSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmit=r,n._inputArray=Array.from(n._popup.querySelectorAll(".popup__input")),n._popupForm=n._popup.querySelector(".popup__form"),n.submitButton=n._popup.querySelector(".popup__submit-btn"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t={};return this._inputArray.forEach((function(e){var n=e.getAttribute("name");t[n]=e.value})),t}},{key:"close",value:function(){R(q(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"setEventListeners",value:function(){var t=this;R(q(u.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(e){t._handleSubmit(e,t._getInputValues())}))}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,F(r.key),r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function N(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}function F(t){var e=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===A(e)?e:String(e)}var H=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=V(r);if(o){var n=V(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return N(t)}(this,t)});function u(t,e){var n,r,o,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),r=N(n=i.call(this,t)),c=function(t){n._onSubmit(t,{cardId:n._cardId,card:n._card})},(o=F(o="_onSubmitHandler"))in r?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._onSubmit=e,n._popupForm=n._popup.querySelector(".popup__form"),n.submitButton=n._popup.querySelector(".popup__submit-btn"),n}return e=u,(n=[{key:"setEventListeners",value:function(){x(V(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",this._onSubmitHandler)}},{key:"open",value:function(t,e){x(V(u.prototype),"open",this).call(this),this._cardId=t,this._card=e}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(k);function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==J(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===J(o)?o:String(o)),r)}var o}var M=function(){function t(e){var n=e.name,r=e.description,o=e.avatar;e._id,function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._description=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.description,r=t.avatar;e&&(this._name.textContent=e),n&&(this._description.textContent=n),r&&(this._avatar.src=r)}}])&&z(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function K(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==G(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==G(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===G(o)?o:String(o)),r)}var o}var Q,W=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=e.baseUrl,this.headers=e.headers}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t.name,about:t.description})}).then(this._checkResponse)}},{key:"postNewCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(t)}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"putLike",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this.headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this.baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this.headers}).then(this._checkResponse)}},{key:"patchAvatar",value:function(t){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:t})}).then(this._checkResponse)}}])&&K(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),X=new M({name:".profile__name",description:".profile__description",avatar:".profile__avatar"});function Y(t){Q=t.textContent,t.textContent="Сохранение..."}function Z(t){t.textContent=Q}var $=new B({handleSubmit:function(t,e){t.preventDefault(),Y($.submitButton),lt.patchUserInfo(e).then((function(t){X.setUserInfo({name:t.name,description:t.about}),$.close()})).catch((function(t){return console.log(t)})).finally((function(){return Z($.submitButton)}))}},".popup_type_edit"),tt=new B({handleSubmit:function(t,e){t.preventDefault(),Y(tt.submitButton),lt.postNewCard(e).then((function(t){it(t),tt.close()})).catch((function(t){return console.log(t)})).finally((function(){return Z(tt.submitButton)}))}},".popup_type_add"),et=new H(".popup_type_confirm",(function(t,e){var n=e.cardId,r=e.card;t.preventDefault(),Y(et.submitButton),lt.deleteCard(n).then((function(){r.remove(),et.close()})).catch((function(t){console.log(t)})).finally((function(){return Z(et.submitButton)}))})),nt=new L(c,".popup_type_picture"),rt=new B({handleSubmit:function(t,e){t.preventDefault(),Y(rt.submitButton),lt.patchAvatar(e.link).then((function(t){X.setUserInfo({avatar:t.avatar}),rt.close()})).catch((function(t){return console.log(t)})).finally((function(){return Z(rt.submitButton)}))}},".popup_type_avatar");function ot(t){nt.open(t)}function it(t){st.addItem(function(t){return new y(t,at,ot,(function(t,e){return et.open(t,e)}),ut,ct,"#place").generateCard()}(t))}function ut(t,e,n){lt.putLike(t).then((function(t){e.textContent=t.likes.length,n.classList.add("place__like_active")})).catch((function(t){console.log(t)}))}function ct(t,e,n){lt.deleteLike(t).then((function(t){e.textContent=t.likes.length,n.classList.remove("place__like_active")})).catch((function(t){console.log(t)}))}$.setEventListeners(),tt.setEventListeners(),et.setEventListeners(),nt.setEventListeners(),rt.setEventListeners(),n.addEventListener("click",(function(){var t=X.getUserInfo();r.value=t.name,o.value=t.description,l[e.getAttribute("name")].resetValidation(),$.open()})),u.addEventListener("click",(function(){l[i.getAttribute("name")].resetValidation(),tt.open()})),s.addEventListener("click",(function(){rt.open()})),a.forEach((function(t){var e=new d(c,t),n=t.getAttribute("name");l[n]=e,e.enableValidation()}));var at,lt=new W({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-62",headers:{authorization:"de4d1a5e-b347-4878-b328-8f0194692392","Content-Type":"application/json"}});lt.getUserInfo().then((function(t){X.setUserInfo({name:t.name,description:t.about,avatar:t.avatar})})).catch((function(t){return console.log(t)})),lt.getUserInfo().then((function(t){at=t._id,lt.getInitialCards().then((function(t){(st=new v({items:t,renderer:function(t){it(t)}},".places")).renderItems()})).catch((function(t){return console.log(t)}))})).catch((function(t){console.log(t)}));var st=[]})();