import React from 'react';
import { ReactSession } from "react-client-session";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Service from "../Service";
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const Styles = styled.div`
 background: #218888;
 padding: 20px;

 h3 {
   border-bottom: 1px solid white;
   color: #6f6f6f;
   font-family: sans-serif;
   font-size: 30px;
   font-weight: 600;
   line-height: 24px;
   padding: 10px;
   text-align: center;
 }

 form {
   background: white;
   border: 1px solid #dedede;
   border-radius: 30px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 1000px;
   padding: 20px 100px;
   padding-bottom: 60px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #6f6f6f;
   display: block;
   font-family: sans-serif;
   font-size: 14px;
   font-weight: 500;
   margin-bottom: 5px;
   width: 100%;
 }

 .error {
   color: red;
   font-family: sans-serif;
   font-size: 12px;
   height: 30px;
 }

 .submitButton {
   background-color: #6f6f6f;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
 }

 Button{
  background-color: #218888;
 }


`;

//
//       Component: ProjectFrom
//       Description: This component displays the form for a user to submit a new project
//
//       Inputs:
//           - NA
//       Outputs:
//          - NA
function ProjectForm() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageURL, setImageURL] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [user, setUser] = React.useState([""]);
  const [tags, setTags] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [funding, setFunding] = React.useState("");

  React.useEffect(() => {
    setUser(ReactSession.get("username"));
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleImageURLChange = (e) => {
    setImageURL(e.target.value);
  }

  const handleTagsChange = (e) => {
    setTags(e.target.value);
  }

  const handleLaunchCountryChange = (e) => {
    setCountry(e.target.value);
  }

  const handleFundingChange = (e) => {
    setFunding(e.target.value);
  }


  const handleSubmit = (event) => {
    const form = new FormData();
    form.append("productName", name);
    form.append("productDescription", description);
    form.append("lauchCountry", country);
    form.append("imageUrl", imageURL);
    form.append("initialFunding", imageURL);
    form.append("email", user);
    form.append("tags", tags);
    Service.post("addProduct", form)
      .then((data) =>
        {setMessage(data.message);
          console.log(data.code);
          if (data.code > 200) {
            console.log(message)
          }
        }).catch(function(err){
          setMessage("There was a problem submitting your product. Please try again later.")
      });
   }

  return (
    <div className="container">
      <div className="child">
        <div className="product-title">

        </div>
      </div>
          <form data-testid="submit_form" onSubmit={handleSubmit}>
               <h3>PROJECT FORM</h3>
              <label>Name</label>
                <TextField
                  data-testid="form_name"
                  label=""
                  multiline
                  maxRows={1}
                  inputProps={{ "data-testid": "form-inputName" }}
                  value={name}
                  onChange={handleNameChange}
                  fullWidth
                  id="filled-basic"
                  variant="filled"
                  style={{ color:'#218888'}}
                />
              <br />
              <label>Description</label>
                <TextField
                  id="filled-basic"
                  variant="filled"
                  label=""
                  multiline
                  rows={3}
                  inputProps={{ "data-testid": "form-Desc" }}
                  value={description}
                  onChange={handleDescriptionChange}
                  fullWidth
                />
                <br />
                <label>Country of launch</label>
                <TextField
                  id="filled-basic"
                  variant="filled"
                  label=""
                  multiline
                  rows={1}
                  inputProps={{ "data-testid": "form-country" }}
                  value={country}
                  onChange={handleLaunchCountryChange}
                  fullWidth
                />
                <br />
                <label>Image URL</label>
                <TextField
                  id="filled-basic"
                  variant="filled"
                  label=""
                  multiline
                  maxRows={1}
                  inputProps={{ "data-testid": "form-Img" }}
                  value={imageURL}
                  onChange={handleImageURLChange}
                  fullWidth
                />
                <br />
                <label>Initial Funding</label>
                <FormControl fullWidth variant="filled">
                  <FilledInput
                    id="filled-adornment-amount"
                    value={funding}
                    onChange={handleFundingChange}
                    startAdornment={<InputAdornment position={"start"}>$</InputAdornment>}
                    multiline
                    maxRows={1}
                  />
              </FormControl>
              <br />
              <label>Tags</label>
                <TextField
                  id="filled-basic"
                  variant="filled"
                  label=""
                  multiline
                  maxRows={1}
                  inputProps={{ "data-testid": "form-Tags" }}
                  value={tags}
                  onChange={handleTagsChange}
                  fullWidth
                />
            <br /><br />
            <Button variant="contained" size="large" data-testid="submit_button" onClick={handleSubmit} >
            Submit
          </Button>
            {/* <button data-testid="submit_button" onClick={handleSubmit}>Submit</button> */}
          </form>
    </div>
  );
}

export default function ProjectSubmittal() {
    return (
        <Styles>
            <ProjectForm/>
        </Styles>
    );
}