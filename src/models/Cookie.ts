type CookieOptions = {
  'max-age': number,
  sameSite: string,
  path: string
}

export default class Cookie {
  public static set(name: string, value: any, maxAge: number): void { 
    document.cookie = `${name}=${value}; ${Cookie.getOptions(maxAge)}`;
  }
  
  public static get(name: string): string|null {
    const match = document.cookie.match(new RegExp(`${name}=([^;]*);?`));
  
    if(!!match) {
      const cookieValue = match[1];
  
      return cookieValue;
    }
  
    return null;
  }
  
  public static remove(name: string): void {
    Cookie.set(name, '', -1);
  }

  public static getOptions(maxAge: number|null = null): string {
    let cookieOptions: CookieOptions = {
      'max-age': !!maxAge ? maxAge : 60 * 60 * 24 * 3,
      sameSite: 'strict',
      path: '/'
    };
  
    let cookieOptionsString = '';
    Object.keys(cookieOptions).forEach(key => cookieOptionsString += `${key}=${cookieOptions[key as keyof typeof cookieOptions]};`);
  
    return cookieOptionsString;
  }
}
