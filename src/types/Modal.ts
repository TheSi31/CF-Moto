export type ModalProps = {
    active: boolean;
    setActive: (active: boolean) => void;
    className?: string;
    children?: React.ReactNode;
}