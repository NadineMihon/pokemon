interface ContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <div className="max-w-350 w-full mx-auto">{children}</div>    
    )   
};