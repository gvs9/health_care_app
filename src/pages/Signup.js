import Base from "../components/Base";
import {CardHeader,Card, Container, CardBody, Form, FormGroup, Label, Input, Button, Row, Col} from "reactstrap";

const Signup =() =>{
 
    const handleRegisterButtonClick = () => {
        alert(`User Registered`);
      };



    return(
       
        <Base>
         
        <Container>

<Row className="mt-4">

<Col sm={{size:6,offset:3}}>


<Card color="success" inverse>

<CardHeader>
    <h3>Register With Healthcare</h3>
</CardHeader>

<CardBody>

<Form>

    {/*Name*/}
<FormGroup>
<Label for="name">Enter Name</Label>
<Input
type="text"
placeholder="enter name"
id="name"

/>
</FormGroup>


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

{/*Number*/}
<FormGroup>
    <Label for="Number">
      Mobile Number
    </Label>
    <Input
      id="Number"
      name="number"
      placeholder="enter number "
      type="number"
    />
  </FormGroup>

{/*Button*/}


<Container className="text-center">
<Button color="success"  onClick={handleRegisterButtonClick} outline>
Register
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
export default Signup;