import PropTypes from "prop-types"

function Button({ label, backgroundColor = "red", size = "md", handleClick, borderSize }) {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius: `${borderSize}px`
  }
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  )
}

Button.propTypes = {
  /** Change the string content*/
  label: PropTypes.string,
  /** Put JSDoc comment just above label properties inside the Button COMPONENT (not the story)*/
  backgroundColor: PropTypes.string,
  /** Change the button size */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
  borderRadius: PropTypes.number,
}


export default Button;
