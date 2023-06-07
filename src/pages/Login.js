import Base from "../components/Base";
import {CardHeader,Card, Container, CardBody, Form, FormGroup, Label, Input, Button, Row, Col} from "reactstrap";
const Login =() =>{

    const handleRegisterButtonClick = () => {
        alert(`Logged in Successfully`);
      };



    return(
        <Base>
         
        <Container>

<Row className="mt-4">

<Col sm={{size:6,offset:3}}>


<Card color="success" inverse>

<CardHeader>
    <h3>Login Here!</h3>
</CardHeader>

<CardBody>

<Form>




 {/*email*/}
 <FormGroup>
 <Label for="Email">
      Email
    </Label>
    <Input
      id="Email"
      name="email"
      placeholder="enter email"
      type="email"
    />

</FormGroup>


 {/*Password*/}
 <FormGroup>
 <Label for="Password">
      Password
    </Label>
    <Input
      id="Password"
      name="password"
      placeholder="enter password "
      type="password"
    />
</FormGroup>



{/*Button*/}


<Container className="text-center">
<Button color="success" outline onClick={handleRegisterButtonClick}>
Login
</Button>

<Button color="danger" type="reset" className="ms-2" outline>
Reset
</Button>

</Container>

</Form>

</CardBody>




</Card>




</Col>



</Row>

        </Container>
        
        
        </Base>

    );
};
        
       


    
export default Login;