export default function ErrorMessage (props: {message:string} ) {
    const message : string = props.message
    return <><center><h3>{message}</h3></center></>
}