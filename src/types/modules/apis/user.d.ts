// CheckUserName 接口 请求
export interface RequestCheckUserName {
  userName: string;
}

// Register 接口 请求
export interface RequestRegister {
  userName: string;
  password: string;
}

// Login 接口 请求
export interface RequestLogin {
  userName: string;
  password: string;
}

// Login 接口 响应
export interface ResponseLogin {
  token: string;
  loginTime: string;
}
