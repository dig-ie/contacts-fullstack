export interface PrimaryButtonProps {
    buttonText: string;
    onClick: () => (any);
    closeBtnbackgroundColor?: React.CSSProperties['color'];
    color: React.CSSProperties['color'];
    disableHover: boolean;
}

export interface StyledPrimaryButtonProps {
    onClick: () => (any);
    color: string;
    disableHover: boolean;
    children?: React.ReactNode;
}