import { CircularProgress } from "@mui/material";
import { Container } from "@mui/system";

const Loading = (): JSX.Element => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress size={50} color="primary"/>
    </Container>
  );
};

export default Loading;
