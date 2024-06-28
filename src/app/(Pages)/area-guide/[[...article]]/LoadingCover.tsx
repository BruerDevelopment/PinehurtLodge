import { ImSpinner2 } from "react-icons/im"
import styled from "styled-components"

export default () => {
    return (
        <LoadingSection>
            <h1>
                Pinehurst Lodge Local Area Guide
            </h1>
            <h2>
                Please wait as we load our guide
            </h2>
            <ImSpinner2 />
        </LoadingSection>
    )
}


const LoadingSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--theme-color-5);
    color: white;
    h1 {
        font-size: 28px;
    }
    h2 {
        font-size: 24px;
    }
    svg {
        margin-top: 40px;
        width: 50px;
        height: 50px;
        animation: spin 1s infinite linear;
    }
    @keyframes spin {
        from {
            transform: scale(1) rotate(0deg);
        }
        to {
            transform: scale(1) rotate(360deg);
        }
    }
`
