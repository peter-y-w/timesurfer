import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styles from "./TimerCard.module.css";

const TimerCard = () => {
    return (
        <Card className={styles.timerCard} elevation={0}>
            <CardContent></CardContent>
        </Card>
    );
};

export default TimerCard;
