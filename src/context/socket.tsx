import React, { useMemo, createContext, ReactNode, ReactElement, useContext } from "react";
import { io, Socket } from "socket.io-client";

interface SocketContextType {
  socket: Socket | null;
}

const SocketContext = createContext<SocketContextType | null>(null);

interface SocketProviderProps {
  children: ReactNode;
}

export const useSocket=()=>{
    return useContext(SocketContext)
}

export const SocketProvider = ({
  children,
}: SocketProviderProps): ReactElement => {
  const socket = useMemo(
    () => io("http://localhost:8001"), []
  );

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
