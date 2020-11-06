import {
  FormControl,
  makeStyles,
  Paper,
  Typography,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio,
  withStyles,
  Divider,
} from "@material-ui/core"
import React from "react"
import Btn from "../btn"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0px 120px 40px 80px",
    color: "#000",
  },
  lists: {
    marginBottom: "16px",
    fontWeight: 500,
    fontSize: "12px",
  },
  btn: {
    padding: "8px 20px",
    marginTop: theme.spacing(3),
  },
  label: {
    marginBottom: "16px",
    "& .MuiTypography-body1": {
      fontSize: "12px",
    },
  },
}))

const GreenRadio = withStyles({
  root: {
    height: "12px",
    fontSize: "12px",
    color: "#FF4C00",
    "&$checked": {
      color: "#FF4C00",
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />)

export default function Filter() {
  const classes = useStyles()
  const [value, setValue] = React.useState("female")

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="h2" style={{ marginBottom: "30px" }}>
        Filter
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="cost"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="paid"
            control={<GreenRadio />}
            label="Paid"
            className={classes.label}
          />
          <FormControlLabel
            value="free"
            control={<GreenRadio />}
            label="Free"
            className={classes.label}
          />
        </RadioGroup>
      </FormControl>
      <Divider />
      <Typography
        variant="h6"
        style={{ fontWeight: 700, margin: "16px 0px" }}
        color="primary"
      >
        Machine Learning
      </Typography>
      <Typography className={classes.lists}>Data Structures</Typography>
      <Typography className={classes.lists}>Web Development</Typography>
      <Typography className={classes.lists}>Android Development</Typography>
      <Typography className={classes.lists}>Designing</Typography>
      <Divider />
      <Typography
        variant="h6"
        style={{ fontWeight: 700, margin: "16px 0px" }}
        color="primary"
      >
        This Week
      </Typography>
      <Typography className={classes.lists}>This Month</Typography>
      <Typography className={classes.lists}>Next Month</Typography>
      <Btn className={classes.btn} title="Reset Filters" />
    </Paper>
  )
}
