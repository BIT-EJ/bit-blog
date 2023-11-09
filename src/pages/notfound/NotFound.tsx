import { useRouteError } from "react-router-dom"

export default function NotFound () {

    const error =  useRouteError()
    console.error(error)


    return (
        <h1>Page not found!</h1>
    )
}