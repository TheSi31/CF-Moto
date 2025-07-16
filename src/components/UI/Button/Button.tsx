import styles from './Button.module.css';

type ButtonProps = {
    text: string;
    className?: string;
    onClick?: () => void;
    outline?: boolean;
}

const Button = ({ text, className, outline, onClick }: ButtonProps) => {

    return (
        <button className={(outline ? styles.outline : '') + ' ' + styles.button + ' ' + className} onClick={onClick}>{text}</button>
    );
}

export default Button;