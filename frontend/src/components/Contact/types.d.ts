export interface ContactProps {
    photo?: string;
    name: string;
    number: string;
    buttonText?: string;
    onClick1: React.MouseEventHandler<HTMLButtonElement>;
    onClick2: React.MouseEventHandler<HTMLButtonElement>;
    deletingContact?: string | undefined;
}

export interface ContactContainerProps {
    isChecked: boolean;
}