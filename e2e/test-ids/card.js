export default {
  container: "Card Container",
  item: {
    container: index => `Card Link Container ${index}`,
    button: status => `${status} Button`,
    linkText: "Card Link Text"
  }
};
