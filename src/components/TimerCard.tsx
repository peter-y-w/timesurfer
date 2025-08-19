import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./TimerCard.module.css";
import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState, type RefObject } from "react";
import { formatSecondsToHHMMSS } from "../utils";

const stopTimer = (ref: RefObject<number | null>) => {
    if (ref.current) clearInterval(ref.current);
};

const TimerCard = () => {
    const [focusTime, setFocusTime] = useState(0);
    const [restTime, setRestTime] = useState(0);
    const [isFocusing, setIsFocusing] = useState(false);
    const [isResting, setIsResting] = useState(false);
    const focusIntervalRef = useRef<number>(null);
    const restIntervalRef = useRef<number>(null);

    useEffect(() => {
        if (isFocusing) {
            focusIntervalRef.current = setInterval(() => {
                setFocusTime((prev) => prev + 1);
            }, 1000);
            restIntervalRef.current = setInterval(() => {
                setRestTime((prev) => prev + 1);
            }, 5000);
        } else {
            stopTimer(focusIntervalRef);
            stopTimer(restIntervalRef);
        }

        return () => {
            stopTimer(focusIntervalRef);
            stopTimer(restIntervalRef);
        };
    }, [isFocusing]);

    useEffect(() => {
        if (isResting) {
            setIsFocusing(false);
            restIntervalRef.current = setInterval(() => {
                setRestTime((prev) => {
                    if (prev === 0) return 0;
                    return prev - 1;
                });
            }, 1000);
        } else {
            stopTimer(restIntervalRef);
        }

        return () => {
            stopTimer(restIntervalRef);
        };
    }, [isResting]);

    const toggleFocusing = () => setIsFocusing((prev) => !prev);
    const toggleResting = () => setIsResting((prev) => !prev);

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
                    <Typography sx={{ color: "darkred" }}>Focused time:</Typography>
                    <Typography className={styles.timerDisplay} variant="h1" sx={{ fontFamily: "math" }}>
                        {formatSecondsToHHMMSS(focusTime)}
                    </Typography>

                    <Typography sx={{ color: "darkred" }}>You should rest for:</Typography>
                    <Typography className={styles.timerDisplay} variant="h2" sx={{ fontFamily: "math" }}>
                        {formatSecondsToHHMMSS(restTime)}
                    </Typography>
                    <Button sx={{ color: "darkred" }} onClick={toggleFocusing}>
                        {isFocusing ? "Pause Focus" : "Start Focus"}
                    </Button>
                    <Button sx={{ color: "darkblue" }} onClick={toggleResting}>
                        {isResting ? "Pause Rest" : "Start Rest"}
                    </Button>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default TimerCard;
