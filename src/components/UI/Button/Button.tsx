import styles from './Button.module.css';

type ButtonProps = {
    text: string;
    className?: string;
    onClick?: () => void;
    outline?: boolean;
}

const Button = ({ text, className, outline }: ButtonProps) => {

    return (
        <button className={(outline ? styles.outline : '') + ' ' + styles.button + ' ' + className} >{text}</button>
    );
}

export default Button;