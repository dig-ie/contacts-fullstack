export interface ContactProps {
    photo?: string;
    name: string;
    number: string;
    buttonText?: string;
    onClick1: React.MouseEventHandler<HTMLButtonElement>;
    onClick2: React.MouseEventHandler<HTMLButtonElement>;
    deletingContact?: string | undefined;
    key: string;
    onCheckboxChange: (id: string, isChecked: boolean) => void;
}

export interface ContactContainerProps {
    isChecked: boolean;
}

