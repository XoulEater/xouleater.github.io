import{j as e}from"./jsx-runtime.DSYUAlOe.js";import{r as a}from"./index.DdRMN4IK.js";import{g as b,u as N}from"./teachersService.DAyCmrWs.js";const v=({teacherID:i})=>{const o=localStorage.getItem("user"),n=JSON.parse(o),[t,c]=a.useState(null);async function d(){const l=await b(i),g={...l,photo:l.photo||"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"};c(g)}a.useEffect(()=>{d()},[]);const m=n.userType==="assistant"||t?.id===n.id,[s,u]=a.useState(!1);async function p(){u(!s),s&&t&&(t.email=document.getElementById("email").value,t.name=document.getElementById("name").value,t.officePNumber=document.getElementById("officePNumber").value,t.personalPNumber=document.getElementById("personalPNumber").value,await N(t))}const[f,r]=a.useState(!1);function h(){r(!0)}function x(){r(!1),typeof window<"u"&&window.history.back()}return e.jsxs("article",{className:" overflow-y-scroll  lgn:overflow-hidden h-screen lgn:h-[80%] w-[90%] lgn:w-[75%] bg-slate-200 rounded-3xl p-5 flex flex-col lgn:flex-row   lgn:place-content-center items-center align-top gap-5 shadow-lg",children:[e.jsx("img",{className:"rounded-full h-[210px] aspect-square object-cover object-center border-2 border-white ",src:t?.photo,alt:t?.name}),e.jsxs("aside",{className:" w-[90%] lgn:w-[60%] gap-5 flex flex-col items-center lgn:items-start ",children:[e.jsxs("header",{className:"flex flex-col items-center w-full gap-5 pb-3 border-b-2 border-zinc-400 lgn:flex-row lgn:justify-between lgn:items-top ",children:[e.jsxs("div",{className:"flex flex-col items-center order-2 lgn:items-start lgn:order-1",children:[s?e.jsx("input",{type:"text",className:"py-2 pl-0 mr-1 text-xl border-none",id:"name",defaultValue:t?.name}):e.jsx("h1",{className:"text-xl font-medium truncate",children:t?.name}),e.jsx("h2",{className:"text-sm text-zinc-400",children:t?.id})]}),m&&e.jsxs("div",{className:"flex order-1 gap-3",children:[e.jsx("button",{onClick:p,className:"flex items-center justify-center w-32 h-12 gap-2 text-white transition duration-300 ease-in-out rounded-md bg-primary-dark hover:bg-primary-light group",children:e.jsx("span",{className:"transition-transform duration-300 ease-in-out group-hover:scale-110",children:s?"Guardar":"Editar"})}),e.jsx("button",{onClick:h,className:"flex items-center justify-center w-32 h-12 gap-2 text-white transition duration-300 ease-in-out bg-red-800 rounded-md hover:brightness-125 group",children:e.jsx("span",{className:"transition-transform duration-300 ease-in-out group-hover:scale-110",children:"Eliminar"})})]})]}),e.jsxs("footer",{className:"lgn:w-[80%] grid grid-cols-1 lgn:grid-cols-2 gap-x-3  gap-y-1 lgn:gap-y-2 place-items-center lgn:place-items-start",children:[e.jsx("h3",{className:"text-zinc-400",children:"Correo"}),s?e.jsx("input",{type:"text",className:"py-2 pl-0 mr-1 border-none ",id:"email",defaultValue:t?.email}):e.jsx("p",{className:"py-2",children:t?.email}),e.jsx("h3",{className:"text-zinc-400",children:"Telefono Oficina"}),s?e.jsx("input",{type:"tel",className:"py-2 pl-0 mr-1 border-none ",id:"officePNumber",defaultValue:t?.officePNumber}):e.jsx("p",{className:"py-2",children:t?.officePNumber}),e.jsx("h3",{className:"text-zinc-400",children:"Telefono Celular"}),s?e.jsx("input",{type:"tel",className:"py-2 pl-0 mr-1 border-none",id:"personalPNumber",defaultValue:t?.personalPNumber}):e.jsx("p",{className:"py-2",children:t?.personalPNumber})]})]}),f&&e.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex justify-center items-center z-50",children:e.jsxs("div",{className:"flex flex-col gap-5 p-5 bg-white rounded-lg",children:[e.jsx("h2",{className:"text-xl font-medium",children:"¿Está seguro?"}),e.jsxs("div",{className:"flex gap-5",children:[e.jsx("button",{onClick:x,className:"flex items-center justify-center w-32 h-12 gap-2 text-white transition duration-300 ease-in-out rounded-md bg-primary-dark hover:bg-primary-light group",children:e.jsx("span",{className:"transition-transform duration-300 ease-in-out group-hover:scale-110",children:"Si"})}),e.jsx("button",{onClick:()=>r(!1),className:"flex items-center justify-center w-32 h-12 gap-2 text-white transition duration-300 ease-in-out bg-red-800 rounded-md hover:brightness-125 group",children:e.jsx("span",{className:"transition-transform duration-300 ease-in-out group-hover:scale-110",children:"No"})})]})]})})]})};export{v as default};