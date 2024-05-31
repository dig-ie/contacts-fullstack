export interface ModalFormProps {
    saveButtonFunction: () => any;
    closeButtonFunction: () => void;
    primaryBtnColor: React.CSSProperties['color'];
    closeBtnColor: React.CSSProperties['color'];
    formType: string;
    editingContact?: string;
    nameInputValue?: string;
    numberInputValue?: string;
    nameInputOnchange?: (any) => void;
    numberInputOnchange?: (any) => void;
}