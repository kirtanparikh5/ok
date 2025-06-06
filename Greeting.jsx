//wap fro a product page which contains name, image, pice and description of any three products, all data should be passed using props
function Item(props){
    return <li> {props.namee} {props.isDone ? 'done' : 'not done' } </li>
}

function Greeting(){
    return <>
        <Item isDone={false} namee="Dev"/>
        <Item isDone={true} namee="Greedy"/>

    </>
}

function Display(props){
    return <li>Name : {props.name} <br/> Description: {props.descr} <br/> <img src={props.image} ></img></li>
}

function Product(){
    return <>
        <Display name={'Product1'} image={'./src/assets/react.svg'} descr={"Description"}/>
        <Display name={'Product2'} image={'vite.svg'} descr={"Description 2"}/>
    </>
}
const todos = [
  { task: "mow the yard", id: crypto.randomUUID() },
  { task: "Work on Odin Projects", id: crypto.randomUUID() },
  { task: "feed the cat", id: crypto.randomUUID() },
];
function ToDoList(){
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            ))}
        </ul>
);}
export default Product
