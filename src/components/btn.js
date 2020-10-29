import { Button, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  btn: {
    padding: "16px 50px",
    backgroundColor: "#FF4C00",
    color: "#ffffff",
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "#dd2c00",
    },
  },
}))

function ButtonComponent({ className, title, ...rest }) {
  const classes = useStyles()
  return (
    <Button className={clsx(classes.btn, className)} {...rest}>
      <Typography variant="h5">{title}</Typography>
    </Button>
  )
}

ButtonComponent.propTypes = {
  title: PropTypes.string,
}

export default ButtonComponent
