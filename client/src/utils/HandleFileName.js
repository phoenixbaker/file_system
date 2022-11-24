function handleName(name) {
  return name.split(".")[0].slice(0, 12) + "...";
}

export default handleName;
