// Read these options that were passed
// Generate an element

module.exports = detoxElement => {
  if (!detoxElement.strategy || !detoxElement.matcher) {
    console.log("Error, need strategy and matcher");
    return;
  }

  const getMatcher = ({ strategy, matcher }) => {
    switch (strategy) {
      case "id": {
        return by.id(matcher);
      }
      case "text": {
        return by.text(matcher);
      }
      case "label": {
        return by.label(matcher);
      }
      case "type": {
        return by.label(matcher);
      }
      case "traits": {
        return by.label(matcher);
      }
      default: {
        throw new Error("Unknown strategy type");
      }
    }
  };

  this.baseStrategy = getMatcher(detoxElement);

  // Chain element additions
  if (detoxElement.options) {
    detoxElement.options.map(option => {
      switch (option.command) {
        case "withAncestor": {
          this.baseStrategy = this.baseStrategy.withAncestor(
            getMatcher(option.element)
          );
          break;
        }
        case "withDescendant": {
          this.baseStrategy = this.baseStrategy.withDescendant(
            getMatcher(option.element)
          );
          break;
        }
        case "and": {
          this.baseStrategy = this.baseStrategy.and(getMatcher(option.element));
          break;
        }
        default: {
          throw new Error("Unknown chaining type");
        }
      }
    });
  }

  return element(this.baseStrategy);
};
