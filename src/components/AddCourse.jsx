import { Button, Card, TextField } from '@mui/material';
import { useState } from 'react';
function AddCourse() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return <div>

        <div style={{
            paddingTop: 150,
            marginBottom: 10,
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Card variant="outlined" style={{ width: 400, padding: 20 }}>
                <TextField
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    fullWidth={true} id="outlined-basic" label="Title" variant="outlined" />
                <br /><br />
                <TextField
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    fullWidth id="outlined-basic" label="description" variant="outlined" />
                <br /><br />
                <Button
                    onClick={() => {
                        function callback1(res) {
                            res.json().then(callback2)
                        }
                        function callback2(data) {
                            localStorage.setItem("token", data.token)
                            console.log(data);
                        }
                        fetch("http://localhost:3000/admin/courses", {
                            method: "POST",
                            body: JSON.stringify({
                                title: title,
                                description: description,
                                imageLink: "",
                                published: true
                            }),
                            headers: {
                                "Content-type": "application/json",
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        }).then(callback1)
                    }}
                    size={"large"} variant="contained">Add Course</Button>

            </Card>
        </div>
    </div>
}
export default AddCourse;