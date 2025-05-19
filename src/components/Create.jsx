import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";
import { useContext } from "react";


const Create = () => {
    const [todos, settodos] = useContext(todocontext);
    
    const {register, handleSubmit,reset, formState:{errors},} = useForm()

    // const [title, settitle] = useState("");

    const SubmitHandler = (data) => {
        // e.preventDefault();
        data.isCompleted = false;
        data.id = nanoid();

        const copytodos = [...todos];
        copytodos.push(data);
        settodos(copytodos);
        toast.success("Todo Created", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        reset();

        };

        

        // // settodos([...todos, newtodo])
        // settitle("");
    

    return (
        
        <div className=" w-[60%] p-10 ">
            <h1 className="mb-10 text-5xl font-thin">
                Set <span className="text-red-400">Reminders</span> for <br />{" "}
                tasks
            </h1>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                <input
                {...register("title",{required: true})}
                    className="p-2 border-b w-full text-2xl font-thin outline-0"
                    // onChange={(e) => settitle(e.target.value)}
                    // value={title}
                    type="text"
                    placeholder="title"
                    
                />
                {errors.title && <span className="text-sm text-red-400">This field is required</span>}
                
                <br />
                <br />
                <button className="mt-5 text-xl px-10 py-2 border rounded">
                    Create Todo
                </button>
            </form>
        </div>
    );
};

export default Create;
