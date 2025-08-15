// AuthProvider.tsx
import React, {
    useEffect,
    useState,
    type Dispatch,
    type ReactNode,
    type SetStateAction
} from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User, type UserCredential } from "firebase/auth";
import { AuthContext } from "./Context";
import auth from "../firebase/firebase.init";

// Context value type
export interface AuthContextType {
    user: User | null;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    logoutUser: () => Promise<void>;
    setUser: Dispatch<SetStateAction<User | null>>;
    googleLogin: () => Promise<UserCredential>;
}

// Props for provider
interface AuthProviderProps {
    children: ReactNode;
}

// Create context with type

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = (): Promise<UserCredential> => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const authInfo: AuthContextType = {
        user,
        loading,
        setLoading,
        logoutUser,
        setUser,
        googleLogin
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
