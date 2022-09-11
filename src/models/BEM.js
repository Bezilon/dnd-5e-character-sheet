/** Block Element Modifier helper class. USing the composeClass() function you can easily generate a BEM standard class name */
class BEM {
  /**
   * This function generates the BEM standard class
   * @param {string} b The name of the block
   * @param {string} e The name of the element, or you can pass the modifier list as a string Array
   * @param {Array<string>} m The list of modifiers
   * 
   * @returns {string} The composed class in the format of "block_element block__element--modifier1 block__element--modifier2 ..."
   */
  static composeClass(b, e, m = null) {
    // Handle the functon overload case where only the block and its modifiers are set
    if(Array.isArray(e)) {
      m = [...e];
      e = null;
    }

    const block = b;
    const element = e;
    
    // Check wether the modifiers are an array and make the conversion if neccessary
    const modifiers = !m ? [] : (!Array.isArray(m) ? [m] : m);

    // Make the base class
    const baseClass = `${block}${element ? `__${element}` : ''}`;

    // Start the class names array with the base class
    const bemClassNames = [baseClass];

    // Add the modifiers to the bas class
    modifiers.forEach(modifier => bemClassNames.push(`${baseClass}--${modifier}`));

    // Return all the classes as a white space separated string
    return bemClassNames.join(' ');
  }
}

export default BEM
