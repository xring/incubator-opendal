"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[2881],{9613:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,h=p["".concat(m,".").concat(u)]||p[u]||l[u]||i;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[p]="string"==typeof e?e:o,r[1]=c;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(8126),o=(n(9496),n(9613));const i={title:"Nominate Committer",sidebar_position:2},r=void 0,c={unversionedId:"ppmc_members/nominate-committer",id:"ppmc_members/nominate-committer",title:"Nominate Committer",description:"This document mainly introduces how the PPMC member nominate a new committer.",source:"@site/community/ppmc_members/nominate-committer.md",sourceDirName:"ppmc_members",slug:"/ppmc_members/nominate-committer",permalink:"/community/ppmc_members/nominate-committer",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/community/ppmc_members/nominate-committer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Nominate Committer",sidebar_position:2},sidebar:"docs",previous:{title:"Onboarding",permalink:"/community/ppmc_members/onboarding"},next:{title:"Nominate PPMC Member",permalink:"/community/ppmc_members/nominate-ppmc-member"}},m={},d=[{value:"Start vote about the candidate",id:"start-vote-about-the-candidate",level:2},{value:"Send invitation to the candidate",id:"send-invitation-to-the-candidate",level:2},{value:"Add the candidate to the committer list",id:"add-the-candidate-to-the-committer-list",level:2}],s={toc:d},p="wrapper";function l(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document mainly introduces how the PPMC member nominate a new committer."),(0,o.kt)("h2",{id:"start-vote-about-the-candidate"},"Start vote about the candidate"),(0,o.kt)("p",null,"Start a vote about the candidate via sending email to: ",(0,o.kt)("a",{parentName:"p",href:"mailto:private@opendal.apache.org"},"private@opendal.apache.org"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"candidate_name: The full name of the candidate."),(0,o.kt)("li",{parentName:"ul"},"candidate_github_id: The github id of the candidate.")),(0,o.kt)("p",null,"Title:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[VOTE] Add candidate ${candidate_name} as a new committer\n")),(0,o.kt)("p",null,"Content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hi, All OpenDAL PPMC members.\n  \nI'd like to take this chance to call the vote for inviting committed\ncontributor ${candidate_name} (github id: ${candidate_github_id}) as a new committer of Apache \nOpenDAL (incubating).\n\n${candidate_contributions}\n\n${candidate_name}'s great contributions could be found:\n\n- Github Account: https://github.com/${candidate_github_id}\n- Github Pull Requests: https://github.com/apache/incubator-opendal/pulls?q=is%3Apr+author%3A${candidate_github_id}+is%3Aclosed\n- Github Issues: https://github.com/apache/incubator-opendal/issues?q=is%3Aopen+mentions%3A${candidate_github_id}\n\nPlease make your valuable evaluation on whether we could invite ${candidate_name} as a\ncommitter:\n\n[ +1 ] Agree to add ${candidate_name} as a committer of OpenDAL.\n[  0 ] Have no sense.\n[ -1 ] Disagree to add ${candidate_name} as a committer of OpenDAL, because .....\n\nThis vote starts from the moment of sending and will be open for 3 days.\n \nThanks and best regards,\n\n${your_name}\n")),(0,o.kt)("p",null,"Example: ",(0,o.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/j16lvkyrmvg8wyf3z4gqpjky5m594jhy"},"https://lists.apache.org/thread/j16lvkyrmvg8wyf3z4gqpjky5m594jhy")," (Private Link)"),(0,o.kt)("p",null,"After at least 3 ",(0,o.kt)("inlineCode",{parentName:"p"},"+1")," binding vote and no veto, claim the vote result:"),(0,o.kt)("p",null,"Title:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[RESULT][VOTE] Add candidate ${candidate_name} as a new committer\n")),(0,o.kt)("p",null,"Content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hi, all:\n\nThe vote for \"Add candidate ${candidate_name} as a new committer\" has PASSED and closed now.\n\nThe result is as follows:\n\n4 binding +1 Votes:\n- voter names\n\nVote thread: https://lists.apache.org/thread/j16lvkyrmvg8wyf3z4gqpjky5m594jhy\n\nThen I'm going to invite ${candidate_name} to join us.\n\nThanks for everyone's support!\n\n${your_name}\n")),(0,o.kt)("h2",{id:"send-invitation-to-the-candidate"},"Send invitation to the candidate"),(0,o.kt)("p",null,"Send an invitation to the candidate and cc ",(0,o.kt)("a",{parentName:"p",href:"mailto:private@opendal.apache.org"},"private@opendal.apache.org"),":"),(0,o.kt)("p",null,"Title:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Invitation to become OpenDAL Committer: ${candidate_name}\n")),(0,o.kt)("p",null,"Content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hello ${candidate_name},\n\nThe OpenDAL PPMC hereby offers you committer privileges\nto the project. These privileges are offered on the\nunderstanding that you'll use them reasonably and with\ncommon sense. We like to work on trust rather than\nunnecessary constraints. \n\nBeing a committer enables you to more easily make \nchanges without needing to go through the patch \nsubmission process.\n\nBeing a committer does not require you to \nparticipate any more than you already do. It does \ntend to make one even more committed. You will \nprobably find that you spend more time here.\n\nOf course, you can decline and instead remain as a \ncontributor, participating as you do now.\n\nA. This personal invitation is a chance for you to \naccept or decline in private.  Either way, please \nlet us know in reply to the [private@opendal.apache.org] \naddress only.\n\nB. If you accept, the next step is to register an iCLA:\n    1. Details of the iCLA and the forms are found \n    through this link: https://www.apache.org/licenses/#clas\n\n    2. Instructions for its completion and return to \n    the Secretary of the ASF are found at\n    https://www.apache.org/licenses/#submitting\n\n    3. When you transmit the completed iCLA, request \n    to notify the Apache OpenDAL and choose a \n    unique Apache ID. Look to see if your preferred \n    ID is already taken at \n    https://people.apache.org/committer-index.html\n    This will allow the Secretary to notify the PPMC \n    when your iCLA has been recorded.\n\nWhen recording of your iCLA is noted, you will \nreceive a follow-up message with the next steps for \nestablishing you as a committer.\n\nWith the expectation of your acceptance, welcome!\n\n${your_name} (as represents of The Apache OpenDAL(incubating) PPMC)\n")),(0,o.kt)("h2",{id:"add-the-candidate-to-the-committer-list"},"Add the candidate to the committer list"),(0,o.kt)("p",null,"After the candidate accepts the invitation and the iCLA is recorded, add the candidate to the committer list by ",(0,o.kt)("a",{parentName:"p",href:"https://whimsy.apache.org/roster/ppmc/opendal"},"whimsy roster tools")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1578).Z,width:"1598",height:"494"})))}l.isMDXComponent=!0},1578:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/roster-add-committer-a544b022d22a3bfffef5accc9d825942.png"}}]);