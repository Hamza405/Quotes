(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{49:function(e,t,c){e.exports={card:"Card_card__1m44e"}},50:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},53:function(e,t,c){"use strict";c.r(t);var n=c(15),o=c(1),r=c(2),a=c(49),s=c.n(a),i=c(0),u=function(e){return Object(i.jsx)("div",{className:s.a.card,children:e.children})},l=c(14),d=c(50),j=c.n(d),b=function(e){var t=Object(o.useRef)(),c=Object(o.useRef)(),a=Object(o.useState)(!1),s=Object(n.a)(a,2),d=s[0],b=s[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r.a,{when:d,message:function(e){return"All your data will be lost, Are u sure ???"}}),Object(i.jsx)(u,{children:Object(i.jsxs)("form",{onFocus:function(){b(!0)},className:j.a.form,onSubmit:function(n){n.preventDefault();var o=t.current.value,r=c.current.value;e.onAddQuote({author:o,text:r})},children:[e.isLoading&&Object(i.jsx)("div",{className:j.a.loading,children:Object(i.jsx)(l.a,{})}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"author",children:"Author"}),Object(i.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(i.jsxs)("div",{className:j.a.control,children:[Object(i.jsx)("label",{htmlFor:"text",children:"Text"}),Object(i.jsx)("textarea",{id:"text",rows:"5",ref:c})]}),Object(i.jsx)("div",{className:j.a.actions,children:Object(i.jsx)("button",{onClick:function(){b(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=c(20),m=c(21);t.default=function(){var e=Object(r.h)(),t=Object(f.a)(m.b),c=t.sendRequest,n=t.status;Object(o.useEffect)((function(){"completed"===n&&e.replace("/quotes")}),[n,e]);return Object(i.jsx)(b,{isLoading:"pending"===n,onAddQuote:function(e){c(e)}})}}}]);
//# sourceMappingURL=4.08c13759.chunk.js.map