import { useDispatch } from "react-redux";
import { Button, Div, Text } from "../../components/basic";
import { setAuthentificated } from "../../features/auth";

function App() {
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(setAuthentificated(false));
    }

    return (
        <Div
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            height="100%"
            p="50px"
        >
            <Text fontSize={["20px", "40px"]}>You are authentificated!</Text>
            <Button onClick={handleLogout}>logout</Button>
        </Div>
    );
}

export default App;
