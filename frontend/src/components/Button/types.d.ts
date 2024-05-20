export interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    editButtonIcon: string;
    color: React.CSSProperties['color'];
    children?: React.ReactNode;
}