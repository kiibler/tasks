interface Props {
    children?: React.ReactNode;
}

const Header = ({ children }: Props) => {
    return (
        <header className="flex items-center justify-between border-b border-gray-400 bg-gray-100 p-2 dark:border-gray-600 dark:bg-gray-900">
            {children}
        </header>
    );
};

export default Header;
