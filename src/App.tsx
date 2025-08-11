import styles from "./App.module.css";
import TimerCard from "./components/TimerCard";
import { Grid } from "@mui/material";

function App() {
  return (
    <div className={styles.appContainer}>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5rem",
        }}
      >
        <TimerCard />
      </Grid>
    </div>
  );
}

export default App;
