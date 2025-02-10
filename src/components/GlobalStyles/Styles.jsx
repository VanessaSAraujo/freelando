import { css, Global } from "@emotion/react"

const styles = css`
    * {
        font-family: "Roboto", serif;
    }
`

export const Styles = () => {
    return (<Global styles={styles}/>)
}