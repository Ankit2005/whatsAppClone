(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3837:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9207)}])},1701:function(e,s,n){"use strict";n.d(s,{C4:function(){return c},X9:function(){return i}});var r=n(5893),t=n(7294);let a=(0,t.createContext)(),i=e=>{let{initialState:s,reducer:n,children:i}=e;return(0,r.jsx)(a.Provider,{value:(0,t.useReducer)(n,s),children:i})},c=()=>(0,t.useContext)(a)},9149:function(e,s,n){"use strict";n.d(s,{J:function(){return r}});let r={SET_USER_INFO:"SET_USER_INFO",SET_NEW_USER:"SET_NEW_USER",SET_ALL_CONTACTS_PAGE:"SET_ALL_CONTACTS_PAGE",CHANGE_CURRENT_CHAT_USER:"CHANGE_CURRENT_CHAT_USER",SET_SOCKET:"SET_SOCKET",SET_MESSAGES:"SET_MESSAGES",ADD_MESSAGE:"ADD_MESSAGE",SET_USER_CONTACTS:"USER_CONTACTS",SET_VOICE_CALL:"SET_VOICE_CALL",SET_VIDEO_CALL:"SET_VIDEO_CALL",END_CALL:"END_CALL",SET_INCOMING_VOICE_CALL:"SET_INCOMING_VOICE_CALL",SET_INCOMING_VIDEO_CALL:"SET_INCOMING_VIDEO_CALL",SET_EXIT_CHAT:"SET_EXIT_CHAT",SET_MESSAGES_READ:"SET_MESSAGES_READ",SET_ONLINE_USERS:"SET_ONLINE_USERS",SET_MESSAGES_SEARCH:"SET_MESSAGES_SEARCH",SET_CONTACT_SEARCH:"SET_CONTACT_SEARCH"}},9207:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return o}});var r=n(5893),t=n(1701),a=n(9149);let i={userInfo:void 0,newUser:!1,contactsPage:!1,messageSearch:!1,currentChatUser:void 0,socket:void 0,messages:[],userContacts:[],videoCall:void 0,voiceCall:void 0,incomingVoiceCall:void 0,incomingVideoCall:void 0,onlineUsers:[],contactSearch:"",filteredContacts:[]},c=(e,s)=>{switch(s.type){case a.J.SET_USER_INFO:return{...e,userInfo:s.userInfo};case a.J.SET_NEW_USER:return{...e,newUser:s.newUser};case a.J.SET_ALL_CONTACTS_PAGE:return{...e,contactsPage:!e.contactsPage};case a.J.SET_MESSAGES_SEARCH:return{...e,messageSearch:!e.messageSearch};case a.J.CHANGE_CURRENT_CHAT_USER:if(s.user){if(console.log("here"),e.contactsPage)return console.log("in if",s.user),{...e,currentChatUser:s.user,messages:[]};e.socket.current.emit("mark-read",{id:s.user.id,recieverId:e.userInfo.id});let n=[...e.userContacts],r=n.findIndex(e=>e.id===s.user.id);return n[r].totalUnreadMessages=0,{...e,currentChatUser:s.user,messageSearch:!1,messages:[],userContacts:n}}case a.J.SET_SOCKET:return{...e,socket:s.socket};case a.J.ADD_MESSAGE:var n;if((null===(n=e.currentChatUser)||void 0===n?void 0:n.id)===s.newMessage.senderId||(null==s?void 0:s.fromSelf)){e.socket.current.emit("mark-read",{id:s.newMessage.senderId,recieverId:s.newMessage.recieverId});let n=[...e.userContacts];if(s.newMessage.recieverId===e.userInfo.id){let r=n.findIndex(e=>e.id===s.newMessage.senderId);if(-1!==r){let e=n[r];e.message=s.newMessage.message,e.type=s.newMessage.type,e.messageId=s.newMessage.id,e.messageStatus=s.newMessage.messageStatus,e.recieverId=s.newMessage.recieverId,e.senderId=s.newMessage.senderId,n.splice(r,1),n.unshift(e)}return{...e,messages:[...e.messages,s.newMessage],userContacts:n}}{let r=n.findIndex(e=>e.id===s.newMessage.recieverId);if(-1!==r){let e=n[r];e.message=s.newMessage.message,e.type=s.newMessage.type,e.messageId=s.newMessage.id,e.messageStatus=s.newMessage.messageStatus,e.recieverId=s.newMessage.recieverId,e.senderId=s.newMessage.senderId,n.splice(r,1),n.unshift(e)}else{let{message:e,type:r,id:t,messageStatus:a,recieverId:i,senderId:c,createdAt:E}=s.newMessage,S={message:e,type:r,messageId:t,messageStatus:a,recieverId:i,senderId:c,createdAt:E,id:s.newMessage.reciever.id,name:s.newMessage.reciever.name,profilePicture:s.newMessage.reciever.profilePicture,totalUnreadMessages:s.fromSelf?0:1};n.unshift(S)}return{...e,messages:[...e.messages,s.newMessage],userContacts:n}}}{let n=[...e.userContacts],r=n.findIndex(e=>e.id===s.newMessage.senderId);if(-1!==r){let e=n[r];e.message=s.newMessage.message,e.type=s.newMessage.type,e.messageId=s.newMessage.id,e.messageStatus=s.newMessage.messageStatus,e.recieverId=s.newMessage.recieverId,e.senderId=s.newMessage.senderId,e.totalUnreadMessages+=1,n.splice(r,1),n.unshift(e)}else{let{message:e,type:r,id:t,messageStatus:a,recieverId:i,senderId:c,createdAt:E}=s.newMessage,S={message:e,type:r,messageId:t,messageStatus:a,recieverId:i,senderId:c,createdAt:E,id:s.newMessage.sender.id,name:s.newMessage.sender.name,profilePicture:s.newMessage.sender.profilePicture,totalUnreadMessages:s.fromSelf?0:1};n.unshift(S)}return{...e,userContacts:n}}case a.J.SET_MESSAGES:return{...e,messages:s.messages};case a.J.SET_USER_CONTACTS:return{...e,userContacts:s.userContacts};case a.J.SET_VIDEO_CALL:return{...e,videoCall:s.videoCall};case a.J.SET_VOICE_CALL:return{...e,voiceCall:s.voiceCall};case a.J.END_CALL:return{...e,videoCall:void 0,voiceCall:void 0,incomingVoiceCall:void 0,incomingVideoCall:void 0};case a.J.SET_INCOMING_VOICE_CALL:return{...e,incomingVoiceCall:s.incomingVoiceCall};case a.J.SET_INCOMING_VIDEO_CALL:return{...e,incomingVideoCall:s.incomingVideoCall};case a.J.SET_EXIT_CHAT:return{...e,currentChatUser:void 0,messages:[]};case a.J.SET_MESSAGES_READ:if(e.userInfo.id!==s.id)return{...e};{let n=[...e.messages],r=[...e.userContacts];n.forEach((e,s)=>n[s].messageStatus="read");let t=r.findIndex(e=>e.id===s.recieverId);return -1!==t&&(r[t].messageStatus="read"),{...e,messages:n,userContacts:r}}case a.J.SET_ONLINE_USERS:return{...e,onlineUsers:s.onlineUsers};case a.J.SET_CONTACT_SEARCH:{let n=e.userContacts.filter(e=>e.name.toLowerCase().includes(s.contactSearch.toLowerCase()));return{...e,contactSearch:s.contactSearch,filteredContacts:n}}default:return e}};n(7952);var E=n(9008),S=n.n(E);function o(e){let{Component:s,pageProps:n}=e;return(0,r.jsxs)(t.X9,{initialState:i,reducer:c,children:[(0,r.jsxs)(S(),{children:[(0,r.jsx)("title",{children:"Whatsapp"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon.png"})]}),(0,r.jsx)(s,{...n})]})}},7952:function(){},9008:function(e,s,n){e.exports=n(2636)}},function(e){var s=function(s){return e(e.s=s)};e.O(0,[774,179],function(){return s(3837),s(6885)}),_N_E=e.O()}]);