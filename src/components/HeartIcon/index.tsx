interface HeartIconProps extends React.SVGProps<SVGSVGElement> {
    isActive?: boolean;
}

export const HeartIcon: React.FC<HeartIconProps> = ({ isActive = false, className = "", ...props }) => {
    return (
        <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            xmlns="http://w3.org"
            className={`transition-colors duration-200 ${
                isActive
                    ? "stroke-red-500 fill-red-500"
                    : "stroke-gray-400 fill-transparent"
            } ${className}`}
            {...props}
        >
            <path 
                d="M13.2177 2.375C11.5995 2.375 10.2022 3.32262 9.49999 4.70487C8.79779 3.32262 7.40049 2.375 5.78233 2.375C3.46274 2.375 1.58333 4.32013 1.58333 6.71413C1.58333 9.10813 3.02179 11.3026 4.88062 13.1053C6.73945 14.9079 9.49999 16.625 9.49999 16.625C9.49999 16.625 12.1711 14.9364 14.1194 13.1053C16.1975 11.153 17.4167 9.11525 17.4167 6.71413C17.4167 4.313 15.5372 2.375 13.2177 2.375Z" stroke="#B0B0B0" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    )
}