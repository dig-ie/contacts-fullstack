export interface ModalFormProps {
    fecharModal: () => void;
    primaryBtnColor: React.CSSProperties['color'];
    closeBtnColor: React.CSSProperties['color'];
    formType: string;
    editingContact?: string;
}