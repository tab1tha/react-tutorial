'use client'

function MyButton(props:{value:string, onClick:()=>void}) {
  
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Home() {
  const handleViewMore = () => {
    alert("There's more to see than can ever be seen, more to do than can ever be done")
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to my app</h1>
      <h3 className="text-xl font-semibold">{user.name}'s profile</h3>
      <img src={user.imageUrl} alt={user.name} className="rounded-full" />
      <MyButton value="view more" onClick={handleViewMore}/>

    </main>
  );
}
