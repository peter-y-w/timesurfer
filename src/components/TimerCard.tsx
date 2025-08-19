import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./TimerCard.module.css";
import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { formatSecondsToHHMMSS } from "../utils";

const TimerCard = () => {
    const [focusTime, setFocusTime] = useState(0);
    const [isFocusing, setIsFocusing] = useState(false);
    const intervalRef = useRef<number>(null);

    const restTime = focusTime / 5;

    useEffect(() => {
        if (isFocusing) {
            intervalRef.current = setInterval(() => {
                setFocusTime((prev) => prev + 1);
            }, 1000);
        } else {
            stopTimer();
        }

        return () => {
            stopTimer();
        };
    }, [isFocusing]);

    const stopTimer = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    const toggleFocusing = () => setIsFocusing((prev) => !prev);

    return (
        <Card elevation={0}>
            <CardContent className={styles.timerCard}>
                <Grid
                    container
                    direction="column"
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography>Focused time:</Typography>
                    <Typography className={styles.timerDisplay} variant="h1" sx={{ fontFamily: "math" }}>
                        {formatSecondsToHHMMSS(focusTime)}
                    </Typography>

                    <Typography>You should rest for:</Typography>
                    <Typography className={styles.timerDisplay} variant="h2" sx={{ fontFamily: "math" }}>
                        {formatSecondsToHHMMSS(restTime)}
                    </Typography>
                    <Button sx={{ color: "white" }} onClick={toggleFocusing}>
                        {isFocusing ? "Stop Focus" : "Start Focus"}
                    </Button>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default TimerCard;
