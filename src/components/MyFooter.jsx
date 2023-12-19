import {Footer, Container} from "react";

const MyFooter = (props) => (
    <Footer>
        <Container fluid="xl">
            <div>
                <h6>{props.h6Text}</h6>
                <p>{props.parTextTitolo}{props.parTextAutore}</p>
            </div>
        </Container>
    </Footer>
);

export default MyFooter;
