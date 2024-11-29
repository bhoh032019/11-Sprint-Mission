import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import axiosInstance from '@lib/axiosInstance';

// User 타입 정의
interface User {
  id: number;
  nickname: string;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
  email: string;
}

// AuthContext 데이터 타입 정의
interface AuthContextType {
  user: User | null;
  isPending: boolean;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  updateMe: (formData: Partial<User>) => Promise<void>;
}

// 기본 AuthContext 값 정의
const AuthContext = createContext<AuthContextType>({
  user: null,
  isPending: true,
  login: async () => {},
  logout: () => {},
  updateMe: async () => {},
});

// AuthProvider Props 타입 정의
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [values, setValues] = useState<{
    user: User | null;
    isPending: boolean;
  }>({
    user: null,
    isPending: true,
  });

  async function getMe() {
    setValues((prevValues) => ({
      ...prevValues,
      isPending: true,
    }));

    let nextUser: User | null = null;
    try {
      const res = await axiosInstance.get<User>('/users/me');
      nextUser = res.data;
    } finally {
      setValues((prevValues) => ({
        ...prevValues,
        user: nextUser,
        isPending: false,
      }));
    }
  }

  async function login(credentials: { email: string; password: string }) {
    try {
      const res = await axiosInstance.post<{
        user: User;
        accessToken: string;
        refreshToken: string;
      }>('/auth/signIn', credentials);

      const { user, accessToken, refreshToken } = res.data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      setValues((prevValues) => ({
        ...prevValues,
        user,
      }));
      console.log('로그인 성공');
    } catch (error) {
      console.error('로그인 실패:', error);
      throw new Error('로그인에 실패했습니다.');
    }
  }

  async function updateMe(formData: Partial<User>) {
    const res = await axiosInstance.patch<User>('/users/me', formData);
    const nextUser = res.data;

    setValues((prevValues) => ({
      ...prevValues,
      user: nextUser,
    }));
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: values.user,
        isPending: values.isPending,
        login,
        logout: () => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          setValues({ user: null, isPending: false });
        },
        updateMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// useAuth 훅 타입 정의
export function useAuth(required?: boolean) {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('반드시 AuthProvider 안에서 사용해야 합니다.');
  }

  useEffect(() => {
    if (required && !context.user && !context.isPending) {
    }
  }, [context.user, context.isPending, required]);

  return context;
}
