import Alert from 'react-bootstrap/Alert';

const Welcome = props => (

        <Alert variant={props.variant}>
            <Alert.Heading>Puoi trovare qualunque libro stai cercando!</Alert.Heading>
            <hr />
            <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, totam.
            </p>
        </Alert>
    );


export default Welcome;