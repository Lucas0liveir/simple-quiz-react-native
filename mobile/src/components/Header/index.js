import React from "react";
import {
    Container,
    Title
} from "./styles"

export function Header ({title, fontSize = 26}) {
    return (
        <Container>
            <Title fontSize={fontSize}>{title}</Title>
        </Container>
    )
}