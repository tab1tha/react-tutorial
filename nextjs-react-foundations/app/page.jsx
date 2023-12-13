import LikeButton from "./like-button";

function Header({title}){
    return <h1>{title? title : "Default title"}</h1>;
}

export default function HomePage(){
    const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];
    
    return (
        <div>
            {/* nesting the header component */}
            <Header title="build.test.learn" />
            <ul>
                {names.map((name)=>{
                    return <li key={name}>{name}</li>;
                })}
            </ul>  
            
            < LikeButton />                         
        </div>
        );
}