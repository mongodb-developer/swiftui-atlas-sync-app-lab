"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[338],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>w});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,w=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(w,o(o({ref:t},c),{},{components:n})):r.createElement(w,o({ref:t},c))}));function w(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(4137));n(9524);const a={},o="Adding ownerId",s={unversionedId:"ios-app-changes/adding-owner-id",id:"ios-app-changes/adding-owner-id",title:"Adding ownerId",description:"We need to add our user id to the data we're about to sync to our App in the cloud. This way we'll be able to download it later if we need it.",source:"@site/docs/3--ios-app-changes/7-adding-owner-id.mdx",sourceDirName:"3--ios-app-changes",slug:"/ios-app-changes/adding-owner-id",permalink:"/swiftui-atlas-sync-app-workshop/docs/ios-app-changes/adding-owner-id",draft:!1,editUrl:"https://github.com/mongodb-developer/swiftui-atlas-sync-app-workshop/blob/main/docs/3--ios-app-changes/7-adding-owner-id.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenSyncedRealmView",permalink:"/swiftui-atlas-sync-app-workshop/docs/ios-app-changes/open-synced-realm-view"},next:{title:"Finishing Sync",permalink:"/swiftui-atlas-sync-app-workshop/docs/ios-app-changes/finishing-sync"}},p={},l=[],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-ownerid"},"Adding ownerId"),(0,i.kt)("p",null,"We need to add our user id to the data we're about to sync to our App in the cloud. This way we'll be able to download it later if we need it."),(0,i.kt)("p",null,"So in ",(0,i.kt)("inlineCode",{parentName:"p"},"MainView"),", when we create our list of ",(0,i.kt)("inlineCode",{parentName:"p"},"Habits"),", we need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"ownerId")," to the current log in user:"),(0,i.kt)("p",null,"We 1st get our ",(0,i.kt)("inlineCode",{parentName:"p"},"realm")," from the environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="MainView.swift"',title:'"MainView.swift"'},"    @Environment(\\.realm) var realm\n")),(0,i.kt)("p",null,"And then we use it to get the current log-in user id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift",metastring:'title="MainView.swift"',title:'"MainView.swift"'},'    // ...\n    if let habits = allHabitGroups.first {\n            // ...\n        } else {\n            ProgressView()\n                .onAppear {\n                    let habits = Habits()\n                    habits.ownerId = realm.syncSession?.parentUser()?.id ?? ""\n                    $allHabitGroups.append(habits)\n                }\n        }\n')))}u.isMDXComponent=!0}}]);