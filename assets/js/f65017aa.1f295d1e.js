"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[736],{5482:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=s(5893),t=s(1151);const i={},l="Device Sync",o={id:"app-services/device-sync",title:"Device Sync",description:"We'll enable Device Sync, which will allow our app to send and read data from our MongoDB Atlas cluster, and Developer Mode, which will create the Collections, schemas, etc. for us.",source:"@site/docs/2-app-services/3-device-sync.mdx",sourceDirName:"2-app-services",slug:"/app-services/device-sync",permalink:"/swiftui-atlas-sync-app-lab/docs/app-services/device-sync",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/swiftui-atlas-sync-app-lab/blob/main/docs/2-app-services/3-device-sync.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exploring the App",permalink:"/swiftui-atlas-sync-app-lab/docs/app-services/exploring-the-app"},next:{title:"iOS App Changes",permalink:"/swiftui-atlas-sync-app-lab/docs/category/ios-app-changes"}},c={},d=[{value:"Enable Device Sync",id:"enable-device-sync",level:2},{value:"Development Mode",id:"development-mode",level:2},{value:"Final settings",id:"final-settings",level:2},{value:"Confirm and add a Role",id:"confirm-and-add-a-role",level:2},{value:"Review Draft &amp; Deploy",id:"review-draft--deploy",level:2}];function r(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"device-sync",children:"Device Sync"}),"\n",(0,a.jsx)(n.p,{children:"We'll enable Device Sync, which will allow our app to send and read data from our MongoDB Atlas cluster, and Developer Mode, which will create the Collections, schemas, etc. for us."}),"\n",(0,a.jsx)(n.h2,{id:"enable-device-sync",children:"Enable Device Sync"}),"\n",(0,a.jsxs)(n.p,{children:["Click on ",(0,a.jsx)(n.code,{children:"Start Syncing"}),". It will ask us if we want to generate a Schema. We don't want this, as the schema will be created for us automatically in Development Mode. So we click on ",(0,a.jsx)(n.code,{children:"No thanks, continue to Sync"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(937).Z+"",width:"788",height:"479"})}),"\n",(0,a.jsx)(n.p,{children:"Now we'll select:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Flexible Sync (more on that later)"}),"\n",(0,a.jsx)(n.li,{children:"as a cluster, pick the one that you prefer"}),"\n",(0,a.jsxs)(n.li,{children:["Database name: we'll expand the drop down box and click on ",(0,a.jsx)(n.code,{children:"Add new database"}),", then insert a name for our Database. This won't be created until some data is inserted for real."]}),"\n",(0,a.jsx)(n.li,{children:"Configure Queryable Fields: we want to sync our data so each user can see her own data. For that, we'll add an ownerId field, so we can tell what data is from which user."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(759).Z+"",width:"698",height:"231"})}),"\n",(0,a.jsx)(n.h2,{id:"development-mode",children:"Development Mode"}),"\n",(0,a.jsxs)(n.p,{children:["We need to enable ",(0,a.jsx)(n.a,{href:"https://www.mongodb.com/docs/atlas/app-services/sync/data-model/development-mode/",children:"development mode"})," in order for our changes in the mobile app to be applied to our MongoDB Database. This is only recommended during development, for obvious reasons."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(9534).Z+"",width:"662",height:"168"})}),"\n",(0,a.jsx)(n.h2,{id:"final-settings",children:"Final settings"}),"\n",(0,a.jsx)(n.p,{children:"Your settings should look like these:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(5289).Z+"",width:"698",height:"943"})}),"\n",(0,a.jsx)(n.h2,{id:"confirm-and-add-a-role",children:"Confirm and add a Role"}),"\n",(0,a.jsxs)(n.p,{children:['Confirm Enable Sync. A window will appear asking us to select a role. We can define a custom one of choose among the preset roles. Select "User can read and write all data" and click on ',(0,a.jsx)(n.code,{children:"Add default role"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:s(7854).Z+"",width:"584",height:"301"})}),"\n",(0,a.jsx)(n.h2,{id:"review-draft--deploy",children:"Review Draft & Deploy"}),"\n",(0,a.jsx)(n.p,{children:"As always, changes only take place when we deploy them. Do it now."})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},7854:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/default-role-812b24ef0fb3c4f5342e15628237d893.png"},9534:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/development-mode-6da719fb19d6f3a64e26411c5f684741.png"},937:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/enable-sync-d3480cab215b11b42f786cfd92c9089e.png"},759:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/queryable-fields-ac5da043bf2e11c1bc136c00c3b9d671.png"},5289:(e,n,s)=>{s.d(n,{Z:()=>a});const a=s.p+"assets/images/settings-a0e97d009816d9ab2e6acbc5ddad3b6e.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>l});var a=s(7294);const t={},i=a.createContext(t);function l(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);