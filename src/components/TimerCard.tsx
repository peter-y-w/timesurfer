import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./TimerCard.module.css";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const TimerCard = () => {
    const [focusTime, setFocusTime] = useState(0);
    const [isFocusing, setIsFocusing] = useState(false);
    const intervalRef = useRef<number>(null);

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
                    <Typography className={styles.timerDisplay} variant="h1" sx={{ fontFamily: "math" }}>
                        {focusTime}
                    </Typography>

                    <Button onClick={toggleFocusing}>{isFocusing ? "Stop" : "Start"}</Button>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default TimerCard;
