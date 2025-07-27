export type FormProps = {
    name: string,
    phone: string
}

export type ModalProps = {
    active: boolean, 
    setActive: (active: boolean) => void
};