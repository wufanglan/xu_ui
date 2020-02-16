(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/components/Button/index.jsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("./node_modules/classnames/index.js"),c=n.n(a);n("./src/components/Button/index.less");function s(e){var t=e.children,n=e.onClick,a=e.className,s=e.type,b=e.shape,r=e.block;return React.createElement("div",{className:c()("xButton","ripple",s,b,r?"block":"",a),onClick:n},t)}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/index.jsx"}})},"./src/components/Button/index.less":function(e,t,n){},"./src/components/Icon/index.jsx":function(e,t,n){"use strict";var a=n("./node_modules/react-icons/fa/index.esm.js");n("./src/components/Icon/index.less");function c(e){var t=e.type,n=e.size,c=e.rotation,s=e.style,b=a[t];return React.createElement(b,{size:n,rotation:c,style:s})}t.a=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/index.jsx"}})},"./src/components/Icon/index.less":function(e,t,n){},"./src/components/Message/index.less":function(e,t,n){},"./src/components/Message/index.mdx":function(e,t,n){"use strict";n.r(t);var a,c,s,b,r,A,l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=(n("react"),n("./node_modules/@mdx-js/react/dist/esm.js")),o=n("./node_modules/docz/dist/index.esm.js"),g=n("./node_modules/rc-notification/es/index.js"),j=n("./src/components/Icon/index.jsx"),O=n("./node_modules/classnames/index.js"),m=n.n(O),p=(n("./node_modules/rc-notification/assets/index.css"),n("./src/components/Message/index.less"),c={success:"FaRegCheckCircle",warning:"FaRegMeh",info:"FaRegLightbulb",error:"FaRegTimesCircle"},s=function(e){var t=e.type,n=e.className,s=e.duration,b=void 0===s?4.5:s,r=e.getContainer,A=void 0===r?function(){return document.body}:r,l=e.icon,i=e.key,o=e.content,g=e.onClose,O=e.onClick,p=e.top,d=e.closable,u=void 0===d||d,N=e.closeIcon;a.notice({content:React.createElement("div",{className:m()("xMessage",n)},(l||["info","success","error","warning"].indexOf(t)>-1)&&React.createElement("div",{className:m()("iconWrap",t)},l||React.createElement(j.a,{type:c[t]})),React.createElement("div",{className:"xNoticeTit"},o)),key:i,closable:u,getContainer:A,onClose:function(){g&&g()},onClick:function(){O&&O()},closeIcon:N,duration:b,style:{top:p}})},b=function(e){var t=e.duration,n=e.getContainer,c=e.closeIcon;g.a.newInstance({getContainer:n,duration:t||4.5,closeIcon:c},(function(e){return a=e}))},r=function(e){a.removeNotice(e)},A=function(){a.destroy()},(a=null)?{config:b,pop:s,remove:r,destroy:A}:(g.a.newInstance({},(function(e){return a=e})),{config:b,pop:s,remove:r,destroy:A})),d=p;"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"xMessage",filename:"src/components/Message/index.jsx"}});var u=n("./src/components/Button/index.jsx");n.d(t,"default",(function(){return B}));var N={};function B(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object.assign({},N,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"message\u901a\u77e5\u63d0\u793a"},"Message\u901a\u77e5\u63d0\u793a"),Object(i.b)("h4",{id:"1\u57fa\u672c\u4f7f\u7528"},"1.\u57fa\u672c\u4f7f\u7528"),Object(i.b)(o.c,{__position:0,__code:"<Button\n  onClick={() => {\n    message.pop({\n      content: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n    })\n  }}\n>\n  \u9ed8\u8ba4\u901a\u77e5\u4fe1\u606f\n</Button>\n<br />\n<Button\n  type=\"primary\"\n  onClick={() => {\n    message.pop({\n      type: 'success',\n      content: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n      duration: 0,\n    })\n  }}\n>\n  \u6210\u529f\u901a\u77e5(success)\n</Button>\n<br />\n<Button\n  type=\"pure\"\n  onClick={() => {\n    message.pop({\n      type: 'info',\n      content: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n    })\n  }}\n>\n  \u4fe1\u606f\u901a\u77e5(info)\n</Button>\n<br />\n<Button\n  type=\"primary\"\n  onClick={() => {\n    message.pop({\n      type: 'warning',\n      content: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n    })\n  }}\n>\n  \u8b66\u544a\u901a\u77e5(warning)\n</Button>\n<br />\n<Button\n  type=\"warning\"\n  onClick={() => {\n    message.pop({\n      type: 'error',\n      content: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n    })\n  }}\n>\n  \u9519\u8bef\u4fe1\u606f\u901a\u77e5(error)\n</Button>",__scope:{props:this?this.props:n,Playground:o.c,message:d,Button:u.a,Icon:j.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtZt4AqNJ0NldoPTgARyABdN9DgSQ9UI1w0kkVRsFwiD2GvcIInMI1SPIyjqPXGg6K4m5qHY_DGl0Ej3UkCiqM-YSCDohpdEk9V2EDSVZPlM12jBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZ1cgAWbz2AANm83z1jAYCADFvWgRJXP4ZxDgRB1MBgoR-CWIhqEoOAAoRGLqzimhnAgLDLnYABGEK_PkQzjKmABBOYbPYCMoPIGwoHQMNUI5GyxG66MZHYFErJgbhgGwiyZrgeQtxrYA-ugQbggAMm28ZEnmShmg2gahu4c65TAZDJQGVB2nYAB-DZNrDCMRquE6ttQZrqykGQqzfMwYU0zAwDCKApje0bxt-jrl2rBNtIIHB4syFIrwIVaa1rMSeJXbHqHsKBYm2Oaoe4Mb7IR7GayPOAiL_QUZh6_GaYsXQQIIVzAGLYwAIGMAWSVAHuvQAzbUAAzlAGUjQBDZTKtnsfkN9ZdQn62axmnAA28wAS6MALATAFP3QBD-UAewNWakXHqFVhMPCOTdjdN_1qexyz5j4EB-35VwBESfhWYsQniZ2MmRopuzvdpxi0hwJmWft2XHdq9p6XIBF6ZlxWaw5_QeYFkWJelvzU5rdA-miW6rjcvPU_lkP5GVmnzZrQAEI0AfKVdYjBOk7gBWaZN7izeNy32Gt6PGFtkPY-dmY-kZEAQ99kmA-hqn87phmI8oZnF_z_b5lctA4pT_P05oTOhbFqX99lyvo4savWbrixDZb3fKE77Hu_E1A68YfvB7Z4ee7txWY9-Cu0cp7aeV89ioCJnPYA5NKYhwsMvJijM15R03lvOOIx3aoAKOfRWh8uZyj5ifHOeCaaX0VjfaOd92CADNowAUiotywQIHBM4X41jfjxT-39P4jwgUAkAzDWGFHAYrWe_tYGB3gRAxBYcUHrwQTWWOrkMhCAEGQtmBDj7ZzPuXSh7C5Y12xjQwAmKmAHvoh-OsIyqKFAY2skhbaqykEjFGaMMarSkHDAGZgvwgAUkJagtF6JyJYuGDQcAsCAQIQwW0mkAByIgICQDiN2XibpOjkHNKgRJyTi4SVifaNSzI-Lug9EUu6BSpjkDgvTVA3p4C6Wqf4OAdS6YGRwRxDJWScmxDyagSQzTRx0VYrgM4cB2l4U0mRUJagcBYnGS1agJksAMXpsgrqEYrpGVSVDDesACJrOIrZVAoQEiGXZksscuhLAHW6LZDeFg26EVcolMUKR7CbB2PYCAlFfR6LzNggoLzXBvIYngc-T9gVvIADIQBSIQDwpyPDnxsWWOUryYApEsPyeA3zfkwHadfdYxhTD2yMOwbJMQESAG8fQA0eqAE59QA6V743JQAAQCpkWU61qCQBSGhPYHh1BbCmLrQAYhaAFlEwAdv6AD0dQA5AYsprOy923o7KxzQiiacs5daMrpQqiwSrOV2Q8AQb6FgkYJOyoAK8DABZ2oASTlADOioAW9TACQxoAOpS9XsANSq9aNS4BxPqfyjVBR2A2ttQ4Zwzgei-o9V6rlhdMipP5ScoggQjia3YCFHAABWdggAlz0AHAqlrAAVSk6wAMP9SsAFxyFLTlQHYIATCVACwcsWp1MaOXetPI4Ggrg0AZH5QACUsHqaFFruhSsAEx2gBl80AEFBgBOh0ACFugBk-MAF-KgBZeUla25VXLYjUH5eawEIa7WAD-1QA4BYbsNcAbYMBEiBtRMGwAyvr811oAelVAAAcsewA6_pnu9QQm9mqAA-e7sq60AAvGgAkxOPYADIzS2AFH9QAkAlfq5b7IqMB-VbPIOwGdgBvxU1k6t1gA300AGeRgBF5TnYAPbVADAMYAX8VAAOpghuy4jtioeuhhzDutCMkYozRujwAIgzCTaEFNGR2CAAjbA2gA5uUAG4ZgALhPpUuvDpbAC7sYAbs9pNzrXaWwAqsorsAPMKgACX249U5D5Td2ahHQeh1jqT0st5NWVqfY14bN0LyqRwdqZ2YeUo25_z2a-v9Uebzxwi6pK6pmrNAWO3AW7c6I4tk4GmUPMeLw6BEgBe3agALl6UuswIQFpDcAYC5agX7bYAXeMBcMxUDwsAuqogZOVqARndArjQrZJzcKVxIPDpS2IMA0E0y0bWSaTT6Z-dmj65prT4CPhWXI3yUbmmjfYByFaIcPNswjGl9gf6_3sAANrtCfnN-OoRE6ESO6io7QjcEAF0cAjJ1GACMscRpjXNHVEau1FExg4MNv19S5q_cm3AR8aWADqmQZhzeeytmRa1FHY0209TbVxGDlIwXNNLNz5i7djtdtCP9N5GNln9WMVcQ7ffmyN_7_AsAJKpTAbFogQA0IsL1YCLoievx3LIY23OxAZavfVoqrgqsFdZhFrtPaBCFaJsh3ZM8ivIfYLtSBsv8tvVZkoVmDH5cQIY8rvaOu7Fa-jhVmA5SAvxr6QF6asArhQV46hZrncfrEpMAqkDgAuT0ACN-gA3uSWIAC0VAACOoAIeVaNks9W2uNQXbpoWTam9gmtm2OsAG968mtO5oVbGuyEuCBRd7ewAdQ6zPjunfO5d6nNYHgE4lpwnsI_Z59Y1ndhfB3Dv3aGp1Vnqw8nWHZtrs5YsD5cx59zgWE23SWLn_P0uo3N_MC1wsqBeXnJrHTpJvTUk4GdCMBoqAUTuARH17G0-pdXFP9Fy3MfqBXCt8F7bGbs1C_y-U5rSwIzdYRC5zrdyKWJK_-sK7rZpchODAAVKwL_hGJliPh1nIqGGAZQBAevkftAYAavnZuUKiJQMkLFjAdTD_jgJgUIIkBrtWEARYEkhGD_iNB5l0AQH0OYGtkvrygFkzAFl0OAWLtHEQdgc1mgdWI8OwIAEGagAOeYVqADYSoAF96gAedqADR8qWnWlIZrHIesOvrklvjvnvgfkZL1sAEoN1J_jAN_nIl1IYYDNWHQQwa5tjAPv8mwSuBwYgVwdjDwfXkSt9ByKQUDFgFJKDODFMDNocjAL4v4kpIEiJA4v_DMtgP-BElEuzqBOBFJIDvUnYCUu0CkW0pUnJCMnMmdoZCSkUGylHvRkViTGhGhuwIAJ_agAaJqAAtZoAEzpc6WGgA0XK-5FGR6bp2S_ajbqq3ozjmbUqACwKh0Y3mqlNP0bOG6nSn2P0KAltgCiwsGjtk_AsX4aclMDthPF0KMSUcAHAH4PMH0ZquwG6oAEb6gAbU49A_LVLdA7aZAsB5ARiawKy97Og-EgwwBgwbGGjXTBa2wRj9hrwdzWHsD7J2TPSnR0BLAMZLA9H1JLCxxLAHGzAFbsBVanC7CL5Al3DrCWEsKDZsCU5_ZHgA6-pA7Ta2xHb9BzB_IYLImHFokYk7CPRyjMnbD3SuRzbwlHjLaq7FZzQMYw7Yy9T9RfRO6_R85mDyAhGCRhEZgqSSDlLRHhKRLaDRJgSTL2jQQDhY4NLpE4nmixwLIdJSTkr-DsCJS6SmiSjmhpZ0RgwTKdIei5HzLtJmCFHmDkpo7lJ-67FdE8a3LHHBppa6pemdHnr5A1TBkDFpaADkmoAPA6fYWAf6UAKQf6WAcA_p56Qgeeia1agmRwsGgANvGABLkYAGV62Z3qtuKGAqQqOkJ6gA7BaADw-kUTZmhsFuUoCQOCCRvGPkiVNNVGibmdbhMTNKhF1DiVmcAfvlMOUmuOEVMLZIlDjrctdniaOFYajroAuQqYOTVHNFGbWSOaknNCebHmObAIeZZLAPjlWEAeUhHLqbcnYPcusMojlGvHqXADgEGjOOXEeVcDqV-S-b-ZMeXOeTfp-TMN-dvgJqmgBTebVMBTBaBZQIKsKtKYZMDPaOsRDNJNQIZLKYpI6IuXRKsgzCqXkfTPEXoIkTgIEQzKCRYCwMVHBClIaLAFgCqNTAFJ2ECuwFmt5DxdjPEHCqgHabQEQPcD0PoBkCJTWHdroODrMMxTTDiOgBMFcEmFFNxSHKxWSPBFcGgJsP0AQApWzBVBaIBfVLpRZTTNtHdsvsOEwWnJQA1migAMR1QAAcAAnG5GAGAPZXLCHI5U8vTGpfgu5UKFcJ5VmgAEzkAhR1SuAhU1ic41iOVXYDGuX9YxVeVgwdgNTpXuGKyOWopRWyxUAeVxVgCJUJUJXoClUSmhXUwMUUXIKM5VUWBWXmg2V1R2Uhx9UjAwBwqEBXBZpuRuT2U_Q_TEUBIKmiRRGumES0WcwMAMW2ygnVD9XVQCVeACBTjmjVAKUGXsXGWoDEzOgnUNY7AKV8VBQpBXC6X1RgEKXXUwDmibDjWEJ1Q4AhR-VA3vXrCHXHUPEQB5BXBhR6XVhg0ZBXB1ThRwDuVcDjCZD74cr6AKU1WxXsCeVBXBWxTATmhgxEDJSXWmUvAKUeASjbCIRtAYDmi41eXTUzXrB5AZD9XzjCqIDZLOhKg1iCGACBnoAEbWgAFK6ADsRrBoALRyfefQKNaKgoaAtAAgCltAWAFoYlKQLkslegat6wjlIC7syQHmtNOwDNyE6AzNBVcVbkflRNZBhtOAOVs4ZtdNltTNLNcV8UAVClNcjlqx7tFtSEXttt-N9gbkSY_tzt2x3QZtQoU4iNyNqNOQnlic5A9l3tE4KQtNEYZc7ABdRdOAEUWaH4K45t9Nod1t2dBNQV9l20iAiArgYAqtVVldnt1tbsaQVwEN8Q5oiEHYEA-gEY5ANxsASw6dic9UbkAApIiRjcVO7C6HVHVLPeXdTDXOQQPJIOwJcc7WPfimpfDQIOaBDVDfVNmiDU7QAjvewIAEAJgAKXqABuioAGxOgAwor6bViOXslqWCEaVaUz1z32XnVGXol3XbAx3fSGShgQC0nx3rCCj5CpK93zjFwQEKVOECBgANYjBXA2Cdh0AKWN3N2t1Caj4JGEJewgAgO2CGUcXsn2VIMvAlwhAeAo1QDhAwD2UAN4CI3TWz32U_Xwp_UCP2W8alz2WwCt2SMrjK363mgwAQEiRXD83cMV0e3V12lRA90ThD392D0sAj2H23GT2E0z3z3o3uBL1hhTCr3r32Ud1aNdDzDRCqOUBn0wCuPmUaMh2M3W3MMoOCXAMriojWNxQCBEBXBwBxCwARh1QJVLAJMb0EwlQvAcXs3UxhP74sNQXZNwAROygl1wAwlpOWTsDFNQMWCN1mhsCXCkNt0eb5OFPROxO9ZF0pM1hrwSjpNXA4DR0riPCAB90ZKoALhKgA05oXGACABqE4vbk7rW5HAFAzKUoH4nKaRUtUqboFRfMutfoAwL4iVNsMgrEdQHs4kRvPwJNvwFcPwD8MWNUFzT-GSFPOXPwBAQIPkIRUgOwPwG5DgP825HlOsPwOUOQDSakjc78yAG1IOb-NCFgN6C88cF4w1okLmHkMGjaRaPc38KWMC9WPwFEGgFC_wLkZoASxYKC143QJgEZMPVmT8x5vwNi6SyAINQxZSzWCy5kt1uobdGywAHqZqAtn3kA4B1RctUuCCah2nGRCtJg4B-UAtSvQvYuWiRBssctYBew30rPKAPPeAfA8pwqnOoDnMGBgT2QgBSWGW0A3N3Omi0CeNmjmizAzD8ArPVxAA",mdxType:"Playground"},Object(i.b)(u.a,{onClick:function(){d.pop({content:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361"})},mdxType:"Button"},"\u9ed8\u8ba4\u901a\u77e5\u4fe1\u606f"),Object(i.b)("br",null),Object(i.b)(u.a,{type:"primary",onClick:function(){d.pop({type:"success",content:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361",duration:0})},mdxType:"Button"},"\u6210\u529f\u901a\u77e5(success)"),Object(i.b)("br",null),Object(i.b)(u.a,{type:"pure",onClick:function(){d.pop({type:"info",content:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361"})},mdxType:"Button"},"\u4fe1\u606f\u901a\u77e5(info)"),Object(i.b)("br",null),Object(i.b)(u.a,{type:"primary",onClick:function(){d.pop({type:"warning",content:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361"})},mdxType:"Button"},"\u8b66\u544a\u901a\u77e5(warning)"),Object(i.b)("br",null),Object(i.b)(u.a,{type:"warning",onClick:function(){d.pop({type:"error",content:"\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361"})},mdxType:"Button"},"\u9519\u8bef\u4fe1\u606f\u901a\u77e5(error)")),Object(i.b)("h2",{id:"\u4f7f\u7528\u4ecb\u7ecd"},"\u4f7f\u7528\u4ecb\u7ecd"),Object(i.b)("pre",null,Object(i.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"import { message } from '@alex_xu/xui'\n\n// \u4f7f\u7528\nmessage.pop({\n    type: 'warning',\n    content: '\u8da3\u8c08\u524d\u7aef\u5b66\u4e60\u6253\u5361',\n    duration: 0\n})\n\n// \u5168\u5c40\u914d\u7f6e\nmessage.config({\n    placement: 'bottomRight'\n})\n")),Object(i.b)("h2",{id:"api\u6587\u6863"},"API\u6587\u6863"),Object(i.b)("h3",{id:"xmessage\u7684\u5168\u5c40\u5c5e\u6027"},"xMessage\u7684\u5168\u5c40\u5c5e\u6027"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"duration"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u81ea\u52a8\u5173\u95ed\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"4.5s")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"getContainer"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"HTMLNode \u914d\u7f6e\u6e32\u67d3\u8282\u70b9\u7684\u8f93\u51fa\u4f4d\u7f6e"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => HTMLNode"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"() => document.body")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"closeIcon"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u5173\u95ed\u56fe\u6807"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"HTMLNode"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}))))),Object(i.b)("h3",{id:"notice\u5c5e\u6027"},"notice\u5c5e\u6027"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u53c2\u6570"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u8bf4\u660e"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(i.b)("th",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"type"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u901a\u77e5\u7a97\u7c7b\u578b('info"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"success"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"error")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"btn"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"ReactNode"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"className"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u5185\u5bb9\u7684class"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"duration"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u9ed8\u8ba4 4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\uff0c\u914d\u7f6e\u4e3a null \u5219\u4e0d\u81ea\u52a8\u5173\u95ed"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"number"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"4.5")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"closeIcon"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u5173\u95ed\u56fe\u6807"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"ReactNode"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"getContainer"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u914d\u7f6e\u6e32\u67d3\u8282\u70b9\u7684\u8f93\u51fa\u4f4d\u7f6e"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"HTMLNode"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"icon"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u81ea\u5b9a\u4e49\u56fe\u6807"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"ReactNode"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"key"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u5f53\u524d\u901a\u77e5\u552f\u4e00\u6807\u5fd7"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"content"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u901a\u77e5\u63d0\u9192\u6807\u9898\uff0c\u5fc5\u9009"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"ReactNode")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"onClose"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u70b9\u51fb\u9ed8\u8ba4\u5173\u95ed\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"func"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"onClick"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u70b9\u51fb\u901a\u77e5\u65f6\u89e6\u53d1\u7684\u56de\u8c03\u51fd\u6570"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"func"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"top"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"\u6d88\u606f\u4ece\u9876\u90e8\u5f39\u51fa\u65f6\uff0c\u8ddd\u79bb\u9876\u90e8\u7684\u4f4d\u7f6e\uff0c\u5355\u4f4d\u50cf\u7d20"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}),"func"),Object(i.b)("td",Object.assign({parentName:"tr"},{align:null}))))))}B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Message/index.mdx"}}),B.isMDXComponent=!0}}]);