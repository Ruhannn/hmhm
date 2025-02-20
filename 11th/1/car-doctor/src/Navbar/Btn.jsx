

const Btn = (setOpen) => {
    return (
<button onClick={()=>setOpen(prev=>!prev)} className="w-12 h-12 rounded-[50%] fixed top-6 bg-transparent border-none">

</button>
    );
};

export default Btn;