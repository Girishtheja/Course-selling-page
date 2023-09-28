import { Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Appbar() {
    const navigate = useNavigate()

    useEffect(() => {

    }, [])


    return <div style={{ display: "flex", justifyContent: "space-between", padding: 4 }}>
        <div>
            <Typography variant="h6">Course Page</Typography>

        </div>
        <div>
            <Button
                onClick={() => {
                    navigate("/signup")

                }}
                style={{ marginRight: 10 }}
                variant="contained">Sign up</Button>
            <Button
                onClick={() => {
                    navigate("/signin")
                }}
                variant="contained">Sign in</Button>
        </div>

    </div>
}
export default Appbar;