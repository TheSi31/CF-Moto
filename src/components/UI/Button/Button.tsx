import styles from './Button.module.css';

type ButtonProps = {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: () => void;
    outline?: boolean;
}

const Button = ({ text, type, className, outline, onClick }: ButtonProps) => {

    return (
        <button type={type} className={(outline ? styles.outline : '') + ' ' + styles.button + ' ' + className} onClick={onClick}>{text}</button>
    );
}

export default Button;