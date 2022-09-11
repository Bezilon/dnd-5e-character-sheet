class Cookie {
  static set = (name, value, maxAge) => document.cookie = `${name}=${value}; ${Cookie.getOptions(maxAge)}`;
  
  static get = (name) => {
    const match = document.cookie.match(new RegExp(`${name}=([^;]*);?`));
  
    if(!!match) {
      const cookieValue = match[1];
  
      return cookieValue;
    }
  
    return null;
  }
  
  static remove = (name) => Cookie.set(name, '', -1);

  static getOptions = (maxAge = null) => {
    let cookieOptions = {
      'max-age': !!maxAge ? maxAge : 60 * 60 * 24 * 3,
      sameSite: 'strict',
      path: '/'
    };
  
    let cookieOptionsString = '';
    Object.keys(cookieOptions).forEach(key => cookieOptionsString += `${key}=${cookieOptions[key]};`);
  
    return cookieOptionsString;
  }
}

export default Cookie;
