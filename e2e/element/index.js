// {
//     strategy: ['text', 'id', 'trait'],
//     matcher: 'testids.components.card',
//     withAncestor: ['header container', 'page container'],
//     withDescendent: ['navigator--selected'],
//     testIDSuffix: ['list of options', 'like an index value', 'or maybe a title', 'can be used for context']
// }

// Read these options that were passed
// Generate an element

module.exports = detoxElement => {
  if (!detoxElement.strategy || !detoxElement.matcher) {
    console.log("Error, need strategy and matcher");
    return;
  }
  switch (detoxElement.strategy) {
    case "id": {
      return element(by.id(detoxElement.matcher));
    }
    case "text": {
      return element(by.text(detoxElement.matcher));
    }
    case "label": {
      return element(by.label(detoxElement.matcher));
    }
    case "type": {
      return element(by.label(detoxElement.matcher));
    }
    case "traits": {
      return element(by.label(detoxElement.matcher));
    }
    default: {
      throw new Error("Unknown strategy type");
    }
  }
};
